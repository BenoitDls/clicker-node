if (!socket) {
    let socket = io();
}

socket.on('lifeInitial', function (data) {
    console.log('yes')
    $('#life')
        .text(data + ' HP')
})



