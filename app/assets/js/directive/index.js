(function() {
  'use strict'

  var app = require('angular').module('event');
  
  app.directive('navMenu', require('./nav_menu'))
  app.directive('shareMenu', require('./share_menu'))
  //app.directive('countDown', require('./count_down'));

})();
