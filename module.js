(function($) {
'use strict';

	var ModuleName = 'nvb_gptb';

	var Module = function ( nvb_gptb, options ) {
		this.$nvb_gptb = $(nvb_gptb);
		this.options = options;
	};

	Module.DEFAULTS = {
		beginShow: false,
		anchors: [
		$('.dom'),
		{
			name: '行程特色', 
			moveto: 400 || '400px' || $DOM,
		},
		],
		dropOffset: 60 || '60px',
		fixedClass: 'fixed',
		position: {
			start: 200 || '200px',
			end: 2000 || '2000px' || false,
			top: 0 || '0px'
		}
	};


	Module.prototype.init = function(){
		var options = this.options ;
		var start = this.options.position.start ;
		var end = this.options.position.end ;
		var dropOffset = this.options.dropOffset ;
		var htmlStr = "" ;

		htmlStr += '<div class=nav-container style=top:' + options.position.top +'><ul class="li-list container">';
		for(var i = 0; i < options.anchors.length; i++) {
			if( ( typeof options.anchors[i].name  === 'string') ) 
			htmlStr += '<li class=li'+[i]+'><a>' + options.anchors[i].name + '</a></li>';
		};
		htmlStr += '</ul></div><div class=content>';
		for( var i = 0; i < 8; i++){
			if( ( typeof options.anchors[i].name  === 'string') ) 
			htmlStr += '<div class=sec'+ [i] +'>行程特色'+ [i] +'</div>';
		}
		htmlStr += '</div>';
		this.$nvb_gptb.append(htmlStr);


		for(var i = 0; i < options.anchors.length; i++) {
			$('.li' + [i] ).on('click',function(){
				var $this = $(this).index();
				var moveto = options.anchors[$this].moveto ;
				$('html, body').animate({
					scrollTop: (moveto-dropOffset)
				}, 500);
				$(window).scroll(function(){
				var scrollVal = $(this).scrollTop();
				if( scrollVal > 200 ){
					$('.li' + $this ).addClass('active').siblings().removeClass('active');
				}else{
					console.log(scrollVal)
					console.log(moveto)
				}
				})
			})
		};

		// for(var i = 0; i < options.anchors.length; i++) {
		// 	$(window).scroll(function(){	
		// 	var moveto = options.anchors[i].moveto ;
	 //     	var scrollVal = $(this).scrollTop();
	 //     	console.log(moveto)
		// 	if( scrollVal > moveto ){
		// 		$('.li' + [i] ).addClass('active');
		// 	}else{
		// 		console.log(1);
		// 	}
		// });
		// };



		if( this.options.beginShow ) {
			$('.nav-container').addClass('d-block');
			$(window).scroll(function () {
			    var scrollVal = $(this).scrollTop();
			    if( scrollVal > start ){
			    	$('.nav-container').addClass( options.fixedClass ).addClass('d-block');
			    } else {
			    	$('.nav-container').removeClass( options.fixedClass ).removeClass('d-block');			    	
			    }
			  });
		} else {
			  $(window).scroll(function () {
			    var scrollVal = $(this).scrollTop();
			    if( scrollVal > start ){
			    	$('.nav-container').addClass( options.fixedClass ).addClass('d-block');
			    } else {
			    	$('.nav-container').removeClass( options.fixedClass ).removeClass('d-block');			    	
			    }
			  });
		}
		// this.addBottomLine();
	};


	// Module.prototype.addBottomLine = function(){
	// 	var options = this.options ;

	// 	for(var i = 0; i < options.anchors.length; i++) {
	// 		$(window).scroll(function(){
	// 			console.log($(this).index())
	// 		var $this = $(this).index();	
	// 		var moveto = options.anchors[$this].moveto ;
	//      	var scrollVal = $(this).scrollTop();
	// 		if( scrollVal < moveto ){
	// 			console.log(0)
	// 			$('.li' + [i] ).addClass('active');
	// 		}else{
	// 			console.log(1);
	// 		}
	// 	});
	// 	};
	// };




	$.fn[ModuleName] = function ( options, options2 ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			if ( !!module ) {
				if ( typeof options === 'string' &&  typeof options2 === 'undefined' ) {
					module[options]();
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof options === 'object' && options ), ( typeof options2 === 'object' && options2 ) );
				module = new Module(this, opts);
				$this.data( ModuleName, module );
				module.init();
			}
		});
	};

})(jQuery);