# joop


Javascript Object-Oriented Programming Toolkit

**joop** helps you easily play with OOP concepts in javascript.

## Futures:

 * Javascript prototype
 * Inheritance hierarchy
 * Multiple inheritance & mixins
 * Singleton pattern
 * Static members

 
## Setup:

To include joop into your webpage, simply add a script reference to it:

	<!DOCTYPE html>
	<html>
	<head>
		<title>joop demo</title>
		<script src="joop.js" type="text/javascript"></script>
	</head>
	<body>
	</body>
	</html>
	
### Namespace Declaration

Namespaces can be separated by dots `.` 

	Namespace('bmw.factory.lab');
	
	
### Class Declaration

To declare a new class:

	Class('bmw.Car', {
		maxSpeed : 200, 						// Prototype member
		__init__ : function(color,cylindres) { 	// Constructor
			this.speed = 0; 					// Instance Member 
			this.color = color;
			this.cylindres = cylindres == undefined ? 4 : cylindres; 
		},
		isRunning : function() {				// Method
			return this.speed > 0;
		},
		run : function(speed) {
			this.speed = speed;
		}
	}).StaticMembers({
		doors: 4, //Static field
		createSuperClass: function(){ 			// Static method
			return new this('gold',12);
		}
	});
	
Accessing prototype member:

	console.log(bmw.Car.prototype.maxSpeed);
	
Instantiating:

	var myCar = new bmw.Car('silver');

Checking an instance:

	if (isInstanceOf(myCar, bmw.Car)){
		// Do something !
	}


### Inheritance

To inderit a class:

	Class('bmw.M3', bmw.Car, {
		engineVolume : '3500',
		__init__ : function(color) {						// Overriding a constructor
			this.callSuper(bmw.Car,'__init__',[color,6]); 	// Calling super class method
		}
	});

To inherit multiple classes:

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
		}
	});

### Singleton

To create a singleton object:

	Singleton('bmw.factory.Factory', {
		__init__ : function() {				// Parameter-less constructor
		}
	});	
	
	var factory = bmw.factory.Factory; // The singleton instance


### Tested Browsers

 * Firefox
 * Opera
 * Safari
 * Chrome
 * IE >= 6.0	

### Contributing

To contribute to this project, simply fork and clone it.

Update some code files, and test scripts in `tests` directory. Check your works by openning `tests/test.html` by a browser.
 
You need a python interpreter to generate output:
	
	python build.py

bingo !

