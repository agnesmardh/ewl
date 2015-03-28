var Guest = function () {
	this.theGuest = "";
}

Guest.prototype.getJSON = function() {
	if (this.theGuest === "") {
		return {};
	} else {
		return { guest : this.theGuest };
	};
};

Guest.prototype.set = function(sGuest) {
	this.theGuest = sGuest;
};

Guest.prototype.get = function() {
	return this.theWGuest;
};
