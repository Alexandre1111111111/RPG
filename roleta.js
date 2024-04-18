const roleta = document.querySelector(".roleta");
const girar = document.querySelector("#girar");
const rolimg = document.querySelector("#rolimg");

let graus = -1;

function rodar() {
    graus += Math.round(75 * 15 * Math.random() * 15) * -1;
    rolimg.style.rotate = `${graus}deg`;
}

girar.addEventListener("click", rodar);