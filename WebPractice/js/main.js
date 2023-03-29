var btn = document.getElementById("go-button");
var textB = document.getElementsByClassName("my-input")[0];

function buttonClicked(){
    console.log(this);
    console.log("Button Clicked");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML = "Don't do it! "+textB.value;
}

var hobbies = ["pizza", "gaming", "reading"];

//loop through array
hobbies.forEach(function(item, index) {
    console.log("I like ", item, index);
})
btn.addEventListener("click", buttonClicked);

textB.addEventListener("keypress", itemKeyPress);

function itemKeyPress(event) {
    //alert(`Key ${event.key} button is pressed`)
    //if(event.which === 13){
    //updated event.which to event.key
    if(event.key === 'Enter'){
        buttonClicked();
    }
}

//Random number function practice  
function randomInt(min, max){
    var numOfValues = max - min + 1;
    var randomNum = Math.random();
    var randomVal = randomNum * numOfValues;
    var roundedRandomVal = Math.floor(randomVal);
    var finalNum = min + roundedRandomVal;

    return finalNum;
}

//Anonymous function
var greeting = function() {
    var name = prompt("Please tell me your name", "");
    console.log(`Hello ${name}. how are you today?`);
}