angular.module('ewlApp', [])
  .controller('WishesController', function() {
    var wishlist=this;
    wishlist.wishes=['books','movies','headphones'];
            
    wishlist.addWish=function(){
      console.log("Add");
      console.log("Adding" + wishlist.newWish);
      wishlist.wishes.push(wishlist.newWish);
      wishlist.newWish="";
    };
    
    wishlist.deleteWish = function ( idx ) {
      wishlist.wishes.splice(idx, 1 );
    };
  });
  