function def(){
	document.getElementById("par").innerHTML = '<b>Вы успешно вошли в систему.</b>';
	var s = document.getElementById("username").value;
	var c = document.getElementById("password").value;
	console.log("username:  " + s);
	console.log('password:  ' + c);
}