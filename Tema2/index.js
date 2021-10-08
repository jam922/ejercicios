
//Ej 1. Lectura de numeros
/*
let num=null;

do{
	num = prompt("Introduzca un número: ");

	if(isNaN(Number(num)))
		alert(`${num} no es un número`);
	else
		alert(`${num} es un número`);

}while(num!=="-1");

*/

//Ej 2. Fondo aleatorio
/*
function fondo_aleatorio() {
	let x = parseInt(Math.random()*255);
	let y = parseInt(Math.random()*255);
	let z = parseInt(Math.random()*255);
	let color_fondo = `rgb(${x},${y},${z})`;
	document.body.style.backgroundColor = color_fondo;
}

fondo_aleatorio();
*/

//Ej5. Cuadrados
/*
const cont_cuadrado =2000;
function cuadrado_fondo_aleatorio() {
	for(i=1;i<=cont_cuadrado;i++){
		let red = parseInt(Math.random()*255);
		let green = parseInt(Math.random()*255);
		let blue = parseInt(Math.random()*255);
		let color_fondo = `rgb(${red},${green},${blue})`;
		let alto = parseInt(Math.random()*100);
		let largo = parseInt(Math.random()*100);
		
		document.write(`<div style="background-color:${color_fondo};
		left:${largo}%;top:${alto}%;
		position:fixed;width:50px;height:50px"></div>`);		
	}
}
cuadrado_fondo_aleatorio();
*/

//Ej4. Factorial

/*
window.onload=function (){
//Declaramos funcion clasica

function factorial(){
	
	let num 7= null;
	do{
		num = prompt("Introduce un número entero:");
		num = parseInt(num);

		if(isNaN(Number(num)))
			alert("No es un numero entero. Vuelve a intertarlo.");
		else{
			let res = 1;
			for(i=1;i<(num+1);i++){
				res*= i;
				
			}
			alert(`El factorial de ${num} es: ${res}`);
		}
	}while(num!=="-1")
	
	

}
factorial();

}*/

//Ejercicio3. ADIVINA UN NUMERO






let contador=0;
let bool=false;
let numadivinar = parseInt(Math.random()*100);
	console.log(numadivinar);
let cancel;
do{
	
	function func(){
				if(confirm(`¿Quieres volver a jugar?`)){
				numadivinar = parseInt(Math.random()*100);
				console.log(numadivinar);
				contador=0;
				
				}else{
					alert('El juego ha terminado');
					bool=true;
				}
	}
	let num = prompt(`Adivina un numero entre el 1 al 100`);
	num = parseInt(num);
	contador++;
	if(num=null){
		func();
	}else if(isNaN(Number(num))){
		alert("No es un numero entero. Vuelve a intertarlo.");
		if(num=null){
		func();
	}

	}else if(num>numadivinar){
		alert(`El numero es menor`);
	}else if (num<numadivinar){
		alert(`El numero es mayor`);
	}else if(num==numadivinar){
		alert(`El numero introducido es correcto. Intentos: ${contador}`);
		func();
	}
	
	
}while(bool==false)

