/*!
  * Ace Admin Template v4.0.0
  * Copyright 2013-2021
  * You need a commercial license to use this product
  * https://bit.ly/35ciMLb
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('bootstrap')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'bootstrap'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AceApp = factory(global.jQuery, global.bootstrap));
}(this, (function ($$a, bootstrap$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($$a);
  var bootstrap__default = /*#__PURE__*/_interopDefaultLegacy(bootstrap$1);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * --------------------------------------------------------------------------
   * Ace (v4.0.0): util.js
     Some Utility Functions
  */
  var Util = /*#__PURE__*/function () {
    function Util() {
      _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
      key: "isReducedMotion",
      value: function isReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion)').matches;
      }
    }, {
      key: "isRTL",
      value: function isRTL() {
        return document.documentElement.classList.contains('rtl') || document.documentElement.dir === 'rtl';
      }
    }, {
      key: "closest",
      value: function closest(element, selector) {
        if (!element) return null;
        if ('closest' in element) return element.closest(selector);

        try {
          for (var el = element; el !== null; el = el.parentNode) {
            if (Util.matches(el, selector)) {
              return el;
            }
          }
        } catch (e) {}

        return null;
      }
    }, {
      key: "matches",
      value: function matches(element, selector) {
        if (!element || !selector) return false;

        if (element === selector) {
          // for when selector is not a string, i.e selector is the element itself (needed for when we don't know the types)
          return true;
        }

        try {
          if (Util._matches) {
            return element.matches(selector);
          } else if (Util._msMatches) {
            return element.msMatchesSelector(selector);
          }
        } catch (e) {}

        return false;
      }
    }, {
      key: "isValidSelector",
      value: function isValidSelector(selector) {
        if (typeof selector !== 'string') return false;
        var isValid = true;

        try {
          document.createDocumentFragment().querySelector(selector);
        } catch (e) {
          isValid = false;
        }

        return isValid;
      }
    }, {
      key: "_insert",
      value: function _insert(element, _elem) {
        var _pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'afterend';

        if (typeof element === 'string') element = document.querySelector(element);
        if (element === null) return null; // check to see it _elem is a 'selector'

        if (Util.isValidSelector(_elem)) {
          var tmp = document.querySelector(_elem);
          _elem = tmp !== null ? tmp : _elem;
        }

        var currentElemAtPos = null;

        switch (_pos) {
          case 'afterend':
            currentElemAtPos = element.nextElementSibling;
            break;

          case 'beforeend':
            currentElemAtPos = element.lastElementChild;
            break;

          case 'afterbegin':
            currentElemAtPos = element.firstElementChild;
            break;

          case 'beforebegin':
            currentElemAtPos = element.previousElementSibling;
            break;
        }

        if (typeof _elem === 'string') {
          element.insertAdjacentHTML(_pos, _elem);

          switch (_pos) {
            case 'afterend':
              _elem = element.nextElementSibling;
              break;

            case 'beforeend':
              _elem = element.lastElementChild;
              break;

            case 'afterbegin':
              _elem = element.firstElementChild;
              break;

            case 'beforebegin':
              _elem = element.previousElementSibling;
              break;
          }
        } else {
          _elem = element.insertAdjacentElement(_pos, _elem);
        }

        if (_elem === currentElemAtPos) return null; // it means the new element has not been inserted

        return _elem;
      }
    }, {
      key: "after",
      value: function after(element, _after) {
        return Util._insert(element, _after, 'afterend');
      }
    }, {
      key: "before",
      value: function before(element, _before) {
        return Util._insert(element, _before, 'beforebegin');
      }
    }, {
      key: "append",
      value: function append(element, _append) {
        return Util._insert(element, _append, 'beforeend');
      }
    }, {
      key: "prepend",
      value: function prepend(element, _prepend) {
        return Util._insert(element, _prepend, 'afterbegin');
      }
    }, {
      key: "wrap",
      value: function wrap(element, _wrap) {
        _wrap = Util._insert(element, _wrap, 'afterend');
        if (_wrap) _wrap.appendChild(element);
        return _wrap;
      }
    }, {
      key: "unwrap",
      value: function unwrap(element) {
        var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var parent = element.parentNode;
        Util.after(parent, element);
        if (remove) Util.remove(parent);
      }
    }, {
      key: "empty",
      value: function empty(element) {
        // first remove all events
        // element.querySelectorAll('*').forEach((el) => EventHandler.off(el))
        element.innerHTML = '';
      }
    }, {
      key: "remove",
      value: function remove(element) {
        if (typeof element === 'string') {
          document.querySelectorAll(element).forEach(function (el) {
            Util.remove(el);
          });
          return;
        } // first remove all events
        // EventHandler.off(element)


        return element && element.parentNode && element.parentNode.removeChild(element);
      }
    }, {
      key: "updateClass",
      value: function updateClass(element, className) {
        var add = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (typeof element === 'string') {
          document.querySelectorAll(element).forEach(function (el) {
            Util.updateClass(el, className, add);
          });
          return;
        }

        if (!element) return;

        var _classes = className.split(/\s/);

        var _iterator = _createForOfIteratorHelper(_classes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _class = _step.value;
            _class = _class.trim();
            if (_class.length === 0) continue;

            if (add) {
              element.classList.add(_class);
            } else {
              element.classList.remove(_class);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "addClass",
      value: function addClass(element, className) {
        Util.updateClass(element, className, true);
      }
    }, {
      key: "removeClass",
      value: function removeClass(element, className) {
        Util.updateClass(element, className, false);
      }
    }, {
      key: "next",
      value: function next(element) {
        var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!selector) return element.nextElementSibling;
        var _next = element;

        while ((_next = _next.nextElementSibling) && !Util.matches(_next, selector)) {
        }

        return _next;
      }
    }, {
      key: "prev",
      value: function prev(element) {
        var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!selector) return element.previousElementSibling;
        var _prev = element;

        while ((_prev = _prev.previousElementSibling) && !Util.matches(_prev, selector)) {
        }

        return _prev;
      }
    }, {
      key: "reflow",
      value: function reflow(element) {
        return element.offsetTop;
      }
    }, {
      key: "css",
      value: function css(element, property) {
        return window.getComputedStyle(element)[property];
      }
    }, {
      key: "getScrollbarInfo",
      value: function getScrollbarInfo() {
        var recalc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (recalc === false && Util._scrollbarInfo !== null) return Util._scrollbarInfo;
        var scrollDiv = document.createElement('div');
        scrollDiv.style.overflow = 'scroll';
        scrollDiv.style.position = 'absolute';
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        var scrollbar = {};
        document.body.appendChild(scrollDiv);
        scrollbar.width = parseInt(scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
        document.documentElement.style.setProperty('--scrollbar-width', scrollbar.width + 'px');
        var thinWidth = scrollbar.width;

        if (window.CSS) {
          scrollbar.thin = window.CSS.supports('scrollbar-width', 'thin'); // currently only firefox 64+ supports it

          if (scrollbar.thin) {
            scrollDiv.style['scrollbar-width'] = 'thin';
            thinWidth = parseInt(scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
          }

          scrollbar.overlay = window.CSS.supports('overflow', 'overlay');
        } else {
          scrollbar.thin = false;
          scrollDiv.style.overflow = 'overlay'; // Webkit/Chromium based browsers support it

          scrollbar.overlay = scrollbar.width > 0 && parseInt(scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth) === 0;
        }

        document.documentElement.style.setProperty('--moz-scrollbar-thin', thinWidth + 'px');
        scrollDiv.style['-ms-overflow-style'] = '-ms-autohiding-scrollbar'; // IE

        scrollbar.autohide = scrollbar.width > 0 && parseInt(scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth) === 0; /// //////////////////////////////////

        document.body.removeChild(scrollDiv);
        Util._scrollbarInfo = scrollbar;
        return Util._scrollbarInfo;
      }
    }]);

    return Util;
  }();

  Util._supportsTransitionStart = null; // static property

  Util._scrollbarInfo = null; // static property

  Util._matches = typeof document.body.matches === 'function';
  Util._msMatches = typeof document.body.msMatchesSelector === 'function';

  /**
   *
   * We are using EventHandler from Bootstrap 5
   *
   */
  // polyfills are from MDN
  (function () {
    if (typeof window.CustomEvent !== 'function') {
      var CustomEvent = function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: null
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      };

      window.CustomEvent = CustomEvent;
    }

    if (!String.prototype.startsWith) {
      Object.defineProperty(String.prototype, 'startsWith', {
        value: function value(search, rawPos) {
          var pos = rawPos > 0 ? rawPos | 0 : 0;
          return this.substring(pos, pos + search.length) === search;
        }
      });
    }

    if (!String.prototype.includes) {
      String.prototype.includes = function (search, start) {

        if (search instanceof RegExp) {
          throw TypeError('first argument must not be a RegExp');
        }

        if (start === undefined) {
          start = 0;
        }

        return this.indexOf(search, start) !== -1;
      };
    }
  })();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };
  /**
    * ------------------------------------------------------------------------
    * Constants
    * ------------------------------------------------------------------------
    */


  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {// mouseenter: 'mouseover',
    // mouseleave: 'mouseout'
  };
  var nativeEvents = ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll', 'transitionstart', 'transitionend', 'animationstart', 'animationend'];

  var isNativeEvent = function isNativeEvent(eventName) {
    return nativeEvents.indexOf(eventName) >= 0;
  };
  /**
    * ------------------------------------------------------------------------
    * Private methods
    * ------------------------------------------------------------------------
    */


  function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

    var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
    var custom = customEvents[typeEvent];

    if (custom) {
      typeEvent = custom;
    }

    var isNative = isNativeEvent(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
          _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
          delegation = _normalizeParams4[0],
          originalHandler = _normalizeParams4[1],
          typeEvent = _normalizeParams4[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = event.replace(stripNameRegex, '');
      var inNamespace = event !== typeEvent;
      var isNative = isNativeEvent(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new window.CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };

  var Basic = /*#__PURE__*/function () {
    function Basic() {
      _classCallCheck(this, Basic);
    }

    _createClass(Basic, null, [{
      key: "_HandleBasics",
      value: function _HandleBasics() {
        Basic._HandleGeneral();

        if (typeof window.jQuery === 'undefined' || typeof window.bootstrap === 'undefined') return;

        Basic._handleAlerts();

        Basic._handleDropdowns();

        Basic._handleNavbar();
      }
    }, {
      key: "_HandleGeneral",
      value: function _HandleGeneral() {
        window.addEventListener('DOMContentLoaded', function () {
          document.body.classList.add('is-document-loaded');
        }); // for IE

        if (window.NodeList && !window.NodeList.prototype.forEach) {
          window.NodeList.prototype.forEach = Array.prototype.forEach;
        }
      }
      /**
       * collapse .alert instead of fading it out
      */

    }, {
      key: "_handleAlerts",
      value: function _handleAlerts() {
        var $ = window.jQuery;
        $(document).on('close.bs.alert.alert-collapse', '.alert.alert-collapse', function (e) {
          e.preventDefault();
          $(this).wrap('<div class="collapse show alert-collapse"></div>').parent().collapse('hide').one('hidden.bs.collapse.alert-collapse', function () {
            $(this).remove();
          });
        });
      } /// ////////

    }, {
      key: "_handleDropdowns",
      value: function _handleDropdowns() {
        var $ = window.jQuery; // dismiss (hide) a dropdown menu

        var _dismissDropdown = function _dismissDropdown() {
          var menu = Util.closest(this, '.dropdown-menu');
          var dropdown = menu.parentNode;
          var toggle = dropdown.querySelector('[data-toggle=dropdown]');
          $(toggle).dropdown('hide');
          menu.classList.remove('show');
          dropdown.classList.remove('show');
        }; // hide dropdown when clicked on an element inside it with `data-dismiss=dropdown` attribute


        $(document).on('click', '[data-dismiss=dropdown]', function (e) {
          e.preventDefault();

          _dismissDropdown.call(e.target);
        }); // hide dropdown when a `form` inside it is submitted

        $(document).on('submit', '.dropdown-menu form[data-submit=dismiss]', function (e) {
          e.preventDefault();

          _dismissDropdown.call(e.target);
        }); // don't hide dropdown when clicked inside a `.dropdown-clickable` element

        $(document).on('click.dropdown-clickable', '.dropdown-clickable', function (e) {
          e.stopImmediatePropagation();
        }); // hide `body` scrollbars when dropdowns are opened in mobile view

        $(document).on('shown.bs.dropdown', '.dropdown.dd-backdrop', function () {
          // check `display` of .dropdown::before, if not visible it means `backdrop` is not visible (applied)
          if (window.getComputedStyle(this, ':before').display === 'none') return; // the device width is such that backdrop is visible (.dropdown-inner is visible)

          var scrollbarInfo = Util.getScrollbarInfo();

          if (scrollbarInfo.width === 0) {
            document.body.classList.add('mob-dropdown-body');
          }

          this.classList.add('backdrop-shown'); // used later to add `.navbar-modal` class to .navbar

          $(this).one('hidden.bs.dropdown', function () {
            document.body.classList.remove('mob-dropdown-body');
            this.classList.remove('backdrop-shown');
          });
        });
      } /// ////////

    }, {
      key: "_handleNavbar",
      value: function _handleNavbar() {
        var $ = window.jQuery; // hide `.navbar-collapse` when clicked on it (specifically on the backdrop in mobile view)

        $(document).on('click', '.navbar-backdrop.collapse.show', function (e) {
          if (e.target === this) $(this).collapse('hide');
        }); // hide dropdown when a `form` inside it is submitted

        $(document).on('submit', '.navbar-collapse.show form[data-submit=dismiss]', function (e) {
          e.preventDefault();
          $(this).closest('.navbar-collapse').collapse('hide');
        }); // when navbar or a dropdown-menu inside it is displayed, move focus to the ".autofocus" element.
        // For example a search box can be .autofocus

        var currentOpenCollapse = null;
        $(document).on('shown.bs.dropdown', '.navbar .dropdown', function () {
          var autofocus = this.querySelector('.autofocus');
          if (autofocus) autofocus.focus();
        }).on('show.bs.collapse', '.navbar-collapse', function (ev) {
          if (ev.isDefaultPrevented()) return; // also hide body scrollbars in mobile devices

          if (this.classList.contains('navbar-backdrop')) {
            var scrollbarInfo = Util.getScrollbarInfo();

            if (scrollbarInfo.width === 0) {
              document.body.classList.add('mob-navbar-body');
            }
          }

          var previousOpenCollapse = currentOpenCollapse;
          currentOpenCollapse = ev.target;

          if (previousOpenCollapse !== null) {
            $('.navbar-collapse.show').css('transition-duration', '1ms').collapse('hide').css('transition-duration', '');
          }
        }).on('shown.bs.collapse', '.navbar-collapse', function () {
          var autofocus = this.querySelector('.autofocus');
          if (autofocus) autofocus.focus();
        }).on('hidden.bs.collapse', function (ev) {
          if (currentOpenCollapse === ev.target) {
            // no more open collapsed (the currentOpenCollapse it the last one)
            document.body.classList.remove('mob-navbar-body');
            currentOpenCollapse = null;
          }
        }); // if navbar dropdowns are not entirely inside window area, move them accordingly

        var _adjustDropdown = function _adjustDropdown() {
          var isRTL = Util.isRTL();
          var isRightAligned = this.classList.contains('dropdown-menu-right');

          var _dir = !isRightAligned ? !isRTL ? 'left' : 'right' : !isRTL ? 'right' : 'left';

          var prop = 'margin-' + _dir;
          this.style.removeProperty(prop);
          var moveBy = 0;
          var rect = this.getBoundingClientRect();

          if (rect.left < 0) {
            moveBy = parseInt(-1 * rect.left) + 5;
          } else {
            var sw = document.body.scrollWidth;

            if (rect.right > sw) {
              moveBy = parseInt(sw - rect.right - 5);
            }
          }

          if (moveBy < 5) return;
          if (isRightAligned) moveBy *= -1;
          this.style.setProperty(prop, moveBy + 'px', 'important');
        };

        $(document).on('transitionstart.adjust', '.navbar .dropdown-mega .dropdown-menu', function (ev) {
          // adjust when hovered (dropdown-hover)
          if (ev.target !== this || ev.originalEvent.propertyName !== 'transform') return;

          _adjustDropdown.call(this);
        }).on('shown.bs.dropdown', '.navbar .dropdown', function () {
          // adjus when "shown" (click)
          if (this.classList.contains('dropdown-mega')) {
            var dropdown = this.querySelector('.dropdown-menu[data-display="static"]');
            if (dropdown !== null) _adjustDropdown.call(dropdown);
          } // when a .dropdown is opened, add .navbar-open to increase z-index, so that dropdowns go above 'asides', etc


          var navbar = Util.closest(this, '.navbar');
          if (!navbar) return;
          if (this.classList.contains('backdrop-shown')) navbar.classList.add('navbar-modal');else navbar.classList.add('navbar-open');
        }).on('hidden.bs.dropdown', '.navbar .dropdown', function () {
          var navbar = Util.closest(this, '.navbar');
          if (!navbar) return;
          navbar.classList.remove('navbar-open');
          navbar.classList.remove('navbar-modal');
        });
      }
    }]);

    return Basic;
  }();
  /**
   * ------------------------------------------------------------------------
  */


  Basic._HandleBasics();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'aceScroll';
  var VERSION$a = '4.0.0';
  var DATA_KEY$a = 'ace.scroll';
  var EVENT_KEY$9 = ".".concat(DATA_KEY$a);
  var DATA_API_KEY$6 = '.data-api';
  var Event$9 = {
    LOAD_DATA_API: "load".concat(EVENT_KEY$9).concat(DATA_API_KEY$6)
  };
  var Selector$6 = {
    ACE_SCROLL: '[ace-scroll]',
    DATA_ACE_SCROLL: '[data-ace-scroll]'
  };
  var DefaultType$6 = {
    type: 'string',
    smooth: 'boolean',
    height: '(number|null)',
    lock: 'boolean',
    ignore: '(string|null)',
    plugin: 'string',
    options: '(object|null)',
    // plugin settings
    color: '(string|null)',
    autohide: '(boolean|null)'
  };
  var Default$6 = {
    type: 'native',
    smooth: false,
    height: null,
    lock: false,
    ignore: null,
    plugin: 'SimpleBar',
    options: null,
    color: null,
    autohide: true
  };

  var Scrollbar = /*#__PURE__*/function () {
    function Scrollbar(element, config) {
      _classCallCheck(this, Scrollbar);

      this._element = element;
      this._config = this._getConfig(config);
      this._scrollbarInfo = Util.getScrollbarInfo();
      this.enableScrollbars();
    }

    _createClass(Scrollbar, [{
      key: "enableScrollbars",
      value: function enableScrollbars() {
        /**
        this._element.scrollTop = 0
        // For firefox. Because it has persistent scroll position on page reload
        // which doesn't look good when changing overflow: hidden to overflow: scroll on hover
        */
        // no scrollbars when specified
        if (this._config.ignore !== null) {
          if (this._config.ignore === 'mobile' && this._scrollbarInfo.width === 0 && 'ontouchstart' in window && window.matchMedia('(max-width: 840px)').matches) return;else if (this._config.ignore === 'desktop' && this._scrollbarInfo.width > 0) return;
        }

        this.update(this._config.height);
        this.lock(this._config.lock);

        this._element.classList.remove('ace-scroll', 'ace-scroll-mob', 'ace-scroll-wrap');

        if (this._config.type === 'native') {
          this._addNativeScrolls();
        } else if (this._config.type === 'auto') {
          this._preferNativeScrolls();
        } else if (this._config.type === 'plugin') {
          this._addPluginScrolls();
        }
      }
    }, {
      key: "update",
      value: function update(_height) {
        if (!_height) return;
        if (!isNaN(_height)) _height += 'px';
        this._element.style.maxHeight = _height;
      }
    }, {
      key: "lock",
      value: function lock(_lock) {
        if (_lock) this._element.classList.add('ace-scroll-lock');else this._element.classList.remove('ace-scroll-lock');
      }
    }, {
      key: "_addNativeScrolls",
      value: function _addNativeScrolls(smooth) {
        if (this._scrollbarInfo.width === 0) this._element.classList.add('ace-scroll-mob'); // mobile device
        else {
            this._element.classList.add('ace-scroll');

            if (this._config.color !== null) this._element.classList.add('ace-scroll-' + this._config.color);
            if (this._config.autohide === false) this._element.classList.add('is-always-on');

            var _smooth = typeof smooth !== 'undefined' ? smooth : this._config.smooth;

            if (_smooth) {
              // wrap children inside an .ace-scroll-inner
              var wrapper = document.createElement('div');
              wrapper.classList.add('ace-scroll-inner');
              wrapper.style.color = window.getComputedStyle(this._element).color;

              while (this._element.firstChild) {
                wrapper.appendChild(this._element.firstChild);
              }

              this._element.appendChild(wrapper); /// ///////
              // disable the initial transition effects


              this._element.style.transition = 'none';

              this._element.classList.add('ace-scroll-wrap');

              this._element.offsetHeight; // reflow

              this._element.style.transition = '';
            }
          }
      }
    }, {
      key: "_preferNativeScrolls",
      value: function _preferNativeScrolls() {
        if (this._scrollbarInfo.width === 0 || this._scrollbarInfo.overlay || this._scrollbarInfo.thin || !this._hasScrollbarPlugin()) {
          this._addNativeScrolls();
        } else {
          this._addPluginScrolls();
        }
      }
    }, {
      key: "_addPluginScrolls",
      value: function _addPluginScrolls() {
        if (this._hasScrollbarPlugin()) {
          return new window[this._config.plugin](this._element, this._config.options);
        } else {
          this._addNativeScrolls();
        }
      }
    }, {
      key: "_hasScrollbarPlugin",
      value: function _hasScrollbarPlugin() {
        return !!window[this._config.plugin];
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        var options = this._element.getAttribute('ace-scroll') || this._element.getAttribute('data-ace-scroll') || {};
        if (!isNaN(options)) options = {
          height: parseInt(options)
        };else if (options.length > 1) {
          try {
            options = JSON.parse(options);
          } catch (e) {}
        }
        config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$6), _typeof(config) === 'object' && config ? config : {}), _typeof(options) === 'object' && options ? options : {});

        if (typeof window.bootstrap !== 'undefined') {
          window.bootstrap.Util.typeCheckConfig(NAME$9, config, this.constructor.DefaultType);
        }

        return config;
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!element) throw new Error('element for Scrollbar is null');
        var name = "__".concat(NAME$9, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new Scrollbar(element, config);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$a);
          var options = this.getAttribute('ace-scroll') || this.getAttribute('data-ace-scroll') || {};
          if (!isNaN(options)) options = {
            height: parseInt(options)
          };else if (options.length > 1) {
            try {
              options = JSON.parse(options);
            } catch (e) {}
          }

          var _config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, Default$6), $this.data()), _typeof(config) === 'object' && config ? config : {}), _typeof(options) === 'object' && options ? options : {});

          if (!data) {
            data = Scrollbar.getInstance(this, _config);
            $this.data(DATA_KEY$a, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Scrollbar;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof window.jQuery !== 'undefined') {
    var $$9 = window.jQuery;
    $$9(window).on(Event$9.LOAD_DATA_API, function () {
      var scrollbars = [].slice.call(document.querySelectorAll(Selector$6.ACE_SCROLL)).concat([].slice.call(document.querySelectorAll(Selector$6.DATA_ACE_SCROLL)));

      for (var i = 0; i < scrollbars.length; i++) {
        var $scrollbars = $$9(scrollbars[i]);

        Scrollbar._jQueryInterface.call($scrollbars, $scrollbars.data());
      }
    });
    var JQUERY_NO_CONFLICT$7 = $$9.fn[NAME$9];
    $$9.fn[NAME$9] = Scrollbar._jQueryInterface;
    $$9.fn[NAME$9].Constructor = Scrollbar;

    $$9.fn[NAME$9].noConflict = function () {
      $$9.fn[NAME$9] = JQUERY_NO_CONFLICT$7;
      return Scrollbar._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'aceSidebar';
  var VERSION$9 = '4.0.0';
  var DATA_KEY$9 = 'ace.sidebar';
  var EVENT_KEY$8 = ".".concat(DATA_KEY$9);
  var DATA_API_KEY$5 = '.data-api';
  var Event$8 = {
    SHOW: "show".concat(EVENT_KEY$8),
    HIDE: "hide".concat(EVENT_KEY$8),
    COLLAPSE: "collapse".concat(EVENT_KEY$8),
    EXPAND: "expand".concat(EVENT_KEY$8),
    SHOWN: "shown".concat(EVENT_KEY$8),
    HIDDEN: "hidden".concat(EVENT_KEY$8),
    COLLAPSED: "collapsed".concat(EVENT_KEY$8),
    EXPANDED: "expanded".concat(EVENT_KEY$8),
    LOAD_DATA_API: "load".concat(EVENT_KEY$8).concat(DATA_API_KEY$5),
    CLICK_DATA_API: "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$5)
  };
  var Selector$5 = {
    SIDEBAR: '.sidebar',
    DATA_TOGGLE: '[data-toggle="sidebar"]',
    DATA_TOGGLE_MOBILE: '[data-toggle-mobile="sidebar"]'
  };
  var DefaultType$5 = {
    swipe: 'boolean',
    dismiss: 'boolean',
    backdrop: 'boolean',
    gotoactive: 'boolean',
    subscroll: 'boolean',
    subtoggle: 'boolean',
    pullup: 'boolean'
  };
  var Default$5 = {
    swipe: false,
    dismiss: false,
    backdrop: false,
    gotoactive: false,
    subscroll: true,
    subtoggle: true,
    pullup: false
  };
  var ClassName = {
    DESKTOP_HIDE: 'collapsed',
    MOBILE_SHOW: 'sidebar-visible',
    COLLAPSED: 'collapsed',
    TOGGLING: 'toggling',
    INNER_HOVER: 'is-hover',
    BACKDROP: 'sidebar-backdrop',
    HORIZONTAL: 'sidebar-h'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Sidebar = /*#__PURE__*/function () {
    function Sidebar(element, config) {
      var _this = this;

      _classCallCheck(this, Sidebar);

      this._config = this._getConfig(config);
      this._hasTransitionEvent = false;
      this._hasTransitionEventMobile = false;
      this._isTransitioning = false;
      this._isTransitioningMobile = false;
      this._sidebar = element;
      Util.reflow(this._sidebar); // force reflow, so that if we instantly call 'collapse' or 'expand', transition effect takes place

      this._sidebar.classList.add('sidebar');

      this._inner = this._sidebar.querySelector('.sidebar-inner');
      this._scroller = this._sidebar.querySelector('[class*="ace-scroll"]');
      this._isSubOpening = false;
      if (this._sidebar.querySelector('.submenu.show') !== null) this._sidebar.classList.add('has-open');
      this._pullupEnabled = false;
      this._pullupCallback = null;
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"sidebar\"][href=\"#".concat(element.id, "\"],") + "[data-toggle=\"sidebar\"][data-target=\"#".concat(element.id, "\"]")));
      this._triggerArrayMobile = [].slice.call(document.querySelectorAll("[data-toggle-mobile=\"sidebar\"][href=\"#".concat(element.id, "\"],") + "[data-toggle-mobile=\"sidebar\"][data-target=\"#".concat(element.id, "\"]")));
      this._horizontal = this._sidebar.classList.contains(ClassName.HORIZONTAL);
      this._desktopCollapsedClass = this._triggerArray.length > 0 ? this._triggerArray[0].getAttribute('data-toggle-class') || ClassName.DESKTOP_HIDE : ClassName.DESKTOP_HIDE; //

      this._collapsed = this._sidebar.classList.contains(this._desktopCollapsedClass);
      this._hidden = !this._sidebar.classList.contains(ClassName.MOBILE_SHOW);
      EventHandler.on(this._inner, 'focus', 'input', function (e) {
        if (!_this._collapsed) return;

        _this._inner.classList.add('has-focus');

        EventHandler.one(e.delegateTarget, 'blur', function () {
          _this._inner.classList.remove('has-focus');
        });
      }); //

      this._handleTriggerEvents();

      if (this._config.subtoggle) this.enableSubmenuToggle();
      if (this._config.pullup) this.enableSubmenuPullup();
      if (this._config.gotoactive) this.scrollToActive();

      if (this._config.backdrop) {
        this._sidebar.classList.add(ClassName.BACKDROP);
      } else if (this._sidebar.classList.contains(ClassName.BACKDROP)) {
        this._config.backdrop = true;
      }

      if (!this._horizontal && this._collapsed) {
        this._addTransitionEvent();
      }
    } // Getters


    _createClass(Sidebar, [{
      key: "_handleTriggerEvents",
      value: function _handleTriggerEvents() {
        var _this2 = this;

        this._triggerArray.forEach(function (el) {
          el.addEventListener('click', function () {
            return _this2.toggle(el);
          });
        });

        this._triggerArrayMobile.forEach(function (el) {
          el.addEventListener('click', function () {
            return _this2.toggleMobile(el);
          });
        });
      }
    }, {
      key: "toggle",
      value: function toggle() {
        var btn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (this._sidebar.classList.contains(this._desktopCollapsedClass)) {
          this.expand(btn);
        } else {
          this.collapse(btn);
        }
      }
    }, {
      key: "toggleMobile",
      value: function toggleMobile() {
        var btn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!this._sidebar.classList.contains(ClassName.MOBILE_SHOW)) {
          this.show(btn);
        } else {
          this.hide(btn);
        }
      } /// ////

    }, {
      key: "expand",
      value: function expand() {
        if (!this._hasTransitionEvent) this._addTransitionEvent();
        if (this._isTransitioning || !this._collapsed) return;
        var ev = EventHandler.trigger(this._sidebar, Event$8.EXPAND);
        if (ev.defaultPrevented) return;
        this._isTransitioning = true;
        this._collapsed = false;

        this._sidebar.classList.add(ClassName.TOGGLING);

        this._sidebar.classList.remove(this._desktopCollapsedClass);

        this._updateTriggerBtns(this._triggerArray, true);
        /**
         * If no transition or horizontal or in mobile view (width == 0)
         */


        if (Util.isReducedMotion() || this._sidebar.classList.contains('no-transition') || this._horizontal || this._sidebar.offsetWidth === 0) this._toggleCompleted(); // call completion now
        //

        if (this._pullupEnabled) this._resetPullUp();
      }
    }, {
      key: "collapse",
      value: function collapse() {
        var btn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!this._hasTransitionEvent) this._addTransitionEvent();
        if (this._isTransitioning || this._collapsed) return;
        var ev = EventHandler.trigger(this._sidebar, Event$8.COLLAPSE);
        if (ev.defaultPrevented) return;
        this._isTransitioning = true;
        this._collapsed = true;

        this._sidebar.classList.add(ClassName.TOGGLING);

        this._sidebar.classList.add(this._desktopCollapsedClass);

        this._updateTriggerBtns(this._triggerArray, false);
        /**
         * If no transition or horizontal or in mobile view (width == 0)
         */


        if (Util.isReducedMotion() || this._sidebar.classList.contains('no-transition') || this._horizontal || this._sidebar.offsetWidth === 0) this._toggleCompleted(); // call completion now
        //

        if (this._pullupEnabled) this._resetPullUp(); // if the triggering button is inside sidebar and we want it to remain expanded (.let-expanded), add .is-hover class as well

        if (btn !== null && this._sidebar.classList.contains('expandable') && this._sidebar.classList.contains('let-expanded') && this._inner.contains(btn)) {
          this._inner.classList.add(ClassName.INNER_HOVER);
        }
      }
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        return this._collapsed;
      }
    }, {
      key: "show",
      value: function show() {
        var _this3 = this;
        if (!this._hasTransitionEventMobile) this._addTransitionEventMobile();
        if (this._isTransitioningMobile || !this._hidden) return;
        var ev = EventHandler.trigger(this._sidebar, Event$8.SHOW);
        if (ev.defaultPrevented) return;
        this._isTransitioningMobile = true;
        this._hidden = false;

        this._sidebar.classList.add(ClassName.MOBILE_SHOW);

        this._updateTriggerBtns(this._triggerArrayMobile, true); // hide sidebar if clicked outside of it


        if (this._config.dismiss) {
          this._triggerArrayMobile.forEach(function (el) {
            el.style.pointerEvents = 'none';
          }); // disable this button, because if we click on it, it will hide and then instantly show the sidebar again


          EventHandler.on(document, 'mouseup.sidebar-dismiss', function (e) {
            if (!_this3._inner.contains(e.target)) {
              // if clicked outside sidebar
              _this3.hide();
            }
          });
        }

        if (this._config.swipe) this.enableSwipeHide();
        if (Util.isReducedMotion()) this._toggleMobileCompleted(); // call completion now
        // in some webkit mobile browsers, sidebar scrolling works but scrollbars are not visible, unless something like this forces it to become visible

        if (this._scroller && !this._scroller.classList.contains('overflow-hidden')) {
          this._scroller.classList.add('overflow-hidden');

          Util.reflow(this._scroller); // force redraw

          this._scroller.classList.remove('overflow-hidden');
        } // hide body scrollbars
        // if sidebar is fixed and has backdrop or is .sidebar-push


        var scrollbarInfo = Util.getScrollbarInfo();

        if (scrollbarInfo.width === 0 && this._sidebar.classList.contains('sidebar-fixed') && (this._config.backdrop || this._sidebar.classList.contains('sidebar-push'))) {
          document.body.classList.add('mob-sidebar-body');
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (!this._hasTransitionEventMobile) this._addTransitionEventMobile();
        if (this._isTransitioningMobile || this._hidden) return;
        var ev = EventHandler.trigger(this._sidebar, Event$8.HIDE);
        if (ev.defaultPrevented) return;
        this._isTransitioningMobile = true;
        this._hidden = true;

        this._sidebar.classList.remove(ClassName.MOBILE_SHOW);

        this._updateTriggerBtns(this._triggerArrayMobile, false);

        if (this._config.dismiss) {
          this._triggerArrayMobile.forEach(function (el) {
            el.style.pointerEvents = '';
          });

          EventHandler.off(document, '.sidebar-dismiss');
        }

        if (this._config.swipe) {
          EventHandler.off(document, '.sidebar-swipe');
        }

        if (Util.isReducedMotion()) this._toggleMobileCompleted(); // call completion now
      }
    }, {
      key: "isHidden",
      value: function isHidden() {
        return this._hidden;
      }
    }, {
      key: "_updateTriggerBtns",
      value: function _updateTriggerBtns(btns) {
        var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        for (var i = 0, len = btns.length; i < len; i++) {
          if (expanded) btns[i].classList.remove(ClassName.COLLAPSED);else btns[i].classList.add(ClassName.COLLAPSED);
          btns[i].setAttribute('aria-expanded', expanded);
        }
      }
    }, {
      key: "_toggleCompleted",
      value: function _toggleCompleted() {
        this._isTransitioning = false;

        this._sidebar.classList.remove(ClassName.TOGGLING);

        var expanded = !this._sidebar.classList.contains(this._desktopCollapsedClass);

        if (expanded) {
          this._inner.classList.remove(ClassName.INNER_HOVER);

          EventHandler.trigger(this._sidebar, Event$8.EXPANDED);
        } else {
          EventHandler.trigger(this._sidebar, Event$8.COLLAPSED);
        }
      }
    }, {
      key: "_toggleMobileCompleted",
      value: function _toggleMobileCompleted() {
        this._isTransitioningMobile = false;

        var shown = this._sidebar.classList.contains(ClassName.MOBILE_SHOW);

        if (shown) EventHandler.trigger(this._sidebar, Event$8.SHOWN);else {
          document.body.classList.remove('mob-sidebar-body');

          if (this._config.swipe) {
            document.body.classList.remove('mob-sidebarswipe-body');
          }

          EventHandler.trigger(this._sidebar, Event$8.HIDDEN);
        }
      }
    }, {
      key: "_addTransitionEvent",
      value: function _addTransitionEvent() {
        var _this4 = this;

        if (this._hasTransitionEvent) return;
        this._hasTransitionEvent = true;
        var counter = 0;

        this._sidebar.addEventListener('transitionend', function (e) {
          if (e.target !== _this4._sidebar) return; // make sure its not the children triggerring the event!

          _this4._toggleCompleted();

          counter = 0;
        }); // add 'is-hover' class to '.sidebar-inner' when it becomes expanded (i.e. when mouse hovers it)


        this._inner.addEventListener('transitionstart', function (e) {
          // skip on mobile (in which propertyName is `transform`)
          if (e.target !== _this4._inner || _this4._isTransitioning || e.propertyName !== 'width') return;
          counter++;
          if (counter === 1) _this4._inner.classList.add(ClassName.INNER_HOVER);
        });

        this._inner.addEventListener('transitionend', function (e) {
          // skip `transitionend` on mobile (in which propertyName is `transform`)
          if (e.target !== _this4._inner || e.propertyName !== 'width') return;

          if (_this4._inner.clientWidth < 140) {
            // just to make sure we remove the extra class name when not needed
            _this4._inner.classList.remove(ClassName.INNER_HOVER);

            counter = 0; // blur input element

            if (document.activeElement.tagName === 'INPUT' && _this4._inner.contains(document.activeElement)) document.activeElement.blur();
          }
        });
      }
    }, {
      key: "_addTransitionEventMobile",
      value: function _addTransitionEventMobile() {
        var _this5 = this;

        if (this._hasTransitionEventMobile) return;
        this._hasTransitionEventMobile = true;

        this._inner.addEventListener('transitionstart', function (e) {
          if (e.target !== _this5._inner || e.propertyName !== 'transform') return;

          _this5._toggleMobileCompleted();
        });
      } // swipe to hide sidebar

    }, {
      key: "enableSwipeHide",
      value: function enableSwipeHide() {
        var _this6 = this;

        var x1 = 0;
        var y1 = 0;
        var swipeDir = 0;
        var isRTL = false;
        var lastX = 0;
        var pushContent = false;
        var sidebarWidth = 0;

        var touchMoveCallback = function touchMoveCallback(ev) {
          var touches = ev.changedTouches[0] || null;
          if (!touches) return;
          var newX = touches.pageX;
          var newY = touches.pageY;
          lastX = newX;

          if (swipeDir === 0) {
            var diffY = Math.abs(y1 - newY);
            var diffX = Math.abs(x1 - newX);

            if (diffY > diffX) {
              swipeDir = 2; // vertical i.e. scroll

              if (_this6._scroller) _this6._scroller.classList.remove('overflow-hidden');
              document.body.classList.remove('mob-sidebarswipe-body');
              EventHandler.off(document, 'touchmove.sidebar-swipe');
            } else if (diffX > 10) {
              swipeDir = 1; // horizontal swipe

              _this6._inner.setAttribute('style', 'transition: none !important; touch-action: none;');

              if (_this6._scroller) _this6._scroller.classList.add('overflow-hidden');
              document.body.classList.add('mob-sidebarswipe-body');
            }
          }

          if (swipeDir !== 1) return;
          var moveX = parseInt(x1 - newX);

          if (!isRTL && moveX > 0 || isRTL && moveX < 0) {
            // move it outside of view
            _this6._inner.style.transform = 'translateX(' + -1 * moveX + 'px)';
            if (pushContent) _this6._sidebar.style.width = sidebarWidth - (moveX > 0 ? moveX : -1 * moveX) + 'px';
          } else {
            _this6._inner.style.transform = '';
            if (pushContent) _this6._sidebar.style.width = '';
          }
        };

        var t1 = 0;
        EventHandler.on(document, 'touchstart.sidebar-swipe', function (e) {
          var touches = e.changedTouches[0] || null;
          if (!touches) return;
          x1 = touches.pageX;
          y1 = touches.pageY;
          t1 = Date.now();
          isRTL = Util.isRTL();
          pushContent = _this6._sidebar.classList.contains('sidebar-push');

          if (pushContent) {
            sidebarWidth = _this6._sidebar.clientWidth;
            _this6._sidebar.style.minWidth = 'auto';
            _this6._sidebar.style.transition = 'none';
          }

          EventHandler.on(document, 'touchmove.sidebar-swipe', function (e) {
            touchMoveCallback(e);
          });
        });

        var touchEndHandler = function touchEndHandler(e) {
          var touches = e.changedTouches[0] || null; // if (!touches) return // in case we're coming from a `dismiss` mouseup event

          _this6._inner.setAttribute('style', '');

          if (pushContent) {
            _this6._sidebar.style.width = '';
            _this6._sidebar.style.minWidth = '';
            _this6._sidebar.style.transition = '';
          }

          var x2 = touches !== null ? touches.pageX : lastX;
          var t2 = Date.now();

          if (swipeDir === 1 && ( // dismiss if moved by more than 100px or moved more than 40px in a short time (less than 300ms)
          !isRTL && (x1 - x2 > 100 || x1 - x2 > 40 && t2 - t1 < 300) || isRTL && (x1 - x2 < -100 || x1 - x2 < -40 && t2 - t1 < 300))) {
            // if moved more than 100px or 40px in less than 300ms
            _this6.hide();
          } else {
            // remove '.mob-sidebarswipe-body' to bring back body scrollbars if sidebar isn't swiped to hide
            // but we probably won't have body scrollbars because of `.mob-sidebar-body`
            document.body.classList.remove('mob-sidebarswipe-body');
          } // bring back sidebar scrollbars


          if (_this6._scroller) _this6._scroller.classList.remove('overflow-hidden');
          swipeDir = 0;
        };

        EventHandler.on(document, 'touchend.sidebar-swipe', touchEndHandler);
        EventHandler.on(document, 'touchcancel.sidebar-swipe', touchEndHandler);
      }
    }, {
      key: "enableSubmenuToggle",
      value: function enableSubmenuToggle() {
        var _this7 = this;

        this._isSubOpening = false;

        var _jQueryBS = typeof jQuery !== 'undefined' && typeof bootstrap !== 'undefined';

        EventHandler.on(this._sidebar, 'click', '.dropdown-toggle', function (ev) {
          ev.preventDefault();
          if (_this7._isSubOpening) return;
          var navItem = Util.closest(ev.delegateTarget, '.nav-item'); // get the parent LI.nav-item

          var subMenu = navItem.querySelector('* > .submenu'); // get the direct submenu (not the children)

          var navLink = navItem.querySelector('* > .nav-link'); // get the parent LI.nav-item

          if (!subMenu || !navLink) return;

          if (_this7._collapsed && _this7._sidebar.classList.contains('hoverable') || _this7._sidebar.classList.contains('sidebar-hover')) {
            // don't toggle submenu if submenu is supposed to be displayed as popup (this includes horizontal sidebar when it's `.sidebar-hover`)
            if (window.getComputedStyle(subMenu).position === 'absolute') return;
          }

          if (subMenu.classList.contains('collapsing')) return; // don't toggle in the middle of toggling
          // hide sibling submenus

          navItem.classList.add('is-toggling');
          navItem.parentNode.querySelectorAll('* > .nav-item.open').forEach(function (_item) {
            if (_item === navItem) return;

            _item.classList.add('is-toggling');

            _item.classList.remove('open');

            var sub = _item.querySelector('* > .submenu.show');

            if (sub) {
              if (_jQueryBS) window.jQuery(sub).collapse('hide');else sub.classList.remove('show');
            }
          }); // toggle submenu

          if (navItem.classList.contains('open')) {
            navItem.classList.remove('open');
            navLink.classList.add('collapsed');

            _this7._sidebar.classList.remove('has-open');

            if (_jQueryBS) window.jQuery(subMenu).collapse('hide');else subMenu.classList.remove('show');
          } else {
            _this7._isSubOpening = true;
            navItem.classList.add('open');
            navLink.classList.remove('collapsed');

            _this7._sidebar.classList.add('has-open');

            if (_jQueryBS) window.jQuery(subMenu).collapse('show');else subMenu.classList.add('show');
          }

          if (_jQueryBS) {
            if (!subMenu.getAttribute('data-sub-event')) {
              subMenu.setAttribute('data-sub-event', 'true');
              window.jQuery(subMenu).on('shown.bs.collapse.is-toggling hidden.bs.collapse.is-toggling', function () {
                _this7._submenuIsToggled();
              });
            }
          } else {
            _this7._submenuIsToggled();
          }

          if (navItem && navItem.classList.contains('open')) _this7._submenuScroll(subMenu);
        });
      }
    }, {
      key: "_submenuIsToggled",
      value: function _submenuIsToggled() {
        this._isSubOpening = false;

        this._sidebar.querySelectorAll('.is-toggling').forEach(function (el) {
          el.classList.remove('is-toggling');
        }); // firefox continues to disable scroll chaining when sidebar is not scrollable anymore, so a little fix around here


        if ('MozAppearance' in document.documentElement.style) {
          if (this._scroller === null) return;

          if (this._scroller.scrollHeight <= this._scroller.clientHeight) {
            this._scroller.style.overscrollBehavior = 'auto';
          } else this._scroller.style.overscrollBehavior = '';
        }
      } // scroll submenu into view (only on modern browsers)

    }, {
      key: "_submenuScroll",
      value: function _submenuScroll(subMenu) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

        if (subMenu && !Util.isReducedMotion() && 'scrollBehavior' in document.documentElement.style && this._config.subscroll && this._sidebar.classList.contains('sidebar-fixed')) {
          if (this._sidebar.classList.contains(ClassName.HORIZONTAL)) {
            if (window.getComputedStyle(subMenu).position === 'absolute') return; // no scroll for desktop horizontal menu (when it's not `.sidebar-hover`)
          }

          setTimeout(function () {
            subMenu.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest'
            });
          }, delay);
        }
      }
    }, {
      key: "enableSubmenuPullup",
      value: function enableSubmenuPullup() {
        var _this8 = this;

        if (this._pullupEnabled) return;
        this._pullupEnabled = true;
        var marginProp = 'margin-' + (!Util.isRTL() ? 'left' : 'right');

        if (this._pullupCallback === null) {
          this._pullupCallback = function (ev) {
            if (ev.target !== ev.delegateTarget || ev.propertyName !== marginProp || !(_this8._collapsed || _this8._sidebar.classList.contains('sidebar-hover'))) return;
            var subMenu = ev.target;
            var navItem = subMenu.parentNode;
            var navText = navItem.querySelector('* > .nav-link > .nav-text.fadeable'); // only first level nav-text items

            if (navItem) navItem.classList.remove('submenu-pullup');
            subMenu.style.transform = '';
            if (navText) navText.style.transform = ''; /// ///////////////////////

            var rect = subMenu.getBoundingClientRect();
            var wh = window.innerHeight;
            var diff = parseInt(rect.bottom - wh);

            if (diff > 0) {
              // if submenu bottom is below window area
              // check to see if submenu top will go out of window if we move it up by "diff" pixels
              // also consider that the first level item's .nav-text shouldn't go out of window's top
              var navTextHeight = navText ? navText.clientHeight : 0;
              var navbarHeight = document.querySelector('.navbar');
              navbarHeight = navbarHeight ? navbarHeight.clientHeight : 0;
              var diff2 = rect.top - navTextHeight - diff - navbarHeight; // don't go above navbar

              if (diff2 < 0) diff = diff + diff2;
              diff = parseInt(diff) + 1; // so that submenu's border is visible

              if (_this8._collapsed) {
                if (navTextHeight && diff > navTextHeight / 2 && navItem) navItem.classList.add('submenu-pullup'); // this class makes the .sub-arrow's color white, to match submenu color
              } else {
                if (navItem) navItem.classList.add('submenu-pullup');
              }

              subMenu.style.transform = "translateY(-".concat(diff, "px)");

              if (_this8._collapsed && navText) {
                navText.style.transform = "translateY(-".concat(diff, "px)");
              }
            }
          };
        }

        EventHandler.on(this._sidebar, 'transitionstart', '.submenu', this._pullupCallback);
      }
    }, {
      key: "disableSubmenuPullup",
      value: function disableSubmenuPullup() {
        this._pullupEnabled = false;
        if (this._pullupCallback) EventHandler.off(this._sidebar, 'transitionstart', '.submenu', this._pullupCallback);

        this._resetPullUp();
      }
    }, {
      key: "_resetPullUp",
      value: function _resetPullUp() {
        this._sidebar.querySelectorAll('.submenu-pullup').forEach(function (_item) {
          _item.classList.remove('submenu-pullup');

          _item.querySelectorAll('.nav-text, .submenu').forEach(function (el) {
            el.style.transform = '';
          });
        });
      } // scroll active item into view

    }, {
      key: "scrollToActive",
      value: function scrollToActive() {
        if (!this._sidebar.classList.contains('sidebar-fixed') || this._scroller === null) return;

        var active = this._sidebar.querySelector('.nav-item.active:not(.open) > .nav-link');

        try {
          active.scrollIntoView({
            behavior: 'auto',
            block: 'end'
          }); // or block: "center"?

          this._scroller.scrollTop = this._scroller.scrollTop + 30;
        } catch (e) {}
      } //

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default$5), _typeof(config) === 'object' && config ? config : {});

        if (typeof window.bootstrap !== 'undefined') {
          window.bootstrap.Util.typeCheckConfig(NAME$8, config, this.constructor.DefaultType);
        }

        return config;
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!element) throw new Error('element for Sidebar is null');
        var name = "__".concat(NAME$8, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new Sidebar(element, config);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$9);

          var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$5), $this.data()), _typeof(config) === 'object' && config ? config : {});

          if (!data) {
            data = Sidebar.getInstance(this, _config);
            $this.data(DATA_KEY$9, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Sidebar;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof window.jQuery !== 'undefined') {
    var $$8 = window.jQuery;
    $$8(window).on(Event$8.LOAD_DATA_API, function () {
      var sidebars = [].slice.call(document.querySelectorAll(Selector$5.SIDEBAR));

      for (var i = 0; i < sidebars.length; i++) {
        var $sidebar = $$8(sidebars[i]);

        Sidebar._jQueryInterface.call($sidebar, $sidebar.data());
      }
    });
    var JQUERY_NO_CONFLICT$6 = $$8.fn[NAME$8];
    $$8.fn[NAME$8] = Sidebar._jQueryInterface;
    $$8.fn[NAME$8].Constructor = Sidebar;

    $$8.fn[NAME$8].noConflict = function () {
      $$8.fn[NAME$8] = JQUERY_NO_CONFLICT$6;
      return Sidebar._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'aceAside';
  var VERSION$8 = '4.0.0';
  var DATA_KEY$8 = 'ace.aside';
  var EVENT_KEY$7 = ".".concat(DATA_KEY$8);
  var Event$7 = {
    SHOW: "show".concat(EVENT_KEY$7),
    HIDE: "hide".concat(EVENT_KEY$7)
  };
  var DefaultType$4 = {
    placement: 'string',
    // margin: 'number',
    fade: 'boolean',
    autohide: '(boolean|number)',
    dismiss: 'boolean',
    blocking: 'boolean',
    backdrop: '(boolean|string)',
    container: 'boolean',
    belowNav: 'boolean',
    aboveNav: 'boolean',
    width: '(boolean|number)',
    height: '(boolean|number)',
    scroll: '(boolean|string)'
  };
  var Default$4 = {
    placement: 'center',
    // margin: 0,
    fade: false,
    autohide: false,
    dismiss: false,
    blocking: false,
    backdrop: false,
    container: false,
    belowNav: false,
    aboveNav: false,
    width: false,
    height: false,
    scroll: 'body'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Aside = /*#__PURE__*/function () {
    function Aside(element, config) {
      _classCallCheck(this, Aside);

      this._config = this._getConfig(config);
      this.element = element;
      this._jQueryBS = typeof window.jQuery !== 'undefined' && typeof window.jQuery.fn.modal !== 'undefined';

      this._init(this._config);
    }

    _createClass(Aside, [{
      key: "_init",
      value: function _init(config) {
        var _this = this;

        var $ = this._jQueryBS ? window.jQuery : null;

        this._setPlacement(config.placement);

        this.element.classList.add('ace-aside');

        if (!config.blocking) {
          this.element.classList.add('modal-nb');
          this.element.setAttribute('data-backdrop', 'false');

          if ($) {
            $(this.element).data('backdrop', false);
          }
        } else {
          if (config.backdrop) {
            this.element.setAttribute('data-backdrop-bg', config.backdrop);
          }

          this.element.setAttribute('data-backdrop', 'true');

          if ($) {
            $(this.element).data('backdrop', true);
          }
        }

        if (config.dismiss) this.element.classList.add('modal-dismiss');

        if (config.fade) {
          this.element.classList.add('aside-fade');
          this.element.classList.add('fade');
        }

        if (config.belowNav) this.element.classList.add('aside-below-nav');
        if (config.aboveNav) this.element.classList.add('aside-above-nav');
        if (config.extraClass) this.element.className += " ".concat(config.extraClass);

        if (config.container) {
          this.element.classList.add('container');
          var bdc = document.querySelector('.body-container');

          if (bdc !== null && bdc.classList.contains('container-plus')) {
            this.element.classList.add('container-plus');
          }
        }

        if (config.width) {
          var dialog = this.element.querySelector('.modal-dialog');

          if (dialog) {
            dialog.style.width = isNaN(config.width) ? config.width : this._config.width + 'px';
          }
        }

        if (config.height) {
          var _dialog = this.element.querySelector('.modal-dialog');

          if (_dialog) {
            _dialog.style.height = isNaN(config.height) ? config.height : this._config.height + 'px';
          }
        } // if (/^(content|body)$/.test(config.scroll)) {
        // let content = this.element.querySelector('.modal-content')
        // if (content) content.classList.add('scroll-' + config.scroll)
        // }


        if (!$) return;
        $(this.element).off('shown.bs.modal.autohide');

        if (config.autohide) {
          $(this.element).on('shown.bs.modal.autohide', function () {
            setTimeout(function () {
              _this.hide();
            }, config.autohide);
          });
        }
      }
    }, {
      key: "_setPlacement",
      value: function _setPlacement() {
        var placement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'center';
        var placementMap = {
          t: 'aside-top',
          top: 'aside-top',
          tc: 'aside-top aside-c',
          tr: 'aside-top aside-r',
          tl: 'aside-top aside-l',
          b: 'aside-bottom',
          bottom: 'aside-bottom',
          bc: 'aside-bottom aside-c',
          br: 'aside-bottom aside-r',
          bl: 'aside-bottom aside-l',
          r: 'aside-right',
          right: 'aside-right',
          rc: 'aside-right aside-m',
          l: 'aside-left',
          left: 'aside-left',
          lc: 'aside-left aside-m',
          c: 'aside-center',
          center: 'aside-center'
        };
        placement = placement || 'c';
        var className = placementMap[placement] || 'aside-center';

        if (placement === 'c' || placement === 'center') {
          this._config.fade = true;
          this.element.classList.remove('container');
        }

        this.element.className = this.element.className + ' ' + className;
      } // Public methods

    }, {
      key: "show",
      value: function show() {
        var event = EventHandler.trigger(this.element, Event$7.SHOW);

        if (event.defaultPrevented) {
          return;
        }

        if (this._jQueryBS) {
          window.jQuery(this.element).modal('show');
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        var event = EventHandler.trigger(this.element, Event$7.HIDE);

        if (event.defaultPrevented) {
          return;
        }

        if (this._jQueryBS) {
          window.jQuery(this.element).modal('hide');
        }
      } // Private methods

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default$4), _typeof(config) === 'object' && config ? config : {});

        if (this._jQueryBS) {
          window.bootstrap.Util.typeCheckConfig(NAME$7, config, this.constructor.DefaultType);
        }

        return config;
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!element) throw new Error('element for Aside is null');
        var name = "__".concat(NAME$7, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new Aside(element, config);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$8);

          var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$4), $this.data()), _typeof(config) === 'object' && config ? config : {});

          if (!data) {
            data = Aside.getInstance(this, _config);
            $this.data(DATA_KEY$8, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      } /// ///////////////////////
      /// ///////////////////////
      /// ///////////////////////////

    }, {
      key: "_HandleAside",
      value: function _HandleAside() {
        var _jQueryBS = typeof window.jQuery !== 'undefined' && typeof window.jQuery.fn.modal !== 'undefined';

        if (!_jQueryBS) return;
        var $ = window.jQuery;
        var visibleModalSelector = '.modal.show:not(.modal-nb)';
        document.querySelectorAll('.ace-aside.modal-nb').forEach(function (el) {
          return el.setAttribute('data-backdrop', 'false');
        });
        $('.ace-aside.modal-nb').data('backdrop', false);

        var onBeforeShow = function onBeforeShow(modal) {
          if (modal.classList.contains('modal-nb')) {
            if (document.querySelector(visibleModalSelector) === null) {
              // if there are no normal modals open
              document.body.classList.add('modal-nb'); // disable .modal-open effects for .modal-nb
            }
          } else {
            if (!modal.classList.contains('ace-aside')) {
              // check to see if we will have modal scrollbars
              modal.style.display = 'block';
              if (modal.scrollHeight > modal.clientHeight) document.body.classList.add('modal-scroll');
              var scrollbars = Util.getScrollbarInfo();
              if (scrollbars.width === 0) document.body.classList.add('scrollbar-w0');
              modal.style.display = '';
            } // set modal padding value (equal to scrollbar width)


            document.body.style.setProperty('--modal-padding', window.innerWidth - document.body.scrollWidth + 'px');
            var isModalOff = modal.className.match(/modal-off(?:(?:-([a-z]+))|\s|$)/i);
            var backdropBg = modal.getAttribute('data-backdrop-bg');

            if (backdropBg || isModalOff) {
              setTimeout(function () {
                var backdrops = document.querySelectorAll('.modal-backdrop');

                if (backdrops.length > 0) {
                  var backdrop = backdrops[backdrops.length - 1];
                  if (backdropBg) backdrop.classList.add(backdropBg); // add d-{sm|md|lg|xl}-none to backdrop

                  if (isModalOff) {
                    var modalOff = isModalOff[1] && isModalOff[1].length > 0 ? "-".concat(isModalOff[1]) : '';
                    backdrop.classList.add("d".concat(modalOff, "-none"));
                  }
                }
              }, 0);
            }

            var blur = modal.getAttribute('data-blur');

            if (blur !== null && window.CSS) {
              /**
               // using `backdrop-filter` is less intrusive but doesn't have the same blur effect
                if (window.CSS.supports("backdrop-filter", "none")) {
                setTimeout(function () {
                  $('.modal-backdrop:last-child').addClass('modal-blur')
                }, 0)
              }
              else */
              if (window.CSS.supports('filter', 'none')) {
                var bodyContainer = document.querySelector('.body-container');

                if (bodyContainer !== null) {
                  document.body.classList.add('modal-blur');
                  bodyContainer.style.filter = 'blur(' + blur + ')';
                  var modalParent = modal.parentNode;
                  var modalSibling = modal.nextSibling;
                  document.body.appendChild(modal);
                  $(modal).one('hidden.bs.modal.blur', function () {
                    modalParent.insertBefore(modal, modalSibling);
                    document.body.classList.remove('modal-blur');
                    bodyContainer.style.filter = '';
                  });
                }
              }
            }
          }
        }; /// /////////////////////////////


        var onAfterShow = function onAfterShow(modal) {
          if (modal.classList.contains('modal-nb')) {
            document.body.classList.remove('modal-nb');

            if (document.querySelector(visibleModalSelector) === null) {
              // if no blocking modals
              document.body.classList.remove('modal-open'); // disable .modal-open effects

              document.body.style.paddingRight = ''; // and remove paddingRight
            }

            if (modal.classList.contains('modal-dismiss') || modal.getAttribute('data-dismiss') === 'true') {
              modal._dismissAsideEvent = function ($event) {
                if (!modal.contains($event.target)) {
                  // clicked outside modal
                  // why timeout?
                  // because if we click on the same button that triggers this modal, its 'hide' function will be called and instantly followed by 'show' function
                  // so we first let 'show' be called and then we call 'hide'
                  document.removeEventListener('mouseup', modal._dismissAsideEvent);
                  modal._dismissAsideEvent = null;
                  setTimeout(function () {
                    $(modal).modal('hide');
                  }, 0);
                }
              }; // why `mouseup`? because 'click' may get 'stopPropagated' in some plugins such as Bootstrap's dropdown


              document.addEventListener('mouseup', modal._dismissAsideEvent);
            }
          }
        };

        var onAfterHide = function onAfterHide(modal) {
          if (document.querySelector(visibleModalSelector) === null) document.body.style.paddingRight = ''; // required for rare cases that body padding is still not cleared
          else document.body.classList.add('modal-open'); // sometimes an aside is closed (so .modal-open is removed) but a .modal is still open (so we add .modal-open again)

          if (!modal.classList.contains('modal-nb')) {
            document.body.classList.remove('modal-scroll');
            document.body.classList.remove('scrollbar-w0');
          }

          if (typeof modal._dismissAsideEvent === 'function') {
            document.removeEventListener('mouseup', modal._dismissAsideEvent);
          }
        }; /// //////////////////////////////////////


        $(document).on('show.bs.modal', '.modal', function (e) {
          if (e.defaultPrevented || e.isDefaultPrevented()) return;
          onBeforeShow(e.target);
        }).on('shown.bs.modal', '.modal', function (e) {
          onAfterShow(e.target);
        }).on('hidden.bs.modal', '.modal', function (e) {
          onAfterHide(e.target);
        }); // enable modal functionality for modal boxes and asides that are shown (.show) by default

        $('.modal.show').modal('show');
      } // _HandleAside

    }]);

    return Aside;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof jQuery !== 'undefined') {
    var $$7 = window.jQuery;

    Aside._HandleAside();

    var JQUERY_NO_CONFLICT$5 = $$7.fn[NAME$7];
    $$7.fn[NAME$7] = Aside._jQueryInterface;
    $$7.fn[NAME$7].Constructor = Aside;

    $$7.fn[NAME$7].noConflict = function () {
      $$7.fn[NAME$7] = JQUERY_NO_CONFLICT$5;
      return Aside._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'aceToaster';
  var VERSION$7 = '4.0.0';
  var DATA_KEY$7 = 'ace.toaster';
  var EVENT_KEY$6 = ".".concat(DATA_KEY$7);
  var Event$6 = {
    CLEAR: "clear".concat(EVENT_KEY$6),
    ADD: "add".concat(EVENT_KEY$6),
    ADDED: "added".concat(EVENT_KEY$6)
  };
  var DefaultType$3 = {
    placement: 'string',
    close: 'boolean',
    autoremove: 'boolean',
    delay: 'number',
    template: 'string',
    alert: 'boolean'
  };
  var Default$3 = {
    placement: 'tr',
    close: true,
    autoremove: true,
    delay: 2500,
    template: '<div class="toast"><div class="d-flex"><div class="toast-image"></div><div class="toast-main"><div class="toast-header"></div><div class="toast-body"></div></div></div></div>',
    alert: true
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toaster = /*#__PURE__*/function () {
    function Toaster() {
      _classCallCheck(this, Toaster);

      this._lastToastId = 0;
      this.element = null;
      this._jQueryBS = typeof window.jQuery !== 'undefined' && typeof window.bootstrap !== 'undefined';
      this._tempParent = document.createElement('DIV');
    }

    _createClass(Toaster, [{
      key: "add",
      value: // Public methods
      function add(config) {
        var _config = this._getConfig(config);

        var newToast = Util.append(this._tempParent, _config.template);
        this._lastToastId++;
        newToast.classList.add('ace-toaster-item');
        newToast.id = "ace-toaster-item-".concat(this._lastToastId);
        newToast.setAttribute('aria-atomic', 'true');

        if (_config.alert) {
          newToast.setAttribute('role', 'alert');
          newToast.setAttribute('aria-live', 'assertive');
        } else {
          newToast.setAttribute('role', 'status');
          newToast.setAttribute('aria-live', 'polite');
        }

        var toastHeader = newToast.querySelector('.toast-header');

        if (_config.title && toastHeader) {
          var title = typeof _config.title === 'function' ? _config.title.call(this.element, _config) : _config.title;
          Util.append(toastHeader, "<div class=\"toast-title ".concat(_config.titleClass || '', "\">").concat(title, "</div>"));
        }

        if (_config.close) {
          var close = newToast.querySelector('[data-dismiss="toast"]');

          if (close === null) {
            close = Util.append(toastHeader, '<button type="button" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
          }

          close.className += " ".concat(_config.closeClass || 'close');
        }

        if (_config.body) {
          var body = newToast.querySelector('.toast-body');

          if (body !== null) {
            Util.append(body, typeof _config.body === 'function' ? _config.body.call(this.element, _config) : _config.body);
            if (_config.bodyClass) body.className += " ".concat(_config.bodyClass);
          }
        }

        if (_config.image) {
          var image = newToast.querySelector('.toast-image');

          if (image !== null) {
            Util.append(image, "<img src=\"".concat(_config.image, "\" class=\"").concat(_config.imageClass || '', "\" />"));
          }
        }

        if (_config.icon) {
          var _image = newToast.querySelector('.toast-image');

          if (_image !== null) {
            var icon = Util.append(_image, _config.icon);

            if (!_config.image && _config.imageClass) {
              icon.className += " ".concat(_config.imageClass);
            }
          }
        }

        if (!(_config.image || _config.icon)) newToast.querySelectorAll('.toast-image').forEach(function (el) {
          return Util.remove(el);
        });

        if (_config.className) {
          newToast.className += " ".concat(_config.className);
        }

        if (_config.headerClass && toastHeader) {
          toastHeader.className += " ".concat(_config.headerClass);
        } // if delay is below 30, we consider it as seconds, not milliseconds


        _config.delay = _config.delay > 30 ? _config.delay : _config.delay * 1000;

        if (_config.progress && !_config.sticky && _config.autohide !== false) {
          var progress = Util.append(newToast, "<div class=\"toast-progress ".concat(_config.progress, "\"></div>"));
          progress.style.transitionDuration = "".concat(parseInt(_config.delay * 1.015), "ms");
          progress.style.width = _config.progressReverse ? 'calc(100% - 1px)' : 0; // progress.offsetWidth

          setTimeout(function () {
            progress.style.width = _config.progressReverse ? 0 : 'calc(100% - 2px)';
          }, 0);
        }

        return this._addToContainer(newToast, _config);
      } // add an existing toast element to our container

    }, {
      key: "addEl",
      value: function addEl(element, config) {
        var _config = this._getConfig(config);

        this.element = element;
        this.element.classList.add('ace-toaster-item');
        if (!this.element.getAttribute('id')) this.element.setAttribute('id', "ace-toaster-item-".concat(++this._lastToastId));

        this._addToContainer(this.element, _config, false);
      } // add toast element to container

    }, {
      key: "_addToContainer",
      value: function _addToContainer(toast, _config) {
        var isNewElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        // trigger ADD event before adding it to our container
        var addEvent = EventHandler.trigger(document, Event$6.ADD, {
          target: toast
        });

        if (addEvent.defaultPrevented) {
          if (isNewElement) Util.remove(toast);
          return null;
        } // end of trigger
        // add the toaster container to body


        var container = document.querySelector(".ace-toaster-container.position-".concat(_config.placement));

        if (container === null) {
          container = Util.append(document.body, "<div class=\"ace-toaster-container position-".concat(_config.placement, "\"/>"));
        }

        if (_config.belowNav) {
          container.classList.add('toaster-below-nav');
        } // this last container should appear above other ones ?
        // let topContainer = document.querySelector('.ace-toaster-container-on-top')
        // if (topContainer !== null) topContainer.classList.remove('ace-toaster-container-on-top')
        // container.classList.add('ace-toaster-container-on-top')
        // add to container


        Util.append(container, toast);
        Util.wrap(toast, '<div class="toast-wrapper"></div>'); // without having an initial .toast element, fade-in animation isn't taking place??!!

        var dummy = document.getElementById('ace-toaster-dummy-toast-1');
        if (dummy === null) dummy = Util.append(document.body, '<div id="ace-toaster-dummy-toast-1" class="toast d-none invisible"></div>');

        if (this._jQueryBS) {
          window.jQuery(dummy).toast('show');
        } /// ///////////////////////////////////////////////


        var _toastOptions = {};
        if (_config.sticky === true || _config.autohide === false) _toastOptions.autohide = false;
        if (_config.animation === false) _toastOptions.animation = false;
        _toastOptions.delay = _config.delay;
        if (_config.width) toast.style.width = isNaN(_config.width) ? _config.width : _config.width + 'px';

        if (this._jQueryBS) {
          window.jQuery(toast).toast(_toastOptions).toast('show').one('hidden.bs.toast.1', function () {
            // show it again (invisibly with opacity = 0) and use bootstrap Collapse plugin to hide it, so that other toasts stacked below it move up smoothly
            var $toast = window.jQuery(toast);
            $toast.removeClass('hide').parent().addClass('show').collapse('hide').one('hidden.bs.collapse', function () {
              $toast.toast('dispose');
              $toast.parent().collapse('dispose');

              if (_config.autoremove) {
                $toast.parent().remove();
              } else {
                if (!isNewElement) {
                  $toast.unwrap(); // remove the wrapper
                }
              }
            });
          });
        } // trigger ADDED event before adding it to DOM


        EventHandler.trigger(document, Event$6.ADDED, {
          target: toast
        });
        return toast;
      } // hide toasts

    }, {
      key: "remove",
      value: function remove(id) {
        var instant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.hide(id, true, instant);
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        var placement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var instant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.hideAll(placement, true, instant);
      } // remove toast by ID or element reference

    }, {
      key: "hide",
      value: function hide(id) {
        var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var instant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var selector = isNaN(id) ? id : '#ace-toaster-item-' + parseInt(id);

        this._hideBySelector(selector, remove, instant);
      } // remove ALL toasts

    }, {
      key: "hideAll",
      value: function hideAll() {
        var placement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var instant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        // trigger CLEAR event before removing ALL
        var clearEvent = EventHandler.trigger(document, Event$6.CLEAR, {
          detail: {
            placement: placement || 'all',
            remove: remove
          }
        });

        if (clearEvent.defaultPrevented) {
          return;
        } // end of trigger


        var selector = '.toast.ace-toaster-item';
        if (placement) selector = ".ace-toaster-container.position-".concat(placement, " ").concat(selector);

        this._hideBySelector(selector, remove, instant);
      }
    }, {
      key: "_hideBySelector",
      value: function _hideBySelector(selector) {
        var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var instant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (!this._jQueryBS) return;
        window.jQuery(selector).each(function () {
          var $toast = window.jQuery(this);

          if (!instant && $toast.is(':visible')) {
            // fade out and then remove
            $toast.toast('hide').off('hidden.bs.toast.1') // remove the previous handler above (because it has autoremove)
            .one('hidden.bs.toast.2', function () {
              $toast.toast('dispose');
              if (remove) $toast.remove();
            });
          } else {
            $toast.toast('dispose'); // instantly remove if not visible

            if (remove) $toast.remove();
          }
        });
      } // Private methods

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default$3), _typeof(config) === 'object' && config ? config : {});

        if (typeof window.bootstrap !== 'undefined') {
          window.bootstrap.Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
        }

        return config;
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          config = _objectSpread2(_objectSpread2(_objectSpread2({}, {
            autoremove: false
          }), window.jQuery(this).data()), _typeof(config) === 'object' && config ? config : {});
          window.jQuery[NAME$6].addEl(this, config); // jQuery[NAME] is an instance of Toaster
        });
      }
    }]);

    return Toaster;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof window.jQuery !== 'undefined') {
    var $$6 = window.jQuery;
    $$6[NAME$6] = new Toaster();
    var JQUERY_NO_CONFLICT$4 = $$6.fn[NAME$6];
    $$6.fn[NAME$6] = Toaster._jQueryInterface;
    $$6.fn[NAME$6].Constructor = Toaster;

    $$6.fn[NAME$6].noConflict = function () {
      $$6.fn[NAME$6] = JQUERY_NO_CONFLICT$4;
      return Toaster._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'aceCard';
  var VERSION$6 = '4.0.0';
  var DATA_KEY$6 = 'ace.card';
  var EVENT_KEY$5 = ".".concat(DATA_KEY$6);
  var DATA_API_KEY$4 = '.data-api';
  var Event$5 = {
    SHOW: "show".concat(EVENT_KEY$5),
    HIDE: "hide".concat(EVENT_KEY$5),
    SHOWN: "shown".concat(EVENT_KEY$5),
    HIDDEN: "hidden".concat(EVENT_KEY$5),
    CLOSE: "close".concat(EVENT_KEY$5),
    CLOSED: "closed".concat(EVENT_KEY$5),
    EXPAND: "expand".concat(EVENT_KEY$5),
    EXPANDED: "expanded".concat(EVENT_KEY$5),
    RESTORE: "restore".concat(EVENT_KEY$5),
    RESTORED: "restored".concat(EVENT_KEY$5),
    RELOAD: "reload".concat(EVENT_KEY$5),
    RELOADED: "reloaded".concat(EVENT_KEY$5),
    CLICK_DATA_API: "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$4)
  };
  var Selector$4 = {
    DATA_ACTION: '.card [data-action]'
  };
  var DefaultType$2 = {
    toggle: 'boolean'
  };
  var Default$2 = {
    toggle: true
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Card = /*#__PURE__*/function () {
    function Card(element, config) {
      _classCallCheck(this, Card);

      this._config = this._getConfig(config);
      this.element = element;
      Util.reflow(this.element); // force reflow, so that if we instantly call 'close' etc, transition effect takes place

      this.isTransitioning = false;
      this.loader = null;
      this._jQueryBS = typeof window.jQuery !== 'undefined' && typeof window.jQuery.fn.collapse !== 'undefined';
    }

    _createClass(Card, [{
      key: "reload",
      value: function reload() {
        var ev = EventHandler.trigger(this.element, Event$5.RELOAD);
        if (ev.defaultPrevented) return;
        this.startLoading();
      }
    }, {
      key: "startLoading",
      value: function startLoading() {
        var loadingHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<i class="bs-card-loading-icon fa fa-spinner fa-spin fa-2x text-white"></i>';
        this.loader = Util.append(this.element, "<div class=\"bs-card-loading-overlay\">".concat(loadingHtml, "</div>"));
      }
    }, {
      key: "stopLoading",
      value: function stopLoading() {
        if (this.loader === null) return;
        Util.remove(this.loader);
        this.loader = null;
        EventHandler.trigger(this.element, Event$5.RELOADED);
      }
    }, {
      key: "closeFast",
      value: function closeFast() {
        var ev = EventHandler.trigger(this.element, Event$5.CLOSE);
        if (ev.defaultPrevented) return;
        Util.remove(this.element);
        EventHandler.trigger(this.element, Event$5.CLOSED);
      }
    }, {
      key: "close",
      value: function close() {
        var _this = this;

        var ev = EventHandler.trigger(this.element, Event$5.CLOSE);
        if (ev.defaultPrevented || this.isTransitioning) return;
        this.isTransitioning = true;
        if (this.isFullscreen()) Util.remove(Util.next(this.element, '.card-expanded-placeholder')); // remove the placeholder

        var _closeComplete = function _closeComplete() {
          _this.isTransitioning = false;
          Util.remove(_this.element);
          EventHandler.trigger(_this.element, Event$5.CLOSED);
        };

        if (Util.isReducedMotion()) _closeComplete();else {
          this.element.classList.add('fade');
          this.element.addEventListener('transitionend', function (e) {
            if (e.target !== _this.element) return; // because transitionend might fire for children elements (like animated toolbar buttons)

            _closeComplete();
          });
        }
      }
    }, {
      key: "toggle",
      value: function toggle(type) {
        var _this2 = this;

        if (!this._config.toggle) return;
        var body = this.element.querySelector('.card-body');
        if (body === null) return;
        var action = type && typeof type === 'string' && type.match(/show|hide/)[0] || (body.offsetParent !== null ? 'hide' : 'show');
        var eventName = action === 'hide' ? 'hide' : 'show';
        var ev = EventHandler.trigger(this.element, eventName + EVENT_KEY$5);
        if (ev.defaultPrevented || this.isTransitioning) return;
        this.isTransitioning = true;

        this._toggleIcon(type && _typeof(type) === 'object' && type instanceof window.HTMLElement ? type : null, action); ///


        var eventCompleteName = action === 'hide' ? 'hidden' : 'shown';

        if (this._jQueryBS) {
          if (action === 'hide') body.classList.add('show'); // .show class required for bs collapse plugin

          window.jQuery(body).collapse(action).one(eventCompleteName + '.bs.collapse', function () {
            _this2.isTransitioning = false;
            EventHandler.trigger(_this2.element, eventCompleteName + EVENT_KEY$5);
          });
        } else {
          if (action === 'hide') body.classList.remove('show');else body.classList.add('show');
          this.isTransitioning = false;
          EventHandler.trigger(this.element, eventCompleteName + EVENT_KEY$5);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        this.toggle('hide');
      }
    }, {
      key: "show",
      value: function show() {
        this.toggle('show');
      }
    }, {
      key: "toggleFast",
      value: function toggleFast(type) {
        if (!this._config.toggle) return;
        var body = this.element.querySelector('.card-body');
        if (body === null) return;
        var action = type && typeof type === 'string' && type.match(/show|hide/)[0] || (body.offsetParent !== null ? 'hide' : 'show');
        var eventName = action === 'hide' ? 'hide' : 'show';
        var ev = EventHandler.trigger(this.element, eventName + EVENT_KEY$5);
        if (ev.defaultPrevented) return;
        body.classList.add('collapse');
        if (action === 'hide') body.classList.remove('show');else body.classList.add('show');

        this._toggleIcon(type && _typeof(type) === 'object' && type instanceof window.HTMLElement ? type : null, action);

        var eventCompleteName = action === 'hide' ? 'hidden' : 'shown';
        EventHandler.trigger(this.element, eventCompleteName + EVENT_KEY$5);
      }
    }, {
      key: "hideFast",
      value: function hideFast() {
        this.toggleFast('hide');
      }
    }, {
      key: "showFast",
      value: function showFast() {
        this.toggleFast('show');
      }
    }, {
      key: "_toggleIcon",
      value: function _toggleIcon(button, action) {
        if (!button) {
          button = this.element.querySelector('a[data-action=toggle]');
        } //


        if (button) {
          if (action === 'show') {
            button.classList.remove('collapsed');
          } else {
            button.classList.add('collapsed');
          }
        }
      } // fullscreen

    }, {
      key: "expand",
      value: function expand(_expand, animate) {
        var _this3 = this;

        var button = this.element.querySelector('* > .card-header [data-action=expand]');

        var _fullscreen = this.isFullscreen();

        var $expand = _expand === true || !_fullscreen;
        animate = !(animate === false || Util.isReducedMotion()); // default is true

        var params = ['left', 'top', 'width', 'height'];

        if ($expand) {
          if (_fullscreen) return false; // return if already fullscreen

          var ev = EventHandler.trigger(this.element, Event$5.EXPAND);
          if (ev.defaultPrevented || this.isTransitioning) return false;
          if (button) button.classList.add('active');

          if (animate) {
            this.isTransitioning = true;
            var rect = this.element.getBoundingClientRect();
            params.forEach(function (param) {
              _this3.element.style[param] = parseInt(rect[param]) + 'px';
            });
            this.element.classList.add('card-expanding');

            var transitionFn = function transitionFn(e) {
              if (e.target !== _this3.element) return; // because transitionend might fire for children elements (like animated icons of toolbar)

              _this3.element.removeEventListener('transitionend', transitionFn);

              _this3.element.classList.remove('card-expanding');

              _this3.isTransitioning = false;
              EventHandler.trigger(_this3.element, Event$5.EXPANDED);
            };

            this.element.addEventListener('transitionend', transitionFn);
            Util.after(this.element, "<div class='card-expanded-placeholder' style='width: ".concat(parseInt(rect.width), "px; height: ").concat(parseInt(rect.height), "px;'></div>"));
            Util.reflow(this.element); // to force browser apply css/dom changes

            params.forEach(function (param) {
              _this3.element.style[param] = '';
            });
          }

          this.element.classList.add('card-expand');

          if (!animate) {
            EventHandler.trigger(this.element, Event$5.EXPANDED);
          }
        } else {
          // restore
          if (!_fullscreen) return false; // return if already not fullscreen

          var _ev = EventHandler.trigger(this.element, Event$5.RESTORE);

          if (_ev.defaultPrevented || this.isTransitioning) return false;
          if (button) button.classList.remove('active');
          animate = animate && this.element.nextElementSibling !== null && this.element.nextElementSibling.classList.contains('card-expanded-placeholder');

          if (animate) {
            this.isTransitioning = true;

            var _rect = this.element.nextElementSibling.getBoundingClientRect();

            this.element.classList.add('card-expanding');
            params.forEach(function (param) {
              _this3.element.style[param] = parseInt(_rect[param]) + 'px';
            });

            var _transitionFn = function _transitionFn(e) {
              if (e.target !== _this3.element) return; // because transitionend might fire for children elements (like animated icons of toolbar)

              _this3.element.removeEventListener('transitionend', _transitionFn);

              _this3.element.classList.remove('card-expanding');

              params.forEach(function (param) {
                _this3.element.style[param] = '';
              });
              Util.remove(_this3.element.nextElementSibling);
              _this3.isTransitioning = false;
              EventHandler.trigger(_this3.element, Event$5.RESTORED);
            };

            this.element.addEventListener('transitionend', _transitionFn);
          }

          this.element.classList.remove('card-expand');

          if (!animate) {
            EventHandler.trigger(this.element, Event$5.RESTORED);
          }
        }

        return true;
      } // function expand

    }, {
      key: "expandFast",
      value: function expandFast() {
        return this.expand(true, false);
      }
    }, {
      key: "restore",
      value: function restore() {
        return this.expand(false);
      }
    }, {
      key: "restoreFast",
      value: function restoreFast() {
        return this.expand(false, false);
      }
    }, {
      key: "isFullscreen",
      value: function isFullscreen() {
        return this.element.classList.contains('card-expand');
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default$2), _typeof(config) === 'object' && config ? config : {});

        if (typeof window.bootstrap !== 'undefined') {
          window.bootstrap.Util.typeCheckConfig(NAME$5, config, this.constructor.DefaultType);
        }

        return config;
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!element) throw new Error('element for Card is null');
        var name = "__".concat(NAME$5, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new Card(element, config);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config, value) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$6);

          var _config = _objectSpread2(_objectSpread2({}, $this.data()), _typeof(config) && _typeof(config) === 'object' ? config : {});

          if (!data) {
            data = Card.getInstance(this, _config);
            $this.data(DATA_KEY$6, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config](value);
          }
        });
      }
    }]);

    return Card;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof jQuery !== 'undefined') {
    var $$5 = window.jQuery;
    EventHandler.on(document, Event$5.CLICK_DATA_API, Selector$4.DATA_ACTION, function (event) {
      var actionBtn = event.delegateTarget;

      if (actionBtn.tagName === 'A') {
        event.preventDefault();
      }

      var card = Util.closest(actionBtn, '.card');
      if (card === null) return;
      var action = actionBtn.getAttribute('data-action');
      var ev = EventHandler.trigger(card, action + EVENT_KEY$5);
      if (ev.defaultPrevented) return;

      try {
        $$5(card)[NAME$5](action, actionBtn);
      } catch (e) {}
    });
    var JQUERY_NO_CONFLICT$3 = $$5.fn[NAME$5];
    $$5.fn[NAME$5] = Card._jQueryInterface;
    $$5.fn[NAME$5].Constructor = Card;

    $$5.fn[NAME$5].noConflict = function () {
      $$5.fn[NAME$5] = JQUERY_NO_CONFLICT$3;
      return Card._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
  */

  var NAME$4 = 'aceFileInput';
  var VERSION$5 = '4.0.0';
  var DATA_KEY$5 = 'ace.file';
  var EVENT_KEY$4 = ".".concat(DATA_KEY$5);
  var Event$4 = {
    CHANGED: "changed".concat(EVENT_KEY$4),
    INVALID: "invalid".concat(EVENT_KEY$4),
    CLEAR: "clear".concat(EVENT_KEY$4),
    PREVIEW_FAILED: "preview_failed".concat(EVENT_KEY$4)
  };
  var Default$1 = {
    style: false,
    persistent: false,
    container: 'border-1 brc-grey-l2 brc-h-warning-m1',
    btnChooseClass: 'bgc-default text-white px-2 pt-2 text-90 my-1px mr-1px',
    btnChangeClass: 'bgc-blue text-white px-2 pt-2 text-90 my-1px mr-1px',
    btnChooseText: 'Choose',
    btnChangeText: 'Change',
    placeholderClass: 'text-grey-m2 px-1',
    placeholderText: 'No file chosen',
    placeholderIcon: '<i class="fa fa-upload bgc-grey-m1 text-white w-4 py-2 text-center"></i>',
    iconClass: 'mx-2px',
    reset: '',
    resetText: '',
    resetIcon: '<i class="fa fa-times"></i>',
    droppable: false,
    thumbnail: false,
    // large, fit, small
    previewImage: true,
    allowExt: null,
    denyExt: null,
    allowMime: null,
    denyMime: null,
    maxSize: null,
    previewSize: false,
    previewWidth: false,
    previewHeight: false,
    // callbacks
    beforeChange: null,
    fileIcons: {
      file: '<i class="fa fa-file bgc-grey-m1 text-white w-4 py-2 text-center"></i>',
      image: '<i class="far fa-image bgc-purple-m1 text-white w-4 py-2 text-center"></i>',
      video: '<i class="fas fa-video bgc-success-m1 text-white w-4 py-2 text-center"></i>',
      audio: '<i class="fas fa-music bgc-pink-m1 text-white w-4 py-2 text-center"></i>',
      document: '<i class="far fa-file-alt bgc-default-d1 text-white w-4 py-2 text-center"></i>',
      archive: '<i class="far fa-file-archive bgc-warning text-white w-4 py-2 text-center"></i>',
      code: '<i class="fas fa-code file-code bgc-secondary text-white w-4 py-2 text-center"></i>'
    }
  };
  var DefaultType$1 = {
    persistent: 'boolean',
    style: '(boolean|string)',
    btn: '(string|undefined)',
    container: '(string|undefined)',
    icon: '(string|undefined)',
    placeholderText: '(string|undefined)',
    placeholderIcon: '(string|undefined)',
    btnChooseText: '(string|undefined)',
    btnChangeText: '(string|undefined)',
    reset: '(string|undefined)',
    resetText: '(string|undefined)',
    resetIcon: '(string|undefined)',
    droppable: 'boolean',
    thumbnail: '(boolean|string)',
    previewImage: 'boolean',
    allowExt: '(string|null)',
    denyExt: '(string|null)',
    allowMime: '(string|null)',
    denyMime: '(string|null)',
    maxSize: '(number|null)',
    previewSize: '(boolean|number)',
    previewWidth: '(boolean|number)',
    previewHeight: '(boolean|number)',
    fileIcons: '(object|null)',
    // callbacks
    beforeChange: '(function|null)'
  };
  var PreviewError = {
    FILE_LOAD_FAILED: 1,
    IMAGE_LOAD_FAILED: 2,
    THUMBNAIL_FAILED: 3
  };

  var ImagePreviewError = /*#__PURE__*/function (_Error) {
    _inherits(ImagePreviewError, _Error);

    var _super = _createSuper(ImagePreviewError);

    function ImagePreviewError(message, code) {
      var _this;

      _classCallCheck(this, ImagePreviewError);

      _this = _super.call(this, message);
      _this.code = code;
      return _this;
    }

    return ImagePreviewError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */


  var FileInput = /*#__PURE__*/function () {
    function FileInput(element, config) {
      var _this2 = this;

      _classCallCheck(this, FileInput);

      this.settings = this._getConfig(config);
      this.settings.fileIcons = _objectSpread2(_objectSpread2({}, Default$1.fileIcons), this.settings.fileIcons || {});
      this.fileList = [];
      this.selectMethod = '';
      this._hasMultiple = 'multiple' in document.createElement('INPUT');
      this._hasFileList = 'FileList' in window; // file list enabled in modern browsers

      this._hasFileReader = 'FileReader' in window;
      this._hasFile = 'File' in window;
      this.element = element;
      this.disabled = false;
      this.canReset = true;
      this._hasAcceptAttr = this.element.getAttribute('accept') !== null; // if new files selected (via file dialog), handle them

      EventHandler.off(this.element, 'change.aceFileInput');
      EventHandler.on(this.element, 'change.aceFileInput', function () {
        if (_this2.disabled) return;
        return _this2._handleOnChange();
      }); // if a parent form is 'reset', reset UI as well

      var parentForm = Util.closest(this.element, 'form');

      if (parentForm) {
        EventHandler.off(parentForm, 'reset.aceFileInput');
        EventHandler.on(parentForm, 'reset.aceFileInput', function () {
          _this2.resetInputData();

          _this2.resetInputUI();
        });
      }

      var parentLabel = Util.closest(this.element, 'label');
      var tagName = 'label';

      if (parentLabel) {
        parentLabel.classList.add('d-block');
        tagName = 'span'; // if not inside a "LABEL" tag, use "LABEL" tag, otherwise use "SPAN"
      }

      this._wrap = Util.wrap(this.element, "<".concat(tagName, " class=\"ace-file-input\" />"));

      this._applySettings();
    } // Getters


    _createClass(FileInput, [{
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default$1), config);

        if (typeof window.bootstrap !== 'undefined') {
          window.bootstrap.Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
        }

        return config;
      }
    }, {
      key: "_applySettings",
      value: function _applySettings() {
        var _this3 = this;

        this._jQueryBS = typeof window.jQuery !== 'undefined' && typeof window.bootstrap !== 'undefined';
        this._isMulti = this.element.getAttribute('multiple') && this._hasMultiple;
        this._isDropStyle = this.settings.style === 'drop';

        if (this._isDropStyle) {
          if (!this.settings.thumbnail) this.settings.thumbnail = 'small';

          this._wrap.classList.add('ace-file-multiple');
        } else {
          this._wrap.classList.remove('ace-file-multiple');
        }

        this._wrap.querySelectorAll('*:not([type=file])').forEach(function (el) {
          return Util.remove(el);
        }); // remove all except our input, good for when changing settings


        var placeholder = "<div class=\"ace-file-placeholder h-100\">\n<span class=\"ace-file-icon align-self-center ".concat(this.settings.iconClass || '', "\">\n  ").concat(this.settings.placeholderIcon || '', "\n</span>\n<span class=\"ace-file-name ").concat(this.settings.placeholderClass || '', "\">\n  ").concat(this.settings.placeholderText, "\n</span>") + (!this._isDropStyle ? "<span class=\"ace-file-btn ml-auto ".concat(this.settings.btnChooseClass || '', "\">").concat(this.settings.btnChooseText, "</span>") : '') + '</div>';
        Util.after(this.element, "<div class=\"ace-file-container d-flex flex-column ".concat(this.settings.container || '', "\">").concat(placeholder, "</div>"));
        this.container = this.element.nextElementSibling;

        if (this.settings.reset !== false) {
          var remove = this.settings.reset.length > 0 ? this.settings.reset : !this._isDropStyle ? 'position-rc text-danger mr-n25 w-3 radius-2 border-1 brc-h-danger-m4 text-center' : 'position-tr bgc-white text-danger mt-n25 mr-n25 w-4 h-4 text-center pt-2px radius-round border-2 brc-grey-m4 brc-h-danger-m3';
          var btn = Util.append(this._wrap, "<a title=\"".concat(this.settings.resetText || '', "\" class=\"remove ").concat(remove, "\" href=\"#\">").concat(this.settings.resetIcon, "</a>"));
          if (this.settings.resetText && this._jQueryBS && window.jQuery.fn.tooltip) window.jQuery(btn).tooltip({
            container: 'body'
          });
          btn.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (!_this3.canReset) return;
            var event = EventHandler.trigger(_this3.element, Event$4.CLEAR);
            if (event.defaultPrevented) return;

            _this3.resetInput();
          });
        }

        if (this.settings.droppable && this._hasFileList) {
          this._enableFileDrop();
        } // set 'accept' attribute if not set


        if (!this._hasAcceptAttr) {
          this._setAcceptAttr(this.settings.allowExt, this.settings.allowMime);
        }
      }
    }, {
      key: "showFileList",
      value: function showFileList($files, innerCall) {
        var _this4 = this;

        var files = $files || this.fileList;
        if (!files || !files.length) return; /// //////////////////////////////////

        if (!this.settings.persistent) {
          this.resetInputUI();
        }

        this.container.classList.add('selected');
        this.container.querySelectorAll('.ace-file-placeholder').forEach(function (el) {
          return el.classList.add('d-none');
        });

        var _loop = function _loop(i) {
          var filename = '';
          var format = false;
          if (typeof files[i] === 'string') filename = files[i];else if (_this4._hasFile && files[i] instanceof window.File) filename = files[i].name.trim();else if (files[i] instanceof Object && Object.prototype.hasOwnProperty.call(files[i], 'name')) {
            // format & name specified by user (pre-displaying name, etc)
            filename = files[i].name;
            if (Object.prototype.hasOwnProperty.call(files[i], 'type')) format = files[i].type;
            if (!Object.prototype.hasOwnProperty.call(files[i], 'path')) files[i].path = files[i].name;
          } else return "continue";
          var index = filename.lastIndexOf('\\') + 1;
          if (index === 0) index = filename.lastIndexOf('/') + 1;
          filename = filename.substr(index);

          if (!format) {
            if (/\.(jpe?g|png|gif|svg|bmp|tiff?|webp)$/i.test(filename)) {
              format = 'image';
            } else if (/\.(mpe?g|flv|mov|avi|swf|mp4|mkv|webm|wmv|3gp)$/i.test(filename)) {
              format = 'video';
            } else if (/\.(mp3|ogg|wav|wma|amr|aac)$/i.test(filename)) {
              format = 'audio';
            } else if (/\.(pdf|docx?|rtf|txt)$/i.test(filename)) {
              format = 'document';
            } else if (/\.(zip|rar|tar)$/i.test(filename)) {
              format = 'archive';
            } else if (/\.(html?|js|s?css|less|php|py|aspx?|rb|c|cpp|java|cs)$/i.test(filename)) {
              format = 'code';
            } else format = 'file';
          }

          var fileIcon = _this4.settings.fileIcons[format];
          var className = 'ace-file-item d-flex h-100';
          if (_this4.settings.thumbnail) className += " ".concat(_this4.settings.thumbnail !== 'small' ? 'flex-column my-2px py-2' : 'mx-1 py-1', " align-items-center");
          var label = Util.append(_this4.container, "<div class=\"".concat(className, "\">\n<span class=\"ace-file-icon align-self-center ").concat(_this4.settings.iconClass || '', "\">").concat(fileIcon, "</span>\n<span class=\"ace-file-name ").concat(_this4.settings.thumbnail && _this4.settings.thumbnail !== 'small' ? 'px-2' : 'px-1', "\">").concat(filename, "</span>") + (!_this4._isDropStyle ? "<span class=\"ace-file-btn ml-auto ".concat(_this4.settings.btnChangeClass || '', "\">").concat(_this4.settings.btnChangeText, "</span>") : '') + '</div>');
          var type = innerCall === true && _this4._hasFile && files[i] instanceof window.File ? files[i].type.trim() : '';
          var canPreview = _this4.settings.previewImage !== false && _this4._hasFileReader && _this4.settings.thumbnail && (type.length > 0 && type.match('image') || type.length === 0 && format === 'image'); // the second one is for older Android's default browser which gives an empty text for file.type

          if (canPreview) {
            try {
              _this4._previewImage(files[i], label).catch(function (result) {
                EventHandler.trigger(_this4.element, Event$4.PREVIEW_FAILED, {
                  $_previewError: {
                    filename: filename,
                    code: result.code
                  }
                });
              });
            } catch (e) {
              // for IE that doesn't support Promises
              EventHandler.trigger(_this4.element, Event$4.PREVIEW_FAILED, {
                $_previewError: {
                  filename: filename,
                  code: PreviewError.FILE_LOAD_FAILED
                }
              });
            }
          }
        };

        for (var i = 0; i < files.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }
      }
    }, {
      key: "resetInput",
      value: function resetInput() {
        this.resetInputUI();
        this.resetInputField();
        this.resetInputData();
      }
    }, {
      key: "resetInputUI",
      value: function resetInputUI() {
        this.container.querySelectorAll('div:not(.ace-file-placeholder)').forEach(function (el) {
          return Util.remove(el);
        });
        this.container.querySelectorAll('.ace-file-placeholder').forEach(function (el) {
          return el.classList.remove('d-none');
        });
        this.container.classList.remove('selected'); // hides 'close' button

        this.stopLoading();
      }
    }, {
      key: "resetInputField",
      value: function resetInputField() {
        this.element.value = '';
        this.element.type = '';
        this.element.type = 'file';
      }
    }, {
      key: "resetInputData",
      value: function resetInputData() {
        this.fileList = [];
        this.selectMethod = '';

        if (this._jQueryBS && window.jQuery(this.element).data('ace_input_files')) {
          window.jQuery(this.element).removeData('ace_input_files');
          window.jQuery(this.element).removeData('ace_input_method');
        }
      }
    }, {
      key: "enableReset",
      value: function enableReset() {
        this.canReset = true;
      }
    }, {
      key: "disableReset",
      value: function disableReset() {
        this.canReset = false;
      }
    }, {
      key: "disable",
      value: function disable() {
        this.disabled = true;
        this.element.setAttribute('disabled', 'disabled');
        this.element.classList.add('disabled');
      }
    }, {
      key: "enable",
      value: function enable() {
        this.disabled = false;
        this.element.removeAttribute('disabled');
        this.element.classList.remove('disabled');
      }
    }, {
      key: "files",
      value: function files() {
        return this.fileList.length > 0 ? this.fileList : null;
      }
    }, {
      key: "method",
      value: function method() {
        return this.selectMethod;
      }
    }, {
      key: "updateSettings",
      value: function updateSettings(newSettings) {
        this.settings = _objectSpread2(_objectSpread2({}, this.settings), newSettings || {});
        this.settings.fileIcons = _objectSpread2(_objectSpread2({}, this.settings.fileIcons), newSettings.fileIcons || {});

        this._applySettings();
      }
    }, {
      key: "startLoading",
      value: function startLoading() {
        var loadingHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<i class="overlay-content fa fa-spin fa-spinner text-white fa-2x"></i>';

        var loader = this._wrap.querySelector('.ace-file-overlay');

        if (loader === null) {
          loader = Util.append(this._wrap, '<div class="ace-file-overlay text-center"></div>');
          EventHandler.on(loader, 'click', function (ev) {
            ev.stopImmediatePropagation();
            ev.preventDefault();
          });
          this.element.setAttribute('readonly', 'true'); // for IE
        }

        loader.innerHTML = loadingHtml;
      }
    }, {
      key: "stopLoading",
      value: function stopLoading() {
        var loader = this._wrap.querySelector('.ace-file-overlay');

        if (loader === null) {
          this.element.removeAttribute('readonly');
          return;
        }

        EventHandler.off(loader, 'click');
        Util.remove(loader);
      }
    }, {
      key: "_enableFileDrop",
      value: function _enableFileDrop() {
        var _this5 = this;

        var dropbox = this.element.parentNode;
        EventHandler.off(dropbox, 'dragenter');
        EventHandler.on(dropbox, 'dragenter', function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
        EventHandler.off(dropbox, 'dragover');
        EventHandler.on(dropbox, 'dragover', function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
        EventHandler.off(dropbox, 'drop');
        EventHandler.on(dropbox, 'drop', function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (_this5.disabled) return;
          var dt = e.dataTransfer;
          var tmpFileList = dt.files;

          if (!_this5._isMulti && tmpFileList.length > 1) {
            // single file upload, but dragged multiple files
            var tmpfiles = [];
            tmpfiles.push(tmpFileList[0]);
            tmpFileList = tmpfiles; // keep only first file
          }

          tmpFileList = _this5._processFiles(tmpFileList, true); // true means files have been dropped

          if (tmpFileList === false) return false;
          _this5.selectMethod = 'drop'; // const fileArray = [...tmpFileList]

          var fileArray = [];

          for (var f = 0; f < tmpFileList.length; f++) {
            fileArray.push(tmpFileList[f]);
          }

          if (_this5.settings.persistent) {
            _this5.fileList = _this5.fileList.concat(fileArray);
          } else {
            _this5.fileList = fileArray;
          }

          if (_this5._jQueryBS) {
            window.jQuery(_this5.element).data('ace_input_files', _this5.fileList);
            window.jQuery(_this5.element).data('ace_input_method', _this5.selectMethod);
          }

          _this5.showFileList(fileArray, true);

          EventHandler.trigger(_this5.element, Event$4.CHANGED, {
            $_selectedFiles: {
              list: _this5.fileList,
              method: _this5.selectMethod
            }
          });
          return true;
        });
      } /// ///////////

    }, {
      key: "_handleOnChange",
      value: function _handleOnChange() {
        var tmpFileList = this.element.files || [this.element.value]; // make it an array

        tmpFileList = this._processFiles(tmpFileList, false); // false means files have been selected, not dropped

        if (tmpFileList === false) return false; // const fileArray = [...tmpFileList];

        var fileArray = [];

        for (var f = 0; f < tmpFileList.length; f++) {
          fileArray.push(tmpFileList[f]);
        }

        this.selectMethod = 'select';

        if (this.settings.persistent) {
          this.fileList = this.fileList.concat(fileArray);
        } else {
          this.fileList = fileArray;
        }

        if (this._jQueryBS) {
          window.jQuery(this.element).data('ace_input_files', this.fileList);
          window.jQuery(this.element).data('ace_input_method', this.selectMethod);
        }

        this.showFileList(fileArray, true);
        EventHandler.trigger(this.element, Event$4.CHANGED, {
          $_selectedFiles: {
            list: this.fileList,
            method: this.selectMethod
          }
        });
        return true;
      }
    }, {
      key: "_previewImage",
      value: function _previewImage(file, label) {
        var _this6 = this;

        return new Promise(function (resolve, reject) {
          var icon = label.querySelector('.ace-file-icon'); // it should be out of onload, otherwise all onloads may target the same $icon because of delays

          if (icon) Util.empty(icon);

          var getImage = function getImage(src, $file) {
            var img = Util.prepend(icon, "<img style='display: none;' />"); // no error/load event is triggered in some browsers such as firefox mobile
            // so we wait a while and then reject the promise

            var waitTimer = setTimeout(function () {
              waitTimer = null;
              removeEvents();
              imgFailed(img);
            }, 6000);

            var onLoad = function onLoad() {
              removeEvents();
              imgLoaded(img, $file);
            };

            var onError = function onError() {
              removeEvents();
              imgFailed(img);
            };

            var removeEvents = function removeEvents() {
              if (waitTimer) {
                clearTimeout(waitTimer);
                waitTimer = null;
              }

              img.removeEventListener('load', onLoad); // call only once

              img.removeEventListener('error', onError); // remove the other one too
            };

            img.addEventListener('load', onLoad);
            img.addEventListener('error', onError);
            img.src = src;
          };

          var imgLoaded = function imgLoaded(img, $file) {
            // if image loaded successfully
            var size = _this6.settings.previewSize;

            if (!size) {
              if (_this6.settings.previewWidth || _this6.settings.previewHeight) {
                size = {
                  previewWidth: _this6.settings.previewWidth,
                  previewHeight: _this6.settings.previewHeight
                };
              } else {
                size = 50;
                if (_this6.settings.thumbnail === 'large') size = 150;
              }
            }

            if (_this6.settings.thumbnail === 'fit') size = icon.parentNode.offsetWidth;else if (typeof size === 'number') size = parseInt(Math.min(size, icon.parentNode.offsetWidth));
            var svg = /svg/.test($file.type);
            var thumb = !svg ? _this6._getThumbnail(img, size, $file.type) : false; //, file.type;

            if (thumb === null) {
              // if making thumbnail fails
              Util.remove(img);
              reject(new ImagePreviewError('Thumbnail Failed', PreviewError.THUMBNAIL_FAILED));
              return;
            }

            {
              if (svg) {
                if (_this6.settings.thumbnail === 'small') {
                  img.style.width = size + 'px';
                } else {
                  if (img.width > img.height) {
                    img.style.width = size + 'px';
                  } else {
                    img.style.height = size + 'px';
                  }
                }
              } else {
                var w = thumb.previewWidth;
                var h = thumb.previewHeight;

                if (_this6.settings.thumbnail === 'small') {
                  w = h = parseInt(Math.max(w, h));
                } else {
                  icon.classList.add('thumbnail-large');
                }

                img.style.background = "url(".concat(thumb.src, ") center no-repeat");
                img.style.width = w + 'px';
                img.style.height = h + 'px';
                img.setAttribute('data-src', thumb.src);
                img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==';
              }

              img.style.display = '';
            } /// ////////////////


            resolve();
          };

          var imgFailed = function imgFailed(img) {
            // for example when a file has image extenstion, but format is something else
            Util.remove(img);
            reject(new ImagePreviewError('Image Load Failed', PreviewError.IMAGE_LOAD_FAILED));
          };

          if (_this6._hasFile && file instanceof window.File) {
            var reader = new window.FileReader();

            reader.onload = function (e) {
              getImage(e.target.result, file);
            };

            reader.onerror = function (e) {
              reject(new ImagePreviewError('File Load Failed', PreviewError.FILE_LOAD_FAILED));
            };

            reader.readAsDataURL(file);
          } else {
            if (file instanceof Object && Object.prototype.hasOwnProperty.call(file, 'path')) {
              getImage(file.path, file); // file is a file name (path) --- this is used to pre-show user-selected image
            }
          }
        });
      } /// //////////

    }, {
      key: "_getThumbnail",
      value: function _getThumbnail(img, size, type) {
        var imgWidth = img.width;
        var imgHeight = img.height; //* *IE10** is not giving correct width using img.width

        imgWidth = imgWidth > 0 ? imgWidth : img.offsetWidth;
        imgHeight = imgHeight > 0 ? imgHeight : img.offsetHeight;
        var previewSize = false;
        var previewHeight = false;
        var previewWidth = false;
        if (typeof size === 'number') previewSize = size;else if (size instanceof Object) {
          if (size.previewWidth && !size.previewHeight) previewWidth = size.previewWidth;else if (size.previewHeight && !size.previewWidth) previewHeight = size.previewHeight;else if (size.previewWidth && size.previewHeight) {
            previewWidth = size.previewWidth;
            previewHeight = size.previewHeight;
          }
        }

        if (previewSize) {
          if (imgWidth > imgHeight) {
            previewWidth = previewSize;
            previewHeight = parseInt(imgHeight / imgWidth * previewWidth);
          } else {
            previewHeight = previewSize;
            previewWidth = parseInt(imgWidth / imgHeight * previewHeight);
          }
        } else {
          if (!previewHeight && previewWidth) {
            previewHeight = parseInt(imgHeight / imgWidth * previewWidth);
          } else if (previewHeight && !previewWidth) {
            previewWidth = parseInt(imgWidth / imgHeight * previewHeight);
          }
        }

        var dataURL;

        try {
          var canvas = document.createElement('canvas');
          canvas.width = previewWidth;
          canvas.height = previewHeight;
          var context = canvas.getContext('2d');
          context.imageSmoothingQuality = 'medium';
          context.drawImage(img, 0, 0, imgWidth, imgHeight, 0, 0, previewWidth, previewHeight);
          dataURL = canvas.toDataURL(type, 0.8); // dataURL = canvas.toDataURL();
        } catch (e) {
          dataURL = null;
        }

        if (!dataURL) return null; // there was only one image that failed in firefox completely randomly! so let's double check things

        if (!/^data:image\/(png|jpe?g|gif|svg);base64,[0-9A-Za-z+/=]+$/.test(dataURL)) dataURL = null;
        if (!dataURL) return null;
        return {
          src: dataURL,
          previewWidth: previewWidth,
          previewHeight: previewHeight,
          width: imgWidth,
          height: imgHeight
        };
      }
    }, {
      key: "_processFiles",
      value: function _processFiles(tmpFileList, dropped) {
        var ret = this._checkFileList(tmpFileList, dropped);

        if (ret === -1) {
          this.resetInput();
          return false;
        }

        if (!ret || ret.length === 0) {
          if (this.fileList.length === 0) this.resetInput(); // if nothing selected before, reset because of the newly unacceptable (ret=false||length=0) selection
          // otherwise leave the previous selection intact?!!!

          return false;
        }

        if (ret instanceof Array || this._hasFileList && ret instanceof window.FileList) tmpFileList = ret;
        ret = true;
        if (this.settings.beforeChange) ret = this.settings.beforeChange.call(this.element, tmpFileList, dropped);

        if (ret === -1) {
          this.resetInput();
          return false;
        }

        if (!ret || ret.length === 0) {
          if (this.fileList.length === 0) this.resetInput();
          return false;
        } // inside beforeChange you can return a modified File Array as result


        if (ret instanceof Array || this._hasFileList && ret instanceof window.FileList) tmpFileList = ret;
        return tmpFileList;
      } /// ///////

    }, {
      key: "_checkFileList",
      value: function _checkFileList(files, dropped) {
        var allowExt = this._getExtRegex(this.settings.allowExt);

        var denyExt = this._getExtRegex(this.settings.denyExt);

        var allowMime = this._getMimeRegex(this.settings.allowMime);

        var denyMime = this._getMimeRegex(this.settings.denyMime);

        var maxSize = this.settings.maxSize || false;
        if (!(allowExt || denyExt || allowMime || denyMime || maxSize)) return true; // no checking required

        var safeFiles = [];
        var errorList = {}; // for (const file of files) {

        for (var i = 0; i < files.length; i++) {
          var file = files[i]; // file is either a string(file name) or a File object

          var filename = !this._hasFile ? file : file.name;

          if (allowExt && !allowExt.test(filename)) {
            // extension not matching whitelist, so drop it
            if (!('ext' in errorList)) errorList.ext = [];
            errorList.ext.push(filename);
            continue;
          } else if (denyExt && denyExt.test(filename)) {
            // extension is matching blacklist, so drop it
            if (!('ext' in errorList)) errorList.ext = [];
            errorList.ext.push(filename);
            continue;
          }

          var type = void 0;

          if (!this._hasFile) {
            // in browsers that don't support FileReader API
            safeFiles.push(file);
            continue;
          } else if ((type = file.type.trim()).length > 0) {
            // there is a mimetype for file so let's check against are rules
            if (allowMime && !allowMime.test(type)) {
              // mimeType is not matching whitelist, so drop it
              if (!('mime' in errorList)) errorList.mime = [];
              errorList.mime.push(filename);
              continue;
            } else if (denyMime && denyMime.test(type)) {
              // mimeType is matching blacklist, so drop it
              if (!('mime' in errorList)) errorList.mime = [];
              errorList.mime.push(filename);
              continue;
            }
          }

          if (maxSize && file.size > maxSize) {
            // file size is not acceptable
            if (!('size' in errorList)) errorList.size = [];
            errorList.size.push(filename);
            continue;
          }

          safeFiles.push(file);
        }

        if (safeFiles.length === files.length) return files; // return original file list if all are valid
        /// //////

        var errorCount = {
          ext: 0,
          mime: 0,
          size: 0
        };
        if ('ext' in errorList) errorCount.ext = errorList.ext.length;
        if ('mime' in errorList) errorCount.mime = errorList.mime.length;
        if ('size' in errorList) errorCount.size = errorList.size.length;
        var event = EventHandler.trigger(this.element, Event$4.INVALID, {
          $_fileErrors: {
            fileCount: files.length,
            invalidCount: files.length - safeFiles.length,
            errorList: errorList,
            errorCount: errorCount,
            dropped: dropped
          }
        });
        if (event.defaultPrevented) return -1; // it will reset input
        /// ///////

        return safeFiles; // return safeFiles
      }
    }, {
      key: "_setAcceptAttr",
      value: function _setAcceptAttr() {
        var ext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var mime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        if (ext) {
          if (Array.isArray(ext)) ext = ext.join(',.');else ext = ext.replace(/\|/g, ',.');
          ext = '.' + ext;
        }

        if (mime) {
          if (Array.isArray(mime)) mime = mime.join(','); // replace `/\w+` with `/*` ... for example, `image/\w+` becomes `image/*`
          else mime = mime.replace(/\|/g, ',').replace(/\/\\w+/g, '/*');
        }

        var accept = (ext || '') + (ext && mime ? ',' : '') + (mime || '');
        accept = accept.replace(/\s/g, '');
        if (accept) this.element.setAttribute('accept', accept);
      }
    }, {
      key: "_getExtRegex",
      value: function _getExtRegex(ext) {
        if (!ext) return null;
        if (Array.isArray(ext)) ext = ext.join('|');
        if (ext.length === 0) return null;
        return new RegExp('\\.(?:' + ext + ')$', 'i');
      }
    }, {
      key: "_getMimeRegex",
      value: function _getMimeRegex(mime) {
        if (!mime) return null;
        if (Array.isArray(mime)) mime = mime.join('|');
        if (mime.length === 0) return null; // replace `/*` with `/\w+` ... for example, `image/*` becomes `image/\w+`

        return new RegExp('^(?:' + mime.replace(/\/\*/g, '/\\w+').replace(/\//g, '\\/') + ')$', 'i');
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$1;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!element) throw new Error('element for Fileinput is null');
        var name = "__".concat(NAME$4, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new FileInput(element, config);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config, value) {
        var retval;
        var reteach = this.each(function () {
          if (!Util.matches(this, 'input[type=file]')) return;
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$5);

          var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$1), $this.data()), _typeof(config) === 'object' && config ? config : {});

          if (!data) {
            data = FileInput.getInstance(this, _config);
            $this.data(DATA_KEY$5, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            retval = data[config](value);
          }
        });
        return typeof retval !== 'undefined' ? retval : reteach;
      }
    }]);

    return FileInput;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof jQuery !== 'undefined') {
    var $$4 = window.jQuery;
    var JQUERY_NO_CONFLICT$2 = $$4.fn[NAME$4];
    $$4.fn[NAME$4] = FileInput._jQueryInterface;
    $$4.fn[NAME$4].Constructor = FileInput;

    $$4.fn[NAME$4].noConflict = function () {
      $$4.fn[NAME$4] = JQUERY_NO_CONFLICT$2;
      return FileInput._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'aceWysiwyg';
  var VERSION$4 = '4.0.0';
  var DATA_KEY$4 = 'ace.wysiwyg';
  var DefaultType = {
    wysiwyg: 'object',
    colors: 'array',
    // speech: 'boolean',
    toolbar: 'array',
    toolbarPlacement: '(function|null)',
    toolbarStyle: '(string|number)'
  };
  var Default = {
    wysiwyg: {},
    // speech: true,
    toolbarPlacement: null,
    toolbarStyle: '',
    colors: ['#000000', '#424242', '#636363', '#9c9c94', '#cec6ce', '#efefef', '#f7f7f7', '#ffffff', '#ff0000', '#ff9c00', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#9c00ff', '#ff00ff', '#f7c6ce', '#ffe7ce', '#ffefc6', '#d6efd6', '#cedee7', '#cee7f7', '#d6d6e7', '#e7d6de', '#e79c9c', '#ffc69c', '#ffe79c', '#b5d6a5', '#a5c6ce', '#9cc6ef', '#b5a5d6', '#d6a5bd', '#e76363', '#f7ad6b', '#ffd663', '#94bd7b', '#73a5ad', '#6badde', '#8c7bc6', '#c67ba5', '#ce0000', '#e79439', '#efc631', '#6ba54a', '#4a7b8c', '#3984c6', '#634aa5', '#a54a7b', '#9c0000', '#b56308', '#bd9400', '#397b21', '#104a5a', '#085294', '#311873', '#731842', '#630000', '#7b3900', '#846300', '#295218', '#083139', '#003163', '#21104a', '#4a1031'],
    toolbar: ['font', null, 'fontSize', null, 'bold', 'italic', 'strikethrough', 'underline', null, 'insertunorderedlist', 'insertorderedlist', 'outdent', 'indent', null, 'justifyleft', 'justifycenter', 'justifyright', 'justifyfull', null, 'createLink', 'unlink', null, 'insertImage', null, 'foreColor', null, 'undo', 'redo', null, 'viewSource']
  };

  var Wysiwyg = /*#__PURE__*/function () {
    function Wysiwyg(element, config) {
      _classCallCheck(this, Wysiwyg);

      this._element = element;
      this._config = this._getConfig(config);
      this.initEditor();
    }

    _createClass(Wysiwyg, [{
      key: "initEditor",
      value: function initEditor() {
        var toolbarHtml = this._createToolbarHtml();

        var toolbar; // if we have a function to decide where to put the toolbar, then call that

        if (this._config.toolbarPlacement) toolbar = this._config.toolbarPlacement.call(this._element, toolbarHtml);else toolbar = $__default['default'](this._element).before(toolbarHtml).prev(); // otherwise put it just before our DIV

        if (this._config.toolbarStyle) toolbar.addClass('bsw-toolbar-style-' + this._config.toolbarStyle); // enable tooltips

        if ($__default['default'].fn.tooltip) toolbar.find('a[title]').tooltip({
          animation: false,
          container: 'body'
        });
        toolbar.find('.dropdown-menu input[type=text]').on('click', function () {
          return false;
        }).on('change', function () {
          $__default['default'](this).closest('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
        }).on('keydown', function (e) {
          if (e.which === 27) {
            this.value = ''; // $(this).change()
          } else if (e.which === 13) {
            e.preventDefault();
            e.stopPropagation(); // $(this).change()
          }
        });
        toolbar.find('input[type=file]').prev().on('click', function (e) {// $(this).next().click()
        });
        var self = $__default['default'](this._element); // view source

        var viewSource = false;
        toolbar.find('a[data-toggle=source]').on('click', function (e) {
          e.preventDefault();

          if (!viewSource) {
            $__default['default']('<textarea />').css({
              width: self.outerWidth(),
              height: self.outerHeight()
            }).val(self.html()).insertAfter(self);
            self.addClass('d-none');
            $__default['default'](this).addClass('active');
          } else {
            var textarea = self.next();
            self.html(textarea.val()).removeClass('d-none');
            textarea.remove();
            $__default['default'](this).removeClass('active');
          }

          viewSource = !viewSource;
        }); // initiate wysiwyg plugin

        var $options = $__default['default'].extend({}, {
          activeToolbarClass: 'active',
          toolbarSelector: toolbar
        }, this._config.wysiwyg || {});
        $__default['default'](this._element).wysiwyg($options);

        this._handleImages();
      }
    }, {
      key: "_createToolbarHtml",
      value: function _createToolbarHtml() {
        var _buttonDefaults = {
          font: {
            values: ['Arial', 'Courier', 'Comic Sans MS', 'Helvetica', 'Open Sans', 'Tahoma', 'Verdana'],
            icon: 'fa fa-font text-secondary',
            title: 'Font'
          },
          fontSize: {
            values: {
              5: 'Huge',
              3: 'Normal',
              1: 'Small'
            },
            icon: 'fa fa-text-height text-secondary',
            title: 'Font Size'
          },
          bold: {
            icon: 'fa fa-bold text-secondary',
            title: 'Bold (Ctrl/Cmd+B)'
          },
          italic: {
            icon: 'fa fa-italic text-secondary',
            title: 'Italic (Ctrl/Cmd+I)'
          },
          strikethrough: {
            icon: 'fa fa-strikethrough text-secondary',
            title: 'Strikethrough'
          },
          underline: {
            icon: 'fa fa-underline text-secondary',
            title: 'Underline'
          },
          insertunorderedlist: {
            icon: 'fa fa-list-ul text-secondary',
            title: 'Bullet list'
          },
          insertorderedlist: {
            icon: 'fa fa-list-ol text-secondary',
            title: 'Number list'
          },
          outdent: {
            icon: 'fa fa-outdent text-secondary',
            title: 'Reduce indent (Shift+Tab)'
          },
          indent: {
            icon: 'fa fa-indent text-secondary',
            title: 'Indent (Tab)'
          },
          justifyleft: {
            icon: 'fa fa-align-left text-secondary',
            title: 'Align Left (Ctrl/Cmd+L)'
          },
          justifycenter: {
            icon: 'fa fa-align-center text-secondary',
            title: 'Center (Ctrl/Cmd+E)'
          },
          justifyright: {
            icon: 'fa fa-align-right text-secondary',
            title: 'Align Right (Ctrl/Cmd+R)'
          },
          justifyfull: {
            icon: 'fa fa-align-justify text-secondary',
            title: 'Justify (Ctrl/Cmd+J)'
          },
          createLink: {
            icon: 'fa fa-link text-secondary',
            title: 'Hyperlink',
            button_text: 'Add',
            placeholder: 'URL',
            button_class: 'btn-light-primary'
          },
          unlink: {
            icon: 'fa fa-unlink text-secondary',
            title: 'Remove Hyperlink'
          },
          insertImage: {
            icon: 'fa fa-image text-secondary',
            title: 'Insert picture',
            button_text: '<i class="far fa-file mr-1"></i> Choose an Image &hellip;',
            placeholder: 'Remote Image URL',
            button_insert: 'Insert',
            button_class: 'btn-light-success',
            button_insert_class: 'btn-light-primary',
            choose_file: true // show the choose file button?

          },
          foreColor: {
            icon: 'fas fa-eye-dropper text-pink-m1',
            values: this._config.colors,
            title: 'Foreground Color'
          },
          backColor: {
            icon: 'fas fa-fill-drip text-secondary',
            values: this._config.colors,
            title: 'Background Color'
          },
          removeFormat: {
            icon: 'fa fa-eraser text-secondary',
            title: 'Remove Format'
          },
          undo: {
            icon: 'fa fa-undo text-secondary',
            title: 'Undo (Ctrl/Cmd+Z)'
          },
          redo: {
            icon: 'fa fa-redo text-secondary',
            title: 'Redo (Ctrl/Cmd+Y)'
          },
          viewSource: {
            icon: 'fa fa-code text-secondary',
            title: 'View Source'
          }
        };
        var toolbarButtons = this._config.toolbar;
        var toolbarHtml = ' <div class="bootstrap-wysiwyg-toolbar btn-toolbar text-center"> <div class="btn-group mb-2px"> ';

        for (var tb in toolbarButtons) {
          if (Object.prototype.hasOwnProperty.call(toolbarButtons, tb)) {
            var button = toolbarButtons[tb];

            if (button === null) {
              toolbarHtml += ' </div> <div class="btn-group mb-2px"> ';
              continue;
            }

            if (typeof button === 'string' && button in _buttonDefaults) {
              button = _buttonDefaults[button];
              button.name = toolbarButtons[tb];
            } else if (_typeof(button) === 'object' && button.name in _buttonDefaults) {
              button = $__default['default'].extend(_buttonDefaults[button.name], button);
            } else continue;

            var className = 'className' in button ? button.className : 'btn-sm btn-outline-secondary btn-h-light-dark btn-a-light-dark';

            switch (button.name) {
              case 'font':
                toolbarHtml += " <a class=\"btn btn-sm ".concat(className, " dropdown-toggle\" data-toggle=\"dropdown\" title=\"").concat(button.title, "\"><i class=\"").concat(button.icon, "\">").concat(button.iconText || '', "</i><i class=\"fa fa-angle-down ml-1 text-secondary-m2\"></i></a> ");
                toolbarHtml += ' <div class="dropdown-menu radius-1 brc-secondary-m4">';

                for (var font in button.values) {
                  if (Object.prototype.hasOwnProperty.call(button.values, font)) {
                    toolbarHtml += " <div class=\"dropdown-item\"><a data-edit=\"fontName ".concat(button.values[font], "\" style=\"font-family:'").concat(button.values[font], "'\">").concat(button.values[font], "</a></div> ");
                  }
                }

                toolbarHtml += ' </div>';
                break;

              case 'fontSize':
                toolbarHtml += " <a class=\"btn btn-sm ".concat(className, " dropdown-toggle\" data-toggle=\"dropdown\" title=\"").concat(button.title, "\"><i class=\"").concat(button.icon, "\">").concat(button.iconText || '', "</i>&nbsp;<i class=\"fa fa-angle-down ml-1 text-secondary-m2\"></i></a> ");
                toolbarHtml += ' <div class="dropdown-menu radius-1 brc-secondary-m4"> ';

                for (var size in button.values) {
                  if (Object.prototype.hasOwnProperty.call(button.values, size)) {
                    toolbarHtml += " <div class=\"dropdown-item\"><a data-edit=\"fontSize ".concat(size, "\"><font size=\"").concat(size, "\">").concat(button.values[size], "</font></a></div> ");
                  }
                }

                toolbarHtml += ' </div> ';
                break;

              case 'createLink':
                toolbarHtml += " <div class=\"btn-group\"> <a class=\"btn btn-sm ".concat(className, " dropdown-toggle\" data-toggle=\"dropdown\" title=\"").concat(button.title, "\"><i class=\"").concat(button.icon, "\">").concat(button.iconText || '', "</i></a> ");
                toolbarHtml += " <div class=\"dropdown-menu py-1 px-3 brc-default-m3 border-2 radius-1 shadow-sm\" style=\"min-width: 300px;\">\n\t\t\t\t\t\t <div class=\"input-group my-3\">\n\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"".concat(button.placeholder, "\" type=\"text\" data-edit=\"").concat(button.name, "\" />\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-sm ").concat(button.button_class, "\" type=\"button\">").concat(button.button_text, "</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</div> </div>");
                break;

              case 'insertImage':
                toolbarHtml += " <div class=\"btn-group\"> <a class=\"btn btn-sm ".concat(className, " dropdown-toggle\" data-toggle=\"dropdown\" title=\"").concat(button.title, "\"><i class=\"").concat(button.icon, "\">").concat(button.iconText || '', "</i></a> ");
                toolbarHtml += ' <div class="dropdown-menu p-3 brc-default-m3 border-2 radius-1 shadow-sm" style="min-width: 300px;">';

                if (button.choose_file && 'FileReader' in window) {
                  toolbarHtml += "<div class=\"text-secondary-d1\">Drag &amp; drop images into editor or</div>\n\t\t\t\t\t\t   <label class=\"text-center d-block mt-3 mb-0\">\n\t\t\t\t\t\t\t<button class=\"btn btn-sm ".concat(button.button_class, " wysiwyg-choose-file\" type=\"button\">").concat(button.button_text, "</button>\n\t\t\t\t\t\t\t<input type=\"file\" class=\"file-input-invisible\" data-edit=\"").concat(button.name, "\" />\n\t\t\t\t\t\t   </label><hr /> ");
                }

                toolbarHtml += "<div class=\"input-group my-3\">\n\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"".concat(button.placeholder, "\" type=\"text\" data-edit=\"").concat(button.name, "\" />\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-sm ").concat(button.button_insert_class, "\" type=\"button\">").concat(button.button_insert, "</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t </div>");
                toolbarHtml += ' </div> </div>';
                break;

              case 'foreColor':
              case 'backColor':
                toolbarHtml += "<div class=\"mr-1px\"><a class=\"btn btn-sm ".concat(className, " dropdown-toggle\" data-toggle=\"dropdown\" title=\"").concat(button.title, "\"><i class=\"").concat(button.icon, "\">").concat(button.iconText || '', "</i></a> ");
                toolbarHtml += ' <div class="dropdown-menu p-1 brc-secondary-m4 border-1 radius-1" style="min-width:auto;width:10.66rem;"><div class="d-flex flex-wrap">';

                for (var color in button.values) {
                  if (Object.prototype.hasOwnProperty.call(button.values, color)) {
                    toolbarHtml += " <div class=\"dropdown-item m-0 p-0 d-inline-block w-auto\"><a class=\"p-0 dh-zoom-3\" role=\"button\" data-edit=\"".concat(button.name, " ").concat(button.values[color], "\" style=\"width:1.25rem;height:1.25rem;background-color:").concat(button.values[color], ";\"></a></div> ");
                  }
                }

                toolbarHtml += ' </div></div></div>';
                break;

              case 'viewSource':
                toolbarHtml += " <a class=\"btn btn-sm ".concat(className, "\" data-toggle=\"source\" title=\"").concat(button.title, "\"><i class=\"").concat(button.icon, "\">").concat(button.iconText || '', "</i></a> ");
                break;

              default:
                toolbarHtml += " <a class=\"btn btn-sm ".concat(className, "\" data-edit=\"").concat(button.name, "\" title=\"").concat(button.title, "\"><i class=\"").concat(button.icon, "\">").concat(button.iconText || '', "</i></a> ");
                break;
            }
          }
        }

        toolbarHtml += ' </div> '; // for .btn-group
        // var speech_input;
        // if (this._config.speech && 'onwebkitspeechchange' in (speech_input = document.createElement('input'))) {
        // toolbarHtml += ' <input class="wysiwyg-speech-input" type="text" data-edit="inserttext" x-webkit-speech />';
        // }
        // speech_input = null;
        /// /////////

        toolbarHtml += ' </div> '; // for .btn-toolbar

        return toolbarHtml;
      }
    }, {
      key: "_handleImages",
      value: function _handleImages() {
        // option for resizing an image
        var currentImg = null;
        $__default['default'](this._element).on('click', 'img', function (ev) {
          if (currentImg) $__default['default'](currentImg).popover('dispose');
          currentImg = this;
          if (!$__default['default'](currentImg).data('original-width')) $__default['default'](currentImg).data('original-width', currentImg.width);
          $__default['default'](currentImg).popover({
            container: 'body',
            html: true,
            placement: function placement(popover) {
              var offset = currentImg.getBoundingClientRect();
              var scrollTop = document.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
              $__default['default'](popover).addClass('popover-wysiwyg-image shadow brc-secondary-m4').css({
                'margin-left': offset.left + 4 + 'px',
                'margin-top': offset.top + scrollTop + 4 + 'px'
              });
              return 'auto';
            },
            title: 'Image Size & Position',
            trigger: 'manual',
            content: function content() {
              return $__default['default']("<div class='btn-group'>\n\t\t\t\t\t\t\t\t<button type='button' class='btn btn-xs btn-outline-default' data-action='resize' data-value='0.25'>25%</button>\n\t\t\t\t\t\t\t\t<button type='button' class='btn btn-xs btn-outline-default' data-action='resize' data-value='0.50'>50%</button>\n\t\t\t\t\t\t\t\t<button type='button' class='btn btn-xs btn-outline-default' data-action='resize' data-value='1'>100%</button>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <input type='number' class='form-control d-inline-block form-control-sm' data-action='resize' style='max-width: 96px;' placeholder='specify width' value='".concat(currentImg.width, "' />\n\t\t\t\t\t\t\t  <hr class='my-2' />\n\t\t\t\t\t\t\t  <div class='btn-group'>\n\t\t\t\t\t\t\t\t<button type='button' class='btn btn-xs btn-outline-secondary' data-action='align' data-value='left'>left</button>\n\t\t\t\t\t\t\t\t<button type='button' class='btn btn-xs btn-outline-secondary' data-action='align' data-value='right'>right</button>\n\t\t\t\t\t\t\t\t<button type='button' class='btn btn-xs btn-outline-secondary' data-action='align' data-value='none'>none</button>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class='btn-group float-right'>\n\t\t\t\t\t\t\t\t<button type='button' tooltip='Remove image' class='btn btn-sm btn-danger border-2 radius-round' data-action='remove'><i class='fa fa-trash-alt text-red'></i></button>\n\t\t\t\t\t\t\t </div>"));
            }
          }).popover('show');
          $__default['default'](document).on('click.popover-wysiwyg-image', function (ev) {
            if (ev.target === currentImg) return;

            if ($__default['default'](ev.target).closest('.popover-wysiwyg-image').length > 0) {
              return;
            }

            if (currentImg) $__default['default'](currentImg).popover('hide');
            currentImg = null;
            $__default['default'](document).off('click.popover-wysiwyg-image');
          });
        });
        $__default['default'](document).on('click', '.popover-wysiwyg-image button.btn', function () {
          if (!currentImg) return;
          var action = $__default['default'](this).data('action');
          var value = $__default['default'](this).data('value');

          if (action === 'resize') {
            var width = parseInt($__default['default'](currentImg).data('original-width') * value);
            $__default['default'](currentImg).css({
              width: width
            });
            $__default['default']('.popover-wysiwyg-image input[type=number]').val(width);
          }

          if (action === 'align') $__default['default'](currentImg).attr('class', 'float-' + value);else if (action === 'remove') {
            $__default['default'](currentImg).popover('dispose').remove(); // fadeOut(200, function() { $(this).remove() });

            currentImg = null;
          }
        });
        $__default['default'](document).on('change', '.popover-wysiwyg-image input[type=number]', function () {
          if (currentImg) $__default['default'](currentImg).css({
            width: $__default['default'](this).val() + 'px'
          });
        }); /// //////////////
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default), _typeof(config) === 'object' && config ? config : {});

        if (typeof bootstrap__default['default'] !== 'undefined') {
          bootstrap__default['default'].Util.typeCheckConfig(NAME$3, config, this.constructor.DefaultType);
        }

        return config;
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!element) throw new Error('element for Wysiwyg is null');
        var name = "__".concat(NAME$3, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new Wysiwyg(element, config);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $__default['default'](this);
          var data = $this.data(DATA_KEY$4);

          var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default), $this.data()), _typeof(config) === 'object' && config ? config : {});

          if (!data) {
            data = Wysiwyg.getInstance(this, _config);
            $this.data(DATA_KEY$4, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Wysiwyg;
  }();

  if (typeof $__default['default'] !== 'undefined') {
    var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$3];
    $__default['default'].fn[NAME$3] = Wysiwyg._jQueryInterface;
    $__default['default'].fn[NAME$3].Constructor = Wysiwyg;

    $__default['default'].fn[NAME$3].noConflict = function () {
      $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$1;
      return Wysiwyg._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME1 = 'aceTabScroll';
  var NAME2 = 'aceTabLinkScroll';
  var VERSION$3 = '4.0.0';
  var DATA_KEY$3 = 'ace.tabscroll';
  var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
  var DATA_API_KEY$3 = '.data-api';
  var Event$3 = {
    LOAD_DATA_API: "load".concat(EVENT_KEY$3).concat(DATA_API_KEY$3)
  };
  var Selector$3 = {
    TAB_SCROLL: '.nav-tabs-scroll',
    ACTIVE: '.active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definitions
   * ------------------------------------------------------------------------
   */

  var NavTabScroller = /*#__PURE__*/function () {
    function NavTabScroller(element) {
      _classCallCheck(this, NavTabScroller);

      this._element = element;
      this._firefox = 'MozAppearance' in document.documentElement.style;

      this._init();
    }

    _createClass(NavTabScroller, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        // scroll to active element on page load
        var active = this._element.querySelector(Selector$3.ACTIVE);

        if (active) {
          var navLinkScroll = NavLinkScroller.getInstance(active);

          if (!this._firefox) {
            navLinkScroll._scrollIntoView(false);
          } else {
            // still firefox doesn't scroll back to `zero` on page load!
            setTimeout(function () {
              _this._element.scrollLeft = 1;

              navLinkScroll._scrollIntoView(false);
            }, 500);
          }
        }

        this.enable();
      }
    }, {
      key: "enable",
      value: function enable() {
        this._element.addEventListener('click', function (ev) {
          var navLink = Util.closest(ev.target, 'a');
          if (!navLink) return;
          NavLinkScroller.scrollIntoView(navLink);
        });
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        if (!element) throw new TypeError('element for NavTabScroller is null');
        var name = "__".concat(NAME1, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new NavTabScroller(element);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$3);

          if (!data) {
            data = NavTabScroller.getInstance(this);
            $this.data(DATA_KEY$3, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return NavTabScroller;
  }(); // scroll a link into view (horizontal tabs/links)


  var NavLinkScroller = /*#__PURE__*/function () {
    function NavLinkScroller(element) {
      _classCallCheck(this, NavLinkScroller);

      this._element = element;
      this._firefox = 'MozAppearance' in document.documentElement.style;
    }

    _createClass(NavLinkScroller, [{
      key: "_scrollIntoView",
      value: // scroll tab button elements into view when clicked
      function _scrollIntoView() {
        var smooth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var li = this._element.parentNode;
        var nav = li.parentNode;
        var navClientWidth = nav.clientWidth;
        var navScrollWidth = nav.scrollWidth;
        if (navScrollWidth <= navClientWidth) return; // don't scroll if not needed

        var isRTL = Util.isRTL(); // scroll to this element (center it)

        var _scrollLeft;

        if (!isRTL) {
          _scrollLeft = li.offsetLeft - (navClientWidth - li.clientWidth) / 2;
        } else {
          // firefox and webkit have different ways of dealing with scrolling right/left and offsets in RTL mode
          if (!this._firefox) {
            _scrollLeft = navScrollWidth - navClientWidth + li.offsetLeft - (navClientWidth - li.clientWidth) / 2;
          } else {
            _scrollLeft = li.offsetLeft - (navClientWidth - li.clientWidth) / 2;
          }
        }

        _scrollLeft = _scrollLeft | 0; // convert FLOAT to INT

        smooth = !Util.isReducedMotion() && smooth === true;

        try {
          nav.scrollTo({
            top: 0,
            left: _scrollLeft,
            behavior: smooth ? 'smooth' : 'auto'
          }); // firefox needs extra push when scrolling back

          if (this._firefox && _scrollLeft < nav.scrollLeft) {
            setTimeout(function () {
              nav.scrollTo({
                top: 0,
                left: _scrollLeft,
                behavior: smooth ? 'smooth' : 'auto'
              });
            }, 0);
          }
        } catch (e) {
          nav.scrollLeft = _scrollLeft;
        }
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$3);

          if (!data) {
            data = NavLinkScroller.getInstance(this);
            $this.data(DATA_KEY$3, data);

            data._scrollIntoView();
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        if (!element) throw new Error('element for NavLinkScroller is null');
        var name = "__".concat(NAME2, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new NavLinkScroller(element);
        return element[name];
      }
    }, {
      key: "scrollIntoView",
      value: function scrollIntoView(element) {
        var instance = NavLinkScroller.getInstance(element);
        if (instance) instance._scrollIntoView();
      }
    }]);

    return NavLinkScroller;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof window.jQuery !== 'undefined') {
    var $$3 = window.jQuery;
    $$3(window).on(Event$3.LOAD_DATA_API, function () {
      var scrollableNavTabs = document.querySelectorAll(Selector$3.TAB_SCROLL);

      for (var i = 0; i < scrollableNavTabs.length; i++) {
        var $tabscroll = $$3(scrollableNavTabs[i]);

        NavTabScroller._jQueryInterface.call($tabscroll);
      }
    });
    var JQUERY_NO_CONFLICT1$2 = $$3.fn[NAME1];
    $$3.fn[NAME1] = NavTabScroller._jQueryInterface;
    $$3.fn[NAME1].Constructor = NavTabScroller;

    $$3.fn[NAME1].noConflict = function () {
      $$3.fn[NAME1] = JQUERY_NO_CONFLICT1$2;
      return NavTabScroller._jQueryInterface;
    };

    var JQUERY_NO_CONFLICT2 = $$3.fn[NAME2];
    $$3.fn[NAME2] = NavLinkScroller._jQueryInterface;
    $$3.fn[NAME2].Constructor = NavLinkScroller;

    $$3.fn[NAME2].noConflict = function () {
      $$3.fn[NAME2] = JQUERY_NO_CONFLICT2;
      return NavLinkScroller._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'aceTabSwipe';
  var VERSION$2 = '4.0.0';
  var DATA_KEY$2 = 'ace.tabswipe';
  var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
  var DATA_API_KEY$2 = '.data-api';
  var Event$2 = {
    START: "start".concat(EVENT_KEY$2),
    STARTED: "started".concat(EVENT_KEY$2),
    END: "end".concat(EVENT_KEY$2),
    LOAD_DATA_API: "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$2)
  };
  var Selector$2 = {
    TAB_SWIPE: '.tab-sliding:not([data-swipe="none"])',
    ACTIVE: '.active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var TabSwipe = /*#__PURE__*/function () {
    function TabSwipe(element) {
      _classCallCheck(this, TabSwipe);

      this._element = element;
      this._firefox = 'MozAppearance' in document.documentElement.style;
      this._jQueryBS = typeof window.jQuery !== 'undefined' && typeof window.bootstrap !== 'undefined';

      this._init();
    }

    _createClass(TabSwipe, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        this._element.addEventListener('touchstart', function (ev) {
          var pane = Util.closest(ev.target, '.tab-pane');
          if (!pane || !pane.classList.contains('active')) return;
          var e = EventHandler.trigger(_this._element, Event$2.START);
          if (e.defaultPrevented) return;

          _this._startPaneSwipe(ev, pane);

          EventHandler.trigger(_this._element, Event$2.STARTED);
        });
      }
    }, {
      key: "_startPaneSwipe",
      value: function _startPaneSwipe(ev, pane) {
        var _this2 = this;

        var curPane = pane;
        var isRTL = Util.isRTL();
        var initialTransform = !isRTL ? 'translateX(100%)' : 'translateX(-100%)';
        var touches = ev.changedTouches[0];
        var swipeDir = 0;
        var x1 = touches.pageX;
        var y1 = touches.pageY;
        var t1 = Date.now();
        var lastX = 0;
        var curDir = 0;
        var paneWidth = curPane.clientWidth;
        var siblingPane = null;
        var allowedDir = this._element.getAttribute('data-swipe') || null;

        var paneTouchMoveCallback = function paneTouchMoveCallback(ev) {
          var touches = ev.changedTouches[0];
          var newX = touches.pageX;
          var newY = touches.pageY;
          lastX = newX;

          if (swipeDir === 0) {
            var diffY = Math.abs(y1 - newY);
            var diffX = Math.abs(x1 - newX);

            if (diffY > diffX) {
              swipeDir = 2; // vertical i.e. scroll

              _dismiss();
            } else if (diffX > 10) {
              swipeDir = 1; // horizontal swipe
            }
          }

          if (swipeDir !== 1) return; // return if not horizontal swipe

          var moveX = parseInt(x1 - newX);
          var newDir = 0;
          if ((allowedDir === null || allowedDir === 'left') && (!isRTL && moveX > 0 || isRTL && moveX < 0)) newDir = 1;else if ((allowedDir === null || allowedDir === 'right') && (!isRTL && moveX < 0 || isRTL && moveX > 0)) newDir = -1;

          if (newDir !== 0 && newDir !== curDir) {
            if (siblingPane !== null) _reset(siblingPane); // undo previous direction for when we change swipe direction before a touchend

            curDir = newDir;
            var targetPane = curPane.getAttribute('data-swipe-' + (curDir === 1 ? 'next' : 'prev'));
            if (targetPane) targetPane = document.querySelector(targetPane);else {
              // this is set in angular directive, so we can specify custom next/prev swipe tabs from angular as well
              targetPane = curPane["__ace_swipe_".concat(curDir === 1 ? 'next' : 'prev', "_pane__")] || null;
            }
            siblingPane = targetPane || (curDir === 1 ? curPane.nextElementSibling : curPane.previousElementSibling);

            if (siblingPane === null || siblingPane === curPane) {
              curDir = 0;
            } else {
              curPane.classList.add('tab-swiping');
              siblingPane.classList.add('tab-swiping');
            }
          }

          var moveXabs = Math.abs(moveX);

          if (curDir !== 0 && moveXabs < paneWidth + 24) {
            // don't move more than 24px beyond its size
            curPane.style.transform = initialTransform + ' translateX(' + -1 * moveX + 'px)';
            siblingPane.style.transform = 'translateX(' + -1 * moveX + 'px)';
          } else if (curDir === 0 && moveXabs < 24) {
            curPane.style.transform = initialTransform + ' translateX(' + -1 * moveX + 'px)';
          }
        };

        var paneTouchEndCallback = function paneTouchEndCallback(ev) {
          var touches = ev.changedTouches[0] || null;
          var x2 = touches !== null ? touches.pageX : lastX;
          var t2 = Date.now();
          var diff = Math.abs(x2 - x1);

          _dismiss();

          if (curDir !== 0 && swipeDir === 1 && (diff > paneWidth / 4 || diff > 100 || diff > paneWidth / 6 && t2 - t1 < 300)) {
            // if moved more than 1/4 of its width or 100px or 1/6 in less than 300ms
            EventHandler.trigger(_this2._element, Event$2.END, {
              swipeDirection: curDir
            });

            if (_this2._jQueryBS) {
              siblingPane.classList.add('active', 'show');
              curPane.classList.remove('active', 'show');
              var id1 = curPane.id;
              var id2 = siblingPane.id;
              document.querySelectorAll('[href="#' + id1 + '"],[data-target="#' + id1 + '"]').forEach(function (a) {
                a.classList.remove('active');
                a.setAttribute('aria-selected', 'false');
              });
              var newActive = document.querySelectorAll('[href="#' + id2 + '"],[data-target="#' + id2 + '"]');
              newActive.forEach(function (a) {
                a.classList.add('active');
                a.setAttribute('aria-selected', 'true');
              });

              if (newActive.length > 0) {
                try {
                  /* global AceApp */
                  var navLinkScroll = AceApp.NavLinkScroller.getInstance(newActive[0]);

                  navLinkScroll._scrollIntoView();
                } catch (err) {}
              }
            }
          }
        };

        var _dismiss = function _dismiss() {
          curPane.removeEventListener('touchmove', paneTouchMoveCallback);
          curPane.removeEventListener('touchend', paneTouchEndCallback);
          curPane.removeEventListener('touchcancel', paneTouchEndCallback);
          curPane.style.transform = '';
          curPane.classList.remove('tab-swiping');

          if (siblingPane) {
            siblingPane.style.transform = '';
            siblingPane.classList.remove('tab-swiping');
          }
        };

        var _reset = function _reset(sibling) {
          sibling.style.transform = '';
          sibling.style.transitionDuration = '0ms'; // so when we quickly and frequently swipe left/right without a `touchend`, the other pane moves away (disappears) instantly

          sibling.classList.remove('tab-swiping');
          sibling.offsetHeight;
          sibling.style.transitionDuration = '';
        };

        pane.addEventListener('touchmove', paneTouchMoveCallback);
        pane.addEventListener('touchend', paneTouchEndCallback);
        pane.addEventListener('touchcancel', paneTouchEndCallback);
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        if (!element) throw new Error('element for TabSwipe is null');
        var name = "__".concat(NAME$2, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new TabSwipe(element);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$2);

          if (!data) {
            data = TabSwipe.getInstance(this);
            $this.data(DATA_KEY$2, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return TabSwipe;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof window.jQuery !== 'undefined') {
    var $$2 = window.jQuery;
    $$2(window).on(Event$2.LOAD_DATA_API, function () {
      if (!('ontouchstart' in document.documentElement)) return;
      var swipeablePanes = document.querySelectorAll(Selector$2.TAB_SWIPE);

      for (var i = 0; i < swipeablePanes.length; i++) {
        var $tabswipe = $$2(swipeablePanes[i]);

        TabSwipe._jQueryInterface.call($tabswipe);
      }
    });
    var JQUERY_NO_CONFLICT = $$2.fn[NAME$2];
    $$2.fn[NAME$2] = TabSwipe._jQueryInterface;
    $$2.fn[NAME$2].Constructor = TabSwipe;

    $$2.fn[NAME$2].noConflict = function () {
      $$2.fn[NAME$2] = JQUERY_NO_CONFLICT;
      return TabSwipe._jQueryInterface;
    };
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'aceScrollTop';
  var VERSION$1 = '4.0.0';
  var DATA_KEY$1 = 'ace.scrolltop';
  var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
  var DATA_API_KEY$1 = '.data-api';
  var Event$1 = {
    LOAD_DATA_API: "load".concat(EVENT_KEY$1).concat(DATA_API_KEY$1)
  };
  var Selector$1 = {
    SCROLL_TOP_BTN: '.btn-scroll-up'
  };
  var CLASS_NAME_SHOW = 'scroll-btn-visible';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollTop = /*#__PURE__*/function () {
    function ScrollTop(element) {
      _classCallCheck(this, ScrollTop);

      this._element = element;

      this._init();
    }

    _createClass(ScrollTop, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        var _modernBrowser = ('IntersectionObserver' in window);

        this._element.addEventListener('click', function (ev) {
          ev.preventDefault();
          if (_modernBrowser) _this.hide();
          ScrollTop.scrollToTop();
        });

        if (!_modernBrowser) {
          // if browser doesn't support `IntersectionObserver`, always show the scroll to top button
          this.show();
        } else {
          var _scrollBtnObserve = document.createElement('DIV');

          _scrollBtnObserve.classList.add('scroll-btn-observe');

          document.body.appendChild(_scrollBtnObserve);
          var observer = new window.IntersectionObserver(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                entry = _ref2[0];

            var isObserverOut = entry.intersectionRatio < 1 && entry.boundingClientRect.bottom < 0;

            if (isObserverOut) {
              _this.show();
            } else {
              _this.hide();
            }
          }, {
            threshold: [1.0],
            delay: 100
          });
          observer.observe(_scrollBtnObserve);
        }
      }
    }, {
      key: "show",
      value: function show() {
        this._element.classList.add(CLASS_NAME_SHOW);
      }
    }, {
      key: "hide",
      value: function hide() {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }, {
      key: "scrollToTop",
      value: function scrollToTop() {
        var smooth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        // ScrollToOptions parameter may not be supported on some older browsers
        // so we use try/catch block in case of an error
        try {
          smooth = !Util.isReducedMotion() && smooth === true;
          window.scroll({
            top: 0,
            behavior: smooth ? 'smooth' : 'auto'
          });
        } catch (e) {
          window.scroll(0, 0);
        }
      } // Static methods

    }, {
      key: "getInstance",
      value: function getInstance(element) {
        if (!element) throw new Error('element for ScrollTop is null');
        var name = "__".concat(NAME$1, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new ScrollTop(element);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY$1);

          if (!data) {
            data = ScrollTop.getInstance(this);
            $this.data(DATA_KEY$1, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return ScrollTop;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  */


  if (typeof window.jQuery !== 'undefined') {
    var $$1 = window.jQuery;
    $$1(window).on(Event$1.LOAD_DATA_API, function () {
      var scrollTopTopBtn = document.querySelectorAll(Selector$1.SCROLL_TOP_BTN);

      for (var i = 0; i < scrollTopTopBtn.length; i++) {
        var $scrollTopBtn = $$1(scrollTopTopBtn[i]);

        ScrollTop._jQueryInterface.call($scrollTopBtn);
      }
    });
    var JQUERY_NO_CONFLICT1$1 = $$1.fn[NAME$1];
    $$1.fn[NAME$1] = ScrollTop._jQueryInterface;
    $$1.fn[NAME$1].Constructor = ScrollTop;

    $$1.fn[NAME$1].noConflict = function () {
      $$1.fn[NAME$1] = JQUERY_NO_CONFLICT1$1;
      return ScrollTop._jQueryInterface;
    };
  }

  /**
   * --------------------------------------------------------------------------
   * Ace (v4.0.0): sticky.js
     Trigger an event for sticky elements when they become stuck/unstuck
  */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'aceSticky';
  var VERSION = '4.0.0';
  var DATA_KEY = 'ace.sticky';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var Event = {
    LOAD_DATA_API: "load".concat(EVENT_KEY).concat(DATA_API_KEY)
  };
  var Selector = {
    STICKY: '[class*="sticky-nav"]'
  };
  /**
    * ------------------------------------------------------------------------
    * Class Definition
    * ------------------------------------------------------------------------
    */

  var Sticky = /*#__PURE__*/function () {
    function Sticky(element) {
      _classCallCheck(this, Sticky);

      this._element = element;

      this._init();
    }

    _createClass(Sticky, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        if (!window.IntersectionObserver) return;

        this._initObserver(); // add a dummy child to be observed
        // when it goes out of window it means .sticky-nav is sticky now
        // because dummy element is `top: -1px` or when below navbar it's `top : -1 * ($navbar-height + 1px)`;


        var observedChild = document.createElement(this._element.tagName === 'UL' ? 'LI' : 'DIV');
        observedChild.classList.add('sticky-trigger');

        this._element.insertBefore(observedChild, this._element.firstChild);

        Sticky._observer.observe(observedChild);

        setTimeout(function () {
          if (observedChild.getBoundingClientRect().bottom < 0) {
            var isSticky = true;

            if (isSticky && !_this._element.classList.contains('sticky-nav')) {
              var pos = window.getComputedStyle(_this._element).position;
              if (!(pos === 'sticky' || pos === '-webkit-sticky')) isSticky = false;
            }

            var evt = new window.CustomEvent('sticky-change', {
              detail: {
                isSticky: isSticky,
                initialCheck: true
              }
            });

            _this._element.dispatchEvent(evt);
          }
        }, 200);
      } /// /
      // we use it when a sticky element becomes stuck on top and 1 pixel of it goes out of view (because of top: -1px)
      // so IntersectionObserver is triggered with intersectionRatio < 1 and y < 0
      // then we trigger an event for it, so later we may for example change its classList to update styling

    }, {
      key: "_initObserver",
      value: function _initObserver() {
        if (Sticky._observer !== null) return;
        Sticky._observer = new window.IntersectionObserver(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              entry = _ref2[0];

          var isSticky = entry.intersectionRatio < 1 && entry.boundingClientRect.bottom < 0; // isSticky=true means we are at sticky position
          // so if our sticky element is for example 'sticky-nav-md' and we are at sticky position
          // but our window size is above 'md' and therefore CSS rule 'position: sticky' is not applied at all
          // so we check if we are really sticky or not

          var stickyNav = entry.target.parentElement; // entry.target is the `.sticky-trigger` and parentElement is the `.sticky-nav` element
          // check if `position` is actually `sticky` ... for example if we have `.sticky-nav-md`, it will be sticky only on small (md) devices

          if (isSticky && !stickyNav.classList.contains('sticky-nav')) {
            // don't check `.sticky-nav` element because it's sticky regardless of window size
            var pos = window.getComputedStyle(stickyNav).position;
            if (!(pos === 'sticky' || pos === '-webkit-sticky')) isSticky = false;
          }

          var evt = new window.CustomEvent('sticky-change', {
            detail: {
              isSticky: isSticky
            }
          });
          stickyNav.dispatchEvent(evt);
        }, {
          threshold: [1.0],
          delay: 100
        });
      } // Static methods

    }], [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        if (!element) throw new Error('element for Sticky is null');
        var name = "__".concat(NAME, "__");
        if (typeof element[name] !== 'undefined') return element[name];
        element[name] = new Sticky(element);
        return element[name];
      }
    }, {
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = window.jQuery(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = Sticky.getInstance(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Sticky;
  }();

  Sticky._observer = null; // static property

  /**
    * ------------------------------------------------------------------------
    * jQuery
    * ------------------------------------------------------------------------
   */

  if (typeof window.jQuery !== 'undefined') {
    var $ = window.jQuery;
    window.jQuery(window).on(Event.LOAD_DATA_API, function () {
      var stickyEl = document.querySelectorAll(Selector.STICKY);

      for (var i = 0; i < stickyEl.length; i++) {
        var $stickyEl = $(stickyEl[i]);

        Sticky._jQueryInterface.call($stickyEl);
      }
    });
    var JQUERY_NO_CONFLICT1 = $.fn[NAME];
    $.fn[NAME] = Sticky._jQueryInterface;
    $.fn[NAME].Constructor = Sticky;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT1;
      return Sticky._jQueryInterface;
    };
  }

  /**
   * --------------------------------------------------------------------------
   * Ace (v4.0.0): index.js
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Util: Util,
    EventHandler: EventHandler,
    Basic: Basic,
    Scrollbar: Scrollbar,
    Sidebar: Sidebar,
    Aside: Aside,
    Toaster: Toaster,
    Card: Card,
    FileInput: FileInput,
    Wysiwyg: Wysiwyg,
    NavTabScroller: NavTabScroller,
    NavLinkScroller: NavLinkScroller,
    TabSwipe: TabSwipe,
    ScrollTop: ScrollTop,
    Sticky: Sticky
  };

  return index_umd;

})));
//# sourceMappingURL=ace.js.map
