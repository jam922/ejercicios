const alumnos =  new Map([ ]);
let TAM = 0;

/*
let alumnos = new Map();
let TAM = 0;
window.onload=insertarAlumnos;
*/
/*
** Descripción: Insertar los alumnos en el Map
*/
function insertarAlumnos(){   

    let TAM = prompt("Especifica el numero de alumnos");
   
    for (let i = 0; i < TAM; i++) {
  
        let nombre = String(prompt("Especifica el nombre : "));
        let edad =  parseInt(prompt("Especifica la edad  : "));
 
        if (alumnos.has(nombre))
        {
           alert("Error, el alumno ya existe")        
        }else{
           alumnos.set(nombre,edad)
        }
    }
}
 insertarAlumnos();

/*
** Descripción: Mostrar información de los alumnos existentes en el Map
*/
function mostrarAlumnos(){    
   
    for (const [n, e] of alumnos) {
          console.log(`el alumno : ${n} tiene : ${e} anios`)
    }
}

/*
** Descripción: Mostrar la edad media de los alumnos existentes en el Map
*/
function mostrarMediaEdad(){
    
    let edadMedia=0;
    
    alumnos.forEach(  function(e,n) {
        edadMedia+=e;              
    });

    //Calcular el valor medio
    edadMedia /= TAM;

    //console.log(`La edad media es : ${edadMedia}`)
    document.getElementById("idInformacion").innerHTML=`La edad media es : ${edadMedia}`;
    //let ventanaME = window.open()
    //ventanaME.document.write(`La edad media es : ${edadMedia}`);
}
/*
** Descripción: Comprobar si existe un alumno a partir de su nombre
*/
function comprobarAlumno(){
    
    let nombre = String(prompt("Comprueba si existe el nombre: "));

    if (alumnos.has(nombre))
        alert("El alumno si existe");        
    else
        alert("El alumno no existe");
}


/*
** Descripción: Borrar del Map, el alumno indicado por su nombre
*/
function borrarPorNombre(){

    let nombre = String(prompt("Introduce el nombre del alumno que quieres borrar: "));
    alumnos.delete(nombre);
}

/*
** Descripción: Borrar del Map, todos los alumnos con la edad indicada
*/
function borrarPorEdad(){

    let edad = parseInt(prompt("Introduce la edad de los alumnos que quieres borrar: "));
      
    alumnos.forEach(function (edad){

        alumnos.delete(nombre);
    })
                       
}