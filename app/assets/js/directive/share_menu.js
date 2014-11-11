(function() {

  module.export = require('angular')
                    .module('event')
                    .directive('shareMenu', shareMenuDirective);

  var shareMenuController = require('../controller/share_menu');
  
  function shareMenuDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'share_menu.html',
      controller: shareMenuController,
      controllerAs: 'share'
    };
    return directive;
  }

})();
