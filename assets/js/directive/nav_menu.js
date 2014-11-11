(function() {
  'use strict';

  var navMenuController = require('../controller/nav_menu.js');

  module.exports = function() {
      return {
        restrict: 'E',
        templateUrl: 'nav_menu.html',
        controller: navMenuController,
        controllerAs: 'nav'
    };
  }

})();
