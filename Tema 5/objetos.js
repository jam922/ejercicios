/*
Clases mediante funciones constructoras

*/

function personaf(n,e){
	this.nombre = n;
	this.edad = e;
	this.cumplirAnios = function (incremento) {
		this.edad+=incremento;
	}
}
/*
CONSOLA GOOGLE 
let agustin = new personaF("Agustin",68);
agustin.nombre --> Agustin 


------------------------------------------------------------------------



Definir objetos utilizando JSON

*/

let agustinJson = {
	nombre:"Agustin",
	edad:67,
	padres:["Antonio","Pepa"],
	madre:{
		nombre:"Pepa",
		apellido:"Gonzalex"
	},
	cumplirAnios: function(incremento){
		this.edad+=incremento;
	}

};
/*
CONSOLA GOOGLE 
agustinJson
*/


/*

Clases con ecmac 6
*/

class personaC {
	constructor(n, e) {
	this._nombre = n;
	this._edad = e;

	}
	get nombre(){
		console.log("estas en el nombre");
		return this._nombre;
	}
	set nombre(n){
		this._nombre=n;
	}

	imprimirinfo(){
		return `${this.nombre}, ${this._edad}`;
	}
}



class nieto extends personaC{
	constructor(n,e,c){
		super(n,e);
		this._cuidador=c;
	}
	imprimirinfo(){
		let info = super.imprimirinfo();
		return `informaxcion del padre ${info}, informacion propia ${this._cuidador}`;
	}
}
