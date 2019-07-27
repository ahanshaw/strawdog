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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  //megamenu\n  $('.main-nav').accessibleMegaMenu();\n  $('.nav-item a').mouseenter(function () {\n    $(this).addClass('open').next().addClass('open');\n  });\n  $('.nav-item').mouseleave(function () {\n    $('.nav-item a').removeClass('open').next().removeClass('open');\n  }); //homepage carousel\n\n  $('.c-home__carousel__container').slick({\n    infinite: true,\n    slidesToShow: 6,\n    centerMode: true,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    prevArrow: '<button type=\"button\" class=\"slick-prev\">&#8249;</button>',\n    nextArrow: '<button type=\"button\" class=\"slick-next\">&#8250;</button>'\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0cy5qcz9hMzA0Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWNjZXNzaWJsZU1lZ2FNZW51IiwibW91c2VlbnRlciIsImFkZENsYXNzIiwibmV4dCIsIm1vdXNlbGVhdmUiLCJyZW1vdmVDbGFzcyIsInNsaWNrIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJjZW50ZXJNb2RlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicHJldkFycm93IiwibmV4dEFycm93Il0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBRXpCO0FBQ0FGLEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUcsa0JBQWY7QUFFQUgsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkksVUFBakIsQ0FBNEIsWUFBVztBQUNuQ0osS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxRQUFSLENBQWlCLE1BQWpCLEVBQXlCQyxJQUF6QixHQUFnQ0QsUUFBaEMsQ0FBeUMsTUFBekM7QUFDSCxHQUZEO0FBSUFMLEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU8sVUFBZixDQUEwQixZQUFXO0FBQ2pDUCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUSxXQUFqQixDQUE2QixNQUE3QixFQUFxQ0YsSUFBckMsR0FBNENFLFdBQTVDLENBQXdELE1BQXhEO0FBQ0gsR0FGRCxFQVR5QixDQWN6Qjs7QUFDQVIsR0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NTLEtBQWxDLENBQXdDO0FBQ3BDQyxZQUFRLEVBQUUsSUFEMEI7QUFFcENDLGdCQUFZLEVBQUUsQ0FGc0I7QUFHcENDLGNBQVUsRUFBRSxJQUh3QjtBQUlwQ0MsWUFBUSxFQUFFLElBSjBCO0FBS3BDQyxpQkFBYSxFQUFFLElBTHFCO0FBTXBDQyxhQUFTLEVBQUUsMkRBTnlCO0FBT3BDQyxhQUFTLEVBQUU7QUFQeUIsR0FBeEM7QUFTSCxDQXhCRCIsImZpbGUiOiIuL3NyYy9qcy9zY3JpcHRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvL21lZ2FtZW51XG4gICAgJCgnLm1haW4tbmF2JykuYWNjZXNzaWJsZU1lZ2FNZW51KCk7XG5cbiAgICAkKCcubmF2LWl0ZW0gYScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoJy5uYXYtaXRlbScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5uYXYtaXRlbSBhJykucmVtb3ZlQ2xhc3MoJ29wZW4nKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuXG4gICAgLy9ob21lcGFnZSBjYXJvdXNlbFxuICAgICQoJy5jLWhvbWVfX2Nhcm91c2VsX19jb250YWluZXInKS5zbGljayh7XG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj4mIzgyNDk7PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+JiM4MjUwOzwvYnV0dG9uPicsXG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/scripts.js\n");

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./src/js/scripts.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/angela/Sites/strawdog/src/js/scripts.js */"./src/js/scripts.js");


/***/ })

/******/ });