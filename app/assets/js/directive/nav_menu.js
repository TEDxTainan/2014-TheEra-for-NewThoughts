(function() {
  'use strict';

  module.export = require('angular')
                  .module('event')
                  .directive('navMenu', navMenuDirective);

  var navMenuController = require('../controller/nav_menu.js');

  function navMenuDirective() {
    var directive = {
        restrict: 'E',
        templateUrl: 'nav_menu.html',
        controller: navMenuController,
        controllerAs: 'nav'
    };
    return directive;
  }

})();
