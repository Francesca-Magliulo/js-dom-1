
const button = document.getElementById("btnOn");

function changeBtnWord() {
    const lamp = document.getElementById("lamp");
    if (button.innerText.includes("Accendi")) {
        button.innerText = "Spegni";
        lamp.src = "img/yellow_lamp_center.png";
    } else {
        button.innerText = "Accendi";
        lamp.src = "img/white_lamp_center.png";
    }
}

button.addEventListener('click', changeBtnWord);
