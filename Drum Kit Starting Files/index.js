
for(let i = 0; i < document.querySelectorAll(".drum").length; ++i){
document.querySelectorAll("button")[i].addEventListener("click", function () {
    
    var audio;
    //alert("i got clicked")
    if(i == 0){
    var audio = new Audio('./sounds/tom-1.mp3')
    audio.play()
    }

    if(i == 1){
        audio = new Audio('./sounds/tom-2.mp3')
        audio.play()
    }

    if(i == 2){
         audio = new Audio('./sounds/tom-3.mp3')
        audio.play()
    }

    if(i == 3){
        audio = new Audio('./sounds/tom-4.mp3')
        audio.play()
    }

    if(i == 4){
         audio = new Audio('./sounds/snare.mp3')
        audio.play()
    }

    if(i == 5){
        audio = new Audio('./sounds/kick-bass.mp3')
        audio.play()
    }

    if(i == 6){
        audio = new Audio('./sounds/crash.mp3')
        audio.play()
    }


});


}









