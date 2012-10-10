/**
 * @author Grigore András Zsolt
 */

define(function(require, exports, module) {
	var paper = require('paper');

	var DigitNumber = require('mds/display/model/DigitNumber');
	var utils = require('mds/utils');
	
	var DisplayController = module.exports = function(config) {
		this.controlPoint = config.controlPoint;
		this.numberGroup = false;
		
		/* init - paperize */
		this.controlPoint = new paper.Point(this.controlPoint);
		//FF needs this
		paper.view.draw();
	};

	DisplayController.prototype.drawDisplay = function() {

	};


	DisplayController.prototype.drawNumber = function(num) {
		var digitsArray = utils.digitsToArray(num);
		
		if (this.numberGroup) {
			this.numberGroup.removeChildren();
		} else {
			this.numberGroup = new paper.Group();
		}
		
		if (digitsArray.length == 1 && digitsArray[0].length == 1) {
			var intNum = parseInt(digitsArray[0][0]);
			// FIXME: size attribute is not handled
			this.numberGroup.addChild(new DigitNumber(intNum, { position: paper.view.center, dilatation: 2}));
		} else {
			alert("More than one digit integers and decimals are not supported yet!");
		}
		
		this.numberGroup.fillColor = '#eb3d00';
		
		paper.view.draw();
	}
});