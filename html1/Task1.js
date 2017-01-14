var m = ['../images/7.jpg', '../images/2.jpg']
var c = 0;
function def(){
	c = Math.round(Math.random());
	document.getElementById("img").src = m[c];
}