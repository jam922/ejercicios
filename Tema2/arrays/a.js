
function obtener(){
	let nombre = window.opener.document.getElementById("idNombre").value;
		let apellido=window.opener.document.getElementById("idApellido").value;
		let edad=window.opener.document.getElementById("idEdad").value;
		let r = [nombre,apellido,edad];

		return r;
}