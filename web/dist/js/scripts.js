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

eval("$(document).ready(function () {\n  //megamenu\n  $('.main-nav').accessibleMegaMenu();\n  $('.nav-item a').mouseenter(function () {\n    $(this).addClass('open').next().addClass('open');\n  });\n  $('.nav-item').mouseleave(function () {\n    $('.nav-item a').removeClass('open').next().removeClass('open');\n  }); //homepage carousel\n\n  $('.c-home__carousel__container').slick({\n    infinite: true,\n    slidesToShow: 6,\n    centerMode: true,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    prevArrow: '<button type=\"button\" class=\"slick-prev\">&#8249;</button>',\n    nextArrow: '<button type=\"button\" class=\"slick-next\">&#8250;</button>',\n    responsive: [{\n      breakpoint: 1025,\n      settings: {\n        slidesToShow: 4\n      }\n    }, {\n      breakpoint: 769,\n      settings: {\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 641,\n      settings: {\n        slidesToShow: 2\n      }\n    }]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0cy5qcz9hMzA0Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWNjZXNzaWJsZU1lZ2FNZW51IiwibW91c2VlbnRlciIsImFkZENsYXNzIiwibmV4dCIsIm1vdXNlbGVhdmUiLCJyZW1vdmVDbGFzcyIsInNsaWNrIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJjZW50ZXJNb2RlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUV6QjtBQUNBRixHQUFDLENBQUMsV0FBRCxDQUFELENBQWVHLGtCQUFmO0FBRUFILEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJJLFVBQWpCLENBQTRCLFlBQVc7QUFDbkNKLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssUUFBUixDQUFpQixNQUFqQixFQUF5QkMsSUFBekIsR0FBZ0NELFFBQWhDLENBQXlDLE1BQXpDO0FBQ0gsR0FGRDtBQUlBTCxHQUFDLENBQUMsV0FBRCxDQUFELENBQWVPLFVBQWYsQ0FBMEIsWUFBVztBQUNqQ1AsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlEsV0FBakIsQ0FBNkIsTUFBN0IsRUFBcUNGLElBQXJDLEdBQTRDRSxXQUE1QyxDQUF3RCxNQUF4RDtBQUNILEdBRkQsRUFUeUIsQ0FjekI7O0FBQ0FSLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDUyxLQUFsQyxDQUF3QztBQUNwQ0MsWUFBUSxFQUFFLElBRDBCO0FBRXBDQyxnQkFBWSxFQUFFLENBRnNCO0FBR3BDQyxjQUFVLEVBQUUsSUFId0I7QUFJcENDLFlBQVEsRUFBRSxJQUowQjtBQUtwQ0MsaUJBQWEsRUFBRSxJQUxxQjtBQU1wQ0MsYUFBUyxFQUFFLDJEQU55QjtBQU9wQ0MsYUFBUyxFQUFFLDJEQVB5QjtBQVFwQ0MsY0FBVSxFQUFFLENBQ1I7QUFDSUMsZ0JBQVUsRUFBRSxJQURoQjtBQUVJQyxjQUFRLEVBQUU7QUFDTlIsb0JBQVksRUFBRTtBQURSO0FBRmQsS0FEUSxFQU9SO0FBQ0lPLGdCQUFVLEVBQUUsR0FEaEI7QUFFSUMsY0FBUSxFQUFFO0FBQ05SLG9CQUFZLEVBQUU7QUFEUjtBQUZkLEtBUFEsRUFhUjtBQUNJTyxnQkFBVSxFQUFFLEdBRGhCO0FBRUlDLGNBQVEsRUFBRTtBQUNOUixvQkFBWSxFQUFFO0FBRFI7QUFGZCxLQWJRO0FBUndCLEdBQXhDO0FBNkJILENBNUNEIiwiZmlsZSI6Ii4vc3JjL2pzL3NjcmlwdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vbWVnYW1lbnVcbiAgICAkKCcubWFpbi1uYXYnKS5hY2Nlc3NpYmxlTWVnYU1lbnUoKTtcblxuICAgICQoJy5uYXYtaXRlbSBhJykubW91c2VlbnRlcihmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuXG4gICAgJCgnLm5hdi1pdGVtJykubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLm5hdi1pdGVtIGEnKS5yZW1vdmVDbGFzcygnb3BlbicpLm5leHQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuXG5cbiAgICAvL2hvbWVwYWdlIGNhcm91c2VsXG4gICAgJCgnLmMtaG9tZV9fY2Fyb3VzZWxfX2NvbnRhaW5lcicpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPiYjODI0OTs8L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj4mIzgyNTA7PC9idXR0b24+JyxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjksXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2NDEsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/scripts.js\n");

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