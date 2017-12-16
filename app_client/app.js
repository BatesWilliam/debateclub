(function () {

  angular.module('rainbowApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("BEING DEBATE SERVICES APP - MEAN STACK DRIVEN");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/', {
        templateUrl: '/bracket/bracket.view.html',
        controller: 'bracketCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/High', {
        templateUrl: '/bracket/team.view.html',
        controller: 'bracketCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/Intermediate', {
        templateUrl: '/bracket/team.view.html',
        controller: 'y2s3egCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/Gene', {
        templateUrl: '/bracket/team.view.html',
        controller: 'bracketCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/Greenway', {
        templateUrl: '/bracket/team.view.html',
        controller: 'bracketCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/Midway', {
        templateUrl: '/bracket/team.view.html',
        controller: 'midwayCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/Randall', {
        templateUrl: '/bracket/team.view.html',
        controller: 'randallCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/Westover', {
        templateUrl: '/bracket/team.view.html',
        controller: 'westoverCtrl',
        controllerAs: 'vm'
      })
      .when('/bracket/Reeves', {
        templateUrl: '/bracket/team.view.html',
        controller: 'reevessCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('rainbowApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();