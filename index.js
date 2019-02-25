const PromisePool = require('promise-pool-executor');
const fs = require('fs');
const path = require('path');
const stream = require('stream');
const AWS = require('aws-sdk');
const _ = require('lodash');

const s3Conf = {
	...require('./secret.json'),
	acl: 'public-read',
};

async function saveToFileSystem(fileStream, index) {
	return await new Promise((resolve, reject) => {
		const dir = path.dirname('/tmp/' + index + '.jpg');
		fs.mkdirSync(dir, {
			recursive: true,
		});
		const writeStream = fs.createWriteStream('/tmp/' + path);
		stream.pipeline(
				fileStream,
				writeStream,
				(error) => {
					if (error) {
						reject(error);
					} else {
						resolve({
							size: -1, // unknown size
							hash: 'hash', // unknown hash
						});
					}
				},
		);
	});
}

async function saveToS3(fileStream, index) {
	return await new Promise((resolve, reject) => {
		const s3 = new AWS.S3();
		fileStream.on('error', (err) => {
			this.logger.error(`Error while sending to S3`, { path });
			reject(err);
		});

		const params = {
			Bucket: s3Conf.bucketName,
			ACL: s3Conf.acl,
			Key: 'mem-test/' + index + '.jpg',
			ContentType: 'image/jpeg',
			Body: fileStream,
		};

		const managedUpload = s3.upload(params, {
			queueSize: 1,
			partSize: 5 * 1024 * 1024,
		});
		let size = 0;

		managedUpload.on('httpUploadProgress', (progress) => {
			// console.log(`-- upload progress  --`, progress);
			if (progress.total) size = progress.total;
		});

		managedUpload.send((err, data) => {
			if (err) reject(err);
			else resolve({ size, hash: data.ETag.replace(/[^a-z0-9A-Z]/g, '') });
		});
	});
}

async function launchUpload(storageType) {
	const pool = new PromisePool.PromisePoolExecutor({
		concurrencyLimit: 100,
	});

	console.log(`--------------------------------`);
	console.log(`Start upload to ${storageType} !`);
	console.log(`--------------------------------`);
	await pool.addEachTask({
		data: Array(100),
		generator: async (v, index) => {
			const fileStream = fs.createReadStream('media-sample.jpg');

			let uploadResult;
			if (storageType === 'fs') uploadResult = await saveToFileSystem(fileStream);
			else if (storageType === 's3') uploadResult = await saveToS3(fileStream);
			else throw new Error('unknown-storage-type');

			// printRAMUsage();
			// console.log(`DONE ${index} size: ${uploadResult.size} hash : ${uploadResult.hash}`);

		}
	}).promise();


	console.log(`END upload to ${storageType} !`);
}


function printRAMUsage() {
	const memoryUsage = _.mapValues(process.memoryUsage(), (v) => (Math.round((v * 10) / (1024 * 1024)) / 10).toLocaleString().padStart(7));
	console.log(`RAM usage :`, `Heap : ${memoryUsage.heapUsed}/${memoryUsage.heapTotal} Mo rss : ${memoryUsage.rss} Mo external : ${memoryUsage.external} Mo`);
}

(async () => {
	setInterval(printRAMUsage, 500);

	AWS.config.update({
		accessKeyId: s3Conf.accessKeyId,
		secretAccessKey: s3Conf.secretAccessKey
	});
	printRAMUsage();
	await launchUpload('fs');
	printRAMUsage();
	await launchUpload('s3');
	printRAMUsage();
})()
		.then(() => {
			console.log(`DONE`);
			process.exit(0);
		})
		.catch((error) => console.log(`END WITH ERROR `, error));