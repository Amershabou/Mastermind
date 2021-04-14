webpackHotUpdate_N_E("pages/mastermind",{

/***/ "./pages/mastermind.js":
/*!*****************************!*\
  !*** ./pages/mastermind.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/amershabou/Trainings/mastermind/pages/mastermind.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar matermind = function matermind() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(4),\n      combination = _useState[0],\n      setCombination = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      newGame = _useState2[0],\n      setNewGame = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      random = _useState3[0],\n      setRandom = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      response = _useState4[0],\n      setResponse = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      responseHistory = _useState5[0],\n      setResponseHistory = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      messages = _useState6[0],\n      setMessages = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([10]),\n      gusses = _useState7[0],\n      setGuesses = _useState7[1];\n\n  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(false);\n  var res = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])([\"\", \"\", \"\", \"\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])( /*#__PURE__*/Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n    var result, number;\n    return _Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!isMounted.current) {\n              _context.next = 14;\n              break;\n            }\n\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_5___default()(\"https://www.random.org/integers/?num=\".concat(combination, \"&min=0&max=7&col=1&base=10&format=plain&rnd=new\"));\n\n          case 3:\n            result = _context.sent;\n            number = result.data.split(\"\").filter(function (num, key) {\n              return key % 2 === 0;\n            }).map(function (num) {\n              return Number(num);\n            });\n            setRandom(number);\n            res.current = [\"\", \"\", \"\", \"\"];\n            setResponse(res.current);\n            setResponseHistory([]);\n            setGuesses([]);\n            setNewGame(false);\n            console.log(random);\n            _context.next = 15;\n            break;\n\n          case 14:\n            isMounted.current = true;\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [newGame]);\n\n  var handleChange = function handleChange(e) {\n    var newNum = Number(e.target.value);\n    var id = e.target.id;\n    res.current[id] = newNum;\n    setResponse(res.current);\n    console.log(response);\n  };\n\n  var checkIfMatch = function checkIfMatch(e) {\n    e.preventDefault();\n    if (res.current.includes(\"\")) return;\n    setResponseHistory(function (responseHistory) {\n      return [].concat(Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(responseHistory), [response]);\n    });\n    setGuesses(gusses - 1);\n    Array.from(document.querySelectorAll(\"input\")).forEach(function (input) {\n      return input.value = \"\";\n    });\n    var newMessage = \"\";\n\n    if (compare(random, response)[0]) {\n      newMessage = \"You have guessed a current number and its current locartion\";\n    } else if (compare(random, response)[1]) {\n      newMessage = \"You have guessed a current number\";\n    } else {\n      newMessage = \"Sorry! Your guess isn't correct, you have \".concat(gusses, \" guesses left\");\n    }\n\n    setMessages(function (messages) {\n      return [].concat(Object(_Users_amershabou_Trainings_mastermind_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(messages), [newMessage]);\n    });\n    res.current = res.current.map(function (num) {\n      return num = \"\";\n    });\n    setResponse(res.current);\n  };\n\n  var compare = function compare(num1, num2) {\n    var samePos = false;\n    var foundNum = false;\n\n    for (var i = 0; i < num1.length; i++) {\n      for (var j = 0; j < num2.length; j++) {\n        if (i === j && num1[i] === num2[j]) {\n          samePos = true;\n          foundNum = true;\n        } else if (num1[i] === num2[j]) {\n          foundNum = true;\n        }\n      }\n    }\n\n    return [samePos, foundNum];\n  };\n\n  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.game,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,\n      onClick: function onClick() {\n        setNewGame(true);\n      },\n      children: \"Start the Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"help\",\n      children: [gusses, \" guesses left\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.body,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.numbersBox,\n        children: Array.from(Array(combination)).map(function (x, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            id: i,\n            onChange: handleChange,\n            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.number\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 59\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.guessSubmit,\n        onClick: checkIfMatch,\n        children: \"Submit Guess\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.body,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.numbersBox,\n        children: responseHistory.map(function (x, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              id: i,\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.number,\n              children: x\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 49\n            }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: messages[i]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 108\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 44\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(matermind, \"7lstUqQdkQs3exYk2tRDayn1my4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (matermind);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVybWluZC5qcz9hMDFhIl0sIm5hbWVzIjpbIm1hdGVybWluZCIsInVzZVN0YXRlIiwiY29tYmluYXRpb24iLCJzZXRDb21iaW5hdGlvbiIsIm5ld0dhbWUiLCJzZXROZXdHYW1lIiwicmFuZG9tIiwic2V0UmFuZG9tIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInJlc3BvbnNlSGlzdG9yeSIsInNldFJlc3BvbnNlSGlzdG9yeSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJndXNzZXMiLCJzZXRHdWVzc2VzIiwiaXNNb3VudGVkIiwidXNlUmVmIiwicmVzIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImF4aW9zIiwicmVzdWx0IiwibnVtYmVyIiwiZGF0YSIsInNwbGl0IiwiZmlsdGVyIiwibnVtIiwia2V5IiwibWFwIiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJuZXdOdW0iLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwiY2hlY2tJZk1hdGNoIiwicHJldmVudERlZmF1bHQiLCJpbmNsdWRlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsIm5ld01lc3NhZ2UiLCJjb21wYXJlIiwibnVtMSIsIm51bTIiLCJzYW1lUG9zIiwiZm91bmROdW0iLCJpIiwibGVuZ3RoIiwiaiIsImFsbE51bWJlcnMiLCJzdHlsZXMiLCJnYW1lIiwiYnV0dG9uIiwiYm9keSIsIm51bWJlcnNCb3giLCJ4IiwiZ3Vlc3NTdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQyxDQUFELENBRDFCO0FBQUEsTUFDYkMsV0FEYTtBQUFBLE1BQ0FDLGNBREE7O0FB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bmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xuXG5cbmNvbnN0IG1hdGVybWluZCA9ICgpID0+IHtcbiAgICBjb25zdCBbY29tYmluYXRpb24sIHNldENvbWJpbmF0aW9uXSA9IHVzZVN0YXRlKDQpXG4gICAgY29uc3QgW25ld0dhbWUsIHNldE5ld0dhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtyYW5kb20sIHNldFJhbmRvbV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Jlc3BvbnNlSGlzdG9yeSwgc2V0UmVzcG9uc2VIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZ3Vzc2VzLCBzZXRHdWVzc2VzXSA9IHVzZVN0YXRlKFsxMF0pO1xuXG4gICAgY29uc3QgaXNNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCByZXMgPSB1c2VSZWYoW1wiXCIsIFwiXCIsXCJcIixcIlwiXSk7XG4gICAgdXNlRWZmZWN0KCBhc3luYyAoKT0+IHtcbiAgICAgICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFxuICAgICAgICAgICAgICAgIGBodHRwczovL3d3dy5yYW5kb20ub3JnL2ludGVnZXJzLz9udW09JHtjb21iaW5hdGlvbn0mbWluPTAmbWF4PTcmY29sPTEmYmFzZT0xMCZmb3JtYXQ9cGxhaW4mcm5kPW5ld2AsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxldCBudW1iZXIgPSByZXN1bHQuZGF0YS5zcGxpdChcIlwiKS5maWx0ZXIoKG51bSwga2V5KSA9PiBrZXkgJSAyID09PSAwKS5tYXAoKG51bSkgPT4gTnVtYmVyKG51bSkpO1xuICAgICAgICAgICAgICBzZXRSYW5kb20obnVtYmVyKTtcbiAgICAgICAgICAgICAgcmVzLmN1cnJlbnQgPSBbXCJcIixcIlwiLFwiXCIsXCJcIl1cbiAgICAgICAgICAgICAgc2V0UmVzcG9uc2UocmVzLmN1cnJlbnQpO1xuICAgICAgICAgICAgICBzZXRSZXNwb25zZUhpc3RvcnkoW10pO1xuICAgICAgICAgICAgICBzZXRHdWVzc2VzKFtdKTtcbiAgICAgICAgICAgICAgc2V0TmV3R2FtZShmYWxzZSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmFuZG9tKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQ9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSxbbmV3R2FtZV0pXG4gICAgXG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgbGV0IG5ld051bSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGxldCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgICByZXMuY3VycmVudFtpZF0gPSBuZXdOdW07ICBcbiAgICAgICAgc2V0UmVzcG9uc2UocmVzLmN1cnJlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmTWF0Y2ggPSAoZSk9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHJlcy5jdXJyZW50LmluY2x1ZGVzKFwiXCIpKSByZXR1cm47XG4gICAgICAgIHNldFJlc3BvbnNlSGlzdG9yeShyZXNwb25zZUhpc3RvcnkgPT4gWy4uLnJlc3BvbnNlSGlzdG9yeSwgcmVzcG9uc2VdKTtcbiAgICAgICAgc2V0R3Vlc3NlcyhndXNzZXMgLSAxKVxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSkuZm9yRWFjaChcbiAgICAgICAgICAgIGlucHV0ID0+IChpbnB1dC52YWx1ZSA9IFwiXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgbGV0IG5ld01lc3NhZ2UgPSBcIlwiO1xuICAgICAgICBpZiAoY29tcGFyZShyYW5kb20sIHJlc3BvbnNlKVswXSl7XG4gICAgICAgICAgICBuZXdNZXNzYWdlID0gXCJZb3UgaGF2ZSBndWVzc2VkIGEgY3VycmVudCBudW1iZXIgYW5kIGl0cyBjdXJyZW50IGxvY2FydGlvblwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXBhcmUocmFuZG9tLCByZXNwb25zZSlbMV0pIHtcbiAgICAgICAgICAgIG5ld01lc3NhZ2UgPSBcIllvdSBoYXZlIGd1ZXNzZWQgYSBjdXJyZW50IG51bWJlclwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TWVzc2FnZT0gYFNvcnJ5ISBZb3VyIGd1ZXNzIGlzbid0IGNvcnJlY3QsIHlvdSBoYXZlICR7Z3Vzc2VzfSBndWVzc2VzIGxlZnRgO1xuICAgICAgICB9XG4gICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzID0+IFsuLi5tZXNzYWdlcywgbmV3TWVzc2FnZV0pXG4gICAgICAgIHJlcy5jdXJyZW50ID0gcmVzLmN1cnJlbnQubWFwKG51bSA9PiBudW0gPSBcIlwiKVxuICAgICAgICBzZXRSZXNwb25zZShyZXMuY3VycmVudClcblxuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gKG51bTEsIG51bTIpID0+IHtcbiAgICAgICAgbGV0IHNhbWVQb3MgPSBmYWxzZTtcbiAgICAgICAgbGV0IGZvdW5kTnVtID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG51bTEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bnVtMi5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGogJiYgbnVtMVtpXSA9PT0gbnVtMltqXSl7XG4gICAgICAgICAgICAgICAgICAgIHNhbWVQb3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZE51bSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0xW2ldID09PSBudW0yW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kTnVtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtzYW1lUG9zLGZvdW5kTnVtXVxuICAgIH1cbiAgICBjb25zdCBhbGxOdW1iZXJzID0gWzAsMSwyLDMsNCw1LDYsN11cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpPT57c2V0TmV3R2FtZSh0cnVlKX19PlN0YXJ0IHRoZSBHYW1lPC9idXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XG4gICAgICAgIHtndXNzZXN9IGd1ZXNzZXMgbGVmdFxuICAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyc0JveH0+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShjb21iaW5hdGlvbikpLm1hcCgoeCwgaSkgPT4gPGlucHV0ICBpZCA9e2l9IGtleT17aX0gb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9ID48L2lucHV0Pil9XG5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5ndWVzc1N1Ym1pdH0gb25DbGljayA9IHtjaGVja0lmTWF0Y2h9ID5TdWJtaXQgR3Vlc3M8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcnNCb3h9PlxuICAgICAgICAgICAge3Jlc3BvbnNlSGlzdG9yeS5tYXAoKHgsIGkpID0+IDxkaXY+PGRpdiAgaWQgPXtpfSBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0gPnt4fTwvZGl2PiA8ZGl2PnttZXNzYWdlc1tpXX08L2Rpdj48L2Rpdj4pfVxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0ZXJtaW5kOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mastermind.js\n");

/***/ })

})