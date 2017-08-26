/**
 *  The Singleton restricts clients from creating multiple objects, 
 *  after the first object created, it will return instances of itself.
 */

var printer = (function () {

    var printerInstance;

    function create() {
        function print() { }
        function turnOn() { }
        return {
            print: print,
            turnOn: turnOn
        };
    }

    return {
        getInstance: function () {
            if (!printerInstance) {
                printerInstance = create();
            }
            return printerInstance;
        }
    };

    function Singleton() {
        if (!printerInstance) {
            printerInstance = intialize();
        }
    };
})();


//Somewhere else

var officePrinter = printer.getInstance();