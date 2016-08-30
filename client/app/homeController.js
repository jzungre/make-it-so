angular.module('makeitso.home', [])

	.controller('homeController', function($scope, $http){
		
		$scope.data = [];
		$scope.pledges;

		$scope.getBounties = function(){
			console.log("getBounties() called!!!!")


			$http({
     			'method': 'GET',
     			'url': '/projects',
     			'Content-Type': 'application/json'
   			})
			.success(function(response){
				
				$scope.data = response;
				console.log("Success!!!! scope.data: ", $scope.data);


			}).error(function(error){
				console.log(error);

			})
		}	

		// $scope.getPledgeTotal = function(projID){
		// 	console.log("gettin' those pledges, booooy!")

		// 	$http({
		// 		'method': 'GET',
		// 		'url': '/pledges',
		// 		'Content-Type': 'application/json'
		// 	})
		// 	.success(function(response){
		// 		console.log('Pledges!!!!!!!!: ', response);


		// 	}).error(function(error){
		// 		console.log(error);

		// 	})

		// }


	})