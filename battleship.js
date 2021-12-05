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
   
};

model.fire('00');
model.fire('64');
model.fire('65');
model.fire('66');


