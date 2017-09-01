const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;
		ctrl.title = 'Charlie Beck';
		ctrl.imageUrl = 'images/mountainBackground.png';

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `
	<parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>

	`

};

angular.module('portfolio-site.home')
	.component('home', home);

home.$inject = [];
