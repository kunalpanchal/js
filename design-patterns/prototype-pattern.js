//Prototype Pattern

var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype = {
    go: function () { },
    stop: function () { }
}



//Revealing Prototype Pattern
var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype = function () {
    
    var go = function () { };
    var stop = function () { };

    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    }
}();