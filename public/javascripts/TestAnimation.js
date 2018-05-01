var p = $( "#canvas:first" );
var position = p.position();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 0;
var y = 0;
var z = 0;

$("#canvas").click(function () {
	console.log("x = " + x);
	console.log("y = " + y);
	var random2 = Math.floor(Math.random() * 50) + x;
	var random3 = Math.floor(Math.random() * 40) + 20;
	console.log("random2 = " +random2);
	console.log("random3 = " +random3);

	if(z=1)
	{
		var randomX = Math.floor(Math.random() * 330);
		var randomY = 0;

		ctx.beginPath();
		ctx.strokeStyle = '0f111d';
		ctx.moveTo(randomX, randomY);
		ctx.lineTo(random2, random3);
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.strokeStyle = '0f111d';
	ctx.moveTo(x, y);
	ctx.lineTo(random2, random3);
	ctx.stroke();

	x = random2;
	y = random3;
	z = 1;
});