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
					if (index == 5){
							//$(".onview").addClass("mactive");
							$(".p4_ft-txt").addClass("fadeInUp animated");
					} else{$(".p4_ft-txt").removeClass("fadeInUp animated"); }
					
			}

		});
		var num = 0;
		var num1 = 0;
		$(".btn-open").click(function(){
			
			if (num == 0) {
				$("#navTop").animate({left:0});
				
				num = 1;
			}else{
				$("#navTop").animate({left:-250});
				num = 0;
			}
			
		});


		$(".btn-open").click(function(){
			if(num1 == 0){
				$(this).addClass("change");
				$(this).removeClass("close");

				

				num1 = 1;
			}else{
				$(this).removeClass("change");
				$(this).addClass("close");

				num1 = 0;
			}
			//console.log(num);
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
						//console.log(current);
						listMove();
					});

					$prev.on("click",function(){
						if(current > 0) {
							current--;
						} else {
							current = 1;
						};
						//console.log(current);
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

function init(){
	var today = new Date();
	
	function calendar() {
		var thisYear = today.getFullYear(); //2018년
		var thisMonth = today.getMonth(); //11월
		var thisDate = today.getDate(); //27일

		
		var firstDay = new Date(thisYear, thisMonth, 1).getDay();
		

		
		var arrLastNum = [31,28,31,30,31,30,31,31,30,31,30,31];
		
		if (thisYear % 4 == 0 && thisYear % 100 != 0 || thisYear % 400 == 0){
			arrLastNum[1] = 29;
		}
		var thisLastNum = arrLastNum[thisMonth];
		
		var rowNum = Math.ceil( (firstDay + thisLastNum) / 7);
		
		var str = '<table>';
		str += '<thead>';
		str += '<tr>';
		str += '<th scope="col">일</th>';
		str += '<th scope="col">월</th>';
		str += '<th scope="col">화</th>';
		str += '<th scope="col">수</th>';
		str += '<th scope="col">목</th>';
		str += '<th scope="col">금</th>';
		str += '<th scope="col">토</th>';
		str += '</tr>';
		str += '</thead>';
		str += '<tbody>';
		/*str += '<tr>';
		str += '<td>1</td>';
		str += '<td>2</td>';
		str += '<td>3</td>';
		str += '<td>4</td>';
		str += '<td>5</td>';
		str += '<td>6</td>';
		str += '<td>7</td>';
		str += '</tr>';*/

		var dayNum  = 1;
		for (var i = 1; i <= rowNum; i++){
			str += '<tr>'
			for (var k = 1; k <= 7; k++){
				if (i == 1 && k <= firstDay || dayNum > thisLastNum ){
					str += '<td> </td>';
				} else {
					str += '<td onclick=location.href="http://osaka-info.kr/restroom">' + dayNum + '</td>';
					dayNum++;
				}
			}
				
			str += '</tr>';
		}
		
		str += '</tbody>';
		str += '</table>';
		var innerCalendar = document.querySelector('.schedule-wrap > #calendar-1 > .inner-calendar');
		innerCalendar.innerHTML = str;
		var ct = document.querySelector('.calendar-txt');
		ct.innerHTML = thisYear + '. ' + (thisMonth + 1);
	}
	calendar();
	
	var btn1 = document.querySelector('.btnNext');
	var btn2 = document.querySelector('.btnPrev');

	btn1.onclick = nextMonth;
	btn2.onclick = prevMonth;

	function nextMonth() {
		today.setMonth(today.getMonth() + 1);
		calendar();
	}

	function prevMonth() {
		today.setMonth(today.getMonth() - 1);
		calendar();
	}
}
if (window.addEventListener) {
	window.addEventListener('load',init);
} else {
	window.attachEvent('onload',init);
}