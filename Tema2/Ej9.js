window.onload=function (){

	var nums = prompt("Intrduce un numero X y otro Y : ");
	nums = nums.split(" ");
	
	num1 = parseInt(nums[0]);
	num2 = parseInt(nums[1]);

	if(num1 >= -50 && num1<=50 ){

		

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

	} else
		alert ("ERROR X");
}

