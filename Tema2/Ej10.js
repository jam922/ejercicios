window.onload=function (){

	var nums = prompt("Introduce una secuencia de notas separadas con coma: ");
	nums = nums.split(",");
	
	
	

	if(num2>=1 && num2<=20){

		var c3 = document.getElementById("c3");
		console.log(c3);
		c3.innerHTML = `${num1} ${num2}`;

		for(i=1;i<=num2;i++){

			var c4 = document.getElementById("c4");
			console.log(c4);
			c4.innerHTML += `${num1} x ${i} = ${num1*i}<br/>`;
		}

	}else
		alert("ERROR Y");

	
}

