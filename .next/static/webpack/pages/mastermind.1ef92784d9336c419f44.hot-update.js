webpackHotUpdate_N_E("pages/mastermind",{

/***/ "./pages/mastermind.js":
/*!*****************************!*\
  !*** ./pages/mastermind.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/mastermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(4),\n      combination = _useState[0],\n      setCombination = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      newGame = _useState2[0],\n      setNewGame = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      random = _useState3[0],\n      setRandom = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      response = _useState4[0],\n      setResponse = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      responseHistory = _useState5[0],\n      setResponseHistory = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      gusses = _useState6[0],\n      setGuesses = _useState6[1];\n\n  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(false);\n  var res = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])([\"\", \"\", \"\", \"\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n    var result, number;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!isMounted.current) {\n              _context.next = 13;\n              break;\n            }\n\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_5___default()('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');\n\n          case 3:\n            result = _context.sent;\n            number = result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            });\n            setRandom(number);\n            setResponse(res.response);\n            setResponseHistory([]);\n            setGuesses([]);\n            setNewGame(false);\n            console.log(random);\n            _context.next = 14;\n            break;\n\n          case 13:\n            isMounted.current = true;\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n\n  var handleChange = function handleChange(e) {\n    var newNum = Number(e.target.value);\n    var id = e.target.id;\n    res.current[id] = newNum; // setResponse(res.current)\n  };\n\n  var checkIfMatch = function checkIfMatch(e) {\n    e.preventDefault();\n    setResponseHistory(function (responseHistory) {\n      return [res.current].concat(Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(responseHistory));\n    });\n    console.log(res.current);\n    Array.from(document.querySelectorAll(\"input\")).forEach(function (input) {\n      return input.value = \"\";\n    });\n    res.current.map(function (num) {\n      return num = \"\";\n    }); // setResponse(res.current)\n\n    console.log(res.current);\n  };\n\n  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.game,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"help\",\n      children: [10 - gusses.length, \" guesses left\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.body,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.numbersBox,\n        children: Array.from(Array(combination)).map(function (x, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            id: i,\n            onChange: handleChange,\n            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.number\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 59\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.guessSubmit,\n        onClick: function onClick(e) {\n          return checkIfMatch(e);\n        },\n        children: \"Submit Guess\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"EF+kgWfbkvTxrx1eU3DYcpdyY+I=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVybWluZC5qcz9hMDFhIl0sIm5hbWVzIjpbIm1hdGVybWluZCIsInVzZVN0YXRlIiwiY29tYmluYXRpb24iLCJzZXRDb21iaW5hdGlvbiIsIm5ld0dhbWUiLCJzZXROZXdHYW1lIiwicmFuZG9tIiwic2V0UmFuZG9tIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInJlc3BvbnNlSGlzdG9yeSIsInNldFJlc3BvbnNlSGlzdG9yeSIsImd1c3NlcyIsInNldEd1ZXNzZXMiLCJpc01vdW50ZWQiLCJ1c2VSZWYiLCJyZXMiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYXhpb3MiLCJyZXN1bHQiLCJudW1iZXIiLCJkYXRhIiwic3BsaXQiLCJmaWx0ZXIiLCJudW0iLCJrZXkiLCJtYXAiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5ld051bSIsInRhcmdldCIsInZhbHVlIiwiaWQiLCJjaGVja0lmTWF0Y2giLCJwcmV2ZW50RGVmYXVsdCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFsbE51bWJlcnMiLCJzdHlsZXMiLCJnYW1lIiwiYnV0dG9uIiwibGVuZ3RoIiwiYm9keSIsIm51bWJlcnNCb3giLCJ4IiwiaSIsImd1ZXNzU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsQ0FBRCxDQUQxQjtBQUFBLE1BQ2JDLFdBRGE7QUFBQSxNQUNBQyxjQURBOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLEtBQUQsQ0FGbEI7QUFBQSxNQUViRyxPQUZhO0FBQUEsTUFFSkMsVUFGSTs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxFQUFELENBSGhC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QTtBQUFBLGFBTFEsZUFhUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFnQkgsQ0FoRUQ7O0dBQU1oQyxTOztBQWtFU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9tYXN0ZXJtaW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcblxuXG5jb25zdCBtYXRlcm1pbmQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbWJpbmF0aW9uLCBzZXRDb21iaW5hdGlvbl0gPSB1c2VTdGF0ZSg0KVxuICAgIGNvbnN0IFtuZXdHYW1lLCBzZXROZXdHYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcmFuZG9tLCBzZXRSYW5kb21dID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zZUhpc3RvcnksIHNldFJlc3BvbnNlSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2d1c3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBpc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHJlcyA9IHVzZVJlZihbXCJcIiwgXCJcIixcIlwiLFwiXCJdKTtcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpPT4ge1xuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LnJhbmRvbS5vcmcvaW50ZWdlcnMvP251bT00Jm1pbj0wJm1heD03JmNvbD0xJmJhc2U9MTAmZm9ybWF0PXBsYWluJnJuZD1uZXcnLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gcmVzdWx0LmRhdGEuc3BsaXQoXCJcIikuZmlsdGVyKChudW0sIGtleSkgPT4ga2V5ICUgMiA9PT0gMCkubWFwKChudW0pID0+IE51bWJlcihudW0pKTtcbiAgICAgICAgICAgICAgc2V0UmFuZG9tKG51bWJlcik7XG4gICAgICAgICAgICAgIHNldFJlc3BvbnNlKHJlcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIHNldFJlc3BvbnNlSGlzdG9yeShbXSk7XG4gICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xuICAgICAgICAgICAgICBzZXROZXdHYW1lKGZhbHNlKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyYW5kb20pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc01vdW50ZWQuY3VycmVudD0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFtuZXdHYW1lXSlcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgbmV3TnVtID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIHJlcy5jdXJyZW50W2lkXSA9IG5ld051bSAgICBcbiAgICAgICAgLy8gc2V0UmVzcG9uc2UocmVzLmN1cnJlbnQpXG5cbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnN0IGNoZWNrSWZNYXRjaCA9IChlKT0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRSZXNwb25zZUhpc3RvcnkocmVzcG9uc2VIaXN0b3J5ID0+IFtyZXMuY3VycmVudCwgLi4ucmVzcG9uc2VIaXN0b3J5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jdXJyZW50KVxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlucHV0ID0+IChpbnB1dC52YWx1ZSA9IFwiXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgcmVzLmN1cnJlbnQubWFwKG51bSA9PiBudW0gPSBcIlwiKVxuICAgICAgICAvLyBzZXRSZXNwb25zZShyZXMuY3VycmVudClcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuY3VycmVudClcbiAgICB9XG4gICAgY29uc3QgYWxsTnVtYmVycyA9IFswLDEsMiwzLDQsNSw2LDddXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKT0+e3NldE5ld0dhbWUodHJ1ZSl9fT5TdGFydCB0aGUgR2FtZTwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiPlxuICAgICAgICB7MTAgLSBndXNzZXMubGVuZ3RofSBndWVzc2VzIGxlZnRcbiAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcnNCb3h9PlxuICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkoY29tYmluYXRpb24pKS5tYXAoKHgsIGkpID0+IDxpbnB1dCAgaWQgPXtpfSBrZXk9e2l9IG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfSA+PC9pbnB1dD4pfVxuXG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IHtzdHlsZXMuZ3Vlc3NTdWJtaXR9IG9uQ2xpY2sgPSB7KGUpID0+IGNoZWNrSWZNYXRjaChlKX0gPlN1Ym1pdCBHdWVzczwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+PC9kaXY+XG4gICAge31cbiAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGVybWluZDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mastermind.js\n");

/***/ })

})