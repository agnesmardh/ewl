var Wishlist = function() {
	this.theWishlist = [];
};

Wishlist.prototype.getJSON = function () {
	if (this.theWishlist.length === 0) {
		return {};
	} else {
		var tempList = [];
		var i;
     	for (i = 0; i < this.theWishlist.length; i += 1) {
        	tempList[i]= this.theWishlist[i].getJSON();
     	};
  		return { wishlist : tempList };
  	};
};

Wishlist.prototype.add = function(theWish) {
	this.theWishlist.push(theWish);
};