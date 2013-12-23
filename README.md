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
	
## Class

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

## Inheritance

## Singleton