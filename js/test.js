var doc = document;
var shapesDoc = doc.getElementById("shapes-js");
var shapesStyle = doc.getElementById("shapes-js").style;
var userData = doc.getElementById("userDataField");

shapesStyle.background = "Black";
shapesStyle.color = "Green";
shapesStyle.textAlign = "Center";

function Alter () {
	// shapesDoc.createElement("h2") = userData.value;

	doc.getElementById("userShow").innerText = userData.value;
	// console.log(userData.value);
}


// Angular Edit

var appAnim = angular.module("app",["ngAnimate"]);

var app = angular.module("app",[]);

app.controller("nameMatrix", function($scope) {
	$scope.firstName = "Chester";
	$scope.lastName = "Bennington";
});

app.directive("angle", function () {
	return {
		template: "I was made in a directive constructor."
	};
});