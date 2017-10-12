
$(document).ready(function(){
  $(".bxslider").bxSlider({
    infiniteLoop: false,
    hideControlOnEnd: true,
    preventDefaultSwipeY: false,
    onSliderLoad: function () {
      $(".bxslider").css("visibility", "visible");
    }
  });
  var quiz = jQuery('#quiz').quiz('1vARKv0t3BPw7OzPfLgFi1PxvwdFtedYX1iLS0Ophr3I');
});

// For this project I utlized Mother Jones News Quiz and bxSlider.
