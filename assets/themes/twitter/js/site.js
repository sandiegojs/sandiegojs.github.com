
$(function(){
  var hasFutureCallout = false;
  $('.js-calloutItem').each(function(){
    var $this = $(this);
    var dateEl = $this.find('.date');
    var calloutDate = dateEl.data('date');

    if (!calloutDate) return;

    if ((Date.now() - 48 * 60 * 60 * 1000) > new Date(calloutDate)) {
      $this.addClass('js-passed passed');
    } else {
      hasFutureCallout = true;
    }
  });

  if (!hasFutureCallout) {
    $('.js-calloutTBD').show();
    $('.js-calloutItem').last().remove();
  }
});