module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/matermind.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/matermind.js":
/*!****************************!*\
  !*** ./pages/matermind.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/matermind.js\";\n\n\n\n\nconst matermind = () => {\n  const {\n    0: newGame,\n    1: setNewGame\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: number,\n    1: setNumber\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: reponse,\n    1: setResponse\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: responseHistory,\n    1: setResponseHistory\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: gusses,\n    1: setGuesses\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(async () => {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_2___default()('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');\n    setNumber(result.data.split(\"\").filter((num, key) => key % 2 === 0).map(num => Number(num)));\n    setResponse(\"\");\n    setResponseHistory([]);\n    setGuesses([]);\n    setNewGame(false);\n    console.log(number);\n  }, [newGame]);\n  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"game\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"body\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"right\",\n        children: allNumbers.map((num, key) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"number\",\n          children: num\n        }, num, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 43\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 13\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYXRlcm1pbmQuanM/ZDAyZSJdLCJuYW1lcyI6WyJtYXRlcm1pbmQiLCJuZXdHYW1lIiwic2V0TmV3R2FtZSIsInVzZVN0YXRlIiwibnVtYmVyIiwic2V0TnVtYmVyIiwicmVwb25zZSIsInNldFJlc3BvbnNlIiwicmVzcG9uc2VIaXN0b3J5Iiwic2V0UmVzcG9uc2VIaXN0b3J5IiwiZ3Vzc2VzIiwic2V0R3Vlc3NlcyIsInVzZUVmZmVjdCIsInJlc3VsdCIsImF4aW9zIiwiZGF0YSIsInNwbGl0IiwiZmlsdGVyIiwibnVtIiwia2V5IiwibWFwIiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImFsbE51bWJlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBeUJKLHNEQUFRLENBQUMsRUFBRCxDQUF2QztBQUNBLFFBQU07QUFBQSxPQUFDSyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDTixzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBdUJSLHNEQUFRLENBQUMsRUFBRCxDQUFyQztBQUVBUyx5REFBUyxDQUFFLFlBQVc7QUFDbEIsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLDRDQUFLLENBQ3RCLHVGQURzQixDQUExQjtBQUdFVCxhQUFTLENBQUNRLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxLQUFaLENBQWtCLEVBQWxCLEVBQXNCQyxNQUF0QixDQUE2QixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBY0EsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUF2RCxFQUEwREMsR0FBMUQsQ0FBK0RGLEdBQUQsSUFBU0csTUFBTSxDQUFDSCxHQUFELENBQTdFLENBQUQsQ0FBVDtBQUNBWCxlQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FFLHNCQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUUsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBVCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FvQixXQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE1BQVo7QUFDTCxHQVZRLEVBVVAsQ0FBQ0gsT0FBRCxDQVZPLENBQVQ7QUFXQSxRQUFNdUIsVUFBVSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBbkI7QUFDQSxzQkFBUTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ1I7QUFBUSxhQUFPLEVBQUUsTUFBSTtBQUFDdEIsa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFBaUIsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFEsZUFFUjtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxrQkFDS3NCLFVBQVUsQ0FBQ0osR0FBWCxDQUFlLENBQUNGLEdBQUQsRUFBTUMsR0FBTixrQkFBYztBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLG9CQUFtQ0Q7QUFBbkMsV0FBNkJBLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFTSCxDQTVCRDs7QUE4QmVsQix3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL21hdGVybWluZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnXG5cbmNvbnN0IG1hdGVybWluZCA9ICgpID0+IHtcbiAgICBjb25zdCBbbmV3R2FtZSwgc2V0TmV3R2FtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Jlc3BvbnNlSGlzdG9yeSwgc2V0UmVzcG9uc2VIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZ3Vzc2VzLCBzZXRHdWVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCggYXN5bmMgKCk9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFxuICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LnJhbmRvbS5vcmcvaW50ZWdlcnMvP251bT00Jm1pbj0wJm1heD03JmNvbD0xJmJhc2U9MTAmZm9ybWF0PXBsYWluJnJuZD1uZXcnLFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0TnVtYmVyKHJlc3VsdC5kYXRhLnNwbGl0KFwiXCIpLmZpbHRlcigobnVtLCBrZXkpID0+IGtleSAlIDIgPT09IDApLm1hcCgobnVtKSA9PiBOdW1iZXIobnVtKSkpO1xuICAgICAgICAgIHNldFJlc3BvbnNlKFwiXCIpO1xuICAgICAgICAgIHNldFJlc3BvbnNlSGlzdG9yeShbXSk7XG4gICAgICAgICAgc2V0R3Vlc3NlcyhbXSk7XG4gICAgICAgICAgc2V0TmV3R2FtZShmYWxzZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhudW1iZXIpXG4gICAgfSxbbmV3R2FtZV0pXG4gICAgY29uc3QgYWxsTnVtYmVycyA9IFswLDEsMiwzLDQsNSw2LDddXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57c2V0TmV3R2FtZSh0cnVlKX19PlN0YXJ0IHRoZSBHYW1lPC9idXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHthbGxOdW1iZXJzLm1hcCgobnVtLCBrZXkpID0+IDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCIga2V5PXtudW19PntudW19PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYXRlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/matermind.js\n");

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styles.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });