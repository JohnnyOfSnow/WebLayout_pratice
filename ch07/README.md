# WebLayout_pratice

***
## ch07: 網頁頁尾版塊
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch07/image/ch7hw.jpg)

* **練習內容**
  * 做出具有網頁頁尾版塊的網頁頁面

* **回答問題**
  * 表單文字方塊、按鈕
  * 屬性選取器
  * 用遊戲學 Flex
  * flex-direction 的原理

***
### 1. 表單文字方塊、按鈕
***

**使用form標籤建立表單，裡面建立input標籤元素，依據給的type值不同，分成文字方塊及按鈕**

``如果給的是text，則是文字方塊。``

``如果給的是submit，則是按鈕(預計送出表單資料)。``

``按鈕當然可以用button標籤來寫，定義執行的動作也能達成上面說的事。``

```html
<form>
	<input type="text">
	<input type="submit" value"送出">
</form>
```

***
### 2. 屬性選取器
***

下面的範例，若是我們想選取文字方塊(input type="text")這個物件做CSS樣式時，我們可以用屬性選取器的方式選到它

```html
<div class="footer-item fotter-subs">
	<h4>訂閱電子報</h4>
	<form>
		<input type="text" class="">
		<input type="submit" name="" value="訂閱">
	</form>
</div>
```

``.fotter-subs input[type="text"]``

``這樣子就不用定義該文字方塊的class``

***
### 3. 表單文字方塊、按鈕
***

**請參考 [ch05: 超通用橫式版面 裡面的用遊戲學 Flex](https://github.com/JohnnyOfSnow/WebLayout_pratice/tree/master/ch05)**

***
### 4. flex-direction 的原理
***

**請參考 [flex 學習筆記](https://github.com/JohnnyOfSnow/WebLayout_pratice/tree/master/flex)**