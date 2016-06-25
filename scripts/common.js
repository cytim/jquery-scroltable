(function($) {
  $(function() {
    /**
     * Scroll to anchor
     */
    $('a[data-toggle="scroll"]').click(function(event) {
      event.preventDefault();
      var target = $($(this).attr('href'));
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 600);
      }
    });
  });
}(jQuery));
