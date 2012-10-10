/**
 * @author Grigore András Zsolt
 */

define(function(require, exports, module) {

	var DigitNumber = require('mds/display/model/DigitNumber');
	var utils = require('mds/utils');
	
	var DisplayController = module.exports = function(config) {
		this.controlPoint = config.controlPoint;
		this.numberGroup = false;
		
		/* init - paperize */
		this.controlPoint = new Point(this.controlPoint);
		//FF needs this
		view.draw();
	};

	DisplayController.prototype.drawDisplay = function() {

	};


	DisplayController.prototype.drawNumber = function(num) {
		var digitsArray = utils.digitsToArray(num);
		
		if (this.numberGroup) {
			this.numberGroup.removeChildren();
		} else {
			this.numberGroup = new Group();
		}
		
		if (digitsArray.length == 1 && digitsArray[0].length == 1) {
			var intNum = parseInt(digitsArray[0][0]);
			// FIXME: size attribute is not handled
			this.numberGroup.addChild(new DigitNumber(intNum, { position: view.center, dilatation: 8}));
		} else {
			alert("More than one digit integers and decimals are not supported yet!");
		}
		
		this.numberGroup.fillColor = '#eb3d00';
		
		view.draw();
	}
});