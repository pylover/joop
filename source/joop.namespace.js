var Namespace = function(ns) {
	var namespaces = ns.split('.');
	var trailing = window;
	for (var i = 0, n = namespaces.length; i < n; i++) {
		if (trailing[namespaces[i]] == undefined){
			trailing[namespaces[i]] = {};
		}
		trailing = trailing[namespaces[i]];
	}
	return trailing;
};
