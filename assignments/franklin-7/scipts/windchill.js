/*windchill*/
/*f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 */

function windChill(){

//get number of both beginging and ending odemeter
var speed = document.getElementById('eoinputBox').value;
var temp = document.getElementById('inputBox').value;

//convert what the user typed into a number.
var s = parseFloat(speed);
var t = parseFloat(temp);

//figure out windchill
var chill =  35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16) 

//round 2 digits
var digits = 2;
var multiplier = Math.pow(10, digits);
chill = Math.round(chill * multiplier) / multiplier;

//Display 
document.getElementById('wind').innerHTML = chill;
}


