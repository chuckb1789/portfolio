function socialRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.social',
			url: 'social',
			component: 'social'
		});
}

angular.module('portfolio-site.social')
	.config(socialRoute);

socialRoute.$inject = ['$stateProvider'];
