//EMAIL
document.getElementById("idEmail").addEventListener ("blur", email);
document.getElementById("idEmail").addEventListener ("click", limpiar);
var error =document.getElementById("idEmailError");

function email(e){
   let formulario = document.forms["formulario"];
   if(!this.checkValidity()){
      if(this.validity.valueMissing){
         this.setCustomValidity("Está vacio");
      }
      if(this.validity.patternMismatch){
         this.setCustomValidity("Formato incorrecto")
      }
      e.preventDefault(); 
      error.innerHTML=this.validationMessage;
   }else{
     formulario.submit();
   }
   
}

//DNI
document.getElementById("idDNI").addEventListener ("click", limpiar);
document.getElementById("idDNI").addEventListener ("blur", dni);
var errorDNI =document.getElementById("idDNIError");
function dni(e){
   let formulario = document.forms["formulario"];
   let ExpReg= /^\d{8}[a-zA-Z]$/;
      
   if(!this.checkValidity()){
      if(ExpReg.test(this.value)==false){
         this.setCustomValidity("Debe de tener 8 números y una letra")
      }
      e.preventDefault(); 
      errorDNI.innerHTML=this.validationMessage;
   }else{
     formulario.submit();
   }
}

//Limpiar input
function limpiar(e){
   error.innerHTML="";
   errorDNI.innerHTML="";
   this.value="";
}