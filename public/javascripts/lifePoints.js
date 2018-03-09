var lifePoint = 100

$("#boss").click(function () {
    if (lifePoint > 0) {
        lifePoint -= 2
        if (lifePoint < 0) {
            lifePoint = 0
        }
        if (lifePoint <= 20) {
            $('#life')
                .css('color', 'black')
        }
        lifePointPercent = lifePoint.toString() + "%"
        console.log(lifePointPercent)
        $('#life')
            .css('width', lifePointPercent)
            .attr('aria-valuenow', lifePoint)
            .text(lifePointPercent)
    }
});