

var Singleton = function(){
	var definitions = asArray(arguments);
	var className = definitions[0];
	var constructor = Class.apply(
		this, // or null
		arguments);
	var instance = new constructor(); 
	eval('%s = instance;'.format(className));
	return instance;
};