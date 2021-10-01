window.onload=function (){

	var ano = prompt("Introduce un año para ver si es bisiesto: ");
		ano = parseInt(ano);

		var c3 = document.getElementById("c3");
		console.log(c3);
		c3.innerHTML = ano;

function esBisiesto (ano){

	if((ano%4==0) && ((ano%100!=0) || (ano%400==0))){
		return 1;
	}else{
		return 0;
	}
}
	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = esBisiesto(ano);

}
