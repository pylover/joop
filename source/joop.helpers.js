
/**
 * Provides helper objects
 * @module helpers 
 * @main helpers
 */



if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function (str){
    return this.slice(-str.length) == str;
  };
}

if (typeof String.prototype.format != 'function') {
	String.prototype.format = function(){
		args = [this];
		for ( var i=0; i < arguments.length ; i++){
			args.push(arguments[i]);
		}
		return sprintf.apply(null,args);
	};
}


/**
 * Converts `arguments` object into Array. 
 * @method asArray
 * @public
 * @param {arguments} argumentsObject
 * @param {Integer} start, optional.
 * @return {Array}
 */
var asArray = function(argumentsObject,start){
	if (!start){start = 0;}
	return Array.prototype.slice.call(argumentsObject, start);
};

var isFunction = function( obj ) {
	return typeof obj === "function";
};

var isWindow = function( obj ) {
	return obj != null && obj == obj.window;
};

//Check it
var isPlainObject = function( obj ) {
	var key;

	// Must be an Object.
	// Because of IE, we also have to check the presence of the constructor property.
	// Make sure that DOM nodes and window objects don't pass through, as well
	if ( !obj || typeof obj !== "object" || obj.nodeType || isWindow( obj ) ) {
		return false;
	}

	try {
		// Not own constructor property must be Object
		if ( obj.constructor &&
			!Object.hasOwnProperty.call(obj, "constructor") &&
			!Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
			return false;
		}
	} catch ( e ) {
		// IE8,9 Will throw exceptions on certain host objects #9897
		return false;
	}

	// // Support: IE<9
	// // Handle iteration over inherited properties before own properties.
	// if ( jQuery.support.ownLast ) {
		// for ( key in obj ) {
			// return Object.hasOwnProperty.call( obj, key );
		// }
	// }

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	for ( key in obj ) {}

	return key === undefined || Object.hasOwnProperty.call( obj, key );
};

var isInstanceOf = function(obj,cls){
	if (typeof obj === 'string' && cls===String) return true;
	if (typeof obj === 'number' && cls===Number) return true;
	if (obj instanceof cls) return true;
	if (obj['isInstanceOf']) return obj.isInstanceOf(cls);
	return false;
};


var isArray = Array.isArray || function( obj ) {
	return Object.prototype.toString.call( someVar ) === '[object Array]';
};

extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction(target) ) {
		target = {};
	}

	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && isArray(src) ? src : [];

					} else {
						clone = src && isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};
