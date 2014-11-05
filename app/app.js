(function() {
  var app = angular.module('event', ['ngRoute','djds4rce.angular-socialshare']);

  app.config(function($locationProvider){
        $locationProvider.html5Mode(true).hashPrefix('!');
  });

  app.run(function($FB){
    $FB.init('164546407087109');
  });

  
  app.controller('MenuController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
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
    
    $scope.index = 0;
    $scope.anchor = 0;
    $scope.image = $scope.images[0];

    $scope.toggleImg = function(){
      $scope.index = $scope.index == 1 ? 0 : 1;
      $scope.image = $scope.images[$scope.index];
    };

    $scope.isSelect = function(){
      return ($scope.image === $scope.images[1]) || ($scope.image === $scope.images[2]);
    };
    
    $scope.gotoAnchor = function(x){
      $scope.anchor = x;
      $scope.image = $scope.images[2];
      $.fn.fullpage.moveTo(x);
    };

    $scope.isAnchor = function(x) {
      return $scope.anchor === x;
    }
  }]);

  app.controller('ShareController', function(){
    this.images = [
              {
                svg: '//www.tedxtainan.com/app/assets/img/unclickbutton.svg', 
                png: '//www.tedxtainan.com/app/assets/img/unclickbutton.png'
              },
              {
                svg: '//www.tedxtainan.com/app/assets/img/clickbutton.svg', 
                png: '//www.tedxtainan.com/app/assets/img/clickbutton.png'
              }];
    this.image = this.images[0]

    this.isOpen = false;

    this.toggle = function(){
      this.isOpen = this.isOpen? false : true;
    }

  });


  app.controller('ThemeController', function(){
      
    this.speakers = [{
                      image: {
                          full: '',
                          thumb: 'assets/img/unknown_speaker.svg'
                      },
                      intro: {
                             
                      }
                    },
                    {
                      image: {
                          full: '',
                          thumb: 'assets/img/unknown_speaker.svg'
                      },
                      intro: {
                             
                      }
                    },{
                      image: {
                          full: '',
                          thumb: 'assets/img/unknown_speaker.svg'
                      },
                      intro: {
                             
                      }
                    },{
                      image: {
                          full: '',
                          thumb: 'assets/img/unknown_speaker.svg'
                      },
                      intro: {
                             
                      }
                    },{
                      image: {
                          full: '',
                          thumb: 'assets/img/unknown_speaker.svg'
                      },
                      intro: {
                             
                      }
                    }
                  ];


  });


}) ();
