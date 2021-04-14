webpackHotUpdate_N_E("pages/mastermind",{

/***/ "./pages/mastermind.js":
/*!*****************************!*\
  !*** ./pages/mastermind.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/mastermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      newGame = _useState[0],\n      setNewGame = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      number = _useState2[0],\n      setNumber = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      reponse = _useState3[0],\n      setResponse = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      responseHistory = _useState4[0],\n      setResponseHistory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([1]),\n      gusses = _useState5[0],\n      setGuesses = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var result;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');\n\n          case 2:\n            result = _context.sent;\n            setNumber(result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            }));\n            setResponse(\"\");\n            setResponseHistory([]);\n            setGuesses([]);\n            setNewGame(false);\n            console.log(number);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.game,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"help\",\n      children: [10 - gusses.length, \" guesses left\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.body,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.right,\n        children: allNumbers.map(function (num, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.number,\n            children: num\n          }, num, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 43\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"j517o/3v7Vn5g4Mnm+hwJ1pjKFU=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVybWluZC5qcz9hMDFhIl0sIm5hbWVzIjpbIm1hdGVybWluZCIsInVzZVN0YXRlIiwibmV3R2FtZSIsInNldE5ld0dhbWUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJyZXBvbnNlIiwic2V0UmVzcG9uc2UiLCJyZXNwb25zZUhpc3RvcnkiLCJzZXRSZXNwb25zZUhpc3RvcnkiLCJndXNzZXMiLCJzZXRHdWVzc2VzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJyZXN1bHQiLCJkYXRhIiwic3BsaXQiLCJmaWx0ZXIiLCJudW0iLCJrZXkiLCJtYXAiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYWxsTnVtYmVycyIsInN0eWxlcyIsImdhbWUiLCJidXR0b24iLCJsZW5ndGgiLCJib2R5IiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxLQUFELENBRGxCO0FBQUEsTUFDYkMsT0FEYTtBQUFBLE1BQ0pDLFVBREk7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdXSixzREFBUSxDQUFDLEVBQUQsQ0FIbkI7QUFBQSxNQUdiSyxPQUhhO0FBQUEsTUFHSkMsV0FISTs7QUFBQSxtQkFJMEJOLHNEQUFRLENBQUMsRUFBRCxDQUpsQztBQUFBLE1BSWJPLGVBSmE7QUFBQSxNQUlJQyxrQkFKSjs7QUFBQSxtQkFLU1Isc0RBQVEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUxqQjtBQUFBLE1BS2JTLE1BTGE7QUFBQSxNQUtMQyxVQUxLOztBQU9wQkMseURBQVMsc1NBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDY0MsNENBQUssQ0FDdEIsdUZBRHNCLENBRG5COztBQUFBO0FBQ0RDLGtCQURDO0FBSUxULHFCQUFTLENBQUNTLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCLEVBQWxCLEVBQXNCQyxNQUF0QixDQUE2QixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxxQkFBY0EsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUExQjtBQUFBLGFBQTdCLEVBQTBEQyxHQUExRCxDQUE4RCxVQUFDRixHQUFEO0FBQUEscUJBQVNHLE1BQU0sQ0FBQ0gsR0FBRCxDQUFmO0FBQUEsYUFBOUQsQ0FBRCxDQUFUO0FBQ0FYLHVCQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FFLDhCQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUUsc0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDQVIsc0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQW1CLG1CQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE1BQVo7O0FBVEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQVVQLENBQUNGLE9BQUQsQ0FWTyxDQUFUO0FBV0EsTUFBTXNCLFVBQVUsR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBQW5CO0FBQ0Esc0JBQVE7QUFBSyxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ1I7QUFBUSxlQUFTLEVBQUVELHlEQUFNLENBQUNFLE1BQTFCO0FBQWtDLGFBQU8sRUFBRSxtQkFBSTtBQUFDeEIsa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFBaUIsT0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxlQUVSO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxpQkFDSyxLQUFLTyxNQUFNLENBQUNrQixNQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGUSxlQUtSO0FBQUssZUFBUyxFQUFFSCx5REFBTSxDQUFDSSxJQUF2QjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUoseURBQU0sQ0FBQ0ssS0FBdkI7QUFBQSxrQkFDS04sVUFBVSxDQUFDSixHQUFYLENBQWUsVUFBQ0YsR0FBRCxFQUFNQyxHQUFOO0FBQUEsOEJBQWM7QUFBSyxxQkFBUyxFQUFFTSx5REFBTSxDQUFDckIsTUFBdkI7QUFBQSxzQkFBMENjO0FBQTFDLGFBQW9DQSxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFkO0FBQUEsU0FBZjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFZSCxDQS9CRDs7R0FBTWxCLFM7O0FBaUNTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL21hc3Rlcm1pbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcblxuY29uc3QgbWF0ZXJtaW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuZXdHYW1lLCBzZXROZXdHYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXBvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcmVzcG9uc2VIaXN0b3J5LCBzZXRSZXNwb25zZUhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtndXNzZXMsIHNldEd1ZXNzZXNdID0gdXNlU3RhdGUoWzFdKTtcblxuICAgIHVzZUVmZmVjdCggYXN5bmMgKCk9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFxuICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LnJhbmRvbS5vcmcvaW50ZWdlcnMvP251bT00Jm1pbj0wJm1heD03JmNvbD0xJmJhc2U9MTAmZm9ybWF0PXBsYWluJnJuZD1uZXcnLFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0TnVtYmVyKHJlc3VsdC5kYXRhLnNwbGl0KFwiXCIpLmZpbHRlcigobnVtLCBrZXkpID0+IGtleSAlIDIgPT09IDApLm1hcCgobnVtKSA9PiBOdW1iZXIobnVtKSkpO1xuICAgICAgICAgIHNldFJlc3BvbnNlKFwiXCIpO1xuICAgICAgICAgIHNldFJlc3BvbnNlSGlzdG9yeShbXSk7XG4gICAgICAgICAgc2V0R3Vlc3NlcyhbXSk7XG4gICAgICAgICAgc2V0TmV3R2FtZShmYWxzZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhudW1iZXIpXG4gICAgfSxbbmV3R2FtZV0pXG4gICAgY29uc3QgYWxsTnVtYmVycyA9IFswLDEsMiwzLDQsNSw2LDddXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKT0+e3NldE5ld0dhbWUodHJ1ZSl9fT5TdGFydCB0aGUgR2FtZTwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiPlxuICAgICAgICB7MTAgLSBndXNzZXMubGVuZ3RofSBndWVzc2VzIGxlZnRcbiAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxuICAgICAgICAgICAge2FsbE51bWJlcnMubWFwKChudW0sIGtleSkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9IGtleT17bnVtfT57bnVtfTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0ZXJtaW5kOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mastermind.js\n");

/***/ })

})