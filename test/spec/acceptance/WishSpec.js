describe("Wish", function() {
  
  beforeEach(function() {
    
  });


  it("should be empty when created", function() {
    //GIVEN -
    //WHEN I create a WHislist
    var myWish = new Wish();
    //THEN
    var thisResult = myWish.getJSON();
    var expectedResult = {};
    expect(thisResult).toEqual(expectedResult);
  });

  it("should contain the wish made", function () {
      //GIVEN - there exists a wish
      var myWish = new Wish();
      //WHEN I add a wish
      myWish.set("iPad");
      //THEN the wish should be set
      var thisResult = myWish.getJSON();
      var expectedResult = { wish : "iPad" };
      expect(thisResult).toEqual(expectedResult);
  });

  it("should be possible to get the wish made", function() {
      //GIVEN
      var myWish = new Wish();
      myWish.set("iPhone");
      //WHEN
      var thisResult = myWish.get();
      //THEN
      var expectedResult = "iPhone";
      expect(thisResult).toEqual(expectedResult);
  });

});

 