//created by subha tutorial control file
angular.module("tutorialCtrlModule", []);

//controller is created by chaining it with .controller
//first parameter is name of the controller,here "tutorialCtrl"
//Second parameter is gng to be array.
//Passing the scope,scope is the data of the application.Whatever the controller is controlling,the scope pulls the data for. 

.controller("TutorialCtrl", ["$scope","Calculations", function($scope,Calculations){
//where programming work is done.
//$scope.name = "subha";-define the variable
//Link the controllers in the view using ng-controller directive
//wherever we place ng-controller is we attach it to a particular DOM element ,that DOM element controller will control everything inside that DOM element

	$scope.tutorialObject = [];
	$scope.tutorialObject.title = "Main Page";
	$scope.tutorialObject.subTitle ="Sub title";

	$scope.tutorialObject.bindOutput = 2;
// two way data binding  
	$scope.tutorialObject.firstname = "Subha";
	$scope.tutorialObject.lastname = "SSK";


//	$scope.timesTwo = function() {
//		$scope.tutorialObject.bindOutput *= 2 ;
//	}	

}])

//custom directive attributes and elements

.directive("welcomeMessage", function(){
	return{
		restrict: "AE",
		template: "<div>Hello</div>"
	}

})



//service-are objects that contains specific logic,they are only created once,means only one instance of them running,they allow us to abstract our code in applications.
//$scope is one kind of service.Scope refers to our application model.
//Scope joins the controller to view.Scope is a way that we can pass our model between our controller and our view.

$scope.timesTwo = function() {
		$scope.tutorialObject.bindOutput *= Calculations.timesTwo($scope.tutorialObject.bindOutput);
	}	


.factory("Calculations", function(){
	var calculations ={};
	calculations.timesTwo = functions(a){
		return a*2;
	};

	calculations.pythagoreanTheorem = function(a,b){
		return (a * a) + (b * b);
	};
	return calculations;


})

//Filters-Formats the value of an expression or derictive for display to the user.
// To change and modify data in an expression or directive.
//eg-'pipe character after the object '|' and use currency,uppercase,lowercase etc.'
