describe("Guest", function() {
  
  beforeEach(function() {
    
  });

  it("should be empty when created", function() {
    //GIVEN
    //WHEN
    var theGuest = new Guest();
    //THEN
    var thisResult = theGuest.getJSON();
    var expectedResult = {};
    expect(thisResult).toEqual(expectedResult);
  });

  it("should be possible to invite a Guest", function() {
    //GIVEN
    //there exists an invitation
    //WHEN
    //I send an invitation to a guest
    //THEN
    //the guest should hav status invited
    var thisResult = {state : "Not Implemented"};
    var expectedResult = {};
    expect(thisResult).toEqual(expectedResult);
  });

it("xxx", function() {
    //GIVEN
    //WHEN
    //THEN
    var thisResult = {state : "Not Implemented"};
    var expectedResult = {};
    expect(thisResult).toEqual(expectedResult);
  });

});

 