// Código js
let tiposBarcos = new Set(["lanchas" , "portaAviones"]);
let tamanoBarcos = new Map([["lancha",1],["submarino",2],["buque",3],["portaAviones",4]]);
let numeroBarcos = new Map([["lancha",2],["submarino",3],["buque",1],["portaAviones",1]]);
function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
}

function delay(n){
  return new Promise(function(resolve){
    setTimeout(resolve,n*100);
    });
  }
async function lancha(){
  for(i=1;i<=numeroBarcos.get("lancha");i++){
    await delay(2);
    var fila=(parseInt(Math.random()*9));
    var colummna=(parseInt(Math.random()*9));
      for(j=1;j<=tamanoBarcos.get("lancha");j++){
        var coloreado= document.getElementById(`id_${fila}_${colummna}`);
        coloreado.style.background="#EC7063"; 
      }
  }
}


async function submarino(){
await delay(6);
  for(i=1;i<=numeroBarcos.get("submarino");i++){
    
    var pos=(parseInt(Math.random()*9));
    if(pos%2==0){
      var fila=(parseInt(Math.random()*8));
      var colummna=(parseInt(Math.random()*9));
      for(j=1;j<=tamanoBarcos.get("submarino");j++){
      var coloreado= document.getElementById(`id_${fila+j}_${colummna}`);
          coloreado.style.background="#2ECC71";
      }
    }else{
      var fila=(parseInt(Math.random()*9));
      var colummna=(parseInt(Math.random()*8));
      for(j=1;j<=tamanoBarcos.get("submarino");j++){
        var coloreado= document.getElementById(`id_${fila}_${colummna+j}`);
        coloreado.style.background="#2ECC71";
        
      }
  }
await delay(6);}
}

async function buque(){
  for(i=1;i<=numeroBarcos.get("buque");i++){
    await delay(24);
  	var pos=(parseInt(Math.random()*9));
    if(pos%2==0){
        var fila=(parseInt(Math.random()*7));
        var colummna=(parseInt(Math.random()*9));
        for(j=1;j<=tamanoBarcos.get("buque");j++){
          var coloreado= document.getElementById(`id_${fila+j}_${colummna}`);
          coloreado.style.background="#5DADE2";
        }
      }else{
        var fila=(parseInt(Math.random()*9));
        var colummna=(parseInt(Math.random()*7));
        for(j=1;j<=tamanoBarcos.get("buque");j++){
          var coloreado= document.getElementById(`id_${fila}_${colummna+j}`);
          coloreado.style.background="#5DADE2";
        }
      }
  }
}

async function portaAviones(){
  for(i=1;i<=numeroBarcos.get("portaAviones");i++){
    await delay(30);
    var pos=(parseInt(Math.random()*9));
    if(pos%2==0){
  	var fila=(parseInt(Math.random()*6));
  	var colummna=(parseInt(Math.random()*9));
      for(j=1;j<=tamanoBarcos.get("portaAviones");j++){
        var coloreado= document.getElementById(`id_${fila+j}_${colummna}`);
          coloreado.style.background="#F4D03F";
      }
    }else{
      var fila=(parseInt(Math.random()*9));
      var colummna=(parseInt(Math.random()*6));
      for(j=1;j<=tamanoBarcos.get("portaAviones");j++){
        var coloreado= document.getElementById(`id_${fila}_${colummna+j}`);
          coloreado.style.background="#F4D03F";  
      }
    }
  }
}
function ubicarBarcos(){
  lancha();
  submarino();
  buque();
  portaAviones();
}
ubicarBarcos();