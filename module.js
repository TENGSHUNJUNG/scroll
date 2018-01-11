(function($) {
'use strict';

	var ModuleName = 'nvb_gptb';

	var Module = function ( nvb_gptb, options ) {
		this.$nvb_gptb = $(nvb_gptb);
		this.options = options;
	};



	Module.DEFAULTS = {

	};


	Module.prototype.init = function(){
		this.create();
	};


	Module.prototype.create = function(){
		var options = this.options
		this.$nvb_gptb.append('<div class="' + options.class.main + '" ><ul class="' + options.class.ul.li_list + '"><li><a href=""></a></li></ul></div>');
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