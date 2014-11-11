(function(){
  'use strict';
  
  var angular = require('angular');
  require('angular-route');


  var app = angular.module('event', ['ngRoute', 'djds4rce.angular-socialshare']);

  require('./assets/js/directive');
  require('./assets/js/controller');

  app.config(['$routeProvider', '$locationProvider', 
      function AppConfig($routeProvider, $locationProvider) {
  }]);

  app.run(function($location, $FB){
    $location.url('home');
    $FB.init('164546407087109');
  });

})();
