(function() {

  var angular = require('angular');

  var shareMenuController = require('../controller/share_menu');

  module.exports = function() {
    return {
      restrict: 'E',
      templateUrl: 'share_menu.html',
      controller: shareMenuController,
      controllerAs: 'share'
    };
  }

})();
