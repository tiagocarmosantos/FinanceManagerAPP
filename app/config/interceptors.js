(function () {
	
	'user strict';

	angular.module('primeiraApp').config([
		'$httpProvider',
		function ($httpProvider) {
			$httpProvider.interceptors.push('handleResponseError')
			$httpProvider.interceptors.push('handleLoadingInterceptor')
		}
	])

})()