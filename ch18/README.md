# WebLayout_pratice

***
## ch18: 登入表單
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch18/demo.jpg)

* **練習內容**
  * 做出具有登入表單的網頁頁面

* **回答問題**
   * flex 教學
   * backdrop-filter 濾鏡效果


***
### 1. flex 教學
***

**請參考 [flex 學習筆記](https://github.com/JohnnyOfSnow/WebLayout_pratice/tree/master/flex)**


***
### 2. backdrop-filter 濾鏡效果
***

可以做出表面有點粗糙的毛玻璃效果，例如此範例中登入表單，裡面可以看到背景圖片但有點模糊。

```
.login{
	background-color: rgba(0,0,0,.5);
	backdrop-filter: blur(5px);
}
```

> 利用rgba的a做出有點透明，然後濾鏡屬性給予5px的模糊

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch18/backdrop.jpg)

但是，這個效果會吃效能，然後有些瀏覽器不支援，使用前要注意用戶需求。

