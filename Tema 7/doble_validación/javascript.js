
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario=document.forms["idFormulario"]

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(e){
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName
    for(let i=0;i<formulario.elements.length; i++){
        formulario.elements[i].className= "";
    }
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error
    document.querySelectorAll(".errorSpam").forEach(e=>e.innerHTML="")
   // IMPORTANTE!!! Deshabilitamos el botón
    this.disabled = true;
    
    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){

        return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false  
    }
}


/********************************************************************************************
 ***************
Apellidos:￼


Edad:￼


Matrícula Coch****************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/

function validarJS(eventopordefecto) {
    
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad() && validarMatricula() && validarProvincia();             
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre= formulario.elements["idNombre"];
    
    if (inputNombre.value == "" || !isNaN(inputNombre.value)){        
        formulario.elements["idNombre"].className = "error";
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML="El campo: " + formulario.elements["idNombre"].name + " es incorrecto"
        
        return false
    }
    return true
}

/***************************************************************************/
/*************************************************************************/

function validarEdad() {
 
    let inputEdad=formulario.elements["idEdad"]
    
    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.
     if (inputEdad.value == "" || inputEdad.value<0 || inputEdad.value>100){        
        formulario.elements["idEdad"].className = "error";
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML="La " + formulario.elements["idEdad"].name + " no es correcta"
        
        return false
    }
    return true;
}
  
/***************************************************************************/
/***************************************************************************/

function validarMatricula() {
    
    let inputMatricula=formulario.elements["idMatricula"];
    let expreg= /^\d{4}\s[A-Z]{3}$/;
    // IMPORTANTE!! Realizar la validación de la matrícula mediante javascript y utilizando expresiones regulares
    if (expreg.test(inputMatricula.value)){ 
        return true;       
    }else{
        formulario.elements["idMatricula"].className = "error";
        formulario.elements["idMatricula"].focus();
        document.getElementById('idMatriculaError').innerHTML="Formato invalido de la " + formulario.elements["idMatricula"].name;
        
        return false
    }
    
}

/***************************************************************************/
/***************************************************************************/

function validarProvincia() {
    let selectProvincia=formulario.elements["idProvincia"]
    const valoresProvincia = new Set(["Gr","Ma"]);
        
    // IMPORTANTE!! Realizar la validación de la provincia mediante javascript   
    if(selectProvincia.value == "0" ){
        formulario.elements["idProvincia"].className = "error";
        formulario.elements["idProvincia"].focus();
        document.getElementById('idProvinciaError').innerHTML="Selecciona una " + formulario.elements["idProvincia"].name;
        
        return false

    }
    return true;
}


/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/

function validarAPIHTML(eventopordefecto) {  

    return validarNombreHTML() && validarEdadHTML() && validarMatriculaHTML() && validarProvinciaHTML() ;
}
 
function validarNombreHTML(){
    let x = formulario.elements["idNombre"];
    if(x.checkValidity() == false){ 
    
      if(x.validity.valueMissing){
        x.setCustomValidity("Está vacio");
      }

      if(x.validity.patternMismatch){
         x.setCustomValidity("Formato incorrecto")
      }
      document.getElementById('idNombreError').innerHTML= x.validationMessage;
        return false;
    }else{      
      return true;
  }; 
}

function validarEdadHTML(){
    let x = formulario.elements["idEdad"];
    if(x.checkValidity() == false){
      if(x.validity.rangeUnderflow){
        x.setCustomValidity("Tiene que ser superior a 0");
      }

      if(x.validity.rangeOverflow){
         x.setCustomValidity("Tiene que ser inferior a 100");
      }
      document.getElementById('idEdadError').innerHTML= x.validationMessage;
        return false;
    }else{      
      return true;
  }; 
}

function validarMatriculaHTML(){
    let x = formulario.elements["idMatricula"];
    if(x.checkValidity() == false){ 
    
      if(x.validity.valueMissing){
        x.setCustomValidity("Está vacio");
      }

      if(x.validity.patternMismatch){
         x.setCustomValidity("Formato incorrecto")
      }
      document.getElementById('idMatriculaError').innerHTML= x.validationMessage;
        return false;
    }else{      
      return true;
  }; 
}