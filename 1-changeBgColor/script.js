const btn = document.getElementById('btn-bg');
const body = document.querySelector('body');
const colors = ["green", "yellow", "black", "red", "blue", "violet"];

body.style.backgroundColor = "aqua";

function changeBg() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
};

btn.addEventListener('click', changeBg);