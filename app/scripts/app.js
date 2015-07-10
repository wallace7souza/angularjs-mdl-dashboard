'use strict';

/**
 * @ngdoc overview
 * @name dashboardMdlApp
 * @description
 * # dashboardMdlApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardMdlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('dashboard', {
        //url: '',
        templateUrl: 'views/dashboard.html'
      });
    /*$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  });
