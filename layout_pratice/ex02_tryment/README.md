# WebLayout_pratice

***
## ex02_tryment: 排版練習網站：TrymenT『TrymenT ―今を変えたいと願うあなたへ―』
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/layout_pratice/ex02_tryment/demo.gif)

* **練習內容**
  * 練習刻板
  * Swiper教學
  * Scale 和 transition

***
### 1. Swiper教學
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/layout_pratice/ex02_tryment/swipper.jpg)


```java
<div class="swiper-part">
	<!-- Swiper -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://picsum.photos/320/200?random=10" alt=""></div>
      <div class="swiper-slide"><img src="https://picsum.photos/320/200?random=11" alt=""></div>
      <div class="swiper-slide"><img src="https://picsum.photos/320/200?random=12" alt=""></div>
      <div class="swiper-slide"><img src="https://picsum.photos/320/200?random=13" alt=""></div>
      <div class="swiper-slide"><img src="https://picsum.photos/320/200?random=14" alt=""></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</div>

```

```java
<script>
var swiper = new Swiper('.swiper-container', {
 	  slidesPerView: 3,
      loop: true,
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,

      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  </script>
</script>
```

CSS自定義swipper

```html
.swiper-slide {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-container{
	height: 300px; /* 調整swipper高度 */
}

.swiper-pagination{
    bottom: 10px; /* 調整swipper下方圓點的位置 */
}

.swiper-pagination .swiper-pagination-bullet-active{
    background-color: #a0ee0a; /* 調整swipper下方圓點的顏色 */
}
```

***
### 2. Scale 和 transition
***

![image](https://github.com/JohnnyOfSnow/WebLayout_pratice/blob/master/layout_pratice/ex02_tryment/button.gif)

```html
#more-news-button a{
	width: 255px;
	height: 50px;
	background-color: #fff;
	border: 1px solid #000;
	font-size: 15px;
	font-weight: 700;
	letter-spacing: 2px;
	text-decoration: none;
	color: #000;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	z-index: -1; /* 相對於z-index: -5 在前面 */
}

#more-news-button a:before{
	content: '';
	position: absolute;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: #a0ee0a;
	left: 50%;
	top: 50%;
	transition: transform .4s;
	transform: scale(0);
	z-index: -5; /* 相對於z-index: -1 在後面 */
}


#more-news-button:hover a:before{
	transform: scale(46);
}
```

> a:before 因為 border-radius: 50%; 所以是圓形，放大圓形達成塗滿按鈕的動畫效果

> transform: scale(0); 設定初始大小

> transform: scale(46); 設定放大後的大小

> transition: transform .4s;  放大的速度0.4s

> 另外放大後a:before會蓋住a，故設定z-index，注意兩邊都要設定(因為它是絕對的概念)



