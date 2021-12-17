function Raton(e){
    document.getElementById("X").innerHTML=e.clientX
    document.getElementById("Y").innerHTML=e.clientY    
}
document.addEventListener("mousemove",Raton);