function def(){
	var d = document;

	var login = d.getElementById("login").value,
	    pass1 = d.getElementById("pass1").value,
	    pass2 = d.getElementById("pass2").value,
	    box = d.getElementById("box"),
	    email = d.getElementById("email").value;

	var e1 = d.getElementById("s1"),
		e2 = d.getElementById("s2"),
		e3 = d.getElementById("s3"),
		e4 = d.getElementById("s4"),
		e5 = d.getElementById("s5");

	e1.innerHTML = "";
	e2.innerHTML = "";
	e3.innerHTML = "";
	e4.innerHTML = "";
	e5.innerHTML = "";

	// Login
		if(login.length < 7) {
			e1.innerHTML = "Логин не должно быть меньше 7ми символов*";
		}
		else{
			var n = false;
			var s = false;
			for(var i = 0; i < login.length; i++){
				if(login.charCodeAt(i) > 47 && login.charCodeAt(i) < 58){
					n = true;
				}

				if(login.charCodeAt(i) > 64 && login.charCodeAt(i) < 91){
					s = true;
				}
			}
			if (!n){
				e1.innerHTML = "Логин должен содержать хотьябы 1 цифру*";
			}

			if(!s){
				e1.innerHTML += "\nЛогин должен содержать хотьябы 1 большую букву*";
			}
		}

	// Password
		if(!pass1){
			e2.innerHTML = "Пороль не может быть пустым*";
		}
		if(pass1 != pass2){
			e3.innerHTML = "Пороль не совподают, попробуйте снова*";
		}
	//ChecBox
		if(!box.checked){
			e4.innerHTML = "CheckBox must checked*";
		}
	// E-mail
		if(!email){
				e5.innerHTML = "E-mail не может быть пустым*";
			}
		else if(email.indexOf("@") == -1){
			e5.innerHTML = "Логин должен содержать символ '@' *";
		}

		else if(email.indexOf(".") == -1){
			e5.innerHTML = "Логин должен содержать символ '.' *";
		}

		else if(email.indexOf("@") > -1 && email.indexOf(".") > -1){
			var c = email.indexOf(".") ;
			var v = email.indexOf("@") + 1;
			var s = email.substring(v,c);
			if(s.length < 2){
				e5.innerHTML = "Между @ и . должно быть не мене двух символов*";
			}
		}

		if(email.indexOf(".") > -1){
			var c = email.indexOf(".") + 1;
			var s = email.substring(c);
			if(s.length < 2){
				e5.innerHTML = "После точки должно быть не мене двух символов*";
			}
		}
}