webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _DateContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateContainer */ "./components/DateContainer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_elements_NoDataFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/elements/NoDataFound */ "./styles/elements/NoDataFound/index.js");
/* harmony import */ var _styles_elements_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/elements/Loading */ "./styles/elements/Loading/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
var _this = undefined,
    _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/Layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var getheaderContent = function getheaderContent(pathname) {
  switch (pathname) {
    case '/dashboard':
      return 'Dashboard';

    case '/reports':
      return 'Reports';

    case '/files':
      return 'Files';

    case '/settings/personal':
      return 'Settings';

    case '/fees-calculator':
      return 'Fees Calculator';

    default:
      return 'Mepop Reports';
  }
};

var Layout = Object(_firebase__WEBPACK_IMPORTED_MODULE_9__["withFirebase"])(_c = _s(function (props) {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.generalReducer;
  }),
      loading = _useSelector.loading,
      compareData = _useSelector.compareData,
      files = _useSelector.files,
      rangedData = _useSelector.rangedData,
      user = _useSelector.user;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var heading = getheaderContent(router.pathname);
  var noData = !files.length || JSON.stringify(rangedData) === '{}';
  var noUser = JSON.stringify(user) === '{}' || !user;
  var routeRequiresData = heading === 'Reports' || heading === 'Dashboard';
  var centerContent = loading || noData;
  var unprotectedRoute = router.pathname === '/sign-in' || router.pathname === '/sign-up';
  var hideSideBar = router.pathname === '/settings/membership/';

  if (noUser && !unprotectedRoute) {
    return null;
  }

  if (user.profile && router.pathname !== '/settings/membership') {
    if (!user.profile.hasSignedIn) {
      router.push('/settings/membership');
    }
  }

  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "center",
    bg: "mainBg",
    flex: [1],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, unprotectedRoute ? __jsx(Body, {
    centerContent: true,
    headerSize: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, loading ? __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "center",
    height: "90vh",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(_styles_elements_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  })) : props.children) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hideSideBar ? null : __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-start",
    bg: "mainBg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, heading, heading === 'Reports' || heading === 'Dashboard' ? __jsx(_DateContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    page: heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }) : null), __jsx(Body, {
    centerContent: centerContent,
    headerSize: JSON.stringify(compareData) !== '{}' ? 110 : 45,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, noData && routeRequiresData && !loading ? __jsx(_styles_elements_NoDataFound__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 63
    }
  }) : loading ? __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "center",
    height: "90vh",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx(_styles_elements_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 27
    }
  })) : props.children))));
}, "b/n0G0xGRDNa5N8FuSgAyVasxoI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
}));
_c2 = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Layout__Body",
  componentId: "rqjs94-0"
})(["overflow:auto;height:calc(100vh - ", "px);width:100vw;padding-bottom:70px;", ""], function (_ref) {
  var headerSize = _ref.headerSize;
  return headerSize;
}, function (_ref2) {
  var centerContent = _ref2.centerContent;

  if (centerContent) {
    return "\n      display: flex;\n      justify-content: center;\n    ";
  }
});
_c3 = Body;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Layout__Header",
  componentId: "rqjs94-1"
})(["background:white;width:100%;min-height:50px;border-bottom:1px solid ", ";display:flex;align-items:center;padding-left:10px;font-wieght:", ";color:", ";font-weight:", ";font-size:20px;justify-content:space-between;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.mainBg;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.bold;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontWeights.bold;
});
_c4 = Header;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Layout$withFirebase");
$RefreshReg$(_c2, "Layout");
$RefreshReg$(_c3, "Body");
$RefreshReg$(_c4, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.ae7a9efaa397c48a500b.hot-update.js.map