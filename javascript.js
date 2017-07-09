'use strict';

var app = angular.module('myApp', [ 'ngMaterial' ] );

app.controller('myCtrl', function($scope, $mdDialog) {
	$scope.firstName= "John";
	$scope.lastName= "Doe";

	$scope.todos = []

	$scope.todos.push( {title: "asdfghjkl asdfghjkl asdfghjkl asdfghjkl asdfghjkl asdfghjkl ", description: "you really need to do this thing", deadline: "TWO HOURS"} )
	$scope.todos.push( {title: "asldkfj", description: "a;sldkjfads", deadline: "a;sdlkfjasdf" } )

	$scope.addTodo = function(){
		console.log( "test" );
		$scope.todos[0].title = "yay you did";
	}

	$scope.showNewTodoPrompt = function( ev ){
		$mdDialog.show( {
			controller: DialogController,
			templateUrl: 'newTodoTemp.html',
			parent: angular.element( document.body ),
			targetEvent: ev, 
			clickOutsideToClose: true,
			fullscreen: $scope.customeFullscreen 
			})
			.then( function( answer ) {
				$scope.status = 'You said the informtion was " ' + answer + '". ';
			}, function() {
				$scope.status = "you cancelled the dialog.";
			});
	};

	function DialogController( $scope, $mdDialog ) {
		$scope.hide = function(){
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function( answer ) {
			$mdDialog.hide( answer );
		}
	}
});