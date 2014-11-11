(function() {
  'use strict';

  module.exports = require('angular')
                   .module('event')
                   .controller('ThemeController', themeController);

  themeController.$inject = ['$scope', '$location', '$http'];

  function themeController($scope, $location, $http) {
    
    this.speaker = null;
    var theme = this;
    this.isSubtheme = isSubtheme;
    this.getSpeakers = getSpeakers;
    this.updateSpeaker = updateSpeaker;
    this.isClick = isClick;
    this.closeWindow = closeWindow;

    $http.get("speakers/speakers.json")
      .success(function(response) {
        theme.section1 = response.section1;
        theme.section2 = response.section2;
        theme.section3 = response.section3;
      })
      .error(function(data, status, headers, config) {
        console.log(status);
      });

    function isSubtheme() {
      var pos = $location.path();
      return pos.indexOf('section') != -1;
    };

    function getSpeakers() {
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

    function updateSpeaker(speaker) {
      this.speaker = speaker;
      this.click = true;
      this.viewLocation = $location.path();
    };

    function isClick() {
      var active = (this.viewLocation === $location.path());
      return this.click && active && (this.speaker.name !== "");
    }

    function closeWindow() {
      this.click = false; 
    };
  }
})();
