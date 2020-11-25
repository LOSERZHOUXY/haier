//判断有没有登录如果登录了就改变登录后的样式
function jiance(){
	var user=localStorage.getItem('userInformation');
	if(user != null){
		//已经登录了
		user.split('分')
		var lowCity= document.querySelectorAll('.you-position ul li');
		
		lowCity[0].innerHTML=
		`
		<p >
			欢迎您
			<i>${user.split('分')[0]}</i>
			
			<i>退出</i>
		</p>
		`
		lowCity[1].style.opacity=0;
		lowCity[2].style.opacity=0;
		var userXingxi=document.querySelectorAll('.user-xingxi button');
		userXingxi[0].style.display='none';
		userXingxi[1].style.display='none';
		var spa=document.createElement('span');
		spa.style.marginLeft=50+'px';
		spa.innerHTML=user.split('分')[0];
		userXingxi[1].parentNode.appendChild(spa);
	}
}
jiance()
function fx(){
	//获取×的span
	var cha=document.querySelector('.cha');
	var zhe=document.querySelector('.one-zhe');
	//给他添加点击事件
	cha.onclick=function(){
		zhe.style.display='none';
	}
	//获取本地城市并添加点击事件
	var lowCity=document.querySelector('.low-city');
	lowCity.onclick=function(){
		zhe.style.display='block';
		abiao();
	}
	//获取Merchant（商户）
	var Merchant=document.querySelector('.Merchant');
	//给Merchant添加鼠标移入事件
	Merchant.onmouseenter=function(){
		//获取他的最后一个a标签子元素
		var chile=Merchant.lastElementChild;
		chile.style.display='block';
		Merchant.style.border='1px solid #999999';
		Merchant.style.background="#FFFFFF";
	}
	Merchant.onmouseleave=function(){
		//获取他的最后一个a标签子元素
		var chile=Merchant.lastElementChild;
		chile.style.display='none';
		Merchant.style.border='none';
		Merchant.style.background="none";
	}
}
fx();
function abiao(){
	var zhe=document.querySelector('.one-zhe');
	//获取本地城市
	var lowCity=document.querySelector('.low-city');
	//获取所有dd下的a标签并添加点击事件
	var aS=document.querySelectorAll('dd a');
	//给所有的a标签添加点击事件
	for(var i=0;i<aS.length;i++){
		aS[i].style.color='#666666';
		aS[i].onclick=function(){
			lowCity.innerHTML =this.innerHTML.substr(0,2);
			zhe.style.display='none';
			
		}
	}
}
/* 
	轮播图部分
	
 
 */
function lun(){
	var ul=document.querySelector('.rotation-chart ul');
	var lis=ul.querySelectorAll('li');
	var rotationChartSpan=document.querySelectorAll('.rotation-chart span');
	var number=0;
	var obj=true;
	//获取p标签下的span
	var dian=document.querySelectorAll('.diandian span');
	if(number==0){
		rove();
		dian[number].style.background='red';
	}
	rotationChartSpan[1].onclick=function(){
		if(obj){
			if(number>=lis.length-1){
				ul.style.transition='none'
				number=0;
				ul.style.left = -number*952+'px';
				rove();
				dian[number].style.background='red';
				setTimeout(function(){
					ul.style.transition='2s';
					number++;
					rove();
					dian[number].style.background='red';
					ul.style.left = -number*952+'px';
				},20)
				obj=false;
			}else{
				number++;
				ul.style.left = -number*952+'px';
				obj=false;
				if(number>=dian.length){
					rove();
					dian[0].style.background='red';
				}else{
					rove();
					dian[number].style.background='red';
				}
			}
			setTimeout(function(){
				obj = !obj;
			},2000)
			
		}
		
	}
	rotationChartSpan[0].onclick=function(){
		if(obj){
			if(number<=0){
				ul.style.transition='none'
				number=lis.length-1;
				ul.style.left = -number*952+'px';
				setTimeout(function(){
					ul.style.transition='2s';
					number--;
					ul.style.left = -number*952+'px';
					rove();
					dian[number].style.background='red';
				},20)
				obj=false;	
			}else{
				number--;
				rove();
				dian[number].style.background='red';
				ul.style.left = -number*952+'px';
				obj=false;
			}
			setTimeout(function(){
				obj = !obj;
			},2000)
		}
	}
	//定时器
		setInterval(function(){
			if(obj){
				if(number>=lis.length-1){
					ul.style.transition='none'
					number=0;
					ul.style.left = -number*952+'px';
					rove();
					dian[number].style.background='red';
					setTimeout(function(){
						ul.style.transition='2s';
						number++;
						rove();
						dian[number].style.background='red';
						ul.style.left = -number*952+'px';
					},20)
					obj=false;
				}else{
					number++;
					ul.style.left = -number*952+'px';
					obj=false;
					if(number>=dian.length){
						rove();
						dian[0].style.background='red';
					}else{
						rove();
						dian[number].style.background='red';
					}
				}
				setTimeout(function(){
					obj = !obj;
				},4000)
			}
		},2000)
	//给所有的span添加点击事件
	for(var i=0;i<dian.length;i++){
		dian[i].dex=i;
		dian[i].onclick=function(){
			/* setTimeout(dingshiqi(),8000); */
			number=this.dex;
			ul.style.transition='2s';
			ul.style.left = -number*952+'px';
			rove();
			this.style.background='red';
		}
	}
	
	//清除所有的dian的backgroud
	function rove(){
		for(var i=0;i<dian.length;i++){
			dian[i].style.background='#FFFFFF';
		}
	}
}
lun();


/* 返回顶部的事件*/
function retur(){
	var returntotheTop=document.querySelector('.return-to-the-top')
	returntotheTop.addEventListener('click',function(){
		//获取滚动条的位置
		var page=window.pageYOffset;
		//开启定时器
		var timer = setInterval(function(){
			if(page<=0){
				clearInterval(timer);
			}else{
				page -=100;
				window.scrollTo(0,page);
			}
		},10)
	})
}
retur();

//判断用户是否登录过
//判断search值是否存在 若存在则进行登录过后的操作