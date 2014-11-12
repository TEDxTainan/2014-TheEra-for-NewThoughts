(function() {
  'use strict';

  module.exports = function shareMenuController($scope) {

    this.images = [{
                    svg: '//www.tedxtainan.com/app/assets/img/unclickbutton.svg',
                    png: '//www.tedxtainan.com/app/assets/img/unclickbutton.png'
                  }, {
                    svg: '//www.tedxtainan.com/app/assets/img/clickbutton.svg',
                    png: '//www.tedxtainan.com/app/assets/img/clickbutton.png'
                  }];

    this.image = this.images[0];
    this.isOpen = false;
    this.toggle = toggle;

    function toggle() {
      console.log(22);
      this.isOpen = this.isOpen ? false : true;
    }
  }

})();
