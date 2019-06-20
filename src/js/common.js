$(function() {

  $('.wrapp-span > span ').click(function() {
    $(this).siblings('.fas').toggleClass('active')
  })

  $('#switch span').click(function() {
    var key = $(this).attr('key')
    var val = $(this).parent().siblings('.count-input').val()
    var countProdInputVal = +val.replace(/\D+/g, '')
    var factor = 10
    var newVal

    switch (key) {
      case '+':
        newVal = countProdInputVal + factor
        break;
      case '-':
        newVal = countProdInputVal - factor
        break;
      default:
        break;
    }

    $(this).parent().siblings('.count-input').val(newVal + ' шт.')
    if(newVal < 0) {
      $(this).parent().siblings('.count-input').val('200 шт.')
    }
    
  })

  $('.num-page a').click(function(e) {
    e.preventDefault()
    $('.num-page a').removeClass('active')
    $(this).addClass('active')
  })

  $('.back, .next').click(function(e) {
    e.preventDefault()
  })

})
