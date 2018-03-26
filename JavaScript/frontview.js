$(document).ready(function(){
  
  $("#aboutpage").hide();
  $("#hme").click(function(){
   
    $("#aboutpage").hide();
    $("#homepage").show();
  });

  $("#abt").click(function(){
   
    $("#homepage").hide();
    $("#aboutpage").show();
  });

  $("#get").click(function(){
    $("#aboutpage").show();
    $("#homepage").hide();
  });

  $("#info").click(function(){
    $("#aboutpage").show();
    $("#homepage").hide();
  });

  $("#info1").click(function(){
    $("#aboutpage").show();
    $("#homepage").hide();
  });

  $("#info2").click(function(){
    $("#aboutpage").show();
    $("#homepage").hide();
  });

});

$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},5000);
    return false;
  });
});






