webpackHotUpdate_N_E("pages/matermind",{

/***/ "./pages/matermind.js":
/*!****************************!*\
  !*** ./pages/matermind.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Button */ \"./src/Button.js\");\n/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_Button__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/matermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      newGame = _useState[0],\n      setNewGame = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      number = _useState2[0],\n      setNumber = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      reponse = _useState3[0],\n      setResponse = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      responseHistory = _useState4[0],\n      setResponseHistory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      gusses = _useState5[0],\n      setGuesses = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var result;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');\n\n          case 2:\n            result = _context.sent;\n            setNumber(result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            }));\n            setResponse(\"\");\n            setResponseHistory([]);\n            setGuesses([]);\n            setNewGame(false);\n            console.log(number);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: allNumbers.map(function (num, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: num\n          }, num, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 43\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"cOfMU61e7t/q/A5U9C03AxK2mQ4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWF0ZXJtaW5kLmpzP2QwMmUiXSwibmFtZXMiOlsibWF0ZXJtaW5kIiwidXNlU3RhdGUiLCJuZXdHYW1lIiwic2V0TmV3R2FtZSIsIm51bWJlciIsInNldE51bWJlciIsInJlcG9uc2UiLCJzZXRSZXNwb25zZSIsInJlc3BvbnNlSGlzdG9yeSIsInNldFJlc3BvbnNlSGlzdG9yeSIsImd1c3NlcyIsInNldEd1ZXNzZXMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInJlc3VsdCIsImRhdGEiLCJzcGxpdCIsImZpbHRlciIsIm51bSIsImtleSIsIm1hcCIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJhbGxOdW1iZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsS0FBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUViRyxNQUZhO0FBQUEsTUFFTEMsU0FGSzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxFQUFELENBSG5CO0FBQUEsTUFHYkssT0FIYTtBQUFBLE1BR0pDLFdBSEk7O0FBQUEsbUJBSTBCTixzREFBUSxDQUFDLEVBQUQsQ0FKbEM7QUFBQSxNQUliTyxlQUphO0FBQUEsTUFJSUMsa0JBSko7O0FBQUEsbUJBS1NSLHNEQUFRLENBQUMsRUFBRCxDQUxqQjtBQUFBLE1BS2JTLE1BTGE7QUFBQSxNQUtMQyxVQUxLOztBQU9wQkMseURBQVMsc1NBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDY0MsNENBQUssQ0FDdEIsdUZBRHNCLENBRG5COztBQUFBO0FBQ0RDLGtCQURDO0FBSUxULHFCQUFTLENBQUNTLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCLEVBQWxCLEVBQXNCQyxNQUF0QixDQUE2QixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxxQkFBY0EsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUExQjtBQUFBLGFBQTdCLEVBQTBEQyxHQUExRCxDQUE4RCxVQUFDRixHQUFEO0FBQUEscUJBQVNHLE1BQU0sQ0FBQ0gsR0FBRCxDQUFmO0FBQUEsYUFBOUQsQ0FBRCxDQUFUO0FBQ0FYLHVCQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FFLDhCQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUUsc0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDQVIsc0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQW1CLG1CQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE1BQVo7O0FBVEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQVVQLENBQUNGLE9BQUQsQ0FWTyxDQUFUO0FBV0EsTUFBTXNCLFVBQVUsR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBQW5CO0FBQ0Esc0JBQVE7QUFBQSw0QkFDUjtBQUFRLGFBQU8sRUFBRSxtQkFBSTtBQUFDckIsa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFBaUIsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxlQUVSO0FBQUEsNkJBQ0k7QUFBQSxrQkFDS3FCLFVBQVUsQ0FBQ0osR0FBWCxDQUFlLFVBQUNGLEdBQUQsRUFBTUMsR0FBTjtBQUFBLDhCQUFjO0FBQUEsc0JBQWdCRDtBQUFoQixhQUFVQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWQ7QUFBQSxTQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQVNILENBNUJEOztHQUFNbEIsUzs7QUE4QlNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbWF0ZXJtaW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9zcmMvQnV0dG9uXCIgXG5cblxuY29uc3QgbWF0ZXJtaW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuZXdHYW1lLCBzZXROZXdHYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXBvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcmVzcG9uc2VIaXN0b3J5LCBzZXRSZXNwb25zZUhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtndXNzZXMsIHNldEd1ZXNzZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCBhc3luYyAoKT0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXG4gICAgICAgICAgICAnaHR0cHM6Ly93d3cucmFuZG9tLm9yZy9pbnRlZ2Vycy8/bnVtPTQmbWluPTAmbWF4PTcmY29sPTEmYmFzZT0xMCZmb3JtYXQ9cGxhaW4mcm5kPW5ldycsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXROdW1iZXIocmVzdWx0LmRhdGEuc3BsaXQoXCJcIikuZmlsdGVyKChudW0sIGtleSkgPT4ga2V5ICUgMiA9PT0gMCkubWFwKChudW0pID0+IE51bWJlcihudW0pKSk7XG4gICAgICAgICAgc2V0UmVzcG9uc2UoXCJcIik7XG4gICAgICAgICAgc2V0UmVzcG9uc2VIaXN0b3J5KFtdKTtcbiAgICAgICAgICBzZXRHdWVzc2VzKFtdKTtcbiAgICAgICAgICBzZXROZXdHYW1lKGZhbHNlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKG51bWJlcilcbiAgICB9LFtuZXdHYW1lXSlcbiAgICBjb25zdCBhbGxOdW1iZXJzID0gWzAsMSwyLDMsNCw1LDYsN11cbiAgICByZXR1cm4gKDxkaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e3NldE5ld0dhbWUodHJ1ZSl9fT5TdGFydCB0aGUgR2FtZTwvYnV0dG9uPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7YWxsTnVtYmVycy5tYXAoKG51bSwga2V5KSA9PiA8ZGl2IGtleT17bnVtfT57bnVtfTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0ZXJtaW5kOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/matermind.js\n");

/***/ })

})