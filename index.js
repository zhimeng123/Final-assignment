// JavaScript Document
window.onload=function(){
	// 实现下拉菜单
	var test=document.getElementById("test");
	var list=document.getElementById("list");
	var span=test.getElementsByTagName("span")[0];
	var a=test.getElementsByClassName("a")[0];
	
	
//鼠标移入
 test.onmouseover=function(){
	this.style.border="1px solid #E5E5E5 ";
	a.style.color="#FE4912";
	span.className="span2";
	list.style.display="block";
}

// 鼠标移出
test.onmouseout=function(){
	this.style.border="";
	a.style.color="";
	span.className="";
	list.style.display="";
}
//改变 联系客服的 CSS样式
var lx=document.getElementById("lx");
var span1=lx.getElementsByClassName("span")[0];
var al=lx.getElementsByTagName("a")[0];
lx.onmouseover=function(){
	al.style.color="#FE4912";
	span1.className="span3";
	
}
lx.onmouseout=function(){
	al.style.color="";
	span1.className="";
}
}





// 实现轮播效果
var current_index=0;
var timer=window.setInterval(autoChange,50000);
var button_li=document.getElementById("button").getElementsByTagName("li");
var pic_div=document.getElementById("banner_pic").getElementsByTagName("div");
for(var i=0;i<button_li.length;i++){
	button_li[i].onmouseover=function(){
		if(timer){
			clearInterval(timer);
		}
		for( var j=0 ;j<pic_div.length;j++){
			if(button_li[j]==this){
				current_index=j;
				button_li[j].className="current";
				pic_div[j].className="current";
			}
			else{
				pic_div[j].className="pic";
				button_li[j].className="but";
			}
		}
	}
	// 鼠标移出事间
	button_li[i].onmouseout=function(){
		timer=setInterval(autoChange,5000);
		
	}
}
function autoChange(){
	++current_index;
	if(current_index==button_li.length){
		current_index=0;
	}
	for(var i=0;i<button_li.length;i++){
		if(i==current_index){
			button_li[i].className="current";
			pic_div[i].className="current";
		}
		else{
			button_li[i].className="but";
			pic_div[i].className="pic";
		}
	}
	
}

 //实现tab 栏切换
var m_essage_li=document.getElementById("m_essage").getElementsByTagName("li");
var message_con_dl=document.getElementById("message_con").getElementsByT agName("dl");
for(var c=0;c<m_essage_li.length;i++){
	m_essage_li[c].onmouseover=function(){
		for(var b=0;b<message_con_dl.length;b++){
			if(m_essage_li[b]==this){
				m_essage_li[b].className="current";
				massage_con_dl[b].className="current";
			}
			else{
				m_essage_li[b].className="";
				message_con_dl[b].className="";
			}
		}
	}
}

































































