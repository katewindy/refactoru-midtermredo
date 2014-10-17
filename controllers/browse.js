var fullGameList = require('../models/allgames.js');
var gameData = require('../models/data.js');

for (var i = 0; i < fullGameList.length; i++){
	fullGameList.addGame(gameData[i].consolename, gameData[i].productname, gameData[i].looseprice, gameData[i].cibprice, gameData[i].genre);
}

var browseController = {
	browse: function(req, res) {
		res.render('browse', {
			fullGameList: fullGameList
		});
	},
	viewGame: function(req, res) {
		var productname = req.params.productname;
		var consolename = req.params.consolename;
		var game = fullGameList.getGame(consolename, productname);
		res.render('game', {
			game: game
		});
	}
};