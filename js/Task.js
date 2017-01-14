function def(){
	var k = document.getElementById('input');
	// console.log(event.keyCode);
	if(event.keyCode > 95 && event.keyCode < 106 || event.keyCode > 47 && event.keyCode < 58){
		// console.log(k.value)

	}
	else{
		var len = k.value.length;
		var v = k.value;
		var s = "";
		for(var i = 0; i < len + 1; i++){
			if (isnumber(v.charCodeAt(i))){
				s += v.charAt(i);
			}
			else{
				break;
			}
		}
		k.value = s;
	}
}

function isnumber(d){
	if(d > 47 && d < 58){
		return true;
	}

	else{
		return false;
	}
}
