//Group of words from internet placed into a temperate literal to make one long string
let words = [
  `once,
  seem,
  also,
  face,
  left,
  he,
  a,
  above,
  feet,
  some,
  took,
  head,
  work,
  along,
  time,
  that,
  girl,
  are,
  may,
  to,
  some,
  life,
  look,
  study,
  large,
  after,
  still,
  us,
  air,
  next,
  that,
  oil,
  must,
  her,
  my,
  no,
  keep,
  head,
  often,
  house,
  great,
  know,
  was,
  study,
  before,
  above,
  we,
  way,
  study,
  man,
  fire,
  through,
  know,
  into,
  now,
  ask,
  young,
  out,
  set,
  said,
  why,
  what,
  plant,
  state,
  that,
  country,
  home,
  turn,
  you,
  year,
  does,
  good,
  not,
  black,
  head,
  being,
  through,
  enough,
  day,
  first,
  add,
  people,
  earth,
  my,
  great,
  black`,
];

let newWord = words[0];

let allWords = newWord.split("\n");

let strings = [];
let i = 0;
allWords.forEach((word) => {
  strings.push(word);
  // console.log(strings);
  i++;
});

let phrase = [];
for (let j = 0; j < strings.length; j++) {
  //Trim white space
  phrase.push(strings[j].trim());
  // phrase.push(strings[j]);
  //Remove ',' characters
  phrase[j] = phrase[j].replace(",", "");
}

// console.log(phrase); //Final array of 86 words

let words2 = [
  `is,was,are,be,have,had,were,can,said,use,do,will,would,make,like,has,look,write,go,see,could,been,all,am,find,get,come,made,may,take,know,live,give,thinks,may,help,tell,follow,came,want,show,set,put,does,must,ask,went,read,need,move,try,change,play,spell,found,study,learn,should,add,start,thought,saw,turn,might,close,seem,open,begin,got,walk,began,grow,took,carry,hear,stop,miss,eat,watch,let,cut,talk,being,leave`,
];

let verbs = words2[0].split(",");

for (let j = 0; j < verbs.length; j++) {
  //Trim white space
  verbs[j] = verbs[j].replace(" ", "");
}

// console.log(verbs); //Final array of 84 words

let words3 = [
  `above, need, only, come, number, begin, thing, war, this, little, is, be, change, light, hear, help, show, grow, day, from, us, along, she, us, four, school, made, red, idea, in, mile, you, along, begin, thought, sound, as, away, each, food, his, animal, group, no, far, father, along, follow, mean, face, will, song, who, man, much, very, their, high, know, again, in, every, four, came, as, off, walk, we, year, may, for, like, work, back, he, up, before, got, more, for, make, these, there, get, keep, long, really, or, idea, three`,
];

let words4 = words3[0].split(",");

for (let j = 0; j < words4.length; j++) {
  //Trim white space
  words4[j] = words4[j].replace(" ", "");
}

// console.log(vwords4); //Final array of 90 words

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Select containers
const wordLetters = document.querySelector(".which-words-container");
const wordTyped = document.querySelector(".typed-words-container");

let randomNo = 0;
let arrayOfWords = [];
let wordString; //String of words and spaces
let wordStringArray = []; //Array or individual letters and spaces
let wordsToTypeLength; //Length of words array characters
let first = true; //First time through program
let firstTyped = true; //First time letters are typed

function practiceWords() {
  //Remove existing <div>'s for word string and letters types
  for (let i = 0; i < wordsToTypeLength; i++) {
    document.querySelector(`.words${[i]}`).remove();
    document.querySelector(`.words-typed${[i]}`).remove();
  }

  setWords(); //Select array of words from 3 options

  let wordsLength = arrayOfWords.length;

  let randomNo2 = Math.floor(Math.random() * arrayOfWords.length);

  wordString =
    randomNo2 <= wordsLength - 4
      ? arrayOfWords[randomNo2] +
        " " +
        arrayOfWords[randomNo2 + 1] +
        " " +
        arrayOfWords[randomNo2 + 2] +
        " " +
        arrayOfWords[randomNo2 + 3] +
        " " +
        arrayOfWords[randomNo2 + 4]
      : arrayOfWords[randomNo2] +
        " " +
        arrayOfWords[randomNo2 - 1] +
        " " +
        arrayOfWords[randomNo2 - 2] +
        " " +
        arrayOfWords[randomNo2 - 3] +
        " " +
        arrayOfWords[randomNo2 - 4];

  wordStringArray = wordString.split(""); //Create array of letters and spaces to type

  wordsToTypeLength = wordStringArray.length;

  /////////////////////////////////////////////////////Add to function//////////////////
  // if (first) {
  //   //Generate <div></div>'s for letters to practive
  //   addElementLetters(inputLettersArray[random], "div", i);
  //   //Change content of existing <div></div>'s
  // } else {
  //   //Update existing letters to new string of letters to practice
  //   document.querySelector(`.letters${i}`).textContent = practiceArray[i];
  //   //Ensure color is black in case turned red by space bar routing (line 168)
  //   document.querySelector(`.letters${i}`).style.color = "black";
  // }

  ///////////////////////////////////add to fx//////////////////////////////////////////

  //Creat div and spaces representing words
  for (let i = 0; i < wordsToTypeLength; i++) {
    //create <div></div>'s for words and set text node value.  <div's created are housed in the 'typed-words-container' container
    addWordLetters(wordStringArray[i], "div", i);
    console.log(wordStringArray[i]);
    if (wordStringArray[i] == " ") {
      document.querySelector(`.words${[i]}`).textContent = "_";
    }
  }

  //Creat div for letters to be typed
  for (let i = 0; i < wordsToTypeLength; i++) {
    //create <div></div>'s for words and set text node value to "_".  <div's created are housed in the 'typed-words-container' container
    addTypedLetters(" ", "div", i);
    // console.log(wordStringArray[i]);
    if (wordStringArray[i] == " ") {
      document.querySelector(`.words${[i]}`).textContent = "_";
      // console.log(wordStringArray[i]);
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

practiceWords(); //Initial call on program load

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  typeWordLetters(e); //Call function to process keydown event
});

//Index for typed letters
let j = 0;

//////////////////////////////////////////////////Functions////////////////////////////////////////////////////////

// console.log(arrayOfWords);

// console.log("wordString " + wordString);

console.log(wordStringArray);

// console.log(wordsToTypeLength);

/////////////////////////////////////function setWords////////////////////////////////
function setWords() {
  randomNo = Math.floor(Math.random() * 3);
  // console.log(randomNo);
  if (randomNo == 0) {
    arrayOfWords = phrase;
  } else if (randomNo == 1) {
    arrayOfWords = verbs;
  } else {
    arrayOfWords = words4;
  }
}

///////////////////////////////////function addWordLetters/////////////////////////////

//Create <div></div>'s for desired words and spaces
function addWordLetters(text, type, index) {
  // create a new div element
  const newDiv = document.createElement(type);

  //Add classes to new element
  newDiv.classList.add("words");
  newDiv.classList.add(`words${[index]}`);
  //   newDiv.classList.add(text);

  // and give it some content
  const newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  //Add newly created element and its content into the dom nested within <section> with '.C' class
  wordLetters.appendChild(newDiv);
}

///////////////////////////////////function addTypedLetters//////////////////////////

//Function to add <div> elements for the words to be typed
function addTypedLetters(text, type, index) {
  // create a new div element
  const newDiv = document.createElement(type);

  //Add classes to new element
  newDiv.classList.add("words-typed");
  newDiv.classList.add(`words-typed${[index]}`);

  // and give it some content
  const newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  //Add newly created element and its content into the dom nested within <section> with 'letters-typed-container' class
  wordTyped.appendChild(newDiv);
}

////////////////////////////////function typeWordLetters/////////////////////////////
function typeWordLetters(e) {
  //Prevent error from out of range index
  if (j >= wordsToTypeLength) {
    j = 0;
    setTimeout(restartTyping(), 100); //Restarts the program
    return;
  }

  if (`${e.code}` == "Space") {
    //Prevent space bar event which resets program
    e.preventDefault();
  }

  //Select <div></div> for typed letter
  let whichLetter = document.querySelector(`.words-typed${j}`);
  //Assign typed letter to <div></div>
  whichLetter.textContent = e.key;
  if (e.key == " ") {
    //"_" represents space (" ") character
    whichLetter.textContent = "_";
    if (wordStringArray[j] != " ") {
      whichLetter.style.color = "red";
    } else {
      whichLetter.style.color = "black";
    }
  } else {
    //Change font color if incorrect letter typed
    if (e.key != wordStringArray[j]) {
      whichLetter.style.color = "red";
    } else {
      whichLetter.style.color = "black";
    }
  }

  j++;
}

/////////////////////////////////////function restartTyping//////////////////////////

function restartTyping() {
  let whichLetter;
  // practice();
  for (let i = 0; i < wordsToTypeLength; i++) {
    whichLetter = document.querySelector(`.words-typed${i}`);
    whichLetter.textContent = "";
    // console.log(whichLetter.textContent);
    j = 0;
  }
  first = false;
  practiceWords();
}

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
/*
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
*/
