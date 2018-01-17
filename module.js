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
		var htmlStr = "" ;

		htmlStr += '<div class=nav-container style=top:' + options.position.top +'><ul class="li-list container">';
		for(var i = 0; i < options.anchors.length; i++) {
			if(  typeof options.anchors[i].name  === 'string' ) 
			htmlStr += '<li class=li'+[i]+'><a>' + options.anchors[i].name + '</a></li>';
		};
		htmlStr += '</ul></div><div class=content>';
		for( var i = 0; i < 8; i++){
			htmlStr += '<div class=sec'+ [i] +'>行程特色'+ [i] +'</div>';
		}
		htmlStr += '</div>';
		this.$nvb_gptb.append(htmlStr);

		this.beginShow();
		this.scroll();
		this.onClick();
	};




	Module.prototype.beginShow = function(){
		var options = this.options ;
		var start = this.options.position.start ;
		if( this.options.beginShow ) {
			$('.nav-container').addClass( options.fixedClass ).addClass('d-block');
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
	};



	Module.prototype.onClick = function(){
		var options = this.options ;
		var dropOffset = this.options.dropOffset ;
		var offset = $('.sec1').offset().top;
		for(var i = 0; i < options.anchors.length; i++) {
			$('.li' + i ).on('click',function(){
				var thisLi = $(this).index();
				var moveto = options.anchors[thisLi].moveto ;
				var offset = $('.sec'+ thisLi ).offset().top;
				if( typeof moveto === 'number' ){
					$('html, body').animate({
						scrollTop: (moveto-dropOffset)
					}, 500);
				}else{
					$('html, body').animate({
						scrollTop: (offset-dropOffset)
					}, 500);
				}
			})
		};
	};



	Module.prototype.scroll = function(){
		var options = this.options ;
		var start = this.options.position.start ;
		var dropOffset = this.options.dropOffset ;
		var end = this.options.position.end ;
		$(window).scroll(function(){
			var scrollVal = $(this).scrollTop();
			var newArray = options.anchors.filter(function(obj,index,arr){
				if( typeof obj.moveto === 'string' ){
					var newMoveto = parseInt(obj.moveto)
					return ( scrollVal - (start-dropOffset) < newMoveto)
				}else{
					return ( scrollVal - (start-dropOffset) < obj.moveto )
				}
			});
			var indexList = options.anchors.indexOf(newArray[0]);
				$('.li' + indexList).addClass('active').siblings().removeClass('active');
			if( typeof end === 'number' || typeof end === 'string' || typeof end === 'boolean' ){
				if( typeof end === 'string' ){
					var endNumber = parseInt(end);
					if(scrollVal > endNumber){
						$('.nav-container').removeClass( options.fixedClass ).removeClass('d-block');	
					}
				}else{
					if(scrollVal > end){
						$('.nav-container').removeClass( options.fixedClass ).removeClass('d-block');	
					}
				}
			}else{
				console.log('type error')
			}
		});
	};




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