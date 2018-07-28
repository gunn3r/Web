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
    if(event.which === 13){
        buttonClicked();
    }
}