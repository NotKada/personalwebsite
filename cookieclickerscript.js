let cookies = 0;
let clickpower = 1;
let grandmaprice = 10;
let factoryprice = 25;

let btncookie = document.getElementById("btn-cookie");
let textScore = document.getElementById("score")

let btngrandma = document.getElementById("btn-grandma");
let textGrandmaPrice = document.getElementById("grandmaprice")

btncookie.addEventListener("click", function() {
    cookies += clickpower;
    textScore.textContent = cookies;
})

btngrandma.addEventListener("click", function(){
    if (cookies >= grandmaprice){
        clickpower += 1
        cookies -= grandmaprice
        grandmaprice += 5

        textScore.textContent = cookies;
        textGrandmaPrice.textContent = grandmaprice
    }
})