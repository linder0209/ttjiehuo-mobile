'use strict';

(function () {
  var onkeyup = $.validator.defaults.onkeyup;
  $.validator.setDefaults({
    onfocusout: function (e) {
      $(e).valid();
    },
    //重新实现onkeyup事件，当远程校验时，按下按键不触发该事件
    onkeyup: function (element, event) {
      var rules = $(element).rules();
      for (var rule in rules) {
        if (rule === 'remote') {
          return;
        }
      }
      onkeyup.call(this, element, event);
    },

    // For the invisible tags, we need to validate too.
    ignore: 'input[type="hidden"], :button, :hidden',
    errorClass: 'text-danger'
  });

  // 以下自定义校验规则
  var customMethod = {
    phonesZH: {
      message: '手机号码格式不正确',
      fn: function (value, element, param) {
        return this.optional(element) || value.length === 11 &&
          value.match(/^1[3|4|5|8]\d{9}$/);
      }
    },
    passwordStrategy:{
      message: '密码格式为6-16位数字或字母组合',
      fn: function (value, element, param) {
        return this.optional(element) || value.length >= 6  && value.length <= 16 &&
          value.match(/(^[a-zA-Z|\d]{6,16}$)/);
      }
    }
  };

  /**
   * add method to jquery.validator
   * 这里忽略 jshint forin 的验证
   */
  /*jshint -W089 */
  for (var c in customMethod) {
    var method = customMethod[c];
    $.validator.addMethod(c, method.fn, method.message);
  }
}());
