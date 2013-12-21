

function isInstanceOf(obj,cls){
	if (typeof obj === 'string' && cls===String) return true;
	if (typeof obj === 'number' && cls===Number) return true;
	if (obj instanceof cls) return true;
	if (obj['isInstanceOf']) return obj.isInstanceOf(cls);
	return false;
}