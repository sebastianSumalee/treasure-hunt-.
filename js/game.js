const WIDTH = 400;
const  HEIGTH = 400;


let target = {
	x: getRandomNumber(WIDTH),
	y: getRandomNumber(HEIGTH)
};

//console.log(target);
 
var $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let click = 0;


$map.addEventListener('click', function(e) {
	click++;
	let distance = getDistance(e, target);
	let distanceHint = getDistanceHint(distance);
	$distance.innerHTML  = `<h1>${distanceHint}</h1>`;

if ( distance < 20) {
	alert(`Found the Tesoro en ${click} clicks!`);
	location.reload();
}

});