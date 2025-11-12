
let randomNumber1 = Math.floor(Math.random() * (6) + 1) // generate a random number between 1 and 6
let image_1 = document.querySelectorAll("img")[0] //select the right image
let randomDiceImage1 = "./images/dice" + randomNumber1 + ".png" // get a random image
let random_image1 = image_1.setAttribute("src", randomDiceImage1) //set a random image


let randomNumber2 = Math.floor(Math.random() * (6) + 1)
let image_2 = document.querySelectorAll("img")[1]
let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"
let random_image2 = image_2.setAttribute("src", randomDiceImage2)

//now, we are going to set a winner by change the text Refresh Me into a player 1 wins or player 2 wins
//in according of the score

let h1 = document.querySelector("h1")

h1.innerHTML = "Refresh Me"

if(randomNumber1 > randomNumber2){
    h1.innerHTML = "🚩 Player 1 Wins! "
}else if (randomNumber1 < randomNumber2){
    h1.innerHTML = "Player 2 Wins! 🚩"
}else{
    h1.innerHTML = "Draw!"
}

