$(document).ready(function() {
  $(".dropdown-button").click(function() {
  	var $button, $menu;
  	$button = $(this);
  	$menu = $button.siblings(".dropdown-menu");
  	$menu.toggleClass("show-menu");
  		$menu.children("li").click(function() {
  			$menu.removeClass("show-menu");
  			$button.html($(this).html());
  	  });
  });
  $.fn.goTo = function() {
      $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this;
    };
      $(".smart").click(function(){
      $(".workSection").goTo();
  });
});

$(document).ready(function(){
  $('.slideSection').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
  });
});

