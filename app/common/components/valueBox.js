(function() {

	'use strict';

	angular.module('primeiraApp').component('valueBox', {
		bindings: {
			grid: '@',
			colorClass: '@',
			value: '@',
			text: '@',
			iconClass: '@'
		},
		controller: [
			'gridSystem',
			function(gridSystem) {
				this.$onInit = () => { this.gridClasses = gridSystem.toCssClasses(this.grid) };
			}
		],
		template: `
			<div class="{{ $ctrl.gridClasses }}">
				<div class="small-box {{ $ctrl.colorClass }}">
					<div class="inner">
						<h3>{{ $ctrl.value }}</h3>
						<P>{{ $ctrl.text }}</P>
					</div>
					<div class="icon">
						<i class="fa {{ $ctrl.iconClass }}"></i>				
					</div>
				</div>
			</div>
		`
	})
	
})()