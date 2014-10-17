// var fullGameList = require('../models/allgames.js');

var Game = require('../models/game.js');

var Collection = function () {
	this.games = [];
};

Collection.prototype.addGame = function (consolename, productname, looseorcib, price, genre){
	var newGame = new Game(consolename, productname, looseorcib, price, genre);
	this.games.push(newGame);
};

Collection.prototype.getGame = function(consolename, productname){
	for(var i = 0; i < this.games.length; i++){
		if (this.games[i].consolename === consolename && this.games[i].productname === productname){
			return this.games[i];
		}
	}
};

Collection.prototype.deleteGame = function(consolename, productname){
	for(var i = 0; i < this.games.length; i++){
		if (this.games[i].consolename === consolename && this.games[i].productname === productname){
			this.games.splice(i, 1);
			return;
		}
	}

};

var userCollection = new Collection();

module.exports = userCollection;