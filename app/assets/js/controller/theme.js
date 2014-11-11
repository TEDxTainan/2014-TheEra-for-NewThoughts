(function() {
  'use strict';

  module.exports = function($scope, $location, $http) {
    
    this.speaker = null;
    var theme = this;

    $http.get("speakers/speakers.json").success(
      function(response) {
        theme.section1 = response.section1;
        theme.section2 = response.section2;
        theme.section3 = response.section3;
      }).error(function(data, status, headers, config) {
        console.log(status);
    });

    this.isSubtheme = function() {
      var pos = $location.path();
      return pos.indexOf('section') != -1;
    };

    this.getSpeakers = function() {
      var section = $location.path();
      if (section === '/section1') {
        return this.section1;
      } else if (section === '/section2') {
        return this.section2;
      } else if (section === '/section3') {
        return this.section3;
      } else {
        return null;
      }
    };

    this.updateSpeaker = function(speaker) {
      this.speaker = speaker;
      this.click = true;
      this.viewLocation = $location.path();
    };

    this.isClick = function() {
      var active = (this.viewLocation === $location.path());
      return this.click && active && (this.speaker.name !== "");
    }

    this.closeWindow = function() {
      this.click = false; 
    };
  }

})();
