const btn = document.getElementById('btn-id')
const body = document.querySelector('body')
const colors = ['#000', '#1DF10C', '#0087FF', '#6E03C2', '#00F3FF', '#D60000', '#FFFB00', '#C900FF']

body.style.backgroundColor = '#000';

function changeBg() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}

btn.addEventListener('click', changeBg);