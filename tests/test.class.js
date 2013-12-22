



test( "Test Instance", function() {
	
	Namespace('bmw');
	
	Class('bmw.Car',{
		// Prototype member
		maxSpeed : 200,
		__init__: function(color){
			//Instance Member
			this.currentSpeed = 0;
			this.color = color;
		},
		
	});

  equal( bmw.Car.prototype.maxSpeed, 200, "Prototype member.");
  var myCar = new bmw.Car('red');
  equal( myCar.currentSpeed, 0, "Instance member.");
  equal( myCar.color, 'red', "Constructor parameter.");
  
});

