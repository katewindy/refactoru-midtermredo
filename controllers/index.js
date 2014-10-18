var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	collection: function(req, res) {
		res.render('collection');
	},
	stats: function(req, res){
		res.render('stats');
	},
	wtfmachine: function(req, res) {
		res.render('wtfmachine');
	},
	newstuff: function(req, res){
		res.render('newstuff');
	}
};

module.exports = indexController;