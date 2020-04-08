# WebLayout_pratice

***
## ch16: 多層次收合選單
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch16/image/ch16demo.gif)

* **練習內容**
  * 做出具有多層次收合選單的網頁頁面

* **回答問題**
   * 直屬選取器
   * :checked 原理說明
   * 使用 absolute + margin auto 來達到CSS垂直置中效果


***
### 1. 直屬選取器
***

直屬選取器(Child combinator)是一個大於符號，該選取器作用只影響底下的一層。

```html
<div class="sakura">
	<div class="son-of-sakura">
		<div class="grandson-of-sakura"></div>
	</div>
</div>
```

```html
div {
	padding: 30px;
	background: #fff;
	border: 5px solid red;
}
.sakura > div {
	background: yellow;
}
```

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch16/image/childSelector.jpg)

上述例子中，son-of-sakura 的 div 物件會被塗成黃色，而 grandson-of-sakura 不會著色

***

由於直屬選取器只能選到下面一層，換言之，它很依賴html結構，只要結構一改變就會失效，也許會覺得很不方便，但在一些需要結構的情況下，它能夠避免CSS汙染發生。

CSS汙染：簡單說，就是你定義的CSS套用在不該作用的地方，例如：A物件套用了黃色背景，但B物件也套用了黃色背景，這個時候就會想寫個規則避免B物件套用，結果寫的規則又不小心套用到別的物件上。

因此，像直屬選取器有限定CSS scope(CSS作用域)，就防止了CSS汙染，當然，還有別的方法(前端框架)可以避免這種狀況發生。


***
### 2. :checked 原理說明
***

**範例一**

```html
<!DOCTYPE html>
<html>
<head>
	<title>::checked 偽類選取器範例</title>
	<style type="text/css">
		#box1:checked{
			transform: scale(2);
		}
	</style>
</head>
<body>
	<input type="checkbox" name="checkbox" id="box1">
	<label for="box1">點我就能打勾喔</label>
</body>
</html>
```

> label 的 for 屬性可以綁定元素，這裡是綁定id叫做box1的元素

> 當 box1 被打勾時，做變大兩倍

***
**範例二**

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch16/image/checked_ex2.gif)

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.list input[type="checkbox"]:checked + span{
			color: red;
		}
	</style>
</head>
<body>
	<form class="list">
		<h2>來日方長便當店</h2>
		<div class="list-item">
			<label>
				<input type="checkbox" name="" id="">
				<span>雞腿飯</span>
			</label>
		</div>
		<div class="list-item">
			<label>
				<input type="checkbox" name="" id="">
				<span>排骨飯</span>
			</label>
		</div>
		<div class="list-item">
			<label>
				<input type="checkbox" name="" id="">
				<span>油雞飯</span>
			</label>
		</div>
		<div class="list-item">
			<label>
				<input type="checkbox" name="" id="">
				<span>燒臘飯</span>
			</label>
		</div>
		<div class="list-item">
			<label>
				<input type="checkbox" name="" id="">
				<span>腿庫飯</span>
			</label>
		</div>
		<div class="list-item">
			<label>
				<input type="checkbox" name="" id="">
				<span>控肉飯</span>
			</label>
		</div>
	</form>
</body>
</html>
```

***
### 3. 使用 absolute + margin auto 來達到CSS垂直置中效果
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/ch16/image/margin_absolute.jpg)

當物體設定絕對定位(absolute)時，預設抓不到整體還有範圍，所以margin:auto會失效，但設定了top:0 bottom:0之後卻可以抓到，同理，水平置中設定left:0 right:0。

但這個方法的缺點是定位物件要有固定的寬高(百分比也可以)。
