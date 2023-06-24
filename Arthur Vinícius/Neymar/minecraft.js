

function changeColor(){
    var botao=document.getElementById("toilet");
    botao.style.color="red";
    var divButton=document.querySelector("#divButton");
    divButton.innerHTML="";
    var novobotao=document.createElement("button");
    novobotao.textContent="neymar";
    divButton.appendChild(novobotao);
    novobotao.classList.add("vasco");
    novobotao.addEventListener("click",novobotao.style.color="yellow");
}