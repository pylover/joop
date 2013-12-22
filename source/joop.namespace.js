

var Namespace = function(ns){
	var namespaces = ns.split('.');
	var trailing = window;
	for(var i in namespaces){
		trailing = trailing[namespaces[i]] = {};
	}
	return trailing;
};
