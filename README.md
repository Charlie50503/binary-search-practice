# 什麼是Binary Search

<div>
<ul>    
<li>
    <h5>前言</h5>
</li>
</ul>
</div>

最近在學*binary search* 順便把它做成筆記

*binary search* 是一個二分搜尋演算法

**主要用於已經排序過的數字陣列**

能夠使用*binary search*的前提條件就是

<u>由小排到大的數字</u>

如果陣列是亂序排列，就無法使用*binary search*

想要使用*binary search* 就必須要先排列，但排列的話反而會花太多時間在排列上，導致效能低下，還不如使用線性搜尋(*Linear Search*)

<div>
<ul>
    <li>
    <h5>
    那麼什麼是binary search呢?
</h5>
</li>
</ul>
</div>

主要就是運用折半搜尋法，來提高搜尋速度

一般的搜尋方式大多是採用線性搜尋，也就是依據[1,2,3,4,5]由左至右的一個一個查找。

這樣的搜尋方式在陣列不大的情況下，並不會有太大的差異

所需花費時間是**O(N)**，O可以看成程式執行一個查詢所需的時間，N為陣列的長度

如果陣列越長，可想而知，查詢的時間也是越長

但如果使用*binary search*就能夠將所需時間減少到**O(logN)**，為什麼這樣說呢

因為*binary search*運用的折半搜尋法，有辦法達到這種效果。

<div>
<hr>
</div>

首先我們假設一個陣列[1,2,4,6,8,10]

![](C:\Users\cate5\AppData\Roaming\marktext\images\2020-09-13-13-28-23-image.png)

我們需要查詢**4**在哪裡

![](C:\Users\cate5\AppData\Roaming\marktext\images\2020-09-13-13-32-39-image.png)

如果使用二元搜尋

<img src="file:///C:/Users/cate5/AppData/Roaming/marktext/images/2020-09-13-13-58-19-image.png" title="" alt="" width="522">

![](C:\Users\cate5\AppData\Roaming\marktext\images\2020-09-13-13-58-34-image.png)

<img src="file:///C:/Users/cate5/AppData/Roaming/marktext/images/2020-09-13-14-02-16-image.png" title="" alt="" width="480">

以此類推，利用判斷中間值跟目標的大小來做到更快速的搜尋

假設陣列長度為10，最多所需執行次數是

<div>
 <ol>
    <li>
    (0+9) / 2 = 4.5 取整數為4
</li>
<li>4 / 2 = 2</li>
<li>2 / 2 = 1</li>
</ol>
</div>

我們也可以這樣解釋，因為每次都是取半，所以只要 一直除以2就行了

也就是說2的N次方大於我們的陣列，就能夠得到結果

所以實際所需時間為[一次執行的時間 X (2 log N)] N:陣列大小



最後我們如何判斷數字執行到最後都沒有比較到呢

**當陣列的終點位置大於或等於起點的時候就表示我們搜尋完了**

這時候我們就能回傳 -1 代表沒有找到

<div>
<ul>
    <li><h5>結論</h5></li>
</ul>
</div>

觀念其實不會很難，但問題是要怎麼把方法實現。

[參考影片](https://www.youtube.com/watch?v=6pK7E8abp6g&t=2803s)


