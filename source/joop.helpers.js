
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
var asArray= function(argumentsObject,start){
	if (!start){start = 0;}
	return Array.prototype.slice.call(argumentsObject, start);
};

function isInstanceOf(obj,cls){
	if (typeof obj === 'string' && cls===String) return true;
	if (typeof obj === 'number' && cls===Number) return true;
	if (obj instanceof cls) return true;
	if (obj['isInstanceOf']) return obj.isInstanceOf(cls);
	return false;
}