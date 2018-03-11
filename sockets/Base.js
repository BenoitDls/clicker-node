module.exports = (io) => {
    io.on('connection', function(socket){
        //socket.emit('username', session.username);

        socket.on('chat message', function(msg){
          io.emit('chat message', msg);
        });
      });
};