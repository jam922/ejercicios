let peticionhttp = new XMLHttpRequest();
let boton = document.getElementById("idBoton");
boton.addEventListener("click",cargarAJAX,false);

var objetoJSON;
var nombreEscogido;  

function cargarAJAX(e) {  
  
  nombreEscogido = document.getElementById('idLogin').value;

  peticionhttp.addEventListener("load",mostrar,false);
    
  peticionhttp.open('GET','http://localhost:3000/usuarios?nombre='+nombreEscogido,true);
  peticionhttp.send(null);
  e.preventDefault();
};

function mostrar() {
 var r = document.getElementById("idResultado");

  if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {  
    
    objetoJSON = JSON.parse(peticionhttp.responseText);  
    console.log(objetoJSON);
    if(objetoJSON.length==1){
      r.innerHTML=peticionhttp.responseText;
    }else{
      r.innerHTML="no existe"
    }
  }else{
    r.innerHTML="error";
  }
}