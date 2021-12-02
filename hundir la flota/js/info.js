// Código js
let tiposBarcos = new Set(["Lancha" ,"Submarino","Buque", "PortaAviones"]);
let tamanoBarcos = new Map([["Lancha",1],["Submarino",2],["Buque",3],["PortaAviones",4]]);
let numeroBarcos = new Map([["Lancha",2],["Submarino",3],["Buque",1],["PortaAviones",1]]);
let colorBarcos = new Map([["Lancha","Rojo"],["Submarino","Verde"],["Buque","Azul"],["PortaAviones","Amarillo"]]);

function tipos(){
   tiposBarcos.forEach(element => document.querySelector("#bloque1").innerHTML+=(element+" "+"<br>"));
  }
tipos();  
function tamano(){
   tiposBarcos.forEach(element => 
    document.querySelector("#bloque2").innerHTML+=
    (element+": "+(tamanoBarcos.get(element))+"<br>"));
  }
tamano();  
function numero(){
   tiposBarcos.forEach(element => 
    document.querySelector("#bloque3").innerHTML+=
    (element+": "+(numeroBarcos.get(element))+"<br>"));
  }
numero(); 
function color(){
   tiposBarcos.forEach(element => 
    document.querySelector("#bloque4").innerHTML+=
    (element+": "+(colorBarcos.get(element))+"<br>"));
  }
color();  