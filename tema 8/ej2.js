let peticionhttp = new XMLHttpRequest();
let boton = document.getElementById("idBoton");
boton.addEventListener("click",cargarAJAX)  

function cargarAJAX() {  
  
  peticionhttp.addEventListener("load",mostrar)
    
  peticionhttp.open('GET','http://localhost:3000/votos');
  peticionhttp.send(null);
};

function mostrar() {
 var r = document.getElementById("idResultado");

  if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      
    var o =JSON.parse(peticionhttp.responseText);
    console.log(o.numero);

  }else{
    r.innerHTML="error";
  }
}
