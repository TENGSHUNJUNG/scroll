const ModuleName = 'nvb_gptb';
const ModuleDefaults = {
		beginShow: false,
		anchors: [
		{
			name: '行程特色',
			moveto: 400 || '400px' || $(".sec1")
		},
		{
			name: '行程內容',
			moveto: 700 || '700px' || $(".sec2")
		},
		{
			name: '行程備註',
			moveto: 1000 || '1000px' || $(".sec3")
		},
		{
			name: '自費活動',
			moveto: 1300 || '1300px' || $(".sec4")
		},
		{
			name: '活動備註',
			moveto: 1600 || '1600px' || $(".sec5")
		},
		{
			name: '安全守則',
			moveto: 1900 || '1900px' || $(".sec6")
		},
		{
			name: '脫隊規則',
			moveto: 2200 || '2200px' || $(".sec7")
		},
		{
			name: '旅遊資訊',
			moveto: 2500 || '2500px' || $(".sec8")
		},
		],
		dropOffset: 60 || '60px',
		fixedClass: 'fixed',
		position: {
			start: 300 || '300px',
			end:  2800 || '2800px' || true, 
			top: 0 || '0px' 
	}
	};
const ModuleReturns = ['output', 'methods'];
class Module {
	constructor ( nvb_gptb, options ) {
		this.$nvb_gptb = $(nvb_gptb);
		this.options = options;
	}
	init () {
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
		return this;
	}
	beginShow () {
		var options = this.options ;
		var start = parseInt(this.options.position.start) ;
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
		return this;
	}
	onClick () {
		var options = this.options ;
		var dropOffset = parseInt(this.options.dropOffset) ;
		var offset = $('.sec1').offset().top;
		for(var i = 0; i < options.anchors.length; i++) {
			$('.li-list .li' + i ).on('click',function(){
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
		return this;
	}
	scroll () {
		var options = this.options ;
		var start = parseInt(this.options.position.start) ;
		var dropOffset = parseInt(this.options.dropOffset) ;
		var end = parseInt(this.options.position.end) ;
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
				$('.li-list .li'  + indexList).addClass('active').siblings().removeClass('active');
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
			return this;
		});
	}
	};
export { ModuleName, ModuleDefaults,ModuleReturns, Module };