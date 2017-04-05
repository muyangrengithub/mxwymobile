$(function(){
	//banner轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    //加载更多
   /* var lis=$("section .con-main ul").find("li");
    for(var i=5;i<lis.length;i++){
    				if(i%8>=5&&i%5<8){
    					$(lis[i]).hide();
    				}	
		}
    var flag=true;
	$("section .add").click(function(){
		if(flag){
			for(var i=5;i<lis.length;i++){
				if(i%8>=5&&i%5<8){
					$(lis[i]).hide();
				}
				$("section .add p").html("点击加载更多");
				flag=false;
			}
		}else{
			for(var i=5;i<lis.length;i++){
				if(i%8>=5&&i%5<8){
					$(lis[i]).show();
				}
				$("section .add p").html("点击收起更多");
				flag=true;
			}
		}
	
	})*/
	//切换加载效果
	$("section .con-main").each(function(index){
		$($("section .con-main")[index]).find("ul li:gt(4)").hide();
	});

	var divs=$("section .con-main");
	
	var flag=true;
	$("section .section-school .con-main:gt(0)").hide();
	$("section .con-top ul li").each(function(index){
		$(this).hover(function(){
			$(this).addClass("hover").stop(true,true).siblings().removeClass("hover");
			$("section .section-school .main .con-main").hide().eq(index).show();
			$(divs[index]).siblings().find("ul li:gt(4)").hide();
		});
		$("section .add").click(function(){
			if(flag){
				$(divs[index]).find("ul li:gt(4)").show();
				$("section .add p").html("点击收起更多");
				flag=false;
			}else{
				$(divs[index]).find("ul li:gt(4)").hide();
				$("section .add p").html("点击加载更多");
				flag=true;
			}
		});
	})
	//展开优选留学方案
	var flag=true;
	$("#show").click(function(){
		if(flag){
			$(".abroad_show").slideDown();
			flag=false;
			$(this).addClass("revolve");
		}else{
			$(".abroad_show").slideUp();
			flag=true;
			$(this).removeClass("revolve");
		}
	})
	//侧边栏滑出效果
	var flag=true;
	$("#showaside").click(function(){
		if(flag){
			this.src="images/ico_btn2.png";
			$(".article").animate({"right":"2.55rem"},500);
			$(".aside").animate({"right":"0rem"},500);
			flag=false;
		}else{
			this.src="images/ico_btn2_hov.png";
			$(".article").animate({"right":"0"},500);
			$(".aside").animate({"right":"-2.55rem"},500);
			flag=true;
		}
	})
    //左弹图标
	var flag=true;
	$("#pop").click(function(){
		if(flag){
			this.src="images/ico_btn23.png";
			$(".imgpop").each(function(index){
				$($(".imgpop")[index]).animate({"left":0.13+0.8*(index+1)+"rem"},500);
			})
			flag=false;
		}else{
			this.src="images/ico_btn22.png";
			$(".imgpop").each(function(index){
				$($(".imgpop")[index]).animate({"left":"0.13rem"},500);
			})
			flag=true;
		}
	})
	 //右弹窗
	 var n=0;
	 $("#popw").click(function(){
	 	$(".windowpop").slideDown(400);
	 	$(".over").slideDown(400);
	 	$(this).animate({"right":"-0.76rem"},400);
	 	n=0;
	 })
	 $("body").click(function(){
	 	n++;
	 	if(n>=2){
	 		$(".windowpop").slideUp(400);
	 		$(".over").slideUp(400);
	 		$("#popw").animate({"right":"0rem"},400);
	 	}
	 })
	  $(".windowpop").click(function(){
	 	n=0;
	 })
	 //10秒右弹窗一次
	 setInterval(showwindow,10000);
	 function showwindow(){
	 	$(".windowpop").show(500);
	 	$(".over").show(500);
	 }
	 //消息轮播
	 function school(){
	 	$("#myul li:first").animate({"marginTop":"-0.3rem"},500,function(){
	 		$(this).css({"marginTop":"0rem"}).appendTo($("#myul"));
	 	});
	 }
	 setInterval(school,500);
	 //底部字库
	 $("footer ul li").each(function(index){
	 	$(this).hover(function(){
	 		$(this).addClass("on").siblings().removeClass("on");
	 		$(this).find("p").addClass("on");
	 		$(this).siblings().find("p").removeClass("on")
	 	})
	 })
	 //回到顶部
	 $("#gotop").click(function(){
	 	 $("body").animate({"scrollTop":"0"},500);
	 })
})
