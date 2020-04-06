# WebLayout_pratice

***
## ch14: 側邊選單
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch14/image/ch14demo.gif)

* **練習內容**
  * 做出具有側邊選單的網頁頁面

* **回答問題**
  * flex 教學
  * ::before & ::after 無中生有的僞元素選取器
  * 加號選取器之連接號選取器
  * box-sizing教學
  * relative 相對定位教學
  * absolute 絕對定位教學

***
### 1. flex 教學
***

**請參考 [flex 學習筆記](https://github.com/JohnnyOfSnow/WebLayout_pratice/tree/master/flex)**


***
### 2. ::before & ::after 無中生有的僞元素選取器
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch14/image/before_after.jpg)

**::before / ::after 一定要有conten屬性，否則不存在**

***
content可以填入(比較常用的)

> content: normal     //預設不產生僞元素

> content: none       //不產生僞元素

> content: 'prefix'   //可以放字串 

> content: url()      //可以放圖片
 
> content: chapter_counter   //可以計數

> content: attr(value string)   //可以取得html屬性的值


content 計數範例

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch14/image/content_counter.jpg)

content attr範例

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch14/image/content_attr.jpg)


***
### 3. 加號選取器之連接號選取器
***

**+ 加號選取器(Adjacent sibling combinator)**

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch14/image/ASC.jpg)

**~ 連接號選取器(General sibling combinator)**

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch14/image/GSC.jpg)




***
### 4. box-sizing教學
***

***
### 5. relative 相對定位教學
***

**請參考 [ch02: 製作一個互動圖文卡片 裡面的CSS relative 相對定位與範例](https://github.com/JohnnyOfSnow/WebLayout_pratice/tree/master/ch02)**

***
### 6. absolute 絕對定位教學
***

**請參考 [ch2: 製作一個互動圖文卡片 裡面的CSS absolute 絕對定位與範例](https://github.com/JohnnyOfSnow/WebLayout_pratice/tree/master/ch02)**




