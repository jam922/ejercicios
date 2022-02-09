let peticionhttp = new XMLHttpRequest();
let boton = document.getElementById("idBoton");
boton.addEventListener("click",cargarAJAX);

let boton2 = document.getElementById("idBoton2");
boton2.addEventListener("click",cargarAJAX2)  

function cargarAJAX() {  
  
  peticionhttp.addEventListener("load",mostrar)
    
  peticionhttp.open('GET','http://localhost:3000/fecha');
  peticionhttp.send(null);
};

function cargarAJAX2() {  
  
  peticionhttp.addEventListener("load",mostrar)
    
  peticionhttp.open('GET','http://localhost:3000/votos');
  peticionhttp.send(null);
};

function mostrar() {
 var r = document.getElementById("idResultado");
  
  if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      

    r.innerHTML = peticionhttp.responseText;

  }else{
    r.innerHTML="Servidor no disponible";
  }
}