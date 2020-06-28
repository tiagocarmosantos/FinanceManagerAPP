(function () {

	'use strict';

	angular.module('primeiraApp').constant('consts', {
		appName: 'MeanJS - Primeira Aplicação',
		version: '1.0',
		owner: 'Tiago Carmo Santos',
		year: '2018',
		site: 'https://br.linkedin.com/in/tiagocarmosantos',
		apiUrl: 'http://localhost:3003/api',
		oapiUrl: 'http://localhost:3003/oapi',
		//apiUrl: 'https://tcs-financier-app.herokuapp.com/api',
		//oapiUrl: 'https://tcs-financier-app.herokuapp.com/oapi',
		userKey: '_primeira_app_user'
	}).run(['$rootScope', 'consts', function ($rootScope, consts) {
		$rootScope.consts = consts
	}])

})()
