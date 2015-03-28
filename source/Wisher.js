var Wisher = function () {
	this.theWisher = "";
}

Wisher.prototype.getJSON = function() {
	if (this.theWisher === "") {
		return {};
	} else {
		return { wisher : this.theWisher };
	};
};

Wisher.prototype.set = function(sWisher) {
	this.theWisher = sWisher;
};

Wisher.prototype.get = function() {
	return this.theWisher;
};
