/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(46);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return extras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return untracked; });
/* unused harmony export IDerivationState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Atom; });
/* unused harmony export BaseAtom */
/* unused harmony export useStrict */
/* unused harmony export isStrictModeEnabled */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return spy; });
/* unused harmony export comparer */
/* unused harmony export asReference */
/* unused harmony export asFlat */
/* unused harmony export asStructure */
/* unused harmony export asMap */
/* unused harmony export isModifierDescriptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isObservableObject; });
/* unused harmony export isBoxedObservable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObservableArray; });
/* unused harmony export ObservableMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isObservableMap; });
/* unused harmony export map */
/* unused harmony export transaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return observable; });
/* unused harmony export computed */
/* unused harmony export isObservable */
/* unused harmony export isComputed */
/* unused harmony export extendObservable */
/* unused harmony export extendShallowObservable */
/* unused harmony export observe */
/* unused harmony export intercept */
/* unused harmony export autorun */
/* unused harmony export autorunAsync */
/* unused harmony export when */
/* unused harmony export reaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return action; });
/* unused harmony export isAction */
/* unused harmony export runInAction */
/* unused harmony export expr */
/* unused harmony export toJS */
/* unused harmony export createTransformer */
/* unused harmony export whyRun */
/* unused harmony export trace */
/* unused harmony export isArrayLike */
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var BaseAtom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function BaseAtom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    BaseAtom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     */
    BaseAtom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    BaseAtom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    BaseAtom.prototype.toString = function () {
        return this.name;
    };
    return BaseAtom;
}());
var Atom = /** @class */ (function (_super) {
    __extends(Atom, _super);
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.onBecomeObservedHandler = onBecomeObservedHandler;
        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
        _this.isPendingUnobservation = false; // for effective unobserving.
        _this.isBeingTracked = false;
        return _this;
    }
    Atom.prototype.reportObserved = function () {
        startBatch();
        _super.prototype.reportObserved.call(this);
        if (!this.isBeingTracked) {
            this.isBeingTracked = true;
            this.onBecomeObservedHandler();
        }
        endBatch();
        return !!globalState.trackingDerivation;
        // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
        // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
    };
    Atom.prototype.onBecomeUnobserved = function () {
        this.isBeingTracked = false;
        this.onBecomeUnobservedHandler();
    };
    return Atom;
}(BaseAtom));
var isAtom = createInstanceofPredicate("Atom", BaseAtom);

function hasInterceptors(interceptable) {
    return interceptable.interceptors && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
    });
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
var IS_ITERATING_MARKER = "__$$iterating";
function arrayAsIterator(array) {
    // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
    // yet it is quite convenient to be able to use the response both as array directly and as iterator
    // it is suboptimal, but alas...
    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
    var idx = -1;
    addHiddenFinalProp(array, "next", function next() {
        idx++;
        return {
            done: idx >= this.length,
            value: idx < this.length ? this[idx] : undefined
        };
    });
    return array;
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */ (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new BaseAtom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            _this.spliceWithArray(0, 0, initialValues);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = oldItems.slice(0, toIndex).concat([
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
                .values
                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    return arrayAsIterator(this.slice());
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            // TODO: Check `this`?, see #752?
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var UNCHANGED = {};
var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.dehancer = undefined;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", object: _this, newValue: _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue ? newValue : UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(BaseAtom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var messages = {
    m001: "It is not allowed to assign new values to @action fields",
    m002: "`runInAction` expects a function",
    m003: "`runInAction` expects a function without arguments",
    m004: "autorun expects a function",
    m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
    m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
    m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
    m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
    m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
    m012: "computed takes one or two arguments if used as function",
    m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
    m014: "extendObservable expected 2 or more arguments",
    m015: "extendObservable expects an object as first argument",
    m016: "extendObservable should not be used on maps, use map.merge instead",
    m017: "all arguments of extendObservable should be objects",
    m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
    m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
    m020: "modifiers can only be used for individual object properties",
    m021: "observable expects zero or one arguments",
    m022: "@observable can not be used on getters, use @computed instead",
    m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
    m025: "whyRun can only be used on reactions and computed values",
    m026: "`action` can only be invoked on functions",
    m028: "It is not allowed to set `useStrict` when a derivation is running",
    m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
    m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
    m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
    m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
    m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
    m033: "`observe` doesn't support the fire immediately property for observable maps.",
    m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
    m035: "Cannot make the designated object observable; it is not extensible",
    m036: "It is not possible to get index atoms from arrays",
    m037: "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
    m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};
function getMessage(id) {
    return messages[id];
}

function createAction(actionName, fn) {
    invariant(typeof fn === "function", getMessage("m026"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.originalFn = fn;
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function useStrict(strict) {
    invariant(globalState.trackingDerivation === null, getMessage("m028"));
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
function isStrictModeEnabled() {
    return globalState.strictMode;
}
function allowStateChanges(allowStateChanges, func) {
    // TODO: deprecate / refactor this function in next major
    // Currently only used by `@observer`
    // Proposed change: remove first param, rename to `forbidStateChanges`,
    // require error callback instead of the hardcoded error message now used
    // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

/**
 * Constructs a decorator, that normalizes the differences between
 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
 * values during instance creation to properties that have a getter setter.
 *
 * - Sigh -
 *
 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
 */
function createClassPropertyDecorator(
/**
 * This function is invoked once, when the property is added to a new instance.
 * When this happens is not strictly determined due to differences in TS and Babel:
 * Typescript: Usually when constructing the new instance
 * Babel, sometimes Typescript: during the first get / set
 * Both: when calling `runLazyInitializers(instance)`
 */
onInitialize, get, set, enumerable, 
/**
 * Can this decorator invoked with arguments? e.g. @decorator(args)
 */
allowCustomArguments) {
    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
        if (argLen === void 0) { argLen = 0; }
        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
        if (!descriptor) {
            // typescript (except for getter / setters)
            var newDescriptor = {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
                    }
                    else {
                        set.call(this, key, v);
                    }
                }
            };
            if (arguments.length < 3 || (arguments.length === 5 && argLen < 3)) {
                // Typescript target is ES3, so it won't define property for us
                // or using Reflect.decorate polyfill, which will return no descriptor
                // (see https://github.com/mobxjs/mobx/issues/333)
                Object.defineProperty(target, key, newDescriptor);
            }
            return newDescriptor;
        }
        else {
            // babel and typescript getter / setter props
            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || [] // support inheritance
                );
            }
            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
            target.__mobxLazyInitializers.push(function (instance) {
                onInitialize(instance, key, initializer_1 ? initializer_1.call(instance) : value_1, customArgs, descriptor);
            });
            return {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    set.call(this, key, v);
                }
            };
        }
    }
    if (allowCustomArguments) {
        /** If custom arguments are allowed, we should return a function that returns a decorator */
        return function () {
            /** Direct invocation: @decorator bla */
            if (quacksLikeADecorator(arguments))
                return classPropertyDecorator.apply(null, arguments);
            /** Indirect invocation: @decorator(args) bla */
            var outerArgs = arguments;
            var argLen = arguments.length;
            return function (target, key, descriptor) {
                return classPropertyDecorator(target, key, descriptor, outerArgs, argLen);
            };
        };
    }
    return classPropertyDecorator;
}
function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
        addHiddenProp(instance, "__mobxInitializedProps", {});
    instance.__mobxInitializedProps[key] = true;
    onInitialize(instance, key, v, customArgs, baseDescriptor);
}
function runLazyInitializers(instance) {
    if (instance.__mobxDidRunLazyInitializers === true)
        return;
    if (instance.__mobxLazyInitializers) {
        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
        instance.__mobxDidRunLazyInitializers &&
            instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
    }
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}

var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
    var actionName = args && args.length === 1 ? args[0] : value.name || key || "<unnamed action>";
    var wrappedAction = action(actionName, value);
    addHiddenProp(target, key, wrappedAction);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
    defineBoundAction(target, key, value);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, false);
var action = function action(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    return namedActionDecorator(arg2).apply(null, arguments);
};
action.bound = function boundAction(arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
        var action_1 = createAction("<not yet bound action>", arg1);
        action_1.autoBind = true;
        return action_1;
    }
    return boundActionDecorator.apply(null, arguments);
};
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor && typeof descriptor.value === "function") {
            // TypeScript @action method() { }. Defined on proto before being decorated
            // Don't use the field decorator if we are just decorating a method
            descriptor.value = createAction(name, descriptor.value);
            descriptor.enumerable = false;
            descriptor.configurable = true;
            return descriptor;
        }
        if (descriptor !== undefined && descriptor.get !== undefined) {
            throw new Error("[mobx] action is not expected to be used with getters");
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function runInAction(arg1, arg2, arg3) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    var scope = typeof arg1 === "function" ? arg2 : arg3;
    invariant(typeof fn === "function", getMessage("m002"));
    invariant(fn.length === 0, getMessage("m003"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return executeAction(actionName, fn, scope, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    var res = function () {
        return executeAction(propertyName, fn, target, arguments);
    };
    res.isMobxAction = true;
    addHiddenProp(target, propertyName, res);
}

var toString = Object.prototype.toString;
function deepEqual(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a), key;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.peek();
    if (isObservableMap(a))
        return a.entries();
    if (isES6Map(a))
        return iteratorToArray(a.entries());
    return a;
}
function has(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

function autorun(arg1, arg2, arg3) {
    var name, view, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        view = arg2;
        scope = arg3;
    }
    else {
        name = arg1.name || "Autorun@" + getNextId();
        view = arg1;
        scope = arg2;
    }
    invariant(typeof view === "function", getMessage("m004"));
    invariant(isAction(view) === false, getMessage("m005"));
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(name, function () {
        this.track(reactionRunner);
    });
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
function when(arg1, arg2, arg3, arg4) {
    var name, predicate, effect, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        predicate = arg2;
        effect = arg3;
        scope = arg4;
    }
    else {
        name = "When@" + getNextId();
        predicate = arg1;
        effect = arg2;
        scope = arg3;
    }
    var disposer = autorun(name, function (r) {
        if (predicate.call(scope)) {
            r.dispose();
            var prevUntracked = untrackedStart();
            effect.call(scope);
            untrackedEnd(prevUntracked);
        }
    });
    return disposer;
}
function autorunAsync(arg1, arg2, arg3, arg4) {
    var name, func, delay, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        func = arg2;
        delay = arg3;
        scope = arg4;
    }
    else {
        name = arg1.name || "AutorunAsync@" + getNextId();
        func = arg1;
        delay = arg2;
        scope = arg3;
    }
    invariant(isAction(func) === false, getMessage("m006"));
    if (delay === void 0)
        delay = 1;
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(name, function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(reactionRunner);
            }, delay);
        }
    });
    function reactionRunner() {
        func(r);
    }
    r.schedule();
    return r.getDisposer();
}
function reaction(expression, effect, arg3) {
    if (arguments.length > 3) {
        fail(getMessage("m007"));
    }
    if (isModifierDescriptor(expression)) {
        fail(getMessage("m008"));
    }
    var opts;
    if (typeof arg3 === "object") {
        opts = arg3;
    }
    else {
        opts = {};
    }
    opts.name =
        opts.name || expression.name || effect.name || "Reaction@" + getNextId();
    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
    opts.delay = opts.delay || 0;
    opts.compareStructural = opts.compareStructural || opts.struct || false;
    // TODO: creates ugly spy events, use `effect = (r) => runInAction(opts.name, () => effect(r))` instead
    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
    if (opts.context) {
        expression = expression.bind(opts.context);
    }
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    var r = new Reaction(opts.name, function () {
        if (firstTime || opts.delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, opts.delay);
        }
    });
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effect(value, r);
        if (!firstTime && changed === true)
            effect(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce an new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(derivation, scope, equals, name, setter) {
        this.derivation = derivation;
        this.scope = scope;
        this.equals = equals;
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        this.name = name || "ComputedValue@" + getNextId();
        if (setter)
            this.setter = createAction(name + "-setter", setter);
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        clearObserving(this);
        this.value = undefined;
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
        if (globalState.inBatch === 0) {
            // This is an minor optimization which could be omitted to simplify the code
            // The computedValue is accessed outside of any mobx stuff. Batch observing should be enough and don't need
            // tracking as it will never be called again inside this batch.
            startBatch();
            if (shouldCompute(this)) {
                if (this.isTracing !== TraceMode.NONE) {
                    console.log("[mobx.trace] '" + this
                        .name + "' is being read outside a reactive context and doing a full recompute");
                }
                this.value = this.computeValue(false);
            }
            endBatch();
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this
                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, "[ComputedValue '" + this
                .name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                fn: this.derivation
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = (this.value = this.computeValue(true));
        return (wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue));
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            try {
                res = this.derivation.call(this.scope);
            }
            catch (e) {
                res = new CaughtException(e);
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype.whyRun = function () {
        var isTracking = Boolean(globalState.trackingDerivation);
        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking
            ? "[active] the value of this computation is needed by a reaction"
            : this.isComputing
                ? "[get] The value of this computed was requested outside a reaction"
                : "[idle] not running at the moment") + "\n" +
            (this.dependenciesState === IDerivationState.NOT_TRACKING
                ? getMessage("m032")
                : " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this.isComputing && isTracking
                    ? " (... or any observable accessed during the remainder of the current run)"
                    : "") + "\n    " + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, name) {
        this.target = target;
        this.name = name;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name) {
    if (isObservableObject(target) && target.hasOwnProperty("$mobx"))
        return target.$mobx;
    invariant(Object.isExtensible(target), getMessage("m035"));
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
    if (adm.values[propName] && !isComputedValue(adm.values[propName])) {
        // already observable property
        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
        adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.
        return;
    }
    // not yet observable property
    if ("value" in descriptor) {
        // not a computed value
        if (isModifierDescriptor(descriptor.value)) {
            // x : ref(someValue)
            var modifierDescriptor = descriptor.value;
            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
        }
        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
        }
        else if (isComputedValue(descriptor.value)) {
            // x: computed(someExpr)
            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
        }
        else {
            // x: someValue
            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
        }
    }
    else {
        // get x() { return 3 } set x(v) { }
        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, comparer.default, true);
    }
}
function defineObservableProperty(adm, propName, newValue, enhancer) {
    assertPropertyConfigurable(adm.target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: adm.target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
    notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function defineComputedProperty(adm, propName, getter, setter, equals, asInstanceProperty) {
    if (asInstanceProperty)
        assertPropertyConfigurable(adm.target, propName);
    adm.values[propName] = new ComputedValue(getter, adm.target, equals, adm.name + "." + propName, setter);
    if (asInstanceProperty) {
        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
    }
}
function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
    var name = adm.name + "." + propName;
    computedValue.name = name;
    if (!computedValue.scope)
        computedValue.scope = adm.target;
    adm.values[propName] = computedValue;
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = {};
var computedPropertyConfigs = {};
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                setPropertyValue(this, propName, v);
            }
        }));
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: true,
            enumerable: false,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                return this.$mobx.values[propName].set(v);
            }
        }));
}
function setPropertyValue(instance, name, newValue) {
    var adm = instance.$mobx;
    var observable = adm.values[name];
    // intercept
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            type: "update",
            object: instance,
            name: name,
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== UNCHANGED) {
        var notify = hasListeners(adm);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "update",
                object: instance,
                oldValue: observable.value,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        observable.setNewValue(newValue);
        if (notify)
            notifyListeners(adm, change);
        if (notifySpy)
            spyReportEnd();
    }
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: name,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

/**
 * Returns true if the provided value is reactive.
 * @param value object, function or array
 * @param property if property is specified, checks whether value.property is reactive.
 */
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableArray(value) || isObservableMap(value))
            throw new Error(getMessage("m019"));
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}

function createDecoratorForEnhancer(enhancer) {
    invariant(!!enhancer, ":(");
    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
        assertPropertyConfigurable(target, name);
        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
        var adm = asObservableObject(target, undefined);
        defineObservableProperty(adm, name, baseValue, enhancer);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        setPropertyValue(this, name, value);
    }, true, false);
}

function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, deepEnhancer, properties);
}
function extendShallowObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, referenceEnhancer, properties);
}
function extendObservableHelper(target, defaultEnhancer, properties) {
    invariant(arguments.length >= 2, getMessage("m014"));
    invariant(typeof target === "object", getMessage("m015"));
    invariant(!isObservableMap(target), getMessage("m016"));
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", getMessage("m017"));
        invariant(!isObservable(propSet), getMessage("m018"));
    });
    var adm = asObservableObject(target);
    var definedProps = {};
    // Note could be optimised if properties.length === 1
    for (var i = properties.length - 1; i >= 0; i--) {
        var propSet = properties[i];
        for (var key in propSet)
            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
                definedProps[key] = true;
                if (target === propSet && !isPropertyConfigurable(target, key))
                    continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.
                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
            }
    }
    return target;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v) {
    if (v === void 0) { v = undefined; }
    // @observable someProp;
    if (typeof arguments[1] === "string")
        return deepDecorator.apply(null, arguments);
    invariant(arguments.length <= 1, getMessage("m021"));
    invariant(!isModifierDescriptor(v), getMessage("m020"));
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = deepEnhancer(v, undefined, undefined);
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    return observable.box(v);
}
var observableFactories = {
    box: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        return new ObservableValue(value, deepEnhancer, name);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        return new ObservableValue(value, referenceEnhancer, name);
    },
    array: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        return new ObservableArray(initialValues, deepEnhancer, name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        return new ObservableArray(initialValues, referenceEnhancer, name);
    },
    map: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        return new ObservableMap(initialValues, deepEnhancer, name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        return new ObservableMap(initialValues, referenceEnhancer, name);
    },
    object: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("object");
        var res = {};
        // convert to observable object
        asObservableObject(res, name);
        // add properties
        extendObservable(res, props);
        return res;
    },
    shallowObject: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowObject");
        var res = {};
        asObservableObject(res, name);
        extendShallowObservable(res, props);
        return res;
    },
    ref: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(referenceEnhancer, arguments[0]);
        }
        else {
            return refDecorator.apply(null, arguments);
        }
    },
    shallow: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(shallowEnhancer, arguments[0]);
        }
        else {
            return shallowDecorator.apply(null, arguments);
        }
    },
    deep: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepEnhancer, arguments[0]);
        }
        else {
            return deepDecorator.apply(null, arguments);
        }
    },
    struct: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
        }
        else {
            return deepStructDecorator.apply(null, arguments);
        }
    }
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
observable.deep.struct = observable.struct;
observable.ref.struct = function () {
    if (arguments.length < 2) {
        return createModifierDescriptor(refStructEnhancer, arguments[0]);
    }
    else {
        return refStructDecorator.apply(null, arguments);
    }
};
function incorrectlyUsedAsDecorator(methodName) {
    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function isModifierDescriptor(thing) {
    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}
function createModifierDescriptor(enhancer, initialValue) {
    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
    return {
        isMobxModifierDescriptor: true,
        initialValue: initialValue,
        enhancer: enhancer
    };
}
function deepEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, name);
    if (isPlainObject(v))
        return observable.object(v, name);
    if (isES6Map(v))
        return observable.map(v, name);
    return v;
}
function shallowEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.shallowArray(v, name);
    if (isPlainObject(v))
        return observable.shallowObject(v, name);
    if (isES6Map(v))
        return observable.shallowMap(v, name);
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function deepStructEnhancer(v, oldValue, name) {
    // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
    // more suited for immutable objects
    if (deepEqual(v, oldValue))
        return oldValue;
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return new ObservableArray(v, deepStructEnhancer, name);
    if (isES6Map(v))
        return new ObservableMap(v, deepStructEnhancer, name);
    if (isPlainObject(v)) {
        var res = {};
        asObservableObject(res, name);
        extendObservableHelper(res, deepStructEnhancer, [v]);
        return res;
    }
    return v;
}
function refStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

var ObservableMapMarker = {};
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._data = Object.create(null);
        this._hasMap = Object.create(null); // hasMap, not hashMap >-).
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this.dehancer = undefined;
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        key = "" + key;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        key = "" + key;
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        this.assertValidKey(key);
        key = "" + key;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data[key].value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            transaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data[key];
                observable$$1.setNewValue(undefined);
                _this._data[key] = undefined;
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable$$1 = this._data[name];
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: name,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        transaction(function () {
            var observable$$1 = (_this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false));
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        key = "" + key;
        if (this.has(key))
            return this.dehanceValue(this._data[key].get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        return arrayAsIterator(this._keys.slice());
    };
    ObservableMap.prototype.values = function () {
        return arrayAsIterator(this._keys.map(this.get, this));
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = _this.keys();
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values might still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return (res[key] = _this.get(key)); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
            return true;
        return false;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, getMessage("m033"));
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
function map(initialValues) {
    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
    return observable.map(initialValues);
}
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getGlobal() {
    return typeof window !== "undefined" ? window : global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message, thing) {
    invariant(false, message, thing);
    throw "X"; // unreachable
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function joinStrings(things, limit, separator) {
    if (limit === void 0) { limit = 100; }
    if (separator === void 0) { separator = " - "; }
    if (!things)
        return "";
    var sliced = things.slice(0, limit);
    return "" + sliced.join(separator) + (things.length > limit
        ? " (... and " + (things.length - limit) + "more)"
        : "");
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (hasOwnProperty(source, key)) {
                res[key] = source[key];
            }
    }
    return res;
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function getMapLikeKeys(map$$1) {
    if (isPlainObject(map$$1))
        return Object.keys(map$$1);
    if (Array.isArray(map$$1))
        return map$$1.map(function (_a) {
            var key = _a[0];
            return key;
        });
    if (isES6Map(map$$1))
        return Array.from(map$$1.keys());
    if (isObservableMap(map$$1))
        return map$$1.keys();
    return fail("Cannot get keys from " + map$$1);
}
function iteratorToArray(it) {
    var res = [];
    while (true) {
        var r = it.next();
        if (r.done)
            break;
        res.push(r.value);
    }
    return res;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.strictMode = false;
        /**
         * Used by createTransformer to detect that the global state has been reset.
         */
        this.resetId = 0;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
    }
    return MobXGlobals;
}());
var globalState = new MobXGlobals();
var shareGlobalStateCalled = false;
var runInIsolationCalled = false;
var warnedAboutMultipleInstances = false;
{
    var global_1 = getGlobal();
    if (!global_1.__mobxInstanceCount) {
        global_1.__mobxInstanceCount = 1;
    }
    else {
        global_1.__mobxInstanceCount++;
        setTimeout(function () {
            if (!shareGlobalStateCalled && !runInIsolationCalled && !warnedAboutMultipleInstances) {
                warnedAboutMultipleInstances = true;
                console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
            }
        }, 1);
    }
}
function isolateGlobalState() {
    runInIsolationCalled = true;
    getGlobal().__mobxInstanceCount--;
}
function shareGlobalState() {
    // TODO: remove in 4.0; just use peer dependencies instead.
    deprecated("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details.");
    shareGlobalStateCalled = true;
    var global = getGlobal();
    var ownState = globalState;
    /**
     * Backward compatibility check
     */
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        globalState = global.__mobxGlobal;
    else
        global.__mobxGlobal = ownState;
}
function getGlobalState() {
    return globalState;
}

/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, getMessage("m036"));
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable = anyThing._data[property] || anyThing._hasMap[property];
            invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072 // TODO: remove in 4.0
        if (isObservableObject(thing)) {
            if (!property)
                return fail("please specify a property");
            var observable = thing.$mobx.values[property];
            invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail("Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    runLazyInitializers(thing);
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (!observable.isPendingUnobservation) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                observable.onBecomeUnobserved();
                // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
        }
    }
    else if (observable.observers.length === 0) {
        queueForUnobservation(observable);
    }
}
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    try {
                        obj.get();
                    }
                    catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers$$1 = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers$$1)
        fail(getMessage("m031") + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && hasObservers$$1)
        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    try {
        result = f.call(context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

function log(msg) {
    console.log(msg);
    return msg;
}
function whyRun(thing, prop) {
    deprecated("`whyRun` is deprecated in favor of `trace`");
    thing = getAtomFromArgs(arguments);
    if (!thing)
        return log(getMessage("m024"));
    if (isComputedValue(thing) || isReaction(thing))
        return log(thing.whyRun());
    return fail(getMessage("m025"));
}
function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                this.onInvalidate();
                if (this._isTrackPending && isSpyEnabled()) {
                    // onInvalidate didn't trigger track right away..
                    spyReport({
                        object: this,
                        type: "scheduled-reaction"
                    });
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        var messageToUser = getMessage("m037");
        console.error(message || messageToUser /* latter will not be true, make sure uglify doesn't remove */, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                message: message,
                error: error,
                object: this
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        r.onError = registerErrorHandler;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.whyRun = function () {
        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed
            ? "stopped"
            : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this._isRunning
            ? " (... or any observable accessed during the remainder of the current run)"
            : "") + "\n\t" + getMessage("m038") + "\n";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function registerErrorHandler(handler) {
    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
    this.$mobx.errorHandler = handler;
}
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function asReference(value) {
    deprecated("asReference is deprecated, use observable.ref instead");
    return observable.ref(value);
}
function asStructure(value) {
    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
    return observable.struct(value);
}
function asFlat(value) {
    deprecated("asFlat is deprecated, use observable.shallow instead");
    return observable.shallow(value);
}
function asMap(data) {
    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
    return observable.map(data || {});
}

function createComputedDecorator(equals) {
    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
        var adm = asObservableObject(target, "");
        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, equals, false);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        this.$mobx.values[name].set(value);
    }, false, false);
}
var computedDecorator = createComputedDecorator(comparer.default);
var computedStructDecorator = createComputedDecorator(comparer.structural);
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        return computedDecorator.apply(null, arguments);
    }
    invariant(typeof arg1 === "function", getMessage("m011"));
    invariant(arguments.length < 3, getMessage("m012"));
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    return new ComputedValue(arg1, opts.context, equals, opts.name || arg1.name || "", opts.setter);
};
computed.struct = computedStructDecorator;
computed.equals = createComputedDecorator;

function isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

/**
 * expr can be used to create temporarily views inside views.
 * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
 *
 * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
 * instead it will only rerenders when the current todo is (de)selected.
 *
 * reactiveComponent((props) => {
 *     const todo = props.todo;
 *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
 *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
 * });
 *
 */
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn(getMessage("m013"));
    // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired
    return computed(expr, { context: scope }).get();
}

function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = []; }
    // optimization: using ES6 map would be more efficient!
    // optimization: lift this function outside toJS, this makes recursion expensive
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (isObservable(source)) {
        if (detectCycles && __alreadySeen === null)
            __alreadySeen = [];
        if (detectCycles && source !== null && typeof source === "object") {
            for (var i = 0, l = __alreadySeen.length; i < l; i++)
                if (__alreadySeen[i][0] === source)
                    return __alreadySeen[i][1];
        }
        if (isObservableArray(source)) {
            var res = cache([]);
            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
            res.length = toAdd.length;
            for (var i = 0, l = toAdd.length; i < l; i++)
                res[i] = toAdd[i];
            return res;
        }
        if (isObservableObject(source)) {
            var res = cache({});
            for (var key in source)
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
            return res;
        }
        if (isObservableMap(source)) {
            var res_1 = cache({});
            source.forEach(function (value, key) { return (res_1[key] = toJS(value, detectCycles, __alreadySeen)); });
            return res_1;
        }
        if (isObservableValue(source))
            return toJS(source.get(), detectCycles, __alreadySeen);
    }
    return source;
}

function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
    // Memoizes: object id -> reactive view that applies transformer to the object
    var objectCache = {};
    // If the resetId changes, we will clear the object cache, see #163
    // This construction is used to avoid leaking refs to the objectCache directly
    var resetId = globalState.resetId;
    // Local transformer class specifically for this transformer
    var Transformer = /** @class */ (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, comparer.default, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
            _this.sourceIdentifier = sourceIdentifier;
            _this.sourceObject = sourceObject;
            return _this;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        // Not in cache; create a reactive view
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
function getMemoizationId(object) {
    if (typeof object === "string" || typeof object === "number")
        return object;
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        addHiddenProp(object, "$transformId", tid);
    }
    return tid;
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail("InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail("Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail("An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
var extras = {
    allowStateChanges: allowStateChanges,
    deepEqual: deepEqual,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getAdministration: getAdministration,
    getGlobalState: getGlobalState,
    getObserverTree: getObserverTree,
    interceptReads: interceptReads,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    onReactionError: onReactionError,
    reserveArrayBuffer: reserveArrayBuffer,
    resetGlobalState: resetGlobalState,
    isolateGlobalState: isolateGlobalState,
    shareGlobalState: shareGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    setReactionScheduler: setReactionScheduler
};
var everything = {
    Reaction: Reaction,
    untracked: untracked,
    Atom: Atom,
    BaseAtom: BaseAtom,
    useStrict: useStrict,
    isStrictModeEnabled: isStrictModeEnabled,
    spy: spy,
    comparer: comparer,
    asReference: asReference,
    asFlat: asFlat,
    asStructure: asStructure,
    asMap: asMap,
    isModifierDescriptor: isModifierDescriptor,
    isObservableObject: isObservableObject,
    isBoxedObservable: isObservableValue,
    isObservableArray: isObservableArray,
    ObservableMap: ObservableMap,
    isObservableMap: isObservableMap,
    map: map,
    transaction: transaction,
    observable: observable,
    computed: computed,
    isObservable: isObservable,
    isComputed: isComputed,
    extendObservable: extendObservable,
    extendShallowObservable: extendShallowObservable,
    observe: observe,
    intercept: intercept,
    autorun: autorun,
    autorunAsync: autorunAsync,
    when: when,
    reaction: reaction,
    action: action,
    isAction: isAction,
    runInAction: runInAction,
    expr: expr,
    toJS: toJS,
    createTransformer: createTransformer,
    whyRun: whyRun,
    isArrayLike: isArrayLike,
    extras: extras
};
var warnedAboutDefaultExport = false;
var _loop_1 = function (p) {
    var val = everything[p];
    Object.defineProperty(everything, p, {
        get: function () {
            if (!warnedAboutDefaultExport) {
                warnedAboutDefaultExport = true;
                console.warn("Using default export (`import mobx from 'mobx'`) is deprecated " +
                    "and won’t work in mobx@4.0.0\n" +
                    "Use `import * as mobx from 'mobx'` instead");
            }
            return val;
        }
    });
};
for (var p in everything) {
    _loop_1(p);
}
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: spy, extras: extras });
}

/* unused harmony default export */ var _unused_webpack_default_export = (everything);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(26);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(50);
} else {}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(85),
    getValue = __webpack_require__(88);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isMobile;
module.exports.isMobile = isMobile;

var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;

function isMobile (opts) {
  if (!opts) opts = {}
  var ua = opts.ua
  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent;
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent'];
  }
  if (typeof ua !== 'string') return false;

  return opts.tablet
    ? tabletRE.test(ua)
    : mobileRE.test(ua);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    getRawTag = __webpack_require__(61),
    objectToString = __webpack_require__(62);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(75),
    listCacheDelete = __webpack_require__(76),
    listCacheGet = __webpack_require__(77),
    listCacheHas = __webpack_require__(78),
    listCacheSet = __webpack_require__(79);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(34);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(97);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(58),
    baseKeys = __webpack_require__(67),
    isArrayLike = __webpack_require__(31);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(89),
    mapCacheDelete = __webpack_require__(96),
    mapCacheGet = __webpack_require__(98),
    mapCacheHas = __webpack_require__(99),
    mapCacheSet = __webpack_require__(100);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(21);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(60),
    isObjectLike = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
    stubFalse = __webpack_require__(63);

/** Detect free variable `exports`. */
var freeExports = true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(64),
    baseUnary = __webpack_require__(65),
    nodeUtil = __webpack_require__(66);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(32),
    isLength = __webpack_require__(16);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(17);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10),
    stackClear = __webpack_require__(80),
    stackDelete = __webpack_require__(81),
    stackGet = __webpack_require__(82),
    stackHas = __webpack_require__(83),
    stackSet = __webpack_require__(84);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(101),
    isObjectLike = __webpack_require__(8);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(102),
    arraySome = __webpack_require__(105),
    cacheHas = __webpack_require__(106);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(41),
    toKey = __webpack_require__(14);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isKey = __webpack_require__(20),
    stringToPath = __webpack_require__(125),
    toString = __webpack_require__(128);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 42 */
/***/ (function(module) {

module.exports = {"data":[{"aoguid":"863a02f2-1082-44b8-852b-8524adfdc5a4","disid":"1","name":"Алексеевский р-н","okato":"14205000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"02e9c019-ab4d-4fa0-928e-d6c0a41dc256","disid":"1","name":"Белгород г","okato":"14401000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"ffd3db1e-a062-442c-8d28-d35378c9e718","disid":"1","name":"Белгородский р-н","okato":"14210000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"e0d1764b-815b-408c-802d-5c4df40c84af","disid":"1","name":"Борисовский р-н","okato":"14215000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"9df691ad-8bff-443f-a42e-7226083401b5","disid":"1","name":"Валуйский р-н","okato":"14220000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"9344bf07-d346-4127-9748-f53784b97ac1","disid":"1","name":"Вейделевский р-н","okato":"14225000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"57c4e156-f815-4ff7-b3cc-aace5cb75451","disid":"1","name":"Волоконовский р-н","okato":"14230000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"f785d5cc-c8f7-4ddf-a611-757c8f91f536","disid":"1","name":"Грайворонский р-н","okato":"14232000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"98b1ec30-6107-4f99-ae3a-9d82492f30a1","disid":"1","name":"Губкин г","okato":"14430000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"2a64d838-3971-4cf4-a79a-bab1cde02af7","disid":"1","name":"Губкинский р-н","okato":"14235000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"a8178358-52f1-4957-8ccc-926b9d0f8b8c","disid":"1","name":"Ивнянский р-н","okato":"14238000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"9616f4cb-25de-4aec-b258-4559b5422c71","disid":"1","name":"Корочанский р-н","okato":"14240000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"aee72466-4cd5-4c31-9186-61eccf5966ae","disid":"1","name":"Красненский р-н","okato":"14241000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"ef70f223-0336-437e-a0c0-b41aaa907781","disid":"1","name":"Красногвардейский р-н","okato":"14242000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"55eb0d00-3ba8-403d-bef7-6f80497bc35d","disid":"1","name":"Краснояружский р-н","okato":"14243000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"6abf96fc-7376-448f-bdce-816bb961d7b5","disid":"1","name":"Новооскольский р-н","okato":"14244000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"15777dba-b9be-4826-beba-17da193eb316","disid":"1","name":"Прохоровский р-н","okato":"14246000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"84a004a4-a9bc-4deb-a8cb-94fdf4964372","disid":"1","name":"Ракитянский р-н","okato":"14248000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"d6ebfb80-ac58-4533-9678-6afaf9423cb1","disid":"1","name":"Ровеньский р-н","okato":"14250000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"fa0976cc-6c53-400b-90fb-1fe82e896dc9","disid":"1","name":"Старооскольский р-н","okato":"14252000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"9f5e86b1-b893-43dc-9dd4-ac66573b17d1","disid":"1","name":"Старый Оскол г","okato":"14440000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"cb8257a7-b4ff-48ad-88fd-27791d4e10bc","disid":"1","name":"Чернянский р-н","okato":"14254000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"dc80ddf0-b1ac-4344-98e8-fcfa5295a0a3","disid":"1","name":"Шебекино г","okato":"14450000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"20f1fc48-2bb1-4bcf-a49d-782b29ec0b70","disid":"1","name":"Шебекинский р-н","okato":"14256000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"a91b4f46-8f66-483a-ba12-5d8ab72b1860","disid":"1","name":"Яковлевский р-н","okato":"14258000000","parentguid":"639efe9d-3fc8-4438-8e70-ec4f2321f2a7","regioncode":"31"},{"aoguid":"b02d7238-3e01-44c8-8837-f3b5cb1014c5","disid":"1","name":"Брасовский р-н","okato":"15204000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"414b71cf-921e-4bfc-b6e0-f7395d16aaef","disid":"1","name":"Брянск г","okato":"15401000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"979f391a-a3b4-4407-a267-a1913e1e79ed","disid":"1","name":"Брянский р-н","okato":"15208000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"cf589b01-8377-4703-9503-5a22b8b20c78","disid":"1","name":"Выгоничский р-н","okato":"15210000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"fa2d3c38-feb1-45d4-b00f-b5cfd90adaae","disid":"1","name":"Гордеевский р-н","okato":"15211000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"7b1a5457-2b41-4279-b4fc-a141bd7ab6b2","disid":"1","name":"Дубровский р-н","okato":"15212000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"28a2e2e0-89d4-462c-96eb-a549d88f21c7","disid":"1","name":"Дятьковский р-н","okato":"15216501000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"1784ae4d-7601-4f1e-afa4-9ea0347cfeb0","disid":"1","name":"Жирятинский р-н","okato":"15220000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"10bf74ae-b7bf-4a30-983d-1907ac65078d","disid":"1","name":"Жуковский р-н","okato":"15222000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"f5cc24e9-16f4-4c45-b5bf-7b0093d67d37","disid":"1","name":"Злынковский р-н","okato":"15223000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"4dd7d926-a0c6-4426-9f4b-96463433ef3e","disid":"1","name":"Карачевский р-н","okato":"15224000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"17062c69-2906-469e-9cc9-8129f750b1c7","disid":"1","name":"Клетнянский р-н","okato":"15226000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"e2c14ebe-2081-41ab-8bbf-797c482ba01a","disid":"1","name":"Климовский р-н","okato":"15228000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"8aaa3085-ac6a-46e8-8937-d63e95498a86","disid":"1","name":"Клинцовский р-н","okato":"15230000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"59cb1f1f-16f9-47eb-9487-14a6c00e8621","disid":"1","name":"Клинцы г","okato":"15415000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"734218e6-020f-4ea5-bb75-16db43b5ef4c","disid":"1","name":"Комаричский р-н","okato":"15232000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"f3703a1d-6224-4205-be55-36f48f5303ef","disid":"1","name":"Красногорский р-н","okato":"15234000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"367b3fce-0837-48e9-b92d-7cd0347ca4bd","disid":"1","name":"Мглинский р-н","okato":"15236000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"33e3ac7d-0a23-46ec-bec3-1ec470890033","disid":"1","name":"Навлинский р-н","okato":"15238000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"cf4dd9d7-d152-4140-bed2-59d8be5a4e2c","disid":"1","name":"Новозыбков г","okato":"15420000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"75078a02-9f8f-4454-8b83-0f4c5b72535f","disid":"1","name":"Новозыбковский р-н","okato":"15240000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"c89f1da6-23e7-44d4-a4da-3ff3ba04f63c","disid":"1","name":"Погарский р-н","okato":"15242000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"78c621c8-0bc7-44ea-bab2-fa6da2a37d10","disid":"1","name":"Почепский р-н","okato":"15244000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"b1396873-3a42-4228-b4e1-3d0a3dfddbb1","disid":"1","name":"Рогнединский р-н","okato":"15246000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"2de1a580-336f-4fd4-9902-5fe9170a7fe7","disid":"1","name":"Севский р-н","okato":"15248000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"485f4c4d-aced-4b94-b975-88e72b7dcb72","disid":"1","name":"Сельцо г","okato":"15425000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"2d2846d0-5333-45be-ab49-1804d4d49dad","disid":"1","name":"Стародубский р-н","okato":"15250000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"76ce1af4-cffd-40bc-9399-e0b75e4f1059","disid":"1","name":"Суземский р-н","okato":"15252000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"0f709889-ab7c-486a-89ae-c8995026b535","disid":"1","name":"Суражский р-н","okato":"15254000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"cb79d8a8-7130-4922-b005-83baf9281ff4","disid":"1","name":"Трубчевский р-н","okato":"15256000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"7b930346-d1ba-4cc3-96ca-aa8e1db23777","disid":"1","name":"Унечский р-н","okato":"15258000000","parentguid":"f5807226-8be0-4ea8-91fc-39d053aec1e2","regioncode":"32"},{"aoguid":"7377639c-b2ff-408f-963b-954208ffc891","disid":"1","name":"Александровский р-н","okato":"17205000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"f66a00e6-179e-4de9-8ecb-78b0277c9f10","disid":"1","name":"Владимир г","okato":"17401000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"05cd13b8-d0f3-4802-a31e-037ff8d1f24f","disid":"1","name":"Вязниковский р-н","okato":"17210000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"44c9eb8b-3875-4280-9c16-9745374c55e6","disid":"1","name":"Гороховецкий р-н","okato":"17215000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"0c4c15fa-7f27-43ea-83d1-9a5f4d938e53","disid":"1","name":"Гусь-Хрустальный р-н","okato":"17220000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"aa4aa0d7-f97f-4974-9291-c0a530a1ccb6","disid":"1","name":"Гусь-Хрустальный г","okato":"17420000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"2cfe4dcd-dbf7-4dab-b725-8edf47696763","disid":"1","name":"Камешковский р-н","okato":"17225000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"aaac61d9-9f8a-4d5d-b99e-f822409ba13a","disid":"1","name":"Киржачский р-н","okato":"17230000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"0b4978e2-e64c-4db1-b84d-93cf34bdb04b","disid":"1","name":"Ковров г","okato":"17425000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"181600e8-9bf6-4e9c-a00c-dfbca990c0d9","disid":"1","name":"Ковровский р-н","okato":"17235000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"1309495e-71a0-4da2-897c-a6ee5f006e04","disid":"1","name":"Кольчугинский р-н","okato":"17240000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"5bcb047e-0bf0-403d-84a9-1aaf5cbf4f87","disid":"1","name":"Меленковский р-н","okato":"17242000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"0d7d5d87-f0a6-428f-b655-d3be106c64a2","disid":"1","name":"Муром г","okato":"17435000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"e92acfd2-8e96-4b9e-a9ce-45128bd52e88","disid":"1","name":"Муромский р-н","okato":"17244000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"4265d25d-8f14-4f0a-9c1f-9ad765c6c918","disid":"1","name":"Петушинский р-н","okato":"17246000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"c0ac6992-e48e-4648-b176-f56e7bcda57b","disid":"1","name":"Радужный г","okato":"17537000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"0a8e99cd-e96a-45e3-9ae0-866348c2ba42","disid":"1","name":"Селивановский р-н","okato":"17248000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"bc705aef-e0b1-4990-927b-681afd2ca5cd","disid":"1","name":"Собинский р-н","okato":"17250000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"40503592-dc4b-4b3f-a385-36e8ee5f9c78","disid":"1","name":"Судогодский р-н","okato":"17252000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"314ed6d9-4a9f-4fbf-93ba-b0098bea5f57","disid":"1","name":"Суздальский р-н","okato":"17254000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"66ebbe60-29a0-401f-8d6f-775f8376cbc9","disid":"1","name":"Юрьев-Польский р-н","okato":"17256000000","parentguid":"b8837188-39ee-4ff9-bc91-fcc9ed451bb3","regioncode":"33"},{"aoguid":"9b26a7ea-f2c5-4529-bada-0c5714c3e829","disid":"1","name":"Аннинский р-н","okato":"20202000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"0ca61edc-ce3c-4ec0-abb1-1a56fd8f9f48","disid":"1","name":"Бобровский р-н","okato":"20204000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"642e494b-ee15-47bb-bc16-59dce0e525fe","disid":"1","name":"Богучарский р-н","okato":"20205000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"dac587d3-17c6-49d3-8949-cc829f947e3f","disid":"1","name":"Борисоглебский р-н","okato":"20206000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"170e9ce1-4eb5-4290-a0e7-786a798b9caa","disid":"1","name":"Бутурлиновский р-н","okato":"20208000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"18f1b4f4-529e-44b4-a960-249a157e163c","disid":"1","name":"Верхнемамонский р-н","okato":"20210000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"4f710c98-fd4e-4511-9dbd-338084033de5","disid":"1","name":"Верхнехавский р-н","okato":"20211000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"8f08ff64-0b66-44ad-af3b-ebeaf7f09243","disid":"1","name":"Воробьевский р-н","okato":"20212000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1","disid":"1","name":"Воронеж г","okato":"20401000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"6bd80725-4a35-4c56-8940-8b17a51e9cfa","disid":"1","name":"Воронеж-45 г","okato":"20213551000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"6d44a022-8d50-4a66-9c7c-0770531bfc0d","disid":"1","name":"Грибановский р-н","okato":"20213000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"86def0f0-7c14-432a-b05f-2b0e95310751","disid":"1","name":"Калачеевский р-н","okato":"20215000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"23568646-4f69-433c-aca9-2e2d0b1f0019","disid":"1","name":"Каменский р-н","okato":"20217000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"2001ae12-b8d9-416d-a432-04c82e12d545","disid":"1","name":"Кантемировский р-н","okato":"20219000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"879310f4-e638-457f-b350-12c09ea7b795","disid":"1","name":"Каширский р-н","okato":"20220000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"d9ca5129-9b3b-40bf-ac92-1a64a0515425","disid":"1","name":"Лискинский р-н","okato":"20221000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"ce787932-178b-45be-9bad-9d2397bb09b6","disid":"1","name":"Нижнедевицкий р-н","okato":"20223000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"c7cdacb9-6a1e-4402-8bc6-6ec36a42d05c","disid":"1","name":"Нововоронеж г","okato":"20427000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"82307e3b-9a60-43ca-a02a-d962a111e7e0","disid":"1","name":"Новоусманский р-н","okato":"20225000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"5fd30fd3-0808-4fc3-8b86-a5c743379de7","disid":"1","name":"Новохоперский р-н","okato":"20227000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"f2dd3176-3b9d-45a8-a31f-19918cb886fa","disid":"1","name":"Ольховатский р-н","okato":"20229000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"924d7c66-4d54-4285-a883-c9c301e7cb67","disid":"1","name":"Острогожский р-н","okato":"20231000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"2faf6b20-b345-4e49-a7a8-a4bc4a783807","disid":"1","name":"Павловский р-н","okato":"20233000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"42569982-54c8-443d-ba6d-1066c4fbc5fb","disid":"1","name":"Панинский р-н","okato":"20235000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"181da23f-c647-4301-8aa3-163b78f429be","disid":"1","name":"Петропавловский р-н","okato":"20237000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"a79eeb05-a4d4-4352-88e3-be0a5548a90f","disid":"1","name":"Поворинский р-н","okato":"20239000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"1ccdcc5c-5749-4408-8add-12f57eb41c2d","disid":"1","name":"Подгоренский р-н","okato":"20241000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"c341a4ac-1295-44a4-9dcc-d560aacd20d6","disid":"1","name":"Рамонский р-н","okato":"20243000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"2e813888-1c82-4ed4-a03d-83ac78f20e79","disid":"1","name":"Репьевский р-н","okato":"20245000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"679f3bda-e2da-4665-99f3-76762ac7656a","disid":"1","name":"Россошанский р-н","okato":"20247000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"3d935fea-609c-47f8-ae0b-f3826b694e40","disid":"1","name":"Семилукский р-н","okato":"20249000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"39ae5dea-ac96-435c-92e8-af972e022ebb","disid":"1","name":"Таловский р-н","okato":"20251000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"d584fe94-ae4c-4cad-9a10-ae5a16877b9f","disid":"1","name":"Терновский р-н","okato":"20254000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"04a264e4-0d97-4425-be3b-49b9edb8a9b3","disid":"1","name":"Хохольский р-н","okato":"20256000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"88d75953-58ab-4996-8f01-8d8c2074ece6","disid":"1","name":"Эртильский р-н","okato":"20258000000","parentguid":"b756fe6b-bbd3-44d5-9302-5bfcc740f46e","regioncode":"36"},{"aoguid":"52e8b040-24a6-4585-bb36-790549ee53c6","disid":"1","name":"Верхнеландеховский р-н","okato":"24202000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"b373c14a-16cf-4855-b183-40ed25a8b184","disid":"1","name":"Вичугский р-н","okato":"24201000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"2cf1fe82-8d04-42c9-94bf-6ab1d8dd8046","disid":"1","name":"Гаврилово-Посадский р-н","okato":"24203000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"be3e4c7b-6a13-4f22-ae18-6b087dc0f070","disid":"1","name":"Заволжский р-н","okato":"24205000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"40c6863e-2a5f-4033-a377-3416533948bd","disid":"1","name":"Иваново г","okato":"24401000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"2ee2cecb-e2fe-40b5-a239-4f0a14da7497","disid":"1","name":"Ивановский р-н","okato":"24207000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"b7cfa982-a81a-409a-9a30-3368edfd26ef","disid":"1","name":"Ильинский р-н","okato":"24209000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"155310a1-7787-4ffd-be45-81eefe6f7521","disid":"1","name":"Кинешемский р-н","okato":"24211000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"505c86b1-2268-4e83-b6f3-c49fa4fcbe28","disid":"1","name":"Комсомольский р-н","okato":"24213000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"fe068ab1-3781-4a72-851d-39a4c019cbda","disid":"1","name":"Лежневский р-н","okato":"24214000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"a224603f-2305-4ad8-b26c-9edb8c91be21","disid":"1","name":"Лухский р-н","okato":"24215000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"1fc99be8-c260-4ef7-81d8-87ac37fdd516","disid":"1","name":"Палехский р-н","okato":"24217000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"d54d37cb-7175-4702-af4f-91f61ca939ad","disid":"1","name":"Пестяковский р-н","okato":"24219000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"12c6ba2d-8aa5-495e-a39c-bf587b0990ee","disid":"1","name":"Приволжский р-н","okato":"24220000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"6fd14d94-586e-4a26-908b-65eb79a25614","disid":"1","name":"Пучежский р-н","okato":"24221000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"b0ef2dba-8733-4c7e-8a9f-1dbe74c4981b","disid":"1","name":"Родниковский р-н","okato":"24223000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"24dec59c-37ae-4ad4-a41a-cf7e8310ca48","disid":"1","name":"Савинский р-н","okato":"24225000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"43cf9987-90fb-40ad-982d-3609eace79cd","disid":"1","name":"Тейковский р-н","okato":"24229000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"e19537fc-ff5d-4a91-af59-3949cff834f5","disid":"1","name":"Фурмановский р-н","okato":"24231000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"2bf1780f-88a0-4148-922d-60609b8acce0","disid":"1","name":"Шуйский р-н","okato":"24233000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"5c43874b-4a04-441b-8855-086cc20a4c5f","disid":"1","name":"Южский р-н","okato":"24235000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"718aee0b-4b19-430c-aa2c-6beebb369f8a","disid":"1","name":"Юрьевецкий р-н","okato":"24237000000","parentguid":"0824434f-4098-4467-af72-d4f702fed335","regioncode":"37"},{"aoguid":"9e6daf51-64df-482a-8765-28cc2081d0f6","disid":"1","name":"Бабынинский р-н","okato":"29202000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"e6fbf932-7f11-4a00-a374-529cef447f19","disid":"1","name":"Барятинский р-н","okato":"29204000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"5d141523-a76d-448b-a3b8-2d6ddc56eee6","disid":"1","name":"Боровский р-н","okato":"29206000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"093778f4-8378-414b-9905-7a145e4f140f","disid":"1","name":"Дзержинский р-н","okato":"29208000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"a7b2a860-e79a-428f-b017-6c9c0a0f7c84","disid":"1","name":"Думиничский р-н","okato":"29210000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"51978107-d34c-4a89-b010-389aaa1e0889","disid":"1","name":"Жиздринский р-н","okato":"29212000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"70bd2324-8eba-4ff1-bd31-e2dafc10779c","disid":"1","name":"Жуковский р-н","okato":"29213000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"a9b0d30e-fa59-44d1-849e-1ee8acafcfe6","disid":"1","name":"Износковский р-н","okato":"29215000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"b502ae45-897e-4b6f-9776-6ff49740b537","disid":"1","name":"Калуга г","okato":"29401000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"bd20192d-2702-4d5f-bd0c-7db4df7be215","disid":"1","name":"Кировский р-н","okato":"29214000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"e4b94d76-ed28-4421-8c54-4b80098515da","disid":"1","name":"Козельский р-н","okato":"29216000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"0e99e9da-b050-4a31-817e-98bf6defceb7","disid":"1","name":"Куйбышевский р-н","okato":"29218000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"f095f62c-c8d9-44f8-b235-2e92cb4fe427","disid":"1","name":"Людиновский р-н","okato":"29220000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"6ec5a5d0-17d5-4921-9bdb-511e996a5151","disid":"1","name":"Малоярославецкий р-н","okato":"29223000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"40354490-cb9e-43d2-8fee-f6be80d0cceb","disid":"1","name":"Медынский р-н","okato":"29225000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"b6b6786c-67dc-4b49-bc3d-46f0fb230373","disid":"1","name":"Мещовский р-н","okato":"29227000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"330725f9-b35b-453c-a2b3-e7844d2ef172","disid":"1","name":"Мосальский р-н","okato":"29229000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"05a647ff-b859-4c93-8c8e-3590110a0085","disid":"1","name":"Обнинск г","okato":"29415000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"2800afec-b625-47a5-ac00-d31241249d7e","disid":"1","name":"Перемышльский р-н","okato":"29232000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"6ead6700-d3af-4e1f-9ea0-8387d7a82339","disid":"1","name":"Спас-Деменский р-н","okato":"29234000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"973678c4-2b4a-4b0f-b4a4-cf83fd131546","disid":"1","name":"Сухиничский р-н","okato":"29236000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"22c2248f-95a0-4284-9aa6-fa1f8175635f","disid":"1","name":"Тарусский р-н","okato":"29238000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"e39065bd-b5f5-43b3-8826-714eb76565da","disid":"1","name":"Ульяновский р-н","okato":"29242000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"e3cf0e24-3c88-4f4e-8dde-9be6d11d1f22","disid":"1","name":"Ферзиковский р-н","okato":"29244000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"862b8ddf-da38-417f-ade9-4d6db67de957","disid":"1","name":"Хвастовичский р-н","okato":"29246000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"c2e2b85d-d344-4d9e-b58b-403840a25fb1","disid":"1","name":"Юхновский р-н","okato":"29250000000","parentguid":"18133adf-90c2-438e-88c4-62c41656de70","regioncode":"40"},{"aoguid":"61cad898-7886-4448-9334-fbfb210e3d20","disid":"1","name":"Антроповский р-н","okato":"34202000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"d7ef1b09-6057-43ae-9fe5-7fdeeb01e106","disid":"1","name":"Буйский р-н","okato":"34204000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"40eb94b1-c51e-455c-92af-7dafaaa92caa","disid":"1","name":"Волгореченск г","okato":"34406000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"56d23a54-5690-423e-acfa-dfd37add902c","disid":"1","name":"Вохомский р-н","okato":"34206000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"25d581a5-c1d8-4d48-bca5-0a08d7d1cdf4","disid":"1","name":"Галичский р-н","okato":"34208000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"2fb4fd4c-8db2-4044-9cd8-a484ef53c84f","disid":"1","name":"Кадыйский р-н","okato":"34210000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"f66f779c-8c9e-44fb-a068-0f78720e4aa2","disid":"1","name":"Кологривский р-н","okato":"34212000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"e5525f12-cd73-48ee-8855-14edf150ec96","disid":"1","name":"Костромской р-н","okato":"34214000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"3071bda7-f162-415f-99fc-da09555a8eaf","disid":"1","name":"Красносельский р-н","okato":"34216000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"7ac76b63-efad-4b46-8c82-2dfdf6a1f2f5","disid":"1","name":"Макарьевский р-н","okato":"34218000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"0c7c1d04-12ef-46d3-9052-f6b3b6d73479","disid":"1","name":"Мантуровский р-н","okato":"34220000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"d4a0d16e-a369-4015-ac25-db375789d41a","disid":"1","name":"Межевской р-н","okato":"34222000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"d8d99aaa-dc30-46c3-a90b-dd6305e80dc6","disid":"1","name":"Нейский р-н","okato":"34224000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"d7649651-6056-40e1-b5af-8827cadbb081","disid":"1","name":"Нерехтский р-н","okato":"34226000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"4d0fe76c-1fa8-4cfb-8c29-cccff3c79272","disid":"1","name":"Октябрьский р-н","okato":"34228000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"8dfe4876-2dae-4f61-9fa5-0f7e907e4262","disid":"1","name":"Островский р-н","okato":"34230000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"95d127ba-613f-477e-8d18-8a3ba065a1c8","disid":"1","name":"Павинский р-н","okato":"34232000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"8294b926-a1c5-448d-a106-6540d0695666","disid":"1","name":"Парфеньевский р-н","okato":"34234000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"39924e34-72e5-4fbc-bba8-7a108037704d","disid":"1","name":"Поназыревский р-н","okato":"34236000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"63132f72-14e6-4e46-a9ae-eb98381bb5b7","disid":"1","name":"Пыщугский р-н","okato":"34238000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"419e3f85-89d9-4e27-a3a7-825c0e5d2c5e","disid":"1","name":"Солигаличский р-н","okato":"34240000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"d93fdbfe-9d60-4972-b28f-84fd95da2535","disid":"1","name":"Судиславский р-н","okato":"34242000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"2c2a98a9-5946-49d1-945e-1fab5b19bf6a","disid":"1","name":"Сусанинский р-н","okato":"34244000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"92703259-411e-410b-b08d-90b587945735","disid":"1","name":"Чухломский р-н","okato":"34246000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"a031240c-d73d-4c40-b839-fd880d6a777c","disid":"1","name":"Шарьинский р-н","okato":"34248000000","parentguid":"15784a67-8cea-425b-834a-6afe0e3ed61c","regioncode":"44"},{"aoguid":"ce6d26fd-f15d-436e-852c-63622dbc2972","disid":"1","name":"Беловский р-н","okato":"38202000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"ae959b6b-0865-4a76-bb48-61462b888b88","disid":"1","name":"Большесолдатский р-н","okato":"38203000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"4fd08a71-9136-4cdd-a62d-dfef7d1036b8","disid":"1","name":"Глушковский р-н","okato":"38204000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"4cf24a1d-4640-40de-88f3-3f44f66f975b","disid":"1","name":"Горшеченский р-н","okato":"38206000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"26fc01ec-a272-4c8c-9b16-d23518cc59f5","disid":"1","name":"Дмитриевский р-н","okato":"38208000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"942153ce-3a5b-409d-90d2-29c45f0437ae","disid":"1","name":"Железногорский р-н","okato":"38210000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"7d95faa6-f278-4e97-b050-8534188482cd","disid":"1","name":"Золотухинский р-н","okato":"38212000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"51294c9c-4f55-4b9d-a64f-68310237b4f4","disid":"1","name":"Касторенский р-н","okato":"38214000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"1a83f986-bc6e-468a-bdcc-ac82f5833369","disid":"1","name":"Конышевский р-н","okato":"38216000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"e99955f5-d0b4-4279-a64a-f1c721ed4089","disid":"1","name":"Кореневский р-н","okato":"38218000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"d790c72e-479b-4da2-90d7-842b1712a71c","disid":"1","name":"Курск г","okato":"38401000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"a92c5e46-0c1f-49b1-8741-176cb98ae0fa","disid":"1","name":"Курский р-н","okato":"38220000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"ec4f28fe-6460-49a7-9519-9f6be38b9355","disid":"1","name":"Курчатовский р-н","okato":"38221000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"77962bcd-6417-4216-8179-97c37821f237","disid":"1","name":"Льговский р-н","okato":"38222000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"9b30f945-8d93-47c2-a3cb-5a010bab57fc","disid":"1","name":"Мантуровский р-н","okato":"38223000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"504b5bef-0043-4717-8c4e-c698aafe4d93","disid":"1","name":"Медвенский р-н","okato":"38224000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"df6cb32f-2d5b-48b0-959f-dcd4cc45980b","disid":"1","name":"Обоянский р-н","okato":"38226000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"7fdab3ea-d4c9-43ef-beb7-7d13e1511cb4","disid":"1","name":"Октябрьский р-н","okato":"38228000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"054743d2-cee3-4bcf-aba5-c55cb9ab26bc","disid":"1","name":"Поныровский р-н","okato":"38230000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"cd10da7f-2e09-4665-a380-dcc270d2868c","disid":"1","name":"Пристенский р-н","okato":"38232000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"4f9c6d9b-e97f-44e8-8eec-b382f45ad634","disid":"1","name":"Рыльский р-н","okato":"38234000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"9dd449be-ff98-4b25-90ae-f3aa1f66f1e1","disid":"1","name":"Советский р-н","okato":"38236000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"f6f4ad35-10b6-4529-b4b0-d2c070611982","disid":"1","name":"Солнцевский р-н","okato":"38238000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"7b5749f8-4232-433d-83af-3ac76df0d510","disid":"1","name":"Суджанский р-н","okato":"38240000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"dd740703-749e-4cd2-851c-4d2d79c00ee7","disid":"1","name":"Тимский р-н","okato":"38242000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"4e1c5e7e-267a-47b3-b3e5-4b6b94b78708","disid":"1","name":"Фатежский р-н","okato":"38244000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"8fb85106-c99f-4b1e-b412-07adb051d67e","disid":"1","name":"Хомутовский р-н","okato":"38246000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"e7f7dacc-a9ce-4dab-8e39-374d1eefad62","disid":"1","name":"Черемисиновский р-н","okato":"38248000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"935a7ae2-c583-4f16-8f53-baee25d99c25","disid":"1","name":"Щигровский р-н","okato":"38250000000","parentguid":"ee594d5e-30a9-40dc-b9f2-0add1be44ba1","regioncode":"46"},{"aoguid":"eb2888d6-f468-414a-91c9-a24f38f93cd6","disid":"1","name":"Воловский р-н","okato":"42203000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"e23ad948-ac70-40e7-bc90-88935d668086","disid":"1","name":"Грязинский р-н","okato":"42206000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"5e5d5398-7773-4978-a793-32161426b7b6","disid":"1","name":"Данковский р-н","okato":"42209000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"91924097-8611-4038-9f35-557b498945bd","disid":"1","name":"Добринский р-н","okato":"42212000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"b433a007-1fa9-49c1-af8a-68d5641d49c2","disid":"1","name":"Добровский р-н","okato":"42215000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"28897d03-379f-4ba4-9954-54676e7f90d8","disid":"1","name":"Долгоруковский р-н","okato":"42218000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"8261b161-ceac-4fa2-9fe8-593cb2a28210","disid":"1","name":"Елец г","okato":"42415000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"e15784ef-4bce-4699-bb17-db54b56d5e7c","disid":"1","name":"Елецкий р-н","okato":"42221000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"dca0e378-4a29-4d64-a378-4dc96f78da80","disid":"1","name":"Задонский р-н","okato":"42224000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"d9f7f8dd-6424-4704-965f-3802ca184a3e","disid":"1","name":"Измалковский р-н","okato":"42227000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"a5840106-37e7-4b8a-8d87-9d7a45549393","disid":"1","name":"Краснинский р-н","okato":"42230000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"fc010a53-032f-4d21-a25f-7d52e6b2ea32","disid":"1","name":"Лебедянский р-н","okato":"42233000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"38d6b0cc-df87-4742-8920-babc781efe46","disid":"1","name":"Лев-Толстовский р-н","okato":"42236000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"eacb5f15-1a2e-432e-904a-ca56bd635f1b","disid":"1","name":"Липецк г","okato":"42401000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"65369e3d-fa4b-4ada-b8d7-a94b6eb6acf2","disid":"1","name":"Липецкий р-н","okato":"42240000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"c3991222-d8a8-4123-9907-c99427db53d3","disid":"1","name":"Становлянский р-н","okato":"42242000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"b04ae219-6357-4818-bf45-be5a9c6fc3f9","disid":"1","name":"Тербунский р-н","okato":"42245000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"2922596b-f4e7-4093-b59e-4156018615de","disid":"1","name":"Усманский р-н","okato":"42248000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"f8246f20-9999-4e88-a9e3-618387aab142","disid":"1","name":"Хлевенский р-н","okato":"42252000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"142d40fd-9ac7-4d73-85bc-23216b014cdd","disid":"1","name":"Чаплыгинский р-н","okato":"42256000000","parentguid":"1490490e-49c5-421c-9572-5673ba5d80c8","regioncode":"48"},{"aoguid":"73e03d76-6e4e-4867-aa11-be6fbd4c1952","disid":"1","name":"Городское поселение Московский тер","okato":"46228505000","parentguid":"0c5b2444-70a0-4932-980c-b4dc0d3f02b5","regioncode":"77"},{"aoguid":"ec44c0ee-bf24-41c8-9e1c-76136ab05cbf","disid":"1","name":"Зеленоград г","okato":"","parentguid":"0c5b2444-70a0-4932-980c-b4dc0d3f02b5","regioncode":"77"},{"aoguid":"7dde11f6-f6ab-4a05-8052-78e0cab8fc59","disid":"1","name":"Троицк г","okato":"46475000000","parentguid":"0c5b2444-70a0-4932-980c-b4dc0d3f02b5","regioncode":"77"},{"aoguid":"b7fc1d20-41d4-44e8-af34-d635f452d74c","disid":"1","name":"Щербинка г","okato":"46489000000","parentguid":"0c5b2444-70a0-4932-980c-b4dc0d3f02b5","regioncode":"77"},{"aoguid":"74c0a432-f013-4a19-a99d-0683775f482e","disid":"1","name":"Балашихинский р-н","okato":"46204000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"582fae29-5955-4dba-9f77-ebf9a8e60827","disid":"1","name":"Бронницы г","okato":"46405000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"ebceede7-cea0-48c8-b3ba-97b599feb687","disid":"1","name":"Волоколамский р-н","okato":"46205000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"223bb7e9-9086-47b6-ac2b-45c7004831ed","disid":"1","name":"Воскресенский р-н","okato":"46206000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"6fa8b59c-cda7-4c98-8b41-e0bcb2867e16","disid":"1","name":"Дзержинский г","okato":"46411000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"7fb194dd-553a-4093-8e95-04dc8963d80f","disid":"1","name":"Дмитровский р-н","okato":"46208000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"dcf522ad-e032-4db9-9dbb-e30d2cddfadb","disid":"1","name":"Долгопрудный г","okato":"46416000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"d177d438-ea69-4169-854c-d4512d7c8ebe","disid":"1","name":"Домодедово г","okato":"46209000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"91840e27-ed7f-42ed-929c-1d538f327255","disid":"1","name":"Домодедовский р-н","okato":"46209000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"c86ad06c-c721-4a7e-aa06-f622eed83b6f","disid":"1","name":"Дубна г","okato":"46418000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"96036cfc-7acb-4de8-9004-3ae4c1c232c0","disid":"1","name":"Егорьевский р-н","okato":"46212000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"c8b7d7f3-857f-4acf-aeac-2b6e9aebc760","disid":"1","name":"Железнодорожный г","okato":"46424000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"fd91f393-4820-437f-a50c-907e9856c374","disid":"1","name":"Жуковский г","okato":"46425000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"3fb232e4-8793-4fa9-85da-78eefea6c7ca","disid":"1","name":"Зарайский р-н","okato":"46216000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"4bae8c68-e107-4352-9d4b-f937f90469ac","disid":"1","name":"Звенигород г","okato":"46430000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"e12cf909-779a-4352-af51-7a2a07668f60","disid":"1","name":"Ивантеевка г","okato":"46432000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"f0aeb51c-7a34-4112-a6b4-dafde11d3eef","disid":"1","name":"Истринский р-н","okato":"46218000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"eb563d60-f0d3-4783-a3c2-f26b7cee6cf7","disid":"1","name":"Каширский р-н","okato":"46220501000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"5a11404e-3a4f-4943-b60c-51480729dcfb","disid":"1","name":"Климовск г","okato":"46436000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"fd790f0c-f82c-49df-b7e5-6af9c6e8297a","disid":"1","name":"Клинский р-н","okato":"46221000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"ca714f44-d673-41ae-8bee-f1f60f3459e1","disid":"1","name":"Коломенский р-н","okato":"46222000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"b367fb03-29f9-4dac-8d85-01595cfb6ad9","disid":"1","name":"Коломна г","okato":"46438000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"819d6910-b4d1-474f-ad10-c1fa944dfca4","disid":"1","name":"Королев г","okato":"46434000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"67488a01-ccb7-4638-bcad-117db0fbe9a3","disid":"1","name":"Котельники г","okato":"46444000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"bc5d23ce-e886-4dc7-976c-6b8be6d501d2","disid":"1","name":"Красноармейск г","okato":"46443000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"90c69435-9a82-4965-ac01-d2689e2e535c","disid":"1","name":"Красногорский р-н","okato":"46223000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"6e8a99b2-e6bd-4169-acb3-f7e6cd53be3b","disid":"1","name":"Краснознаменск г","okato":"46505000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"69511bb4-8f25-490d-9c54-0c1c00591af2","disid":"1","name":"Ленинский р-н","okato":"46228000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"67c493d4-d141-407e-868b-dafc289503f3","disid":"1","name":"Лобня г","okato":"46440000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"96c869d9-51a8-4db6-8011-9fc459c9a78c","disid":"1","name":"Лосино-Петровский г","okato":"46259503000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"af6539b1-83c9-47d8-8d03-cda0bcb8ad61","disid":"1","name":"Лотошинский р-н","okato":"46229000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"0c73eed3-32a2-4a62-8b45-cbfc46c80340","disid":"1","name":"Луховицкий р-н","okato":"46230000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"bba16a72-09e1-4f3f-93af-df5ecab6714b","disid":"1","name":"Лыткарино г","okato":"46441000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"fa5172c9-11ca-4e4c-bdb0-ffb9fec9c849","disid":"1","name":"Люберецкий р-н","okato":"46231000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"60a07c29-5fa6-45ce-ab10-5ea17f843736","disid":"1","name":"Можайский р-н","okato":"46233000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"a87ff831-986b-44a7-8405-00fc699de4ce","disid":"1","name":"Мытищинский р-н","okato":"46234000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"60373f03-59b1-438e-90aa-4e1f38c97047","disid":"1","name":"Наро-Фоминский р-н","okato":"46238000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"8bb0a0d8-975e-4a08-bc16-3960a8137992","disid":"1","name":"Ногинский р-н","okato":"46239000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"b89d5190-d1db-47d7-94af-42f1d3ce2f41","disid":"1","name":"Одинцовский р-н","okato":"46241000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"9ab1cf2a-50c3-4ca3-8e11-8f87211c236c","disid":"1","name":"Озерский р-н","okato":"46242000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"0f2f2d09-8e7a-4356-bd4d-0b055d802e7b","disid":"1","name":"Орехово-Зуево г","okato":"46457000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"d4c14df1-093b-4a63-abc9-996497910e7b","disid":"1","name":"Орехово-Зуевский р-н","okato":"46243000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"1b31762d-ea2c-4da7-80e9-2a494a1778db","disid":"1","name":"Павлово-Посадский р-н","okato":"46245000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"b22cf685-e391-42c8-aab5-a9aadb9193d4","disid":"1","name":"Подольск г","okato":"46460000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"c8cede1d-51e7-49ef-b4b9-be5057bb7ec2","disid":"1","name":"Подольский р-н","okato":"46246000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"9990bc45-c7c1-407e-bdd2-5526e4f742d2","disid":"1","name":"Протвино г","okato":"46467000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"2f88bc57-5096-4aee-bcfc-fe26d4dd3a26","disid":"1","name":"Пушкинский р-н","okato":"46247000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"49579edb-77cd-4967-9ef2-5530c4076067","disid":"1","name":"Пущино г","okato":"46462000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"7e51a385-9455-443e-bf57-709df8f48198","disid":"1","name":"Раменский р-н","okato":"46248000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"e0504cf6-4d81-401c-b18b-434457aaaa21","disid":"1","name":"Реутов г","okato":"46464000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"377ca4f0-3268-42b4-bf68-af98c3682503","disid":"1","name":"Рошаль г","okato":"46465000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"3dadd23f-6039-44b9-b109-6f21cddfef68","disid":"1","name":"Рузский р-н","okato":"46249000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"5c7c7022-9d64-4110-89df-d52460b9cd93","disid":"1","name":"Сергиево-Посадский р-н","okato":"46215000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"f321b6d7-b23a-4e53-8625-1af1016bd570","disid":"1","name":"Серебряно-Прудский р-н","okato":"46250000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"efc02a6a-273b-4a49-aef9-a5606ef8591c","disid":"1","name":"Серпухов г","okato":"46470000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"d21d56bd-349c-4cd7-bf88-3b1361f9aa16","disid":"1","name":"Серпуховский р-н","okato":"46251000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"395203ad-a8a5-4708-944c-790ec93bf8a3","disid":"1","name":"Солнечногорский р-н","okato":"46252000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"4df13700-4fed-41e8-a95b-1cac5e8fcb3a","disid":"1","name":"Ступинский р-н","okato":"46253000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"ae843cb3-df6b-41db-954b-1204308256d0","disid":"1","name":"Талдомский р-н","okato":"46254000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"13696e0e-4c75-49aa-9c83-0a6faf5074ee","disid":"1","name":"Фрязино г","okato":"46480000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"d76255c8-3173-4db5-a39b-badd3ebdf851","disid":"1","name":"Химки г","okato":"46483000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"9a7ecd73-a07d-4aab-bffa-3fd03bd213a6","disid":"1","name":"Химкинский р-н","okato":"46255000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"c4ad9fee-ed64-4fab-bf38-ceb051bb4cf9","disid":"1","name":"Чеховский р-н","okato":"46256000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"c1d4c644-fcf8-4bbe-8dd6-4df1e0b200e2","disid":"1","name":"Шатурский р-н","okato":"46257000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"ba088938-a22c-4ae1-9d24-e46fe7c423ec","disid":"1","name":"Шаховской р-н","okato":"46258000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"823b14d2-2e5f-4586-9c7e-a3d6b04daf39","disid":"1","name":"Щелковский р-н","okato":"46259000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"091e36e6-fab6-477b-8b07-9151cbeb9cd5","disid":"1","name":"Электрогорск г","okato":"46245505000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"e0b171b6-bf2e-4d68-ab05-4d42ab2b375a","disid":"1","name":"Электросталь г","okato":"46490000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"ad3c0a1e-78d6-4c58-90cb-f2cc93b173f4","disid":"1","name":"Юбилейный г","okato":"46493000000","parentguid":"29251dcf-00a1-4e34-98d4-5c47484a36d4","regioncode":"50"},{"aoguid":"b3ccc7a9-8439-4686-a936-65a2b6212362","disid":"1","name":"Болховский р-н","okato":"54204000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"bf0b5d8d-5e60-4b61-87d5-f428b1b6a6cf","disid":"1","name":"Верховский р-н","okato":"54208000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"a2fc3c1b-3b84-4adb-9a35-58689c29e56b","disid":"1","name":"Глазуновский р-н","okato":"54210000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"5f2ca854-d8a1-44e6-a265-c3f844a32580","disid":"1","name":"Дмитровский р-н","okato":"54212000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"a1104ce9-df57-440c-9cfe-ba2f2cc34563","disid":"1","name":"Должанский р-н","okato":"54215000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"630497e1-24a3-4a3d-b3cd-a4aa5ffc7eea","disid":"1","name":"Залегощенский р-н","okato":"54218000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"8e4a2db5-616b-4d87-84f0-061a9d1c936e","disid":"1","name":"Знаменский р-н","okato":"54220000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"e25a11cb-3f64-4ff6-9591-d5c0470e3645","disid":"1","name":"Колпнянский р-н","okato":"54223000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"d1423e01-0020-42dd-a465-f9cb04151259","disid":"1","name":"Корсаковский р-н","okato":"54226000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"34975622-2cfd-4dfd-863f-c98c6eb2164e","disid":"1","name":"Краснозоренский р-н","okato":"54224000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"0c30014e-dac0-4df7-af5d-bdc251e2254d","disid":"1","name":"Кромской р-н","okato":"54225000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"41859789-303c-43e3-a4dd-c98ef3694fec","disid":"1","name":"Ливенский р-н","okato":"54229000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"aef2c735-2e21-42e5-8638-9667bade6a2b","disid":"1","name":"Ливны г","okato":"54405000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"651efb39-4d81-4965-927a-2fbf3354d517","disid":"1","name":"Малоархангельский р-н","okato":"54232000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"76f2780b-0f1c-4818-98a4-13da5c8a2c80","disid":"1","name":"Мценск г","okato":"54410000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"3588ca22-4913-4e88-9eb6-107aef30fe46","disid":"1","name":"Мценский р-н","okato":"54236000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"5a120630-54b4-42c8-8fd7-e011b7053a99","disid":"1","name":"Новодеревеньковский р-н","okato":"54239000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"b284d1fb-0b62-4568-bf80-ea060a10ffe1","disid":"1","name":"Новосильский р-н","okato":"54243000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"2abed4d9-5565-4885-bc96-f4ffccc6cba4","disid":"1","name":"Орел г","okato":"54401000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"10fc49fc-9cae-47db-9045-3f0375ef11db","disid":"1","name":"Орловский р-н","okato":"54247000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"7fc697a0-b658-46cb-9324-d7492f736672","disid":"1","name":"Покровский р-н","okato":"54250000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"401131ed-ffa6-4487-ab18-2fc93e97e7c9","disid":"1","name":"Свердловский р-н","okato":"54252000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"c33987e5-0aa9-41b8-8b4d-d200a44c495c","disid":"1","name":"Сосковский р-н","okato":"54253000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"ee8afff4-30e1-4c21-a919-d8a0f69d4a5a","disid":"1","name":"Троснянский р-н","okato":"54254000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"dfa80568-f1cb-43aa-9b23-b4780cd7ed5a","disid":"1","name":"Урицкий р-н","okato":"54255000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"86039a0b-45a2-4cc9-9575-b8e73f30706d","disid":"1","name":"Хотынецкий р-н","okato":"54257000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"ed91b059-745a-4321-82de-c2e8581d5f6c","disid":"1","name":"Шаблыкинский р-н","okato":"54259000000","parentguid":"5e465691-de23-4c4e-9f46-f35a125b5970","regioncode":"57"},{"aoguid":"3fc75344-6325-453d-b781-4500e5d88747","disid":"1","name":"Ермишинский р-н","okato":"61202000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"b3a43120-35bb-4dc1-a0fc-b65569e27ecd","disid":"1","name":"Захаровский р-н","okato":"61204000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"6513609f-7f58-4da1-9827-6cc65e1c182a","disid":"1","name":"Кадомский р-н","okato":"61206000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"5ad034ad-85b5-4106-be01-3d6e8b08cb2c","disid":"1","name":"Касимов г","okato":"61405000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"4eee6b2e-e18d-418b-9bd6-718dec0df1c0","disid":"1","name":"Касимовский р-н","okato":"61208000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"2d6f9946-c7b5-4213-ad5c-a9018ccdd806","disid":"1","name":"Клепиковский р-н","okato":"61210000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"0a0d1a5f-37f7-482d-b83c-e503426dfd59","disid":"1","name":"Кораблинский р-н","okato":"61212000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"08dd0686-0521-4801-ac22-179d2215be1d","disid":"1","name":"Милославский р-н","okato":"61215000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"94e426a9-229b-460e-b483-ff2f8d4a026d","disid":"1","name":"Михайловский р-н","okato":"61217000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"618933a2-821f-4031-8740-70ddfb3361d9","disid":"1","name":"Новодеревенский р-н","okato":"61220000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"d10b6cc4-f668-4b6c-b4a0-5d3cb9f9fbf6","disid":"1","name":"Пителинский р-н","okato":"61223000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"0b2f6225-49e6-49d0-ab5b-625b9fb94554","disid":"1","name":"Пронский р-н","okato":"61225000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"79f257ad-6cf3-4e6d-a14b-ef7c890585ba","disid":"1","name":"Путятинский р-н","okato":"61226000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"c63df1d5-7dd5-422f-b3ae-d383b291e27d","disid":"1","name":"Рыбновский р-н","okato":"61227000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"30b3abb1-d680-45e2-a294-ba715d5dd6e4","disid":"1","name":"Ряжский р-н","okato":"61230000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"e67849b2-6b35-41b4-9d49-65b69fd45e07","disid":"1","name":"Рязанский р-н","okato":"61234000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"86e5bae4-ef58-4031-b34f-5e9ff914cd55","disid":"1","name":"Рязань г","okato":"61401000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"60695752-560f-4579-91d7-9d07d0abe622","disid":"1","name":"Сапожковский р-н","okato":"61237000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"cc1da627-6ab9-455c-813e-f0515457bce2","disid":"1","name":"Сараевский р-н","okato":"61240000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"23c99789-de53-408e-b38d-09c5539cce2f","disid":"1","name":"Сасово г","okato":"61410000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"81d15db9-03e3-4e6e-b3d4-b1ceaf03a7fa","disid":"1","name":"Сасовский р-н","okato":"61242000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"1ab7c980-83c4-46c6-b6bf-fc0d6b64b56a","disid":"1","name":"Скопин г","okato":"61415000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"a03c70ca-6855-4258-af6e-c56e804bfae7","disid":"1","name":"Скопинский р-н","okato":"61244000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"5fcb6fc7-c498-4a4d-bcd6-ee4634a4399b","disid":"1","name":"Спасский р-н","okato":"61246000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"801ae9ba-4809-4aa5-b045-7791125540d6","disid":"1","name":"Старожиловский р-н","okato":"61248000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"fb1d8d69-259a-4afe-8ed3-fcdb5354c9f6","disid":"1","name":"Ухоловский р-н","okato":"61250000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"49e90f30-3a37-4d42-a3d6-bb59fc19c766","disid":"1","name":"Чучковский р-н","okato":"61253000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"278b7e3f-02ca-493f-913d-9a25203138ff","disid":"1","name":"Шацкий р-н","okato":"61256000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"22773cd1-2b2c-418e-96d0-a9a696cd11ed","disid":"1","name":"Шиловский р-н","okato":"61258000000","parentguid":"963073ee-4dfc-48bd-9a70-d2dfc6bd1f31","regioncode":"62"},{"aoguid":"1ceb2e99-0391-4d14-beb2-0e917fa1fe97","disid":"1","name":"Велижский р-н","okato":"66203000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"1257968d-9564-44d1-b914-129559642025","disid":"1","name":"Вяземский р-н","okato":"66205000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"23d70e81-cb1c-45d7-8b74-b89b67864b8c","disid":"1","name":"Гагаринский р-н","okato":"66208000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"9a9bd9cb-8dc2-4437-b05a-30b8613c6798","disid":"1","name":"Глинковский р-н","okato":"66209000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"56824b2b-0186-4991-9ef6-4bdcb8d6b86d","disid":"1","name":"Демидовский р-н","okato":"66211000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"5e2b3d5b-cd14-4116-8837-8878b5ccc057","disid":"1","name":"Десногорск г","okato":"66410000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"d4df5e3c-5a79-4780-9947-58eb77346d1b","disid":"1","name":"Дорогобужский р-н","okato":"66214000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"8dac9a96-4940-4ef6-92fe-e9b16e562462","disid":"1","name":"Духовщинский р-н","okato":"66216000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"8ae69275-b296-425c-9593-8608c0b9cd47","disid":"1","name":"Ельнинский р-н","okato":"66219000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"3c9dce06-9aa8-4a90-a398-7dc0183dcd9f","disid":"1","name":"Ершичский р-н","okato":"66221000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"ad789c45-33d1-4159-9108-a9bcfe36a662","disid":"1","name":"Кардымовский р-н","okato":"66223000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"cd2717ba-7a65-495a-bcdb-e925f1cef0b3","disid":"1","name":"Краснинский р-н","okato":"66224000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"caf5eb48-8ecd-4dfb-acab-81437535a2a8","disid":"1","name":"Монастырщинский р-н","okato":"66227000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"196b9b07-6e13-4b81-ab5d-67d7284c5869","disid":"1","name":"Новодугинский р-н","okato":"66230000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"6829228d-ba24-45c2-af67-87972e5c5622","disid":"1","name":"Починковский р-н","okato":"66233000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"8ac93b54-db33-4693-a9ba-7182c8822a1f","disid":"1","name":"Рославльский р-н","okato":"66236000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"7f6b64d5-f211-4813-b1a8-e687b5e63382","disid":"1","name":"Руднянский р-н","okato":"66238000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"d8549edd-1928-412a-8b17-17dfc25e0a21","disid":"1","name":"Сафоновский р-н","okato":"66241000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"d414a2e8-9e1e-48c1-94a4-7308d5608177","disid":"1","name":"Смоленск г","okato":"66401000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"db6affe3-5b68-46ec-bd7f-03a96d3329fe","disid":"1","name":"Смоленский р-н","okato":"66244000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"55de65cd-3a62-4304-bd72-75cb153b8f33","disid":"1","name":"Сычевский р-н","okato":"66246000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"ef88d16f-7a72-4f9a-b255-0f1f64081b38","disid":"1","name":"Темкинский р-н","okato":"66248000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"ae854b96-7cd0-4db9-b4e4-192921cb8b19","disid":"1","name":"Угранский р-н","okato":"66250000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"b89a5afe-940e-4158-82d0-12b68142a7dd","disid":"1","name":"Хиславичский р-н","okato":"66252000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"528a9073-54aa-4429-9941-0d09ed30447e","disid":"1","name":"Холм-Жирковский р-н","okato":"66254000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"a3bf87b2-5e6c-4bc5-a00e-5f321c6d0a62","disid":"1","name":"Шумячский р-н","okato":"66256000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"33e3d555-c66a-4611-a1c5-4f4002ce578f","disid":"1","name":"Ярцевский р-н","okato":"66258000000","parentguid":"e8502180-6d08-431b-83ea-c7038f0df905","regioncode":"67"},{"aoguid":"954949ee-b14b-40ee-8c22-0d6dc0144cb5","disid":"1","name":"Бондарский р-н","okato":"68202000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"6acde0ac-e7ad-45af-840e-1c0f5b324b3e","disid":"1","name":"Гавриловский р-н","okato":"68203000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"8d2dc46b-a306-4702-91f4-977e558eef51","disid":"1","name":"Жердевский р-н","okato":"68204000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"b28e7b19-71b4-43e0-ac8e-22bd2aaedf77","disid":"1","name":"Знаменский р-н","okato":"68206000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"ea3a9d56-e84b-43dd-8974-3564f7e0f8dd","disid":"1","name":"Инжавинский р-н","okato":"68208000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"24694c2c-bab5-4fc7-9666-5ad984536465","disid":"1","name":"Кирсанов г","okato":"68405000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"f2b31a0b-3de1-4daf-8136-c2be4fb2063d","disid":"1","name":"Кирсановский р-н","okato":"68210000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"1cc2ab3c-1791-4771-b332-d2d96f52788e","disid":"1","name":"Котовск г","okato":"68410000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"9bacca6d-4ed5-4fae-a76d-d281ce884d04","disid":"1","name":"Мичуринск г","okato":"68415000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"e0ece83e-fd6c-4770-83ea-a1dae795e945","disid":"1","name":"Мичуринский р-н","okato":"68212000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"7dad8730-11c5-4e61-ba75-0c16043c0234","disid":"1","name":"Мордовский р-н","okato":"68214000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"88bf324d-7303-45c3-ba7f-695f2528490b","disid":"1","name":"Моршанск г","okato":"68420000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"b8436171-8961-4eb2-9dc0-3f001846aaa8","disid":"1","name":"Моршанский р-н","okato":"68216000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"050c2727-55bf-4258-bc7a-094d018a361d","disid":"1","name":"Мучкапский р-н","okato":"68218000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"23206de0-e14b-40b3-89e8-ca79aab070d0","disid":"1","name":"Никифоровский р-н","okato":"68220000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"daa331e3-1528-4c7d-8bd7-910ef73168e1","disid":"1","name":"Первомайский р-н","okato":"68222000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"d616223f-bf7e-4c6c-9834-41a51b56786c","disid":"1","name":"Петровский р-н","okato":"68224000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"651dbe07-0510-4c72-b009-4c0aed3d396c","disid":"1","name":"Пичаевский р-н","okato":"68226000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"f3d1ea5a-4478-4589-bec0-47c558577739","disid":"1","name":"Рассказово г","okato":"68425000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"cda1b9dd-4a8c-486a-ab25-05229c579774","disid":"1","name":"Рассказовский р-н","okato":"68228000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"b72e4efa-7c7f-4503-94c2-cce202a4c528","disid":"1","name":"Ржаксинский р-н","okato":"68230000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"cc23a42b-4fdd-4a8b-9c58-936d586f8e06","disid":"1","name":"Сампурский р-н","okato":"68232000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"0c9ca360-36f1-4819-b0b9-88fba3bc44e4","disid":"1","name":"Сосновский р-н","okato":"68234000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"28695043-ab1b-411d-8259-ce84d46f7c8e","disid":"1","name":"Староюрьевский р-н","okato":"68236000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"ea2a1270-1e19-4224-b1a0-4228b9de3c7a","disid":"1","name":"Тамбов г","okato":"68401000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"70adc4a8-0c93-4940-9605-cf2e772c4133","disid":"1","name":"Тамбовский р-н","okato":"68240000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"f3bf6177-2e72-45b7-b7e2-bea113ed0f9b","disid":"1","name":"Токаревский р-н","okato":"68242000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"5a54fa19-c17f-40a8-9d81-0fc826cba781","disid":"1","name":"Уварово г","okato":"68430000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"7a2e0916-0b08-4759-a337-4a1fe12780fa","disid":"1","name":"Уваровский р-н","okato":"68244000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"057a3a62-9e49-4cda-b9f5-3810e2cd46eb","disid":"1","name":"Уметский р-н","okato":"68246000000","parentguid":"a9a71961-9363-44ba-91b5-ddf0463aebc2","regioncode":"68"},{"aoguid":"46f20f8a-e069-487b-934d-7f9ef60d1526","disid":"1","name":"Андреапольский р-н","okato":"28202000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"9e56cb89-d3b1-4140-b141-cd3c94ad21b0","disid":"1","name":"Бежецкий р-н","okato":"28204000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"acc503d1-74e5-4430-8eda-d3e79ade0f37","disid":"1","name":"Бельский р-н","okato":"28206000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"e7cdcffd-c57d-48c4-9503-6788c980243a","disid":"1","name":"Бологовский р-н","okato":"28208000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"572664bf-2d8b-4c74-8a15-10ee2e8505a6","disid":"1","name":"Весьегонский р-н","okato":"28210000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"7781e1b2-318a-46e7-b8b2-5856e8da1a47","disid":"1","name":"Вышневолоцкий р-н","okato":"28212000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"ac45dd91-33c1-4689-a48c-226c75dc752d","disid":"1","name":"Вышний Волочек г","okato":"28414000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"5ae0d543-700a-4f80-ab60-5bd1560059ff","disid":"1","name":"Жарковский р-н","okato":"28214000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"8ebf6e4d-22da-4b42-95be-934125432bfa","disid":"1","name":"Западнодвинский р-н","okato":"28216000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"276164c7-c7ce-4d1d-9762-b82a8e079a14","disid":"1","name":"Зубцовский р-н","okato":"28218000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"df5569f0-3033-423a-89cd-d48cd95e14f3","disid":"1","name":"Калининский р-н","okato":"28220000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"0af30a82-765c-4a40-9777-a55fcd55b1d7","disid":"1","name":"Калязинский р-н","okato":"28222000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"7e816a2d-e205-45f7-9253-44a59fb2cc38","disid":"1","name":"Кашинский р-н","okato":"28224000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"b7cc6ccc-8534-4ee5-91bd-58eee1e4dbd0","disid":"1","name":"Кесовогорский р-н","okato":"28226000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"308b0e8d-720d-45d8-abf7-9b1df375f148","disid":"1","name":"Кимрский р-н","okato":"28228000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"2c02d3e2-f65d-4d7f-b1a3-ffe55d2d4508","disid":"1","name":"Кимры г","okato":"28426000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"e0c911ee-c77a-4719-a5e3-09e99b683570","disid":"1","name":"Конаковский р-н","okato":"28230000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"384ba088-dd3b-4d4b-8423-ebdb2cc5d067","disid":"1","name":"Краснохолмский р-н","okato":"28232000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"c25ac124-c633-4836-ab09-7b6927d546e1","disid":"1","name":"Кувшиновский р-н","okato":"28234000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"9cf32001-5168-4a19-9473-1caaa62a9993","disid":"1","name":"Лесной р-н","okato":"28236000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"091c38e1-e2bd-48cb-904c-7d65cb6069a6","disid":"1","name":"Лихославльский р-н","okato":"28238000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"0d18ee0c-2283-4255-ba9f-89c67f3e862b","disid":"1","name":"Максатихинский р-н","okato":"28240000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"90503ec1-d6db-4d1f-a00c-4bb00544dc94","disid":"1","name":"Молоковский р-н","okato":"28242000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"a38751f3-98fe-4d8d-b9bc-2a4705b887ec","disid":"1","name":"Нелидово г","okato":"28435000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"a0dd8ac9-c407-4cf0-9c0b-825b99db92b4","disid":"1","name":"Нелидовский р-н","okato":"28243000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"6325e4bc-84b9-4dbf-bedd-6469da969350","disid":"1","name":"Оленинский р-н","okato":"28244000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"dc932be3-ef8b-4ee7-bdd4-0701d551caf8","disid":"1","name":"Осташковский р-н","okato":"28245000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"6936e9d5-453c-4a78-884c-250ff296cd1e","disid":"1","name":"Пеновский р-н","okato":"28246000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"112bb61a-40ec-4f48-9422-21c64f6ffbc6","disid":"1","name":"Рамешковский р-н","okato":"28247000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"2553804d-14b9-4f5b-8bd0-25c0fc7315ae","disid":"1","name":"Ржев г","okato":"28445000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"d8621ff5-c45f-47b2-a6ef-15d5f4f1f3aa","disid":"1","name":"Ржевский р-н","okato":"28248000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"6be639db-b434-4e3d-8eef-28ad7ea8e8da","disid":"1","name":"Сандовский р-н","okato":"28249000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"7cd8b4c8-4053-4124-a1e2-c6d98cb6d8fb","disid":"1","name":"Селижаровский р-н","okato":"28250000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"e4af1ceb-fc05-4a56-b275-746d51a69bc0","disid":"1","name":"Сонковский р-н","okato":"28251000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"5ca30888-bcb5-450e-b94f-71be9fb653ac","disid":"1","name":"Спировский р-н","okato":"28252000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"53d1e2ec-b4c6-4670-9373-0bdf56d86d9a","disid":"1","name":"Старицкий р-н","okato":"28253000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"c52ea942-555e-45c6-9751-58897717b02f","disid":"1","name":"Тверь г","okato":"28401000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"4b7047b6-a656-48e7-a247-1433d4a7fb82","disid":"1","name":"Торжок г","okato":"28450000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"fbb44ab2-0d29-4711-a5a9-ffa53730dd28","disid":"1","name":"Торжокский р-н","okato":"28254000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"a8ebeee8-7bd1-4bd1-b9c5-11750ca70701","disid":"1","name":"Торопецкий р-н","okato":"28255000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"3cb1b97c-bdd4-42a0-914a-4d98d096bb77","disid":"1","name":"Удомельский р-н","okato":"28256000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"fbff4ce6-504f-4812-8a59-460f3f8f3917","disid":"1","name":"Фировский р-н","okato":"28257000000","parentguid":"61723327-1c20-42fe-8dfa-402638d9b396","regioncode":"69"},{"aoguid":"23f5f088-4463-4cfe-8b1a-3594a12b5dd3","disid":"1","name":"Алексинский р-н","okato":"70202000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"7b9b175b-df47-4d86-b680-0186dd88a38f","disid":"1","name":"Арсеньевский р-н","okato":"70204000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"9258a8ea-eb5b-4826-92c3-f6057e6affe5","disid":"1","name":"Белевский р-н","okato":"70206000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"8680ea1f-524d-4790-a4ee-06e0adc7c1b2","disid":"1","name":"Богородицкий р-н","okato":"70208000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"407c2852-1a4b-49db-8106-96e32cfad5bd","disid":"1","name":"Веневский р-н","okato":"70212000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"38854a1c-3dd1-4698-8fb9-2874513d0d17","disid":"1","name":"Воловский р-н","okato":"70216000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"dc8fbc8d-da2e-4bbb-a55c-94446fa7ad77","disid":"1","name":"Донской г","okato":"70412000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"c31f096a-cb01-4bab-9122-65f312a15e21","disid":"1","name":"Дубенский р-н","okato":"70218000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"6352dcd1-87ee-42f0-b05d-5454e2a0ac17","disid":"1","name":"Ефремовский р-н","okato":"70220800000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"8a985c0d-976b-4553-aa95-d4e7410632bc","disid":"1","name":"Заокский р-н","okato":"70222000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"598b0934-42a7-46fd-8bb0-c0706aabd88e","disid":"1","name":"Каменский р-н","okato":"70224000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"60d4e8c6-f648-47f0-be19-8f9840c0255c","disid":"1","name":"Кимовский р-н","okato":"70226000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"56bdf710-14ab-4313-9fe3-dffa39d80fff","disid":"1","name":"Киреевский р-н","okato":"70228000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"e1b8afb2-3dfb-4e57-99ab-10c1e518dd5c","disid":"1","name":"Куркинский р-н","okato":"70230000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"e879c06b-d180-4177-a6ff-4aad5588c6b3","disid":"1","name":"Ленинский р-н","okato":"70232551000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"6bccfa9d-86e7-4ec2-b2b9-e74c19dbbdc8","disid":"1","name":"Новомосковский р-н","okato":"70234000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"410634d7-39c2-41c2-9f73-58b39b86b2d4","disid":"1","name":"Одоевский р-н","okato":"70236000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"c85410d0-42c0-4163-a652-8c521f464295","disid":"1","name":"Плавский р-н","okato":"70238000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"f6fe8d92-4623-4f35-ae57-a2659644d721","disid":"1","name":"Суворовский р-н","okato":"70240000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"b5445188-e405-4a0f-b554-6a7b399a927e","disid":"1","name":"Тепло-Огаревский р-н","okato":"70242000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"b2601b18-6da2-4789-9fbe-800dde06a2bb","disid":"1","name":"Тула г","okato":"70401000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"f0f20b54-196c-4389-b89c-97a911d0702e","disid":"1","name":"Узловский р-н","okato":"70244000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"329ff35c-749a-4729-9dd6-4e58a0b8a864","disid":"1","name":"Чернский р-н","okato":"70246000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"41b58375-5128-4897-8b0b-0ce8b39acdaa","disid":"1","name":"Щекинский р-н","okato":"70248000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"6279733f-03a1-4459-8a02-aa6a82813aaa","disid":"1","name":"Ясногорский р-н","okato":"70250000000","parentguid":"d028ec4f-f6da-4843-ada6-b68b3e0efa3d","regioncode":"71"},{"aoguid":"bb9f2db3-5f5d-46f5-ad9c-c1e22b48b146","disid":"1","name":"Большесельский р-н","okato":"78203000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"97052853-1904-40f2-b04b-058b38b05520","disid":"1","name":"Борисоглебский р-н","okato":"78206000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"f47671d5-461c-4aef-a2a6-b69ffc6d496e","disid":"1","name":"Брейтовский р-н","okato":"78209000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"d34adda2-fcf2-4aa2-bda1-2efa20c6f083","disid":"1","name":"Гаврилов-Ямский р-н","okato":"78212000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"75c2d318-e067-4853-9ecc-c48c76b733a0","disid":"1","name":"Даниловский р-н","okato":"78215000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"78e104fc-31da-47a5-a2f2-d1a9817bef56","disid":"1","name":"Любимский р-н","okato":"78218000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"fa4c835a-3297-40c4-bc84-8ab1eeaf0213","disid":"1","name":"Мышкинский р-н","okato":"78221000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"add926c4-50ae-4f77-98cb-ed44e980e77f","disid":"1","name":"Некоузский р-н","okato":"78223000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"4e864448-447c-49ef-83f6-c9730cbfb809","disid":"1","name":"Некрасовский р-н","okato":"78226000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"6e7d64e5-9fd4-4cd5-9f14-0e22812f25ab","disid":"1","name":"Первомайский р-н","okato":"78229000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"f147ed70-422e-40d0-9088-810f7b57ed59","disid":"1","name":"Переславль-Залесский г","okato":"78405000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"32fb7505-9d6f-4a38-b3bb-4104ce1ca908","disid":"1","name":"Переславский р-н","okato":"78232000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"544de87c-32aa-4df5-98cd-2087e17bf39a","disid":"1","name":"Пошехонский р-н","okato":"78234000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"136ab367-0f6d-4cf2-a9ba-801d84a0b6ae","disid":"1","name":"Ростовский р-н","okato":"78237000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"ecdb11fe-338f-46ba-9c43-c4714117e3ec","disid":"1","name":"Рыбинский р-н","okato":"78240000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"871f7618-87c2-48d0-83ba-0fb05513cc65","disid":"1","name":"Тутаевский р-н","okato":"78417000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"c466bb3d-9727-45c7-bb7e-b492deedbacf","disid":"1","name":"Угличский р-н","okato":"78246000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"6b1bab7d-ee45-4168-a2a6-4ce2880d90d3","disid":"1","name":"Ярославль г","okato":"78401000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"07842df6-2f70-4e43-a177-4701fb3ff10e","disid":"1","name":"Ярославский р-н","okato":"78250000000","parentguid":"a84b2ef4-db03-474b-b552-6229e801ae9b","regioncode":"76"},{"aoguid":"ccdfd496-8108-4655-aadd-bd228747306d","disid":"2","name":"Адыгейск г","okato":"79403000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"8a25dc7e-2bf1-443a-800a-024a43b80832","disid":"2","name":"Гиагинский р-н","okato":"79205000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"3a236009-b93a-4eff-be6e-a086688fd045","disid":"2","name":"Кошехабльский р-н","okato":"79215000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"ab2a04b4-44a8-4ce1-aca1-32f97229c3fb","disid":"2","name":"Красногвардейский р-н","okato":"79218000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"8cfbe842-e803-49ca-9347-1ef90481dd98","disid":"2","name":"Майкоп г","okato":"79401000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"e6b470db-a262-4aab-9ca0-2c5d0fc2209e","disid":"2","name":"Майкопский р-н","okato":"79222000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"34a0d847-a43b-421f-86c3-8eaf84c1ce28","disid":"2","name":"Тахтамукайский р-н","okato":"79230000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"a8cf3eb8-4689-4981-b908-9a760aae99d5","disid":"2","name":"Теучежский р-н","okato":"79233000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"3c2b901a-488d-476f-8a6f-1a382a788c75","disid":"2","name":"Шовгеновский р-н","okato":"79240000000","parentguid":"d8327a56-80de-4df2-815c-4f6ab1224c50","regioncode":"01"},{"aoguid":"a101dd8b-3aee-4bda-9c61-9df106f145ff","disid":"2","name":"Астрахань г","okato":"12401000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"7e684a70-a23a-41b9-9440-302712c3e41d","disid":"2","name":"Ахтубинский р-н","okato":"12205000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"3543d36d-4bf6-4caa-a267-b2bad69ccd6c","disid":"2","name":"Володарский р-н","okato":"12210000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"67788aa7-bf40-4dba-9574-9b271ccb845c","disid":"2","name":"Енотаевский р-н","okato":"12215000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"54ecd5a8-83d9-4a85-ae2c-6fe6976ab716","disid":"2","name":"Знаменск г","okato":"12519000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"6d400dc9-cf9a-4dfd-920d-b83261345fd2","disid":"2","name":"Икрянинский р-н","okato":"12220000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"201c5a5d-5af2-47bb-b538-c42ffd5927dc","disid":"2","name":"Камызякский р-н","okato":"12225000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"dbb24e53-47a5-4a43-aa2e-bdfee433ab00","disid":"2","name":"Красноярский р-н","okato":"12230000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"04b18b87-2fb9-49eb-bee4-c660f18f7ea4","disid":"2","name":"Лиманский р-н","okato":"12235000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"2b714aee-b462-4243-9b3d-6581b44202da","disid":"2","name":"Наримановский р-н","okato":"12240000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"a0b67c5c-0250-47cf-94a5-4c2ca29fe183","disid":"2","name":"Приволжский р-н","okato":"12242000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"bc36238f-e341-41b3-81aa-700c30845de8","disid":"2","name":"Харабалинский р-н","okato":"12245000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"46c0e38f-d339-4149-acfa-0d6ae968d2b6","disid":"2","name":"Черноярский р-н","okato":"12250000000","parentguid":"83009239-25cb-4561-af8e-7ee111b1cb73","regioncode":"30"},{"aoguid":"ae234db4-ea1c-43ef-b766-2c0d58e0d430","disid":"2","name":"Алексеевский р-н","okato":"18202000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"b53db589-40ec-4939-92c1-106c145d1358","disid":"2","name":"Быковский р-н","okato":"18204000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"a52b7389-0cfe-46fb-ae15-298652a64cf8","disid":"2","name":"Волгоград г","okato":"18401000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"bc5ed788-84c8-493e-9598-7a15a9f1e4c1","disid":"2","name":"Волжский г","okato":"18410000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"4731601f-25a5-4903-872b-c91485f84b6d","disid":"2","name":"Городищенский р-н","okato":"18205000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"d46be095-f3e7-4a5f-8f55-571bc0881851","disid":"2","name":"Даниловский р-н","okato":"18206000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"21bdd804-94c8-48fa-9404-785b835e4fbe","disid":"2","name":"Дубовский р-н","okato":"18208000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"98041e5f-9ba2-49df-90fb-bdbc6be9de5b","disid":"2","name":"Еланский р-н","okato":"18210000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"cfecbcf7-d52e-409a-8925-7f3ccd955b51","disid":"2","name":"Жирновский р-н","okato":"18212000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"4668998b-9821-4829-9d44-0440a2aa8b17","disid":"2","name":"Иловлинский р-н","okato":"18214000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"86ab9043-9f8c-48e8-8ecf-f1f7a3830993","disid":"2","name":"Калачевский р-н","okato":"18216000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"0f9fb687-8d03-41a2-968f-033a2ba44f2f","disid":"2","name":"Камышин г","okato":"18415000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"b971eac6-ae45-4cf5-8a9c-cc0b7255fed7","disid":"2","name":"Камышинский р-н","okato":"18218000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"cec0a33f-2aff-4ff7-b7ba-797669049873","disid":"2","name":"Киквидзенский р-н","okato":"18220000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"923aaae2-1bb7-4956-b749-9b3e953331e6","disid":"2","name":"Клетский р-н","okato":"18222000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"0a7614cd-a4bb-4b19-bb56-67350a9c2765","disid":"2","name":"Котельниковский р-н","okato":"18224000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"7134f6ab-18a2-4327-8212-987fc9dbe4be","disid":"2","name":"Котовский р-н","okato":"18226000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"774a68c9-9f93-4118-9fc4-572feb8d9780","disid":"2","name":"Кумылженский р-н","okato":"18246000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"459b5030-4eba-4aa2-803e-5bde00a2eb52","disid":"2","name":"Ленинский р-н","okato":"18230000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"f02dbf6d-57ad-49bc-8011-603bf7126bb5","disid":"2","name":"Михайловка г","okato":"18420000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"9e34eed1-457d-4c40-8146-2cffd15a546c","disid":"2","name":"Михайловский р-н","okato":"18232000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"82c0591f-cf27-4730-b87d-1e71c8a195cb","disid":"2","name":"Нехаевский р-н","okato":"18234000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"362915df-8d3c-4892-b150-5d0a6bd90bb3","disid":"2","name":"Николаевский р-н","okato":"18236000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"426027d4-fb89-4311-ba48-89721904c00f","disid":"2","name":"Новоаннинский р-н","okato":"18238000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"b26778e0-458f-417b-bdd9-f08d30848a79","disid":"2","name":"Новониколаевский р-н","okato":"18240000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"aee24762-d322-42e3-ac00-4b74473d282b","disid":"2","name":"Октябрьский р-н","okato":"18242000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"e967f3e6-582b-4a5d-b58f-325840ee878c","disid":"2","name":"Ольховский р-н","okato":"18243000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"56937de9-4074-42b1-ae9a-4a1168cca8a1","disid":"2","name":"Палласовский р-н","okato":"18245000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"d373e78d-a6c2-4166-9610-5e598c8ceb93","disid":"2","name":"Руднянский р-н","okato":"18247000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"70ccb12a-6995-47aa-a9d5-6522cd8021b6","disid":"2","name":"Светлоярский р-н","okato":"18249000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"78d61cec-9043-48ac-8315-2a7238aac5e1","disid":"2","name":"Серафимовичский р-н","okato":"18250000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"b879553e-9487-4b99-b5ef-5d5c35b855cc","disid":"2","name":"Среднеахтубинский р-н","okato":"18251000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"30a1981b-aa30-4b09-aa3f-7e4d2e42b829","disid":"2","name":"Старополтавский р-н","okato":"18252000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"b5939351-dbb0-4812-8770-2c8c965a5be6","disid":"2","name":"Суровикинский р-н","okato":"18253000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"2e5879fc-35c2-4354-816b-f1fce74ece87","disid":"2","name":"Урюпинск г","okato":"18425000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"a9a41cc8-a7ff-489b-985d-66acfc04f326","disid":"2","name":"Урюпинский р-н","okato":"18254000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"57e3991f-e685-4ba2-9cef-9988e6fa5862","disid":"2","name":"Фролово г","okato":"18428000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"26d90e5a-936a-4df0-b199-9f31a99cf7ec","disid":"2","name":"Фроловский р-н","okato":"18256000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"0f7db80c-af7d-45e9-a8ff-1b5d213bb0ee","disid":"2","name":"Чернышковский р-н","okato":"18258000000","parentguid":"da051ec8-da2e-4a66-b542-473b8d221ab4","regioncode":"34"},{"aoguid":"087a3084-c7b2-4ebf-a4dc-9f91e95097a5","disid":"2","name":"Городовиковский р-н","okato":"85205000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"83386818-e69a-42c1-8695-dafc116ab823","disid":"2","name":"Ики-Бурульский р-н","okato":"85210000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"f04aff1a-c67f-45cf-afee-2005a31ffb2f","disid":"2","name":"Кетченеровский р-н","okato":"85225000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"92c30b00-187a-4d5e-9297-49366761187d","disid":"2","name":"Лаганский р-н","okato":"85215000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"928f8e16-9676-4c65-a5fc-fde14a3ee144","disid":"2","name":"Малодербетовский р-н","okato":"85220000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"19cfe397-be24-4cd8-b67f-f36251906f66","disid":"2","name":"Октябрьский р-н","okato":"85223000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"c8002e8b-941b-44fb-bd78-38dc4300490a","disid":"2","name":"Приютненский р-н","okato":"85228000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"9562bcd0-9732-4f24-bfe6-f0f3962769cc","disid":"2","name":"Сарпинский р-н","okato":"85232000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"1edf7f07-38c3-4f1c-a737-9de9f794bb93","disid":"2","name":"Целинный р-н","okato":"85237000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"dc20e560-ef74-4b92-920f-d34137475a70","disid":"2","name":"Черноземельский р-н","okato":"85242000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"d5bd18b9-22c1-48e2-9b4a-3b7a4c89a3cb","disid":"2","name":"Элиста г","okato":"85401000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"d6805dc8-828f-42e2-a8ad-25bd3cdf958c","disid":"2","name":"Юстинский р-н","okato":"85246000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"d4bf3fe0-7e83-48fc-968c-f08733eadab8","disid":"2","name":"Яшалтинский р-н","okato":"85250000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"60c10eea-e22e-446e-9468-9f3e8efac0e9","disid":"2","name":"Яшкульский р-н","okato":"85254000000","parentguid":"491cde9d-9d76-4591-ab46-ea93c079e686","regioncode":"08"},{"aoguid":"b8c29326-780c-41ac-89ad-023a4681b7d9","disid":"2","name":"Абинский р-н","okato":"03201000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"4504c6b3-f501-4f6b-949f-45704aa3ecdd","disid":"2","name":"Анапский р-н","okato":"03203000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"2105477c-7005-4964-8feb-a0232edb7494","disid":"2","name":"Апшеронский р-н","okato":"03205000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"fc9c55d0-c66e-455e-8034-b0944b025c38","disid":"2","name":"Армавир г","okato":"03405000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"4fc852b0-5e19-4729-9428-fdb9750d7929","disid":"2","name":"Белоглинский р-н","okato":"03207000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"95d58e54-8ac0-4515-9c4f-7047202be885","disid":"2","name":"Белореченский р-н","okato":"03208000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"ac3c96cd-de4e-4e7d-9a88-a3a34c9d3d0c","disid":"2","name":"Брюховецкий р-н","okato":"03210000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"aa5b01f7-e4e7-40cf-93ed-75695e66074d","disid":"2","name":"Выселковский р-н","okato":"03212000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"e157b9c0-f908-48bc-a1d7-39c482a501a5","disid":"2","name":"Геленджик г","okato":"03408000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"298ebb96-d9c3-4809-b466-386c778234a5","disid":"2","name":"Горячий Ключ г","okato":"03409000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"157440b5-ed3e-4b9c-ab41-ab775333fb1c","disid":"2","name":"Гулькевичский р-н","okato":"03213000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"26aa1290-5f68-4fbc-868e-c14af7ee80e3","disid":"2","name":"Динской р-н","okato":"03214000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"337d2da7-c5fc-4286-a85b-68022e40a40b","disid":"2","name":"Ейский р-н","okato":"03216800000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"67daea7a-ac60-473e-9591-b06a94b738dd","disid":"2","name":"Кавказский р-н","okato":"03218000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"67967132-6d18-4482-a4c6-8e47938fb018","disid":"2","name":"Калининский р-н","okato":"03219000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"1055a0e9-5af7-4909-9b59-1f8eb28b1118","disid":"2","name":"Каневской р-н","okato":"03220800000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"c4c8da32-62f3-422e-828b-b3669d0231ea","disid":"2","name":"Кореновский р-н","okato":"03221000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"217c50ae-d647-4c71-a924-024462614d38","disid":"2","name":"Красноармейский р-н","okato":"03223000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"7dfa745e-aa19-4688-b121-b655c11e482f","disid":"2","name":"Краснодар г","okato":"03401000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"a947d303-d312-4328-96aa-f83c6532af45","disid":"2","name":"Крыловский р-н","okato":"03224000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"0af8a5f0-0b4b-4635-b47b-681c451adfca","disid":"2","name":"Крымский р-н","okato":"03225000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"72700ecb-d9cb-4bcf-82f6-b55b06637d0b","disid":"2","name":"Курганинский р-н","okato":"03227000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"5238a201-1524-4759-b69b-8fbd454db279","disid":"2","name":"Кущевский р-н","okato":"03228000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"b481fda5-ce9c-4400-b866-58e183f909a6","disid":"2","name":"Лабинский р-н","okato":"03230800000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"a7c89393-deee-42a3-8d5a-cc614ca8200d","disid":"2","name":"Ленинградский р-н","okato":"03232000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"962d32bd-ee76-41e6-9710-920e5957d26a","disid":"2","name":"Мостовский р-н","okato":"03233000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"caed4250-d7fc-4e45-b431-5e1ae870cac5","disid":"2","name":"Новокубанский р-н","okato":"03234000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"a0d7a03f-8af6-4c61-9f56-c88dffdb2308","disid":"2","name":"Новопокровский р-н","okato":"03235000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"16ac039a-5257-4715-a8c5-d6bd9e617b53","disid":"2","name":"Новороссийск г","okato":"03420000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"cd446c45-fc30-4401-b37f-8511282860b8","disid":"2","name":"Отрадненский р-н","okato":"03237000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"80acf7a9-12f6-45cc-9d7a-61cfc66ce8c6","disid":"2","name":"Павловский р-н","okato":"03239800000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"46982334-3ed3-4c69-bed8-7c68ecba7f10","disid":"2","name":"Приморско-Ахтарский р-н","okato":"03241000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"02464a34-c839-449d-b13c-dcba31a91ccb","disid":"2","name":"Северский р-н","okato":"03243000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"f86e1bda-2165-4dc1-904e-604d2f468702","disid":"2","name":"Славянский р-н","okato":"03245000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"79da737a-603b-4c19-9b54-9114c96fb912","disid":"2","name":"Сочи г","okato":"03426000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"460fb70e-efcd-4e3f-9d88-dcf7560025d3","disid":"2","name":"Староминский р-н","okato":"03247000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"da9cd07d-c41d-4015-810e-46a7d53bbf04","disid":"2","name":"Тбилисский р-н","okato":"03249000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"f4ab6f10-4f56-4ebd-a881-4b767dbf4473","disid":"2","name":"Темрюкский р-н","okato":"03251000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"2b521963-2a08-4198-89a4-23981e86b3fb","disid":"2","name":"Тимашевский р-н","okato":"03253000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"8bd71693-7c44-4550-ae82-f17a0379ebaf","disid":"2","name":"Тихорецкий р-н","okato":"03254000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"06aa3378-7f1a-4d41-9ebf-5d031398f5b8","disid":"2","name":"Туапсинский р-н","okato":"03255000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"0d3d8a3a-434c-41ab-a16a-7d0c8b654a4d","disid":"2","name":"Успенский р-н","okato":"03256000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"85ce31cc-a74c-4c6a-a38f-9c1ef92d256b","disid":"2","name":"Усть-Лабинский р-н","okato":"03257000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"cb344d45-3a8e-4603-aaac-56880396f8a2","disid":"2","name":"Щербиновский р-н","okato":"03259000000","parentguid":"d00e1013-16bd-4c09-b3d5-3cb09fc54bd8","regioncode":"23"},{"aoguid":"a216cad5-7027-40b8-b1a1-d64abefbd5cd","disid":"2","name":"Азов г","okato":"60404000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"2232c303-309e-4d51-8090-e5136fb876ac","disid":"2","name":"Азовский р-н","okato":"60201000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"7f6fbe97-ebc2-4f09-9aa8-1ecab6adcdba","disid":"2","name":"Аксайский р-н","okato":"60202000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"8e7ec0d6-b9d4-4866-9ad5-ac7f516614ca","disid":"2","name":"Багаевский р-н","okato":"60205000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"3809afb6-fdfd-4115-9e55-236abf108c81","disid":"2","name":"Батайск г","okato":"60407000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"4c423d13-7115-47a2-b286-e23ac6dfdc46","disid":"2","name":"Белокалитвинский р-н","okato":"60206000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"5577b8b6-c8b0-491c-8206-56f13b6e225f","disid":"2","name":"Боковский р-н","okato":"60207000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"257d5b48-0e0d-4c50-8e0b-e9e1b4de9046","disid":"2","name":"Верхнедонской р-н","okato":"60208000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"88167f47-a5ec-4c92-9aa4-9f52f0b612f8","disid":"2","name":"Веселовский р-н","okato":"60209000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"1a453dcd-8885-4999-923b-1bbaa5a1cec4","disid":"2","name":"Волгодонск г","okato":"60412000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"31b577c3-afe5-4b18-bd5c-2cf68d6c88ec","disid":"2","name":"Волгодонской р-н","okato":"60212000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"eef55456-4d89-4620-b361-d620221ad3a7","disid":"2","name":"Гуково г","okato":"60415000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"8eeb1bf2-9de9-46d5-874f-50344ca9128b","disid":"2","name":"Донецк г","okato":"60417000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"2ed1a96b-81b5-4a3f-b3ea-0d0e19d6df68","disid":"2","name":"Дубовский р-н","okato":"60213000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"b105482c-7cbd-4911-bdbc-42a834877306","disid":"2","name":"Егорлыкский р-н","okato":"60215000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"5256936a-51c3-4f7f-bb6e-487845985896","disid":"2","name":"Заветинский р-н","okato":"60217000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"99f4120c-2af0-4c97-afbc-d17fdf350ba6","disid":"2","name":"Зверево г","okato":"60418000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"fd56a552-3bfc-4bbd-853f-297a8db00034","disid":"2","name":"Зерноградский р-н","okato":"60218000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"bddfd6da-2eed-4d22-92f7-b52ff760ea20","disid":"2","name":"Зимовниковский р-н","okato":"60219000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"8573426d-8c38-4019-923d-127e0a5125d4","disid":"2","name":"Кагальницкий р-н","okato":"60222000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"76cb0cf6-49a5-4852-b45d-99e4ce12a7ea","disid":"2","name":"Каменск-Шахтинский г","okato":"60419000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"f8fa5b30-5020-476d-91b0-dcd6bd0054e6","disid":"2","name":"Каменский р-н","okato":"60223000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"1866ff09-85b7-487a-844f-0c2d0623380d","disid":"2","name":"Кашарский р-н","okato":"60224000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"81be9039-75d2-4bf7-babc-feda7a43c086","disid":"2","name":"Константиновский р-н","okato":"60225000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"c5be62dd-6518-4ec3-968b-88f37734371d","disid":"2","name":"Красносулинский р-н","okato":"60226000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"aceb21ff-08e7-4252-9c9e-5cfaef6fbff4","disid":"2","name":"Куйбышевский р-н","okato":"60227000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"fc9e12c5-642a-4769-bb9f-600eb7ce6f6a","disid":"2","name":"Мартыновский р-н","okato":"60230000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"17577241-5b11-4e3c-99d6-b1074e6aa662","disid":"2","name":"Матвеево-Курганский р-н","okato":"60231000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"667b79ba-670c-44b1-92d6-78dfb54ad821","disid":"2","name":"Миллеровский р-н","okato":"60232000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"a7b50448-5dab-437e-b0dc-68671fa23ee1","disid":"2","name":"Милютинский р-н","okato":"60233000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"3df59ad3-25ad-4348-8a9b-dcf40d8ed3f8","disid":"2","name":"Морозовский р-н","okato":"60234000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"5c91330e-4a81-47db-b88d-586c915fc50b","disid":"2","name":"Мясниковский р-н","okato":"60235000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"7d73b1e7-fe23-468a-895a-f897d5b1f1f8","disid":"2","name":"Неклиновский р-н","okato":"60236000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"28bafcb3-92b2-445b-9443-a341be73fdb9","disid":"2","name":"Новочеркасск г","okato":"60427000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"bce1a4f2-7576-4427-8bd8-8d8b4e35ad11","disid":"2","name":"Новошахтинск г","okato":"60430000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"3e45232a-621c-4f6e-b312-8121389a45ff","disid":"2","name":"Обливский р-н","okato":"60240000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"94d302a1-e0f9-4d41-ad28-f807547ce418","disid":"2","name":"Октябрьский р-н","okato":"60241000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"8c9d59f7-b214-4bfe-a314-75c5087b0afb","disid":"2","name":"Орловский р-н","okato":"60242000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"8d78fb36-a9b1-4cde-b681-bcea2a80b09a","disid":"2","name":"Песчанокопский р-н","okato":"60244000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"5f7cd6d6-6a17-4576-b288-a6593fbf8205","disid":"2","name":"Пролетарский р-н","okato":"60245000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"ca2d931b-20e2-44e6-8d5f-159796324605","disid":"2","name":"Ремонтненский р-н","okato":"60247000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"ff19cb12-1f42-4e56-8e68-6a4f5a6651ed","disid":"2","name":"Родионово-Несветайский р-н","okato":"60248000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"c1cfe4b9-f7c2-423c-abfa-6ed1c05a15c5","disid":"2","name":"Ростов-на-Дону г","okato":"60401000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"65fdb33a-a944-4cc3-8f6b-3c098e6858eb","disid":"2","name":"Сальский р-н","okato":"60250000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"1822e167-88cf-487a-ad2d-8a3782cb1f3c","disid":"2","name":"Семикаракорский р-н","okato":"60251000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"ad9aa4fb-bff7-492a-a573-30f2003e882e","disid":"2","name":"Советский р-н","okato":"60252000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"d72c95ed-9fdd-4f27-b94f-898fc3f1177d","disid":"2","name":"Таганрог г","okato":"60437000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"a0671320-8599-4e11-a4d7-e73aabe7a258","disid":"2","name":"Тарасовский р-н","okato":"60253000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"6257116f-b108-485c-a368-10033b59e85f","disid":"2","name":"Тацинский р-н","okato":"60254000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"a7682f24-57c3-4cc7-ab84-637f3ab9368f","disid":"2","name":"Усть-Донецкий р-н","okato":"60255000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"8909aee7-4896-4e7d-8c21-a572ad6ccbab","disid":"2","name":"Целинский р-н","okato":"60256000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"4541e1c4-8151-49a7-87fd-8be4026f10b8","disid":"2","name":"Цимлянский р-н","okato":"60257000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"bfabff11-198a-465d-8572-0c3399b8dfa4","disid":"2","name":"Чертковский р-н","okato":"60258000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"dee2e80e-f2e1-4a68-93b0-b7b89b6f3e74","disid":"2","name":"Шахты г","okato":"60440000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"7387092d-4b41-4e2e-96dc-4bc0bc4ef8dd","disid":"2","name":"Шолоховский р-н","okato":"60211000000","parentguid":"f10763dc-63e3-48db-83e1-9c566fe3092b","regioncode":"61"},{"aoguid":"06814fb6-0dc3-4bec-ba20-11f894a0faf5","disid":"3","name":"Архангельск г","okato":"11401000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"436b8365-a1a4-4acf-9941-a450062fd2f8","disid":"3","name":"Вельский р-н","okato":"11205000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"22cb0691-74fb-43da-af57-22ec4633669e","disid":"3","name":"Верхнетоемский р-н","okato":"11208000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"6cf7d230-2521-4c2c-9304-4e18b7f9f525","disid":"3","name":"Вилегодский р-н","okato":"11211000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"6447c1a3-78b3-4585-bf1a-591b88740b65","disid":"3","name":"Виноградовский р-н","okato":"11214000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"fc568438-f1a5-4b25-8c3b-4e7fb322351a","disid":"3","name":"Каргопольский р-н","okato":"11218000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"ca8e93f0-c097-4966-8962-de599be4e11a","disid":"3","name":"Коношский р-н","okato":"11222000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"782acb50-ddfa-4483-bcbd-a5e667976036","disid":"3","name":"Коряжма г","okato":"11408000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"cfa3b599-159c-49f9-992e-3aa64c675ad6","disid":"3","name":"Котласский р-н","okato":"11227000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"1f36ec14-c3d2-48c4-a9b9-f419e0b1e49a","disid":"3","name":"Красноборский р-н","okato":"11230000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"a2f24745-df98-4663-bc04-47e622257271","disid":"3","name":"Ленский р-н","okato":"11235000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"86a8e8b8-b5a2-4aba-bc90-69b2a2edb4c6","disid":"3","name":"Лешуконский р-н","okato":"11238000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"e06c7692-9cbc-4939-8928-aa1c8af2a37e","disid":"3","name":"Мезенский р-н","okato":"11242000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"977c7606-1b37-4424-84f7-b0c66c3e4b94","disid":"3","name":"Мирный г","okato":"11525000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"3b0ef6c2-9bcd-44a5-afec-2723bd8190bc","disid":"3","name":"Новодвинск г","okato":"11415000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"af1623b3-625a-4f0c-93a9-f43516000d5e","disid":"3","name":"Няндомский р-н","okato":"11244000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"e252789a-4375-4f4b-b83e-ae03de3f915c","disid":"3","name":"Онежский р-н","okato":"11246000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"57d43938-2c4c-43f7-a24d-e0e2fbdd478e","disid":"3","name":"Пинежский р-н","okato":"11248000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"09544d1a-b2d9-4212-acc8-9526105e8f9a","disid":"3","name":"Плесецкий р-н","okato":"11250000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"2dc6e801-e464-4a06-8029-da74aa1f2051","disid":"3","name":"Приморский р-н","okato":"11252000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"32747c72-c08b-4440-b340-91f48d72f9db","disid":"3","name":"Северодвинск г","okato":"11430000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"0720b19e-209f-4fa8-b8d2-024a7bef2ab2","disid":"3","name":"Соловецкий р-н","okato":"11253000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"2e17cc5d-2a60-47b4-926f-ea3d96239307","disid":"3","name":"Устьянский р-н","okato":"11254000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"ad45f38f-a8f4-4927-8f90-d2a38b137235","disid":"3","name":"Холмогорский р-н","okato":"11256000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"dd8dd16c-b7d0-4c37-90a8-f9dd1c24855b","disid":"3","name":"Шенкурский р-н","okato":"11258000000","parentguid":"294277aa-e25d-428c-95ad-46719c4ddb44","regioncode":"29"},{"aoguid":"127f8850-9778-4534-8e70-f0fb8f9c7863","disid":"3","name":"Бабаевский р-н","okato":"19205000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"0a06561d-77b8-4a4d-90ee-46f933b425a4","disid":"3","name":"Бабушкинский р-н","okato":"19208000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"95bdbea8-1c2e-4af6-b08a-116919202a7d","disid":"3","name":"Белозерский р-н","okato":"19210000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"7257df68-2b44-46c6-91a3-f01cb7393804","disid":"3","name":"Вашкинский р-н","okato":"19212000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"9d847a27-080a-4c3e-964e-7a4750fd801a","disid":"3","name":"Великоустюгский р-н","okato":"19214000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"617830a8-b304-4674-b64f-eb33830916db","disid":"3","name":"Верховажский р-н","okato":"19216000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"33d8aa72-a08a-4fe7-add2-1b98ae9e7eca","disid":"3","name":"Вожегодский р-н","okato":"19218000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"023484a5-f98d-4849-82e1-b7e0444b54ef","disid":"3","name":"Вологда г","okato":"19401000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"11d2d6e6-0275-4cfa-883e-8e8a43fe1837","disid":"3","name":"Вологодский р-н","okato":"19220000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"26ae93a3-7299-4b81-bdab-fcdc6ca950b0","disid":"3","name":"Вытегорский р-н","okato":"19222000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"dacbb832-9ce6-4c42-8ed5-1558b3c8c46e","disid":"3","name":"Грязовецкий р-н","okato":"19224000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"1bc667c2-7b2f-4caf-86d3-aabb50a0e4bb","disid":"3","name":"Кадуйский р-н","okato":"19226000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"59dbe5c3-af1a-4d3f-aa04-878bf491c53c","disid":"3","name":"Кирилловский р-н","okato":"19228000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"40f909c8-210e-4741-8eda-2024d4795692","disid":"3","name":"Кичменгско-Городецкий р-н","okato":"19230000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"4d90aa63-fe84-4395-b8d2-2f43e314c3c2","disid":"3","name":"Междуреченский р-н","okato":"19232000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"5083df88-d4d2-4ac6-acec-9a056664fc03","disid":"3","name":"Никольский р-н","okato":"19234000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"49aac237-afa6-4f55-ad6b-f1f06f04fd53","disid":"3","name":"Нюксенский р-н","okato":"19236000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"427b20ee-20e1-44d4-9281-e1e61c25c470","disid":"3","name":"Сокольский р-н","okato":"19238000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"7f25c86b-e19b-4d78-b7f5-59040c161a4b","disid":"3","name":"Сямженский р-н","okato":"19240000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"aad67fe6-f5da-4bce-9e53-2230c010914d","disid":"3","name":"Тарногский р-н","okato":"19242000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"90841369-82e7-4bdb-8bb7-9a80c3a45545","disid":"3","name":"Тотемский р-н","okato":"19246000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"499b4200-b421-4553-ab3d-fc7527d335e2","disid":"3","name":"Усть-Кубинский р-н","okato":"19248000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"b1486739-843b-43fb-b47d-93ddc055e5f6","disid":"3","name":"Устюженский р-н","okato":"19250000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"3286925c-a892-46c0-9f51-9d3d0b4510db","disid":"3","name":"Харовский р-н","okato":"19252000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"648fde0a-281f-47c9-a036-24c35a903c25","disid":"3","name":"Чагодощенский р-н","okato":"19254000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"b4c30848-5181-44b4-88fa-456e1c4aeb0f","disid":"3","name":"Череповец г","okato":"19430000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"199090a8-9eeb-4907-9935-57e9ddfefb0d","disid":"3","name":"Череповецкий р-н","okato":"19256000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"6805739a-f5c7-40cd-9066-44e63f7b0b5a","disid":"3","name":"Шекснинский р-н","okato":"19258000000","parentguid":"ed36085a-b2f5-454f-b9a9-1c9a678ee618","regioncode":"35"},{"aoguid":"2bdc291e-33a5-429d-a7cc-1c5743134c0a","disid":"3","name":"Багратионовский р-н","okato":"27203000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"bd17ee49-02c5-4091-9487-e0e0685486f5","disid":"3","name":"Балтийский р-н","okato":"27405000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"c9bd3c85-b489-4b8f-96ac-32f12d7d3c00","disid":"3","name":"Гвардейский р-н","okato":"27206000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"19d7b89b-6404-46f9-b977-1a16443978af","disid":"3","name":"Гурьевский р-н","okato":"27209000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"7e79fd92-ee6b-41dc-b79e-1b7f2bb747b2","disid":"3","name":"Гусевский р-н","okato":"27212000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"a6ad23b1-f948-480c-87fc-b92b6fb0cc3c","disid":"3","name":"Зеленоградский р-н","okato":"27215000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"df679694-d505-4dd3-b514-4ba48c8a97d8","disid":"3","name":"Калининград город г","okato":"27401000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"df1e25f0-52c4-4f08-a6c4-62e7d8b78278","disid":"3","name":"Краснознаменский р-н","okato":"27218000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"04950f38-5c4c-4989-8b7a-6224795a2b59","disid":"3","name":"Ладушкин г","okato":"27203505000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"2942ef2d-01b0-4137-8f46-5228e9eedd7f","disid":"3","name":"Мамоново г","okato":"27203510000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"a810a502-c02a-407c-9428-e00b49353580","disid":"3","name":"Неманский р-н","okato":"27221000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"3c241354-846e-45dd-8341-415dedf05593","disid":"3","name":"Нестеровский р-н","okato":"27224000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"b3171d74-da95-4681-a564-2acd3de29f4e","disid":"3","name":"Озерский р-н","okato":"27227000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"9fee1c1b-9d14-42ea-8ff9-2e903501d43d","disid":"3","name":"Пионерский г","okato":"27417000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"afd43dca-b733-4a6d-b4a2-1f6e35815ab5","disid":"3","name":"Полесский р-н","okato":"27230000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"d15938b5-6356-4627-8cd1-7bbf6bbdab9b","disid":"3","name":"Правдинский р-н","okato":"27233000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"f9076a8c-ea58-47a4-872c-d14ca1d5f45f","disid":"3","name":"Светлогорский р-н","okato":"27420000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"6d379259-b8d5-4cca-9412-1ded0849fd1a","disid":"3","name":"Светлый г","okato":"27425000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"51fb5faa-8ff2-4c8e-ac7b-5431ae654a13","disid":"3","name":"Славский р-н","okato":"27236000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"e401208f-3469-403f-910b-bba057cf70b2","disid":"3","name":"Советск г","okato":"27430000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"2ccfe1a3-9830-4ba0-b02a-27ddf60bd5ff","disid":"3","name":"Черняховский р-н","okato":"27239000000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"234f6132-e2d9-4373-8dc3-cc56b5603b8f","disid":"3","name":"Янтарный пгт","okato":"27420562000","parentguid":"90c7181e-724f-41b3-b6c6-bd3ec7ae3f30","regioncode":"39"},{"aoguid":"f670c7e4-51e8-4fd8-ae68-fec2875b985d","disid":"3","name":"Беломорский р-н","okato":"86204000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"aee77301-e926-46bb-8f51-6afb0c158d07","disid":"3","name":"Калевальский р-н","okato":"86209000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"6d2b36e6-7155-4a42-b256-1220608cd308","disid":"3","name":"Кемский р-н","okato":"86212000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"53161b1d-1e9b-4137-99bd-59a0cdf7acf1","disid":"3","name":"Кондопожский р-н","okato":"86215000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"1925075b-8541-4075-97ea-edad0557626e","disid":"3","name":"Костомукша г","okato":"86406000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"4c1f106e-19e8-44a4-a1fe-e0ed3b02653a","disid":"3","name":"Лахденпохский р-н","okato":"86218000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"f4656aaa-b772-4a96-b972-bc282f133846","disid":"3","name":"Лоухский р-н","okato":"86221000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"2e379d58-77ba-4a52-bd34-7d842abeb963","disid":"3","name":"Медвежьегорский р-н","okato":"86224000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"d4557781-a6ed-48d6-b359-6c0d2f6dd3d7","disid":"3","name":"Муезерский р-н","okato":"86227000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"84a77f19-908b-472b-b0e7-a95bb480d802","disid":"3","name":"Олонецкий р-н","okato":"86230000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"ccc34487-8fd4-4e71-b032-f4e6c82fb354","disid":"3","name":"Петрозаводск г","okato":"86401000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"ef7c974b-d669-4a40-922c-9c4b4a061053","disid":"3","name":"Питкярантский р-н","okato":"86233000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"861bdb29-f15b-425a-a64c-8cb491aa9a70","disid":"3","name":"Прионежский р-н","okato":"86236000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"a000d5b7-9df9-46e3-857a-46072cffc17e","disid":"3","name":"Пряжинский р-н","okato":"86239000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"5bbc250c-b97d-4fb0-a432-6ed1ca5c6160","disid":"3","name":"Пудожский р-н","okato":"86242000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"ff189e72-916f-4f19-ae07-875558134530","disid":"3","name":"Сегежский р-н","okato":"86245000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"7fa96873-4865-4f14-99e4-78d118cdca8b","disid":"3","name":"Сортавала г","okato":"86410000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"9a47f6cc-e5ac-485e-96a8-e08d4f4a0d62","disid":"3","name":"Суоярвский р-н","okato":"86250000000","parentguid":"248d8071-06e1-425e-a1cf-d1ff4c4a14a8","regioncode":"10"},{"aoguid":"e0bf9ea3-7cbf-4b13-95f1-32c3ee9b3ae5","disid":"3","name":"Воркута г","okato":"87410000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"05471c20-9e2c-4bcc-b630-a24f5ec26af4","disid":"3","name":"Воркутинский р-н","okato":"87410000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"f69a676b-8ede-4a19-80b6-6db85a12b5e1","disid":"3","name":"Вуктыл г","okato":"87412800000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"c1b85906-768f-4550-bcc7-1aa31b6873e7","disid":"3","name":"Вуктыльский р-н","okato":"87412000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"d7c1d4fa-96b3-468a-be8a-14eff9ec56e9","disid":"3","name":"Ижемский р-н","okato":"87204000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"1b136d3e-3bd6-440c-a3fd-23303143c440","disid":"3","name":"Инта г","okato":"87415000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"3bcf1b28-3bb0-4c5e-97c4-6e884f052ba2","disid":"3","name":"Интинский р-н","okato":"87415000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"ce115fd8-e9e7-4699-a076-dff8489207fe","disid":"3","name":"Княжпогостский р-н","okato":"87208000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"ee3bc66b-6a1f-4e36-afe1-141af93d0968","disid":"3","name":"Койгородский р-н","okato":"87212000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"429a550e-c8d4-458c-93b8-e2c1d36641a9","disid":"3","name":"Корткеросский р-н","okato":"87216000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"e0ba898b-b813-4293-b817-510d586afd6e","disid":"3","name":"Печора г","okato":"87420550000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"2a215cd2-3a18-4341-b081-253613e42403","disid":"3","name":"Печорский р-н","okato":"87420000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"e94d048f-3b1e-42b4-8552-c29e159226a7","disid":"3","name":"Прилузский р-н","okato":"87224000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"9a2569ae-14fb-43bb-b192-a4c29c463c28","disid":"3","name":"Сосногорск г","okato":"87422550000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"3a687104-4242-421f-b7c5-cc1bd33e2151","disid":"3","name":"Сосногорский р-н","okato":"87422000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"b4dfea59-0559-41bb-8689-f6d9929b39f7","disid":"3","name":"Сыктывдинский р-н","okato":"87228000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"d2944a73-daf4-4a08-9b34-d9b0af7785a1","disid":"3","name":"Сыктывкар г","okato":"87401000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"33c14d0b-e28e-4f6b-955d-c1943e448d69","disid":"3","name":"Сысольский р-н","okato":"87232000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"4ecbe83b-0f84-46b5-af2c-7ba2775fd7a6","disid":"3","name":"Троицко-Печорский р-н","okato":"87236000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"7d255729-f975-4f8f-ba63-1485d2af31eb","disid":"3","name":"Удорский р-н","okato":"87240000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"267fd50d-0077-4041-9594-18b1de5f2acb","disid":"3","name":"Усинск г","okato":"87423000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"8533c810-de43-462b-accb-2d3eabd83a5b","disid":"3","name":"Усинский р-н","okato":"87423000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"e1b89418-f75c-4881-9003-5eddd3a0dc5b","disid":"3","name":"Усть-Вымский р-н","okato":"87244000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"f02cbba6-e179-4a98-bc4a-7ededf75d15e","disid":"3","name":"Усть-Куломский р-н","okato":"87248000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"0bed63ad-dab1-4a0a-88fe-2fdbffb8b0f9","disid":"3","name":"Усть-Цилемский р-н","okato":"87252000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"067b4cef-e128-4d5a-8305-fecf53e7b7e8","disid":"3","name":"Ухта г","okato":"87425000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"1c1aafc4-d344-4666-bc71-df9e0cd6b2a0","disid":"3","name":"Ухтинский р-н","okato":"87425000000","parentguid":"c20180d9-ad9c-46d1-9eff-d60bc424592a","regioncode":"11"},{"aoguid":"30aef407-fae2-4059-a533-73e3b1f39271","disid":"3","name":"Бокситогорский р-н","okato":"41203000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"37383308-b7e2-4b78-9337-089bc59ff7dd","disid":"3","name":"Волосовский р-н","okato":"41206000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"a39e96d7-b1a3-478f-a191-816d791586b2","disid":"3","name":"Волховский р-н","okato":"41209000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"db8758d6-b8ea-453d-a75f-8f2d3ff49fb0","disid":"3","name":"Всеволожский р-н","okato":"41212000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"1bd07010-f79c-473e-b49d-b4f42762b28c","disid":"3","name":"Выборгский р-н","okato":"41215000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"2252f46b-5281-436a-9b02-5a22cc0b2d63","disid":"3","name":"Гатчинский р-н","okato":"41218000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"248bc224-1184-4afa-96ef-faf3f5c012e2","disid":"3","name":"Кингисеппский р-н","okato":"41221000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"4c3585cc-fdec-4826-8736-53aa064ec41b","disid":"3","name":"Киришский р-н","okato":"41224000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"2a7ee036-942e-42ae-bbe3-d85901e5cfd6","disid":"3","name":"Кировский р-н","okato":"41225000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"2c9edd6e-14de-4564-9d37-1b16b84e09f3","disid":"3","name":"Лодейнопольский р-н","okato":"41227000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"cb759ab0-cd6c-4a97-8035-8052239e4551","disid":"3","name":"Ломоносовский р-н","okato":"41230000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"980709a9-802f-4f0d-ac24-0d5d68b1c049","disid":"3","name":"Лужский р-н","okato":"41233000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"136331db-f6b9-4ab1-8467-e81c44728319","disid":"3","name":"Подпорожский р-н","okato":"41236000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"b435ee4b-d67c-4fa9-b2e6-209edbb133f8","disid":"3","name":"Приозерский р-н","okato":"41239000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"c4e7114f-5ce9-4fc2-8cb9-70884bee2eb5","disid":"3","name":"Сланцевский р-н","okato":"41242000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"f4a4b31f-9f0a-4fdb-804c-d67661085eb4","disid":"3","name":"Сосновый Бор г","okato":"41454000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"56906c4c-3151-4c2e-b44d-f5b25cbd5df0","disid":"3","name":"Тихвинский р-н","okato":"41245000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"003fc437-dd9c-4c36-b3e3-adab06e5d195","disid":"3","name":"Тосненский р-н","okato":"41248000000","parentguid":"6d1ebb35-70c6-4129-bd55-da3969658f5d","regioncode":"47"},{"aoguid":"f0851e80-59d9-400b-b6d5-5f5f623bb29d","disid":"3","name":"Апатиты г","okato":"47405000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"ecc34287-1dbd-4aa0-8cbc-22c32db554b2","disid":"3","name":"Видяево рп","okato":"47000000001","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"b77147ce-b55e-4019-9aca-ed3872b9fbb0","disid":"3","name":"Гаджиево г","okato":"47529000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"81a88076-04de-46c9-940a-3cb300e70e5b","disid":"3","name":"Заозерск г","okato":"47533000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"30fa6bcc-608e-40cb-b22a-b202967ff2a6","disid":"3","name":"Кандалакша г","okato":"47202501000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"3f26e2d0-a8ad-4b9c-8ed0-79f63ff019af","disid":"3","name":"Кандалакшский р-н","okato":"47202000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"f658a2c0-1f7d-4423-9465-e55d3553bf86","disid":"3","name":"Кировск г","okato":"47412000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"6c281de9-1613-46b1-b48c-344bf1a45a9c","disid":"3","name":"Ковдорский р-н","okato":"47203000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"5b22eaf7-3bab-437c-938f-5af0f45502db","disid":"3","name":"Кольский р-н","okato":"47205000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"11c09610-5a94-4e12-b5d3-ffd522a05827","disid":"3","name":"Ловозерский р-н","okato":"47210000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"177e037d-a06d-4f8a-9333-fd534dd34c5d","disid":"3","name":"Мончегорск г","okato":"47415000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"b7127184-ead6-422b-b7cf-4fc7725b47a5","disid":"3","name":"Мурманск г","okato":"47401000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"c5fe1817-5163-4e3b-b06a-36d322c6bf57","disid":"3","name":"Оленегорск г","okato":"47417000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"d9553f4e-bbf6-4cc2-8f82-523a56265e56","disid":"3","name":"Оленегорск-1 г","okato":"47417000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"defed7b3-d1f0-4dbb-baa8-03bdaffa2b18","disid":"3","name":"Оленегорск-2 г","okato":"47417000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"bf95a4e0-9adc-4111-badf-efbddfc9547c","disid":"3","name":"Оленегорск-4 г","okato":"47417000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"0a358e8a-d3c4-45e5-b9fc-126092afd6f5","disid":"3","name":"Островной г","okato":"47531000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"e2226235-7ff9-46f7-849c-4d26f08adb12","disid":"3","name":"Печенгский р-н","okato":"47215000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"d70b2917-8cea-4555-a9fe-6d2c72d8d9cc","disid":"3","name":"Полярные Зори г","okato":"47419000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"a4ae6202-6ec6-4bc6-abc5-4ecd6ca96d53","disid":"3","name":"Полярный г","okato":"47525000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"53e652bc-dd1b-44e1-9ab2-401b04cf3ceb","disid":"3","name":"Североморск г","okato":"47530000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"22e4a0a6-68a6-47bc-a08c-11610ec6231a","disid":"3","name":"Снежногорск г","okato":"47527000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"b184f590-851f-45b8-8726-001f715274ad","disid":"3","name":"Терский р-н","okato":"47220000000","parentguid":"1c727518-c96a-4f34-9ae6-fd510da3be03","regioncode":"51"},{"aoguid":"b0122c31-eb1c-40ae-b998-08f9e99a0fa1","disid":"3","name":"Нарьян-Мар г","okato":"11111000000","parentguid":"89db3198-6803-4106-9463-cbf781eff0b8","regioncode":"83"},{"aoguid":"d7f36dc9-6cd9-4e6f-bca2-343db6df9c52","disid":"3","name":"Батецкий р-н","okato":"49203000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"dbb5ed6e-9f4c-49d1-ab5b-345222f57856","disid":"3","name":"Боровичский р-н","okato":"49206000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"a34ec3c6-ca41-4b67-8914-5a02a7ff0dea","disid":"3","name":"Валдайский р-н","okato":"49208000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"8d0a05bf-3b8a-43e9-ac26-7ce61d7c4560","disid":"3","name":"Великий Новгород г","okato":"49401000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"0fb1d48e-ad5d-48e5-a4d9-5b4bd20501ce","disid":"3","name":"Волотовский р-н","okato":"49210000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"6353c788-610f-4954-8d69-480c79b7c976","disid":"3","name":"Демянский р-н","okato":"49212000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"ab46ba5c-8570-491c-8390-cf40936de0b6","disid":"3","name":"Крестецкий р-н","okato":"49214000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"bad0d371-fe99-492f-921c-0869dfbe5e81","disid":"3","name":"Любытинский р-н","okato":"49216000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"4461b782-8b8a-42ca-ab46-e435045b810b","disid":"3","name":"Маловишерский р-н","okato":"49220000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"02738bbf-4a9a-43e9-b5a0-a686aaf6c09d","disid":"3","name":"Марёвский р-н","okato":"49223000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"ca66a05a-4138-4e8c-ac8a-b867367fbeda","disid":"3","name":"Мошенской р-н","okato":"49224000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"640b105e-1db1-4ada-9fcc-ec0902aa9a36","disid":"3","name":"Новгородский р-н","okato":"49225000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"a1bf6ac2-6525-4f4d-a8ab-98b21181a83b","disid":"3","name":"Окуловский р-н","okato":"49228000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"0a11c58b-747e-495c-a865-69fe610e85ec","disid":"3","name":"Парфинский р-н","okato":"49230000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"2a4f8f29-e5b9-4f66-aa7c-eb131e27e4c5","disid":"3","name":"Пестовский р-н","okato":"49232000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"8d61345b-5247-4e27-9663-c5d840743605","disid":"3","name":"Поддорский р-н","okato":"49234000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"97edbf16-ba0b-494a-8c92-f371c46b6d3e","disid":"3","name":"Солецкий р-н","okato":"49238000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"ab9218fd-cb07-4bb8-aff2-ee3d735e9cac","disid":"3","name":"Старорусский р-н","okato":"49239000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"124c160f-d389-4b39-a4a2-9dd9501ef66d","disid":"3","name":"Хвойнинский р-н","okato":"49245000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"27145516-0335-4ca2-a8a4-eb43f8f61597","disid":"3","name":"Холмский р-н","okato":"49247000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"7471f8d4-6635-4cf5-984b-0fd501f0a18a","disid":"3","name":"Чудовский р-н","okato":"49250000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"d07bc285-22e0-4889-88d7-efefb03c7c2b","disid":"3","name":"Шимский р-н","okato":"49255000000","parentguid":"e5a84b81-8ea1-49e3-b3c4-0528651be129","regioncode":"53"},{"aoguid":"da2b74bd-de66-46e5-a261-1ea449b38fb6","disid":"3","name":"Бежаницкий р-н","okato":"58204000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"ca091eae-2c39-4730-b57d-b2fa570f71cb","disid":"3","name":"Великие Луки г","okato":"58410000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"a1f7d18a-f86c-495e-b232-69fe2506521a","disid":"3","name":"Великолукский р-н","okato":"58206000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"8d9181ea-1d19-40a7-a276-f11533770dad","disid":"3","name":"Гдовский р-н","okato":"58208000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"c3720019-11b8-4b9e-a3cf-14942bc79eb6","disid":"3","name":"Дедовичский р-н","okato":"58210000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"38f5d001-3ff3-4246-87f9-143714a90d7d","disid":"3","name":"Дновский р-н","okato":"58212000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"2ef61ab2-1dd3-450b-87c8-089519f932e4","disid":"3","name":"Красногородский р-н","okato":"58214000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"40ba9763-1143-4030-8c84-82e3991339dd","disid":"3","name":"Куньинский р-н","okato":"58216000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"29de42ed-a7ab-4ca0-8c67-e176db31d1bc","disid":"3","name":"Локнянский р-н","okato":"58218000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"2798f8e8-8456-472f-bc58-b8196c1ad507","disid":"3","name":"Невельский р-н","okato":"58220000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"ca021da2-1e91-43cf-af9f-ce39798b4dd3","disid":"3","name":"Новоржевский р-н","okato":"58223000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"2ee522b2-840f-47d9-b2f6-83d4792bd392","disid":"3","name":"Новосокольнический р-н","okato":"58226000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"259a2f66-9d5d-4db0-94f5-af961ca9132d","disid":"3","name":"Опочецкий р-н","okato":"58229000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"2c4fa4ca-1868-42ef-8951-12943c5686ff","disid":"3","name":"Островский р-н","okato":"58233000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"f19b98a7-b4ab-47ee-bf4e-d9c6d13a3c7a","disid":"3","name":"Палкинский р-н","okato":"58237000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"c5cfff91-3cb1-4ce9-a471-ec3a423fff86","disid":"3","name":"Печорский р-н","okato":"58240000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"302160ba-a647-4b48-98cb-8ee2394fa24e","disid":"3","name":"Плюсский р-н","okato":"58243000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"cb5f7879-8ed6-4a4f-bb8d-82fd2ae85a36","disid":"3","name":"Порховский р-н","okato":"58247000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"2858811e-448a-482e-9863-e03bf06bb5d4","disid":"3","name":"Псков г","okato":"58401000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"101dfbf7-b58f-40c4-8c06-bc9e12445199","disid":"3","name":"Псковский р-н","okato":"58249000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"42cc705b-b0c4-4995-a76b-2a8cb3f9f192","disid":"3","name":"Пустошкинский р-н","okato":"58250000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"5884c9ea-5694-408a-84ca-deb210bb04bf","disid":"3","name":"Пушкиногорский р-н","okato":"58251000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"72fb9d4c-4b94-4368-89ec-b2d5c0235c7f","disid":"3","name":"Пыталовский р-н","okato":"58253000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"e666e343-303f-4952-8dcf-865188f08aae","disid":"3","name":"Себежский р-н","okato":"58254000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"90688a38-e1b8-42cc-bc28-f820e53ddfb8","disid":"3","name":"Стругокрасненский р-н","okato":"58256000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"7612adec-2b32-4174-af03-b84aa56782ef","disid":"3","name":"Усвятский р-н","okato":"58258000000","parentguid":"f6e148a1-c9d0-4141-a608-93e3bd95e6c4","regioncode":"60"},{"aoguid":"ac598324-b704-4957-a66e-e8142677981b","disid":"3","name":"Зеленогорск г","okato":"40281509000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"1e11a121-81c4-4b66-b11c-da8f47db2e1d","disid":"3","name":"Колпино г","okato":"40277501000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"cced82af-3bdf-4a91-ab68-d654804767c0","disid":"3","name":"Красное Село г","okato":"40279501000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"7b1c7427-41b2-4ffc-bf39-550e8299b5cb","disid":"3","name":"Кронштадт г","okato":"40280501000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"3c2827f3-63f3-4692-8c74-c1318ee524fd","disid":"3","name":"Ломоносов г","okato":"40290502000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"5c348da7-3a1e-47fe-be8d-52bac0887cd4","disid":"3","name":"Павловск г","okato":"40294502000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"8f238984-812b-4bb1-850b-49749fb5c56d","disid":"3","name":"Петергоф г","okato":"40290501000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"110d6ad9-0b64-47cf-a2ee-7e935228799c","disid":"3","name":"Пушкин г","okato":"40294501000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"ee5e852c-1a4a-4aee-919a-54473a76fa4d","disid":"3","name":"Сестрорецк г","okato":"40281520000","parentguid":"c2deb16a-0330-4f05-821f-1d09c93331e6","regioncode":"78"},{"aoguid":"7cfba1ef-2d7c-4b83-948d-fba7def10235","disid":"4","name":"Архаринский р-н","okato":"10205000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"c528e99b-7e81-4290-9cda-8713884472a5","disid":"4","name":"Белогорск г","okato":"10410000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"5a34a5f7-4561-4b41-a790-4ec5e2cfbe5e","disid":"4","name":"Белогорский р-н","okato":"10208000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"8f41253d-6e3b-48a9-842a-25ba894bd093","disid":"4","name":"Благовещенск г","okato":"10401000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"cf9b5f7a-174c-4664-b79c-cddd7628f3ed","disid":"4","name":"Благовещенский р-н","okato":"10211000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"ceb6154c-cd67-488c-b373-051393161914","disid":"4","name":"Бурейский р-н","okato":"10215000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"09698e74-cad0-4647-a01c-c6c26f14af17","disid":"4","name":"Завитинский р-н","okato":"10221000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"11962db7-0c2c-46f9-b7b1-d54817b5133b","disid":"4","name":"Зейский р-н","okato":"10225000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"581855f4-f0bc-44a5-a36e-a298279f9ec4","disid":"4","name":"Зея г","okato":"10412000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"bfbfbc9c-00cb-4478-8665-8e0d7bc56d0d","disid":"4","name":"Ивановский р-н","okato":"10228000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"a2f84ff1-7f84-4c06-9732-d132d6cd139b","disid":"4","name":"Константиновский р-н","okato":"10230000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"4c4dfb3e-8918-49f0-ba05-c6ba1294ae33","disid":"4","name":"Магдагачинский р-н","okato":"10231000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"d4a1e5db-0078-4a5e-b6b7-b34c5e864a42","disid":"4","name":"Мазановский р-н","okato":"10232000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"75b1fd98-c765-4130-a067-22eea4fc706e","disid":"4","name":"Михайловский р-н","okato":"10235000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"cb4dc4d8-6f54-479c-be19-9a1774439693","disid":"4","name":"Октябрьский р-н","okato":"10238000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"16de8821-04f5-4239-b33b-739f8eff7c88","disid":"4","name":"Прогресс пгт","okato":"10465000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"981b5f3a-f0b6-444f-a6fb-c2bc10804b31","disid":"4","name":"Райчихинск г","okato":"10420000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"6580a546-42f5-40b6-ad6e-a470ef56673b","disid":"4","name":"Ромненский р-н","okato":"10240000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"e17b729e-8fcf-42a8-a255-fa45180108f5","disid":"4","name":"Свободненский р-н","okato":"10242000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"dd560dfa-3feb-48e2-aa3b-b71213e7441e","disid":"4","name":"Свободный г","okato":"10430000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"43b8cdd2-96b0-4418-ae92-691f8bdef3db","disid":"4","name":"Селемджинский р-н","okato":"10245000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"cd8a3553-3150-48e9-8f82-309470ac3015","disid":"4","name":"Серышевский р-н","okato":"10247000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"30327ea2-ea94-48bf-b886-56b1c5e0dbdf","disid":"4","name":"Сковородинский р-н","okato":"10249000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"a9da4739-a94d-4ccb-b95a-a92f51f805de","disid":"4","name":"Тамбовский р-н","okato":"10251000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"007e010f-e110-4a55-90a7-c4acac623c9b","disid":"4","name":"Тында г","okato":"10432000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"c21aa5e4-e820-4b9d-b19b-466f5d2c53e6","disid":"4","name":"Тындинский р-н","okato":"10254000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"809f0591-bb18-40a2-9fac-7d3d0a22c0bf","disid":"4","name":"Шимановск г","okato":"10440000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"a53ae35a-c035-4a1b-91ac-5c66a6973e18","disid":"4","name":"Шимановский р-н","okato":"10255000000","parentguid":"844a80d6-5e31-4017-b422-4d9c01e9942c","regioncode":"28"},{"aoguid":"5d133391-46ee-496b-83a6-efeeaa903643","disid":"4","name":"Биробиджан г","okato":"99401000000","parentguid":"1b507b09-48c9-434f-bf6f-65066211c73e","regioncode":"79"},{"aoguid":"a90b96b6-30eb-4915-9571-458d53aca113","disid":"4","name":"Биробиджанский р-н","okato":"99205000000","parentguid":"1b507b09-48c9-434f-bf6f-65066211c73e","regioncode":"79"},{"aoguid":"35d9440a-a71b-441f-9ab5-f5a6edc8e61d","disid":"4","name":"Ленинский р-н","okato":"99210000000","parentguid":"1b507b09-48c9-434f-bf6f-65066211c73e","regioncode":"79"},{"aoguid":"5d1d4108-c914-4680-8330-962bda49c14a","disid":"4","name":"Облученский р-н","okato":"99220000000","parentguid":"1b507b09-48c9-434f-bf6f-65066211c73e","regioncode":"79"},{"aoguid":"e17b11f7-c93e-41b8-a81d-33d110ec56d7","disid":"4","name":"Октябрьский р-н","okato":"99225000000","parentguid":"1b507b09-48c9-434f-bf6f-65066211c73e","regioncode":"79"},{"aoguid":"afae4bce-c5fa-4003-bb5e-621b2041cb18","disid":"4","name":"Смидовичский р-н","okato":"99230000000","parentguid":"1b507b09-48c9-434f-bf6f-65066211c73e","regioncode":"79"},{"aoguid":"cdd3202d-2103-4616-8b77-c71115cdc269","disid":"4","name":"Алеутский р-н","okato":"30201000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"6eff8b90-fb68-49ee-87be-8de62bd40a38","disid":"4","name":"Быстринский р-н","okato":"30204000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"b75a9701-5cd4-4623-99d5-4fa7463ceb47","disid":"4","name":"Вилючинск г","okato":"30535000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"980fdc77-6111-4e10-8461-8165adfaf405","disid":"4","name":"Елизовский р-н","okato":"30207000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"3039c821-30a2-4b81-bc3d-2e584fefacc1","disid":"4","name":"Карагинский р-н","okato":"30124000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"85a6784e-f570-4915-b757-f6eed037e0da","disid":"4","name":"Мильковский р-н","okato":"30210000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"4f6332d8-35f3-43b4-8a3f-2e422d80bb7c","disid":"4","name":"Олюторский р-н","okato":"30127000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"a3b4d68d-b1f5-40fb-8bdf-f894a85c16e1","disid":"4","name":"Пенжинский р-н","okato":"30129000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"0b3f0723-5fe0-4c23-af44-8082166c6d2e","disid":"4","name":"Петропавловск-Камчатский г","okato":"30401000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"c937fa35-7697-4357-8a5a-1c758f5396e5","disid":"4","name":"Соболевский р-н","okato":"30213000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"2af1fc27-0d0e-446b-831c-d2e062296be0","disid":"4","name":"Тигильский р-н","okato":"30132000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"38933047-2529-4f1a-8338-71e9c12e741f","disid":"4","name":"Усть-Большерецкий р-н","okato":"30216000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"8f6adb87-2a1c-4032-a461-37552f02f494","disid":"4","name":"Усть-Камчатский р-н","okato":"30219000000","parentguid":"d02f30fc-83bf-4c0f-ac2b-5729a866a207","regioncode":"41"},{"aoguid":"cb8ae35a-93df-4133-b377-50f3698c8b5e","disid":"4","name":"Магадан г","okato":"44401000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"77999ce9-dc97-4769-bbfa-d15f8036bfb3","disid":"4","name":"Ольский р-н","okato":"44201000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"6e75ea82-5b16-4370-9ae1-2290b18b8939","disid":"4","name":"Омсукчанский р-н","okato":"44204000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"c34d03c9-27fe-47ec-bab3-16bce72b2723","disid":"4","name":"Северо-Эвенский р-н","okato":"44207000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"143df405-faf6-48f7-b309-b979d68b0af8","disid":"4","name":"Среднеканский р-н","okato":"44210000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"f572ff1d-9018-4796-b234-f1180620f12a","disid":"4","name":"Сусуманский р-н","okato":"44213000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"3999810d-3ffb-41d6-b992-5a19981b48fc","disid":"4","name":"Тенькинский р-н","okato":"44216000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"f14f0feb-3ac6-41c3-bbef-5c51c058162a","disid":"4","name":"Хасынский р-н","okato":"44219000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"81cc0f05-91ea-4953-8811-aaeffcd61924","disid":"4","name":"Ягоднинский р-н","okato":"44222000000","parentguid":"9c05e812-8679-4710-b8cb-5e8bd43cdf48","regioncode":"49"},{"aoguid":"a1b767d1-e61f-43e5-bd1a-1c0aa5a02c6c","disid":"4","name":"Анучинский р-н","okato":"05202000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"36e4c7ce-7320-48ee-8320-0587c1e09917","disid":"4","name":"Арсеньев г","okato":"05403000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"3ce80b09-9b72-4e68-9b2d-becaaee4570e","disid":"4","name":"Артем г","okato":"05405000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"1315186b-9ae8-4f92-b3a5-1db055c15358","disid":"4","name":"Большой Камень г","okato":"05506000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"7b6de6a5-86d0-4735-b11a-499081111af8","disid":"4","name":"Владивосток г","okato":"05401000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"b2a863e2-37be-4858-b65e-0babc3872052","disid":"4","name":"Дальнегорск г","okato":"05407000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"cc7e17f3-d6ec-46c6-8973-32d7bab4bb54","disid":"4","name":"Дальнегорский р-н","okato":"05407000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"e6e6c2b1-20cf-47a7-9a4b-39e8a96cc5c8","disid":"4","name":"Дальнереченск г","okato":"05408000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"995e1b1c-753a-4b66-b309-36c99796cb9b","disid":"4","name":"Дальнереченский р-н","okato":"05207000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"1e05990c-5c14-43a8-a35f-7c0da8918444","disid":"4","name":"Кавалеровский р-н","okato":"05210000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"691db1ec-1f3d-4b66-a080-a8f2c8ac1cac","disid":"4","name":"Кировский р-н","okato":"05212000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"8f0579a7-7ec1-4aaf-b5a0-7dd762bfe2ce","disid":"4","name":"Красноармейский р-н","okato":"05214000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"8f4ec2ee-96f0-4498-a4a2-fa53b311001b","disid":"4","name":"Лазовский р-н","okato":"05217000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"71b4cdae-5e53-4406-a418-1e8b5c17dc2e","disid":"4","name":"Лесозаводск г","okato":"05411000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"5a20febc-51fc-4048-86fb-0bc7ebef8136","disid":"4","name":"Лесозаводский р-н","okato":"05411000002","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"0756729d-ae62-453c-95c3-e71527a9e70b","disid":"4","name":"Михайловский р-н","okato":"05220000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"c8132996-04ce-4dc0-9cd4-ce94352d74f8","disid":"4","name":"Надеждинский р-н","okato":"05223000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"225a3506-35aa-4456-8bd7-244bdfbc4eaf","disid":"4","name":"Находка г","okato":"05414000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"aafa1538-babf-4e4a-ba44-3aa5a9c60966","disid":"4","name":"Октябрьский р-н","okato":"05226000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"c384446c-8fad-4bc2-9e3c-de0be56e08af","disid":"4","name":"Ольгинский р-н","okato":"05228000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"b62edf86-4257-4e80-ade6-857529bd1b1e","disid":"4","name":"Партизанск г","okato":"05417000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"fb565c17-3fc5-424d-a7d8-26bc35a7557b","disid":"4","name":"Партизанский р-н","okato":"05230000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"55b48f09-0efe-4e80-85af-77ff2476da89","disid":"4","name":"Пограничный р-н","okato":"05232000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"d77cc950-d159-4341-acad-57404d3ca3e1","disid":"4","name":"Пожарский р-н","okato":"05234000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"e55554eb-c571-49d2-bf69-c3c4acf8b10b","disid":"4","name":"Спасск-Дальний г","okato":"05420000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"f046446e-5635-4dbe-a2a2-c725fcda2931","disid":"4","name":"Спасский р-н","okato":"05237000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"d7b7b0a8-73fa-48e2-8615-2807d1aa3060","disid":"4","name":"Тернейский р-н","okato":"05240000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"de7335fb-9baa-48eb-927d-0bb299b2e5bc","disid":"4","name":"Уссурийск г","okato":"05423000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"5befc127-d884-428f-8775-7d6e364dea2a","disid":"4","name":"Уссурийский р-н","okato":"05423000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"fdb16823-586f-43d2-a1b4-b1c7c7f00bcd","disid":"4","name":"Фокино г","okato":"05547000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"187fe5b6-e153-4b30-8d71-79da706c3a44","disid":"4","name":"Ханкайский р-н","okato":"05246000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"f7b61408-6130-420c-b46f-82dcab78a96f","disid":"4","name":"Хасанский р-н","okato":"05248000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"70937b86-63a1-4743-bd89-d52bb02f67ad","disid":"4","name":"Хорольский р-н","okato":"05250000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"5dc5c6d4-c5d2-43b2-b720-1d85a0d7c5a4","disid":"4","name":"Черниговский р-н","okato":"05253000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"266c0817-5b30-4013-b767-a6d5b6ccc542","disid":"4","name":"Чугуевский р-н","okato":"05255000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"85dcc2c9-7442-4a37-9848-6b76e63355b9","disid":"4","name":"Шкотовский р-н","okato":"05257000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"f8ca80bc-d047-4f04-9524-d98d767cc4bb","disid":"4","name":"Яковлевский р-н","okato":"05259000000","parentguid":"43909681-d6e1-432d-b61f-ddac393cb5da","regioncode":"25"},{"aoguid":"a48b0961-8608-4602-b65d-56d71e24cb09","disid":"4","name":"Абыйский у","okato":"98201000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"cd835f7c-545b-47f8-b372-2bf655efe881","disid":"4","name":"Алданский у","okato":"98203000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"f467757b-6249-4352-a71e-b8402b0779ad","disid":"4","name":"Аллаиховский у","okato":"98206000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"ba3e7992-cc51-4cda-ac87-0254f10f0996","disid":"4","name":"Амгинский у","okato":"98208000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"b60ad03f-edc7-46b8-976e-b0bea152f2bd","disid":"4","name":"Анабарский у","okato":"98210000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"f45ecd3b-d337-49da-951b-2c660d950199","disid":"4","name":"Булунский у","okato":"98212000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"9d942295-ec0f-46c1-b07e-725672cc34e5","disid":"4","name":"Верхневилюйский у","okato":"98214000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"33ca62cd-8b5f-404a-8f8d-1f16f1c8ea05","disid":"4","name":"Верхнеколымский у","okato":"98215000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"f5bbf5f0-8955-4557-88a8-62f4b28c6cef","disid":"4","name":"Верхоянский у","okato":"98216000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"63634da9-775c-41c4-addd-5b20540f615e","disid":"4","name":"Вилюйский у","okato":"98218000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"a717c175-c578-4611-b01f-b169e50d91d4","disid":"4","name":"Горный у","okato":"98220000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"b5706e58-586b-4a41-ba93-e8a7215c67b7","disid":"4","name":"Жиганский у","okato":"98222000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"cc1cd736-332d-4df7-b44e-19d09b568be8","disid":"4","name":"Кобяйский у","okato":"98224000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"471be2b0-acc1-4590-9266-0e7c35b22ebb","disid":"4","name":"Ленский у","okato":"98227000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"86f91f5c-3283-42b0-b2af-bcb5393aae89","disid":"4","name":"Мегино-Кангаласский у","okato":"98229000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"50f64b86-cb89-41e4-82f1-a9cc0eb4e222","disid":"4","name":"Мирнинский у","okato":"98231000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"41b12d5b-af67-4acf-af94-739f8e8ec373","disid":"4","name":"Момский у","okato":"98233000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"c7956c49-39f3-4968-9bba-cb923befb665","disid":"4","name":"Намский у","okato":"98235000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"6ece5c38-f802-4f32-ad33-0409538c3562","disid":"4","name":"Нерюнгри г","okato":"98406550000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"8f8d4b5c-7745-42bb-94ba-abb0fe634e83","disid":"4","name":"Нижнеколымский у","okato":"98237000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"d6664eed-0357-4f72-840b-ce5b1cd19af1","disid":"4","name":"Нюрбинский у","okato":"98226000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"c3d18155-0f1a-4c05-95f8-87160d350621","disid":"4","name":"Оймяконский у","okato":"98239000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"b90ae50a-ce7b-4b76-8af3-df3195e7ee23","disid":"4","name":"Олекминский у","okato":"98241000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"cf55bf48-5eb0-491b-aeb5-43302c69a2e2","disid":"4","name":"Оленекский эвенкийский национальный у","okato":"98242000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"978623f7-e2d6-4300-9367-44446256e7ee","disid":"4","name":"Среднеколымский у","okato":"98246000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"2cf51223-a7dd-4885-a239-2b14c89bc870","disid":"4","name":"Сунтарский у","okato":"98248000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"9273d43c-278a-4073-93b4-a19f42f5cdf6","disid":"4","name":"Таттинский у","okato":"98204000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"73533d0b-02a8-411e-8f68-94aa2d7a6d33","disid":"4","name":"Томпонский у","okato":"98250000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"31db732f-1568-4f01-92c2-15c8d0ce7f78","disid":"4","name":"Усть-Алданский у","okato":"98252000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"4b4d4c0e-ad9a-472f-b682-62381706513a","disid":"4","name":"Усть-Майский у","okato":"98254000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"e3c153f0-defe-4c4e-ac32-3e0dd593234a","disid":"4","name":"Усть-Янский у","okato":"98256000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"4e397dfe-a6cc-46b2-97ad-0303b152a5fa","disid":"4","name":"Хангаласский у","okato":"98244000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"d6db5f62-cde7-4183-b905-25bc65158e95","disid":"4","name":"Чурапчинский у","okato":"98258000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"3f73f00e-bda5-455d-9f94-8c8f54fcf678","disid":"4","name":"Эвено-Бытантайский Национальный у","okato":"98259000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"884c84a2-0141-4652-962d-8a92989b88f7","disid":"4","name":"Якутск г","okato":"98401000000","parentguid":"c225d3db-1db6-4063-ace0-b3fe9ea3805f","regioncode":"14"},{"aoguid":"0f2593bb-5849-4a22-b6a0-08a62711a48f","disid":"4","name":"Александровск-Сахалинский р-н","okato":"64204000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"ab950fc2-b675-408c-9e96-bee42e16cba8","disid":"4","name":"Анивский р-н","okato":"64208000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"60d2bc46-e1e5-493d-8d77-98efdfdb8d5b","disid":"4","name":"Долинский р-н","okato":"64212000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"cf847029-d59d-4440-92ac-a8804aded2ba","disid":"4","name":"Корсаковский р-н","okato":"64216000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"cb7c37b6-3add-4c75-937b-1139329d0b9b","disid":"4","name":"Курильский р-н","okato":"64220000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"53f4c64c-88a4-411a-aef9-2b9aa7536aeb","disid":"4","name":"Макаровский р-н","okato":"64224000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"74938bee-7b8c-4f00-97af-ae96dd487e84","disid":"4","name":"Невельский р-н","okato":"64228000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"a6759f2e-96cb-418f-8e44-527765e58f97","disid":"4","name":"Ногликский р-н","okato":"64232000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"efb555f4-2f2a-49af-a40c-d398cbc84271","disid":"4","name":"Охинский р-н","okato":"64236000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"0a5764d6-1cef-4270-aa96-fd2657d01623","disid":"4","name":"Поронайский р-н","okato":"64240000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"33652fb1-862f-46bc-8ab2-1d58f0ec21a9","disid":"4","name":"Северо-Курильский р-н","okato":"64243000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"7fb1c169-7643-4abd-b5dc-d94555aa31c8","disid":"4","name":"Смирныховский р-н","okato":"64246000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"b58316d0-1339-4b11-8138-dae36f197591","disid":"4","name":"Томаринский р-н","okato":"64248000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"376116df-714d-40a1-9ef7-49cf902e99a9","disid":"4","name":"Тымовский р-н","okato":"64250000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"3945e58b-544e-43a1-9042-608b8258d987","disid":"4","name":"Углегорский р-н","okato":"64252000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"d1496d95-e90a-4fa6-8c77-adbf023cc358","disid":"4","name":"Холмский р-н","okato":"64254000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"aaa9474f-b2fe-40bc-a64f-88ab2cef6ad2","disid":"4","name":"Южно-Курильский р-н","okato":"64256000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"44388ad0-06aa-49b0-bbf9-1704629d1d68","disid":"4","name":"Южно-Сахалинск г","okato":"64401000000","parentguid":"aea6280f-4648-460f-b8be-c2bc18923191","regioncode":"65"},{"aoguid":"d3c4b43d-3e19-4454-939b-d92ef3d6c875","disid":"4","name":"Амурск г","okato":"08403000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"c5a734af-ed27-4463-9e6a-a98571371a87","disid":"4","name":"Амурский р-н","okato":"08203000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"12bc420e-cfd2-456e-9bc6-f14e5881a351","disid":"4","name":"Аяно-Майский р-н","okato":"08206000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"70dc89f8-f067-482a-bd50-4fb2782463e7","disid":"4","name":"Бикин г","okato":"08406000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"822de405-5731-4354-be51-95fbf11f3df5","disid":"4","name":"Бикинский р-н","okato":"08209000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"2763e3ba-0c04-40e2-8983-7df96a96c86b","disid":"4","name":"Ванинский р-н","okato":"08212000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"6a2d808f-a0d2-4b8f-a739-b857cad1afbe","disid":"4","name":"Верхнебуреинский р-н","okato":"08214000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"4bd60b31-27ac-4ff7-9cf4-a031d7beeffc","disid":"4","name":"Вяземский р-н","okato":"08217000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"9f905365-dbef-425a-9724-3db4e18dc7d9","disid":"4","name":"Имени Лазо р-н","okato":"08224000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"710a34c5-9ec0-4f13-ae31-2ce2dca3e44a","disid":"4","name":"Имени Полины Осипенко р-н","okato":"08237000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"a29c5b20-5056-412b-9af6-7b805aa3ea72","disid":"4","name":"Комсомольск-на-Амуре г","okato":"08409000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"43466e8d-ebc4-4d46-9010-1099778371f7","disid":"4","name":"Комсомольский р-н","okato":"08220000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"6e8cb872-3ca2-407f-a58f-49f53075558b","disid":"4","name":"Нанайский р-н","okato":"08228000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"7a58fb7c-6d03-46e4-b5fc-3f5b587c09be","disid":"4","name":"Николаевск-на-Амуре г","okato":"08414000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"41ea0996-8086-40bd-bc98-3409c969fd11","disid":"4","name":"Николаевский р-н","okato":"08231000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"e6543e92-608f-4e0c-a9b7-429d4e1fd8b2","disid":"4","name":"Охотский р-н","okato":"08234000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"64f0ebe7-00e4-40a0-9dd9-15f9293632ae","disid":"4","name":"Советская Гавань г","okato":"08418000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"bef59e53-1189-4b0c-a30b-c07804cbd092","disid":"4","name":"Советско-Гаванский р-н","okato":"08242000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"f88a5d4f-9146-4d81-a047-19216fb05efb","disid":"4","name":"Солнечный р-н","okato":"08244000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"1e57a568-7eca-4747-878c-c6d4e27f96d7","disid":"4","name":"Тугуро-Чумиканский р-н","okato":"08246000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"6fe3a5e3-d600-4fb0-89cb-4684096fd982","disid":"4","name":"Ульчский р-н","okato":"08250000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"a4859da8-9977-4b62-8436-4e1b98c5d13f","disid":"4","name":"Хабаровск г","okato":"08401000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"11d90802-ea26-4780-ae59-8c4726d6319f","disid":"4","name":"Хабаровский р-н","okato":"08255000000","parentguid":"7d468b39-1afa-41ec-8c4f-97a8603cb3d4","regioncode":"27"},{"aoguid":"4d254ba7-a45c-4101-b372-5f5605382272","disid":"4","name":"Анадырский р-н","okato":"77203000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"7fad3a21-06b4-4af3-9657-bf1521714952","disid":"4","name":"Анадырь г","okato":"77401000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"022d29fa-44fe-4e1f-a1c7-2f3ae447d68c","disid":"4","name":"Беринговский р-н","okato":"77206000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"fc22fe8c-bbf6-4428-b728-25cf0cc4b64b","disid":"4","name":"Билибинский р-н","okato":"77209000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"57e844fa-6e04-4ca8-9227-77dd12ba6286","disid":"4","name":"Иультинский р-н","okato":"77215000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"b5d17b9e-480e-4fb6-959b-b1288d69a2b6","disid":"4","name":"Провиденский р-н","okato":"77220000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"dcadfd94-88b5-423d-ac0a-7d27f85f0051","disid":"4","name":"Чаунский р-н","okato":"77230000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"f161569d-fc4b-4d22-a4c3-0131c4f37c3a","disid":"4","name":"Чукотский р-н","okato":"77233000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"029b292b-6f5a-4777-b9ef-154459558a9f","disid":"4","name":"Шмидтовский р-н","okato":"77237000000","parentguid":"f136159b-404a-4f1f-8d8d-d169e1374d5c","regioncode":"87"},{"aoguid":"0839d751-b940-4d3d-afb6-5df03fdd7791","disid":"5","name":"Горно-Алтайск г","okato":"84401000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"4c2dd563-c3af-45ad-9a8f-2959de8383f0","disid":"5","name":"Кош-Агачский р-н","okato":"84210000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"169067ea-a246-4b26-96ec-6ce6b9517312","disid":"5","name":"Майминский р-н","okato":"84215000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"948da642-a876-498c-8256-ac62264d62d8","disid":"5","name":"Онгудайский р-н","okato":"84220000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"c52a9298-eb63-4916-8251-ac9c662b94cf","disid":"5","name":"Турочакский р-н","okato":"84225000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"c0ccc597-292b-448c-a413-478604d226f9","disid":"5","name":"Улаганский р-н","okato":"84230000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"2611f7ea-0871-42ef-8dab-1a621cd34ce8","disid":"5","name":"Усть-Канский р-н","okato":"84235000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"65fdce0c-904a-41db-b638-f613c5cc7e94","disid":"5","name":"Усть-Коксинский р-н","okato":"84240000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"fba1d85e-9556-420f-92e1-8bdd5cfac8a9","disid":"5","name":"Чемальский р-н","okato":"84243000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"4d145c06-d5fc-4355-9a50-fe7a3329f70e","disid":"5","name":"Чойский р-н","okato":"84245000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"307dd393-ab5a-448f-a85d-abe32139333d","disid":"5","name":"Шебалинский р-н","okato":"84250000000","parentguid":"5c48611f-5de6-4771-9695-7e36a4e7529d","regioncode":"04"},{"aoguid":"ae716080-f27b-40b6-a555-cf8b518e849e","disid":"5","name":"Алейск г","okato":"01403000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"55e07317-8997-4911-b4c0-c37142939c57","disid":"5","name":"Алейский р-н","okato":"01201000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"812ae638-306f-444b-a70c-411e45e33f16","disid":"5","name":"Алтайский р-н","okato":"01202000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"b468214b-b5e8-4f32-9217-8680b4d3977b","disid":"5","name":"Баевский р-н","okato":"01203000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"d13945a8-7017-46ab-b1e6-ede1e89317ad","disid":"5","name":"Барнаул г","okato":"01401000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"e4edca96-9b86-4cac-8c7f-cc93d9ba4cd1","disid":"5","name":"Белокуриха г","okato":"01404000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"52f876f6-cb1d-4f23-a22f-b692609fc1e0","disid":"5","name":"Бийск г","okato":"01405000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"b86fc825-e4ac-460f-aae2-19779682e891","disid":"5","name":"Бийский р-н","okato":"01204000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"f44af653-9182-47ef-ac56-5814d4ff3c6f","disid":"5","name":"Благовещенский р-н","okato":"01205000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"b276cba8-44d1-42cb-b261-477c21815854","disid":"5","name":"Бурлинский р-н","okato":"01206000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"8ee8547f-e119-4418-994c-fb3fbac6092d","disid":"5","name":"Быстроистокский р-н","okato":"01207000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"d3f7df49-2a7e-46b2-9c3d-57673606187c","disid":"5","name":"Волчихинский р-н","okato":"01208000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"f5b3e147-86b2-4dbd-bab3-446580370d5e","disid":"5","name":"Егорьевский р-н","okato":"01209000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"8fb9cf52-2172-458c-b695-676764f921ef","disid":"5","name":"Ельцовский р-н","okato":"01210000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"440b3e68-0929-49f9-b994-8683e5a73df5","disid":"5","name":"Завьяловский р-н","okato":"01211000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"fe484845-ba6d-4cf5-b9ae-61c09665030e","disid":"5","name":"Залесовский р-н","okato":"01212000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"142e04ef-dec1-44fa-b553-fac215764374","disid":"5","name":"Заринск г","okato":"01406000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"5762fb13-f2bd-495d-a084-05395205355c","disid":"5","name":"Заринский р-н","okato":"01213000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"5a1640c4-b8a1-42f5-8804-14757c7c665c","disid":"5","name":"Змеиногорский р-н","okato":"01214000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"6b60c585-b3aa-4661-8054-0c073df7179a","disid":"5","name":"Зональный р-н","okato":"01229000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"bef9941c-f31e-4d4c-b0e0-2f384b2bf38e","disid":"5","name":"Калманский р-н","okato":"01215000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"ff57ea09-87c7-43c1-a560-d74511933c08","disid":"5","name":"Каменский р-н","okato":"01216000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"810ca9c7-f10e-4def-9c48-f0aa83168ca7","disid":"5","name":"Камень-на-Оби г","okato":"01410000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"f8d97694-8b0c-4cd0-a122-e348694553c3","disid":"5","name":"Ключевский р-н","okato":"01217000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"3d9775b4-5cbe-4794-b43c-7168a7d4baef","disid":"5","name":"Косихинский р-н","okato":"01218000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"3c80496d-3092-469c-be07-9ef5f7815069","disid":"5","name":"Красногорский р-н","okato":"01219000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"c380cbaf-ad34-41b0-b448-e3998f39c2ed","disid":"5","name":"Краснощёковский р-н","okato":"01220000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"0b5707f0-3a2c-43a8-99bb-f1f344df203c","disid":"5","name":"Крутихинский р-н","okato":"01221000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"15e74521-85f7-484a-a358-05f9e323d6b8","disid":"5","name":"Кулундинский р-н","okato":"01222000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"d1526086-403a-44bb-a076-37c9e794542a","disid":"5","name":"Курьинский р-н","okato":"01223000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"47f53c62-0efe-4683-99d7-aa4f9a5a0674","disid":"5","name":"Кытмановский р-н","okato":"01224000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"f72473be-0441-4e3a-937a-0d9a5054e1a1","disid":"5","name":"Локтевский р-н","okato":"01225000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"35a088cc-5c63-4b5d-b982-535be51bee70","disid":"5","name":"Мамонтовский р-н","okato":"01226000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"3b92d8bf-88d7-4085-950c-aa4383b706c1","disid":"5","name":"Михайловский р-н","okato":"01227000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"7fbdf439-ddc8-4116-8a67-8dc7bf3493bc","disid":"5","name":"Немецкий Национальный р-н","okato":"01260000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"a697a7fd-10b5-4917-9b80-ce6758c8b5fc","disid":"5","name":"Новичихинский р-н","okato":"01228000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"aa288d9f-4b2a-42a6-97f0-3502dddfa383","disid":"5","name":"Новоалтайск г","okato":"01413000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"1ed19a66-a786-440c-b625-e034303abdf3","disid":"5","name":"Павловский р-н","okato":"01230000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"24fee08a-7097-4bd9-8f14-8a9f0e76c27b","disid":"5","name":"Панкрушихинский р-н","okato":"01231000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"1bed6635-6755-4af2-a9ea-e7a1b6147d7b","disid":"5","name":"Первомайский р-н","okato":"01232000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"dfb95d28-46f2-4786-97c1-2109c9ada2f7","disid":"5","name":"Петропавловский р-н","okato":"01233000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"3b52bd74-368d-4e16-b163-037756d9300c","disid":"5","name":"Поспелихинский р-н","okato":"01234000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"16c63577-f053-493f-8015-f577e8a7dc20","disid":"5","name":"Ребрихинский р-н","okato":"01235000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"e52d7d40-b4b9-461f-b3e7-f71b5b77dee4","disid":"5","name":"Родинский р-н","okato":"01236000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"7f760d5e-fcd0-4896-b5e2-2179dc4d382a","disid":"5","name":"Романовский р-н","okato":"01237000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"65db5c88-c65c-43f0-9c21-13e15a032d4a","disid":"5","name":"Рубцовск г","okato":"01416000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"f86613b5-2ff9-44d0-9294-116eddee0445","disid":"5","name":"Рубцовский р-н","okato":"01238000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"94ae181d-b153-4dd1-8a2f-12852919875f","disid":"5","name":"Славгород г","okato":"01419000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"dd132b78-51ba-46d0-9fd4-3dc76a93dc1e","disid":"5","name":"Славгородский р-н","okato":"01239000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"87a09d13-3020-4279-94a8-c9cbf3f0caab","disid":"5","name":"Смоленский р-н","okato":"01240000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"ca92170e-7921-4448-bc2d-9047148120ea","disid":"5","name":"Советский р-н","okato":"01242000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"b58e660f-c15f-4c79-befe-2ea0b2537687","disid":"5","name":"Солонешенский р-н","okato":"01243000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"b88539da-8ca2-4ecb-bcf3-0052da6487c9","disid":"5","name":"Солтонский р-н","okato":"01244000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"52daf91a-16d1-4237-9f7c-f242c10f967c","disid":"5","name":"Суетский р-н","okato":"01241000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"ad71a489-a8df-47bc-8e85-58836b59b67a","disid":"5","name":"Табунский р-н","okato":"01246000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"81952e7d-e64d-41a5-848d-decdd37e45e8","disid":"5","name":"Тальменский р-н","okato":"01247000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"b2192b7b-6916-423a-aedb-5a6a8955572a","disid":"5","name":"Тогульский р-н","okato":"01248000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"97f3d31c-9286-4d61-9585-bfd25bcc0818","disid":"5","name":"Топчихинский р-н","okato":"01249000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"0ca282b7-4cb8-424c-aa99-54d5fdecf4df","disid":"5","name":"Третьяковский р-н","okato":"01250000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"56af85a7-ef7e-41c2-9a2d-a90cc8826e3d","disid":"5","name":"Троицкий р-н","okato":"01251000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"207263b2-4f28-424a-a909-97319fcf6085","disid":"5","name":"Тюменцевский р-н","okato":"01252000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"67f72c0b-f45f-427e-9961-fd10211a7b5d","disid":"5","name":"Угловский р-н","okato":"01253000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"0531ba15-af22-4214-b618-401bd519f36d","disid":"5","name":"Усть-Калманский р-н","okato":"01254000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"a04faf9c-561a-4b60-812b-f8909763cb6b","disid":"5","name":"Усть-Пристанский р-н","okato":"01255000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"32d8dd57-4f92-4e11-8bf5-6ae4c7444945","disid":"5","name":"Хабарский р-н","okato":"01256000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"7e8de66b-a6a4-44ea-a2c2-71869c6fbe4a","disid":"5","name":"Целинный р-н","okato":"01257000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"a4f1cb01-d14c-458b-9829-cc495bb65295","disid":"5","name":"Чарышский р-н","okato":"01258000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"383806be-d48b-4f7c-9ebb-ce278fb7c7f0","disid":"5","name":"Шелаболихинский р-н","okato":"01245000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"77e4c8d6-1b5d-4c76-b1b9-40d5a2fdc448","disid":"5","name":"Шипуновский р-н","okato":"01259000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"e07d57ed-22ce-4020-b59c-f7aae6f091bf","disid":"5","name":"Яровое г","okato":"01430000000","parentguid":"8276c6a1-1a86-4f0d-8920-aba34d4cc34a","regioncode":"22"},{"aoguid":"edc30fc4-e9e5-4af5-a65a-3a002df258f3","disid":"5","name":"Баргузинский р-н","okato":"81203000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"ccbf71a0-c7fb-4d00-953f-4513b6faeb7e","disid":"5","name":"Баунтовский эвенкийский р-н","okato":"81200000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"39055f93-f5e4-48aa-820e-84a9077a06d8","disid":"5","name":"Бичурский р-н","okato":"81209000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"8bda6987-7285-47f6-a9b5-08383f069210","disid":"5","name":"Джидинский р-н","okato":"81212000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"e1fa8361-da55-4f3f-b1a9-7070c02916ea","disid":"5","name":"Еравнинский р-н","okato":"81215000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"730dc732-140d-437b-81c5-aa927aec0471","disid":"5","name":"Заиграевский р-н","okato":"81218000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"51b13cd0-feee-4558-b905-073030a0b0ff","disid":"5","name":"Закаменский р-н","okato":"81221000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"c33811fe-cee3-467f-a901-ceed8d0c7df6","disid":"5","name":"Иволгинский р-н","okato":"81222000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"59551701-4c36-4c62-b7b6-4af4d58ea29d","disid":"5","name":"Кабанский р-н","okato":"81224000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"d142ee10-5d45-4de9-87e6-74b3aa7fe178","disid":"5","name":"Кижингинский р-н","okato":"81227000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"89c0bc3d-002f-4532-a285-e690021abe57","disid":"5","name":"Курумканский р-н","okato":"81230000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"025cfb1c-855b-4447-8904-8b4b2ec52dc8","disid":"5","name":"Кяхтинский р-н","okato":"81233000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"943d717d-e457-48f0-b4bb-9a660fe78f1c","disid":"5","name":"Муйский р-н","okato":"81235000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"3bf41fa7-60a5-4b9c-9ee3-8ab2a5a90a9b","disid":"5","name":"Мухоршибирский р-н","okato":"81236000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"aad15d82-e748-48fb-90c9-acd77ebb9452","disid":"5","name":"Окинский р-н","okato":"81239000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"84684dc8-d631-407f-9445-b99460e26dd9","disid":"5","name":"Прибайкальский р-н","okato":"81242000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"8f4086ec-96d1-4f46-9411-353f65a96594","disid":"5","name":"Северо-Байкальский р-н","okato":"81245000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"c4ea4370-0720-40a3-9df6-dd8ccf354d15","disid":"5","name":"Северобайкальск г","okato":"81420000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"158b5445-b2c2-477c-83e7-4217545a7eac","disid":"5","name":"Селенгинский р-н","okato":"81248000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"114ad8c8-9356-4cdf-bac8-2d44a3adcfc8","disid":"5","name":"Тарбагатайский р-н","okato":"81250000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"d455c68f-329d-45c0-b2e9-f87b8b807ef8","disid":"5","name":"Тункинский р-н","okato":"81251000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"9fdcc25f-a3d0-4f28-8b61-40648d099065","disid":"5","name":"Улан-Удэ г","okato":"81401000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"252e5c1a-ded1-450a-bb4b-8de6c88e3650","disid":"5","name":"Хоринский р-н","okato":"81257000000","parentguid":"a84ebed3-153d-4ba9-8532-8bdf879e1f5a","regioncode":"03"},{"aoguid":"21156dc1-ebf7-404c-b009-fc4afe637436","disid":"5","name":"Агинский р-н","okato":"76202000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"e89ad160-f25b-4766-b315-1fee59010e3d","disid":"5","name":"Агинский Бурятский АО","okato":"76100000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"bad20b52-01ab-4e5b-b7f5-0311f872df45","disid":"5","name":"Акшинский р-н","okato":"76203000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"35cc8fc6-c562-4d85-abea-f64a63ba374b","disid":"5","name":"Александрово-Заводский р-н","okato":"76204000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"60a8d4f4-35c1-4f52-8822-8c6082476b8b","disid":"5","name":"Балейский р-н","okato":"76206000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"c675951e-2b4e-4b5a-bda0-39e9fcd5ccfd","disid":"5","name":"Борзинский р-н","okato":"76209000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"45c8797e-22da-4485-9941-c2178952cbce","disid":"5","name":"Газимуро-Заводский р-н","okato":"76210000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"571722ea-feea-4512-a42c-e66abf3c215c","disid":"5","name":"Горный пгт","okato":"76585000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"897aa126-11f1-4e2d-9252-3c116aef30a1","disid":"5","name":"Горный-1 пгт","okato":"76585000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"11644892-5633-4ba3-a05f-a2001266c04d","disid":"5","name":"Дульдургинский р-н","okato":"76211000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"b26268b7-f311-4f45-8b94-80a15671923b","disid":"5","name":"Забайкальский р-н","okato":"76212000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"2bb8b6a8-3934-49e7-9f26-a974154c21b9","disid":"5","name":"Каларский р-н","okato":"76215000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"9290614b-566e-49f8-a7a1-78dedc6cb387","disid":"5","name":"Калганский р-н","okato":"76218000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"bde9837e-5147-4a3d-8c25-dd1b11e60c53","disid":"5","name":"Карымский р-н","okato":"76220000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"539e012d-a5c0-4a81-83b9-cf87ea0f7697","disid":"5","name":"Краснокаменский р-н","okato":"76221000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"e158669c-2976-4230-8ce4-4e21eb07c2d7","disid":"5","name":"Красночикойский р-н","okato":"76222000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"4423dac1-c620-4631-b351-72d9ebadda5a","disid":"5","name":"Кыринский р-н","okato":"76224000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"25629833-34b6-4f44-93c2-f4dd9ad9208b","disid":"5","name":"Могойтуйский р-н","okato":"76225000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"cafc58e1-f461-4298-a150-4724110d102f","disid":"5","name":"Могочинский р-н","okato":"76226000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"46ed48f9-95be-4f90-93c5-bcce54ae1e7d","disid":"5","name":"Нерчинский р-н","okato":"76228000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"9fcf767e-df22-40a5-bbe7-55fa5f56da5a","disid":"5","name":"Нерчинско-Заводский р-н","okato":"76230000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"d8be2992-3b33-4ebd-b9c0-8b7bec743490","disid":"5","name":"Оловяннинский р-н","okato":"76232000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"859776d2-45b8-4248-925c-f376c7c6c712","disid":"5","name":"Ононский р-н","okato":"76234000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"3ea0829a-cf43-457b-aeb6-db2ee9aa5146","disid":"5","name":"Петровск-Забайкальский р-н","okato":"76236000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"19364191-9242-4c03-b7d6-6f32844e1754","disid":"5","name":"Приаргунский р-н","okato":"76238000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"38df8dbe-6dd4-4399-adf2-55e04ae24a3f","disid":"5","name":"Сретенский р-н","okato":"76240000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"e81ad007-3c4d-4e11-826d-2a38d05e438a","disid":"5","name":"Тунгиро-Олекминский р-н","okato":"76242000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"3d4b6a5a-6f1f-43a4-b57e-66018f4fcf3f","disid":"5","name":"Тунгокоченский р-н","okato":"76244000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"f84662de-eac5-404b-a882-8b40cfd86d4c","disid":"5","name":"Улетовский р-н","okato":"76246000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"d8f851f2-44e2-4846-a371-0721ab2d1a00","disid":"5","name":"Хилокский р-н","okato":"76247000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"9d288f0e-7143-4e52-abe9-945852d8cd09","disid":"5","name":"Чернышевский р-н","okato":"76248000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"2d9abaa6-85a6-4f1f-a1bd-14b76ec17d9c","disid":"5","name":"Чита г","okato":"76401000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"c1ace3b8-1b22-4e23-8f3f-8029fa27dadf","disid":"5","name":"Читинский р-н","okato":"76250000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"ea4a6bde-9ab0-4abe-8ab4-76b869d3ee0a","disid":"5","name":"Шелопугинский р-н","okato":"76252000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"dfee01b4-ecf1-4089-afa2-94b8573a9797","disid":"5","name":"Шилкинский р-н","okato":"76254000000","parentguid":"b6ba5716-eb48-401b-8443-b197c9578734","regioncode":"75"},{"aoguid":"dfae3d3b-4bd0-498f-ae0b-5cb5cf6d494f","disid":"5","name":"Аларский р-н","okato":"25123000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"82b6b7c8-82a4-44b2-8bc7-691373706b89","disid":"5","name":"Ангарск г","okato":"25405000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"5e96a64f-3bfa-4e0e-a502-9e94855cc104","disid":"5","name":"Ангарский р-н","okato":"25203000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"e42d2d68-3b0c-46ab-94bd-52d1dbeaef56","disid":"5","name":"Балаганский р-н","okato":"25201000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"1c0af271-ffea-4c16-bb49-1a1490cf9b69","disid":"5","name":"Баяндаевский р-н","okato":"25125000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"b899b36d-32b5-4bac-8955-943ca9c2ee2e","disid":"5","name":"Бодайбинский р-н","okato":"25202000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"8ace6ae4-7a35-494a-bfbd-9a743a929c39","disid":"5","name":"Бодайбо г","okato":"25410000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"faf30ee7-b3dc-44d5-a6ca-a6e98f93aaff","disid":"5","name":"Боханский р-н","okato":"25126000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"bdf6b629-b33e-4cfa-b4b2-7f693e1d821c","disid":"5","name":"Братск г","okato":"25414000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"c6c93ebf-f620-43ba-942b-e68e88d9eac1","disid":"5","name":"Братский р-н","okato":"25204000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"71b12e79-c6db-4827-9e35-2a775393282d","disid":"5","name":"Жигаловский р-н","okato":"25206000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"d03ef45a-3d8e-4ab3-886d-0ecdf024cc42","disid":"5","name":"Заларинский р-н","okato":"25208000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"7c3452ac-3953-4b78-a80c-64ec839620a6","disid":"5","name":"Зима г","okato":"25420000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"8c3e3cc9-31b2-4fc0-b929-06111ec504e3","disid":"5","name":"Зиминский р-н","okato":"25210000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"8eeed222-72e7-47c3-ab3a-9a553c31cf72","disid":"5","name":"Иркутск г","okato":"25401000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"664ba699-50ac-4a8b-999f-f8943da692ef","disid":"5","name":"Иркутск-45 г","okato":"25401370000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"08f4c119-098d-4098-a700-6caa9d027bb5","disid":"5","name":"Иркутский р-н","okato":"25212000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"6034bdc9-fbcd-40e8-8924-9dbd4c68ace7","disid":"5","name":"Казачинско-Ленский р-н","okato":"25214000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"ca3a2b75-f219-4b8e-b4b2-c59a35f881f0","disid":"5","name":"Катангский р-н","okato":"25216000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"605bcea9-4bec-4524-a00d-d27daa4fed4d","disid":"5","name":"Качугский р-н","okato":"25218000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"38b5ffbe-2fbd-4e27-99c0-4d0f1a5bdd30","disid":"5","name":"Киренский р-н","okato":"25220000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"48c3b10c-b7b3-40e7-93a8-722b6627c93a","disid":"5","name":"Куйтунский р-н","okato":"25222000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"5012239d-9d92-4343-9072-7c42c91dc262","disid":"5","name":"Мамско-Чуйский р-н","okato":"25224000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"fa2078e9-d61f-4f61-981f-38efe693367f","disid":"5","name":"Нижнеилимский р-н","okato":"25226000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"5d596a21-da89-4820-91ef-6ce3940a0c9f","disid":"5","name":"Нижнеудинск г","okato":"25424000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"8228d4e9-086a-498d-b041-18266dfc0a8a","disid":"5","name":"Нижнеудинский р-н","okato":"25228000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"6344ccf1-5bd4-4681-97ac-df9ca24cf925","disid":"5","name":"Нукутский р-н","okato":"25132000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"1d591587-7f01-4374-a485-dc0690b300a7","disid":"5","name":"Ольхонский р-н","okato":"25230000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"76b8f012-6efd-45b3-bd2f-01162f34f286","disid":"5","name":"Осинский р-н","okato":"25133000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"c21b5e04-ce0f-4f98-b0ac-0ceabc531212","disid":"5","name":"Саянск г","okato":"25426000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"17e498bd-5f9e-4221-8998-5fa24a35ed2e","disid":"5","name":"Свирск г","okato":"25445505000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"dddfffa9-c02c-48c5-b0e4-1871e61b5f45","disid":"5","name":"Слюдянский р-н","okato":"25234000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"945ac8e1-b529-4cec-afda-f92c6a6b0f70","disid":"5","name":"Тайшет г","okato":"25428000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"2e2f1779-a963-4fe8-a859-05922a9ab2cb","disid":"5","name":"Тайшетский р-н","okato":"25236000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"869c2c69-e8cd-43ae-9596-e0be50c0fcfe","disid":"5","name":"Тулун г","okato":"25432000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"58799a39-be9c-4f85-a6b8-031f109c616a","disid":"5","name":"Тулунский р-н","okato":"25238000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"ac680034-f7da-4bd8-8374-a5c97aa09516","disid":"5","name":"Усолье-Сибирское г","okato":"25436000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"3713d657-6ba0-40af-839d-5cfcd82890c4","disid":"5","name":"Усольский р-н","okato":"25240000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"78d11295-77b5-4ac4-b128-582e2989c0a5","disid":"5","name":"Усть-Илимск г","okato":"25438000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"02ea46f4-7242-4b27-aa70-99e33da15dda","disid":"5","name":"Усть-Илимский р-н","okato":"25242000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"cfb0a55a-3314-42bf-b3d8-5ed5368abdd6","disid":"5","name":"Усть-Кут г","okato":"25440000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"369b82c6-838f-4e32-aa0b-294233ec44d0","disid":"5","name":"Усть-Кутский р-н","okato":"25244000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"eeda03fb-75ce-4d51-8bd4-c0d1e8a3c2f1","disid":"5","name":"Усть-Ордынский АО","okato":"25100000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"e75a318a-db87-4152-9630-08b8c9139919","disid":"5","name":"Усть-Удинский р-н","okato":"25246000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"f05b68c4-f1c7-4c3d-b557-f1f44a57b85f","disid":"5","name":"Черемхово г","okato":"25445000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"2aa760b7-10b8-48b4-9dbe-c83ed794d3f9","disid":"5","name":"Черемховский р-н","okato":"25248000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"06d78c49-448f-4ae0-8ae7-2e07c38f89c7","disid":"5","name":"Чунский р-н","okato":"25250000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"c727ac3a-e05c-4b81-b8e1-9b1003c28595","disid":"5","name":"Шелехов г","okato":"25450000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"d53f2911-8879-46a3-a24f-cdee3015b1f6","disid":"5","name":"Шелеховский р-н","okato":"25255000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"852adb0e-8bf5-44d5-8c1b-88d15427c10c","disid":"5","name":"Эхирит-Булагатский р-н","okato":"25137000000","parentguid":"6466c988-7ce3-45e5-8b97-90ae16cb1249","regioncode":"38"},{"aoguid":"8a5314a4-903e-475c-a4db-8f03db3b793f","disid":"5","name":"Анжеро-Судженск г","okato":"32404000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"1346744e-8a64-4712-8939-bb84a1692874","disid":"5","name":"Белово г","okato":"32407000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"dea88af2-7d5f-4222-9f4f-40a92fe01927","disid":"5","name":"Беловский р-н","okato":"32201000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"ef6bac92-b712-42ba-942b-515b36b9a32c","disid":"5","name":"Березовский г","okato":"32410000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"c3485ea0-a5de-4c9c-a903-738043c65ad2","disid":"5","name":"Гурьевский р-н","okato":"32202000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"f04457f3-36cb-4460-956d-4300fdc91209","disid":"5","name":"Ижморский р-н","okato":"32204000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"5000e677-7d3c-4eec-b01d-f3f192abbd41","disid":"5","name":"Калтан г","okato":"32415000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"94bb19a3-c1fa-410b-8651-ac1bf7c050cd","disid":"5","name":"Кемерово г","okato":"32401000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"08ee43f1-dd7d-4ad5-b5db-fe2729ad62bf","disid":"5","name":"Кемеровский р-н","okato":"32207000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"36122f01-1666-42e0-9c65-937787e8ca45","disid":"5","name":"Киселевск г","okato":"32416000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"e175844f-fb7c-4d78-a0d1-218e8a0d43d1","disid":"5","name":"Крапивинский р-н","okato":"32210000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"a89fbd15-cb6d-43f0-9f80-c9b4eace3e2a","disid":"5","name":"Краснобродский пгт","okato":"32459000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"cf600ae8-e376-42ae-bf7c-5aa1875dcd28","disid":"5","name":"Ленинск-Кузнецкий г","okato":"32419000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"aeb5b1c5-8074-4e65-9c81-b407e8926d2a","disid":"5","name":"Ленинск-Кузнецкий р-н","okato":"32213000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"0480e01e-4ec7-42be-a5f7-515c521473ca","disid":"5","name":"Мариинский р-н","okato":"32216000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"c6a7e590-04b4-4a01-85fc-b61b63711bba","disid":"5","name":"Междуреченск г","okato":"32425000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"070a8e7b-038f-48c8-9eed-16a6c03ab899","disid":"5","name":"Мыски г","okato":"32428000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"b28b6f6f-1435-444e-95a6-68c499b0d27a","disid":"5","name":"Новокузнецк г","okato":"32431000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"c853545e-1787-46c4-9ad9-8232e8922189","disid":"5","name":"Новокузнецкий р-н","okato":"32219000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"1efff7c4-448a-48c5-b476-c803b4d36842","disid":"5","name":"Осинники г","okato":"32434000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"34ac1b24-f541-4279-abfb-466f80ed1f7b","disid":"5","name":"Полысаево г","okato":"32435000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"2d8b9d01-1c4f-4987-8a0b-1eb5080c1f38","disid":"5","name":"Прокопьевск г","okato":"32437000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"365075f4-6c74-4ba5-93a8-9db1ed6d7a59","disid":"5","name":"Прокопьевский р-н","okato":"32222800000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"71c6385b-50c5-4a7a-b3be-cad09cd9596e","disid":"5","name":"Промышленновский р-н","okato":"32225000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"4da6f430-f531-42f5-9176-1f6cf7ba6367","disid":"5","name":"Тайга г","okato":"32440000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"f017116d-99e7-4af7-8932-7c4a8bf64e1c","disid":"5","name":"Таштагольский р-н","okato":"32227000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"de7df13c-a96b-42d9-87d7-39ed6f5227d3","disid":"5","name":"Тисульский р-н","okato":"32228000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"50229ef5-a9db-4fac-8a43-026f5aa3bf72","disid":"5","name":"Топкинский р-н","okato":"32231000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"312ea2c7-07dd-4fe7-bb03-e33c7911fff3","disid":"5","name":"Тяжинский р-н","okato":"32234000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"7e77a902-4197-49a2-bdf7-31a74c1a4604","disid":"5","name":"Чебулинский р-н","okato":"32237000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"988289f5-d6d0-40d5-a483-55983e11c033","disid":"5","name":"Юрга г","okato":"32449000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"4b44796a-19a4-41fd-82be-6bec300df802","disid":"5","name":"Юргинский р-н","okato":"32240000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"b76d01fb-fda6-4a5b-af52-a42b2325111a","disid":"5","name":"Яйский р-н","okato":"32243000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"bddf023f-64dd-4da2-9e5c-b8d0a60e8396","disid":"5","name":"Яшкинский р-н","okato":"32246000000","parentguid":"393aeccb-89ef-4a7e-ae42-08d5cebc2e30","regioncode":"42"},{"aoguid":"6a33bcb0-9cfc-4cd6-be72-ca6b8cd079b9","disid":"5","name":"Абанский р-н","okato":"04201000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"c3689d32-dea5-49c8-b69b-b8d2daa1d36b","disid":"5","name":"Ачинск г","okato":"04403000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"e89b12e1-ebdd-4c50-b121-f7bdf95c2de4","disid":"5","name":"Ачинский р-н","okato":"04203000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"a33fb615-695f-473b-ac2e-4edd048312db","disid":"5","name":"Байкитский р-н","okato":"04143000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"625497d3-22de-4390-b4b4-2febfbfc15ce","disid":"5","name":"Балахтинский р-н","okato":"04204000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"40302939-ba4b-419c-a0f9-df464ea8138e","disid":"5","name":"Березовский р-н","okato":"04205000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"a61f85ec-2d90-407d-a67a-a33e2675c837","disid":"5","name":"Бирилюсский р-н","okato":"04206000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"cb56cf76-4a34-428d-8244-a802414d5fac","disid":"5","name":"Боготол г","okato":"04406000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"bf94bb1b-5000-4383-9214-2c8e4388a367","disid":"5","name":"Боготольский р-н","okato":"04208000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"2680d9c8-1b74-4d8e-b02a-7a98f7783fe9","disid":"5","name":"Богучанский р-н","okato":"04209000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"89c98c05-3349-4300-93de-30a364800409","disid":"5","name":"Большемуртинский р-н","okato":"04210000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"025c8573-549f-4ed3-a803-7510f7181eee","disid":"5","name":"Большеулуйский р-н","okato":"04211000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"78d7587f-ef26-48dc-81c6-d3ff445c9c8b","disid":"5","name":"Бородино г","okato":"04407000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"14bd88d5-8d50-479b-9e06-d9b3df76da70","disid":"5","name":"Дзержинский р-н","okato":"04213000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"76cc6918-6b7c-42b4-80da-4635d97d0da1","disid":"5","name":"Дивногорск г","okato":"04409000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"637f160e-574f-437e-9aff-9b11e0ab177b","disid":"5","name":"Емельяновский р-н","okato":"04214000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"6eb21d40-5098-49bc-8b08-ac1a2805d22b","disid":"5","name":"Енисейск г","okato":"04412000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"8633e938-7ffb-4f39-8a17-7f36fd7a7928","disid":"5","name":"Енисейский р-н","okato":"04215000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"39c3637f-9639-4a91-a3c2-a563684adab4","disid":"5","name":"Ермаковский р-н","okato":"04216000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"e532b3c3-d300-4585-ada6-40e7900c2abf","disid":"5","name":"Железногорск г","okato":"04535000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"719b789d-2476-430a-89cd-3fedc643d821","disid":"5","name":"Заозерный г","okato":"04247501000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"38f208d6-6f29-4d30-b826-b42e8beecc67","disid":"5","name":"Зеленогорск г","okato":"04537000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"86bbbbfa-0447-49d9-9495-429c03241b4d","disid":"5","name":"Идринский р-н","okato":"04217000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"129aa2c0-3c4f-4f8e-ae2d-eb9e766ef19b","disid":"5","name":"Иланский р-н","okato":"04218000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"f76df748-198f-42c4-9be4-a60641f15591","disid":"5","name":"Илимпийский р-н","okato":"04146000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"87824e67-a28d-4bf9-acbd-8b1a540759d4","disid":"5","name":"Ирбейский р-н","okato":"04219000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"2df39082-2e06-48bb-b3d0-e867f269b6bf","disid":"5","name":"Казачинский р-н","okato":"04220000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"f601c59f-db06-4aa2-9bc9-25eb33bc3ef4","disid":"5","name":"Кайеркан г","okato":"04429000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"75917770-c4cb-44d8-afcc-8a6d395c3bc2","disid":"5","name":"Канск г","okato":"04420000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"bcd7f952-5699-4db9-b63e-ed235ac7fbdb","disid":"5","name":"Канский р-н","okato":"04221000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"7f8d46ca-dd6f-4940-a551-6ce7391db1ae","disid":"5","name":"Каратузский р-н","okato":"04222000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"af5a5735-c2ee-47d7-a203-1352f8c17ff8","disid":"5","name":"Кедровый п","okato":"04214553000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"99b88b4e-78af-4860-a9d5-d505da2aa9c5","disid":"5","name":"Кежемский р-н","okato":"04224000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"0e570c2f-8db1-4e3a-b898-0e88566d4e02","disid":"5","name":"Козульский р-н","okato":"04226000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"ca505463-b594-4933-a194-9a6b5fba2a2a","disid":"5","name":"Краснотуранский р-н","okato":"04228000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"9b968c73-f4d4-4012-8da8-3dacd4d4c1bd","disid":"5","name":"Красноярск г","okato":"04401000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"a4cc0a3b-1fe2-4423-acdc-1eb8a5d21c36","disid":"5","name":"Курагинский р-н","okato":"04230000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"2ddd48d6-e95b-4972-a34e-8586ed507763","disid":"5","name":"Лесосибирск г","okato":"04422000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"4f36f859-e6c8-46be-b15f-48014d6876b9","disid":"5","name":"Манский р-н","okato":"04231000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"5cfaf0c0-8f59-4321-9a5b-4b1c51b3779f","disid":"5","name":"Минусинск г","okato":"04423000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"1efadec1-72da-446d-bcae-576000756612","disid":"5","name":"Минусинский р-н","okato":"04233000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"5b8d94ed-4ef8-41cd-bf5f-f4d4bd3049b8","disid":"5","name":"Мотыгинский р-н","okato":"04235000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"ab0a1754-5ba1-48bb-8960-475c7fbc9feb","disid":"5","name":"Назарово г","okato":"04426000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"f64c218e-07cf-4cc7-af4e-389f99b444b4","disid":"5","name":"Назаровский р-н","okato":"04237000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"a641d631-2d5a-41bf-807f-f67f19873357","disid":"5","name":"Нижнеингашский р-н","okato":"04239000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"0279f552-85df-40e8-a703-1d2d99a72f35","disid":"5","name":"Новоселовский р-н","okato":"04241000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"d301a980-4a45-4066-9a20-4e783856a562","disid":"5","name":"Норильск г","okato":"04429000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"71bdc088-53f4-40a7-92dc-004499965dfa","disid":"5","name":"Партизанский р-н","okato":"04243000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"dbfbadbb-c14f-4c01-9825-0ce99986fa53","disid":"5","name":"Пировский р-н","okato":"04245000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"3d4c8618-9e22-4838-8f89-80da6851da90","disid":"5","name":"Рыбинский р-н","okato":"04247000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"e6aa8bed-c6fb-4469-ae86-75433903dd05","disid":"5","name":"Саянский р-н","okato":"04248000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"04892c4c-059e-4d29-aa23-14f0691835a9","disid":"5","name":"Северо-Енисейский р-н","okato":"04249000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"145152c6-d2a1-4de4-bbe3-bf73f70898f1","disid":"5","name":"Солнечный п","okato":"04580000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"a139c8ba-831e-4ee5-87a9-1eead6984288","disid":"5","name":"Сосновоборск г","okato":"04433000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"fe5e453e-5914-4d4b-b874-519473fea79d","disid":"5","name":"Сухобузимский р-н","okato":"04251000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"10b4253f-e96e-4134-9f82-e9691e719865","disid":"5","name":"Таймырский Долгано-Ненецкий р-н","okato":"04100000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"75c8a823-4432-4f70-a92d-f12ad2e131f3","disid":"5","name":"Талнах г","okato":"04429515000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"ef06d588-179d-434d-ae61-90713a77d6ae","disid":"5","name":"Тасеевский р-н","okato":"04252000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"fd173ecc-239a-4e3c-b0dc-25456ea5d4f3","disid":"5","name":"Тунгусско-Чунский р-н","okato":"04149000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"3c64d957-bba5-40f9-86bd-995f56c976f0","disid":"5","name":"Туруханский р-н","okato":"04254000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"991ff2ab-056d-4d17-a16b-2246f9fcbcda","disid":"5","name":"Тюхтетский р-н","okato":"04255000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"0fc93756-86fc-48d2-89e3-e81b44dd7e8e","disid":"5","name":"Ужурский р-н","okato":"04256000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"431049b3-4d29-4f5d-84d8-44cebc96ff44","disid":"5","name":"Уярский р-н","okato":"04257000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"e21e9175-86f9-4e24-b129-abdee0f956dc","disid":"5","name":"Шарыпово г","okato":"04440000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"b2c635f1-e3f8-45a9-ae06-4572e0340541","disid":"5","name":"Шарыповский р-н","okato":"04258000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"71c98acc-51c3-448a-b039-f587f2201f0c","disid":"5","name":"Шушенский р-н","okato":"04259000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"2e353e52-4ae4-4cee-a45b-af7a52e1aa49","disid":"5","name":"Эвенкийский р-н","okato":"04250000000","parentguid":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","regioncode":"24"},{"aoguid":"d0133369-2bb2-4497-992b-4448dbd7aa69","disid":"5","name":"Баганский р-н","okato":"50203000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"0133a54d-617a-4682-8885-e22c85588be8","disid":"5","name":"Барабинск г","okato":"50405000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"e69722e4-2e76-463a-a865-b2d1a0c6acd8","disid":"5","name":"Барабинский р-н","okato":"50204000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"fd0191f4-4687-42d9-be64-4ebc7824bd08","disid":"5","name":"Бердск г","okato":"50408000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"fc206783-5449-43ca-a876-57e5de9c556b","disid":"5","name":"Болотнинский р-н","okato":"50206000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"5449c5a3-97a0-4127-aae9-902c19fb3375","disid":"5","name":"Венгеровский р-н","okato":"50208000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"edf28806-6625-420e-8eb6-c9b3ca36d321","disid":"5","name":"Доволенский р-н","okato":"50210000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"dc79992b-1b9f-4daa-9176-7bf865e79b48","disid":"5","name":"Здвинский р-н","okato":"50213000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"6965fcac-b7e4-4cab-ab35-a591ed65edf5","disid":"5","name":"Искитим г","okato":"50412000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"9e297e5e-63de-47da-a2e0-0049ef8ef37b","disid":"5","name":"Искитимский р-н","okato":"50215000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"649d1374-867a-4ac5-bc00-fb9000eb7209","disid":"5","name":"Карасукский р-н","okato":"50217000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"87b7f4d5-623f-48aa-9f0e-dde02a7dd8c8","disid":"5","name":"Каргатский р-н","okato":"50219000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"e158c1ab-be77-4ca9-9895-5ac13ded736c","disid":"5","name":"Колыванский р-н","okato":"50221000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"a0d8802b-5dbb-40ab-87b4-e72d3dc15808","disid":"5","name":"Коченевский р-н","okato":"50223000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"6ccf0bab-b523-4e6c-9026-374609a97d9b","disid":"5","name":"Кочковский р-н","okato":"50225000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"2cec4061-dff8-47e9-981e-8ce69d103d5e","disid":"5","name":"Краснозерский р-н","okato":"50227000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"1b70e712-092e-4c45-9984-af3a2c7cfdd7","disid":"5","name":"Куйбышев г","okato":"50415000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"d25cd31a-74d9-4321-9af0-f73b352ee34c","disid":"5","name":"Куйбышевский р-н","okato":"50230000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"13a122ea-2721-4677-8b9a-aaa6d8c635b4","disid":"5","name":"Купинский р-н","okato":"50232000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"345670be-d56c-4a03-afdc-230f3218bf37","disid":"5","name":"Кыштовский р-н","okato":"50234000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"1231952a-97c1-41be-9833-46e24ab63bd3","disid":"5","name":"Маслянинский р-н","okato":"50236000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"6c663cc6-2761-4102-927a-8252c5dc4fdc","disid":"5","name":"Мошковский р-н","okato":"50238000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"8dea00e3-9aab-4d8e-887c-ef2aaa546456","disid":"5","name":"Новосибирск г","okato":"50401000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"16932400-c8e3-4a17-8c57-d96f30a183ce","disid":"5","name":"Новосибирский р-н","okato":"50240000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"8571e389-8c43-4c36-afae-b532d078c928","disid":"5","name":"Обь г","okato":"50417000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"69c26639-f4b8-4db4-8564-6cc1f2c1a0bb","disid":"5","name":"Ордынский р-н","okato":"50242000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"8fcd779a-deb1-4d86-8333-f2fe778f2a64","disid":"5","name":"Северный р-н","okato":"50244000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"32e6db58-4ed4-4ecc-9e29-d3ad03f93ad5","disid":"5","name":"Сузунский р-н","okato":"50248000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"17f3169d-63c5-4c04-9395-298333f7e0f4","disid":"5","name":"Татарск г","okato":"50418000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"fd31a50b-9717-4c77-99fd-d58a27a9ebe4","disid":"5","name":"Татарский р-н","okato":"50250000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"4d82321a-773a-46f3-bfea-a4d9c4e19026","disid":"5","name":"Тогучинский р-н","okato":"50252000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"ae9d91d8-69df-4c68-a1a8-5f2072cee500","disid":"5","name":"Убинский р-н","okato":"50254000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"1f9bec1f-981f-4fd5-a1ba-b4049200f27f","disid":"5","name":"Усть-Таркский р-н","okato":"50255000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"a35263cf-b1c5-4cc8-a0db-1b30c6fe79c0","disid":"5","name":"Чановский р-н","okato":"50256000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"bc3a422e-c7a8-4802-8241-57b2c890eecc","disid":"5","name":"Черепановский р-н","okato":"50257000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"e1d8588c-f57a-485f-9bc1-a67284e1800b","disid":"5","name":"Чистоозерный р-н","okato":"50258000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"47b2d10d-e034-47b0-983b-672b6e655baa","disid":"5","name":"Чулымский р-н","okato":"50259000000","parentguid":"1ac46b49-3209-4814-b7bf-a509ea1aecd9","regioncode":"54"},{"aoguid":"b1f99a59-4f88-48aa-a900-07254ecc5846","disid":"5","name":"Азовский немецкий национальный р-н","okato":"52201000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"1cae5789-878e-49e5-89c8-6b6c5ad05001","disid":"5","name":"Большереченский р-н","okato":"52203000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"e066d16c-0493-4cd2-9f2c-19664dd8a26d","disid":"5","name":"Большеуковский р-н","okato":"52206000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"975460c7-82f8-40b4-b5f3-112f59bbae3b","disid":"5","name":"Горьковский р-н","okato":"52209000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"89b0dec6-cba4-441f-93f5-2e5e8d51eda6","disid":"5","name":"Знаменский р-н","okato":"52212000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"b075f7a1-8632-4500-9324-b0c7e083e178","disid":"5","name":"Исилькульский р-н","okato":"52215000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"2ddf7732-9104-4296-9247-49c03449f75c","disid":"5","name":"Калачинский р-н","okato":"52218000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"66b11702-42cb-445f-b8f4-d500fb7237ce","disid":"5","name":"Колосовский р-н","okato":"52221000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"23517970-bff7-4364-8f9c-3e6a66874634","disid":"5","name":"Кормиловский р-н","okato":"52223000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"0f441b8c-ac52-44b8-8de2-246eb3120630","disid":"5","name":"Крутинский р-н","okato":"52226000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"93903388-4d74-4fd8-87af-3e0f0de6e227","disid":"5","name":"Любинский р-н","okato":"52229000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"2abb0a8c-d017-4e39-b401-59eaaa5aa7dd","disid":"5","name":"Марьяновский р-н","okato":"52230000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"c3f7b5d0-faef-4732-bd75-ebccb28bd995","disid":"5","name":"Москаленский р-н","okato":"52232000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"c8278271-6040-47d2-8389-447af59b643e","disid":"5","name":"Муромцевский р-н","okato":"52234000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"c85a4878-3346-4a9a-862e-26713dece681","disid":"5","name":"Называевский р-н","okato":"52236000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"1e52a59d-2377-4064-aabf-db4bc16dadfc","disid":"5","name":"Нижнеомский р-н","okato":"52239000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"1674145c-bab1-4cde-9975-eee95c4d8a7a","disid":"5","name":"Нововаршавский р-н","okato":"52241000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"5eb4fe7b-5566-4745-b4f0-7caea3852f2e","disid":"5","name":"Одесский р-н","okato":"52242000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"ff4b2b5f-cfb2-4e79-9f42-0504b6eb04ad","disid":"5","name":"Оконешниковский р-н","okato":"52243000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"140e31da-27bf-4519-9ea0-6185d681d44e","disid":"5","name":"Омск г","okato":"52401000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"41f593e6-7b2c-4e07-9802-01f9c9ce2469","disid":"5","name":"Омский р-н","okato":"52244000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"a77918ae-72fd-4dc7-9da8-c9509c0e465b","disid":"5","name":"Павлоградский р-н","okato":"52246000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"4210e3d1-e393-45e3-850a-1b27bce3337d","disid":"5","name":"Полтавский р-н","okato":"52248000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"9381bbe2-0026-4a86-b159-f86f7458c461","disid":"5","name":"Русско-Полянский р-н","okato":"52250000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"e10878bc-8031-4840-8358-f38a396c763d","disid":"5","name":"Саргатский р-н","okato":"52251000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"b1310905-c3e3-42d6-8e04-c705ec504839","disid":"5","name":"Седельниковский р-н","okato":"52252000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"99a42415-5474-499b-9ab6-95f039f1c80c","disid":"5","name":"Таврический р-н","okato":"52253000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"777ed55b-8c35-4b51-8907-85107999901e","disid":"5","name":"Тарский р-н","okato":"52254000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"028f2654-3269-4f31-926a-1401497bd8ce","disid":"5","name":"Тевризский р-н","okato":"52255000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"16a42ce3-8a21-4869-b31d-8ba5ee496d9e","disid":"5","name":"Тюкалинский р-н","okato":"52256000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"d6b23aa8-ce8f-472a-92eb-51c9ab042686","disid":"5","name":"Усть-Ишимский р-н","okato":"52257000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"5fd35313-9a47-41d7-9e7b-3f1caa022e1f","disid":"5","name":"Черлакский р-н","okato":"52258000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"7c80c495-2c57-46f3-8d48-3697a1715d3f","disid":"5","name":"Шербакульский р-н","okato":"52259000000","parentguid":"05426864-466d-41a3-82c4-11e61cdc98ce","regioncode":"55"},{"aoguid":"e838b1c0-e80e-4080-85c6-a4fffcc1b16d","disid":"5","name":"Александровский р-н","okato":"69204000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"8f33c1f9-f707-42f6-9b86-5540c6df2413","disid":"5","name":"Асиновский р-н","okato":"69208000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"0a36d48f-5103-4f8e-a702-44c7bc050cd8","disid":"5","name":"Бакчарский р-н","okato":"69212000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"3e3b47e1-6c93-40e2-b327-d73b0c5b400b","disid":"5","name":"Верхнекетский р-н","okato":"69216000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"9e3d4605-701e-4733-b6ed-1d03a2b5d4fe","disid":"5","name":"Зырянский р-н","okato":"69220000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"01801005-03e4-4349-971e-1f546f09a8d9","disid":"5","name":"Каргасокский р-н","okato":"69224000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"59cb7e41-b681-40c8-97f2-13374a397867","disid":"5","name":"Кедровый г","okato":"69407000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"639aaff9-48a9-4c05-8c06-94823c6113b3","disid":"5","name":"Кожевниковский р-н","okato":"69228000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"3b8d4f67-62c6-4b20-a49f-1352f5ff5840","disid":"5","name":"Колпашевский р-н","okato":"69232000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"eea14405-70df-413c-ac76-0db3dc15a6a3","disid":"5","name":"Кривошеинский р-н","okato":"69236000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"9469f2d0-b91b-47d8-8bfe-cc9d39c629f8","disid":"5","name":"Молчановский р-н","okato":"69240000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"68aa6a6d-4886-48ba-bcb0-58afd3f40540","disid":"5","name":"Парабельский р-н","okato":"69244000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"442ef1ca-ad05-4240-a598-25a492baca52","disid":"5","name":"Первомайский р-н","okato":"69248000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"53c22352-eb6f-4163-a4d1-385d64561d2f","disid":"5","name":"Северск г","okato":"69541000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"0a0fe1fc-8aab-4ff3-a2a3-971ee4fcd27f","disid":"5","name":"Стрежевой г","okato":"69410000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"7371dd8a-d2c4-4dcd-a854-79b3d33e97f3","disid":"5","name":"Тегульдетский р-н","okato":"69252000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"e3b0eae8-a4ce-4779-ae04-5c0797de66be","disid":"5","name":"Томск г","okato":"69401000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"3c033223-92b9-46a6-9b3c-e5bc7d178f79","disid":"5","name":"Томский р-н","okato":"69254000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"5b669af1-9d1c-4f97-b85a-b783e298e6e7","disid":"5","name":"Чаинский р-н","okato":"69256000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"c88c24c2-5b00-4202-90ea-97d6f50672dd","disid":"5","name":"Шегарский р-н","okato":"69258000000","parentguid":"889b1f3a-98aa-40fc-9d3d-0f41192758ab","regioncode":"70"},{"aoguid":"7e4932c1-2db8-4fee-9997-655d837e70e1","disid":"5","name":"Ак-Довурак г","okato":"93403000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"cadbde54-102f-476e-8e87-bd98c89840fe","disid":"5","name":"Бай-Тайгинский р-н","okato":"93205000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"12190a3b-65fd-43da-9052-19227800b151","disid":"5","name":"Барун-Хемчикский р-н","okato":"93210000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"841f351b-19a8-49a1-8667-5a8f826b4035","disid":"5","name":"Дзун-Хемчикский р-н","okato":"93215000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"3d60723d-afb7-410d-bdb9-5d7a4396e31b","disid":"5","name":"Каа-Хемский р-н","okato":"93220000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"8df8c56f-a46e-438f-a85b-a9b18ad4fc77","disid":"5","name":"Кызыл г","okato":"93401000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"d01d80d4-6023-4b48-81c1-b6636020c132","disid":"5","name":"Кызылский р-н","okato":"93222000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"95c936be-2aed-4c7f-96cd-849f80ca7273","disid":"5","name":"Монгун-Тайгинский р-н","okato":"93225000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"08b335d2-df5f-42e2-99d0-e84f38c38d5b","disid":"5","name":"Овюрский р-н","okato":"93230000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"7e7cf0c3-18f2-42c4-ba63-16bed7919247","disid":"5","name":"Пий-Хемский р-н","okato":"93235000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"646ea188-edc0-4b97-99ed-fd680200ba05","disid":"5","name":"Сут-Хольский р-н","okato":"93238000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"486fc2d7-4d2d-4cea-b858-92061a37555a","disid":"5","name":"Тандинский р-н","okato":"93240000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"8de7e4cb-2bc1-4dfe-a4f8-53861535fd85","disid":"5","name":"Тере-Хольский р-н","okato":"93243000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"310e2434-ae73-43d3-9595-291e1755d0e9","disid":"5","name":"Тес-Хемский р-н","okato":"93245000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"9f944992-8f1e-45ea-ab45-0fe9df7277df","disid":"5","name":"Тоджинский р-н","okato":"93250000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"75be2dee-7691-4052-9fb4-65394f700c14","disid":"5","name":"Улуг-Хемский р-н","okato":"93254000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"73efd399-13ba-4299-b96e-e508a1585770","disid":"5","name":"Чаа-Хольский р-н","okato":"93256000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"b03eaaa4-4bc5-4291-8830-5b8155eac772","disid":"5","name":"Чеди-Хольский р-н","okato":"93257000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"4abc80d1-b84a-4ae3-a5fb-65a116dcb9e8","disid":"5","name":"Эрзинский р-н","okato":"93258000000","parentguid":"026bc56f-3731-48e9-8245-655331f596c0","regioncode":"17"},{"aoguid":"a369b520-09b4-49b2-b28c-61c9146153e6","disid":"5","name":"Абаза г","okato":"95402000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"42a02e11-a337-4d50-8596-fc76dae7c62a","disid":"5","name":"Абакан г","okato":"95401000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"435653f2-3b93-4cbb-8059-c1f47cdd9044","disid":"5","name":"Алтайский р-н","okato":"95205000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"a17a80a6-3a1b-422b-a566-740dff475e5d","disid":"5","name":"Аскизский р-н","okato":"95208000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"f1723bdd-66a9-42a3-b6de-4be61acbb9b9","disid":"5","name":"Бейский р-н","okato":"95212000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"f18c4e62-1fbc-4b82-acd2-1e746ef01736","disid":"5","name":"Боградский р-н","okato":"95215000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"4c2fcece-23bf-413e-b05c-b5567f1456d9","disid":"5","name":"Орджоникидзевский р-н","okato":"95220000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"f89db729-bbfa-4d64-b8d5-ecafbec0733d","disid":"5","name":"Саяногорск г","okato":"95408000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"bf626532-9e6c-4365-801e-c1d297ab40f0","disid":"5","name":"Сорск г","okato":"95409000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"1b8abe7e-715e-46d8-8342-0f151ec00dda","disid":"5","name":"Таштыпский р-н","okato":"95225000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"0c97b2da-2011-4f2d-8944-54bb603eb93b","disid":"5","name":"Усть-Абаканский р-н","okato":"95230000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"2e3ec6d8-3835-4c57-9fbc-7e61b58a03a3","disid":"5","name":"Черногорск г","okato":"95415000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"ea7da4c1-25b1-41d7-8fe2-cbcc69928055","disid":"5","name":"Ширинский р-н","okato":"95235000000","parentguid":"8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7","regioncode":"19"},{"aoguid":"fe5dbfb2-9d16-46d4-b164-601c77eb1666","disid":"6","name":"Альменевский р-н","okato":"37202000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"3d2b9311-b27c-43fb-946e-023e089297e6","disid":"6","name":"Белозерский р-н","okato":"37204000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"8288cec5-69e9-4835-9a70-451c89efeaf4","disid":"6","name":"Варгашинский р-н","okato":"37206000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"ca0b4dab-6128-479a-b5ab-8f92dacb8689","disid":"6","name":"Далматовский р-н","okato":"37208000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"be374eae-ca2f-4f4f-8684-d61dc878b9a3","disid":"6","name":"Звериноголовский р-н","okato":"37209000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"96c892cf-23dc-4ef7-ab81-284a7fc66670","disid":"6","name":"Каргапольский р-н","okato":"37210000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"750c7fd4-54c7-48e6-a3cd-c1a2a71b0693","disid":"6","name":"Катайский р-н","okato":"37212000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"b4ee11d9-870b-4e92-bfc0-ac8c47d23cb6","disid":"6","name":"Кетовский р-н","okato":"37214000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"3bbda77d-ba3f-4457-9d44-c440815cda89","disid":"6","name":"Курган г","okato":"37401000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"a9e47647-8ab0-4a2f-87c4-f6802339b500","disid":"6","name":"Куртамышский р-н","okato":"37216000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"b5f79de2-14ff-46e2-a78b-be99d0de7060","disid":"6","name":"Лебяжьевский р-н","okato":"37218000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"df48f898-787c-4477-b487-1edc197fe5c1","disid":"6","name":"Макушинский р-н","okato":"37220000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"a2c6afec-f29c-4630-b6ea-39d30a1d6f48","disid":"6","name":"Мишкинский р-н","okato":"37222000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"fa71bd0f-b975-49b6-af69-e99dfe90bd54","disid":"6","name":"Мокроусовский р-н","okato":"37224000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"38a6f819-3966-4f83-9dc4-96597f9a58c8","disid":"6","name":"Петуховский р-н","okato":"37226000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"3d9bb43f-eca8-489d-8019-8cc0ff425d75","disid":"6","name":"Половинский р-н","okato":"37228000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"8155e6a7-cbde-4406-a95d-f68bef95ec83","disid":"6","name":"Притобольный р-н","okato":"37230000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"f644f063-dfa1-4a01-841a-c2bab686d14c","disid":"6","name":"Сафакулевский р-н","okato":"37232000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"624d6e01-6562-4e5a-b3c4-26c83a01911b","disid":"6","name":"Целинный р-н","okato":"37234000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"a8199fe3-eec7-49fb-b575-a6f06920e93a","disid":"6","name":"Частоозерский р-н","okato":"37236000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"7870abeb-8b0f-4899-920b-3ab8ff6024c0","disid":"6","name":"Шадринск г","okato":"37405000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"64c774d5-5ffb-45b1-a9fc-0cd0bbf73c3b","disid":"6","name":"Шадринский р-н","okato":"37238000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"a0fd70d7-3a7c-4edd-b797-f037dfcac0ce","disid":"6","name":"Шатровский р-н","okato":"37240000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"60bc9999-225c-491c-8937-f534e29533c6","disid":"6","name":"Шумихинский р-н","okato":"37242000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"8399874d-f711-4ecd-b773-5ea24b3bf7f9","disid":"6","name":"Щучанский р-н","okato":"37244000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"719fb87e-1e6c-4381-9153-dbd209219cfe","disid":"6","name":"Юргамышский р-н","okato":"37246000000","parentguid":"4a3d970f-520e-46b9-b16c-50d4ca7535a8","regioncode":"45"},{"aoguid":"a4ab722e-453a-4aed-bb73-728a05e2e27f","disid":"6","name":"Алапаевск г","okato":"65403000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"8170e3ae-b1f3-492d-aeec-2a9733eff7c6","disid":"6","name":"Алапаевский р-н","okato":"65201000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"3c101200-191d-4381-ab26-da8089341514","disid":"6","name":"Артемовский р-н","okato":"65202000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"372a9695-deed-4a21-9a1b-051a1e3bdc15","disid":"6","name":"Артинский р-н","okato":"65203000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"f5fb13f3-c7d2-4075-821b-9cca03f1ae12","disid":"6","name":"Асбест г","okato":"65409000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"5bc002fd-5a23-4f50-b562-febf9b974d94","disid":"6","name":"Ачитский р-н","okato":"65204000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"68dc362b-ac30-4e3f-82a2-99a5f1d24eeb","disid":"6","name":"Байкаловский р-н","okato":"65208000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"ef800214-0c77-403f-8d4e-fc3972bbb7ca","disid":"6","name":"Белоярский р-н","okato":"65209000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"adf5df2b-2c2e-45a9-b971-05550353cf43","disid":"6","name":"Березовский г","okato":"65412000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"51ddb8ea-dbd6-4674-92d0-aeebdb38059f","disid":"6","name":"Богдановичский р-н","okato":"65210000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"5c6ffccd-fa21-4318-8b63-7225fcddbe57","disid":"6","name":"Верхнесалдинский р-н","okato":"65211000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"e76b32c8-a93e-4d3f-bae2-282dc900954a","disid":"6","name":"Верхний Тагил г","okato":"65453503000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"061cd8e0-b7bd-4a31-944e-a6e3da93631d","disid":"6","name":"Верхняя Пышма г","okato":"65420000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"4ffc4d96-d8fb-49c8-9e36-0989968d06e5","disid":"6","name":"Верхняя Тура г","okato":"65470503000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"60cd03bb-4355-41b0-9faa-f4cbe1ef17df","disid":"6","name":"Верхотурский р-н","okato":"65212000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"68edcd30-0b57-4699-a196-343b80d23223","disid":"6","name":"Волчанск г","okato":"65445503000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"7291cac3-6a19-41ba-955c-921f1fa6b55b","disid":"6","name":"Гаринский р-н","okato":"65215000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"079bd9a9-7a84-4e6e-8a69-e73433e51e41","disid":"6","name":"Дегтярск г","okato":"65484503000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"2763c110-cb8b-416a-9dac-ad28a55b4402","disid":"6","name":"Екатеринбург г","okato":"65401000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"8018ae42-55a5-4297-a126-b482aee0b634","disid":"6","name":"Заречный г","okato":"65426000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"c32d06c4-cca2-42f4-a3b3-b2fee48b9585","disid":"6","name":"Ивдель г","okato":"65428000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"4a90bd67-7682-4012-a0c5-09865b9d08a0","disid":"6","name":"Ирбит г","okato":"65432000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"7dcd1b8d-698b-441d-9807-ab1ebcd5ef4f","disid":"6","name":"Ирбитский р-н","okato":"65218000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"ecc16584-9814-44d7-a0f3-c79601caa734","disid":"6","name":"Каменск-Уральский г","okato":"65436000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"c28ebfa2-6ced-4c85-8cd7-734a4d5262c5","disid":"6","name":"Каменский р-н","okato":"65222000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"ac2abd40-bb9b-41df-abd8-a319afd88f00","disid":"6","name":"Камышлов г","okato":"65440000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"98abd7d8-257f-4cc8-b61f-7e66e101674a","disid":"6","name":"Камышловский р-н","okato":"65223000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"a695f868-8b1d-412a-b011-3e1eb265aad5","disid":"6","name":"Карпинск г","okato":"65445000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"c6d37528-b353-43eb-81d8-64a4fd1612f5","disid":"6","name":"Качканар г","okato":"65448000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"dd3f07bd-0109-47e0-8a0a-64928436beed","disid":"6","name":"Кировград г","okato":"65453000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"59b1c816-7f98-4707-b5e2-c6193fff8923","disid":"6","name":"Краснотурьинск г","okato":"65456000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"3c6a6e0c-29d7-409b-9d2a-135994cf5e97","disid":"6","name":"Красноуральск г","okato":"65460000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"ddb355ab-7c2a-4f86-b388-6afbd81a7e73","disid":"6","name":"Красноуфимск г","okato":"65468000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"b5d85fab-f06f-474c-a3e8-819dc0b0c66b","disid":"6","name":"Красноуфимский р-н","okato":"65224000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"c2b7db39-9ef3-4d9d-a109-a3870b583d45","disid":"6","name":"Кушва г","okato":"65470000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"26c6f82c-8503-4c38-9009-52815c8f4a9b","disid":"6","name":"Лесной г","okato":"65542000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"c8702273-cf5d-450b-b460-f849352d609d","disid":"6","name":"Невьянский р-н","okato":"65227000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"9bd8cec0-8e87-4c35-ad65-c8120461f1e0","disid":"6","name":"Нижнесергинский р-н","okato":"65228000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"cc73d6af-6e2e-4a1f-be8e-682c289b0b57","disid":"6","name":"Нижний Тагил г","okato":"65476000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"b4326e03-bab5-4188-a8c1-97d69858c514","disid":"6","name":"Нижняя Салда г","okato":"65477000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"5591594f-f2a4-49b0-a3bc-22307f192c4e","disid":"6","name":"Нижняя Тура г","okato":"65478000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"9596ec38-b592-4cfb-83d8-e8f6fe6a85c7","disid":"6","name":"Новолялинский р-н","okato":"65229000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"22fbcef5-5cab-4ef2-9cb5-fddd1479bc8e","disid":"6","name":"Новоуральск г","okato":"65540000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"45bad628-61b7-4445-b62a-fa4c7bc71ccd","disid":"6","name":"Первоуральск г","okato":"65480000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"2a3b4b10-7035-4af5-9bbd-409c42b51eb7","disid":"6","name":"Полевской г","okato":"65482000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"498a36b2-3311-4cbe-993e-eb706d25f8bd","disid":"6","name":"Пригородный р-н","okato":"65232000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"93dd6b09-91d9-4cac-876f-3f64e50683b1","disid":"6","name":"Пышминский р-н","okato":"65233000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"b1a4b393-ac99-4447-a11d-c3b454fa3d8e","disid":"6","name":"Ревда г","okato":"65484000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"23a0e2a6-cf3b-4c12-bfcf-cadd97da487d","disid":"6","name":"Режевской р-н","okato":"65236000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"862dddf0-0479-4ffb-bc2c-ee83d598e855","disid":"6","name":"Североуральск г","okato":"65490000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"591f3e74-079f-42ff-a155-f01c9dc363ae","disid":"6","name":"Серов г","okato":"65492000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"83e7482d-9695-432f-96bb-fde971207e4d","disid":"6","name":"Серовский р-н","okato":"65238000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"c8644d7e-f101-4a26-9a10-0bb9068b5184","disid":"6","name":"Слободо-Туринский р-н","okato":"65239000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"7c470adb-7d3d-42a1-9190-8f3fd05f710d","disid":"6","name":"Среднеуральск г","okato":"65420505000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"b2c830e2-1185-490d-ab6c-5436a5ef2631","disid":"6","name":"Сухоложский р-н","okato":"65240000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"4f51e06b-3dd4-4948-bfce-c0dc7b09f504","disid":"6","name":"Сысертский р-н","okato":"65241000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"4d93b529-1ace-408b-9610-3a178947e5bd","disid":"6","name":"Таборинский р-н","okato":"65245000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"f913a3fa-f8b9-4a9f-80a5-de589236fa9d","disid":"6","name":"Тавдинский р-н","okato":"65248000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"6950470d-7da6-40ea-bc76-37910b7ae154","disid":"6","name":"Талицкий р-н","okato":"65249000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"674b197d-e017-46fe-9ce2-d8090474cf95","disid":"6","name":"Тугулымский р-н","okato":"65250000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"854cf4c3-db3e-4ba6-8cc9-adb860658711","disid":"6","name":"Туринский р-н","okato":"65254000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"a0ef8e3b-a213-488b-beb4-207c2add187f","disid":"6","name":"Шалинский р-н","okato":"65257000000","parentguid":"92b30014-4d52-4e2e-892d-928142b924bf","regioncode":"66"},{"aoguid":"3459628a-e8f0-436f-a141-dbfca20ab58e","disid":"6","name":"Абатский р-н","okato":"71203800000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"eecc6774-c52a-4c56-869b-522e94c39a1f","disid":"6","name":"Армизонский р-н","okato":"71205000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"b92c1873-02c9-4442-a53a-fb62f2e71d22","disid":"6","name":"Аромашевский р-н","okato":"71207000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"fe98702c-b35b-4905-81be-6078bb7c73b7","disid":"6","name":"Бердюжский р-н","okato":"71210000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"cf504ebb-218b-45e1-9e79-1e1dc3a6a080","disid":"6","name":"Вагайский р-н","okato":"71213000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"61bbef51-6ec7-45ee-8eba-7e917cab005c","disid":"6","name":"Викуловский р-н","okato":"71215000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"4af5a970-b80c-422e-bc42-406cbf579c85","disid":"6","name":"Голышмановский р-н","okato":"71218000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"d966f796-6fcb-4dfe-96f0-7e95fb098d25","disid":"6","name":"Заводоуковский р-н","okato":"71222000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"de3ac486-1416-48c3-a3fc-d6de55636a1e","disid":"6","name":"Исетский р-н","okato":"71224800000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"ad1c71ce-1121-44b0-899b-c87b8198be6e","disid":"6","name":"Ишимский р-н","okato":"71226000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"f6ecef11-8b4b-487e-a8de-77d88f06dc4b","disid":"6","name":"Казанский р-н","okato":"71230000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"98468b59-81ff-4e74-9f4d-916e85699766","disid":"6","name":"Нижнетавдинский р-н","okato":"71232000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"1cf1c0d5-279c-43c0-8ad6-c73c775fad54","disid":"6","name":"Омутинский р-н","okato":"71234000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"8f0d4285-f30c-405a-acb8-0ed7b6dcc12e","disid":"6","name":"Сладковский р-н","okato":"71236000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"59a4e5e7-c1e3-4eb3-91c2-fc96223823be","disid":"6","name":"Сорокинский р-н","okato":"71238000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"6d7c3e9e-8d6d-490a-a650-8257dbf5ec36","disid":"6","name":"Тобольск г","okato":"71410000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"eb634e42-3461-4eb2-9514-64e91308ea9b","disid":"6","name":"Тобольский р-н","okato":"71242000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"04e7dde6-8500-4c9f-8e4b-e770fbbed01a","disid":"6","name":"Тюменский р-н","okato":"71244000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"9ae64229-9f7b-4149-b27a-d1f6ec74b5ce","disid":"6","name":"Тюмень г","okato":"71401000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"53e1629b-c424-4b26-afd1-145f594d6a5a","disid":"6","name":"Уватский р-н","okato":"71248000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"2990ba30-54ac-4286-b77b-ede89cac27ef","disid":"6","name":"Упоровский р-н","okato":"71250000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"d76f6f46-83f1-436f-b50c-c85defbb72e0","disid":"6","name":"Юргинский р-н","okato":"71253000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"499389ff-31b0-453f-baec-e0b3588724b4","disid":"6","name":"Ялуторовский р-н","okato":"71256000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"348bbd3e-a03d-4a1e-88dd-716323dbb14d","disid":"6","name":"Ярковский р-н","okato":"71258000000","parentguid":"54049357-326d-4b8f-b224-3c6dc25d6dd3","regioncode":"72"},{"aoguid":"9ca18452-faef-4384-bd68-c75ea146c7e6","disid":"6","name":"Белоярский р-н","okato":"71111000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"db0b028c-2da0-4fb9-af00-6fed7a7644a0","disid":"6","name":"Белоярский г","okato":"71181000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"24afa530-5930-4641-8c9e-100ff76ed811","disid":"6","name":"Березовский р-н","okato":"71112000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"5a08166f-cfaa-4e95-8233-f0d473883bd3","disid":"6","name":"Когалым г","okato":"71183000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"124f75bd-9009-4d58-b883-ac3da0c02dd6","disid":"6","name":"Кондинский р-н","okato":"71116000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"149e651b-5dd3-480f-a372-5174576609f6","disid":"6","name":"Лангепас г","okato":"71132000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"d9c157ca-fd05-4efc-ae0c-16927612a0c8","disid":"6","name":"Мегион г","okato":"71133000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"45906532-143b-48c2-9af3-f480dc19c7bf","disid":"6","name":"Нефтеюганск г","okato":"71134000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"30ea4550-5e9f-460e-9ec0-39cc2c8d03df","disid":"6","name":"Нефтеюганский р-н","okato":"71118000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"0bf0f4ed-13f8-446e-82f6-325498808076","disid":"6","name":"Нижневартовск г","okato":"71135000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"078af68d-30b5-4be3-8983-ca6c7c6425be","disid":"6","name":"Нижневартовский р-н","okato":"71119000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"06157075-a993-404d-b940-0a103131dc66","disid":"6","name":"Нягань г","okato":"71139000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"b9e0dc80-f2f0-49b2-addc-7159ff4091cc","disid":"6","name":"Октябрьский р-н","okato":"71121000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"8bac4b94-1d16-42b5-b5c6-211aa52f3216","disid":"6","name":"Покачи г","okato":"71184000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"130857a0-7059-4f18-9a13-c17ef6c4f9ca","disid":"6","name":"Пыть-Ях г","okato":"71185000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"394a840f-9502-406f-a8be-3a2aa9e8f075","disid":"6","name":"Радужный г","okato":"71137000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"8c62b962-58d5-42b2-a29c-710706b01bb3","disid":"6","name":"Советский р-н","okato":"71124000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"f1eb1809-47d4-4f0b-9a74-fa416e9d3df2","disid":"6","name":"Сургут г","okato":"71136000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"28bca73b-31f9-45c3-acb6-c4c11f038a6d","disid":"6","name":"Сургутский р-н","okato":"71126000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"610abc14-c127-4d7c-8697-31cb5c7c47f2","disid":"6","name":"Урай г","okato":"71138000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"d680d1a9-ff89-42c0-b39f-143d2ffb520a","disid":"6","name":"Ханты-Мансийск г","okato":"71131000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"5d0b444b-6bd9-43f9-b8ee-170f4bc5550a","disid":"6","name":"Ханты-Мансийский р-н","okato":"71129000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"abb05e81-bd8b-4e44-abf7-384c9eba3407","disid":"6","name":"Югорск г","okato":"71187000000","parentguid":"d66e5325-3a25-4d29-ba86-4ca351d9704b","regioncode":"86"},{"aoguid":"8bfe5490-71dc-4ce5-8347-813e702b11b1","disid":"6","name":"Агаповский р-н","okato":"75203000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"627bec6f-93df-4093-ba12-d4a1e5c2ca35","disid":"6","name":"Аргаяшский р-н","okato":"75206000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"effa458e-7467-45fc-a55b-9b23fd8d0386","disid":"6","name":"Ашинский р-н","okato":"75209000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"1891c2bd-bc60-47ed-9576-5c3ec130fe9f","disid":"6","name":"Брединский р-н","okato":"75212000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"ae410050-1e1e-42f8-8408-7f49c5266243","disid":"6","name":"Варненский р-н","okato":"75214820000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"7e845772-7840-49cd-b661-0c4f244a1876","disid":"6","name":"Верхнеуральский р-н","okato":"75217000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"03aa453a-c7d6-4567-9a59-34a9e9cc1eac","disid":"6","name":"Верхний Уфалей г","okato":"75406000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"2555e789-ca58-4f66-be8e-265a2bc96d19","disid":"6","name":"Еманжелинский р-н","okato":"75219000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"6c5df047-57d4-4cb4-99c9-25029941e282","disid":"6","name":"Еткульский р-н","okato":"75220000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"110c731e-d72b-4c37-91cb-03ce33d9e727","disid":"6","name":"Златоуст г","okato":"75412000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"dbca0fdd-89a6-43ad-9bd0-9796236917d7","disid":"6","name":"Карабаш г","okato":"75415000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"8f89e145-40c2-4077-9fba-46c0d9ffc378","disid":"6","name":"Карталинский р-н","okato":"75223000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"ad22d3aa-9a40-442a-8565-824017aa30bc","disid":"6","name":"Каслинский р-н","okato":"75226000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"9c308da7-ae91-458e-a2d5-789673322d43","disid":"6","name":"Катав-Ивановский р-н","okato":"75229000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"7792fbc0-c36c-413b-adb2-0c9584187343","disid":"6","name":"Кизильский р-н","okato":"75232000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"69462f61-d1da-4e61-a970-3b71c6623002","disid":"6","name":"Копейск г","okato":"75428000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"ab02da2d-ff0d-4bff-b27c-c921adee2a33","disid":"6","name":"Коркинский р-н","okato":"75233000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"c3ac5bd6-9b5b-4f3e-8cfb-6cf7aefecbff","disid":"6","name":"Красноармейский р-н","okato":"75234000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"f20e1306-5231-42ea-b517-8200c7709e42","disid":"6","name":"Кунашакский р-н","okato":"75236000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"9196e097-bafb-454c-bd1e-82cc9d28da83","disid":"6","name":"Кусинский р-н","okato":"75238000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"969d3bb6-4d8e-4130-902b-b70571090302","disid":"6","name":"Кыштым г","okato":"75434000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"988157bf-d6d5-4c2a-80ec-4ad531eea056","disid":"6","name":"Магнитогорск г","okato":"75438000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"f2976e80-32e1-4284-8eda-06cf19239cd1","disid":"6","name":"Миасс г","okato":"75442000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"3c8b557d-4165-490a-aca2-2d53ee151c06","disid":"6","name":"Нагайбакский р-н","okato":"75242000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"83b2d394-31ce-49ce-a56e-b23db89fbf7d","disid":"6","name":"Нязепетровский р-н","okato":"75244000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"8192c863-edbf-4825-8523-0612ae80e5a7","disid":"6","name":"Озерск г","okato":"75543000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"e64b15ca-8a0b-4781-875b-ed5c196856cc","disid":"6","name":"Октябрьский р-н","okato":"75247000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"d75aead6-df89-45af-9d70-557e2eafe0bb","disid":"6","name":"Пластовский р-н","okato":"75248000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"131fd5da-8f48-4938-9248-830c11a3cf45","disid":"6","name":"Саткинский р-н","okato":"75249000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"08aad8a8-0067-4161-8389-b75d1da72866","disid":"6","name":"Снежинск г","okato":"75545000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"96310529-d09c-4e5c-8fab-68d02bd0ee6b","disid":"6","name":"Сосновский р-н","okato":"75252000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"097d2fcb-d22a-4fbd-89bf-27950b7116a3","disid":"6","name":"Трехгорный г","okato":"75507000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"c34f9871-d934-4be7-be82-59f42a794068","disid":"6","name":"Трехгорный-1 г","okato":"75507000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"b5ad78c2-cc8f-4769-9a9f-75743d8da02f","disid":"6","name":"Троицк г","okato":"75452000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"ec721b93-6741-405d-9123-da57a56e7d65","disid":"6","name":"Троицкий р-н","okato":"75254000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"20237a62-ee8b-4b03-857b-a4bd67d64360","disid":"6","name":"Увельский р-н","okato":"75255000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"972b07ed-c0f1-4439-a037-16eea177c983","disid":"6","name":"Уйский р-н","okato":"75256000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"327f11c6-474f-44f9-aff3-8ba1780fcaf0","disid":"6","name":"Усть-Катав г","okato":"75455000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"1fe59b79-b019-45d7-bfd9-03b3b2d49cb6","disid":"6","name":"Чебаркуль г","okato":"75458000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"e513df47-6932-4101-b4f8-fb38aadd9199","disid":"6","name":"Чебаркульский р-н","okato":"75257000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"a376e68d-724a-4472-be7c-891bdb09ae32","disid":"6","name":"Челябинск г","okato":"75401000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"f530b937-a760-4270-8796-1d09daf7bbd5","disid":"6","name":"Чесменский р-н","okato":"75259000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"2ac904d8-365e-4f49-8ff9-f14f88609535","disid":"6","name":"Южноуральск г","okato":"75464000000","parentguid":"27eb7c10-a234-44da-a59c-8b1f864966de","regioncode":"74"},{"aoguid":"0cb9e3a5-20fa-4248-8c1d-b31d5ce7f691","disid":"6","name":"Губкинский г","okato":"71172000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"a545ad63-efd8-4b5b-b5d2-931167c088b4","disid":"6","name":"Красноселькупский р-н","okato":"71153000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"6552fa92-269f-4b6a-bee5-fe9204463d99","disid":"6","name":"Лабытнанги г","okato":"71173000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"9d4ebe8d-29d8-4ddc-882d-75a5c5aec652","disid":"6","name":"Муравленко г","okato":"71175000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"24a3f6a2-5994-4ede-90d4-dc7fe64418b8","disid":"6","name":"Надым г","okato":"71174000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"c475d200-223d-4fcb-a69a-65ba2ef34310","disid":"6","name":"Надымский р-н","okato":"71156000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"4136d0c1-3ff7-44c0-aa30-fa2e7eb96ef7","disid":"6","name":"Новый Уренгой г","okato":"71176000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"131c6e49-9bc5-484d-b65a-ee7f5d250418","disid":"6","name":"Ноябрьск г","okato":"71178000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"3cf50f45-7152-4645-ae93-73bdeae7fe66","disid":"6","name":"Приуральский р-н","okato":"71158000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"625bf498-761d-45b0-af99-2c099abd693c","disid":"6","name":"Пуровский р-н","okato":"71160000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"0c1b7f05-9fd9-4ec9-a2cc-5ee2799be1e6","disid":"6","name":"Салехард г","okato":"71171000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"384d7005-86d0-4dc7-a3dc-b8e648265cec","disid":"6","name":"Тазовский р-н","okato":"71163000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"8bbd9908-4b29-4183-8e6b-615c11b7a160","disid":"6","name":"Шурышкарский р-н","okato":"71166000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"34131f0d-4fdd-4781-a2b0-e8baba6de6c4","disid":"6","name":"Ямальский р-н","okato":"71168000000","parentguid":"826fa834-3ee8-404f-bdbc-13a5221cfb6e","regioncode":"89"},{"aoguid":"7d6fd7bf-4c2e-4c29-b8a1-5378329b6a55","disid":"7","name":"Абзелиловский р-н","okato":"80201000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"8294b97c-7553-499e-8369-821d6eb0fdc7","disid":"7","name":"Агидель г","okato":"80403000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"cf1f02f7-38b9-4080-9853-dc3d6dbde466","disid":"7","name":"Альшеевский р-н","okato":"80202000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"5ab4ee03-1e5a-46a9-954f-5d7e958a6b62","disid":"7","name":"Амзинский с/с","okato":"80427801000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"8ed81c04-51b8-4414-8854-b8a86495fbbe","disid":"7","name":"Архангельский р-н","okato":"80203000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"993701c9-2100-48ef-8b83-1167e82df13f","disid":"7","name":"Аскинский р-н","okato":"80204000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"53056d1c-5c65-43e8-be8e-8edf32480797","disid":"7","name":"Аургазинский р-н","okato":"80205000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"7219bc01-42ce-4145-b4df-f5cb52559ed9","disid":"7","name":"Баймакский р-н","okato":"80206000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"7013d01d-9901-4771-aae2-86a8e5bc0c1d","disid":"7","name":"Бакалинский р-н","okato":"80207000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"4f8b8ac5-57d4-45a0-b198-3b2ad4aca567","disid":"7","name":"Балтачевский р-н","okato":"80208000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"4295ec00-1d3f-475b-8f7f-bb8615aeff51","disid":"7","name":"Белебеевский р-н","okato":"80209000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"069539de-a915-407d-9fc5-cfb3dfc63ea1","disid":"7","name":"Белокатайский р-н","okato":"80210000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"041ebde9-5f12-44e5-9e5d-32769ba01152","disid":"7","name":"Белорецкий р-н","okato":"80211000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"eaab893f-69e2-4a0c-9072-64f12c762198","disid":"7","name":"Бижбулякский р-н","okato":"80212000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"8eedd54c-c120-482a-83e0-22493f5b99ed","disid":"7","name":"Бирский р-н","okato":"80213000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"cdb365a8-d39a-4a1a-b6e0-613de6568103","disid":"7","name":"Благоварский р-н","okato":"80214000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"7f7d82dc-aa80-49a3-8502-0e3c43b35072","disid":"7","name":"Благовещенский р-н","okato":"80215000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"70559264-5721-4068-8082-e2dd3a243ec5","disid":"7","name":"Буздякский р-н","okato":"80217000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"520ff119-2bd5-4dec-97bc-f1eb10a8e1e0","disid":"7","name":"Бураевский р-н","okato":"80218000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"44a392aa-7527-4212-aaa4-47a66488967f","disid":"7","name":"Бурзянский р-н","okato":"80219000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"d6ecdf76-8449-47d2-ab0b-999e05f1b90d","disid":"7","name":"Гафурийский р-н","okato":"80221000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"e09975c6-2ac9-4497-8ac8-0ffeb1e0b1b9","disid":"7","name":"Давлекановский р-н","okato":"80222000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"e81a2a31-e59a-4f18-a302-61ce3b1e967d","disid":"7","name":"Дуванский р-н","okato":"80223000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"e86924f2-1ff1-4225-aa0e-20378760920f","disid":"7","name":"Дюртюлинский р-н","okato":"80224000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"1e33b1e9-76bf-4c0e-b075-f9ee108cf68c","disid":"7","name":"Ермекеевский р-н","okato":"80225000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"024c5ff7-f022-4304-a872-2582b880cdc2","disid":"7","name":"Зианчуринский р-н","okato":"80226000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"459ff8e7-b9fa-4f8e-b6b2-df928647f4f4","disid":"7","name":"Зилаирский р-н","okato":"80227000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"c5e868de-943c-4c4a-a4ad-8e50471e1e0d","disid":"7","name":"Иглинский р-н","okato":"80228000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"fdb8e762-1223-4047-93a7-701e1db62d52","disid":"7","name":"Илишевский р-н","okato":"80230000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"be9ac91f-b826-4ca1-8c21-4ce1c9935180","disid":"7","name":"Ишимбайский р-н","okato":"80231000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"ceba8f54-7389-4582-af60-56b18aa7689d","disid":"7","name":"Калтасинский р-н","okato":"80233000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"58e4f3d4-a14b-4ab9-a1b9-b701f2c0cc53","disid":"7","name":"Караидельский р-н","okato":"80234000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"857964ad-5ddd-4a9c-8d56-7a5f89d6da52","disid":"7","name":"Кармаскалинский р-н","okato":"80235000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"09e76d1b-4ac2-49f8-b00c-df50dcba792a","disid":"7","name":"Кигинский р-н","okato":"80236000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"c278cbbc-e209-4b0f-b20e-9c19ed6f6802","disid":"7","name":"Краснокамский р-н","okato":"80237000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"41896340-7227-42cc-aa7e-928acd33bac9","disid":"7","name":"Кугарчинский р-н","okato":"80238000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"48e38991-07fd-4aaa-b240-a7280e4a823f","disid":"7","name":"Кумертау г","okato":"80423000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"cde68605-1ca7-4238-8f85-4c68ce84b362","disid":"7","name":"Кушнаренковский р-н","okato":"80240000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"93192537-d4cb-4d65-8201-8a1877bdb61d","disid":"7","name":"Куюргазинский р-н","okato":"80239000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"d7287fc5-26f4-46f1-8d96-1ce9e83713b8","disid":"7","name":"Маячинский с/с","okato":"80423804000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"5fd3a551-8553-4571-bfc8-2bfb211686f5","disid":"7","name":"Межгорье г","okato":"80507000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"a04fc116-04ac-477f-8f4b-08b7159280fc","disid":"7","name":"Мелеузовский р-н","okato":"80241000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"5a8996da-151b-4822-a1f4-d02621032b43","disid":"7","name":"Мечетлинский р-н","okato":"80242000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"584f5bb8-c138-48be-9047-acdc382eaea7","disid":"7","name":"Мишкинский р-н","okato":"80243000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"73add7b8-bdf7-4ffa-9808-63c0ec0472c1","disid":"7","name":"Миякинский р-н","okato":"80244000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"2c9997d2-ce94-431a-96c9-722d2238d5c8","disid":"7","name":"Нефтекамск г","okato":"80427000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"40082af6-f7ec-4a32-a356-7b90e3edc707","disid":"7","name":"Нуримановский р-н","okato":"80245000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"abd1bc35-ec51-437a-abee-76a4f620f662","disid":"7","name":"Октябрьский г","okato":"80435000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"137157a2-6c67-4fe5-90ea-ad680011a742","disid":"7","name":"Подгорный с/с","okato":"80423805000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"fc14353f-5a1d-4f22-94ea-b900bad9a9f1","disid":"7","name":"Салават г","okato":"80439000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"912fa357-c695-4e97-ae65-4f2e942cb054","disid":"7","name":"Салаватский р-н","okato":"80247000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"d7825646-76f7-4322-a88c-42cc90cbd2b2","disid":"7","name":"Сибай г","okato":"80443000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"0df26c3f-f2b6-43b3-a152-538443f18ae7","disid":"7","name":"Стерлибашевский р-н","okato":"80248000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"84e0b23d-82fe-40a8-8739-55e679780dc3","disid":"7","name":"Стерлитамак г","okato":"80445000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"450ce765-f993-4ceb-95e3-f11c6fd35778","disid":"7","name":"Стерлитамакский р-н","okato":"80249000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"72a1f943-170b-4dde-bcaf-0b0cc04c7006","disid":"7","name":"Татышлинский р-н","okato":"80250000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"98c6d232-9f0d-4458-aff4-b5d08b98c5b2","disid":"7","name":"Ташкиновский с/с","okato":"80427807000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"7b3a5287-6175-4172-a3ae-93cf447d61a8","disid":"7","name":"Туймазинский р-н","okato":"80251000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"713fc5e4-1723-474d-926e-92694862164e","disid":"7","name":"Туялясский с/с","okato":"80443820000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"7339e834-2cb4-4734-a4c7-1fca2c66e562","disid":"7","name":"Уфа г","okato":"80401000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"c7a81174-8d01-4ae6-83e6-386ae23ee629","disid":"7","name":"Уфимский р-н","okato":"80252000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"d5199d40-c4ca-44cb-9a76-90704cfb261f","disid":"7","name":"Учалинский р-н","okato":"80253000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"20ea0299-9cb6-495a-899f-7f456a4a62a5","disid":"7","name":"Федоровский р-н","okato":"80254000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"49c19c7e-8a32-4a58-a84a-c73a9e06fd47","disid":"7","name":"Хайбуллинский р-н","okato":"80255000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"9b1c39ec-7457-4b33-b8aa-415f73f3cfc9","disid":"7","name":"Чекмагушевский р-н","okato":"80256000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"a3a5b457-d5d4-48d1-9d60-9647c14a9411","disid":"7","name":"Чишминский р-н","okato":"80257000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"6d49dc29-d059-4bb8-ba2b-d8ffddda4eac","disid":"7","name":"Шаранский р-н","okato":"80258000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"b04a09c5-15fc-4b61-bb64-ff2a37cf72d1","disid":"7","name":"Янаульский р-н","okato":"80259000000","parentguid":"6f2cbfd8-692a-4ee4-9b16-067210bde3fc","regioncode":"02"},{"aoguid":"af07556a-bf18-492d-8001-12f1e2be56b6","disid":"7","name":"Арбажский р-н","okato":"33202000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"9e825622-fe80-44af-a148-fc09ef8fdf0d","disid":"7","name":"Афанасьевский р-н","okato":"33203000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"2c5bfe86-653d-4b71-8b17-20c05dca6760","disid":"7","name":"Белохолуницкий р-н","okato":"33205000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"a8633243-2c2a-4e50-bc5a-a0b0855fc1a0","disid":"7","name":"Богородский р-н","okato":"33206000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"42178bc4-d883-413a-b2dd-ac3ff81191ed","disid":"7","name":"Верхнекамский р-н","okato":"33207000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"8f14c998-f5dc-4fd5-b833-b8af4c145130","disid":"7","name":"Верхошижемский р-н","okato":"33208000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"f2332b74-1ac0-4521-bb30-23e021b4d7d4","disid":"7","name":"Вятскополянский р-н","okato":"33210000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"69e82493-4f43-422a-ae26-4fdb52f9ea53","disid":"7","name":"Даровской р-н","okato":"33212000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"36a3783a-97c4-4314-8c9b-592cd1580639","disid":"7","name":"Зуевский р-н","okato":"33214000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"4e3f7664-90ff-46aa-8a34-4c11da65d209","disid":"7","name":"Кикнурский р-н","okato":"33216000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"87fb54fc-7a77-42fc-9619-0cbd5db497e6","disid":"7","name":"Кильмезский р-н","okato":"33217000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"452a2ddf-88a1-4e35-8d8d-8635493768d4","disid":"7","name":"Киров г","okato":"33401000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"4c085ad8-7f47-4a13-900b-31bb38b9e04a","disid":"7","name":"Кирово-Чепецкий р-н","okato":"33218000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"3881d5fb-efc9-4e81-852d-fb5619a42d77","disid":"7","name":"Котельничский р-н","okato":"33219000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"37b605b8-502e-42b8-9485-73b4aae2821f","disid":"7","name":"Куменский р-н","okato":"33220000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"326d554a-9045-4357-b85f-7712de3f258c","disid":"7","name":"Лебяжский р-н","okato":"33221000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"7a6d116e-9488-4487-b6bc-53c9518fb8a5","disid":"7","name":"Лузский р-н","okato":"33222000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"8c7f2978-d7b8-4f51-9197-59fb5eb89b92","disid":"7","name":"Малмыжский р-н","okato":"33223000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"2f095c16-e5f0-4084-8312-84c6db585d36","disid":"7","name":"Мурашинский р-н","okato":"33224000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"e0cee65b-28fe-4182-a659-eab3daf112bb","disid":"7","name":"Нагорский р-н","okato":"33225000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"f73b4278-3614-489e-a518-51a7b97c3c3f","disid":"7","name":"Немский р-н","okato":"33226000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"b602b524-2be7-40eb-b8f1-933dc182af06","disid":"7","name":"Нолинский р-н","okato":"33227000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"fbfb0f68-aa1c-414e-8c0f-cb548b87ee17","disid":"7","name":"Омутнинский р-н","okato":"33228000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"aa99e061-3344-4741-8211-ca5e5ca97381","disid":"7","name":"Опаринский р-н","okato":"33229000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"6be4579d-f010-483f-8621-881ccaa8fb8f","disid":"7","name":"Оричевский р-н","okato":"33230000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"4b27f8d0-7b29-42db-8edc-9fc5f81d898a","disid":"7","name":"Орловский р-н","okato":"33245000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"81ec0cd1-a343-4ef7-8613-1a70d542d099","disid":"7","name":"Первомайский пгт","okato":"33587000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"e8cd8393-c28e-4b93-b549-4bb332c770f3","disid":"7","name":"Пижанский р-н","okato":"33231000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"cc9dd913-03b4-49a5-aa15-85bccf4e0624","disid":"7","name":"Подосиновский р-н","okato":"33232000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"ca8ea252-b59f-422e-b2e2-4b52007d8665","disid":"7","name":"Санчурский р-н","okato":"33233000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"d339159f-59d6-46a2-a9ab-a17aea0f6065","disid":"7","name":"Свечинский р-н","okato":"33234000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"810f29aa-6af6-47e9-b611-c99f7127af52","disid":"7","name":"Слободской р-н","okato":"33235000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"de0dd6d1-8973-4df7-8c48-f1d5e32593cf","disid":"7","name":"Советский р-н","okato":"33236000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"d636d891-073f-4e8e-9f8e-2848224225f6","disid":"7","name":"Сунский р-н","okato":"33237000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"72e72027-ac2b-4606-99b3-3b76051cb72c","disid":"7","name":"Тужинский р-н","okato":"33238000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"59cbbc52-f27e-4eff-b719-88ceb2d5ad7c","disid":"7","name":"Унинский р-н","okato":"33240000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"2bdb4532-74ec-4088-92ba-6a1b7a26787d","disid":"7","name":"Уржумский р-н","okato":"33241000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"6e77a05a-eb5a-475b-9edc-7243e97b6c72","disid":"7","name":"Фаленский р-н","okato":"33243000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"87bfb795-2ddb-49b0-9eea-7ebc20efc257","disid":"7","name":"Шабалинский р-н","okato":"33247000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"b8ad3d0b-debb-405f-afed-80cff695b9f2","disid":"7","name":"Юрьянский р-н","okato":"33249000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"e42d26ff-7f1e-4cd8-98a9-20d4b14ad2f9","disid":"7","name":"Яранский р-н","okato":"33250000000","parentguid":"0b940b96-103f-4248-850c-26b6c7296728","regioncode":"43"},{"aoguid":"f183b079-b65f-4781-9b79-310ba29b724d","disid":"7","name":"Волжск г","okato":"88405000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"d4e29be0-2140-4d7a-8ad5-9433bb6bbe69","disid":"7","name":"Волжский р-н","okato":"88204000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"8310171a-2403-4c28-b4da-5bee78aa0c88","disid":"7","name":"Горномарийский р-н","okato":"88208000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"548b182f-9531-413e-b86b-0bd8b65d10b7","disid":"7","name":"Звениговский р-н","okato":"88212000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"0648e41c-a09b-4eac-91cd-8cf61b9ccb7b","disid":"7","name":"Йошкар-Ола г","okato":"88401000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"53aaae62-e0ab-4478-86f0-48b37a7b8004","disid":"7","name":"Килемарский р-н","okato":"88216000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"70f9ed24-8b25-4688-857f-a337710d4825","disid":"7","name":"Козьмодемьянск г","okato":"88415000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"68a1fffd-fa7c-4f11-ad7d-19ab947b0989","disid":"7","name":"Куженерский р-н","okato":"88220000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"e1bb586e-7689-411e-85f6-3caf9038dfa2","disid":"7","name":"Мари-Турекский р-н","okato":"88224000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"d243296d-ac02-465c-b4cb-be8b6f5ebc98","disid":"7","name":"Медведевский р-н","okato":"88228000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"074d51f2-fb1c-424f-b26e-ccf779678b4d","disid":"7","name":"Моркинский р-н","okato":"88232000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"1081e14e-2da6-425e-981b-8a7d4f985be6","disid":"7","name":"Новоторъяльский р-н","okato":"88236000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"82753382-a297-4117-a849-e0ab7879f83d","disid":"7","name":"Оршанский р-н","okato":"88240000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"bde8b8f9-636d-48ef-90c4-39597bf63e0d","disid":"7","name":"Параньгинский р-н","okato":"88244000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"ba569589-d1fb-4b2e-87fd-04dcc8127663","disid":"7","name":"Сернурский р-н","okato":"88248000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"3da7739a-7828-4a45-8a27-817db08c87b3","disid":"7","name":"Советский р-н","okato":"88252000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"31567fd2-938f-4e74-8570-3298f2e046fe","disid":"7","name":"Юринский р-н","okato":"88256000000","parentguid":"de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e","regioncode":"12"},{"aoguid":"ac121487-bbc4-4176-b6ef-32993324fadc","disid":"7","name":"Ардатовский р-н","okato":"89203000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"20d20dce-6c1e-4cf2-b49c-88fd4b6121e3","disid":"7","name":"Атюрьевский р-н","okato":"89205000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"c2fb903b-6dbd-45f1-a71d-717c193a2fd4","disid":"7","name":"Атяшевский р-н","okato":"89207000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"9bcd8d19-9dbf-43c7-b11e-772d3bd74ccf","disid":"7","name":"Большеберезниковский р-н","okato":"89210000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"abfd339d-4c84-4066-9fd0-f9dba6cf859a","disid":"7","name":"Большеигнатовский р-н","okato":"89213000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"4167af83-7c93-4139-9d7e-abd23f65cd1e","disid":"7","name":"Дубенский р-н","okato":"89216000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"644cd9a2-2c0d-449f-9309-f8a21c6f1352","disid":"7","name":"Ельниковский р-н","okato":"89218000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"98c46582-79db-4a69-83b4-4166cd253796","disid":"7","name":"Зубово-Полянский р-н","okato":"89221000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"1535c9f6-da89-4bd1-a600-fcaccb3e12a0","disid":"7","name":"Инсарский р-н","okato":"89224000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"54a9fbcb-f51c-43ef-bac4-9a319ef80848","disid":"7","name":"Ичалковский р-н","okato":"89226000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"76d0133e-b008-4dc7-a179-48bd6537001d","disid":"7","name":"Кадошкинский р-н","okato":"89228000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"d58bb3c2-fcc2-4aeb-8696-fe04a0f30e84","disid":"7","name":"Ковылкинский р-н","okato":"89229000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"5a75dd3f-bc80-49af-b92b-12c0df0996cb","disid":"7","name":"Кочкуровский р-н","okato":"89231000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"1775ca79-4f49-47d1-abbe-f483aadaff14","disid":"7","name":"Краснослободский р-н","okato":"89234000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"4ae92cca-1f3a-4e93-8a7f-8045d2b9b80e","disid":"7","name":"Лямбирский р-н","okato":"89237000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"74705ff8-b47f-4976-9eb1-5b361140de62","disid":"7","name":"Ромодановский р-н","okato":"89240000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"bb4b1693-5ac7-4762-b5f4-c0cb0c1f1361","disid":"7","name":"Рузаевский р-н","okato":"89243000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"1ccfdc3c-be0f-4e42-ab4d-98f90de972d9","disid":"7","name":"Саранск г","okato":"89401000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"3340702a-2f9f-4c21-aca5-67cc5b7d5d4a","disid":"7","name":"Старошайговский р-н","okato":"89246000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"f443c4ff-e8b8-43a5-8eb4-cef78367e9c6","disid":"7","name":"Темниковский р-н","okato":"89249000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"97cc3be1-b788-4fad-8df6-f1278b4367e5","disid":"7","name":"Теньгушевский р-н","okato":"89251000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"38034e7d-f878-4066-a49c-02292d7c94a2","disid":"7","name":"Торбеевский р-н","okato":"89254000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"6a15cbf7-544a-497a-8d24-0ea0d45dbc40","disid":"7","name":"Чамзинский р-н","okato":"89257000000","parentguid":"37a0c60a-9240-48b5-a87f-0d8c86cdb6e1","regioncode":"13"},{"aoguid":"dab8ebdf-5f74-480a-809e-fca52235ceef","disid":"7","name":"Ардатовский р-н","okato":"22202000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"7e42f157-87d6-4111-a406-17432e814723","disid":"7","name":"Арзамас г","okato":"22403000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"b2c3dd21-e653-4e04-8551-eaa3fb996f62","disid":"7","name":"Арзамасский р-н","okato":"22203000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"7e39f886-da1d-41ae-a4cf-52b588024bd4","disid":"7","name":"Балахнинский р-н","okato":"22205000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"fa0d2b5b-a614-41cd-92b9-555da9ca46b8","disid":"7","name":"Богородский р-н","okato":"22207000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"948a3c29-a387-4dd3-a9b6-8d39d5f4a7a7","disid":"7","name":"Большеболдинский р-н","okato":"22209000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"172cf232-35d8-4893-9455-c18d7a4e7cbe","disid":"7","name":"Большемурашкинский р-н","okato":"22210000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"e736e903-6bc3-450b-b8af-7909213dc9ef","disid":"7","name":"Бор г","okato":"22412000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"9e5fa78f-646c-4f51-9708-7d08bbbda1f6","disid":"7","name":"Борский р-н","okato":"22211000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"6ca8b9be-573c-4f46-81bf-0a80a02d7faf","disid":"7","name":"Бутурлинский р-н","okato":"22212000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"f094d1fd-709b-4d74-8ad9-3bd85c05ae6f","disid":"7","name":"Вадский р-н","okato":"22214000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"817d83ad-3fca-4ebb-8d5d-1ebb3808bd3f","disid":"7","name":"Варнавинский р-н","okato":"22215000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"7fb15ef9-7a81-401a-81ef-4d46f0582983","disid":"7","name":"Вачский р-н","okato":"22217000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"e63ddab7-4af7-49ce-b229-484c5b70eab9","disid":"7","name":"Ветлужский р-н","okato":"22218000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"151e7b90-3ffd-4ab7-a64a-088b79fa2bef","disid":"7","name":"Вознесенский р-н","okato":"22219000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"28aa39a2-9d75-407f-b015-cc778d79f293","disid":"7","name":"Володарский р-н","okato":"22231000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"ade15287-f6ff-42d2-9a77-34015f62e812","disid":"7","name":"Воротынский р-н","okato":"22221000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"69497db6-ad81-4d6b-9f61-2f5abe92be16","disid":"7","name":"Воскресенский р-н","okato":"22222000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"d89942e8-e06b-46bd-a805-7cec8f77417e","disid":"7","name":"Выкса г","okato":"22415000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"4d3194c9-95b9-400d-b83b-5fc4ed014086","disid":"7","name":"Выксунский р-н","okato":"22224000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"e763b10e-27c8-4995-b39e-55823aa4ffef","disid":"7","name":"Гагинский р-н","okato":"22226000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"8e694803-5caf-4913-ab04-37e692792e6b","disid":"7","name":"Городецкий р-н","okato":"22228000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"b933ceea-dc46-4b0d-9df6-7c9d175580f8","disid":"7","name":"Дальнеконстантиновский р-н","okato":"22230000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"1d5a97d5-9bdf-44c9-ac42-e201833e7f28","disid":"7","name":"Дзержинск г","okato":"22421000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"0e8f2a8c-f27f-4889-a6cc-3351f0a2a923","disid":"7","name":"Дивеевский р-н","okato":"22232000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"716d1733-e7ca-452a-9a38-a682df8cfb8e","disid":"7","name":"Княгининский р-н","okato":"22233000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"ecaabd87-ed28-403b-b734-47abe1a919df","disid":"7","name":"Ковернинский р-н","okato":"22234000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"dcd0fc48-ceb9-4818-9fe4-a63d4fa55aad","disid":"7","name":"Краснобаковский р-н","okato":"22235551001","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"ba4799a8-7a74-4168-ba7e-a231fabc8995","disid":"7","name":"Краснооктябрьский р-н","okato":"22236000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"4d78cac3-3718-4bfb-bb83-9f34fac76e42","disid":"7","name":"Кстовский р-н","okato":"22237000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"37ac9943-a1e7-47d3-923a-00abb686cecc","disid":"7","name":"Кулебакский р-н","okato":"22238000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"eb787249-c038-44d7-8d87-e2977244dea2","disid":"7","name":"Лукояновский р-н","okato":"22239000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"2dd692c1-fc95-41a2-86a1-6a83f47914fe","disid":"7","name":"Лысковский р-н","okato":"22240000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"a616b7c4-5b4d-4584-beed-772805f07089","disid":"7","name":"Навашинский р-н","okato":"22241000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"555e7d61-d9a7-4ba6-9770-6caa8198c483","disid":"7","name":"Нижний Новгород г","okato":"22401000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"21cd4118-bbf0-4994-a6d6-0c20cf089ba4","disid":"7","name":"Павловский р-н","okato":"22242000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"098fdadd-3b60-4328-bf1d-67113278ed95","disid":"7","name":"Первомайский р-н","okato":"22243000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"bf70466a-3562-481a-af08-dc7f0f33851b","disid":"7","name":"Перевозский р-н","okato":"22244000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"b5f73d96-c7b0-45db-ba64-649a4b43a8e4","disid":"7","name":"Пильнинский р-н","okato":"22245000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"a09e91d5-fce0-4904-9f57-c1c5c0669bd8","disid":"7","name":"Починковский р-н","okato":"22246000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"be0210d1-1b58-49c1-8304-eb5ff5618fad","disid":"7","name":"Саров г","okato":"22503000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"dacc69b0-38df-462e-b346-26541cb9c0b8","disid":"7","name":"Семенов г","okato":"22437000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"699317a4-85a5-469b-b740-8dc64fdf4431","disid":"7","name":"Семеновский р-н","okato":"22247000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"22d4d9b6-f15f-4d2e-a183-ea4a4cc21d77","disid":"7","name":"Сергачский р-н","okato":"22248000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"47031f9c-c3d5-483b-a0f9-6e3db7641f76","disid":"7","name":"Сеченовский р-н","okato":"22249000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"a50632f1-48a4-401c-8b4c-03128aa29d97","disid":"7","name":"Сокольский р-н","okato":"22259000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"f57d6961-6580-4b65-8218-f51a8a0d1e58","disid":"7","name":"Сосновский р-н","okato":"22250000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"d6e45418-3db6-441f-9dc7-40dca8eee02c","disid":"7","name":"Спасский р-н","okato":"22251000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"c3b09d6c-eb7d-4e88-b7a2-353218d3be5e","disid":"7","name":"Тонкинский р-н","okato":"22252000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"49dee7ad-3a4f-475c-90bd-991ef920b874","disid":"7","name":"Тоншаевский р-н","okato":"22253000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"20a7d573-3461-484d-a0b5-cd9a12cfa7e4","disid":"7","name":"Уренский р-н","okato":"22254000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"d68ce670-1e96-44e6-a1e2-acfec9916edb","disid":"7","name":"Чкаловский р-н","okato":"22255000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"2bd4dd3d-185d-4d86-ad43-b158254c335b","disid":"7","name":"Шарангский р-н","okato":"22256000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"d7c2bca5-f874-4a3b-8f9e-4098737968c0","disid":"7","name":"Шатковский р-н","okato":"22257000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"f3800b01-0abf-48fe-b937-82f804917c4b","disid":"7","name":"Шахунский р-н","okato":"22258000000","parentguid":"88cd27e2-6a8a-4421-9718-719a28a0a088","regioncode":"52"},{"aoguid":"0cfa92f9-6119-4ac0-b2c9-1aafccf13707","disid":"7","name":"Абдулинский р-н","okato":"53203000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"83437cb6-b18a-48dc-ac28-f29e1aa00367","disid":"7","name":"Адамовский р-н","okato":"53204000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"1344ec81-b0f1-438d-ae38-68ab2756c403","disid":"7","name":"Акбулакский р-н","okato":"53205000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"ea88cdcf-2d44-4f4e-8645-60aa2f0f3e94","disid":"7","name":"Александровский р-н","okato":"53206000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"a6b88072-ccfa-43bc-8878-d6f3e25fb15b","disid":"7","name":"Асекеевский р-н","okato":"53207000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"91b728a2-0fa6-4161-89f8-40d92c7a2d54","disid":"7","name":"Беляевский р-н","okato":"53210000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"680f6208-865b-43b4-ab24-1f42f51d2c33","disid":"7","name":"Бугуруслан г","okato":"53408000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"a4d67f31-6d70-4a59-9292-ece9778f5343","disid":"7","name":"Бугурусланский р-н","okato":"53211000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"653b316e-d0ca-414e-9211-03a96643e91b","disid":"7","name":"Бузулук г","okato":"53412000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"a5b16abe-4ab5-4628-93b2-ce290a59b6dd","disid":"7","name":"Бузулукский р-н","okato":"53212000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"c9a3cd9e-a133-4de9-aafb-a6e0b664312c","disid":"7","name":"Гай г","okato":"53413000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"f074034d-610c-4148-9350-3ba745042f2c","disid":"7","name":"Гайский р-н","okato":"53214000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"7db05884-a4c7-4437-8bf1-3ce031006092","disid":"7","name":"Грачевский р-н","okato":"53215000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"eff8cf8b-e762-4b50-b310-a0496d7e1d1a","disid":"7","name":"Домбаровский р-н","okato":"53217000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"d9959199-705b-4ce3-9026-1144a2876f99","disid":"7","name":"Илекский р-н","okato":"53219000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"68eea25f-df8b-4ddc-be3b-3c9ad47a0352","disid":"7","name":"Кваркенский р-н","okato":"53222000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"ca007a72-2188-4f43-bb1e-ca8dc283e6ec","disid":"7","name":"Красногвардейский р-н","okato":"53223000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"7644221b-0ef9-40c3-8378-cb0e2299747e","disid":"7","name":"Кувандык г","okato":"53414000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"3c4119fd-098b-468f-a38f-4f8e890ac932","disid":"7","name":"Кувандыкский р-н","okato":"53224000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"95839463-c8f1-4289-b3ea-b14da4339d66","disid":"7","name":"Курманаевский р-н","okato":"53225000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"f280160f-f84e-4d95-8846-3faca6c7360c","disid":"7","name":"Матвеевский р-н","okato":"53227000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"86204c33-b552-4ebd-a93a-9dc8b274ee9c","disid":"7","name":"Медногорск г","okato":"53415000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"d0e8d321-75a7-40fb-9b05-338ea22ca9f1","disid":"7","name":"Новоорский р-н","okato":"53230000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"33b06d79-56cc-4d84-ae0e-387626e5b189","disid":"7","name":"Новосергиевский р-н","okato":"53231000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"5cb431ac-6645-47b2-9716-5fccc9ec1d7f","disid":"7","name":"Новотроицк г","okato":"53420000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"3e0c3e99-6e18-4ef8-afa4-ace21009790b","disid":"7","name":"Октябрьский р-н","okato":"53233000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"dce97bff-deb2-4fd9-9aec-4f4327bbf89b","disid":"7","name":"Оренбург г","okato":"53401000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"214f9132-f231-4f81-89c1-1241a6fb003a","disid":"7","name":"Оренбургский р-н","okato":"53234000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"71e7cb45-f365-4e6b-b068-a7d35349c3ba","disid":"7","name":"Орск г","okato":"53423000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"35de0d09-5785-421b-98c0-0ee797169753","disid":"7","name":"Первомайский р-н","okato":"53236000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"80f8e87c-51c4-4be0-b36d-872122287c14","disid":"7","name":"Переволоцкий р-н","okato":"53237000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"6f49d1ee-288f-4b4a-8dd1-66434a4ef203","disid":"7","name":"Пономаревский р-н","okato":"53238000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"6cd8d283-9cfb-4005-a6b3-8ee764d5377e","disid":"7","name":"Сакмарский р-н","okato":"53240000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"259bf2c9-0f14-488f-8760-b23de834cd3e","disid":"7","name":"Саракташский р-н","okato":"53241000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"51c49a3e-80b7-48bf-8c42-4ea9a1861816","disid":"7","name":"Светлинский р-н","okato":"53242000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"bdd7ac3c-ef4d-4a9f-be5a-f8badef8b4cb","disid":"7","name":"Северный р-н","okato":"53243000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"29941dfd-2cbb-4cf9-9a8b-cebdc59219fb","disid":"7","name":"Соль-Илецкий р-н","okato":"53244000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"1d9296cc-f534-4e81-9e97-c31d3ef9c25a","disid":"7","name":"Сорочинск г","okato":"53427000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"89a63c11-1a07-4f88-af23-4a885366f9ba","disid":"7","name":"Сорочинский р-н","okato":"53250000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"cab64aad-379f-4803-8949-956512797046","disid":"7","name":"Ташлинский р-н","okato":"53251000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"c073f888-f985-427f-855b-3633f18652f7","disid":"7","name":"Тоцкий р-н","okato":"53252000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"ddec76a1-0fe8-4c7c-98db-b71a3529013f","disid":"7","name":"Тюльганский р-н","okato":"53253000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"6d5c6624-1dc0-44a6-96af-157613011cd4","disid":"7","name":"Шарлыкский р-н","okato":"53256000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"44d90ec8-b093-4e45-9586-7ff0ead7f646","disid":"7","name":"Ясненский р-н","okato":"53259000000","parentguid":"8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44","regioncode":"56"},{"aoguid":"ea343b1c-ffdd-481d-8c8b-3a51659e5565","disid":"7","name":"Башмаковский р-н","okato":"56203000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"3bef8844-bed1-42d8-9d7c-0db138a32e1a","disid":"7","name":"Бековский р-н","okato":"56209000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"30f4502e-4430-45c5-8b6c-85562ac63603","disid":"7","name":"Белинский р-н","okato":"56212000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"b9a4986f-6edd-43f4-859a-ce9219cac0b6","disid":"7","name":"Бессоновский р-н","okato":"56213000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"8a6e0fae-5406-4780-8190-b8c98eafbc76","disid":"7","name":"Вадинский р-н","okato":"56215000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"62ea7362-947a-478f-9e93-fee1746bdece","disid":"7","name":"Городищенский р-н","okato":"56218000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"ff38fc0c-d739-4627-a2f4-58af8f3d9d42","disid":"7","name":"Заречный г","okato":"56534000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"0bb3d8a5-1c28-4938-bfae-8f110f0a6a29","disid":"7","name":"Земетчинский р-н","okato":"56223000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"54270d32-e211-4aca-bf7c-6bba9121ba80","disid":"7","name":"Иссинский р-н","okato":"56226000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"695b14e5-c4b0-4b0f-ab9a-d312cb759cdc","disid":"7","name":"Каменский р-н","okato":"56229000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"ebe2c72b-0549-4151-830c-203942a43c06","disid":"7","name":"Камешкирский р-н","okato":"56231000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"91eb28ce-2488-4720-94f3-5607372960d2","disid":"7","name":"Колышлейский р-н","okato":"56233000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"0663c380-d898-4dcb-b689-5edb72acd672","disid":"7","name":"Кондольский р-н","okato":"56236000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"66b6bd0e-21e4-4479-8417-341fda1b0dcb","disid":"7","name":"Кузнецкий р-н","okato":"56240000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"03b7b802-cca5-4212-9315-95d0aeb74065","disid":"7","name":"Лопатинский р-н","okato":"56242000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"4a9aed21-bce9-40d5-873f-8b53bb9cc48a","disid":"7","name":"Лунинский р-н","okato":"56243000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"2a14245e-691a-4042-a06a-3724b4d693fa","disid":"7","name":"Малосердобинский р-н","okato":"56244808003","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"6ee58fc3-859e-45f3-8d43-3d126bfb64c1","disid":"7","name":"Мокшанский р-н","okato":"56245000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"f13dd1c7-0039-49c3-ba3e-85d8308551db","disid":"7","name":"Наровчатский р-н","okato":"56247000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"b5f07986-4adc-4f3d-8abd-2f152e9d08b2","disid":"7","name":"Неверкинский р-н","okato":"56249000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"6368c866-a960-465e-9b3f-f1c98bdaaf48","disid":"7","name":"Нижнеломовский р-н","okato":"56251000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"4a48723b-d9fc-42b9-aa12-35be50176879","disid":"7","name":"Никольский р-н","okato":"56253000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"91bcb5ba-0045-4c27-a9c3-37cf0e0d34bb","disid":"7","name":"Пачелмский р-н","okato":"56254000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"ff3292b1-a1d2-47d4-b35b-ac06b50555cc","disid":"7","name":"Пенза г","okato":"56401000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"2d7d7abd-2107-4eac-b8d4-17d79fc8b494","disid":"7","name":"Пензенский р-н","okato":"","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"fa53b9c2-ce15-4ad2-a717-7d69dccf47e3","disid":"7","name":"Сердобский р-н","okato":"56256000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"a8247127-b144-4d66-9274-5ad9ee1e0f91","disid":"7","name":"Сосновоборский р-н","okato":"56257000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"7f2f19c2-fcc0-4f4d-ac38-32100beadd2c","disid":"7","name":"Спасский р-н","okato":"56206000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"e21f5cb2-adf4-468b-b91a-67d12bbdcdd7","disid":"7","name":"Тамалинский р-н","okato":"56258000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"27128df2-74dd-4b34-b8f8-1165c8bb4b47","disid":"7","name":"Шемышейский р-н","okato":"56259000000","parentguid":"c99e7924-0428-4107-a302-4fd7c0cca3ff","regioncode":"58"},{"aoguid":"4f07ade1-1415-44c8-bed9-e851f1ef558d","disid":"7","name":"Александровск г","okato":"57405550000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"0810dccb-7114-4d33-9454-50b00433eb1b","disid":"7","name":"Бардымский р-н","okato":"57204000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"4ffcde97-05e9-4a6e-bd51-3a984b41b7bd","disid":"7","name":"Березники г","okato":"57408000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"57e3f364-d709-44a4-a81f-c9ea68778fd0","disid":"7","name":"Березовский р-н","okato":"57206000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"76561b13-cc96-478c-9266-bc69ec254776","disid":"7","name":"Большесосновский р-н","okato":"57208000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"c3700ef0-0a85-4032-947c-009f956fd754","disid":"7","name":"Верещагинский р-н","okato":"57212000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"d336561f-cc98-4742-9f7b-52d99c78463e","disid":"7","name":"Гайнский р-н","okato":"57114000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"b6c85a2d-c0ec-4030-a306-4ca7bdcd25f4","disid":"7","name":"Горнозаводский р-н","okato":"57214000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"edeaf203-1bc3-4fe1-b3ed-15eb89978783","disid":"7","name":"Гремячинск г","okato":"57412000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"1dc365d3-60b1-41ea-a3b3-1c599024cf30","disid":"7","name":"Губаха г","okato":"57415000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"230c2f4d-fd9d-46fc-8bbd-b8de26810790","disid":"7","name":"Добрянка г","okato":"57416000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"3afa40f2-8169-4006-a5c4-33ace0510d7f","disid":"7","name":"Еловский р-н","okato":"57218000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"a80bf180-06e3-4b38-971c-ecef8b417337","disid":"7","name":"Ильинский р-н","okato":"57220000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"44166947-11b9-4a1b-a1bf-6e9cba64299d","disid":"7","name":"Карагайский р-н","okato":"57222000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"cc8b9eb5-bd4e-4472-8314-f889e8a6679c","disid":"7","name":"Кизел г","okato":"57418550000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"c787b918-d201-408b-abb9-84d53befc6a5","disid":"7","name":"Кишертский р-н","okato":"57224000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"6e850977-64c1-49ac-a405-8ff2d77fa219","disid":"7","name":"Косинский р-н","okato":"57117000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"a4b9d248-dec4-4686-b4bc-d3b0d8fd9be6","disid":"7","name":"Кочевский р-н","okato":"57119000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"e4172d66-d08e-4eda-a274-c47119c30470","disid":"7","name":"Красновишерский р-н","okato":"57226000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"1ffa3973-279c-4bcd-a9fc-ece8c7d1039e","disid":"7","name":"Краснокамский р-н","okato":"57420000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"d36590ad-0286-44a2-876d-7732deee4234","disid":"7","name":"Кудымкар г","okato":"57141000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"6fe17476-90db-4bbf-af4f-e33564751f95","disid":"7","name":"Кудымкарский р-н","okato":"57121000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"189875b0-b84b-4980-a125-5a0581f5197e","disid":"7","name":"Куединский р-н","okato":"57228000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"73e5113d-949a-4a9e-8e44-6eae9ef93747","disid":"7","name":"Кунгур г","okato":"57422000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"1f81a925-75ee-4fa2-87b1-9de26a2813ed","disid":"7","name":"Кунгурский р-н","okato":"57230000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"5d7c95a5-a4d7-4fb4-9774-93e527636a9e","disid":"7","name":"Лысьва г","okato":"57427000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"fa41d32f-22b5-4436-bddd-c2ec035377c6","disid":"7","name":"Нытвенский р-н","okato":"57234000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"2ddaf37d-e4ea-4748-b6b8-943854f37a0f","disid":"7","name":"Октябрьский р-н","okato":"57236000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"5ca82a07-403e-48aa-8fa8-a00277123e46","disid":"7","name":"Ординский р-н","okato":"57238000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"60dd742a-3dc9-4ab1-9a22-12c19efdb340","disid":"7","name":"Осинский р-н","okato":"57240000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"e7012a7a-e7de-4306-8f52-aabeaf82f178","disid":"7","name":"Оханский р-н","okato":"57242000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"2e82fea7-7e6f-4c8a-849f-57140f80c7f3","disid":"7","name":"Очерский р-н","okato":"57244000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"7dd380b3-ce33-4280-934f-a4265a07803b","disid":"7","name":"Пермский р-н","okato":"57246000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"a309e4ce-2f36-4106-b1ca-53e0f48a6d95","disid":"7","name":"Пермь г","okato":"57401000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"9eea0415-ab1c-4b49-bd9d-aa04ea23d4e9","disid":"7","name":"Сивинский р-н","okato":"57248000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"8b698775-fe5e-4fc0-9f0d-272855d82d15","disid":"7","name":"Соликамск г","okato":"57430000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"db4332aa-5444-4c77-a364-541563e0bb1d","disid":"7","name":"Соликамский р-н","okato":"57250000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"9460a26c-a2b9-4cb2-9e0e-ddc9022b0ecb","disid":"7","name":"Суксунский р-н","okato":"57251000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"a266fff5-5817-4d3b-95dd-c447144f02d1","disid":"7","name":"Уинский р-н","okato":"57252000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"7f21b9b5-1f39-44ad-8ce4-6e186e8389ce","disid":"7","name":"Усольский р-н","okato":"57253000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"06d7a6d6-8f57-4e5a-b698-2bc44c92bb84","disid":"7","name":"Чайковский г","okato":"57435000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"0e9750c7-9f8c-4e23-b996-9a7bff46bb2c","disid":"7","name":"Частинский р-н","okato":"57255000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"4f092f1f-8ebf-4ea4-8f01-a75cbcf1d43f","disid":"7","name":"Чердынский р-н","okato":"57256000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"75550fdb-56e3-44d5-a4c4-75ab2cb53e83","disid":"7","name":"Чернушинский р-н","okato":"57257000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"784b1911-182d-476b-a4ad-0f3fa1ef7777","disid":"7","name":"Чусовой г","okato":"57440000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"03547d69-de22-4781-b728-e0823fcdb5f3","disid":"7","name":"Юрлинский р-н","okato":"57125000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"f8523e08-3e73-4ba1-b1a2-4bdaf1e8b82f","disid":"7","name":"Юсьвинский р-н","okato":"57127000000","parentguid":"4f8b1a21-e4bb-422f-9087-d3cbf4bebc14","regioncode":"59"},{"aoguid":"2c903bfd-fa49-4080-805b-fd4f24ba1603","disid":"7","name":"Алексеевский р-н","okato":"36202000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"64be3cc5-175c-4a52-87f2-e106121e6011","disid":"7","name":"Безенчукский р-н","okato":"36204000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"8b4714f8-2924-41e6-904a-4ee2d8e56141","disid":"7","name":"Богатовский р-н","okato":"36206000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"1f1f02f3-4c2d-476b-aa80-769cc45eacc8","disid":"7","name":"Большеглушицкий р-н","okato":"36208000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"c2be48d4-240a-401e-8462-446a0433df80","disid":"7","name":"Большечерниговский р-н","okato":"36210000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"530671ae-3985-40b3-8a21-2481cdf0bdc5","disid":"7","name":"Борский р-н","okato":"36212000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"7e27aa90-d423-4393-a3a4-332c219dfb4b","disid":"7","name":"Волжский р-н","okato":"36214000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"f787453e-561b-4d05-91db-e3f731be44d9","disid":"7","name":"Елховский р-н","okato":"36215000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"2f44f8ee-a505-46bf-b6de-6648a166295e","disid":"7","name":"Жигулевск г","okato":"36404000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"b32e30da-45fe-478c-ae05-5cd47772ffcf","disid":"7","name":"Исаклинский р-н","okato":"36216000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"827ff414-4a05-4702-a43e-4f4c53639ba6","disid":"7","name":"Камышлинский р-н","okato":"36217000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"8ca7cbe5-a14b-416a-974a-dfa56e7f396a","disid":"7","name":"Кинель г","okato":"36408000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"29c6074e-5d59-48e9-a2e6-f8abe3aaca3a","disid":"7","name":"Кинель-Черкасский р-н","okato":"36220000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"f75d18d4-47f4-42db-b105-acde9933fe90","disid":"7","name":"Кинельский р-н","okato":"36218000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"f9992965-0044-42fa-b0c3-0e6b84ad4e18","disid":"7","name":"Клявлинский р-н","okato":"36222000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"38d094f5-7e47-4a06-8d3e-397c561b77d6","disid":"7","name":"Кошкинский р-н","okato":"36224000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"f808da14-04ec-456b-927e-0d342b2b1df0","disid":"7","name":"Красноармейский р-н","okato":"36226000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"a575d77d-c43c-470e-9c67-24b2b55f959a","disid":"7","name":"Красноярский р-н","okato":"36228000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"b7699806-253c-42f4-8275-616d9d86f88e","disid":"7","name":"Нефтегорский р-н","okato":"36230000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"cda74a83-ae08-4ba2-b01c-c6fc373222cb","disid":"7","name":"Новокуйбышевск г","okato":"36413000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"b9a43610-5c01-4ba8-8de7-95facc7e460d","disid":"7","name":"Октябрьск г","okato":"36418000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"05edd5aa-ab64-4afa-b56c-fd5661a14129","disid":"7","name":"Отрадный г","okato":"36424000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"b93d0cdf-2f08-4c8e-9582-88d1c638a1c2","disid":"7","name":"Пестравский р-н","okato":"36232000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"ddb9cec8-ee07-4788-b80d-39535aea78f9","disid":"7","name":"Похвистнево г","okato":"36427000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"bcd80b12-bad7-4a0e-b4d7-b6ee740bf7d4","disid":"7","name":"Похвистневский р-н","okato":"36234000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"fcae79d1-60bb-421c-9ec7-8256fa2b31c6","disid":"7","name":"Приволжский р-н","okato":"36236000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"bb035cc3-1dc2-4627-9d25-a1bf2d4b936b","disid":"7","name":"Самара г","okato":"36401000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"91a9d70f-c6a4-4e89-9626-9ce57f2d14b5","disid":"7","name":"Сергиевский р-н","okato":"36238000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"75d5f658-5d33-4fb1-af85-97653e397307","disid":"7","name":"Ставропольский р-н","okato":"36240000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"c060bcb7-138a-4b1e-ad38-601eac87dc19","disid":"7","name":"Сызранский р-н","okato":"36242000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"e9e684ce-7d60-4480-ba14-ca6da658188b","disid":"7","name":"Сызрань г","okato":"36435000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"242e87c1-584d-4360-8c4c-aae2fe90048e","disid":"7","name":"Тольятти г","okato":"36440000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"14cd7e4d-1845-4fd4-ba82-f2d2c16734c9","disid":"7","name":"Хворостянский р-н","okato":"36244000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"90a11c8e-c39f-4bcd-9df4-f89bed18958c","disid":"7","name":"Чапаевск г","okato":"36450000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"20003100-5f16-4c6e-a1ff-424686faf01a","disid":"7","name":"Челно-Вершинский р-н","okato":"36246000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"4ca64322-8b50-4f10-91d4-d5a0748d731a","disid":"7","name":"Шенталинский р-н","okato":"36248000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"0d3e1d02-967c-4464-b931-39d8f4495be3","disid":"7","name":"Шигонский р-н","okato":"36250000000","parentguid":"df3d7359-afa9-4aaa-8ff9-197e73906b1c","regioncode":"63"},{"aoguid":"64e03a02-2909-4b8b-ab14-865e70783912","disid":"7","name":"Александрово-Гайский р-н","okato":"63202000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"223159dc-90b7-4263-9b8e-411b5847044d","disid":"7","name":"Аркадакский р-н","okato":"63203000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"6f9e3e0b-3872-4abf-a2ba-23ae4b196a73","disid":"7","name":"Аткарск г","okato":"63404000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"5e5f312a-a1d4-44bb-a9d1-4f3ee1049638","disid":"7","name":"Аткарский р-н","okato":"63204000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"db61110d-6a85-40e3-8be1-69d38ec713c4","disid":"7","name":"Базарно-Карабулакский р-н","okato":"63206000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"45eea4e7-2977-44bb-9b3d-ef8e9198e5d2","disid":"7","name":"Балаково г","okato":"63407000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"9e4cfe42-8660-4b67-bba8-c671df22e694","disid":"7","name":"Балаковский р-н","okato":"63207000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"574ddbe6-5e16-4e5b-9cf5-5f3be3a8a6c9","disid":"7","name":"Балашов г","okato":"63410000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"a67f03b4-6b92-44d2-9e26-5f2889e54d60","disid":"7","name":"Балашовский р-н","okato":"63208000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"70cfb46e-96ce-4e3c-81dc-d679e9e9bc3b","disid":"7","name":"Балтайский р-н","okato":"63209000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"83f29047-8dd9-411d-ac4b-c5811ea815f1","disid":"7","name":"Вольск г","okato":"63413000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"c9135152-e83c-4282-a10e-fac5e35390c1","disid":"7","name":"Вольский р-н","okato":"63211000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"73dbf8f9-5893-42bb-8b9c-c5be261c6837","disid":"7","name":"Воскресенский р-н","okato":"63212000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"e4848d64-ed2c-4a38-8afb-02ea3db35900","disid":"7","name":"Дергачевский р-н","okato":"63213000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"b401fa28-7440-4859-a237-a41373f0307f","disid":"7","name":"Духовницкий р-н","okato":"63214000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"1f2bd26a-78d0-49f2-9938-6c71d0c109b1","disid":"7","name":"Екатериновский р-н","okato":"63216000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"70ef1dda-f6fc-42fb-bc4a-300863408e47","disid":"7","name":"Ершовский р-н","okato":"63217000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"599eef2b-3908-4438-a314-502dd6f7ef6d","disid":"7","name":"Ивантеевский р-н","okato":"63219000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"b1d1deb0-b2b3-4692-b10e-719c5f5de70d","disid":"7","name":"Калининский р-н","okato":"63221000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"64954753-8e36-4948-9372-af3a08e88d57","disid":"7","name":"Красноармейск г","okato":"63418000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"08c9e892-08be-4764-acc7-58864a3a41a1","disid":"7","name":"Красноармейский р-н","okato":"63222000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"6e46e9ae-70d8-41f1-abc3-f464a061ba5d","disid":"7","name":"Краснокутский р-н","okato":"63223000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"31515b21-b416-431b-b564-1609391a6843","disid":"7","name":"Краснопартизанский р-н","okato":"63224000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"1dd39103-492f-444d-b36c-e9579736ce85","disid":"7","name":"Лысогорский р-н","okato":"63225000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"c1a0ca30-8b42-4cc8-a16d-2d3392937621","disid":"7","name":"Маркс г","okato":"63422000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"edbcf68e-e0fe-40c1-be11-a62fc3baa90f","disid":"7","name":"Марксовский р-н","okato":"63226000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"e2696fe1-fcd6-4ac3-a48c-6e6ad2ba9c63","disid":"7","name":"Новобурасский р-н","okato":"63229000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"9d6eacba-68e4-49e9-bf24-00466ed7d650","disid":"7","name":"Новоузенский р-н","okato":"63230000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"7a9e315a-ae86-4a7f-82c8-8bbfdcb4363c","disid":"7","name":"Озинский р-н","okato":"63232000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"7782e44f-5f01-40d4-b799-15dc88737a2a","disid":"7","name":"Перелюбский р-н","okato":"63234000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"b5d97e65-e496-44d0-b025-398a8d43514a","disid":"7","name":"Петровск г","okato":"63428000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"22be1583-5af0-4da7-8b71-b29ae4bae2f9","disid":"7","name":"Петровский р-н","okato":"63235000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"cf825a14-9b16-462c-a5bf-ddedf8353678","disid":"7","name":"Питерский р-н","okato":"63236000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"c1d4d969-0083-4b04-9f4b-e9eaeaefbd6f","disid":"7","name":"Пугачев г","okato":"63435000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"60b2c8d5-a7b3-412e-9edd-56508c38c12a","disid":"7","name":"Пугачевский р-н","okato":"63237000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"97983881-55f7-4b72-910a-1bcca8115ca6","disid":"7","name":"Ровенский р-н","okato":"63239000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"60f03977-1591-402a-9cb8-53ce4fa691d5","disid":"7","name":"Романовский р-н","okato":"63240000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"d08bbea8-4fa3-4597-87ae-0bd79b4a89d2","disid":"7","name":"Ртищево г","okato":"63440000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"465956b7-7f6b-495c-a1cc-df750af80c28","disid":"7","name":"Ртищевский р-н","okato":"63241000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"04f77757-8a76-46e8-b544-057c575411c7","disid":"7","name":"Самойловский р-н","okato":"63242000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"bf465fda-7834-47d5-986b-ccdb584a85a6","disid":"7","name":"Саратов г","okato":"63401000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"d3f6c99d-359a-4e3f-b3a6-271cd1da7b44","disid":"7","name":"Саратовский р-н","okato":"63243000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"33906570-21b8-40e1-9539-a9fd4f7dbcc4","disid":"7","name":"Советский р-н","okato":"63244000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"6f4a1fda-0378-4f06-a478-1db13603caac","disid":"7","name":"Татищевский р-н","okato":"63246000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"0e380569-cb86-4945-9c7b-6a141028b0b6","disid":"7","name":"Турковский р-н","okato":"63247000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"1cba9deb-f79a-4775-aa23-8ebdb3deb94e","disid":"7","name":"Федоровский р-н","okato":"63248000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"ac586a68-2f14-403e-9ce0-46c01832652d","disid":"7","name":"Хвалынск г","okato":"63445000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"93f75409-d60d-4fdf-b0df-49e3e7876e94","disid":"7","name":"Хвалынский р-н","okato":"63249000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"6c6b065e-9f1c-4afd-ac61-ff8338972818","disid":"7","name":"Шиханы г","okato":"63545000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"c58d0505-54eb-4c34-8216-b14f7cdb0ecb","disid":"7","name":"Энгельс г","okato":"63450000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"ec80945b-845b-4b2e-be46-6c9013525304","disid":"7","name":"Энгельс-19 г","okato":"63450554000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"290421a7-52bf-43a1-ad09-118b6903daac","disid":"7","name":"Энгельс-2 г","okato":"63450554000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"7051ab15-7d76-4817-9bec-b61e18ef91d2","disid":"7","name":"Энгельсский р-н","okato":"63250000000","parentguid":"df594e0e-a935-4664-9d26-0bae13f904fe","regioncode":"64"},{"aoguid":"3b67dc8e-79b1-43f4-8f9e-2b4990a1a922","disid":"7","name":"Агрызский р-н","okato":"92201000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"25108675-9fd9-4325-a1fd-c392c3feedac","disid":"7","name":"Азнакаевский р-н","okato":"92202000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"c4339d8a-d4ef-42e0-be75-6bc551956e5c","disid":"7","name":"Аксубаевский р-н","okato":"92204000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"bb9c86eb-30de-4b8f-9ea8-9edc71fc0488","disid":"7","name":"Актанышский р-н","okato":"92205000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"f7521d33-7cf3-4f6e-bb66-d9e04912b6fc","disid":"7","name":"Алексеевский р-н","okato":"92206000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"1053347b-4de8-405d-970e-b42003d49916","disid":"7","name":"Алькеевский р-н","okato":"92207000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"b10beeff-7669-45aa-9127-b1cc9db1cc4c","disid":"7","name":"Альметьевский р-н","okato":"92208000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"67e7162e-14d0-4418-9923-a948ed6c2936","disid":"7","name":"Апастовский р-н","okato":"92210000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"8b3bfb8a-d712-4ecd-9192-a7259ea141dc","disid":"7","name":"Арский р-н","okato":"92212000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"72faa57c-6281-4758-9ba3-516558f19eab","disid":"7","name":"Атнинский р-н","okato":"92213000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"a2093ccb-a5b8-4956-ad05-c0886fc95cdb","disid":"7","name":"Бавлинский р-н","okato":"92214000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"7fca8877-4ce1-443d-b64b-7bf6fb84198a","disid":"7","name":"Балтасинский р-н","okato":"92215000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"c4fc378d-08d2-4adc-851f-fe35335e6bc8","disid":"7","name":"Бугульминский р-н","okato":"92217000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"2f40b5af-a9f6-4056-8581-48c9d5c44e7e","disid":"7","name":"Буинский р-н","okato":"92218000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"6c1c7db4-37b3-4544-9a47-255c02207388","disid":"7","name":"Верхнеуслонский р-н","okato":"92220000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"56197a9f-2b30-486d-b31a-21d93c589bb7","disid":"7","name":"Высокогорский р-н","okato":"92222000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"a22f07cb-1481-4278-8182-e342b2f0785d","disid":"7","name":"Дрожжановский р-н","okato":"92224000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"ac240902-34b0-491c-896b-af76cf6fd4ac","disid":"7","name":"Елабужский р-н","okato":"92226000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"3a44bebe-99e7-4e97-b79a-ea36b34e6be1","disid":"7","name":"Заинский р-н","okato":"92227000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"163ed231-c194-4452-ab1a-7f991b4d2f5c","disid":"7","name":"Зеленодольский р-н","okato":"92228000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"93b3df57-4c89-44df-ac42-96f05e9cd3b9","disid":"7","name":"Казань г","okato":"92401000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"cc249bd4-51d8-4bc6-bdda-340229f439d2","disid":"7","name":"Кайбицкий р-н","okato":"92229000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"7e6e53c8-30d0-4d74-8749-2edb12566989","disid":"7","name":"Камско-Устьинский р-н","okato":"92230000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"0298be6c-8d8a-4f33-b742-8b8769d86d17","disid":"7","name":"Кукморский р-н","okato":"92233000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"d11bb1b1-27ae-44b6-9d0e-b6fa43f75625","disid":"7","name":"Лаишевский р-н","okato":"92234000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"75387230-9ca5-4239-be4d-dc4a77a2d6ab","disid":"7","name":"Лениногорский р-н","okato":"92236000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"fdc0d460-4cf0-4dce-9887-043d181c558e","disid":"7","name":"Мамадышский р-н","okato":"92238000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"d5b8fcfb-74a9-4cfa-88e6-e508cb85575b","disid":"7","name":"Менделеевский р-н","okato":"92239000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"72a8ac4a-7c51-4b54-be84-03c9ab3ca362","disid":"7","name":"Мензелинский р-н","okato":"92240000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"4d9587db-77da-4f96-8331-bf04599a2878","disid":"7","name":"Муслюмовский р-н","okato":"92242000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"748d7afa-7407-4876-9f40-764ecdd09bbd","disid":"7","name":"Набережные Челны г","okato":"92430000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"dd36813f-e9e1-482c-8e77-02397d0a3eb3","disid":"7","name":"Нижнекамский р-н","okato":"92244000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"ffe9978a-c14a-41d8-8b21-06233b063267","disid":"7","name":"Новошешминский р-н","okato":"92245000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"69dd0cab-c31d-4345-8429-b8540728c484","disid":"7","name":"Нурлатский р-н","okato":"92246000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"64bad346-6dda-4d89-be4e-3e73b0cf1f45","disid":"7","name":"Пестречинский р-н","okato":"92248000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"5d20a8a2-cd23-4af0-8f66-0a509ba9e84d","disid":"7","name":"Рыбно-Слободский р-н","okato":"92250000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"d2a1137e-e196-46d3-a8f8-e7cfbb86412b","disid":"7","name":"Сабинский р-н","okato":"92252000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"f1ca5836-fb9f-4829-9d31-e4fbb3106813","disid":"7","name":"Сармановский р-н","okato":"92253000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"81b32a2d-34a6-4ef8-bc97-005c3d5d2b0e","disid":"7","name":"Спасский р-н","okato":"92232000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"ff141bdc-ba5a-4d93-ba21-f114931ee193","disid":"7","name":"Тетюшский р-н","okato":"92255000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"e1594936-3d9f-48d0-9699-6a313885cad1","disid":"7","name":"Тукаевский р-н","okato":"92257000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"6ac28e96-74ec-44b4-a912-5c4c4cea01af","disid":"7","name":"Тукая р-н","okato":"92228000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"ee0c0b9a-c5fe-4c81-a966-93b8af831441","disid":"7","name":"Тюлячинский р-н","okato":"92256000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"75124fb3-dd85-42b7-8471-ccea65e6f60f","disid":"7","name":"Черемшанский р-н","okato":"92258000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"019d7b51-664b-452f-aab7-0f6a73d81dcb","disid":"7","name":"Чистопольский р-н","okato":"92259000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"6efefcee-49b7-403b-b719-46b80cf8d1a8","disid":"7","name":"Ютазинский р-н","okato":"92254000000","parentguid":"0c089b04-099e-4e0e-955a-6bf1ce525f1a","regioncode":"16"},{"aoguid":"a09e3cff-361c-4f1c-a6c6-a5af13cead2f","disid":"7","name":"Алнашский р-н","okato":"94202000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"2fa6c3b9-173a-44f5-889e-051b7dead725","disid":"7","name":"Балезинский р-н","okato":"94204000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"2147a660-d905-41b8-b783-42280660896f","disid":"7","name":"Вавожский р-н","okato":"94206000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"d948319d-b151-48f5-9791-22ccfeeabfe7","disid":"7","name":"Воткинск г","okato":"94410000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"a2750c1b-8dc3-48a4-a7fc-6d07804ff49a","disid":"7","name":"Воткинский р-н","okato":"94208000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"afeea607-0207-467f-8c59-562fc634f924","disid":"7","name":"Глазов г","okato":"94420000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"35d9d03b-9763-42bf-8187-27d7de1b65dc","disid":"7","name":"Глазовский р-н","okato":"94210000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"48dc8855-8722-4334-b510-fb6ca43cfd46","disid":"7","name":"Граховский р-н","okato":"94212000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"42db791d-d878-4341-86d1-e65189201e1f","disid":"7","name":"Дебесский р-н","okato":"94214000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"0138fa72-5d23-4bc1-ae4f-900249c9e011","disid":"7","name":"Завьяловский р-н","okato":"94216000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"bc661ab5-e36e-4541-b82c-6bf18fbc8595","disid":"7","name":"Игринский р-н","okato":"94218000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"deb1d05a-71ce-40d1-b726-6ba85d70d58f","disid":"7","name":"Ижевск г","okato":"94401000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"8a0f1307-150f-46f9-aa76-7c82a7c796c2","disid":"7","name":"Камбарский р-н","okato":"94220000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"78dfc379-41b1-4e85-bec2-8963127bc355","disid":"7","name":"Каракулинский р-н","okato":"94222000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"7ce7e613-4347-4a44-9fba-8d81ac19ab3c","disid":"7","name":"Кезский р-н","okato":"94224000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"4938bc93-67cb-41aa-a058-9103f05862cc","disid":"7","name":"Кизнерский р-н","okato":"94226000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"ae204580-6e2d-41c6-a233-48e1f3aad3e7","disid":"7","name":"Киясовский р-н","okato":"94228000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"e68b30d9-ee15-43f2-af77-487d22b464c6","disid":"7","name":"Красногорский р-н","okato":"94230000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"f2973df9-0808-4c27-b171-b10d1cfca1c9","disid":"7","name":"Малопургинский р-н","okato":"94233000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"7096d8a5-2b41-47b1-95ae-35efcbc07dee","disid":"7","name":"Можга г","okato":"94430000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"511c2eef-602e-46c3-9aa6-6edab7e2a861","disid":"7","name":"Можгинский р-н","okato":"94235000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"e69a280f-9064-490e-bae0-8bd39527872f","disid":"7","name":"Сарапул г","okato":"94440000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"4693325a-809a-48f8-8a53-1dd68e3c0fac","disid":"7","name":"Сарапульский р-н","okato":"94237000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"db8abeb7-8603-45e9-8fbe-d847bbbe6729","disid":"7","name":"Селтинский р-н","okato":"94239000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"133f5360-8fd4-4ded-9777-b829be9d1c83","disid":"7","name":"Сюмсинский р-н","okato":"94241000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"effd4b1a-3c3c-4ff3-b584-99c9413d485e","disid":"7","name":"Увинский р-н","okato":"94244000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"dd78a219-a6b5-4e93-828d-42c286125a3d","disid":"7","name":"Шарканский р-н","okato":"94246000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"85b4bfdb-23a3-425e-b781-b20a294f0da1","disid":"7","name":"Юкаменский р-н","okato":"94248000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"7c18eacc-34b1-46e6-b5f2-79daf23d59ae","disid":"7","name":"Якшур-Бодьинский р-н","okato":"94250000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"bd09c1ed-7191-4286-b532-feb1927ee8cd","disid":"7","name":"Ярский р-н","okato":"94252000000","parentguid":"52618b9c-bcbb-47e7-8957-95c63f0b17cc","regioncode":"18"},{"aoguid":"1237299b-ecf4-46a8-9fb3-c85777686160","disid":"7","name":"Базарносызганский р-н","okato":"73202000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"52cccd1a-84fd-448a-a91e-36f113b9946f","disid":"7","name":"Барыш г","okato":"73204501000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"008e11ab-ea60-4975-a17a-dab62ce710a7","disid":"7","name":"Барышский р-н","okato":"73204000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"f06417b8-4f14-485f-90e8-5d7e4652fd75","disid":"7","name":"Вешкаймский р-н","okato":"73207000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"73b29372-242c-42c5-89cd-8814bc2368af","disid":"7","name":"Димитровград г","okato":"73405000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"7d122883-9a3c-4806-9bcb-746619a32b49","disid":"7","name":"Инзенский р-н","okato":"73210000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"19dc9552-9cf2-49bb-a07c-b3f9df23449c","disid":"7","name":"Карсунский р-н","okato":"73214000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"dcca0fd2-ae41-4286-84dd-4b4338b78433","disid":"7","name":"Кузоватовский р-н","okato":"73216000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"357909d8-3934-4057-8ab4-f56e7bb5b9a3","disid":"7","name":"Майнский р-н","okato":"73220000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"214a98f4-bd25-402b-9876-ce91d69b70a2","disid":"7","name":"Мелекесский р-н","okato":"73222000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"f611fa66-3d3a-42ed-bdf0-e66031c8bb1a","disid":"7","name":"Николаевский р-н","okato":"73225000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"61227e6b-576a-4bae-8dae-a999bef0ca7e","disid":"7","name":"Новомалыклинский р-н","okato":"73227000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"fd63623d-b087-40e6-840d-765bf8f5b83e","disid":"7","name":"Новоспасский р-н","okato":"73229000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"c21a50ef-de67-477c-887b-a1202730ee8e","disid":"7","name":"Новоульяновск г","okato":"73415000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"1034327d-5c79-49c7-9f2d-12ff052ee0fb","disid":"7","name":"Павловский р-н","okato":"73232000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"87586c9b-e69a-48ec-83f5-558a2b49c185","disid":"7","name":"Радищевский р-н","okato":"73234000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"6d27a8b1-3a58-404f-ac46-257cc4dfc3bc","disid":"7","name":"Сенгилеевский р-н","okato":"73236000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"f8ef6274-5888-4895-9b9e-98d191e4823a","disid":"7","name":"Старокулаткинский р-н","okato":"73239000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"b2945468-b088-47fe-8716-ba3087172390","disid":"7","name":"Старомайнский р-н","okato":"73242000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"b9563e96-e6c5-4e93-aefd-0ff3ec60e415","disid":"7","name":"Сурский р-н","okato":"73244000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"69967d73-5f38-4606-a751-bc57ceb6d41e","disid":"7","name":"Тереньгульский р-н","okato":"73248000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"bebfd75d-a0da-4bf9-8307-2e2c85eac463","disid":"7","name":"Ульяновск г","okato":"73401000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"a738e50c-e7a3-4cf5-be30-201d571bdf1a","disid":"7","name":"Ульяновский р-н","okato":"73252000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"e9d28891-7536-4aaf-aa97-c12bd2c6c16e","disid":"7","name":"Цильнинский р-н","okato":"73254000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"6fa6274c-047b-43ab-9c81-da4c98704d16","disid":"7","name":"Чердаклинский р-н","okato":"73256000000","parentguid":"fee76045-fe22-43a4-ad58-ad99e903bd58","regioncode":"73"},{"aoguid":"6062cc15-76de-49c0-add2-e84bf1de9b9f","disid":"7","name":"Алатырский р-н","okato":"97203000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"a699e866-12f0-42c3-94fd-67ca44468805","disid":"7","name":"Алатырь г","okato":"97404000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"2085bdb8-ebe3-4c38-95ca-262d756da2da","disid":"7","name":"Аликовский р-н","okato":"97205000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"8af97197-414a-403e-968c-bcaccb25da1a","disid":"7","name":"Батыревский р-н","okato":"97207000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"08096852-0130-4e2f-8bac-54f5b14a9100","disid":"7","name":"Вурнарский р-н","okato":"97210000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"656444b1-a0fd-4203-b5f3-770e442b2373","disid":"7","name":"Ибресинский р-н","okato":"97213000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"6edd2a33-d03a-4d59-83c3-e14de6890a49","disid":"7","name":"Канаш г","okato":"97407000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"e08f62e6-e8b8-4bd5-b3e7-ad0a04a324ef","disid":"7","name":"Канашский р-н","okato":"97216000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"281c4d8f-3487-4685-8876-7fd1548b825c","disid":"7","name":"Козловский р-н","okato":"97219000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"8bdf963a-b727-46ba-a79a-3a6b53ad63f9","disid":"7","name":"Комсомольский р-н","okato":"97221000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"5bf8318a-86be-4e7d-9cf8-00e4298e5a77","disid":"7","name":"Красноармейский р-н","okato":"97224000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"e6be55b9-4ad0-4f49-a4d2-4cfa33ec3288","disid":"7","name":"Красночетайский р-н","okato":"97226000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"1f54c326-1a30-4de9-b63b-8887c2e7fc50","disid":"7","name":"Мариинско-Посадский р-н","okato":"97229000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"9b1f1495-babd-4a98-ac77-0ed2c8b0aeb4","disid":"7","name":"Моргаушский р-н","okato":"97232000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"32599307-3fe7-4cf4-8fee-640044422d68","disid":"7","name":"Новочебоксарск г","okato":"97410000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"05138d51-5cb7-461c-876c-4d39022c53f2","disid":"7","name":"Порецкий р-н","okato":"97235000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"4651f974-e938-4241-8686-7e2bad32e5bc","disid":"7","name":"Урмарский р-н","okato":"97238000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"ecbb1174-d7b8-4bd2-a816-5866b6e5c3d1","disid":"7","name":"Цивильский р-н","okato":"97241000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"75b5fa1f-d054-4207-a56a-1d75e8eae490","disid":"7","name":"Чебоксарский р-н","okato":"97244000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"dd8caeab-c685-4f2a-bf5f-550aca1bbc48","disid":"7","name":"Чебоксары г","okato":"97401000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"144ddb64-8ff6-4396-8ee6-7207bfbde842","disid":"7","name":"Шемуршинский р-н","okato":"97247000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"7b4c974c-07c2-447e-aee3-285105490e72","disid":"7","name":"Шумерлинский р-н","okato":"97250000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"068dfc2d-3a52-4d7f-93bc-797c286e66ac","disid":"7","name":"Шумерля г","okato":"97413000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"37795704-1b76-4cf1-a17b-7d468df54c77","disid":"7","name":"Ядринский р-н","okato":"97253000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"b757ac67-4ee8-4efd-8ca7-00db36b16822","disid":"7","name":"Яльчикский р-н","okato":"97255000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"aa3ebec8-bf5f-4a88-a20b-1baa148db615","disid":"7","name":"Янтиковский р-н","okato":"97258000000","parentguid":"878fc621-3708-46c7-a97f-5a13a4176b3e","regioncode":"21"},{"aoguid":"85f0e9d0-2eef-4393-a6fc-70db6d392e2b","disid":"8","name":"Агульский р-н","okato":"82201000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"0a0a769f-f61b-4108-9646-0051d578eb82","disid":"8","name":"Акушинский р-н","okato":"82203000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"ce1f8432-372b-4385-93dc-4d117b1db302","disid":"8","name":"Ахвахский р-н","okato":"82205000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"d1f1ef86-254d-4eb4-b573-ccb5e1599791","disid":"8","name":"Ахтынский р-н","okato":"82206000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"5dfec640-b5fe-4abd-9999-b5b00a5a8590","disid":"8","name":"Бабаюртовский р-н","okato":"82207000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"97f7f1dc-4e02-4b10-bc2c-d654674d8ff5","disid":"8","name":"Ботлихский р-н","okato":"82209000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"fab58303-fb09-422e-aeb7-6fdb5dfe7941","disid":"8","name":"Буйнакск г","okato":"82405000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"ab422614-a6be-46d4-81da-d556dbae4237","disid":"8","name":"Буйнакский р-н","okato":"82211000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"d38e45bb-bb25-499b-b8b8-b53c3330c435","disid":"8","name":"Гергебильский р-н","okato":"82213000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"aa3b9fdf-4ecc-400b-96a2-c46c7b1b8203","disid":"8","name":"Гумбетовский р-н","okato":"82215000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"47e1fc4c-4ad1-4d03-91f7-981184adcbe7","disid":"8","name":"Гунибский р-н","okato":"82216000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"8b4a997b-1e70-402a-a56a-e93c81d0ff20","disid":"8","name":"Дагестанские Огни г","okato":"82408000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"50d1aa31-1eef-48df-951a-3e89ce79368f","disid":"8","name":"Дахадаевский р-н","okato":"82218000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"1bde5cf4-7943-4b17-9718-2c1d96742be5","disid":"8","name":"Дербент г","okato":"82410000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"35f01ea7-5e6d-42ec-9dd3-0bf62002ff17","disid":"8","name":"Дербентский р-н","okato":"82220000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"58d30030-35f4-4e06-9930-f8eac02c466e","disid":"8","name":"Докузпаринский р-н","okato":"82221000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"bf14786f-6c0e-4369-8907-57f9d3fd93ac","disid":"8","name":"Избербаш г","okato":"82415000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"33af6084-b0a2-406f-9899-f23ced672e0a","disid":"8","name":"Казбековский р-н","okato":"82222000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"83f2eced-b5ff-41e7-a798-9cb1695360c6","disid":"8","name":"Кайтагский р-н","okato":"82223000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"48dc343b-1460-4194-a11b-7343d9584ae3","disid":"8","name":"Карабудахкентский р-н","okato":"82235000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"a8695cce-c623-4451-bb47-2d69ab22092a","disid":"8","name":"Каспийск г","okato":"82420000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"82e41cd2-4ce8-4496-a4c1-2ec21d6f4af1","disid":"8","name":"Каякентский р-н","okato":"82224000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"efc8a6e2-ffab-4d69-a35b-019bfe89745e","disid":"8","name":"Кизилюрт г","okato":"82425000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"ccbc2084-f8f1-4d1c-8e62-0cd4622757fb","disid":"8","name":"Кизилюртовский р-н","okato":"82226000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"e18e67f7-e62a-4abe-853c-ffb8e5ab57e1","disid":"8","name":"Кизляр г","okato":"82430000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"ddda03ea-0b8b-4c00-9b1f-47b1c1396321","disid":"8","name":"Кизлярский р-н","okato":"82227000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"e8c63341-9ffe-4232-8410-7aa17a017b28","disid":"8","name":"Кулинский р-н","okato":"82229000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"ccdb090c-202e-4826-b684-3d3fa93eb1c5","disid":"8","name":"Кумторкалинский р-н","okato":"82236000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"e5f3e12c-08af-4578-acd0-b647372e587f","disid":"8","name":"Курахский р-н","okato":"82230000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"328172fa-e4d2-48fa-9029-15ce6ef5b01f","disid":"8","name":"Лакский р-н","okato":"82232000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"953ec287-c1d5-4fe5-bf7c-883343ea2688","disid":"8","name":"Левашинский р-н","okato":"82234000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"f3e35a89-84c6-48bc-8663-6ccebea9001c","disid":"8","name":"Магарамкентский р-н","okato":"82237000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"727cdf1e-1b70-4e07-8995-9bf7ca9abefb","disid":"8","name":"Махачкала г","okato":"82401000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"cfb81dee-463e-492f-83ca-f868e587fd15","disid":"8","name":"Новолакский р-н","okato":"82239000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"4d9b6817-b018-4a51-a6c2-90b5ed3b7d70","disid":"8","name":"Ногайский р-н","okato":"82240000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"2045091f-d193-4192-806f-63137ee168ee","disid":"8","name":"Рутульский р-н","okato":"82242000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"4c0aa2d7-166d-4d0a-a1f8-b09cb1a9e119","disid":"8","name":"Сергокалинский р-н","okato":"82244000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"c5fc372c-3f49-4342-ba50-bdcfb83f17b1","disid":"8","name":"Сулейман-Стальский р-н","okato":"82247000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"5739240f-becb-49c0-be5e-16d0390dae29","disid":"8","name":"Табасаранский р-н","okato":"82248000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"7773a56a-e055-4754-a598-049346ec0877","disid":"8","name":"Тарумовский р-н","okato":"82249000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"856a5f6b-4533-46da-b866-8bb72d711350","disid":"8","name":"Тляратинский р-н","okato":"82251000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"45ac49c5-1789-4be2-aca2-f88c277e1d8b","disid":"8","name":"Унцукульский р-н","okato":"82253000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"b10ca6a7-e9c0-4382-b939-4787aaf43a58","disid":"8","name":"Хасавюрт г","okato":"82435000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"c6afea54-def9-4ce4-a463-a068dc1bd9a6","disid":"8","name":"Хасавюртовский р-н","okato":"82254000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"31278957-bac1-420c-9731-447a724d15f3","disid":"8","name":"Хивский р-н","okato":"82255000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"92ce3e17-234f-4749-b51c-5c9b4e4cf878","disid":"8","name":"Хунзахский р-н","okato":"82256000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"12587456-05b7-4731-a8cc-f0c1f1a6ab51","disid":"8","name":"Цумадинский р-н","okato":"82257000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"a064c28e-7d68-4da3-ac07-69d9e7337554","disid":"8","name":"Цунтинский р-н","okato":"82258000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"9e7e566c-26e9-4b02-a26f-a4cd8baf91e7","disid":"8","name":"Чародинский р-н","okato":"82259000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"baa17a03-5a8f-47ee-b782-ed9a6d2fb93c","disid":"8","name":"Шамильский р-н","okato":"82246000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"733221a2-f789-4dda-a3f4-e41c88b6cfbd","disid":"8","name":"Южно-Сухокумск г","okato":"82438000000","parentguid":"0bb7fa19-736d-49cf-ad0e-9774c4dae09b","regioncode":"05"},{"aoguid":"5ded8743-ed0b-4a3a-a979-82580e1957c4","disid":"8","name":"Джейрахский р-н","okato":"26205000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"2c33c72e-642b-4a7e-afe5-982f5adf6b17","disid":"8","name":"Карабулак г","okato":"26408000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"c801edb4-aba2-4e1d-9ab2-69fcbf0aeb9c","disid":"8","name":"Магас г","okato":"26401000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"5c318987-0763-4822-9c57-0d55e40fb9d7","disid":"8","name":"Малгобек г","okato":"26405000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"821a2a55-920c-45a3-a4d3-4efa977eedb3","disid":"8","name":"Малгобекский р-н","okato":"26215000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"8e264cfb-50de-4619-9c51-49311029a657","disid":"8","name":"Назрановский р-н","okato":"26220000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"815566a1-04ea-44a9-b34b-25b70ac9aa9a","disid":"8","name":"Назрань г","okato":"26406000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"d354ee1a-c1c4-4760-a106-9c48e31d26a1","disid":"8","name":"Сунженский р-н","okato":"26230000000","parentguid":"b2d8cd20-cabc-4deb-afad-f3c4b4d55821","regioncode":"06"},{"aoguid":"91219cca-5824-4104-af67-df325cd6cfc1","disid":"8","name":"Баксанский р-н","okato":"83210000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"b7f7cac5-7849-4664-b5bf-711dfdc80fed","disid":"8","name":"Зольский р-н","okato":"83215000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"1b676cbe-b38f-4cbe-a6f1-fc27842ab11c","disid":"8","name":"Лескенский р-н","okato":"83218000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"bc9ab784-5caa-4a76-b461-5c4af6148e76","disid":"8","name":"Майский р-н","okato":"83220000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"913a82e3-b671-43d5-97b4-8a08b8ee2d28","disid":"8","name":"Нальчик г","okato":"83401000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"c0f5c483-3a72-4244-9e18-bc6b232b92dd","disid":"8","name":"Прохладненский р-н","okato":"83225000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"3fc11139-78c9-46f1-8d1f-a5bfab5b0580","disid":"8","name":"Терский р-н","okato":"83235000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"14a48392-f852-44e5-becc-3cc77b2f970d","disid":"8","name":"Урванский р-н","okato":"83240000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"40aabbdc-2358-4213-bc9d-928e3e1f6e1d","disid":"8","name":"Чегемский р-н","okato":"83245000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"2df9d3b8-0931-4dfb-b8cb-063fd17d2ab3","disid":"8","name":"Черекский р-н","okato":"83230000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"b2d783ec-e042-49fc-ad2c-5563e5b76002","disid":"8","name":"Эльбрусский р-н","okato":"83248000000","parentguid":"1781f74e-be4a-4697-9c6b-493057c94818","regioncode":"07"},{"aoguid":"a1c3fe01-b49d-447b-88a2-49514bea71cd","disid":"8","name":"Абазинский р-н","okato":"91201000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"5da88b67-f820-46a0-8ddd-90bff8d1b371","disid":"8","name":"Адыге-Хабльский р-н","okato":"91203000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"5a2d8ffa-23d8-4dba-b389-77020a826470","disid":"8","name":"Зеленчукский р-н","okato":"91210000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"cb390fbd-3149-4ac9-b9fb-6af069d51b71","disid":"8","name":"Карачаевск г","okato":"91405000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"183c4921-1906-4043-af46-45c33860d840","disid":"8","name":"Карачаевский р-н","okato":"91215000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"86796969-7095-40d2-96d2-39689863a111","disid":"8","name":"Малокарачаевский р-н","okato":"91220000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"aa79bf7f-0cae-43aa-b144-ecbab1305573","disid":"8","name":"Ногайский р-н","okato":"91223000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"16f73605-1164-4fc9-ab1c-0fa8b0c468f9","disid":"8","name":"Прикубанский р-н","okato":"91225000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"e4add96a-eec6-43ee-afb7-c6dfb1e0d01d","disid":"8","name":"Урупский р-н","okato":"91230000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"cd7b9207-56ad-4c20-a35e-a9607aa7ec3f","disid":"8","name":"Усть-Джегутинский р-н","okato":"91235000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"e1523864-4a43-493b-b7b1-97b2aa8297c3","disid":"8","name":"Хабезский р-н","okato":"91240000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"2a4a7c93-f3f8-4042-8cbf-e04ab64f5e08","disid":"8","name":"Черкесск г","okato":"91401000000","parentguid":"61b95807-388a-4cb1-9bee-889f7cf811c8","regioncode":"09"},{"aoguid":"ee8a6847-ce62-402b-a114-4129f5148f80","disid":"8","name":"Алагирский р-н","okato":"90205000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"b3ef5dc0-459b-4766-b33e-1ddf6c916f05","disid":"8","name":"Ардонский р-н","okato":"90210000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"20ea2341-4f49-4c5c-a9dc-a54688c8cc61","disid":"8","name":"Владикавказ г","okato":"90401000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"80731fd9-e247-4fbb-a4ff-69627d07466a","disid":"8","name":"Дигорский р-н","okato":"90215000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"25b2f567-73c2-4662-ab8f-39e6df9959e2","disid":"8","name":"Ирафский р-н","okato":"90220000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"2ff96663-1835-4272-a102-c722e1f4d57b","disid":"8","name":"Кировский р-н","okato":"90225877001","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"d04c0f8c-fe4d-4b5a-ad8e-a43f3be133c9","disid":"8","name":"Моздокский р-н","okato":"90230000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"47d4bad2-d6af-4170-a318-7f954bf21f90","disid":"8","name":"Правобережный р-н","okato":"90235000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"5f2f61c4-d613-49e0-b1b0-2d5c454043f0","disid":"8","name":"Пригородный р-н","okato":"90240000000","parentguid":"de459e9c-2933-4923-83d1-9c64cfd7a817","regioncode":"15"},{"aoguid":"27c23689-cba0-4d3e-bae1-1590756eaedc","disid":"8","name":"Александровский р-н","okato":"07202802000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"6a53ed6d-3b39-4749-98cf-a998838960a8","disid":"8","name":"Андроповский р-н","okato":"07232000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"c97e45d4-46ed-4cae-b136-9671d729f8af","disid":"8","name":"Апанасенковский р-н","okato":"07205000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"15087cf4-8055-4af5-89db-a4d759eebaba","disid":"8","name":"Арзгирский р-н","okato":"07207000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"3a45bd08-511f-4992-88ed-7654f7d49835","disid":"8","name":"Благодарненский р-н","okato":"07210000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"e9e849f1-2279-4ef4-ad84-beae5eac4da5","disid":"8","name":"Буденновский р-н","okato":"07212000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"ea88bcba-c562-438a-9115-8b32426b0c8e","disid":"8","name":"Георгиевск г","okato":"07407000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"660b0843-2768-42a9-8164-b9a4e427a9cc","disid":"8","name":"Георгиевский р-н","okato":"07215000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"41fd0e9d-3258-4c3b-af2f-60e196ad1c21","disid":"8","name":"Грачевский р-н","okato":"07217000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"0ca8280c-89cb-4c81-8a99-ae10a98416bc","disid":"8","name":"Ессентуки г","okato":"07410000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"f231a6e9-5631-44a6-80bf-585e9491165e","disid":"8","name":"Железноводск г","okato":"07412000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"2a8b7ef1-8d82-4e3e-95b0-b9b8933c49eb","disid":"8","name":"Изобильненский р-н","okato":"07220000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"2f01399c-433d-4e14-b417-f89e08a4f683","disid":"8","name":"Ипатовский р-н","okato":"07222000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"9de10658-2336-4b2d-9f1d-5244ef1a80aa","disid":"8","name":"Кировский р-н","okato":"07225000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"82551e9e-14a4-4414-ad60-6cc944763ff3","disid":"8","name":"Кисловодск г","okato":"07415000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"d0239ce6-5176-47be-a7a2-52de5ffcdb56","disid":"8","name":"Кочубеевский р-н","okato":"07228000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"5b66a096-afbc-4cb5-99da-c63d94dc28b9","disid":"8","name":"Красногвардейский р-н","okato":"07230000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"03c63d2b-721b-4da1-b4af-9380115d9c94","disid":"8","name":"Курский р-н","okato":"07233000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"52cad460-2f80-4b2c-9e29-df36dd731981","disid":"8","name":"Левокумский р-н","okato":"07236000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"3808db7f-f793-40d0-ad74-691c158bc2de","disid":"8","name":"Лермонтов г","okato":"07418000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"c4b0aa8d-32a4-4a7a-afe1-fe575a4f4487","disid":"8","name":"Минераловодский р-н","okato":"07239000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"0be84f75-bbb5-4471-9d0c-dfa932f5df7d","disid":"8","name":"Минеральные Воды г","okato":"07421000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"ff894fb7-acb4-4edf-bb48-c5349d89579b","disid":"8","name":"Невинномысск г","okato":"07424000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"ec4208b4-09dc-4abf-940e-35f33d374c9b","disid":"8","name":"Нефтекумский р-н","okato":"07241000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"f8d22184-8066-4eb8-bbaa-389dbdc196b5","disid":"8","name":"Новоалександровский р-н","okato":"07243000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"d9912842-e84f-4892-b4d9-205bbc7bfbe9","disid":"8","name":"Новоселицкий р-н","okato":"07244000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"74275c7d-b864-4048-b9bc-139c58331098","disid":"8","name":"Петровский р-н","okato":"07246000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"1a3c9b5a-e189-481f-a806-91e19493209f","disid":"8","name":"Предгорный р-н","okato":"07248000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"9b0efbd0-22bb-400d-86db-ddc69b9939d9","disid":"8","name":"Пятигорск г","okato":"07427000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"13fa1033-4596-46cb-a636-fc8951c60e21","disid":"8","name":"Советский р-н","okato":"07250000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"2a1c7bdb-05ea-492f-9e1c-b3999f79dcbc","disid":"8","name":"Ставрополь г","okato":"07401000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"ebbe2fa8-2c9e-4895-a336-2aea03cbe059","disid":"8","name":"Степновский р-н","okato":"07252000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"d54e6c03-565c-492a-b155-0333d8f84d7d","disid":"8","name":"Труновский р-н","okato":"07254000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"51e6a2bc-ef6a-48d5-90e2-0bf4a534b904","disid":"8","name":"Туркменский р-н","okato":"07256000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"e0d1e5a8-8596-4c26-afe9-431427bee578","disid":"8","name":"Шпаковский р-н","okato":"07258000000","parentguid":"327a060b-878c-4fb4-8dc4-d5595871a3d8","regioncode":"26"},{"aoguid":"3672454d-2697-4ce1-9666-cc9c744ba5c5","disid":"8","name":"Аргун г","okato":"96402000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"dd1eaca9-03df-4cb3-a3f2-1ecd4f987491","disid":"8","name":"Ачхой-Мартановский р-н","okato":"96202000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"f23f36c4-64fb-4233-a4bb-c30b74ceb476","disid":"8","name":"Веденский р-н","okato":"96204000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"8dcbac42-7c41-44fb-b8bf-6a0c4e9ac4a5","disid":"8","name":"Грозненский р-н","okato":"96207000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"a2072dc5-45be-4db3-ab13-10784ba8b2ae","disid":"8","name":"Грозный г","okato":"96401000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"e402d731-a356-45a3-8f42-ded4d4b4759c","disid":"8","name":"Гудермесский р-н","okato":"96210000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"a494979b-337b-4fa6-a858-c861de7769d6","disid":"8","name":"Итум-Калинский р-н","okato":"96211000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"2ab87546-5084-489a-a8fa-83330d138bcb","disid":"8","name":"Курчалоевский р-н","okato":"96212000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"64c1af4e-8ef9-40de-8870-696e77d1d1be","disid":"8","name":"Надтеречный р-н","okato":"96216000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"adac25fb-cf81-45d2-90d0-0f9dd83bdab6","disid":"8","name":"Наурский р-н","okato":"96222000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"a45b55a3-26d3-494f-b580-e0629a6cc173","disid":"8","name":"Ножай-Юртовский р-н","okato":"96225000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"58020e72-04fb-4d94-a8f5-8fc01dc84734","disid":"8","name":"Сунженский р-н","okato":"96231000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"3737082d-0752-4a84-a1e0-fab6c8a3603e","disid":"8","name":"Урус-Мартановский р-н","okato":"96234000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"d2cbe9c5-b602-4198-890f-f1acbdc63318","disid":"8","name":"Шалинский р-н","okato":"96237000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"616fa740-d435-4eae-a4fa-d7cd6cae7b7b","disid":"8","name":"Шаройский р-н","okato":"96291000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"521db90d-65f5-4789-8d07-542cbc03db6e","disid":"8","name":"Шатойский р-н","okato":"96228000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"},{"aoguid":"d69b52ac-590f-4f88-8419-6874dcec2821","disid":"8","name":"Шелковской р-н","okato":"96240000000","parentguid":"de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e","regioncode":"20"}]};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(24),
    baseFilter = __webpack_require__(53),
    baseIteratee = __webpack_require__(72),
    isArray = __webpack_require__(3);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(0);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(7)(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (true) {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(2);
  var ReactPropTypesSecret = __webpack_require__(3);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(0);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(2);

var ReactPropTypesSecret = __webpack_require__(3);
var checkPropTypes = __webpack_require__(6);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by jerry on 16/9/5.
 */

var React = __webpack_require__(5);
var PropTypes = __webpack_require__(4);

function touchX(event) {
    return event.touches[0].clientX;
}

function touchY(event) {
    return event.touches[0].clientY;
}

var ReactTouchEvents = function (_React$Component) {
    _inherits(ReactTouchEvents, _React$Component);

    function ReactTouchEvents() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ReactTouchEvents);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactTouchEvents.__proto__ || Object.getPrototypeOf(ReactTouchEvents)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchStart = function (event) {

            if (_this.touchStarted) {
                return;
            }

            _this.touchStarted = true;

            _this.touchMoved = false;
            _this.swipeOutBounded = false;

            _this.startX = touchX(event);
            _this.startY = touchY(event);

            _this.currentX = 0;
            _this.currentY = 0;
        }, _this.handleTouchMove = function (event) {
            _this.currentX = touchX(event);
            _this.currentY = touchY(event);

            if (!_this.touchMoved) {
                var tapTolerance = _this.props.tapTolerance;

                _this.touchMoved = Math.abs(_this.startX - _this.currentX) > tapTolerance || Math.abs(_this.startY - _this.currentY) > tapTolerance;
            } else if (!_this.swipeOutBounded) {
                var swipeOutBounded = _this.props.swipeTolerance;

                _this.swipeOutBounded = Math.abs(_this.startX - _this.currentX) > swipeOutBounded && Math.abs(_this.startY - _this.currentY) > swipeOutBounded;
            }
        }, _this.handleTouchCancel = function () {
            _this.touchStarted = _this.touchMoved = false;
            _this.startX = _this.startY = 0;
        }, _this.handleTouchEnd = function (event) {
            _this.touchStarted = false;

            if (!_this.touchMoved) {
                if (_this.props.onTap) {
                    _this.props.onTap(event);
                }
            } else if (!_this.swipeOutBounded) {
                if (_this.props.onSwipe) {
                    var swipeOutBounded = _this.props.swipeTolerance,
                        direction = void 0;

                    if (Math.abs(_this.startX - _this.currentX) < swipeOutBounded) {
                        direction = _this.startY > _this.currentY ? "top" : "bottom";
                    } else {
                        direction = _this.startX > _this.currentX ? "left" : "right";
                    }

                    _this.props.onSwipe(direction, event);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ReactTouchEvents, [{
        key: "render",
        value: function render() {
            var children = this.props.children;
            var element = children ? React.Children.only(children) : React.createElement("button", null);

            return React.cloneElement(element, {
                onTouchStart: this.handleTouchStart,
                onTouchMove: this.handleTouchMove,
                onTouchCancel: this.handleTouchCancel,
                onTouchEnd: this.handleTouchEnd
            });
        }
    }]);

    return ReactTouchEvents;
}(React.Component);

ReactTouchEvents.defaultProps = {
    tapTolerance: 10,
    swipeTolerance: 30
};

ReactTouchEvents.propTypes = {
    children: PropTypes.node,
    tapTolerance: PropTypes.number,
    swipeTolerance: PropTypes.number,
    onTap: PropTypes.func,
    onSwipe: PropTypes.func
};

module.exports = ReactTouchEvents;

/***/ })
/******/ ]);
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(22),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,A=n?Symbol.for("react.memo"):
60115,B=n?Symbol.for("react.lazy"):60116,C="function"===typeof Symbol&&Symbol.iterator;function aa(a,b,e,c,d,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[e,c,d,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};
function G(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}G.prototype.isReactComponent={};G.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}var J=I.prototype=new H;
J.constructor=I;k(J,G.prototype);J.isPureReactComponent=!0;var K={current:null,currentDispatcher:null},L=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};
function N(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:d,_owner:K.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,e,c){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return e(c,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+U(d,h);g+=T(d,f,e,c)}else if(null===a||"object"!==typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,h++),g+=T(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function V(a,b,e){return null==a?0:T(a,"",b,e)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,function(a){return a}):null!=a&&(O(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(P,"$&/")+"/");b=R(b,g,c,d);V(a,da,b);S(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=R(null,null,b,e);V(a,ca,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){O(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:G,PureComponent:I,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:B,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,unstable_ConcurrentMode:x,Suspense:z,unstable_Profiler:u,createElement:N,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),
g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=K.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=N.bind(null,a);b.type=a;return b},
isValidElement:O,version:"16.6.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:K,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(48)();
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(49);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(22),da=__webpack_require__(51);function ea(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function r(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ea(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:r("227");function fa(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ha=!1,ia=null,ja=!1,ka=null,la={onError:function(a){ha=!0;ia=a}};function ma(a,b,c,d,e,f,g,h,k){ha=!1;ia=null;fa.apply(la,arguments)}function na(a,b,c,d,e,f,g,h,k){ma.apply(this,arguments);if(ha){if(ha){var l=ia;ha=!1;ia=null}else r("198"),l=void 0;ja||(ja=!0,ka=l)}}var oa=null,pa={};
function qa(){if(oa)for(var a in pa){var b=pa[a],c=oa.indexOf(a);-1<c?void 0:r("96",a);if(!ra[c]){b.extractEvents?void 0:r("97",a);ra[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;sa.hasOwnProperty(h)?r("99",h):void 0;sa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ta(k[e],g,h);e=!0}else f.registrationName?(ta(f.registrationName,g,h),e=!0):e=!1;e?void 0:r("98",d,a)}}}}
function ta(a,b,c){ua[a]?r("100",a):void 0;ua[a]=b;va[a]=b.eventTypes[c].dependencies}var ra=[],sa={},ua={},va={},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);na(b,c,void 0,a);a.currentTarget=null}function Aa(a,b){null==b?r("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}
var Ga={injectEventPluginOrder:function(a){oa?r("101"):void 0;oa=Array.prototype.slice.call(a);qa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];pa.hasOwnProperty(c)&&pa[c]===d||(pa[c]?r("102",c):void 0,pa[c]=d,b=!0)}b&&qa()}};
function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?r("231",b,typeof c):void 0;
return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;if(a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?r("95"):void 0,ja))throw b=ka,ja=!1,ka=null,b;}var Ka=Math.random().toString(36).slice(2),La="__reactInternalInstance$"+Ka,Ma="__reactEventHandlers$"+Ka;function Na(a){if(a[La])return a[La];for(;!a[La];)if(a.parentNode)a=a.parentNode;else return null;a=a[La];return 5===a.tag||6===a.tag?a:null}function Oa(a){a=a[La];return!a||5!==a.tag&&6!==a.tag?null:a}
function Pa(a){if(5===a.tag||6===a.tag)return a.stateNode;r("33")}function Qa(a){return a[Ma]||null}function Ra(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}
function Ta(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Ra(b);for(b=c.length;0<b--;)Sa(c[b],"captured",a);for(b=0;b<c.length;b++)Sa(c[b],"bubbled",a)}}function Ua(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Va(a){a&&a.dispatchConfig.registrationName&&Ua(a._targetInst,null,a)}
function Wa(a){Ba(a,Ta)}var Xa=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ya(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Za={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},$a={},ab={};
Xa&&(ab=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function bb(a){if($a[a])return $a[a];if(!Za[a])return a;var b=Za[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in ab)return $a[a]=b[c];return a}
var cb=bb("animationend"),ib=bb("animationiteration"),jb=bb("animationstart"),kb=bb("transitionend"),lb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=null,nb=null,ob=null;
function pb(){if(ob)return ob;var a,b=nb,c=b.length,d,e="value"in mb?mb.value:mb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ob=e.slice(a,1<d?1-d:void 0)}function qb(){return!0}function rb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?qb:rb;this.isPropagationStopped=rb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=qb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=qb)},persist:function(){this.isPersistent=qb},isPersistent:rb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=rb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;sb(c);return c};sb(y);function tb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ub(a){a instanceof this?void 0:r("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function sb(a){a.eventPool=[];a.getPooled=tb;a.release=ub}var vb=y.extend({data:null}),wb=y.extend({data:null}),xb=[9,13,27,32],yb=Xa&&"CompositionEvent"in window,zb=null;Xa&&"documentMode"in document&&(zb=document.documentMode);
var Ab=Xa&&"TextEvent"in window&&!zb,Bb=Xa&&(!yb||zb&&8<zb&&11>=zb),Cb=String.fromCharCode(32),Db={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Eb=!1;
function Fb(a,b){switch(a){case "keyup":return-1!==xb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Gb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Hb=!1;function Kb(a,b){switch(a){case "compositionend":return Gb(b);case "keypress":if(32!==b.which)return null;Eb=!0;return Cb;case "textInput":return a=b.data,a===Cb&&Eb?null:a;default:return null}}
function Lb(a,b){if(Hb)return"compositionend"===a||!yb&&Fb(a,b)?(a=pb(),ob=nb=mb=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Bb&&"ko"!==b.locale?null:b.data;default:return null}}
var Mb={eventTypes:Db,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(yb)b:{switch(a){case "compositionstart":e=Db.compositionStart;break b;case "compositionend":e=Db.compositionEnd;break b;case "compositionupdate":e=Db.compositionUpdate;break b}e=void 0}else Hb?Fb(a,c)&&(e=Db.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Db.compositionStart);e?(Bb&&"ko"!==c.locale&&(Hb||e!==Db.compositionStart?e===Db.compositionEnd&&Hb&&(f=pb()):(mb=d,nb="value"in mb?mb.value:mb.textContent,Hb=
!0)),e=vb.getPooled(e,b,c,d),f?e.data=f:(f=Gb(c),null!==f&&(e.data=f)),Wa(e),f=e):f=null;(a=Ab?Kb(a,c):Lb(a,c))?(b=wb.getPooled(Db.beforeInput,b,c,d),b.data=a,Wa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Nb=null,Ob=null,Pb=null;function Vb(a){if(a=xa(a)){"function"!==typeof Nb?r("280"):void 0;var b=wa(a.stateNode);Nb(a.stateNode,a.type,b)}}function Wb(a){Ob?Pb?Pb.push(a):Pb=[a]:Ob=a}function Xb(){if(Ob){var a=Ob,b=Pb;Pb=Ob=null;Vb(a);if(b)for(a=0;a<b.length;a++)Vb(b[a])}}
function Yb(a,b){return a(b)}function Zb(a,b,c){return a(b,c)}function $b(){}var ac=!1;function bc(a,b){if(ac)return a(b);ac=!0;try{return Yb(a,b)}finally{if(ac=!1,null!==Ob||null!==Pb)$b(),Xb()}}var cc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!cc[a.type]:"textarea"===b?!0:!1}
function ec(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function fc(a){if(!Xa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function gc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function hc(a){var b=gc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function ic(a){a._valueTracker||(a._valueTracker=hc(a))}function jc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=gc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var kc=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lc=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,mc=D?Symbol.for("react.element"):60103,nc=D?Symbol.for("react.portal"):60106,oc=D?Symbol.for("react.fragment"):60107,pc=D?Symbol.for("react.strict_mode"):60108,qc=D?Symbol.for("react.profiler"):60114,rc=D?Symbol.for("react.provider"):60109,sc=D?Symbol.for("react.context"):60110,tc=D?Symbol.for("react.concurrent_mode"):60111,uc=D?Symbol.for("react.forward_ref"):60112,vc=D?Symbol.for("react.suspense"):
60113,wc=D?Symbol.for("react.memo"):60115,xc=D?Symbol.for("react.lazy"):60116,yc="function"===typeof Symbol&&Symbol.iterator;function zc(a){if(null===a||"object"!==typeof a)return null;a=yc&&a[yc]||a["@@iterator"];return"function"===typeof a?a:null}
function Ac(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case tc:return"ConcurrentMode";case oc:return"Fragment";case nc:return"Portal";case qc:return"Profiler";case pc:return"StrictMode";case vc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case sc:return"Context.Consumer";case rc:return"Context.Provider";case uc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case wc:return Ac(a.type);case xc:if(a=1===a._status?a._result:null)return Ac(a)}return null}function Bc(a){var b="";do{a:switch(a.tag){case 2:case 16:case 0:case 1:case 5:case 8:var c=a._debugOwner,d=a._debugSource,e=Ac(a.type);var f=null;c&&(f=Ac(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(lc,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var Cc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc=Object.prototype.hasOwnProperty,Ec={},Fc={};
function Gc(a){if(Dc.call(Fc,a))return!0;if(Dc.call(Ec,a))return!1;if(Cc.test(a))return Fc[a]=!0;Ec[a]=!0;return!1}function Hc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ic(a,b,c,d){if(null===b||"undefined"===typeof b||Hc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null)});
["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null)});var Mc=/[\-:]([a-z])/g;function Nc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Mc,
Nc);G[b]=new F(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Mc,Nc);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Mc,Nc);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});G.tabIndex=new F("tabIndex",1,!1,"tabindex",null);
function Oc(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ic(b,c,e,d)&&(c=null),d||null===e?Gc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Pc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Qc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Rc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Pc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Sc(a,b){b=b.checked;null!=b&&Oc(a,"checked",b,!1)}
function Tc(a,b){Sc(a,b);var c=Pc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Uc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Uc(a,b.type,Pc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function bd(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Uc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var cd={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function dd(a,b,c){a=y.getPooled(cd.change,a,b,c);a.type="change";Wb(c);Wa(a);return a}var ed=null,fd=null;function gd(a){Ia(a,!1)}
function hd(a){var b=Pa(a);if(jc(b))return a}function id(a,b){if("change"===a)return b}var jd=!1;Xa&&(jd=fc("input")&&(!document.documentMode||9<document.documentMode));function kd(){ed&&(ed.detachEvent("onpropertychange",ld),fd=ed=null)}function ld(a){"value"===a.propertyName&&hd(fd)&&(a=dd(fd,a,ec(a)),bc(gd,a))}function md(a,b,c){"focus"===a?(kd(),ed=b,fd=c,ed.attachEvent("onpropertychange",ld)):"blur"===a&&kd()}function nd(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return hd(fd)}
function od(a,b){if("click"===a)return hd(b)}function pd(a,b){if("input"===a||"change"===a)return hd(b)}
var qd={eventTypes:cd,_isInputEventSupported:jd,extractEvents:function(a,b,c,d){var e=b?Pa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=id:dc(e)?jd?f=pd:(f=nd,g=md):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=od);if(f&&(f=f(a,b)))return dd(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Uc(e,"number",e.value)}},rd=y.extend({view:null,detail:null}),sd={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function td(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=sd[a])?!!b[a]:!1}function ud(){return td}
var vd=0,wd=0,xd=!1,yd=!1,zd=rd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ud,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=vd;vd=a.screenX;return xd?"mousemove"===a.type?a.screenX-b:0:(xd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=wd;wd=a.screenY;return yd?"mousemove"===a.type?a.screenY-b:0:(yd=!0,0)}}),Ad=zd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Bd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Cd={eventTypes:Bd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=zd,h=Bd.mouseLeave,k=Bd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=Ad,h=Bd.pointerLeave,k=Bd.pointerEnter,l="pointer";var m=null==f?e:Pa(f);e=null==b?e:Pa(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Ra(g))l++;g=0;for(k=e;k;k=Ra(k))g++;for(;0<l-g;)b=Ra(b),l--;for(;0<g-l;)e=Ra(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Ra(b);e=Ra(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Ra(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Ra(d)}for(d=0;d<b.length;d++)Ua(b[d],"bubbled",a);for(d=f.length;0<d--;)Ua(f[d],"captured",c);return[a,c]}},Dd=Object.prototype.hasOwnProperty;function Ed(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function Fd(a,b){if(Ed(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Dd.call(b,c[d])||!Ed(a[c[d]],b[c[d]]))return!1;return!0}function Gd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function Hd(a){2!==Gd(a)?r("188"):void 0}
function Id(a){var b=a.alternate;if(!b)return b=Gd(a),3===b?r("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return Hd(e),a;if(g===d)return Hd(e),b;g=g.sibling}r("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:r("189")}}c.alternate!==d?r("190"):void 0}3!==c.tag?r("188"):void 0;return c.stateNode.current===c?a:b}function Jd(a){a=Id(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var Kd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Ld=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Md=rd.extend({relatedTarget:null});function Nd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd=rd.extend({key:function(a){if(a.key){var b=Od[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Nd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Pd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ud,charCode:function(a){return"keypress"===
a.type?Nd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?Nd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=zd.extend({dataTransfer:null}),Sd=rd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ud}),Td=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ud=zd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Vd=[["abort","abort"],[cb,"animationEnd"],[ib,"animationIteration"],[jb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[kb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Wd={},Xd={};function Yd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Wd[a]=b;Xd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Yd(a,!0)});Vd.forEach(function(a){Yd(a,!1)});
var Zd={eventTypes:Wd,isInteractiveTopLevelEventType:function(a){a=Xd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Xd[a];if(!e)return null;switch(a){case "keypress":if(0===Nd(c))return null;case "keydown":case "keyup":a=Qd;break;case "blur":case "focus":a=Md;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=zd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
Rd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=Sd;break;case cb:case ib:case jb:a=Kd;break;case kb:a=Td;break;case "scroll":a=rd;break;case "wheel":a=Ud;break;case "copy":case "cut":case "paste":a=Ld;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Ad;break;default:a=y}b=a.getPooled(e,b,c,d);Wa(b);return b}},$d=Zd.isInteractiveTopLevelEventType,
ae=[];function be(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Na(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=ec(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<ra.length;h++){var k=ra[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=Aa(g,k))}Ia(g,!1)}}var ce=!0;
function H(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!1)}function ge(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!0)}function de(a,b){Zb(ee,a,b)}
function ee(a,b){if(ce){var c=ec(b);c=Na(c);null===c||"number"!==typeof c.tag||2===Gd(c)||(c=null);if(ae.length){var d=ae.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{bc(be,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>ae.length&&ae.push(a)}}}var he={},ie=0,je="_reactListenersID"+(""+Math.random()).slice(2);
function ke(a){Object.prototype.hasOwnProperty.call(a,je)||(a[je]=ie++,he[a[je]]={});return he[a[je]]}function le(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function me(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function ne(a,b){var c=me(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=me(c)}}function oe(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?oe(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function pe(){for(var a=window,b=le();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=le(a.document)}return b}function qe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var re=Xa&&"documentMode"in document&&11>=document.documentMode,se={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},te=null,ue=null,He=null,Ie=!1;
function Je(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Ie||null==te||te!==le(c))return null;c=te;"selectionStart"in c&&qe(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return He&&Fd(He,c)?null:(He=c,a=y.getPooled(se.select,ue,a,b),a.type="select",a.target=te,Wa(a),a)}
var Ke={eventTypes:se,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=ke(e);f=va.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Pa(b):window;switch(a){case "focus":if(dc(e)||"true"===e.contentEditable)te=e,ue=b,He=null;break;case "blur":He=ue=te=null;break;case "mousedown":Ie=!0;break;case "contextmenu":case "mouseup":case "dragend":return Ie=!1,Je(c,d);case "selectionchange":if(re)break;
case "keydown":case "keyup":return Je(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa;xa=Oa;ya=Pa;Ga.injectEventPluginsByName({SimpleEventPlugin:Zd,EnterLeaveEventPlugin:Cd,ChangeEventPlugin:qd,SelectEventPlugin:Ke,BeforeInputEventPlugin:Mb});function Le(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function Me(a,b){a=n({children:void 0},b);if(b=Le(b.children))a.children=b;return a}function Ne(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Pc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Oe(a,b){null!=b.dangerouslySetInnerHTML?r("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Pe(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?r("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:r("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:Pc(c)}}
function Qe(a,b){var c=Pc(b.value),d=Pc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Re(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Se={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Te(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Te(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Ve=void 0,We=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Se.svg||"innerHTML"in a)a.innerHTML=b;else{Ve=Ve||document.createElement("div");Ve.innerHTML="<svg>"+b+"</svg>";for(b=Ve.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Xe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Ye={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(a){Ze.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Ye[b]=Ye[a]})});
function $e(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Ye.hasOwnProperty(e)&&Ye[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var af=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function bf(a,b){b&&(af[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?r("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?r("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:r("61")),null!=b.style&&"object"!==typeof b.style?r("62",""):void 0)}
function cf(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function df(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=ke(a);b=va[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":ge("scroll",a);break;case "focus":case "blur":ge("focus",a);ge("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":fc(e)&&ge(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===lb.indexOf(e)&&H(e,a)}c[e]=!0}}}function ef(){}var ff=null,gf=null;
function hf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function jf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var kf=setTimeout,lf=clearTimeout;function mf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function nf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var of=[],pf=-1;function I(a){0>pf||(a.current=of[pf],of[pf]=null,pf--)}function J(a,b){pf++;of[pf]=a.current;a.current=b}var qf={},K={current:qf},L={current:!1},rf=qf;
function sf(a,b){var c=a.type.contextTypes;if(!c)return qf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function tf(a){I(L,a);I(K,a)}function uf(a){I(L,a);I(K,a)}
function vf(a,b,c){K.current!==qf?r("168"):void 0;J(K,b,a);J(L,c,a)}function wf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:r("108",Ac(b)||"Unknown",e);return n({},c,d)}function xf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||qf;rf=K.current;J(K,b,a);J(L,L.current,a);return!0}
function yf(a,b,c){var d=a.stateNode;d?void 0:r("169");c?(b=wf(a,b,rf),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var zf=null,Af=null;function Bf(a){return function(b){try{return a(b)}catch(c){}}}
function Cf(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);zf=Bf(function(a){return b.onCommitFiberRoot(c,a)});Af=Bf(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Df(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function N(a,b,c,d){return new Df(a,b,c,d)}
function Ef(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Ff(a){if("function"===typeof a)return Ef(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===uc)return 11;if(a===wc)return 14}return 2}
function Gf(a,b){var c=a.alternate;null===c?(c=N(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Hf(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ef(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case oc:return If(c.children,e,f,b);case tc:return Jf(c,e|3,f,b);case pc:return Jf(c,e|2,f,b);case qc:return a=N(12,c,b,e|4),a.elementType=qc,a.type=qc,a.expirationTime=f,a;case vc:return a=N(13,c,b,e),a.elementType=vc,a.type=vc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case rc:g=10;break a;case sc:g=9;break a;case uc:g=11;break a;case wc:g=
14;break a;case xc:g=16;d=null;break a}r("130",null==a?a:typeof a,"")}b=N(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function If(a,b,c,d){a=N(7,a,d,b);a.expirationTime=c;return a}function Jf(a,b,c,d){a=N(8,a,d,b);b=0===(b&1)?pc:tc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function Kf(a,b,c){a=N(6,a,null,b);a.expirationTime=c;return a}
function Lf(a,b,c){b=N(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Mf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);Nf(b,a)}
function Of(a,b){a.didError=!1;var c=a.latestPingedTime;0!==c&&c<=b&&(a.latestPingedTime=0);c=a.earliestPendingTime;var d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c>b?a.earliestSuspendedTime=b:d<b&&(a.latestSuspendedTime=b);Nf(b,a)}
function Pf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;if(0===b||0!==c&&c<b)b=c;if(0===b||0!==a&&a<b)b=a;return b}function Nf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var Qf=!1;
function Rf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Sf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Tf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Uf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Vf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Rf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Rf(a.memoizedState),e=c.updateQueue=Rf(c.memoizedState)):d=a.updateQueue=Sf(e):null===e&&(e=c.updateQueue=Sf(d));null===e||d===e?Uf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Uf(d,b),Uf(e,b)):(Uf(d,b),e.lastUpdate=b)}
function Wf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Rf(a.memoizedState):Xf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Xf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Sf(b));return b}
function Yf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:Qf=!0}return d}
function Zf(a,b,c,d,e){Qf=!1;b=Xf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;if(m>e){if(null===g&&(g=k,f=l),0===h||h>m)h=m}else l=Yf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var p=k.expirationTime;if(p>e){if(null===m&&(m=k,null===g&&(f=l)),0===h||h>p)h=p}else l=Yf(a,b,k,l,c,d),
null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function $f(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ag(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ag(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ag(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?r("191",c):void 0;c.call(d)}a=a.nextEffect}}
function bg(a,b){return{value:a,source:b,stack:Bc(b)}}var cg={current:null},dg=null,eg=null,fg=null;function gg(a,b){var c=a.type._context;J(cg,c._currentValue,a);c._currentValue=b}function hg(a){var b=cg.current;I(cg,a);a.type._context._currentValue=b}function ig(a){dg=a;fg=eg=null;a.firstContextDependency=null}
function jg(a,b){if(fg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)fg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===eg?(null===dg?r("293"):void 0,dg.firstContextDependency=eg=b):eg=eg.next=b}return a._currentValue}var kg={},O={current:kg},lg={current:kg},mg={current:kg};function ng(a){a===kg?r("174"):void 0;return a}
function og(a,b){J(mg,b,a);J(lg,a,a);J(O,kg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ue(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Ue(b,c)}I(O,a);J(O,b,a)}function pg(a){I(O,a);I(lg,a);I(mg,a)}function qg(a){ng(mg.current);var b=ng(O.current);var c=Ue(b,a.type);b!==c&&(J(lg,a,a),J(O,c,a))}function rg(a){lg.current===a&&(I(O,a),I(lg,a))}var sg=kc.ReactCurrentOwner,tg=(new aa.Component).refs;
function ug(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var yg={isMounted:function(a){return(a=a._reactInternalFiber)?2===Gd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=vg();d=wg(d,a);var e=Tf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Vf(a,e);xg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=vg();d=wg(d,a);var e=Tf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Vf(a,e);xg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=vg();c=wg(c,a);var d=Tf(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);Vf(a,d);xg(a,c)}};function zg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Fd(c,d)||!Fd(e,f):!0}
function Ag(a,b,c){var d=!1,e=qf;var f=b.contextType;"object"===typeof f&&null!==f?f=sg.currentDispatcher.readContext(f):(e=M(b)?rf:K.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?sf(a,e):qf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=yg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Bg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&yg.enqueueReplaceState(b,b.state,null)}
function Cg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=tg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg.currentDispatcher.readContext(f):(f=M(b)?rf:K.current,e.context=sf(a,f));f=a.updateQueue;null!==f&&(Zf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(ug(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&yg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Zf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Dg=Array.isArray;
function Eg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?r("289"):void 0,d=c.stateNode);d?void 0:r("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===tg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?r("284"):void 0;c._owner?void 0:r("290",a)}return a}
function Fg(a,b){"textarea"!==a.type&&r("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Gg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Gf(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Kf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Eg(a,b,c),d.return=a,d;d=Hf(c.type,c.key,c.props,null,a.mode,d);d.ref=Eg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Lf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=If(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Kf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case mc:return c=Hf(b.type,b.key,b.props,null,a.mode,c),c.ref=Eg(a,null,b),c.return=a,c;case nc:return b=Lf(b,a.mode,c),b.return=a,b}if(Dg(b)||
zc(b))return b=If(b,a.mode,c,null),b.return=a,b;Fg(a,b)}return null}function v(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case mc:return c.key===e?c.type===oc?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case nc:return c.key===e?l(a,b,c,d):null}if(Dg(c)||zc(c))return null!==e?null:m(a,b,c,d,null);Fg(a,c)}return null}function B(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case mc:return a=a.get(null===d.key?c:d.key)||null,d.type===oc?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case nc:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Dg(d)||zc(d))return a=a.get(c)||null,m(b,a,d,e,null);Fg(b,d)}return null}function w(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,A=null;null!==q&&u<h.length;u++){q.index>u?(A=q,q=null):A=q.sibling;var t=v(e,q,h[u],k);if(null===t){null===q&&(q=A);break}a&&
q&&null===t.alternate&&b(e,q);g=f(t,g,u);null===m?l=t:m.sibling=t;m=t;q=A}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(A=B(q,e,u,h[u],k))a&&null!==A.alternate&&q.delete(null===A.key?u:A.key),g=f(A,g,u),null===m?l=A:m.sibling=A,m=A;a&&q.forEach(function(a){return b(e,a)});return l}function C(e,g,h,k){var l=zc(h);"function"!==typeof l?r("150"):void 0;h=l.call(h);null==h?r("151"):void 0;
for(var m=l=null,q=g,u=g=0,A=null,t=h.next();null!==q&&!t.done;u++,t=h.next()){q.index>u?(A=q,q=null):A=q.sibling;var w=v(e,q,t.value,k);if(null===w){q||(q=A);break}a&&q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=A}if(t.done)return c(e,q),l;if(null===q){for(;!t.done;u++,t=h.next())t=p(e,t.value,k),null!==t&&(g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);return l}for(q=d(e,q);!t.done;u++,t=h.next())t=B(q,e,u,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?u:
t.key),g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===oc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case mc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===oc:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===oc?f.props.children:f.props,h);d.ref=Eg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===oc?(d=If(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Hf(f.type,f.key,f.props,null,a.mode,h),h.ref=Eg(a,d,f),h.return=a,a=h)}return g(a);case nc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Lf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=Kf(f,a.mode,h),d.return=a,a=d),g(a);if(Dg(f))return w(a,d,f,h);if(zc(f))return C(a,d,f,h);l&&Fg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,r("152",h.displayName||h.name||"Component")}return c(a,d)}}var Hg=Gg(!0),Ig=Gg(!1),Jg=null,Kg=null,Lg=!1;
function Mg(a,b){var c=N(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Ng(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function Og(a){if(Lg){var b=Kg;if(b){var c=b;if(!Ng(a,b)){b=mf(c);if(!b||!Ng(a,b)){a.effectTag|=2;Lg=!1;Jg=a;return}Mg(Jg,c)}Jg=a;Kg=nf(b)}else a.effectTag|=2,Lg=!1,Jg=a}}function Pg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;Jg=a}function Qg(a){if(a!==Jg)return!1;if(!Lg)return Pg(a),Lg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!jf(b,a.memoizedProps))for(b=Kg;b;)Mg(a,b),b=mf(b);Pg(a);Kg=Jg?mf(a.stateNode):null;return!0}function Rg(){Kg=Jg=null;Lg=!1}
function Sg(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var Tg=kc.ReactCurrentOwner;function P(a,b,c,d){b.child=null===a?Ig(b,null,c,d):Hg(b,a.child,c,d)}
function Ug(a,b,c,d,e){c=c.render;var f=b.ref;if(!L.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return Vg(a,b,e);d=c(d,f);P(a,b,d,e);return b.child}
function Wg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ef(g)&&void 0===g.defaultProps&&null===c.compare)return b.tag=15,b.type=g,Xg(a,b,g,d,e,f);a=Hf(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===e||e>f)if(e=g.memoizedProps,c=c.compare,c=null!==c?c:Fd,c(e,d)&&a.ref===b.ref)return Vg(a,b,f);a=Gf(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Xg(a,b,c,d,e,f){return null!==a&&(0===e||e>f)&&Fd(a.memoizedProps,d)&&a.ref===b.ref?Vg(a,b,f):Yg(a,b,c,d,f)}function Zg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Yg(a,b,c,d,e){var f=M(c)?rf:K.current;f=sf(b,f);ig(b,e);c=c(d,f);b.effectTag|=1;P(a,b,c,e);return b.child}
function $g(a,b,c,d,e){if(M(c)){var f=!0;xf(b)}else f=!1;ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ag(b,c,d,e),Cg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg.currentDispatcher.readContext(l):(l=M(c)?rf:K.current,l=sf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l);Qf=!1;var v=b.memoizedState;k=g.state=v;var B=b.updateQueue;null!==B&&(Zf(b,B,d,g,e),k=b.memoizedState);h!==d||v!==k||L.current||Qf?("function"===typeof m&&(ug(b,c,m,d),k=b.memoizedState),(h=Qf||zg(b,c,h,d,v,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=h,k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg.currentDispatcher.readContext(l):(l=M(c)?rf:K.current,l=sf(b,l)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l),Qf=!1,k=b.memoizedState,v=g.state=k,B=b.updateQueue,null!==B&&(Zf(b,B,d,g,e),v=b.memoizedState),h!==d||k!==v||L.current||Qf?("function"===typeof m&&(ug(b,c,m,d),v=b.memoizedState),(m=Qf||zg(b,c,h,d,k,v,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,v,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,v,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
v),g.props=d,g.state=v,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return ah(a,b,c,d,f,e)}
function ah(a,b,c,d,e,f){Zg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&yf(b,c,!1),Vg(a,b,f);d=b.stateNode;Tg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Hg(b,a.child,null,f),b.child=Hg(b,null,h,f)):P(a,b,h,f);b.memoizedState=d.state;e&&yf(b,c,!0);return b.child}function bh(a){var b=a.stateNode;b.pendingContext?vf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&vf(a,b.context,!1);og(a,b.containerInfo)}
function ch(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function dh(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;null!==f&&(f.alreadyCaptured?null!==a&&f===a.memoizedState?f={alreadyCaptured:!0,didTimeout:!0,timedOutAt:f.timedOutAt}:(f.alreadyCaptured=!0,f.didTimeout=!0):f=null);var g=null!==f&&f.didTimeout;if(null===a)g?(g=e.fallback,e=If(null,d,0,null),d=If(g,d,c,null),e.sibling=d,c=e,c.return=d.return=b):c=d=Ig(b,null,e.children,c);else{var h=a.memoizedState;null!==h&&h.didTimeout?(d=a.child,a=d.sibling,g?(c=e.fallback,d=Gf(d,d.pendingProps,
0),d.effectTag|=2,e=d.sibling=Gf(a,c,a.expirationTime),e.effectTag|=2,c=d,d.childExpirationTime=0,d=e,c.return=d.return=b):(g=a.child,d=Hg(b,d.child,e.children,c),Hg(b,g,null,c),c=d)):(a=a.child,g?(g=e.fallback,e=If(null,d,0,null),e.effectTag|=2,e.child=a,a.return=e,d=e.sibling=If(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Hg(b,a,e.children,c))}b.memoizedState=f;b.child=c;return d}
function Vg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?r("153"):void 0;if(null!==b.child){a=b.child;c=Gf(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Gf(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function eh(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!L.current&&(0===d||d>c)){switch(b.tag){case 3:bh(b);Rg();break;case 5:qg(b);break;case 1:M(b.type)&&xf(b);break;case 4:og(b,b.stateNode.containerInfo);break;case 10:gg(b,b.memoizedProps.value);break;case 13:if(d=b.memoizedState,null!==d&&d.didTimeout){d=b.child.childExpirationTime;if(0!==d&&d<=c)return dh(a,b,c);b=Vg(a,b,c);return null!==b?b.sibling:null}}return Vg(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=sf(b,K.current);ig(b,c);e=d(a,e);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;if(M(d)){var f=!0;xf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&ug(b,d,g,a);e.updater=yg;b.stateNode=e;e._reactInternalFiber=b;Cg(b,d,a,c);b=ah(null,b,d,!0,f,c)}else b.tag=0,
P(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=Sg(e);b.type=a;e=b.tag=Ff(a);f=ch(a,f);g=void 0;switch(e){case 0:g=Yg(null,b,a,f,c);break;case 1:g=$g(null,b,a,f,c);break;case 11:g=Ug(null,b,a,f,c);break;case 14:g=Wg(null,b,a,ch(a.type,f),d,c);break;default:r("283",a)}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),Yg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:ch(d,e),$g(a,b,d,e,c);case 3:bh(b);d=b.updateQueue;null===d?r("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;Zf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Rg(),b=Vg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Kg=nf(b.stateNode.containerInfo),Jg=b,e=Lg=!0;e?(b.effectTag|=2,b.child=Ig(b,null,d,c)):(P(a,b,d,c),Rg());b=b.child}return b;case 5:return qg(b),null===a&&Og(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,jf(d,
e)?g=null:null!==f&&jf(d,f)&&(b.effectTag|=16),Zg(a,b),1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b=null):(P(a,b,g,c),b=b.child),b;case 6:return null===a&&Og(b),null;case 13:return dh(a,b,c);case 4:return og(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Hg(b,null,d,c):P(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),Ug(a,b,d,e,c);case 7:return P(a,b,b.pendingProps,c),b.child;case 8:return P(a,b,b.pendingProps.children,
c),b.child;case 12:return P(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;gg(b,f);if(null!==g){var h=g.value;f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=Vg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&
f)){if(1===g.tag){var k=Tf(c);k.tag=2;Vf(g,k)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;k=g.alternate;null!==k&&(0===k.expirationTime||k.expirationTime>c)&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c)&&(k.childExpirationTime=c);else if(null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c))k.childExpirationTime=
c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}P(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,ig(b,c),e=jg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,P(a,b,d,c),b.child;case 14:return e=b.type,f=ch(e.type,b.pendingProps),Wg(a,b,e,f,d,c);case 15:return Xg(a,
b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,M(d)?(a=!0,xf(b)):a=!1,ig(b,c),Ag(b,d,e,c),Cg(b,d,e,c),ah(null,b,d,!0,a,c);default:r("156")}}function zh(a){a.effectTag|=4}var Ah=void 0,Bh=void 0,Ch=void 0,Dh=void 0;
Ah=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bh=function(){};
Ch=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ng(O.current);a=null;switch(c){case "input":f=Qc(g,f);d=Qc(g,d);a=[];break;case "option":f=Me(g,f);d=Me(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Oe(g,f);d=Oe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ef)}bf(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ua.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ua.hasOwnProperty(c)?(null!=l&&df(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&zh(b)}};Dh=function(a,b,c,d){c!==d&&zh(b)};
function Eh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bc(c));null!==c&&Ac(c.type);b=b.value;null!==a&&1===a.tag&&Ac(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Fh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Gh(a,c)}else b.current=null}
function Hh(a){"function"===typeof Af&&Af(a);switch(a.tag){case 1:Fh(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Gh(a,c)}break;case 5:Fh(a);break;case 4:Ih(a)}}function Jh(a){return 5===a.tag||3===a.tag||4===a.tag}
function Kh(a){a:{for(var b=a.return;null!==b;){if(Jh(b)){var c=b;break a}b=b.return}r("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:r("161")}c.effectTag&16&&(Xe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Jh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=ef)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Ih(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?r("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Hh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):Hh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Lh(a,b){switch(b.tag){case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ma]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Sc(c,d);cf(a,e);b=cf(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?$e(c,h):"dangerouslySetInnerHTML"===g?We(c,h):"children"===g?Xe(c,h):Oc(c,g,h,b)}switch(a){case "input":Tc(c,d);break;case "textarea":Qe(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?Ne(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?Ne(c,!!d.multiple,d.defaultValue,!0):Ne(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:null===b.stateNode?r("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:break;case 17:break;default:r("163")}}function Mh(a,b,c){c=Tf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Nh(d);Eh(a,b)};return c}
function Oh(a,b,c){c=Tf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ph?Ph=new Set([this]):Ph.add(this));var c=b.value,e=b.stack;Eh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Qh(a){switch(a.tag){case 1:M(a.type)&&tf(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return pg(a),uf(a),b=a.effectTag,0!==(b&64)?r("285"):void 0,a.effectTag=b&-1025|64,a;case 5:return rg(a),null;case 13:b=a.effectTag;if(b&1024){a.effectTag=b&-1025|64;b=a.alternate;b=null!==b?b.memoizedState:null;var c=a.memoizedState;null===c?c={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0}:b===c?c={alreadyCaptured:!0,didTimeout:c.didTimeout,timedOutAt:c.timedOutAt}:c.alreadyCaptured=
!0;a.memoizedState=c;return a}return null;case 4:return pg(a),null;case 10:return hg(a),null;default:return null}}var Rh={readContext:jg},Sh=kc.ReactCurrentOwner,Th=0,Uh=0,Vh=!1,Q=null,R=null,S=0,Wh=-1,Xh=!1,T=null,Yh=!1,Ph=null;function Zh(){if(null!==Q)for(var a=Q.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&tf(b);break;case 3:pg(b);uf(b);break;case 5:rg(b);break;case 4:pg(b);break;case 10:hg(b)}a=a.return}R=null;S=0;Wh=-1;Xh=!1;Q=null}
function $h(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:M(b.type)&&tf(b);break;case 3:pg(b);uf(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)Qg(b),b.effectTag&=-3;Bh(b);break;case 5:rg(b);var g=ng(mg.current),h=b.type;if(null!==e&&null!=b.stateNode)Ch(e,b,h,f,g),e.ref!==b.ref&&(b.effectTag|=128);
else if(f){var k=ng(O.current);if(Qg(b)){f=b;e=f.stateNode;var l=f.type,m=f.memoizedProps,p=g;e[La]=f;e[Ma]=m;h=void 0;g=l;switch(g){case "iframe":case "object":H("load",e);break;case "video":case "audio":for(l=0;l<lb.length;l++)H(lb[l],e);break;case "source":H("error",e);break;case "img":case "image":case "link":H("error",e);H("load",e);break;case "form":H("reset",e);H("submit",e);break;case "details":H("toggle",e);break;case "input":Rc(e,m);H("invalid",e);df(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};H("invalid",e);df(p,"onChange");break;case "textarea":Pe(e,m),H("invalid",e),df(p,"onChange")}bf(g,m);l=null;for(h in m)m.hasOwnProperty(h)&&(k=m[h],"children"===h?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):ua.hasOwnProperty(h)&&null!=k&&df(p,h));switch(g){case "input":ic(e);bd(e,m,!0);break;case "textarea":ic(e);Re(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=ef)}h=l;f.updateQueue=h;f=null!==h?!0:!1;f&&zh(b)}else{m=b;e=h;p=f;l=9===g.nodeType?g:g.ownerDocument;k===Se.html&&(k=Te(e));k===Se.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof p.is?l=l.createElement(e,{is:p.is}):(l=l.createElement(e),"select"===e&&p.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[La]=m;e[Ma]=f;Ah(e,b,!1,!1);p=e;l=h;m=f;var v=g,B=cf(l,m);switch(l){case "iframe":case "object":H("load",
p);g=m;break;case "video":case "audio":for(g=0;g<lb.length;g++)H(lb[g],p);g=m;break;case "source":H("error",p);g=m;break;case "img":case "image":case "link":H("error",p);H("load",p);g=m;break;case "form":H("reset",p);H("submit",p);g=m;break;case "details":H("toggle",p);g=m;break;case "input":Rc(p,m);g=Qc(p,m);H("invalid",p);df(v,"onChange");break;case "option":g=Me(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};g=n({},m,{value:void 0});H("invalid",p);df(v,"onChange");break;case "textarea":Pe(p,
m);g=Oe(p,m);H("invalid",p);df(v,"onChange");break;default:g=m}bf(l,g);k=void 0;var w=l,C=p,u=g;for(k in u)if(u.hasOwnProperty(k)){var q=u[k];"style"===k?$e(C,q):"dangerouslySetInnerHTML"===k?(q=q?q.__html:void 0,null!=q&&We(C,q)):"children"===k?"string"===typeof q?("textarea"!==w||""!==q)&&Xe(C,q):"number"===typeof q&&Xe(C,""+q):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ua.hasOwnProperty(k)?null!=q&&df(v,k):null!=q&&Oc(C,k,q,B))}switch(l){case "input":ic(p);
bd(p,m,!1);break;case "textarea":ic(p);Re(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+Pc(m.value));break;case "select":g=p;g.multiple=!!m.multiple;p=m.value;null!=p?Ne(g,!!m.multiple,p,!1):null!=m.defaultValue&&Ne(g,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof g.onClick&&(p.onclick=ef)}(f=hf(h,f))&&zh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?r("166"):void 0;break;case 6:e&&null!=b.stateNode?Dh(e,b,e.memoizedProps,f):("string"!==
typeof f&&(null===b.stateNode?r("166"):void 0),e=ng(mg.current),ng(O.current),Qg(b)?(f=b,h=f.stateNode,e=f.memoizedProps,h[La]=f,(f=h.nodeValue!==e)&&zh(b)):(h=b,f=(9===e.nodeType?e:e.ownerDocument).createTextNode(f),f[La]=b,h.stateNode=f));break;case 11:break;case 13:f=b.memoizedState;h=null!==e?e.memoizedState:null;(null!==f&&f.didTimeout)!==(null!==h&&h.didTimeout)&&(b.effectTag|=4);break;case 7:break;case 8:break;case 12:break;case 4:pg(b);Bh(b);break;case 10:hg(b);break;case 9:break;case 14:break;
case 17:M(b.type)&&tf(b);break;default:r("156")}Q=null;b=a;if(1073741823===S||1073741823!==b.childExpirationTime){f=0;for(h=b.child;null!==h;){e=h.expirationTime;g=h.childExpirationTime;if(0===f||0!==e&&e<f)f=e;if(0===f||0!==g&&g<f)f=g;h=h.sibling}b.childExpirationTime=f}null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?
c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Qh(a,S);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function ai(a){var b=eh(a.alternate,a,S);a.memoizedProps=a.pendingProps;null===b&&(b=$h(a));Sh.current=null;return b}
function bi(a,b,c){Vh?r("243"):void 0;Vh=!0;Sh.currentDispatcher=Rh;var d=a.nextExpirationTimeToWorkOn;if(d!==S||a!==R||null===Q)Zh(),R=a,S=d,Q=Gf(R.current,null,S),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==Q&&!ci();)Q=ai(Q);else for(;null!==Q;)Q=ai(Q)}catch(C){if(null===Q)e=!0,Nh(C);else{null===Q?r("271"):void 0;var f=Q,g=f.return;if(null===g)e=!0,Nh(C);else{a:{var h=a,k=g,l=f,m=C;g=S;l.effectTag|=512;l.firstEffect=l.lastEffect=null;if(null!==m&&"object"===typeof m&&"function"===
typeof m.then){var p=m;m=k;var v=-1,B=-1;do{if(13===m.tag){var w=m.alternate;if(null!==w&&(w=w.memoizedState,null!==w&&w.didTimeout)){B=10*(w.timedOutAt-2);break}w=m.pendingProps.maxDuration;if("number"===typeof w)if(0>=w)v=0;else if(-1===v||w<v)v=w}m=m.return}while(null!==m);m=k;do{if(w=13===m.tag)void 0===m.memoizedProps.fallback?w=!1:(w=m.memoizedState,w=null===w||!w.didTimeout);if(w){k=di.bind(null,h,m,l,0===(m.mode&1)?1:g);p.then(k,k);if(0===(m.mode&1)){m.effectTag|=32;P(l.alternate,l,null,g);
l.effectTag&=-513;1===l.tag&&(l.effectTag&=-421,null===l.alternate&&(l.tag=17));break a}-1===v?h=1073741823:(-1===B&&(B=10*(Pf(h,g)-2)-5E3),h=B+v);0<=h&&Wh<h&&(Wh=h);m.effectTag|=1024;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error("An update was suspended, but no placeholder UI was provided.")}Xh=!0;m=bg(m,l);h=k;do{switch(h.tag){case 3:l=m;h.effectTag|=1024;h.expirationTime=g;g=Mh(h,l,g);Wf(h,g);break a;case 1:if(l=m,k=h.type,p=h.stateNode,0===(h.effectTag&64)&&("function"===typeof k.getDerivedStateFromError||
null!==p&&"function"===typeof p.componentDidCatch&&(null===Ph||!Ph.has(p)))){h.effectTag|=1024;h.expirationTime=g;g=Oh(h,l,g);Wf(h,g);break a}}h=h.return}while(null!==h)}Q=$h(f);continue}}}break}while(1);Vh=!1;fg=eg=dg=Sh.currentDispatcher=null;if(e)R=null,a.finishedWork=null;else if(null!==Q)a.finishedWork=null;else{b=a.current.alternate;null===b?r("281"):void 0;R=null;if(Xh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){Of(a,d);ei(a,b,
d,a.expirationTime,-1);return}if(!a.didError&&!c){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;c=a.expirationTime=1;ei(a,b,d,c,-1);return}}c||-1===Wh?(a.pendingCommitExpirationTime=d,a.finishedWork=b):(Of(a,d),c=10*(Pf(a,d)-2),c<Wh&&(Wh=c),c=10*(vg()-2),c=Wh-c,ei(a,b,d,a.expirationTime,0>c?0:c))}}
function Gh(a,b){var c;a:{Vh&&!Yh?r("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ph||!Ph.has(d))){a=bg(b,a);a=Oh(c,a,1);Vf(c,a);xg(c,1);c=void 0;break a}break;case 3:a=bg(b,a);a=Mh(c,a,1);Vf(c,a);xg(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=bg(b,a),c=Mh(a,c,1),Vf(a,c),xg(a,1));c=void 0}return c}
function wg(a,b){0!==Uh?a=Uh:Vh?a=Yh?1:S:b.mode&1?(a=fi?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==R&&a===S&&(a+=1)):a=1;fi&&a>gi&&(gi=a);return a}
function di(a,b,c,d){var e=a.earliestSuspendedTime;var f=a.latestSuspendedTime;if(0!==e&&d>=e&&d<=f){f=e=d;a.didError=!1;var g=a.latestPingedTime;if(0===g||g<f)a.latestPingedTime=f;Nf(f,a)}else e=vg(),e=wg(e,b),Mf(a,e);0!==(b.mode&1)&&a===R&&S===d&&(R=null);hi(b,e);0===(b.mode&1)&&(hi(c,e),1===c.tag&&null!==c.stateNode&&(b=Tf(e),b.tag=2,Vf(c,b)));c=a.expirationTime;0!==c&&ii(a,c)}
function hi(a,b){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return null===
e?null:e}function xg(a,b){a=hi(a,b);null!==a&&(!Vh&&0!==S&&b<S&&Zh(),Mf(a,b),Vh&&!Yh&&R===a||ii(a,a.expirationTime),ji>ki&&(ji=0,r("185")))}function li(a,b,c,d,e){var f=Uh;Uh=1;try{return a(b,c,d,e)}finally{Uh=f}}var U=null,V=null,mi=0,ni=void 0,W=!1,X=null,Y=0,gi=0,oi=!1,pi=!1,qi=null,ri=null,Z=!1,si=!1,fi=!1,ti=null,ui=da.unstable_now(),vi=(ui/10|0)+2,wi=vi,ki=50,ji=0,xi=null,yi=1;function zi(){vi=((da.unstable_now()-ui)/10|0)+2}
function Ai(a,b){if(0!==mi){if(b>mi)return;null!==ni&&da.unstable_cancelCallback(ni)}mi=b;a=da.unstable_now()-ui;ni=da.unstable_scheduleCallback(Bi,{timeout:10*(b-2)-a})}function ei(a,b,c,d,e){a.expirationTime=d;0!==e||ci()?0<e&&(a.timeoutHandle=kf(Ci.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ci(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;zi();wi=vi;Di(a,c)}function vg(){if(W)return wi;Ei();if(0===Y||1073741823===Y)zi(),wi=vi;return wi}
function ii(a,b){if(null===a.nextScheduledRoot)a.expirationTime=b,null===V?(U=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=U);else{var c=a.expirationTime;if(0===c||b<c)a.expirationTime=b}W||(Z?si&&(X=a,Y=1,Fi(a,1,!0)):1===b?Gi(1,null):Ai(a,b))}
function Ei(){var a=0,b=null;if(null!==V)for(var c=V,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===V?r("244"):void 0;if(d===d.nextScheduledRoot){U=V=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===V)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}X=b;Y=a}function Bi(a){if(a.didTimeout&&null!==U){zi();var b=U;do{var c=b.expirationTime;0!==c&&vi>=c&&(b.nextExpirationTimeToWorkOn=vi);b=b.nextScheduledRoot}while(b!==U)}Gi(0,a)}
function Gi(a,b){ri=b;Ei();if(null!==ri)for(zi(),wi=vi;null!==X&&0!==Y&&(0===a||a>=Y)&&(!oi||vi>=Y);)Fi(X,Y,vi>=Y),Ei(),zi(),wi=vi;else for(;null!==X&&0!==Y&&(0===a||a>=Y);)Fi(X,Y,!0),Ei();null!==ri&&(mi=0,ni=null);0!==Y&&Ai(X,Y);ri=null;oi=!1;ji=0;xi=null;if(null!==ti)for(a=ti,ti=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Di(a,b){W?r("253"):void 0;X=a;Y=b;Fi(a,b,!0);Gi(1,null)}
function Fi(a,b,c){W?r("245"):void 0;W=!0;if(null===ri||c){var d=a.finishedWork;null!==d?Hi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,lf(d)),bi(a,!1,c),d=a.finishedWork,null!==d&&Hi(a,d,b))}else d=a.finishedWork,null!==d?Hi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,lf(d)),bi(a,!0,c),d=a.finishedWork,null!==d&&(ci()?a.finishedWork=d:Hi(a,d,b)));W=!1}
function Hi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ti?ti=[d]:ti.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===xi?ji++:(xi=a,ji=0);Yh=Vh=!0;a.current===b?r("177"):void 0;var e=a.pendingCommitExpirationTime;0===e?r("261"):void 0;a.pendingCommitExpirationTime=0;var f=b.expirationTime,g=b.childExpirationTime,h=0===f||0!==g&&g<f?g:f;a.didError=!1;if(0===h)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0;else{var k=a.latestPendingTime;0!==k&&(k<h?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<h&&(a.earliestPendingTime=a.latestPendingTime));var l=a.earliestSuspendedTime;0===l?Mf(a,h):h>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Mf(a,h)):h<l&&Mf(a,h)}Nf(0,a);Sh.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var m=b.firstEffect}else m=b;else m=b.firstEffect;ff=ce;var p=pe();if(qe(p)){if("selectionStart"in
p)var v={start:p.selectionStart,end:p.selectionEnd};else a:{var B=p.ownerDocument,w=B&&B.defaultView||window,C=w.getSelection&&w.getSelection();if(C&&0!==C.rangeCount){var u=C.anchorNode,q=C.anchorOffset,A=C.focusNode,fe=C.focusOffset;try{u.nodeType,A.nodeType}catch(db){v=null;break a}var Ib=0,Jc=-1,Kc=-1,Ni=0,Oi=0,t=p,Jb=null;b:for(;;){for(var Lc;;){t!==u||0!==q&&3!==t.nodeType||(Jc=Ib+q);t!==A||0!==fe&&3!==t.nodeType||(Kc=Ib+fe);3===t.nodeType&&(Ib+=t.nodeValue.length);if(null===(Lc=t.firstChild))break;
Jb=t;t=Lc}for(;;){if(t===p)break b;Jb===u&&++Ni===q&&(Jc=Ib);Jb===A&&++Oi===fe&&(Kc=Ib);if(null!==(Lc=t.nextSibling))break;t=Jb;Jb=t.parentNode}t=Lc}v=-1===Jc||-1===Kc?null:{start:Jc,end:Kc}}else v=null}var fh=v||{start:0,end:0}}else fh=null;gf={focusedElem:p,selectionRange:fh};ce=!1;for(T=m;null!==T;){var gh=!1,hh=void 0;try{for(;null!==T;){if(T.effectTag&256){var ve=T.alternate;a:{var Qb=T;switch(Qb.tag){case 1:if(Qb.effectTag&256&&null!==ve){var Zi=ve.memoizedProps,$i=ve.memoizedState,Vc=Qb.stateNode;
Vc.props=Qb.memoizedProps;Vc.state=Qb.memoizedState;var aj=Vc.getSnapshotBeforeUpdate(Zi,$i);Vc.__reactInternalSnapshotBeforeUpdate=aj}break a;case 3:case 5:case 6:case 4:case 17:break a;default:r("163")}}}T=T.nextEffect}}catch(db){gh=!0,hh=db}gh&&(null===T?r("178"):void 0,Gh(T,hh),null!==T&&(T=T.nextEffect))}for(T=m;null!==T;){var ih=!1,jh=void 0;try{for(;null!==T;){var we=T.effectTag;we&16&&Xe(T.stateNode,"");if(we&128){var kh=T.alternate;if(null!==kh){var Wc=kh.ref;null!==Wc&&("function"===typeof Wc?
Wc(null):Wc.current=null)}}switch(we&14){case 2:Kh(T);T.effectTag&=-3;break;case 6:Kh(T);T.effectTag&=-3;Lh(T.alternate,T);break;case 4:Lh(T.alternate,T);break;case 8:var lh=T;Ih(lh);var Rb=lh;Rb.return=null;Rb.child=null;Rb.alternate&&(Rb.alternate.child=null,Rb.alternate.return=null)}T=T.nextEffect}}catch(db){ih=!0,jh=db}ih&&(null===T?r("178"):void 0,Gh(T,jh),null!==T&&(T=T.nextEffect))}var mh=gf,bj=pe(),E=mh.focusedElem,eb=mh.selectionRange;if(bj!==E&&E&&E.ownerDocument&&oe(E.ownerDocument.documentElement,
E)){if(null!==eb&&qe(E)){var nh=eb.start,xe=eb.end;void 0===xe&&(xe=nh);if("selectionStart"in E)E.selectionStart=nh,E.selectionEnd=Math.min(xe,E.value.length);else{var ye=E.ownerDocument||document,ba=(ye&&ye.defaultView||window).getSelection(),oh=E.textContent.length,fb=Math.min(eb.start,oh),Sb=void 0===eb.end?fb:Math.min(eb.end,oh);if(!ba.extend&&fb>Sb){var cj=Sb;Sb=fb;fb=cj}var Tb=ne(E,fb),Ja=ne(E,Sb);if(Tb&&Ja&&(1!==ba.rangeCount||ba.anchorNode!==Tb.node||ba.anchorOffset!==Tb.offset||ba.focusNode!==
Ja.node||ba.focusOffset!==Ja.offset)){var Xc=ye.createRange();Xc.setStart(Tb.node,Tb.offset);ba.removeAllRanges();fb>Sb?(ba.addRange(Xc),ba.extend(Ja.node,Ja.offset)):(Xc.setEnd(Ja.node,Ja.offset),ba.addRange(Xc))}}}for(var ze=[],gb=E;gb=gb.parentNode;)1===gb.nodeType&&ze.push({element:gb,left:gb.scrollLeft,top:gb.scrollTop});"function"===typeof E.focus&&E.focus();for(var Ae=0;Ae<ze.length;Ae++){var Yc=ze[Ae];Yc.element.scrollLeft=Yc.left;Yc.element.scrollTop=Yc.top}}gf=null;ce=!!ff;ff=null;a.current=
b;for(T=m;null!==T;){var ph=!1,qh=void 0;try{for(var dj=e;null!==T;){var rh=T.effectTag;if(rh&36){var Zc=void 0,hb=T.alternate,x=T,sh=dj;switch(x.tag){case 1:var ca=x.stateNode;if(x.effectTag&4)if(null===hb)ca.props=x.memoizedProps,ca.state=x.memoizedState,ca.componentDidMount();else{var ej=hb.memoizedProps,fj=hb.memoizedState;ca.props=x.memoizedProps;ca.state=x.memoizedState;ca.componentDidUpdate(ej,fj,ca.__reactInternalSnapshotBeforeUpdate)}var th=x.updateQueue;null!==th&&(ca.props=x.memoizedProps,
ca.state=x.memoizedState,$f(x,th,ca,sh));break;case 3:var uh=x.updateQueue;if(null!==uh){var Be=null;if(null!==x.child)switch(x.child.tag){case 5:Be=x.child.stateNode;break;case 1:Be=x.child.stateNode}$f(x,uh,Be,sh)}break;case 5:var gj=x.stateNode;null===hb&&x.effectTag&4&&hf(x.type,x.memoizedProps)&&gj.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(x.effectTag&32){x.memoizedState={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0};xg(x,1);break}var vh=null!==hb?hb.memoizedState:null,
Ub=x.memoizedState,hj=null!==vh?vh.didTimeout:!1,Ce=x;if(null===Ub)Zc=!1;else if(Zc=Ub.didTimeout)Ce=x.child,Ub.alreadyCaptured=!1,0===Ub.timedOutAt&&(Ub.timedOutAt=vg());if(Zc!==hj&&null!==Ce)a:for(var De=Ce,wh=Zc,z=De;;){if(5===z.tag){var ij=z.stateNode;if(wh)ij.style.display="none";else{var jj=z.stateNode,$c=z.memoizedProps.style,kj=void 0!==$c&&null!==$c&&$c.hasOwnProperty("display")?$c.display:null;jj.style.display=kj}}else if(6===z.tag)z.stateNode.nodeValue=wh?"":z.memoizedProps;else if(null!==
z.child){z.child.return=z;z=z.child;continue}if(z===De)break a;for(;null===z.sibling;){if(null===z.return||z.return===De)break a;z=z.return}z.sibling.return=z.return;z=z.sibling}break;case 17:break;default:r("163")}}if(rh&128){var ad=T.ref;if(null!==ad){var xh=T.stateNode;switch(T.tag){case 5:var Ee=xh;break;default:Ee=xh}"function"===typeof ad?ad(Ee):ad.current=Ee}}var lj=T.nextEffect;T.nextEffect=null;T=lj}}catch(db){ph=!0,qh=db}ph&&(null===T?r("178"):void 0,Gh(T,qh),null!==T&&(T=T.nextEffect))}Vh=
Yh=!1;"function"===typeof zf&&zf(b.stateNode);var Fe=b.expirationTime,Ge=b.childExpirationTime,yh=0===Fe||0!==Ge&&Ge<Fe?Ge:Fe;0===yh&&(Ph=null);a.expirationTime=yh;a.finishedWork=null}function ci(){return oi?!0:null===ri||ri.timeRemaining()>yi?!1:oi=!0}function Nh(a){null===X?r("246"):void 0;X.expirationTime=0;pi||(pi=!0,qi=a)}function Ii(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Gi(1,null)}}function Ji(a,b){if(Z&&!si){si=!0;try{return a(b)}finally{si=!1}}return a(b)}
function Ki(a,b,c){if(fi)return a(b,c);Z||W||0===gi||(Gi(gi,null),gi=0);var d=fi,e=Z;Z=fi=!0;try{return a(b,c)}finally{fi=d,(Z=e)||W||Gi(1,null)}}
function Li(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===Gd(c)&&1===c.tag?void 0:r("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(M(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);r("171");g=void 0}if(1===c.tag){var h=c.type;if(M(h)){c=wf(c,h,g);break a}}c=g}else c=qf;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Tf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
Vf(f,e);xg(f,d);return d}function Mi(a,b,c,d){var e=b.current,f=vg();e=wg(f,e);return Li(a,b,c,e,d)}function Pi(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Qi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:nc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Nb=function(a,b,c){switch(b){case "input":Tc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qa(d);e?void 0:r("90");jc(d);Tc(d,e)}}}break;case "textarea":Qe(a,c);break;case "select":b=c.value,null!=b&&Ne(a,!!c.multiple,b,!1)}};
function Ri(a){var b=2+25*(((vg()-2+500)/25|0)+1);b<=Th&&(b=Th+1);this._expirationTime=Th=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ri.prototype.render=function(a){this._defer?void 0:r("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Si;Li(a,b,null,c,d._onCommit);return d};
Ri.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ri.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:r("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?r("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Di(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ri.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Si(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Si.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Si.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?r("191",c):void 0;c()}}};
function Ti(a,b,c){b=N(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Ti.prototype.render=function(a,b){var c=this._internalRoot,d=new Si;b=void 0===b?null:b;null!==b&&d.then(b);Mi(a,c,null,d._onCommit);return d};Ti.prototype.unmount=function(a){var b=this._internalRoot,c=new Si;a=void 0===a?null:a;null!==a&&c.then(a);Mi(null,b,null,c._onCommit);return c};Ti.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Si;c=void 0===c?null:c;null!==c&&e.then(c);Mi(b,d,a,e._onCommit);return e};
Ti.prototype.createBatch=function(){var a=new Ri(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Ui(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Yb=Ii;Zb=Ki;$b=function(){W||0===gi||(Gi(gi,null),gi=0)};
function Vi(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Ti(a,!1,b)}
function Wi(a,b,c,d,e){Ui(c)?void 0:r("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Pi(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Vi(c,d);if("function"===typeof e){var h=e;e=function(){var a=Pi(f._internalRoot);h.call(a)}}Ji(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Pi(f._internalRoot)}
function Xi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Ui(b)?void 0:r("200");return Qi(a,b,null,c)}
var Yi={createPortal:Xi,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?r("188"):r("268",Object.keys(a)));a=Jd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Wi(null,a,b,!0,c)},render:function(a,b,c){return Wi(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?r("38"):void 0;return Wi(a,b,c,!1,d)},unmountComponentAtNode:function(a){Ui(a)?
void 0:r("40");return a._reactRootContainer?(Ji(function(){Wi(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Xi.apply(void 0,arguments)},unstable_batchedUpdates:Ii,unstable_interactiveUpdates:Ki,flushSync:function(a,b){W?r("187"):void 0;var c=Z;Z=!0;try{return li(a,b)}finally{Z=c,Gi(1,null)}},unstable_flushControlled:function(a){var b=Z;Z=!0;try{li(a)}finally{(Z=b)||W||Gi(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Oa,
Pa,Qa,Ga.injectEventPluginsByName,sa,Wa,function(a){Ba(a,Va)},Wb,Xb,ee,Ia]},unstable_createRoot:function(a,b){Ui(a)?void 0:r("278");return new Ti(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Cf(n({},a,{findHostInstanceByFiber:function(a){a=Jd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Na,bundleType:0,version:"16.6.0",rendererPackageName:"react-dom"});
var mj={default:Yi},nj=mj&&Yi||mj;module.exports=nj.default||nj;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(52);
} else {}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,f=3,h=-1,k=-1,l=!1,m=!1,n="object"===typeof performance&&"function"===typeof performance.now,q={timeRemaining:n?function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-performance.now();return 0<a?a:0}:function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-Date.now();return 0<a?a:0},didTimeout:!1};function r(){if(!l){var a=c.expirationTime;m?t():m=!0;u(v,a)}}
function w(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=f,R=k;f=a;k=b;try{var g=d(q)}finally{f=e,k=R}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=g.next=g.previous=g;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===c&&(c=g,r());b=d.previous;b.next=d.previous=g;g.next=d;g.previous=
b}}function x(){if(-1===h&&null!==c&&1===c.priorityLevel){l=!0;q.didTimeout=!0;try{do w();while(null!==c&&1===c.priorityLevel)}finally{l=!1,null!==c?r():m=!1}}}function v(a){l=!0;q.didTimeout=a;try{if(a)for(;null!==c;){var b=exports.unstable_now();if(c.expirationTime<=b){do w();while(null!==c&&c.expirationTime<=b)}else break}else if(null!==c){do w();while(null!==c&&0<p()-exports.unstable_now())}}finally{l=!1,null!==c?r():m=!1,x()}}
var y=Date,z="function"===typeof setTimeout?setTimeout:void 0,A="function"===typeof clearTimeout?clearTimeout:void 0,B="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,C="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,D,E;function F(a){D=B(function(b){A(E);a(b)});E=z(function(){C(D);a(exports.unstable_now())},100)}if(n){var G=performance;exports.unstable_now=function(){return G.now()}}else exports.unstable_now=function(){return y.now()};var u,t,p;
if("undefined"!==typeof window&&window._schedMock){var H=window._schedMock;u=H[0];t=H[1];p=H[2]}else if("undefined"===typeof window||"function"!==typeof window.addEventListener){var I=null,J=-1,K=function(a,b){if(null!==I){var d=I;I=null;try{J=b,d(a)}finally{J=-1}}};u=function(a,b){-1!==J?setTimeout(u,0,a,b):(I=a,setTimeout(K,b,!0,b),setTimeout(K,1073741823,!1,1073741823))};t=function(){I=null};p=function(){return Infinity};exports.unstable_now=function(){return-1===J?0:J}}else{"undefined"!==typeof console&&
("function"!==typeof B&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof C&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var L=null,M=!1,N=-1,O=!1,P=!1,Q=0,S=33,T=33;p=function(){return Q};var U="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",
function(a){if(a.source===window&&a.data===U){M=!1;a=L;var b=N;L=null;N=-1;var d=exports.unstable_now(),e=!1;if(0>=Q-d)if(-1!==b&&b<=d)e=!0;else{O||(O=!0,F(V));L=a;N=b;return}if(null!==a){P=!0;try{a(e)}finally{P=!1}}}},!1);var V=function(a){if(null!==L){F(V);var b=a-Q+T;b<T&&S<T?(8>b&&(b=8),T=b<S?S:b):S=b;Q=a+T;M||(M=!0,window.postMessage(U,"*"))}else O=!1};u=function(a,b){L=a;N=b;P||0>b?window.postMessage(U,"*"):O||(O=!0,F(V))};t=function(){L=null;M=!1;N=-1}}exports.unstable_ImmediatePriority=1;
exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:break;default:a=3}var d=f,e=h;f=a;h=exports.unstable_now();try{return b()}finally{f=d,h=e,x()}};
exports.unstable_scheduleCallback=function(a,b){var d=-1!==h?h:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(f){case 1:b=d+-1;break;case 2:b=d+250;break;case 4:b=d+1073741823;break;default:b=d+5E3}a={callback:a,priorityLevel:f,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,r();else{d=null;var e=c;do{if(e.expirationTime>b){d=e;break}e=e.next}while(e!==c);null===d?d=c:d===c&&(c=a,r());b=d.previous;b.next=d.previous=
a;a.next=d;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=f;return function(){var d=f,e=h;f=b;h=exports.unstable_now();try{return a.apply(this,arguments)}finally{f=d,h=e,x()}}};exports.unstable_getCurrentPriorityLevel=function(){return f};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(54);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(55),
    createBaseEach = __webpack_require__(71);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(56),
    keys = __webpack_require__(15);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(57);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(59),
    isArguments = __webpack_require__(25),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(27),
    isIndex = __webpack_require__(29),
    isTypedArray = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isLength = __webpack_require__(16),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(26);

/** Detect free variable `exports`. */
var freeExports = true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(68),
    nativeKeys = __webpack_require__(69);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(70);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(31);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(73),
    baseMatchesProperty = __webpack_require__(123),
    identity = __webpack_require__(134),
    isArray = __webpack_require__(3),
    property = __webpack_require__(135);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(74),
    getMatchData = __webpack_require__(122),
    matchesStrictComparable = __webpack_require__(39);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(33),
    baseIsEqual = __webpack_require__(36);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10),
    Map = __webpack_require__(18),
    MapCache = __webpack_require__(19);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(32),
    isMasked = __webpack_require__(86),
    isObject = __webpack_require__(17),
    toSource = __webpack_require__(35);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(87);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(90),
    ListCache = __webpack_require__(10),
    Map = __webpack_require__(18);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(91),
    hashDelete = __webpack_require__(92),
    hashGet = __webpack_require__(93),
    hashHas = __webpack_require__(94),
    hashSet = __webpack_require__(95);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(33),
    equalArrays = __webpack_require__(37),
    equalByTag = __webpack_require__(107),
    equalObjects = __webpack_require__(111),
    getTag = __webpack_require__(117),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(27),
    isTypedArray = __webpack_require__(30);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(19),
    setCacheAdd = __webpack_require__(103),
    setCacheHas = __webpack_require__(104);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    Uint8Array = __webpack_require__(108),
    eq = __webpack_require__(34),
    equalArrays = __webpack_require__(37),
    mapToArray = __webpack_require__(109),
    setToArray = __webpack_require__(110);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(112);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(113),
    getSymbols = __webpack_require__(115),
    keys = __webpack_require__(15);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(114),
    isArray = __webpack_require__(3);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(24),
    stubArray = __webpack_require__(116);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(118),
    Map = __webpack_require__(18),
    Promise = __webpack_require__(119),
    Set = __webpack_require__(120),
    WeakMap = __webpack_require__(121),
    baseGetTag = __webpack_require__(7),
    toSource = __webpack_require__(35);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(38),
    keys = __webpack_require__(15);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(36),
    get = __webpack_require__(124),
    hasIn = __webpack_require__(131),
    isKey = __webpack_require__(20),
    isStrictComparable = __webpack_require__(38),
    matchesStrictComparable = __webpack_require__(39),
    toKey = __webpack_require__(14);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(40);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(126);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(127);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(19);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(129);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    arrayMap = __webpack_require__(130),
    isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(132),
    hasPath = __webpack_require__(133);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(41),
    isArguments = __webpack_require__(25),
    isArray = __webpack_require__(3),
    isIndex = __webpack_require__(29),
    isLength = __webpack_require__(16),
    toKey = __webpack_require__(14);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(136),
    basePropertyDeep = __webpack_require__(137),
    isKey = __webpack_require__(20),
    toKey = __webpack_require__(14);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(40);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/mobx-react/index.module.js




// These functions can be stubbed out in specific environments
var unstable_batchedUpdates$1 = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var EventEmitter = function () {
    function EventEmitter() {
        classCallCheck(this, EventEmitter);
        this.listeners = [];
    }

    createClass(EventEmitter, [{
        key: "on",
        value: function on(cb) {
            var _this = this;

            this.listeners.push(cb);
            return function () {
                var index = _this.listeners.indexOf(cb);
                if (index !== -1) _this.listeners.splice(index, 1);
            };
        }
    }, {
        key: "emit",
        value: function emit(data) {
            this.listeners.forEach(function (fn) {
                return fn(data);
            });
        }
    }]);
    return EventEmitter;
}();

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};

// Copied from React.PropTypes
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
            rest[_key - 6] = arguments[_key];
        }

        return Object(mobx_module["j" /* untracked */])(function () {
            componentName = componentName || "<<anonymous>>";
            propFullName = propFullName || propName;
            if (props[propName] == null) {
                if (isRequired) {
                    var actual = props[propName] === null ? "null" : "undefined";
                    return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
                }
                return null;
            } else {
                return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
            }
        });
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}

// Copied from React.PropTypes
function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
        return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
        return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
    }

    return false;
}

// Copied from React.PropTypes
function getPropType(propValue) {
    var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
    if (Array.isArray(propValue)) {
        return "array";
    }
    if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
    }
    if (isSymbol(propType, propValue)) {
        return "symbol";
    }
    return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes
function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === "object") {
        if (propValue instanceof Date) {
            return "date";
        } else if (propValue instanceof RegExp) {
            return "regexp";
        }
    }
    return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        return Object(mobx_module["j" /* untracked */])(function () {
            if (allowNativeType) {
                if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
            }
            var mobxChecker = void 0;
            switch (mobxType) {
                case "Array":
                    mobxChecker = mobx_module["e" /* isObservableArray */];
                    break;
                case "Object":
                    mobxChecker = mobx_module["g" /* isObservableObject */];
                    break;
                case "Map":
                    mobxChecker = mobx_module["f" /* isObservableMap */];
                    break;
                default:
                    throw new Error("Unexpected mobxType: " + mobxType);
            }
            var propValue = props[propName];
            if (!mobxChecker(propValue)) {
                var preciseType = getPreciseType(propValue);
                var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
                return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
            }
            return null;
        });
    });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
            rest[_key2 - 5] = arguments[_key2];
        }

        return Object(mobx_module["j" /* untracked */])(function () {
            if (typeof typeChecker !== "function") {
                return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
            }
            var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
            if (error instanceof Error) return error;
            var propValue = props[propName];
            for (var i = 0; i < propValue.length; i++) {
                error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
                if (error instanceof Error) return error;
            }
            return null;
        });
    });
}

var observableArray = createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, "Map");
var observableObject = createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");



var propTypes = Object.freeze({
	observableArray: observableArray,
	observableArrayOf: observableArrayOf,
	observableMap: observableMap,
	observableObject: observableObject,
	arrayOrObservableArray: arrayOrObservableArray,
	arrayOrObservableArrayOf: arrayOrObservableArrayOf,
	objectOrObservableObject: objectOrObservableObject
});

function isStateless(component) {
    // `function() {}` has prototype, but `() => {}` doesn't
    // `() => {}` via Babel has prototype too.
    return !(component.prototype && component.prototype.render);
}

var injectorContextTypes = {
    mobxStores: objectOrObservableObject
};
Object.seal(injectorContextTypes);

var proxiedInjectorProps = {
    contextTypes: {
        get: function get$$1() {
            return injectorContextTypes;
        },
        set: function set$$1(_) {
            console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
        },
        configurable: true,
        enumerable: false
    },
    isMobxInjector: {
        value: true,
        writable: true,
        configurable: true,
        enumerable: true
    }

    /**
     * Store Injection
     */
};function createStoreInjector(grabStoresFn, component, injectNames) {
    var _class, _temp2;

    var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
    if (injectNames) displayName += "-with-" + injectNames;

    var Injector = (_temp2 = _class = function (_Component) {
        inherits(Injector, _Component);

        function Injector() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, Injector);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
                _this.wrappedInstance = instance;
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(Injector, [{
            key: "render",
            value: function render() {
                // Optimization: it might be more efficient to apply the mapper function *outside* the render method
                // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
                // See this test: 'using a custom injector is not too reactive' in inject.js
                var newProps = {};
                for (var key in this.props) {
                    if (this.props.hasOwnProperty(key)) {
                        newProps[key] = this.props[key];
                    }
                }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
                for (var _key2 in additionalProps) {
                    newProps[_key2] = additionalProps[_key2];
                }

                if (!isStateless(component)) {
                    newProps.ref = this.storeRef;
                }

                return Object(react["createElement"])(component, newProps);
            }
        }]);
        return Injector;
    }(react["Component"]), _class.displayName = displayName, _temp2);

    // Static fields from component should be visible on the generated Injector

    hoistNonReactStatics(Injector, component);

    Injector.wrappedComponent = component;
    Object.defineProperties(Injector, proxiedInjectorProps);

    return Injector;
}

function grabStoresByName(storeNames) {
    return function (baseStores, nextProps) {
        storeNames.forEach(function (storeName) {
            if (storeName in nextProps // prefer props over stores
            ) return;
            if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
            nextProps[storeName] = baseStores[storeName];
        });
        return nextProps;
    };
}

/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */
function inject() /* fn(stores, nextProps) or ...storeNames */{
    var grabStoresFn = void 0;
    if (typeof arguments[0] === "function") {
        grabStoresFn = arguments[0];
        return function (componentClass) {
            var injected = createStoreInjector(grabStoresFn, componentClass);
            injected.isMobxInjector = false; // supress warning
            // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
            // see #111
            injected = observer(injected);
            injected.isMobxInjector = true; // restore warning
            return injected;
        };
    } else {
        var storeNames = [];
        for (var i = 0; i < arguments.length; i++) {
            storeNames[i] = arguments[i];
        }grabStoresFn = grabStoresByName(storeNames);
        return function (componentClass) {
            return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
        };
    }
}

/**
 * dev tool support
 */
var isDevtoolsEnabled = false;

var isUsingStaticRendering = false;

var warnedAboutObserverInjectDeprecation = false;

// WeakMap<Node, Object>;
var componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
var renderReporter = new EventEmitter();

function findDOMNode$2(component) {
    if (react_dom["findDOMNode"]) {
        try {
            return Object(react_dom["findDOMNode"])(component);
        } catch (e) {
            // findDOMNode will throw in react-test-renderer, see:
            // See https://github.com/mobxjs/mobx-react/issues/216
            // Is there a better heuristic?
            return null;
        }
    }
    return null;
}

function reportRendering(component) {
    var node = findDOMNode$2(component);
    if (node && componentByNodeRegistery) componentByNodeRegistery.set(node, component);

    renderReporter.emit({
        event: "render",
        renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
        totalTime: Date.now() - component.__$mobRenderStart,
        component: component,
        node: node
    });
}

function trackComponents() {
    if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
    if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
}

function useStaticRendering(useStaticRendering) {
    isUsingStaticRendering = useStaticRendering;
}

/**
 * Errors reporter
 */

var errorsReporter = new EventEmitter();

/**
 * Utilities
 */

function patch(target, funcName) {
    var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var base = target[funcName];
    var mixinFunc = reactiveMixin[funcName];
    var f = !base ? mixinFunc : runMixinFirst === true ? function () {
        mixinFunc.apply(this, arguments);
        base.apply(this, arguments);
    } : function () {
        base.apply(this, arguments);
        mixinFunc.apply(this, arguments);
    };

    // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
    // ...but that breaks react-hot-loader, see #231...
    target[funcName] = f;
}

function shallowEqual(objA, objB) {
    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

/**
 * ReactiveMixin
 */
var reactiveMixin = {
    componentWillMount: function componentWillMount() {
        var _this = this;

        if (isUsingStaticRendering === true) return;
        // Generate friendly name for debugging
        var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
        var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID || this._reactInternalFiber && this._reactInternalFiber._debugID;

        /**
         * If props are shallowly modified, react will render anyway,
         * so atom.reportChanged() should not result in yet another re-render
         */
        var skipRender = false;
        /**
         * forceUpdate will re-assign this.props. We don't want that to cause a loop,
         * so detect these changes
         */
        var isForcingUpdate = false;

        function makePropertyObservableReference(propName) {
            var valueHolder = this[propName];
            var atom = new mobx_module["a" /* Atom */]("reactive " + propName);
            Object.defineProperty(this, propName, {
                configurable: true,
                enumerable: true,
                get: function get$$1() {
                    atom.reportObserved();
                    return valueHolder;
                },
                set: function set$$1(v) {
                    if (!isForcingUpdate && !shallowEqual(valueHolder, v)) {
                        valueHolder = v;
                        skipRender = true;
                        atom.reportChanged();
                        skipRender = false;
                    } else {
                        valueHolder = v;
                    }
                }
            });
        }

        // make this.props an observable reference, see #124
        makePropertyObservableReference.call(this, "props");
        // make state an observable reference
        makePropertyObservableReference.call(this, "state");

        // wire up reactive render
        var baseRender = this.render.bind(this);
        var reaction = null;
        var isRenderingPending = false;

        var initialRender = function initialRender() {
            reaction = new mobx_module["b" /* Reaction */](initialName + "#" + rootNodeID + ".render()", function () {
                if (!isRenderingPending) {
                    // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
                    // This unidiomatic React usage but React will correctly warn about this so we continue as usual
                    // See #85 / Pull #44
                    isRenderingPending = true;
                    if (typeof _this.componentWillReact === "function") _this.componentWillReact(); // TODO: wrap in action?
                    if (_this.__$mobxIsUnmounted !== true) {
                        // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
                        // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
                        // However, people also claim this migth happen during unit tests..
                        var hasError = true;
                        try {
                            isForcingUpdate = true;
                            if (!skipRender) react["Component"].prototype.forceUpdate.call(_this);
                            hasError = false;
                        } finally {
                            isForcingUpdate = false;
                            if (hasError) reaction.dispose();
                        }
                    }
                }
            });
            reaction.reactComponent = _this;
            reactiveRender.$mobx = reaction;
            _this.render = reactiveRender;
            return reactiveRender();
        };

        var reactiveRender = function reactiveRender() {
            isRenderingPending = false;
            var exception = undefined;
            var rendering = undefined;
            reaction.track(function () {
                if (isDevtoolsEnabled) {
                    _this.__$mobRenderStart = Date.now();
                }
                try {
                    rendering = mobx_module["d" /* extras */].allowStateChanges(false, baseRender);
                } catch (e) {
                    exception = e;
                }
                if (isDevtoolsEnabled) {
                    _this.__$mobRenderEnd = Date.now();
                }
            });
            if (exception) {
                errorsReporter.emit(exception);
                throw exception;
            }
            return rendering;
        };

        this.render = initialRender;
    },

    componentWillUnmount: function componentWillUnmount() {
        if (isUsingStaticRendering === true) return;
        this.render.$mobx && this.render.$mobx.dispose();
        this.__$mobxIsUnmounted = true;
        if (isDevtoolsEnabled) {
            var node = findDOMNode$2(this);
            if (node && componentByNodeRegistery) {
                componentByNodeRegistery.delete(node);
            }
            renderReporter.emit({
                event: "destroy",
                component: this,
                node: node
            });
        }
    },

    componentDidMount: function componentDidMount() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        if (isUsingStaticRendering) {
            console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
        }
        // update on any state changes (as is the default)
        if (this.state !== nextState) {
            return true;
        }
        // update if props are shallowly not equal, inspired by PureRenderMixin
        // we could return just 'false' here, and avoid the `skipRender` checks etc
        // however, it is nicer if lifecycle events are triggered like usually,
        // so we return true here if props are shallowly modified.
        return !shallowEqual(this.props, nextProps);
    }

    /**
     * Observer function / decorator
     */
};function observer(arg1, arg2) {
    if (typeof arg1 === "string") {
        throw new Error("Store names should be provided as array");
    }
    if (Array.isArray(arg1)) {
        // component needs stores
        if (!warnedAboutObserverInjectDeprecation) {
            warnedAboutObserverInjectDeprecation = true;
            console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
        }
        if (!arg2) {
            // invoked as decorator
            return function (componentClass) {
                return observer(arg1, componentClass);
            };
        } else {
            return inject.apply(null, arg1)(observer(arg2));
        }
    }
    var componentClass = arg1;

    if (componentClass.isMobxInjector === true) {
        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
    }

    // Stateless function component:
    // If it is function but doesn't seem to be a react class constructor,
    // wrap it to a react class automatically
    if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !react["Component"].isPrototypeOf(componentClass)) {
        var _class, _temp;

        return observer((_temp = _class = function (_Component) {
            inherits(_class, _Component);

            function _class() {
                classCallCheck(this, _class);
                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            createClass(_class, [{
                key: "render",
                value: function render() {
                    return componentClass.call(this, this.props, this.context);
                }
            }]);
            return _class;
        }(react["Component"]), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
    }

    if (!componentClass) {
        throw new Error("Please pass a valid component to 'observer'");
    }

    var target = componentClass.prototype || componentClass;
    mixinLifecycleEvents(target);
    componentClass.isMobXReactObserver = true;
    return componentClass;
}

function mixinLifecycleEvents(target) {
    patch(target, "componentWillMount", true);["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
        patch(target, funcName);
    });
    if (!target.shouldComponentUpdate) {
        target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
    }
}

// TODO: support injection somehow as well?
var Observer = observer(function (_ref) {
    var children = _ref.children,
        observerInject = _ref.inject,
        render = _ref.render;

    var component = children || render;
    if (typeof component === "undefined") {
        return null;
    }
    if (!observerInject) {
        return component();
    }
    var InjectComponent = inject(observerInject)(component);
    return react_default.a.createElement(InjectComponent, null);
});

Observer.displayName = "Observer";

var ObserverPropsCheck = function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    if (typeof props[key] === "function" && typeof props[extraKey] === "function") {
        return new Error("Invalid prop,do not use children and render in the same time in`" + componentName);
    }

    if (typeof props[key] === "function" || typeof props[extraKey] === "function") {
        return;
    }
    return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
};

Observer.propTypes = {
    render: ObserverPropsCheck,
    children: ObserverPropsCheck
};

var index_module_class;
var index_module_temp;

var specialReactKeys = { children: true, key: true, ref: true };

var index_module_Provider = (index_module_temp = index_module_class = function (_Component) {
    inherits(Provider, _Component);

    function Provider() {
        classCallCheck(this, Provider);
        return possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
    }

    createClass(Provider, [{
        key: "render",
        value: function render() {
            return react["Children"].only(this.props.children);
        }
    }, {
        key: "getChildContext",
        value: function getChildContext() {
            var stores = {};
            // inherit stores
            var baseStores = this.context.mobxStores;
            if (baseStores) for (var key in baseStores) {
                stores[key] = baseStores[key];
            }
            // add own stores
            for (var _key in this.props) {
                if (!specialReactKeys[_key] && _key !== "suppressChangedStoreWarning") stores[_key] = this.props[_key];
            }return {
                mobxStores: stores
            };
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            // Maybe this warning is too aggressive?
            if (Object.keys(nextProps).length !== Object.keys(this.props).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
            if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
                if (!specialReactKeys[key] && this.props[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
            }
        }
    }]);
    return Provider;
}(react["Component"]), index_module_class.contextTypes = {
    mobxStores: objectOrObservableObject
}, index_module_class.childContextTypes = {
    mobxStores: objectOrObservableObject.isRequired
}, index_module_temp);

if (!react["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx_module["d" /* extras */]) throw new Error("mobx-react requires mobx to be available");

if (typeof react_dom["unstable_batchedUpdates"] === "function") mobx_module["d" /* extras */].setReactionScheduler(react_dom["unstable_batchedUpdates"]);else if (typeof unstable_batchedUpdates$1 === "function") mobx_module["d" /* extras */].setReactionScheduler(unstable_batchedUpdates$1);

var onError = function onError(fn) {
    return errorsReporter.on(fn);
};

/* DevTool support */
// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
    var mobx$1 = { spy: mobx_module["i" /* spy */], extras: mobx_module["d" /* extras */] };
    var mobxReact = { renderReporter: renderReporter, componentByNodeRegistery: componentByNodeRegistery, trackComponents: trackComponents };
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
}



// EXTERNAL MODULE: ./src/json/russia.locality.json
var russia_locality = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__(43);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// CONCATENATED MODULE: ./src/js/form-data.js
var form_data_class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }




var form_data_FormData = (form_data_class =
/*#__PURE__*/
function () {
  function FormData() {
    _classCallCheck(this, FormData);

    _initializerDefineProperty(this, "cities", _descriptor, this);

    _initializerDefineProperty(this, "filteredCities", _descriptor2, this);

    _initializerDefineProperty(this, "inputValue", _descriptor3, this);

    _initializerDefineProperty(this, "currentCity", _descriptor4, this);

    _initializerDefineProperty(this, "isShowSelectMobile", _descriptor5, this);
  }

  _createClass(FormData, [{
    key: "setCurrentCity",
    // Установить новый город
    value: function setCurrentCity(cityName) {
      this.currentCity = cityName;
    } // Сгенерировать новый лист

  }, {
    key: "setNewList",
    value: function setNewList(val) {
      this.inputValue = val;

      if (val !== '') {
        var filteredCities = filter_default()(this.cities, function (item) {
          return item.indexOf(val) > -1;
        });
        filteredCities = filteredCities.sort(function (a, b) {
          return a.localeCompare(b);
        });
        this.filteredCities = filteredCities.slice(0, 6);
      } else {
        this.filteredCities.length = 0;
      }
    }
  }]);

  return FormData;
}(), (_descriptor = _applyDecoratedDescriptor(form_data_class.prototype, "cities", [mobx_module["h" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return russia_locality.data.map(function (city) {
      return city.name;
    });
  }
}), _descriptor2 = _applyDecoratedDescriptor(form_data_class.prototype, "filteredCities", [mobx_module["h" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(form_data_class.prototype, "inputValue", [mobx_module["h" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(form_data_class.prototype, "currentCity", [mobx_module["h" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "Выберите город";
  }
}), _descriptor5 = _applyDecoratedDescriptor(form_data_class.prototype, "isShowSelectMobile", [mobx_module["h" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(form_data_class.prototype, "setCurrentCity", [mobx_module["c" /* action */]], Object.getOwnPropertyDescriptor(form_data_class.prototype, "setCurrentCity"), form_data_class.prototype), _applyDecoratedDescriptor(form_data_class.prototype, "setNewList", [mobx_module["c" /* action */]], Object.getOwnPropertyDescriptor(form_data_class.prototype, "setNewList"), form_data_class.prototype)), form_data_class);

// EXTERNAL MODULE: ./node_modules/is-mobile/index.js
var is_mobile = __webpack_require__(6);
var is_mobile_default = /*#__PURE__*/__webpack_require__.n(is_mobile);

// CONCATENATED MODULE: ./src/js/city-item.js
var city_item_class;

function city_item_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { city_item_typeof = function _typeof(obj) { return typeof obj; }; } else { city_item_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return city_item_typeof(obj); }

function city_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function city_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function city_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) city_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) city_item_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (city_item_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var
/**
 * Класс с отображением одного города в списке
 */
city_item_CityItem = observer(city_item_class =
/*#__PURE__*/
function (_Component) {
  _inherits(CityItem, _Component);

  function CityItem(props) {
    city_item_classCallCheck(this, CityItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(CityItem).call(this, props));
  } // Установить новый город


  city_item_createClass(CityItem, [{
    key: "setCity",
    value: function setCity(e) {
      this.props.store.setCurrentCity(this.props.city);
      this.props.store.setNewList('');
    }
  }, {
    key: "render",
    value: function render() {
      // Подсветить ввыодимые данные в списке город
      var city = this.props.city;
      city = city.split(this.props.store.inputValue);

      if (is_mobile_default()()) {
        return react_default.a.createElement("option", {
          name: this.props.city,
          value: this.props.city
        }, this.props.city);
      } else {
        return react_default.a.createElement("div", {
          className: "item-city"
        }, react_default.a.createElement("p", {
          onClick: this.setCity.bind(this)
        }, city[0], react_default.a.createElement("span", {
          class: "input-colorize"
        }, this.props.store.inputValue), city[1]));
      }
    }
  }]);

  return CityItem;
}(react["Component"])) || city_item_class;


// CONCATENATED MODULE: ./src/js/city-list.js
var city_list_class;

function city_list_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { city_list_typeof = function _typeof(obj) { return typeof obj; }; } else { city_list_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return city_list_typeof(obj); }

function city_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function city_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function city_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) city_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) city_list_defineProperties(Constructor, staticProps); return Constructor; }

function city_list_possibleConstructorReturn(self, call) { if (call && (city_list_typeof(call) === "object" || typeof call === "function")) { return call; } return city_list_assertThisInitialized(self); }

function city_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function city_list_getPrototypeOf(o) { city_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return city_list_getPrototypeOf(o); }

function city_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) city_list_setPrototypeOf(subClass, superClass); }

function city_list_setPrototypeOf(o, p) { city_list_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return city_list_setPrototypeOf(o, p); }






var
/**
 * Список отфильтрованных городов
 */
city_list_CityList = observer(city_list_class =
/*#__PURE__*/
function (_Component) {
  city_list_inherits(CityList, _Component);

  function CityList(props) {
    city_list_classCallCheck(this, CityList);

    return city_list_possibleConstructorReturn(this, city_list_getPrototypeOf(CityList).call(this, props));
  } // Изменили город в мобильном списке


  city_list_createClass(CityList, [{
    key: "handleMobileChange",
    value: function handleMobileChange(e) {
      this.props.store.setCurrentCity(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // Показать список
      var isShow = this.props.store.filteredCities.length ? '' : 'not_display'; // Города

      var cities = this.props.store.filteredCities.map(function (city, i) {
        return react_default.a.createElement(city_item_CityItem, {
          city: city,
          store: _this.props.store
        });
      }); // Если ТАП по полю, то открываем мобильный селект

      if (this.props.store.isShowSelectMobile) {
        var select = document.querySelector('#select-cities');
        select.dispatchEvent(new Event('change'));
      }

      if (is_mobile_default()()) {
        return react_default.a.createElement("div", {
          className: "container-list not_display"
        }, react_default.a.createElement("select", {
          id: "select-cities",
          value: this.props.store.currentCity,
          onChange: this.handleMobileChange.bind(this)
        }, cities));
      } else {
        return react_default.a.createElement("div", {
          className: "container-list ".concat(isShow)
        }, cities);
      }
    }
  }]);

  return CityList;
}(react["Component"])) || city_list_class;


// EXTERNAL MODULE: ./node_modules/react-touch-events/lib/index.js
var lib = __webpack_require__(44);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/js/city-search.js
var city_search_class;

function city_search_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { city_search_typeof = function _typeof(obj) { return typeof obj; }; } else { city_search_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return city_search_typeof(obj); }

function city_search_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function city_search_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function city_search_createClass(Constructor, protoProps, staticProps) { if (protoProps) city_search_defineProperties(Constructor.prototype, protoProps); if (staticProps) city_search_defineProperties(Constructor, staticProps); return Constructor; }

function city_search_possibleConstructorReturn(self, call) { if (call && (city_search_typeof(call) === "object" || typeof call === "function")) { return call; } return city_search_assertThisInitialized(self); }

function city_search_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function city_search_getPrototypeOf(o) { city_search_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return city_search_getPrototypeOf(o); }

function city_search_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) city_search_setPrototypeOf(subClass, superClass); }

function city_search_setPrototypeOf(o, p) { city_search_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return city_search_setPrototypeOf(o, p); }







var city_search_CitySearch = observer(city_search_class =
/*#__PURE__*/
function (_Component) {
  city_search_inherits(CitySearch, _Component);

  function CitySearch(props) {
    city_search_classCallCheck(this, CitySearch);

    return city_search_possibleConstructorReturn(this, city_search_getPrototypeOf(CitySearch).call(this, props));
  } // Поиск по вводимому значению


  city_search_createClass(CitySearch, [{
    key: "search",
    value: function search(e) {
      this.props.store.setNewList(e.target.value);
    } // Нажали на мобилке

  }, {
    key: "handleTap",
    value: function handleTap(e) {
      this.props.store.isShowSelectMobile = true;
    }
  }, {
    key: "render",
    value: function render() {
      // Определяет высоту экрана для определения стороны выпадения (вверх, вниз)
      // на мобилке нативное выпадение, поэтому всегда вниз
      var orientationRevert = window.innerHeight < 700 && !is_mobile_default()() ? 'up' : 'down'; // Если список выпадает вверх, то не показываем placeholder

      var isShowLabel = this.props.store.filteredCities.length && orientationRevert === 'up' ? 'not_display' : '';
      return react_default.a.createElement("div", {
        className: "search-container ".concat(orientationRevert)
      }, react_default.a.createElement(lib_default.a, {
        onTap: this.handleTap.bind(this)
      }, react_default.a.createElement("input", {
        className: "input-city",
        ref: "searchInput",
        onKeyUp: this.search.bind(this),
        type: "text",
        id: "search-cities"
      })), react_default.a.createElement(lib_default.a, {
        onTap: this.handleTap.bind(this)
      }, react_default.a.createElement("label", {
        className: isShowLabel,
        for: "search-cities"
      }, this.props.store.currentCity)), react_default.a.createElement(city_list_CityList, {
        store: this.props.store
      }));
    }
  }]);

  return CitySearch;
}(react["Component"])) || city_search_class;


// CONCATENATED MODULE: ./src/js/index.js
var js_class;

function js_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { js_typeof = function _typeof(obj) { return typeof obj; }; } else { js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return js_typeof(obj); }

function js_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function js_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function js_createClass(Constructor, protoProps, staticProps) { if (protoProps) js_defineProperties(Constructor.prototype, protoProps); if (staticProps) js_defineProperties(Constructor, staticProps); return Constructor; }

function js_possibleConstructorReturn(self, call) { if (call && (js_typeof(call) === "object" || typeof call === "function")) { return call; } return js_assertThisInitialized(self); }

function js_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function js_getPrototypeOf(o) { js_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return js_getPrototypeOf(o); }

function js_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) js_setPrototypeOf(subClass, superClass); }

function js_setPrototypeOf(o, p) { js_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return js_setPrototypeOf(o, p); }









var js_Application = observer(js_class =
/*#__PURE__*/
function (_Component) {
  js_inherits(Application, _Component);

  function Application() {
    js_classCallCheck(this, Application);

    return js_possibleConstructorReturn(this, js_getPrototypeOf(Application).apply(this, arguments));
  }

  js_createClass(Application, [{
    key: "render",
    value: function render() {
      var store = new form_data_FormData();
      return react_default.a.createElement(city_search_CitySearch, {
        store: store
      });
    }
  }]);

  return Application;
}(react["Component"])) || js_class;

Object(react_dom["render"])(react_default.a.createElement(js_Application, null), document.getElementById('app'));

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);