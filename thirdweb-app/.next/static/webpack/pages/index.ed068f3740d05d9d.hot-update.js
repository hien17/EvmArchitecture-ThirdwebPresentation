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

/***/ "./components/TransferNativeToken.tsx":
/*!********************************************!*\
  !*** ./components/TransferNativeToken.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\nconst TransferNativeToken = ()=>{\n    _s();\n    const { mutate: transferNativeToken, isLoading, error } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useTransferNativeToken)();\n    if (error) {\n        console.error(\"failed to transfer tokens\", error);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: isLoading,\n        onClick: ()=>transferNativeToken({\n                to: \"0xd0Cd8C44CF7530dD192575Ae1a6D5FE97c4dC35F\",\n                amount: \"0.02\"\n            }),\n        style: {\n            padding: \"16px 48px\",\n            borderRadius: \"12px\",\n            fontSize: \"18px\"\n        },\n        children: \"Transfer\"\n    }, void 0, false, {\n        fileName: \"D:\\\\test\\\\thirdweb-app\\\\components\\\\TransferNativeToken.tsx\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, undefined);\n};\n_s(TransferNativeToken, \"JUrz5ZAmKV4e2+PT5e/ATnMJlfk=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useTransferNativeToken\n    ];\n});\n_c = TransferNativeToken;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransferNativeToken);\nvar _c;\n$RefreshReg$(_c, \"TransferNativeToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zZmVyTmF0aXZlVG9rZW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUU3RCxNQUFNQyxzQkFBc0I7O0lBQ3hCLE1BQU0sRUFDSkMsUUFBUUMsbUJBQW1CLEVBQzNCQyxTQUFTLEVBQ1RDLEtBQUssRUFDTixHQUFHTCwyRUFBc0JBO0lBRTFCLElBQUlLLE9BQU87UUFDVEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7SUFDN0M7SUFFQSxxQkFDRSw4REFBQ0U7UUFDQ0MsVUFBVUo7UUFDVkssU0FBUyxJQUNQTixvQkFBb0I7Z0JBQ2xCTyxJQUFJO2dCQUNKQyxRQUFRO1lBQ1Y7UUFFRkMsT0FBTztZQUNMQyxTQUFTO1lBQ1RDLGNBQWM7WUFDZEMsVUFBVTtRQUNaO2tCQUNEOzs7Ozs7QUFJTDtHQTdCSWQ7O1FBS0VELHVFQUFzQkE7OztLQUx4QkM7QUErQkosK0RBQWVBLG1CQUFtQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RyYW5zZmVyTmF0aXZlVG9rZW4udHN4P2E4OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNmZXJOYXRpdmVUb2tlbiB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcblxyXG5jb25zdCBUcmFuc2Zlck5hdGl2ZVRva2VuID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtdXRhdGU6IHRyYW5zZmVyTmF0aXZlVG9rZW4sXHJcbiAgICAgIGlzTG9hZGluZyxcclxuICAgICAgZXJyb3IsXHJcbiAgICB9ID0gdXNlVHJhbnNmZXJOYXRpdmVUb2tlbigpO1xyXG4gIFxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJmYWlsZWQgdG8gdHJhbnNmZXIgdG9rZW5zXCIsIGVycm9yKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICB0cmFuc2Zlck5hdGl2ZVRva2VuKHtcclxuICAgICAgICAgICAgdG86IFwiMHhkMENkOEM0NENGNzUzMGREMTkyNTc1QWUxYTZENUZFOTdjNGRDMzVGXCIsXHJcbiAgICAgICAgICAgIGFtb3VudDogXCIwLjAyXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcGFkZGluZzogJzE2cHggNDhweCcsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFRyYW5zZmVyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBUcmFuc2Zlck5hdGl2ZVRva2VuXHJcbiAgIl0sIm5hbWVzIjpbInVzZVRyYW5zZmVyTmF0aXZlVG9rZW4iLCJUcmFuc2Zlck5hdGl2ZVRva2VuIiwibXV0YXRlIiwidHJhbnNmZXJOYXRpdmVUb2tlbiIsImlzTG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsInRvIiwiYW1vdW50Iiwic3R5bGUiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TransferNativeToken.tsx\n"));

/***/ })

});