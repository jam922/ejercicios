window.onload=function (){
//Declaramos funcion clasica

function suma (n1,n2){

	var res=n1+n2;

	return res;

}
	var c3 = document.getElementById("c3");
	console.log(c3);
	var c4 = document.getElementById("c4");
	console.log(c4);
	
	c4.innerHTML = suma (2,5);	
	c3.innerHTML = "2,5";	

}











/*//Declaramos funcion anonima
var suma_anonima = function (n1,n2){
	var res=n1+n2;

	return res;
}

//Declaramos funcion flecha
var suma_flecha = (n1,n2) => n1+n2;*/

//Prueba
//("La suma de 2 y 3 es: "+ suma(2,3));

/*alert("La suma(anonima) de 2 y 3 es: "+ suma_anonima(2,3));
alert("La suma(flecha) de 2 y 3 es: "+ suma_flecha(2,3));*/
