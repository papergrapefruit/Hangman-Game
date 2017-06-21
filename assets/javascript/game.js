function clickBlue() {
  var enterMatrix = "The answer is out there, Neo. It’s looking for you. And it will find you if you want it to.";
    alert(enterMatrix);
}
function clickRed() {
  var str = "I'm trying to free your mind, Neo. But I can only show you the door. You're the one that has to walk through it. (click here!)";
    var result = str.link("game.html");
    document.getElementById("next").innerHTML = result;
}
var wordAnswers = [
["T", "R", "E", "E", "H", "O", "U", "S", "E"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["W","E","B","D","E","S","I","G","N"],
  ["E","D","U","C","A","T","I","O","N"],
  ["C","H","O","C","O","L","A","T","E"],
  ["G","E","R","M","A","N","Y"]
];
var wordBoard = document.getElementById("wordBoard");
var random = Math.floor((Math.random()*(wordAnswers.length)));
var wordAnswer = wordAnswers[random];// the word to guess will be chosen from the array above
var misses = 0;
var guessWord=[];

// every letter in the word is symbolized by an underscore in the guessfield
wordBoard.innerHTML="";
for (var i = 0; i < wordAnswer.length; i++) {
  guessWord[i] = "_";
  wordBoard.innerHTML+=guessWord[i] +"&nbsp; ";
}
// prints the guessfield
function printGuessword(){
	for (var i = 0; i < guessWord.length; i++){
	}
printGuessword();
}
//checks if the the letter provided by the user matches one or more of the letters in the word
var testLetter = function(){
	var f = document.guessForm;
	var b = f.elements["letterGuess"];
	var letter = b.value;
console.log(letterGuess);
  // the letter provided by the user
	letter = letter.toUpperCase();
  console.log(letter.toUpperCase);
	for (var i = 0; i < wordAnswer.length; i++){
		if(wordAnswer[i] === letter){
			guessWord[i] = letter + " ";
			var hit = true;
		}
	b.value = "";
	}
  //
var showLives = document.getElementById("guesses");
comments = function () {
   showLives.innerHTML = "You have " + lives + " lives";
   if (lives < 1) {
     showLives.innerHTML = "Game Over";
   }
   for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!hit){
		var guessedLetters = document.getElementByClass("panel-body");
		var letter = document.createTextNode(" " + letter);
		guessedLetters.appendChild(letter);
		misses++;

	//checks if all letters have been found
	var done = true;
	for (var i = 0; i < guessWord.length; i++){
		if(guessWord[i] === "_ "){
			done = false;
		}
	}
	if(done){
		window.alert("You win!");
	}

	//once you got six wrong letters, you lose
	if(misses === 6){
		window.alert("Uh...I guess you're stuck in the Matrix for now.");
	}
}

function init(){
	printGuessword();
}

window.onload = init;
}
