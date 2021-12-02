/*
3.1 Funciones constructoras

Act 3.1 Crea un objeto llamado tvSamsung con las propiedades nombre (TV Samsung 42”), categoria
(Televisores), unidades (4), precio (345.95) y con un método llamado importe que devuelve el valor total de las
unidades (nº de unidades * precio)
*/
function tvSamsung(n,c,u,p){
	this.nombre = n;
	this.categoria = c;
	this.unidades = u;
	this.precio=p;
	this.importe = function(){
		return total=(this.unidades)*(this.precio);
	}
}
let tv = new tvSamsung("TV Samsung42","Televisores",4,345.95);
tv.importe();
