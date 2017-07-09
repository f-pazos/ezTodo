'use strict';

var app = angular.module('myApp', [ 'ngMaterial' ] );

app.controller('myCtrl', function($scope, $mdDialog) {
	$scope.firstName= "John";
	$scope.lastName= "Doe";

	$scope.todos = []

	$scope.todos.push( {title: "asdfghjkl asdfghjkl asdfghjkl asdfghjkl asdfghjkl asdfghjkl ", description: "you really need to do this thing", deadline: "TWO HOURS"} )
	$scope.todos.push( {title: "asldkfj", description: "a;sldkjfads", deadline: "a;sdlkfjasdf" } )

	$scope.addTodo = function(){
		if( !$scope.newTitle){ 
			return; 
		}
		$scope.todos.push( {title: $scope.newTitle, description: $scope.newDescription, deadline: $scope.newDeadline } )

		$scope.newTitle =""
		$scope.newDescription =""
		$scope.newDeadline=""

		document.getElementById("newTodoTitle").focus();
	}

	$scope.removeTodo = function( todo ){
		console.log( todo );

		var index = $scope.todos.indexOf( todo );
		$scope.todos.splice( index, 1 )
	}
});