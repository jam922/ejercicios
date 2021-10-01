window.onload=function (){

	do{	

		var num = prompt("Introduce un numero: ");
			num = parseInt(num);

		var c3 = document.getElementById("c3");
		console.log(c3);
		c3.innerHTML = num;

	}while(num<0 || num>10001)

function esPrimo (num){

		for(var i=2;i<=num;i++)
			if(num%i==0){
			return true;
		}

		if(num==1){
			return false
		}
		else{
			return false;
		}
}
	var c4 = document.getElementById("c4");
	console.log(c4);
	c4.innerHTML = esPrimo(num);

}
