/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(4);

var root = function (root) {
	if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
		return root;
	}
}(self || global || {});

var $ = function ($) {
	if (typeof $ === 'function') {
		return $;
	} else {
		throw 'You must import jQuery';
	}
}(root.jQuery);

$.fn[_module.ModuleName] = function () {
	var module = void 0;
	var args = Array.prototype.slice.call(arguments, 0);
	var method = args[0];
	var options = args.slice(1).length <= 0 ? undefined : args.slice(1, args.length);;
	var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
	var methodRunner = function methodRunner(method, options, uesReturn) {
		var $this = $(this);
		var module = $this.data(_module.ModuleName);
		if (!!module) {
			if (typeof method == 'string' && !uesReturn) {
				module[method].apply(module, options);
			} else if (typeof method == 'string' && !!uesReturn) {
				return module[method].apply(module, options);
			} else {
				throw 'unsupported options!';
			}
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if (isReturnMethod) {
		return methodRunner.call(this, method, options, isReturnMethod);
	} else {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(_module.ModuleName);
			var opts = null;
			if (!!module) {
				methodRunner.call(this, method, options);
			} else {
				opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
				module = new _module.Module(this, opts);
				$this.data(_module.ModuleName, module);
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleName = 'nvb_gptb';
var ModuleDefaults = {
	beginShow: false,
	anchors: [{
		name: '行程特色',
		moveto: 400 || '400px' || $(".sec1")
	}, {
		name: '行程內容',
		moveto: 700 || '700px' || $(".sec2")
	}, {
		name: '行程備註',
		moveto: 1000 || '1000px' || $(".sec3")
	}, {
		name: '自費活動',
		moveto: 1300 || '1300px' || $(".sec4")
	}, {
		name: '活動備註',
		moveto: 1600 || '1600px' || $(".sec5")
	}, {
		name: '安全守則',
		moveto: 1900 || '1900px' || $(".sec6")
	}, {
		name: '脫隊規則',
		moveto: 2200 || '2200px' || $(".sec7")
	}, {
		name: '旅遊資訊',
		moveto: 2500 || '2500px' || $(".sec8")
	}],
	dropOffset: 60 || '60px',
	fixedClass: 'fixed',
	position: {
		start: 300 || '300px',
		end: 2800 || '2800px' || true,
		top: 0 || '0px'
	}
};
var ModuleReturns = ['output', 'methods'];

var Module = function () {
	function Module(nvb_gptb, options) {
		_classCallCheck(this, Module);

		this.$nvb_gptb = $(nvb_gptb);
		this.options = options;
	}

	_createClass(Module, [{
		key: 'init',
		value: function init() {
			var options = this.options;
			var htmlStr = "";

			htmlStr += '<div class=nav-container style=top:' + options.position.top + '><ul class="li-list container">';
			for (var i = 0; i < options.anchors.length; i++) {
				if (typeof options.anchors[i].name === 'string') htmlStr += '<li class=li' + [i] + '><a>' + options.anchors[i].name + '</a></li>';
			};
			htmlStr += '</ul></div><div class=content>';
			for (var i = 0; i < 8; i++) {
				htmlStr += '<div class=sec' + [i] + '>行程特色' + [i] + '</div>';
			}
			htmlStr += '</div>';
			this.$nvb_gptb.append(htmlStr);

			this.beginShow();
			this.scroll();
			this.onClick();
			return this;
		}
	}, {
		key: 'beginShow',
		value: function beginShow() {
			var options = this.options;
			var start = parseInt(this.options.position.start);
			if (this.options.beginShow) {
				$('.nav-container').addClass(options.fixedClass).addClass('d-block');
			} else {
				$(window).scroll(function () {
					var scrollVal = $(this).scrollTop();
					if (scrollVal > start) {
						$('.nav-container').addClass(options.fixedClass).addClass('d-block');
					} else {
						$('.nav-container').removeClass(options.fixedClass).removeClass('d-block');
					}
				});
			}
			return this;
		}
	}, {
		key: 'onClick',
		value: function onClick() {
			var options = this.options;
			var dropOffset = parseInt(this.options.dropOffset);
			var offset = $('.sec1').offset().top;
			for (var i = 0; i < options.anchors.length; i++) {
				$('.li-list .li' + i).on('click', function () {
					var thisLi = $(this).index();
					var moveto = options.anchors[thisLi].moveto;
					var offset = $('.sec' + thisLi).offset().top;
					if (typeof moveto === 'number') {
						$('html, body').animate({
							scrollTop: moveto - dropOffset
						}, 500);
					} else {
						$('html, body').animate({
							scrollTop: offset - dropOffset
						}, 500);
					}
				});
			};
			return this;
		}
	}, {
		key: 'scroll',
		value: function scroll() {
			var options = this.options;
			var start = parseInt(this.options.position.start);
			var dropOffset = parseInt(this.options.dropOffset);
			var end = parseInt(this.options.position.end);
			$(window).scroll(function () {
				var scrollVal = $(this).scrollTop();
				var newArray = options.anchors.filter(function (obj, index, arr) {
					if (typeof obj.moveto === 'string') {
						var newMoveto = parseInt(obj.moveto);
						return scrollVal - (start - dropOffset) < newMoveto;
					} else {
						return scrollVal - (start - dropOffset) < obj.moveto;
					}
				});
				var indexList = options.anchors.indexOf(newArray[0]);
				$('.li-list .li' + indexList).addClass('active').siblings().removeClass('active');
				if (typeof end === 'number' || typeof end === 'string' || typeof end === 'boolean') {
					if (typeof end === 'string') {
						var endNumber = parseInt(end);
						if (scrollVal > endNumber) {
							$('.nav-container').removeClass(options.fixedClass).removeClass('d-block');
						}
					} else {
						if (scrollVal > end) {
							$('.nav-container').removeClass(options.fixedClass).removeClass('d-block');
						}
					}
				} else {
					console.log('type error');
				}
				return this;
			});
		}
	}]);

	return Module;
}();

;
exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);