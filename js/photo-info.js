/* ================================================================ 
This copyright notice must be untouched at all times.
Copyright (c) 2009 Stu Nicholls - stunicholls.com - all rights reserved.
=================================================================== */
$(document).ready(function(){

$(".wrap div").hover(function() {
	$(this).animate({"top": "-300px"}, 500, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "0px"}, 500, "swing");
});

});
$(document).ready(function(){

$(".wrap2 div").hover(function() {
	$(this).animate({"top": "-300px"}, 500, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "0px"}, 500, "swing");
});

});
$(document).ready(function(){

$(".wrap3 div").hover(function() {
	$(this).animate({"top": "-300px"}, 500, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "0px"}, 500, "swing");
});

});
$(document).ready(function(){

$(".wrap4 div").hover(function() {
	$(this).animate({"top": "-300px"}, 500, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "0px"}, 500, "swing");
});

});
$(document).ready(function(){

$(".wrap5 div").hover(function() {
	$(this).animate({"top": "-300px"}, 500, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "0px"}, 500, "swing");
});

});



// JavaScript Document
function TabMove(id,index,count,link)
{
var defaultCss="kjy";
var SelectCss="kjy_a";
for(var n=1;n<=count;n++)
{
document.getElementById("Button"+id+n).className=defaultCss;
document.getElementById("ContentBox"+id+n).style.display='none';
}
document.getElementById("Button"+id+index).className=SelectCss;
document.getElementById("ContentBox"+id+index).style.display='';
if(link!=null && link!="")document.getElementById("TabLink"+id).href=link;

}

//专家切换
function slideSwitch(idBig,idSmall,prev,next,numVar,pWidth){
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(idBig);
	var oList = G(idSmall);
	var oPrev = G(prev);
	var oNext = G(next);
	var oSwitch = G("exchange");

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	var w2 = oListLi[0].offsetWidth;

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width =(w2 + pWidth )*len2 + "px";

	var index = 0;
	
	var num = numVar;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * (w2+pWidth)});
		}else{
			Animate(oListUl, {left: - (len2 - num) * (w2+pWidth)});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "cur";
			}
		}
	}
	
	oNext.onclick = function(){
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onclick = function(){
		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}

	if(oSwitch){
		oSwitch.onclick=function(){
		index = (index>4) ? index%4 : index+=4;
		index = index == len2 ? 0 : index;
		Change();
			}
		}
	
	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
	
}

;(function($){
	$.extend({
							 
		});
	$.fn.extend({
		"addStyle":function(tag,sty){     
				var $id=document.getElementById("nid");
				var $ii=null;
				if($id){
					$ii=parseInt($id.getAttribute("data"));
					}else{
						
						}
				var $li=$(this).find(tag);
				$($li[$ii-1]).addClass(sty);
				$li.each(function(i,e){
					$(e).hover(function(){
						$($li.not($(this))).removeClass(sty);
						$(this).addClass(sty);
						},function(){
						$(this).removeClass(sty);
						$($li[$ii-1]).addClass(sty);
						});
					});
			},
		
			"downUp":function(tag1,tag2){
				var _this=$(this);
				var $Parent=$(this).find(tag1),$child=$Parent.find(tag2);
				var $h=$child.outerHeight();
				var timer=setInterval(moveUp,100);
				$Parent.hover(function(){
					clearInterval(timer);
					},function(){
					timer=setInterval(moveUp,100);
					});
				function moveUp(){
					var curTop=parseInt($Parent.css("margin-top"));
						$Parent.css("margin-top",(curTop-1)+"px");
						if((Math.abs(curTop)%27)==0){
							_this.find(tag2).first().appendTo(_this.find(tag1));
							curTop=0;
							$Parent.css("margin-top",(curTop-1)+"px");
							}
					}
				}			
		});
	})(jQuery);
//专家切换

	$(document).ready(function(e) {
		$("#left-list").addStyle("li","cur");	
		slideSwitch("picBox","listBox","prev","next",4,5);//这行是文章页的代码
	});