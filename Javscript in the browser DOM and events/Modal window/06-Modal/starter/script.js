'use strict';

let buttons = document.querySelectorAll(".show-modal")
let modal = document.querySelector("div.modal")
let overlay = document.querySelector("div.overlay")
let close_modal = document.querySelector(".close-modal")



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })
})



close_modal.addEventListener("click", remove_modal)
overlay.addEventListener("click", remove_modal)

document.onkeydown = function(evt) {
    if (evt.key == "Escape") {
        remove_modal()
    }
}


function remove_modal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}