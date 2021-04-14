webpackHotUpdate_N_E("pages/mastermind",{

/***/ "./pages/mastermind.js":
/*!*****************************!*\
  !*** ./pages/mastermind.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/mastermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var combination = 4;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      newGame = _useState[0],\n      setNewGame = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      random = _useState2[0],\n      setRandom = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      response = _useState3[0],\n      setResponse = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      responseHistory = _useState4[0],\n      setResponseHistory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      messages = _useState5[0],\n      setMessages = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([10]),\n      gusses = _useState6[0],\n      setGuesses = _useState6[1];\n\n  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(false);\n  var res = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])([\"\", \"\", \"\", \"\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n    var result, number;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!isMounted.current) {\n              _context.next = 15;\n              break;\n            }\n\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_5___default()(\"https://www.random.org/integers/?num=\".concat(combination, \"&min=0&max=7&col=1&base=10&format=plain&rnd=new\"));\n\n          case 3:\n            result = _context.sent;\n            number = result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            });\n            setRandom(number);\n            res.current = [\"\", \"\", \"\", \"\"];\n            setResponse(res.current);\n            setResponseHistory([]);\n            setGuesses([10]);\n            setNewGame(false);\n            Array.from(document.querySelectorAll(\"input\")).forEach(function (input) {\n              return input.value = \"\";\n            });\n            console.log(random);\n            _context.next = 16;\n            break;\n\n          case 15:\n            isMounted.current = true;\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n\n  var handleChange = function handleChange(e) {\n    var newNum = Number(e.target.value);\n    var id = e.target.id;\n    res.current[id] = newNum;\n    setResponse(res.current);\n    console.log(response);\n  };\n\n  var checkIfMatch = function checkIfMatch(e) {\n    e.preventDefault();\n    if (res.current.includes(\"\")) return;\n    setResponseHistory(function (responseHistory) {\n      return [].concat(Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(responseHistory), [response]);\n    });\n    setGuesses(gusses - 1);\n    Array.from(document.querySelectorAll(\"input\")).forEach(function (input) {\n      return input.value = \"\";\n    });\n    var newMessage = \"\";\n    console.log(response);\n\n    if (areEqual(random, response)) {\n      newMessage = \"Congratulations! If have gussed all the numbers and won the game!!!\";\n    } else {\n      if (compare(random, response)[0]) {\n        newMessage = \"You have guessed a current number and its current locartion\";\n      } else if (compare(random, response)[1]) {\n        newMessage = \"You have guessed a current number\";\n      } else {\n        newMessage = \"Sorry! Your guess isn't correct, you have \".concat(gusses, \" guesses left\");\n      }\n    }\n\n    setMessages(function (messages) {\n      return [].concat(Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(messages), [newMessage]);\n    });\n    res.current = res.current.map(function (num) {\n      return num = \"\";\n    });\n    setResponse(res.current);\n  };\n\n  var areEqual = function areEqual(random, response) {\n    console.log(random.join(\"\") === response.join(\"\"));\n\n    if (random.join(\"\") === response.join(\"\")) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  var compare = function compare(num1, num2) {\n    var samePos = false;\n    var foundNum = false;\n\n    for (var i = 0; i < num1.length; i++) {\n      for (var j = 0; j < num2.length; j++) {\n        if (i === j && num1[i] === num2[j]) {\n          return [samePos, foundNum];\n        }\n\n        if (num1[i] === num2[j]) {\n          return [samePos, foundNum];\n        }\n      }\n    }\n\n    return [samePos, foundNum];\n  };\n\n  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.game,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button,\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"help\",\n      children: [gusses, \" guesses left\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.body,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.numbersBox,\n        children: Array.from(Array(combination)).map(function (x, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            id: i,\n            onChange: handleChange,\n            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.number\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 59\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.guessSubmit,\n        onClick: checkIfMatch,\n        children: \"Submit Guess\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.body,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.numbersBox,\n        children: responseHistory.map(function (x, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              id: i,\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.number,\n              children: x\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 49\n            }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: messages[i]\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 108\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 44\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"OTbfVq4YYOZJ/5f++PQxr7izdjI=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"withRouter\"])(matermind));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVybWluZC5qcz9hMDFhIl0sIm5hbWVzIjpbIm1hdGVybWluZCIsImNvbWJpbmF0aW9uIiwidXNlU3RhdGUiLCJuZXdHYW1lIiwic2V0TmV3R2FtZSIsInJhbmRvbSIsInNldFJhbmRvbSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJyZXNwb25zZUhpc3RvcnkiLCJzZXRSZXNwb25zZUhpc3RvcnkiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiZ3Vzc2VzIiwic2V0R3Vlc3NlcyIsImlzTW91bnRlZCIsInVzZVJlZiIsInJlcyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJheGlvcyIsInJlc3VsdCIsIm51bWJlciIsImRhdGEiLCJzcGxpdCIsImZpbHRlciIsIm51bSIsImtleSIsIm1hcCIsIk51bWJlciIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJuZXdOdW0iLCJ0YXJnZXQiLCJpZCIsImNoZWNrSWZNYXRjaCIsInByZXZlbnREZWZhdWx0IiwiaW5jbHVkZXMiLCJuZXdNZXNzYWdlIiwiYXJlRXF1YWwiLCJjb21wYXJlIiwiam9pbiIsIm51bTEiLCJudW0yIiwic2FtZVBvcyIsImZvdW5kTnVtIiwiaSIsImxlbmd0aCIsImoiLCJhbGxOdW1iZXJzIiwic3R5bGVzIiwiZ2FtZSIsImJ1dHRvbiIsImJvZHkiLCJudW1iZXJzQm94IiwieCIsImd1ZXNzU3VibWl0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxXQUFXLEdBQUcsQ0FBcEI7O0FBRG9CLGtCQUVVQyxzREFBUSxD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QUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTFEsZUFhUjtBQUFLLGVBQVMsRUFBRWUseURBQU0sQ0FBQ0csSUFBdkI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVILHlEQUFNLENBQUNJLFVBQXZCO0FBQUEsa0JBQ0t0RCxlQUFlLENBQUNtQixHQUFoQixDQUFvQixVQUFDb0MsQ0FBRCxFQUFJVCxDQUFKO0FBQUEsOEJBQVU7QUFBQSxvQ0FBSztBQUFNLGdCQUFFLEVBQUdBLENBQVg7QUFBc0IsdUJBQVMsRUFBRUkseURBQU0sQ0FBQ3JDLE1BQXhDO0FBQUEsd0JBQWtEMEM7QUFBbEQsZUFBbUJULENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUwsb0JBQWdFO0FBQUEsd0JBQWM1QyxRQUFRLENBQUM0QyxDQUFEO0FBQXRCLGVBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFWO0FBQUEsU0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBb0JILENBbkhEOztHQUFNdkQsUzs7QUFxSFNrRSw2SEFBVSxDQUFDbEUsU0FBRCxDQUF6QiIsImZpbGUiOiIuL3BhZ2VzL21hc3Rlcm1pbmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cblxuY29uc3QgbWF0ZXJtaW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0aW9uID0gNDtcbiAgICBjb25zdCBbbmV3R2FtZSwgc2V0TmV3R2FtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JhbmRvbSwgc2V0UmFuZG9tXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2VIaXN0b3J5LCBzZXRSZXNwb25zZUhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtndXNzZXMsIHNldEd1ZXNzZXNdID0gdXNlU3RhdGUoWzEwXSk7XG5cbiAgICBjb25zdCBpc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHJlcyA9IHVzZVJlZihbXCJcIiwgXCJcIixcIlwiLFwiXCJdKTtcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpPT4ge1xuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vd3d3LnJhbmRvbS5vcmcvaW50ZWdlcnMvP251bT0ke2NvbWJpbmF0aW9ufSZtaW49MCZtYXg9NyZjb2w9MSZiYXNlPTEwJmZvcm1hdD1wbGFpbiZybmQ9bmV3YCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgbGV0IG51bWJlciA9IHJlc3VsdC5kYXRhLnNwbGl0KFwiXCIpLmZpbHRlcigobnVtLCBrZXkpID0+IGtleSAlIDIgPT09IDApLm1hcCgobnVtKSA9PiBOdW1iZXIobnVtKSk7XG4gICAgICAgICAgICAgIHNldFJhbmRvbShudW1iZXIpO1xuICAgICAgICAgICAgICByZXMuY3VycmVudCA9IFtcIlwiLFwiXCIsXCJcIixcIlwiXVxuICAgICAgICAgICAgICBzZXRSZXNwb25zZShyZXMuY3VycmVudCk7XG4gICAgICAgICAgICAgIHNldFJlc3BvbnNlSGlzdG9yeShbXSk7XG4gICAgICAgICAgICAgIHNldEd1ZXNzZXMoWzEwXSk7XG4gICAgICAgICAgICAgIHNldE5ld0dhbWUoZmFsc2UpXG4gICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIGlucHV0ID0+IChpbnB1dC52YWx1ZSA9IFwiXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzTW91bnRlZC5jdXJyZW50PSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sW25ld0dhbWVdKVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCBuZXdOdW0gPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgcmVzLmN1cnJlbnRbaWRdID0gbmV3TnVtOyAgXG4gICAgICAgIHNldFJlc3BvbnNlKHJlcy5jdXJyZW50KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tJZk1hdGNoID0gKGUpPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChyZXMuY3VycmVudC5pbmNsdWRlcyhcIlwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRSZXNwb25zZUhpc3RvcnkocmVzcG9uc2VIaXN0b3J5ID0+IFsuLi5yZXNwb25zZUhpc3RvcnksIHJlc3BvbnNlXSk7XG4gICAgICAgIHNldEd1ZXNzZXMoZ3Vzc2VzIC0gMSlcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpLmZvckVhY2goXG4gICAgICAgICAgICBpbnB1dCA9PiAoaW5wdXQudmFsdWUgPSBcIlwiKVxuICAgICAgICAgICk7XG4gICAgICAgIGxldCBuZXdNZXNzYWdlID0gXCJcIjtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGlmIChhcmVFcXVhbChyYW5kb20sIHJlc3BvbnNlKSl7XG4gICAgICAgICAgICBuZXdNZXNzYWdlID0gXCJDb25ncmF0dWxhdGlvbnMhIElmIGhhdmUgZ3Vzc2VkIGFsbCB0aGUgbnVtYmVycyBhbmQgd29uIHRoZSBnYW1lISEhXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShyYW5kb20sIHJlc3BvbnNlKVswXSl7XG4gICAgICAgICAgICAgICAgbmV3TWVzc2FnZSA9IFwiWW91IGhhdmUgZ3Vlc3NlZCBhIGN1cnJlbnQgbnVtYmVyIGFuZCBpdHMgY3VycmVudCBsb2NhcnRpb25cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGFyZShyYW5kb20sIHJlc3BvbnNlKVsxXSkge1xuICAgICAgICAgICAgICAgIG5ld01lc3NhZ2UgPSBcIllvdSBoYXZlIGd1ZXNzZWQgYSBjdXJyZW50IG51bWJlclwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdNZXNzYWdlPSBgU29ycnkhIFlvdXIgZ3Vlc3MgaXNuJ3QgY29ycmVjdCwgeW91IGhhdmUgJHtndXNzZXN9IGd1ZXNzZXMgbGVmdGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzID0+IFsuLi5tZXNzYWdlcywgbmV3TWVzc2FnZV0pXG4gICAgICAgIHJlcy5jdXJyZW50ID0gcmVzLmN1cnJlbnQubWFwKG51bSA9PiBudW0gPSBcIlwiKVxuICAgICAgICBzZXRSZXNwb25zZShyZXMuY3VycmVudClcblxuICAgIH1cbiAgICBjb25zdCBhcmVFcXVhbCA9IChyYW5kb20sIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbS5qb2luKFwiXCIpID09PSByZXNwb25zZS5qb2luKFwiXCIpKVxuICAgICAgICBpZiAocmFuZG9tLmpvaW4oXCJcIikgPT09IHJlc3BvbnNlLmpvaW4oXCJcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSAobnVtMSwgbnVtMikgPT4ge1xuICAgICAgICBsZXQgc2FtZVBvcyA9IGZhbHNlO1xuICAgICAgICBsZXQgZm91bmROdW0gPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bnVtMS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxudW0yLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaiAmJiBudW0xW2ldID09PSBudW0yW2pdKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzYW1lUG9zLGZvdW5kTnVtXVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIGlmIChudW0xW2ldID09PSBudW0yW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbc2FtZVBvcyxmb3VuZE51bV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtzYW1lUG9zLGZvdW5kTnVtXVxuICAgIH1cbiAgICBjb25zdCBhbGxOdW1iZXJzID0gWzAsMSwyLDMsNCw1LDYsN11cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpPT57c2V0TmV3R2FtZSh0cnVlKX19PlN0YXJ0IHRoZSBHYW1lPC9idXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XG4gICAgICAgIHtndXNzZXN9IGd1ZXNzZXMgbGVmdFxuICAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyc0JveH0+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShjb21iaW5hdGlvbikpLm1hcCgoeCwgaSkgPT4gPGlucHV0ICBpZCA9e2l9IGtleT17aX0gb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9ID48L2lucHV0Pil9XG5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5ndWVzc1N1Ym1pdH0gb25DbGljayA9IHtjaGVja0lmTWF0Y2h9ID5TdWJtaXQgR3Vlc3M8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcnNCb3h9PlxuICAgICAgICAgICAge3Jlc3BvbnNlSGlzdG9yeS5tYXAoKHgsIGkpID0+IDxkaXY+PGRpdiAgaWQgPXtpfSBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0gPnt4fTwvZGl2PiA8ZGl2IGtleT17aX0+e21lc3NhZ2VzW2ldfTwvZGl2PjwvZGl2Pil9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKG1hdGVybWluZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mastermind.js\n");

/***/ })

})