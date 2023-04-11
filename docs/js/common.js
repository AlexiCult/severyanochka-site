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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(6));

// requireAll(require.context('./', true, /\.(js|less|png|jpe?g|gif)$/));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(5);

__webpack_require__(0);

__webpack_require__(16);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
// require("expose-loader?$!expose-loader?jQuery!jquery");

// flexslider
// require("./flexslider2/flexslider.css")
// require("expose-loader?flexslider!./flexslider2");

// parallax
// require("expose-loader?parallax!jquery-parallax.js");

// plax параллакс эффект
// require("plax");

// wow.js
// require("expose-loader?WOW!wow.js");

// animate.css
// require("animate.css/animate.css");

// blueimp gallery https://github.com/blueimp/Gallery
// require("blueimp-gallery/css/blueimp-gallery.min.css");
// require("expose-loader?blueimp.Gallery!blueimp-gallery/js/blueimp-gallery.min.js");


// slick-carousel
// require("slick-carousel/slick/slick.css");
// require("slick-carousel/slick/slick-theme.css");
// require("expose-loader?slick!slick-carousel");

// swiper slider
// require("swiper/dist/css/swiper.css");
// require("expose-loader?Swiper!swiper/dist/js/swiper.js");

// vue.js
// import Vue from 'vue';
// window.Vue = Vue;


// magnific-popup
// require("magnific-popup/dist/magnific-popup.css");
// require("expose-loader?magnificPopup!magnific-popup/dist/jquery.magnific-popup.js");

// jquery ui slider
// require('jquery-ui-css/slider.css');
// require("expose-loader?slider!jquery-ui/slider");

// jquery ui tabs
// require('jquery-ui-css/tabs.css');
// require("expose-loader?slider!jquery-ui/tabs");

// touch support for jquery ui
// require("jquery-ui-touch-punch");

// highslide
// require("expose-loader?hs!./highslide/highslide/highslide-with-gallery.js");
// // let hs = require("./highslide/highslide/highslide-with-gallery.js");
// // window.hs = hs;
// require("./highslide/highslide/highslide.css");

// lightbox
// require("lightbox2");
// require("lightbox2/dist/css/lightbox.css");

// normalize.css
__webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./articles/articles.less": 7,
	"./banners/banners.less": 8,
	"./footer/footer.less": 9,
	"./header/header.js": 10,
	"./header/header.less": 11,
	"./index.js": 0,
	"./our-stores/our-stores.js": 12,
	"./our-stores/our-stores.less": 13,
	"./promotions/promotions.less": 14,
	"./special-offers/special-offers.less": 15
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var catalogBtn = document.querySelector('.header__catalog-btn');
var catalogDropdown = document.querySelector('.catalog__dropdown');
var dropdownItem = document.querySelectorAll('.dropdown__item');

catalogBtn.addEventListener('click', function () {
  catalogDropdown.classList.toggle('visible');
  dropdownItem.forEach(function (el) {
    return el.classList.toggle('unrotated');
  });
});

catalogBtn.addEventListener('blur', function () {
  catalogDropdown.classList.remove('visible');
  dropdownItem.forEach(function (el) {
    return el.classList.remove('unrotated');
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ourStoreBtns = document.querySelectorAll('.our-stores__btn');
var ourStoreMaps = document.querySelectorAll('.our-stores__map');

function changeMap(event) {
  ourStoreBtns.forEach(function (btn) {
    btn.classList.remove('active-map-btn');
    event.target.classList.add('active-map-btn');
  });
  ourStoreMaps.forEach(function (map) {
    map.classList.remove('active-map');
  });
  var currentMapID = event.target.id.slice(0, -4) + '-map';
  document.getElementById(currentMapID).classList.add('active-map');
}

ourStoreBtns.forEach(function (btn) {
  return btn.addEventListener('click', changeMap);
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(17));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 17;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjI5NjMwYzhhYmYyZDU2Mzk1YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVzcy9zdHlsZXMubGVzcz8wZjk1Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzIFxcLihqc3xsZXNzKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvYXJ0aWNsZXMvYXJ0aWNsZXMubGVzcz8zOGYyIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2Jhbm5lcnMvYmFubmVycy5sZXNzPzFmY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvZm9vdGVyL2Zvb3Rlci5sZXNzPzMyYzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9oZWFkZXIvaGVhZGVyLmxlc3M/Yzk2NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9vdXItc3RvcmVzL291ci1zdG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3Mvb3VyLXN0b3Jlcy9vdXItc3RvcmVzLmxlc3M/ZDY3YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubGVzcz82NDNkIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL3NwZWNpYWwtb2ZmZXJzL3NwZWNpYWwtb2ZmZXJzLmxlc3M/YWYwOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9zdmctc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnIFxcLnN2ZyQiXSwibmFtZXMiOlsicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJjYXRhbG9nQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2F0YWxvZ0Ryb3Bkb3duIiwiZHJvcGRvd25JdGVtIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJlbCIsInJlbW92ZSIsIm91clN0b3JlQnRucyIsIm91clN0b3JlTWFwcyIsImNoYW5nZU1hcCIsImV2ZW50IiwiYnRuIiwidGFyZ2V0IiwiYWRkIiwibWFwIiwiY3VycmVudE1hcElEIiwiaWQiLCJzbGljZSIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7QUM3REEsU0FBU0EsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFBRUEsSUFBRUMsSUFBRixHQUFTQyxPQUFULENBQWlCRixDQUFqQjtBQUFzQjs7QUFFL0NELFdBQVdJLHNCQUFYOztBQUVBLHlFOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBQ0E7O0FBRUE7O0FBQ0Esd0I7Ozs7Ozs7OztBQ0pBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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QXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLDRCIiwiZmlsZSI6ImpzL2NvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMjk2MzBjOGFiZjJkNTYzOTViZCIsImZ1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XG5cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4oanN8bGVzcykkLykpO1xuXG4vLyByZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKGpzfGxlc3N8cG5nfGpwZT9nfGdpZikkLykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvaW5kZXguanMiLCJpbXBvcnQgJ0AvdmVuZG9yJztcbmltcG9ydCAnQC9sZXNzL3N0eWxlcy5sZXNzJztcbi8vIGltcG9ydCAnQC92dWUvaW5kZXgnO1xuaW1wb3J0ICdAL2NvbW1vbi5ibG9ja3MvaW5kZXgnO1xuaW1wb3J0ICdAL2Fzc2V0cy9zdmcvc3ZnLXNwcml0ZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/JCFleHBvc2UtbG9hZGVyP2pRdWVyeSFqcXVlcnlcIik7XG5cbi8vIGZsZXhzbGlkZXJcbi8vIHJlcXVpcmUoXCIuL2ZsZXhzbGlkZXIyL2ZsZXhzbGlkZXIuY3NzXCIpXG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9mbGV4c2xpZGVyIS4vZmxleHNsaWRlcjJcIik7XG5cbi8vIHBhcmFsbGF4XG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9wYXJhbGxheCFqcXVlcnktcGFyYWxsYXguanNcIik7XG5cbi8vIHBsYXgg0L/QsNGA0LDQu9C70LDQutGBINGN0YTRhNC10LrRglxuLy8gcmVxdWlyZShcInBsYXhcIik7XG5cbi8vIHdvdy5qc1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/V09XIXdvdy5qc1wiKTtcblxuLy8gYW5pbWF0ZS5jc3Ncbi8vIHJlcXVpcmUoXCJhbmltYXRlLmNzcy9hbmltYXRlLmNzc1wiKTtcblxuLy8gYmx1ZWltcCBnYWxsZXJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0dhbGxlcnlcbi8vIHJlcXVpcmUoXCJibHVlaW1wLWdhbGxlcnkvY3NzL2JsdWVpbXAtZ2FsbGVyeS5taW4uY3NzXCIpO1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/Ymx1ZWltcC5HYWxsZXJ5IWJsdWVpbXAtZ2FsbGVyeS9qcy9ibHVlaW1wLWdhbGxlcnkubWluLmpzXCIpO1xuXG5cbi8vIHNsaWNrLWNhcm91c2VsXG4vLyByZXF1aXJlKFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCIpO1xuLy8gcmVxdWlyZShcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiKTtcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP3NsaWNrIXNsaWNrLWNhcm91c2VsXCIpO1xuXG4vLyBzd2lwZXIgc2xpZGVyXG4vLyByZXF1aXJlKFwic3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5jc3NcIik7XG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9Td2lwZXIhc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzXCIpO1xuXG4vLyB2dWUuanNcbi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJztcbi8vIHdpbmRvdy5WdWUgPSBWdWU7XG5cblxuLy8gbWFnbmlmaWMtcG9wdXBcbi8vIHJlcXVpcmUoXCJtYWduaWZpYy1wb3B1cC9kaXN0L21hZ25pZmljLXBvcHVwLmNzc1wiKTtcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP21hZ25pZmljUG9wdXAhbWFnbmlmaWMtcG9wdXAvZGlzdC9qcXVlcnkubWFnbmlmaWMtcG9wdXAuanNcIik7XG5cbi8vIGpxdWVyeSB1aSBzbGlkZXJcbi8vIHJlcXVpcmUoJ2pxdWVyeS11aS1jc3Mvc2xpZGVyLmNzcycpO1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/c2xpZGVyIWpxdWVyeS11aS9zbGlkZXJcIik7XG5cbi8vIGpxdWVyeSB1aSB0YWJzXG4vLyByZXF1aXJlKCdqcXVlcnktdWktY3NzL3RhYnMuY3NzJyk7XG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9zbGlkZXIhanF1ZXJ5LXVpL3RhYnNcIik7XG5cbi8vIHRvdWNoIHN1cHBvcnQgZm9yIGpxdWVyeSB1aVxuLy8gcmVxdWlyZShcImpxdWVyeS11aS10b3VjaC1wdW5jaFwiKTtcblxuLy8gaGlnaHNsaWRlXG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9ocyEuL2hpZ2hzbGlkZS9oaWdoc2xpZGUvaGlnaHNsaWRlLXdpdGgtZ2FsbGVyeS5qc1wiKTtcbi8vIC8vIGxldCBocyA9IHJlcXVpcmUoXCIuL2hpZ2hzbGlkZS9oaWdoc2xpZGUvaGlnaHNsaWRlLXdpdGgtZ2FsbGVyeS5qc1wiKTtcbi8vIC8vIHdpbmRvdy5ocyA9IGhzO1xuLy8gcmVxdWlyZShcIi4vaGlnaHNsaWRlL2hpZ2hzbGlkZS9oaWdoc2xpZGUuY3NzXCIpO1xuXG4vLyBsaWdodGJveFxuLy8gcmVxdWlyZShcImxpZ2h0Ym94MlwiKTtcbi8vIHJlcXVpcmUoXCJsaWdodGJveDIvZGlzdC9jc3MvbGlnaHRib3guY3NzXCIpO1xuXG4vLyBub3JtYWxpemUuY3NzXG5yZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZW5kb3IvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xlc3Mvc3R5bGVzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2FydGljbGVzL2FydGljbGVzLmxlc3NcIjogNyxcblx0XCIuL2Jhbm5lcnMvYmFubmVycy5sZXNzXCI6IDgsXG5cdFwiLi9mb290ZXIvZm9vdGVyLmxlc3NcIjogOSxcblx0XCIuL2hlYWRlci9oZWFkZXIuanNcIjogMTAsXG5cdFwiLi9oZWFkZXIvaGVhZGVyLmxlc3NcIjogMTEsXG5cdFwiLi9pbmRleC5qc1wiOiAwLFxuXHRcIi4vb3VyLXN0b3Jlcy9vdXItc3RvcmVzLmpzXCI6IDEyLFxuXHRcIi4vb3VyLXN0b3Jlcy9vdXItc3RvcmVzLmxlc3NcIjogMTMsXG5cdFwiLi9wcm9tb3Rpb25zL3Byb21vdGlvbnMubGVzc1wiOiAxNCxcblx0XCIuL3NwZWNpYWwtb2ZmZXJzL3NwZWNpYWwtb2ZmZXJzLmxlc3NcIjogMTVcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA2O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MgXFwuKGpzfGxlc3MpJFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvYXJ0aWNsZXMvYXJ0aWNsZXMubGVzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvYmFubmVycy9iYW5uZXJzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24uYmxvY2tzL2Zvb3Rlci9mb290ZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBjYXRhbG9nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2F0YWxvZy1idG4nKTtcclxuY29uc3QgY2F0YWxvZ0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX2Ryb3Bkb3duJyk7XHJcbmNvbnN0IGRyb3Bkb3duSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faXRlbScpO1xyXG5cclxuY2F0YWxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjYXRhbG9nRHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG4gIGRyb3Bkb3duSXRlbS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Vucm90YXRlZCcpKTtcclxufSk7XHJcblxyXG5jYXRhbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgY2F0YWxvZ0Ryb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICBkcm9wZG93bkl0ZW0uZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCd1bnJvdGF0ZWQnKSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uLmJsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24uYmxvY2tzL2hlYWRlci9oZWFkZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgb3VyU3RvcmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm91ci1zdG9yZXNfX2J0bicpO1xyXG5jb25zdCBvdXJTdG9yZU1hcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3VyLXN0b3Jlc19fbWFwJyk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VNYXAoZXZlbnQpIHtcclxuICBvdXJTdG9yZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1hcC1idG4nKTtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbWFwLWJ0bicpO1xyXG4gIH0pO1xyXG4gIG91clN0b3JlTWFwcy5mb3JFYWNoKChtYXApID0+IHtcclxuICAgIG1hcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbWFwJyk7XHJcbiAgfSk7XHJcbiAgY29uc3QgY3VycmVudE1hcElEID0gYCR7ZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIC00KX0tbWFwYDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50TWFwSUQpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1tYXAnKTtcclxufVxyXG5cclxub3VyU3RvcmVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZU1hcCkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uLmJsb2Nrcy9vdXItc3RvcmVzL291ci1zdG9yZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3Mvb3VyLXN0b3Jlcy9vdXItc3RvcmVzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tbW9uLmJsb2Nrcy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubGVzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24uYmxvY2tzL3NwZWNpYWwtb2ZmZXJzL3NwZWNpYWwtb2ZmZXJzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XG5cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC5zdmckLykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zdmcvc3ZnLXNwcml0ZS5qcyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gMTc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N2ZyBcXC5zdmckXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9