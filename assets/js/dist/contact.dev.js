"use strict";

var BOT_KEY = '1523982933:AAE0jzXGBuNdk0F8miLiWNTyskY-Nk6sr-A';
var CHAT_ID = '-1001251653892';
var map;

function initMap() {
  document.getElementById('map_img').remove();
  document.getElementById('map_link').remove();
  map = L.map('map').setView([61.218004887765794, -149.90029287881958], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([61.218004887765794, -149.90029287881958]).addTo(map);
} // ValidEmail


function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$(document).ready(function () {
  $('#send').click(function () {
    var name = $('#name').val();
    var mail = $('#mail').val();
    var msg = $('#text').val();
    var msgText = encodeURI('<b>Name </b>: ' + name + '\n<b>Email </b>: ' + mail + '\n<b>Text </b>: ' + msg);
    var valid = true;

    if (name == '') {
      valid = false;
    }

    if (mail == '') {
      valid = false;
    } else {
      if (isValidEmail(mail) === false) {
        valid = false;
      }
    }

    if (msg == '') {
      valid = false;
    }

    if (valid) {
      $.ajax({
        url: 'https://api.telegram.org/bot' + BOT_KEY + '/sendMessage',
        data: 'chat_id=' + CHAT_ID + '&parse_mode=html&text=' + msgText,
        type: 'get',
        dataType: 'json',
        success: function success(json) {
          if (json.ok) {
            $("#my_form")[0].reset();
          } else {}

          console.log(json);
        },
        error: function error(err) {}
      });
      $.toast({
        text: "Message sent",
        position: 'mid-center',
        textAlign: 'center',
        textColor: '#ffffff',
        bgColor: '#29da09',
        hideAfter: 3000,
        loader: false
      });
    } else {
      $.toast({
        text: "Message not sent, please fill in all fields",
        position: 'mid-center',
        textAlign: 'center',
        textColor: '#ffffff',
        bgColor: '#a92d0c',
        hideAfter: 3000,
        loader: false
      });
    }
  });
  $("#mail").keyup(function () {
    var email = $(this).val();

    if (email != '') {
      if (isValidEmail(email)) {
        $('#span2').hide();
        $('#span1').show();
      } else {
        $('#span1').hide();
        $('#span2').show();
      }
    } else {
      $('#span2, #span1').hide();
    }
  });
});