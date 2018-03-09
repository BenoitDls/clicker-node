var socket = io();

$('form').submit(function () {
    data = $('#msg').val()
    socket.emit('chat message', data);
    $('#msg').val('');
    return false;
});

socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg));
});