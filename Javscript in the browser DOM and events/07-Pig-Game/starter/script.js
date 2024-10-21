'use strict';

let player0 = document.querySelector(".player--0")
let player1 = document.querySelector(".player--1")
let player0_current_score_interface = document.querySelector("#current--0")
let player0_total_score_interface = document.querySelector("#score--0")
let player1_current_score_interface = document.querySelector("#current--1")
let player1_total_score_interface = document.querySelector("#score--1")
let player0_name = document.querySelector("#name--0")
let player1_name = document.querySelector("#name--1")


let dice_img = document.querySelector(".dice")
let dice_roller = document.querySelector(".btn--roll")
let holder = document.querySelector(".btn--hold")
let new_game = document.querySelector(".btn--new")
let change_name = document.querySelector(".btn--change")



let current_score = 0
let player0_total_score = 0
let player1_total_score = 0




// starting values
let playing = true

player0_current_score_interface.textContent = 0
player1_current_score_interface.textContent = 0
player0_total_score_interface.textContent = 0
player1_total_score_interface.textContent = 0
dice_img.classList.add("hidden")
new_game.classList.remove("border")

function dice_roll() {
    return Math.floor(Math.random() * 6) + 1
}

function switch_active() {
    player0.classList.toggle("player--active")
    player1.classList.toggle("player--active")
}

function start_new_game() {
    player0_current_score_interface.textContent = 0
    player1_current_score_interface.textContent = 0
    player0_total_score_interface.textContent = 0
    player1_total_score_interface.textContent = 0
    current_score = 0
    player1_total_score = 0
    player0_total_score = 0

    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    player0.classList.remove("player--active")
    player1.classList.remove("player--active")
    player0.classList.add("player--active")
    playing = true
    new_game.classList.remove("border")
    dice_img.classList.add("hidden")

}

function store_active(score, current_active_element) {
    if (current_active_element.classList.contains("player--0")) {
        player0_current_score_interface.textContent = 0
        player0_total_score += score
        player0_total_score_interface.textContent = player0_total_score
    } else {
        player1_current_score_interface.textContent = 0
        player1_total_score += score
        player1_total_score_interface.textContent = player1_total_score
    }

    if (player0_total_score >= 30) {
        player0.classList.add("player--winner")
        new_game.classList.add("border")
        playing = false
        

    } else if (player1_total_score >= 30) {
        player1.classList.add("player--winner")
        new_game.classList.add("border")
        playing = false
        

    }
}

dice_roller.addEventListener("click", () => {
    if (playing) {
        let active_player = document.querySelector(".player--active")
        let rolled_num = dice_roll()
        current_score += rolled_num === 1 ? 0 : rolled_num
        dice_img.setAttribute("src", `dice-${rolled_num}.png`)
        dice_img.classList.remove("hidden")
        if (rolled_num == 1) {

            switch_active()
            current_score = 0

        }
        if (active_player.classList.contains("player--0")) {
            player0_current_score_interface.textContent = current_score
        } else if (active_player.classList.contains("player--1")) {
            player1_current_score_interface.textContent = current_score
        }
    }
})

holder.addEventListener("click", () => {
    if (playing) {
    let active_player = document.querySelector(".player--active")
    store_active(current_score, active_player)
    switch_active()
    current_score = 0
    }
})

new_game.addEventListener("click", start_new_game)

change_name.addEventListener("click", () => {
    player0_name.textContent = prompt("Player 1 name") || "Player 1"
    player1_name.textContent = prompt("Player 2 name") || "player 2"


})