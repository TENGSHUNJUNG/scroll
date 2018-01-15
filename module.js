(function($) {
'use strict';

	var ModuleName = 'nvb_gptb';

	var Module = function ( nvb_gptb, options ) {
		this.$nvb_gptb = $(nvb_gptb);
		this.options = options;
	};

	Module.DEFAULTS = {
		beginShow: false,
		class: {
			main: 'nav-container',
			ul: {
				li_list: 'li-list container',
				li: 'li'
			}
		},
		anchors: [
		$('.dom'),
		{
			name: '行程特色', 
			moveto: 0 || '0px' || $DOM,
		},
		],
		dropOffset: 0 || '0px',
		fixedClass: 'fixed',
		position: {
			start: 0 || '0px',
			end: 0 || '0px' || false,
			top: 0 || '0px'
		}
	};


	Module.prototype.init = function(){
		this.create();
	};


	Module.prototype.create = function(){
		var options = this.options
		var start = this.options.position.start
		var end = this.options.position.end
		var htmlStr = "";
		// this.$nvb_gptb.append('<div class="' + options.class.main + '" style=top:' + options.position.top +'><ul class="' + options.class.ul.li_list + '">');
		// for(var i = 1; i < options.anchors.length; i++) {
		// 	this.$nvb_gptb.append('<li><a  >' + options.anchors[i].name + '</a></li>');
		// }
		// this.$nvb_gptb.append('</ul></div><div class=content><div class=sec1>'+ options.anchors[1].name +'</div><div class=sec2>'+ options.anchors[2].name +'</div><div class=sec3>'+ options.anchors[3].name +'</div><div class=sec4>'+ options.anchors[4].name +'</div><div class=sec5>'+ options.anchors[5].name +'</div><div class=sec6>'+ options.anchors[6].name +'</div><div class=sec7>'+ options.anchors[7].name +'</div><div class=sec8>'+ options.anchors[8].name +'</div></div>');

		htmlStr += '<div class="' + options.class.main + '" style=top:' + options.position.top +'><ul class="' + options.class.ul.li_list + '">';
		for(var i = 1; i < options.anchors.length; i++) {
			htmlStr += '<li><a  >' + options.anchors[i].name + '</a></li>';
		}
		htmlStr += '</ul></div><div class=content><div class=sec1>'+ options.anchors[1].name +'</div><div class=sec2>'+ options.anchors[2].name +'</div><div class=sec3>'+ options.anchors[3].name +'</div><div class=sec4>'+ options.anchors[4].name +'</div><div class=sec5>'+ options.anchors[5].name +'</div><div class=sec6>'+ options.anchors[6].name +'</div><div class=sec7>'+ options.anchors[7].name +'</div><div class=sec8>'+ options.anchors[8].name +'</div></div>';
		
		this.$nvb_gptb.append(htmlStr);

		$('li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		if( this.options.beginShow ) {
			$('.' + options.class.main ).addClass('d-block');
		} else {
			  $(window).scroll(function () {
			    var scrollVal = $(this).scrollTop();
			    if( scrollVal > start ){
			    	$('.' + options.class.main ).addClass('fixed').addClass('d-block');
			    } else {
			    	$('.' + options.class.main ).removeClass('fixed').removeClass('d-block');			    	
			    }
			  });
		}
	};


	$.fn[ModuleName] = function ( method, options ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' ) {
					module[method](options);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new Module(this, opts);
				$this.data( ModuleName, module );
				module.init();
			}
		});
	};

})(jQuery);