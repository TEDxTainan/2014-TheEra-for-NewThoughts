(function() {
  var app = angular.module('event', [ ]);
  
  app.controller('MenuController', function(){
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
    
    this.image = this.images[0]
    this.setImg = function(i){
      this.image = this.images[i];
    };

    this.isSelect = function(i){
      return this.image === this.images[i];
    };

  });

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

}) ();
