var app = angular.module('event', ['ngRoute', 'djds4rce.angular-socialshare']);
/*app.config(function($locationProvider, $rootScopeProvider){
        $locationProvider.html5Mode(true).hashPrefix('!');
        $rootScopeProvider.digestTtl(20);
  });*/
app.run(function($FB) {
  $FB.init('164546407087109');
});
app.directive('navMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'nav_menu.html',
      controller: function($scope, $location, $anchorScroll) {
        this.index = 0;
        this.images = [{
          svg: '//www.tedxtainan.com/app/assets/img/unfold.svg',
          png: '//www.tedxtainan.com/app/assets/img/unfold.png'
        }, {
          svg: '//www.tedxtainan.com/app/assets/img/unselect.svg',
          png: '//www.tedxtainan.com/app/assets/img/unselect.png'
        }, {
          svg: '//www.tedxtainan.com/app/assets/img/select.svg',
          png: '//www.tedxtainan.com/app/assets/img/select.png'
        }];
        this.image = this.images[0];
        this.toggleImg = function() {
          this.index = this.index == 1 ? 0 : 1;
          this.image = this.images[this.index];
        };
        this.isSelect = function() {
          return (this.image === this.images[1]) || (this.image === 
            this.images[2]);
        };
        this.gotoAnchor = function(x) {
          if (x != 1) {
            this.image = this.images[2];
          }
          $.fn.fullpage.moveTo(x);
        };
        this.isAnchor = function(viewLocation) {
          var active = (viewLocation === $location.path());
          return active;
        }
        this.isHome = function() {
            var pos = $location.path();
            return pos === "" || pos.indexOf('home') != -1;
          };
      },
      controllerAs: 'nav'
    };
  });

app.directive('shareMenu', function() {
  return{
    restrict: 'E',
    templateUrl: 'share_menu.html',
    controller: function($scope) {
      this.images = [{
        svg: '//www.tedxtainan.com/app/assets/img/unclickbutton.svg',
        png: '//www.tedxtainan.com/app/assets/img/unclickbutton.png'
      }, {
        svg: '//www.tedxtainan.com/app/assets/img/clickbutton.svg',
        png: '//www.tedxtainan.com/app/assets/img/clickbutton.png'
      }];
      this.image = this.images[0]
      this.isOpen = false;
      this.toggle = function() {
        console.log(this.isOpen);
        this.isOpen = this.isOpen ? false : true;
      }
    },
    controllerAs: 'share'
  };
});
app.controller('ThemeController', ['$scope', '$location', '$http',
  function($scope, $location, $http) {
  
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
      var section = $location.path()
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
]);
app.directive('countDown', function(){
  return {
      restrict: 'E',
      templateUrl: 'count_down.html'
  };
});
