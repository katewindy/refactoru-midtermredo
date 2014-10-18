var TradeList = function (){
	this.games = [];
};

TradeList.prototype.addGame = function (consolename, productname, looseorcib, price, genre, userdescription){
	var newGame = new Game(consolename, productname, looseorcib, price, genre);
	this.games.push(newGame);
};

TradeList.prototype.getGame = function(consolename, productname){
	for(var i = 0; i < this.games.length; i++){
		if (this.games[i].consolename === consolename && this.games[i].productname === productname){
			return this.games[i];
		}
	}
};

TradeList.prototype.deleteGame = function(consolename, productname){
	for(var i = 0; i < this.games.length; i++){
		if (this.games[i].consolename === consolename && this.games[i].productname === productname){
			this.games.splice(i, 1);
			return;
		}
	}

};

var tradelist = new TradeList();

module.exports = tradelist;