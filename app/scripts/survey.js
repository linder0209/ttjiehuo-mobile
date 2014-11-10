$(function () {
  $('#btn').click(function () {
    var $survey = $('[name="surveyOption"]:checked');
    if ($survey.length === 0) {
      $('#dangerInfo').show().children('span').text('请至少选择一项');
    } else if ($survey.val() === '6' && $.trim($('input[name="other"]').val()) === '') {
      $('#dangerInfo').show().children('span').text('请输入其他项');
    } else {
      $('#main').empty().load('./templates/success.html');
      /*$.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'http://www.ttjiehuo.com/tbs/guidance/insertGuidance',
        data: {},
        success: function (data) {
          if (data.msg == '00') {
            $('#main').empty().load('./templates/success.html');
          } else if (data.msg == '02') {
          } else {
          }
        }
      });*/
    }
  });

  $('[name="surveyOption"]').click(function(e){
    if($(e.currentTarget).prop('checked')){
      $('#dangerInfo').hide();
    }
  });
});
