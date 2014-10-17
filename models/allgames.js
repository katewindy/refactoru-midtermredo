var Game = require('../models/game.js');
var gameData = require('../models/data.js');

var AllGames = function(){
	this.games = [];
};

AllGames.prototype.addGame = function(consolename, productname, looseprice, cibprice, genre, id){
	var newGame = new Game(consolename, productname, looseprice, cibprice, genre, id);
	this.games.push(newGame);
};

AllGames.prototype.getGame = function(id){
	for(var i = 0; i < this.games.length; i++){
		if (this.games[i].id == Number(id)){
			return this.games[i];
		}
	}
};

var fullGameList = new AllGames();

for (var i = 0; i < gameData.length; i++){
	fullGameList.addGame(gameData[i][0], gameData[i][1], gameData[i][2], gameData[i][3], gameData[i][4], (100000+i));
}

module.exports = fullGameList;
