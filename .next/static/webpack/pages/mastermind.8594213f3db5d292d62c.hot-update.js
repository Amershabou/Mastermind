webpackHotUpdate_N_E("pages/mastermind",{

/***/ "./pages/mastermind.js":
/*!*****************************!*\
  !*** ./pages/mastermind.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/mastermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(4),\n      combination = _useState[0],\n      setCombination = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      newGame = _useState2[0],\n      setNewGame = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      random = _useState3[0],\n      setRandom = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      response = _useState4[0],\n      setResponse = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      responseHistory = _useState5[0],\n      setResponseHistory = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      messages = _useState6[0],\n      setMessages = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([10]),\n      gusses = _useState7[0],\n      setGuesses = _useState7[1];\n\n  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(false);\n  var res = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])([\"\", \"\", \"\", \"\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n    var result, number;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!isMounted.current) {\n              _context.next = 14;\n              break;\n            }\n\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_5___default()(\"https://www.random.org/integers/?num=\".concat(combination, \"&min=0&max=7&col=1&base=10&format=plain&rnd=new\"));\n\n          case 3:\n            result = _context.sent;\n            number = result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            });\n            setRandom(number);\n            res.current = [\"\", \"\", \"\", \"\"];\n            setResponse(res.current);\n            setResponseHistory([]);\n            setGuesses([]);\n            setNewGame(false);\n            console.log(random);\n            _context.next = 15;\n            break;\n\n          case 14:\n            isMounted.current = true;\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n\n  var handleChange = function handleChange(e) {\n    var newNum = Number(e.target.value);\n    var id = e.target.id;\n    res.current[id] = newNum;\n    setResponse(res.current);\n    console.log(response);\n  };\n\n  var checkIfMatch = function checkIfMatch(e) {\n    e.preventDefault();\n    if (res.current.includes(\"\")) return;\n    setResponseHistory(function (responseHistory) {\n      return [].concat(Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(responseHistory), [response]);\n    });\n    setGuesses(gusses - 1);\n    Array.from(document.querySelectorAll(\"input\")).forEach(function (input) {\n      return input.value = \"\";\n    });\n    var newMessage = \"\";\n\n    if (compare(random, response)[0]) {\n      newMessage = \"You have guessed a current number and its current locartion\";\n    } else if (compare(random, response)[1]) {\n      newMessage = \"You have guessed a current number\";\n    } else {\n      newMessage = \"Sorry! Your guess isn't correct, you have \".concat(gusses, \" guesses left\");\n    }\n\n    setMessages(function (messages) {\n      return [].concat(Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(messages), [newMessage]);\n    });\n    res.current = res.current.map(function (num) {\n      return num = \"\";\n    });\n    setResponse(res.current);\n  };\n\n  var compare = function compare(num1, num2) {\n    var samePos = false;\n    var foundNum = false;\n\n    for (var i = 0; i < num1.length; i++) {\n      for (var j = 0; j < num2.length; j++) {\n        if (i === j && num1[i] === num2[j]) {\n          samePos = true;\n          foundNum = true;\n        } else if (num1[i] === num2[j]) {\n          foundNum = true;\n        }\n      }\n    }\n\n    return [samePos, foundNum];\n  };\n\n  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.game,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"help\",\n      children: [gusses, \" guesses left\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.body,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.numbersBox,\n        children: Array.from(Array(combination)).map(function (x, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            id: i,\n            onChange: handleChange,\n            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.number\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 59\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.guessSubmit,\n        onClick: checkIfMatch,\n        children: \"Submit Guess\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.body,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.numbersBox,\n        children: responseHistory.map(function (x, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            id: i,\n            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.number,\n            children: x\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 44\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"7lstUqQdkQs3exYk2tRDayn1my4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVybWluZC5qcz9hMDFhIl0sIm5hbWVzIjpbIm1hdGVybWluZCIsInVzZVN0YXRlIiwiY29tYmluYXRpb24iLCJzZXRDb21iaW5hdGlvbiIsIm5ld0dhbWUiLCJzZXROZXdHYW1lIiwicmFuZG9tIiwic2V0UmFuZG9tIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInJlc3BvbnNlSGlzdG9yeSIsInNldFJlc3BvbnNlSGlzdG9yeSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJndXNzZXMiLCJzZXRHdWVzc2VzIiwiaXNNb3VudGVkIiwidXNlUmVmIiwicmVzIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImF4aW9zIiwicmVzdWx0IiwibnVtYmVyIiwiZGF0YSIsInNwbGl0IiwiZmlsdGVyIiwibnVtIiwia2V5IiwibWFwIiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJuZXdOdW0iLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwiY2hlY2tJZk1hdGNoIiwicHJldmVudERlZmF1bHQiLCJpbmNsdWRlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsIm5ld01lc3NhZ2UiLCJjb21wYXJlIiwibnVtMSIsIm51bTIiLCJzYW1lUG9zIiwiZm91bmROdW0iLCJpIiwibGVuZ3RoIiwiaiIsImFsbE51bWJlcnMiLCJzdHlsZXMiLCJnYW1lIiwiYnV0dG9uIiwiYm9keSIsIm51bWJlcnNCb3giLCJ4IiwiZ3Vlc3NTdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQyxDQUFELENBRDFCO0FBQUEsTUFDYkMsV0FEYTtBQUFBLE1BQ0FDLGNBREE7O0FB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QUQsQ0FBaEIsRUFBK0IyQixHQUEvQixDQUFtQyxVQUFDa0MsQ0FBRCxFQUFJVCxDQUFKO0FBQUEsOEJBQVU7QUFBUSxjQUFFLEVBQUdBLENBQWI7QUFBd0Isb0JBQVEsRUFBSXJCLFlBQXBDO0FBQWtELHFCQUFTLEVBQUV5Qix5REFBTSxDQUFDbkM7QUFBcEUsYUFBcUIrQixDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFWO0FBQUEsU0FBbkM7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFNSTtBQUFRLGlCQUFTLEVBQUlJLHlEQUFNLENBQUNNLFdBQTVCO0FBQXlDLGVBQU8sRUFBSXpCLFlBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTFEsZUFhUjtBQUFLLGVBQVMsRUFBRW1CLHlEQUFNLENBQUNHLElBQXZCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFSCx5REFBTSxDQUFDSSxVQUF2QjtBQUFBLGtCQUNLcEQsZUFBZSxDQUFDbUIsR0FBaEIsQ0FBb0IsVUFBQ2tDLENBQUQsRUFBSVQsQ0FBSjtBQUFBLDhCQUFVO0FBQU0sY0FBRSxFQUFHQSxDQUFYO0FBQXNCLHFCQUFTLEVBQUVJLHlEQUFNLENBQUNuQyxNQUF4QztBQUFBLHNCQUFrRHdDO0FBQWxELGFBQW1CVCxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFWO0FBQUEsU0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBb0JILENBbEdEOztHQUFNdEQsUzs7QUFvR1NBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbWFzdGVybWluZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cblxuY29uc3QgbWF0ZXJtaW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb21iaW5hdGlvbiwgc2V0Q29tYmluYXRpb25dID0gdXNlU3RhdGUoNClcbiAgICBjb25zdCBbbmV3R2FtZSwgc2V0TmV3R2FtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JhbmRvbSwgc2V0UmFuZG9tXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2VIaXN0b3J5LCBzZXRSZXNwb25zZUhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtndXNzZXMsIHNldEd1ZXNzZXNdID0gdXNlU3RhdGUoWzEwXSk7XG5cbiAgICBjb25zdCBpc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHJlcyA9IHVzZVJlZihbXCJcIiwgXCJcIixcIlwiLFwiXCJdKTtcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpPT4ge1xuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vd3d3LnJhbmRvbS5vcmcvaW50ZWdlcnMvP251bT0ke2NvbWJpbmF0aW9ufSZtaW49MCZtYXg9NyZjb2w9MSZiYXNlPTEwJmZvcm1hdD1wbGFpbiZybmQ9bmV3YCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgbGV0IG51bWJlciA9IHJlc3VsdC5kYXRhLnNwbGl0KFwiXCIpLmZpbHRlcigobnVtLCBrZXkpID0+IGtleSAlIDIgPT09IDApLm1hcCgobnVtKSA9PiBOdW1iZXIobnVtKSk7XG4gICAgICAgICAgICAgIHNldFJhbmRvbShudW1iZXIpO1xuICAgICAgICAgICAgICByZXMuY3VycmVudCA9IFtcIlwiLFwiXCIsXCJcIixcIlwiXVxuICAgICAgICAgICAgICBzZXRSZXNwb25zZShyZXMuY3VycmVudCk7XG4gICAgICAgICAgICAgIHNldFJlc3BvbnNlSGlzdG9yeShbXSk7XG4gICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xuICAgICAgICAgICAgICBzZXROZXdHYW1lKGZhbHNlKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyYW5kb20pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc01vdW50ZWQuY3VycmVudD0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFtuZXdHYW1lXSlcbiAgICBcbiAgICBcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgbmV3TnVtID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIHJlcy5jdXJyZW50W2lkXSA9IG5ld051bTsgIFxuICAgICAgICBzZXRSZXNwb25zZShyZXMuY3VycmVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrSWZNYXRjaCA9IChlKT0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAocmVzLmN1cnJlbnQuaW5jbHVkZXMoXCJcIikpIHJldHVybjtcbiAgICAgICAgc2V0UmVzcG9uc2VIaXN0b3J5KHJlc3BvbnNlSGlzdG9yeSA9PiBbLi4ucmVzcG9uc2VIaXN0b3J5LCByZXNwb25zZV0pO1xuICAgICAgICBzZXRHdWVzc2VzKGd1c3NlcyAtIDEpXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKS5mb3JFYWNoKFxuICAgICAgICAgICAgaW5wdXQgPT4gKGlucHV0LnZhbHVlID0gXCJcIilcbiAgICAgICAgICApO1xuICAgICAgICBsZXQgbmV3TWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIGlmIChjb21wYXJlKHJhbmRvbSwgcmVzcG9uc2UpWzBdKXtcbiAgICAgICAgICAgIG5ld01lc3NhZ2UgPSBcIllvdSBoYXZlIGd1ZXNzZWQgYSBjdXJyZW50IG51bWJlciBhbmQgaXRzIGN1cnJlbnQgbG9jYXJ0aW9uXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcGFyZShyYW5kb20sIHJlc3BvbnNlKVsxXSkge1xuICAgICAgICAgICAgbmV3TWVzc2FnZSA9IFwiWW91IGhhdmUgZ3Vlc3NlZCBhIGN1cnJlbnQgbnVtYmVyXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdNZXNzYWdlPSBgU29ycnkhIFlvdXIgZ3Vlc3MgaXNuJ3QgY29ycmVjdCwgeW91IGhhdmUgJHtndXNzZXN9IGd1ZXNzZXMgbGVmdGA7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZXMgPT4gWy4uLm1lc3NhZ2VzLCBuZXdNZXNzYWdlXSlcbiAgICAgICAgcmVzLmN1cnJlbnQgPSByZXMuY3VycmVudC5tYXAobnVtID0+IG51bSA9IFwiXCIpXG4gICAgICAgIHNldFJlc3BvbnNlKHJlcy5jdXJyZW50KVxuXG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSAobnVtMSwgbnVtMikgPT4ge1xuICAgICAgICBsZXQgc2FtZVBvcyA9IGZhbHNlO1xuICAgICAgICBsZXQgZm91bmROdW0gPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bnVtMS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxudW0yLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaiAmJiBudW0xW2ldID09PSBudW0yW2pdKXtcbiAgICAgICAgICAgICAgICAgICAgc2FtZVBvcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kTnVtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bTFbaV0gPT09IG51bTJbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmROdW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3NhbWVQb3MsZm91bmROdW1dXG4gICAgfVxuICAgIGNvbnN0IGFsbE51bWJlcnMgPSBbMCwxLDIsMyw0LDUsNiw3XVxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCk9PntzZXROZXdHYW1lKHRydWUpfX0+U3RhcnQgdGhlIEdhbWU8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBcIj5cbiAgICAgICAge2d1c3Nlc30gZ3Vlc3NlcyBsZWZ0XG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJzQm94fT5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KGNvbWJpbmF0aW9uKSkubWFwKCh4LCBpKSA9PiA8aW5wdXQgIGlkID17aX0ga2V5PXtpfSBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0gPjwvaW5wdXQ+KX1cblxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSB7c3R5bGVzLmd1ZXNzU3VibWl0fSBvbkNsaWNrID0ge2NoZWNrSWZNYXRjaH0gPlN1Ym1pdCBHdWVzczwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyc0JveH0+XG4gICAgICAgICAgICB7cmVzcG9uc2VIaXN0b3J5Lm1hcCgoeCwgaSkgPT4gPGRpdiAgaWQgPXtpfSBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0gPnt4fTwvZGl2Pil9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYXRlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mastermind.js\n");

/***/ })

})