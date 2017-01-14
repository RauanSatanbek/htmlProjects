(function (){
	var e = function(ee){
		console.log(ee.cuurentTarget);
		if(this.id == 'day') {
			document.body.className = "day";
			console.log(12);
		}
		else if(this.id == "night") {
			document.body.className = "night";
			console.log(42);
		}
	}
	function g(){
		alert(45);
	}
	var b = document.getElementsByTagName("button");
	var h = document.getElementsByTagName("html")[0];
	console.log(b);
	for(var i = 0; i < b.length; i++){
		h.addEventListener('click', e);
	}
})();