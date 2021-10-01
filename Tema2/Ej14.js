window.onload=function (){

function perimetroRectangulo (a,b){

	var perimetro=parseFloat(perimetro=(a*2)+(b*2));

	return perimetro;

}
	var c3 = document.getElementById("c3");
	console.log(c3);
	var c4 = document.getElementById("c4");
	console.log(c4);
	
	c4.innerHTML = perimetroRectangulo(11.50,2.02);	
	c3.innerHTML = "11.50, 2.02";	

}
