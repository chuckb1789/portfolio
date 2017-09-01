function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'home'
		});
}

angular.module('portfolio-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];
