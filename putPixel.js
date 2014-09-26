
var canvas ;
var ctx ;


var pixelSize = 5;
function setPixelSize( ps ) {
    pixelSize = ps;
}
var setPixel = function( x, y, r, g, b )
	{
		ctx.fillStyle = "rgb("+r+","+g+","+b+")";
	    ctx.fillRect (x * pixelSize, y * pixelSize, pixelSize, pixelSize);
	} ;

function show(v) {
    console.dir(v);
    return v;
}

$( document ).ready(
	function() 
{
 	canvas = document.getElementById('surface');
	ctx = canvas.getContext('2d');
	
	main() ;
}) ;

