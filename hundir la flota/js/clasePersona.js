//CLASE PERSONA---------------------------------------

class Persona {
	constructor(n,a,e) {
		this._nombre = n;
		this._apellidos = a;
		this._edad = e;
	}

	get nombre(){
		return this._nombre;
	}
	set nombre(n){
		this._nombre=n;
	}
	get apellidos(){
		return this._apellidos;
	}
	set apellidos(a){
		this._apellidos=a;
	}
	get edad(){
		return this._edad;
	}
	set edad(e){
		this._edad=e;
	}	

	static datos(){
	    return "Datos: <br>";
	}
	
	toString(){
		return 	Persona.datos()+"-Nombre: "+this.nombre+"<br>-Apellidos: "+this.apellidos+"<br>-Edad: "+this.edad;
	}
	valueOf(){
		return this._edad;
	}
}
//CLASE JUGADOR---------------------------------------------
	class Jugador extends Persona{
	constructor(n,a,e,p,ac,f){
		super(n,a,e);
		this._identificador=this.#i();
		this._puntuacion=p;
		this._aciertos=ac;
		this._fallos=f;
	}
	#i(){
		let id=parseInt(Math.random()*100);
		return id;
	}
	get puntuacion(){
		return this._puntuacion;
	}
	set puntuacion(p){
		this._puntuacion=p;
	}
	get aciertos(){
		return this._aciertos;
	}
	set aciertos(ac){
		this._aciertos=ac;
	}
	get fallos(){
		return this._fallos;
	}
	set fallos(f){
		this._fallos=f;
	}
	static jugador(){
		return"EL JUGADOR";
	}
	toString(){
		let info = super.toString();
		return `${info}<br>-Identificador: ${this._identificador}<br>-Puntuación: ${this.puntuacion}<br>-Aciertos: ${this.aciertos}<br>-Fallos ${this.fallos}`;
	}
	valueOf(){
		return this.puntuacion;
	}
}


let nombre = window.opener.document.getElementById("idNombre").value;
let apellido = window.opener.document.getElementById("idApellido").value;
let edad = window.opener.document.getElementById("idEdad").value;
let puntuacion = window.opener.document.getElementById("Puntuacion").value;
let aciertos = window.opener.document.getElementById("Aciertos").value;
let fallos = window.opener.document.getElementById("Fallos").value;

var jugador = new Jugador(nombre,apellido,edad,puntuacion,aciertos,fallos);
Persona.prototype.saludar=function(){return `BIENVENIDO/A`;}
function completarInfoJugador(){
	document.querySelector("#jugador").innerHTML=Jugador.jugador();
	document.querySelector("#bloque1").innerHTML=jugador.saludar();
	document.querySelector("#bloque2").innerHTML=jugador.toString();
}	
completarInfoJugador();