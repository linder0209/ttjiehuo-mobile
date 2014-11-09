$(function () {
  $('#signupForm').on('focus', 'input', function (e) {
    var $el = $(e.currentTarget);
    var placeholder = $el.attr('placeholder');
    if (!$el.data('placeholder')) {
      $el.data('placeholder', placeholder);
    }
    $el.attr('placeholder', '');
  }).on('blur', 'input', function (e) {
    var $el = $(e.currentTarget);
    var placeholder = $el.data('placeholder');
    $el.attr('placeholder', placeholder);
  }).on('keydown', 'input', function (e) {
    var key = e.keyCode;
    // ignore
    // command modifiers arrows
    if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) {
      return;
    }
    $('#paswordEye').removeClass('gray');
    $('#signupForm button').removeAttr('disabled');
  });
});
