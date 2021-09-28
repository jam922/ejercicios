window.onload=function(){

var nota = prompt("Intrduce tu nota: ");
nota = parseInt(nota);

var c3 = document.getElementById("c3");
console.log(c3);
c3.innerHTML = nota;

if(nota<3){

    var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = "Muy deficiente";

}else if(nota==3 || nota<5){

	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = "Insuficiente";

}else if(nota==5 || nota<6){

	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = "Bien";

}else if(nota==6 || nota<9){

	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = "Notable";

}else if(nota==9 || nota==10){

	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = "Sobresaliente";
}








}
