# WebLayout_pratice

***
## ch6: 超通用橫式版面
***

* **練習內容**
  * 思考ch1-ch5的版面做法與原理

***
### 筆記
***

**ch6_ex.html**

flex預設不換行，即使子物件寬高超過父物件寬高也一樣

``我們可以利用這個特性，讓內容大小不同的子物件等高與等寬``

flex-wrap: wrap; 

它能強迫flex的子物件換行，否則flex預設不換行


**ch6_ex3.html**

::before

1.一定搭配content使用，因為沒有content就沒有before

2.before的content會在區塊內容的**前方**

::after

1.一定搭配content使用，因為沒有content就沒有after

2.before的content會在區塊內容的**後方**

**ch6_ex4.html**