var User = function (name, email, username, city, state, country, birthmonth, birthday, birthyear, faveconsole, favegame, userid, userpic){
	this.name = name;
	this.email = email;
	this.username = username;
	this.city = city;
	this.state = state;
	this.country = country;
	this.birthmonth = birthmonth;
	this.birthday = birthday;
	this.birthyear = birthyear;
	this.faveconsole = faveconsole;
	this.favegame = favegame;
	this.userid = userid;
	this.userpic = '';
};

var user = new User();

module.exports = user;