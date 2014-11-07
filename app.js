var app = angular.module('event', ['ngRoute', 'djds4rce.angular-socialshare']);

  /*app.config(function($locationProvider, $rootScopeProvider){
        $locationProvider.html5Mode(true).hashPrefix('!');
        $rootScopeProvider.digestTtl(20);
  });*/

 app.run(function($FB){
  $FB.init('164546407087109');
 });

 app.controller('MenuController', ['$scope', '$location', '$anchorScroll', 
     function($scope, $location, $anchorScroll){
  $scope.images = [
        {
          svg: '//www.tedxtainan.com/app/assets/img/unfold.svg', 
          png: '//www.tedxtainan.com/app/assets/img/unfold.png'
        },
        {
          svg: '//www.tedxtainan.com/app/assets/img/unselect.svg', 
          png: '//www.tedxtainan.com/app/assets/img/unselect.png'
        },
        {
          svg: '//www.tedxtainan.com/app/assets/img/select.svg', 
          png: '//www.tedxtainan.com/app/assets/img/select.png'
        }];
  this.index = 0;
  var change = false;
  $scope.image = $scope.images[0];
  $scope.toggleImg = function(){
    this.index = this.index == 1 ? 0 : 1;
    $scope.image = $scope.images[this.index];
  };
  $scope.isSelect = function(){
    change = ($scope.image === $scope.images[1]) || ($scope.image === $scope.images[2]); 
    return change;
  };
  
  $scope.gotoAnchor = function(x){
    if(x != 1){
      $scope.image = $scope.images[2];
    }
    $.fn.fullpage.moveTo(x);
  };

  $scope.isAnchor = function(viewLocation, index) {
    var active = (viewLocation === $location.path());
    return active;
  }
}]);

app.controller('ShareController', ['$scope', 
  function($scope){
    $scope.images = [
              {
                svg: '//www.tedxtainan.com/app/assets/img/unclickbutton.svg', 
                png: '//www.tedxtainan.com/app/assets/img/unclickbutton.png'
              },
              {
                svg: '//www.tedxtainan.com/app/assets/img/clickbutton.svg', 
                png: '//www.tedxtainan.com/app/assets/img/clickbutton.png'
              }];
    $scope.image = $scope.images[0]

    this.isOpen = false;

    $scope.toggle = function(){
      this.isOpen = this.isOpen? false : true;
    }

  }]);


  app.controller('ThemeController', ['$scope', '$location', '$http', function($scope, $location, $http){
      
      $http.get("http://localhost:8000/app/speakers/speakers.json")
             .success(function(response) {
                $scope.section1 = response.section1;
                $scope.section2 = response.section2;
                $scope.section3 = response.section3;
             })
             .error(function(data, status, headers, config) {
                console.log(status);
             });
      
      $scope.isSubtheme = function(){
        var pos = $location.path();
        return pos.indexOf('section') != -1;      
      };

      $scope.getSpeakers = function(){
        var section = $location.path()
        
        if(section === '/section1'){
          return $scope.section1;
        }
        else if(section === '/section2'){
          return $scope.section2;
        }
        else if (section === '/section3'){
          return $scope.section3;
        }
        else{
          return null;
        }
          $scope.isClick = false;
      }; 
      $scope.showInformation = function(speaker){
          $scope.speakerImage = speaker.image;
          $scope.speakerBrief = speaker.brief;
          $scope.isClick = true;
      };

      $scope.isClick = function(){
        return $scope.isClick;
      }

  }]);
