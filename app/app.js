var app = angular.module('event', ['ngRoute']);

/*app.config(function($locationProvider, $rootScopeProvider){
      $locationProvider.html5Mode(true).hashPrefix('!');
      $rootScopeProvider.digestTtl(20);
});*/

 /*app.run(function($FB){
  $FB.init('164546407087109');
 });*/

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
  this.anchor = 0;
  var change = false;
  $scope.image = $scope.images[0];

  $scope.toggleImg = function(){
    this.index = this.index == 1 ? 0 : 1;
    $scope.image = $scope.images[this.index];
    console.log(this.index);
  };
  $scope.isSelect = function(){
    console.log($scope);
    change = ($scope.image === $scope.images[1]) || ($scope.image === $scope.images[2]); 
    return change;
  };
  
  $scope.gotoAnchor = function(x){
    this.anchor = x;
    $scope.image = $scope.images[2];
    $.fn.fullpage.moveTo(x);
  };

  $scope.isAnchor = function(x) {
    return this.anchor === x;
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


  app.controller('ThemeController', ['$scope', function($scope){
      
    $scope.speakers = [{
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

  }]);
