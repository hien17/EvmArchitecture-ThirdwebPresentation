"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Withdraw.tsx":
/*!*********************************!*\
  !*** ./components/Withdraw.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\nfunction Withdraw() {\n    _s();\n    const { contract } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xd0Cd8C44CF7530dD192575Ae1a6D5FE97c4dC35F\");\n    const { mutateAsync, isLoading, error } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)(contract, \"withdraw\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n        contractAddress: \"0xd0Cd8C44CF7530dD192575Ae1a6D5FE97c4dC35F\",\n        // Calls the \"setName\" function on your smart contract with \"My Name\" as the first argument\n        action: ()=>mutateAsync({\n                args: [\n                    20000000000000000\n                ]\n            }),\n        children: \"Send Transaction\"\n    }, void 0, false, {\n        fileName: \"D:\\\\test\\\\thirdweb-app\\\\components\\\\Withdraw.tsx\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, this);\n}\n_s(Withdraw, \"tsTM3Lj6ngLrWYxHkWfgOr4Vvr8=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractWrite\n    ];\n});\n_c = Withdraw;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Withdraw);\nvar _c;\n$RefreshReg$(_c, \"Withdraw\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpdGhkcmF3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFJK0I7QUFFN0IsU0FBU0c7O0lBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0gsZ0VBQVdBLENBQUM7SUFDakMsTUFBTSxFQUFFSSxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFLEdBQUdQLHFFQUFnQkEsQ0FDeERJLFVBQ0E7SUFHRixxQkFDRSw4REFBQ0YsMkRBQVVBO1FBQ1RNLGlCQUFpQjtRQUNqQiwyRkFBMkY7UUFDM0ZDLFFBQVEsSUFBTUosWUFBWTtnQkFBRUssTUFBTTtvQkFBQztpQkFBa0I7WUFBQztrQkFDdkQ7Ozs7OztBQUlMO0dBaEJTUDs7UUFDY0YsNERBQVdBO1FBQ1VELGlFQUFnQkE7OztLQUZuREc7QUFpQlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaXRoZHJhdy50c3g/NzVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgdXNlQ29udHJhY3RXcml0ZSxcclxuICAgIHVzZUNvbnRyYWN0LFxyXG4gICAgV2ViM0J1dHRvbixcclxuICB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcbiAgXHJcbiAgZnVuY3Rpb24gV2l0aGRyYXcoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCgnMHhkMENkOEM0NENGNzUzMGREMTkyNTc1QWUxYTZENUZFOTdjNGRDMzVGJyk7XHJcbiAgICBjb25zdCB7IG11dGF0ZUFzeW5jLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VDb250cmFjdFdyaXRlKFxyXG4gICAgICBjb250cmFjdCxcclxuICAgICAgXCJ3aXRoZHJhd1wiLFxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXZWIzQnV0dG9uXHJcbiAgICAgICAgY29udHJhY3RBZGRyZXNzPXsnMHhkMENkOEM0NENGNzUzMGREMTkyNTc1QWUxYTZENUZFOTdjNGRDMzVGJ31cclxuICAgICAgICAvLyBDYWxscyB0aGUgXCJzZXROYW1lXCIgZnVuY3Rpb24gb24geW91ciBzbWFydCBjb250cmFjdCB3aXRoIFwiTXkgTmFtZVwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudFxyXG4gICAgICAgIGFjdGlvbj17KCkgPT4gbXV0YXRlQXN5bmMoeyBhcmdzOiBbMjAwMDAwMDAwMDAwMDAwMDBdIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgU2VuZCBUcmFuc2FjdGlvblxyXG4gICAgICA8L1dlYjNCdXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBXaXRoZHJhdztcclxuICAiXSwibmFtZXMiOlsidXNlQ29udHJhY3RXcml0ZSIsInVzZUNvbnRyYWN0IiwiV2ViM0J1dHRvbiIsIldpdGhkcmF3IiwiY29udHJhY3QiLCJtdXRhdGVBc3luYyIsImlzTG9hZGluZyIsImVycm9yIiwiY29udHJhY3RBZGRyZXNzIiwiYWN0aW9uIiwiYXJncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Withdraw.tsx\n"));

/***/ })

});