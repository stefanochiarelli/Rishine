/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Rishine/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n//imports\r\n\r\n\r\n\r\n\r\n\r\n\r\n//declaraciones DOM\r\nconst navBurg = document.querySelector('.navbar-burger'),\r\n    glass = document.querySelector('.inicioNavMobil__dragDiv'),\r\n    modalServ = document.querySelector('.modalServicios'),\r\n    modalServBody = document.querySelector('.modal-card-body'),\r\n    verMas = document.querySelectorAll('.boxGrillas__verMas'),\r\n    buttonDelete = document.querySelector('.delete')\r\n\r\nnavBurg.addEventListener('click', () => {\r\n    document.querySelector('.navbar-menu').classList.toggle('is-active')\r\n})\r\n\r\n//Animacion Parallax\r\nif(window.location.pathname.includes('index')){\r\n    addEventListener('scroll', () => {\r\n        let scrolled = scrollY\r\n        let paraRate = scrolled * 0.7\r\n\r\n        glass.style.transform = `translate3d(0px, -${paraRate}px, 0px)`\r\n    })\r\n}\r\n\r\n//Datos Json\r\n\r\nif(window.location.pathname.includes('servicios')){\r\n    // fetchTratamientosJSON().then(tratamientos => {\r\n    //    let data = tratamientos;\r\n    //     data.forEach((e) => {\r\n    //         modalServ.innerHTML += e.descripcion\r\n    //     })\r\n        \r\n        \r\n    // });\r\n\r\n    //delete\r\n    buttonDelete.addEventListener('click', () => {\r\n        modalServ.classList.toggle('is-active')\r\n    })\r\n\r\n    //evento VerMas\r\n    verMas.forEach( (a) => {\r\n        a.addEventListener('click', (e) => {\r\n            modalServ.classList.toggle('is-active')\r\n            applyContent(e.target.attributes[1].value)\r\n        })\r\n    })\r\n\r\n\r\n}\r\n\r\n//funcion applyContent\r\n\r\nconst applyContent = (e) => {\r\n    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.fetchTratamientosJSON)().then(tratamientos => {\r\n       let data = tratamientos;\r\n       let filteredElem = data.filter( r => r.id === parseFloat(e))\r\n\r\n        modalServBody.innerHTML = filteredElem.map(f => f.descripcion)\r\n        \r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://Rishine/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchTratamientosJSON\": () => (/* binding */ fetchTratamientosJSON)\n/* harmony export */ });\nasync function fetchTratamientosJSON() {\r\n    const response = await fetch('./tratamientos.json');\r\n    const tratamientos = await response.json();\r\n    return tratamientos;\r\n  }\r\n  \n\n//# sourceURL=webpack://Rishine/./src/modal.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;