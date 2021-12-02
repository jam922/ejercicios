//CLASE PERSONA---------------------------------------
class Persona {
	constructor(n,a,e,i) {
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


//CLASE AUTOR--------------------------------------

class Autor extends Persona{
	constructor(n,a,e,g,v){
		super(n,a,e);
		this.github=g;
		this.lenguaje=this.#l();
		this.version=v;
	}
	#l(){
		return "JavaScript";
	}
	get lenguaje(){
		return this._lenguaje;
	}
	set lenguaje(l){
		this._lenguaje=l;
	}
	get version(){
		return this._version;
	}
	set version(v){
		this._version=v;
	}
	
	static Autor(){
		return "Autor";
	}
	toString(){
		let info = super.toString();
		return `${info}<br>-Github: ${this.github}<br>-Lenguaje: ${this.lenguaje}<br>-Versión: ${this.version}`;
	}
	valueOf(){
		return this.version;
	}
	
}
let nombre = window.opener.document.getElementById("idNombre").value;
let apellido = window.opener.document.getElementById("idApellido").value;
let edad = window.opener.document.getElementById("idEdad").value;
let github = window.opener.document.getElementById("github").value;
let version = window.opener.document.getElementById("version").value;

var autor = new Autor(nombre,apellido,edad,github,version);
Persona.prototype.saludar=function(){return `BIENVENIDO/A`;}

function completarInfoAutor(){
	document.querySelector("#r").innerHTML=Autor.Autor();
	document.querySelector("#bloque1").innerHTML=autor.saludar();
	document.querySelector("#bloque2").innerHTML=autor.toString();
}	
completarInfoAutor();
