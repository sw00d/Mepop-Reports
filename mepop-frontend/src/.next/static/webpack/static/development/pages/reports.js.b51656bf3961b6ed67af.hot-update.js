webpackHotUpdate("static/development/pages/reports.js",{

/***/ "./components/reports/index.js":
/*!*************************************!*\
  !*** ./components/reports/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _SalesByDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SalesByDate */ "./components/reports/SalesByDate/index.js");
/* harmony import */ var _SalesByCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SalesByCategory */ "./components/reports/SalesByCategory/index.js");
/* harmony import */ var _SalesMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SalesMap */ "./components/reports/SalesMap/index.js");
/* harmony import */ var _SalesByTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SalesByTime */ "./components/reports/SalesByTime/index.js");
/* harmony import */ var _SalesAndListingsByDay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SalesAndListingsByDay */ "./components/reports/SalesAndListingsByDay/index.js");
/* harmony import */ var _RecentSales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RecentSales */ "./components/reports/RecentSales/index.js");
/* harmony import */ var _SalesByPaymentType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SalesByPaymentType */ "./components/reports/SalesByPaymentType/index.js");
/* harmony import */ var _RevenueOverview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RevenueOverview */ "./components/reports/RevenueOverview/index.js");
/* harmony import */ var _ProfitsByMonth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfitsByMonth */ "./components/reports/ProfitsByMonth/index.js");
/* harmony import */ var _TotalEarnings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TotalEarnings */ "./components/reports/TotalEarnings/index.js");
/* harmony import */ var _CompareView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CompareView */ "./components/reports/CompareView.js");
/* harmony import */ var _TopValueBoxes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TopValueBoxes */ "./components/reports/TopValueBoxes/index.js");
/* harmony import */ var _VariableLineGraph__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./VariableLineGraph */ "./components/reports/VariableLineGraph/index.js");
/* harmony import */ var _styles_elements_NoDataFound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styles/elements/NoDataFound */ "./styles/elements/NoDataFound/index.js");
var _this = undefined,
    _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/reports/index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var Reports = function Reports(props) {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.generalReducer;
  }),
      rangedData = _useSelector.rangedData,
      allData = _useSelector.allData,
      compareData = _useSelector.compareData,
      user = _useSelector.user;

  var data = rangedData;
  var isBasic = user.membership.type === 'basic';

  if (JSON.stringify(compareData) !== '{}' && !isBasic) {
    return __jsx(_CompareView__WEBPACK_IMPORTED_MODULE_13__["CompareView"], {
      data: rangedData,
      compareData: compareData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 12
      }
    });
  }

  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    flexDirection: "column",
    width: [1],
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, !data.length ? __jsx(_styles_elements_NoDataFound__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 24
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(_TotalEarnings__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })), __jsx(_TopValueBoxes__WEBPACK_IMPORTED_MODULE_14__["default"], {
    data: data,
    minWidth: "20%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx(_RevenueOverview__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: data,
    isBasic: isBasic,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx(_SalesByPaymentType__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    isBasic: isBasic,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), __jsx(_SalesByDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx(_SalesByCategory__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    isBasic: isBasic,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), __jsx(_SalesMap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    isBasic: isBasic,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(_SalesAndListingsByDay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx(_ProfitsByMonth__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })), __jsx(_VariableLineGraph__WEBPACK_IMPORTED_MODULE_15__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }), __jsx(_RecentSales__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: allData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx(_SalesByTime__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })));
};

_s(Reports, "avGDha7rsGd0iLkEKeQb3HSCuzU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Reports;
/* harmony default export */ __webpack_exports__["default"] = (Reports);
var tempData = [{
  time: '13:11',
  sales: 5
}, {
  time: '14:11',
  sales: 10
}, {
  time: '15:11',
  sales: 20
}, {
  time: '16:11',
  sales: 40
}, {
  time: '17:11',
  sales: 30
}, {
  time: 'May',
  sales: 30
}, {
  time: 'June',
  sales: 40
}, {
  time: 'July',
  sales: 50
}, {
  time: 'August',
  sales: 60
}, {
  time: 'September',
  sales: 70
}, {
  time: 'October',
  sales: 50
}, {
  time: 'November',
  sales: 100
}];

var _c;

$RefreshReg$(_c, "Reports");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=reports.js.b51656bf3961b6ed67af.hot-update.js.map