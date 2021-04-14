webpackHotUpdate_N_E("pages/matermind",{

/***/ "./pages/matermind.js":
/*!****************************!*\
  !*** ./pages/matermind.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Button */ \"./src/Button.js\");\n/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_Button__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/matermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      newGame = _useState[0],\n      setNewGame = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      number = _useState2[0],\n      setNumber = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      reponse = _useState3[0],\n      setResponse = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      responseHistory = _useState4[0],\n      setResponseHistory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      gusses = _useState5[0],\n      setGuesses = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var result;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');\n\n          case 2:\n            result = _context.sent;\n            setNumber(result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            }));\n            setResponse(\"\");\n            setResponseHistory([]);\n            setGuesses([]);\n            setNewGame(false);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: number.map(function (num, key) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: num\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 35\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"cOfMU61e7t/q/A5U9C03AxK2mQ4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWF0ZXJtaW5kLmpzP2QwMmUiXSwibmFtZXMiOlsibWF0ZXJtaW5kIiwidXNlU3RhdGUiLCJuZXdHYW1lIiwic2V0TmV3R2FtZSIsIm51bWJlciIsInNldE51bWJlciIsInJlcG9uc2UiLCJzZXRSZXNwb25zZSIsInJlc3BvbnNlSGlzdG9yeSIsInNldFJlc3BvbnNlSGlzdG9yeSIsImd1c3NlcyIsInNldEd1ZXNzZXMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInJlc3VsdCIsImRhdGEiLCJzcGxpdCIsImZpbHRlciIsIm51bSIsImtleSIsIm1hcCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEI7QUFBQSxNQUNiQyxPQURhO0FBQUEsTUFDSkMsVUFESTs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFYkcsTUFGYTtBQUFBLE1BRUxDLFNBRks7O0FBQUEsbUJBR1dKLHNEQUFRLENBQUMsRUFBRCxDQUhuQjtBQUFBLE1BR2JLLE9BSGE7QUFBQSxNQUdKQyxXQUhJOztBQUFBLG1CQUkwQk4sc0RBQVEsQ0FBQyxFQUFELENBSmxDO0FBQUEsTUFJYk8sZUFKYTtBQUFBLE1BSUlDLGtCQUpKOztBQUFBLG1CQUtTUixzREFBUSxDQUFDLEVBQUQsQ0FMakI7QUFBQSxNQUtiUyxNQUxhO0FBQUEsTUFLTEMsVUFMSzs7QUFPcEJDLHlEQUFTLHNTQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2NDLDRDQUFLLENBQ3RCLHVGQURzQixDQURuQjs7QUFBQTtBQUNEQyxrQkFEQztBQUlMVCxxQkFBUyxDQUFDUyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsS0FBWixDQUFrQixFQUFsQixFQUFzQkMsTUFBdEIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEscUJBQWNBLEdBQUcsR0FBRyxDQUFOLEtBQVksQ0FBMUI7QUFBQSxhQUE3QixFQUEwREMsR0FBMUQsQ0FBOEQsVUFBQ0YsR0FBRDtBQUFBLHFCQUFTRyxNQUFNLENBQUNILEdBQUQsQ0FBZjtBQUFBLGFBQTlELENBQUQsQ0FBVDtBQUNBWCx1QkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSw4QkFBa0IsQ0FBQyxFQUFELENBQWxCO0FBQ0FFLHNCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FSLHNCQUFVLENBQUMsS0FBRCxDQUFWOztBQVJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUYsSUFTUCxDQUFDRCxPQUFELENBVE8sQ0FBVDtBQVVBLHNCQUFRO0FBQUEsNEJBQ1I7QUFBUSxhQUFPLEVBQUUsbUJBQUk7QUFBQ0Msa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFBaUIsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxlQUVSO0FBQUEsZ0JBQ0tDLE1BQU0sQ0FBQ2dCLEdBQVAsQ0FBVyxVQUFDRixHQUFELEVBQU1DLEdBQU47QUFBQSw0QkFBYztBQUFBLG9CQUFNRDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWQ7QUFBQSxPQUFYO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBT0gsQ0F4QkQ7O0dBQU1sQixTOztBQTBCU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9tYXRlcm1pbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3NyYy9CdXR0b25cIiBcblxuXG5jb25zdCBtYXRlcm1pbmQgPSAoKSA9PiB7XG4gICAgY29uc3QgW25ld0dhbWUsIHNldE5ld0dhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3JlcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtyZXNwb25zZUhpc3RvcnksIHNldFJlc3BvbnNlSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2d1c3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcbiAgICAgICAgICAgICdodHRwczovL3d3dy5yYW5kb20ub3JnL2ludGVnZXJzLz9udW09NCZtaW49MCZtYXg9NyZjb2w9MSZiYXNlPTEwJmZvcm1hdD1wbGFpbiZybmQ9bmV3JyxcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldE51bWJlcihyZXN1bHQuZGF0YS5zcGxpdChcIlwiKS5maWx0ZXIoKG51bSwga2V5KSA9PiBrZXkgJSAyID09PSAwKS5tYXAoKG51bSkgPT4gTnVtYmVyKG51bSkpKTtcbiAgICAgICAgICBzZXRSZXNwb25zZShcIlwiKTtcbiAgICAgICAgICBzZXRSZXNwb25zZUhpc3RvcnkoW10pO1xuICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xuICAgICAgICAgIHNldE5ld0dhbWUoZmFsc2UpXG4gICAgfSxbbmV3R2FtZV0pXG4gICAgcmV0dXJuICg8ZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17KCk9PntzZXROZXdHYW1lKHRydWUpfX0+U3RhcnQgdGhlIEdhbWU8L2J1dHRvbj5cbiAgICA8ZGl2PlxuICAgICAgICB7bnVtYmVyLm1hcCgobnVtLCBrZXkpID0+IDxkaXY+e251bX08L2Rpdj4pfVxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0ZXJtaW5kOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/matermind.js\n");

/***/ })

})