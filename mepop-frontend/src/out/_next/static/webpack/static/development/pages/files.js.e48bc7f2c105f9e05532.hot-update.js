webpackHotUpdate("static/development/pages/files.js",{

/***/ "./components/files/FileDrop.js":
/*!**************************************!*\
  !*** ./components/files/FileDrop.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "../node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_elements_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/elements/Card */ "./styles/elements/Card/index.js");
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _styles_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/elements/Button */ "./styles/elements/Button/index.js");
/* harmony import */ var _styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/elements/Tooltip */ "./styles/elements/Tooltip/index.js");
/* harmony import */ var _styles_elements_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/elements/Text */ "./styles/elements/Text/index.js");
/* harmony import */ var _store_actions_files__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/files */ "./store/actions/files.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_elements_Loading_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/elements/Loading/Spinner */ "./styles/elements/Loading/Spinner.js");
/* harmony import */ var _InfoModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InfoModal */ "./components/files/InfoModal.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toast-notifications */ "../node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__);


var _this = undefined,
    _jsxFileName = "/Users/samuelwood/development/mepop-firebase/packages/mepop-next/src/components/files/FileDrop.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var Dropzone = Object(_firebase__WEBPACK_IMPORTED_MODULE_2__["withFirebase"])(_c = _s(function (_ref) {
  _s();

  var firebase = _ref.firebase;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__["useToasts"])(),
      addToast = _useToasts.addToast;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.generalReducer;
  }),
      files = _useSelector.files;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(files.length),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      buttonDisable = _useState2[0],
      disableBtns = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeBtn = _useState3[0],
      activateBtn = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState4[0],
      toggleModal = _useState4[1];

  var startFetch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (load) setLoading(true);
    disableBtns(true);
    Object(_store_actions_files__WEBPACK_IMPORTED_MODULE_10__["fetchFiles"])({
      firebase: firebase,
      dispatch: dispatch
    }, function () {
      setLoading(false);
      disableBtns(false);
      activateBtn(null);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    startFetch();
  }, [startFetch]);

  var onError = function onError(msg) {
    addToast(__jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 14
      }
    }, msg || 'Error Occurred'), {
      appearance: 'error'
    });
    setLoading(false);
    disableBtns(false);
  };

  var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (acceptedFiles) {
    if (acceptedFiles.length) {
      firebase.uploadFiles(acceptedFiles, startFetch, onError);
    } else {
      addToast(__jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }
      }, "File appears to be of wrong format."), {
        appearance: 'error',
        autoDismiss: true
      });
    }
  }, []);

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    onDrop: onDrop,
    accept: '.csv'
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  var deleteFile = function deleteFile(filename) {
    firebase.deleteFile(filename, function (file) {
      // success! Now remove that file from local state or refresh files in some way.
      startFetch(false);
    });
  };

  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(_InfoModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    modalIsOpen: modalIsOpen,
    toggleModal: toggleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_6__["default"], {
    justifyContent: "flex-end",
    px: "10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "What's this?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_styles_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    bg: "transparent",
    color: "greyDarkest",
    fontSize: "20px",
    onClick: function onClick() {
      return toggleModal(!modalIsOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fa fa-question-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  })))), __jsx(DropZone, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isDragActive: isDragActive
  }, getRootProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx(H2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Drop files here"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "or"), __jsx(_styles_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "blue",
    bg: "white",
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Select Files"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Files must be from Depop to be valid")), __jsx(_styles_elements_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    headerContent: "Uploaded Files",
    isLoading: loading,
    minHeight: "200px",
    mb: "100px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, files.length ? __jsx(Table, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, files.map(function (_ref2, i) {
    var filename = _ref2.filename;
    return __jsx(Row, {
      key: i,
      index: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }, __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "Delete file",
      arrow: false,
      position: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, __jsx(DeleteBtn, {
      disabled: buttonDisable,
      "aria-label": "Click to delete ".concat(filename),
      onClick: function onClick() {
        deleteFile(filename);
        activateBtn(i);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 23
      }
    }, buttonDisable && activeBtn === i ? __jsx(_styles_elements_Loading_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
      width: "9px",
      color: "red",
      size: "2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    }) : __jsx("i", {
      className: "fa fa-close",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 29
      }
    }))), filename);
  })) : __jsx(_styles_elements_Text__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontSize: "20px",
    pt: "1em",
    color: "greyDark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, "Upload Files Above")));
}, "saGNMyeb6bLHqcyqbp38zKXvcA0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"], react_toast_notifications__WEBPACK_IMPORTED_MODULE_14__["useToasts"], react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"], react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"]];
}));
_c2 = Dropzone;
/* harmony default export */ __webpack_exports__["default"] = (Dropzone);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "FileDrop__Container",
  componentId: "sc-3bbzl8-0"
})(["width:100%;"]);
_c3 = Container;
var DropZone = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "FileDrop__DropZone",
  componentId: "sc-3bbzl8-1"
})(["justify-content:center;align-items:center;flex-direction:column;display:flex;justify-content:center;align-items:center;margin:15px;min-height:250px;margin-top:10px;transition:.2s;position:relative;border:5px dashed ", ";border-radius:", ";"], function (_ref3) {
  var theme = _ref3.theme,
      isDragActive = _ref3.isDragActive;
  return isDragActive ? theme.colors.greyDark : theme.colors.greyLight;
}, function (_ref4) {
  var theme = _ref4.theme,
      isDragActive = _ref4.isDragActive;
  return isDragActive ? theme.borderRadius.more : theme.borderRadius.normal;
});
_c4 = DropZone;
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2.withConfig({
  displayName: "FileDrop__H2",
  componentId: "sc-3bbzl8-2"
})(["margin:0;margin-top:10px;font-weight:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontWeights.regular;
});
_c5 = H2;
var Row = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "FileDrop__Row",
  componentId: "sc-3bbzl8-3"
})(["display:flex;align-items:center;width:100%;padding:3px 0px 3px 5px;border-bottom:", " 1px solid;"], function (_ref6) {
  var theme = _ref6.theme,
      key = _ref6.key;
  return theme.colors.mainBg;
});
_c6 = Row;
var DeleteBtn = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "FileDrop__DeleteBtn",
  componentId: "sc-3bbzl8-4"
})(["margin-right:5px;cursor:pointer;color:", ";height:25px;width:25px;display:flex;justify-content:center;align-items:center;flex-direction &:hover{color:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.red;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.redDark;
});
_c7 = DeleteBtn;
var Table = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "FileDrop__Table",
  componentId: "sc-3bbzl8-5"
})(["max-height:250px;overflow:auto;width:100%;"]);
_c8 = Table;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Dropzone$withFirebase");
$RefreshReg$(_c2, "Dropzone");
$RefreshReg$(_c3, "Container");
$RefreshReg$(_c4, "DropZone");
$RefreshReg$(_c5, "H2");
$RefreshReg$(_c6, "Row");
$RefreshReg$(_c7, "DeleteBtn");
$RefreshReg$(_c8, "Table");

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
//# sourceMappingURL=files.js.e48bc7f2c105f9e05532.hot-update.js.map