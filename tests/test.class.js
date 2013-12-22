
Namespace('bmw');

//delete bmw;
module("Class test", {
	setup : function() {},
	teardown : function() {}
});

test("Test Instance", function() {
	
	Class('bmw.Car', {
		// Prototype member
		maxSpeed : 200,
		__init__ : function(color,cylindres) {
			//Instance Member
			this.speed = 0;
			this.color = color;
			this.cylindres = cylindres == undefined ? 4 : cylindres; 
				
		},
		isRunning : function() {
			return this.speed > 0;
		},
		run : function(speed) {
			this.speed = speed;
		},
	});	
	
	equal(bmw.Car.prototype.maxSpeed, 200, "Prototype member.");

	// Instantiating car
	var myCar = new bmw.Car('red');
	equal(myCar.speed, 0, "Instance member.");
	equal(myCar.color, 'red', "Constructor parameter.");
	equal(myCar.cylindres, 4, "Constructor parameter.");
	ok(!myCar.isRunning(), "Method call");

	// Calling a method to changes the object's state
	myCar.run(30);
	ok(myCar.isRunning(), "Method call");
	equal(myCar.speed, 30, "Field verification.");

});

test("Test Inheritance", function() {

	Class('bmw.M3', bmw.Car, {
		engineVolume : '3500',
		__init__ : function(color) {
			this.callSuper(bmw.Car,'__init__',[color,6]);
		},
	});
	
	var m3 = new bmw.M3('green',6);
	equal(m3.cylindres, 6, "Constructor parameter.");
	equal(m3.color, 'green', "Constructor parameter.");
	
});

test("Test Multiple Inheritance", function() {
	Namespace('engines');
	
	Class('engines.Injection',{
		__init__: function(){
			this.injection = true;
		},
		isInjection: function(){
			return this.injection;
		}
	});

	Class('bmw.M3i', bmw.M3, engines.Injection, {
		
		__init__ : function(color) {
			this.callSuper(bmw.M3,'__init__',[color]);
			this.callSuper(engines.Injection,'__init__');
		},
	});
	
	var m3i = new bmw.M3i('blue');
	equal(m3i.cylindres, 6, "Constructor parameter.");
	equal(m3i.color, 'blue', "Constructor parameter.");
	ok(m3i.isInjection, "Instance member.");
	ok(!m3i.isRunning(), "Inheritance hierarchy");
	
	ok(isInstanceOf(m3i,bmw.M3i) & isInstanceOf(m3i,bmw.M3) & isInstanceOf(m3i,bmw.Car),'isInstanceOf');
	
});

