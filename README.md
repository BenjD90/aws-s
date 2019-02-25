# aws-s3-ram-overconsumption

## Install and run :
 * `yarn install`
 * `node ./index.js`

## LOG output sample
 
 ```
 RAM usage : Heap :    12.9/   23.3 Mo rss :    54.8 Mo external :       0 Mo
--------------------------------
Start upload to fs !
--------------------------------
RAM usage : Heap :    12.7/   31.8 Mo rss :   164.7 Mo external :      50 Mo
RAM usage : Heap :    14.2/   32.3 Mo rss :   187.5 Mo external :    42.2 Mo
END upload to fs !
RAM usage : Heap :    16.4/   48.3 Mo rss :   188.1 Mo external :    45.7 Mo
--------------------------------
Start upload to s3 !
--------------------------------
RAM usage : Heap :    14.7/   52.3 Mo rss :   1,580 Mo external : 2,102.9 Mo
RAM usage : Heap :      24/   52.3 Mo rss :   1,580 Mo external : 2,103.1 Mo
RAM usage : Heap :    29.6/   52.3 Mo rss : 1,582.7 Mo external : 2,103.3 Mo
RAM usage : Heap :    29.4/   52.3 Mo rss : 1,590.5 Mo external :   2,106 Mo
RAM usage : Heap :    28.8/   52.3 Mo rss :   1,593 Mo external : 2,103.1 Mo
RAM usage : Heap :    14.7/   52.8 Mo rss : 1,646.8 Mo external : 2,221.4 Mo
RAM usage : Heap :      15/   52.8 Mo rss :   1,647 Mo external : 2,199.3 Mo
RAM usage : Heap :    15.2/   52.8 Mo rss : 1,647.3 Mo external : 2,179.3 Mo
RAM usage : Heap :    15.4/   52.8 Mo rss : 1,647.3 Mo external :   2,156 Mo
RAM usage : Heap :    16.4/   52.8 Mo rss :   1,655 Mo external : 2,161.1 Mo
RAM usage : Heap :      17/   52.8 Mo rss : 1,655.3 Mo external : 2,156.8 Mo
RAM usage : Heap :    15.1/   53.3 Mo rss : 1,551.9 Mo external : 2,142.4 Mo
RAM usage : Heap :    15.2/   53.3 Mo rss : 1,534.7 Mo external : 2,129.2 Mo
RAM usage : Heap :    15.1/   53.3 Mo rss : 1,505.5 Mo external : 2,109.3 Mo
RAM usage : Heap :    15.4/   53.3 Mo rss : 1,505.5 Mo external : 2,087.6 Mo
RAM usage : Heap :    15.6/   53.3 Mo rss : 1,505.5 Mo external : 2,065.6 Mo
RAM usage : Heap :    15.9/   53.3 Mo rss : 1,505.5 Mo external : 2,048.5 Mo
RAM usage : Heap :    16.1/   53.3 Mo rss : 1,505.5 Mo external : 2,026.6 Mo
RAM usage : Heap :    16.5/   53.3 Mo rss : 1,509.4 Mo external : 2,013.1 Mo
RAM usage : Heap :    17.2/   53.3 Mo rss : 1,509.4 Mo external : 2,009.4 Mo
RAM usage : Heap :    14.9/   53.3 Mo rss : 1,385.4 Mo external : 1,889.6 Mo
RAM usage : Heap :      15/   53.8 Mo rss : 1,318.9 Mo external :   1,894 Mo
RAM usage : Heap :    15.2/   53.8 Mo rss : 1,274.9 Mo external : 1,838.3 Mo
RAM usage : Heap :    14.9/   54.3 Mo rss : 1,118.2 Mo external : 1,717.2 Mo
RAM usage : Heap :      15/   54.3 Mo rss : 1,078.2 Mo external : 1,668.5 Mo
RAM usage : Heap :    15.4/   54.3 Mo rss :   1,031 Mo external :   1,628 Mo
RAM usage : Heap :    14.8/   54.3 Mo rss :   983.4 Mo external : 1,586.9 Mo
RAM usage : Heap :    15.1/   54.3 Mo rss :   983.4 Mo external : 1,565.8 Mo
RAM usage : Heap :    15.5/   54.3 Mo rss :     987 Mo external : 1,550.8 Mo
RAM usage : Heap :    16.1/   54.3 Mo rss :   994.7 Mo external : 1,545.1 Mo
RAM usage : Heap :    17.2/   54.3 Mo rss :   998.5 Mo external : 1,534.3 Mo
RAM usage : Heap :    14.7/   54.3 Mo rss :   924.5 Mo external : 1,476.9 Mo
RAM usage : Heap :    14.9/   54.3 Mo rss :   859.5 Mo external : 1,378.5 Mo
RAM usage : Heap :      15/   54.3 Mo rss :   751.6 Mo external : 1,310.2 Mo
RAM usage : Heap :      15/   54.3 Mo rss :   712.6 Mo external : 1,267.7 Mo
RAM usage : Heap :    15.7/   54.3 Mo rss :   712.6 Mo external :   1,253 Mo
RAM usage : Heap :      16/   54.3 Mo rss :   712.6 Mo external : 1,231.3 Mo
RAM usage : Heap :    16.6/   54.3 Mo rss :   712.6 Mo external : 1,221.4 Mo
RAM usage : Heap :    17.5/   54.3 Mo rss :   712.6 Mo external : 1,210.4 Mo
RAM usage : Heap :    19.4/   54.3 Mo rss :   712.6 Mo external : 1,200.6 Mo
RAM usage : Heap :    14.4/   54.8 Mo rss :   687.5 Mo external :   1,110 Mo
RAM usage : Heap :      15/   54.8 Mo rss :   687.6 Mo external :   1,092 Mo
RAM usage : Heap :      20/   54.8 Mo rss :   687.8 Mo external :   1,068 Mo
RAM usage : Heap :    23.5/   54.8 Mo rss :   687.9 Mo external : 1,044.8 Mo
RAM usage : Heap :    25.9/   54.8 Mo rss :   687.9 Mo external : 1,022.2 Mo
RAM usage : Heap :    29.5/   54.8 Mo rss :     688 Mo external : 1,005.6 Mo
RAM usage : Heap :    18.1/   54.8 Mo rss :     688 Mo external :   969.8 Mo
RAM usage : Heap :    18.6/   54.8 Mo rss :     688 Mo external :   969.3 Mo
RAM usage : Heap :    18.6/   54.8 Mo rss :     688 Mo external :   969.3 Mo
RAM usage : Heap :    18.6/   54.8 Mo rss :     688 Mo external :   969.3 Mo
RAM usage : Heap :    18.6/   54.8 Mo rss :     688 Mo external :   969.3 Mo
RAM usage : Heap :    18.6/   54.8 Mo rss :     688 Mo external :   969.3 Mo
RAM usage : Heap :    18.6/   54.8 Mo rss :     688 Mo external :   969.3 Mo
END upload to s3 !
RAM usage : Heap :    18.7/   54.8 Mo rss :     688 Mo external :   969.4 Mo
DONE
```

![image](https://user-images.githubusercontent.com/8216338/53335976-3b0b7a00-38fd-11e9-8cd7-32f759f71933.png)

