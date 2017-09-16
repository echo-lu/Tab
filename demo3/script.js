function $(id) {
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload = function() {
	//当前高亮显示的页签索引
	var index = 0;
	var timer = null;

	//获取所有的页签和要切换的内容
	var lis = $('notice-tit').getElementsByTagName('li');
	var divs = $('notice-con').getElementsByTagName('div');

	//遍历每一个页签且给他们绑定事件
	for(var i=0;i<lis.length;i++) {
		lis[i].id = i;
		lis[i].onmouseover = function() {
			clearInterval(timer);
			changOption(this.id);
		}
		lis[i].onmouseout = function() {
			timer = setInterval(autoPlay,2000);
		}
	}

	if(timer) {
		clearInterval(timer);
		timer = null;
	}
	//添加定时器，改变当前高亮索引
	timer = setInterval(autoPlay,2000);

	function autoPlay() {
		index++;
		if(index>=lis.length) {
			index = 0;
		}
		changOption(index);
	}

	function changOption(curIndex) {
		for(var j=0;j<lis.length;j++) {
			lis[j].className = '';
			divs[j].style.display="none";
		}
		lis[curIndex].className = 'select';
		divs[curIndex].style.display="block";
		index = curIndex;
	}

	
}