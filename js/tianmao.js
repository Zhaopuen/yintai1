$(function(){
  var boxbig=$(".banner-middle")[0]
var items=document.getElementsByClassName("xiaotu");
var masks=document.getElementsByClassName("mask");
var btumids=document.getElementsByClassName("btumid");
var banner_item=document.getElementsByClassName("item");
var banner_mid=document.getElementsByClassName("banner")[0];
var banner_color=["#E8E8E8","#2CB1F6","#CEEBF1","#FFF613","#E8E8E8"]
	for (var i = 0; i < items.length; i++) {
		items[i].index=i;
		items[i].onmouseover=function(){
        masks[this.index].style.opacity="0.8";
		 };
		 items[i].onmouseout=function(){
	      masks[this.index].style.opacity="0";	
	};
}
for (var i = 0; i < btumids.length; i++) {
	btumids[i].index=i;
	btumids[i].onmouseover=function(){
		num=this.index;
		for (var i = 0; i < btumids.length; i++) {
			banner_item[i].style.display="none";
			btumids[i].style.borderColor="#fff"
		};
		banner_item[this.index].style.display="block";
		btumids[this.index].style.borderColor="#555";
		banner_mid.style.backgroundColor=banner_color[this.index]
	}
};
var lunbo=setInterval(move,3000)
var num=0;
 function move(){
	num++;
	if(num==5){
		num=0
	}
	for (var i = 0; i < btumids.length; i++) {
		banner_item[i].style.display="none"
		btumids[i].style.borderColor="#fff"
	};
		banner_item[num].style.display="block"
		btumids[num].style.borderColor="#555"
		banner_mid.style.backgroundColor=banner_color[num]
	};
  boxbig.onmouseover=function(){
   clearInterval(lunbo)
 }
 boxbig.onmouseout=function(){
   lunbo=setInterval(move,3000)
 }


 




      	var topbar=$(".topbar")[0];
      	var floor=$(".floor")[0];
      	document.documentElement.scrollTop=1;
      	if(document.documentElement.scrollTop==1){
      		var scrollobj=document.documentElement;
      	}else{
      		var scrollobj=document.body;
      	}
      	var flag=true,flag2=true;
      	window.onscroll=function(){
          var st=scrollobj.scrollTop;
          // 当滚动的高度大于多少
          if(st>650){
          	if(flag){
          		flag=false;flag2=true;
          	animate(topbar,{top:0})
          	animate(floor,{width:36,height:370})
          	}
          }else{
          	if(flag2){
      flag=true;flag2=false;
          	animate(topbar,{top:-80})
          	animate(floor,{width:0,height:0})	
          }
          }
      	}
      	var floorbtn=$(".floorbtn")
      	var contents=$(".qinzishiguang")
      	for (var i = 0; i < floorbtn.length; i++) {
      		floorbtn[i].index=i;
      		floorbtn[i].onclick=function(){
      			var ot=contents[this.index].offsetTop;
      			animate(scrollobj,{scrollTop:ot})
      		}
      	};





// 右侧导航栏
var ce=$(".ce3");
var youdaohang=$(".youcedaohan1");
var t;
for (var i = 0; i < ce.length; i++) {
  clearTimeout(t);

  ce[i].index=i;
  hover(ce[i],function(){
            var that=this
            t=setTimeout(function(){
            youdaohang[that.index].style.display="block";
            animate(youdaohang[that.index],{left:-90,opacity:1},200)
          },100)
          },function(){
              clearTimeout(t)
            animate(youdaohang[this.index],{left:-130,opacity:0.6},200,function(){
            this.style.display="none"
          })
          })

};





      var huanxintu=$(".huanxintu1");
      var huanxin=$(".hxin");
      for (var i = 0; i < huanxintu.length; i++) {
        huanxin[i].index=i;
        hover(huanxin[i],function(){
          animate(huanxintu[this.index],{width:160,height:160,marginLeft:-10,marginTop:-5},600)
        },function(){
          animate(huanxintu[this.index],{width:140,height:140,marginLeft:0,marginTop:0},600)
        })
          
        }


   // 返回顶部
        var cedh=$(".cedh")[0];
        var obj=document.documentElement;
        cedh.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
          animate(obj,{scrollTop:0})
        }

        var floorbtnbtn=$(".floorbtnbtn")[0];
        var obj=document.documentElement;
        floorbtnbtn.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
          animate(obj,{scrollTop:0})
        }

//下拉菜单
    var box=$(".taobao-box")[0];
    var list=$(".taobao-list")[0];
      hover(box,function(){
        list.style.display="block"
    },function(){
        list.style.display="none"
    })
    

    var nvzhuang=$(".nvzhuang")[0];
    var bannerleftzi=$(".bannerleftzi")[0];
    hover(nvzhuang,function(){
      bannerleftzi.style.display="block"
    },function(){
      bannerleftzi.style.display="none"
    })
    hover(bannerleftzi,function(){
      bannerleftzi.style.display="block"
    },function(){
      bannerleftzi.style.display="none"
    })
        
})

