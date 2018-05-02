socket.on('start game', function(data) {
    let bossLifeInit = data
    console.log(bossLifeInit)
});

let lifePointInitial = 3000
let lifePoint = 3000
let lifePointPercent = 100
let degat = 8
var monnaie = 495
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

$('#life')
.text(lifePoint + ' HP')

function toPercent(number, numberInitial) {
    let result = number * 100 / numberInitial
    return result
}

$('#bonus2').prop('disabled', true);
$('#bonus3').prop('disabled', true);
$('#bonus4').prop('disabled', true);
$('#bonus5').prop('disabled', true);


socket.on('Bonus2', data =>{
    console.log(data)
    monnaie -= data
    return monnaie
});

socket.on('Bonus3', data =>{
    monnaie -= data
    return monnaie
});

socket.on('Bonus4', data =>{
    monnaie -= data
    return monnaie
});

socket.on('Bonus5', data =>{
    monnaie -= data
    return monnaie
});

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
            var choixBoss = Math.floor(Math.random() * 6)
            $('#canvas').css("background-image", "url(/images/boss"+choixBoss+".gif)")
            lifePoint = 3000
            lifePointPercent = toPercent(lifePoint, lifePointInitial)
            ctx.clearRect(0,0,canvas.width,canvas.height)
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

    monnaie += 1

    $('#monnaie').html(monnaie);

    if(monnaie >= 500)
    {
      $('#bonus2').prop('disabled', false);
  }
  else if(monnaie >= 1000)
  {
      $('#bonus3').prop('disabled', false);
  }
  else if(monnaie >= 5000)
  {
      $('#bonus4').prop('disabled', false);
  }
  else if(monnaie >= 10000)
  {
      $('#bonus5').prop('disabled', false);
  }
  else{
    $('#bonus2').prop('disabled', true);
    $('#bonus3').prop('disabled', true);
    $('#bonus4').prop('disabled', true);
    $('#bonus5').prop('disabled', true);
}
});

