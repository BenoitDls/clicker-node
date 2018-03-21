let lifePointInitial = 3000
let lifePoint = 3000
let lifePointPercent = 100
let degat = 8

module.exports = (io) => {
    io.emit('lifeInitial', 30000)
    io.on('connection', function (socket) {
        socket.emit('lifeInitial', 30000)

    });
};