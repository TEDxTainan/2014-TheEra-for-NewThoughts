(function() {
  var app = angular.module('event', ['ngRoute','djds4rce.angular-socialshare']);

  app.config(function($locationProvider){
        $locationProvider.html5Mode(true).hashPrefix('!');
  });

  app.run(function($FB){
    $FB.init('164546407087109');
  });

  
  app.controller('MenuController', ['$location', '$anchorScroll', function($location, $anchorScroll){
    this.images = [
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
    this.image = this.images[0];

    this.toggleImg = function(){
      this.index = this.index == 1 ? 0 : 1;
      this.image = this.images[this.index];
    };

    this.isSelect = function(){
      return (this.image === this.images[1]) || (this.image === this.images[2]);
    };
    
    this.gotoAnchor = function(x){
      this.anchor = x;
      this.image = this.images[2];
      $.fn.fullpage.moveTo(x);
    };

    this.isAnchor = function(x) {
      return this.anchor === x;
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
