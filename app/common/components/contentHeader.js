(function(){

	'use strict';

	angular.module('primeiraApp').component('contentHeader', {
		bindings: {
			title: '@',
			subTitle: '@'
		},
		template: `
			<section class="content-header">
				<h1>{{ $ctrl.title }} <small>{{ $ctrl.subTitle }}</small></h1>
			</section>
		`
	})
	
})()