# WebLayout_pratice

***
## ch11: 方塊酥版面
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch11/image/demo.gif)

* **練習內容**
  * 做出具有方塊酥版面的網頁頁面

* **回答問題**
  * float 浮動教學
  * 波浪符選取器教學
  * RGB 網頁色彩教學
  * relative 定位教學
  * absolute 定位教學
 
***
### 1. float 浮動教學
***

>真實的專案當中需要維護舊有的技術，因此需要學習float

**float主要用在文繞圖，多欄板面的編排**

**float 是立體概念**

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch11/image/float.jpg)

>左邊的圖，可以看到body裡面有img和p兩個標籤，將img做float:left之後，img是做**向上浮動**而p填補了原本img占的位置，這在平面上看不出來，因此，float具有立體概念。

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch11/image/float-1.jpg)


float只有靠左和靠右

> float: left; 

> float: right;

**子物件設定float，父層找不到子物件的高度**

**float會排排站**

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch11/image/float-2.jpg)

> **解決上面的問題**

可以在原本最後的一個子物件後面，增加一個子物件

父層是被clear-block拉開的，而不是被內容物件的flaot撐開，clear-block閃開浮動物件，跑到所有浮動物件後方

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch11/image/float-3.jpg)

***
### 2. 波浪符選取器教學
***

***
### 3. RGB 網頁色彩教學
***

***
### 4. relative 定位教學
***

***
### 5. absolute 定位教學
***