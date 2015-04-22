app.controller("WishesController", function() {
    var wishlist=this;
    wishlist.wishes=[{wish:"Books",buyer:"Agnes",checkWish:true},{wish:"Headphones",buyer:"Tom",checkWish:true},{wish:"Movies",buyer:"",checkWish:false}];
            
    wishlist.addWish=function(){
      wishlist.wishes.push({wish:wishlist.newWish, buyer:"",checkWish:false});
      wishlist.newWish="";
    };
    
    wishlist.deleteWish = function ( idx ) {
      wishlist.wishes.splice(idx, 1 );
    };

    wishlist.toggleBought = function ( idx, sBuyer ) {
      
      if (wishlist.wishes[idx].checkWish) {
        wishlist.wishes[idx].buyer = sBuyer;
      } else {
        wishlist.wishes[idx].buyer = "";
      };
      //wishlist.wishes[idx].checkWish = ~wishlist.wishes[idx].checkWish;
    }; 

  });

  