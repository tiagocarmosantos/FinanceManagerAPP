(function() {

	'use strict';

	angular.module('primeiraApp').config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$stateProvider.state('dashboard', {
				url: "/dashboard",
				templateUrl: "dashboard/dashboard.html"
			}).state('billingCycle', {
				url: "/billingCycle?page",
				templateUrl: "billingcycle/tabs.html"
			})

			// This default route raise error cause require authAPI.
			// Therefore this must call from run method after validateUser function.
			//$urlRouterProvider.otherwise('/dashboard')
		}
	])
	.run([
		'$rootScope',
		'$http',
		'$location',
		'$window',
		'auth',
		function ($rootScope, $http, $location, $window, auth) {
			validateUser()
			$rootScope.$on('$locationChangeStart', () => validateUser())

			function validateUser() {
				const user = auth.getUser()
				const authPage = '/auth.html'
				const isAuthPage = $window.location.href.includes(authPage)

				if(!user && !isAuthPage) {
					$window.location.href = authPage
				} else if(user && !user.isValid) {
					auth.validateToken(user.token, (err, valid) => {
						if(!valid) {
							$window.location.href = authPage
						} else {
							user.isValid = true
							$http.defaults.headers.common.Authorization = user.token
							isAuthPage ? $window.location.href = '/' : $location.path('/dashboard')
						}
					})
					
				}
			}
		}
	])
	
})()