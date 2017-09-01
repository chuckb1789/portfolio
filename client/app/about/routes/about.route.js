function aboutRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.about',
			url: 'about',
			component: 'about'
		});
}

angular.module('portfolio-site.about')
	.config(aboutRoute);

aboutRoute.$inject = ['$stateProvider'];
