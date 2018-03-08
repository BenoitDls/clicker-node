$("#boss").click(function () {
    alert("Handler for .click() called.");
});

let gainpow = 0;
let upper = 1;

function progress(value) {
    document.querySelector('#avancement').value = value;
    document.querySelector('#gainpow1').disabled = !(value > 10);
    document.querySelector('#gainpow2').disabled = !(value > 20);
    document.querySelector('#gainpow3').disabled = !(value > 30);
    document.querySelector('#gainpow4').disabled = !(value > 40);
}


document
    .querySelectorAll('.gainpow')
    .forEach(v => v.addEventListener('click', () => {
        document.querySelector('#avancement').max += 200;
        upper += parseInt(v.getAttribute('data-upper'));
        gainpow = 0
        progress(0);
    }));

document
    .querySelector('#cookie')
    .addEventListener('click', () => {
        gainpow += upper;
        progress(gainpow);
    });