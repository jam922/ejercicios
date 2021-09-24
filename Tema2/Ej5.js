window.onload=function(){
var sueldo = prompt("Intrduce tu sueldo sin decimales: ");
sueldo = parseInt(sueldo);

var anosant = prompt("Intrduce tu antigüedad; ");
anosant= parseInt(anosant);

var c3 = document.getElementById("c3");
console.log(c3);
c3.innerHTML = sueldo;

var c3 = document.getElementById("c3");
c3.innerHTML = anosant;

if(sueldo<500 && anosant >= 10){

    c4.innerHTML = sueldo * 3;

}else if(sueldo < 500 && anosant < 10){

	c4.innerHTML = sueldo * 2;
}


}


