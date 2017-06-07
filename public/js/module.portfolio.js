angular.module('beckApp', ['ngRoute'])
    .config(angularRouter)

angularRouter.$inject = ['$routeProvider']
function angularRouter ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: '/partials/placeholder.html',
                controller: 'portfolioController',
                controllerAs: 'portfolio',
            })

        .when('/about',
            {
                templateUrl: '/partials/about.html',
            })


        .when('/events', {
                templateUrl : '/partials/event.html',
                });

}
