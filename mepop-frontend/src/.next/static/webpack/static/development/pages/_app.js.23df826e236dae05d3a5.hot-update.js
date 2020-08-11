webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/DateContainer.js":
/*!*************************************!*\
  !*** ./components/DateContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "../node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _styles_elements_DateRangePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/elements/DateRangePicker */ "./styles/elements/DateRangePicker/index.js");
/* harmony import */ var _styles_elements_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/elements/Select */ "./styles/elements/Select/index.js");
/* harmony import */ var _dataProcessing_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dataProcessing/utils */ "./dataProcessing/utils.js");
/* harmony import */ var _store_generalReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/generalReducer */ "./store/generalReducer.js");
/* harmony import */ var _styles_elements_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/elements/Text */ "./styles/elements/Text/index.js");
/* harmony import */ var _styles_elements_Loading_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/elements/Loading/Spinner */ "./styles/elements/Loading/Spinner.js");
/* harmony import */ var _styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/elements/Tooltip */ "./styles/elements/Tooltip/index.js");
var _this = undefined,
    _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/DateContainer.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var DateContainer = function DateContainer(_ref) {
  _s();

  var page = _ref.page;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.generalReducer;
  }),
      allData = _useSelector.allData,
      loading = _useSelector.loading,
      user = _useSelector.user;

  var fixedFullRange = page === 'Dashboard';
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])(),
      addToast = _useToasts.addToast;

  var min = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return allData.sales ? allData.sales[0].date_of_sale : null;
  }, [allData]);
  var max = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return allData.sales ? allData.sales[allData.sales.length - 1].date_of_sale : null;
  }, [allData]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    startDate: min,
    endDate: max
  }),
      dateRange = _useState[0],
      setDates = _useState[1]; // stored in MM-DD-YYYY format


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    startDate: min,
    endDate: max
  }),
      compareDateRange = _useState2[0],
      setCompareDates = _useState2[1]; // stored in MM-DD-YYYY format


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: 'Full Range',
    value: 'full'
  }),
      preset = _useState3[0],
      setPreset = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: 'Full Range',
    value: 'full'
  }),
      comparePreset = _useState4[0],
      setComparePreset = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showCompareDate = _useState5[0],
      toggleCompare = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoading = _useState6[0],
      setLoading = _useState6[1];

  var isBasic = !user.membership ? 'basic' : user.membership.type === 'basic';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (dateRange.startDate === null || dateRange.endDate === null) {
      setPreset({
        label: 'Full Range',
        value: 'full'
      });
      setDates({
        startDate: min,
        endDate: max
      });
    } else if (dateRange.startDate && dateRange.endDate) {
      if (!moment__WEBPACK_IMPORTED_MODULE_3___default()(dateRange.startDate).isSame(min) && !moment__WEBPACK_IMPORTED_MODULE_3___default()(dateRange.endDate).isSame(max)) {
        setPreset({
          label: 'Full Range',
          value: 'full'
        });
        setDates({
          startDate: min,
          endDate: max
        });
      }
    }
  }, [min, max]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      if (allData.sales && dateRange.startDate && dateRange.endDate) {
        var rangedData = Object(_dataProcessing_utils__WEBPACK_IMPORTED_MODULE_9__["getRangedData"])(allData, {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate
        });
        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_10__["UPDATE_RANGED_DATA"],
          payload: rangedData
        });
      }
    });
  }, [allData, dateRange]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoading(true);
    setTimeout(function () {
      if (allData.sales && compareDateRange.startDate && compareDateRange.endDate) {
        var rangedData = Object(_dataProcessing_utils__WEBPACK_IMPORTED_MODULE_9__["getRangedData"])(allData, {
          startDate: compareDateRange.startDate,
          endDate: compareDateRange.endDate
        }); // console.log(rangedData)

        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_10__["UPDATE_COMPARE_DATA"],
          payload: rangedData
        });
      }

      if (!showCompareDate) {
        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_10__["UPDATE_COMPARE_DATA"],
          payload: {}
        });
      }

      setLoading(false);
    });
  }, [allData, compareDateRange, showCompareDate]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _getDatePreset = getDatePreset(preset, min, max),
        startDate = _getDatePreset.startDate,
        endDate = _getDatePreset.endDate;

    if (startDate && endDate) {
      if (moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).isBefore(min) || moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).isAfter(max)) {
        console.log(endDate, max);
        addToast(__jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 18
          }
        }, "This date range exceeds the files you've uploaded."), {
          appearance: 'warning',
          autoDismiss: false
        });
      }

      setDates({
        startDate: startDate,
        endDate: endDate
      });
    }
  }, [preset]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _getDatePreset2 = getDatePreset(comparePreset, min, max),
        startDate = _getDatePreset2.startDate,
        endDate = _getDatePreset2.endDate;

    if (startDate && endDate) {
      setCompareDates({
        startDate: startDate,
        endDate: endDate
      });
    }
  }, [comparePreset]);
  if (!allData.sales) return null;
  var btnDisabled = loading || fixedFullRange || isLoading || isBasic;
  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_6__["default"], {
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flexDirection: "column",
    justifyContent: "space-between",
    height: showCompareDate && !fixedFullRange ? 96 : 'auto',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(_styles_elements_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    opacity: fixedFullRange ? 0 : 1,
    options: options,
    onChange: function onChange(arr) {
      return setPreset(arr[0]);
    },
    selectProps: {
      values: preset ? [preset] : [],
      disabled: fixedFullRange,
      searchable: false,
      style: {
        width: '140px',
        fontSize: '15px'
      },
      separator: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }), showCompareDate ? __jsx(_styles_elements_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    opacity: fixedFullRange ? 0 : 1,
    options: options,
    onChange: function onChange(arr) {
      return setComparePreset(arr[0]);
    },
    selectProps: {
      values: comparePreset ? [comparePreset] : [],
      disabled: fixedFullRange,
      searchable: false,
      style: {
        width: '140px',
        fontSize: '15px'
      },
      separator: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }) : null), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(_styles_elements_DateRangePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    startDate: dateRange.startDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? min : dateRange.startDate) : null,
    endDate: dateRange.endDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? max : dateRange.endDate) : null,
    disabled: fixedFullRange,
    isOutsideRange: function isOutsideRange() {
      return false;
    },
    enableOutsideDays: true // isOutsideRange={(day) => {
    //   return (day.isBefore(moment(min)) || day.isAfter(moment(max)))
    // }}
    // enableOutsideDays={false}
    ,
    onDatesChange: function onDatesChange(_ref2) {
      var startDate = _ref2.startDate,
          endDate = _ref2.endDate;
      setPreset({
        label: 'Custom',
        value: null
      });
      setDates({
        startDate: startDate ? startDate.format('MM-DD-YYYY') : null,
        endDate: endDate ? endDate.format('MM-DD-YYYY') : null
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), showCompareDate && !fixedFullRange ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_elements_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "primary",
    fontWeight: "100",
    fontSize: "15px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, "vs."), __jsx(_styles_elements_DateRangePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    startDate: compareDateRange.startDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? min : compareDateRange.startDate) : null,
    endDate: compareDateRange.endDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? max : compareDateRange.endDate) : null,
    disabled: fixedFullRange,
    isOutsideRange: function isOutsideRange(day) {
      return day.isBefore(min) || day.isAfter(max);
    },
    onDatesChange: function onDatesChange(_ref3) {
      var startDate = _ref3.startDate,
          endDate = _ref3.endDate;
      setComparePreset({
        label: 'Custom',
        value: null
      });
      setCompareDates({
        startDate: startDate ? startDate.format('MM-DD-YYYY') : null,
        endDate: endDate ? endDate.format('MM-DD-YYYY') : null
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  })) : null), __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: !isBasic,
    html: __jsx(TooltipContent, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 15
      }
    }),
    interactive: true,
    interactiveBorder: 100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx(AddBtn, {
    isFixedFullRange: fixedFullRange,
    onClick: function onClick() {
      if (btnDisabled) return;
      toggleCompare(!showCompareDate);
    },
    disabled: btnDisabled,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, fixedFullRange ? null : loading || isLoading ? __jsx(_styles_elements_Loading_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    width: "2em",
    size: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }) : __jsx("i", {
    className: showCompareDate ? 'fa fa-minus-circle' : 'fa fa-plus-circle',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }))));
};

_s(DateContainer, "mfvaUAOM761duk5g9Jn+bTpHyl8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"]];
});

_c = DateContainer;
/* harmony default export */ __webpack_exports__["default"] = (DateContainer);

var TooltipContent = function TooltipContent() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 5
    }
  }, "You must ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/settings/membership",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 16
    }
  }, __jsx(Span, {
    title: "/membership",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 50
    }
  }, "upgrade")), " to compare date ranges");
};

_c2 = TooltipContent;
var Span = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "DateContainer__Span",
  componentId: "sc-3ofmch-0"
})(["color:white;cursor:pointer;border-bottom:1px solid white;&:hover{opacity:.7;}"]);
_c3 = Span;
var AddBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "DateContainer__AddBtn",
  componentId: "sc-3ofmch-1"
})(["color:", ";background:none;border:none;cursor:", ";font-size:20px;margin-top:3px;transition:", ";height:50px;width:60px;display:flex;align-items:center;border-left:1px solid ", ";justify-content:center;&:hover{color:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.greyLight;
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.transitionDurations[1];
}, function (_ref7) {
  var theme = _ref7.theme,
      isFixedFullRange = _ref7.isFixedFullRange;
  return isFixedFullRange ? 'transparent' : theme.colors.mainBg;
}, function (_ref8) {
  var theme = _ref8.theme,
      disabled = _ref8.disabled;
  return !disabled ? theme.colors.primary : null;
});
_c4 = AddBtn;
var options = [{
  label: 'Full Range',
  value: 'full'
}, {
  label: 'This Month',
  value: 'this_month'
}, {
  label: 'Last Month',
  value: 'last_month'
}, {
  label: 'Past 3 Months',
  value: 'past_three_months'
}];

var getDatePreset = function getDatePreset(preset, min, max) {
  switch (preset.value) {
    case 'full':
      {
        return {
          startDate: min,
          endDate: max
        };
      }

    case 'this_month':
      {
        var newStart = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf('month')).format('MM-DD-YYYY');
        var newEnd = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf('month')).format('MM-DD-YYYY');
        return {
          startDate: newStart,
          endDate: newEnd
        };
      }

    case 'last_month':
      {
        var _newStart = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'months').startOf('month')).format('MM-DD-YYYY');

        var _newEnd = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'months').endOf('month')).format('MM-DD-YYYY');

        return {
          startDate: _newStart,
          endDate: _newEnd
        };
      }

    case 'past_three_months':
      {
        var _newStart2 = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(3, 'months')).format('MM-DD-YYYY');

        return {
          startDate: _newStart2,
          endDate: max
        };
      }

    default:
      {
        return {};
      }
  }
};

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "DateContainer");
$RefreshReg$(_c2, "TooltipContent");
$RefreshReg$(_c3, "Span");
$RefreshReg$(_c4, "AddBtn");

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
//# sourceMappingURL=_app.js.23df826e236dae05d3a5.hot-update.js.map