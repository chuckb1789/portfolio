const bodyComponent = {
	bindings: {

	},
	controller: function () {

	},
	template: `
	<div class="container-body">
    	<ui-view></ui-view>
	</div>`
};

angular.module('portfolio-site.layout')
.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
