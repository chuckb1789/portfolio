function travelsRoute($stateProvider) {
    $stateProvider
        .state({
            name: 'app.travels',
            url: 'travels',
            component: 'travels'
        });
}

angular.module('portfolio-site.travels')
    .config(travelsRoute);

travelsRoute.$inject = ['$stateProvider'];
