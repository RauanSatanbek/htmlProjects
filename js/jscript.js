var c = 1;

function box(){
	for (var i = 0; i < 40; i++){
		var div = document.createElement('div');
		var r = Math.round(Math.random() * (255 - 1) + 1);
		var g = Math.round(Math.random() * (255 - 1) + 1);
		var b = Math.round(Math.random()) * 254 + 1;

		var a = Math.round(Math.random() * (1150) + 1) + "px";
		var v = Math.round(Math.random() * (500) + 1) + "px";

		div.style.background = "rgb(" + r + "," + g + ',' + b + ')';
		div.style.marginLeft = a;
		div.style.marginTop = v;
		div.setAttribute('onclick', 'def()');
		div.setAttribute('onmousedown', 'isKeyPressed()')
		var g = "div" + (i + 1);

		div.setAttribute('id',g );
		body1.appendChild(div);
	}
}

function def(){
	var t = event.target;
	console.log(t.id);
	document.getElementById(t.id).style.zIndex = "" + c;
	c++;
}

function isKeyPressed() {
 	var t = event.target;
    if (event.shiftKey) {
		t.parentNode.removeChild(t);
    }
}