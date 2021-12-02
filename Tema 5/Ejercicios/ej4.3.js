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
	imprimirinfo(){
		return `${this.nombre}`;
	}
}
class Televisores extends Productos{
	constructor(n,c,u,p,t){
		super(n,c,u,p);
		this._tamaño=t;
	}
	imprimirinfo(){
		let info = super.imprimirinfo();
		return `Nombre: ${info}, tamaño: ${this._tamaño}`;
	}
}