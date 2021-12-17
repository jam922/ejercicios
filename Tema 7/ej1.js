function numero(){
    return parseInt(Math.random()*255);
}
function Color(e){
    if(e.target.type=="submit"){
        document.body.style.backgroundColor = `rgb(${numero()},${numero()},${numero()})`;
    }else{
        document.body.style.backgroundColor = "white";
    }
    e.preventDefault();
}
document.onclick=Color;
document.getElementById("idBoton").addEventListener("click", Color);