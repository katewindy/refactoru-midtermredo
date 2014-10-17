var fullGameList = require('../models/allgames.js');
var gameData = require('../models/data.js');

if (fullGameList.length === 0){
	for (var i = 0; i < gameData.length; i++){
		fullGameList.addGame(gameData[i][0], gameData[i][1], gameData[i][2], gameData[i][3], gameData[i][4],(100000+i));
	}
}

var browseController = {
	browse: function(req, res) {
		res.render('browse', {
			fullGameList: fullGameList
		});
	},
	viewGame: function(req, res) {
		var id = req.params.gameid;
		var game = fullGameList.getGame(id);
		console.log(id);
		console.log(game);
		res.render('game', {
			game: game
		});
		
	}
};

module.exports = browseController;