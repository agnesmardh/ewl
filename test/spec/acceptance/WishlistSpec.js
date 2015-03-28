

describe("Wishlist", function() {
  
  beforeEach(function() {
    
  });

  it("should be empty when created", function() {
    //GIVEN -
    //WHEN I create a WHislist
    var myWishlist = new Wishlist();
    //THEN
    var thisResult = myWishlist.getJSON();
    var expectedResult = {};
    expect(thisResult).toEqual(expectedResult);
  });

  it("should be possible to add a wish to an empty wishlist", function() {
    //GIVEN
    var myWishlist = new Wishlist();
    var myWish = new Wish();
    myWish.set("Book");
    //WHEN
    myWishlist.add(myWish);
    //THEN
    var thisResult = myWishlist.getJSON();
    var expectedResult = { wishlist : [ { wish : "Book" } ] };
    expect(thisResult).toEqual(expectedResult);
  });

 it("should be possible to add a wish to a wishlist", function() {
    //GIVEN
    var myWishlist = new Wishlist();
    var myFirstWish = new Wish();
    myFirstWish.set("Book");
    myWishlist.add(myFirstWish);
    var mySecondWish = new Wish();
    mySecondWish.set("CD");
    //WHEN
    myWishlist.add(mySecondWish);
    //THEN
    var thisResult = myWishlist.getJSON();
    var expectedResult = { wishlist : [ { wish : "Book" }, { wish : "CD" }] };
    expect(thisResult).toEqual(expectedResult);
  });
  
});

 