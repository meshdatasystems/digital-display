/**
 * @author Grigore András Zsolt
 */

define(function(require, exports, module) {
	
	exports.redirectTo = function(e, path) {
		window.location = path;
	};
	
	exports.isNumber = function(input) {
		if (typeof (input) === 'string') {
			input = this.repCommaToDot(input);
		}
		return !isNaN(parseFloat(input)) && isFinite(input);
	};
	
	exports.repCommaToDot = function(str) {
	 return str.replace(/,/, ".");
	};

	exports.digitsToArray = function(n) {
		var intAndDecimal = n.toString().split('.');
		if (this.isInt(n)) {
			return [intAndDecimal[0].split('')];
		}
		return [intAndDecimal[0].split(''), intAndDecimal[1].split('')];
	};
	
	exports.isInt = function(n) {
		return n % 1 === 0;
	}
});