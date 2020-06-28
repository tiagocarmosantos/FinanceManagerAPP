angular.module('primeiraApp').component('authField', {
  bindings: {
	  id: '@',
	  label: '@',
	  type: '@',
	  grid: '@',
	  icon: '@',
	  model: '=',
	  placeholder: '@',
	  hide: '<',
	  classes: '@',
	  value: '@'
  },
  controller: ['gridSystem', function(gridSystem) {
	  this.$onInit = () => {
		  this.iconClasses = `glyphicon glyphicon-${this.icon} form-controlfeedback`
		  this.gridClasses = gridSystem.toCssClasses(this.grid)
	  }
  }],
  template: `
		 	<div class="{{ $ctrl.gridClasses }}">
				<div class="form-group">
					<input id="{{ $ctrl.id }}" type="{{ $ctrl.type }}" class="{{ $ctrl.classes }}" placeholder="{{ $ctrl.placeholder }}" value="{{ $ctrl.value }}" ng-model="$ctrl.model" ng-readonly="$ctrl.readonly" />
				</div>
			</div>
		  `
})