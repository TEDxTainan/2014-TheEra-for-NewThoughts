(function() {
  
  module.export = require('angular')
                    .module('event')
                    .directive('countDown', countDownDirective);

  function countDownDirective() {
    var directive = {
        restrict: 'E',
        templateUrl: 'count_down.html'
    };
    return directive;
  }
  
})();
