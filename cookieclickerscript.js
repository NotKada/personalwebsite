let cookies = 0;
let clickpower = 1;
let grandmaprice = 10;
let factoryprice = 25;

let btncookie = document.getElementById("btn-cookie");
let textScore = document.getElementById("score")

let btngrandma = document.getElementById("btn-grandma");
let textGrandmaPrice = document.getElementById("grandmaprice")

let btnfactory = document.getElementById("btn-factory");
let textFactoryPrice = document.getElementById("factoryprice")
let factorylevel = 0

let goldencookietrue = false

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

btnfactory.addEventListener("click", function(){
    if (cookies >= factoryprice){
        factorylevel += 1
        cookies -= factoryprice
        factoryprice += 10

        textScore.textContent = cookies;
        textFactoryPrice.textContent = factoryprice
    }
})

let factoryLoop = setInterval(function(){
    cookies += factorylevel
    textScore.textContent = cookies;

    if (Math.random() > 0.1){
        if (goldencookietrue == false){
            goldencookietrue = true
            
            const goldencookie = document.createElement("button");
            goldencookie.textContent == "Golden Cookie"
            goldencookie.addEventListener("click", function(){
                clickpower += 5
                goldencookie.remove
                setTimeout(() => {
                    clickpower -= 5
                }, 50000)
            })
            
            document.body.appendChild(goldencookie)

            setTimeout(() => {
                goldencookietrue == false
                if (goldencookie){
                    goldencookie.remove()
                }
            }, 75000);
        }
       
    }
}, 1000);