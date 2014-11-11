$(document).ready(function() {
  $('#fullpage').fullpage({
    'css3': true,
    'sectionsColor': ['#fff', '#fff', '#fff', '#fff'],
    anchors: ['home', 'brief', 'section1', 'section2', 'section3',
      'participate'
    ],
    menu: '#menu',
    'navigation': false,
    'navigationPosition': 'right',
    afterLoad: function(anchor, index) {
      var activeItem;
      var e = "#menu li" + ":nth-child(" + (index - 1).toString() +
        ")";
      activeItem = $(e);
      activeItem.addClass('active').siblings().removeClass('active');
    }
  });
});
