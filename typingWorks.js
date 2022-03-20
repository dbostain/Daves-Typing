"use strict";

//Select containers
const lettersChosen = document.querySelector(".which-letters-container");
const lettersTyped = document.querySelector(".letters-typed-container");

//Select input element
const inputLetters = document.querySelector(".input");

//Select start button
const start = document.querySelector(".button");

//Listen for start click
start.addEventListener("click", practice);

//Desired letters form input box
let inputLettersCombined = inputLetters.value;

//Make array of desired letters
let inputLettersArray = inputLettersCombined.split("");

//Length of displayed letters
let numberLetters = 18;

//First time through the code to develop the <div></div>'s for letters to type
let first = true;

//First time through the code to develop the <div></div>'s for typed letters
let firstTyped = true;

//Array of letters to practice
let practiceArray = [];

//Creat <div></div>'s for desired letters
function addElementLetters(text, type, index) {
  // create a new div element
  const newDiv = document.createElement(type);

  //Add classes to new element
  newDiv.classList.add("letters");
  newDiv.classList.add(`letters${[index]}`);
  //   newDiv.classList.add(text);

  // and give it some content
  const newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  //Add newly created element and its content into the dom nested within <section> with 'which-letters-container' class
  lettersChosen.appendChild(newDiv);

  //   let allLetters = document.querySelectorAll(".letters");
  //   console.log(allLetters);
}

//Index for typed letters
let j = 0;

//Function to initiate practice
function practice() {
  let random;

  j = 0;

  for (let i = 0; i < numberLetters; i++) {
    document.querySelector(`.letters-typed${i}`).textContent = "";
  }
  //Read input letters desired
  inputLettersCombined = inputLetters.value;

  //Split into a letters array
  inputLettersArray = inputLettersCombined.split("");

  //Add character representing a space character
  inputLettersArray.push("_");

  //Generate string of desired letters
  for (let i = 0; i < numberLetters; i++) {
    //Generate random no based on input letters array
    random = Math.floor(Math.random() * inputLettersArray.length);
    //Add to practice array
    practiceArray[i] = inputLettersArray[random];

    if (first) {
      //Generate <div></div>'s for letters to practive
      addElementLetters(inputLettersArray[random], "div", i);
      //Change content of existing <div></div>'s
    } else {
      //Update existing letters to new string of letters to practice
      document.querySelector(`.letters${i}`).textContent = practiceArray[i];
      //Ensure color is black in case turned red by space bar routing (line 168)
      document.querySelector(`.letters${i}`).style.color = "black";
    }
  }
  first = false;
}

//Add <div></div>'s for typed letters
for (let i = 0; i < numberLetters; i++) {
  //Creat div's if first
  if (firstTyped) {
    //Generate <div></div>'s for typed letters
    addTypedLetters("", "div", i);
  }
  // firstTyped = false;
}

firstTyped = false;

//Add <div> elements for the letters to be typed
function addTypedLetters(text, type, index) {
  // create a new div element
  const newDiv = document.createElement(type);

  //Add classes to new element
  newDiv.classList.add("letters-typed");
  newDiv.classList.add(`letters-typed${[index]}`);

  // and give it some content
  const newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  //Add newly created element and its content into the dom nested within <section> with 'letters-typed-container' class
  lettersTyped.appendChild(newDiv);
}

//Add event listener for keydown event
document.addEventListener("keydown", (e) => {
  if (`${e.code}` == "Space") {
    //Prevent space bar event which resets program
    e.preventDefault();
  }
  //If 'Enter' pressed, restart typing - Previously at Line 162 and gave poor performance...
  if (`${e.code}` == "Enter") {
    //Restart program
    restartTyping();
    e.preventDefault();
    return;
  }
  typeLetters(e); //Call function to process keydown event
});

//Index for typed letters
j = 0;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function typeLetters(e) {
  //Prevent error from out of range index
  if (j >= numberLetters) {
    j = 0;
    setTimeout(restartTyping(), 100); //Restarts the program
    return;
  }

  if (`${e.code}` == "Space") {
    //Prevent space bar event which resets program
    e.preventDefault();
  }

  //Select <div></div> for typed letter
  let whichLetter = document.querySelector(`.letters-typed${j}`);
  //Assign typed letter to <div></div>
  whichLetter.textContent = e.key;
  if (e.key == " ") {
    //"_" represents space (" ") character
    whichLetter.textContent = "_";
    if (practiceArray[j] != "_") {
      whichLetter.style.color = "red";
    } else {
      whichLetter.style.color = "black";
    }
  } else {
    //Change font color if incorrect letter typed
    if (e.key != practiceArray[j]) {
      whichLetter.style.color = "red";
    } else {
      whichLetter.style.color = "black";
    }
  }

  j++;
}

//Restarts practice session when "enter" key is pressed
function restartTyping() {
  let whichLetter;
  // practice();
  for (let i = 0; i < numberLetters; i++) {
    whichLetter = document.querySelector(`.letters-typed${i}`);
    whichLetter.textContent = "";
    // console.log(whichLetter.textContent);
    j = 0;
  }
  practice();
}

practice();

/////////////////////////////////////Original Timer Routine - Works/////////////////////////////////////////

//Select buttons
let pauseTimer = document.querySelector(".pause");

let continueTimer = document.querySelector(".continue");

//Select time display
let timeDisplay = document.querySelector(".time-display");

// let seconds = 0;
// let minutes = 0;

// //Set interval for timer
// let timePractice = setInterval(timerSet, 1000);

// //Logs time to display
// function timerSet() {
//   // console.log("Hello World!");
//   seconds += 1;
//   if (seconds == 60) {
//     minutes += 1;
//     seconds = 0;
//   }
//   timeDisplay.textContent =
//     seconds < 10 ? minutes + " : " + "0" + seconds : minutes + " : " + seconds;
//   // console.log(seconds);
// }

// //Pause button
// pauseTimer.addEventListener("click", () => {
//   // alert("Pause");
//   clearInterval(timePractice);
// });

// //Continue button
// continueTimer.addEventListener("click", () => {
//   // timePractice = setInterval(timerSet, 1000);
//   timePractice = setInterval(timerSet, 1000);
//   // timePractice;
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////New Routine for calculating timer///////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

let timerMinutes = 0;

let timerSeconds = 0;

//Stores elapsed time during pause
let timed = [0, 0];

//Set beginning of timer
let initialTime = mkTime();

//Gets time in seconds from Jan 1, 1970
function mkTime() {
  let date = new Date();
  return Math.floor(date.getTime() / 1000);
}

///////////////////////////////////////////////Start timer here///////////////////////////////////////////////

let timeSession;
//Set interval
// let timeSession = setInterval(timeElapsed, 1000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Pause button
pauseTimer.addEventListener("click", () => {
  //Pause timer
  clearInterval(timeSession);
  //Save current minutes and seconds
  timed[0] = timerMinutes;
  timed[1] = timerSeconds;
});

//Continue button
continueTimer.addEventListener("click", () => {
  //Reset initial time
  initialTime = mkTime();
  //Restart timer
  timeSession = setInterval(timeElapsed, 1000);
});

function timeElapsed() {
  //Calculate minutes - add previous minutes to minutes
  timerMinutes = timed[0] + Math.floor((mkTime() - initialTime) / 60);
  //Calculate seconds - add previous seconds to seconds
  timerSeconds = timed[1] + ((mkTime() - initialTime) % 60);
  if (timerSeconds >= 60) {
    timerMinutes += 1;
    timerSeconds %= 60;
  }
  // console.log("sec: " + timerSeconds);
  timeDisplay.textContent =
    timerSeconds < 10
      ? timerMinutes + " : " + "0" + timerSeconds
      : timerMinutes + " : " + timerSeconds;
}
