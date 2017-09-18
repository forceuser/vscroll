(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VScroll"] = factory();
	else
		root["VScroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function toDOM(html) {
	var div = document.createElement("div");
	div.innerHTML = html;
	return [].concat(_toConsumableArray(div.childNodes));
}

function line(x, x1, y1, x2, y2) {
	return (x - x1) / (x2 - x1) * (y2 - y1) + y1;
}

function intersect(rect1, rect2) {
	return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

function getViewport() {
	return {
		left: 0,
		right: window.innerWidth || document.documentElement.clientWidth,
		top: 0,
		bottom: window.innerHeight || document.documentElement.clientHeight
	};
}

function inTopViewport(el) {
	if (el instanceof $) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	var viewport = getViewport();
	return rect.top < viewport.top && rect.bottom > viewport.top && !(rect.right < viewport.left || rect.left > viewport.right);
}

function inViewport(el) {
	var rect = el.getBoundingClientRect();
	var viewport = getViewport();
	return intersect(rect, viewport);
}

var VirtualScroll = function () {
	function VirtualScroll(scrollContainer, createElement) {
		_classCallCheck(this, VirtualScroll);

		this.scrollContainer = scrollContainer;
		this.placeholder = toDOM("<div></div>")[0];
		this.placeholder.appendTo(scrollContainer);
		this.container = toDOM("<div></div>")[0];
		this.container.appendTo(scrollContainer);
		this.createElement = createElement;
		this.buffer = [];
		this.idx = 0;
	}

	_createClass(VirtualScroll, [{
		key: "isFilled",
		value: function isFilled() {
			var rect = this.container.getBoundingClientRect();
		}
	}, {
		key: "update",
		value: function update() {
			// заполняем видимую область скроллера

			// вычисляем средний размер элемента

			// вычисляем полную высоту скроллера
			function bufferFilled() {}
		}
	}, {
		key: "size",
		set: function set(val) {
			this._size = val;
			this.update;
		}
	}]);

	return VirtualScroll;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vscroll.js.map