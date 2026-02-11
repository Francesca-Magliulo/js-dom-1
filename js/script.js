
const button = document.getElementById("btnOn");

function changeBtnWord() {
    const lamp = document.getElementById("lamp");
    if (button.innerText.includes("Accendi")) {
        button.innerText = "Spegni";
        lamp.src = "img/yellow_lamp.png";
    } else {
        button.innerText = "Accendi";
        lamp.src = "img/white_lamp.png";
    }
}

button.addEventListener('click', changeBtnWord);
