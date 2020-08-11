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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "../node_modules/font-awesome/css/font-awesome.css":
/*!*********************************************************!*\
  !*** ../node_modules/font-awesome/css/font-awesome.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "../node_modules/react-dates/lib/css/_datepicker.css":
/*!***********************************************************!*\
  !*** ../node_modules/react-dates/lib/css/_datepicker.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/react-tippy/dist/tippy.css":
/*!**************************************************!*\
  !*** ../node_modules/react-tippy/dist/tippy.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/react-virtualized/styles.css":
/*!****************************************************!*\
  !*** ../node_modules/react-virtualized/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/exampleBuyers.js":
/*!*********************************!*\
  !*** ./assets/exampleBuyers.js ***!
  \*********************************/
/*! exports provided: headers, buyers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buyers", function() { return buyers; });
const headers = ['Date of sale', 'Time of sale', 'Date of listing', 'Bundle', 'Buyer', 'Brand', 'Description', 'Item price', 'Buyer shipping cost', 'Total', 'USPS Cost', 'Depop fee', 'Depop Payments fee', 'Payment type', 'Category', 'Name', 'Address Line 1', 'Address Line 2', 'City', 'State', 'Post Code', 'Country'];
const buyers = ['mirroie', 'aidm', 'jacquelinebuui', 'rubymylove', 'malapin', '_julia', 'madelineaafedt', 'katiehoffmaan', 'dacarr', 'fantatoure', 'uhhhhh2222', 'kateroney', 'mejiaariel', 'madeleinewillls', 'peppah', 'casteliia', 'jaimeeclaire', 'loralissa', 'melthewarrior12', 'nataliemarie22', 'abbyalampi2', 'queenlvr', 'lacydevin02', 'amanjjj', 'sydgraves', 'bellad4', 'mhayes15', 'evadana121', 'zotoso', 'b_lanham', 'lmadduri', 'sgbarber', 'leejennifer1', 'edgyhannah', 'edgyhannah', 'byunibi', 'maddyarcaro', 'whatavar', 'jayme13', 'estherkinsaul', 'fatima2003', 'nishtha142', 'andrearuizgomez', 'katey__', 'daliacolette', 'urgrandmasofia', 'nishtha142', 'hunnybunny8', 'isabellap5', 'carladicovskiy', 'gangianthony', 'petite1125', 'ximenanava994', 'tootmcdoot', 'taralakin', 'fieyang', 'malikaawan', 'casseycakes', 'ouchwronghole', 'mcsharpdawg', 'hiraethvibes', 'tianacarcamo', 'iqourl', 'marisagannon', 'bellalarson15', 'dansythomas', 'gmoreno1224', 'hopegist', 'hopegist', 'haleywen', 'miichellen', 'karenmontero', 'karenmontero', 'tsmn', 'meat_head', 'jaclynmueller_', 'maureenh14', 'sunflowerrnicotine', 'vicssecret', 'rdrgz', 'marguillen', 'marbarstar', 'danicarobinson', 'atlanticoaksvintage', 'zigzaggoods', 'anzeige', 'lui_ohh', 'dannisgarden', 'wickedbrianna', 'lillyybearr', 'princessthreadz', 'dannisgarden', 'figchild', 'hayley_rainbolt', 'teelgg', 'lifershop', 'erynnjean', 'layleepop', 'chinookvintage', 'enithingiwant', 'domsresell'];

/***/ }),

/***/ "./components/DateContainer.js":
/*!*************************************!*\
  !*** ./components/DateContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _styles_elements_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/elements/DateRangePicker */ "./styles/elements/DateRangePicker/index.js");
/* harmony import */ var _styles_elements_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/elements/Select */ "./styles/elements/Select/index.js");
/* harmony import */ var _dataProcessing_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dataProcessing/utils */ "./dataProcessing/utils.js");
/* harmony import */ var _store_generalReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/generalReducer */ "./store/generalReducer.js");
/* harmony import */ var _styles_elements_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/elements/Text */ "./styles/elements/Text/index.js");
/* harmony import */ var _styles_elements_Loading_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/elements/Loading/Spinner */ "./styles/elements/Loading/Spinner.js");
/* harmony import */ var _styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/elements/Tooltip */ "./styles/elements/Tooltip/index.js");
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/components/DateContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const DateContainer = ({
  page
}) => {
  const {
    allData,
    loading,
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.generalReducer);
  const fixedFullRange = page === 'Dashboard';
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const min = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => allData.sales ? allData.sales[0].date_of_sale : null, [allData]);
  const max = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => allData.sales ? allData.sales[allData.sales.length - 1].date_of_sale : null, [allData]);
  const {
    0: dateRange,
    1: setDates
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    startDate: min,
    endDate: max
  }); // stored in MM-DD-YYYY format

  const {
    0: compareDateRange,
    1: setCompareDates
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    startDate: min,
    endDate: max
  }); // stored in MM-DD-YYYY format

  const {
    0: preset,
    1: setPreset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: 'Full Range',
    value: 'full'
  });
  const {
    0: comparePreset,
    1: setComparePreset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: 'Full Range',
    value: 'full'
  });
  const {
    0: showCompareDate,
    1: toggleCompare
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isBasic = user.membership.type === 'basic';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      if (allData.sales && dateRange.startDate && dateRange.endDate) {
        const rangedData = Object(_dataProcessing_utils__WEBPACK_IMPORTED_MODULE_8__["getRangedData"])(allData, {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate
        });
        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_9__["UPDATE_RANGED_DATA"],
          payload: rangedData
        });
      }
    });
  }, [allData, dateRange]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoading(true);
    setTimeout(() => {
      if (allData.sales && compareDateRange.startDate && compareDateRange.endDate) {
        const rangedData = Object(_dataProcessing_utils__WEBPACK_IMPORTED_MODULE_8__["getRangedData"])(allData, {
          startDate: compareDateRange.startDate,
          endDate: compareDateRange.endDate
        }); // console.log(rangedData)

        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_9__["UPDATE_COMPARE_DATA"],
          payload: rangedData
        });
      }

      if (!showCompareDate) {
        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_9__["UPDATE_COMPARE_DATA"],
          payload: {}
        });
      }

      setLoading(false);
    });
  }, [allData, compareDateRange, showCompareDate]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      startDate,
      endDate
    } = getDatePreset(preset, min, max);

    if (startDate && endDate) {
      setDates({
        startDate,
        endDate
      });
    }
  }, [preset]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      startDate,
      endDate
    } = getDatePreset(comparePreset, min, max);

    if (startDate && endDate) {
      setCompareDates({
        startDate,
        endDate
      });
    }
  }, [comparePreset]);
  if (!allData.sales) return null;
  const btnDisabled = loading || fixedFullRange || isLoading || isBasic;
  return __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    justifyContent: "space-between",
    height: showCompareDate && !fixedFullRange ? 96 : 'auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_styles_elements_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    opacity: fixedFullRange ? 0 : 1,
    options: options,
    onChange: arr => setPreset(arr[0]),
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), showCompareDate ? __jsx(_styles_elements_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    opacity: fixedFullRange ? 0 : 1,
    options: options,
    onChange: arr => setComparePreset(arr[0]),
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }) : null), __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_styles_elements_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    startDate: dateRange.startDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? min : dateRange.startDate) : null,
    endDate: dateRange.endDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? max : dateRange.endDate) : null,
    disabled: fixedFullRange,
    isOutsideRange: day => {
      console.log(day, moment__WEBPACK_IMPORTED_MODULE_3___default()(max));
      return day.isBefore(moment__WEBPACK_IMPORTED_MODULE_3___default()(min)) || day.isAfter(moment__WEBPACK_IMPORTED_MODULE_3___default()(max));
    },
    enableOutsideDays: false,
    onDatesChange: ({
      startDate,
      endDate
    }) => {
      setPreset({
        label: 'Custom',
        value: null
      });
      setDates({
        startDate: startDate ? startDate.format('MM-DD-YYYY') : null,
        endDate: endDate ? endDate.format('MM-DD-YYYY') : null
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }), showCompareDate && !fixedFullRange ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_elements_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "primary",
    fontWeight: "100",
    fontSize: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, "vs."), __jsx(_styles_elements_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    startDate: compareDateRange.startDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? min : compareDateRange.startDate) : null,
    endDate: compareDateRange.endDate ? moment__WEBPACK_IMPORTED_MODULE_3___default()(fixedFullRange ? max : compareDateRange.endDate) : null,
    disabled: fixedFullRange,
    isOutsideRange: day => {
      return day.isBefore(min) || day.isAfter(max);
    },
    onDatesChange: ({
      startDate,
      endDate
    }) => {
      setComparePreset({
        label: 'Custom',
        value: null
      });
      setCompareDates({
        startDate: startDate ? startDate.format('MM-DD-YYYY') : null,
        endDate: endDate ? endDate.format('MM-DD-YYYY') : null
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  })) : null), __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: !isBasic,
    html: __jsx(TooltipContent, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }),
    interactive: true,
    interactiveBorder: 100,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx(AddBtn, {
    isFixedFullRange: fixedFullRange,
    onClick: () => {
      if (btnDisabled) return;
      toggleCompare(!showCompareDate);
    },
    disabled: btnDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, fixedFullRange ? null : loading || isLoading ? __jsx(_styles_elements_Loading_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    width: "2em",
    size: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }) : __jsx("i", {
    className: showCompareDate ? 'fa fa-minus-circle' : 'fa fa-plus-circle',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DateContainer);

const TooltipContent = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "You must ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/settings/membership",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 16
    }
  }, __jsx(Span, {
    title: "/membership",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 50
    }
  }, "upgrade")), " to compare date ranges");
};

const Span = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "DateContainer__Span",
  componentId: "sc-3ofmch-0"
})(["color:white;cursor:pointer;border-bottom:1px solid white;&:hover{opacity:.7;}"]);
const AddBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "DateContainer__AddBtn",
  componentId: "sc-3ofmch-1"
})(["color:", ";background:none;border:none;cursor:", ";font-size:20px;margin-top:3px;transition:", ";height:50px;width:60px;display:flex;align-items:center;border-left:1px solid ", ";justify-content:center;&:hover{color:", ";}"], ({
  theme
}) => theme.colors.greyLight, ({
  disabled
}) => disabled ? 'not-allowed' : 'pointer', ({
  theme
}) => theme.transitionDurations[1], ({
  theme,
  isFixedFullRange
}) => isFixedFullRange ? 'transparent' : theme.colors.mainBg, ({
  theme,
  disabled
}) => !disabled ? theme.colors.primary : null);
const options = [{
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

const getDatePreset = (preset, min, max) => {
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
        const newStart = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf('month')).format('MM-DD-YYYY');
        const newEnd = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf('month')).format('MM-DD-YYYY');
        return {
          startDate: newStart,
          endDate: new Date(newEnd) <= new Date(max) ? newEnd : max
        };
      }

    case 'last_month':
      {
        const newStart = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'months').startOf('month')).format('MM-DD-YYYY');
        const newEnd = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'months').endOf('month')).format('MM-DD-YYYY');
        return {
          startDate: newStart,
          endDate: new Date(newEnd) <= new Date(max) ? newEnd : max
        };
      }

    case 'past_three_months':
      {
        const newStart = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(3, 'months')).format('MM-DD-YYYY');
        return {
          startDate: newStart,
          endDate: max
        };
      }

    default:
      {
        return {};
      }
  }
};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _DateContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateContainer */ "./components/DateContainer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_elements_NoDataFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/elements/NoDataFound */ "./styles/elements/NoDataFound/index.js");
/* harmony import */ var _styles_elements_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/elements/Loading */ "./styles/elements/Loading/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const getheaderContent = pathname => {
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

const Layout = Object(_firebase__WEBPACK_IMPORTED_MODULE_9__["withFirebase"])(props => {
  const {
    loading,
    compareData,
    files,
    rangedData,
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.generalReducer);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const heading = getheaderContent(router.pathname);
  const noData = !files.length || JSON.stringify(rangedData) === '{}';
  const noUser = JSON.stringify(user) === '{}';
  const routeRequiresData = heading === 'Reports' || heading === 'Dashboard';
  const centerContent = loading || noData;
  const unprotectedRoute = router.pathname === '/sign-in' || router.pathname === '/sign-up';
  const hideSideBar = router.pathname === '/settings/membership/';

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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, unprotectedRoute ? __jsx(Body, {
    centerContent: true,
    headerSize: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, loading ? __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "center",
    height: "90vh",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(_styles_elements_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  })) : props.children) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hideSideBar ? null : __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, heading, heading === 'Reports' || heading === 'Dashboard' ? __jsx(_DateContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    page: heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }) : null), __jsx(Body, {
    centerContent: centerContent,
    headerSize: JSON.stringify(compareData) !== '{}' ? 110 : 45,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, noData && routeRequiresData && !loading ? __jsx(_styles_elements_NoDataFound__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 63
    }
  }) : loading ? __jsx(_styles_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "center",
    height: "90vh",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx(_styles_elements_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 27
    }
  })) : props.children))));
});
/* harmony default export */ __webpack_exports__["default"] = (Layout);
const Body = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Layout__Body",
  componentId: "rqjs94-0"
})(["overflow:auto;height:calc(100vh - ", "px);width:100vw;padding-bottom:70px;", ""], ({
  headerSize
}) => headerSize, ({
  centerContent
}) => {
  if (centerContent) {
    return `
      display: flex;
      justify-content: center;
    `;
  }
});
const Header = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Layout__Header",
  componentId: "rqjs94-1"
})(["background:white;width:100%;min-height:50px;border-bottom:1px solid ", ";display:flex;align-items:center;padding-left:10px;font-wieght:", ";color:", ";font-weight:", ";font-size:20px;justify-content:space-between;"], ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.fontWeights.bold, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.fontWeights.bold);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/elements/Tooltip */ "./styles/elements/Tooltip/index.js");
/* harmony import */ var _styles_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/elements/Text */ "./styles/elements/Text/index.js");
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/components/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Sidebar = Object(_firebase__WEBPACK_IMPORTED_MODULE_4__["withFirebase"])((_ref) => {
  let {
    firebase
  } = _ref,
      props = _objectWithoutProperties(_ref, ["firebase"]);

  const {
    0: isMini,
    1: minify
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: activeRoute,
    1: updateRoute
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.pathname);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateRoute(router.pathname);
  }, [router.pathname]);
  return __jsx(Container, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(Row, {
    title: "true",
    onClick: () => minify(!isMini),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(Title, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Mepop"), __jsx(IconButton, {
    isMini: isMini,
    onClick: () => minify(!isMini),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("i", {
    onClick: () => minify(!isMini),
    className: "fa fa-bars",
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))), __jsx(SubContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(Nav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Dashboard",
    disabled: !isMini,
    distance: 0,
    position: "right-start",
    arrow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(Row, {
    isMini: isMini,
    onClick: () => updateRoute('/dashboard'),
    isActive: activeRoute === '/dashboard',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(I, {
    className: "fa fa-home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx(RowText, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Dashboard")))), __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Reports",
    disabled: !isMini,
    distance: 0,
    position: "right-start",
    arrow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/reports",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(Row, {
    isMini: isMini,
    onClick: () => updateRoute('/reports'),
    isActive: activeRoute === '/reports',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(I, {
    className: "fa fa-area-chart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx(RowText, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Reports")))), __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Fee Calculator",
    disabled: !isMini,
    distance: 0,
    position: "right-start",
    arrow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fees-calculator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(Row, {
    isMini: isMini,
    onClick: () => updateRoute('/fees-calculator'),
    isActive: activeRoute === '/fees-calculator',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx(I, {
    className: "fa fa-calculator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }), __jsx(RowText, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "Fees Calculator")))), __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Files",
    disabled: !isMini,
    distance: 0,
    position: "right-start",
    arrow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/files",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(Row, {
    isMini: isMini,
    onClick: () => updateRoute('/files'),
    isActive: activeRoute === '/files',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx(I, {
    className: "fa fa-file",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx(RowText, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Files")))), __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Settings",
    disabled: !isMini,
    distance: 0,
    position: "right-start",
    arrow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/settings/personal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(Row, {
    isMini: isMini,
    onClick: () => updateRoute('/settings'),
    isActive: activeRoute === '/settings',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx(I, {
    className: "fa fa-cog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx(RowText, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, "Settings"))))), __jsx(_styles_elements_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Sign Out",
    disabled: !isMini,
    distance: 0,
    position: "right-start",
    arrow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(Row, {
    isMini: isMini,
    onClick: () => firebase.doSignOut(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx(I, {
    className: "fa fa-sign-out",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }), __jsx(RowText, {
    isMini: isMini,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "Sign Out")))));
});
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__Container",
  componentId: "cjm955-0"
})(["background:", ";min-width:", "px;width:10px;height:100vh;transition:.5s;box-shadow:", ";border-right:1px solid ", ";"], ({
  theme
}) => theme.colors.white, ({
  isMini
}) => isMini ? 57 : 200, ({
  theme
}) => theme.shadows.subtle, ({
  theme
}) => theme.colors.mainBg);
const SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__SubContainer",
  componentId: "cjm955-1"
})(["display:flex;flex-direction:column;justify-content:space-between;height:calc(100% - 50px);overflow:auto;overflow-x:hidden;&::-webkit-scrollbar{width:0px;transition:0.5s;}&::-webkit-scrollbar-thumb:hover{background:#555;transition:0.5s;}&::-webkit-scrollbar-track{transition:0.5s;}&::-webkit-scrollbar-thumb{background:#555;transition:0.5s;}&:hover{&::-webkit-scrollbar{width:1px;transition:0.5s;}}"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__Nav",
  componentId: "cjm955-2"
})(["padding-top:20px;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__Row",
  componentId: "cjm955-3"
})(["position:relative;padding:0px 20px;display:flex;align-items:center;height:50px;cursor:pointer;background:", ";border-top-right-radius:", ";border-bottom-right-radius:", ";margin-right:", "px;&:hover{background:", ";}transition:.2s;"], ({
  theme,
  isActive
}) => isActive ? theme.colors.mainBg : null, ({
  theme,
  isMini,
  title
}) => isMini || title ? '0px' : theme.borderRadius.normal, ({
  theme,
  isMini,
  title
}) => isMini || title ? '0px' : theme.borderRadius.normal, ({
  isMini,
  title
}) => isMini || title ? 0 : 10, ({
  theme,
  isActive
}) => isActive ? null : theme.colors.mainBg);
const I = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i.withConfig({
  displayName: "Sidebar__I",
  componentId: "cjm955-4"
})(["color:", ";font-size:20px;margin-right:10px;"], ({
  theme
}) => theme.colors.textSubtle);
const RowText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "Sidebar__RowText",
  componentId: "cjm955-5"
})(["color:", ";font-size:15px;transition:.1s;transition-delay:.1s;user-select:none;white-space:nowrap;> i{color:", ";}"], ({
  theme,
  isMini
}) => isMini ? 'transparent' : theme.colors.textSubtle, ({
  theme,
  isMini
}) => isMini ? 'transparent' : theme.colors.white);
const IconButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__IconButton",
  componentId: "cjm955-6"
})(["background:transparent;color:", ";border-color:transparent;min-width:55px;padding:0px;position:", ";right:0px;text-align:center;transform:", ";transition:.2s;"], ({
  theme
}) => theme.colors.black, ({
  isMini
}) => 'absolute', ({
  isMini
}) => isMini ? 'rotate(180deg)' : 'rotate(90deg)');
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "Sidebar__Title",
  componentId: "cjm955-7"
})(["color:", ";font-size:20px;font-style:italic;transition:.2s;transition-delay:.1s;user-select:none;"], ({
  theme,
  isMini
}) => isMini ? 'transparent' : theme.colors.primary);

/***/ }),

/***/ "./dataProcessing/index.js":
/*!*********************************!*\
  !*** ./dataProcessing/index.js ***!
  \*********************************/
/*! exports provided: processFiles, initState, setUpState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processFiles", function() { return processFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpState", function() { return setUpState; });
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-papaparse */ "react-papaparse");
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! currency.js */ "currency.js");
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(currency_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_exampleBuyers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/exampleBuyers */ "./assets/exampleBuyers.js");



 // Reads CSV Content

const processFiles = (files, setState, err) => {
  if (!files.length) return;
  let results = []; // Parses CSV content into arrays using readCSVString

  files.forEach(file => {
    readCSVString(file.content, res => {
      results = [...results, ...res];
    }, err);
  }); // initState takes array of CSV data and formats everything for the app

  return initState(results, err);
};

const readCSVString = (CSVcontent, results, err) => {
  if (Object(react_papaparse__WEBPACK_IMPORTED_MODULE_0__["readString"])(CSVcontent).errors.length) {
    err();
  } else {
    results(Object(react_papaparse__WEBPACK_IMPORTED_MODULE_0__["readString"])(CSVcontent).data);
  }
}; // Initialized data format that we'll throw into our app's state


const initState = (originalFiles, err) => {
  const cleanedFiles = [...originalFiles];

  for (let i = 0; i < cleanedFiles.length; i++) {
    const row = cleanedFiles[i];

    if (row.length !== 22) {
      cleanedFiles.splice(i, 1);
      i--;
    }
  }

  const files = cleanAndSort(cleanedFiles);
  const sorted = sort(files);
  return setUpState(sorted);
};
const setUpState = (files, currencyType) => {
  const data = {};
  data.sales = files;
  data.total_earnings = 0;
  data.total_shipping_cost = 0;
  data.depop_fees = 0;
  data.paypal_fees = 0;
  data.avg_price = 0;
  data.avg_shipping = 0;
  data.avg_total = 0;
  data.avg_time_listed = 0;
  data.free_shipping = 0;
  data.currency_type = currencyType || files[0].item_price[0];
  files.forEach(file => {
    const miliSeconds = new Date(moment__WEBPACK_IMPORTED_MODULE_2___default()(file.date_of_sale, 'MM-DD-YYYY').format()).getTime() - new Date(moment__WEBPACK_IMPORTED_MODULE_2___default()(file.date_of_listing, 'MM-DD-YYYY').format()).getTime();
    data.avg_price += currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.item_price).value;
    data.avg_shipping += currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.buyer_shipping_cost).value;
    data.avg_total += currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.total).value;
    data.total_earnings += currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.total).value;
    data.total_shipping_cost += currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.buyer_shipping_cost).value + currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.usps_cost).value;
    data.depop_fees += parseFloat(currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.depop_fee).value) + parseFloat(currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.depop_payments_fee).value);
    data.avg_time_listed += miliSeconds / (1000 * 3600 * 24);

    if (currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.buyer_shipping_cost).value === 0) {
      data.free_shipping++;
    }

    if (file.payment_type === 'PAYPAL') {
      // paypal fees are 2.9% + $0.30
      data.paypal_fees += 0.029 * currency_js__WEBPACK_IMPORTED_MODULE_1___default()(file.item_price).value + 0.30;
    }
  });
  data.avg_time_listed = parseInt(data.avg_time_listed / files.length);
  data.avg_price = parseFloat(data.avg_price / files.length).toFixed(2);
  data.avg_shipping = parseFloat(data.avg_shipping / files.length).toFixed(2);
  data.avg_total = parseFloat(data.avg_total / files.length).toFixed(2);
  data.total_earnings = parseFloat(data.total_earnings).toFixed(2);
  data.total_shipping_cost = parseFloat(data.total_shipping_cost).toFixed(2);
  data.depop_fees = parseFloat(data.depop_fees).toFixed(2);
  data.paypal_fees = parseFloat(data.paypal_fees).toFixed(2);

  data.getUrl = slug => `https://www.depop.com/${slug}/`;

  return data;
}; // Util function that cleans up format and sorts our files

const cleanAndSort = originalFiles => {
  // gets rid of header row
  const filesToMap = originalFiles.slice().filter(row => row[0] !== _assets_exampleBuyers__WEBPACK_IMPORTED_MODULE_3__["headers"][0]);
  const newFiles = []; // get's rid of duplicates and converts arrays to objects

  filesToMap.forEach((row, i) => {
    const item = {}; // this loops through the first file to get headers

    originalFiles[0].forEach((key, i) => {
      const keyStr = key.toLowerCase().replace(/ /g, '_');

      const val = () => {
        if (keyStr === 'date_of_sale' || keyStr === 'date_of_listing') {
          // converts UTC to local time
          const utc = moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(`${row[i]} ${row[1]}`, 'DD-MM-YYYY h:mm A').format();
          return moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(utc).local().format('MM-DD-YYYY');
        } else if (keyStr === 'time_of_sale') {
          const utc = moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(`${row[0]} ${row[i]}`, 'DD-MM-YYYY h:mm A').format();
          return moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(utc).local().format('hh:mm A');
        }

        return row[i];
      };

      item[keyStr] = val();
    });
    const existsAlready = newFiles.find(e => JSON.stringify(e) === JSON.stringify(item));

    if (!existsAlready) {
      newFiles.push(item);
    }
  });
  return newFiles;
};

const sort = sales => {
  // Sorts by date
  const sorted = sales.sort((a, b) => {
    const fullDateA = new Date(moment__WEBPACK_IMPORTED_MODULE_2___default()(`${a.date_of_sale} ${a.time_of_sale}`, 'MM-DD-YYYY hh:mm A').format());
    const fullDateB = new Date(moment__WEBPACK_IMPORTED_MODULE_2___default()(`${b.date_of_sale} ${b.time_of_sale}`, 'MM-DD-YYYY hh:mm A').format());
    return fullDateA - fullDateB;
  });
  return sorted;
};

/***/ }),

/***/ "./dataProcessing/utils.js":
/*!*********************************!*\
  !*** ./dataProcessing/utils.js ***!
  \*********************************/
/*! exports provided: getRangedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangedData", function() { return getRangedData; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./dataProcessing/index.js");


const getRangedData = (data, {
  startDate,
  endDate
}) => {
  const newData = [];
  data.sales.forEach(sale => {
    // this if statement compares date by moment object.
    if (moment__WEBPACK_IMPORTED_MODULE_0___default()(sale.date_of_sale, 'MM-DD-YYYY').format() >= moment__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format() && moment__WEBPACK_IMPORTED_MODULE_0___default()(sale.date_of_sale, 'MM-DD-YYYY').format() <= moment__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format()) {
      newData.push(sale);
    }
  });

  if (newData.length) {
    return Object(_index__WEBPACK_IMPORTED_MODULE_1__["setUpState"])(newData, data.currency_type);
  } else return newData;
};

/***/ }),

/***/ "./firebase/context.js":
/*!*****************************!*\
  !*** ./firebase/context.js ***!
  \*****************************/
/*! exports provided: withFirebase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFirebase", function() { return withFirebase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/firebase/context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const FirebaseContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
const withFirebase = Component => props => __jsx(FirebaseContext.Consumer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, firebase => __jsx(Component, _extends({}, props, {
  firebase: firebase,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 18
  }
})));
/* harmony default export */ __webpack_exports__["default"] = (FirebaseContext);

/***/ }),

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: default, FirebaseContext, withFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./firebase/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseContext", function() { return _context__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFirebase", function() { return _context__WEBPACK_IMPORTED_MODULE_3__["withFirebase"]; });

/* harmony import */ var _methods_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/files */ "./firebase/methods/files.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const firebaseConfig = {
  apiKey: 'AIzaSyB04NiM6bapVV6Jd2ZRw5vUVLy3Cu7o0x0',
  authDomain: 'mepop-app.firebaseapp.com',
  databaseURL: 'https://mepop-app.firebaseio.com',
  projectId: 'mepop-app',
  storageBucket: 'mepop-app.appspot.com',
  messagingSenderId: '619885550344',
  appId: '1:619885550344:web:28a8d730b1ca91a5f6aabd',
  measurementId: 'G-WM4LPLQMKX'
};

class Firebase {
  constructor() {
    try {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.analytics(); // uncomment this if running functions in emulator
      // if (window.location.href.includes('localhost')) {
      //   console.log('Dev env')
      //   firebase.functions().useFunctionsEmulator('http://localhost:4001')
      // }
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.message);
      }
    }

    this.auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
    this.storage = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.storage();
    this.db = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
    this.functions = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.functions();
  } // Get api Keys from firestore


  retreiveGoogleMapsKey() {
    // getGoogleMapsKey(this.db)
    const docRef = this.db.collection('keys').doc('googleMaps');
    return docRef.get().then(function (doc) {
      if (doc.exists) {
        return {
          error: null,
          data: doc.data()
        };
      } else {
        window.alert('Unknown Error Occurred');
      }
    }).catch(function (error) {
      return {
        error,
        data: null
      };
    });
  } // Stripe


  handleStripeClients() {
    // creates stripe client if doesn't exist (This handles people moving over from legacy app but who already have accounts)
    return this.db.collection('stripeClients').doc(this.auth.currentUser.uid).get().then(doc => {
      if (!doc.exists) {
        return this.createStripeClient();
      }
    });
  }

  createStripeClient() {
    const createStripeClientFunction = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.functions().httpsCallable('createStripeClient');
    const {
      email,
      uid
    } = this.auth.currentUser;
    createStripeClientFunction({
      email,
      uid
    }).then(() => {
      console.log('Create Stripe Client');
    });
  } // profiles


  handleProfile(userAndMembership) {
    return this.db.collection('profiles').doc(this.auth.currentUser.uid).get().then(doc => {
      this.handleStripeClients();

      if (!doc.exists) {
        this.setProfile().then(newDoc => {
          // creates new profile if it doesn't exist (only on first login/signup ever)
          return _objectSpread(_objectSpread({}, userAndMembership), {}, {
            profile: newDoc
          });
        });
      } else {
        return _objectSpread(_objectSpread({}, userAndMembership), {}, {
          profile: doc.data()
        });
      }
    });
  }

  setProfile(incomingDoc, uid) {
    const initialDoc = {
      firstName: '',
      lastName: '',
      depopShopName: '',
      hasSignedIn: false,
      email: this.auth.currentUser ? this.auth.currentUser.email : ''
    };
    return this.db.collection('profiles').doc(uid || this.auth.currentUser.uid).set(incomingDoc || initialDoc).then(() => {
      return incomingDoc || initialDoc;
    }).catch(() => alert('Error Occurred Creating Profile'));
  } // memberships


  handleMembership(user) {
    return this.db.collection('memberships').doc(this.auth.currentUser.uid).get().then(doc => {
      if (!doc.exists) {
        this.setMembership().then(newDoc => {
          // creates new membership if it doesn't exist (only on first login/signup ever)
          return this.handleProfile({
            user,
            membership: newDoc
          }).then(newUserObject => {
            return newUserObject;
          });
        });
      } else {
        return this.handleProfile({
          user,
          membership: doc.data()
        }).then(newUserObject => {
          return newUserObject;
        });
      }
    });
  }

  setMembership(incomingDoc) {
    const newDoc = {
      type: 'basic',
      paymentInfo: {}
    };
    return this.db.collection('memberships').doc(this.auth.currentUser.uid).set(incomingDoc || newDoc).then(() => {
      return incomingDoc || newDoc;
    }).catch(() => window.alert('Error Occurred Creating Membership'));
  } // auth


  doCreateUser(_ref) {
    let {
      password
    } = _ref,
        form = _objectWithoutProperties(_ref, ["password"]);

    return this.auth.createUserWithEmailAndPassword(form.email, password).then(({
      user
    }) => {
      return this.setProfile(form, user.uid);
    });
  }

  doGetCurrentUser() {
    return this.auth;
  }

  doSignIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).then(({
      user
    }) => {
      return this.handleMembership(user);
    });
  }

  doSignOut() {
    this.auth.signOut();
  }

  doPasswordReset(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate(passwords) {
    return this.auth.signInWithEmailAndPassword(this.auth.currentUser.email, passwords.oldPassword).then(({
      user
    }) => {
      return this.auth.currentUser.updatePassword(passwords.newPassword);
    });
  } // files


  getUserFiles(resolve) {
    Object(_methods_files__WEBPACK_IMPORTED_MODULE_4__["getFileMethod"])(this.auth, this.storage, resolve);
  }

  deleteFile(filename, fetchFiles) {
    Object(_methods_files__WEBPACK_IMPORTED_MODULE_4__["deleteFileMethod"])(this.auth, this.storage, filename, fetchFiles);
  }

  uploadFiles(files, fetchFiles, err) {
    Object(_methods_files__WEBPACK_IMPORTED_MODULE_4__["uploadFilesMethod"])(this.auth, this.storage, files, fetchFiles, err);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Firebase);


/***/ }),

/***/ "./firebase/methods/files.js":
/*!***********************************!*\
  !*** ./firebase/methods/files.js ***!
  \***********************************/
/*! exports provided: getFileMethod, deleteFileMethod, uploadFilesMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileMethod", function() { return getFileMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFileMethod", function() { return deleteFileMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFilesMethod", function() { return uploadFilesMethod; });
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-papaparse */ "react-papaparse");
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_exampleBuyers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/exampleBuyers */ "./assets/exampleBuyers.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




const getFileMethod = (auth, storage, resolve) => {
  const UID = auth.currentUser.uid;
  const storageRef = storage.ref(`${UID}`);
  storageRef.listAll().then(({
    items
  }) => {
    const getDownloadPromises = [];
    items.forEach((fileRef, i) => {
      // pushes promises to resolve synchronously
      getDownloadPromises.push(fileRef.getDownloadURL());
    });
    const calls = []; // resolves getting the download URL's then pushes axios call to calls array

    Promise.all(getDownloadPromises).then(responses => {
      responses.forEach(url => {
        calls.push(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url));
      }); // resolves all calls in calls array and then sets up new state array for component

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.all(calls).then(axios__WEBPACK_IMPORTED_MODULE_1___default.a.spread((...responses) => {
        const newData = [];
        responses.forEach((res, j) => {
          newData.push({
            content: res.data,
            filename: items[j].name
          });
        });
        resolve(newData);
      })).catch(err => {
        resolve([]);
        console.log(err);
        window.alert('Error occurred while retreiving files. Try again');
      });
    }).catch(() => {
      resolve();
      console.error('Error Occurred');
      window.alert('Error Occurred');
    });
  }).catch(() => {
    resolve();
    console.error('Error Occurred');
    window.alert('Error Occurred');
  });
};
const deleteFileMethod = (auth, storage, filename, fetchFiles) => {
  const UID = auth.currentUser.uid;
  const storageRef = storage.ref(`${UID}/${filename}`);
  storageRef.delete().then(() => {
    fetchFiles();
  }).catch(err => {
    console.log(err);
    window.alert(err.message);
  });
};
const uploadFilesMethod = (auth, storage, files, fetchFiles, err) => {
  const rejectedFiles = []; // upload accepted files to firebase

  const UID = auth.currentUser.uid;
  let counter = 0;
  files.forEach((file, i) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onloadend = () => {
      // converts CSV's data to string
      if (Object(react_papaparse__WEBPACK_IMPORTED_MODULE_0__["readString"])(fileReader.result).errors.length) {
        rejectedFiles.push(file.name);
        counter++;
      } else {
        const rows = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_0__["readString"])(fileReader.result).data;
        counter++;

        if (rows[0].length !== 22) {
          // checks row length for length of 22
          rejectedFiles.push(file.name);
        } else if (JSON.stringify(rows[0]) !== JSON.stringify(_assets_exampleBuyers__WEBPACK_IMPORTED_MODULE_2__["headers"])) {
          // Compares Depop headers to first row of file
          rejectedFiles.push(file.name);
        } else {
          // File passed all tests so it's upload time now...
          const storageRef = storage.ref(`${UID}/${file.name}`);
          const uploadTask = storageRef.put(file);
          uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_3___default.a.storage.TaskEvent.STATE_CHANGED, snapshot => {
            switch (snapshot.state) {
              case firebase__WEBPACK_IMPORTED_MODULE_3___default.a.storage.TaskState.PAUSED:
                console.log('Upload is paused');
                break;

              case firebase__WEBPACK_IMPORTED_MODULE_3___default.a.storage.TaskState.RUNNING:
                // console.log('Upload is running')
                break;
            }
          }, error => {
            switch (error.code) {
              case 'storage/unauthorized':
                window.alert("You don't have permission to execute this action.");
                break;

              case 'storage/canceled':
                window.alert('Unknown Error. Operation canceled');
                break;

              case 'storage/unknown':
                window.alert('Unknown Error');
                break;
            }
          }, () => {
            if (counter === files.length) {
              fetchFiles();
            }
          });
        }

        if (i === files.length - 1) {
          if (rejectedFiles.length) {
            err(`The following files were not processed because they are not Depop files: ${rejectedFiles.join(', ')}. If this seems to be an error, please contact samote.wood@gmail.com for support.`);
          }
        }
      }
    };
  });
};

/***/ }),

/***/ "./globalStyle.css":
/*!*************************!*\
  !*** ./globalStyle.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: MyApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyApp", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ "../node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized/styles.css */ "../node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globalStyle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalStyle.css */ "./globalStyle.css");
/* harmony import */ var _globalStyle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_globalStyle_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tippy/dist/tippy.css */ "../node_modules/react-tippy/dist/tippy.css");
/* harmony import */ var react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dates/initialize */ "react-dates/initialize");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "../node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_datePicker_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/datePicker.css */ "./styles/datePicker.css");
/* harmony import */ var _styles_datePicker_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_datePicker_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _store_generalReducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/generalReducer */ "./store/generalReducer.js");
/* harmony import */ var _store_actions_files__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../store/actions/files */ "./store/actions/files.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












 // Initialize Date Picker










const stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_8__["loadStripe"])('pk_live_c9rOKGsnQdeKY5fmn2gYNbiL');
const MyApp = props => {
  return __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["Elements"], {
    stripe: stripePromise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_17__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_firebase__WEBPACK_IMPORTED_MODULE_15__["FirebaseContext"].Provider, {
    value: new _firebase__WEBPACK_IMPORTED_MODULE_15__["default"](),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(Setup, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (MyApp); // This persists user sessions and sets up app from there.

const Setup = Object(_firebase__WEBPACK_IMPORTED_MODULE_15__["withFirebase"])(({
  Component,
  pageProps,
  firebase
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_20__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const unprotectedRoute = router.pathname === '/sign-in' || router.pathname === '/sign-up';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    firebase.auth.onAuthStateChanged(persistedUser => {
      const isNewUser = persistedUser ? persistedUser.metadata.creationTime === persistedUser.metadata.lastSignInTime : true;

      if (persistedUser && !isNewUser) {
        firebase.handleMembership(persistedUser).then(userObj => {
          dispatch({
            type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_18__["UPDATE_USER"],
            payload: userObj
          });
          dispatch({
            type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_18__["TOGGLE_LOADING"],
            payload: true
          });
          Object(_store_actions_files__WEBPACK_IMPORTED_MODULE_19__["fetchFiles"])({
            firebase,
            dispatch
          }, () => {
            // after fetching files do this
            dispatch({
              type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_18__["TOGGLE_LOADING"],
              payload: false
            });
          });
        });
      } else {
        if (!unprotectedRoute) router.push({
          pathname: '/sign-in'
        });
        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_18__["UPDATE_USER"],
          payload: {}
        });
        dispatch({
          type: _store_generalReducer__WEBPACK_IMPORTED_MODULE_18__["TOGGLE_LOADING"],
          payload: false
        });
      }
    });
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_11__["PageTransition"], {
    timeout: 300,
    classNames: "page-transition",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }))));
});

/***/ }),

/***/ "./store/actions/files.js":
/*!********************************!*\
  !*** ./store/actions/files.js ***!
  \********************************/
/*! exports provided: fetchFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFiles", function() { return fetchFiles; });
/* harmony import */ var _generalReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalReducer */ "./store/generalReducer.js");
/* harmony import */ var _dataProcessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataProcessing */ "./dataProcessing/index.js");
/* harmony import */ var _keySetup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keySetup */ "./store/actions/keySetup.js");



const fetchFiles = ({
  firebase,
  dispatch
}, resolve) => {
  firebase.getUserFiles(files => {
    if (!files) return;

    if (files) {
      const processedFiles = Object(_dataProcessing__WEBPACK_IMPORTED_MODULE_1__["processFiles"])(files);
      dispatch({
        type: _generalReducer__WEBPACK_IMPORTED_MODULE_0__["UPDATE_DATA"],
        payload: processedFiles
      });
      resolve();
    }

    dispatch({
      type: _generalReducer__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILES"],
      payload: files
    });
    Object(_keySetup__WEBPACK_IMPORTED_MODULE_2__["setupLocationKeys"])({
      firebase,
      dispatch
    });
  });
  return null;
};

/***/ }),

/***/ "./store/actions/keySetup.js":
/*!***********************************!*\
  !*** ./store/actions/keySetup.js ***!
  \***********************************/
/*! exports provided: setupLocationKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLocationKeys", function() { return setupLocationKeys; });
/* harmony import */ var _generalReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalReducer */ "./store/generalReducer.js");

const setupLocationKeys = async ({
  firebase,
  dispatch
}) => {
  const googleKey = await firebase.retreiveGoogleMapsKey();

  if (googleKey.error) {
    // Put in error UI box
    alert('Error Occurred');
  }

  dispatch({
    type: _generalReducer__WEBPACK_IMPORTED_MODULE_0__["SET_LOCATION_KEYS"],
    payload: {
      googleKey: googleKey.data
    }
  });
};

/***/ }),

/***/ "./store/generalReducer.js":
/*!*********************************!*\
  !*** ./store/generalReducer.js ***!
  \*********************************/
/*! exports provided: UPDATE_USER, UPDATE_FILES, UPDATE_GEOCODES, UPDATE_DATA, SET_LOCATION_KEYS, SET_GEO_DATA, UPDATE_RANGED_DATA, UPDATE_COMPARE_DATA, TOGGLE_LOADING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILES", function() { return UPDATE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GEOCODES", function() { return UPDATE_GEOCODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DATA", function() { return UPDATE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOCATION_KEYS", function() { return SET_LOCATION_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GEO_DATA", function() { return SET_GEO_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RANGED_DATA", function() { return UPDATE_RANGED_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMPARE_DATA", function() { return UPDATE_COMPARE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_LOADING", function() { return TOGGLE_LOADING; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_FILES = 'UPDATE_FILES';
const UPDATE_GEOCODES = 'UPDATE_GEOCODES';
const UPDATE_DATA = 'UPDATE_DATA';
const SET_LOCATION_KEYS = 'SET_LOCATION_KEYS';
const SET_GEO_DATA = 'SET_GEO_DATA';
const UPDATE_RANGED_DATA = 'UPDATE_RANGED_DATA';
const UPDATE_COMPARE_DATA = 'UPDATE_COMPARE_DATA';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const initialState = {
  user: {},
  files: [],
  allData: {},
  rangedData: {},
  compareData: {},
  geocodes: {},
  googleMapsKey: null,
  loading: true
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: typeof action.payload === 'boolean' ? action.payload : !state.loading
        });
      }

    case UPDATE_USER:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          user: action.payload
        });
      }

    case UPDATE_RANGED_DATA:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          rangedData: action.payload
        });
      }

    case UPDATE_COMPARE_DATA:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          compareData: action.payload
        });
      }

    case UPDATE_GEOCODES:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          geocodes: action.payload
        });
      }

    case UPDATE_FILES:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          files: action.payload
        });
      }

    case UPDATE_DATA:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          allData: action.payload || {},
          rangedData: action.payload || {}
        });
      }

    case SET_GEO_DATA:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          geocodes: action.payload
        });
      }

    case SET_LOCATION_KEYS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          googleMapsKey: action.payload.googleKey
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generalReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalReducer */ "./store/generalReducer.js");


const appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  generalReducer: _generalReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});

const rootReducer = (state, action) => appReducer(state, action);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer));

/***/ }),

/***/ "./styles/datePicker.css":
/*!*******************************!*\
  !*** ./styles/datePicker.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/elements/DateRangePicker/index.js":
/*!**************************************************!*\
  !*** ./styles/elements/DateRangePicker/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dates */ "react-dates");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/DateRangePicker/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import React, { Component } from 'react'
// import 'react-dates/initialize'
// import { DateRangePicker } from 'react-dates'
// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       startDate: null,
//       endDate: null,
//       focusedInput: null
//     }
//   }
//   render () {
//     return (
//       <div className='App'>
//         <DateRangePicker
//           startDateId='startDate'
//           endDateId='endDate'
//           startDate={this.state.startDate}
//           endDate={this.state.endDate}
//           onDatesChange={({ startDate, endDate }) => {
//             console.log(startDate.format('MM_DD_yyyy'))
//             this.setState({ startDate, endDate })
//           }}
//           focusedInput={this.state.focusedInput}
//           onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
//         />
//       </div>
//     )
//   }
// }
// export default App




class Dates extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null
    };
  }

  render() {
    return __jsx(react_dates__WEBPACK_IMPORTED_MODULE_1__["DateRangePicker"], _extends({
      noBorder: true,
      customArrowIcon: __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fontSize: 20,
        alignItems: "center",
        color: this.props.disabled ? 'greyLight' : 'primary',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "fa fa-arrow-circle-o-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      })),
      startDateId: "startDate",
      endDateId: "endDate",
      focusedInput: this.state.focusedInput,
      onFocusChange: focusedInput => {
        this.setState({
          focusedInput
        });
      }
    }, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dates);

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
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/Form/Label.js";
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
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/Loading/Spinner.js";
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
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/Loading/ThreeDotLoader.js";
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

/***/ "./styles/elements/Loading/index.js":
/*!******************************************!*\
  !*** ./styles/elements/Loading/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner */ "./styles/elements/Loading/Spinner.js");
/* harmony import */ var _ThreeDotLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThreeDotLoader */ "./styles/elements/Loading/ThreeDotLoader.js");
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/Loading/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Loading = (_ref) => {
  let {
    dotLoader
  } = _ref,
      props = _objectWithoutProperties(_ref, ["dotLoader"]);

  return dotLoader ? __jsx(_ThreeDotLoader__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 24
    }
  })) : __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 56
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./styles/elements/NoDataFound/index.js":
/*!**********************************************!*\
  !*** ./styles/elements/NoDataFound/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/Flex */ "./styles/layout/Flex/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text */ "./styles/elements/Text/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/NoDataFound/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NoDataFound = props => {
  const {
    files
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.generalReducer);
  return __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    justifyContent: "center",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    fontSize: 22,
    fontWeight: 600,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Oops!"), __jsx(Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, files.length ? __jsx(_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }
  }, "It seems that you don't any sales yet!") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "It seems that you need to", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/files",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }, __jsx(A, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "upload some files. ", __jsx(I, {
    className: "fa fa-chevron-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 42
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NoDataFound);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "NoDataFound__Divider",
  componentId: "tvoeda-0"
})(["height:70px;width:2px;background:", ";margin:0px 10px 0px 10px;"], ({
  theme
}) => theme.colors.primary);
const I = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.i.withConfig({
  displayName: "NoDataFound__I",
  componentId: "tvoeda-1"
})(["margin-left:10px;"]);
const A = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "NoDataFound__A",
  componentId: "tvoeda-2"
})(["cursor:pointer;text-decoration:none;border-radius:", ";background:", ";color:", ";border:1px solid ", ";padding:10px;margin-left:5px;width:147px;overflow:hidden;white-space:nowrap;display:flex;align-items:center;transition:", ";&:hover{width:170px;}"], ({
  theme
}) => theme.borderRadius.normal, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.textGrey, ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.transitionDurations[1]);

/***/ }),

/***/ "./styles/elements/Select/index.js":
/*!*****************************************!*\
  !*** ./styles/elements/Select/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropdown_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropdown-select */ "react-dropdown-select");
/* harmony import */ var react_dropdown_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rebass/forms */ "@rebass/forms");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/Box */ "./styles/layout/Box/index.js");
/* harmony import */ var _Form_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Form/Label */ "./styles/elements/Form/Label.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/Select/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Select = (_ref) => {
  let {
    options,
    labelField = 'label',
    valueField = 'value',
    onChange,
    rebass,
    label,
    selectProps = {
      style: {}
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, ["options", "labelField", "valueField", "onChange", "rebass", "label", "selectProps"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rebass ? __jsx(_layout_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, label ? __jsx(_Form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label,
    fontWeight: 500 // color={!labelIsShown ? 'transparent' : null}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }) : null, __jsx(StyledSelect, _extends({}, props, {
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), options.map((opt, key) => __jsx("option", {
    key: key,
    value: JSON.stringify({
      value: opt[valueField],
      label: opt[labelField]
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, opt[labelField])))) : __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(react_dropdown_select__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    options: options,
    onChange: onChange
  }, selectProps, {
    style: _objectSpread(_objectSpread({}, selectProps.style), {}, {
      fontWeight: 500,
      fontSize: '15px',
      minWidth: '50px'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Select);
const StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__["Select"]).withConfig({
  displayName: "Select__StyledSelect",
  componentId: "at60a0-0"
})(["border-radius:", ";border-color:", " !important;color:", " !important;"], ({
  theme
}) => theme.borderRadius.normal, ({
  theme
}) => theme.colors.greyDisabled, ({
  theme
}) => theme.colors.primary);

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
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/Text/index.js";
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
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/elements/Tooltip/index.js";
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

/***/ "./styles/layout/Box/index.js":
/*!************************************!*\
  !*** ./styles/layout/Box/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass/styled-components */ "rebass/styled-components");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/layout/Box/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const BoxEl = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "Box__BoxEl",
  componentId: "sc-16m7p2b-0"
})(["background:", ";"], ({
  theme,
  bg
}) => theme.colors[bg] || 'transparent');

const Box = props => {
  return __jsx(BoxEl, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

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
var _jsxFileName = "/Users/samuelwood/development/test/mepop-next/src/styles/layout/Flex/index.js";
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@rebass/forms":
/*!********************************!*\
  !*** external "@rebass/forms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rebass/forms");

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "currency.js":
/*!******************************!*\
  !*** external "currency.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("currency.js");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

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

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-dates":
/*!******************************!*\
  !*** external "react-dates" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),

/***/ "react-dates/initialize":
/*!*****************************************!*\
  !*** external "react-dates/initialize" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates/initialize");

/***/ }),

/***/ "react-dropdown-select":
/*!****************************************!*\
  !*** external "react-dropdown-select" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropdown-select");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-papaparse":
/*!**********************************!*\
  !*** external "react-papaparse" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-papaparse");

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

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

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
//# sourceMappingURL=_app.js.map