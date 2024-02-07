$('.progress-number').each(function(){
    $(this).animate({
      left: $(this).data('number')
    }, {
      duration: 10000,
      step: function(now) {
        var data = Math.round(now);
        $(this).text('+' + data );
      }
    });
  });
  
  //Em An
  // 14-12-2016
  // Update: https://codepen.io/eslam-zaki/pen/egavEz
  // https://codepen.io/Em-An/pen/PJZWLz