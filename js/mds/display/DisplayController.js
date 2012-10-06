/**
 * @author Grigore András Zsolt
 */

define(function(require, exports, module) {
	var paper = require('paper');
	var DigitNumber = require('mds/display/model/DigitNumber');
	
	var DisplayController = module.exports = function(config) {
		this.controlPoint = config.controlPoint;
		this.frame = false;
	};

	DisplayController.prototype.drawFrame = function() {
		with (paper) {
			/*var size = new Size(200, 150);
			var frameRect = new Rectangle(this.controlPoint, size);
			var cornerSize = new Size(5, 5);
			this.frame = new Path.RoundRectangle(frameRect, cornerSize);
			this.frame.strokeColor = 'blue';*/
			
			var firstLetter = new DigitNumber(7, { position: view.center, size: [150, 100], dilatation: 4 });
			var secondLetter = new DigitNumber(6, { position: view.center.subtract([75, 0]), size: [150, 100], dilatation: 4 });
			firstLetter.fillColor = '#eb3d00';
			secondLetter.fillColor = '#eb3d00';
			console.log(firstLetter.position);
			firstLetter.scale(0.5);
			firstLetter.shear( -0.1, 0);
			secondLetter.scale(0.5);
			secondLetter.shear( -0.1, 0);
		}
	};

});