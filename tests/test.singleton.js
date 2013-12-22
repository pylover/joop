

module("Singleton test");

test("Singleton", function() {
	
	Singleton('bmw.Factory', {
		__init__ : function() {
		}
	});	
	
	// Instantiating 
	var factory = bmw.Factory;
	var factory2 = bmw.Factory;

	ok(factory2 === factory);	
});
