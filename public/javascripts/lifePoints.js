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

$("#canvas").click(function () {
    if (lifePointPercent > 0) {
        socket.on('Bonus', data =>{
            console.log(data);
            lifePoint -= data;
            console.log(lifePoint);
        });
        lifePoint -= degat
        lifePointPercent = toPercent(lifePoint, lifePointInitial)
        if (lifePointPercent < 0) {
            var choixBoss = Math.floor(Math.random() * 10)
            $('#canvas').css("background-image", "url(/images/boss"+choixBoss+".gif)")
            lifePoint = 3000
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

