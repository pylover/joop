
module("Namespace");

test("Test Namespace", function() {
	var childNS = Namespace('rootNS.middleNS.childNS');
	ok(rootNS.middleNS.childNS != undefined & childNS === rootNS.middleNS.childNS, 'Namespace hierarchy.');
	Namespace('M.ns1');
	Namespace('M.ns2');
	ok(M.ns1 != undefined);
});

