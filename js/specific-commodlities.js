//获取hash值进行购物
function shopping(){
	//1 有货，2  无货
	var params = location.hash.split('#',2)[1];
	var bigIMg =$('.ningyiban img');
	var hasArr=params.split('+');
	// 需要更换地址的图片
	var fdjImg=$('.fdj-img img');
	//需要改变title的标签
	var biaoqianTop=$('.biaoqian-top h1');
	//需要改变的价格
	var jiages=$('#jiages');
	//评论的条数
	var pl=$('#pl');
	//获取bottom-b下所有的img
	var imgMovr=$('.bottom-b img');
	var bottomB=$('.bottom-b ul li:nth-of-type(1) a img')
	var arr=[],atr=[],art=[],attrrr=[];
	//获取有货和无货的p标签
	var psOn=$('.yonghu-goumai p:nth-of-type(3)');
	//获取商品推荐的所有li
	var tuijianLi=$('.xiangxi-left li')
	$.each(ddaattee,function(key,val){
		arr.push(key);
	})
	$.each(ddaattee[arr[hasArr[0]]],function(key,val){
		atr.push(key);
	})
	var sj = ddaattee[arr[hasArr[0]]][atr[hasArr[1]]][parseInt(hasArr[2])+1];
	//设置图片
	fdjImg.attr('src',sj.img);
	biaoqianTop.html(sj.title);
	jiages.html('￥'+sj.jiage);
	pl.html(sj.pinglun);
	bottomB.attr('src',sj.img);
	bigIMg.attr('src',sj.img);
	if(hasArr[3] ==2){
		//无货
		psOn.html('<span>暂时无货</span>'); 
		
	}else{
		//有货  
		
	}
	
	
	//点击加加减减
	var yonghuGoumai=$('.yonghu-goumai p:nth-of-type(2) button');
	var yonghuInput=$('.yonghu-goumai p:nth-of-type(2) input');
	var yonghuDiqu=$('.yonghu-goumai p:nth-of-type(1) span:nth-of-type(1)');
	yonghuGoumai.eq(0).bind('click',function(){
		if(yonghuInput.val()>0){
			yonghuInput.val(yonghuInput.val()-1)
		}
	})
	yonghuGoumai.eq(1).bind('click',function(){
			yonghuInput.val(parseInt(yonghuInput.val())+1);
	})
	
	//根据hash值进行随机生成图片
	$.each(ddaattee[arr[hasArr[0]]],function(key,val){
		
		$.each(ddaattee[arr[hasArr[0]]][key],function(key1,val){
			 art.push(ddaattee[arr[hasArr[0]]][key][key1].img);
			 attrrr.push(ddaattee[arr[hasArr[0]]][key][key1]);
		})
		
	})
	//生成随机数
	for(var i=1;i<=imgMovr.length-1;i++){
		$(imgMovr[i]).attr('src',art[Math.floor(Math.random()*art.length)])
	}
	for(var i=0;i<tuijianLi.length;i++){
		var j = attrrr[Math.floor(Math.random()*attrrr.length)]
		tuijianLi[i].firstElementChild.firstElementChild.src=j.img;
		tuijianLi[i].firstElementChild.lastElementChild.innerHTML=j.title;
		tuijianLi[i].lastElementChild.innerHTML='￥'+j.jiage;
	}
	//tuijianLi
	
}
shopping();

//放大镜获取元素

var fdjImg=document.querySelector('.fdj-img');
var ningyiban=document.querySelector('.ningyiban')
var imgs=ningyiban.querySelector('img');
var im=fdjImg.querySelector('img');
var lookBigImg=document.querySelector('.look-big-img');
var bigImgZhe=document.querySelector('.big-img-zhe');
var lis =document.querySelectorAll('.bottom-b li');
var shipS=document.querySelector('.ship-s');


//改变固定定位的元素获取
var xingxiRightTop=$('.xingxi-right-top');
var aB =xingxiRightTop.offset().top;
var yic=$('#lijigoumai');
for(var i=0;i<lis.length;i++){
	lis[i].onmouseenter=function(){
		var a=this.firstElementChild.firstElementChild.getAttribute('src');
		fdjImg.firstElementChild.setAttribute('src',a);
		ningyiban.firstElementChild.setAttribute('src',a);
	}
}
lookBigImg.onclick=function(ev){
	lookBigImg.style.display='none';
}
bigImgZhe.onclick=function(ev){
		ev.cancelBubble = true;
		lookBigImg.style.display='block';
	}
shipS.onclick=function(){
	var a=ningyiban.firstElementChild.getAttribute('src');
	bigImgZhe.firstElementChild.setAttribute('src',a);
	lookBigImg.style.display='block';
	//改变img的图片地址
}



//放大镜
//鼠标移入创建一个div
fdjImg.onmouseenter=function(ev){
	fdjImg.style.cursor='move';
	ningyiban.style.display='block';
	ev = ev || window.event;
	ev.cancelBubble = true;
	var div =document.createElement('div')
	div.className = 'item';
	fdjImg.appendChild(div);
	//移出div消失
	fdjImg.onmouseleave=function(){
		div.remove();
		ningyiban.style.display='none';
	}
	
	//设置div出现的位置
	var disx = ev.pageX - 260 - div.offsetWidth/2;
	var disy = ev.pageY - 230 - div.offsetHeight/2;
	var maxL = fdjImg.clientWidth - div.offsetWidth;
	var maxT = fdjImg.clientHeight - div.offsetHeight;
	if(disx>=maxL){
		disx = maxL;
	}else if(disx<0){
		disx = 0;
	}
	if(disy>=maxT){
		disy = maxT;
	}else if(disy<=0){
		disy = 0;
	}
	div.style.left = disx + 'px';
	div.style.top = disy + 'px';
	
	
	
	//鼠标移动
	fdjImg.onmousemove=function(ev){
		ev = ev || window.event;
		var x = ev.pageX - 260 - div.offsetWidth/2;
		var y = ev.pageY - 230 - div.offsetHeight/2;
		if(x>=maxL){
			x = maxL;
		}else if(x<0){
			x = 0;
		}
		if(y>=maxT){
			y = maxT;
		}else if(y<=0){
			y = 0;
		}
		div.style.left = x + 'px';
		div.style.top = y + 'px';
		
		var b_L = x/maxL;
		var b_T = y/maxT;
		var imgW = imgs.offsetWidth - ningyiban.offsetWidth;
		var imgH = imgs.offsetHeight - ningyiban.offsetHeight;
		
		imgs.style.left = -imgW*b_L +'px';
		imgs.style.top = -imgH*b_T +'px';
	}
}



function f(){
	//tbale切换部分
	var fuwuXiangxi=$('.xingxi-right-top li');
	var imgBoimg=$('.img-bo-img');
	var imgBoCanshu=$('.img-bo-canshu');
	var imgBoPeisong=$('.img-bo-peisong');
	var pinlunPinglun=$('.pinlun-pinglun');
	var a=[imgBoimg,imgBoCanshu,imgBoPeisong,pinlunPinglun]
	//给li添加点击事件
	$.each(fuwuXiangxi,function(i,el){
		$(el).on('click',function(){
			//循环改变样式
			$.each(fuwuXiangxi,function(i,el){
				$(el).css({
					'background-position':'0px -101px',
				})
				$(el).children().css('color','#fff');
				//所有的隐藏
				a[i].hide();
			})
			a[i].show();
			$(this).css('background-position','0px -162px');
			$(this).children().css('color','#000');
			 $(window).scrollTop(aB) 
		})
	})
	
	//固定顶部部分
	/* document.onscroll=function(){
		console.log(document.screenTop)
	} */
	
}

	
//滚动改变定位
$(window).on('scroll',function(){
	if( aB< $(window).scrollTop()){
		xingxiRightTop.css({
			'position':'fixed',
			'z-index':49
			});
		yic.show();
	}else{
		xingxiRightTop.css('position','relative');
		yic.hide();
	}
})
f();

//加入购物车和立即购买
function ljgm(){
	var shuliang=$('.yonghu-goumai input');
	var dqu=$('.yonghu-goumai p:nth-of-type(1) span:nth-of-type(1)');
	var siji=$('.siji');
	var nouserFj=$('.nouser');
	var nouser=$('.nouser span');
	var tablGm=$('#lijigoumai');
	var params = location.hash.split('#',2)[1];
	nouser.eq(0).bind('click',function(){
		window.open('signIn.html','_block');
	})
	nouser.eq(1).bind('click',function(){
		nouserFj.css('display','none')
	})
	nouserFj.bind('click',function(e){
		if(e.target.nodeName=='DIV'){
			$(this).css('display','none');
		}
	})
	var gouwuAnniu=$('.gouwuAnniu a ');
	var shuS=$('#shu-s');
	var secesese=$('.secesese');
	gouwuAnniu.eq(1).bind('click',function(){
		//判断用户是否登录
		if(localStorage.getItem('userInformation') != null){
			//判断是否选择了地区
			if(dqu.html() =='请选择地区'){
				siji.css('display','block');
			}else{
				//判断是否选择了数量
				if(/(^[1-9]\d*$)/.test(shuliang.val())){
					//都选择成功了则跳转下单页面
					if(localStorage.getItem('shangping') == null){
						localStorage.setItem('shangping',params+'+'+shuliang.val());
						shuS.html(1);
						secesese.css('display','block');
						// window.open('shopping-cart-gwc.html#'+params+'+'+shuliang.val(),'_block');
						
					}else{
						var l = localStorage.getItem('shangping');
						//判断商品是否存在
						if(l.indexOf(params) == -1){
							//成功加入了购物车
							localStorage.setItem('shangping',l+','+params+'+'+shuliang.val());
							// window.open('shopping-cart-gwc.html#'+params+'+'+shuliang.val(),'_block');
							var g=localStorage.getItem('shangping').split(',');
							shuS.html(g.length);
							secesese.css('display','block');
							 // window.open('shopping-cart-gwc.html');
						}else{
							alert('你已经购买了此商品，请前往订单页');
							window.open('shopping-cart-gwc.html','_block');
						}
						
					}
					
				}else{
					nouserFj.css('display','block');
					nouserFj.children('div').children().eq(1).html('请输入正确的数量');
					nouserFj.children('div').children().eq(2).css('display','none');
					nouserFj.children('div').children().eq(0).html('错误');
					console.log('不满住');
				}
			}
		}else{
			nouserFj.css('display','block');
			nouserFj.children('div').children().eq(1).html('亲！你还没有登录，请先登录哦！');
			nouserFj.children('div').children().eq(2).css('display','block');
			nouserFj.children('div').children().eq(0).html('登录');
		}
		//console.log(localStorage.getItem('userInformation'))
		//window.open('shopping-cart-gwc.html','_block')
		secesese.bind('click',function(ev){
			ev.cancelBubble = true;
			console.log(ev.target.innerHTML)
			if(ev.target.innerHTML == '去购物车结算'){
				secesese.css('display','none');
				window.open('shopping-cart-gwc.html','_block');
			}else{
				secesese.css('display','none');
			}
		})
	})
	//点击立即购买，直接将hash值传过去
	gouwuAnniu.eq(0).bind('click',function(){
		window.open('shopping-cart-gwc.html#'+params+'+'+shuliang.val(),'_block');
	})
}
ljgm();


/* 四级联动 */
function siji(){
	var yonghuDiqu=document.querySelector('.yonghu-goumai p:nth-of-type(1) span:nth-of-type(1)');
	var sijiL=document.querySelector('.siji');
	yonghuDiqu.onmouseenter=function(){
		sijiL.style.display='block';
	}
	yonghuDiqu.onmouseleave=function(){
		sijiL.style.display='none';
	}
	sijiL.onmouseleave=function(){
		this.style.display='none';
	}
	sijiL.onmouseenter=function(){
		this.style.display='block';
	}
	var getL = localStorage.getItem('dizhi');
	if(getL != null){
		yonghuDiqu.innerHTML='';
		for(var i=0;i<getL.split(',').length;i++){
			yonghuDiqu.innerHTML +=String.fromCharCode(getL.split(',')[i])
		}
	}
	/* 
	 上面是操作元素部分
	 
	 */
	
	
	var arr=[];
	var uls=document.querySelectorAll('.siji-liandong ul');
	//循环第一个
	for(var dd in ChineseDistrictsX['86']){
		for(var cc in ChineseDistrictsX['86'][dd]){
			var li=document.createElement('li');
			li.setAttribute('code',ChineseDistrictsX['86'][dd][cc].code)
			li.innerHTML = ChineseDistrictsX['86'][dd][cc].address;
			uls[0].appendChild(li);
		}
	}
	//给uls添加点击实事件
	for(var i= 0 ;i<uls.length;i++){
		uls[i].index=i;
		uls[i].addEventListener('click',function(ev){
			var num =this.index;
			var ev = ev||window.ev;
			if(ev.target.nodeName=='LI'){
				ev.target.style.background='blue';
				ev.target.style.color='#fff';
				 var a = [];
				 var p = ev.target.parentNode.children;
				 for(var i =0,pl= p.length;i<pl;i++) {
					 //除开自己以外的兄弟
					  if(p[i] !== ev.target){
						  p[i].style.background='#FFFFFF';
						  p[i].style.color='#000000';
						  a.push(p[i]);
					  } 
				 }
				 //第二层  1  72  2799
				 //判断是否清空
				 var two=ev.target.getAttribute('code');
				 arr[this.index] = ev.target.innerHTML;
				 if(uls[num+1] !=undefined){
					 uls[num+1].innerHTML='';
				 }
				 
				 
				 if(ChineseDistrictsX[two] != undefined){
					 for(var t in ChineseDistrictsX[two]){
						 var li=document.createElement('li');
						 li.setAttribute('code',t);
						 li.innerHTML = ChineseDistrictsX[two][t];
						 uls[num+1].appendChild(li);
					 }
				 }else{
					 //开始操作元素
					 yonghuDiqu.innerHTML='';
					 for(var i=0;i<arr.length;i++){
						 yonghuDiqu.innerHTML +=arr[i];
					 }
					 sijiL.style.display='none';
					 //将地址转化为键码值存入地址中localStorage.setItem("temp",arr)
					 var shuz=[];
					for(var i=0;i<yonghuDiqu.innerHTML.length;i++){
						console.log(yonghuDiqu.innerHTML[i].charCodeAt());
						shuz[i]=yonghuDiqu.innerHTML[i].charCodeAt();
					} 
					localStorage.setItem('dizhi',shuz);
					//刷新页面
					history.go(0);
				 }
				 
				 
				 
			}
		})
	}
	
}
siji();

//回复消息
function huihu(){
	var one=$('#one-huifu');
	var two=$('#two-huifu');
	var three=$('.kehu-kehu');
	var cai=$('#caihui');
	one.bind('click',function(){
		two.css('display','block');
		
		$('#two-huifu button').bind('click',function(){
			var textr=$(this).prev();
			if(textr.val() ==""){
				alert('请输入内容');
			}else{
				//有内容时
				var day2 = new Date();
				 day2.setTime(day2.getTime());
				var s2 = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();
				
				three.css('display','block');
				var lot=localStorage.getItem('userInformation').split('分')[0];
				cai.html(lot);
				cai.next().next().next().html(s2);
				
				var psp=$('<p>');
				psp.html(textr.val());
				cai.parent().parent().append(psp);
				textr.val("");
			}
		})
		
	})
}
huihu();


