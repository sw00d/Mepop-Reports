module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!**************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./components/dashboard/ProfitsByMonth/index.js":
/*!******************************************************!*\
  !*** ./components/dashboard/ProfitsByMonth/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_reporting_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/reporting/BarChart */ "./styles/reporting/BarChart/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./components/dashboard/util.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/dashboard/ProfitsByMonth/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // styles

const Barchart = (_ref) => {
  let {
    color,
    data,
    xdataKey,
    barDataKey,
    barGap,
    barSize
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "data", "xdataKey", "barDataKey", "barGap", "barSize"]);

  const monthlyNetProfit = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getProfitsByMonth"])(data);
  return __jsx(_styles_reporting_BarChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    hideLegend: true,
    headerBorder: "none",
    boxShadow: "none",
    headerContent: "Net Earnings By Month",
    data: monthlyNetProfit,
    formatTooltip: (t, l) => formatTooltip(t, l, data),
    xdataKey: "month",
    bars: [{
      dataKey: 'Net Profit',
      size: 50,
      color: 'pastelPurple'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Barchart);

const formatTooltip = (value, name, props) => {
  return `$${value}`;
};

const ChartWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProfitsByMonth__ChartWrap",
  componentId: "sc-3cnvm6-0"
})(["display:flex;flex-wrap:wrap;height:300px;width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProfitsByMonth__Title",
  componentId: "sc-3cnvm6-1"
})(["width:100%;padding:0px 20px;font-size:18px;font-weight:500;margin:0px;color:", ";text-transform:uppercase;border-bottom:1px solid #e0e0e0;"], ({
  theme
}) => theme.colors.primary);

/***/ }),

/***/ "./components/dashboard/SaleTable/index.js":
/*!*************************************************!*\
  !*** ./components/dashboard/SaleTable/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_elements_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/elements/Table */ "./styles/elements/Table/index.js");
/* harmony import */ var _styles_elements_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/elements/Input */ "./styles/elements/Input/index.js");
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _general_SaleDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general/SaleDetails */ "./components/general/SaleDetails.js");
/* harmony import */ var _styles_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/elements/Text */ "./styles/elements/Text/index.js");
/* harmony import */ var _reports_util_tables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reports/util/tables */ "./components/reports/util/tables.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/dashboard/SaleTable/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const SaleTable = ({
  data,
  getUrl
}) => {
  const formattedData = Object(_reports_util_tables__WEBPACK_IMPORTED_MODULE_8__["formatSalesTable"])(data);
  const {
    0: searchTerm,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: tableData,
    1: setTableData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(formattedData);
  const {
    0: activeRow,
    1: activateRow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tableData[0]);
  const idx = tableData.indexOf(activeRow);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!searchTerm) setTableData(data);
    const filtered = formattedData.filter(item => {
      return item.username.includes(searchTerm) || item.name.includes(searchTerm) || item['date sold'].includes(searchTerm) || item['item price'].includes(searchTerm) || item.name.includes(searchTerm) || item['item description'].includes(searchTerm);
    });
    setTableData(filtered);
  }, [searchTerm, data]);
  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mb: "30px",
    flexWrap: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_styles_elements_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minWidth: "500px",
    activeRow: idx,
    headerContent: __jsx(Header, {
      data: tableData,
      setTerm: setTerm,
      term: searchTerm,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 24
      }
    }),
    data: tableData,
    columnLabels: !activeRow ? ['date sold', 'username', 'name', 'item price', 'buyer-paid shipping', 'seller-paid shipping', 'depop fees', 'item description'] : ['date sold', 'username', 'name', 'item price'],
    handleRowClick: (row, i) => {
      activateRow(row.rowData);
    },
    p: "0px",
    tableHeight: 420 - 40,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), activeRow ? __jsx(_general_SaleDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {
    row: activeRow,
    getUrl: getUrl,
    onClose: () => activateRow(null),
    currencyType: data.currency_type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SaleTable);

const Header = ({
  data,
  setTerm,
  term
}) => {
  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alignItems: "center",
    justifyContent: "space-between",
    width: [1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_styles_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mr: "5px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "All Sales - ", data.length), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(StyledInput, {
    borderColor: "greyLight",
    placeholder: "Search...",
    pl: "10px",
    value: term,
    onChange: e => setTerm(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })));
};

const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_elements_Input__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "SaleTable__StyledInput",
  componentId: "sc-1iov6uj-0"
})(["border-radius:4px;border-color:", ";font-weight:", ";"], ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.fontWeights.bold);

/***/ }),

/***/ "./components/dashboard/index.js":
/*!***************************************!*\
  !*** ./components/dashboard/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/reporting/ValueBox */ "./styles/reporting/ValueBox/index.js");
/* harmony import */ var _styles_reporting_TotalEarnings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/reporting/TotalEarnings */ "./styles/reporting/TotalEarnings/index.js");
/* harmony import */ var _ProfitsByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfitsByMonth */ "./components/dashboard/ProfitsByMonth/index.js");
/* harmony import */ var _SaleTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SaleTable */ "./components/dashboard/SaleTable/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/dashboard/styles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util */ "./components/dashboard/util.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/dashboard/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// styles


 // components


 // custom containers


 // utils



const Dashboard = props => {
  const {
    allData
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.generalReducer);
  const data = allData;
  if (!data) return null;
  const avgNetProfit = Object(_util__WEBPACK_IMPORTED_MODULE_8__["getAvgProfits"])(data);
  const whenToList = Object(_util__WEBPACK_IMPORTED_MODULE_8__["bestTimeToList"])(data);
  const itemsSoldPerDay = Object(_util__WEBPACK_IMPORTED_MODULE_8__["avgItemsPerDay"])(data);
  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    bg: "mainBg",
    width: [1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: [1],
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ValueContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    minWidth: "167px" // for mobile. Should change
    ,
    title: "Average Net Profit",
    value: avgNetProfit.weekly,
    value2: avgNetProfit.monthly,
    float: true,
    hideCompare: true,
    currencyType: "$",
    label1: "Weekly",
    label2: "Monthly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(_styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Hottest Days",
    value: whenToList.list.join(', '),
    value2: whenToList.sell.join(', '),
    string: true,
    hideCompare: true,
    label1: "To List",
    label2: "To Sell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx(_styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Avg. Items Sold Per Day",
    value: itemsSoldPerDay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["GraphContainer"], {
    m: "0px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "0px",
    flexWrap: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_styles_reporting_TotalEarnings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    boxShadow: "none",
    borderRadius: "0px",
    float: true,
    currencyType: "$",
    title: "Total Earnings",
    value: data.total_earnings,
    netValue: (data.total_earnings - data.total_shipping_cost - data.depop_fees).toFixed(2),
    data: [{
      name: 'Net Earnings',
      value: parseFloat(data.total_earnings - data.total_shipping_cost - data.depop_fees)
    }, {
      name: 'Depop Fees',
      value: parseFloat(data.depop_fees)
    }, {
      name: 'Paypal Fees',
      value: parseFloat(data.paypal_fees)
    }, {
      name: 'Total Shipping',
      value: parseFloat(data.total_shipping_cost)
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }), __jsx(_ProfitsByMonth__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  })), __jsx(_SaleTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    getUrl: data.getUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./components/dashboard/styles.js":
/*!****************************************!*\
  !*** ./components/dashboard/styles.js ***!
  \****************************************/
/*! exports provided: ValueContainer, GraphContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return ValueContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphContainer", function() { return GraphContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_elements_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/elements/Card */ "./styles/elements/Card/index.js");


const ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ValueContainer",
  componentId: "gsxa03-0"
})(["display:flex;@media only screen and (max-width:", "px){flex-direction:column;order:2;}"], ({
  theme
}) => theme.breakpoints.s);
const GraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_elements_Card__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "styles__GraphContainer",
  componentId: "gsxa03-1"
})([">div{width:100%;}@media only screen and (max-width:", "px){flex-direction:column;}"], ({
  theme
}) => theme.breakpoints.m);

/***/ }),

/***/ "./components/dashboard/util.js":
/*!**************************************!*\
  !*** ./components/dashboard/util.js ***!
  \**************************************/
/*! exports provided: getProfitsByMonth, getAvgProfits, bestTimeToList, avgItemsPerDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfitsByMonth", function() { return getProfitsByMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvgProfits", function() { return getAvgProfits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bestTimeToList", function() { return bestTimeToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avgItemsPerDay", function() { return avgItemsPerDay; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! currency.js */ "currency.js");
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(currency_js__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getProfitsByMonth = data => {
  const months = {};
  const monthArray = [];
  data.sales.forEach(({
    date_of_sale,
    item_price,
    depop_fee,
    depop_payments_fee,
    usps_cost
  }) => {
    const month = moment__WEBPACK_IMPORTED_MODULE_0___default()(date_of_sale).format('MMM');
    const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(date_of_sale).format('MM/DD/yyyy');
    const fees = cleanNumber(depop_fee) + cleanNumber(depop_payments_fee);
    const sellerPaidShipping = cleanNumber(usps_cost);
    const netProfit = currency_js__WEBPACK_IMPORTED_MODULE_1___default()(cleanNumber(item_price) - fees - sellerPaidShipping).value;

    if (months[month]) {
      months[month] = _objectSpread(_objectSpread({}, months[month]), {}, {
        net: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(netProfit + months[month].net).value,
        depop_fees: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(fees + months[month].depop_fees).value,
        sellerPaidShipping: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(sellerPaidShipping + months[month].sellerPaidShipping).value
      });
    } else {
      months[month] = {
        net: netProfit || 0,
        depop_fees: fees || 0,
        sellerPaidShipping: sellerPaidShipping || 0
      };
    } // sets start dates


    if (months[month].start) {
      const start = new Date(months[month].start);
      const current = date;
      if (current < start) months[month].start = date;
    } else months[month].start = date;

    if (months[month].end) {
      const end = new Date(months[month].end);
      const current = date;
      if (current > end) months[month].end = date;
    } else months[month].end = date;

    months[month].end = date;
  });
  Object.keys(months).forEach(key => {
    monthArray.push({
      month: key,
      'Net Profit': months[key].net,
      'Depop Fees': months[key].depop_fees,
      'Seller-Paid-Shipping': months[key].sellerPaidShipping
    });
  });
  return monthArray;
}; // Value Box 1

const getAvgProfits = data => {
  const monthlyProfit = getProfitsByMonth(data);
  let avg = 0;
  monthlyProfit.forEach(data => {
    avg += data['Net Profit'];
  });
  avg = avg / monthlyProfit.length;
  return {
    monthly: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(avg).value,
    weekly: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(avg / 4).value
  };
}; // Value Box 2

const bestTimeToList = data => {
  const obj = {
    sell: {},
    list: {}
  };
  data.sales.forEach(({
    date_of_listing,
    date_of_sale
  }) => {
    const listDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(date_of_listing).format('dddd');
    if (obj.list[listDay]) obj.list[listDay] += 1;else obj.list[listDay] = 1;
    const saleDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(date_of_sale).format('dddd');
    if (obj.sell[saleDay]) obj.sell[saleDay] += 1;else obj.sell[saleDay] = 1;
  });
  const final = {
    sell: [],
    list: []
  };
  let topSellCount = 0;
  let topListCount = 0;
  Object.keys(obj.sell).forEach(key => {
    if (obj.sell[key] === topSellCount) {
      final.sell.push(key);
    } else if (obj.sell[key] > topSellCount) {
      final.sell = [key];
      topSellCount = obj.sell[key];
    }
  });
  Object.keys(obj.list).forEach(key => {
    if (obj.list[key] === topListCount) {
      final.list.push(key);
    } else if (obj.list[key] > topListCount) {
      final.list = [key];
      topListCount = obj.list[key];
    }
  });
  return final;
}; // Value Box 3

const avgItemsPerDay = data => {
  const obj = {};
  data.sales.forEach(({
    date_of_sale
  }) => {
    if (obj[date_of_sale]) {
      obj[date_of_sale] += 1;
    } else obj[date_of_sale] = 1;
  });
  const sales = data.sales.length;
  const days = Object.keys(obj).length;
  return sales / days;
}; // Tables
// export const formatSalesTable = (sales) => {
//   const newSales = []
//   sales.forEach((sale) => {
//     const ms = new Date(sale.date_of_sale).getTime() - new Date(sale.date_of_listing).getTime()
//     const days = ms / (1000 * 3600 * 24)
//     newSales.push({
//       ...sale,
//       'date sold': moment(sale.date_of_sale).format('MM/DD/YYYY'),
//       buyer: `${sale.name}`,
//       username: `${sale.buyer}`,
//       'item price': sale.item_price,
//       'buyer-paid-shipping': sale.buyer_shipping_cost,
//       fees: sale.depop_fee,
//       'date listed': moment(sale.date_of_listing).format('MM/DD/YYYY'),
//       'days listed': days, // converts from ms to days
//       'item description': formatDescription(sale.description),
//       address: `${sale.address_line_1} ${sale.city}, ${sale.state ? sale.state : ''} ${sale.post_code}`
//     })
//   })
//   return sort(newSales)
// }
// utils
// const sort = (sales) => {
//   return sales.sort((a, b) => {
//     const date1 = new Date(a['date sold'])
//     const date2 = new Date(b['date listing'])
//     return date1 - date2
//   })
// }
// const formatDescription = (text) => {
//   const tagStart = text.lastIndexOf('{')
//   const withoutTags = tagStart !== -1 ? text.substring(0, tagStart) : text
//   return withoutTags
// }

const cleanNumber = num => {
  if (!num || num === '-') return 0;
  const withoutCurrency = num.substring(1, num.length);
  return parseFloat(withoutCurrency);
};

/***/ }),

/***/ "./components/general/BlurBackground.js":
/*!**********************************************!*\
  !*** ./components/general/BlurBackground.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_elements_BlurShield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/elements/BlurShield */ "./styles/elements/BlurShield/index.js");
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/layout/Flex */ "./styles/layout/Flex/index.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/general/BlurBackground.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BlurBackground = (_ref) => {
  let {
    component
  } = _ref,
      props = _objectWithoutProperties(_ref, ["component"]);

  return __jsx(Background, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_styles_elements_BlurShield__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: component,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlurBackground);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "BlurBackground__Background",
  componentId: "zvd19k-0"
})(["width:100%;height:calc(100% - 45px);position:absolute;z-index:1;backdrop-filter:blur(10px);bottom:0px;"]);

/***/ }),

/***/ "./components/general/SaleDetails.js":
/*!*******************************************!*\
  !*** ./components/general/SaleDetails.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! currency.js */ "currency.js");
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(currency_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/reporting/ValueBox */ "./styles/reporting/ValueBox/index.js");
/* harmony import */ var _styles_elements_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/elements/Card */ "./styles/elements/Card/index.js");
/* harmony import */ var _styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/elements/Tooltip */ "./styles/elements/Tooltip/index.js");
/* harmony import */ var _styles_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/elements/Text */ "./styles/elements/Text/index.js");
/* harmony import */ var _styles_reporting_RadialChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/reporting/RadialChart */ "./styles/reporting/RadialChart/index.js");
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BlurBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BlurBackground */ "./components/general/BlurBackground.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/components/general/SaleDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const SaleDetails = (_ref) => {
  let {
    row,
    getUrl,
    onClose,
    chartHeight,
    currencyType
  } = _ref,
      props = _objectWithoutProperties(_ref, ["row", "getUrl", "onClose", "chartHeight", "currencyType"]);

  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.generalReducer);
  const isBasic = user.membership.type === 'basic';
  const chartData = [{
    name: 'Sale Price',
    value: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['item price']).value,
    fill: 'green'
  }, {
    name: 'Buyer Shipping',
    value: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['buyer-paid shipping']).value,
    fill: 'blueLight'
  }, {
    name: 'Seller Shipping',
    value: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['seller-paid shipping']).value,
    fill: 'bluePastel'
  }, {
    name: 'Depop Fees',
    value: currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['depop fees']).value,
    fill: 'red'
  }];
  return __jsx(_styles_elements_Card__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    minWidth: "500px",
    defaultTooltip: `Sale card - @${row.username}`,
    headerContent: __jsx(CardTitle, {
      getUrl: getUrl,
      row: row,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 22
      }
    }),
    headerBorder: "none"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), isBasic ? __jsx(_BlurBackground__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "Sale Details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 18
    }
  }) : null, __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_7__["default"], {
    justifyContent: "space-between",
    width: [1],
    flexWrap: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(_styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    smallText: true,
    title: "Date Listed",
    string: true,
    value: row['date listed'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(_styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    smallText: true,
    title: "Date Sold",
    string: true,
    value: row['date sold'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    smallText: true,
    title: "Days In Shop",
    value: row['days listed'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_7__["default"], {
    flexDirection: "column",
    width: [1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alignItems: "center",
    width: [1],
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_styles_reporting_RadialChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    radius: 60,
    data: chartData,
    height: chartHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(_styles_reporting_ValueBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    m: "0px",
    mr: "4px",
    title: "Item Description",
    string: true,
    value: __jsx(Description, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, row['item description'], __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 42
      }
    }), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 48
      }
    }), __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, "Buyer:"), " ", row.name, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 51
      }
    }), __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Sale Price:"), " ", currencyType, currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['item price']).value, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 95
      }
    }), __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, "Buyer-Paid Shipping:"), " ", currencyType, currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['buyer-paid shipping']).value, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 113
      }
    }), __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, "Seller-Paid Shipping:"), " ", currencyType, currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['seller-paid shipping']).value, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 115
      }
    }), __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, "Depop Fees:"), " ", currencyType, currency_js__WEBPACK_IMPORTED_MODULE_1___default()(row['depop fees']).value, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 95
      }
    }), __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Address:"), " ", row.address, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 56
      }
    })),
    value2: "-",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SaleDetails);

const CardTitle = ({
  row,
  getUrl,
  onClose
}) => {
  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_7__["default"], {
    justifyContent: "space-between",
    width: [1],
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(_styles_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "Buyer -", ' ', __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: `Visit ${row.username}'s Shop`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(A, {
    target: "_blank",
    rel: "noopener noreferrer",
    href: getUrl(row.username),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "@", row.username))), onClose ? __jsx(Button, {
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fa fa-close",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  })) : null);
};

const A = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.a.withConfig({
  displayName: "SaleDetails__A",
  componentId: "avw6s7-0"
})(["color:", ";"], ({
  theme
}) => theme.colors.greyDarker);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "SaleDetails__Description",
  componentId: "avw6s7-1"
})(["height:180px;overflow:auto;font-size:15px;font-weight:", ";"], ({
  theme
}) => theme.fontWeights.regular);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.button.withConfig({
  displayName: "SaleDetails__Button",
  componentId: "avw6s7-2"
})(["border:none;background:transparent;cursor:pointer;font-size:20px;color:", ";transition:.1s;&:hover{color:", ";}"], ({
  theme
}) => theme.colors.greyDark, ({
  theme
}) => theme.colors.black);

/***/ }),

/***/ "./components/reports/util/tables.js":
/*!*******************************************!*\
  !*** ./components/reports/util/tables.js ***!
  \*******************************************/
/*! exports provided: formatSalesTable, getRecentSales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSalesTable", function() { return formatSalesTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentSales", function() { return getRecentSales; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! currency.js */ "currency.js");
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(currency_js__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const formatSalesTable = ({
  sales,
  currency_type
}, currencyType) => {
  const newSales = [];
  sales.forEach(sale => {
    const ms = new Date(sale.date_of_sale).getTime() - new Date(sale.date_of_listing).getTime();
    const days = ms / (1000 * 3600 * 24);
    newSales.push(_objectSpread(_objectSpread({}, sale), {}, {
      'date sold': moment__WEBPACK_IMPORTED_MODULE_0___default()(sale.date_of_sale).format('MM/DD/YYYY'),
      buyer: `${sale.name}`,
      username: `${sale.buyer}`,
      'item price': sale.item_price,
      'buyer-paid shipping': sale.buyer_shipping_cost,
      'seller-paid shipping': sale.usps_cost,
      'depop fees': `${currency_type || currencyType}${currency_js__WEBPACK_IMPORTED_MODULE_1___default()(sale.depop_fee).value + currency_js__WEBPACK_IMPORTED_MODULE_1___default()(sale.depop_payments_fee).value}`,
      'date listed': moment__WEBPACK_IMPORTED_MODULE_0___default()(sale.date_of_listing).format('MM/DD/YYYY'),
      'days listed': days,
      // converts from ms to days
      'item description': formatDescription(sale.description),
      address: `${sale.address_line_1} ${sale.city}, ${sale.state ? sale.state : ''} ${sale.post_code}`
    }));
  });
  return sort(newSales);
};
const getRecentSales = ({
  sales,
  currency_type
}, currencyType) => {
  const sortedSales = sort(sales, 'date_of_sale');
  const newSales = [];
  const mostRecentDate = sortedSales[0].date_of_sale;
  const scndMostRecentDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(mostRecentDate).subtract(1, 'days').format('MM-DD-YYYY');
  sortedSales.forEach(sale => {
    if (sale.date_of_sale === mostRecentDate || sale.date_of_sale === scndMostRecentDate || newSales.length < 15) {
      const ms = new Date(sale.date_of_sale).getTime() - new Date(sale.date_of_listing).getTime();
      const days = ms / (1000 * 3600 * 24);
      newSales.push(_objectSpread(_objectSpread({}, sale), {}, {
        'date sold': moment__WEBPACK_IMPORTED_MODULE_0___default()(sale.date_of_sale).format('MM/DD/YYYY'),
        buyer: `${sale.name}`,
        username: `${sale.buyer}`,
        'item price': sale.item_price,
        'buyer-paid shipping': sale.buyer_shipping_cost,
        'seller-paid shipping': sale.usps_cost,
        'depop fees': `${currency_type || currencyType}${currency_js__WEBPACK_IMPORTED_MODULE_1___default()(sale.depop_fee).value + currency_js__WEBPACK_IMPORTED_MODULE_1___default()(sale.depop_payments_fee).value}`,
        'date listed': moment__WEBPACK_IMPORTED_MODULE_0___default()(sale.date_of_listing).format('MM/DD/YYYY'),
        'days listed': days,
        // converts from ms to days
        'item description': formatDescription(sale.description),
        address: `${sale.address_line_1} ${sale.city}, ${sale.state ? sale.state : ''} ${sale.post_code}`
      }));
    }
  });
  return newSales;
}; // utils

const sort = (sales, term) => {
  return [...sales].sort((a, b) => {
    const date1 = new Date(a[term || 'date sold']);
    const date2 = new Date(b[term || 'date sold']);
    return date2 - date1;
  });
};

const formatDescription = text => {
  const tagStart = text.lastIndexOf('{');
  const withoutTags = tagStart !== -1 ? text.substring(0, tagStart) : text;
  return withoutTags;
};

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard */ "./components/dashboard/index.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/pages/dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(_components_dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 11
    }
  });
});

/***/ }),

/***/ "./styles/elements/BlurShield/index.js":
/*!*********************************************!*\
  !*** ./styles/elements/BlurShield/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Button */ "./styles/elements/Button/index.js");
/* harmony import */ var _elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/Text */ "./styles/elements/Text/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/BlurShield/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function BlurShield(props) {
  return __jsx(Container, {
    img: '/blurs/' + props.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bg: Object(polished__WEBPACK_IMPORTED_MODULE_2__["transparentize"])(0.8, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].colors.black),
    flex: [1],
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    textAlign: "center",
    fontSize: "25px",
    fontWeight: 600,
    color: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, props.component), __jsx(Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: 400,
    mb: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Pro Version Only"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/settings/membership",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_elements_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    background: "primary",
    color: "white",
    size: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Upgrade Now"))));
}

/* harmony default export */ __webpack_exports__["default"] = (BlurShield);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_layout_Flex__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "BlurShield__Container",
  componentId: "gwl56q-0"
})(["background-image:url(", ");background-repeat:no-repeat;background-size:contain;background-position:center;height:100%;width:100%;"], ({
  img
}) => img);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BlurShield__Divider",
  componentId: "gwl56q-1"
})(["width:100px;height:2px;background:", ";margin:10px 0px 10px 0px;"], ({
  theme
}) => theme.colors.primary);

/***/ }),

/***/ "./styles/elements/Button/index.js":
/*!*****************************************!*\
  !*** ./styles/elements/Button/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Loading_ThreeDotLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loading/ThreeDotLoader */ "./styles/elements/Loading/ThreeDotLoader.js");
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Button/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Btn = (_ref) => {
  let {
    children,
    bg,
    height,
    color,
    isLoading
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "bg", "height", "color", "isLoading"]);

  return __jsx(StyledButton, _extends({
    fontSize: 15
  }, props, {
    bg: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors[bg || 'primary'],
    color: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors[color || 'white'],
    height: height || '35px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), isLoading ? __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justifyContent: "center",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_Loading_ThreeDotLoader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: color || 'white',
    bg: bg || 'primary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })) : children);
};

/* harmony default export */ __webpack_exports__["default"] = (Btn);
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-4wssox-0"
})(["display:flex;justify-content:center;align-items:center;transition:", ";cursor:", ";user-select:none;overflow:hidden;letter-spacing:.5px;&:hover{opacity:.7;}"], ({
  theme
}) => theme.transitionDurations[1], ({
  disabled
}) => disabled ? 'not-allowed' : 'pointer');

/***/ }),

/***/ "./styles/elements/Card/index.js":
/*!***************************************!*\
  !*** ./styles/elements/Card/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Switch */ "./styles/elements/Switch/index.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tooltip */ "./styles/elements/Tooltip/index.js");
/* harmony import */ var _Loading_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loading/Spinner */ "./styles/elements/Loading/Spinner.js");
/* harmony import */ var _BlurShield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BlurShield */ "./styles/elements/BlurShield/index.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Card/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Card = (_ref) => {
  let {
    onClose,
    headerBorder,
    switchLabel,
    switchCheck,
    switchEvent,
    switchDisabled,
    switchDisabledMsg,
    proOnly
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onClose", "headerBorder", "switchLabel", "switchCheck", "switchEvent", "switchDisabled", "switchDisabledMsg", "proOnly"]);

  return __jsx(Container, _extends({
    m: "10px",
    flexDirection: "column",
    alignItems: "center"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), proOnly ? __jsx(_BlurShield__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, proOnly, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.headerContent ? __jsx(Header, {
    boxShadow: props.boxShadow,
    border: headerBorder,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, props.headerContent, switchLabel || onClose ? __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: !switchDisabled,
    title: switchDisabledMsg,
    hideOnClick: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }
  }, switchLabel ? __jsx(_Switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: switchLabel,
    checked: switchCheck,
    onChange: switchEvent,
    disabled: switchDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 31
    }
  }) : null, onClose ? __jsx(Button, {
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-close",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 31
    }
  })) : null)) : null) : null, props.isLoading ? __jsx(LoadingContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, __jsx(_Loading_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Card__Container",
  componentId: "sc-1jyi1qf-0"
})(["  flex:1;border-radius:", ";background-color:", ";min-height:", "px;position:relative;z-index:1;height:", ";border-radius:", ";", " &:before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;box-shadow:", ";z-index:-1;}"], props => props.borderRadius ? props.borderRadius : props.theme.borderRadius.normal, props => props.theme.colors[props.background] || props.theme.colors.white, ({
  minHeight
}) => minHeight || 150, ({
  height
}) => height, props => props.theme.borderRadius.normal, ({
  isLoading
}) => isLoading ? `
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding-bottom: 3%;
  ` : null, props => props.boxShadow !== 'none' ? props.theme.shadows.normal : 'none');
const LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Card__LoadingContainer",
  componentId: "sc-1jyi1qf-1"
})(["position:absolute;top:50%;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Card__Header",
  componentId: "sc-1jyi1qf-2"
})(["padding:15px;text-align:left;font-size:14px;text-transform:uppercase;position:relative;display:flex;min-height:40px;display:flex;align-items:center;justify-content:space-between;width:100%;border:", " 1px solid;border-bottom:", ";background-color:", ";border-top-right-radius:", ";border-top-left-radius:", ";"], ({
  boxShadow,
  theme,
  border
}) => border || (boxShadow === 'none' ? theme.colors.greyLightest : 'transparent'), ({
  border,
  theme
}) => border || `1px solid ${theme.colors.greyLightest}`, props => props.theme.colors.white, props => props.theme.borderRadius.normal, props => props.theme.borderRadius.normal);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Card__Button",
  componentId: "sc-1jyi1qf-3"
})(["border:none;background:transparent;cursor:pointer;font-size:20px;color:", ";transition:.1s;&:hover{color:", ";}"], ({
  theme
}) => theme.colors.greyDark, ({
  theme
}) => theme.colors.black);

/***/ }),

/***/ "./styles/elements/Form/Label.js":
/*!***************************************!*\
  !*** ./styles/elements/Form/Label.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rebass/forms */ "@rebass/forms");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Form/Label.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





Label.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  htmlfor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function Label(_ref) {
  let {
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["label", "children"]);

  return __jsx(LabelComponent, _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), label, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Label);
const LabelComponent = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__["Label"]).withConfig({
  displayName: "Label__LabelComponent",
  componentId: "sc-12zcarr-0"
})(["display:flex;justify-content:center;flex-direction:column;font-weight:600;font-size:13px;line-height:18px;text-transform:uppercase;transition:color .5s;text-transform:capitalize;user-select:none;color:", ";"], props => props.color || props.theme.colors.greyDark);

/***/ }),

/***/ "./styles/elements/Input/index.js":
/*!****************************************!*\
  !*** ./styles/elements/Input/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rebass/forms */ "@rebass/forms");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Form_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Form/Label */ "./styles/elements/Form/Label.js");
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Input/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Input = (_ref) => {
  let {
    htmlfor,
    label,
    alwaysShowLabel,
    boxProps,
    hideEye
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["htmlfor", "label", "alwaysShowLabel", "boxProps", "hideEye"]);

  const {
    0: showPassword,
    1: togglePassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: labelIsShown,
    1: showLabel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!rest.value || !!rest.defaultValue || alwaysShowLabel);

  const handleFocus = e => {
    if (!alwaysShowLabel) {
      if (e.target.value && !labelIsShown) showLabel(true);else if (!e.target.value && labelIsShown) showLabel(false);
    }

    if (rest.onChange) rest.onChange(e);
  };

  const hoverIcon = type => {
    togglePassword(type === 'enter');
  };

  return __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    width: [1],
    m: "2px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, label ? __jsx(_Form_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    htmlfor: htmlfor,
    label: label,
    fontWeight: 500,
    color: !labelIsShown ? 'transparent' : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }) : null, __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(StyleInput, _extends({
    pl: rest.bg ? '5px' : !rest.disabled ? '0px' : null
  }, rest, {
    type: showPassword ? 'text' : rest.type,
    onChange: handleFocus,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), rest.type === 'password' && !hideEye ? __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ml: "3px" // color='greyDisabled'
    ,
    height: "100%",
    py: "8px",
    px: "5px",
    onMouseOver: () => hoverIcon('enter'),
    onMouseLeave: () => hoverIcon('leave'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fa fa-eye",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);
Input.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  htmlfor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const StyleInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__["Input"]).withConfig({
  displayName: "Input__StyleInput",
  componentId: "ura2uu-0"
})(["background:", " !important;transition:", ";height:35px;padding-left:15px;color:", " !important;font-size:15px;font-weight:500;border-radius:", ";border:1px solid ", " !important;border-bottom:1px solid ", " !important;outline:none;&::placeholder{font-weight:", ";}"], ({
  theme,
  disabled,
  bg
}) => disabled ? theme.colors.greyDisabled : theme.colors[bg || 'white'], ({
  theme
}) => theme.transitionDurations[1], ({
  theme,
  disabled
}) => disabled ? null : theme.colors.primary, ({
  theme,
  disabled,
  borderRadius
}) => disabled || borderRadius ? theme.borderRadius.normal : 0, ({
  borderColor,
  theme
}) => borderColor ? theme.colors[borderColor] : 'transparent', ({
  theme,
  disabled,
  bg,
  borderColor
}) => disabled ? theme.colors[bg || 'white'] : theme.colors[borderColor || 'greyDisabled'], ({
  theme
}) => theme.fontWeights.regular);

/***/ }),

/***/ "./styles/elements/Loading/Spinner.js":
/*!********************************************!*\
  !*** ./styles/elements/Loading/Spinner.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Loading/Spinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Spinner = props => {
  return __jsx(Loader, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);
const spin = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Spinner__Loader",
  componentId: "exi9wd-0"
})(["font-size:10px;width:", ";height:", ";border-radius:50%;position:relative;animation:", " 1.4s infinite linear;transform:translateZ(0);border:", "px solid ", ";border-right-color:transparent;"], ({
  width
}) => width || '4em', ({
  width
}) => width || '4em', spin, ({
  size
}) => size || 4, props => props.theme.colors[props.color] || props.theme.colors.primary);

/***/ }),

/***/ "./styles/elements/Loading/ThreeDotLoader.js":
/*!***************************************************!*\
  !*** ./styles/elements/Loading/ThreeDotLoader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Loading/ThreeDotLoader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // const text = props.theme.colors[props.color]

const load = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%,80%,100%{box-shadow:0 2.5em 0 -.3em;}40%{box-shadow:0 2.5em 0 0;}}"]);

const circleCSS = props => {
  return `
    border-radius: 50%;
    width: 1em;
    height: 1em;
    `;
};

const Loader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ThreeDotLoader__Loader",
  componentId: "sc-14e36zn-0"
})(["", " background:transparent;animation-fill-mode:both;animation:", " 1.8s infinite ease-in-out;position:absolute;top:-2.5em;color:", ";font-size:10px;position:relative;text-indent:-9999em;transform:translateZ(0);animation-delay:-0.16s;&:before{", " animation-fill-mode:both;animation:", " 1.8s infinite ease-in-out;content:'';position:absolute;top:0;left:-2.5em;animation-delay:-0.32s;}&:after{", " animation-fill-mode:both;animation:", " 1.8s infinite ease-in-out;content:'';position:absolute;top:0;left:2.5em;}"], circleCSS, load, props => props.theme.colors[props.color] || props.theme.colors.white, circleCSS, load, circleCSS, load);

const ThreeDotLoader = props => {
  return __jsx(Loader, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ThreeDotLoader);

/***/ }),

/***/ "./styles/elements/Switch/index.js":
/*!*****************************************!*\
  !*** ./styles/elements/Switch/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_ios_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ios-switch */ "react-ios-switch");
/* harmony import */ var react_ios_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_ios_switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Switch/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SwitchView = (_ref) => {
  let {
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_ios_switch__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    pendingOnColor: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.green,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  })), __jsx(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, label));
};

/* harmony default export */ __webpack_exports__["default"] = (SwitchView);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Switch__Label",
  componentId: "sc-8ffxgz-0"
})(["font-weight:", ";font-size:13px;line-height:18px;text-transform:uppercase;margin-left:5px;"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontWeights.regular);

/***/ }),

/***/ "./styles/elements/Table/index.js":
/*!****************************************!*\
  !*** ./styles/elements/Table/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized */ "react-virtualized");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_virtualized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./styles/elements/Card/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Table/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // https://github.com/bvaughn/react-virtualized




const Table = props => {
  const {
    data,
    columnLabels,
    tableHeight,
    tableWidth,
    handleRowClick,
    background,
    activeRow
  } = props;
  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    width: tableWidth || 250,
    height: tableHeight || 280,
    headerHeight: 20,
    rowWidth: "100%",
    rowHeight: 30,
    onRowClick: handleRowClick,
    rowStyle: ({
      index
    }) => rowStyle({
      handleRowClick,
      index
    }, activeRow),
    rowCount: data.length,
    rowGetter: ({
      index
    }) => {
      return data[index];
    },
    style: {
      willChange: 'auto',
      width: '100%',
      height: props.height,
      background: background || _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.mainBg,
      borderRadius: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadius.normal,
      transition: '.2s'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, columnLabels.map((label, i) => {
    return __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      key: label + i,
      label: label,
      dataKey: [label],
      cellDataGetter: ({
        rowData
      }) => rowData[label],
      width: 100,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);
Table.propTypes = {
  tableHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // specificies table height
  tableWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // specificies card height
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  columnLabels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array // There's a lot more potentially because of rebass's styling system that we pass to
  // the card wrapper, but that'll do for now.

};

const rowStyle = (props, activeRow) => {
  return {
    cursor: props.handleRowClick ? 'pointer' : 'default',
    color: activeRow === props.index && props.index !== -1 ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.mainBg : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.textGrey,
    background: activeRow === props.index && props.index !== -1 ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.teal : props.index % 2 === 0 ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.greyLight2 : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.mainBg
  };
};

/***/ }),

/***/ "./styles/elements/Text/index.js":
/*!***************************************!*\
  !*** ./styles/elements/Text/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Text/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Text = (_ref) => {
  let {
    notFound
  } = _ref,
      props = _objectWithoutProperties(_ref, ["notFound"]);

  const preset = notFound ? {
    color: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.textSubtle,
    fontSize: '25px'
  } : {};
  return __jsx(StyledText, _extends({}, preset, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"]).withConfig({
  displayName: "Text__StyledText",
  componentId: "sc-178qlvd-0"
})(["color:", ";"], ({
  theme,
  color
}) => theme.colors[color]);

/***/ }),

/***/ "./styles/elements/Tooltip/index.js":
/*!******************************************!*\
  !*** ./styles/elements/Tooltip/index.js ***!
  \******************************************/
/*! exports provided: Tooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/elements/Tooltip/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // @component

const Tooltip = (_ref) => {
  let {
    title,
    size
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "size"]);

  const html = title ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 24
    }
  }, title) : rest.html;
  return __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], _extends({
    html: html,
    size: size
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }));
};
Tooltip.propTypes = {
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'])
};
Tooltip.defaultProps = {
  arrow: true,
  arrowSize: 'small'
};
/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./styles/layout/Flex/index.js":
/*!*************************************!*\
  !*** ./styles/layout/Flex/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass/styled-components */ "rebass/styled-components");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/layout/Flex/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Flex = props => {
  return __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Flex);

/***/ }),

/***/ "./styles/reporting/BarChart/index.js":
/*!********************************************!*\
  !*** ./styles/reporting/BarChart/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/Card */ "./styles/elements/Card/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var _styleUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styleUtil */ "./styles/reporting/styleUtil.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/reporting/BarChart/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Barchart = (_ref) => {
  let {
    data,
    xdataKey,
    tickFormatter,
    labelFormatter,
    formatTooltip,
    disableAnimation,
    bars = [],
    hideLegend
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data", "xdataKey", "tickFormatter", "labelFormatter", "formatTooltip", "disableAnimation", "bars", "hideLegend"]);

  return __jsx(_elements_Card__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx(_styleUtil__WEBPACK_IMPORTED_MODULE_4__["ChartWrap"], {
    height: 400,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
    data: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    dataKey: xdataKey,
    tickFormatter: tickFormatter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    labelFormatter: labelFormatter,
    formatter: formatTooltip,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), !hideLegend ? __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], {
    verticalAlign: "top",
    iconType: "circle",
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }) : null, bars.map(({
    size,
    dataKey,
    color
  }, i) => {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      isAnimationActive: typeof disableAnimation !== 'boolean',
      key: i,
      barSize: size,
      dataKey: dataKey,
      type: "monotone",
      fill: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors[color] || _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.primary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Barchart);

/***/ }),

/***/ "./styles/reporting/RadialChart/index.js":
/*!***********************************************!*\
  !*** ./styles/reporting/RadialChart/index.js ***!
  \***********************************************/
/*! exports provided: default, ChartContainer, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartContainer", function() { return ChartContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Card */ "./styles/elements/Card/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/reporting/RadialChart/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const COLORS = [_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.warning, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pastelRose, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.greenSoft, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pastelBlueLight];

const RadialGraph = (_ref) => {
  let {
    float,
    data,
    radius = 50,
    disableAnimation
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["float", "data", "radius", "disableAnimation"]);

  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    allData: {
      currency_type
    }
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.generalReducer);
  return __jsx(ChartContainer, _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
    activeIndex: index,
    activeShape: props => __jsx(ActiveShape, _extends({}, props, {
      currency: currency_type,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 37
      }
    })),
    data: data,
    innerRadius: radius,
    outerRadius: radius + 20,
    fill: "#8884d8",
    isAnimationActive: typeof disableAnimation !== 'boolean',
    paddingAngle: 5,
    dataKey: "value",
    onMouseEnter: (_, i) => setIndex(i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, data.map((set, index) => {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      key: `cell-${index}`,
      fill: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors[set.fill] || COLORS[index % COLORS.length],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RadialGraph);

const ActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    currency
  } = props;
  const value = payload.value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("text", {
    x: cx,
    y: cy - 10,
    dy: 8,
    textAnchor: "middle",
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, payload.name), __jsx("text", {
    x: cx,
    y: cy + 10,
    dy: 8,
    textAnchor: "middle",
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, currency, value), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius + 5,
    outerRadius: outerRadius + 5,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }));
};

const ChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "RadialChart__ChartContainer",
  componentId: "sc-1dp2xv0-0"
})(["min-height:", "px;height:100px;min-width:250px;display:flex;align-items:center;"], ({
  height
}) => height || 250);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_elements_Card__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "RadialChart__Container",
  componentId: "sc-1dp2xv0-1"
})(["@media only screen and (max-width:80px){flex-direction:column;}"]);

/***/ }),

/***/ "./styles/reporting/TotalEarnings/index.js":
/*!*************************************************!*\
  !*** ./styles/reporting/TotalEarnings/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/Switch */ "./styles/elements/Switch/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./styles/reporting/TotalEarnings/styles.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/reporting/TotalEarnings/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const COLORS = [_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.pastelOrange, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.pastelRose, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.greenSoft, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.pastelBlueLight];

const RadialGraph = (_ref) => {
  let {
    title,
    value = 0,
    currencyType,
    float,
    data,
    disableAnimation,
    netValue
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "value", "currencyType", "float", "data", "disableAnimation", "netValue"]);

  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: net,
    1: setNet
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: activeVal,
    1: setActiveVal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setActiveVal(value);
  }, [value]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], _extends({
    flexDirection: "row",
    justifyContent: "space-evenly"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), title ? __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["TitleContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["BoxTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, title.toUpperCase()), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SwitchContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx(_elements_Switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Show Net Profit",
    checked: net,
    onChange: () => {
      setNet(!net);
      setActiveVal(value === activeVal ? netValue : value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["BoxValue"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, currencyType, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    formattingFn: num => num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }),
    decimals: float ? 2 : 0,
    start: activeVal === value ? parseFloat(netValue) : parseFloat(value),
    end: float ? parseFloat(activeVal) : typeof activeVal === 'number' ? activeVal : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }))) : null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
    width: "100%",
    height: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["PieChart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
    activeIndex: index,
    activeShape: props => __jsx(ActiveShape, _extends({}, props, {
      currency: currencyType,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 39
      }
    })),
    data: data,
    innerRadius: 60,
    outerRadius: 80,
    paddingAngle: 5,
    dataKey: "value",
    isAnimationActive: typeof disableAnimation !== 'boolean',
    onMouseEnter: (_, i) => setIndex(i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, data.map((_, index) => __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    key: `cell-${index}`,
    fill: COLORS[index % COLORS.length],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RadialGraph);

const ActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    currency
  } = props;
  const value = payload.value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx("text", {
    x: cx,
    y: cy - 10,
    dy: 8,
    textAnchor: "middle",
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, payload.name), __jsx("text", {
    x: cx,
    y: cy + 10,
    dy: 8,
    textAnchor: "middle",
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, currency, value), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius + 5,
    outerRadius: outerRadius + 5,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./styles/reporting/TotalEarnings/styles.js":
/*!**************************************************!*\
  !*** ./styles/reporting/TotalEarnings/styles.js ***!
  \**************************************************/
/*! exports provided: ChartContainer, Container, TitleContainer, BoxTitle, Label, SwitchContainer, BoxValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartContainer", function() { return ChartContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContainer", function() { return TitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxTitle", function() { return BoxTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchContainer", function() { return SwitchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxValue", function() { return BoxValue; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/Card */ "./styles/elements/Card/index.js");



const label = ({
  theme
}) => `
    font-weight: ${theme.fontWeights.regular};
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    `;

const ChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ChartContainer",
  componentId: "sc-15xzqj6-0"
})(["min-width:250px;height:100px;min-height:250px;display:flex;align-items:center;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_elements_Card__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "styles__Container",
  componentId: "sc-15xzqj6-1"
})(["@media only screen and (max-width:600px){flex-direction:column;}"]);
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__TitleContainer",
  componentId: "sc-15xzqj6-2"
})(["display:flex;justify-content:center;flex-direction:column;@media only screen and (max-width:600px){align-items:center;}"]);
const BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "styles__BoxTitle",
  componentId: "sc-15xzqj6-3"
})(["padding:5px;text-align:left;font-size:30px;border-bottom:1px solid ", ";position:relative;display:flex;font-size:25px;font-weight:500;margin:0px;color:", ";"], ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.primary);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Label",
  componentId: "sc-15xzqj6-4"
})(["", ";margin-left:5px;"], label);
const SwitchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SwitchContainer",
  componentId: "sc-15xzqj6-5"
})(["display:flex;align-items:center;justify-content:flex-start;padding-top:10px;", ";"], label);
const BoxValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__BoxValue",
  componentId: "sc-15xzqj6-6"
})(["margin-top:10px;text-align:left;font-size:30px;font-weight:500;color:", ";"], ({
  theme
}) => theme.colors.primary);

/***/ }),

/***/ "./styles/reporting/ValueBox/index.js":
/*!********************************************!*\
  !*** ./styles/reporting/ValueBox/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
var _jsxFileName = "/Users/samuelwood/development/mepop-reports/mepop-frontend/src/styles/reporting/ValueBox/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ValueBox = (_ref) => {
  let {
    title,
    value = 0,
    value2,
    currencyType,
    noAnimate,
    float,
    label1,
    label2,
    lessIsGood,
    hideCompare,
    string,
    smallText
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "value", "value2", "currencyType", "noAnimate", "float", "label1", "label2", "lessIsGood", "hideCompare", "string", "smallText"]);

  const biggerValue = value > value2 ? value : value2;
  const smallerValue = value < value2 ? value : value2;
  const plusOrMinus = biggerValue === value && !lessIsGood ? 'fa-plus' : 'fa-minus';
  const caret = biggerValue === value && !lessIsGood ? 'fa-caret-up' : 'fa-caret-down';
  const diff = biggerValue - smallerValue;
  const percentChange = Math.round(smallerValue / biggerValue * 100);
  let color;

  if (value > value2) {
    color = lessIsGood ? 'bad' : 'good';
  } else {
    color = lessIsGood ? 'good' : 'bad';
  }

  return __jsx(Container, _extends({
    m: "10px"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, title, !isNaN(percentChange) && !hideCompare ? __jsx(ChangeValue, {
    good: color === 'good',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: `fa ${plusOrMinus}`,
    style: {
      marginRight: 3,
      fontSize: 10,
      marginTop: -1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), percentChange, "%") : null), __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(Value, {
    smallText: !value2 && !smallText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, currencyType, string ? value : __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    decimals: float ? 2 : 0,
    start: noAnimate ? value : 0,
    end: float ? parseFloat(value) : typeof value === 'number' ? value : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })), !isNaN(percentChange) && !hideCompare ? __jsx(ChangeValue, {
    good: color === 'good',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: `fa ${caret}`,
    style: {
      marginRight: 3,
      fontSize: 10,
      marginTop: -1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), currencyType, diff) : null, __jsx(Labels, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, label1 || null)), label2 ? __jsx(Content, {
    borderTop: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(Value, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, currencyType, string ? value2 : __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    decimals: float ? 2 : 0,
    start: noAnimate ? value2 : 0,
    end: float ? parseFloat(value2) : typeof value2 === 'number' ? 100 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  })), __jsx(Labels, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, label2 || null)) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ValueBox);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_layout_Flex__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "ValueBox__Container",
  componentId: "sc-164zygr-0"
})(["background-color:", ";overflow:auto;border-radius:$border-radius;flex:1 1;box-shadow:", ";border-radius:", ";min-height:92px;flex-direction:column;"], props => props.theme.colors.white, props => props.theme.shadows.normal, props => props.theme.borderRadius.normal);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ValueBox__Content",
  componentId: "sc-164zygr-1"
})(["padding:5px 10px;text-align:left;font-size:20px;font-weight:", ";color:", ";display:flex;justify-content:space-between;border-top:", "px solid ", ";}"], props => props.theme.fontWeights.bold, props => props.theme.colors.primary, props => props.borderTop ? 1 : 0, props => props.theme.colors.greyLightest);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ValueBox__Title",
  componentId: "sc-164zygr-2"
})(["padding:10px;text-align:left;color:", ";position:relative;font-weight:", ";font-size:18px;display:flex;background:", ";"], props => props.theme.colors.primary, props => props.theme.fontWeights.medium, props => props.theme.colors.greyLightest);
const Labels = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ValueBox__Labels",
  componentId: "sc-164zygr-3"
})(["font-size:15px;display:flex;align-items:center;font-weight:", ";color:", ";"], props => props.theme.fontWeights.medium, props => props.theme.colors.textSubtle);
const Value = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ValueBox__Value",
  componentId: "sc-164zygr-4"
})(["font-size:", "px;"], props => props.smallText ? 25 : 20);
const ChangeValue = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "ValueBox__ChangeValue",
  componentId: "sc-164zygr-5"
})(["margin-left:10px;font-size:15px;display:flex;align-items:center;color:", ";font-weight:", ";"], props => props.good ? props.theme.colors.good : props.theme.colors.bad, props => props.theme.fontWeights.medium);

/***/ }),

/***/ "./styles/reporting/styleUtil.js":
/*!***************************************!*\
  !*** ./styles/reporting/styleUtil.js ***!
  \***************************************/
/*! exports provided: ChartWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWrap", function() { return ChartWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Flex */ "./styles/layout/Flex/index.js");


const ChartWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "styleUtil__ChartWrap",
  componentId: "sc-1wjbg1g-0"
})(["display:flex;flex-wrap:wrap;height:", "px;width:100%;padding:", ";"], ({
  height
}) => height || 300, ({
  noPadding
}) => noPadding ? '0px' : '0px 10px ');

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Responsive Breakpoints
 */

const breakpoints = [{
  // has to be an array for some stupid reason
  xs: '600',
  s: '768',
  m: '992',
  l: '1020',
  xl: '1200'
}]; // -> @media only screen and (max-width: ${({theme})=>theme.breakpoints[0].s}px)

/**
 * Spacing
 */

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
/**
 * Colors
 */
// color values

let colors = {
  white: '#fff',
  whiteDark: '#f3f3f3',
  black: '#000',
  textGrey: '#585858',
  greyDarkest: '#252629',
  greyDarker: '#585853',
  greyDark: '#787878',
  greyLight: '#B2B2B2',
  greyLight2: 'rgb(198, 198, 198)',
  greyLighter: '#DADADA',
  greyLightest: '#E1E1E1',
  greyDisabled: '#ededed',
  greenSoftDarkest: '#133531',
  greenSoftDark: '#506A67',
  greenSoft: '#309F87',
  greenSoftLight: '#BBD8D3',
  greenSoftLighter: '#D3EEEB',
  blueBrand: '#05646E',
  blue: '#293757',
  blueHighlight: '#3458ac',
  blueLight: '#96c1da',
  bluegreyLight: '#849CA0',
  yellowDark: '#bb6124',
  yellow: '#FFBB2a',
  yellowLight: '#FFC39B',
  red: '#CD0019',
  depopRed: '#FF2300',
  redDark: '#9C0013',
  redLight: '#FDC0C7',
  redDisabled: '#C19C9C',
  green: '#069f06',
  purple: '#86529A',
  teal: '#24867A',
  // Pastel Colors
  pastelPurple: '#8884d8',
  pastelBlue: '#83a6ed',
  pastelBlueLight: '#8dd1e1',
  pastelGreen: '#82ca9d',
  pastelGreenLight: '#a4de6c',
  pastelGreenLighter: '#d0ed57',
  pastelYellow: '#FFF933',
  pastelOrange: '#ffc658',
  pastelPink: '#ffd1dc',
  pastelRose: '#fc746d'
}; // color aliases

colors = _objectSpread(_objectSpread({}, colors), {}, {
  transparent: 'transparent',
  primary: colors.blue,
  textSubtle: colors.greyText,
  accent: colors.blueHighlight,
  danger: colors.red,
  warning: colors.yellow,
  success: colors.green,
  good: colors.green,
  bad: colors.red,
  neutral: colors.blue,
  mainBg: colors.greyLightest,
  pastelArray: [colors.pastelPurple, colors.pastelBlue, colors.pastelBlueLight, colors.pastelGreen, colors.pastelGreenLight, colors.pastelGreenLighter, colors.pastelYellow, colors.pastelOrange, colors.pastelPink, colors.pastelRose]
}); // TOMIS const gradients = {
//   brand: 'linear-gradient(100deg, #306e7b 0%, #43837a 70%)'
// }

/**
 * Boxes
 */

const heights = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48
};
const borders = ['0px solid', '1px solid', '2px solid'];
const borderRadius = {
  none: '0px',
  normal: '4px',
  more: '1em',
  full: '100%'
};
const shadows = {
  subtle: '0 0 55px 0 rgba(0,0,0,0.1)',
  subtleSmall: '0 0 35px 0 rgba(0,0,0,0.06)',
  subtleSmallBelow: '0 5px 15px 0 rgba(0,0,0,0.03)',
  subtleTeal: `0 0 35px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.75, colors.greenSoft)}`,
  normal: '0px 0px 20px 0px rgba(0, 0, 0, .3);',
  heavy: '0 0 35px 0 rgba(0,0,0,0.3)',
  smallTeal: `0 0 12px 0 ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.85, colors.greenSoft)}`
};
/**
 * Typography
 */

const fonts = ['brandon-grotesque', 'sans-serif'];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];
const lineHeights = [1, 1.125, 1.25, 1.5];
const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  black: 900
};
const letterSpacings = {
  normal: 'normal',
  caps: '0.03em'
};
/**
 * Animation
 */

const transitionDurations = ['0s', '0.2s'];
const theme = {
  // Responsive Breakpoints
  breakpoints,
  // Spacing
  space,
  // Boxes
  heights,
  borders,
  borderRadius,
  shadows,
  // Typography
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  // Colors
  colors,
  // Animation
  transitionDurations
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuelwood/development/mepop-reports/mepop-frontend/src/pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "@rebass/forms":
/*!********************************!*\
  !*** external "@rebass/forms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rebass/forms");

/***/ }),

/***/ "currency.js":
/*!******************************!*\
  !*** external "currency.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("currency.js");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-ios-switch":
/*!***********************************!*\
  !*** external "react-ios-switch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ios-switch");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-tippy":
/*!******************************!*\
  !*** external "react-tippy" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tippy");

/***/ }),

/***/ "react-virtualized":
/*!************************************!*\
  !*** external "react-virtualized" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "rebass/styled-components":
/*!*******************************************!*\
  !*** external "rebass/styled-components" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass/styled-components");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map