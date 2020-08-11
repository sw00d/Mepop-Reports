webpackHotUpdate("static/development/pages/reports.js",{

/***/ "./styles/elements/NoDataFound/index.js":
/*!**********************************************!*\
  !*** ./styles/elements/NoDataFound/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text */ "./styles/elements/Text/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/NoDataFound/index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var NoDataFound = function NoDataFound(_ref) {
  _s();

  var title = _ref.title,
      msg = _ref.msg;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.generalReducer;
  }),
      files = _useSelector.files;

  return __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    justifyContent: "center",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    fontSize: 22,
    fontWeight: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, title || 'Oops!'), __jsx(Divider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, files.length ? __jsx(_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }
  }, msg || "It seems that you don't any sales yet!") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "It seems that you need to", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/files",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }, __jsx(A, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "upload some files. ", __jsx(I, {
    className: "fa fa-chevron-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 42
    }
  })))))));
};

_s(NoDataFound, "tcjIrmJ+3QC4KC2ki4W7mhifem4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = NoDataFound;
/* harmony default export */ __webpack_exports__["default"] = (NoDataFound);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "NoDataFound__Divider",
  componentId: "tvoeda-0"
})(["height:70px;width:2px;background:", ";margin:0px 10px 0px 10px;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});
_c2 = Divider;
var I = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].i.withConfig({
  displayName: "NoDataFound__I",
  componentId: "tvoeda-1"
})(["margin-left:10px;"]);
_c3 = I;
var A = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "NoDataFound__A",
  componentId: "tvoeda-2"
})(["cursor:pointer;text-decoration:none;border-radius:", ";background:", ";color:", ";border:1px solid ", ";padding:10px;margin-left:5px;width:147px;overflow:hidden;white-space:nowrap;display:flex;align-items:center;transition:", ";&:hover{width:170px;}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderRadius.normal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.textGrey;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.transitionDurations[1];
});
_c4 = A;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "NoDataFound");
$RefreshReg$(_c2, "Divider");
$RefreshReg$(_c3, "I");
$RefreshReg$(_c4, "A");

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
//# sourceMappingURL=reports.js.13ce61ea6274fd31435c.hot-update.js.map