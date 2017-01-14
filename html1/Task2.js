var sec=0; var t;
var min = 0;
var hou = 0;
var b = true;
var c = 0;
// Стоп
	function stop(){
		c = 1;
		document.getElementById("hour").innerHTML = 0 + "0:  ";
		document.getElementById("minute").innerHTML = 0+ "0:  ";
		document.getElementById('seconds').innerHTML = 0 + "0  ";
		sec=0;
		min = 0;
		hou = 0;
	}
// Определяет число с для остоновки или продолжения времени ////////
	function pause(){
		c++;
	}

function timedCount(){
	// Условия Пауза и Прадолжить /////////////////////////////////
		if (c % 2 == 0){
			b = true;
			document.getElementById("stop").innerHTML = 'Пауза';
		}
		else{
			b = false;
			document.getElementById("stop").innerHTML = 'Прадолжить';
			t=setTimeout("timedCount()",1);
		}

	// Время ///////////////////////////////////////////////////////
		if (b){
			sec++;
			if (sec == 60){
				min++;
				sec = 0;
			}
			if (min == 60){
				hou++;
				min = 0;
			}
			if (hou == 24) {
				hou = 0;
			}
			document.getElementById("hour").innerHTML = count(hou) + ":  ";
			document.getElementById("minute").innerHTML = count(min)+ ":  ";
			document.getElementById('seconds').innerHTML = count(sec) + "  ";
			t=setTimeout("timedCount()",1000);
		}
}
// Определяет 0 должно быть или нет ////////////////////////////////
	function count(c){
		if (c > -1 && c < 10){
			return "0" + c;
		}
		else{
			return c;
		}
	}


