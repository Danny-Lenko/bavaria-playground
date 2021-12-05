"use strict"

let view = {
   displayMessage: function(msg) {
      document.querySelector('#messageArea').innerHTML = msg;
   },
   displayHit: function(location) {
      document.getElementById(location).setAttribute('class', 'hit');
      this.displayMessage("HIT!");
   },
   displayMiss: function(location) {
      document.getElementById(location).setAttribute('class', 'miss');
      this.displayMessage("You missed.");
   }
};

let model = {
   boardSize: 7,
   shipSize: 3,
   shipsNumber: 3,
   shipsSunk: 0,
   ships: [
      { locations: ['12', '13', '14'], hits: ['', '', ''] },
      { locations: ['22', '32', '42'], hits: ['', '', ''] },
      { locations: ['64', '65', '66'], hits: ['', '', ''] }
   ],

   fire: function(guess) {
      for (let i = 0; i < this.shipsNumber; i++) {
         let ship = this.ships[i];
         let index = ship.locations.indexOf(guess);
         if (index >= 0) {
            ship.hits[index] = "hit";
            view.displayHit(guess);
            this.isSunk(ship);
            return true;
         }
      }
      view.displayMiss(guess);
      return false;
   },

   isSunk: function(ship) {
      for (let i = 0; i < this.shipSize; i++) {
         if (ship.hits[i] !== "hit") {
            return false;
         }
      }
      this.shipsSunk++;
      view.displayMessage("You sank my battleship!");
      return true;
   }

};

let controller = {
   guesses: 0,

   processGuess: function(guess) {

   }

};

function parseGuess(guess) {
   let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
   let firstChar = guess.charAt(0);
   let row = alphabet.indexOf(firstChar);
   let column = guess.charAt(1);
   if (guess === null || guess.length !== 2) {
      alert("Oops, please enter a letter and a number on the board");
   } else if (isNaN(row) || isNaN(column)) {
      alert("Oops, that is not on the board"); 
   } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert("Oops, that's out of the board");
   }
}


parseGuess('A21');

model.fire('00');
model.fire('64');
model.fire('65');
model.fire('66');


