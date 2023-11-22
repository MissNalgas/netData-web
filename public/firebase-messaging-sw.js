(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FirebaseError", {
  enumerable: true,
  get: function get() {
    return _util.FirebaseError;
  }
});
exports._DEFAULT_ENTRY_NAME = exports.SDK_VERSION = void 0;
exports._addComponent = _addComponent;
exports._addOrOverwriteComponent = _addOrOverwriteComponent;
exports._apps = void 0;
exports._clearComponents = _clearComponents;
exports._components = void 0;
exports._getProvider = _getProvider;
exports._registerComponent = _registerComponent;
exports._removeServiceInstance = _removeServiceInstance;
exports.deleteApp = deleteApp;
exports.getApp = getApp;
exports.getApps = getApps;
exports.initializeApp = initializeApp;
exports.onLog = onLog;
exports.registerVersion = registerVersion;
exports.setLogLevel = setLogLevel;
var _component = require("@firebase/component");
var _logger = require("@firebase/logger");
var _util = require("@firebase/util");
var _idb = require("idb");
var _PLATFORM_LOG_STRING, _ERRORS;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerServiceImpl = /*#__PURE__*/function () {
  function PlatformLoggerServiceImpl(container) {
    _classCallCheck(this, PlatformLoggerServiceImpl);
    this.container = container;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  _createClass(PlatformLoggerServiceImpl, [{
    key: "getPlatformInfoString",
    value: function getPlatformInfoString() {
      var providers = this.container.getProviders();
      // Loop through providers and get library/version pairs from any that are
      // version components.
      return providers.map(function (provider) {
        if (isVersionServiceProvider(provider)) {
          var service = provider.getImmediate();
          return "".concat(service.library, "/").concat(service.version);
        } else {
          return null;
        }
      }).filter(function (logString) {
        return logString;
      }).join(' ');
    }
  }]);
  return PlatformLoggerServiceImpl;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
}

var name$o = "@firebase/app";
var version$1 = "0.9.23";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new _logger.Logger('@firebase/app');
var name$n = "@firebase/app-compat";
var name$m = "@firebase/analytics-compat";
var name$l = "@firebase/analytics";
var name$k = "@firebase/app-check-compat";
var name$j = "@firebase/app-check";
var name$i = "@firebase/auth";
var name$h = "@firebase/auth-compat";
var name$g = "@firebase/database";
var name$f = "@firebase/database-compat";
var name$e = "@firebase/functions";
var name$d = "@firebase/functions-compat";
var name$c = "@firebase/installations";
var name$b = "@firebase/installations-compat";
var name$a = "@firebase/messaging";
var name$9 = "@firebase/messaging-compat";
var name$8 = "@firebase/performance";
var name$7 = "@firebase/performance-compat";
var name$6 = "@firebase/remote-config";
var name$5 = "@firebase/remote-config-compat";
var name$4 = "@firebase/storage";
var name$3 = "@firebase/storage-compat";
var name$2 = "@firebase/firestore";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "10.6.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
var DEFAULT_ENTRY_NAME = exports._DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_PLATFORM_LOG_STRING = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_PLATFORM_LOG_STRING, name$o, 'fire-core'), name$n, 'fire-core-compat'), name$l, 'fire-analytics'), name$m, 'fire-analytics-compat'), name$j, 'fire-app-check'), name$k, 'fire-app-check-compat'), name$i, 'fire-auth'), name$h, 'fire-auth-compat'), name$g, 'fire-rtdb'), name$f, 'fire-rtdb-compat'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_PLATFORM_LOG_STRING, name$e, 'fire-fn'), name$d, 'fire-fn-compat'), name$c, 'fire-iid'), name$b, 'fire-iid-compat'), name$a, 'fire-fcm'), name$9, 'fire-fcm-compat'), name$8, 'fire-perf'), name$7, 'fire-perf-compat'), name$6, 'fire-rc'), name$5, 'fire-rc-compat'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_PLATFORM_LOG_STRING, name$4, 'fire-gcs'), name$3, 'fire-gcs-compat'), name$2, 'fire-fst'), name$1, 'fire-fst-compat'), 'fire-js', 'fire-js'), name, 'fire-js-all'));

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
var _apps = exports._apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _components = exports._components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
  }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
  app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
  var componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
    return false;
  }
  _components.set(componentName, component);
  // add the component to existing app instances
  var _iterator = _createForOfIteratorHelper(_apps.values()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var app = _step.value;
      _addComponent(app, component);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
  var heartbeatController = app.container.getProvider('heartbeat').getImmediate({
    optional: true
  });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name) {
  var instanceIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ENTRY_NAME;
  _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
  _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERRORS = (_ERRORS = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ERRORS, "no-app" /* AppError.NO_APP */, "No Firebase App '{$appName}' has been created - " + 'call initializeApp() first'), "bad-app-name" /* AppError.BAD_APP_NAME */, "Illegal App name: '{$appName}"), "duplicate-app" /* AppError.DUPLICATE_APP */, "Firebase App named '{$appName}' already exists with different options or config"), "app-deleted" /* AppError.APP_DELETED */, "Firebase App named '{$appName}' already deleted"), "no-options" /* AppError.NO_OPTIONS */, 'Need to provide options, when not being deployed to hosting via source.'), "invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */, 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.'), "invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */, 'First argument to `onLog` must be null or a function.'), "idb-open" /* AppError.IDB_OPEN */, 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.'), "idb-get" /* AppError.IDB_GET */, 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.'), "idb-set" /* AppError.IDB_WRITE */, 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.'), _defineProperty(_ERRORS, "idb-delete" /* AppError.IDB_DELETE */, 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'));
var ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = /*#__PURE__*/function () {
  function FirebaseAppImpl(options, config, container) {
    var _this = this;
    _classCallCheck(this, FirebaseAppImpl);
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new _component.Component('app', function () {
      return _this;
    }, "PUBLIC" /* ComponentType.PUBLIC */));
  }
  _createClass(FirebaseAppImpl, [{
    key: "automaticDataCollectionEnabled",
    get: function get() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    },
    set: function set(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
  }, {
    key: "name",
    get: function get() {
      this.checkDestroyed();
      return this._name;
    }
  }, {
    key: "options",
    get: function get() {
      this.checkDestroyed();
      return this._options;
    }
  }, {
    key: "config",
    get: function get() {
      this.checkDestroyed();
      return this._config;
    }
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }, {
    key: "isDeleted",
    get: function get() {
      return this._isDeleted;
    },
    set: function set(val) {
      this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
  }, {
    key: "checkDestroyed",
    value: function checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, {
          appName: this._name
        });
      }
    }
  }]);
  return FirebaseAppImpl;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
var SDK_VERSION = exports.SDK_VERSION = version;
function initializeApp(_options) {
  var rawConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = _options;
  if (_typeof(rawConfig) !== 'object') {
    var _name = rawConfig;
    rawConfig = {
      name: _name
    };
  }
  var config = Object.assign({
    name: DEFAULT_ENTRY_NAME,
    automaticDataCollectionEnabled: false
  }, rawConfig);
  var name = config.name;
  if (typeof name !== 'string' || !name) {
    throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
      appName: String(name)
    });
  }
  options || (options = (0, _util.getDefaultAppConfig)());
  if (!options) {
    throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
  }

  var existingApp = _apps.get(name);
  if (existingApp) {
    // return the existing app if options and config deep equal the ones in the existing app.
    if ((0, _util.deepEqual)(options, existingApp.options) && (0, _util.deepEqual)(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, {
        appName: name
      });
    }
  }
  var container = new _component.ComponentContainer(name);
  var _iterator2 = _createForOfIteratorHelper(_components.values()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var component = _step2.value;
      container.addComponent(component);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name, newApp);
  return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
  var app = _apps.get(name);
  if (!app && name === DEFAULT_ENTRY_NAME && (0, _util.getDefaultAppConfig)()) {
    return initializeApp();
  }
  if (!app) {
    throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, {
      appName: name
    });
  }
  return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
  return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
function deleteApp(_x) {
  return _deleteApp.apply(this, arguments);
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function _deleteApp() {
  _deleteApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(app) {
    var name;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          name = app.name;
          if (!_apps.has(name)) {
            _context7.next = 6;
            break;
          }
          _apps["delete"](name);
          _context7.next = 5;
          return Promise.all(app.container.getProviders().map(function (provider) {
            return provider["delete"]();
          }));
        case 5:
          app.isDeleted = true;
        case 6:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _deleteApp.apply(this, arguments);
}
function registerVersion(libraryKeyOrName, version, variant) {
  var _a;
  // TODO: We can use this check to whitelist strings when/if we set up
  // a good whitelist system.
  var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += "-".concat(variant);
  }
  var libraryMismatch = library.match(/\s|\//);
  var versionMismatch = version.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    var warning = ["Unable to register library \"".concat(library, "\" with version \"").concat(version, "\":")];
    if (libraryMismatch) {
      warning.push("library name \"".concat(library, "\" contains illegal characters (whitespace or \"/\")"));
    }
    if (libraryMismatch && versionMismatch) {
      warning.push('and');
    }
    if (versionMismatch) {
      warning.push("version name \"".concat(version, "\" contains illegal characters (whitespace or \"/\")"));
    }
    logger.warn(warning.join(' '));
    return;
  }
  _registerComponent(new _component.Component("".concat(library, "-version"), function () {
    return {
      library: library,
      version: version
    };
  }, "VERSION" /* ComponentType.VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
  if (logCallback !== null && typeof logCallback !== 'function') {
    throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
  }

  (0, _logger.setUserLogHandler)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
  (0, _logger.setLogLevel)(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DB_NAME = 'firebase-heartbeat-database';
var DB_VERSION = 1;
var STORE_NAME = 'firebase-heartbeat-store';
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0, _idb.openDB)(DB_NAME, DB_VERSION, {
      upgrade: function upgrade(db, oldVersion) {
        // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME);
        }
      }
    })["catch"](function (e) {
      throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
function readHeartbeatsFromIndexedDB(_x2) {
  return _readHeartbeatsFromIndexedDB.apply(this, arguments);
}
function _readHeartbeatsFromIndexedDB() {
  _readHeartbeatsFromIndexedDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(app) {
    var db, result, idbGetError;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return getDbPromise();
        case 3:
          db = _context8.sent;
          _context8.next = 6;
          return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
        case 6:
          result = _context8.sent;
          return _context8.abrupt("return", result);
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          if (_context8.t0 instanceof _util.FirebaseError) {
            logger.warn(_context8.t0.message);
          } else {
            idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
              originalErrorMessage: _context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.message
            });
            logger.warn(idbGetError.message);
          }
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return _readHeartbeatsFromIndexedDB.apply(this, arguments);
}
function writeHeartbeatsToIndexedDB(_x3, _x4) {
  return _writeHeartbeatsToIndexedDB.apply(this, arguments);
}
function _writeHeartbeatsToIndexedDB() {
  _writeHeartbeatsToIndexedDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(app, heartbeatObject) {
    var db, tx, objectStore, idbGetError;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return getDbPromise();
        case 3:
          db = _context9.sent;
          tx = db.transaction(STORE_NAME, 'readwrite');
          objectStore = tx.objectStore(STORE_NAME);
          _context9.next = 8;
          return objectStore.put(heartbeatObject, computeKey(app));
        case 8:
          _context9.next = 10;
          return tx.done;
        case 10:
          _context9.next = 15;
          break;
        case 12:
          _context9.prev = 12;
          _context9.t0 = _context9["catch"](0);
          if (_context9.t0 instanceof _util.FirebaseError) {
            logger.warn(_context9.t0.message);
          } else {
            idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
              originalErrorMessage: _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message
            });
            logger.warn(idbGetError.message);
          }
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 12]]);
  }));
  return _writeHeartbeatsToIndexedDB.apply(this, arguments);
}
function computeKey(app) {
  return "".concat(app.name, "!").concat(app.options.appId);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_HEADER_BYTES = 1024;
// 30 days
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
var HeartbeatServiceImpl = /*#__PURE__*/function () {
  function HeartbeatServiceImpl(container) {
    var _this2 = this;
    _classCallCheck(this, HeartbeatServiceImpl);
    this.container = container;
    /**
     * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
     * the header string.
     * Stores one record per date. This will be consolidated into the standard
     * format of one record per user agent string before being sent as a header.
     * Populated from indexedDB when the controller is instantiated and should
     * be kept in sync with indexedDB.
     * Leave public for easier testing.
     */
    this._heartbeatsCache = null;
    var app = this.container.getProvider('app').getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then(function (result) {
      _this2._heartbeatsCache = result;
      return result;
    });
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  _createClass(HeartbeatServiceImpl, [{
    key: "triggerHeartbeat",
    value: (function () {
      var _triggerHeartbeat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _a, platformLogger, agent, date;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              platformLogger = this.container.getProvider('platform-logger').getImmediate(); // This is the "Firebase user agent" string from the platform logger
              // service, not the browser user agent.
              agent = platformLogger.getPlatformInfoString();
              date = getUTCDateString();
              if (!(((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null)) {
                _context.next = 7;
                break;
              }
              _context.next = 6;
              return this._heartbeatsCachePromise;
            case 6:
              this._heartbeatsCache = _context.sent;
            case 7:
              if (!(this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(function (singleDateHeartbeat) {
                return singleDateHeartbeat.date === date;
              }))) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return");
            case 11:
              // There is no entry for this date. Create one.
              this._heartbeatsCache.heartbeats.push({
                date: date,
                agent: agent
              });
            case 12:
              // Remove entries older than 30 days.
              this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function (singleDateHeartbeat) {
                var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                var now = Date.now();
                return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
              });
              return _context.abrupt("return", this._storage.overwrite(this._heartbeatsCache));
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function triggerHeartbeat() {
        return _triggerHeartbeat.apply(this, arguments);
      }
      return triggerHeartbeat;
    }()
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    )
  }, {
    key: "getHeartbeatsHeader",
    value: (function () {
      var _getHeartbeatsHeader = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _a, date, _extractHeartbeatsFor, heartbeatsToSend, unsentEntries, headerString;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._heartbeatsCache === null)) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return this._heartbeatsCachePromise;
            case 3:
              if (!(((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", '');
            case 5:
              date = getUTCDateString(); // Extract as many heartbeats from the cache as will fit under the size limit.
              _extractHeartbeatsFor = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _extractHeartbeatsFor.heartbeatsToSend, unsentEntries = _extractHeartbeatsFor.unsentEntries;
              headerString = (0, _util.base64urlEncodeWithoutPadding)(JSON.stringify({
                version: 2,
                heartbeats: heartbeatsToSend
              })); // Store last sent date to prevent another being logged/sent for the same day.
              this._heartbeatsCache.lastSentHeartbeatDate = date;
              if (!(unsentEntries.length > 0)) {
                _context2.next = 15;
                break;
              }
              // Store any unsent entries if they exist.
              this._heartbeatsCache.heartbeats = unsentEntries;
              // This seems more likely than emptying the array (below) to lead to some odd state
              // since the cache isn't empty and this will be called again on the next request,
              // and is probably safest if we await it.
              _context2.next = 13;
              return this._storage.overwrite(this._heartbeatsCache);
            case 13:
              _context2.next = 17;
              break;
            case 15:
              this._heartbeatsCache.heartbeats = [];
              // Do not wait for this, to reduce latency.
              void this._storage.overwrite(this._heartbeatsCache);
            case 17:
              return _context2.abrupt("return", headerString);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getHeartbeatsHeader() {
        return _getHeartbeatsHeader.apply(this, arguments);
      }
      return getHeartbeatsHeader;
    }())
  }]);
  return HeartbeatServiceImpl;
}();
function getUTCDateString() {
  var today = new Date();
  // Returns date format 'YYYY-MM-DD'
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache) {
  var maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_HEADER_BYTES;
  // Heartbeats grouped by user agent in the standard format to be sent in
  // the header.
  var heartbeatsToSend = [];
  // Single date format heartbeats that are not sent.
  var unsentEntries = heartbeatsCache.slice();
  var _iterator3 = _createForOfIteratorHelper(heartbeatsCache),
    _step3;
  try {
    var _loop = function _loop() {
        var singleDateHeartbeat = _step3.value;
        // Look for an existing entry with the same user agent.
        var heartbeatEntry = heartbeatsToSend.find(function (hb) {
          return hb.agent === singleDateHeartbeat.agent;
        });
        if (!heartbeatEntry) {
          // If no entry for this user agent exists, create one.
          heartbeatsToSend.push({
            agent: singleDateHeartbeat.agent,
            dates: [singleDateHeartbeat.date]
          });
          if (countBytes(heartbeatsToSend) > maxSize) {
            // If the header would exceed max size, remove the added heartbeat
            // entry and stop adding to the header.
            heartbeatsToSend.pop();
            return 0; // break
          }
        } else {
          heartbeatEntry.dates.push(singleDateHeartbeat.date);
          // If the header would exceed max size, remove the added date
          // and stop adding to the header.
          if (countBytes(heartbeatsToSend) > maxSize) {
            heartbeatEntry.dates.pop();
            return 0; // break
          }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
      },
      _ret;
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _ret = _loop();
      if (_ret === 0) break;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return {
    heartbeatsToSend: heartbeatsToSend,
    unsentEntries: unsentEntries
  };
}
var HeartbeatStorageImpl = /*#__PURE__*/function () {
  function HeartbeatStorageImpl(app) {
    _classCallCheck(this, HeartbeatStorageImpl);
    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  _createClass(HeartbeatStorageImpl, [{
    key: "runIndexedDBEnvironmentCheck",
    value: function () {
      var _runIndexedDBEnvironmentCheck = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if ((0, _util.isIndexedDBAvailable)()) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return", false);
            case 4:
              return _context3.abrupt("return", (0, _util.validateIndexedDBOpenable)().then(function () {
                return true;
              })["catch"](function () {
                return false;
              }));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function runIndexedDBEnvironmentCheck() {
        return _runIndexedDBEnvironmentCheck.apply(this, arguments);
      }
      return runIndexedDBEnvironmentCheck;
    }()
    /**
     * Read all heartbeats.
     */
  }, {
    key: "read",
    value: (function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var canUseIndexedDB, idbHeartbeatObject;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this._canUseIndexedDBPromise;
            case 2:
              canUseIndexedDB = _context4.sent;
              if (canUseIndexedDB) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", {
                heartbeats: []
              });
            case 7:
              _context4.next = 9;
              return readHeartbeatsFromIndexedDB(this.app);
            case 9:
              idbHeartbeatObject = _context4.sent;
              return _context4.abrupt("return", idbHeartbeatObject || {
                heartbeats: []
              });
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function read() {
        return _read.apply(this, arguments);
      }
      return read;
    }() // overwrite the storage with the provided heartbeats
    )
  }, {
    key: "overwrite",
    value: function () {
      var _overwrite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(heartbeatsObject) {
        var _a, canUseIndexedDB, existingHeartbeatsObject;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this._canUseIndexedDBPromise;
            case 2:
              canUseIndexedDB = _context5.sent;
              if (canUseIndexedDB) {
                _context5.next = 7;
                break;
              }
              return _context5.abrupt("return");
            case 7:
              _context5.next = 9;
              return this.read();
            case 9:
              existingHeartbeatsObject = _context5.sent;
              return _context5.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
              }));
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function overwrite(_x5) {
        return _overwrite.apply(this, arguments);
      }
      return overwrite;
    }() // add heartbeats
  }, {
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(heartbeatsObject) {
        var _a, canUseIndexedDB, existingHeartbeatsObject;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this._canUseIndexedDBPromise;
            case 2:
              canUseIndexedDB = _context6.sent;
              if (canUseIndexedDB) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return");
            case 7:
              _context6.next = 9;
              return this.read();
            case 9:
              existingHeartbeatsObject = _context6.sent;
              return _context6.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [].concat(_toConsumableArray(existingHeartbeatsObject.heartbeats), _toConsumableArray(heartbeatsObject.heartbeats))
              }));
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function add(_x6) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }]);
  return HeartbeatStorageImpl;
}();
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
  // base64 has a restricted set of characters, all of which should be 1 byte.
  return (0, _util.base64urlEncodeWithoutPadding)(
  // heartbeatsCache wrapper properties
  JSON.stringify({
    version: 2,
    heartbeats: heartbeatsCache
  })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
  _registerComponent(new _component.Component('platform-logger', function (container) {
    return new PlatformLoggerServiceImpl(container);
  }, "PRIVATE" /* ComponentType.PRIVATE */));
  _registerComponent(new _component.Component('heartbeat', function (container) {
    return new HeartbeatServiceImpl(container);
  }, "PRIVATE" /* ComponentType.PRIVATE */));
  // Register `app` package.
  registerVersion(name$o, version$1, variant);
  // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  registerVersion(name$o, version$1, 'esm2017');
  // Register platform SDK identifier (no version).
  registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');

},{"@firebase/component":4,"@firebase/logger":6,"@firebase/util":8,"idb":2}],2:[function(require,module,exports){
'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, '__esModule', {
  value: true
});
var wrapIdbValue = require('./wrap-idb-value.cjs');

/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    blocked = _ref.blocked,
    upgrade = _ref.upgrade,
    blocking = _ref.blocking,
    terminated = _ref.terminated;
  var request = indexedDB.open(name, version);
  var openPromise = wrapIdbValue.wrap(request);
  if (upgrade) {
    request.addEventListener('upgradeneeded', function (event) {
      upgrade(wrapIdbValue.wrap(request.result), event.oldVersion, event.newVersion, wrapIdbValue.wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener('blocked', function (event) {
      return blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion, event.newVersion, event);
    });
  }
  openPromise.then(function (db) {
    if (terminated) db.addEventListener('close', function () {
      return terminated();
    });
    if (blocking) {
      db.addEventListener('versionchange', function (event) {
        return blocking(event.oldVersion, event.newVersion, event);
      });
    }
  })["catch"](function () {});
  return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    blocked = _ref2.blocked;
  var request = indexedDB.deleteDatabase(name);
  if (blocked) {
    request.addEventListener('blocked', function (event) {
      return blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion, event);
    });
  }
  return wrapIdbValue.wrap(request).then(function () {
    return undefined;
  });
}
var readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
var writeMethods = ['put', 'add', 'delete', 'clear'];
var cachedMethods = new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
    return;
  }
  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  var targetFuncName = prop.replace(/FromIndex$/, '');
  var useIndex = prop !== targetFuncName;
  var isWrite = writeMethods.includes(targetFuncName);
  if (
  // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  var method = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(storeName) {
      var _target;
      var tx,
        target,
        _len,
        args,
        _key,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
            tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
            target = tx.store;
            for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = _args[_key];
            }
            if (useIndex) target = target.index(args.shift());
            // Must reject if op rejects.
            // If it's a write operation, must reject if tx.done rejects.
            // Must reject with op rejection first.
            // Must resolve with op value.
            // Must handle both promises (no unhandled rejections)
            _context.next = 6;
            return Promise.all([(_target = target)[targetFuncName].apply(_target, args), isWrite && tx.done]);
          case 6:
            return _context.abrupt("return", _context.sent[0]);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    return function method(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  cachedMethods.set(prop, method);
  return method;
}
wrapIdbValue.replaceTraps(function (oldTraps) {
  return _objectSpread(_objectSpread({}, oldTraps), {}, {
    get: function get(target, prop, receiver) {
      return getMethod(target, prop) || oldTraps.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      return !!getMethod(target, prop) || oldTraps.has(target, prop);
    }
  });
});
exports.unwrap = wrapIdbValue.unwrap;
exports.wrap = wrapIdbValue.wrap;
exports.deleteDB = deleteDB;
exports.openDB = openDB;

},{"./wrap-idb-value.cjs":3}],3:[function(require,module,exports){
'use strict';

var instanceOfAny = function instanceOfAny(object, constructors) {
  return constructors.some(function (c) {
    return object instanceof c;
  });
};
var idbProxyableTypes;
var cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype["continue"], IDBCursor.prototype.continuePrimaryKey]);
}
var cursorRequestMap = new WeakMap();
var transactionDoneMap = new WeakMap();
var transactionStoreNamesMap = new WeakMap();
var transformCache = new WeakMap();
var reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
  var promise = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      request.removeEventListener('success', success);
      request.removeEventListener('error', error);
    };
    var success = function success() {
      resolve(wrap(request.result));
      unlisten();
    };
    var error = function error() {
      reject(request.error);
      unlisten();
    };
    request.addEventListener('success', success);
    request.addEventListener('error', error);
  });
  promise.then(function (value) {
    // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
    // (see wrapFunction).
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
    // Catching to avoid "Uncaught Promise exceptions"
  })["catch"](function () {});
  // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
  // is because we create many promises from a single IDBRequest.
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  // Early bail if we've already created a done promise for this transaction.
  if (transactionDoneMap.has(tx)) return;
  var done = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      tx.removeEventListener('complete', complete);
      tx.removeEventListener('error', error);
      tx.removeEventListener('abort', error);
    };
    var complete = function complete() {
      resolve();
      unlisten();
    };
    var error = function error() {
      reject(tx.error || new DOMException('AbortError', 'AbortError'));
      unlisten();
    };
    tx.addEventListener('complete', complete);
    tx.addEventListener('error', error);
    tx.addEventListener('abort', error);
  });
  // Cache it for later retrieval.
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get: function get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      // Special handling for transaction.done.
      if (prop === 'done') return transactionDoneMap.get(target);
      // Polyfill for objectStoreNames because of Edge.
      if (prop === 'objectStoreNames') {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      // Make tx.store return the only store in the transaction, or undefined if there are many.
      if (prop === 'store') {
        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    // Else transform whatever we get back.
    return wrap(target[prop]);
  },
  set: function set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has: function has(target, prop) {
    if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  // Due to expected object equality (which is enforced by the caching in `wrap`), we
  // only create one new func per func.
  // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
  if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
    return function (storeNames) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var tx = func.call.apply(func, [unwrap(this), storeNames].concat(args));
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
  // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
  // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
  // with real promises, so each advance methods returns a new promise for the cursor object, or
  // undefined if the end of the cursor has been reached.
  if (getCursorAdvanceMethods().includes(func)) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
      // the original object.
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
    // the original object.
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === 'function') return wrapFunction(value);
  // This doesn't return, it just creates a 'done' promise for the transaction,
  // which is later returned for transaction.done (see idbObjectHandler).
  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
  // Return the same value back if we're not going to transform it.
  return value;
}
function wrap(value) {
  // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
  // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
  if (value instanceof IDBRequest) return promisifyRequest(value);
  // If we've already transformed this value before, reuse the transformed value.
  // This is faster, but it also provides object equality.
  if (transformCache.has(value)) return transformCache.get(value);
  var newValue = transformCachableValue(value);
  // Not all types are transformed.
  // These may be primitive types, so they can't be WeakMap keys.
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = function unwrap(value) {
  return reverseTransformCache.get(value);
};
exports.instanceOfAny = instanceOfAny;
exports.replaceTraps = replaceTraps;
exports.reverseTransformCache = reverseTransformCache;
exports.unwrap = unwrap;
exports.wrap = wrap;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.ComponentContainer = exports.Component = void 0;
var _util = require("@firebase/util");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = exports.Component = /*#__PURE__*/function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    _classCallCheck(this, Component);
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */
    this.serviceProps = {};
    this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
    this.onInstanceCreated = null;
  }
  _createClass(Component, [{
    key: "setInstantiationMode",
    value: function setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
  }, {
    key: "setMultipleInstances",
    value: function setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
  }, {
    key: "setServiceProps",
    value: function setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
  }, {
    key: "setInstanceCreatedCallback",
    value: function setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  }]);
  return Component;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = exports.Provider = /*#__PURE__*/function () {
  function Provider(name, container) {
    _classCallCheck(this, Provider);
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  _createClass(Provider, [{
    key: "get",
    value: function get(identifier) {
      // if multipleInstances is not supported, use the default name
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        var deferred = new _util.Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          // initialize the service if it can be auto-initialized
          try {
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
  }, {
    key: "getImmediate",
    value: function getImmediate(options) {
      var _a;
      // if multipleInstances is not supported, use the default name
      var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
        if (optional) {
          return null;
        } else {
          throw Error("Service ".concat(this.name, " is not available"));
        }
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.component;
    }
  }, {
    key: "setComponent",
    value: function setComponent(component) {
      if (component.name !== this.name) {
        throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
      }
      if (this.component) {
        throw Error("Component for ".concat(this.name, " has already been provided"));
      }
      this.component = component;
      // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
      if (!this.shouldAutoInitialize()) {
        return;
      }
      // if the service is eager, initialize the default instance
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({
            instanceIdentifier: DEFAULT_ENTRY_NAME
          });
        } catch (e) {
          // when the instance factory for an eager Component throws an exception during the eager
          // initialization, it should not cause a fatal error.
          // TODO: Investigate if we need to make it configurable, because some component may want to cause
          // a fatal error in this case?
        }
      }
      // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.
      var _iterator = _createForOfIteratorHelper(this.instancesDeferred.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            instanceIdentifier = _step$value[0],
            instanceDeferred = _step$value[1];
          var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          try {
            // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            instanceDeferred.resolve(instance);
          } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clearInstance",
    value: function clearInstance() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      this.instancesDeferred["delete"](identifier);
      this.instancesOptions["delete"](identifier);
      this.instances["delete"](identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var services;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              services = Array.from(this.instances.values());
              _context.next = 3;
              return Promise.all([].concat(_toConsumableArray(services.filter(function (service) {
                return 'INTERNAL' in service;
              }) // legacy services
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map(function (service) {
                return service.INTERNAL["delete"]();
              })), _toConsumableArray(services.filter(function (service) {
                return '_delete' in service;
              }) // modularized services
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map(function (service) {
                return service._delete();
              }))));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _delete() {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }, {
    key: "isComponentSet",
    value: function isComponentSet() {
      return this.component != null;
    }
  }, {
    key: "isInitialized",
    value: function isInitialized() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      return this.instances.has(identifier);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      return this.instancesOptions.get(identifier) || {};
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _opts$options = opts.options,
        options = _opts$options === void 0 ? {} : _opts$options;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
      }
      if (!this.isComponentSet()) {
        throw Error("Component ".concat(this.name, " has not been registered yet"));
      }
      var instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options: options
      });
      // resolve any pending promise waiting for the service instance
      var _iterator2 = _createForOfIteratorHelper(this.instancesDeferred.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            instanceIdentifier = _step2$value[0],
            instanceDeferred = _step2$value[1];
          var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          if (normalizedIdentifier === normalizedDeferredIdentifier) {
            instanceDeferred.resolve(instance);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
  }, {
    key: "onInit",
    value: function onInit(callback, identifier) {
      var _a;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      var existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return function () {
        existingCallbacks["delete"](callback);
      };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
  }, {
    key: "invokeOnInitCallbacks",
    value: function invokeOnInitCallbacks(instance, identifier) {
      var callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      var _iterator3 = _createForOfIteratorHelper(callbacks),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var callback = _step3.value;
          try {
            callback(instance, identifier);
          } catch (_a) {
            // ignore errors in the onInit callback
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "getOrInitializeService",
    value: function getOrInitializeService(_ref) {
      var instanceIdentifier = _ref.instanceIdentifier,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
      var instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options: options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        /**
         * Invoke onInit listeners.
         * Note this.component.onInstanceCreated is different, which is used by the component creator,
         * while onInit listeners are registered by consumers of the provider.
         */
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        /**
         * Order is important
         * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
         * makes `isInitialized()` return true.
         */
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_a) {
            // ignore errors in the onInstanceCreatedCallback
          }
        }
      }
      return instance || null;
    }
  }, {
    key: "normalizeInstanceIdentifier",
    value: function normalizeInstanceIdentifier() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier; // assume multiple instances are supported before the component is provided.
      }
    }
  }, {
    key: "shouldAutoInitialize",
    value: function shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */;
    }
  }]);
  return Provider;
}(); // undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = exports.ComponentContainer = /*#__PURE__*/function () {
  function ComponentContainer(name) {
    _classCallCheck(this, ComponentContainer);
    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  _createClass(ComponentContainer, [{
    key: "addComponent",
    value: function addComponent(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
      }
      provider.setComponent(component);
    }
  }, {
    key: "addOrOverwriteComponent",
    value: function addOrOverwriteComponent(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        // delete the existing provider from the container, so we can register the new component
        this.providers["delete"](component.name);
      }
      this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
  }, {
    key: "getProvider",
    value: function getProvider(name) {
      if (this.providers.has(name)) {
        return this.providers.get(name);
      }
      // create a Provider for a service that hasn't registered with Firebase
      var provider = new Provider(name, this);
      this.providers.set(name, provider);
      return provider;
    }
  }, {
    key: "getProviders",
    value: function getProviders() {
      return Array.from(this.providers.values());
    }
  }]);
  return ComponentContainer;
}();

},{"@firebase/util":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteInstallations = deleteInstallations;
exports.getId = _getId2;
exports.getInstallations = getInstallations;
exports.getToken = _getToken2;
exports.onIdChange = onIdChange;
var _app = require("@firebase/app");
var _component = require("@firebase/component");
var _util = require("@firebase/util");
var _idb = require("idb");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var name = "@firebase/installations";
var version = "0.6.4";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:".concat(version);
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_DESCRIPTION_MAP = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, 'Missing App configuration value: "{$valueName}"'), "not-registered" /* ErrorCode.NOT_REGISTERED */, 'Firebase Installation is not registered.'), "installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */, 'Firebase Installation not found.'), "request-failed" /* ErrorCode.REQUEST_FAILED */, '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'), "app-offline" /* ErrorCode.APP_OFFLINE */, 'Could not process request. Application offline.'), "delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */, "Can't delete installation while there is a pending registration request.");
var ERROR_FACTORY = new _util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
  return error instanceof _util.FirebaseError && error.code.includes("request-failed" /* ErrorCode.REQUEST_FAILED */);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_ref) {
  var projectId = _ref.projectId;
  return "".concat(INSTALLATIONS_API_URL, "/projects/").concat(projectId, "/installations");
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2 /* RequestStatus.COMPLETED */,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
function getErrorFromResponse(_x, _x2) {
  return _getErrorFromResponse.apply(this, arguments);
}
function _getErrorFromResponse() {
  _getErrorFromResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(requestName, response) {
    var responseJson, errorData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return response.json();
        case 2:
          responseJson = _context.sent;
          errorData = responseJson.error;
          return _context.abrupt("return", ERROR_FACTORY.create("request-failed" /* ErrorCode.REQUEST_FAILED */, {
            requestName: requestName,
            serverCode: errorData.code,
            serverMessage: errorData.message,
            serverStatus: errorData.status
          }));
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getErrorFromResponse.apply(this, arguments);
}
function getHeaders(_ref2) {
  var apiKey = _ref2.apiKey;
  return new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}
function getHeadersWithAuth(appConfig, _ref3) {
  var refreshToken = _ref3.refreshToken;
  var headers = getHeaders(appConfig);
  headers.append('Authorization', getAuthorizationHeader(refreshToken));
  return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
function retryIfServerError(_x3) {
  return _retryIfServerError.apply(this, arguments);
}
function _retryIfServerError() {
  _retryIfServerError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fn) {
    var result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fn();
        case 2:
          result = _context2.sent;
          if (!(result.status >= 500 && result.status < 600)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", fn());
        case 5:
          return _context2.abrupt("return", result);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _retryIfServerError.apply(this, arguments);
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  // This works because the server will never respond with fractions of a second.
  return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
  return "".concat(INTERNAL_AUTH_VERSION, " ").concat(refreshToken);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallationRequest(_x4, _x5) {
  return _createInstallationRequest.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function _createInstallationRequest() {
  _createInstallationRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref4, _ref5) {
    var appConfig, heartbeatServiceProvider, fid, endpoint, headers, heartbeatService, heartbeatsHeader, body, request, response, responseValue, registeredInstallationEntry;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          appConfig = _ref4.appConfig, heartbeatServiceProvider = _ref4.heartbeatServiceProvider;
          fid = _ref5.fid;
          endpoint = getInstallationsEndpoint(appConfig);
          headers = getHeaders(appConfig); // If heartbeat service exists, add the heartbeat string to the header.
          heartbeatService = heartbeatServiceProvider.getImmediate({
            optional: true
          });
          if (!heartbeatService) {
            _context3.next = 10;
            break;
          }
          _context3.next = 8;
          return heartbeatService.getHeartbeatsHeader();
        case 8:
          heartbeatsHeader = _context3.sent;
          if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
          }
        case 10:
          body = {
            fid: fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          _context3.next = 14;
          return retryIfServerError(function () {
            return fetch(endpoint, request);
          });
        case 14:
          response = _context3.sent;
          if (!response.ok) {
            _context3.next = 23;
            break;
          }
          _context3.next = 18;
          return response.json();
        case 18:
          responseValue = _context3.sent;
          registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2 /* RequestStatus.COMPLETED */,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return _context3.abrupt("return", registeredInstallationEntry);
        case 23:
          _context3.next = 25;
          return getErrorFromResponse('Create Installation', response);
        case 25:
          throw _context3.sent;
        case 26:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _createInstallationRequest.apply(this, arguments);
}
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
  var b64 = btoa(String.fromCharCode.apply(String, _toConsumableArray(array)));
  return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
  try {
    // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
    // bytes. our implementation generates a 17 byte array instead.
    var fidByteArray = new Uint8Array(17);
    var crypto = self.crypto || self.msCrypto;
    crypto.getRandomValues(fidByteArray);
    // Replace the first 4 random bits with the constant FID header of 0b0111.
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    var fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    // FID generation errored
    return INVALID_FID;
  }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
  var b64String = bufferToBase64UrlSafe(fidByteArray);
  // Remove the 23rd character that was added because of the extra 4 bits at the
  // end of our 17 byte array, and the '=' padding.
  return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
  return "".concat(appConfig.appName, "!").concat(appConfig.appId);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
  var key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
  // Open the broadcast channel if it's not already open,
  // to be able to listen to change events from other tabs.
  getBroadcastChannel();
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    callbackSet = new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }
  callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    return;
  }
  callbackSet["delete"](callback);
  if (callbackSet.size === 0) {
    fidChangeCallbacks["delete"](key);
  }
  // Close broadcast channel if there are no more callbacks.
  closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
  var callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(callbacks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var callback = _step.value;
      callback(fid);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function broadcastFidChange(key, fid) {
  var channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({
      key: key,
      fid: fid
    });
  }
  closeBroadcastChannel();
}
var broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
  if (!broadcastChannel && 'BroadcastChannel' in self) {
    broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
    broadcastChannel.onmessage = function (e) {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0, _idb.openDB)(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: function upgrade(db, oldVersion) {
        // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            db.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }
  return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
function set(_x6, _x7) {
  return _set.apply(this, arguments);
}
/** Removes record(s) from the objectStore that match the given key. */
function _set() {
  _set = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(appConfig, value) {
    var key, db, tx, objectStore, oldValue;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          key = getKey(appConfig);
          _context4.next = 3;
          return getDbPromise();
        case 3:
          db = _context4.sent;
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          objectStore = tx.objectStore(OBJECT_STORE_NAME);
          _context4.next = 8;
          return objectStore.get(key);
        case 8:
          oldValue = _context4.sent;
          _context4.next = 11;
          return objectStore.put(value, key);
        case 11:
          _context4.next = 13;
          return tx.done;
        case 13:
          if (!oldValue || oldValue.fid !== value.fid) {
            fidChanged(appConfig, value.fid);
          }
          return _context4.abrupt("return", value);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _set.apply(this, arguments);
}
function remove(_x8) {
  return _remove.apply(this, arguments);
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
function _remove() {
  _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(appConfig) {
    var key, db, tx;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          key = getKey(appConfig);
          _context5.next = 3;
          return getDbPromise();
        case 3:
          db = _context5.sent;
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          _context5.next = 7;
          return tx.objectStore(OBJECT_STORE_NAME)["delete"](key);
        case 7:
          _context5.next = 9;
          return tx.done;
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _remove.apply(this, arguments);
}
function update(_x9, _x10) {
  return _update.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(appConfig, updateFn) {
    var key, db, tx, store, oldValue, newValue;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          key = getKey(appConfig);
          _context6.next = 3;
          return getDbPromise();
        case 3:
          db = _context6.sent;
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          store = tx.objectStore(OBJECT_STORE_NAME);
          _context6.next = 8;
          return store.get(key);
        case 8:
          oldValue = _context6.sent;
          newValue = updateFn(oldValue);
          if (!(newValue === undefined)) {
            _context6.next = 15;
            break;
          }
          _context6.next = 13;
          return store["delete"](key);
        case 13:
          _context6.next = 17;
          break;
        case 15:
          _context6.next = 17;
          return store.put(newValue, key);
        case 17:
          _context6.next = 19;
          return tx.done;
        case 19:
          if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
            fidChanged(appConfig, newValue.fid);
          }
          return _context6.abrupt("return", newValue);
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _update.apply(this, arguments);
}
function getInstallationEntry(_x11) {
  return _getInstallationEntry.apply(this, arguments);
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function _getInstallationEntry() {
  _getInstallationEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(installations) {
    var registrationPromise, installationEntry;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return update(installations.appConfig, function (oldEntry) {
            var installationEntry = updateOrCreateInstallationEntry(oldEntry);
            var entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
            registrationPromise = entryWithPromise.registrationPromise;
            return entryWithPromise.installationEntry;
          });
        case 2:
          installationEntry = _context7.sent;
          if (!(installationEntry.fid === INVALID_FID)) {
            _context7.next = 8;
            break;
          }
          _context7.next = 6;
          return registrationPromise;
        case 6:
          _context7.t0 = _context7.sent;
          return _context7.abrupt("return", {
            installationEntry: _context7.t0
          });
        case 8:
          return _context7.abrupt("return", {
            installationEntry: installationEntry,
            registrationPromise: registrationPromise
          });
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _getInstallationEntry.apply(this, arguments);
}
function updateOrCreateInstallationEntry(oldEntry) {
  var entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0 /* RequestStatus.NOT_STARTED */
  };

  return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(installations, installationEntry) {
  if (installationEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
    if (!navigator.onLine) {
      // Registration required but app is offline.
      var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */));
      return {
        installationEntry: installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    // Try registering. Change status to IN_PROGRESS.
    var inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1 /* RequestStatus.IN_PROGRESS */,
      registrationTime: Date.now()
    };
    var registrationPromise = registerInstallation(installations, inProgressEntry);
    return {
      installationEntry: inProgressEntry,
      registrationPromise: registrationPromise
    };
  } else if (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
    return {
      installationEntry: installationEntry,
      registrationPromise: waitUntilFidRegistration(installations)
    };
  } else {
    return {
      installationEntry: installationEntry
    };
  }
}
/** This will be executed only once for each new Firebase Installation. */
function registerInstallation(_x12, _x13) {
  return _registerInstallation.apply(this, arguments);
}
/** Call if FID registration is pending in another request. */
function _registerInstallation() {
  _registerInstallation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(installations, installationEntry) {
    var registeredInstallationEntry;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return createInstallationRequest(installations, installationEntry);
        case 3:
          registeredInstallationEntry = _context8.sent;
          return _context8.abrupt("return", set(installations.appConfig, registeredInstallationEntry));
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          if (!(isServerError(_context8.t0) && _context8.t0.customData.serverCode === 409)) {
            _context8.next = 14;
            break;
          }
          _context8.next = 12;
          return remove(installations.appConfig);
        case 12:
          _context8.next = 16;
          break;
        case 14:
          _context8.next = 16;
          return set(installations.appConfig, {
            fid: installationEntry.fid,
            registrationStatus: 0 /* RequestStatus.NOT_STARTED */
          });
        case 16:
          throw _context8.t0;
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return _registerInstallation.apply(this, arguments);
}
function waitUntilFidRegistration(_x14) {
  return _waitUntilFidRegistration.apply(this, arguments);
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function _waitUntilFidRegistration() {
  _waitUntilFidRegistration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(installations) {
    var entry, _yield$getInstallatio, installationEntry, registrationPromise;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return updateInstallationRequest(installations.appConfig);
        case 2:
          entry = _context9.sent;
        case 3:
          if (!(entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */)) {
            _context9.next = 11;
            break;
          }
          _context9.next = 6;
          return sleep(100);
        case 6:
          _context9.next = 8;
          return updateInstallationRequest(installations.appConfig);
        case 8:
          entry = _context9.sent;
          _context9.next = 3;
          break;
        case 11:
          if (!(entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */)) {
            _context9.next = 22;
            break;
          }
          _context9.next = 14;
          return getInstallationEntry(installations);
        case 14:
          _yield$getInstallatio = _context9.sent;
          installationEntry = _yield$getInstallatio.installationEntry;
          registrationPromise = _yield$getInstallatio.registrationPromise;
          if (!registrationPromise) {
            _context9.next = 21;
            break;
          }
          return _context9.abrupt("return", registrationPromise);
        case 21:
          return _context9.abrupt("return", installationEntry);
        case 22:
          return _context9.abrupt("return", entry);
        case 23:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _waitUntilFidRegistration.apply(this, arguments);
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!oldEntry) {
      throw ERROR_FACTORY.create("installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */);
    }

    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0 /* RequestStatus.NOT_STARTED */
    };
  }

  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthTokenRequest(_x15, _x16) {
  return _generateAuthTokenRequest.apply(this, arguments);
}
function _generateAuthTokenRequest() {
  _generateAuthTokenRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref6, installationEntry) {
    var appConfig, heartbeatServiceProvider, endpoint, headers, heartbeatService, heartbeatsHeader, body, request, response, responseValue, completedAuthToken;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          appConfig = _ref6.appConfig, heartbeatServiceProvider = _ref6.heartbeatServiceProvider;
          endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry); // If heartbeat service exists, add the heartbeat string to the header.
          heartbeatService = heartbeatServiceProvider.getImmediate({
            optional: true
          });
          if (!heartbeatService) {
            _context10.next = 9;
            break;
          }
          _context10.next = 7;
          return heartbeatService.getHeartbeatsHeader();
        case 7:
          heartbeatsHeader = _context10.sent;
          if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
          }
        case 9:
          body = {
            installation: {
              sdkVersion: PACKAGE_VERSION,
              appId: appConfig.appId
            }
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          _context10.next = 13;
          return retryIfServerError(function () {
            return fetch(endpoint, request);
          });
        case 13:
          response = _context10.sent;
          if (!response.ok) {
            _context10.next = 22;
            break;
          }
          _context10.next = 17;
          return response.json();
        case 17:
          responseValue = _context10.sent;
          completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return _context10.abrupt("return", completedAuthToken);
        case 22:
          _context10.next = 24;
          return getErrorFromResponse('Generate Auth Token', response);
        case 24:
          throw _context10.sent;
        case 25:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _generateAuthTokenRequest.apply(this, arguments);
}
function getGenerateAuthTokenEndpoint(appConfig, _ref7) {
  var fid = _ref7.fid;
  return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid, "/authTokens:generate");
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
function refreshAuthToken(_x17) {
  return _refreshAuthToken.apply(this, arguments);
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
function _refreshAuthToken() {
  _refreshAuthToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(installations) {
    var forceRefresh,
      tokenPromise,
      entry,
      authToken,
      _args11 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          forceRefresh = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
          _context11.next = 3;
          return update(installations.appConfig, function (oldEntry) {
            if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
            }

            var oldAuthToken = oldEntry.authToken;
            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
              // There is a valid token in the DB.
              return oldEntry;
            } else if (oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
              // There already is a token request in progress.
              tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
              return oldEntry;
            } else {
              // No token or token expired.
              if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
              }

              var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
              return inProgressEntry;
            }
          });
        case 3:
          entry = _context11.sent;
          if (!tokenPromise) {
            _context11.next = 10;
            break;
          }
          _context11.next = 7;
          return tokenPromise;
        case 7:
          _context11.t0 = _context11.sent;
          _context11.next = 11;
          break;
        case 10:
          _context11.t0 = entry.authToken;
        case 11:
          authToken = _context11.t0;
          return _context11.abrupt("return", authToken);
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _refreshAuthToken.apply(this, arguments);
}
function waitUntilAuthTokenRequest(_x18, _x19) {
  return _waitUntilAuthTokenRequest.apply(this, arguments);
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function _waitUntilAuthTokenRequest() {
  _waitUntilAuthTokenRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(installations, forceRefresh) {
    var entry, authToken;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return updateAuthTokenRequest(installations.appConfig);
        case 2:
          entry = _context12.sent;
        case 3:
          if (!(entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */)) {
            _context12.next = 11;
            break;
          }
          _context12.next = 6;
          return sleep(100);
        case 6:
          _context12.next = 8;
          return updateAuthTokenRequest(installations.appConfig);
        case 8:
          entry = _context12.sent;
          _context12.next = 3;
          break;
        case 11:
          authToken = entry.authToken;
          if (!(authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */)) {
            _context12.next = 16;
            break;
          }
          return _context12.abrupt("return", refreshAuthToken(installations, forceRefresh));
        case 16:
          return _context12.abrupt("return", authToken);
        case 17:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _waitUntilAuthTokenRequest.apply(this, arguments);
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
    }

    var oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object.assign(Object.assign({}, oldEntry), {
        authToken: {
          requestStatus: 0 /* RequestStatus.NOT_STARTED */
        }
      });
    }

    return oldEntry;
  });
}
function fetchAuthTokenFromServer(_x20, _x21) {
  return _fetchAuthTokenFromServer.apply(this, arguments);
}
function _fetchAuthTokenFromServer() {
  _fetchAuthTokenFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(installations, installationEntry) {
    var authToken, updatedInstallationEntry, _updatedInstallationEntry;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return generateAuthTokenRequest(installations, installationEntry);
        case 3:
          authToken = _context13.sent;
          updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
            authToken: authToken
          });
          _context13.next = 7;
          return set(installations.appConfig, updatedInstallationEntry);
        case 7:
          return _context13.abrupt("return", authToken);
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](0);
          if (!(isServerError(_context13.t0) && (_context13.t0.customData.serverCode === 401 || _context13.t0.customData.serverCode === 404))) {
            _context13.next = 17;
            break;
          }
          _context13.next = 15;
          return remove(installations.appConfig);
        case 15:
          _context13.next = 20;
          break;
        case 17:
          _updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
            authToken: {
              requestStatus: 0 /* RequestStatus.NOT_STARTED */
            }
          });
          _context13.next = 20;
          return set(installations.appConfig, _updatedInstallationEntry);
        case 20:
          throw _context13.t0;
        case 21:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 10]]);
  }));
  return _fetchAuthTokenFromServer.apply(this, arguments);
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== undefined && installationEntry.registrationStatus === 2 /* RequestStatus.COMPLETED */;
}

function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 /* RequestStatus.COMPLETED */ && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  var now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  var inProgressAuthToken = {
    requestStatus: 1 /* RequestStatus.IN_PROGRESS */,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
function _getId2(_x22) {
  return _getId.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */
function _getId() {
  _getId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(installations) {
    var installationsImpl, _yield$getInstallatio2, installationEntry, registrationPromise;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          installationsImpl = installations;
          _context14.next = 3;
          return getInstallationEntry(installationsImpl);
        case 3:
          _yield$getInstallatio2 = _context14.sent;
          installationEntry = _yield$getInstallatio2.installationEntry;
          registrationPromise = _yield$getInstallatio2.registrationPromise;
          if (registrationPromise) {
            registrationPromise["catch"](console.error);
          } else {
            // If the installation is already registered, update the authentication
            // token if needed.
            refreshAuthToken(installationsImpl)["catch"](console.error);
          }
          return _context14.abrupt("return", installationEntry.fid);
        case 8:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _getId.apply(this, arguments);
}
function _getToken2(_x23) {
  return _getToken.apply(this, arguments);
}
function _getToken() {
  _getToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(installations) {
    var forceRefresh,
      installationsImpl,
      authToken,
      _args15 = arguments;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          forceRefresh = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : false;
          installationsImpl = installations;
          _context15.next = 4;
          return completeInstallationRegistration(installationsImpl);
        case 4:
          _context15.next = 6;
          return refreshAuthToken(installationsImpl, forceRefresh);
        case 6:
          authToken = _context15.sent;
          return _context15.abrupt("return", authToken.token);
        case 8:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _getToken.apply(this, arguments);
}
function completeInstallationRegistration(_x24) {
  return _completeInstallationRegistration.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _completeInstallationRegistration() {
  _completeInstallationRegistration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(installations) {
    var _yield$getInstallatio3, registrationPromise;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return getInstallationEntry(installations);
        case 2:
          _yield$getInstallatio3 = _context16.sent;
          registrationPromise = _yield$getInstallatio3.registrationPromise;
          if (!registrationPromise) {
            _context16.next = 7;
            break;
          }
          _context16.next = 7;
          return registrationPromise;
        case 7:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _completeInstallationRegistration.apply(this, arguments);
}
function deleteInstallationRequest(_x25, _x26) {
  return _deleteInstallationRequest.apply(this, arguments);
}
function _deleteInstallationRequest() {
  _deleteInstallationRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(appConfig, installationEntry) {
    var endpoint, headers, request, response;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          endpoint = getDeleteEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          request = {
            method: 'DELETE',
            headers: headers
          };
          _context17.next = 5;
          return retryIfServerError(function () {
            return fetch(endpoint, request);
          });
        case 5:
          response = _context17.sent;
          if (response.ok) {
            _context17.next = 10;
            break;
          }
          _context17.next = 9;
          return getErrorFromResponse('Delete Installation', response);
        case 9:
          throw _context17.sent;
        case 10:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return _deleteInstallationRequest.apply(this, arguments);
}
function getDeleteEndpoint(appConfig, _ref8) {
  var fid = _ref8.fid;
  return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
function deleteInstallations(_x27) {
  return _deleteInstallations.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */
function _deleteInstallations() {
  _deleteInstallations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(installations) {
    var appConfig, entry;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          appConfig = installations.appConfig;
          _context18.next = 3;
          return update(appConfig, function (oldEntry) {
            if (oldEntry && oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
              // Delete the unregistered entry without sending a deleteInstallation request.
              return undefined;
            }
            return oldEntry;
          });
        case 3:
          entry = _context18.sent;
          if (!entry) {
            _context18.next = 18;
            break;
          }
          if (!(entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */)) {
            _context18.next = 9;
            break;
          }
          throw ERROR_FACTORY.create("delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */);
        case 9:
          if (!(entry.registrationStatus === 2 /* RequestStatus.COMPLETED */)) {
            _context18.next = 18;
            break;
          }
          if (navigator.onLine) {
            _context18.next = 14;
            break;
          }
          throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
        case 14:
          _context18.next = 16;
          return deleteInstallationRequest(appConfig, entry);
        case 16:
          _context18.next = 18;
          return remove(appConfig);
        case 18:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return _deleteInstallations.apply(this, arguments);
}
function onIdChange(installations, callback) {
  var appConfig = installations.appConfig;
  addCallback(appConfig, callback);
  return function () {
    removeCallback(appConfig, callback);
  };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */
function getInstallations() {
  var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _app.getApp)();
  var installationsImpl = (0, _app._getProvider)(app, 'installations').getImmediate();
  return installationsImpl;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
  if (!app || !app.options) {
    throw getMissingValueError('App Configuration');
  }
  if (!app.name) {
    throw getMissingValueError('App Name');
  }
  // Required app config keys
  var configKeys = ['projectId', 'apiKey', 'appId'];
  for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
    var keyName = _configKeys[_i];
    if (!app.options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
    valueName: valueName
  });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var INSTALLATIONS_NAME = 'installations';
var INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
var publicFactory = function publicFactory(container) {
  var app = container.getProvider('app').getImmediate();
  // Throws if app isn't configured properly.
  var appConfig = extractAppConfig(app);
  var heartbeatServiceProvider = (0, _app._getProvider)(app, 'heartbeat');
  var installationsImpl = {
    app: app,
    appConfig: appConfig,
    heartbeatServiceProvider: heartbeatServiceProvider,
    _delete: function _delete() {
      return Promise.resolve();
    }
  };
  return installationsImpl;
};
var internalFactory = function internalFactory(container) {
  var app = container.getProvider('app').getImmediate();
  // Internal FIS instance relies on public FIS instance.
  var installations = (0, _app._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
  var installationsInternal = {
    getId: function getId() {
      return _getId2(installations);
    },
    getToken: function getToken(forceRefresh) {
      return _getToken2(installations, forceRefresh);
    }
  };
  return installationsInternal;
};
function registerInstallations() {
  (0, _app._registerComponent)(new _component.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* ComponentType.PUBLIC */));
  (0, _app._registerComponent)(new _component.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
}

/**
 * Firebase Installations
 *
 * @packageDocumentation
 */
registerInstallations();
(0, _app.registerVersion)(name, version);
// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
(0, _app.registerVersion)(name, version, 'esm2017');

},{"@firebase/app":1,"@firebase/component":4,"@firebase/util":8,"idb":11}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var tslib = require('tslib');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
exports.LogLevel = void 0;
(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(exports.LogLevel || (exports.LogLevel = {}));
var levelStringToEnum = {
  'debug': exports.LogLevel.DEBUG,
  'verbose': exports.LogLevel.VERBOSE,
  'info': exports.LogLevel.INFO,
  'warn': exports.LogLevel.WARN,
  'error': exports.LogLevel.ERROR,
  'silent': exports.LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = exports.LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {}, _a[exports.LogLevel.DEBUG] = 'log', _a[exports.LogLevel.VERBOSE] = 'log', _a[exports.LogLevel.INFO] = 'info', _a[exports.LogLevel.WARN] = 'warn', _a[exports.LogLevel.ERROR] = 'error', _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function defaultLogHandler(instance, logType) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (logType < instance.logLevel) {
    return;
  }
  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];
  if (method) {
    console[method].apply(console, tslib.__spreadArray(["[".concat(now, "]  ").concat(instance.name, ":")], args, false));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
  }
};
var Logger = /** @class */function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */
    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */
    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */
    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */
    instances.push(this);
  }
  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function get() {
      return this._logLevel;
    },
    set: function set(val) {
      if (!(val in exports.LogLevel)) {
        throw new TypeError("Invalid value \"".concat(val, "\" assigned to `logLevel`"));
      }
      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  });
  // Workaround for setter/getter having to be the same type.
  Logger.prototype.setLogLevel = function (val) {
    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
  };
  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function get() {
      return this._logHandler;
    },
    set: function set(val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }
      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "userLogHandler", {
    get: function get() {
      return this._userLogHandler;
    },
    set: function set(val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * The functions below are all based on the `console` interface
   */
  Logger.prototype.debug = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.DEBUG], args, false));
    this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.DEBUG], args, false));
  };
  Logger.prototype.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.VERBOSE], args, false));
    this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.VERBOSE], args, false));
  };
  Logger.prototype.info = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.INFO], args, false));
    this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.INFO], args, false));
  };
  Logger.prototype.warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.WARN], args, false));
    this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.WARN], args, false));
  };
  Logger.prototype.error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.ERROR], args, false));
    this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.ERROR], args, false));
  };
  return Logger;
}();
function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  var _loop_1 = function _loop_1(instance) {
    var customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: exports.LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };
  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];
    _loop_1(instance);
  }
}
exports.Logger = Logger;
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;

},{"tslib":14}],7:[function(require,module,exports){
'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, '__esModule', {
  value: true
});
require('@firebase/installations');
var component = require('@firebase/component');
var tslib = require('tslib');
var idb = require('idb');
var util = require('@firebase/util');
var app = require('@firebase/app');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
/** Key of FCM Payload in Notification's data field. */
var FCM_MSG = 'FCM_MSG';
var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
// Defined as in proto/messaging_event.proto. Neglecting fields that are supported.
var SDK_PLATFORM_WEB = 3;
var EVENT_MESSAGE_DELIVERED = 1;
var MessageType$1;
(function (MessageType) {
  MessageType[MessageType["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
  MessageType[MessageType["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
})(MessageType$1 || (MessageType$1 = {}));

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
var MessageType;
(function (MessageType) {
  MessageType["PUSH_RECEIVED"] = "push-received";
  MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function arrayToBase64(array) {
  var uint8Array = new Uint8Array(array);
  var base64String = btoa(String.fromCharCode.apply(String, tslib.__spreadArray([], tslib.__read(uint8Array), false)));
  return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function base64ToArray(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  var rawData = atob(base64);
  var outputArray = new Uint8Array(rawData.length);
  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OLD_DB_NAME = 'fcm_token_details_db';
/**
 * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
 * callback is called for all versions of the old DB.
 */
var OLD_DB_VERSION = 5;
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
function migrateOldDatabase(senderId) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var databases, dbNames, tokenDetails, db;
    var _this = this;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!('databases' in indexedDB)) return [3 /*break*/, 2];
          return [4 /*yield*/, indexedDB.databases()];
        case 1:
          databases = _a.sent();
          dbNames = databases.map(function (db) {
            return db.name;
          });
          if (!dbNames.includes(OLD_DB_NAME)) {
            // old DB didn't exist, no need to open.
            return [2 /*return*/, null];
          }
          _a.label = 2;
        case 2:
          tokenDetails = null;
          return [4 /*yield*/, idb.openDB(OLD_DB_NAME, OLD_DB_VERSION, {
            upgrade: function upgrade(db, oldVersion, newVersion, upgradeTransaction) {
              return tslib.__awaiter(_this, void 0, void 0, function () {
                var objectStore, value, oldDetails, oldDetails, oldDetails;
                var _a;
                return tslib.__generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      if (oldVersion < 2) {
                        // Database too old, skip migration.
                        return [2 /*return*/];
                      }

                      if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                        // Database did not exist. Nothing to do.
                        return [2 /*return*/];
                      }

                      objectStore = upgradeTransaction.objectStore(OLD_OBJECT_STORE_NAME);
                      return [4 /*yield*/, objectStore.index('fcmSenderId').get(senderId)];
                    case 1:
                      value = _b.sent();
                      return [4 /*yield*/, objectStore.clear()];
                    case 2:
                      _b.sent();
                      if (!value) {
                        // No entry in the database, nothing to migrate.
                        return [2 /*return*/];
                      }

                      if (oldVersion === 2) {
                        oldDetails = value;
                        if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                          return [2 /*return*/];
                        }

                        tokenDetails = {
                          token: oldDetails.fcmToken,
                          createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                          subscriptionOptions: {
                            auth: oldDetails.auth,
                            p256dh: oldDetails.p256dh,
                            endpoint: oldDetails.endpoint,
                            swScope: oldDetails.swScope,
                            vapidKey: typeof oldDetails.vapidKey === 'string' ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
                          }
                        };
                      } else if (oldVersion === 3) {
                        oldDetails = value;
                        tokenDetails = {
                          token: oldDetails.fcmToken,
                          createTime: oldDetails.createTime,
                          subscriptionOptions: {
                            auth: arrayToBase64(oldDetails.auth),
                            p256dh: arrayToBase64(oldDetails.p256dh),
                            endpoint: oldDetails.endpoint,
                            swScope: oldDetails.swScope,
                            vapidKey: arrayToBase64(oldDetails.vapidKey)
                          }
                        };
                      } else if (oldVersion === 4) {
                        oldDetails = value;
                        tokenDetails = {
                          token: oldDetails.fcmToken,
                          createTime: oldDetails.createTime,
                          subscriptionOptions: {
                            auth: arrayToBase64(oldDetails.auth),
                            p256dh: arrayToBase64(oldDetails.p256dh),
                            endpoint: oldDetails.endpoint,
                            swScope: oldDetails.swScope,
                            vapidKey: arrayToBase64(oldDetails.vapidKey)
                          }
                        };
                      }
                      return [2 /*return*/];
                  }
                });
              });
            }
          })];

        case 3:
          db = _a.sent();
          db.close();
          // Delete all old databases.
          return [4 /*yield*/, idb.deleteDB(OLD_DB_NAME)];
        case 4:
          // Delete all old databases.
          _a.sent();
          return [4 /*yield*/, idb.deleteDB('fcm_vapid_details_db')];
        case 5:
          _a.sent();
          return [4 /*yield*/, idb.deleteDB('undefined')];
        case 6:
          _a.sent();
          return [2 /*return*/, checkTokenDetails(tokenDetails) ? tokenDetails : null];
      }
    });
  });
}
function checkTokenDetails(tokenDetails) {
  if (!tokenDetails || !tokenDetails.subscriptionOptions) {
    return false;
  }
  var subscriptionOptions = tokenDetails.subscriptionOptions;
  return typeof tokenDetails.createTime === 'number' && tokenDetails.createTime > 0 && typeof tokenDetails.token === 'string' && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === 'string' && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === 'string' && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === 'string' && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === 'string' && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === 'string' && subscriptionOptions.vapidKey.length > 0;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Exported for tests.
var DATABASE_NAME = 'firebase-messaging-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-messaging-store';
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = idb.openDB(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: function upgrade(upgradeDb, oldVersion) {
        // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
        // because if there are multiple versions between the old version and the current version, we
        // want ALL the migrations that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            upgradeDb.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }
  return dbPromise;
}
/** Gets record(s) from the objectStore that match the given key. */
function dbGet(firebaseDependencies) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var key, db, tokenDetails, oldTokenDetails;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(firebaseDependencies);
          return [4 /*yield*/, getDbPromise()];
        case 1:
          db = _a.sent();
          return [4 /*yield*/, db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key)];
        case 2:
          tokenDetails = _a.sent();
          if (!tokenDetails) return [3 /*break*/, 3];
          return [2 /*return*/, tokenDetails];
        case 3:
          return [4 /*yield*/, migrateOldDatabase(firebaseDependencies.appConfig.senderId)];
        case 4:
          oldTokenDetails = _a.sent();
          if (!oldTokenDetails) return [3 /*break*/, 6];
          return [4 /*yield*/, dbSet(firebaseDependencies, oldTokenDetails)];
        case 5:
          _a.sent();
          return [2 /*return*/, oldTokenDetails];
        case 6:
          return [2 /*return*/];
      }
    });
  });
}
/** Assigns or overwrites the record for the given key with the given value. */
function dbSet(firebaseDependencies, tokenDetails) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var key, db, tx;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(firebaseDependencies);
          return [4 /*yield*/, getDbPromise()];
        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key)];
        case 2:
          _a.sent();
          return [4 /*yield*/, tx.done];
        case 3:
          _a.sent();
          return [2 /*return*/, tokenDetails];
      }
    });
  });
}
/** Removes record(s) from the objectStore that match the given key. */
function dbRemove(firebaseDependencies) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var key, db, tx;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(firebaseDependencies);
          return [4 /*yield*/, getDbPromise()];
        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME)["delete"](key)];
        case 2:
          _a.sent();
          return [4 /*yield*/, tx.done];
        case 3:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
}

function getKey(_a) {
  var appConfig = _a.appConfig;
  return appConfig.appId;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_MAP = (_a = {}, _a["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"', _a["only-available-in-window" /* ErrorCode.AVAILABLE_IN_WINDOW */] = 'This method is available in a Window context.', _a["only-available-in-sw" /* ErrorCode.AVAILABLE_IN_SW */] = 'This method is available in a service worker context.', _a["permission-default" /* ErrorCode.PERMISSION_DEFAULT */] = 'The notification permission was not granted and dismissed instead.', _a["permission-blocked" /* ErrorCode.PERMISSION_BLOCKED */] = 'The notification permission was not granted and blocked instead.', _a["unsupported-browser" /* ErrorCode.UNSUPPORTED_BROWSER */] = "This browser doesn't support the API's required to use the Firebase SDK.", _a["indexed-db-unsupported" /* ErrorCode.INDEXED_DB_UNSUPPORTED */] = "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)", _a["failed-service-worker-registration" /* ErrorCode.FAILED_DEFAULT_REGISTRATION */] = 'We are unable to register the default service worker. {$browserErrorMessage}', _a["token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */] = 'A problem occurred while subscribing the user to FCM: {$errorInfo}', _a["token-subscribe-no-token" /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */] = 'FCM returned no token when subscribing the user to push.', _a["token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */] = 'A problem occurred while unsubscribing the ' + 'user from FCM: {$errorInfo}', _a["token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */] = 'A problem occurred while updating the user from FCM: {$errorInfo}', _a["token-update-no-token" /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */] = 'FCM returned no token when updating the user to push.', _a["use-sw-after-get-token" /* ErrorCode.USE_SW_AFTER_GET_TOKEN */] = 'The useServiceWorker() method may only be called once and must be ' + 'called before calling getToken() to ensure your service worker is used.', _a["invalid-sw-registration" /* ErrorCode.INVALID_SW_REGISTRATION */] = 'The input to useServiceWorker() must be a ServiceWorkerRegistration.', _a["invalid-bg-handler" /* ErrorCode.INVALID_BG_HANDLER */] = 'The input to setBackgroundMessageHandler() must be a function.', _a["invalid-vapid-key" /* ErrorCode.INVALID_VAPID_KEY */] = 'The public VAPID key must be a string.', _a["use-vapid-key-after-get-token" /* ErrorCode.USE_VAPID_KEY_AFTER_GET_TOKEN */] = 'The usePublicVapidKey() method may only be called once and must be ' + 'called before calling getToken() to ensure your VAPID key is used.', _a);
var ERROR_FACTORY = new util.ErrorFactory('messaging', 'Messaging', ERROR_MAP);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function requestGetToken(firebaseDependencies, subscriptionOptions) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var headers, body, subscribeOptions, responseData, response, err_1, message;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, getHeaders(firebaseDependencies)];
        case 1:
          headers = _a.sent();
          body = getBody(subscriptionOptions);
          subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          _a.label = 2;
        case 2:
          _a.trys.push([2, 5,, 6]);
          return [4 /*yield*/, fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions)];
        case 3:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 4:
          responseData = _a.sent();
          return [3 /*break*/, 6];
        case 5:
          err_1 = _a.sent();
          throw ERROR_FACTORY.create("token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */, {
            errorInfo: err_1 === null || err_1 === void 0 ? void 0 : err_1.toString()
          });
        case 6:
          if (responseData.error) {
            message = responseData.error.message;
            throw ERROR_FACTORY.create("token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */, {
              errorInfo: message
            });
          }
          if (!responseData.token) {
            throw ERROR_FACTORY.create("token-subscribe-no-token" /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */);
          }

          return [2 /*return*/, responseData.token];
      }
    });
  });
}
function requestUpdateToken(firebaseDependencies, tokenDetails) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var headers, body, updateOptions, responseData, response, err_2, message;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, getHeaders(firebaseDependencies)];
        case 1:
          headers = _a.sent();
          body = getBody(tokenDetails.subscriptionOptions);
          updateOptions = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
          };
          _a.label = 2;
        case 2:
          _a.trys.push([2, 5,, 6]);
          return [4 /*yield*/, fetch("".concat(getEndpoint(firebaseDependencies.appConfig), "/").concat(tokenDetails.token), updateOptions)];
        case 3:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 4:
          responseData = _a.sent();
          return [3 /*break*/, 6];
        case 5:
          err_2 = _a.sent();
          throw ERROR_FACTORY.create("token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */, {
            errorInfo: err_2 === null || err_2 === void 0 ? void 0 : err_2.toString()
          });
        case 6:
          if (responseData.error) {
            message = responseData.error.message;
            throw ERROR_FACTORY.create("token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */, {
              errorInfo: message
            });
          }
          if (!responseData.token) {
            throw ERROR_FACTORY.create("token-update-no-token" /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */);
          }

          return [2 /*return*/, responseData.token];
      }
    });
  });
}
function requestDeleteToken(firebaseDependencies, token) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var headers, unsubscribeOptions, response, responseData, message, err_3;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, getHeaders(firebaseDependencies)];
        case 1:
          headers = _a.sent();
          unsubscribeOptions = {
            method: 'DELETE',
            headers: headers
          };
          _a.label = 2;
        case 2:
          _a.trys.push([2, 5,, 6]);
          return [4 /*yield*/, fetch("".concat(getEndpoint(firebaseDependencies.appConfig), "/").concat(token), unsubscribeOptions)];
        case 3:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 4:
          responseData = _a.sent();
          if (responseData.error) {
            message = responseData.error.message;
            throw ERROR_FACTORY.create("token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */, {
              errorInfo: message
            });
          }
          return [3 /*break*/, 6];
        case 5:
          err_3 = _a.sent();
          throw ERROR_FACTORY.create("token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */, {
            errorInfo: err_3 === null || err_3 === void 0 ? void 0 : err_3.toString()
          });
        case 6:
          return [2 /*return*/];
      }
    });
  });
}

function getEndpoint(_a) {
  var projectId = _a.projectId;
  return "".concat(ENDPOINT, "/projects/").concat(projectId, "/registrations");
}
function getHeaders(_a) {
  var appConfig = _a.appConfig,
    installations = _a.installations;
  return tslib.__awaiter(this, void 0, void 0, function () {
    var authToken;
    return tslib.__generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4 /*yield*/, installations.getToken()];
        case 1:
          authToken = _b.sent();
          return [2 /*return*/, new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-goog-api-key': appConfig.apiKey,
            'x-goog-firebase-installations-auth': "FIS ".concat(authToken)
          })];
      }
    });
  });
}
function getBody(_a) {
  var p256dh = _a.p256dh,
    auth = _a.auth,
    endpoint = _a.endpoint,
    vapidKey = _a.vapidKey;
  var body = {
    web: {
      endpoint: endpoint,
      auth: auth,
      p256dh: p256dh
    }
  };
  if (vapidKey !== DEFAULT_VAPID_KEY) {
    body.web.applicationPubKey = vapidKey;
  }
  return body;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// UpdateRegistration will be called once every week.
var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
function getTokenInternal(messaging) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var pushSubscription, subscriptionOptions, tokenDetails, e_1;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, getPushSubscription(messaging.swRegistration, messaging.vapidKey)];
        case 1:
          pushSubscription = _a.sent();
          subscriptionOptions = {
            vapidKey: messaging.vapidKey,
            swScope: messaging.swRegistration.scope,
            endpoint: pushSubscription.endpoint,
            auth: arrayToBase64(pushSubscription.getKey('auth')),
            p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
          };
          return [4 /*yield*/, dbGet(messaging.firebaseDependencies)];
        case 2:
          tokenDetails = _a.sent();
          if (!!tokenDetails) return [3 /*break*/, 3];
          // No token, get a new one.
          return [2 /*return*/, getNewToken(messaging.firebaseDependencies, subscriptionOptions)];
        case 3:
          if (!!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) return [3 /*break*/, 8];
          _a.label = 4;
        case 4:
          _a.trys.push([4, 6,, 7]);
          return [4 /*yield*/, requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token)];
        case 5:
          _a.sent();
          return [3 /*break*/, 7];
        case 6:
          e_1 = _a.sent();
          // Suppress errors because of #2364
          console.warn(e_1);
          return [3 /*break*/, 7];
        case 7:
          return [2 /*return*/, getNewToken(messaging.firebaseDependencies, subscriptionOptions)];
        case 8:
          if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
            // Weekly token refresh
            return [2 /*return*/, updateToken(messaging, {
              token: tokenDetails.token,
              createTime: Date.now(),
              subscriptionOptions: subscriptionOptions
            })];
          } else {
            // Valid token, nothing to do.
            return [2 /*return*/, tokenDetails.token];
          }
        case 9:
          return [2 /*return*/];
      }
    });
  });
}
/**
 * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
 * the push subscription if it exists.
 */
function deleteTokenInternal(messaging) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var tokenDetails, pushSubscription;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, dbGet(messaging.firebaseDependencies)];
        case 1:
          tokenDetails = _a.sent();
          if (!tokenDetails) return [3 /*break*/, 4];
          return [4 /*yield*/, requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token)];
        case 2:
          _a.sent();
          return [4 /*yield*/, dbRemove(messaging.firebaseDependencies)];
        case 3:
          _a.sent();
          _a.label = 4;
        case 4:
          return [4 /*yield*/, messaging.swRegistration.pushManager.getSubscription()];
        case 5:
          pushSubscription = _a.sent();
          if (pushSubscription) {
            return [2 /*return*/, pushSubscription.unsubscribe()];
          }
          // If there's no SW, consider it a success.
          return [2 /*return*/, true];
      }
    });
  });
}
function updateToken(messaging, tokenDetails) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var updatedToken, updatedTokenDetails, e_2;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 5]);
          return [4 /*yield*/, requestUpdateToken(messaging.firebaseDependencies, tokenDetails)];
        case 1:
          updatedToken = _a.sent();
          updatedTokenDetails = tslib.__assign(tslib.__assign({}, tokenDetails), {
            token: updatedToken,
            createTime: Date.now()
          });
          return [4 /*yield*/, dbSet(messaging.firebaseDependencies, updatedTokenDetails)];
        case 2:
          _a.sent();
          return [2 /*return*/, updatedToken];
        case 3:
          e_2 = _a.sent();
          return [4 /*yield*/, deleteTokenInternal(messaging)];
        case 4:
          _a.sent();
          throw e_2;
        case 5:
          return [2 /*return*/];
      }
    });
  });
}

function getNewToken(firebaseDependencies, subscriptionOptions) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var token, tokenDetails;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, requestGetToken(firebaseDependencies, subscriptionOptions)];
        case 1:
          token = _a.sent();
          tokenDetails = {
            token: token,
            createTime: Date.now(),
            subscriptionOptions: subscriptionOptions
          };
          return [4 /*yield*/, dbSet(firebaseDependencies, tokenDetails)];
        case 2:
          _a.sent();
          return [2 /*return*/, tokenDetails.token];
      }
    });
  });
}
/**
 * Gets a PushSubscription for the current user.
 */
function getPushSubscription(swRegistration, vapidKey) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var subscription;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, swRegistration.pushManager.getSubscription()];
        case 1:
          subscription = _a.sent();
          if (subscription) {
            return [2 /*return*/, subscription];
          }
          return [2 /*return*/, swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
            // submitted to pushManager#subscribe must be of type Uint8Array.
            applicationServerKey: base64ToArray(vapidKey)
          })];
      }
    });
  });
}
/**
 * Checks if the saved tokenDetails object matches the configuration provided.
 */
function isTokenValid(dbOptions, currentOptions) {
  var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
  var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
  var isAuthEqual = currentOptions.auth === dbOptions.auth;
  var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
  return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function externalizePayload(internalPayload) {
  var payload = {
    from: internalPayload.from,
    // eslint-disable-next-line camelcase
    collapseKey: internalPayload.collapse_key,
    // eslint-disable-next-line camelcase
    messageId: internalPayload.fcmMessageId
  };
  propagateNotificationPayload(payload, internalPayload);
  propagateDataPayload(payload, internalPayload);
  propagateFcmOptions(payload, internalPayload);
  return payload;
}
function propagateNotificationPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.notification) {
    return;
  }
  payload.notification = {};
  var title = messagePayloadInternal.notification.title;
  if (!!title) {
    payload.notification.title = title;
  }
  var body = messagePayloadInternal.notification.body;
  if (!!body) {
    payload.notification.body = body;
  }
  var image = messagePayloadInternal.notification.image;
  if (!!image) {
    payload.notification.image = image;
  }
  var icon = messagePayloadInternal.notification.icon;
  if (!!icon) {
    payload.notification.icon = icon;
  }
}
function propagateDataPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.data) {
    return;
  }
  payload.data = messagePayloadInternal.data;
}
function propagateFcmOptions(payload, messagePayloadInternal) {
  var _a, _b, _c, _d, _e;
  // fcmOptions.link value is written into notification.click_action. see more in b/232072111
  if (!messagePayloadInternal.fcmOptions && !((_a = messagePayloadInternal.notification) === null || _a === void 0 ? void 0 : _a.click_action)) {
    return;
  }
  payload.fcmOptions = {};
  var link = (_c = (_b = messagePayloadInternal.fcmOptions) === null || _b === void 0 ? void 0 : _b.link) !== null && _c !== void 0 ? _c : (_d = messagePayloadInternal.notification) === null || _d === void 0 ? void 0 : _d.click_action;
  if (!!link) {
    payload.fcmOptions.link = link;
  }
  // eslint-disable-next-line camelcase
  var analyticsLabel = (_e = messagePayloadInternal.fcmOptions) === null || _e === void 0 ? void 0 : _e.analytics_label;
  if (!!analyticsLabel) {
    payload.fcmOptions.analyticsLabel = analyticsLabel;
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isConsoleMessage(data) {
  // This message has a campaign ID, meaning it was sent using the Firebase Console.
  return _typeof(data) === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
_mergeStrings('AzSCbw63g1R0nCw85jG8', 'Iaya3yLKwmgvh7cF0q4');
function stageLog(messaging, internalPayload) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var fcmEvent, _a, _b;
    return tslib.__generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _a = createFcmEvent;
          _b = [internalPayload];
          return [4 /*yield*/, messaging.firebaseDependencies.installations.getId()];
        case 1:
          fcmEvent = _a.apply(void 0, _b.concat([_c.sent()]));
          createAndEnqueueLogEvent(messaging, fcmEvent);
          return [2 /*return*/];
      }
    });
  });
}

function createFcmEvent(internalPayload, fid) {
  var _a, _b;
  var fcmEvent = {};
  /* eslint-disable camelcase */
  // some fields should always be non-null. Still check to ensure.
  if (!!internalPayload.from) {
    fcmEvent.project_number = internalPayload.from;
  }
  if (!!internalPayload.fcmMessageId) {
    fcmEvent.message_id = internalPayload.fcmMessageId;
  }
  fcmEvent.instance_id = fid;
  if (!!internalPayload.notification) {
    fcmEvent.message_type = MessageType$1.DISPLAY_NOTIFICATION.toString();
  } else {
    fcmEvent.message_type = MessageType$1.DATA_MESSAGE.toString();
  }
  fcmEvent.sdk_platform = SDK_PLATFORM_WEB.toString();
  fcmEvent.package_name = self.origin.replace(/(^\w+:|^)\/\//, '');
  if (!!internalPayload.collapse_key) {
    fcmEvent.collapse_key = internalPayload.collapse_key;
  }
  fcmEvent.event = EVENT_MESSAGE_DELIVERED.toString();
  if (!!((_a = internalPayload.fcmOptions) === null || _a === void 0 ? void 0 : _a.analytics_label)) {
    fcmEvent.analytics_label = (_b = internalPayload.fcmOptions) === null || _b === void 0 ? void 0 : _b.analytics_label;
  }
  /* eslint-enable camelcase */
  return fcmEvent;
}
function createAndEnqueueLogEvent(messaging, fcmEvent) {
  var logEvent = {};
  /* eslint-disable camelcase */
  logEvent.event_time_ms = Math.floor(Date.now()).toString();
  logEvent.source_extension_json_proto3 = JSON.stringify(fcmEvent);
  // eslint-disable-next-line camelcase
  messaging.logEvents.push(logEvent);
}
function _mergeStrings(s1, s2) {
  var resultArray = [];
  for (var i = 0; i < s1.length; i++) {
    resultArray.push(s1.charAt(i));
    if (i < s2.length) {
      resultArray.push(s2.charAt(i));
    }
  }
  return resultArray.join('');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onSubChange(event, messaging) {
  var _a, _b;
  return tslib.__awaiter(this, void 0, void 0, function () {
    var newSubscription, tokenDetails;
    return tslib.__generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          newSubscription = event.newSubscription;
          if (!!newSubscription) return [3 /*break*/, 2];
          // Subscription revoked, delete token
          return [4 /*yield*/, deleteTokenInternal(messaging)];
        case 1:
          // Subscription revoked, delete token
          _c.sent();
          return [2 /*return*/];
        case 2:
          return [4 /*yield*/, dbGet(messaging.firebaseDependencies)];
        case 3:
          tokenDetails = _c.sent();
          return [4 /*yield*/, deleteTokenInternal(messaging)];
        case 4:
          _c.sent();
          messaging.vapidKey = (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
          return [4 /*yield*/, getTokenInternal(messaging)];
        case 5:
          _c.sent();
          return [2 /*return*/];
      }
    });
  });
}

function onPush(event, messaging) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var internalPayload, clientList, payload;
    return tslib.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          internalPayload = getMessagePayloadInternal(event);
          if (!internalPayload) {
            // Failed to get parsed MessagePayload from the PushEvent. Skip handling the push.
            return [2 /*return*/];
          }

          if (!messaging.deliveryMetricsExportedToBigQueryEnabled) return [3 /*break*/, 2];
          return [4 /*yield*/, stageLog(messaging, internalPayload)];
        case 1:
          _a.sent();
          _a.label = 2;
        case 2:
          return [4 /*yield*/, getClientList()];
        case 3:
          clientList = _a.sent();
          if (hasVisibleClients(clientList)) {
            return [2 /*return*/, sendMessagePayloadInternalToWindows(clientList, internalPayload)];
          }
          if (!!!internalPayload.notification) return [3 /*break*/, 5];
          return [4 /*yield*/, showNotification(wrapInternalPayload(internalPayload))];
        case 4:
          _a.sent();
          _a.label = 5;
        case 5:
          if (!messaging) {
            return [2 /*return*/];
          }

          if (!!!messaging.onBackgroundMessageHandler) return [3 /*break*/, 8];
          payload = externalizePayload(internalPayload);
          if (!(typeof messaging.onBackgroundMessageHandler === 'function')) return [3 /*break*/, 7];
          return [4 /*yield*/, messaging.onBackgroundMessageHandler(payload)];
        case 6:
          _a.sent();
          return [3 /*break*/, 8];
        case 7:
          messaging.onBackgroundMessageHandler.next(payload);
          _a.label = 8;
        case 8:
          return [2 /*return*/];
      }
    });
  });
}

function onNotificationClick(event) {
  var _a, _b;
  return tslib.__awaiter(this, void 0, void 0, function () {
    var internalPayload, link, url, originUrl, client;
    return tslib.__generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          internalPayload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];
          if (!internalPayload) {
            return [2 /*return*/];
          } else if (event.action) {
            // User clicked on an action button. This will allow developers to act on action button clicks
            // by using a custom onNotificationClick listener that they define.
            return [2 /*return*/];
          }
          // Prevent other listeners from receiving the event
          event.stopImmediatePropagation();
          event.notification.close();
          link = getLink(internalPayload);
          if (!link) {
            return [2 /*return*/];
          }

          url = new URL(link, self.location.href);
          originUrl = new URL(self.location.origin);
          if (url.host !== originUrl.host) {
            return [2 /*return*/];
          }

          return [4 /*yield*/, getWindowClient(url)];
        case 1:
          client = _c.sent();
          if (!!client) return [3 /*break*/, 4];
          return [4 /*yield*/, self.clients.openWindow(link)];
        case 2:
          client = _c.sent();
          // Wait three seconds for the client to initialize and set up the message handler so that it
          // can receive the message.
          return [4 /*yield*/, sleep(3000)];
        case 3:
          // Wait three seconds for the client to initialize and set up the message handler so that it
          // can receive the message.
          _c.sent();
          return [3 /*break*/, 6];
        case 4:
          return [4 /*yield*/, client.focus()];
        case 5:
          client = _c.sent();
          _c.label = 6;
        case 6:
          if (!client) {
            // Window Client will not be returned if it's for a third party origin.
            return [2 /*return*/];
          }

          internalPayload.messageType = MessageType.NOTIFICATION_CLICKED;
          internalPayload.isFirebaseMessaging = true;
          return [2 /*return*/, client.postMessage(internalPayload)];
      }
    });
  });
}
function wrapInternalPayload(internalPayload) {
  var _a;
  var wrappedInternalPayload = tslib.__assign({}, internalPayload.notification);
  // Put the message payload under FCM_MSG name so we can identify the notification as being an FCM
  // notification vs a notification from somewhere else (i.e. normal web push or developer generated
  // notification).
  wrappedInternalPayload.data = (_a = {}, _a[FCM_MSG] = internalPayload, _a);
  return wrappedInternalPayload;
}
function getMessagePayloadInternal(_a) {
  var data = _a.data;
  if (!data) {
    return null;
  }
  try {
    return data.json();
  } catch (err) {
    // Not JSON so not an FCM message.
    return null;
  }
}
/**
 * @param url The URL to look for when focusing a client.
 * @return Returns an existing window client or a newly opened WindowClient.
 */
function getWindowClient(url) {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var clientList, clientList_1, clientList_1_1, client, clientUrl;
    var e_1, _a;
    return tslib.__generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4 /*yield*/, getClientList()];
        case 1:
          clientList = _b.sent();
          try {
            for (clientList_1 = tslib.__values(clientList), clientList_1_1 = clientList_1.next(); !clientList_1_1.done; clientList_1_1 = clientList_1.next()) {
              client = clientList_1_1.value;
              clientUrl = new URL(client.url, self.location.href);
              if (url.host === clientUrl.host) {
                return [2 /*return*/, client];
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (clientList_1_1 && !clientList_1_1.done && (_a = clientList_1["return"])) _a.call(clientList_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return [2 /*return*/, null];
      }
    });
  });
}
/**
 * @returns If there is currently a visible WindowClient, this method will resolve to true,
 * otherwise false.
 */
function hasVisibleClients(clientList) {
  return clientList.some(function (client) {
    return client.visibilityState === 'visible' &&
    // Ignore chrome-extension clients as that matches the background pages of extensions, which
    // are always considered visible for some reason.
    !client.url.startsWith('chrome-extension://');
  });
}
function sendMessagePayloadInternalToWindows(clientList, internalPayload) {
  var e_2, _a;
  internalPayload.isFirebaseMessaging = true;
  internalPayload.messageType = MessageType.PUSH_RECEIVED;
  try {
    for (var clientList_2 = tslib.__values(clientList), clientList_2_1 = clientList_2.next(); !clientList_2_1.done; clientList_2_1 = clientList_2.next()) {
      var client = clientList_2_1.value;
      client.postMessage(internalPayload);
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (clientList_2_1 && !clientList_2_1.done && (_a = clientList_2["return"])) _a.call(clientList_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
}
function getClientList() {
  return self.clients.matchAll({
    type: 'window',
    includeUncontrolled: true
    // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
  });
}

function showNotification(notificationPayloadInternal) {
  var _a;
  // Note: Firefox does not support the maxActions property.
  // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions
  var actions = notificationPayloadInternal.actions;
  var maxActions = Notification.maxActions;
  if (actions && maxActions && actions.length > maxActions) {
    console.warn("This browser only supports ".concat(maxActions, " actions. The remaining actions will not be displayed."));
  }
  return self.registration.showNotification( /* title= */(_a = notificationPayloadInternal.title) !== null && _a !== void 0 ? _a : '', notificationPayloadInternal);
}
function getLink(payload) {
  var _a, _b, _c;
  // eslint-disable-next-line camelcase
  var link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;
  if (link) {
    return link;
  }
  if (isConsoleMessage(payload.data)) {
    // Notification created in the Firebase Console. Redirect to origin.
    return self.location.origin;
  } else {
    return null;
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
  var e_1, _a;
  if (!app || !app.options) {
    throw getMissingValueError('App Configuration Object');
  }
  if (!app.name) {
    throw getMissingValueError('App Name');
  }
  // Required app config keys
  var configKeys = ['projectId', 'apiKey', 'appId', 'messagingSenderId'];
  var options = app.options;
  try {
    for (var configKeys_1 = tslib.__values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
      var keyName = configKeys_1_1.value;
      if (!options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1["return"])) _a.call(configKeys_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return {
    appName: app.name,
    projectId: options.projectId,
    apiKey: options.apiKey,
    appId: options.appId,
    senderId: options.messagingSenderId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
    valueName: valueName
  });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MessagingService = /** @class */function () {
  function MessagingService(app, installations, analyticsProvider) {
    // logging is only done with end user consent. Default to false.
    this.deliveryMetricsExportedToBigQueryEnabled = false;
    this.onBackgroundMessageHandler = null;
    this.onMessageHandler = null;
    this.logEvents = [];
    this.isLogServiceStarted = false;
    var appConfig = extractAppConfig(app);
    this.firebaseDependencies = {
      app: app,
      appConfig: appConfig,
      installations: installations,
      analyticsProvider: analyticsProvider
    };
  }
  MessagingService.prototype._delete = function () {
    return Promise.resolve();
  };
  return MessagingService;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SwMessagingFactory = function SwMessagingFactory(container) {
  var messaging = new MessagingService(container.getProvider('app').getImmediate(), container.getProvider('installations-internal').getImmediate(), container.getProvider('analytics-internal'));
  self.addEventListener('push', function (e) {
    e.waitUntil(onPush(e, messaging));
  });
  self.addEventListener('pushsubscriptionchange', function (e) {
    e.waitUntil(onSubChange(e, messaging));
  });
  self.addEventListener('notificationclick', function (e) {
    e.waitUntil(onNotificationClick(e));
  });
  return messaging;
};
/**
 * The messaging instance registered in sw is named differently than that of in client. This is
 * because both `registerMessagingInWindow` and `registerMessagingInSw` would be called in
 * `messaging-compat` and component with the same name can only be registered once.
 */
function registerMessagingInSw() {
  app._registerComponent(new component.Component('messaging-sw', SwMessagingFactory, "PUBLIC" /* ComponentType.PUBLIC */));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Checks whether all required APIs exist within SW Context
 * @returns a Promise that resolves to a boolean.
 *
 * @public
 */
function isSwSupported() {
  return tslib.__awaiter(this, void 0, void 0, function () {
    var _a;
    return tslib.__generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = util.isIndexedDBAvailable();
          if (!_a) return [3 /*break*/, 2];
          return [4 /*yield*/, util.validateIndexedDBOpenable()];
        case 1:
          _a = _b.sent();
          _b.label = 2;
        case 2:
          // firebase-js-sdk/issues/2393 reveals that idb#open in Safari iframe and Firefox private browsing
          // might be prohibited to run. In these contexts, an error would be thrown during the messaging
          // instantiating phase, informing the developers to import/call isSupported for special handling.
          return [2 /*return*/, _a && 'PushManager' in self && 'Notification' in self && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey')];
      }
    });
  });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onBackgroundMessage$1(messaging, nextOrObserver) {
  if (self.document !== undefined) {
    throw ERROR_FACTORY.create("only-available-in-sw" /* ErrorCode.AVAILABLE_IN_SW */);
  }

  messaging.onBackgroundMessageHandler = nextOrObserver;
  return function () {
    messaging.onBackgroundMessageHandler = null;
  };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _setDeliveryMetricsExportedToBigQueryEnabled(messaging, enable) {
  messaging.deliveryMetricsExportedToBigQueryEnabled = enable;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Retrieves a Firebase Cloud Messaging instance.
 *
 * @returns The Firebase Cloud Messaging instance associated with the provided firebase app.
 *
 * @public
 */
function getMessagingInSw(app$1) {
  if (app$1 === void 0) {
    app$1 = app.getApp();
  }
  // Conscious decision to make this async check non-blocking during the messaging instance
  // initialization phase for performance consideration. An error would be thrown latter for
  // developer's information. Developers can then choose to import and call `isSupported` for
  // special handling.
  isSwSupported().then(function (isSupported) {
    // If `isSwSupported()` resolved, but returned false.
    if (!isSupported) {
      throw ERROR_FACTORY.create("unsupported-browser" /* ErrorCode.UNSUPPORTED_BROWSER */);
    }
  }, function (_) {
    // If `isSwSupported()` rejected.
    throw ERROR_FACTORY.create("indexed-db-unsupported" /* ErrorCode.INDEXED_DB_UNSUPPORTED */);
  });

  return app._getProvider(util.getModularInstance(app$1), 'messaging-sw').getImmediate();
}
/**
 * Called when a message is received while the app is in the background. An app is considered to be
 * in the background if no active window is displayed.
 *
 * @param messaging - The {@link Messaging} instance.
 * @param nextOrObserver - This function, or observer object with `next` defined, is called when a
 * message is received and the app is currently in the background.
 *
 * @returns To stop listening for messages execute this returned function
 *
 * @public
 */
function onBackgroundMessage(messaging, nextOrObserver) {
  messaging = util.getModularInstance(messaging);
  return onBackgroundMessage$1(messaging, nextOrObserver);
}
/**
 * Enables or disables Firebase Cloud Messaging message delivery metrics export to BigQuery. By
 * default, message delivery metrics are not exported to BigQuery. Use this method to enable or
 * disable the export at runtime.
 *
 * @param messaging - The `FirebaseMessaging` instance.
 * @param enable - Whether Firebase Cloud Messaging should export message delivery metrics to
 * BigQuery.
 *
 * @public
 */
function experimentalSetDeliveryMetricsExportedToBigQueryEnabled(messaging, enable) {
  messaging = util.getModularInstance(messaging);
  return _setDeliveryMetricsExportedToBigQueryEnabled(messaging, enable);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerMessagingInSw();
exports.experimentalSetDeliveryMetricsExportedToBigQueryEnabled = experimentalSetDeliveryMetricsExportedToBigQueryEnabled;
exports.getMessaging = getMessagingInSw;
exports.isSupported = isSwSupported;
exports.onBackgroundMessage = onBackgroundMessage;

},{"@firebase/app":1,"@firebase/component":4,"@firebase/installations":5,"@firebase/util":8,"idb":11,"tslib":14}],8:[function(require,module,exports){
(function (process,global){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sha1 = exports.RANDOM_FACTOR = exports.MAX_VALUE_MILLIS = exports.FirebaseError = exports.ErrorFactory = exports.Deferred = exports.DecodeBase64StringError = exports.CONSTANTS = void 0;
exports.areCookiesEnabled = areCookiesEnabled;
exports.assertionError = exports.assert = void 0;
exports.async = async;
exports.base64urlEncodeWithoutPadding = exports.base64Encode = exports.base64Decode = exports.base64 = void 0;
exports.calculateBackoffMillis = calculateBackoffMillis;
exports.contains = contains;
exports.createMockUserToken = createMockUserToken;
exports.createSubscribe = createSubscribe;
exports.decode = void 0;
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.extractQuerystring = extractQuerystring;
exports.getExperimentalSetting = exports.getDefaults = exports.getDefaultEmulatorHostnameAndPort = exports.getDefaultEmulatorHost = exports.getDefaultAppConfig = void 0;
exports.getGlobal = getGlobal;
exports.getModularInstance = getModularInstance;
exports.getUA = getUA;
exports.isAdmin = void 0;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isIndexedDBAvailable = isIndexedDBAvailable;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.issuedAtTime = exports.isValidTimestamp = exports.isValidFormat = void 0;
exports.jsonEval = jsonEval;
exports.map = map;
exports.ordinal = ordinal;
exports.promiseWithTimeout = promiseWithTimeout;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringToByteArray = exports.stringLength = void 0;
exports.stringify = stringify;
exports.validateArgCount = exports.uuidv4 = void 0;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
exports.validateNamespace = validateNamespace;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = exports.CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,
  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,
  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = exports.assert = function assert(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = exports.assertionError = function assertionError(message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray$1 = function stringToByteArray$1(str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function byteArrayToString(bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
    c = 0;
  while (pos < bytes.length) {
    var c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var _c = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (_c & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var _c2 = bytes[pos++];
      var _c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (_c2 & 63) << 6 | _c3 & 63);
    }
  }
  return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = exports.base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }
    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];
    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join('');
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function encodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function decodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];
    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw new DecodeBase64StringError();
      }
      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      // We want quick mappings back and forth, so we precompute two maps.
      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        // Be forgiving when decoding and correctly decode both encodings.
        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * An error encountered while decoding base64 string.
 */
var DecodeBase64StringError = exports.DecodeBase64StringError = /*#__PURE__*/function (_Error) {
  _inherits(DecodeBase64StringError, _Error);
  var _super = _createSuper(DecodeBase64StringError);
  function DecodeBase64StringError() {
    var _this;
    _classCallCheck(this, DecodeBase64StringError);
    _this = _super.apply(this, arguments);
    _this.name = 'DecodeBase64StringError';
    return _this;
  }
  return _createClass(DecodeBase64StringError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * URL-safe base64 encoding
 */
var base64Encode = exports.base64Encode = function base64Encode(str) {
  var utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
var base64urlEncodeWithoutPadding = exports.base64urlEncodeWithoutPadding = function base64urlEncodeWithoutPadding(str) {
  // Use base64url encoding and remove padding in the end (dot characters).
  return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = exports.base64Decode = function base64Decode(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }
  return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === undefined) {
        target = {};
      }
      break;
    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;
    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }
  for (var prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey(key) {
  return key !== '__proto__';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */
function getGlobal() {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var getDefaultsFromGlobal = function getDefaultsFromGlobal() {
  return getGlobal().__FIREBASE_DEFAULTS__;
};
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */
var getDefaultsFromEnvVariable = function getDefaultsFromEnvVariable() {
  if (typeof process === 'undefined' || typeof process.env === 'undefined') {
    return;
  }
  var defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
  if (defaultsJsonString) {
    return JSON.parse(defaultsJsonString);
  }
};
var getDefaultsFromCookie = function getDefaultsFromCookie() {
  if (typeof document === 'undefined') {
    return;
  }
  var match;
  try {
    match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch (e) {
    // Some environments such as Angular Universal SSR have a
    // `document` object but error on accessing `document.cookie`.
    return;
  }
  var decoded = match && base64Decode(match[1]);
  return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */
var getDefaults = exports.getDefaults = function getDefaults() {
  try {
    return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
  } catch (e) {
    /**
     * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
     * to any environment case we have not accounted for. Log to
     * info instead of swallowing so we can find these unknown cases
     * and add paths for them if needed.
     */
    console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));
    return;
  }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */
var getDefaultEmulatorHost = exports.getDefaultEmulatorHost = function getDefaultEmulatorHost(productName) {
  var _a, _b;
  return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
};
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */
var getDefaultEmulatorHostnameAndPort = exports.getDefaultEmulatorHostnameAndPort = function getDefaultEmulatorHostnameAndPort(productName) {
  var host = getDefaultEmulatorHost(productName);
  if (!host) {
    return undefined;
  }
  var separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
  if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
    throw new Error("Invalid host ".concat(host, " with no separate hostname and port!"));
  }
  // eslint-disable-next-line no-restricted-globals
  var port = parseInt(host.substring(separatorIndex + 1), 10);
  if (host[0] === '[') {
    // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
    return [host.substring(1, separatorIndex - 1), port];
  } else {
    return [host.substring(0, separatorIndex), port];
  }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */
var getDefaultAppConfig = exports.getDefaultAppConfig = function getDefaultAppConfig() {
  var _a;
  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
};
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */
var getExperimentalSetting = exports.getExperimentalSetting = function getExperimentalSetting(name) {
  var _a;
  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a["_".concat(name)];
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = exports.Deferred = /*#__PURE__*/function () {
  function Deferred() {
    var _this2 = this;
    _classCallCheck(this, Deferred);
    this.reject = function () {};
    this.resolve = function () {};
    this.promise = new Promise(function (resolve, reject) {
      _this2.resolve = resolve;
      _this2.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  _createClass(Deferred, [{
    key: "wrapCallback",
    value: function wrapCallback(callback) {
      var _this3 = this;
      return function (error, value) {
        if (error) {
          _this3.reject(error);
        } else {
          _this3.resolve(value);
        }
        if (typeof callback === 'function') {
          // Attaching noop handler just in case developer wasn't expecting
          // promises
          _this3.promise["catch"](function () {});
          // Some of our callbacks don't expect a value and our own tests
          // assert that the parameter length is 1
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  }]);
  return Deferred;
}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  }
  // Unsecured JWTs use "none" as the algorithm.
  var header = {
    alg: 'none',
    type: 'JWT'
  };
  var project = projectId || 'demo-project';
  var iat = token.iat || 0;
  var sub = token.sub || token.user_id;
  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }
  var payload = Object.assign({
    // Set all required fields to decent defaults
    iss: "https://securetoken.google.com/".concat(project),
    aud: project,
    iat: iat,
    exp: iat + 3600,
    auth_time: iat,
    sub: sub,
    user_id: sub,
    firebase: {
      sign_in_provider: 'custom',
      identities: {}
    }
  }, token);
  // Unsecured JWTs use the empty string as a signature.
  var signature = '';
  return [base64urlEncodeWithoutPadding(JSON.stringify(header)), base64urlEncodeWithoutPadding(JSON.stringify(payload)), signature].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
  return typeof window !== 'undefined' &&
  // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
  var _a;
  var forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
  if (forceEnvironment === 'node') {
    return true;
  } else if (forceEnvironment === 'browser') {
    return false;
  }
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
  return (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self.self === self;
}
function isBrowserExtension() {
  var runtime = (typeof chrome === "undefined" ? "undefined" : _typeof(chrome)) === 'object' ? chrome.runtime : (typeof browser === "undefined" ? "undefined" : _typeof(browser)) === 'object' ? browser.runtime : undefined;
  return _typeof(runtime) === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
  return (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */
function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
  try {
    return (typeof indexedDB === "undefined" ? "undefined" : _typeof(indexedDB)) === 'object';
  } catch (e) {
    return false;
  }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
  return new Promise(function (resolve, reject) {
    try {
      var preExist = true;
      var DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
      var request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = function () {
        request.result.close();
        // delete database only when it doesn't pre-exist
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = function () {
        preExist = false;
      };
      request.onerror = function () {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
  if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
    return false;
  }
  return true;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = exports.FirebaseError = /*#__PURE__*/function (_Error2) {
  _inherits(FirebaseError, _Error2);
  var _super2 = _createSuper(FirebaseError);
  function FirebaseError( /** The error code for this error. */
  code, message, /** Custom data for this error. */
  customData) {
    var _this4;
    _classCallCheck(this, FirebaseError);
    _this4 = _super2.call(this, message);
    _this4.code = code;
    _this4.customData = customData;
    /** The custom name for all FirebaseErrors. */
    _this4.name = ERROR_NAME;
    // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_assertThisInitialized(_this4), FirebaseError.prototype);
    // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this4), ErrorFactory.prototype.create);
    }
    return _this4;
  }
  return _createClass(FirebaseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorFactory = exports.ErrorFactory = /*#__PURE__*/function () {
  function ErrorFactory(service, serviceName, errors) {
    _classCallCheck(this, ErrorFactory);
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  _createClass(ErrorFactory, [{
    key: "create",
    value: function create(code) {
      var customData = (arguments.length <= 1 ? undefined : arguments[1]) || {};
      var fullCode = "".concat(this.service, "/").concat(code);
      var template = this.errors[code];
      var message = template ? replaceTemplate(template, customData) : 'Error';
      // Service Name: Error message (service/code).
      var fullMessage = "".concat(this.serviceName, ": ").concat(message, " (").concat(fullCode, ").");
      var error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  }]);
  return ErrorFactory;
}();
function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<".concat(key, "?>");
  });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
  return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = exports.decode = function decode(token) {
  var header = {},
    claims = {},
    data = {},
    signature = '';
  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}
  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = exports.isValidTimestamp = function isValidTimestamp(token) {
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0,
    validUntil = 0;
  if (_typeof(claims) === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }
    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }
  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = exports.issuedAtTime = function issuedAtTime(token) {
  var claims = decode(token).claims;
  if (_typeof(claims) === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }
  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = exports.isValidFormat = function isValidFormat(token) {
  var decoded = decode(token),
    claims = decoded.claims;
  return !!claims && _typeof(claims) === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = exports.isAdmin = function isAdmin(token) {
  var claims = decode(token).claims;
  return _typeof(claims) === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}
function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}
function map(obj, fn, contextObj) {
  var res = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }
  return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
    var k = _aKeys[_i];
    if (!bKeys.includes(k)) {
      return false;
    }
    var aProp = a[k];
    var bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (var _i2 = 0, _bKeys = bKeys; _i2 < _bKeys.length; _i2++) {
    var _k = _bKeys[_i2];
    if (!aKeys.includes(_k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && _typeof(thing) === 'object';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */
function promiseWithTimeout(promise) {
  var timeInMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  var deferredPromise = new Deferred();
  setTimeout(function () {
    return deferredPromise.reject('timeout!');
  }, timeInMS);
  promise.then(deferredPromise.resolve, deferredPromise.reject);
  return deferredPromise.promise;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
  var params = [];
  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };
  for (var _i3 = 0, _Object$entries = Object.entries(querystringParams); _i3 < _Object$entries.length; _i3++) {
    _loop();
  }
  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
  var obj = {};
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) {
    if (token) {
      var _token$split = token.split('='),
        _token$split2 = _slicedToArray(_token$split, 2),
        key = _token$split2[0],
        value = _token$split2[1];
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
  var queryStart = url.indexOf('?');
  if (!queryStart) {
    return '';
  }
  var fragmentStart = url.indexOf('#', queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = exports.Sha1 = /*#__PURE__*/function () {
  function Sha1() {
    _classCallCheck(this, Sha1);
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */
    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */
    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */
    this.pad_ = [];
    /**
     * @private {number}
     */
    this.inbuf_ = 0;
    /**
     * @private {number}
     */
    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;
    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }
    this.reset();
  }
  _createClass(Sha1, [{
    key: "reset",
    value: function reset() {
      this.chain_[0] = 0x67452301;
      this.chain_[1] = 0xefcdab89;
      this.chain_[2] = 0x98badcfe;
      this.chain_[3] = 0x10325476;
      this.chain_[4] = 0xc3d2e1f0;
      this.inbuf_ = 0;
      this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
  }, {
    key: "compress_",
    value: function compress_(buf, offset) {
      if (!offset) {
        offset = 0;
      }
      var W = this.W_;
      // get 16 big endian words
      if (typeof buf === 'string') {
        for (var i = 0; i < 16; i++) {
          // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
          // have a bug that turns the post-increment ++ operator into pre-increment
          // during JIT compilation.  We have code that depends heavily on SHA-1 for
          // correctness and which is affected by this bug, so I've removed all uses
          // of post-increment ++ in which the result value is used.  We can revert
          // this change once the Safari bug
          // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
          // most clients have been updated.
          W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
          offset += 4;
        }
      } else {
        for (var _i4 = 0; _i4 < 16; _i4++) {
          W[_i4] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
          offset += 4;
        }
      }
      // expand to 80 words
      for (var _i5 = 16; _i5 < 80; _i5++) {
        var t = W[_i5 - 3] ^ W[_i5 - 8] ^ W[_i5 - 14] ^ W[_i5 - 16];
        W[_i5] = (t << 1 | t >>> 31) & 0xffffffff;
      }
      var a = this.chain_[0];
      var b = this.chain_[1];
      var c = this.chain_[2];
      var d = this.chain_[3];
      var e = this.chain_[4];
      var f, k;
      // TODO(user): Try to unroll this loop to speed up the computation.
      for (var _i6 = 0; _i6 < 80; _i6++) {
        if (_i6 < 40) {
          if (_i6 < 20) {
            f = d ^ b & (c ^ d);
            k = 0x5a827999;
          } else {
            f = b ^ c ^ d;
            k = 0x6ed9eba1;
          }
        } else {
          if (_i6 < 60) {
            f = b & c | d & (b | c);
            k = 0x8f1bbcdc;
          } else {
            f = b ^ c ^ d;
            k = 0xca62c1d6;
          }
        }
        var _t = (a << 5 | a >>> 27) + f + e + k + W[_i6] & 0xffffffff;
        e = d;
        d = c;
        c = (b << 30 | b >>> 2) & 0xffffffff;
        b = a;
        a = _t;
      }
      this.chain_[0] = this.chain_[0] + a & 0xffffffff;
      this.chain_[1] = this.chain_[1] + b & 0xffffffff;
      this.chain_[2] = this.chain_[2] + c & 0xffffffff;
      this.chain_[3] = this.chain_[3] + d & 0xffffffff;
      this.chain_[4] = this.chain_[4] + e & 0xffffffff;
    }
  }, {
    key: "update",
    value: function update(bytes, length) {
      // TODO(johnlenz): tighten the function signature and remove this check
      if (bytes == null) {
        return;
      }
      if (length === undefined) {
        length = bytes.length;
      }
      var lengthMinusBlock = length - this.blockSize;
      var n = 0;
      // Using local instead of member variables gives ~5% speedup on Firefox 16.
      var buf = this.buf_;
      var inbuf = this.inbuf_;
      // The outer while loop should execute at most twice.
      while (n < length) {
        // When we have no data in the block to top up, we can directly process the
        // input buffer (assuming it contains sufficient data). This gives ~25%
        // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
        // the data is provided in large chunks (or in multiples of 64 bytes).
        if (inbuf === 0) {
          while (n <= lengthMinusBlock) {
            this.compress_(bytes, n);
            n += this.blockSize;
          }
        }
        if (typeof bytes === 'string') {
          while (n < length) {
            buf[inbuf] = bytes.charCodeAt(n);
            ++inbuf;
            ++n;
            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0;
              // Jump to the outer loop so we use the full-block optimization.
              break;
            }
          }
        } else {
          while (n < length) {
            buf[inbuf] = bytes[n];
            ++inbuf;
            ++n;
            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0;
              // Jump to the outer loop so we use the full-block optimization.
              break;
            }
          }
        }
      }
      this.inbuf_ = inbuf;
      this.total_ += length;
    }
    /** @override */
  }, {
    key: "digest",
    value: function digest() {
      var digest = [];
      var totalBits = this.total_ * 8;
      // Add pad 0x80 0x00*.
      if (this.inbuf_ < 56) {
        this.update(this.pad_, 56 - this.inbuf_);
      } else {
        this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
      }
      // Add # bits.
      for (var i = this.blockSize - 1; i >= 56; i--) {
        this.buf_[i] = totalBits & 255;
        totalBits /= 256; // Don't use bit-shifting here!
      }

      this.compress_(this.buf_);
      var n = 0;
      for (var _i7 = 0; _i7 < 5; _i7++) {
        for (var j = 24; j >= 0; j -= 8) {
          digest[n] = this.chain_[_i7] >> j & 255;
          ++n;
        }
      }
      return digest;
    }
  }]);
  return Sha1;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /*#__PURE__*/function () {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function ObserverProxy(executor, onNoObservers) {
    var _this5 = this;
    _classCallCheck(this, ObserverProxy);
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    // Micro-task scheduling by calling task.then().
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.
    this.task.then(function () {
      executor(_this5);
    })["catch"](function (e) {
      _this5.error(e);
    });
  }
  _createClass(ObserverProxy, [{
    key: "next",
    value: function next(value) {
      this.forEachObserver(function (observer) {
        observer.next(value);
      });
    }
  }, {
    key: "error",
    value: function error(_error) {
      this.forEachObserver(function (observer) {
        observer.error(_error);
      });
      this.close(_error);
    }
  }, {
    key: "complete",
    value: function complete() {
      this.forEachObserver(function (observer) {
        observer.complete();
      });
      this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
  }, {
    key: "subscribe",
    value: function subscribe(nextOrObserver, error, complete) {
      var _this6 = this;
      var observer;
      if (nextOrObserver === undefined && error === undefined && complete === undefined) {
        throw new Error('Missing Observer.');
      }
      // Assemble an Observer object when passed as callback functions.
      if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
        observer = nextOrObserver;
      } else {
        observer = {
          next: nextOrObserver,
          error: error,
          complete: complete
        };
      }
      if (observer.next === undefined) {
        observer.next = noop;
      }
      if (observer.error === undefined) {
        observer.error = noop;
      }
      if (observer.complete === undefined) {
        observer.complete = noop;
      }
      var unsub = this.unsubscribeOne.bind(this, this.observers.length);
      // Attempt to subscribe to a terminated Observable - we
      // just respond to the Observer with the final error or complete
      // event.
      if (this.finalized) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
          try {
            if (_this6.finalError) {
              observer.error(_this6.finalError);
            } else {
              observer.complete();
            }
          } catch (e) {
            // nothing
          }
          return;
        });
      }
      this.observers.push(observer);
      return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
  }, {
    key: "unsubscribeOne",
    value: function unsubscribeOne(i) {
      if (this.observers === undefined || this.observers[i] === undefined) {
        return;
      }
      delete this.observers[i];
      this.observerCount -= 1;
      if (this.observerCount === 0 && this.onNoObservers !== undefined) {
        this.onNoObservers(this);
      }
    }
  }, {
    key: "forEachObserver",
    value: function forEachObserver(fn) {
      if (this.finalized) {
        // Already closed by previous event....just eat the additional values.
        return;
      }
      // Since sendOne calls asynchronously - there is no chance that
      // this.observers will become undefined.
      for (var i = 0; i < this.observers.length; i++) {
        this.sendOne(i, fn);
      }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
  }, {
    key: "sendOne",
    value: function sendOne(i, fn) {
      var _this7 = this;
      // Execute the callback asynchronously
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        if (_this7.observers !== undefined && _this7.observers[i] !== undefined) {
          try {
            fn(_this7.observers[i]);
          } catch (e) {
            // Ignore exceptions raised in Observers or missing methods of an
            // Observer.
            // Log error to console. b/31404806
            if (typeof console !== 'undefined' && console.error) {
              console.error(e);
            }
          }
        }
      });
    }
  }, {
    key: "close",
    value: function close(err) {
      var _this8 = this;
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      if (err !== undefined) {
        this.finalError = err;
      }
      // Proxy is no longer needed - garbage collect references
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        _this8.observers = undefined;
        _this8.onNoObservers = undefined;
      });
    }
  }]);
  return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    Promise.resolve(true).then(function () {
      fn.apply(void 0, args);
    })["catch"](function (error) {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
  if (_typeof(obj) !== 'object' || obj === null) {
    return false;
  }
  var _iterator = _createForOfIteratorHelper(methods),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var method = _step.value;
      if (method in obj && typeof obj[method] === 'function') {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
function noop() {
  // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = exports.validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
  var argError;
  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }
  if (argError) {
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
  return "".concat(fnName, " failed: ").concat(argName, " argument ");
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
  if (optional && !namespace) {
    return;
  }
  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
  }
}
function validateCallback(fnName, argumentName,
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
  if (optional && !callback) {
    return;
  }
  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
  }
}
function validateContextObject(fnName, argumentName, context, optional) {
  if (optional && !context) {
    return;
  }
  if (_typeof(context) !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
  }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray = exports.stringToByteArray = function stringToByteArray(str) {
  var out = [];
  var p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    // Is this the lead surrogate in a surrogate pair?
    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.
      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
      c = 0x10000 + (high << 10) + low;
    }
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = exports.stringLength = function stringLength(str) {
  var p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }
  return p;
};

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */
var uuidv4 = exports.uuidv4 = function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
var MAX_VALUE_MILLIS = exports.MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
var RANDOM_FACTOR = exports.RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount) {
  var intervalMillis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_INTERVAL_MILLIS;
  var backoffFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_BACKOFF_FACTOR;
  // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.
  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.
  var randomWait = Math.round(
  // A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * (
  // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2);
  // Limits backoff to max to avoid effectively permanent backoff.
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
  if (!Number.isFinite(i)) {
    return "".concat(i);
  }
  return i + indicator(i);
}
function indicator(i) {
  i = Math.abs(i);
  var cent = i % 100;
  if (cent >= 10 && cent <= 20) {
    return 'th';
  }
  var dec = i % 10;
  if (dec === 1) {
    return 'st';
  }
  if (dec === 2) {
    return 'nd';
  }
  if (dec === 3) {
    return 'rd';
  }
  return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":13}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _app = require("@firebase/app");
Object.keys(_app).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _app[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _app[key];
    }
  });
});
var name = "firebase";
var version = "10.6.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0, _app.registerVersion)(name, version, 'app');

},{"@firebase/app":1}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _sw = require("@firebase/messaging/sw");
Object.keys(_sw).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sw[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sw[key];
    }
  });
});

},{"@firebase/messaging/sw":7}],11:[function(require,module,exports){
'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, '__esModule', {
  value: true
});
var wrapIdbValue = require('./wrap-idb-value.cjs');

/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    blocked = _ref.blocked,
    upgrade = _ref.upgrade,
    blocking = _ref.blocking,
    terminated = _ref.terminated;
  var request = indexedDB.open(name, version);
  var openPromise = wrapIdbValue.wrap(request);
  if (upgrade) {
    request.addEventListener('upgradeneeded', function (event) {
      upgrade(wrapIdbValue.wrap(request.result), event.oldVersion, event.newVersion, wrapIdbValue.wrap(request.transaction));
    });
  }
  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  openPromise.then(function (db) {
    if (terminated) db.addEventListener('close', function () {
      return terminated();
    });
    if (blocking) db.addEventListener('versionchange', function () {
      return blocking();
    });
  })["catch"](function () {});
  return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    blocked = _ref2.blocked;
  var request = indexedDB.deleteDatabase(name);
  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  return wrapIdbValue.wrap(request).then(function () {
    return undefined;
  });
}
var readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
var writeMethods = ['put', 'add', 'delete', 'clear'];
var cachedMethods = new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
    return;
  }
  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  var targetFuncName = prop.replace(/FromIndex$/, '');
  var useIndex = prop !== targetFuncName;
  var isWrite = writeMethods.includes(targetFuncName);
  if (
  // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  var method = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(storeName) {
      var _target;
      var tx,
        target,
        _len,
        args,
        _key,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
            tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
            target = tx.store;
            for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = _args[_key];
            }
            if (useIndex) target = target.index(args.shift());
            // Must reject if op rejects.
            // If it's a write operation, must reject if tx.done rejects.
            // Must reject with op rejection first.
            // Must resolve with op value.
            // Must handle both promises (no unhandled rejections)
            _context.next = 6;
            return Promise.all([(_target = target)[targetFuncName].apply(_target, args), isWrite && tx.done]);
          case 6:
            return _context.abrupt("return", _context.sent[0]);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    return function method(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  cachedMethods.set(prop, method);
  return method;
}
wrapIdbValue.replaceTraps(function (oldTraps) {
  return _objectSpread(_objectSpread({}, oldTraps), {}, {
    get: function get(target, prop, receiver) {
      return getMethod(target, prop) || oldTraps.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      return !!getMethod(target, prop) || oldTraps.has(target, prop);
    }
  });
});
exports.unwrap = wrapIdbValue.unwrap;
exports.wrap = wrapIdbValue.wrap;
exports.deleteDB = deleteDB;
exports.openDB = openDB;

},{"./wrap-idb-value.cjs":12}],12:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],13:[function(require,module,exports){
"use strict";

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

},{}],14:[function(require,module,exports){
(function (global){(function (){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, Symbol, Reflect, Promise, SuppressedError */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __esDecorate;
var __runInitializers;
var __propKey;
var __setFunctionName;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var _await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
var __addDisposableResource;
var __disposeResources;
(function (factory) {
  var root = (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : _typeof(this) === "object" ? this : {};
  if (typeof define === "function" && define.amd) {
    define("tslib", ["exports"], function (exports) {
      factory(createExporter(root, createExporter(exports)));
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    factory(createExporter(root, createExporter(module.exports)));
  } else {
    factory(createExporter(root));
  }
  function createExporter(exports, previous) {
    if (exports !== root) {
      if (typeof Object.create === "function") {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
      } else {
        exports.__esModule = true;
      }
    }
    return function (id, v) {
      return exports[id] = previous ? previous(id, v) : v;
    };
  }
})(function (exporter) {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  __extends = function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  __rest = function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  __decorate = function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  __param = function __param(paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
  __esDecorate = function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || _typeof(result) !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  __runInitializers = function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  __propKey = function __propKey(x) {
    return _typeof(x) === "symbol" ? x : "".concat(x);
  };
  __setFunctionName = function __setFunctionName(f, name, prefix) {
    if (_typeof(name) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
      configurable: true,
      value: prefix ? "".concat(prefix, " ", name) : name
    });
  };
  __metadata = function __metadata(metadataKey, metadataValue) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  };
  __awaiter = function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  __generator = function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  };
  __exportStar = function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  };
  __createBinding = Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = {
        enumerable: true,
        get: function get() {
          return m[k];
        }
      };
    }
    Object.defineProperty(o, k2, desc);
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  };
  __values = function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  __read = function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };

  /** @deprecated */
  __spread = function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  };

  /** @deprecated */
  __spreadArrays = function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  };
  __spreadArray = function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  _await = function __await(v) {
    return this instanceof _await ? (this.v = v, this) : new _await(v);
  };
  __asyncGenerator = function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i;
    function verb(n) {
      if (g[n]) i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  };
  __asyncDelegator = function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function (v) {
        return (p = !p) ? {
          value: _await(o[n](v)),
          done: false
        } : f ? f(v) : v;
      } : f;
    }
  };
  __asyncValues = function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
      i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({
          value: v,
          done: d
        });
      }, reject);
    }
  };
  __makeTemplateObject = function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", {
        value: raw
      });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
  var __setModuleDefault = Object.create ? function (o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function (o, v) {
    o["default"] = v;
  };
  __importStar = function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
  __importDefault = function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };
  __classPrivateFieldGet = function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  __classPrivateFieldSet = function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  __classPrivateFieldIn = function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || _typeof(receiver) !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  };
  __addDisposableResource = function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
      if (_typeof(value) !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  __disposeResources = function __disposeResources(env) {
    function fail(e) {
      env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async) return Promise.resolve(result).then(next, function (e) {
            fail(e);
            return next();
          });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError) throw env.error;
    }
    return next();
  };
  exporter("__extends", __extends);
  exporter("__assign", __assign);
  exporter("__rest", __rest);
  exporter("__decorate", __decorate);
  exporter("__param", __param);
  exporter("__esDecorate", __esDecorate);
  exporter("__runInitializers", __runInitializers);
  exporter("__propKey", __propKey);
  exporter("__setFunctionName", __setFunctionName);
  exporter("__metadata", __metadata);
  exporter("__awaiter", __awaiter);
  exporter("__generator", __generator);
  exporter("__exportStar", __exportStar);
  exporter("__createBinding", __createBinding);
  exporter("__values", __values);
  exporter("__read", __read);
  exporter("__spread", __spread);
  exporter("__spreadArrays", __spreadArrays);
  exporter("__spreadArray", __spreadArray);
  exporter("__await", _await);
  exporter("__asyncGenerator", __asyncGenerator);
  exporter("__asyncDelegator", __asyncDelegator);
  exporter("__asyncValues", __asyncValues);
  exporter("__makeTemplateObject", __makeTemplateObject);
  exporter("__importStar", __importStar);
  exporter("__importDefault", __importDefault);
  exporter("__classPrivateFieldGet", __classPrivateFieldGet);
  exporter("__classPrivateFieldSet", __classPrivateFieldSet);
  exporter("__classPrivateFieldIn", __classPrivateFieldIn);
  exporter("__addDisposableResource", __addDisposableResource);
  exporter("__disposeResources", __disposeResources);
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
"use strict";

var _app = require("firebase/app");
var _sw = require("firebase/messaging/sw");
var firebaseApp = (0, _app.initializeApp)({
  apiKey: "AIzaSyAa5kv01Pt2OB8nYbzErFLOVv04uJw4VR8",
  authDomain: "sentria-3af49.firebaseapp.com",
  projectId: "sentria-3af49",
  storageBucket: "sentria-3af49.appspot.com",
  messagingSenderId: "975597926589",
  appId: "1:975597926589:web:4850079f55371b375adfd4"
});
var messaging = (0, _sw.getMessaging)(firebaseApp);
(0, _sw.onBackgroundMessage)(messaging, function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
});

},{"firebase/app":9,"firebase/messaging/sw":10}]},{},[15]);
