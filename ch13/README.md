# WebLayout_pratice

***
## ch13: 表格怎麼切
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch13/image/ch13demo.jpg)

* **練習內容**
  * 做出具有表格的網頁頁面

* **回答問題**
  * flex 教學
  * :nth-child(n)選取器
  * caption 標籤

***
### 1. flex 教學
***

**請參考 [flex 學習筆記](https://github.com/JohnnyOfSnow/WebLayout_pratice/tree/master/flex)**


***
### 2. :nth-child(n)選取器
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch13/image/n-th.jpg)

***
### 3. caption 標籤
***

caption 定義表格標題，是建立無障礙網站需要提供的摘要說明

> 視障者即使透過語音合成器或點字閱讀機的輔助，也不易閱讀以表格表達的網頁資訊。故如果必頇使用表格表達網頁資訊時，不僅要提供表格標題與摘要說明，也必頇同時對此表格內容提供摘要及結構說明。

```java
//正確範例
<TABLE title="台灣各主要城市氣溫與紫外線溫度">
	<CAPTION>台灣各主要城市氣溫與紫外線溫度</CAPTION>
</TABLE>
```

```java
//正確範例
<TABLE summary="明天台灣北中南地區的天氣氣溫偏高，各地溫度約在30 至 35 度之間。表格中共分三直行，第一行列出台灣主要城市地名，第二、三行各為該城市的氣溫與紫外線指數。">
	<CAPTION>台灣各主要城市氣溫與紫外線強度 </CAPTION>
 	—表格欄位的 HTML 編碼省略—
</TABLE> 
```

* **[無障礙網頁設計技術手冊](http://www.cntgreen.com/files/pdf/25.pdf)**





