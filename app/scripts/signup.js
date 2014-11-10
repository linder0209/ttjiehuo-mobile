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


  //发送验证码
  $('#sendSecurity').click(function(){

  });

  $('#signupForm').validate({
    errorLabelContainer: $('#signupForm .text-danger-container'),
    rules: {
      //mobile: {
      //  remote: {
      //    url: 'http://www.ttjiehuo.com/tbs/mobile/accountAlreadyExists',
      //    type: 'get',
      //    dataType: 'json'
      //  }
      //}
    },
    messages: {
      mobile: {
        required: '请输入手机号'//,
        //remote: '该手机号已被注册！'
      },

      password: {
        required: '请输入密码'
      },

      securityCode: {
        required: '请输入验证码'
      }
    },
    submitHandler: function () {

    }
  });
});
