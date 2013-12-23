

var Namespace = function(ns){
	var namespaces = ns.split('.');
	var trailing = window;
	/*
	for(var i in namespaces){
		trailing = trailing[namespaces[i]] = {};
	}
	*/
    for (var i= 0, n= namespaces.length; i<n; i++){
	    trailing[namespaces[i]] = {};
	    trailing = trailing[namespaces[i]];
	}
	return trailing;
};
