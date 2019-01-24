$(document).ready(function(){
		$("#fullpage").fullpage({
			anchor:["1st","2st","3st","4st","5st","6st"],
			menu:"#topMenu",
			// navigation:true
			'afterLoad':function(anchorsLink,index){
				console.log(index);
					if (index == 3){
							//$(".onview").addClass("mactive");
							$(".ft-txt-box").addClass("fadeInUp animated");
							$(".list-wrap").addClass("fadeInUp animated");
					} else{
						$(".ft-txt-box").removeClass("fadeInUp animated"); 
						$(".list-wrap").removeClass("fadeInUp animated"); 
					}
					if (index == 2){
							//$(".onview").addClass("mactive");
							$(".list-box").addClass("fadeInUp animated");
					} else{$(".list-box").removeClass("fadeInUp animated"); }
					
			}

		});
		var num = 0;
		var num1 = 0;
		$(".btn-open").click(function(){
			
			if (num == 0) {
				$("#navTop").animate({left:0});
				
				num = 1;
			}else{
				$("#navTop").animate({left:-190});
				num = 0;
			}
		});


		$(".btn-open").click(function(){
			if(num1 == 0){
				$(this).addClass("change");	
				num1 = 1;
			}else{
				$(this).removeClass("change");
				num1 = 0;
			}

		});
		/*p1_slider*/
		var current = 0;
				var $thumbnail = $("#thumbnail");
				var $container = $thumbnail.find(".container > ul");
				var $thumb = $container.find(".thumb");
				var $image = $("#gallery #image > p");
				
				var $prev = $thumbnail.find(".prev");
				var $next = $thumbnail.find(".next");
				
				var $containerHeight = $thumbnail.find(".container").height();
					$next.on("click",function(){
						
						if(current < 1) {
							current++;
						} else {
							current = 0;
						};
						console.log(current);
						listMove();
					});

					$prev.on("click",function(){
						if(current > 0) {
							current--;
						} else {
							current = 1;
						};
						console.log(current);
						listMove();
					});

					function listMove(){
						var tl = $containerHeight * current * -1
						//$container.css("left",tl);
						$container.stop().animate({top:tl});
					};

					$thumb.on("click",function(){
						$image.css("display","none");
						var i = $(this).index();
						$image.eq(i).css("display","block");
					});

	});