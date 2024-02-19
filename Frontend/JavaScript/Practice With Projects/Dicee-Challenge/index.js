var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // This will give the dice1.png ~ dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; // This will give us images/dice1.png ~ dice6.png 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";  //This will give us images/dice1.png ~ dice6.png 
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h4").innerHTML = "Player 1 Wins🎉🎉";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h4").innerHTML = "Player 2 Wins🎉🎉";
}
else{
    document.querySelector("h4").innerHTML = "It's a tie🤝🤝";
}
