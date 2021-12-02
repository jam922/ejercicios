/*
3.2 Objeto Json

Act 3.2 Crea un objeto llamado tvSamsung con las propiedades nombre (TV Samsung 42”), categoria
(Televisores), unidades (4), precio (345.95) y con un método llamado importe que devuelve el valor total de las
unidades (nº de unidades * precio)*/

let tvSamsung = {
    nombre:"TV SAMSUNG 42",
    categoria:"televisor",
    unidades: 4,
    precio: 345.95,
    importe:function(){
        let total=unidades*precio;
        return total;
    }
};
