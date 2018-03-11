var socket = io();
var tempUsername = prompt("Entrez votre pseudo :");

socket.on('username')

$('form').submit(function () {
    data = $('#msg').val()
    socket.emit('chat message', {
        msg: data,
        username: tempUsername
    });
    $('#msg').val('');
    return false;
});

socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg.username+' : '+msg.msg));
});

