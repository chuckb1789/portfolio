function cbSiteConfig($locationProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}

angular.module('portfolio-site')
	.config(cbSiteConfig);

cbSiteConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
