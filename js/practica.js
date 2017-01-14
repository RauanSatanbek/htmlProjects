$(document).ready(function (){
	$("#div").hide();
	$("#menu").bind("click", name);
	$("#menu").bind("click", def);
	$("#html").bind("click", Stop);

});
var m,
	d,
	n;
function name(){
	n = 10;
	m = "#menu";
	d = "#div";
}
function def(){
	console.log(2);
	$(m).hide();
	$(d).show();
	var l = Math.round(Math.random() * 1250) + "px";
	var t = Math.round(Math.random() * 500) + "px";

	var r = Math.round(Math.random()) * 255;
	var g = Math.round(Math.random()) * 255;
	var b = Math.round(Math.random() * 255);

	var div = $("#div"); 
	var color = "rgb(" + r + ',' + g + ',' + b + ")";
	div.css({
		background:color,
		boxShadow:"0 0 20px rgba(" + r + ',' + g + ',' + b + ",.9)",
		marginLeft:l,
		marginTop:t
	});
	$("#count").css('color', color);
	if (n === 10)
		setTimeout("def()", 550);
}
var c = 0;
function Stop(){
	var e = event.target;
	if (e.id === "div"){
		c++;
		$("#count").html("" + c);
	}
	else if(e.id != "menu"){
		$("#count").html("0");
		c = 0;
		n = 11;
		$("#menu").show(800);
		$("#div").hide(1000);
		m = "#div";
		d = "#menu";
	}
}