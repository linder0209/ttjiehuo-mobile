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
  $('#sendSecurity').click(function () {
    var $mobile = $('#mobile');
    if ($mobile.valid()) {

      //本地测试
      $('#signupForm .text-container').append('<li class="success"><i class="icon_success"></i> 验证码发送成功</li>').show();
      $('#sendSecurity').html('120秒后可重新发送（<span>120</span>）').attr('disabled','disabled');
      var step = 120;
      var interval = setInterval(function(){
        step--;
        $('#sendSecurity span').text(step);
        if(step === 0){
          clearInterval(interval);
          $('#sendSecurity').html('发送验证码').removeAttr('disabled');
        }
      }, 1000);


      //正式环境代码
      /*$.ajax({
        type: 'post',
        dataType: 'json',
        url: 'http://www.ttjiehuo.com/tbs/smsController/queryIdentifyingCode',
        data: {
          mobile: $mobile.val(),
          type: 2,
          t: new Date()
        },
        success: function (data) {
          if (data.success  === true) {
            $('#signupForm .text-container').append('<li class="success"><i class="icon_success"></i> 验证码发送成功</li>').show();
            $('#sendSecurity').html('120秒后可重新发送（<span>120</span>）').attr('disabled','disabled');
            var step = 120;
            var interval = setInterval(function(){
              step--;
              $('#sendSecurity span').text(step);
              if(step === 0){
                clearInterval(interval);
                $('#sendSecurity').html('发送验证码').removeAttr('disabled');
              }
            }, 1000);
          } else {

          }
        }
      });*/
    }
  });

  $.validator.setDefaults({
    showErrors: function(errorMap, errorList) {
      if(errorList && errorList.length > 0){
        this.settings.errorLabelContainer.html('<li class="danger"><i class="icon_danger"></i>' + errorList[0].message + '</li>').show();
      }else{
        this.settings.errorLabelContainer.html('').hide();
      }
    }
  });
  $('#signupForm').validate({
    errorLabelContainer: $('#signupForm .text-container'),
    rules: {
      //mobile: {
      //  remote: {
      //    url: 'http://www.ttjiehuo.com/tbs/mobile/accountAlreadyExists',
      //    type: 'get',
      //    dataType: 'json'
      //  }
      //}
      //securityCode: {
      //  remote: {
      //    url: 'http://www.ttjiehuo.com/tbs/mobile/checkVerifyCode',
      //    type: 'get',
      //    dataType: 'json',
      //    data: {
      //      mobile: function() {
      //        return $('#mobile').val();
      //      },
      //      verifyCode: function() {
      //        return $('#securityCode').val();
      //      },
      //      t: function(){
      //        return new Date();
      //      }
      //    }
      //  }
      //}
    }, messages: {
      mobile: {
        required: '请输入手机号'//,
        //remote: '该手机号已被注册！'
      },

      password: {
        required: '请输入密码'
      },

      securityCode: {
        required: '请输入验证码',
        remote: '验证码不正确'
      }
    }, submitHandler: function () {
      location.href = 'survey.html';

      /*$.ajax({
        type: 'post',
        dataType: 'json',
        url: 'http://www.ttjiehuo.com/tbs/mobile/insertUser',
        data: {
          mobile: $('#mobile').val(),
          mobileCode: $('#securityCode').val(),
          password: $('#password').val()
        },
        success: function (data) {
          if (data.msg=='00') {
            location.href = 'survey.html';
          }else if(data.msg=='02'){

          }else {

          }
        }
      });*/
    }
  });
});
