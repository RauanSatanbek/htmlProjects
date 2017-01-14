var m = ['../images/7.jpg', '../images/2.jpg','../images/3.jpg','../images/4.jpg']
var k = m.length;
var c = 0;
var v = 0;
function right(){
	c++;
	if (c == k){
		c = 0;
	}
	document.getElementById("img").src = m[c];

}

function left(){
	c --;
	if (c == -1){
		c = k - 1;
	}
	document.getElementById("img").src = m[c];
}
