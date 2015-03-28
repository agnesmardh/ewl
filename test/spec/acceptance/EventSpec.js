describe("Event", function() {
  
  beforeEach(function() {
    
  });

  it("should be empty when created", function() {
    //GIVEN
    //WHEN
    var theEvent = new Event();
    //THEN
    var thisResult = theEvent.getJSON();
    var expectedResult = {};
    expect(thisResult).toEqual(expectedResult);
  });


  it("should be possible to initialize an event", function() {
    //GIVEN
    var theEvent = new Event();
    //WHEN
    theEvent.set( { eventName : "Fest" } );
    //THEN
    var thisResult = theEvent.get();
    var expectedResult = { eventName : "Fest"};
    expect(thisResult).toEqual(expectedResult);
  });

  it("should be possible to set the name of a event", function() {
    //GIVEN
    var theEvent = new Event();
    //WHEN
    theEvent.setName("Födelsedag");
    //THEN
    var thisResult = theEvent.getJSON();
    var expectedResult = { eventName : "Födelsedag" };
    expect(thisResult).toEqual(expectedResult);
  });

  it("should be possible to get the name of a event", function() {
    //GIVEN
    var theEvent = new Event();
    theEvent.setName("Julafton");
    //WHEN
    var thisResult = theEvent.getName();
    //THEN
    var expectedResult = "Julafton";
    expect(thisResult).toEqual(expectedResult);
  });

});

 