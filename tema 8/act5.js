let peticionhttp = new XMLHttpRequest();
let httpget = new XMLHttpRequest();
let httpdelete = new XMLHttpRequest();
let httpeditar = new XMLHttpRequest();
let httpedit = new XMLHttpRequest();
let boton_anadir = document.getElementById("anadir").addEventListener("click",anadir,false);
let boton_borrar = document.getElementById("borrar").addEventListener("click",dni,false);
let boton_editar = document.getElementById("editar").addEventListener("click",editar,false);


var objetoJSON;
var nombre;
var apellido;
var dni;
var aficion;
//AÑADIR
function anadir(e) {  
  nombre = document.getElementById('idLogin').value;
  apellido = document.getElementById('idApe').value;
  dni = document.getElementById('idDni').value;
  aficion = document.getElementById('idAf').value;
  peticionhttp.addEventListener("load",mostrar,false);
    
  peticionhttp.open('POST', 'http://localhost:3000/usuarios');
  peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  peticionhttp.send(JSON.stringify({ nombre:nombre,apellido:apellido,dni:dni,aficion:aficion}));
  e.preventDefault();
};

//BORRAR
function dni() {
  dni = document.getElementById('idDni').value;
  httpget.addEventListener("load",delet,false);
    
  httpget.open('GET', 'http://localhost:3000/usuarios?dni='+dni,true);
  httpget.send(null);
};

function delet() {
   var r = document.getElementById("idResultado");
    if (httpget.readyState == 4 && (httpget.status == 200 || httpget.status == 201)) {
      objetoJSON = JSON.parse(httpget.responseText);  
      
      httpdelete.addEventListener("load",mostrar,false);
    
      httpdelete.open('DELETE', 'http://localhost:3000/usuarios/'+objetoJSON[0].id,true);

      httpdelete.setRequestHeader(
        'Content-Type',
        'application/json;charset=UTF-8'
      );

      httpdelete.send(null);
    } else {
      r.innerHTML = "No";
    }
}

//EDITAR
function editar() {
  
  dni = document.getElementById('idDni').value;
  httpeditar.addEventListener("load",edit,false);
  
  httpeditar.open('GET', 'http://localhost:3000/usuarios?dni='+dni,true);
  httpeditar.send(null);
};

function edit() {
  var r = document.getElementById("idResultado");
  nombre = document.getElementById('idLogin').value;
  apellido = document.getElementById('idApe').value;
  aficion = document.getElementById('idAf').value;
  if(nombre==" " || apellido==" " || aficion==""){
    if (httpeditar.readyState == 4 && (httpeditar.status == 200 || httpeditar.status == 201)) {
    objetoJSON = JSON.parse(httpeditar.responseText);  

    httpedit.addEventListener("load",mostrar_editar,false);
  
    httpedit.open('PATCH', 'http://localhost:3000/usuarios/'+objetoJSON[0].id,true);

    httpedit.setRequestHeader(
      'Content-Type',
      'application/json;charset=UTF-8'
    );
     httpedit.send(JSON.stringify({ nombre:nombre,apellido:apellido,aficion:aficion}));
    } else {
      r.innerHTML = "Noo";
    }
  }else{
    r.innerHTML="error";
  }
  
}

function mostrar_editar() {
  var r = document.getElementById("idResultado");
  if (httpedit.readyState == 4 && (httpedit.status == 200 || httpedit.status == 201)) {      
    
    r.innerHTML=httpedit.responseText;
    
  } else {
    r.innerHTML = "No";
  }
}