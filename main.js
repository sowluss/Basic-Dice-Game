// Piching random number betwen 1 and 6.
const randomNumber1 = Math.floor(Math.random() * 6) + 1;

// selecting dice images from 1 to 6
const randomDiceImage = "dice" + randomNumber1 + ".png";

const randomImageSource = "images/" + randomDiceImage;

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Second player

const randomNumber2 = Math.floor(Math.random() * 6) +1;

const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Winner title if Player 1 winds

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}