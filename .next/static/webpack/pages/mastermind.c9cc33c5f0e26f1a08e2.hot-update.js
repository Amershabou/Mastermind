webpackHotUpdate_N_E("pages/mastermind",{

/***/ "./pages/mastermind.js":
/*!*****************************!*\
  !*** ./pages/mastermind.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/mastermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      newGame = _useState[0],\n      setNewGame = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      number = _useState2[0],\n      setNumber = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      reponse = _useState3[0],\n      setResponse = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([1, 2, 3, 4, 5, 6, 7, 8, 9]),\n      responseHistory = _useState4[0],\n      setResponseHistory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      gusses = _useState5[0],\n      setGuesses = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var result;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');\n\n          case 2:\n            result = _context.sent;\n            setNumber(result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            }));\n            setResponse(\"\");\n            setResponseHistory([]);\n            setGuesses([]);\n            setNewGame(false);\n            console.log(number);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.game,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"help\",\n      children: [10 - gusses.length - 1, \" guesses left\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.body,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.right,\n        children: allNumbers.map(function (num, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.number,\n            children: num\n          }, num, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 43\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"DiefzPgFhuTtsEHGJq4xTKw9+p4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVybWluZC5qcz9hMDFhIl0sIm5hbWVzIjpbIm1hdGVybWluZCIsInVzZVN0YXRlIiwibmV3R2FtZSIsInNldE5ld0dhbWUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJyZXBvbnNlIiwic2V0UmVzcG9uc2UiLCJyZXNwb25zZUhpc3RvcnkiLCJzZXRSZXNwb25zZUhpc3RvcnkiLCJndXNzZXMiLCJzZXRHdWVzc2VzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJyZXN1bHQiLCJkYXRhIiwic3BsaXQiLCJmaWx0ZXIiLCJudW0iLCJrZXkiLCJtYXAiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYWxsTnVtYmVycyIsInN0eWxlcyIsImdhbWUiLCJidXR0b24iLCJsZW5ndGgiLCJib2R5IiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxLQUFELENBRGxCO0FBQUEsTUFDYkMsT0FEYTtBQUFBLE1BQ0pDLFVBREk7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdXSixzREFBUSxDQUFDLEVBQUQsQ0FIbkI7QUFBQSxNQUdiSyxPQUhhO0FBQUEsTUFHSkMsV0FISTs7QUFBQSxtQkFJMEJOLHNEQUFRLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUFELENBSmxDO0FBQUEsTUFJYk8sZUFKYTtBQUFBLE1BSUlDLGtCQUpKOztBQUFBLG1CQUtTUixzREFBUSxDQUFDLEVBQUQsQ0FMakI7QUFBQSxNQUtiUyxNQUxhO0FBQUEsTUFLTEMsVUFMSzs7QUFPcEJDLHlEQUFTLHNTQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2NDLDRDQUFLLENBQ3RCLHVGQURzQixDQURuQjs7QUFBQTtBQUNEQyxrQkFEQztBQUlMVCxxQkFBUyxDQUFDUyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsS0FBWixDQUFrQixFQUFsQixFQUFzQkMsTUFBdEIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEscUJBQWNBLEdBQUcsR0FBRyxDQUFOLEtBQVksQ0FBMUI7QUFBQSxhQUE3QixFQUEwREMsR0FBMUQsQ0FBOEQsVUFBQ0YsR0FBRDtBQUFBLHFCQUFTRyxNQUFNLENBQUNILEdBQUQsQ0FBZjtBQUFBLGFBQTlELENBQUQsQ0FBVDtBQUNBWCx1QkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSw4QkFBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0FFLHNCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FSLHNCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FtQixtQkFBTyxDQUFDQyxHQUFSLENBQVluQixNQUFaOztBQVRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUYsSUFVUCxDQUFDRixPQUFELENBVk8sQ0FBVDtBQVdBLE1BQU1zQixVQUFVLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUFuQjtBQUNBLHNCQUFRO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxJQUF2QjtBQUFBLDRCQUNSO0FBQVEsZUFBUyxFQUFFRCx5REFBTSxDQUFDRSxNQUExQjtBQUFrQyxhQUFPLEVBQUUsbUJBQUk7QUFBQ3hCLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQWlCLE9BQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsZUFFUjtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsaUJBQ0ssS0FBS08sTUFBTSxDQUFDa0IsTUFBWixHQUFxQixDQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGUSxlQUtSO0FBQUssZUFBUyxFQUFFSCx5REFBTSxDQUFDSSxJQUF2QjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUoseURBQU0sQ0FBQ0ssS0FBdkI7QUFBQSxrQkFDS04sVUFBVSxDQUFDSixHQUFYLENBQWUsVUFBQ0YsR0FBRCxFQUFNQyxHQUFOO0FBQUEsOEJBQWM7QUFBSyxxQkFBUyxFQUFFTSx5REFBTSxDQUFDckIsTUFBdkI7QUFBQSxzQkFBMENjO0FBQTFDLGFBQW9DQSxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFkO0FBQUEsU0FBZjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFZSCxDQS9CRDs7R0FBTWxCLFM7O0FBaUNTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL21hc3Rlcm1pbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcblxuY29uc3QgbWF0ZXJtaW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuZXdHYW1lLCBzZXROZXdHYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXBvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcmVzcG9uc2VIaXN0b3J5LCBzZXRSZXNwb25zZUhpc3RvcnldID0gdXNlU3RhdGUoWzEsMiwzLDQsNSw2LDcsOCw5XSk7XG4gICAgY29uc3QgW2d1c3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcbiAgICAgICAgICAgICdodHRwczovL3d3dy5yYW5kb20ub3JnL2ludGVnZXJzLz9udW09NCZtaW49MCZtYXg9NyZjb2w9MSZiYXNlPTEwJmZvcm1hdD1wbGFpbiZybmQ9bmV3JyxcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldE51bWJlcihyZXN1bHQuZGF0YS5zcGxpdChcIlwiKS5maWx0ZXIoKG51bSwga2V5KSA9PiBrZXkgJSAyID09PSAwKS5tYXAoKG51bSkgPT4gTnVtYmVyKG51bSkpKTtcbiAgICAgICAgICBzZXRSZXNwb25zZShcIlwiKTtcbiAgICAgICAgICBzZXRSZXNwb25zZUhpc3RvcnkoW10pO1xuICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xuICAgICAgICAgIHNldE5ld0dhbWUoZmFsc2UpXG4gICAgICAgICAgY29uc29sZS5sb2cobnVtYmVyKVxuICAgIH0sW25ld0dhbWVdKVxuICAgIGNvbnN0IGFsbE51bWJlcnMgPSBbMCwxLDIsMyw0LDUsNiw3XVxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCk9PntzZXROZXdHYW1lKHRydWUpfX0+U3RhcnQgdGhlIEdhbWU8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBcIj5cbiAgICAgICAgezEwIC0gZ3Vzc2VzLmxlbmd0aCAtIDF9IGd1ZXNzZXMgbGVmdFxuICAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgICAgICB7YWxsTnVtYmVycy5tYXAoKG51bSwga2V5KSA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0ga2V5PXtudW19PntudW19PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYXRlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mastermind.js\n");

/***/ })

})