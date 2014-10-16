var Game = require('../models/game.js');

var AllGames = function(){
	this.games = [];
};

AllGames.prototype.addGames = function(consolename, productname, looseprice, cibprice, genre){
	var newGame = new Game(consolename, productname, looseprice, cibprice, genre);
	this.games.push(newGame);
};

AllGames.prototype.getGame = function(consolename, productname){
	for(var i = 0; i < this.games.length; i++){
		if (this.games[i].consolename === consolename && this.games[i].productname === productname){
			return this.games[i];
		}
	}
};

var fullGameList = new AllGames();

module.exports = fullGameList;