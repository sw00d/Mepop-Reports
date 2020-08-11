webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/dashboard/ProfitsByMonth/index.js":
/*!******************************************************!*\
  !*** ./components/dashboard/ProfitsByMonth/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_reporting_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/reporting/BarChart */ "./styles/reporting/BarChart/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./components/dashboard/util.js");


var _this = undefined,
    _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/dashboard/ProfitsByMonth/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // styles

var Barchart = function Barchart(_ref) {
  var color = _ref.color,
      data = _ref.data,
      xdataKey = _ref.xdataKey,
      barDataKey = _ref.barDataKey,
      barGap = _ref.barGap,
      barSize = _ref.barSize,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["color", "data", "xdataKey", "barDataKey", "barGap", "barSize"]);

  var monthlyNetProfit = Object(_util__WEBPACK_IMPORTED_MODULE_4__["getProfitsByMonth"])(data);
  return __jsx(_styles_reporting_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hideLegend: true,
    headerBorder: "none",
    boxShadow: "none",
    headerContent: "Net Earnings By Month",
    data: monthlyNetProfit,
    formatTooltip: function formatTooltip(t, l) {
      return _formatTooltip(t, l, data);
    },
    xdataKey: "month",
    bars: [{
      dataKey: 'Net Profit',
      size: 50,
      color: 'pastelPurple'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  });
};

_c = Barchart;
/* harmony default export */ __webpack_exports__["default"] = (Barchart);

var _formatTooltip = function _formatTooltip(value, name, props) {
  return "$".concat(value);
};

var ChartWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ProfitsByMonth__ChartWrap",
  componentId: "sc-3cnvm6-0"
})(["display:flex;flex-wrap:wrap;height:300px;width:100%;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ProfitsByMonth__Title",
  componentId: "sc-3cnvm6-1"
})(["width:100%;padding:0px 20px;font-size:18px;font-weight:500;margin:0px;color:", ";text-transform:uppercase;border-bottom:1px solid #e0e0e0;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});

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
//# sourceMappingURL=dashboard.js.e5528b70facd4f0beedd.hot-update.js.map