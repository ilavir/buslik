$('.footer .brands-link').live("click", function () {
  var filterExpanded = $('.footer-brands .brands-logos').css('display');
  if (filterExpanded == 'none') {
    $('.footer-brands .brands-logos').animate({height:"toggle"}, 1000);
    $('.footer-brands .solid-raz-brown').animate({height:"toggle"}, 1000);
    //$(this).removeClass('filter-search-bg').addClass('filter-search-bga');
  } else {
    $('.footer-brands .brands-logos').animate({height:"toggle"}, 1000);
    $('.footer-brands .solid-raz-brown').animate({height:"toggle"}, 1000);
    //$(this).removeClass('filter-search-bga').addClass('filter-search-bg');
  }
});