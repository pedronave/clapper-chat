var out = document.getElementById("messages");

$(function () {

  var socket = io();

  $('form').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('clap');
    $('#m').val('');
    return false;
  });

  socket.on('clap', function(){
    $('#messages').append($('<li>').text('👏'));

    // scroll to bottom
    
    out.scrollTop = out.scrollHeight - out.clientHeight;
  });
});
