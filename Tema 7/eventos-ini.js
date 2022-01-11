var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(e){
    
    console.clear()
    //console.log(`Usando this : %c${this.value}`,color_css);
    //console.log(`Usando Event : %c${e.target.value}`,color_css);
    
    let formulario = document.forms["idFormulario"];


        //Acceso al input text

    console.log(`valor de Input nombre : %c${formulario.elements["idNombre"].value}`,color_css);

        //Acceso a radiobutton
    console.log(`El elemento seleccionado es: %c${formulario.elements["pregunta"].value}`,color_css);

    console.log(`Ha sido seleccionado el elemnto de condiciones : %c${formulario.elements["condiciones"].checked}`,color_css);

    console.log(`Ha sido seleccionado el elemnto de privacidad : %c${formulario.elements["privacidad"].checked}`,color_css);
    
    var lista = document.getElementById("lista"); // Obtenemos la lista
    var idxSeleccionado = lista.selectedIndex; // Obtenemos el indice seleccionado
    var opcionSeleccionada = lista.options[idxSeleccionado]; // Elemento seleccionado
    var textoSelected = opcionSeleccionada.text;
    var valorSelected = opcionSeleccionada.value;
    
    console.log(`El elemento de la lista de tipo Select seleccionado es: %c${textoSelected}/${valorSelected}`,color_css);

    console.log(`El elemento de la lista de tipo Datalist seleccionado es: %c${formulario.elements["list"].value}`,color_css);
  
   e.preventDefault();
}


