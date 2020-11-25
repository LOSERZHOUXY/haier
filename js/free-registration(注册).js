/* 注册页面 */

//判断用户点击的是邮箱还是手机

//注册流程一
//获取三个form表单
var formS=$('form');
//默认手机是不可点击的
var loginMode=$('.login-mode')[0];
loginMode.lastElementChild.style.color='#005AA9';
loginMode.lastElementChild.style.cursor='pointer';
bind(loginMode.lastElementChild,'click',function(){
	var onoff=false;
	var onof=false;
	var code='';
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
	        //循环组成验证码的字符串
	for (var i = 0; i < 4; i++){
		//获取随机验证码下标
		var charNum = Math.floor(Math.random() * 62);
		//组合成指定字符验证码
		code += codeChars[charNum];
	}
	var str=`
			<div class="shoujihaoma">
				<label>邮箱</label>
				<input style='margin-left: 8px;' class="zhanghu" type="" name="" id="phon-info" value="" placeholder="请输入邮箱" />
				<div class="tixing" style="margin-left: -15px;">
					<i style="background: url(img/tishi_03.gif) no-repeat;"></i>
					<span>请输入正确的邮箱</span>
				</div>
			</div>
			<div class="Verification-Code">
				<label style="margin-left: -6px;">验证码</label>
				<input class="zhanghu" type="" name="" id="yanzheng" value="" placeholder="请输入验证码" />
				<div class="tixing" style="margin-right:15px">
					<i style="background: url(img/tishi_03.gif) no-repeat;"></i>
					<span>请输入正确的验证码</span>
				</div>
				<button type="button" style="letter-spacing:5px; left:196px">${code}</button>
			</div>
			<p class="login-mode">
				<span>手机</span>
				<span></span>
				<span>邮箱</span>
			</p>
			<button class="nex-one-bu" type="button">下一步</button>
			`;
	formS[0].innerHTML=str;
	var loginMode=$('.login-mode')[0];
	loginMode.firstElementChild.style.color='#005AA9';
	loginMode.firstElementChild.style.cursor='pointer';
	bind(loginMode.firstElementChild,'click',function(){
		location.reload();
	})
	//获取提示的div
	var tixing=$('.tixing');
	//获取zhanghu
	var zhanghu=$('.zhanghu');
	// 获取下一步按钮
	var next=$('.nex-one-bu')[0];
	forEach(zhanghu,function(el,i){
		//光标出现消失事件
		getGuangbiao(el);
	});
	
	//对邮箱进行判断
	zhanghu[0].oninput=function(){
		var bl=this.value;
		if(!(/^\w+@[a-z0-9]+\.[a-z]+$/.test(bl))){
			this.nextElementSibling.style.display='block';
			 if(this.value !=''){
				 onoff=false;
			 }else{
				  onoff=true;
			 }
		}else{
			this.nextElementSibling.style.display='none';
			 onoff=true;
		}
	}
	//对验证码进行校验
	zhanghu[1].oninput=function(){
		var yz=this.value;
		if(yz == code){
			this.nextElementSibling.style.display='none';
			 onof=true;
		}else{
			this.nextElementSibling.style.display='block';
			 if(this.value !=''){
				 onof=false;
			 }else{
				 onof=true;
			 }
		}
	}
	
	bind(next,'click',function(){
		if (zhanghu[0].value=='') {
			xiaoxitishi.style.display='block';
			tishiP.innerHTML='邮箱不能为空';
		}else if(zhanghu[1].value ==''){
			xiaoxitishi.style.display='block';
			tishiP.innerHTML='验证码不能为空';
		}else if(!onoff){
			xiaoxitishi.style.display='block';
			tishiP.innerHTML='请输入正确的邮箱';
		}else if(!onof){
			xiaoxitishi.style.display='block';
			tishiP.innerHTML='验证码不正确';
		}else{
			formS[0].style.display='none';
			formS[1].style.display='block';
			technological[1].style.background='url(http://cdn09.ehaier.com/sg2019/v5/images/login/rgstep_1.png )'
			//将邮箱存入localstorage中
			window.localStorage.setItem('userInformation',zhanghu[0].value);
		}
	})
})
//获取顶部的三个div
var technological=$('.technological>div');
//获取input框
var zhanghu=$('.zhanghu');
var tixing=$('.tixing');
var onoff=false;
var onof=false;
//获取密码的input框
var passSure=$('.pass-sure');
// 获取下一步按钮
var next=$('.nex-one-bu')[0];
var tishiP=$('.tishi-p')[0];
//获取完成按钮
var seccse=$('.seccse')[0];
var tishiTis=$('.tishi')[0];
//获取遮罩层
var xiaoxitishi=$('.xiaoxitishi')[0];
//获取进入商城的按钮
var enterF=$('.enter-f')[0];
//获取到光标时placeholder小时
forEach(zhanghu,function(el,i){
	//光标出现消失事件
	getGuangbiao(el);
	
});

//对手机号进行校验
zhanghu[0].oninput=function(){
	var bl=this.value;
	if(!(/^1[3456789]\d{9}$/.test(bl))){
		this.nextElementSibling.style.display='block';
		 if(this.value !=''){
			 onoff=false;
		 }else{
			  onoff=true;
		 }
	}else{
		this.nextElementSibling.style.display='none';
		 onoff=true;
		 //验证吗倒计时
		 var fasongyanzma=$('.fasongyanzma')[0];
		 bind(fasongyanzma,'click',function(){
			//  $.ajax({
		    //     url: "http://localhost:8080/duanxin?phone=15775220037",
			//     type: "GET",
			// 	dataType: "json"
			// })
			var	zhanghao=zhanghu[0].value;
			var xhr = new XMLHttpRequest();
			xhr.open("get","http://localhost:8080/duanxin?phone="+zhanghao);
			xhr.send();
			console.log(xhr.readyState)
		 	if(fasongyanzma.innerHTML=='发送验证码' || fasongyanzma.innerHTML=='重新发送'){
		 		var a=60;
		 		fasongyanzma.innerHTML=a+"s";
		 		var clear = setInterval(function(){
		 			a--;
		 			fasongyanzma.innerHTML=a+'s';
		 			if(a<=0){
		 				fasongyanzma.innerHTML='重新发送';
		 				clearInterval(clear);
		 			}
		 		},1000)
		 	}
		 
		 })
	}
}
//对验证码进行校验
zhanghu[1].oninput=function(){
	var yz=this.value;
	if(yz==5972){
		this.nextElementSibling.style.display='none';
		 onof=true;
	}else{
		this.nextElementSibling.style.display='block';
		 if(this.value !=''){
			 onof=false;
		 }else{
			 onof=true;
		 }
	}
}

bind(next,'click',function(){
	if (zhanghu[0].value=='') {
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='手机号不能为空';
	}else if(zhanghu[1].value ==''){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='验证码不能为空';
	}else if(!onoff){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='请输入正确的手机号';
	}else if(!onof){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='验证码不正确';
	}else{
		formS[0].style.display='none';
		formS[1].style.display='block';
		technological[1].style.background='url(http://cdn09.ehaier.com/sg2019/v5/images/login/rgstep_1.png )'
		//将手机号存入localstorage中
		window.localStorage.setItem('userInformation',zhanghu[0].value);
	}
})
bind(passSure[0],'input',function(){
	var v=this.value;
	//纯数字，字母或者特殊字符
	/* 至少6字符 至多20个字符
	至少1数字字符
	至少1小写字母
	至少1大写字母
	至少1特殊字符
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/ */
	//定义正则
	var a=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,20}$/;
	//字母，数字，大写字母，特殊字符三选一
	var b= /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,20}$/
	//纯数字或字符
	var c=/^[0-9]{6,20}$/;
	var d=/^[a-z]{6,20}$/;
	var e=/^[A-Z]{6,20}$/;
	if(v !=''){
		tishiTis.style.opacity='1';
		tishiTis.firstElementChild.style.background='#f79100';
		tishiTis.firstElementChild.nextElementSibling.style.background='#c4c4c4';
		tishiTis.firstElementChild.nextElementSibling.nextElementSibling.style.background='#c4c4c4';
	}else{
		tishiTis.style.opacity='0';
	}
	if(b.test(v)){
		tishiTis.firstElementChild.style.background='#f79100';
		tishiTis.firstElementChild.nextElementSibling.style.background='#f79100';
		tishiTis.firstElementChild.nextElementSibling.nextElementSibling.style.background='#c4c4c4';
	}
	if(a.test(v)){
		tishiTis.firstElementChild.style.background='#f79100';
		tishiTis.firstElementChild.nextElementSibling.style.background='#f79100';
		tishiTis.firstElementChild.nextElementSibling.nextElementSibling.style.background='#f79100';
	}
})
bind(seccse,'click',function(){
	var passur = passSure[0].value;
	var pas=passSure[1].value;
	var c=/^[0-9]{6,20}$/;
	var d=/^[a-z]{6,20}$/;
	var e=/^[A-Z]{6,20}$/;
	if(passur ==''){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='密码不能为空';
	}else if(pas ==''){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='请在次确认密码';
	}else if(passur.length<6 ){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='密码为数字、字母、特殊符号的组合，长度6位~20位（字母区分大小写）';
	}else if(pas != passur ){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='两次密码不一样';
	}else if(c.test(passur) || d.test(passur) || e.test(passur) ){
		xiaoxitishi.style.display='block';
		tishiP.innerHTML='密码太过简单，请重新输入';
	}else{
		//获取localStorage中userInformation的值
		var a=window.localStorage.getItem('userInformation');
		window.localStorage.setItem('userInformation',a+'分'+passur);
		formS[0].style.display='none';
		formS[1].style.display='none';
		formS[2].style.display='block';
		technological[2].style.background='url(http://cdn09.ehaier.com/sg2019/v5/images/login/rgstep_3.png)';

	}
})
bind(enterF,'click',function(){
	window.location.href='signIn.html';
})
//进行事件委托
xiaoxitishi.addEventListener('click',function(e){
	//找Div  Span  Button 找到就给他们添加
	if(e.target.toString().indexOf('Div')!= -1 || e.target.toString().indexOf('Span') != -1 || e.target.toString().indexOf('Button') !=-1){
		xiaoxitishi.style.display='none';
	}
})
//定义一个当input获取光标时placeholder内容消失，若没有内容在出现
/* 
	参数一：元素
 
 */
function getGuangbiao(el){
	//失去光标且用户没有输入内容时出现
	el.onblur=function(){
		if(el.value ==''){
			el.nextElementSibling.style.display='block';
		}
	}
}






