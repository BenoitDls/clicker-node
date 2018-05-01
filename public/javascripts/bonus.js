var number = 1;
var bonus2 = 10000;
var bonus3 = 4000;
var bonus4 = 2000;
var bonus5 = 1000;

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

function bonus(temps){
  setInterval(() => canvas.click(), temps);
}

/*$('#bonus3')
.click(() => {
  compteur = compteur/1.1;
  return compteur;
});*/

$('#bonus2')
.click(() => {
  bonus(bonus2);
});

$('#bonus3')
.click(() => {
  bonus(bonus3);
});

$('#bonus4')
.click(() => {
  bonus(bonus4);
});

$('#bonus5')
.click(() => {
  bonus(bonus5);
});

$('#canvas')
.click(() => {
  $('#bonus').css('opacity', 1);
  $('#bonus').animateCss("zoomIn");
  socket.emit('Bonus1',1);
});