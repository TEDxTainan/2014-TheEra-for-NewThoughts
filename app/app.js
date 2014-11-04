(function() {
  var app = angular.module('event', [ ]);
  
  app.controller('MenuController', ['$location', '$anchorScroll', function($location, $anchorScroll){
    this.images = [
          {
            svg: 'assets/img/unfold.svg', 
            png: 'assets/img/unfold.png'
          },
          {
            svg: 'assets/img/unselect.svg', 
            png: 'assets/img/unselect.png'
          },
          {
            svg: 'assets/img/select.svg', 
            png: 'assets/img/select.png'
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
      console.log(x);
      console.log(this.anchor);
      return this.anchor === x;
    }
  }]);

  app.controller('ShareController', function(){
    this.images = [
              {
                svg: 'assets/img/unclickbutton.svg', 
                png: 'assets/img/unclickbutton.png'
              },
              {
                svg: 'assets/img/facebook.svg', 
                png: 'assets/img/facebook.png'
              }];
    this.image = this.images[0]

    this.setImg = function(i){
      this.image = this.images[i];
    };

    this.isSelect = function(i){
      return this.image === this.images[i];
    };

  });


  app.controller('SpeakerController', function(){
  
  });





}) ();
