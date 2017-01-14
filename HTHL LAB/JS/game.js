$(document).ready(function(){
	// $("#btn").on("click",function (){
	// 	$("#likeImg1").attr("id","likeImg2");
	// });
	var id = "imgScrepka";

		// var left = Number($("#" + id).css("marginLeft").substr(0,$("#" + id).css("marginLeft").length - 2)),
		// 	down = Number($("#" + id).css("marginTop").substr(0,$("#" + id).css("marginTop").length - 2)),
		var left = 399;
		var down = -3;
		m = [],
		speed = 1,
		jump = 200,
		time = 2000;
	$(window).bind("keydown",function(){
		console.log(left);
		var keyDown = event.keyCode;
		if(!m.includes(keyDown))
			m.push(keyDown);
		if(m.includes(68))
			left+=speed;
		if(m.includes(83))
			down+=speed;
		if(m.includes(87))
			down-=speed;
		if(m.includes(65))
			left-=speed;
		// if(m.includes(32)){
		// 	down -= jump;
		// 	$("#hero").animate({marginTop:down + "px"},time);
		// 	console.log($("#hero").css("marginTop"));
		// 	down += jump;
		// 	$("#hero").animate({marginTop:down + "px"},time);
		// }

		// if(down >= 500)
		// 	down = 500;
		// $("#" + id).css({
		// 	"marginTop":down + "px",
		// 	"marginLeft":left + "px"
		// });
		console.log(down + "px "+(left + "px"));
		$("#" + id).css('background-position', left + "px "+(down + "px"));
		
		$(window).bind("keyup",function(){
			var keyUp = event.keyCode;
			if(m.includes(keyUp)){
				var index = m.indexOf(keyUp);
				delete m[index];
			}
		});
	
	});

});

<script>
	$(document).ready(function(){
	var id = "loginForm";
		var left = 0;
		var down = 0;
		m = [],
		speed = 1,
		jump = 200,
		time = 2000;
	$(window).on("keydown",function(){
		var keyDown = event.keyCode;
		if(!m.includes(keyDown))
			m.push(keyDown);
		if(m.includes(68))
			left+=speed;
		if(m.includes(83))
			down+=speed;
		if(m.includes(87))
			down-=speed;
		if(m.includes(65))
			left-=speed;
		console.log(down + "px "+(left + "px"));
		$("#" + id).css('margin', down + "px "+(left + "px"));
		
		$(window).bind("keyup",function(){
			var keyUp = event.keyCode;
			if(m.includes(keyUp)){
				var index = m.indexOf(keyUp);
				delete m[index];
			}
		});
	
	});

});

</script>