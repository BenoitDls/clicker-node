var lifePoint = 100

$("#boss").click(function () {
    if (lifePoint > 0) {
        lifePoint -= 15
        if (lifePoint < 0) {
            lifePoint = 0
        }
        lifePointPercent = lifePoint.toString() + "%"
        console.log(lifePointPercent)
        $('#life')
            .css('width', lifePointPercent)
            .attr('aria-valuenow', lifePoint)
            .text(lifePointPercent)
    }
});