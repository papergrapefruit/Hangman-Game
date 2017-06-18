function clickBlue() {
  var enterMatrix = "The answer is out there, Neo. It’s looking for you. And it will find you if you want it to.";
  alert (enterMatrix);
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
]
var random = Math.floor((Math.random()*(wordAnswers.length-1)));
console.log(random);
var wordAnswer = wordAnswers[random];
console.log(wordAnswer);
// the word to guess will be chosen from the array above
var guessWord = new Array(wordAnswer.length);
console.log(guessWord);
var misses = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < guessWord.length; i++){
	guessWord[i] = "_ ";
}
console.log(guessWord.length);
console.log(guessWord);

// prints the guessfield
function printGuessword(){
	for (var i = 0; i < guessWord.length; i++){
	var wordBoard = document.getElementById("wordboard");
	var letter = document.write(guessWord[i]);
  guessArea.appendChild(letter);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkGuess = function(){
	var f = document.inlineFormInput;
	var b = f.elements["guessLetter"];
	var letter = b.value;
  // the letter provided by the user
	letter = letter.toUpperCase();
	for (var i = 0; i < word.length; i++){
		if(word[i] === letter){
			guessWord[i] = letter + " ";
			var hit = true;
		}
	b.value = "";
	}

	//deletes the guessfield and replaces it with the new one
	var guessArea = document.getElementById("inlineFormInput");
	guessArea.innerHTML="";
	printGuessword();

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
