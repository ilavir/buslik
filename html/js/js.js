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

$('.faq-item-cont .item a').live("click", function () {
  var $answer = $(this).closest('.item').children('.answer');
  var answerToggle = $answer.css('display');
  if (answerToggle == 'none') {
    $($answer).animate({height:"toggle"}, 1500);
    $(this).text('Скрыть ответ').removeClass('open').addClass('close');
  } else {
    $($answer).animate({height:"toggle"}, 1500);
    $(this).text('Посмотреть ответ').removeClass('close').addClass('open');
  }
});