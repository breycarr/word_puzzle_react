const EMPTYBOARD = 0
const MAXBOARDLENGTH = 9
const MAXCONSONANTS = 6
const MAXVOWELS = 5

function Countdown() {
  this.board = [];
  this.numberOfConsonants = EMPTYBOARD
  this.numberOfVowels = EMPTYBOARD
  this.consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L",
                     "M", "N", "P", "Q", "R", "S", "T", "V", "W",
                     "X", "Y", "Z"
                   ];
  this.vowels = ["A", "E", "I", "O", "U"];
}

Countdown.prototype.showBoard = function() {
  return this.board;
}

Countdown.prototype.getLetter = function(type) {
  var selection = this.consonants;
  if (type === "vowel") {
    selection = this.vowels;
  }

  var letter = selection[Math.floor(Math.random()*selection.length)];
  this.board.push(letter);
  return letter
}

Countdown.prototype.boardLengthCheck = function() {
  if (this.board.length >= MAXBOARDLENGTH) {
    throw `The board can only be ${MAXBOARDLENGTH} letters!`;
  }
}

Countdown.prototype.consonant = function() {
  this.boardLengthCheck();

  if (this.numberOfConsonants >= MAXCONSONANTS) {
    throw `The board can only have ${MAXCONSONANTS} consonants`;
  }
  
  var letter = this.getLetter("consonant");
  this.numberOfConsonants += 1
  return letter;
}

Countdown.prototype.vowel = function() {
  this.boardLengthCheck();

  if (this.numberOfVowels >= MAXVOWELS) {
    throw `The board can only have ${MAXVOWELS} vowels`;
  }

  var letter = this.getLetter("vowel");
  this.numberOfVowels += 1
  return letter;
}

export default Countdown