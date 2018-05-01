socket.on('start game', function(data) {
    let bossLifeInit = data
    console.log(bossLifeInit)
});

let lifePointInitial = 3000
let lifePoint = 3000
let lifePointPercent = 100
let degat = 8

$('#life')
    .text(lifePoint + ' HP')

function toPercent(number, numberInitial) {
    let result = number * 100 / numberInitial
    return result
}

$("#boss").click(function () {
    if (lifePointPercent > 0) {
        lifePoint -= degat
        lifePointPercent = toPercent(lifePoint, lifePointInitial)
        if (lifePointPercent < 0) {
            lifePoint = 0
            lifePointPercent = toPercent(lifePoint, lifePointInitial)
        }
        if (lifePointPercent <= 20) {
            $('#life')
                .css('color', 'black')
        }
        lifePointDisplay = lifePoint.toString() + "HP"
        test = lifePointPercent + '%'
        $('#life')
            .css('width', test)
            .attr('aria-valuenow', lifePointPercent)
            .text(lifePointDisplay)
    }
});

