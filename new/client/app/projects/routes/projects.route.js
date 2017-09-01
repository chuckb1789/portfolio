function projectsRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.projects',
			url: 'projects',
			component: 'projects'
		});
}

angular.module('portfolio-site.projects')
	.config(projectsRoute);

projectsRoute.$inject = ['$stateProvider'];
