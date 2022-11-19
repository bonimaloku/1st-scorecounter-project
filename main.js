let homescore = document.getElementById("home-score")
let awayscore = document.getElementById("away-score")


let count = 0
let counthome = 0
let countaway = 0


function increasehomescoreone () {
    counthome += 1
    homescore.textContent = counthome
}

function increasehomescoreone1 () {
    counthome += 2
    homescore.textContent = counthome
}
function increasehomescoreone2 () {
    counthome += 3
    homescore.textContent = counthome
}

function increasehomescoretwo() {
    countaway += 1
    awayscore.textContent = countaway
}
function increasehomescoretwo1() {
    countaway += 2
    awayscore.textContent = countaway
}
function increasehomescoretwo2() {
    countaway += 3
    awayscore.textContent = countaway
}
function newgame () {
    homescore.textContent = 0
    awayscore.textContent = 0
    counthome = 0
    countaway = 0
}

