
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

  /* This function looks for a change in the hash (activation of an in-page link) and sets focus to and 
  highlights the target element. This is necessary because webkit does not set focus as it should. If 
  the hash is empty (the user hit the back button after activating an in-page link) focus is set to body.
  Adapted from WebAIM.org
  */
  $(window).bind('hashchange', function() {
    var hash = "#"+window.location.hash.replace(/^#/,'');
    if (hash!="#") {
      $(hash).attr('tabindex', -1).on('blur focusout', function () {
        $(this).removeAttr('tabindex');
      }).focus();
    }
    else {
      $("#headcontainer").attr('tabindex', -1).on('blur focusout', function () {
        $(this).removeAttr('tabindex');
      }).focus();
    }
  });
});