/**
 * @author Grigore András Zsolt
 */
 
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        mds: '../mds',
        socketio: '../../socket.io/socket.io'
    },
    shim: {
        socketio: {
            /*if has dependencies deps: ['jquery', 'underscore'],*/
            exports: 'io'
        },
        paper: {
            exports: 'paper'
        }
    }
});

require(["mds/display/DisplayController", "mds/utils", "plugins/domReady", "paper", "jquery"],
	function(DisplayController, utils, domReady, paper, $) {
		paper.install(window);
		domReady(function(){
			paper.setup('display');
			
						var number = 0;
			var dc = new DisplayController({controlPoint: [0, 0]});
			
			$("#enterNumber").submit(function(event) {
				var inputNumber = $('#number').val();
				if (utils.isNumber(inputNumber)) {
					try {
						number = utils.repCommaToDot(inputNumber);
						//dc.drawDisplay();
						dc.drawNumber(number);
					} catch (e) {
						console.log(e);
					}
				}
				
				event.preventDefault();
				return false;
			});
			
		});

	}
);

