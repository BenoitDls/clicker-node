$('#boss').click(function () {
    $('#boss')
        .removeClass('fadeInUp')
        .addClass("shake")
        .one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
            function () {
                $(this).removeClass('shake')
            })
})
