let allUsers = []
let bossLifeInit = 3000

module.exports = (io) => {
    io.on('connection', function (socket) {

        io.emit('start game', bossLifeInit)

        socket.on('chat message', function (data) {
            io.emit('chat message', data);
        });

        socket.on('user', function (data) {
            var valueToPush = new Array();
            valueToPush[0] = socket.id;
            valueToPush[1] = data;
            allUsers.push(valueToPush);
            console.log(allUsers)
            io.emit('user', allUsers);
        })

        socket.on('disconnect', function () {
            allUsers.splice(allUsers.indexOf(socket), 1);
        });
    });
};