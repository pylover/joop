
module("Namespace");

test("Test Namespace", function() {
	var childNS = Namespace('rootNS.middleNS.childNS');
	ok(rootNS.middleNS.childNS != undefined & childNS === rootNS.middleNS.childNS, 'Namespace hierarchy.');
});

