var loginTab=$('.login_Tab')[0];
var formBox=$('.form-box')[0];
loginTab.firstElementChild.style.borderBottom ='2px #32beff solid ';
bind(loginTab.firstElementChild,'click',function(){
	loginTab.lastElementChild.style.borderBottom='2px #e4e4e4 solid ';
	loginTab.lastElementChild.style.color='#000000';
	this.style.borderBottom ='2px #32beff solid ';
	this.style.color= '#32beff';
	location.reload();
})
bind(loginTab.lastElementChild,'click',function(){
	loginTab.firstElementChild.style.borderBottom ='2px #e4e4e4 solid ';
	loginTab.firstElementChild.style.color='#000000';
	this.style.borderBottom ='2px #32beff solid ';
	this.style.color= '#32beff';
	var str='';
	str=`
		<div class="form-Account">
			 <span class="glyphicon glyphicon-user" ></span>
			 <input class="yanz" type="" name="" id="user-us" value="" placeholder="请输入手机号"/>
			 <p></p>
		</div>
		<div class="form-mima">
			<span class="glyphicon glyphicon-lock"></span>
			<input class="yanz" type="password" name="" id="pass-s" value=""  placeholder="请输入手机验证码"/>
			<p></p>
			<button class="yanzhen" type="button" style="position: absolute;top:2px;height:30px;right:2PX;width: 100px;font-size:12px;color:#32beff;border: none;background: #FFF;border-left: 1PX #666 solid;">获取手机验证码</button>

		</div>
		<div class="sign-in-user">登录</div>
		<span></span>					
		`
	formBox.innerHTML=str;
	
	
	var yanz=$('.yanz');
	bind(yanz[0],'input',function(){
		var val=this.value;
		//获取localstoroge的值
		var loca=window.localStorage.getItem('userInformation');
		if(val==''){
			this.nextElementSibling.style.display='block';
			this.nextElementSibling.innerHTML="请输入手机号";
		}else if(!(/^1[3456789]\d{9}$/.test(val))){
			this.nextElementSibling.style.display='block';
			this.nextElementSibling.innerHTML="请输入正确的手机号";
		}else{
			this.nextElementSibling.style.display='none';
		}
	})
	bind(yanz[1],'input',function(){
		var valuee=this.value;
		var loca=window.localStorage.getItem('userInformation');
		if(valuee=='' || valuee.length<4){
			this.nextElementSibling.style.display='block';
			this.nextElementSibling.innerHTML="请输入4位验证码";
		}else{
			this.nextElementSibling.style.display='none';
		}
	})
	var signInuser=$('.sign-in-user')[0];
	bind(signInuser,'click',function(){
		var lo= window.localStorage.getItem('userInformation');
		if(yanz[0].value==''){
			yanz[0].nextElementSibling.style.display='block';
			yanz[0].nextElementSibling.innerHTML="请输入手机号";
			if(yanz[1].value=='' || yanz[1].value.length <4){
				yanz[1].nextElementSibling.style.display='block';
				yanz[1].nextElementSibling.innerHTML="验证码不得少于4位";
			}else{
				yanz[1].nextElementSibling.style.display='none';
			}
		}else if(/^\w+@[a-z0-9]+\.[a-z]+$/.test(yanz[0]) || /^1[3456789]\d{9}$/.test(yanz[0])){
			yanz[0].nextElementSibling.style.display='none';
		}else if(yanz[1].value==''){
			alert('验证码不能为空！');
		}
		else if(lo==null || lo.split('分')[0] != yanz[0].value){
			alert('亲！该账号还没有注册！请先注册！')
			 return false
		}else if(yanz[1].value !=1111){
			alert('验证码错误！');
		    return false;
		}else{
			location.assign('index.html?yijidenglu')
		}
	})
	
	
	
	
	
	
	
	//倒计时验证
	var yanzhen=$('.yanzhen')[0];
	bind(yanzhen,'click',function(){
		if(yanzhen.innerHTML=='获取手机验证码' || yanzhen.innerHTML=='重新发送'){
			var a=60;
			yanzhen.innerHTML=a+"s";
			var clear = setInterval(function(){
				a--;
				yanzhen.innerHTML=a+'s';
				if(a<=0){
					yanzhen.innerHTML='重新发送';
					clearInterval(clear);
				}
			},1000)
			
		}
	})
})

var yanz=$('.yanz');
bind(yanz[0],'input',function(){
	var val=this.value;
	//获取localstoroge的值
	var loca=window.localStorage.getItem('userInformation');
	if(val==''){
		this.nextElementSibling.style.display='block';
		this.nextElementSibling.innerHTML="请输入手机号";
	}else if(!(/^\w+@[a-z0-9]+\.[a-z]+$/.test(val) || /^1[3456789]\d{9}$/.test(val))){
		this.nextElementSibling.style.display='block';
		this.nextElementSibling.innerHTML="请输入正确的手机号或邮箱";
	}else{
		this.nextElementSibling.style.display='none';
	}
})
bind(yanz[1],'input',function(){
	var valuee=this.value;
	var loca=window.localStorage.getItem('userInformation');
	if(valuee=='' || valuee.length<6){
		this.nextElementSibling.style.display='block';
		this.nextElementSibling.innerHTML="密码不得少于6位！";
	}else{
		this.nextElementSibling.style.display='none';
	}
})
var signInuser=$('.sign-in-user')[0];
bind(signInuser,'click',function(){
	var lo= window.localStorage.getItem('userInformation');
	if(yanz[0].value==''){
		yanz[0].nextElementSibling.style.display='block';
		yanz[0].nextElementSibling.innerHTML="请输入登录号";
		if(yanz[1].value=='' || yanz[1].value.length <6){
			yanz[1].nextElementSibling.style.display='block';
			yanz[1].nextElementSibling.innerHTML="密码不得少于6位";
		}else{
			yanz[1].nextElementSibling.style.display='none';
		}
	}else if(yanz[1].value==''){
		alert('密码不能为空！');
		return false;
	}else if(/^\w+@[a-z0-9]+\.[a-z]+$/.test(yanz[0]) || /^1[3456789]\d{9}$/.test(yanz[0])){
		yanz[0].nextElementSibling.style.display='none';
	}else if(lo==null){
		alert('亲！该账号还没有注册！请先注册！')
		 return false
	}else if(lo.split('分')[0] != yanz[0].value){
		alert('输入的账号或密码有误！')
		 return false;
	}else if(lo.split('分')[1] != yanz[1].value){
		alert('输入的账号或密码有误！')
		 return false;
	}else{
		location.assign('index.html?yijidenglu')
	}
})


