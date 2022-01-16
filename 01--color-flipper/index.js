'use strict'

// Get the tag of HTML 
const body = document.body;
const btn_rgba = document.getElementById('color-button-rgba');
const btn_hex = document.getElementById('color-button-hex');
const color_label = document.querySelector('.container-color__bg-color');

// check click or not to gererate new **rgba color
btn_rgba.addEventListener('click', function () {
    const randomColor = `rgb(${getRandomColorRgba()})`;
    body.style.backgroundColor = randomColor;
    color_label.innerHTML = randomColor;
});
// generate new color function
function getRandomColorRgba() {
    const rgb = `${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
    return rgb;
}

// check click of not to generat **hex color
btn_hex.addEventListener('click', function () {
    const randomColor = `#${getRandomColorHex()}`;
    body.style.background= randomColor;
    color_label.innerHTML = randomColor;
})

// generate hex color
function getRandomColorHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const hexLength = 6;
    let hexColor = "";
    for (let i = 0; i < hexLength; i++){
        let randomNum = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNum];
    }
    return hexColor;
}