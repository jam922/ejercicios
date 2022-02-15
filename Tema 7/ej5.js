var color_css='background: black; color: white';
document.getElementById("enviar").addEventListener("click",mostrar);
document.getElementById("Nombre").addEventListener("click",nom);
document.getElementById("col").addEventListener("click",color);
document.getElementById("reset").addEventListener("click",reset);

function mostrar(e){
	console.clear();

	let formulario = document.forms["formu"];

	//TEXT
	console.log(`Nombre: %c${formulario.elements["datos"].value}`,color_css);

	//NUMBER
	console.log(`Edad: %c${formulario.elements["años"].value}`,color_css);

	//EMAIL
	console.log(`Email: %c${formulario.elements["email"].value}`,color_css);

	//FECHA
	console.log(`Fecha de cumpleaños: %c${formulario.elements["fecha"].value}`,color_css);

	//COLOR
	console.log(`Color: %c${formulario.elements["color"].value}`,color_css);

	//CONTRASEÑA
	console.log(`Contraseña: %c${formulario.elements["contraseña"].value}`,color_css);

	//TEXT AREA
	console.log(`Texto: %c${formulario.elements["algo"].value}`,color_css);

	//CHECKBOX
	console.log(`Los días disponibles son: %c${formulario.elements["dia"].value}`,color_css);

	//SELECT
	console.log(`Día preferente: %c${formulario.elements["preferente"].value}`,color_css);

	//DATALIST
	console.log(`Buscó: %c${formulario.elements["busca"].value}`,color_css);
}

function nom(e){
	alert("Rellene la información");
}

function color(e){
	//COLOR
	let r = document.forms["formu"];
	let x = r.elements["color"].value;
	body.style.backgroundColor = x;
	if(x=="black"){
		body.style.color = "white";
	}else{
		body.style.color = "black";
	}
}

function reset(e){
	alert("Empezamos de nuevo");
}