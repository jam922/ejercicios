window.onload=function(){

	var num = prompt("Intrduce un numero: ");
	num = parseInt(num);

	var c3 = document.getElementById("c3");
	console.log(c3);
	c3.innerHTML = num;


	if(num >= 2){
		for(var i=2;i<=num;i+=2){
	
			var c4 = document.getElementById("c4");
			console.log(c4);
			c4.innerHTML += `${i}<br/>`;	
		}
	} else
		alert("error");
}


