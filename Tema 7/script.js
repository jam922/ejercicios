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

function limpiar(e){
 this.value="";
 error.innerHTML="";
 this.setCustomValidity("")
}