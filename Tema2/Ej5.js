window.onload=function(){
var sueldo = prompt("Introduce tu sueldo sin decimales: ");
sueldo = parseInt(sueldo);

var anos= prompt("Introduce tu antigüedad: ");
anos= parseInt(anos);

var c3 = document.getElementById("c3");
console.log(c3);
c3.innerHTML = `${sueldo}<br/>${anos}`;


if(sueldo<500 && anos>= 10){
    
    var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = sueldo * 3;


}else if(sueldo < 500 && anos < 10){

	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = sueldo * 2;
}else if(sueldo >= 500){

	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = sueldo;
}



}


