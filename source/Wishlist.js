var Wishlist = function() {
	this.theWishlist = [];
	console.log("Wishlist created");
};
  //var _privateMethod = function() {
    // private stuff
  //};

Wishlist.prototype.getWishlistJSON = function () {
	if (this.theWishlist.length === 0) {
		return {};
	} else {
		console.log("List wishes");
		var tempList = [];
		var i;
     	for (i = 0; i < this.theWishlist.length; i += 1) {
        	console.log(this.theWishlist[i].get());
        	tempList[i]= { wish : this.theWishlist[i].get() };
     	};
  		return { wishlist : tempList };
  	};
};

Wishlist.prototype.add = function(theWish) {
	this.theWishlist.push(theWish);
	console.log("Added wish to wishlist" + theWish.getWishJSON());
};