'use strict';

let count = 0;

const counterNum = document.getElementById('counter-number');
const btns = document.querySelectorAll('.counter-btn');

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const className = event.currentTarget.classList;
        if (className.contains("decrease")) {
            count--;
        }
        else if(className.contains("increase")){
            count++;
        }else{
            count = 0;
        }

        if (count > 0) {
            counterNum.style.color = "green";
        }
        if (count < 0) {
            counterNum.style.color = "yellow";
        }
        if (count === 0) {
            counterNum.style.color = "#222";
        }


        counterNum.innerHTML = count;
    })
})