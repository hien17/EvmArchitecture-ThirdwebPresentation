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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TransferNativeToken = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionButton, {\n        transaction: ()=>{\n            // Create a transaction object and return it\n            const tx = prepareContractCall({\n                contract,\n                method: \"mint\",\n                params: [\n                    address,\n                    amount\n                ]\n            });\n            return tx;\n        },\n        onTransactionSent: (result)=>{\n            console.log(\"Transaction submitted\", result.transactionHash);\n        },\n        onTransactionConfirmed: (receipt)=>{\n            console.log(\"Transaction confirmed\", receipt.transactionHash);\n        },\n        onError: (error)=>{\n            console.error(\"Transaction error\", error);\n        },\n        children: \"Confirm Transaction\"\n    }, void 0, false, {\n        fileName: \"D:\\\\test\\\\thirdweb-app\\\\components\\\\TransferNativeToken.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TransferNativeToken;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransferNativeToken);\nvar _c;\n$RefreshReg$(_c, \"TransferNativeToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zZmVyTmF0aXZlVG9rZW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxzQkFBc0I7SUFDMUIscUJBQ0UsOERBQUNDO1FBQ0NDLGFBQWE7WUFDWCw0Q0FBNEM7WUFDNUMsTUFBTUMsS0FBS0Msb0JBQW9CO2dCQUM3QkM7Z0JBQ0FDLFFBQVE7Z0JBQ1JDLFFBQVE7b0JBQUNDO29CQUFTQztpQkFBTztZQUMzQjtZQUNBLE9BQU9OO1FBQ1Q7UUFDQU8sbUJBQW1CLENBQUNDO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUMseUJBQXlCRixPQUFPRyxlQUFlO1FBQzdEO1FBQ0FDLHdCQUF3QixDQUFDQztZQUN2QkosUUFBUUMsR0FBRyxDQUFDLHlCQUF5QkcsUUFBUUYsZUFBZTtRQUM5RDtRQUNBRyxTQUFTLENBQUNDO1lBQ1JOLFFBQVFNLEtBQUssQ0FBQyxxQkFBcUJBO1FBQ3JDO2tCQUNEOzs7Ozs7QUFJSDtLQXpCSWxCO0FBMkJKLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2Zlck5hdGl2ZVRva2VuLnRzeD9hODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYjNCdXR0b24sIHVzZVRyYW5zZmVyTmF0aXZlVG9rZW4gfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xyXG5cclxuY29uc3QgVHJhbnNmZXJOYXRpdmVUb2tlbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRyYW5zYWN0aW9uQnV0dG9uXHJcbiAgICAgIHRyYW5zYWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgdHJhbnNhY3Rpb24gb2JqZWN0IGFuZCByZXR1cm4gaXRcclxuICAgICAgICBjb25zdCB0eCA9IHByZXBhcmVDb250cmFjdENhbGwoe1xyXG4gICAgICAgICAgY29udHJhY3QsXHJcbiAgICAgICAgICBtZXRob2Q6IFwibWludFwiLFxyXG4gICAgICAgICAgcGFyYW1zOiBbYWRkcmVzcywgYW1vdW50XSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uVHJhbnNhY3Rpb25TZW50PXsocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBzdWJtaXR0ZWRcIiwgcmVzdWx0LnRyYW5zYWN0aW9uSGFzaCk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uVHJhbnNhY3Rpb25Db25maXJtZWQ9eyhyZWNlaXB0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBjb25maXJtZWRcIiwgcmVjZWlwdC50cmFuc2FjdGlvbkhhc2gpO1xyXG4gICAgICB9fVxyXG4gICAgICBvbkVycm9yPXsoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVHJhbnNhY3Rpb24gZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICBDb25maXJtIFRyYW5zYWN0aW9uXHJcbiAgICA8L1RyYW5zYWN0aW9uQnV0dG9uPlxyXG4gICk7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgVHJhbnNmZXJOYXRpdmVUb2tlblxyXG4gICJdLCJuYW1lcyI6WyJUcmFuc2Zlck5hdGl2ZVRva2VuIiwiVHJhbnNhY3Rpb25CdXR0b24iLCJ0cmFuc2FjdGlvbiIsInR4IiwicHJlcGFyZUNvbnRyYWN0Q2FsbCIsImNvbnRyYWN0IiwibWV0aG9kIiwicGFyYW1zIiwiYWRkcmVzcyIsImFtb3VudCIsIm9uVHJhbnNhY3Rpb25TZW50IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRyYW5zYWN0aW9uSGFzaCIsIm9uVHJhbnNhY3Rpb25Db25maXJtZWQiLCJyZWNlaXB0Iiwib25FcnJvciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TransferNativeToken.tsx\n"));

/***/ })

});