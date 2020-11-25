//判断左边是隐藏还是显示
function yc(){
	var listSubnav=document.querySelector('.list-subnav');
	//获取右边的大盒子
	var commitBottom=document.querySelector('.commit-bottom');
	//获取commitBottom下面的ul
	var uuuu=commitBottom.querySelector('ul')
	//判断传入的search值
	var params = location.hash.split('#',2)[1];
	//定义一个空字符
	var zifu='';
	//获取数据里面的前面部分并存入数组中；
	var arr=[];
	//定义一个num判断有多少个li
	var liNum=0;
	var h2xing=listSubnav.firstElementChild.nextElementSibling;
	//获取懒加载的按钮
	var jiazaiAnniu=document.querySelector('.jiazai-anniu');
	for(var atr in ddaattee){
		arr.push(atr);
	}
	//获取盒子的宽度
	var a = window.getComputedStyle(commitBottom,null);
	//获取您所在位置的p标签
	var weizhiZi=document.querySelector('.weizhi-zi');
	//创建一个span标签
	
	var shangping=document.querySelector('#shangping');
	
	//判断params.indexOf('+')是否为负一
	if(params.indexOf('+') == -1){
		//当传入一个值
		listSubnav.style.display='none';
		var creaSpan=document.createElement('span');
		listSubnav.firstElementChild.innerHTML=arr[params];
		//将span添加到weizhi的最后、
		creaSpan.innerHTML=arr[params];
		weizhiZi.appendChild(creaSpan);
		// 获取传入的hash值与数组的哪个下标相等
		var hashNum=arr[params];
		//设置盒子的大小
		commitBottom.style.width=1220.2+250+'px';
		
		shangping.innerHTML=arr[params];
		for(var attr in ddaattee[hashNum]){
			for(var atrr in ddaattee[hashNum][attr]){
				//随机生成一个1或者2
				var nu=Math.floor(Math.random()*2)+1;
				//创建一个li
				var quzhengNnum=parseInt(atrr);
				var cretL=document.createElement('li');
				liNum++;
				zifu=
				`
				<a href="javascript:;">
					<img _src="${ddaattee[hashNum][attr][quzhengNnum].img}" >
				</a>
				<span title="${ddaattee[hashNum][attr][quzhengNnum].title}">${ddaattee[hashNum][attr][quzhengNnum].title}</span>
				<p style="height:16.8px" title="${ddaattee[hashNum][attr][quzhengNnum].title2}">${ddaattee[hashNum][attr][quzhengNnum].title2}</p>
				<p class="spjg">
					<em>￥</em>
					<span >${ddaattee[hashNum][attr][quzhengNnum].jiage}</span>
					<span>（已有</span>
					<span>${ddaattee[hashNum][attr][quzhengNnum].pinglun}</span>
					<span>条评价）</span>
				</p>
				
				<div class="foods-gouxuan" >
					<span class="glyphicon glyphicon-ok"></span>
					<span>比较</span>
				</div>
				<p>${nu==1?'有货':'无货'}</p>
				`
					cretL.innerHTML=zifu;
					//获取li中最后一个p标签
					var pS=cretL.lastElementChild;
					if (pS.innerHTML=='无货') {
						pS.style.color='red';
					}
					uuuu.appendChild(cretL);
				}
				
			}
	}else{
		//定义一个数组储存第二列的值
		var twoArr=[];
		//存在+号将hash值进行拆分
		commitBottom.style.width=1220.2+'px';
		listSubnav.style.display='block';	
		var arrs=params.split('+');
		for(var leixing in ddaattee[arr[arrs[0]]]  ){
			var div=document.createElement('div');
			div.innerHTML=leixing;
			h2xing.appendChild(div);
				twoArr.push(leixing);
		}
		
		//判断第一个数据是否为空，为空则不显示 
		if(ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][1] != undefined ){
			var ddiv=listSubnav.firstElementChild.nextElementSibling;
			var canp=ddiv.querySelectorAll('div');
			for(var i=0;i<canp.length;i++){
				canp[i].style.color='#333333';
			}
			canp[arrs[1]].style.color='red';
			var zonggongGeshu=0;
			/* shangping.innerHTML=ddaattee[arr[arrs[0]]][twoArr[arrs[1]]]; */
			shangping.innerHTML=twoArr[arrs[1]];
			//创建2个span添加
			var creaSpan=document.createElement('span');
			//将span添加到weizhi的最后、
			creaSpan.innerHTML=arr[arrs[0]];
			weizhiZi.appendChild(creaSpan);
			var creaSpan=document.createElement('span');
			//将span添加到weizhi的最后、
			creaSpan.innerHTML='&nbsp;&nbsp;>&nbsp;&nbsp;'+twoArr[arrs[1]];
			listSubnav.firstElementChild.innerHTML=arr[arrs[0]];
			weizhiZi.appendChild(creaSpan);
			
			//获取list-subnav下的第一个div
			
			for(var geshu in ddaattee[arr[arrs[0]]][twoArr[arrs[1]]]){
				//生成1或者2随机数
				var nu=Math.floor(Math.random()*2)+1;
				//创建li
				var llii=document.createElement('li');
				zifu= 
				`
				<a href="javascript:;">
					<img _src="${ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][geshu].img}"  >
				</a>
				<span title="${ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][geshu].title}">${ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][geshu].title}</span>
				<p style="height:16.8px" title="${ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][geshu].title2}">${ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][geshu].title2}</p>
				<p class="spjg">
					<em>￥</em>
					<span >${ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][geshu].jiage}</span>
					<span>（已有</span>
					<span>${ddaattee[arr[arrs[0]]][twoArr[arrs[1]]][geshu].pinglun}</span>
					<span>条评价）</span>
				</p>
				<div class="foods-gouxuan" >
					<span class="glyphicon glyphicon-ok"></span>
					<span>比较</span>
				</div>
				<p>${nu==1?'有货':'无货'}</p>
				`
				
				llii.innerHTML=zifu;
				var pS=llii.lastElementChild;
				if (pS.innerHTML=='无货') {
					pS.style.color='red';
				}
				
				uuuu.appendChild(llii);
			}
		}else{
			console.log('不存在');
			uuuu.style.display='none';
			var  wuhuo=document.querySelector('.wuhuo');
			wuhuo.style.display='block';
		}
		
		/* console.log(ddaattee['空调']['空气类产品'][1] == undefined) */
		
	}
	//循环第一层数据
	
	//获取添加完成后的li
	var liS=uuuu.querySelectorAll('li');
	loadImg(liS);
	window.onscroll = function(){
		loadImg(liS);
	}
	//获取span
	var span=document.querySelector('.xingxi-top .righ').lastElementChild.firstElementChild;
	span.innerHTML=liS.length;
	//获取地址a标签
	var A=document.querySelector('.xingxi-top .righ').firstElementChild;
	var zhe=document.querySelector('.one-zhe');
	A.onclick=function(){
		zhe.style.display='block';
	}
	//获取所有dd下的a标签并添加点击事件
	var aS=document.querySelectorAll('dd a');
	var first=A.firstElementChild;
	var last=first.nextElementSibling;
	//给所有的a标签添加点击事件
	for(var i=0;i<aS.length;i++){
		aS[i].style.color='#666666';
		aS[i].onclick=function(){
			var lowCity=document.querySelector('.low-city');
			
			last.innerHTML =this.innerHTML.substr(0,2);
			
			lowCity.innerHTML =this.innerHTML.substr(0,2);
			
			first.innerHTML = this.parentNode.parentNode.firstElementChild.innerHTML;
			
			zhe.style.display='none';
		}
	}
	
	
	/* 左边可以点击部分 显示和隐藏 */
	var fenleifDiv=document.querySelectorAll('.fenlei-f>div');
	for(var i=0;i<fenleifDiv.length;i++){
		fenleifDiv[i].addEventListener('click',function(){
			for(var j=0;j<fenleifDiv.length;j++){
				fenleifDiv[j].lastElementChild.style.display='none';
			}
			this.lastElementChild.style.display='block';
		})
	}
	
	var disv=document.querySelectorAll('.list-subnav>div:nth-of-type(1) div');
	for(var i=0;i<disv.length;i++){
		disv[i].indw=i;
		disv[i].onclick=function(){
			console.log(this.indw);
			var h=location.hash.split('#')[1].split('+');
			// window.open('commodity-classification.html#'+h[0]+'+'+this.indw,'_self');
			window.open('commodity-classification.html#'+h[0]+'+'+this.indw)
			console.log(h[0],h[1]);
		}
	}
	//根据用户价格进行搜索
	function seatch(){
		var spnns=document.querySelectorAll('.commit-bottom ul li p:nth-of-type(2) span:nth-of-type(1)');
		var boom=document.querySelectorAll('.bootm ');
		var inppt=boom[1].querySelectorAll('input');
		var num=1000;
		//radio；
		var n=[];
		//text；
		var s=[];
		for(var i=0;i<inppt.length;i++){
			if(inppt[i].getAttribute('type') == 'radio'){
				n.push(inppt[i]);
			}else{
				s.push(inppt[i]);
			}
		}
		for(var i=0;i<n.length;i++){
			n[i].nied=i;
			n[i].oninput=function(){
				if(this.nied == 0){
					for(var j=0;j<spnns.length;j++){
						spnns[i].parentNode.parentNode.style.display="block";
					}
				}else if(this.nied == 1){
					console.log(parseInt(spnns[1].innerHTML))
					for(var j=0;j<spnns.length;j++){
						if( parseInt(spnns[j].innerHTML)>0 && parseInt(spnns[j].innerHTML)<=1000 ){
							console.log(parseInt(spnns[j].innerHTML))
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}else if(this.nied == 2){
					for(var j=0;j<spnns.length;j++){
						if( parseInt(spnns[j].innerHTML)>1000 &&parseInt(spnns[j].innerHTML)<=1500 ){
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}else if(this.nied ==3){
					for(var j=0;j<spnns.length;j++){
						if( parseInt(spnns[j].innerHTML)>1500 &&parseInt(spnns[j].innerHTML)<=2000 ){
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}else if(this.nied ==4){
					for(var j=0;j<spnns.length;j++){
						if( parseInt(spnns[j].innerHTML)>2000 &&parseInt(spnns[j].innerHTML)<=3000 ){
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}else if(this.nied ==5 ){
					for(var j=0;j<spnns.length;j++){
						if( parseInt(spnns[j].innerHTML)>3000 &&parseInt(spnns[j].innerHTML)<=4000 ){
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}else if(this.nied== 6){
					for(var j=0;j<spnns.length;j++){
						if(  parseInt(spnns[j].innerHTML)>4000 &&parseInt(spnns[j].innerHTML)<=5000){
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}else if(this.nied==7){
					for(var j=0;j<spnns.length;j++){
						if(  parseInt(spnns[j].innerHTML)>5000 ){
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}
			}
		}
		var secza=document.querySelector('#secza');
		secza.onclick=function(){
			var qian=s[0].value;
			var hou=s[1].value;
			
			if(/(^[1-9]\d*$)/.test(qian) &&  /(^[1-9]\d*$)/.test(hou)){
				if(qian>hou){
					alert('亲！数字反啦！');
				}else{
					for(var j=0;j<spnns.length;j++){
						if(  parseInt(spnns[j].innerHTML)>qian &&parseInt(spnns[j].innerHTML)<=hou){
							spnns[j].parentNode.parentNode.style.display="block";
						}else{
							spnns[j].parentNode.parentNode.style.display="none";
						}
					}
				}
				
			}else{
				alert('请输入正整数');
			}
		} 
		
	}
	seatch();
}
yc();


function loadImg(lis){
	// 获取浏览器的高度
	var iH = window.innerHeight;
	for(var i=0;i<lis.length;i++){
		var liTop = lis[i].getBoundingClientRect().top;
		lis[i].index=i;
		if(liTop<=iH){
			var img =lis[i].querySelector('img');
			if(!img.src){	  
			  var s = img.getAttribute('_src');
			  img.src = s;
			  img.removeAttribute('_src');
			}
		  
		}
	}
}

//功能部分
function gongneng(){
	//仅显示有货
	var input=document.querySelector('.xingxi-top .left input');
	var psP=document.querySelectorAll('.commit-bottom ul li p:nth-of-type(3)');
	input.addEventListener('input',function(){
		if(psP != undefined){
			if(input.checked == true){
				//被选中 获取所有的有货
				 for(var i=0;i<psP.length;i++){
					 if(psP[i].innerHTML=='无货'){
						 psP[i].parentNode.style.display='none';
					 }
				 }
			}else{
				//没有被选中
				for(var i=0;i<psP.length;i++){
					psP[i].parentNode.style.display='block';
				}
			}
		}
	})
	
	//评论高低排序
	
	var spanS=document.querySelectorAll('.xingxi-top .left span');
	spanS[2].addEventListener('click',function(){
		for(var i=0;i<spanS.length;i++){
			spanS[i].style.color='#333';
			spanS[i].style.background='#FFFFFF';
		}
		this.style.background='#d71249';
		this.style.color='#fff';
		var arr=[];
		//存下标的数组；
		var atr=[];
		var att=[];
		//点击获取所有的li
		var ul=document.querySelectorAll('.commit-bottom ul li');
		var pPs=document.querySelectorAll('.commit-bottom ul li .spjg span:nth-of-type(3)');
		for(var i=0;i<pPs.length;i++){
			arr[i]=parseInt(pPs[i].innerHTML);
			atr[i]=parseInt(pPs[i].innerHTML);
		}
		for(var i=0;i<arr.length-1;i++){
			for(var j=0;j<arr.length-i-1;j++){
				if (arr[j] < arr[j + 1]) {
					
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		for(var i=0;i<arr.length;i++){
			var num=atr.indexOf(arr[i]);
			att.push(num);
			atr[num]='';
		}
		var liss=document.querySelectorAll('.commit-bottom ul li ');
		console.log(liss);
		var uls=document.querySelector('.commit-bottom ul');
		uls.innerHTML="";
		for(var i=0;i<liss.length;i++){
			uls.appendChild(liss[att[i]]);
		}
	})
	//点击进行价格高低进行排序
	spanS[1].addEventListener('click',function(){
		for(var i=0;i<spanS.length;i++){
			spanS[i].style.color='#333';
			spanS[i].style.background='#FFFFFF';
		}
		// this.classList.add('glyphicon-arrow-up');
		if(this.classList[1] == 'glyphicon-arrow-up'){
			//向下
			this.classList.remove('glyphicon-arrow-up');
			this.classList.add('glyphicon-arrow-down');
			var arr=[];
			//存下标的数组；
			var atr=[];
			var att=[];
			//点击获取所有的li
			var ul=document.querySelectorAll('.commit-bottom ul li');
			var pPs=document.querySelectorAll('.commit-bottom ul li .spjg span:nth-of-type(1)');
			for(var i=0;i<pPs.length;i++){
				arr[i]=parseInt(pPs[i].innerHTML);
				atr[i]=parseInt(pPs[i].innerHTML);
			}
			for(var i=0;i<arr.length-1;i++){
				for(var j=0;j<arr.length-i-1;j++){
					if (arr[j] > arr[j + 1]) {
						
						var temp = arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			for(var i=0;i<arr.length;i++){
				var num=atr.indexOf(arr[i]);
				att.push(num);
				atr[num]='';
			}
			var liss=document.querySelectorAll('.commit-bottom ul li ');
			var uls=document.querySelector('.commit-bottom ul');
			uls.innerHTML="";
			for(var i=0;i<liss.length;i++){
				uls.appendChild(liss[att[i]]);
			}
		}else{
			//向上
			this.classList.remove('glyphicon-arrow-down');
			this.classList.add('glyphicon-arrow-up');
			var arr=[];
			//存下标的数组；
			var atr=[];
			var att=[];
			//点击获取所有的li
			var ul=document.querySelectorAll('.commit-bottom ul li');
			var pPs=document.querySelectorAll('.commit-bottom ul li .spjg span:nth-of-type(1)');
			for(var i=0;i<pPs.length;i++){
				arr[i]=parseInt(pPs[i].innerHTML);
				atr[i]=parseInt(pPs[i].innerHTML);
			}
			for(var i=0;i<arr.length-1;i++){
				for(var j=0;j<arr.length-i-1;j++){
					if (arr[j] < arr[j + 1]) {
						
						var temp = arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			for(var i=0;i<arr.length;i++){
				var num=atr.indexOf(arr[i]);
				att.push(num);
				atr[num]='';
			}
			var liss=document.querySelectorAll('.commit-bottom ul li ');
			var uls=document.querySelector('.commit-bottom ul');
			uls.innerHTML="";
			for(var i=0;i<liss.length;i++){
				uls.appendChild(liss[att[i]]);
			}
			
		}
		this.style.background='#d71249';
		this.style.color='#fff';
		
	})
	spanS[0].onclick=function(){
		
		for(var i=0;i<spanS.length;i++){
			spanS[i].style.color='#333';
			spanS[i].style.background='#FFFFFF';
			this.style.background='#d71249';
			this.style.color='#fff';
		}
		history.go(0);
	}
	spanS[3].onclick=function(){
		for(var i=0;i<spanS.length;i++){
			spanS[i].style.color='#333';
			spanS[i].style.background='#FFFFFF';
			this.style.background='#d71249';
			
		}
		history.go(0);
	}
	
	
	//点击进行对比
	function duibi(){
		//获取li下所有的 foods-gouxuan
		var foodsGouxuan=document.querySelectorAll('.foods-gouxuan');
		var foodsGouxuanSpan=document.querySelectorAll('.foods-gouxuan span:nth-of-type(1)');
		var lis=document.querySelectorAll('.commit-bottom ul li');
		var duiBi=document.querySelector('.duibi-duibi');
		var chaoguo=document.querySelector('.chaoguo');
		var ul=duiBi.querySelector('ul');
		var ner=document.querySelector('#ner');
		//获取ul下的li下的删除按钮
		//定义一个空数组
		var kong=[];
		//定义一个变量来检测
		var num=0;
		for(var i=0;i<lis.length;i++){
			lis[i].addEventListener('mouseenter',function(){
				var pp=this.querySelector('.foods-gouxuan');
				pp.style.display='block';
				
			})
			lis[i].addEventListener('mouseleave',function(){
				var pp=this.querySelector('.foods-gouxuan');
				if(pp.index ==undefined){
					pp.style.display='none';
				}
			})
		}
		for(var i=0;i<foodsGouxuanSpan.length;i++){
			foodsGouxuanSpan[i].zdyIndex=i;
			foodsGouxuanSpan[i].addEventListener('click',function(){
				if(this.parentNode.index == undefined){
					
					num++;
					if(num>=3){
						num=2;
						chaoguo.style.display='block';
						ner.innerHTML='对不起，最多选择2种商品进行比较';
						return ;
					}
					this.parentNode.index='zdy';
					this.parentNode.style.background='red';
					this.parentNode.style.display='block';
					this.style.color='red';
					duiBi.style.display='block';
					//获取hash值
					var params = location.hash.split('#',2)[1];
					var cai=params.split('+',2);
					//获取数据
					var arr=[];
					for(var atr in ddaattee){
						arr.push(atr);
					}
					var twoArr=[];
					for(var leixing in ddaattee[arr[cai[0]]]  ){
						twoArr.push(leixing);
					}
					//创建li
					var lis=document.createElement('li');
					lis.innerHTML=
					`
					<img src="${ddaattee[arr[cai[0]]][twoArr[cai[1]]][this.zdyIndex+1].img}" >
					<p>${ddaattee[arr[cai[0]]][twoArr[cai[1]]][this.zdyIndex+1].title}</p>
					<p>￥${ddaattee[arr[cai[0]]][twoArr[cai[1]]][this.zdyIndex+1].jiage}</p>
					<a href="javascript:;" data="${num}">删除</a>
					`
					ul.appendChild(lis);
					//判断值是否一样 ，若一样则给另一个赋值，不一样给当前赋值
					
					if(kong[num]==this.zdyIndex){
						if(num==1){
							kong[2]=this.zdyIndex;
						}else{
							kong[1]=this.zdyIndex;
						}
					}else{
						kong[num]=this.zdyIndex;
					}
					
					
					//获取标签
				}else{
					
					//判断是否存在
					if(num >0){
						num--;
						this.parentNode.index=undefined;
						this.parentNode.style.background='rgb(21,95,149)';
						this.style.color='#fff';
						var li=ul.querySelector('li');
						ul.removeChild(li);
					}
					
					
					
				}
				if(num==0){
					duiBi.style.display='none';
				}
				
				
			})
		}
		chaoguo.onclick=function(){
			this.style.display='none';
		}
		ul.addEventListener('click',function(ev){
			//获取页面的li
			var lsi=document.querySelectorAll('.commit-bottom ul li');
			//获取左边的li
			var lis=ul.querySelectorAll('li');
			if(ev.target.nodeName=='A'){
				//判断点击的是那个
				if(parseInt(ev.target.getAttribute('data')) ==1){
					num--;
					lsi[kong[1]].lastElementChild.previousElementSibling.firstElementChild.style.color='#FFFFFF';
					lsi[kong[1]].lastElementChild.previousElementSibling.style.display='none';
					lsi[kong[1]].lastElementChild.previousElementSibling.style.background='rgb(21,95,149)';
					lsi[kong[1]].lastElementChild.previousElementSibling.index=undefined;
					//删除第一个
					this.removeChild(ev.target.parentNode);
				}else{
					num--;
					lsi[kong[2]].lastElementChild.previousElementSibling.firstElementChild.style.color='#FFFFFF';
					lsi[kong[2]].lastElementChild.previousElementSibling.style.display='none';
					lsi[kong[2]].lastElementChild.previousElementSibling.style.background='rgb(21,95,149)';
					lsi[kong[2]].lastElementChild.previousElementSibling.index=undefined;
					this.removeChild(ev.target.parentNode);
				}
			};
			if(num==0){
				duiBi.style.display='none';
			}
		});
		
		
		//点击开始对比
		var kaishiduibi=document.querySelector('#kaishiduibi');
		var qingkong=document.querySelector('#qingkong');
		var has=location.hash.split('#',2)[1];
		kaishiduibi.addEventListener('click',function(){
			//判断是否有两条数据
			var ils=document.querySelectorAll('.duibi-duibi ul li');
			if(ils.length==2){
				var nums=has+'+'+kong[1]+','+kong[2];
				window.open('compare-bj.html#'+nums);
				
				//清空对比栏
				duiBi.style.display='none';
				var l=ul.querySelectorAll('li');
				var lsi=document.querySelectorAll('.commit-bottom ul li')
				for(var i=0;i<l.length;i++){
					ul.removeChild(l[i]);
					lsi[kong[i+1]].lastElementChild.previousElementSibling.firstElementChild.style.color='#FFFFFF';
					lsi[kong[i+1]].lastElementChild.previousElementSibling.style.display='none';
					lsi[kong[i+1]].lastElementChild.previousElementSibling.style.background='rgb(21,95,149)';
					lsi[kong[i+1]].lastElementChild.previousElementSibling.index=undefined;
					num=0;
				}
				
			}else{
				chaoguo.style.display='block';
				ner.innerHTML='请选择至少两种商品进行比较';
			}
		})
		//清空对比栏
		qingkong.addEventListener('click',function(){
			duiBi.style.display='none';
			var l=ul.querySelectorAll('li');
			var lsi=document.querySelectorAll('.commit-bottom ul li')
			for(var i=0;i<l.length;i++){
				ul.removeChild(l[i]);
				lsi[kong[i+1]].lastElementChild.previousElementSibling.firstElementChild.style.color='#FFFFFF';
				lsi[kong[i+1]].lastElementChild.previousElementSibling.style.display='none';
				lsi[kong[i+1]].lastElementChild.previousElementSibling.style.background='rgb(21,95,149)';
				lsi[kong[i+1]].lastElementChild.previousElementSibling.index=undefined;
				num=0;
			}
		})
			
		
	}
	duibi();
}
gongneng();
//跳转下单页
function xiadan(){
	var ulImg=document.querySelectorAll('.commit-bottom ul img')
	var params = location.hash.split('#',2)[1];
	
	//点击图片跳转
	for(var i=0;i<ulImg.length;i++){
		ulImg[i].zdyImg=i;
		ulImg[i].onclick=function(){
			var num=0;
			var img=this.zdyImg;
			//判断有货还是没有货  //1有货，2无货
			if(this.parentNode.parentNode.lastElementChild.innerHTML=='有货'){
				num=1;
			}else{
				num=2;
			}
				open('Specific-commodities.html#'+params+'+'+img+'+'+num);
			
			//将点击过的数据存入localStorage
			if(localStorage.getItem('shuju')==null){
				localStorage.setItem('shuju',params+'+'+img)
			}else{
				//判断是否有相等的 没有相等的在添加
				var de=localStorage.getItem('shuju');
				//判断是否已经浏览过，若浏览过则不添加
				if(de.indexOf(params+'+'+img) == -1 ){
					localStorage.setItem('shuju',de+'X'+params+'+'+img);
				}
			}
		}
	}
}
xiadan();
//随机底部
// function sxjdb(){
	
// }


