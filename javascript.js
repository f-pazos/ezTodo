'use strict';

var app = angular.module('myApp', [ 'ngMaterial' ] );

app.controller('myCtrl', function($scope, $mdDialog) {
	$scope.firstName= "John";
	$scope.lastName= "Doe";

	$scope.todos = []

	$scope.todos.push( {title: "DO THIS THING", description: "you really need to do this thing", deadline: "TWO HOURS"} )

	$scope.addTodo = function(){
		console.log( "test" );
		$scope.todos[0].title = "yay you did";
	}

	$scope.showAlert = function( ev ){
		$mdDialog.show( 
			$mdDialog.alert()
			.parent(angular.element( document.querySelector( '#popupContainer' ) ) )
			.clickOutsideToClose(true)
			.title( 'This is an alert title' )
			.textContent( 'you can specifty ' )
			.ariaLabel( 'Alert Dialog Demo' )
			.ok( 'Got it' )
			.targetEvent( ev )
			);
	};
});