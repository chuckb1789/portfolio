angular.module('portfolio-site', ['ngRoute'])
  .config(Config);

Config.$inject = ['$routeProvider'];

function Config($routeProvider){

  $routeProvider


    .when('/auth', {
      templateUrl : '/html/auth.html',
      controller : 'authController',
      controllerAs : 'auth'
    })
}
