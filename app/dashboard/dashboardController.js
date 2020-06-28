(function() { 

	'use strict';

	angular.module('primeiraApp').controller('DashboardCtrl', [
		'$scope',
		'$http',
		'consts',
		DashboardController
	])

	function DashboardController($scope, $http, consts) {
		const vm = this

		vm.getSummary = function() {
			const url = `${consts.apiUrl}/billingSummary`
			$http.get(url).then(function(response) {
				const { credit = 0, debt = 0 } = response.data
				vm.credit = credit
				vm.debt = debt
				vm.total = credit - debt
			})
		}

		this.$onInit = () => { vm.getSummary() }
		
	}

})()