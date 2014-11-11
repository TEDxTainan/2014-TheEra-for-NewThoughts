(function() {
  'use strict';

  module.exports =  function($scope, $location, $anchorScroll) {
    
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
      if(this.isHome()){
        this.index = this.index == 1 ? 0 : 1;
        this.image = this.images[this.index];
      }
      else{
        this.gotoAnchor(1);
        this.image = this.images[2];
      }
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
      var result = pos === "" || pos === "/home";
      if(!result && this.image != this.images[1]){
        this.image = this.images[1];
      }
      return  result;
    };
  }

})();
