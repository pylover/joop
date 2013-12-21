/**
Provides the base oop utilities.

@module oop
**/

var Class = function(){
	var definitions = asArray(arguments);
	var className = definitions[0];
	
	if (typeof className != 'string'){
		throw 'Class Name not provided';
	}
	
	var classConstructor = eval('%s = function (){ \
				this.__class__ = %s; \
				%s.prototype.__init__.apply(this,arguments); \
			};%s'.format(className,className,className,className));
	
	classConstructor.prototype = Object.create(oop.Object.prototype);

	// Inheritance	
	var bases = definitions.filter(function(item,index,arr){
		return index > 0 && index < arr.length - 1;
	});
	if(bases.length <= 0 && className != 'oop.Object'){
		bases = [oop.Object];
	}
	for (var i in bases){
		if (bases[i] == undefined){
			throw 'Invalid base class: %s'.format(bases[i]);
		}
		// Static members
		$.extend(classConstructor,bases[i],{prototype:classConstructor.prototype});
		// Prototype
		classConstructor.prototype = $.extend(false, classConstructor.prototype, Object.create(bases[i].prototype));
	}
	
	// Class codes
	classConstructor.prototype = $.extend(false, {},classConstructor.prototype, definitions[definitions.length-1],{
		constructor: classConstructor,
	});
	
	// Static members
	$.extend(classConstructor,{
		__name__: className,
		__base_classes__ : bases,
		StaticMembers : function(members){
			//return $.extend(this,members);
			return $.extend(classConstructor,members);
		}
	}); 
	
	return eval(className); // classConstructor; 
};






 