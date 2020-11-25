function fx(){
	var hash = location.hash.split('#',2)[1];
	var one=hash.split('+')[0];
	var two=hash.split('+')[1];
	var three=hash.split('+')[2];
	var four=three.split(',');
	console.log(four);
	console.log(hash.split('+'))
	var arr=[],atr=[];
	//将数据钟每一个存入数组钟
	for(var aa in ddaattee){
		arr.push(aa);
	}
	for(var bb in ddaattee[arr[one]]){
		atr.push(bb);
	}
	//获取biandong
	var bian=document.querySelectorAll('.biandong');
	//获取j
	var j=document.querySelectorAll('.j');
	for(var i=0;i<bian.length;i++){
		bian[i].firstElementChild.firstElementChild.src = ddaattee[arr[one]][atr[two]][parseInt(four[i])+1].img;
		j[i].innerHTML='￥'+ddaattee[arr[one]][atr[two]][parseInt(four[i])+1].jiage;
	}
	
}
fx()