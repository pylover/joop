
module( "Class test", {
	setup: function() {
		Namespace('bmw');
		Class('bmw.Car',{
			// Prototype member
			maxSpeed : 200,
			__init__: function(color){
				//Instance Member
				this.speed = 0;
				this.color = color;
			},
			isRunning: function(){
				return this.speed > 0;
			},
			run: function(speed){
				this.speed = speed;
			},
			
		});
    
	}, teardown: function() {
    	delete bmw;
 	}
});



test( "Test Instance", function() {

  equal( bmw.Car.prototype.maxSpeed, 200, "Prototype member.");
  
  // Instantiating car
  var myCar = new bmw.Car('red');
  equal( myCar.speed, 0, "Instance member.");
  equal( myCar.color, 'red', "Constructor parameter.");
  ok(!myCar.isRunning(),"Method call");
  
  // Calling a method to changes the object's state 
  myCar.run(30);
  ok(myCar.isRunning(),"Method call");
  equal( myCar.speed, 30, "Field verification.");
  
  
});

