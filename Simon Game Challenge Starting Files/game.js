
//5. create a new empty array called gamePattern
var gamePattern = []

//3. Create a new array called buttonColours and set it to hold the sequence "red","blue","green","yellow"

var buttonColours = ["red", "blue", "green", "yellow"]

//1. create a new function called nextSequence()

function nextSequence() {

    //2. generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4)
    //4. Create a variable called randomChosenColour and use the randomNumber from step 2 to select
    // a random colour from the buttonColours array
    var randomChosenColour = buttonColours[randomNumber]
    //6. add the new randomChosenColour generated in step 4 to the end of the game pattern
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}


   
    
    
    






