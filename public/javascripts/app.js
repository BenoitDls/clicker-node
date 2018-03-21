let socket = io();
let tempUsername = prompt("Entrez votre pseudo :");

$('form').submit(function () {
    data = $('#msg').val()
    socket.emit('chat message', {
        msg: data,
        username: tempUsername
    });
    $('#msg').val('');
    return false;
});

socket.on('chat message', function (data) {
    $('#messages')
        .append($('<li>')
            .text(data.username + ' : ' + data.msg))
});

socket.emit('user', tempUsername);

socket.on('user', function (data) {
    console.log(data)
    $('#joueurs').empty()
    data.forEach(function (item) {
        $('#joueurs').append($('<li>').text(item[1]));
    });
    for (let element in data) {}
})