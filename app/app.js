(function(){
  'use strict';
  
  var angular = require('angular');
  require('angular-route');

  var app = angular.module('event', ['ngRoute', 'djds4rce.angular-socialshare'])
                  .config(configure)
                  .run(init);

  require('./assets/js/directive/nav_menu');
  require('./assets/js/directive/share_menu');
  require('./assets/js/controller/theme');

  init.$inject = ['$location', '$FB'];

  function configure() {

  }

  function init($location, $FB) {
    $location.url('home');
    $FB.init('164546407087109');
  }

})();
