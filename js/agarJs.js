var len;
function def(){
	for (var i = 0; i < 1; i++){
		var  d = document.createElement('div');
		var r = Math.round(Math.random()) * 254 + 1;
		var g = Math.round(Math.random() * (255 - 1) + 1);
		var b = Math.round(Math.random()) * 254 + 1;

		var top = Math.round(Math.random() * 550);
		var left = Math.round(Math.random() * 1050);

		d.setAttribute('onclick', 'up()');
		d.setAttribute("id", 'div' + (i + 1));
		d.style.marginLeft = left + 'px';
		d.style.marginTop = top + 'px';
		d.style.background  = 'rgb(' + r + ',' + g + ',' + b +  ')';
		div.appendChild(d);
	}
	len = document.getElementsByTagName('div').length;
	console.log(len);
}
var c = 1;
function up(){
	// console.log(document.getElementsByTagName('div').length);
	var t = event.target;
	t.style.background = 'black';
	t.style.zIndex = c;
	c++;
	if (event.keyCode == 87){
		t.parentNode.removeChild(t);
	}
}
var p = 1;
var c = 0;
var n = 0;
function run(){
	// console.log(45);
	for(var i = 1; i < 2; i++){
		var r = document.getElementById('div');
		if(r != null){
		// n = parseInt(r.style.marginLeft.substring(0,3));
		console.log(n);
		n+=p;
		r.style.marginLeft = n + 'px';
		if (n >= 1250) p = -1;
		if(n <= 0) p = 1;
		// c++;
		}
	}
	setTimeout('run()',1);
}

function colorAll(){
	for (var i = 1; i < len ; i++){
		var k = document.getElementById('div' + i);
		var r = Math.round(Math.random() * (255 - 1) + 1);
		var g = Math.round(Math.random() * (255 - 1) + 1);
		var b = Math.round(Math.random()) * 254 + 1;;
		k.style.background  = 'rgb(' + r + ',' + g + ',' + b +  ')';
	}
	// console.log(t.style.width);
	setTimeout('colorAll()',1000);
}
