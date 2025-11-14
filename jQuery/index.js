
$(document).ready(function (){
    $("h1").css("color", "red");

for( i = 0; i < document.querySelectorAll("button").length; ++i)
$("button")[i].addEventListener("click" , function () {
    alert("i got a click")
})
})

