// alert("hello")


//changing html with javascript
//manipulate DOM with javascript
// var age = prompt('What is your age?')

// document.getElementById('sometext').innerHTML = age;


//data types
//let name = {first: 'jane', last:'Doe'} //object //key value pair(dictionary)
//console.log(name);
//let fruits = 'banana'
//fruits.slice(2,6) //output 'nana'
//fruits.replace('ban','123') //output '123ana'
 
//objects in js
// let student = {first: "Rafeh", last: "rollo"}
// console.log(student['last'])  or  console.log(student.last)


//---------------------------------------------------------------------
//CHALLENGE 1: your age in days
function ageInDays(){ //for clickme button
    var birthYear = prompt('What year were you born? ')
    var date = new Date();
    var ageInDayss = (date.getFullYear() - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer= document.createTextNode('You are ' + ageInDayss + ' days old');

    h1.setAttribute('id', 'ageInDays'); //sets div with h1 id to ageInDays
    h1.appendChild(textAnswer); //adds the text to the child
    document.getElementById('flex-box-result').appendChild(h1); //adds it to the div

}
function reset(){ //for reset
    document.getElementById('ageInDays').remove();
}
//---------------------------------------------------------------------
//CHALLENGE 2: cat Generator
function generateCat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen')
    image.src = "https://cdn2.thecatapi.com/images/MTU2NjE0Nw.gif"
    div.appendChild(image);
}
//---------------------------------------------------------------------
// CHALLENGE 3:  rock,paper,scissors
function rpsGame(yourChoice){
    var humanChoice, botChoice
    //gets id of clicked image
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt())

    //getting results
    results = decideWinner(humanChoice,botChoice); //returns results of the game //returns array [1,0] //human  win bot lost, [0.5,0.5] //draw etc 

    //message the game prints out //you won! //you lost
    message = finalMessage(results); //returns a dictionary(key value) [1,0]  ('message': human won! , 'color': 'green')
    rpsFrontEnd(yourChoice.id, botChoice,message);
}

function randomToRpsInt(){
    return Math.floor(Math.random() * 3) //number between 0,1,2
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice,computerChoice){
    var rpsDB = {
        'rock': {'scissors' : 1, 'rock' : 0.5, 'paper': 0}, //possible outcomes that rock can win,lose or draw to //1 is win(eg rock wins against scissors so rock is 1), 0.5 is draw. 0 is lose accordion-header
        'paper': {'rock':  1 , 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock' : 0} 
    } 
    var yourScore = rpsDB[yourChoice][computerChoice];
    var computerScore = rpsDB[computerChoice][yourChoice];

    return [yourScore,computerScore]; //returns an array
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'}
    }
    else if(yourScore === 0.5 ){
        return {'message': 'You tied!', 'color': 'yellow'}
    }
    else{
        return {'message': 'You won!', 'color': 'green'}
    }
}
function rpsFrontEnd(humanImgChoice,botImgChoice,finalMessage){
    var imagesDB = {
        //getting the source of images
        'rock': document.getElementById('rock').src, 
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //EG: imagesDB['rock'] //gets rock image

    //removing all images after clicking
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //creating independent divs containing choices (human or bot&message)
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //creating styles for elementss
    humanDiv.innerHTML = "<img src='" + imagesDB[humanImgChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    messageDiv.innerHTML = "<h1 style= color:" + finalMessage['color'] + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDB[botImgChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(2437,38,24,1)'>"

    //appending the html to the existing div
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//---------------------------------------------------------------------
// CHALLENGE 4:  CHANGE THE COLOR OF ALL BUTTONS
var allButtons = document.getElementsByTagName('button') //getting all buttons

var copyOfAllButtons = [];
for(let i=0; i < allButtons.length; i++){
    //push(save) each button class to the array
    copyOfAllButtons.push(allButtons[i].classList[1])
}
function buttonColorChange(button){
    if(button.value === 'red'){
        buttonsRed();
    }
    else if(button.value === 'green'){
        buttonsGreen();
    }
    else if(button.value === 'random'){
        buttonsRandom();
    }
    else if(button.value ==='reset'){
        buttonsColorReset();
    }
}
function buttonsRed(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]) //remove the button class of this button
        allButtons[i].classList.add('btn-danger')
    }
}

function buttonsGreen(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]) //remove the button class of this button
        allButtons[i].classList.add('btn-success')
    }
}
function buttonsColorReset(){
    for(let i=0; i< allButtons.length; i++ ){
        //remove the buttons classes and add its original classes from the copy array above
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(copyOfAllButtons[i])
    }
}
function buttonsRandom(){
    let choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning']
    for (let i =0; i < allButtons.length; i++){
        let randNumber = Math.floor(Math.random()* 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]) //remove existing button class
        allButtons[i].classList.add(choices[randNumber]) //making btn classes random

    }
}
//---------------------------------------------------------------------
// CHALLENGE 5:  BLACKJACK!
//deal removes all images from your box
let blackjackGame = {
    'you' : {'scoreSpan': '#your-blackjack-result', 'div' : '#your-box', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-blackjack-result', 'div' : '#dealer-box', 'score' : 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
}
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

// getting sounds and adding sound to button below
const HITSOUND = new Audio('static/sounds/swish.m4a')

//an event listener listening to the button with an id, and a click event calling the function below
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit)
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal)

function blackjackHit(){
    let card = randomCard();
    showCard(card,YOU);
    //showCard(DEALER);
}
//choosing cards at random
function randomCard(){
    let randomIndex = Math.floor(Math.random()*13)
    return blackjackGame['cards'][randomIndex]
}
//in charge of showing card and playing sounds
function showCard(card,activePlayer){
    //creating image element
    let cardImage = document.createElement('img')
    //getting the source of image
    cardImage.src = `static/cards/${card}.png`
    //adding image to div
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    HITSOUND.play(); //playing the sound
}

function blackjackDeal(){
    //getting all images in your box(returns all images in 'your box')
    let yourImages = document.querySelector('#your-box').querySelectorAll('img')
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')
    
    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
        
    }
    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
        
    }
}

