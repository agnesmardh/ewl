var Wish = function () {
	this.theWish = "";
	console.log("Wish created");
}

Wish.prototype.getWishJSON = function() {
	if (this.theWish === "") {
		return {};
	} else {
		return { wish : this.theWish };
	};
};

Wish.prototype.set = function(sWish) {
	this.theWish = sWish;
};

Wish.prototype.get = function() {
	return this.theWish;
};
