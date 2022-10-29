/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./users/users.js":
/*!************************!*\
  !*** ./users/users.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Users = /*#__PURE__*/_createClass(function Users(name, pass) {
  _classCallCheck(this, Users);
  this.name = name;
  this.pass = pass;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/users */ "./users/users.js");
var btn = document.querySelector("#btn");
var inp1 = document.querySelector("#username");
var inp2 = document.querySelector("#password");

var listusers = [new _users_users__WEBPACK_IMPORTED_MODULE_0__["default"]('Erkutbek', '1234'), new _users_users__WEBPACK_IMPORTED_MODULE_0__["default"]('Bolot', '123'), new _users_users__WEBPACK_IMPORTED_MODULE_0__["default"]('hello', '222')];
btn.addEventListener('click', function (e) {
  e.preventDefault();
  listusers.map(function (user) {
    console.log(user);
    if (user.name === inp1.value) {
      if (user.pass === inp2.value) {
        alert('авторизован');
      } else {
        alert('error');
      }
    }
  });
});

// const form = document.querySelector("form");
// const inputs = form.elements;

// const users= [
//   {user:'admin', password:'1234'},
//   {user:'manager', password:'SuperMe108'},
//   {user:'editor', password:'12345'},
// ]

// function check(user,password){
//   users.map((key)=>{
//     if(key.user===user){
//       if(key.password===password){
//         alert('Данные верные')
//         inputs[0].value = ''
//         inputs[1].value = ''
//       }else {
//         alert('Логин или пароль неверный')
//       }
//     }
//   })
// }

// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   check(inputs[0].value,inputs[1].value)
// });
})();

/******/ })()
;
//# sourceMappingURL=project.js.map