
Ejercicio 2

const letraPosibles = ['T','R','W','A','G','M','Y','F','P','D','X','B'
,'N','J','Z','S','Q','V','H','L','C','K','E','T'];

letraDNI = (numeroDNI)=>letraPosibles[numeroDNI%23];

let letras=[];

function pedirDNI(){
	let dni= prompt("Dime el DNI o -1 si quieres terminar","12345678");
	if(dni==="-1"){

		clearInterval(intervalo);
		alert(letras.join(" ; "));
	}else{
		letras.push(letraDNI(dni));
	}
}

let intervalo=setInterval(pedirDNI,5000);




/*Ejercicio3
var para =true;
var id=0;
function hora(){

	let hoy = new Date();
	let h = hoy.getHours();
	let m = hoy.getMinutes();
	let s = hoy.getSeconds();
	
 	document.title=`La hora es ${h}:${m}:${s}`;
}

hora();

function parar(){
	para=!para;
	if(!para){
		id= setInterval(hora,1000);
	}else {
		clearInterval(id);
		document.title=`La hora es :--:--`;
	}
}*/

/*Ejercicio4
function dia(){
	let hoy = new Date();
	for(let i=0;i<1;i++){
	 		i=document.write(hoy);
	 	}
}
setTimeout(dia,20000);
*/
