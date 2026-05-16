/* =========================
DECIMAL TO DMS
========================= */

function decimalToDMS(decimal){

const absolute =
Math.abs(decimal);

const degrees =
Math.floor(absolute);

const minutesNotTruncated =
(absolute - degrees) * 60;

const minutes =
Math.floor(minutesNotTruncated);

const seconds =
(
(minutesNotTruncated - minutes) * 60
).toFixed(2);

return{

degrees,
minutes,
seconds

};

}

/* =========================
CONVERT DECIMAL TO DMS
========================= */

function convertDecimalToDMS(){

const lat =
parseFloat(
document.getElementById('decimalLat').value
);

const lon =
parseFloat(
document.getElementById('decimalLon').value
);

if(isNaN(lat) || isNaN(lon)){

alert('Please Enter Valid Coordinates');

return;

}

/* LATITUDE */

const latDMS =
decimalToDMS(lat);

document.getElementById('latDeg')
.value =
latDMS.degrees;

document.getElementById('latMin')
.value =
latDMS.minutes;

document.getElementById('latSec')
.value =
latDMS.seconds;

document.getElementById('latDir')
.value =
lat >= 0 ? 'N' : 'S';

/* LONGITUDE */

const lonDMS =
decimalToDMS(lon);

document.getElementById('lonDeg')
.value =
lonDMS.degrees;

document.getElementById('lonMin')
.value =
lonDMS.minutes;

document.getElementById('lonSec')
.value =
lonDMS.seconds;

document.getElementById('lonDir')
.value =
lon >= 0 ? 'E' : 'W';

}

/* =========================
DMS TO DECIMAL
========================= */

function dmsToDecimal(
deg,
min,
sec,
dir
){

let decimal =

parseFloat(deg) +

parseFloat(min) / 60 +

parseFloat(sec) / 3600;

if(
dir === 'S' ||
dir === 'W'
){

decimal *= -1;

}

return decimal;

}

/* =========================
CONVERT DMS TO DECIMAL
========================= */

function convertDMSToDecimal(){

/* LATITUDE */

const latitude =

dmsToDecimal(

document.getElementById('inputLatDeg').value,

document.getElementById('inputLatMin').value,

document.getElementById('inputLatSec').value,

document.getElementById('inputLatDir').value

);

/* LONGITUDE */

const longitude =

dmsToDecimal(

document.getElementById('inputLonDeg').value,

document.getElementById('inputLonMin').value,

document.getElementById('inputLonSec').value,

document.getElementById('inputLonDir').value

);

/* SHOW RESULTS */

document.getElementById('resultLat')
.innerText =
latitude.toFixed(8);

document.getElementById('resultLon')
.innerText =
longitude.toFixed(8);

}