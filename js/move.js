document.write("<script language=javascript src='js/Tween.js'></script>");


//给每一个a标签添加move
/* for(var i=0;i<centant.length;i++){
	if(kg){
		centant[i].onmouseenter=function(){
			kg= false;
			 move(this,'left',35,200,'linear',null,function(){
				 kg = true;
			 });
		}
		centant[i].onmouseleave=function(){
			kg= false;
				move(this,'left',20,200,'linear',null,function(){
					kg = true;
				});
			 
		}
			
	}
	
} */

/* 热门的元素获取 */
var saleHot=document.querySelector('.saleHot');
var lis=saleHot.querySelectorAll('li');
movee(lis,'left',-10,0);

/* 精品推荐的大图 */
var jpBanner=document.querySelectorAll('.jp-banner');
movee(jpBanner,'left',-10,0);
/* 精品推荐的右边小图 */
var centant=document.querySelectorAll('.centant ul li');
movee(centant,'left',30,20);

/* 新品批发 */
var newProductsStartCanteen=document.querySelectorAll('.new-products-start-canteen a');
function m(newProductsStartCanteen){
	for(var i=0;i<newProductsStartCanteen.length;i++){
		newProductsStartCanteen[i].onmouseenter=function(){
			this.firstElementChild.style.right=10+'px';
		}
		newProductsStartCanteen[i].onmouseleave=function(){
			this.firstElementChild.style.right=0+'px';
		}
	}
}
m(newProductsStartCanteen);
var newProduct=document.querySelector('.new-products-start-canteen');
var im=newProduct.querySelectorAll('.imgs a');
moveee(im,'left',-10,0);
function moveee(lis,direction,num,numTwo){
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			this.firstElementChild.style[direction]=num+'px';
			console.log(1);
		}
		lis[i].onmouseleave=function(){
			this.firstElementChild.style[direction]=numTwo+'px';
		}
	}
}
var mS=document.querySelectorAll('.mo');
	for(var i=0;i<mS.length;i++){
		mS[i].onmouseenter=function(){
			this.style.left=-10+'px';
		}
		mS[i].onmouseleave=function(){
			this.style.left=0+'px';
		}
	}
var mom=document.querySelector('.mom');
mom.onmouseenter=function(){
	this.style.right=10+'px';
		}
mom.onmouseleave=function(){
	this.style.right=0+'px';
		}
/* 优品专辑 */
var bigIMG=document.querySelectorAll('.big-img');
movee(bigIMG,'left',-10,0)

/* var contentContent=document.querySelectorAll('.content-content ul li');
moveex(contentContent,'right',-10,0) */






/*
 
	参数一：传入的一个lis标签的数组
	参数二：需要改变的值
	参数三：移入改变的值改变
	参数四：移出改变的值
 */
function movee(lis,direction,num,numTwo){
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			this.firstElementChild.firstElementChild.style[direction]=num+'px';
		}
		lis[i].onmouseleave=function(){
			this.firstElementChild.firstElementChild.style[direction]=numTwo+'px';
		}
	}
}

function moveex(lis,direction,num,numTwo){
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			this.lastElementChild.firstElementChild.style[direction]=num+'px';
		}
		lis[i].onmouseleave=function(){
			this.lastElementChild.firstElementChild.style[direction]=numTwo+'px';
		}
	}
}
/* 第二个轮播图的动画 */
function slect(){
	var banner=document.querySelector('.banner');
	var imgs=banner.querySelectorAll('img');
	for(var i=0;i<imgs.length;i++){
		imgs[i].onmouseenter=function(){
			this.style.transform='scale(1.2,1.2)';
			console.log(1)
		}
		imgs[i].onmouseleave=function(){
			this.style.transform='scale(1,1)';
		}
	}
}
slect();

/* 为你推荐动画 */
function foryou(){
	var recommendedContent=document.querySelector('.recommended-content');
	var lis =recommendedContent.querySelectorAll('li');
	/* for(var i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			this.firstElementChild.firstElementChild
		}
	} */
	movee(lis,'top',0,17)
}
foryou();