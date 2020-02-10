//Converting Feet
function feetConverter(value) {
    document.getElementById("outputMeters").innerHTML = value / 3.2808;
    document.getElementById("outputInches").innerHTML = value * 12;
    document.getElementById("outputCentimeters").innerHTML = value / 0.032808;
    document.getElementById("outputKilometers").innerHTML = value / 3280.8;
    document.getElementById("outputMiles").innerHTML = value * 0.00018939;
}

//Converting Meter
function meterConverter(mvalue){
    document.getElementById("mtof").innerHTML = mvalue * 3.2808;
    document.getElementById("mtoi").innerHTML = mvalue * 39.370;
    document.getElementById("mtoc").innerHTML = mvalue / 0.01;
    document.getElementById("mtok").innerHTML = mvalue * 0.001;
    document.getElementById("mtom").innerHTML = mvalue * 0.00062137;
}

//Converting Inches
function incheConverter(ivalue){
    document.getElementById("itof").innerHTML = ivalue * 0.083333;
    document.getElementById("itom").innerHTML = ivalue / 39.370;
    document.getElementById("itoc").innerHTML = ivalue / 0.39370;
    document.getElementById("itok").innerHTML = ivalue / 39370;
    document.getElementById("itomi").innerHTML = ivalue * 0.000015783;
}

//Converting Centimeter
function centimeterConverter(cvalue) {
    document.getElementById("ctof").innerHTML = cvalue * 0.032808;
    document.getElementById("ctom").innerHTML = cvalue / 100;
    document.getElementById("ctoi").innerHTML = cvalue * 0.39370;
    document.getElementById("ctok").innerHTML = cvalue / 100000;
    document.getElementById("ctomi").innerHTML = cvalue * 0.0000062137;
}

//Converting Kilometer
function kilometerConverter(kvalue) {
    document.getElementById("ktof").innerHTML = kvalue * 3280.8;
    document.getElementById("ktom").innerHTML = kvalue * 1000;
    document.getElementById("ktoi").innerHTML = kvalue * 39370;
    document.getElementById("ktoc").innerHTML = kvalue * 100000;
    document.getElementById("ktomi").innerHTML = kvalue * 0.62137; 
}

//Converting Miles
function mileConverter(mivalue) {
    document.getElementById("mitof").innerHTML = mivalue * 5280;
    document.getElementById("mitom").innerHTML = mivalue / 0.00062137;
    document.getElementById("mitoi").innerHTML = mivalue * 63360;
    document.getElementById("mitoc").innerHTML = mivalue / 0.0000062137;
    document.getElementById("mitok").innerHTML = mivalue / 0.62137;
}