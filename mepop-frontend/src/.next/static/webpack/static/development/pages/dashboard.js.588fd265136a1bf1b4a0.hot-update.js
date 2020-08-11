webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./styles/reporting/BarChart/index.js":
/*!********************************************!*\
  !*** ./styles/reporting/BarChart/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "../node_modules/recharts/es6/index.js");
/* harmony import */ var _elements_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Card */ "./styles/elements/Card/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var _styleUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styleUtil */ "./styles/reporting/styleUtil.js");



var _this = undefined,
    _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/reporting/BarChart/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Barchart = function Barchart(_ref) {
  var data = _ref.data,
      xdataKey = _ref.xdataKey,
      tickFormatter = _ref.tickFormatter,
      labelFormatter = _ref.labelFormatter,
      formatTooltip = _ref.formatTooltip,
      disableAnimation = _ref.disableAnimation,
      _ref$bars = _ref.bars,
      bars = _ref$bars === void 0 ? [] : _ref$bars,
      hideLegend = _ref.hideLegend,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["data", "xdataKey", "tickFormatter", "labelFormatter", "formatTooltip", "disableAnimation", "bars", "hideLegend"]);

  return __jsx(_elements_Card__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx(_styleUtil__WEBPACK_IMPORTED_MODULE_6__["ChartWrap"], {
    height: 400,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["ResponsiveContainer"], {
    width: "100%",
    height: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: xdataKey,
    tickFormatter: tickFormatter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    labelFormatter: labelFormatter,
    formatter: formatTooltip,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), !hideLegend ? __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
    verticalAlign: "top",
    iconType: "circle",
    align: "left",
    margin: {
      top: '0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }) : null, bars.map(function (_ref2, i) {
    var size = _ref2.size,
        dataKey = _ref2.dataKey,
        color = _ref2.color;
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
      isAnimationActive: typeof disableAnimation !== 'boolean',
      key: i,
      barSize: size,
      dataKey: dataKey,
      type: "monotone",
      fill: _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors[color] || _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primary,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    });
  })))));
};

_c = Barchart;
/* harmony default export */ __webpack_exports__["default"] = (Barchart);

var _c;

$RefreshReg$(_c, "Barchart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=dashboard.js.588fd265136a1bf1b4a0.hot-update.js.map