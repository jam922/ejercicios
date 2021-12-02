class Productos {
	constructor(n,c,u,p) {
		this.nombre = n;
		this.categoria = c;
		this.unidades = u;
		this.precio=p;
	}
	get nombre(){
		return this._nombre;
	}
	set nombre(n){
		this._nombre=n;
	}
	get categoria(){
		return this._categoria;
	}
	set categoria(c){
		this._categoria=c;
	}
	get unidades(){
		return this._unidades;
	}
	set unidades(u){
		this._unidades=u;
	}
	get precio(){
		return this._precio;
	}
	set precio(p){
		this._precio=p;
	}
	info(){
		console.log(this._nombre+": "+this._categoria);
		console.log("Importe: "+this._unidades+" X "+this._precio+" = "+(this._unidades*this._precio)+"€");
	}
}