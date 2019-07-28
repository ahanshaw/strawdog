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

eval("$(document).ready(function () {\n  //megamenu\n  $('.main-nav').accessibleMegaMenu(); //homepage carousel\n\n  $('.c-home__carousel__container').slick({\n    infinite: true,\n    slidesToShow: 6,\n    centerMode: true,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    prevArrow: '<button type=\"button\" class=\"slick-prev\">&#8249;</button>',\n    nextArrow: '<button type=\"button\" class=\"slick-next\">&#8250;</button>',\n    responsive: [{\n      breakpoint: 1025,\n      settings: {\n        slidesToShow: 4\n      }\n    }, {\n      breakpoint: 769,\n      settings: {\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 641,\n      settings: {\n        slidesToShow: 2\n      }\n    }]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0cy5qcz9hMzA0Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWNjZXNzaWJsZU1lZ2FNZW51Iiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBRXpCO0FBQ0FGLEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUcsa0JBQWYsR0FIeUIsQ0FLekI7O0FBQ0FILEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDSSxLQUFsQyxDQUF3QztBQUNwQ0MsWUFBUSxFQUFFLElBRDBCO0FBRXBDQyxnQkFBWSxFQUFFLENBRnNCO0FBR3BDQyxjQUFVLEVBQUUsSUFId0I7QUFJcENDLFlBQVEsRUFBRSxJQUowQjtBQUtwQ0MsaUJBQWEsRUFBRSxJQUxxQjtBQU1wQ0MsYUFBUyxFQUFFLDJEQU55QjtBQU9wQ0MsYUFBUyxFQUFFLDJEQVB5QjtBQVFwQ0MsY0FBVSxFQUFFLENBQ1I7QUFDSUMsZ0JBQVUsRUFBRSxJQURoQjtBQUVJQyxjQUFRLEVBQUU7QUFDTlIsb0JBQVksRUFBRTtBQURSO0FBRmQsS0FEUSxFQU9SO0FBQ0lPLGdCQUFVLEVBQUUsR0FEaEI7QUFFSUMsY0FBUSxFQUFFO0FBQ05SLG9CQUFZLEVBQUU7QUFEUjtBQUZkLEtBUFEsRUFhUjtBQUNJTyxnQkFBVSxFQUFFLEdBRGhCO0FBRUlDLGNBQVEsRUFBRTtBQUNOUixvQkFBWSxFQUFFO0FBRFI7QUFGZCxLQWJRO0FBUndCLEdBQXhDO0FBNkJILENBbkNEIiwiZmlsZSI6Ii4vc3JjL2pzL3NjcmlwdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vbWVnYW1lbnVcbiAgICAkKCcubWFpbi1uYXYnKS5hY2Nlc3NpYmxlTWVnYU1lbnUoKTtcblxuICAgIC8vaG9tZXBhZ2UgY2Fyb3VzZWxcbiAgICAkKCcuYy1ob21lX19jYXJvdXNlbF9fY29udGFpbmVyJykuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+JiM4MjQ5OzwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPiYjODI1MDs8L2J1dHRvbj4nLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDY0MSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/scripts.js\n");

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