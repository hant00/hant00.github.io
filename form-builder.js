/*!
 * jQuery formBuilder: https://formbuilder.online/
 * Version: 3.2.5
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com>
 */
(function ($) { "use strict";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return trimObj; });
/* unused harmony export validAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return xmlAttrString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attrString; });
/* unused harmony export safeAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return flattenArray; });
/* unused harmony export safeAttrName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hyphenCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return camelCase; });
/* unused harmony export bindEvents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return nameAttr; });
/* unused harmony export getContentType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return markup; });
/* unused harmony export parseAttrs */
/* unused harmony export parseOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return parseXML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return parsedHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return escapeHtml; });
/* unused harmony export escapeAttr */
/* unused harmony export escapeAttrs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return removeFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isCached; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return capitalize; });
/* unused harmony export merge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return mobileClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return safename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return forceNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return insertStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return removeStyle; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

window.fbLoaded = {
  js: [],
  css: []
};
window.fbEditors = {
  quill: {},
  tinymce: {}
};
var trimObj = function trimObj(attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];

  for (var attr in attrs) {
    if (xmlRemove.includes(attrs[attr])) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};
var validAttr = function validAttr(attr) {
  var invalid = ['values', 'enableOther', 'other', 'label', 'subtype'];
  return !invalid.includes(attr);
};
var xmlAttrString = function xmlAttrString(attrs) {
  return Object.entries(attrs).map(function (_ref) {
    var key = _ref[0],
        val = _ref[1];
    return hyphenCase(key) + "=\"" + val + "\"";
  }).join(' ');
};
var attrString = function attrString(attrs) {
  return Object.entries(attrs).map(function (_ref2) {
    var key = _ref2[0],
        val = _ref2[1];
    return validAttr(key) && Object.values(safeAttr(key, val)).join('');
  }).filter(Boolean).join(' ');
};
var safeAttr = function safeAttr(name, value) {
  name = safeAttrName(name);
  var valString;

  if (value) {
    if (Array.isArray(value)) {
      valString = escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }

      valString = escapeAttr(value.trim());
    }
  }

  value = value ? "=\"" + valString + "\"" : '';
  return {
    name: name,
    value: value
  };
};
var flattenArray = function flattenArray(arr) {
  return arr.reduce(function (acc, val) {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
};
var safeAttrName = function safeAttrName(name) {
  var safeAttr = {
    className: 'class'
  };
  return safeAttr[name] || hyphenCase(name);
};
var hyphenCase = function hyphenCase(str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};
var camelCase = function camelCase(str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};
var bindEvents = function bindEvents(element, events) {
  if (events) {
    var _loop = function _loop(event) {
      if (events.hasOwnProperty(event)) {
        element.addEventListener(event, function (evt) {
          return events[event](evt);
        });
      }
    };

    for (var event in events) {
      _loop(event);
    }
  }
};
var nameAttr = function nameAttr(field) {
  var epoch = new Date().getTime();
  var prefix = field.type || hyphenCase(field.label);
  return prefix + '-' + epoch;
};
var getContentType = function getContentType(content) {
  if (content === undefined) {
    return content;
  }

  return [['array', function (content) {
    return Array.isArray(content);
  }], ['node', function (content) {
    return content instanceof window.Node || content instanceof window.HTMLElement;
  }], ['component', function () {
    return content && content.dom;
  }], [typeof content, function () {
    return true;
  }]].find(function (typeCondition) {
    return typeCondition[1](content);
  })[0];
};
var markup = function markup(tag, content, attributes) {
  if (content === void 0) {
    content = '';
  }

  if (attributes === void 0) {
    attributes = {};
  }

  var contentType = getContentType(content);

  var _attributes = attributes,
      events = _attributes.events,
      attrs = _objectWithoutPropertiesLoose(_attributes, ["events"]);

  var field = document.createElement(tag);
  var appendContent = {
    string: function string(content) {
      field.innerHTML += content;
    },
    object: function object(config) {
      var tag = config.tag,
          content = config.content,
          data = _objectWithoutPropertiesLoose(config, ["tag", "content"]);

      return field.appendChild(markup(tag, content, data));
    },
    node: function node(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var _i = 0; _i < content.length; _i++) {
        contentType = getContentType(content[_i]);
        appendContent[contentType](content[_i]);
      }
    },
    function: function _function(content) {
      content = content();
      contentType = getContentType(content);
      appendContent[contentType](content);
    },
    undefined: function undefined() {}
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = safeAttrName(attr);
      var attrVal = Array.isArray(attrs[attr]) ? unique(attrs[attr].join(' ').split(' ')).join(' ') : attrs[attr];
      field.setAttribute(name, attrVal);
    }
  }

  if (content) {
    appendContent[contentType](content);
  }

  bindEvents(field, events);
  return field;
};
var parseAttrs = function parseAttrs(elem) {
  var attrs = elem.attributes;
  var data = {};
  forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value || '';

    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[camelCase(attrs[attr].name)] = attrVal;
    }
  });
  return data;
};
var parseOptions = function parseOptions(options) {
  var data = [];

  for (var _i2 = 0; _i2 < options.length; _i2++) {
    var optionData = _objectSpread({}, parseAttrs(options[_i2]), {
      label: options[_i2].textContent
    });

    data.push(optionData);
  }

  return data;
};
var parseXML = function parseXML(xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml');
  var formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');

    for (var _i3 = 0; _i3 < fields.length; _i3++) {
      var fieldData = parseAttrs(fields[_i3]);

      var options = fields[_i3].getElementsByTagName('option');

      if (options && options.length) {
        fieldData.values = parseOptions(options);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};
var parsedHtml = function parsedHtml(html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.innerHTML = html;
  return escapeElement.textContent;
};
var escapeHtml = function escapeHtml(html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};
var escapeAttr = function escapeAttr(str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};
var escapeAttrs = function escapeAttrs(attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};
var forEach = function forEach(array, callback, scope) {
  for (var _i4 = 0; _i4 < array.length; _i4++) {
    callback.call(scope, _i4, array[_i4]);
  }
};
var unique = function unique(array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};
var removeFromArray = function removeFromArray(val, arr) {
  var index = arr.indexOf(val);

  if (index > -1) {
    arr.splice(index, 1);
  }
};
var getScripts = function getScripts(scriptScr, path) {
  var _jQuery;

  var $ = jQuery;
  var _arr = [];

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  if (!isCached(scriptScr)) {
    _arr = jQuery.map(scriptScr, function (src) {
      var options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src
      };
      return jQuery.ajax(options).done(function () {
        return window.fbLoaded.js.push(src);
      });
    });
  }

  _arr.push(jQuery.Deferred(function (deferred) {
    return $(deferred.resolve);
  }));

  return (_jQuery = jQuery).when.apply(_jQuery, _arr);
};
var isCached = function isCached(src, type) {
  if (type === void 0) {
    type = 'js';
  }

  var isCached = false;
  var cache = window.fbLoaded[type];

  if (Array.isArray(src)) {
    isCached = src.every(function (s) {
      return cache.includes(s);
    });
  } else {
    isCached = cache.includes(src);
  }

  return isCached;
};
var getStyles = function getStyles(scriptScr, path) {
  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  scriptScr.forEach(function (src) {
    var type = 'href';
    var key = src;
    var id = '';

    if (typeof src == 'object') {
      type = src.type || (src.style ? 'inline' : 'href');
      id = src.id;
      src = type == 'inline' ? src.style : src.href;
      key = id || src.href || src.style;
    }

    if (isCached(key, 'css')) {
      return;
    }

    if (type == 'href') {
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = (path || '') + src;
      document.head.appendChild(link);
    } else {
      $("<style type=\"text/css\">" + src + "</style>").attr('id', id).appendTo($(document.head));
    }

    window.fbLoaded.css.push(key);
  });
};
var capitalize = function capitalize(str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};
var merge = function merge(obj1, obj2) {
  var mergedObj = Object.assign({}, obj1, obj2);

  for (var prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if (typeof obj2[prop] === 'object') {
        mergedObj[prop] = merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }

  return mergedObj;
};
var addEventListeners = function addEventListeners(el, evts, cb) {
  return evts.split(' ').forEach(function (e) {
    return el.addEventListener(e, cb, false);
  });
};
var closest = function closest(el, cls) {
  var className = cls.replace('.', '');

  while ((el = el.parentElement) && !el.classList.contains(className)) {
    ;
  }

  return el;
};
var mobileClass = function mobileClass() {
  var mobileClass = '';

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)) {
      mobileClass = 'fb-mobile';
    }
  })(navigator.userAgent || navigator.vendor || window.opera);

  return mobileClass;
};
var safename = function safename(str) {
  return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9[\]_-]/g, '');
};
var forceNumber = function forceNumber(str) {
  return str.replace(/[^0-9]/g, '');
};
var subtract = function subtract(arr, from) {
  return from.filter(function (a) {
    return !~this.indexOf(a);
  }, arr);
};
var insertStyle = function insertStyle(srcs) {
  srcs = Array.isArray(srcs) ? srcs : [srcs];
  var promises = srcs.map(function (_ref3) {
    var src = _ref3.src,
        id = _ref3.id;
    return new Promise(function (resolve, reject) {
      if (window.fbLoaded.css.includes(src)) {
        return resolve(src);
      }

      var formeoStyle = markup('link', null, {
        href: src,
        rel: 'stylesheet',
        id: id
      });
      document.head.insertBefore(formeoStyle, document.head.firstChild);
    });
  });
  return Promise.all(promises);
};
var removeStyle = function removeStyle(id) {
  var elem = document.getElementById(id);
  return elem.parentElement.removeChild(elem);
};
var utils = {
  addEventListeners: addEventListeners,
  attrString: attrString,
  camelCase: camelCase,
  capitalize: capitalize,
  closest: closest,
  getContentType: getContentType,
  escapeAttr: escapeAttr,
  escapeAttrs: escapeAttrs,
  escapeHtml: escapeHtml,
  forceNumber: forceNumber,
  forEach: forEach,
  getScripts: getScripts,
  getStyles: getStyles,
  hyphenCase: hyphenCase,
  isCached: isCached,
  markup: markup,
  merge: merge,
  mobileClass: mobileClass,
  nameAttr: nameAttr,
  parseAttrs: parseAttrs,
  parsedHtml: parsedHtml,
  parseOptions: parseOptions,
  parseXML: parseXML,
  removeFromArray: removeFromArray,
  safeAttr: safeAttr,
  safeAttrName: safeAttrName,
  safename: safename,
  subtract: subtract,
  trimObj: trimObj,
  unique: unique,
  validAttr: validAttr
};

utils.splitObject = function (obj, keys) {
  var reconstructObj = function reconstructObj(initialObj) {
    return function (result, key) {
      result[key] = initialObj[key];
      return result;
    };
  };

  var kept = Object.keys(obj).filter(function (key) {
    return keys.includes(key);
  }).reduce(reconstructObj(obj), {});
  var rest = Object.keys(obj).filter(function (key) {
    return !keys.includes(key);
  }).reduce(reconstructObj(obj), {});
  return [kept, rest];
};

/* harmony default export */ __webpack_exports__["f"] = (utils);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return control; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var mi18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var mi18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mi18n__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var control = function () {
  function control(config, preview) {
    this.rawConfig = jQuery.extend({}, config);
    config = jQuery.extend({}, config);
    this.preview = preview;
    delete config.isPreview;

    if (this.preview) {
      delete config.required;
    }

    var properties = ['label', 'description', 'subtype', 'required', 'disabled'];

    for (var _i = 0, _properties = properties; _i < _properties.length; _i++) {
      var prop = _properties[_i];
      this[prop] = config[prop];
      delete config[prop];
    }

    if (!config.id) {
      if (config.name) {
        config.id = config.name;
      } else {
        config.id = 'control-' + Math.floor(Math.random() * 10000000 + 1);
      }
    }

    this.id = config.id;
    this.type = config.type;

    if (this.description) {
      config.title = this.description;
    }

    if (!control.controlConfig) {
      control.controlConfig = {};
    }

    var classId = this.subtype ? this.type + '.' + this.subtype : this.type;
    this.classConfig = jQuery.extend({}, control.controlConfig[classId] || {});

    if (this.subtype) {
      config.type = this.subtype;
    }

    if (this.required) {
      config['required'] = 'required';
      config['aria-required'] = 'true';
    }

    if (this.disabled) {
      config['disabled'] = 'disabled';
    }

    this.config = config;
    this.configure();
  }

  control.register = function register(types, controlClass, parentType) {
    var prefix = parentType ? parentType + '.' : '';

    if (!control.classRegister) {
      control.classRegister = {};
    }

    if (!Array.isArray(types)) {
      types = [types];
    }

    for (var _iterator = types, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i2 >= _iterator.length) break;
        _ref = _iterator[_i2++];
      } else {
        _i2 = _iterator.next();
        if (_i2.done) break;
        _ref = _i2.value;
      }

      var type = _ref;

      if (type.indexOf('.') !== -1) {
        control.error("Ignoring type " + type + ". Cannot use the character '.' in a type name.");
        continue;
      }

      control.classRegister[prefix + type] = controlClass;
    }
  };

  control.getRegistered = function getRegistered(type) {
    if (type === void 0) {
      type = false;
    }

    var types = Object.keys(control.classRegister);

    if (!types.length) {
      return types;
    }

    return types.filter(function (key) {
      if (type) {
        return key.indexOf(type + '.') > -1;
      }

      return key.indexOf('.') == -1;
    });
  };

  control.getRegisteredSubtypes = function getRegisteredSubtypes() {
    var types = {};

    for (var key in control.classRegister) {
      if (control.classRegister.hasOwnProperty(key)) {
        var _key$split = key.split('.'),
            type = _key$split[0],
            subtype = _key$split[1];

        if (!subtype) {
          continue;
        }

        if (!types[type]) {
          types[type] = [];
        }

        types[type].push(subtype);
      }
    }

    return types;
  };

  control.getClass = function getClass(type, subtype) {
    var lookup = subtype ? type + '.' + subtype : type;
    var controlClass = control.classRegister[lookup] || control.classRegister[type];

    if (!controlClass) {
      return control.error('Invalid control type. (Type: ' + type + ', Subtype: ' + subtype + '). Please ensure you have registered it, and imported it correctly.');
    }

    return controlClass;
  };

  control.loadCustom = function loadCustom(controls) {
    var controlClasses = [];

    if (controls) {
      controlClasses = controlClasses.concat(controls);
    }

    if (window.fbControls) {
      controlClasses = controlClasses.concat(window.fbControls);
    }

    if (!this.fbControlsLoaded) {
      for (var _iterator2 = controlClasses, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i3 >= _iterator2.length) break;
          _ref2 = _iterator2[_i3++];
        } else {
          _i3 = _iterator2.next();
          if (_i3.done) break;
          _ref2 = _i3.value;
        }

        var loadControl = _ref2;
        loadControl(control, control.classRegister);
      }

      this.fbControlsLoaded = true;
    }
  };

  control.mi18n = function mi18n(lookup, args) {
    var def = this.definition;
    var i18n = def.i18n || {};
    var locale = mi18n__WEBPACK_IMPORTED_MODULE_1___default.a.locale;
    i18n = i18n[locale] || i18n.default || i18n;
    var lookupCamel = this.camelCase(lookup);
    var value = typeof i18n == 'object' ? i18n[lookupCamel] || i18n[lookup] : i18n;

    if (value) {
      return value;
    }

    var mapped = def.mi18n;

    if (typeof mapped === 'object') {
      mapped = mapped[lookupCamel] || mapped[lookup];
    }

    if (!mapped) {
      mapped = lookupCamel;
    }

    return mi18n__WEBPACK_IMPORTED_MODULE_1___default.a.get(mapped, args);
  };

  control.active = function active(type) {
    return !Array.isArray(this.definition.inactive) || this.definition.inactive.indexOf(type) == -1;
  };

  control.label = function label(type) {
    return this.mi18n(type);
  };

  control.icon = function icon(type) {
    var def = this.definition;

    if (def && typeof def.icon === 'object') {
      return def.icon[type];
    }

    return def.icon;
  };

  var _proto = control.prototype;

  _proto.configure = function configure() {};

  _proto.build = function build() {
    var _this$config = this.config,
        label = _this$config.label,
        type = _this$config.type,
        data = _objectWithoutPropertiesLoose(_this$config, ["label", "type"]);

    return this.markup(type, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* parsedHtml */ "t"])(label), data);
  };

  _proto.on = function on(eventType) {
    var _this = this;

    var events = {
      prerender: function prerender(element) {},
      render: function render(evt) {
        var onRender = function onRender() {
          if (_this.onRender) {
            _this.onRender();
          }
        };

        if (_this.css) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getStyles */ "l"])(_this.css);
        }

        if (_this.js && !Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* isCached */ "o"])(_this.js)) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getScripts */ "k"])(_this.js).done(onRender);
        } else {
          onRender();
        }
      }
    };
    return eventType ? events[eventType] : events;
  };

  control.error = function error(message) {
    throw new Error(message);
  };

  _proto.markup = function markup(tag, content, attributes) {
    if (content === void 0) {
      content = '';
    }

    if (attributes === void 0) {
      attributes = {};
    }

    this.element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* markup */ "p"])(tag, content, attributes);
    return this.element;
  };

  _proto.parsedHtml = function parsedHtml(html) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* parsedHtml */ "t"])(html);
  };

  control.camelCase = function camelCase(str) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* camelCase */ "c"])(str);
  };

  _createClass(control, null, [{
    key: "definition",
    get: function get() {
      return {};
    }
  }]);

  return control;
}();



/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*!
 * mi18n - https://github.com/Draggable/mi18n
 * Version: 0.4.7
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
 */
module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2),i=n(10),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function u(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))}function c(e){return"[object Function]"===s.call(e)}function f(e,t){if(null!==e&&void 0!==e)if("object"!==(void 0===e?"undefined":r(e))&&(e=[e]),a(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:i,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function n(n,o){"object"===r(t[o])&&"object"===(void 0===n?"undefined":r(n))?t[o]=e(t[o],n):t[o]=n}for(var o=0,i=arguments.length;o<i;o++)f(arguments[o],n);return t},extend:function(e,t,n){return f(t,function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(13),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(3):void 0!==t&&(e=n(3)),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(i)}),e.exports=a}).call(this,n(12))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(14),i=n(16),s=n(17),a=n(18),u=n(4),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(19);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",g=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var m=e.auth.username||"",y=e.auth.password||"";p.Authorization="Basic "+c(m+":"+y)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||g)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,r),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n(20),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";t.__esModule=!0,t.I18N=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),s={extension:".lang",location:"assets/lang/",langs:["en-US"],locale:"en-US",override:{}},a=t.I18N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.langs=Object.create(null),this.loaded=[],this.processConfig(t)}return e.prototype.processConfig=function(e){var t=this,n=Object.assign({},s,e),r=n.location,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["location"]),i=r.replace(/\/?$/,"/");this.config=Object.assign({},{location:i},o);var a=this.config,u=a.override,c=a.preloaded,f=void 0===c?{}:c,l=Object.entries(this.langs).concat(Object.entries(u||f));this.langs=l.reduce(function(e,n){var r=n[0],o=n[1];return e[r]=t.applyLanguage.call(t,r,o),e},{}),this.locale=this.config.locale||this.config.langs[0]},e.prototype.init=function(e){return this.processConfig.call(this,Object.assign({},this.config,e)),this.setCurrent(this.locale)},e.prototype.addLanguage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t="string"==typeof t?this.processFile.call(this,t):t,this.applyLanguage.call(this,e,t),this.config.langs.push("locale")},e.prototype.getValue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.locale;return this.langs[t]&&this.langs[t][e]||this.getFallbackValue(e)},e.prototype.getFallbackValue=function(e){var t=Object.values(this.langs).find(function(t){return t[e]});return t&&t[e]},e.prototype.makeSafe=function(e){var t={"{":"\\{","}":"\\}","|":"\\|"};return e=e.replace(/\{|\}|\|/g,function(e){return t[e]}),new RegExp(e,"g")},e.prototype.put=function(e,t){return this.current[e]=t},e.prototype.get=function(e,t){var n=this.getValue(e);if(n){var o=n.match(/\{[^}]+?\}/g),i=void 0;if(t&&o)if("object"===(void 0===t?"undefined":r(t)))for(var s=0;s<o.length;s++)i=o[s].substring(1,o[s].length-1),n=n.replace(this.makeSafe(o[s]),t[i]||"");else n=n.replace(/\{[^}]+?\}/g,t);return n}},e.prototype.fromFile=function(e){for(var t,n=e.split("\n"),r={},o=0;o<n.length;o++)(t=n[o].match(/^(.+?) *?= *?([^\n]+)/))&&(r[t[1]]=t[2].replace(/^\s+|\s+$/,""));return r},e.prototype.processFile=function(e){return this.fromFile(e.replace(/\n\n/g,"\n"))},e.prototype.loadLang=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this;return new Promise(function(r,o){if(-1!==n.loaded.indexOf(e)&&t)return n.applyLanguage.call(n,n.langs[e]),r(n.langs[e]);var s=[n.config.location,e,n.config.extension].join("");return(0,i.get)(s).then(function(t){var o=t.data,i=n.processFile(o);return n.applyLanguage.call(n,e,i),n.loaded.push(e),r(n.langs[e])}).catch(function(){var t=n.applyLanguage.call(n,e);r(t)})})},e.prototype.applyLanguage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.config.override[e]||{},r=this.langs[e]||{};return this.langs[e]=Object.assign({},r,t,n),this.langs[e]},e.prototype.setCurrent=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US";return this.loadLang(t).then(function(){return e.locale=t,e.current=e.langs[t],e.current})},o(e,[{key:"getLangs",get:function(){return this.config.langs}}]),e}();t.default=new a},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(11),s=n(1);function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=a(s);u.Axios=i,u.create=function(e){return a(r.merge(s,e))},u.Cancel=n(6),u.CancelToken=n(26),u.isCancel=n(5),u.all=function(e){return Promise.all(e)},u.spread=n(27),e.exports=u,e.exports.default=u},function(e,t,n){"use strict";
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(1),o=n(0),i=n(21),s=n(22);function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=a},function(e,t,n){"use strict";var r,o,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,f=[],l=!1,p=-1;function d(){l&&c&&(l=!1,c.length?f=c.concat(f):p=-1,f.length&&h())}function h(){if(!l){var e=u(d);l=!0;for(var t=f.length;t;){for(c=f,f=[];++p<t;)c&&c[p].run();p=-1,t=f.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new g(e,t)),1!==f.length||l||u(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,o=String(e),i="",s=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.charAt(0|s)||(a="=",s%1);i+=a.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(23),i=n(5),s=n(1),a=n(24),u=n(25);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(6);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaTE4bi5taW4uanMiLCJzb3VyY2VSb290IjoiIn0=

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony import */ var mi18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var mi18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mi18n__WEBPACK_IMPORTED_MODULE_0__);

mi18n__WEBPACK_IMPORTED_MODULE_0___default.a.addLanguage('en-US', {"NATIVE_NAME":"English (US)","ENGLISH_NAME":"English","addOption":"Add Option +","allFieldsRemoved":"All fields were removed.","allowMultipleFiles":"Allow users to upload multiple files","autocomplete":"Autocomplete","button":"Button","cannotBeEmpty":"This field cannot be empty","checkboxGroup":"Checkbox Group","checkbox":"Checkbox","checkboxes":"Checkboxes","className":"Class","clearAllMessage":"Are you sure you want to clear all fields?","clear":"Clear","close":"Close","content":"Content","copy":"Copy To Clipboard","copyButton":"&#43;","copyButtonTooltip":"Copy","dateField":"Date Field","description":"Help Text","descriptionField":"Description","devMode":"Developer Mode","editNames":"Edit Names","editorTitle":"Form Elements","editXML":"Edit XML","enableOther":"Enable &quot;Other&quot;","enableOtherMsg":"Let users to enter an unlisted option","fieldDeleteWarning":"false","fieldVars":"Field Variables","fieldNonEditable":"This field cannot be edited.","fieldRemoveWarning":"Are you sure you want to remove this field?","fileUpload":"File Upload","formUpdated":"Form Updated","getStarted":"Drag a field from the right to this area","header":"Header","hide":"Edit","hidden":"Hidden Input","inline":"Inline","inlineDesc":"Display {type} inline","label":"Label","labelEmpty":"Field Label cannot be empty","limitRole":"Limit access to one or more of the following roles:","mandatory":"Mandatory","maxlength":"Max Length","minOptionMessage":"This field requires a minimum of 2 options","minSelectionRequired":"Minimum {min} selections required","multipleFiles":"Multiple Files","name":"Name","no":"No","noFieldsToClear":"There are no fields to clear","number":"Number","off":"Off","on":"On","option":"Option","optionCount":"Option {count}","options":"Options","optional":"optional","optionLabelPlaceholder":"Label","optionValuePlaceholder":"Value","optionEmpty":"Option value required","other":"Other","paragraph":"Paragraph","placeholder":"Placeholder","placeholders.value":"Value","placeholders.label":"Label","placeholders.email":"Enter you email","placeholders.className":"space separated classes","placeholders.password":"Enter your password","preview":"Preview","radioGroup":"Radio Group","radio":"Radio","removeMessage":"Remove Element","removeOption":"Remove Option","remove":"&#215;","required":"Required","requireValidOption":"Only accept a pre-defined Option","richText":"Rich Text Editor","roles":"Access","rows":"Rows","save":"Save","selectOptions":"Options","select":"Select","selectColor":"Select Color","selectionsMessage":"Allow Multiple Selections","size":"Size","size.xs":"Extra Small","size.sm":"Small","size.m":"Default","size.lg":"Large","style":"Style","styles.btn.default":"Default","styles.btn.danger":"Danger","styles.btn.info":"Info","styles.btn.primary":"Primary","styles.btn.success":"Success","styles.btn.warning":"Warning","subtype":"Type","text":"Text Field","textArea":"Text Area","toggle":"Toggle","warning":"Warning!","value":"Value","viewJSON":"[{&hellip;}]","viewXML":"&lt;/&gt;","yes":"Yes"});
var defaultOptions = {
  actionButtons: [],
  allowStageSort: true,
  append: false,
  controlOrder: ['autocomplete', 'button', 'checkbox-group', 'checkbox', 'date', 'file', 'header', 'hidden', 'number', 'paragraph', 'radio-group', 'select', 'text', 'textarea'],
  controlPosition: 'right',
  dataType: 'json',
  defaultFields: [],
  disabledActionButtons: [],
  disabledAttrs: [],
  disabledFieldButtons: {},
  disabledSubtypes: {},
  disableFields: [],
  disableHTMLLabels: false,
  disableInjectedStyle: false,
  editOnAdd: false,
  fields: [],
  fieldRemoveWarn: false,
  fieldEditContainer: null,
  inputSets: [],
  notify: {
    error: console.error,
    success: console.log,
    warning: console.warn
  },
  onAddField: function onAddField(fieldData, fieldId) {
    return fieldData;
  },
  onClearAll: function onClearAll() {
    return null;
  },
  onCloseFieldEdit: function onCloseFieldEdit() {
    return null;
  },
  onOpenFieldEdit: function onOpenFieldEdit() {
    return null;
  },
  onSave: function onSave(evt, formData) {
    return null;
  },
  prepend: false,
  replaceFields: [],
  roles: {
    1: 'Administrator'
  },
  scrollToFieldOnAdd: true,
  showActionButtons: true,
  sortableControls: false,
  stickyControls: {
    enable: true,
    offset: {
      top: 5,
      bottom: 'auto',
      right: 'auto'
    }
  },
  subtypes: {},
  templates: {},
  typeUserAttrs: {},
  typeUserDisabledAttrs: {},
  typeUserEvents: {}
};
var styles = {
  btn: ['default', 'danger', 'info', 'primary', 'success', 'warning']
};
var defaultI18n = {
  location: 'https://formbuilder.online/assets/lang/'
};
var config = {};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return instanceDom; });
/* unused harmony export defaultSubtypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return optionFields; });
/* unused harmony export optionFieldsRegEx */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dom; });
var instanceDom = {};
var defaultSubtypes = {
  text: ['text', 'password', 'email', 'color', 'tel'],
  header: ['h1', 'h2', 'h3'],
  button: ['button', 'submit', 'reset'],
  paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
  textarea: ['textarea', 'quill']
};
var remove = function remove(element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var empty = function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  return element;
};
var filter = function filter(elems, term, show) {
  if (show === void 0) {
    show = true;
  }

  var filteredElems = [];
  var toggle = ['none', 'block'];

  if (show) {
    toggle = toggle.reverse();
  }

  for (var i = elems.length - 1; i >= 0; i--) {
    var txt = elems[i].textContent.toLowerCase();

    if (txt.indexOf(term.toLowerCase()) !== -1) {
      elems[i].style.display = toggle[0];
      filteredElems.push(elems[i]);
    } else {
      elems[i].style.display = toggle[1];
    }
  }

  return filteredElems;
};
var optionFields = ['select', 'checkbox-group', 'checkbox', 'radio-group', 'autocomplete'];
var optionFieldsRegEx = new RegExp("(" + optionFields.join('|') + ")");

var Dom = function () {
  function Dom(formID) {
    this.optionFields = optionFields;
    this.optionFieldsRegEx = optionFieldsRegEx;
    this.subtypes = defaultSubtypes;
    this.empty = empty;
    this.filter = filter;
    instanceDom[formID] = this;
    return instanceDom[formID];
  }

  var _proto = Dom.prototype;

  _proto.onRender = function onRender(node, cb) {
    var _this = this;

    if (!node.parentElement) {
      window.requestAnimationFrame(function () {
        return _this.onRender(node, cb);
      });
    } else {
      cb(node);
    }
  };

  return Dom;
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function createNewEvent(eventName) {
  var event;

  if (typeof Event === 'function') {
    event = new Event(eventName);
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  }

  return event;
}

var events = {
  loaded: createNewEvent('loaded'),
  viewData: createNewEvent('viewData'),
  userDeclined: createNewEvent('userDeclined'),
  modalClosed: createNewEvent('modalClosed'),
  modalOpened: createNewEvent('modalOpened'),
  formSaved: createNewEvent('formSaved'),
  fieldAdded: createNewEvent('fieldAdded'),
  fieldRemoved: createNewEvent('fieldRemoved'),
  fieldRendered: createNewEvent('fieldRendered'),
  fieldEditOpened: createNewEvent('fieldEditOpened'),
  fieldEditClosed: createNewEvent('fieldEditClosed')
};
/* harmony default export */ __webpack_exports__["a"] = (events);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return controlCustom; });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mi18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var mi18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mi18n__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var controlCustom = function (_control) {
  _inheritsLoose(controlCustom, _control);

  function controlCustom() {
    return _control.apply(this, arguments) || this;
  }

  controlCustom.register = function register(templates, fields) {
    if (templates === void 0) {
      templates = {};
    }

    if (fields === void 0) {
      fields = [];
    }

    controlCustom.customRegister = {};

    if (!controlCustom.def) {
      controlCustom.def = {
        icon: {},
        i18n: {}
      };
    }

    controlCustom.templates = templates;
    var locale = mi18n__WEBPACK_IMPORTED_MODULE_1___default.a.locale;

    if (!controlCustom.def.i18n[locale]) {
      controlCustom.def.i18n[locale] = {};
    }

    _control__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register(Object.keys(templates), controlCustom);

    for (var _iterator = fields, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var field = _ref;
      var type = field.type;
      field.attrs = field.attrs || {};

      if (!type) {
        if (!field.attrs.type) {
          this.error('Ignoring invalid custom field definition. Please specify a type property.');
          continue;
        }

        type = field.attrs.type;
      }

      var lookup = field.subtype || type;

      if (!templates[type]) {
        var controlClass = _control__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getClass(type, field.subtype);

        if (!controlClass) {
          this.error('Error while registering custom field: ' + type + (field.subtype ? ':' + field.subtype : '') + '. Unable to find any existing defined control or template for rendering.');
          continue;
        }

        lookup = field.datatype ? field.datatype : type + "-" + Math.floor(Math.random() * 9000 + 1000);
        controlCustom.customRegister[lookup] = jQuery.extend(field, {
          type: type,
          class: controlClass
        });
      }

      controlCustom.def.i18n[locale][lookup] = field.label;
      controlCustom.def.icon[lookup] = field.icon;
    }
  };

  controlCustom.getRegistered = function getRegistered(type) {
    if (type === void 0) {
      type = false;
    }

    if (type) {
      return _control__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getRegistered(type);
    }

    return Object.keys(controlCustom.customRegister);
  };

  controlCustom.lookup = function lookup(_lookup) {
    return controlCustom.customRegister[_lookup];
  };

  var _proto = controlCustom.prototype;

  _proto.build = function build() {
    var custom = controlCustom.templates[this.type];

    if (!custom) {
      return this.error('Invalid custom control type. Please ensure you have registered it correctly as a template option.');
    }

    var fieldData = Object.assign(this.config);
    var properties = ['label', 'description', 'subtype', 'id', 'isPreview', 'required', 'title', 'aria-required', 'type'];

    for (var _i2 = 0, _properties = properties; _i2 < _properties.length; _i2++) {
      var prop = _properties[_i2];
      fieldData[prop] = this.config[prop] || this[prop];
    }

    custom = custom.bind(this);
    custom = custom(fieldData);

    if (custom.js) {
      this.js = custom.js;
    }

    if (custom.css) {
      this.css = custom.css;
    }

    this.onRender = custom.onRender;
    return {
      field: custom.field,
      layout: custom.layout
    };
  };

  _createClass(controlCustom, null, [{
    key: "definition",
    get: function get() {
      return controlCustom.def;
    }
  }]);

  return controlCustom;
}(_control__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);


controlCustom.customRegister = {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return layout; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


var processClassName = function processClassName(data, field) {
  var className = data.id ? "fb-" + data.type + " form-group field-" + data.id : '';

  if (data.className) {
    var classes = data.className.split(' ');
    classes = classes.filter(function (className) {
      return /^col-(xs|sm|md|lg)-([^\s]+)/.test(className) || className.startsWith('row-');
    });

    if (classes && classes.length > 0) {
      className += " " + classes.join(' ');
    }

    for (var index = 0; index < classes.length; index++) {
      var element = classes[index];
      field.classList.remove(element);
    }
  }

  return className;
};

var layout = function () {
  function layout(templates, preview) {
    var _this = this;

    this.preview = preview;
    this.templates = {
      label: null,
      help: null,
      default: function _default(field, label, help, data) {
        if (help) {
          label.appendChild(help);
        }

        return _this.markup('div', [label, field], {
          className: processClassName(data, field)
        });
      },
      noLabel: function noLabel(field, label, help, data) {
        return _this.markup('div', field, {
          className: processClassName(data, field)
        });
      },
      hidden: function hidden(field, label, help, data) {
        return field;
      }
    };

    if (templates) {
      this.templates = jQuery.extend(this.templates, templates);
    }

    this.configure();
  }

  var _proto = layout.prototype;

  _proto.configure = function configure() {};

  _proto.build = function build(renderControl, data, forceTemplate) {
    if (this.preview) {
      if (data.name) {
        data.name = data.name + '-preview';
      } else {
        data.name = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "f"].nameAttr(data) + '-preview';
      }
    }

    data.id = data.name;
    this.data = jQuery.extend({}, data);
    var control = new renderControl(data, this.preview);
    var field = control.build();

    if (typeof field !== 'object' || !field.field) {
      field = {
        field: field
      };
    }

    var label = this.label();
    var help = this.help();
    var elementTemplate;

    if (forceTemplate && this.isTemplate(forceTemplate)) {
      elementTemplate = forceTemplate;
    } else {
      elementTemplate = this.isTemplate(field.layout) ? field.layout : 'default';
    }

    var element = this.processTemplate(elementTemplate, field.field, label, help);
    control.on('prerender')(element);
    element.addEventListener('fieldRendered', control.on('render'));
    return element;
  };

  _proto.label = function label() {
    var label = this.data.label || '';
    var labelText = _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "f"].parsedHtml(label);
    var labelContents = [labelText];

    if (this.data.required) {
      labelContents.push(this.markup('span', '*', {
        className: 'fb-required'
      }));
    }

    if (this.isTemplate('label')) {
      return this.processTemplate('label', labelContents);
    }

    return this.markup('label', labelContents, {
      for: this.data.id,
      className: "fb-" + this.data.type + "-label"
    });
  };

  _proto.help = function help() {
    if (!this.data.description) {
      return null;
    }

    if (this.isTemplate('help')) {
      return this.processTemplate('help', this.data.description);
    }

    return this.markup('span', '?', {
      className: 'tooltip-element',
      tooltip: this.data.description
    });
  };

  _proto.isTemplate = function isTemplate(template) {
    return typeof this.templates[template] === 'function';
  };

  _proto.processTemplate = function processTemplate(template) {
    var _this$templates;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var processed = (_this$templates = this.templates)[template].apply(_this$templates, args.concat([this.data]));

    if (processed.jquery) {
      processed = processed[0];
    }

    return processed;
  };

  _proto.markup = function markup(tag, content, attributes) {
    if (content === void 0) {
      content = '';
    }

    if (attributes === void 0) {
      attributes = {};
    }

    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "f"].markup(tag, content, attributes);
  };

  return layout;
}();



/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../src/js/control.js
var control = __webpack_require__(1);

// EXTERNAL MODULE: ../src/js/dom.js
var dom = __webpack_require__(4);

// CONCATENATED MODULE: ../src/js/control/autocomplete.js
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var autocomplete_controlAutocomplete = function (_control) {
  _inheritsLoose(controlAutocomplete, _control);

  function controlAutocomplete() {
    return _control.apply(this, arguments) || this;
  }

  var _proto = controlAutocomplete.prototype;

  _proto.build = function build() {
    var _this = this;

    var _this$config = this.config,
        values = _this$config.values,
        type = _this$config.type,
        data = _objectWithoutPropertiesLoose(_this$config, ["values", "type"]);

    var keyboardNav = function keyboardNav(e) {
      var list = e.target.nextSibling.nextSibling;
      var hiddenField = e.target.nextSibling;

      var activeOption = _this.getActiveOption(list);

      var keyCodeMapVals = [[38, function () {
        var previous = _this.getPreviousOption(activeOption);

        if (previous) {
          _this.selectOption(list, previous);
        }
      }], [40, function () {
        var next = _this.getNextOption(activeOption);

        if (next) {
          _this.selectOption(list, next);
        }
      }], [13, function () {
        if (activeOption) {
          e.target.value = activeOption.innerHTML;
          hiddenField.value = activeOption.getAttribute('value');

          if (list.style.display === 'none') {
            _this.showList(list, activeOption);
          } else {
            _this.hideList(list);
          }
        } else {
          if (_this.config.requireValidOption) {
            if (!_this.isOptionValid(list, e.target.value)) {
              e.target.value = '';
              e.target.nextSibling.value = '';
            }
          }
        }

        e.preventDefault();
      }], [27, function () {
        _this.hideList(list);
      }]];
      var keyCodeMap = new Map(keyCodeMapVals);
      var direction = keyCodeMap.get(e.keyCode);

      if (!direction) {
        direction = function direction() {
          return false;
        };
      }

      return direction();
    };

    var fauxEvents = {
      focus: function focus(evt) {
        var list = evt.target.nextSibling.nextSibling;
        var filteredOptions = Object(dom["c" /* filter */])(list.querySelectorAll('li'), evt.target.value);
        evt.target.addEventListener('keydown', keyboardNav);

        if (evt.target.value.length > 0) {
          var selectedOption = filteredOptions.length > 0 ? filteredOptions[filteredOptions.length - 1] : null;

          _this.showList(list, selectedOption);
        }
      },
      blur: function blur(evt) {
        evt.target.removeEventListener('keydown', keyboardNav);
        setTimeout(function () {
          evt.target.nextSibling.nextSibling.style.display = 'none';
        }, 200);

        if (_this.config.requireValidOption) {
          var list = evt.target.nextSibling.nextSibling;

          if (!_this.isOptionValid(list, evt.target.value)) {
            evt.target.value = '';
            evt.target.nextSibling.value = '';
          }
        }
      },
      input: function input(evt) {
        var list = evt.target.nextSibling.nextSibling;
        var hiddenField = evt.target.nextSibling;
        hiddenField.value = evt.target.value;
        var filteredOptions = Object(dom["c" /* filter */])(list.querySelectorAll('li'), evt.target.value);

        if (filteredOptions.length == 0) {
          _this.hideList(list);
        } else {
          var activeOption = _this.getActiveOption(list);

          if (!activeOption) {
            activeOption = filteredOptions[filteredOptions.length - 1];
          }

          _this.showList(list, activeOption);
        }
      }
    };
    var fauxAttrs = Object.assign({}, data, {
      id: data.id + "-input",
      autocomplete: 'off',
      events: fauxEvents
    });
    var hiddenAttrs = Object.assign({}, data, {
      type: 'hidden'
    });
    delete fauxAttrs.name;
    var field = [this.markup('input', null, fauxAttrs), this.markup('input', null, hiddenAttrs)];
    var options = values.map(function (optionData) {
      var label = optionData.label;
      var config = {
        events: {
          click: function click(evt) {
            var list = evt.target.parentElement;
            var field = list.previousSibling.previousSibling;
            field.value = optionData.label;
            field.nextSibling.value = optionData.value;

            _this.hideList(list);
          }
        },
        value: optionData.value
      };
      return _this.markup('li', label, config);
    });
    field.push(this.markup('ul', options, {
      id: data.id + "-list",
      className: "fb-" + type + "-list"
    }));
    return field;
  };

  _proto.hideList = function hideList(list) {
    this.selectOption(list, null);
    list.style.display = 'none';
  };

  _proto.showList = function showList(list, selectedOption) {
    this.selectOption(list, selectedOption);
    list.style.display = 'block';
    list.style.width = list.parentElement.offsetWidth + 'px';
  };

  _proto.getActiveOption = function getActiveOption(list) {
    var activeOption = list.getElementsByClassName('active-option')[0];

    if (activeOption && activeOption.style.display !== 'none') {
      return activeOption;
    }

    return null;
  };

  _proto.getPreviousOption = function getPreviousOption(current) {
    var previous = current;

    do {
      previous = previous ? previous.previousSibling : null;
    } while (previous != null && previous.style.display === 'none');

    return previous;
  };

  _proto.getNextOption = function getNextOption(current) {
    var next = current;

    do {
      next = next ? next.nextSibling : null;
    } while (next != null && next.style.display === 'none');

    return next;
  };

  _proto.selectOption = function selectOption(list, selectedOption) {
    var options = list.querySelectorAll('li');

    for (var _i = 0; _i < options.length; _i++) {
      options[_i].classList.remove('active-option');
    }

    if (selectedOption) {
      selectedOption.classList.add('active-option');
    }
  };

  _proto.isOptionValid = function isOptionValid(list, value) {
    var options = list.querySelectorAll('li');
    var validValue = false;

    for (var _i2 = 0; _i2 < options.length; _i2++) {
      if (options[_i2].innerHTML === value) {
        validValue = true;
        break;
      }
    }

    return validValue;
  };

  _proto.onRender = function onRender(evt) {
    if (this.config.userData) {
      var $el = $('#' + this.config.name);
      var $options = $el.next();
      var preSelectedOption = this.config.userData[0];
      var selectedOption = null;
      $options.find('li').each(function () {
        if ($(this).attr('value') === preSelectedOption) {
          selectedOption = $(this).get(0);
          return;
        }
      });

      if (selectedOption === null) {
        if (this.config.requireValidOption) {
          return;
        } else {
          $el.prev().val(this.config.userData[0]);
          return;
        }
      }

      $el.prev().val(selectedOption.innerHTML);
      $el.val(selectedOption.getAttribute('value'));
      var list = $el.next().get(0);

      if (list.style.display === 'none') {
        this.showList(list, selectedOption);
      } else {
        this.hideList(list);
      }
    }
  };

  _createClass(controlAutocomplete, null, [{
    key: "definition",
    get: function get() {
      return {
        mi18n: {
          requireValidOption: 'requireValidOption'
        }
      };
    }
  }]);

  return controlAutocomplete;
}(control["a" /* default */]);


control["a" /* default */].register('autocomplete', autocomplete_controlAutocomplete);
// CONCATENATED MODULE: ../src/js/control/button.js
function button_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var controlButton = function (_control) {
  button_inheritsLoose(controlButton, _control);

  function controlButton() {
    return _control.apply(this, arguments) || this;
  }

  var _proto = controlButton.prototype;

  _proto.build = function build() {
    return {
      field: this.markup('button', this.label, this.config),
      layout: 'noLabel'
    };
  };

  return controlButton;
}(control["a" /* default */]);


control["a" /* default */].register('button', controlButton);
control["a" /* default */].register(['button', 'submit', 'reset'], controlButton, 'button');
// EXTERNAL MODULE: ../src/js/control/custom.js
var custom = __webpack_require__(6);

// CONCATENATED MODULE: ../src/js/control/hidden.js
function hidden_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var controlHidden = function (_control) {
  hidden_inheritsLoose(controlHidden, _control);

  function controlHidden() {
    return _control.apply(this, arguments) || this;
  }

  var _proto = controlHidden.prototype;

  _proto.build = function build() {
    return {
      field: this.markup('input', null, this.config),
      layout: 'hidden'
    };
  };

  _proto.onRender = function onRender() {
    if (this.config.userData) {
      $('#' + this.config.name).val(this.config.userData[0]);
    }
  };

  return controlHidden;
}(control["a" /* default */]);


control["a" /* default */].register('hidden', controlHidden);
// EXTERNAL MODULE: ../src/js/utils.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ../src/js/control/paragraph.js
function paragraph_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function paragraph_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var paragraph_controlParagraph = function (_control) {
  paragraph_inheritsLoose(controlParagraph, _control);

  function controlParagraph() {
    return _control.apply(this, arguments) || this;
  }

  var _proto = controlParagraph.prototype;

  _proto.build = function build() {
    var _this$config = this.config,
        type = _this$config.type,
        attrs = paragraph_objectWithoutPropertiesLoose(_this$config, ["type"]);

    var tag = type;
    var typeMap = {
      paragraph: 'p',
      header: this.subtype
    };

    if (typeMap[type]) {
      tag = typeMap[type];
    }

    return {
      field: this.markup(tag, utils["f" /* default */].parsedHtml(this.label), attrs),
      layout: 'noLabel'
    };
  };

  return controlParagraph;
}(control["a" /* default */]);


control["a" /* default */].register(['paragraph', 'header'], paragraph_controlParagraph);
control["a" /* default */].register(['p', 'address', 'blockquote', 'canvas', 'output'], paragraph_controlParagraph, 'paragraph');
control["a" /* default */].register(['h1', 'h2', 'h3', 'h4'], paragraph_controlParagraph, 'header');
// CONCATENATED MODULE: ../src/js/control/select.js
function select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function select_createClass(Constructor, protoProps, staticProps) { if (protoProps) select_defineProperties(Constructor.prototype, protoProps); if (staticProps) select_defineProperties(Constructor, staticProps); return Constructor; }

function select_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var select_controlSelect = function (_control) {
  select_inheritsLoose(controlSelect, _control);

  function controlSelect() {
    return _control.apply(this, arguments) || this;
  }

  var _proto = controlSelect.prototype;

  _proto.build = function build() {
    var options = [];

    var _this$config = this.config,
        values = _this$config.values,
        value = _this$config.value,
        placeholder = _this$config.placeholder,
        type = _this$config.type,
        inline = _this$config.inline,
        other = _this$config.other,
        toggle = _this$config.toggle,
        data = select_objectWithoutPropertiesLoose(_this$config, ["values", "value", "placeholder", "type", "inline", "other", "toggle"]);

    var optionType = type.replace('-group', '');
    var isSelect = type === 'select';

    if (data.multiple || type === 'checkbox-group') {
      data.name = data.name + '[]';
    }

    if (type === 'checkbox-group' && data.required) {
      this.onRender = this.groupRequired;
    }

    delete data.title;

    if (values) {
      if (placeholder && isSelect) {
        options.push(this.markup('option', placeholder, {
          disabled: null,
          selected: null
        }));
      }

      for (var _i = 0; _i < values.length; _i++) {
        var option = values[_i];

        if (typeof option === 'string') {
          option = {
            label: option,
            value: option
          };
        }

        var _option = option,
            _option$label = _option.label,
            label = _option$label === void 0 ? '' : _option$label,
            optionAttrs = select_objectWithoutPropertiesLoose(_option, ["label"]);

        optionAttrs.id = data.id + "-" + _i;

        if (!optionAttrs.selected || placeholder) {
          delete optionAttrs.selected;
        }

        if (typeof value !== 'undefined' && optionAttrs.value === value) {
          optionAttrs.selected = true;
        }

        if (isSelect) {
          var o = this.markup('option', document.createTextNode(label), optionAttrs);
          options.push(o);
        } else {
          var labelContents = [label];
          var wrapperClass = "fb-" + optionType;

          if (inline) {
            wrapperClass += '-inline';
          }

          optionAttrs.type = optionType;

          if (optionAttrs.selected) {
            optionAttrs.checked = 'checked';
            delete optionAttrs.selected;
          }

          var input = this.markup('input', null, Object.assign({}, data, optionAttrs));
          var labelAttrs = {
            for: optionAttrs.id
          };
          var output = [input, this.markup('label', labelContents, labelAttrs)];

          if (toggle) {
            labelAttrs.className = 'kc-toggle';
            labelContents.unshift(input, this.markup('span'));
            output = this.markup('label', labelContents, labelAttrs);
          }

          var wrapper = this.markup('div', output, {
            className: wrapperClass
          });
          options.push(wrapper);
        }
      }

      if (!isSelect && other) {
        var otherOptionAttrs = {
          id: data.id + "-other",
          className: data.className + " other-option",
          value: ''
        };

        var _wrapperClass = "fb-" + optionType;

        if (inline) {
          _wrapperClass += '-inline';
        }

        var _optionAttrs = Object.assign({}, data, otherOptionAttrs);

        _optionAttrs.type = optionType;
        var otherValAttrs = {
          type: 'text',
          events: {
            input: function input(evt) {
              var otherInput = evt.target;
              var other = otherInput.parentElement.previousElementSibling;
              other.value = otherInput.value;
            }
          },
          id: otherOptionAttrs.id + "-value",
          className: 'other-val'
        };
        var primaryInput = this.markup('input', null, _optionAttrs);
        var otherInputs = [document.createTextNode('Other'), this.markup('input', null, otherValAttrs)];
        var inputLabel = this.markup('label', otherInputs, {
          for: _optionAttrs.id
        });

        var _wrapper = this.markup('div', [primaryInput, inputLabel], {
          className: _wrapperClass
        });

        options.push(_wrapper);
      }
    }

    if (type == 'select') {
      this.dom = this.markup(optionType, options, data);
    } else {
      this.dom = this.markup('div', options, {
        className: type
      });
    }

    return this.dom;
  };

  _proto.groupRequired = function groupRequired() {
    var checkboxes = this.element.getElementsByTagName('input');

    var setValidity = function setValidity(checkbox, isValid) {
      var minReq = control["a" /* default */].mi18n('minSelectionRequired', 1);

      if (!isValid) {
        checkbox.setCustomValidity(minReq);
      } else {
        checkbox.setCustomValidity('');
      }
    };

    var toggleRequired = function toggleRequired(checkboxes, isValid) {
      ;
      [].forEach.call(checkboxes, function (cb) {
        if (isValid) {
          cb.removeAttribute('required');
        } else {
          cb.setAttribute('required', 'required');
        }

        setValidity(cb, isValid);
      });
    };

    var toggleValid = function toggleValid() {
      var isValid = [].some.call(checkboxes, function (cb) {
        return cb.checked;
      });
      toggleRequired(checkboxes, isValid);
    };

    for (var _i2 = checkboxes.length - 1; _i2 >= 0; _i2--) {
      checkboxes[_i2].addEventListener('change', toggleValid);
    }

    toggleValid();
  };

  _proto.onRender = function onRender() {
    if (this.config.userData) {
      var selectedOptions = this.config.userData.slice();

      if (this.config.type === 'select') {
        $(this.dom).val(selectedOptions).prop('selected', true);
      } else if (this.config.type.endsWith('-group')) {
        this.dom.querySelectorAll('input').forEach(function (input) {
          if (input.classList.contains('other-val')) {
            return;
          }

          for (var _i3 = 0; _i3 < selectedOptions.length; _i3++) {
            if (input.value === selectedOptions[_i3]) {
              input.setAttribute('checked', true);
              selectedOptions.splice(_i3, 1);
              break;
            }
          }

          if (input.id.endsWith('-other')) {
            var otherVal = document.getElementById(input.id + "-value");

            if (selectedOptions.length === 0) {
              return;
            }

            input.setAttribute('checked', true);
            otherVal.value = input.value = selectedOptions[0];
            otherVal.style.display = 'inline-block';
          }
        });
      }
    }
  };

  select_createClass(controlSelect, null, [{
    key: "definition",
    get: function get() {
      return {
        inactive: ['checkbox'],
        mi18n: {
          minSelectionRequired: 'minSelectionRequired'
        }
      };
    }
  }]);

  return controlSelect;
}(control["a" /* default */]);


control["a" /* default */].register(['select', 'checkbox-group', 'radio-group', 'checkbox'], select_controlSelect);
// CONCATENATED MODULE: ../src/js/control/text.js
function text_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function text_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_defineProperties(Constructor, staticProps); return Constructor; }

function text_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var controlText = function (_control) {
  text_inheritsLoose(controlText, _control);

  function controlText() {
    return _control.apply(this, arguments) || this;
  }

  var _proto = controlText.prototype;

  _proto.build = function build() {
    var name = this.config.name;
    name = this.config.multiple ? name + "[]" : name;
    var inputConfig = Object.assign({}, this.config, {
      name: name
    });
    this.dom = this.markup('input', null, inputConfig);
    return this.dom;
  };

  _proto.onRender = function onRender() {
    if (this.config.userData) {
      $(this.dom).val(this.config.userData[0]);
    }
  };

  text_createClass(controlText, null, [{
    key: "definition",
    get: function get() {
      return {
        mi18n: {
          date: 'dateField',
          file: 'fileUpload'
        }
      };
    }
  }]);

  return controlText;
}(control["a" /* default */]);


control["a" /* default */].register(['text', 'file', 'date', 'number'], controlText);
control["a" /* default */].register(['text', 'password', 'email', 'color', 'tel'], controlText, 'text');
// CONCATENATED MODULE: ../src/js/control/file.fineuploader.js
function file_fineuploader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function file_fineuploader_createClass(Constructor, protoProps, staticProps) { if (protoProps) file_fineuploader_defineProperties(Constructor.prototype, protoProps); if (staticProps) file_fineuploader_defineProperties(Constructor, staticProps); return Constructor; }

function file_fineuploader_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var controlFineUploader = function (_controlText) {
  file_fineuploader_inheritsLoose(controlFineUploader, _controlText);

  function controlFineUploader() {
    return _controlText.apply(this, arguments) || this;
  }

  var _proto = controlFineUploader.prototype;

  _proto.configure = function configure() {
    var _this = this;

    this.js = this.classConfig.js || '//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/jquery.fine-uploader.min.js';
    this.css = [this.classConfig.css || '//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/fine-uploader-gallery.min.css', {
      type: 'inline',
      id: 'fineuploader-inline',
      style: "\n          .qq-uploader .qq-error-message {\n            position: absolute;\n            left: 20%;\n            top: 20px;\n            width: 60%;\n            color: #a94442;\n            background: #f2dede;\n            border: solid 1px #ebccd1;\n            padding: 15px;\n            line-height: 1.5em;\n            text-align: center;\n            z-index: 99999;\n          }\n          .qq-uploader .qq-error-message span {\n            display: inline-block;\n            text-align: left;\n          }"
    }];
    this.handler = this.classConfig.handler || '/upload';
    ['js', 'css', 'handler'].forEach(function (key) {
      return delete _this.classConfig[key];
    });
    var template = this.classConfig.template || "\n      <div class=\"qq-uploader-selector qq-uploader qq-gallery\" qq-drop-area-text=\"Drop files here\">\n        <div class=\"qq-total-progress-bar-container-selector qq-total-progress-bar-container\">\n          <div role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar\"></div>\n        </div>\n        <div class=\"qq-upload-drop-area-selector qq-upload-drop-area\" qq-hide-dropzone>\n          <span class=\"qq-upload-drop-area-text-selector\"></span>\n        </div>\n        <div class=\"qq-upload-button-selector qq-upload-button\">\n          <div>Upload a file</div>\n        </div>\n        <span class=\"qq-drop-processing-selector qq-drop-processing\">\n          <span>Processing dropped files...</span>\n          <span class=\"qq-drop-processing-spinner-selector qq-drop-processing-spinner\"></span>\n        </span>\n        <ul class=\"qq-upload-list-selector qq-upload-list\" role=\"region\" aria-live=\"polite\" aria-relevant=\"additions removals\">\n          <li>\n            <span role=\"status\" class=\"qq-upload-status-text-selector qq-upload-status-text\"></span>\n            <div class=\"qq-progress-bar-container-selector qq-progress-bar-container\">\n              <div role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"qq-progress-bar-selector qq-progress-bar\"></div>\n            </div>\n            <span class=\"qq-upload-spinner-selector qq-upload-spinner\"></span>\n            <div class=\"qq-thumbnail-wrapper\">\n              <img class=\"qq-thumbnail-selector\" qq-max-size=\"120\" qq-server-scale>\n            </div>\n            <button type=\"button\" class=\"qq-upload-cancel-selector qq-upload-cancel\">X</button>\n            <button type=\"button\" class=\"qq-upload-retry-selector qq-upload-retry\">\n              <span class=\"qq-btn qq-retry-icon\" aria-label=\"Retry\"></span>\n              Retry\n            </button>\n            <div class=\"qq-file-info\">\n              <div class=\"qq-file-name\">\n                <span class=\"qq-upload-file-selector qq-upload-file\"></span>\n                <span class=\"qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon\" aria-label=\"Edit filename\"></span>\n              </div>\n              <input class=\"qq-edit-filename-selector qq-edit-filename\" tabindex=\"0\" type=\"text\">\n              <span class=\"qq-upload-size-selector qq-upload-size\"></span>\n              <button type=\"button\" class=\"qq-btn qq-upload-delete-selector qq-upload-delete\">\n                <span class=\"qq-btn qq-delete-icon\" aria-label=\"Delete\"></span>\n              </button>\n              <button type=\"button\" class=\"qq-btn qq-upload-pause-selector qq-upload-pause\">\n                <span class=\"qq-btn qq-pause-icon\" aria-label=\"Pause\"></span>\n              </button>\n              <button type=\"button\" class=\"qq-btn qq-upload-continue-selector qq-upload-continue\">\n                <span class=\"qq-btn qq-continue-icon\" aria-label=\"Continue\"></span>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <dialog class=\"qq-alert-dialog-selector\">\n          <div class=\"qq-dialog-message-selector\"></div>\n          <div class=\"qq-dialog-buttons\">\n            <button type=\"button\" class=\"qq-cancel-button-selector\">Close</button>\n          </div>\n        </dialog>\n        <dialog class=\"qq-confirm-dialog-selector\">\n          <div class=\"qq-dialog-message-selector\"></div>\n          <div class=\"qq-dialog-buttons\">\n            <button type=\"button\" class=\"qq-cancel-button-selector\">No</button>\n            <button type=\"button\" class=\"qq-ok-button-selector\">Yes</button>\n          </div>\n        </dialog>\n        <dialog class=\"qq-prompt-dialog-selector\">\n          <div class=\"qq-dialog-message-selector\"></div>\n          <input type=\"text\">\n          <div class=\"qq-dialog-buttons\">\n            <button type=\"button\" class=\"qq-cancel-button-selector\">Cancel</button>\n            <button type=\"button\" class=\"qq-ok-button-selector\">Ok</button>\n          </div>\n        </dialog>\n      </div>";
    this.fineTemplate = $('<div/>').attr('id', 'qq-template').html(template);
  };

  _proto.build = function build() {
    this.input = this.markup('input', null, {
      type: 'hidden',
      name: this.config.name,
      id: this.config.name
    });
    this.wrapper = this.markup('div', '', {
      id: this.config.name + '-wrapper'
    });
    return [this.input, this.wrapper];
  };

  _proto.onRender = function onRender() {
    var wrapper = $(this.wrapper);
    var input = $(this.input);
    var config = jQuery.extend(true, {
      request: {
        endpoint: this.handler
      },
      deleteFile: {
        enabled: true,
        endpoint: this.handler
      },
      chunking: {
        enabled: true,
        concurrent: {
          enabled: true
        },
        success: {
          endpoint: this.handler + (this.handler.indexOf('?') == -1 ? '?' : '&') + 'done'
        }
      },
      resume: {
        enabled: true
      },
      retry: {
        enableAuto: true,
        showButton: true
      },
      callbacks: {
        onError: function onError(id, name, errorReason, xhrOrXdr) {
          if (errorReason.slice(-1) != '.') {
            errorReason += '.';
          }

          var error = $('<div />').addClass('qq-error-message').html("<span>Error processing upload: <b>" + name + "</b>.<br />Reason: " + errorReason + "</span>").prependTo(wrapper.find('.qq-uploader'));
          setTimeout(function () {
            error.fadeOut(function () {
              error.remove();
            });
          }, 6000);
        },
        onStatusChange: function onStatusChange(id, oldStatus, newStatus) {
          var uploads = wrapper.fineUploader('getUploads');
          var successful = [];

          for (var _iterator = uploads, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var upload = _ref;

            if (upload.status != 'upload successful') {
              continue;
            }

            successful.push(upload.name);
          }

          input.val(successful.join(', '));
        }
      },
      template: this.fineTemplate
    }, this.classConfig);
    wrapper.fineUploader(config);
  };

  file_fineuploader_createClass(controlFineUploader, null, [{
    key: "definition",
    get: function get() {
      return {
        i18n: {
          default: 'Fine Uploader'
        }
      };
    }
  }]);

  return controlFineUploader;
}(controlText);


controlText.register('file', controlText, 'file');
controlText.register('fineuploader', controlFineUploader, 'file');
// CONCATENATED MODULE: ../src/js/control/textarea.js
function textarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function textarea_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function textarea_createClass(Constructor, protoProps, staticProps) { if (protoProps) textarea_defineProperties(Constructor.prototype, protoProps); if (staticProps) textarea_defineProperties(Constructor, staticProps); return Constructor; }

function textarea_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var controlTextarea = function (_control) {
  textarea_inheritsLoose(controlTextarea, _control);

  function controlTextarea() {
    return _control.apply(this, arguments) || this;
  }

  var _proto = controlTextarea.prototype;

  _proto.build = function build() {
    var _this$config = this.config,
        _this$config$value = _this$config.value,
        value = _this$config$value === void 0 ? '' : _this$config$value,
        attrs = textarea_objectWithoutPropertiesLoose(_this$config, ["value"]);

    this.field = this.markup('textarea', this.parsedHtml(value), attrs);
    return this.field;
  };

  _proto.onRender = function onRender() {
    if (this.config.userData) {
      $('#' + this.config.name).val(this.config.userData[0]);
    }
  };

  _proto.on = function on(eventType) {
    var _this = this;

    if (eventType == 'prerender' && this.preview) {
      return function (element) {
        if (_this.field) {
          element = _this.field;
        }

        $(element).on('mousedown', function (e) {
          e.stopPropagation();
        });
      };
    }

    return _control.prototype.on.call(this, eventType);
  };

  textarea_createClass(controlTextarea, null, [{
    key: "definition",
    get: function get() {
      return {
        mi18n: {
          textarea: 'textArea'
        }
      };
    }
  }]);

  return controlTextarea;
}(control["a" /* default */]);


control["a" /* default */].register('textarea', controlTextarea);
control["a" /* default */].register('textarea', controlTextarea, 'textarea');
// CONCATENATED MODULE: ../src/js/control/textarea.tinymce.js
function textarea_tinymce_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function textarea_tinymce_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var controlTinymce = function (_controlTextarea) {
  textarea_tinymce_inheritsLoose(controlTinymce, _controlTextarea);

  function controlTinymce() {
    return _controlTextarea.apply(this, arguments) || this;
  }

  var _proto = controlTinymce.prototype;

  _proto.configure = function configure() {
    this.js = ['https://cdn.tinymce.com/4/tinymce.min.js'];

    if (this.classConfig.js) {
      var js = this.classConfig.js;

      if (!Array.isArray(js)) {
        js = new Array(js);
      }

      this.js.concat(js);
      delete this.classConfig.js;
    }

    if (this.classConfig.css) {
      this.css = this.classConfig.css;
    }

    this.editorOptions = {
      height: 250,
      paste_data_images: true,
      plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table contextmenu paste code'],
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table'
    };
  };

  _proto.build = function build() {
    var _this$config = this.config,
        _this$config$value = _this$config.value,
        value = _this$config$value === void 0 ? '' : _this$config$value,
        attrs = textarea_tinymce_objectWithoutPropertiesLoose(_this$config, ["value"]);

    this.field = this.markup('textarea', this.parsedHtml(value), attrs);

    if (attrs.disabled) {
      this.editorOptions.readonly = true;
    }

    return this.field;
  };

  _proto.onRender = function onRender(evt) {
    if (window.tinymce.editors[this.id]) {
      window.tinymce.editors[this.id].remove();
    }

    var options = jQuery.extend(this.editorOptions, this.classConfig);
    options.target = this.field;
    window.tinymce.init(options);

    if (this.config.userData) {
      window.tinymce.editors[this.id].setContent(this.parsedHtml(this.config.userData[0]));
    }
  };

  return controlTinymce;
}(controlTextarea);


controlTextarea.register('tinymce', controlTinymce, 'textarea');
// CONCATENATED MODULE: ../src/js/control/textarea.quill.js
function textarea_quill_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function textarea_quill_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var textarea_quill_controlQuill = function (_controlTextarea) {
  textarea_quill_inheritsLoose(controlQuill, _controlTextarea);

  function controlQuill() {
    return _controlTextarea.apply(this, arguments) || this;
  }

  var _proto = controlQuill.prototype;

  _proto.configure = function configure() {
    var defaultClassConfig = {
      js: '//cdn.quilljs.com/1.2.4/quill.js',
      css: '//cdn.quilljs.com/1.2.4/quill.snow.css'
    };
    var defaultEditorConfig = {
      modules: {
        toolbar: [[{
          'header': [1, 2, false]
        }], ['bold', 'italic', 'underline'], ['code-block']]
      },
      placeholder: this.config.placeholder || '',
      theme: 'snow'
    };

    var _utils$splitObject = utils["f" /* default */].splitObject(this.classConfig, ['css', 'js']),
        customClassConfig = _utils$splitObject[0],
        customEditorConfig = _utils$splitObject[1];

    Object.assign(this, _objectSpread({}, defaultClassConfig, customClassConfig));
    this.editorConfig = _objectSpread({}, defaultEditorConfig, customEditorConfig);
  };

  _proto.build = function build() {
    var _this$config = this.config,
        _this$config$value = _this$config.value,
        value = _this$config$value === void 0 ? '' : _this$config$value,
        attrs = textarea_quill_objectWithoutPropertiesLoose(_this$config, ["value"]);

    this.field = this.markup('div', null, attrs);
    return this.field;
  };

  _proto.onRender = function onRender(evt) {
    var value = this.config.value || '';
    var Delta = window.Quill.import('delta');
    window.fbEditors.quill[this.id] = {};
    var editor = window.fbEditors.quill[this.id];
    editor.instance = new window.Quill(this.field, this.editorConfig);
    editor.data = new Delta();

    if (value) {
      editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)));
    }

    editor.instance.on('text-change', function (delta) {
      editor.data = editor.data.compose(delta);
    });
  };

  return controlQuill;
}(controlTextarea);


controlTextarea.register('quill', textarea_quill_controlQuill, 'textarea');
// CONCATENATED MODULE: ../src/js/control/index.js











/* harmony default export */ var js_control = ({
  controlAutocomplete: autocomplete_controlAutocomplete,
  controlButton: controlButton,
  controlCustom: custom["a" /* default */],
  controlHidden: controlHidden,
  controlParagraph: paragraph_controlParagraph,
  controlSelect: select_controlSelect,
  controlText: controlText,
  controlFineUploader: controlFineUploader,
  controlTextarea: controlTextarea,
  controlTinymce: controlTinymce,
  controlQuill: textarea_quill_controlQuill
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(20);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(13);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(18),
    isObject = __webpack_require__(11);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(17);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"attrs":{"class":"formBuilder-injected-style"},"sourceMap":false,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, "@font-face{font-family:'fb-icons';src:url(\"data:application/octet-stream;base64,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\") format(\"woff\")}[class^=\"icon-\"]:before,[class*=\" icon-\"]:before{font-family:\"fb-icons\";font-style:normal;font-weight:normal;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em}.icon-autocomplete:before{content:'\\e800'}.icon-date:before{content:'\\e801'}.icon-checkbox:before{content:'\\e802'}.icon-checkbox-group:before{content:'\\e803'}.icon-radio-group:before{content:'\\e804'}.icon-rich-text:before{content:'\\e805'}.icon-select:before{content:'\\e806'}.icon-textarea:before{content:'\\e807'}.icon-text:before{content:'\\e808'}.icon-pencil:before{content:'\\e809'}.icon-static-text:before{content:'\\e80a'}.icon-hidden:before{content:'\\e80b'}.icon-cancel:before{content:'\\e80c'}.icon-button:before{content:'\\e80d'}.icon-download:before{content:'\\e80e'}.icon-header:before{content:'\\e80f'}.icon-paragraph:before{content:'\\e810'}.icon-number:before{content:'\\e811'}.icon-file:before{content:'\\e812'}.icon-key:before{content:'\\e813'}.icon-select-api:before{content:'\\e814'}.icon-table:before{content:'\\f0ce'}.icon-info:before{content:'\\f129'}.icon-copy:before{content:'\\f24d'}.form-wrap.form-builder{position:relative}.form-wrap.form-builder *{box-sizing:border-box}.form-wrap.form-builder button,.form-wrap.form-builder input,.form-wrap.form-builder select,.form-wrap.form-builder textarea{font-family:inherit;font-size:inherit;line-height:inherit}.form-wrap.form-builder input{line-height:normal}.form-wrap.form-builder textarea{overflow:auto}.form-wrap.form-builder button,.form-wrap.form-builder input,.form-wrap.form-builder select,.form-wrap.form-builder textarea{font-family:inherit;font-size:inherit;line-height:inherit}.form-wrap.form-builder .btn-group{position:relative;display:inline-block;vertical-align:middle}.form-wrap.form-builder .btn-group>.btn{position:relative;float:left}.form-wrap.form-builder .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.form-wrap.form-builder .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.form-wrap.form-builder .btn-group .btn+.btn,.form-wrap.form-builder .btn-group .btn+.btn-group,.form-wrap.form-builder .btn-group .btn-group+.btn,.form-wrap.form-builder .btn-group .btn-group+.btn-group{margin-left:-1px}.form-wrap.form-builder .btn-group>.btn:last-child:not(:first-child),.form-wrap.form-builder .btn-group>.dropdown-toggle:not(:first-child),.form-wrap.form-builder .btn-group .input-group .form-control:last-child,.form-wrap.form-builder .btn-group .input-group-addon:last-child,.form-wrap.form-builder .btn-group .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.form-wrap.form-builder .btn-group .input-group-btn:first-child>.btn:not(:first-child),.form-wrap.form-builder .btn-group .input-group-btn:last-child>.btn,.form-wrap.form-builder .btn-group .input-group-btn:last-child>.btn-group>.btn,.form-wrap.form-builder .btn-group .input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.form-wrap.form-builder .btn-group>.btn.active,.form-wrap.form-builder .btn-group>.btn:active,.form-wrap.form-builder .btn-group>.btn:focus,.form-wrap.form-builder .btn-group>.btn:hover{z-index:2}.form-wrap.form-builder .btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border-radius:4px}.form-wrap.form-builder .btn.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-wrap.form-builder .btn.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-wrap.form-builder .btn.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.form-wrap.form-builder .btn.active,.form-wrap.form-builder .btn.btn-active,.form-wrap.form-builder .btn:active{background-image:none}.form-wrap.form-builder .input-group .form-control:last-child,.form-wrap.form-builder .input-group-addon:last-child,.form-wrap.form-builder .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.form-wrap.form-builder .input-group-btn:first-child>.btn:not(:first-child),.form-wrap.form-builder .input-group-btn:last-child>.btn,.form-wrap.form-builder .input-group-btn:last-child>.btn-group>.btn,.form-wrap.form-builder .input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.form-wrap.form-builder .input-group .form-control,.form-wrap.form-builder .input-group-addon,.form-wrap.form-builder .input-group-btn{display:table-cell}.form-wrap.form-builder .input-group-lg>.form-control,.form-wrap.form-builder .input-group-lg>.input-group-addon,.form-wrap.form-builder .input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333}.form-wrap.form-builder .input-group{position:relative;display:table;border-collapse:separate}.form-wrap.form-builder .input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.form-wrap.form-builder .form-control,.form-wrap.form-builder output{font-size:14px;line-height:1.42857143;display:block}.form-wrap.form-builder textarea.form-control{height:auto}.form-wrap.form-builder .form-control{height:34px;display:block;width:100%;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px}.form-wrap.form-builder .form-control:focus{outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)}.form-wrap.form-builder .form-group{margin-left:0px;margin-bottom:15px}.form-wrap.form-builder .btn,.form-wrap.form-builder .form-control{background-image:none}.form-wrap.form-builder .pull-right{float:right}.form-wrap.form-builder .pull-left{float:left}.form-wrap.form-builder .fb-required,.form-wrap.form-builder .required-asterisk{color:#c10000}.form-wrap.form-builder .fb-checkbox-group input[type='checkbox'],.form-wrap.form-builder .fb-checkbox-group input[type='radio'],.form-wrap.form-builder .fb-radio-group input[type='checkbox'],.form-wrap.form-builder .fb-radio-group input[type='radio']{margin:0 4px 0 0}.form-wrap.form-builder .fb-checkbox-inline,.form-wrap.form-builder .fb-radio-inline{margin-right:8px;display:inline-block;vertical-align:middle;padding-left:0}.form-wrap.form-builder .fb-checkbox-inline label input[type='text'],.form-wrap.form-builder .fb-radio-inline label input[type='text']{margin-top:0}.form-wrap.form-builder .fb-checkbox-inline:first-child,.form-wrap.form-builder .fb-radio-inline:first-child{padding-left:0}.form-wrap.form-builder .fb-autocomplete-list{background-color:#fff;display:none;list-style:none;padding:0;border:1px solid #ccc;border-width:0 1px 1px;position:absolute;z-index:20;max-height:200px;overflow-y:auto}.form-wrap.form-builder .fb-autocomplete-list li{display:none;cursor:default;padding:5px;margin:0;transition:background-color 200ms ease-in-out}.form-wrap.form-builder .fb-autocomplete-list li:hover,.form-wrap.form-builder .fb-autocomplete-list li.active-option{background-color:rgba(0,0,0,0.075)}@keyframes PLACEHOLDER{0%{height:1px}100%{height:15px}}.form-wrap.form-builder .cb-wrap{width:26%;transition:transform 250ms}.form-wrap.form-builder .cb-wrap.pull-left .form-actions{float:left}.form-wrap.form-builder .cb-wrap h4{margin-top:0;color:#666}@media (max-width: 481px){.form-wrap.form-builder .cb-wrap{width:64px}.form-wrap.form-builder .cb-wrap h4{display:none}}.form-wrap.form-builder .frmb-control{margin:0;padding:0;border-radius:5px}.form-wrap.form-builder .frmb-control li{cursor:move;list-style:none;margin:0 0 -1px 0;padding:10px;text-align:left;background:#fff;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;box-shadow:inset 0 0 0 1px #c5c5c5}.form-wrap.form-builder .frmb-control li .control-icon{width:16px;height:auto;margin-right:10px;margin-left:0.2em;display:inline-block}.form-wrap.form-builder .frmb-control li .control-icon img,.form-wrap.form-builder .frmb-control li .control-icon svg{max-width:100%;height:auto}.form-wrap.form-builder .frmb-control li:first-child{border-radius:5px 5px 0 0;margin-top:0}.form-wrap.form-builder .frmb-control li:last-child{border-radius:0 0 5px 5px}.form-wrap.form-builder .frmb-control li::before{margin-right:10px;font-size:16px}.form-wrap.form-builder .frmb-control li:hover{background-color:#f2f2f2}.form-wrap.form-builder .frmb-control li.ui-sortable-helper{border-radius:5px;transition:box-shadow 250ms;box-shadow:2px 2px 6px 0 #666;border:1px solid #fff}.form-wrap.form-builder .frmb-control li.ui-state-highlight{width:0;overflow:hidden;padding:0;margin:0;border:0 none}.form-wrap.form-builder .frmb-control li.moving{opacity:.6}.form-wrap.form-builder .frmb-control li.fb-separator{background-color:transparent;box-shadow:none;padding:0;cursor:default}.form-wrap.form-builder .frmb-control li.fb-separator hr{margin:10px 0}@media (max-width: 481px){.form-wrap.form-builder .frmb-control li::before{font-size:30px}.form-wrap.form-builder .frmb-control li span{display:none}}.form-wrap.form-builder .frmb-control.sort-enabled li.ui-state-highlight{box-shadow:none;height:0;width:100%;background:radial-gradient(ellipse at center, #545454 0%, rgba(0,0,0,0) 75%);border:0 none;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);visibility:visible;overflow:hidden;margin:1px 0 3px;animation:PLACEHOLDER 250ms forwards}.form-wrap.form-builder .fb-mobile .form-actions{width:100%}.form-wrap.form-builder .fb-mobile .form-actions button{width:100%;font-size:.85em !important;display:block !important;border-radius:0 !important;margin-top:-1px;margin-left:0 !important}.form-wrap.form-builder .fb-mobile .form-actions button:first-child{border-radius:5px 5px 0 0 !important;margin-top:0 !important;border-bottom:0 none}.form-wrap.form-builder .fb-mobile .form-actions button:last-child{border-radius:0 0 5px 5px !important}.form-wrap.form-builder .form-actions{float:right;margin-top:5px}.form-wrap.form-builder .form-actions button{border:0 none}.form-wrap.form-builder .stage-wrap{position:relative;padding:0;margin:0;width:calc(74% - 5px)}@media (max-width: 481px){.form-wrap.form-builder .stage-wrap{width:calc(100% - 64px)}}.form-wrap.form-builder .stage-wrap.empty{border:3px dashed #ccc;background-color:rgba(255,255,255,0.25)}.form-wrap.form-builder .stage-wrap.empty::after{content:attr(data-content);position:absolute;text-align:center;top:50%;left:0;width:100%;margin-top:-1em}.form-wrap.form-builder .frmb{list-style-type:none;min-height:200px;transition:background-color 500ms ease-in-out}.form-wrap.form-builder .frmb .fb-required{color:#c10000}.form-wrap.form-builder .frmb.removing{overflow:hidden}.form-wrap.form-builder .frmb>li:hover{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,0.1),0 0 8px rgba(102,175,233,0.6)}.form-wrap.form-builder .frmb>li:hover .field-actions{opacity:1}.form-wrap.form-builder .frmb>li:hover li :hover{background:#fefefe}.form-wrap.form-builder .frmb li{position:relative;padding:6px;clear:both;margin-left:0;margin-bottom:3px;background-color:#fff;transition:background-color 250ms ease-in-out, margin-top 400ms}.form-wrap.form-builder .frmb li.hidden-field{background-color:rgba(255,255,255,0.6)}.form-wrap.form-builder .frmb li:first-child{border-top-right-radius:5px;border-top-left-radius:5px}.form-wrap.form-builder .frmb li:first-child .field-actions .btn:last-child{border-radius:0 5px 0 0}.form-wrap.form-builder .frmb li:last-child{border-bottom-right-radius:5px;border-bottom-left-radius:5px}.form-wrap.form-builder .frmb li.no-fields label{font-weight:400}@keyframes PLACEHOLDER{0%{height:0}100%{height:15px}}.form-wrap.form-builder .frmb li.frmb-placeholder,.form-wrap.form-builder .frmb li.ui-state-highlight{height:0;padding:0;background:radial-gradient(ellipse at center, #545454 0%, rgba(0,0,0,0) 75%);border:0 none;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);visibility:visible;overflow:hidden;margin-bottom:3px;animation:PLACEHOLDER 250ms forwards}.form-wrap.form-builder .frmb li.moving,.form-wrap.form-builder .frmb li.ui-sortable-helper{transition:box-shadow 500ms ease-in-out;box-shadow:2px 2px 6px 0 #666;border:1px solid #fff;border-radius:5px}.form-wrap.form-builder .frmb li.disabled-field{z-index:1;position:relative;overflow:visible}.form-wrap.form-builder .frmb li.disabled-field:hover .frmb-tt{display:inline-block}.form-wrap.form-builder .frmb li.disabled-field [type='checkbox']{float:left;margin-right:10px}.form-wrap.form-builder .frmb li.disabled-field h2{border-bottom:0 none}.form-wrap.form-builder .frmb li.disabled-field label{font-size:12px;font-weight:400;color:#666}.form-wrap.form-builder .frmb li.disabled-field .prev-holder{cursor:default;line-height:28px;padding-left:5px}.form-wrap.form-builder .frmb li .close-field{position:absolute;color:#666;left:50%;bottom:6px;background:#fff;border-top:1px solid #c5c5c5;border-left:1px solid #c5c5c5;border-right:1px solid #c5c5c5;transform:translateX(-50%);padding:0 5px;border-top-right-radius:3px;border-top-left-radius:3px;cursor:pointer;transition:background-color 250ms ease-in-out}.form-wrap.form-builder .frmb li .close-field:hover{text-decoration:none}.form-wrap.form-builder .frmb li.button-field h1,.form-wrap.form-builder .frmb li.button-field h2,.form-wrap.form-builder .frmb li.button-field h3,.form-wrap.form-builder .frmb li.button-field p,.form-wrap.form-builder .frmb li.button-field canvas,.form-wrap.form-builder .frmb li.button-field output,.form-wrap.form-builder .frmb li.button-field address,.form-wrap.form-builder .frmb li.button-field blockquote,.form-wrap.form-builder .frmb li.button-field .prev-holder,.form-wrap.form-builder .frmb li.header-field h1,.form-wrap.form-builder .frmb li.header-field h2,.form-wrap.form-builder .frmb li.header-field h3,.form-wrap.form-builder .frmb li.header-field p,.form-wrap.form-builder .frmb li.header-field canvas,.form-wrap.form-builder .frmb li.header-field output,.form-wrap.form-builder .frmb li.header-field address,.form-wrap.form-builder .frmb li.header-field blockquote,.form-wrap.form-builder .frmb li.header-field .prev-holder,.form-wrap.form-builder .frmb li.paragraph-field h1,.form-wrap.form-builder .frmb li.paragraph-field h2,.form-wrap.form-builder .frmb li.paragraph-field h3,.form-wrap.form-builder .frmb li.paragraph-field p,.form-wrap.form-builder .frmb li.paragraph-field canvas,.form-wrap.form-builder .frmb li.paragraph-field output,.form-wrap.form-builder .frmb li.paragraph-field address,.form-wrap.form-builder .frmb li.paragraph-field blockquote,.form-wrap.form-builder .frmb li.paragraph-field .prev-holder{margin:0}.form-wrap.form-builder .frmb li.button-field .field-label,.form-wrap.form-builder .frmb li.header-field .field-label,.form-wrap.form-builder .frmb li.paragraph-field .field-label{display:none}.form-wrap.form-builder .frmb li.button-field.editing .field-label,.form-wrap.form-builder .frmb li.header-field.editing .field-label,.form-wrap.form-builder .frmb li.paragraph-field.editing .field-label{display:block}.form-wrap.form-builder .frmb li.paragraph-field .fld-label{min-height:150px;overflow-y:auto}.form-wrap.form-builder .frmb li.checkbox-field .field-label{display:none}.form-wrap.form-builder .frmb li.deleting,.form-wrap.form-builder .frmb li.delete:hover,.form-wrap.form-builder .frmb li:hover li.delete:hover{background-color:#fdd}.form-wrap.form-builder .frmb li.deleting .close-field,.form-wrap.form-builder .frmb li.delete:hover .close-field,.form-wrap.form-builder .frmb li:hover li.delete:hover .close-field{background-color:#fdd}.form-wrap.form-builder .frmb li.deleting{z-index:20;pointer-events:none}.form-wrap.form-builder .frmb.disabled-field{padding:0 5px}.form-wrap.form-builder .frmb.disabled-field :hover{border-color:transparent}.form-wrap.form-builder .frmb.disabled-field .form-element{float:none;margin-bottom:10px;overflow:visible;padding:5px 0;position:relative}.form-wrap.form-builder .frmb .frm-holder{display:none}.form-wrap.form-builder .frmb .tooltip{left:20px}.form-wrap.form-builder .frmb .prev-holder{display:block}.form-wrap.form-builder .frmb .prev-holder .form-group{margin:0}.form-wrap.form-builder .frmb .prev-holder .ql-editor{min-height:125px}.form-wrap.form-builder .frmb .prev-holder .form-group>label:not([class='fb-checkbox-label']){display:none}.form-wrap.form-builder .frmb .prev-holder select,.form-wrap.form-builder .frmb .prev-holder input[type='text'],.form-wrap.form-builder .frmb .prev-holder textarea,.form-wrap.form-builder .frmb .prev-holder input[type='number']{background-color:#fff;border:1px solid #ccc;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.form-wrap.form-builder .frmb .prev-holder input[type='color']{width:60px;padding:2px;display:inline-block}.form-wrap.form-builder .frmb .prev-holder input[type='date']{width:auto}.form-wrap.form-builder .frmb .prev-holder select[multiple]{height:auto}.form-wrap.form-builder .frmb .prev-holder label{font-weight:normal}.form-wrap.form-builder .frmb .prev-holder input[type='number']{width:auto}.form-wrap.form-builder .frmb .prev-holder input[type='color']{width:60px;padding:2px;display:inline-block}.form-wrap.form-builder .frmb .required-asterisk{display:none}.form-wrap.form-builder .frmb .field-label,.form-wrap.form-builder .frmb .legend{color:#666;margin-bottom:5px;line-height:27px;font-size:16px;font-weight:normal}.form-wrap.form-builder .frmb .disabled-field .field-label{display:block}.form-wrap.form-builder .frmb .other-option:checked+label input{display:inline-block}.form-wrap.form-builder .frmb .other-val{margin-left:5px;display:none}.form-wrap.form-builder .frmb .field-actions{position:absolute;top:0;right:0;opacity:0}.form-wrap.form-builder .frmb .field-actions a::before{margin:0}.form-wrap.form-builder .frmb .field-actions a:hover{text-decoration:none;color:#000}.form-wrap.form-builder .frmb .field-actions .btn{display:inline-block;width:32px;height:32px;padding:0 6px;border-radius:0;border-color:#c5c5c5;background-color:#fff;color:#c5c5c5;line-height:32px;font-size:16px;border-width:0 0 1px 1px}.form-wrap.form-builder .frmb .field-actions .btn:first-child{border-bottom-left-radius:5px}.form-wrap.form-builder .frmb .field-actions .toggle-form:hover{background-color:#65aac6;color:#fff}.form-wrap.form-builder .frmb .field-actions .copy-button:hover{background-color:#6fc665;color:#fff}.form-wrap.form-builder .frmb .field-actions .del-button:hover{background-color:#c66865;color:#fff}.form-wrap.form-builder .frmb .option-actions{text-align:right;margin-top:10px;width:100%;margin-left:2%}.form-wrap.form-builder .frmb .option-actions button,.form-wrap.form-builder .frmb .option-actions a{background:#fff;padding:5px 10px;border:1px solid #c5c5c5;font-size:14px;border-radius:5px;cursor:default}.form-wrap.form-builder .frmb .sortable-options-wrap{width:81.33333333%;display:inline-block}.form-wrap.form-builder .frmb .sortable-options-wrap label{font-weight:normal}@media (max-width: 481px){.form-wrap.form-builder .frmb .sortable-options-wrap{display:block;width:100%}}.form-wrap.form-builder .frmb .sortable-options{display:inline-block;width:100%;margin-left:2%;background:#c5c5c5;margin-bottom:0;border-radius:5px;list-style:none;padding:0}.form-wrap.form-builder .frmb .sortable-options>li{cursor:move;margin:1px}.form-wrap.form-builder .frmb .sortable-options>li:nth-child(1) .remove{display:none}.radio-group-field .form-wrap.form-builder .frmb .sortable-options>li:nth-child(2) .remove{display:none}.form-wrap.form-builder .frmb .sortable-options>li .remove{position:absolute;opacity:1;right:14px;height:18px;width:18px;top:14px;font-size:12px;padding:0;color:#c10000}.form-wrap.form-builder .frmb .sortable-options>li .remove::before{margin:0}.form-wrap.form-builder .frmb .sortable-options>li .remove:hover{background-color:#c10000;text-decoration:none;color:#fff}.form-wrap.form-builder .frmb .sortable-options .option-selected{margin:0;width:5%}.form-wrap.form-builder .frmb .sortable-options input[type='text']{width:calc(44.5% - 17px);margin:0 1%;float:none}.form-wrap.form-builder .frmb .form-field .form-group{width:100%;clear:left;float:none}.form-wrap.form-builder .frmb .col-md-6 .form-elements,.form-wrap.form-builder .frmb .col-md-8 .form-elements{width:100%}.form-wrap.form-builder .frmb .field-options .add-area .add{clear:both}.form-wrap.form-builder .frmb .style-wrap button.selected{border:1px solid #000;margin-top:0;margin-right:1px;box-shadow:0 0 0 1px #fff inset;padding:1px 5px}.form-wrap.form-builder .frmb .form-elements{padding:10px 5px;background:#f7f7f7;border-radius:3px;margin:0;border:1px solid #c5c5c5}.form-wrap.form-builder .frmb .form-elements .input-wrap{width:81.33333333%;margin-left:2%;float:left}.form-wrap.form-builder .frmb .form-elements .input-wrap>input[type='checkbox']{margin-top:8px}.form-wrap.form-builder .frmb .form-elements .btn-group{margin-left:2%}.form-wrap.form-builder .frmb .form-elements .add{clear:both}.form-wrap.form-builder .frmb .form-elements [contenteditable],.form-wrap.form-builder .frmb .form-elements select[multiple]{height:auto}.form-wrap.form-builder .frmb .form-elements [contenteditable].form-control,.form-wrap.form-builder .frmb .form-elements input[type='text'],.form-wrap.form-builder .frmb .form-elements input[type='number'],.form-wrap.form-builder .frmb .form-elements input[type='date'],.form-wrap.form-builder .frmb .form-elements input[type='color'],.form-wrap.form-builder .frmb .form-elements textarea,.form-wrap.form-builder .frmb .form-elements select{transition:background 250ms ease-in-out;padding:6px 12px;border:1px solid #c5c5c5;background-color:#fff}@media (max-width: 481px){.form-wrap.form-builder .frmb .form-elements .input-wrap{width:100%;margin-left:0;float:none}}.form-wrap.form-builder .frmb .form-elements input[type='number']{width:auto}.form-wrap.form-builder .frmb .form-elements .btn-group{margin-left:2%}.col-md-6 .form-wrap.form-builder .frmb .form-elements .false-label,.col-md-8 .form-wrap.form-builder .frmb .form-elements .false-label,.col-md-6 .form-wrap.form-builder .frmb .form-elements label,.col-md-8 .form-wrap.form-builder .frmb .form-elements label{display:block}.form-wrap.form-builder .frmb .form-elements .false-label:first-child,.form-wrap.form-builder .frmb .form-elements label:first-child{width:16.66666667%;padding-top:7px;margin-bottom:0;text-align:right;font-weight:700;float:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}@media (max-width: 481px){.form-wrap.form-builder .frmb .form-elements .false-label:first-child,.form-wrap.form-builder .frmb .form-elements label:first-child{display:block;width:auto;float:none;text-align:left}.form-wrap.form-builder .frmb .form-elements .false-label:first-child.empty-label,.form-wrap.form-builder .frmb .form-elements label:first-child.empty-label{display:none}}.form-wrap.form-builder .frmb .form-elements .false-label.multiple,.form-wrap.form-builder .frmb .form-elements .false-label.required-label,.form-wrap.form-builder .frmb .form-elements .false-label.toggle-label,.form-wrap.form-builder .frmb .form-elements .false-label.roles-label,.form-wrap.form-builder .frmb .form-elements .false-label.other-label,.form-wrap.form-builder .frmb .form-elements label.multiple,.form-wrap.form-builder .frmb .form-elements label.required-label,.form-wrap.form-builder .frmb .form-elements label.toggle-label,.form-wrap.form-builder .frmb .form-elements label.roles-label,.form-wrap.form-builder .frmb .form-elements label.other-label{text-align:left;float:none;margin-bottom:-3px;font-weight:400;width:calc(81.3333% - 23px)}.form-wrap.form-builder .frmb .form-elements input.error{border:1px solid #c10000}.form-wrap.form-builder .frmb .form-elements input.fld-maxlength{width:75px}.form-wrap.form-builder .frmb .form-elements input.field-error{background:#fefefe;border:1px solid #c5c5c5}.form-wrap.form-builder .frmb .form-elements label em{display:block;font-weight:400;font-size:0.75em}.form-wrap.form-builder .frmb .form-elements label.maxlength-label{line-height:1em}.form-wrap.form-builder .frmb .form-elements .available-roles{display:none;padding:10px;margin:10px 0;background:#e6e6e6;box-shadow:inset 0 0 2px 0 #b3b3b3}@media (max-width: 481px){.form-wrap.form-builder .frmb .form-elements .available-roles{margin-left:0}}.form-wrap.form-builder .frmb .form-elements .available-roles label{font-weight:400;width:auto;float:none;display:inline}.form-wrap.form-builder .frmb .form-elements .available-roles input{display:inline;top:auto}.form-wrap.form-builder .autocomplete-field .sortable-options .option-selected{display:none}.form-wrap.form-builder .fb-mobile .field-actions{opacity:1}.form-wrap.form-builder *[tooltip]{position:relative}.form-wrap.form-builder *[tooltip]:hover:after{background:rgba(0,0,0,0.9);border-radius:5px 5px 5px 0;bottom:23px;color:#fff;content:attr(tooltip);padding:10px 5px;position:absolute;z-index:98;left:2px;width:230px;text-shadow:none;font-size:12px;line-height:1.5em;cursor:default}.form-wrap.form-builder *[tooltip]:hover:before{border:solid;border-color:#222 transparent;border-width:6px 6px 0;bottom:17px;content:'';left:2px;position:absolute;z-index:99;cursor:default}.form-wrap.form-builder .tooltip-element{visibility:visible;color:#fff;background:#000;width:16px;height:16px;border-radius:8px;display:inline-block;text-align:center;line-height:16px;margin:0 5px;font-size:12px;cursor:default}.form-wrap.form-builder .kc-toggle{padding-left:0 !important}.form-wrap.form-builder .kc-toggle span{position:relative;width:48px;height:24px;background:#e6e6e6;display:inline-block;border-radius:4px;border:1px solid #ccc;padding:2px;overflow:hidden;float:left;margin-right:5px;will-change:transform}.form-wrap.form-builder .kc-toggle span::after,.form-wrap.form-builder .kc-toggle span::before{position:absolute;display:inline-block;top:0}.form-wrap.form-builder .kc-toggle span::after{position:relative;content:'';width:50%;height:100%;left:0;border-radius:3px;background:linear-gradient(to bottom, #fff 0%, #ccc 100%);border:1px solid #999;transition:transform 100ms;transform:translateX(0)}.form-wrap.form-builder .kc-toggle span::before{border-radius:4px;top:2px;left:2px;content:'';width:calc(100% - 4px);height:18px;box-shadow:0 0 1px 1px #b3b3b3 inset;background-color:transparent}.form-wrap.form-builder .kc-toggle input{height:0;overflow:hidden;width:0;opacity:0;pointer-events:none;margin:0}.form-wrap.form-builder .kc-toggle input:checked+span::after{transform:translateX(100%)}.form-wrap.form-builder .kc-toggle input:checked+span::before{background-color:#6fc665}.form-wrap.form-builder::after{content:'';display:table;clear:both}.cb-wrap,.stage-wrap{vertical-align:top}.cb-wrap.pull-right,.stage-wrap.pull-right{float:right}.cb-wrap.pull-left,.stage-wrap.pull-left{float:left}.form-elements,.form-group,.multi-row span,textarea{display:block}.form-elements::after,.form-group::after{content:'.';display:block;height:0;clear:both;visibility:hidden}.form-elements .field-options div:hover,.frmb .legend,.frmb .prev-holder{cursor:move}.frmb-tt{display:none;position:absolute;top:0;left:0;border:1px solid #262626;background-color:#666;border-radius:5px;padding:5px;color:#fff;z-index:20;text-align:left;font-size:12px;pointer-events:none}.frmb-tt::before{border-color:#262626 transparent;bottom:-11px}.frmb-tt::before,.frmb-tt::after{content:'';position:absolute;border-style:solid;border-width:10px 10px 0;border-color:#666 transparent;display:block;width:0;z-index:1;margin-left:-10px;bottom:-10px;left:20px}.frmb-tt a{text-decoration:underline;color:#fff}.frmb li:hover .del-button,.frmb li:hover .toggle-form,.fb-mobile .frmb li .del-button,.fb-mobile .frmb li .toggle-form{opacity:1}.frmb-xml .ui-dialog-content{white-space:pre-wrap;word-wrap:break-word;font-size:12px;padding:0 30px;margin-top:0}.toggle-form{opacity:0}.toggle-form:hover{border-color:#ccc}.toggle-form::before{margin:0}.formb-field-vars .copy-var{display:inline-block;width:24px;height:24px;background:#b3b3b3;text-indent:-9999px}.ui-button .ui-button-text{line-height:0}.form-builder-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);display:none;z-index:10}.form-builder-overlay.visible{display:block}.form-builder-dialog{position:absolute;border-radius:5px;background:#fff;z-index:20;transform:translate(-50%, -50%);top:0;left:0;padding:10px;box-shadow:0 3px 10px #000;min-width:166px;max-height:80%;overflow-y:scroll}.form-builder-dialog h3{margin-top:0}.form-builder-dialog.data-dialog{width:65%;background-color:#23241f}.form-builder-dialog.data-dialog pre{background:none;border:0 none;box-shadow:none;margin:0;color:#f2f2f2}.form-builder-dialog.positioned{transform:translate(-50%, -100%)}.form-builder-dialog.positioned .button-wrap::before{content:'';width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-top:10px solid #fff;position:absolute;left:50%;top:100%;transform:translate(-50%, 10px)}.form-builder-dialog .button-wrap{position:relative;margin-top:10px;text-align:right;clear:both}.form-builder-dialog .button-wrap .btn{margin-left:10px}\n", ""]);



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11),
    now = __webpack_require__(19),
    toNumber = __webpack_require__(22);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(13);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11),
    isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isObjectLike = __webpack_require__(27);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    getRawTag = __webpack_require__(25),
    objectToString = __webpack_require__(26);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

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
/* 26 */
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
/* 27 */
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../src/sass/form-builder.scss
var form_builder = __webpack_require__(16);

// EXTERNAL MODULE: ../node_modules/lodash/throttle.js
var throttle = __webpack_require__(15);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// EXTERNAL MODULE: ../src/js/dom.js
var dom = __webpack_require__(4);

// CONCATENATED MODULE: ../src/js/data.js
var instanceData = {};
var Data = function Data(formID) {
  this.formData = {};
  this.formID = formID;
  this.layout = '';
  instanceData[formID] = this;
};
var availablefields = {};
// EXTERNAL MODULE: ../node_modules/mi18n/dist/mi18n.min.js
var mi18n_min = __webpack_require__(2);
var mi18n_min_default = /*#__PURE__*/__webpack_require__.n(mi18n_min);

// EXTERNAL MODULE: ../src/js/events.js
var js_events = __webpack_require__(5);

// EXTERNAL MODULE: ../src/js/layout.js
var js_layout = __webpack_require__(10);

// EXTERNAL MODULE: ../src/js/utils.js
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ../src/js/config.js
var config = __webpack_require__(3);

// EXTERNAL MODULE: ../src/js/control.js
var js_control = __webpack_require__(1);

// EXTERNAL MODULE: ../src/js/control/custom.js
var control_custom = __webpack_require__(6);

// CONCATENATED MODULE: ../src/js/helpers.js
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var helpers_Helpers = function () {
  function Helpers(formId, layout, formBuilder) {
    this.data = instanceData[formId];
    this.d = dom["d" /* instanceDom */][formId];
    this.doCancel = false;
    this.layout = layout;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.formBuilder = formBuilder;
  }

  var _proto = Helpers.prototype;

  _proto.startMoving = function startMoving(event, ui) {
    ui.item.show().addClass('moving');
    this.doCancel = true;
    this.from = ui.item.parent();
  };

  _proto.stopMoving = function stopMoving(event, ui) {
    var _this = this;

    ui.item.removeClass('moving');

    if (_this.doCancel) {
      if (ui.sender) {
        $(ui.sender).sortable('cancel');
      }

      this.from.sortable('cancel');
    }

    _this.save();

    _this.doCancel = false;
  };

  _proto.beforeStop = function beforeStop(event, ui) {
    var _this = this;

    var opts = config["a" /* config */].opts;
    var form = _this.d.stage;
    var lastIndex = form.childNodes.length - 1;
    var cancelArray = [];
    _this.stopIndex = ui.placeholder.index() - 1;

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true);
    }

    if (opts.prepend) {
      cancelArray.push(_this.stopIndex === 0);
    }

    if (opts.append) {
      cancelArray.push(_this.stopIndex + 1 === lastIndex);
    }

    _this.doCancel = cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  _proto.getTypes = function getTypes($field) {
    var types = {
      type: $field.attr('type')
    };
    var subtype = $('.fld-subtype', $field).val();

    if (subtype !== types.type) {
      types.subtype = subtype;
    }

    return types;
  };

  _proto.fieldOptionData = function fieldOptionData(field) {
    var options = [];
    var $options = $('.sortable-options li', field);
    $options.each(function (i) {
      var $option = $($options[i]);
      var selected = $('.option-selected', $option).is(':checked');
      var attrs = {
        label: $('.option-label', $option).val(),
        value: $('.option-value', $option).val()
      };

      if (selected) {
        attrs.selected = selected;
      }

      options.push(attrs);
    });
    return options;
  };

  _proto.xmlSave = function xmlSave(form) {
    var formData = this.prepData(form);
    var xmlSerializer = new XMLSerializer();
    var fields = ['<fields>'];
    formData.forEach(function (field) {
      var values = field.values,
          fieldData = _objectWithoutPropertiesLoose(field, ["values"]);

      var fieldHTML = ["<field " + Object(utils["A" /* xmlAttrString */])(fieldData) + ">"];

      if (dom["e" /* optionFields */].includes(field.type)) {
        var options = values.map(function (option) {
          return Object(utils["p" /* markup */])('option', option.label, option).outerHTML;
        });
        fieldHTML = fieldHTML.concat(options);
      }

      fieldHTML.push('</field>');
      fields.push(fieldHTML);
    });
    fields.push('</fields>');
    var formTemplate = Object(utils["p" /* markup */])('form-template', Object(utils["h" /* flattenArray */])(fields).join(''));
    return xmlSerializer.serializeToString(formTemplate);
  };

  _proto.prepData = function prepData(form) {
    var formData = [];
    var d = this.d;

    var _this = this;

    if (form.childNodes.length !== 0) {
      Object(utils["i" /* forEach */])(form.childNodes, function (index, field) {
        var $field = $(field);

        if (!$field.hasClass('disabled-field')) {
          var fieldData = _this.getTypes($field);

          var $roleInputs = $('.roles-field:checked', field);
          var roleVals = $roleInputs.map(function (index) {
            return $roleInputs[index].value;
          }).get();
          fieldData = Object.assign({}, fieldData, _this.getAttrVals(field));

          if (fieldData.subtype) {
            if (fieldData.subtype === 'quill') {
              var id = fieldData.name + "-preview";

              if (window.fbEditors.quill[id]) {
                var instance = window.fbEditors.quill[id].instance;
                var data = instance.getContents();
                fieldData.value = window.JSON.stringify(data.ops);
              }
            } else if (fieldData.subtype === 'tinymce' && window.tinymce) {
              var _id = fieldData.name + "-preview";

              if (window.tinymce.editors[_id]) {
                var editor = window.tinymce.editors[_id];
                fieldData.value = editor.getContent();
              }
            }
          }

          if (roleVals.length) {
            fieldData.role = roleVals.join(',');
          }

          fieldData.className = fieldData.className || fieldData.class;

          if (fieldData.className) {
            var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);

            if (match) {
              fieldData.style = match[1];
            }
          }

          fieldData = Object(utils["y" /* trimObj */])(fieldData);
          var multipleField = fieldData.type && fieldData.type.match(d.optionFieldsRegEx);

          if (multipleField) {
            fieldData.values = _this.fieldOptionData($field);
          }

          formData.push(fieldData);
        }
      });
    }

    return formData;
  };

  _proto.getData = function getData(formData) {
    var data = this.data;

    if (!formData) {
      formData = config["a" /* config */].opts.formData;
    }

    if (!formData) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return Array.isArray(formData) ? formData : Object(utils["s" /* parseXML */])(formData);
      },
      json: function json(formData) {
        if (typeof formData === 'string') {
          return window.JSON.parse(formData);
        }

        return formData;
      }
    };
    data.formData = setData[config["a" /* config */].opts.dataType](formData) || [];
    return data.formData;
  };

  _proto.save = function save(minify) {
    var _this = this;

    var data = this.data;
    var stage = this.d.stage;
    var doSave = {
      xml: function xml(minify) {
        return _this.xmlSave(stage, minify);
      },
      json: function json(minify) {
        return window.JSON.stringify(_this.prepData(stage), null, minify && '  ');
      }
    };
    data.formData = doSave[config["a" /* config */].opts.dataType](minify);
    document.dispatchEvent(js_events["a" /* default */].formSaved);
    return data.formData;
  };

  _proto.incrementId = function incrementId(id) {
    var split = id.lastIndexOf('-');
    var newFieldNumber = parseInt(id.substring(split + 1)) + 1;
    var baseString = id.substring(0, split);
    return baseString + "-" + newFieldNumber;
  };

  _proto.getAttrVals = function getAttrVals(field) {
    var fieldData = Object.create(null);
    var attrs = field.querySelectorAll('[class*="fld-"]');
    Object(utils["i" /* forEach */])(attrs, function (index) {
      var attr = attrs[index];
      var name = Object(utils["c" /* camelCase */])(attr.getAttribute('name'));
      var value = [[attr.attributes.contenteditable, function () {
        return config["a" /* config */].opts.dataType === 'xml' ? Object(utils["g" /* escapeHtml */])(attr.innerHTML) : attr.innerHTML;
      }], [attr.type === 'checkbox', function () {
        return attr.checked;
      }], [attr.type === 'number' && attr.value !== '', function () {
        return Number(attr.value);
      }], [attr.attributes.multiple, function () {
        return $(attr).val();
      }], [true, function () {
        return attr.value;
      }]].find(function (_ref) {
        var condition = _ref[0];
        return !!condition;
      })[1]();
      fieldData[name] = value;
    });
    return fieldData;
  };

  _proto.updatePreview = function updatePreview($field) {
    var _this = this;

    var d = this.d;
    var fieldClass = $field.attr('class');
    var field = $field[0];

    if (fieldClass.includes('input-control')) {
      return;
    }

    var fieldType = $field.attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = Object.assign({}, _this.getAttrVals(field, previewData), {
      type: fieldType
    });

    if (fieldType.match(d.optionFieldsRegEx)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');
      $('.sortable-options li', field).each(function (i, $option) {
        var option = {
          selected: $('.option-selected', $option).is(':checked'),
          value: $('.option-value', $option).val(),
          label: $('.option-label', $option).val()
        };
        previewData.values.push(option);
      });
    }

    previewData = Object(utils["y" /* trimObj */])(previewData);
    previewData.className = _this.classNames(field, previewData);
    $field.data('fieldData', previewData);
    var custom = control_custom["a" /* default */].lookup(previewData.type);
    var controlClass = custom ? custom.class : js_control["a" /* default */].getClass(previewData.type, previewData.subtype);
    var preview = this.layout.build(controlClass, previewData);
    Object(dom["b" /* empty */])($prevHolder[0]);
    $prevHolder[0].appendChild(preview);
    preview.dispatchEvent(js_events["a" /* default */].fieldRendered);
  };

  _proto.disabledTT = function disabledTT(stage) {
    var move = function move(e, elem) {
      var fieldOffset = elem.field.getBoundingClientRect();
      var x = e.clientX - fieldOffset.left - 21;
      var y = e.clientY - fieldOffset.top - elem.tt.offsetHeight - 12;
      elem.tt.style.transform = "translate(" + x + "px, " + y + "px)";
    };

    var disabledFields = stage.querySelectorAll('.disabled-field');
    Object(utils["i" /* forEach */])(disabledFields, function (index) {
      var field = disabledFields[index];
      var title = mi18n_min_default.a.get('fieldNonEditable');

      if (title) {
        var tt = Object(utils["p" /* markup */])('p', title, {
          className: 'frmb-tt'
        });
        field.appendChild(tt);
        field.addEventListener('mousemove', function (e) {
          return move(e, {
            tt: tt,
            field: field
          });
        });
      }
    });
  };

  _proto.classNames = function classNames(field, previewData) {
    var className = field.querySelector('.fld-className');
    var styleField = field.querySelector('.btn-style');
    var style = styleField && styleField.value;

    if (!className) {
      return;
    }

    var type = previewData.type;
    var classes = className.multiple ? $(className).val() : className.value.trim().split(' ');
    var types = {
      button: 'btn',
      submit: 'btn'
    };
    var primaryType = types[type];

    if (primaryType && style) {
      for (var _i = 0; _i < classes.length; _i++) {
        var re = new RegExp("^" + primaryType + "-.*", 'g');

        var match = classes[_i].match(re);

        if (match) {
          classes.splice(_i, 1, primaryType + '-' + style);
        } else {
          classes.push(primaryType + '-' + style);
        }
      }

      classes.push(primaryType);
    }

    var trimmedClassName = Object(utils["z" /* unique */])(classes).join(' ').trim();
    className.value = trimmedClassName;
    return trimmedClassName;
  };

  _proto.closeConfirm = function closeConfirm(overlay, dialog) {
    if (!overlay) {
      overlay = document.getElementsByClassName('form-builder-overlay')[0];
    }

    overlay && Object(dom["f" /* remove */])(overlay);

    if (!dialog) {
      dialog = document.getElementsByClassName('form-builder-dialog')[0];
    }

    dialog && Object(dom["f" /* remove */])(dialog);
    document.removeEventListener('keydown', this.handleKeyDown, false);
    document.dispatchEvent(js_events["a" /* default */].modalClosed);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 27) {
      e.preventDefault();
      this.closeConfirm.call(this);
    }
  };

  _proto.editorLayout = function editorLayout(controlPosition) {
    var layoutMap = {
      left: {
        stage: 'pull-right',
        controls: 'pull-left'
      },
      right: {
        stage: 'pull-left',
        controls: 'pull-right'
      }
    };
    return layoutMap[controlPosition] || '';
  };

  _proto.showOverlay = function showOverlay() {
    var _this2 = this;

    var overlay = Object(utils["p" /* markup */])('div', null, {
      className: 'form-builder-overlay'
    });
    document.body.appendChild(overlay);
    overlay.classList.add('visible');
    overlay.addEventListener('click', function (_ref2) {
      var target = _ref2.target;
      return _this2.closeConfirm(target);
    }, false);
    document.addEventListener('keydown', this.handleKeyDown, false);
    return overlay;
  };

  _proto.confirm = function confirm(message, yesAction, coords, className) {
    if (coords === void 0) {
      coords = false;
    }

    if (className === void 0) {
      className = '';
    }

    var _this = this;

    var i18n = mi18n_min_default.a.current;

    var overlay = _this.showOverlay();

    var yes = Object(utils["p" /* markup */])('button', i18n.yes, {
      className: 'yes btn btn-success btn-sm'
    });
    var no = Object(utils["p" /* markup */])('button', i18n.no, {
      className: 'no btn btn-danger btn-sm'
    });

    no.onclick = function () {
      _this.closeConfirm(overlay);
    };

    yes.onclick = function () {
      yesAction();

      _this.closeConfirm(overlay);
    };

    var btnWrap = Object(utils["p" /* markup */])('div', [no, yes], {
      className: 'button-wrap'
    });
    className = 'form-builder-dialog ' + className;
    var miniModal = Object(utils["p" /* markup */])('div', [message, btnWrap], {
      className: className
    });

    if (!coords) {
      var dE = document.documentElement;
      coords = {
        pageX: Math.max(dE.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(dE.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';
    document.body.appendChild(miniModal);
    yes.focus();
    return miniModal;
  };

  _proto.dialog = function dialog(content, coords, className) {
    if (coords === void 0) {
      coords = false;
    }

    if (className === void 0) {
      className = '';
    }

    var _this = this;

    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;

    _this.showOverlay();

    className = 'form-builder-dialog ' + className;
    var miniModal = Object(utils["p" /* markup */])('div', content, {
      className: className
    });

    if (!coords) {
      coords = {
        pageX: Math.max(clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';
    document.body.appendChild(miniModal);
    document.dispatchEvent(js_events["a" /* default */].modalOpened);

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(js_events["a" /* default */].viewData);
    }

    return miniModal;
  };

  _proto.confirmRemoveAll = function confirmRemoveAll(e) {
    var _this = this;

    var formID = e.target.id.match(/frmb-\d{13}/)[0];
    var stage = document.getElementById(formID);
    var i18n = mi18n_min_default.a.current;
    var fields = $('li.form-field', stage);
    var buttonPosition = e.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12
    };

    if (fields.length) {
      _this.confirm(i18n.clearAllMessage, function () {
        _this.removeAllFields.call(_this, stage);

        config["a" /* config */].opts.notify.success(i18n.allFieldsRemoved);
        config["a" /* config */].opts.onClearAll();
      }, coords);
    } else {
      _this.dialog(i18n.noFieldsToClear, coords);
    }
  };

  _proto.removeAllFields = function removeAllFields(stage, animate) {
    var _this3 = this;

    if (animate === void 0) {
      animate = true;
    }

    var i18n = mi18n_min_default.a.current;
    var opts = config["a" /* config */].opts;
    var fields = stage.querySelectorAll('li.form-field');
    var markEmptyArray = [];

    if (!fields.length) {
      return false;
    }

    if (opts.prepend) {
      markEmptyArray.push(true);
    }

    if (opts.append) {
      markEmptyArray.push(true);
    }

    if (!markEmptyArray.some(function (elem) {
      return elem === true;
    })) {
      stage.classList.add('empty');
      stage.dataset.content = i18n.getStarted;
    }

    if (animate) {
      stage.classList.add('removing');
      var outerHeight = 0;
      Object(utils["i" /* forEach */])(fields, function (index) {
        return outerHeight += fields[index].offsetHeight + 3;
      });
      fields[0].style.marginTop = -outerHeight + "px";
      setTimeout(function () {
        Object(dom["b" /* empty */])(stage).classList.remove('removing');

        _this3.save();
      }, 400);
    } else {
      Object(dom["b" /* empty */])(stage);
      this.save();
    }
  };

  _proto.setFieldOrder = function setFieldOrder($cbUL) {
    if (!config["a" /* config */].opts.sortableControls) {
      return false;
    }

    var _window = window,
        sessionStorage = _window.sessionStorage,
        JSON = _window.JSON;
    var fieldOrder = [];
    $cbUL.children().each(function (index, element) {
      var type = $(element).data('type');

      if (type) {
        fieldOrder.push(type);
      }
    });

    if (sessionStorage) {
      sessionStorage.setItem('fieldOrder', JSON.stringify(fieldOrder));
    }

    return fieldOrder;
  };

  _proto.closeAllEdit = function closeAllEdit() {
    var _this = this;

    var fields = $('> li.editing', _this.d.stage);
    var toggleBtns = $('.toggle-form', _this.d.stage);
    var editPanels = $('.frm-holder', fields);
    toggleBtns.removeClass('open');
    fields.removeClass('editing');
    $('.prev-holder', fields).show();
    editPanels.hide();
  };

  _proto.toggleEdit = function toggleEdit(fieldId, animate) {
    if (animate === void 0) {
      animate = true;
    }

    var field = document.getElementById(fieldId);
    var $editPanel = $('.frm-holder', field);
    var $preview = $('.prev-holder', field);
    field.classList.toggle('editing');
    $('.toggle-form', field).toggleClass('open');

    if (animate) {
      $preview.slideToggle(250);
      $editPanel.slideToggle(250);
    } else {
      $preview.toggle();
      $editPanel.toggle();
    }

    this.updatePreview($(field));

    if (field.classList.contains('editing')) {
      this.formBuilder.currentEditPanel = $editPanel[0];
      config["a" /* config */].opts.onOpenFieldEdit($editPanel[0]);
      document.dispatchEvent(js_events["a" /* default */].fieldEditOpened);
    } else {
      config["a" /* config */].opts.onCloseFieldEdit($editPanel[0]);
      document.dispatchEvent(js_events["a" /* default */].fieldEditClosed);
    }
  };

  _proto.getStyle = function getStyle(elem, property) {
    if (property === void 0) {
      property = false;
    }

    var style;

    if (window.getComputedStyle) {
      style = window.getComputedStyle(elem, null);
    } else if (elem.currentStyle) {
      style = elem.currentStyle;
    }

    return property ? style[property] : style;
  };

  _proto.stickyControls = function stickyControls() {
    var _this$d = this.d,
        controls = _this$d.controls,
        stage = _this$d.stage;
    var $cbWrap = $(controls).parent();
    var cbPosition = controls.getBoundingClientRect();

    var _stage$getBoundingCli = stage.getBoundingClientRect(),
        stageTop = _stage$getBoundingCli.top;

    $(window).scroll(function (evt) {
      var scrollTop = $(evt.target).scrollTop();
      var offsetDefaults = {
        top: 5,
        bottom: 'auto',
        right: 'auto',
        left: cbPosition.left
      };
      var offset = Object.assign({}, offsetDefaults, config["a" /* config */].opts.stickyControls.offset);

      if (scrollTop > stageTop) {
        var style = {
          position: 'sticky'
        };
        var cbStyle = Object.assign(style, offset);

        var _cbPosition = controls.getBoundingClientRect();

        var stagePosition = stage.getBoundingClientRect();
        var cbBottom = _cbPosition.top + _cbPosition.height;
        var stageBottom = stagePosition.top + stagePosition.height;
        var atBottom = cbBottom === stageBottom && _cbPosition.top > scrollTop;

        if (cbBottom > stageBottom && _cbPosition.top !== stagePosition.top) {
          $cbWrap.css({
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            right: 0,
            left: 'auto'
          });
        }

        if (cbBottom < stageBottom || atBottom) {
          $cbWrap.css(cbStyle);
        }
      } else {
        controls.parentElement.removeAttribute('style');
      }
    });
  };

  _proto.showData = function showData() {
    var formData = this.getFormData(config["a" /* config */].opts.dataType, true);

    if (config["a" /* config */].opts.dataType === 'xml') {
      formData = Object(utils["g" /* escapeHtml */])(formData);
    }

    var code = Object(utils["p" /* markup */])('code', formData, {
      className: "formData-" + config["a" /* config */].opts.dataType
    });
    this.dialog(Object(utils["p" /* markup */])('pre', code), null, 'data-dialog');
  };

  _proto.removeField = function removeField(fieldID, animationSpeed) {
    if (animationSpeed === void 0) {
      animationSpeed = 250;
    }

    var fieldRemoved = false;

    var _this = this;

    var form = this.d.stage;
    var fields = form.getElementsByClassName('form-field');

    if (!fields.length) {
      config["a" /* config */].opts.notify.warning('No fields to remove');
      return false;
    }

    if (!fieldID) {
      var availableIds = [].slice.call(fields).map(function (field) {
        return field.id;
      });
      config["a" /* config */].opts.notify.warning('fieldID required to remove specific fields.');
      config["a" /* config */].opts.notify.warning('Removing last field since no ID was supplied.');
      config["a" /* config */].opts.notify.warning('Available IDs: ' + availableIds.join(', '));
      fieldID = form.lastChild.id;
    }

    var field = document.getElementById(fieldID);
    var $field = $(field);

    if (!field) {
      config["a" /* config */].opts.notify.warning('Field not found');
      return false;
    }

    $field.slideUp(animationSpeed, function () {
      $field.removeClass('deleting');
      $field.remove();
      fieldRemoved = true;

      _this.save();

      if (!form.childNodes.length) {
        form.classList.add('empty');
        form.dataset.content = mi18n_min_default.a.current.getStarted;
      }
    });
    var userEvents = config["a" /* config */].opts.typeUserEvents[field.type];

    if (userEvents && userEvents.onremove) {
      userEvents.onremove(field);
    }

    document.dispatchEvent(js_events["a" /* default */].fieldRemoved);
    return fieldRemoved;
  };

  _proto.processActionButtons = function processActionButtons(buttonData) {
    var label = buttonData.label,
        events = buttonData.events,
        attrs = _objectWithoutPropertiesLoose(buttonData, ["label", "events"]);

    var labelText = label;
    var data = this.data;

    if (!labelText) {
      if (attrs.id) {
        labelText = mi18n_min_default.a.current[attrs.id] || Object(utils["d" /* capitalize */])(attrs.id);
      } else {
        labelText = '';
      }
    } else {
      labelText = mi18n_min_default.a.current[labelText] || labelText;
    }

    if (!attrs.id) {
      attrs.id = data.formID + "-action-" + Math.round(Math.random() * 1000);
    } else {
      attrs.id = data.formID + "-" + attrs.id + "-action";
    }

    var button = Object(utils["p" /* markup */])('button', labelText, attrs);

    if (events) {
      var _loop = function _loop(event) {
        if (events.hasOwnProperty(event)) {
          button.addEventListener(event, function (evt) {
            return events[event](evt);
          });
        }
      };

      for (var event in events) {
        _loop(event);
      }
    }

    return button;
  };

  _proto.processSubtypes = function processSubtypes(subtypeOpts) {
    var disabledSubtypes = config["a" /* config */].opts.disabledSubtypes;

    for (var fieldType in subtypeOpts) {
      if (subtypeOpts.hasOwnProperty(fieldType)) {
        js_control["a" /* default */].register(subtypeOpts[fieldType], js_control["a" /* default */].getClass(fieldType), fieldType);
      }
    }

    var registeredSubtypes = js_control["a" /* default */].getRegisteredSubtypes();
    var subtypeDef = Object.entries(registeredSubtypes).reduce(function (acc, _ref3) {
      var key = _ref3[0],
          val = _ref3[1];
      acc[key] = disabledSubtypes[key] && Object(utils["x" /* subtract */])(disabledSubtypes[key], val) || val;
      return acc;
    }, {});
    var subtypes = {};

    for (var _fieldType in subtypeDef) {
      if (subtypeDef.hasOwnProperty(_fieldType)) {
        var formatted = [];

        for (var _iterator = subtypeDef[_fieldType], _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray) {
            if (_i2 >= _iterator.length) break;
            _ref4 = _iterator[_i2++];
          } else {
            _i2 = _iterator.next();
            if (_i2.done) break;
            _ref4 = _i2.value;
          }

          var subtype = _ref4;
          var controlClass = js_control["a" /* default */].getClass(_fieldType, subtype);
          var label = controlClass.mi18n("subtype." + subtype) || controlClass.mi18n(subtype) || subtype;
          formatted.push({
            label: label,
            value: subtype
          });
        }

        subtypes[_fieldType] = formatted;
      }
    }

    return subtypes;
  };

  _proto.editorUI = function editorUI(formID) {
    var d = this.d;
    var data = this.data;
    var id = formID || data.formID;
    d.editorWrap = Object(utils["p" /* markup */])('div', null, {
      id: data.formID + "-form-wrap",
      className: "form-wrap form-builder " + Object(utils["q" /* mobileClass */])()
    });
    d.stage = Object(utils["p" /* markup */])('ul', null, {
      id: id,
      className: "frmb stage-wrap " + data.layout.stage
    });
    d.controls = Object(utils["p" /* markup */])('ul', null, {
      id: id + "-control-box",
      className: 'frmb-control'
    });
    var buttons = this.formActionButtons();
    d.formActions = Object(utils["p" /* markup */])('div', buttons, {
      className: 'form-actions btn-group'
    });
  };

  _proto.formActionButtons = function formActionButtons() {
    var _this4 = this;

    var opts = config["a" /* config */].opts;
    return opts.actionButtons.map(function (btnData) {
      if (btnData.id && opts.disabledActionButtons.indexOf(btnData.id) === -1) {
        return _this4.processActionButtons(btnData);
      }
    }).filter(Boolean);
  };

  _proto.processOptions = function processOptions(options) {
    var _this = this;

    var actionButtons = options.actionButtons,
        replaceFields = options.replaceFields,
        opts = _objectWithoutPropertiesLoose(options, ["actionButtons", "replaceFields"]);

    var fieldEditContainer = opts.fieldEditContainer;

    if (typeof opts.fieldEditContainer === 'string') {
      fieldEditContainer = document.querySelector(opts.fieldEditContainer);
    }

    var mergedActionButtons = [{
      type: 'button',
      id: 'clear',
      className: 'clear-all btn btn-danger',
      events: {
        click: _this.confirmRemoveAll.bind(_this)
      }
    }, {
      type: 'button',
      label: 'viewJSON',
      id: 'data',
      className: 'btn btn-default get-data',
      events: {
        click: _this.showData.bind(_this)
      }
    }, {
      type: 'button',
      id: 'save',
      className: 'btn btn-primary save-template',
      events: {
        click: function click(evt) {
          _this.save();

          config["a" /* config */].opts.onSave(evt, _this.data.formData);
        }
      }
    }].concat(actionButtons);
    opts.fields = opts.fields.concat(replaceFields);
    opts.disableFields = opts.disableFields.concat(replaceFields.map(function (_ref5) {
      var type = _ref5.type;
      return type && type;
    }));

    if (opts.dataType === 'xml') {
      opts.disableHTMLLabels = true;
    }

    config["a" /* config */].opts = Object.assign({}, {
      actionButtons: mergedActionButtons
    }, {
      fieldEditContainer: fieldEditContainer
    }, opts);
    return config["a" /* config */].opts;
  };

  _proto.input = function input(attrs) {
    if (attrs === void 0) {
      attrs = {};
    }

    return Object(utils["p" /* markup */])('input', null, attrs);
  };

  _proto.getFormData = function getFormData(type, formatted) {
    if (type === void 0) {
      type = 'js';
    }

    if (formatted === void 0) {
      formatted = false;
    }

    var h = this;
    var data = {
      js: function js() {
        return h.prepData(h.d.stage);
      },
      xml: function xml() {
        return h.xmlSave(h.d.stage);
      },
      json: function json(formatted) {
        return window.JSON.stringify(h.prepData(h.d.stage), null, formatted && '  ');
      }
    };
    return data[type](formatted);
  };

  return Helpers;
}();


// EXTERNAL MODULE: ../src/js/control/index.js + 10 modules
var src_js_control = __webpack_require__(12);

// CONCATENATED MODULE: ../src/js/controls.js






var controls_Controls = function () {
  function Controls(opts, d) {
    this.opts = opts;
    this.dom = d.controls;
    this.custom = control_custom["a" /* default */];
    this.getClass = js_control["a" /* default */].getClass;
    this.getRegistered = js_control["a" /* default */].getRegistered;
    js_control["a" /* default */].controlConfig = opts.controlConfig || {};
    this.init();
  }

  var _proto = Controls.prototype;

  _proto.init = function init() {
    this.setupControls();
    this.appendControls();
  };

  _proto.setupControls = function setupControls() {
    var _this = this;

    var opts = this.opts;
    js_control["a" /* default */].loadCustom(opts.controls);

    if (Object.keys(opts.fields).length) {
      control_custom["a" /* default */].register(opts.templates, opts.fields);
    }

    var registeredControls = js_control["a" /* default */].getRegistered();
    this.registeredControls = registeredControls;
    var customFields = control_custom["a" /* default */].getRegistered();

    if (customFields) {
      jQuery.merge(registeredControls, customFields);
    }

    if (opts.sortableControls) {
      this.dom.classList.add('sort-enabled');
    }

    this.controlList = [];
    this.allControls = {};

    for (var i = 0; i < registeredControls.length; i++) {
      var type = registeredControls[i];
      var custom = control_custom["a" /* default */].lookup(type);
      var controlClass = void 0;

      if (custom) {
        controlClass = custom.class;
      } else {
        custom = {};
        controlClass = js_control["a" /* default */].getClass(type);

        if (!controlClass || !controlClass.active(type)) {
          continue;
        }
      }

      var icon = custom.icon || controlClass.icon(type);
      var label = custom.label || controlClass.label(type);
      var iconClassName = !icon ? custom.iconClassName || "icon-" + type.replace(/-[\d]{4}$/, '') : '';

      if (icon) {
        label = "<span class=\"control-icon\">" + icon + "</span>" + label;
      }

      var newFieldControl = Object(utils["p" /* markup */])('li', Object(utils["p" /* markup */])('span', label), {
        className: iconClassName + " input-control input-control-" + i
      });
      newFieldControl.dataset.type = type;
      this.controlList.push(type);
      this.allControls[type] = newFieldControl;
    }

    if (opts.inputSets.length) {
      opts.inputSets.forEach(function (set, i) {
        var name = set.name,
            label = set.label;
        name = name || Object(utils["m" /* hyphenCase */])(label);

        if (set.icon) {
          label = "<span class=\"control-icon\">" + set.icon + "</span>" + label;
        }

        var inputSet = Object(utils["p" /* markup */])('li', label, {
          className: "input-set-control input-set-" + i
        });
        inputSet.dataset.type = name;

        _this.controlList.push(name);

        _this.allControls[name] = inputSet;
      });
    }
  };

  _proto.orderFields = function orderFields(controls) {
    var opts = this.opts;
    var controlOrder = opts.controlOrder.concat(controls);
    var fieldOrder;

    if (window.sessionStorage) {
      if (opts.sortableControls) {
        fieldOrder = window.sessionStorage.getItem('fieldOrder');
      } else {
        window.sessionStorage.removeItem('fieldOrder');
      }
    }

    if (!fieldOrder) {
      fieldOrder = Object(utils["z" /* unique */])(controlOrder);
    } else {
      fieldOrder = window.JSON.parse(fieldOrder);
      fieldOrder = Object(utils["z" /* unique */])(fieldOrder.concat(controls));
      fieldOrder = Object.keys(fieldOrder).map(function (i) {
        return fieldOrder[i];
      });
    }

    fieldOrder.forEach(function (field) {
      var randomKey = new RegExp('-[\\d]{4}$');

      if (field.match(randomKey)) {
        var baseFieldIndex = fieldOrder.indexOf(field.replace(randomKey, ''));

        if (baseFieldIndex !== -1) {
          fieldOrder.splice(fieldOrder.indexOf(field), 1);
          fieldOrder.splice(baseFieldIndex + 1, fieldOrder.indexOf(field), field);
        }
      }
    });

    if (opts.disableFields.length) {
      fieldOrder = fieldOrder.filter(function (type) {
        return opts.disableFields.indexOf(type) == -1;
      });
    }

    return fieldOrder.filter(Boolean);
  };

  _proto.appendControls = function appendControls() {
    var _this2 = this;

    Object(dom["b" /* empty */])(this.dom);
    this.orderFields(this.controlList).forEach(function (controlKey) {
      var control = _this2.allControls[controlKey];
      control && _this2.dom.appendChild(control);
    });
  };

  return Controls;
}();


// CONCATENATED MODULE: ../src/js/form-builder.js
function form_builder_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var DEFAULT_TIMEOUT = 333;

var form_builder_FormBuilder = function FormBuilder(opts, element, $) {
  var _this = this;

  var formBuilder = this;
  var i18n = mi18n_min_default.a.current;
  var formID = "frmb-" + new Date().getTime();
  var data = new Data(formID);
  var d = new dom["a" /* default */](formID);

  if (!opts.layout) {
    opts.layout = js_layout["a" /* default */];
  }

  var layoutEngine = new opts.layout(opts.layoutTemplates, true);
  var h = new helpers_Helpers(formID, layoutEngine, formBuilder);
  var m = utils["p" /* markup */];
  opts = h.processOptions(opts);
  data.layout = h.editorLayout(opts.controlPosition);
  h.editorUI(formID);
  data.formID = formID;
  data.lastID = data.formID + "-fld-1";
  var controls = new controls_Controls(opts, d);
  var subtypes = config["a" /* config */].subtypes = h.processSubtypes(opts.subtypes);
  var $stage = $(d.stage);
  var $cbUL = $(d.controls);
  $stage.sortable({
    cursor: 'move',
    opacity: 0.9,
    revert: 150,
    beforeStop: function beforeStop(evt, ui) {
      return h.beforeStop.call(h, evt, ui);
    },
    start: function start(evt, ui) {
      return h.startMoving.call(h, evt, ui);
    },
    stop: function stop(evt, ui) {
      return h.stopMoving.call(h, evt, ui);
    },
    cancel: ['input', 'select', 'textarea', '.disabled-field', '.form-elements', '.btn', 'button', '.is-locked'].join(', '),
    placeholder: 'frmb-placeholder'
  });

  if (!opts.allowStageSort) {
    $stage.sortable('disable');
  }

  $cbUL.sortable({
    helper: 'clone',
    opacity: 0.9,
    connectWith: $stage,
    cancel: '.fb-separator',
    cursor: 'move',
    scroll: false,
    placeholder: 'ui-state-highlight',
    start: function start(evt, ui) {
      return h.startMoving.call(h, evt, ui);
    },
    stop: function stop(evt, ui) {
      return h.stopMoving.call(h, evt, ui);
    },
    revert: 150,
    beforeStop: function beforeStop(evt, ui) {
      return h.beforeStop.call(h, evt, ui);
    },
    distance: 3,
    update: function update(event, ui) {
      if (h.doCancel) {
        return false;
      }

      if (ui.item.parent()[0] === d.stage) {
        h.doCancel = true;
        processControl(ui.item);
      } else {
        h.setFieldOrder($cbUL);
        h.doCancel = !opts.sortableControls;
      }
    }
  });

  var processControl = function processControl(control) {
    if (control[0].classList.contains('input-set-control')) {
      var inputSets = [];
      var inputSet = opts.inputSets.find(function (set) {
        return Object(utils["m" /* hyphenCase */])(set.name || set.label) === control[0].dataset.type;
      });

      if (inputSet && inputSet.showHeader) {
        var header = {
          type: 'header',
          subtype: 'h2',
          id: inputSet.name,
          label: inputSet.label
        };
        inputSets.push(header);
      }

      inputSets.push.apply(inputSets, inputSet.fields);
      inputSets.forEach(function (field) {
        prepFieldVars(field, true);

        if (h.stopIndex || h.stopIndex === 0) {
          h.stopIndex++;
        }
      });
    } else {
      prepFieldVars(control, true);
    }
  };

  var $editorWrap = $(d.editorWrap);
  var cbWrap = m('div', d.controls, {
    id: data.formID + "-cb-wrap",
    className: "cb-wrap " + data.layout.controls
  });

  if (opts.showActionButtons) {
    cbWrap.appendChild(d.formActions);
  }

  $editorWrap.append(d.stage, cbWrap);

  if (element.type !== 'textarea') {
    $(element).append($editorWrap);
  } else {
    $(element).replaceWith($editorWrap);
  }

  $(d.controls).on('click', 'li', function (_ref) {
    var target = _ref.target;
    var $control = $(target).closest('li');
    h.stopIndex = undefined;
    processControl($control);
    h.save.call(h);
  });

  var nonEditableFields = function nonEditableFields() {
    var cancelArray = [];

    var disabledField = function disabledField(type) {
      return m('li', opts[type], {
        className: "disabled-field form-" + type
      });
    };

    if (opts.prepend && !$('.disabled-field.form-prepend', d.stage).length) {
      cancelArray.push(true);
      $stage.prepend(disabledField('prepend'));
    }

    if (opts.append && !$('.disabled-field.form-.append', d.stage).length) {
      cancelArray.push(true);
      $stage.append(disabledField('append'));
    }

    h.disabledTT(d.stage);
    return cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  var prepFieldVars = function prepFieldVars($field, isNew) {
    if (isNew === void 0) {
      isNew = false;
    }

    var field = {};

    if ($field instanceof jQuery) {
      field.type = $field[0].dataset.type;

      if (field.type) {
        var custom = controls.custom.lookup(field.type);

        if (custom) {
          field = Object.assign({}, custom);
        } else {
          var controlClass = controls.getClass(field.type);
          field.label = controlClass.label(field.type);
        }
      } else {
        var attrs = $field[0].attributes;

        if (!isNew) {
          field.values = $field.children().map(function (index, elem) {
            return {
              label: $(elem).text(),
              value: $(elem).attr('value'),
              selected: Boolean($(elem).attr('selected'))
            };
          });
        }

        for (var i = attrs.length - 1; i >= 0; i--) {
          field[attrs[i].name] = attrs[i].value;
        }
      }
    } else {
      field = Object.assign({}, $field);
    }

    if (!field.name) {
      field.name = Object(utils["r" /* nameAttr */])(field);
    }

    if (isNew && ['text', 'number', 'file', 'date', 'select', 'textarea', 'autocomplete'].includes(field.type)) {
      field.className = field.className || 'form-control';
    }

    var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);

    if (match) {
      field.style = match[1];
    }

    if (isNew) {
      field = Object.assign({}, field, opts.onAddField(data.lastID, field));
      setTimeout(function () {
        return document.dispatchEvent(js_events["a" /* default */].fieldAdded);
      }, 10);
    }

    appendNewField(field, isNew);
    d.stage.classList.remove('empty');
  };

  var loadFields = function loadFields(formData) {
    formData = h.getData(formData);

    if (formData && formData.length) {
      formData.forEach(function (fieldData) {
        return prepFieldVars(Object(utils["y" /* trimObj */])(fieldData));
      });
      d.stage.classList.remove('empty');
    } else if (opts.defaultFields && opts.defaultFields.length) {
      opts.defaultFields.forEach(function (field) {
        return prepFieldVars(field);
      });
      d.stage.classList.remove('empty');
    } else if (!opts.prepend && !opts.append) {
      d.stage.classList.add('empty');
      d.stage.dataset.content = mi18n_min_default.a.get('getStarted');
    }

    if (nonEditableFields()) {
      d.stage.classList.remove('empty');
    }

    h.save();
  };

  var fieldOptions = function fieldOptions(fieldData) {
    var type = fieldData.type,
        values = fieldData.values,
        name = fieldData.name;
    var fieldValues;
    var optionActions = [m('a', mi18n_min_default.a.get('addOption'), {
      className: 'add add-opt'
    })];
    var fieldOptions = [m('label', mi18n_min_default.a.get('selectOptions'), {
      className: 'false-label'
    })];
    var isMultiple = fieldData.multiple || type === 'checkbox-group';

    var optionDataTemplate = function optionDataTemplate(label) {
      var optionData = {
        label: label,
        value: Object(utils["m" /* hyphenCase */])(label)
      };

      if (type !== 'autocomplete') {
        optionData.selected = false;
      }

      return optionData;
    };

    if (!values || !values.length) {
      var defaultOptCount = [1, 2, 3];

      if (['checkbox-group', 'checkbox'].includes(type)) {
        defaultOptCount = [1];
      }

      fieldValues = defaultOptCount.map(function (index) {
        return optionDataTemplate("" + mi18n_min_default.a.get('optionCount', index));
      });
      var firstOption = fieldValues[0];

      if (firstOption.hasOwnProperty('selected') && type !== 'radio-group') {
        firstOption.selected = true;
      }
    } else {
      fieldValues = values.map(function (option) {
        return Object.assign({}, {
          selected: false
        }, option);
      });
    }

    var optionActionsWrap = m('div', optionActions, {
      className: 'option-actions'
    });
    var options = m('ol', fieldValues.map(function (option) {
      return selectFieldOptions(name, option, isMultiple);
    }), {
      className: 'sortable-options'
    });
    var optionsWrap = m('div', [options, optionActionsWrap], {
      className: 'sortable-options-wrap'
    });
    fieldOptions.push(optionsWrap);
    return m('div', fieldOptions, {
      className: 'form-group field-options'
    }).outerHTML;
  };

  var defaultFieldAttrs = function defaultFieldAttrs(type) {
    var defaultAttrs = ['required', 'label', 'description', 'placeholder', 'className', 'name', 'access', 'value'];
    var noValFields = ['header', 'paragraph', 'file', 'autocomplete'].concat(d.optionFields);
    var valueField = !noValFields.includes(type);
    var typeAttrsMap = {
      autocomplete: defaultAttrs.concat(['options', 'requireValidOption']),
      button: ['label', 'subtype', 'style', 'className', 'name', 'value', 'access'],
      checkbox: ['required', 'label', 'description', 'toggle', 'inline', 'className', 'name', 'access', 'other', 'options'],
      text: defaultAttrs.concat(['subtype', 'maxlength']),
      date: defaultAttrs,
      file: defaultAttrs.concat(['subtype', 'multiple']),
      header: ['label', 'subtype', 'className', 'access'],
      hidden: ['name', 'value', 'access'],
      paragraph: ['label', 'subtype', 'className', 'access'],
      number: defaultAttrs.concat(['min', 'max', 'step']),
      select: defaultAttrs.concat(['multiple', 'options']),
      textarea: defaultAttrs.concat(['subtype', 'maxlength', 'rows'])
    };
    typeAttrsMap['checkbox-group'] = typeAttrsMap.checkbox;
    typeAttrsMap['radio-group'] = typeAttrsMap.checkbox;
    var typeAttrs = typeAttrsMap[type];

    if (type === 'radio-group') {
      Object(utils["u" /* removeFromArray */])('toggle', typeAttrs);
    }

    if (['header', 'paragraph', 'button'].includes(type)) {
      Object(utils["u" /* removeFromArray */])('description', typeAttrs);
    }

    if (!valueField) {
      Object(utils["u" /* removeFromArray */])('value', typeAttrs);
    }

    return typeAttrs || defaultAttrs;
  };

  var advFields = function advFields(values) {
    var type = values.type;
    var advFields = [];
    var fieldAttrs = defaultFieldAttrs(type);
    var advFieldMap = {
      required: function required() {
        return requiredField(values);
      },
      toggle: function toggle() {
        return boolAttribute('toggle', values, {
          first: mi18n_min_default.a.get('toggle')
        });
      },
      inline: function inline() {
        var labels = {
          first: mi18n_min_default.a.get('inline'),
          second: mi18n_min_default.a.get('inlineDesc', type.replace('-group', ''))
        };
        return boolAttribute('inline', values, labels);
      },
      label: function label() {
        return textAttribute('label', values);
      },
      description: function description() {
        return textAttribute('description', values);
      },
      subtype: function subtype() {
        return selectAttribute('subtype', values, subtypes[type]);
      },
      style: function style() {
        return btnStyles(values.style);
      },
      placeholder: function placeholder() {
        return textAttribute('placeholder', values);
      },
      rows: function rows() {
        return numberAttribute('rows', values);
      },
      className: function className(isHidden) {
        return textAttribute('className', values, isHidden);
      },
      name: function name(isHidden) {
        return textAttribute('name', values, isHidden);
      },
      value: function value() {
        return textAttribute('value', values);
      },
      maxlength: function maxlength() {
        return numberAttribute('maxlength', values);
      },
      access: function access() {
        var rolesDisplay = values.role ? 'style="display:block"' : '';
        var availableRoles = ["<div class=\"available-roles\" " + rolesDisplay + ">"];

        for (key in opts.roles) {
          if (opts.roles.hasOwnProperty(key)) {
            var roleId = "fld-" + data.lastID + "-roles-" + key;
            var cbAttrs = {
              type: 'checkbox',
              name: 'roles[]',
              value: key,
              id: roleId,
              className: 'roles-field'
            };

            if (roles.includes(key)) {
              cbAttrs.checked = 'checked';
            }

            availableRoles.push("<label for=\"" + roleId + "\">");
            availableRoles.push(h.input(cbAttrs).outerHTML);
            availableRoles.push(" " + opts.roles[key] + "</label>");
          }
        }

        availableRoles.push('</div>');
        var accessLabels = {
          first: mi18n_min_default.a.get('roles'),
          second: mi18n_min_default.a.get('limitRole'),
          content: availableRoles.join('')
        };
        return boolAttribute('access', values, accessLabels);
      },
      other: function other() {
        return boolAttribute('other', values, {
          first: mi18n_min_default.a.get('enableOther'),
          second: mi18n_min_default.a.get('enableOtherMsg')
        });
      },
      options: function options() {
        return fieldOptions(values);
      },
      requireValidOption: function requireValidOption() {
        return boolAttribute('requireValidOption', values, {
          first: ' ',
          second: mi18n_min_default.a.get('requireValidOption')
        });
      },
      multiple: function multiple() {
        var typeLabels = {
          default: {
            first: 'Multiple',
            second: 'set multiple attribute'
          },
          file: {
            first: mi18n_min_default.a.get('multipleFiles'),
            second: mi18n_min_default.a.get('allowMultipleFiles')
          },
          select: {
            first: ' ',
            second: mi18n_min_default.a.get('selectionsMessage')
          }
        };
        return boolAttribute('multiple', values, typeLabels[type] || typeLabels.default);
      }
    };
    var key;
    var roles = values.role !== undefined ? values.role.split(',') : [];
    var numAttrs = ['min', 'max', 'step'];
    numAttrs.forEach(function (numAttr) {
      advFieldMap[numAttr] = function () {
        return numberAttribute(numAttr, values);
      };
    });
    var noDisable = ['name', 'className'];
    Object.keys(fieldAttrs).forEach(function (index) {
      var attr = fieldAttrs[index];
      var useDefaultAttr = [true];
      var isDisabled = opts.disabledAttrs.includes(attr);

      if (opts.typeUserDisabledAttrs[type]) {
        var typeDisabledAttrs = opts.typeUserDisabledAttrs[type];
        useDefaultAttr.push(!typeDisabledAttrs.includes(attr));
      }

      if (opts.typeUserAttrs[type]) {
        var userAttrs = Object.keys(opts.typeUserAttrs[type]);
        useDefaultAttr.push(!userAttrs.includes(attr));
      }

      if (isDisabled && !noDisable.includes(attr)) {
        useDefaultAttr.push(false);
      }

      if (useDefaultAttr.every(Boolean)) {
        advFields.push(advFieldMap[attr](isDisabled));
      }
    });

    if (opts.typeUserAttrs[type]) {
      var customAttr = processTypeUserAttrs(opts.typeUserAttrs[type], values);
      advFields.push(customAttr);
    }

    return advFields.join('');
  };

  function userAttrType(attr, attrData) {
    return [['array', function (_ref2) {
      var options = _ref2.options;
      return !!options;
    }], [typeof attrData.value, function () {
      return true;
    }]].find(function (typeCondition) {
      return typeCondition[1](attrData);
    })[0] || 'string';
  }

  function processTypeUserAttrs(typeUserAttr, values) {
    var advField = [];
    var attrTypeMap = {
      array: selectUserAttrs,
      string: inputUserAttrs,
      number: numberAttribute,
      boolean: function boolean(attr, attrData) {
        var _objectSpread2;

        return boolAttribute(attr, _objectSpread({}, attrData, (_objectSpread2 = {}, _objectSpread2[attr] = values[attr], _objectSpread2)), {
          first: attrData.label
        });
      }
    };

    for (var attribute in typeUserAttr) {
      if (typeUserAttr.hasOwnProperty(attribute)) {
        var attrValType = userAttrType(attribute, typeUserAttr[attribute]);
        var orig = mi18n_min_default.a.get(attribute);
        var tUA = typeUserAttr[attribute];
        var origValue = tUA.value || '';
        tUA.value = values[attribute] || tUA.value || '';

        if (tUA.label) {
          i18n[attribute] = Array.isArray(tUA.label) ? mi18n_min_default.a.get.apply(mi18n_min_default.a, tUA.label) || tUA.label[0] : tUA.label;
        }

        if (attrTypeMap[attrValType]) {
          advField.push(attrTypeMap[attrValType](attribute, tUA));
        }

        i18n[attribute] = orig;
        tUA.value = origValue;
      }
    }

    return advField.join('');
  }

  function inputUserAttrs(name, inputAttrs) {
    var classname = inputAttrs.class,
        className = inputAttrs.className,
        attrs = form_builder_objectWithoutPropertiesLoose(inputAttrs, ["class", "className"]);

    var textAttrs = {
      id: name + '-' + data.lastID,
      title: attrs.description || attrs.label || name.toUpperCase(),
      name: name,
      type: attrs.type || 'text',
      className: ["fld-" + name, (classname || className || '').trim()]
    };
    var label = "<label for=\"" + textAttrs.id + "\">" + (i18n[name] || '') + "</label>";
    var optionInputs = ['checkbox', 'checkbox-group', 'radio-group'];

    if (!optionInputs.includes(textAttrs.type)) {
      textAttrs.className.push('form-control');
    }

    textAttrs = Object.assign({}, attrs, textAttrs);
    var textInput = "<input " + Object(utils["b" /* attrString */])(textAttrs) + ">";
    var inputWrap = "<div class=\"input-wrap\">" + textInput + "</div>";
    return "<div class=\"form-group " + name + "-wrap\">" + label + inputWrap + "</div>";
  }

  function selectUserAttrs(name, fieldData) {
    var multiple = fieldData.multiple,
        options = fieldData.options,
        labelText = fieldData.label,
        value = fieldData.value,
        classname = fieldData.class,
        className = fieldData.className,
        restData = form_builder_objectWithoutPropertiesLoose(fieldData, ["multiple", "options", "label", "value", "class", "className"]);

    var optis = Object.keys(options).map(function (val) {
      var attrs = {
        value: val
      };
      var optionTextVal = options[val];
      var optionText = Array.isArray(optionTextVal) ? mi18n_min_default.a.get.apply(mi18n_min_default.a, optionTextVal) || optionTextVal[0] : optionTextVal;

      if (Array.isArray(value) ? value.includes(val) : val === value) {
        attrs.selected = null;
      }

      return m('option', optionText, attrs);
    });
    var selectAttrs = {
      id: name + "-" + data.lastID,
      title: restData.description || labelText || name.toUpperCase(),
      name: name,
      className: ("fld-" + name + " form-control " + (classname || className || '')).trim()
    };

    if (multiple) {
      selectAttrs.multiple = true;
    }

    var label = "<label for=\"" + selectAttrs.id + "\">" + i18n[name] + "</label>";
    Object.keys(restData).forEach(function (attr) {
      selectAttrs[attr] = restData[attr];
    });
    var select = m('select', optis, selectAttrs).outerHTML;
    var inputWrap = "<div class=\"input-wrap\">" + select + "</div>";
    return "<div class=\"form-group " + name + "-wrap\">" + label + inputWrap + "</div>";
  }

  var boolAttribute = function boolAttribute(name, values, labels) {
    if (labels === void 0) {
      labels = {};
    }

    var label = function label(txt) {
      return m('label', txt, {
        for: name + "-" + data.lastID
      }).outerHTML;
    };

    var cbAttrs = {
      type: 'checkbox',
      className: "fld-" + name,
      name: name,
      id: name + "-" + data.lastID
    };

    if (values[name]) {
      cbAttrs.checked = true;
    }

    var left = [];
    var right = [m('input', null, cbAttrs).outerHTML];

    if (labels.first) {
      left.push(label(labels.first));
    }

    if (labels.second) {
      right.push(' ', label(labels.second));
    }

    if (labels.content) {
      right.push(labels.content);
    }

    right = m('div', right, {
      className: 'input-wrap'
    }).outerHTML;
    return m('div', left.concat(right), {
      className: "form-group " + name + "-wrap"
    }).outerHTML;
  };

  var btnStyles = function btnStyles(style) {
    var styleField = '';

    if (style === 'undefined') {
      style = 'default';
    }

    var styleLabel = "<label>" + i18n.style + "</label>";
    styleField += h.input({
      value: style || 'default',
      type: 'hidden',
      className: 'btn-style'
    }).outerHTML;
    styleField += '<div class="btn-group" role="group">';
    config["d" /* styles */].btn.forEach(function (btnStyle) {
      var classList = ['btn-xs', 'btn', "btn-" + btnStyle];

      if (style === btnStyle) {
        classList.push('selected');
      }

      var btn = m('button', mi18n_min_default.a.get("styles.btn." + btnStyle), {
        value: btnStyle,
        type: 'button',
        className: classList.join(' ')
      }).outerHTML;
      styleField += btn;
    });
    styleField += '</div>';
    styleField = m('div', [styleLabel, styleField], {
      className: 'form-group style-wrap'
    });
    return styleField.outerHTML;
  };

  var numberAttribute = function numberAttribute(attribute, values) {
    var classname = values.class,
        className = values.className,
        _values$min = values.min,
        min = _values$min === void 0 ? 0 : _values$min,
        max = values.max,
        step = values.step,
        value = values.value,
        attrs = form_builder_objectWithoutPropertiesLoose(values, ["class", "className", "min", "max", "step", "value"]);

    var attrVal = attrs[attribute] || value;
    var attrLabel = mi18n_min_default.a.get(attribute) || attribute;
    var placeholder = mi18n_min_default.a.get("placeholder." + attribute);
    var inputConfig = {
      type: 'number',
      value: attrVal,
      name: attribute,
      min: min,
      max: max,
      step: step,
      placeholder: placeholder,
      className: ("fld-" + attribute + " form-control " + (classname || className || '')).trim(),
      id: attribute + "-" + data.lastID
    };
    var numberAttribute = h.input(Object(utils["y" /* trimObj */])(inputConfig)).outerHTML;
    var inputWrap = "<div class=\"input-wrap\">" + numberAttribute + "</div>";
    var inputLabel = "<label for=\"" + inputConfig.id + "\">" + attrLabel + "</label>";
    return m('div', [inputLabel, inputWrap], {
      className: "form-group " + attribute + "-wrap"
    }).outerHTML;
  };

  var selectAttribute = function selectAttribute(attribute, values, optionData) {
    var selectOptions = optionData.map(function (option, i) {
      var optionAttrs = Object.assign({
        label: i18n.option + " " + i,
        value: undefined
      }, option);

      if (option.value === values[attribute]) {
        optionAttrs.selected = true;
      }

      optionAttrs = Object(utils["y" /* trimObj */])(optionAttrs);
      return m('option', optionAttrs.label, optionAttrs);
    });
    var selectAttrs = {
      id: attribute + '-' + data.lastID,
      name: attribute,
      className: "fld-" + attribute + " form-control"
    };
    var labelText = mi18n_min_default.a.get(attribute) || Object(utils["d" /* capitalize */])(attribute) || '';
    var label = m('label', labelText, {
      for: selectAttrs.id
    });
    var select = m('select', selectOptions, selectAttrs);
    var inputWrap = m('div', select, {
      className: 'input-wrap'
    });
    var attrWrap = m('div', [label, inputWrap], {
      className: "form-group " + selectAttrs.name + "-wrap"
    });
    return attrWrap.outerHTML;
  };

  var textAttribute = function textAttribute(attribute, values, isHidden) {
    if (isHidden === void 0) {
      isHidden = false;
    }

    var textArea = ['paragraph'];
    var attrVal = values[attribute] || '';
    var attrLabel = mi18n_min_default.a.get(attribute);

    if (attribute === 'label') {
      if (textArea.includes(values.type)) {
        attrLabel = mi18n_min_default.a.get('content');
      } else {
        attrVal = Object(utils["t" /* parsedHtml */])(attrVal);
      }
    }

    var placeholder = mi18n_min_default.a.get("placeholders." + attribute) || '';
    var attributefield = '';
    var noMakeAttr = [];

    if (!noMakeAttr.some(function (elem) {
      return elem === true;
    })) {
      var inputConfig = {
        name: attribute,
        placeholder: placeholder,
        className: "fld-" + attribute + " form-control",
        id: attribute + "-" + data.lastID
      };
      var attributeLabel = m('label', attrLabel, {
        for: inputConfig.id
      }).outerHTML;

      if (attribute === 'label' && !opts.disableHTMLLabels) {
        inputConfig.contenteditable = true;
        attributefield += m('div', attrVal, inputConfig).outerHTML;
      } else {
        inputConfig.value = attrVal;
        inputConfig.type = 'text';
        attributefield += "<input " + Object(utils["b" /* attrString */])(inputConfig) + ">";
      }

      var inputWrap = "<div class=\"input-wrap\">" + attributefield + "</div>";
      var visibility = isHidden ? 'none' : 'block';

      if (attribute === 'value') {
        visibility = values.subtype && values.subtype === 'quill' && 'none';
      }

      attributefield = m('div', [attributeLabel, inputWrap], {
        className: "form-group " + attribute + "-wrap",
        style: "display: " + visibility
      });
    }

    return attributefield.outerHTML;
  };

  var requiredField = function requiredField(fieldData) {
    var type = fieldData.type;
    var noRequire = ['header', 'paragraph', 'button'];
    var noMake = [];
    var requireField = '';

    if (noRequire.includes(type)) {
      noMake.push(true);
    }

    if (!noMake.some(function (elem) {
      return elem === true;
    })) {
      requireField = boolAttribute('required', fieldData, {
        first: mi18n_min_default.a.get('required')
      });
    }

    return requireField;
  };

  var appendNewField = function appendNewField(values, isNew) {
    if (isNew === void 0) {
      isNew = true;
    }

    var type = values.type || 'text';
    var label = values.label || (isNew ? i18n.get(type) || mi18n_min_default.a.get('label') : '');
    var disabledFieldButtons = opts.disabledFieldButtons[type] || values.disabledFieldButtons;
    var fieldButtons = [m('a', null, {
      type: 'remove',
      id: 'del_' + data.lastID,
      className: 'del-button btn icon-cancel delete-confirm',
      title: mi18n_min_default.a.get('removeMessage')
    }), m('a', null, {
      type: 'edit',
      id: data.lastID + '-edit',
      className: 'toggle-form btn icon-pencil',
      title: mi18n_min_default.a.get('hide')
    }), m('a', null, {
      type: 'copy',
      id: data.lastID + '-copy',
      className: 'copy-button btn icon-copy',
      title: mi18n_min_default.a.get('copyButtonTooltip')
    })];

    if (disabledFieldButtons && Array.isArray(disabledFieldButtons)) {
      fieldButtons = fieldButtons.filter(function (btnData) {
        return !disabledFieldButtons.includes(btnData.type);
      });
    }

    var liContents = [m('div', fieldButtons, {
      className: 'field-actions'
    })];
    liContents.push(m('label', Object(utils["t" /* parsedHtml */])(label), {
      className: 'field-label'
    }));
    liContents.push(m('span', ' *', {
      className: 'required-asterisk',
      style: values.required ? 'display:inline' : ''
    }));
    var descAttrs = {
      className: 'tooltip-element',
      tooltip: values.description,
      style: values.description ? 'display:inline-block' : 'display:none'
    };
    liContents.push(m('span', '?', descAttrs));
    liContents.push(m('div', '', {
      className: 'prev-holder'
    }));
    var formElements = m('div', [advFields(values), m('a', mi18n_min_default.a.get('close'), {
      className: 'close-field'
    })], {
      className: 'form-elements'
    });
    var editPanel = m('div', formElements, {
      id: data.lastID + "-holder",
      className: 'frm-holder',
      dataFieldId: data.lastID
    });
    formBuilder.currentEditPanel = editPanel;
    liContents.push(editPanel);
    var field = m('li', liContents, {
      class: type + "-field form-field",
      type: type,
      id: data.lastID
    });
    var $li = $(field);
    $li.data('fieldData', {
      attrs: values
    });

    if (typeof h.stopIndex !== 'undefined') {
      $('> li', d.stage).eq(h.stopIndex).before($li);
    } else {
      $stage.append($li);
    }

    $('.sortable-options', $li).sortable({
      update: function update() {
        return h.updatePreview($li);
      }
    });
    h.updatePreview($li);

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
      opts.typeUserEvents[type].onadd(field);
    }

    if (isNew) {
      if (opts.editOnAdd) {
        h.closeAllEdit();
        h.toggleEdit(data.lastID, false);
      }

      if (field.scrollIntoView && opts.scrollToFieldOnAdd) {
        field.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }

    data.lastID = h.incrementId(data.lastID);
  };

  var selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
    var optionInputType = {
      selected: multipleSelect ? 'checkbox' : 'radio'
    };
    var optionDataOrder = ['value', 'label', 'selected'];
    var optionInputs = [];
    var optionTemplate = {
      selected: false,
      label: '',
      value: ''
    };
    optionData = Object.assign(optionTemplate, optionData);

    for (var _i = optionDataOrder.length - 1; _i >= 0; _i--) {
      var prop = optionDataOrder[_i];

      if (optionData.hasOwnProperty(prop)) {
        var attrs = {
          type: optionInputType[prop] || 'text',
          className: 'option-' + prop,
          value: optionData[prop],
          name: name + '-option'
        };
        attrs.placeholder = mi18n_min_default.a.get("placeholder." + prop) || '';

        if (prop === 'selected' && optionData.selected === true) {
          attrs.checked = optionData.selected;
        }

        optionInputs.push(m('input', null, attrs));
      }
    }

    var removeAttrs = {
      className: 'remove btn icon-cancel',
      title: mi18n_min_default.a.get('removeMessage')
    };
    optionInputs.push(m('a', null, removeAttrs));
    return m('li', optionInputs).outerHTML;
  };

  var cloneItem = function cloneItem(currentItem) {
    var currentId = currentItem.attr('id');
    var type = currentItem.attr('type');
    var ts = new Date().getTime();
    var cloneName = type + '-' + ts;
    var $clone = currentItem.clone();
    $('.fld-name', $clone).val(cloneName);
    $clone.find('[id]').each(function (i, elem) {
      elem.id = elem.id.replace(currentId, data.lastID);
    });
    $clone.find('[for]').each(function (index, elem) {
      var curId = elem.getAttribute('for');
      var newForId = curId.replace(currentId, data.lastID);
      elem.setAttribute('for', newForId);
    });
    $clone.attr('id', data.lastID);
    $clone.attr('name', cloneName);
    $clone.addClass('cloned');
    $('.sortable-options', $clone).sortable();

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
      opts.typeUserEvents[type].onclone($clone[0]);
    }

    data.lastID = h.incrementId(data.lastID);
    return $clone;
  };

  var saveAndUpdate = function saveAndUpdate(evt) {
    if (evt) {
      var isDisabled = [function (_ref3) {
        var type = _ref3.type,
            target = _ref3.target;
        return type === 'keyup' && target.name === 'className';
      }].some(function (typeCondition) {
        return typeCondition(evt);
      });

      if (isDisabled) {
        return false;
      }

      h.updatePreview($(evt.target).closest('.form-field'));
      h.save.call(h);
    }
  };

  var previewSelectors = ['.form-elements input', '.form-elements select', '.form-elements textarea'].join(', ');
  $stage.on('change blur keyup click', previewSelectors, throttle_default()(saveAndUpdate, DEFAULT_TIMEOUT, {
    leading: false
  }));
  $stage.on('click touchstart', '.remove', function (e) {
    var $field = $(e.target).parents('.form-field:eq(0)');
    var field = $field[0];
    var type = field.getAttribute('type');
    var $option = $(e.target.parentElement);
    e.preventDefault();
    var options = field.querySelector('.sortable-options');
    var optionsCount = options.childNodes.length;

    if (optionsCount <= 2 && !type.includes('checkbox')) {
      opts.notify.error('Error: ' + mi18n_min_default.a.get('minOptionMessage'));
    } else {
      $option.slideUp('250', function () {
        $option.remove();
        h.updatePreview($field);
        h.save.call(h);
      });
    }
  });
  $stage.on('touchstart', 'input', function (e) {
    var $input = $(_this);

    if (e.handled !== true) {
      if ($input.attr('type') === 'checkbox') {
        $input.trigger('click');
      } else {
        $input.focus();
        var fieldVal = $input.val();
        $input.val(fieldVal);
      }
    } else {
      return false;
    }
  });
  $stage.on('click touchstart', '.toggle-form, .close-field', function (e) {
    e.stopPropagation();
    e.preventDefault();

    if (e.handled !== true) {
      var targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
      h.toggleEdit(targetID);
      e.handled = true;
    } else {
      return false;
    }
  });
  $stage.on('dblclick', 'li.form-field', function (e) {
    if (['select', 'input', 'label'].includes(e.target.tagName.toLowerCase()) || e.target.contentEditable === 'true') {
      return;
    }

    e.stopPropagation();
    e.preventDefault();

    if (e.handled !== true) {
      var targetID = e.target.tagName == 'li' ? $(e.target).attr('id') : $(e.target).closest('li.form-field').attr('id');
      h.toggleEdit(targetID);
      e.handled = true;
    }
  });
  $stage.on('change', '[name="subtype"]', function (e) {
    var $field = $(e.target).closest('li.form-field');
    var $valWrap = $('.value-wrap', $field);
    $valWrap.toggle(e.target.value !== 'quill');
  });
  var stageOnChangeSelectors = ['.prev-holder input', '.prev-holder select', '.prev-holder textarea'];
  $stage.on('change', stageOnChangeSelectors.join(', '), function (e) {
    var prevOptions;

    if (e.target.classList.contains('other-option')) {
      return;
    }

    var field = Object(utils["e" /* closest */])(e.target, '.form-field');
    var optionTypes = ['select', 'checkbox-group', 'radio-group'];

    if (optionTypes.includes(field.type)) {
      var options = field.getElementsByClassName('option-value');

      if (field.type === 'select') {
        Object(utils["i" /* forEach */])(options, function (i) {
          var selectedOption = options[i].parentElement.childNodes[0];
          selectedOption.checked = e.target.value === options[i].value;
        });
      } else {
        prevOptions = document.getElementsByName(e.target.name);
        Object(utils["i" /* forEach */])(prevOptions, function (i) {
          var selectedOption = options[i].parentElement.childNodes[0];
          selectedOption.checked = prevOptions[i].checked;
        });
      }
    } else {
      var fieldVal = document.getElementById('value-' + field.id);

      if (fieldVal) {
        fieldVal.value = e.target.value;
      }
    }

    h.save.call(h);
  });
  Object(utils["a" /* addEventListeners */])(d.stage, 'keyup change', function (_ref4) {
    var target = _ref4.target;
    if (!target.classList.contains('fld-label')) return;
    var value = target.value || target.innerHTML;
    var label = Object(utils["e" /* closest */])(target, '.form-field').querySelector('.field-label');
    label.innerHTML = Object(utils["t" /* parsedHtml */])(value);
  });
  $stage.on('keyup', 'input.error', function (_ref5) {
    var target = _ref5.target;
    return $(target).removeClass('error');
  });
  $stage.on('keyup', 'input[name="description"]', function (e) {
    var $field = $(e.target).parents('.form-field:eq(0)');
    var closestToolTip = $('.tooltip-element', $field);
    var ttVal = $(e.target).val();

    if (ttVal !== '') {
      if (!closestToolTip.length) {
        var tt = "<span class=\"tooltip-element\" tooltip=\"" + ttVal + "\">?</span>";
        $('.field-label', $field).after(tt);
      } else {
        closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block');
      }
    } else {
      if (closestToolTip.length) {
        closestToolTip.css('display', 'none');
      }
    }
  });
  $stage.on('change', '.fld-multiple', function (e) {
    var newType = e.target.checked ? 'checkbox' : 'radio';
    var $options = $('.option-selected', $(e.target).closest('.form-elements'));
    $options.each(function (i) {
      return $options[i].type = newType;
    });
    return newType;
  });
  $stage.on('blur', 'input.fld-name', function (e) {
    e.target.value = Object(utils["w" /* safename */])(e.target.value);

    if (e.target.value === '') {
      $(e.target).addClass('field-error').attr('placeholder', mi18n_min_default.a.get('cannotBeEmpty'));
    } else {
      $(e.target).removeClass('field-error');
    }
  });
  $stage.on('blur', 'input.fld-maxlength', function (e) {
    e.target.value = Object(utils["j" /* forceNumber */])(e.target.value);
  });
  $stage.on('click touchstart', '.icon-copy', function (e) {
    e.preventDefault();
    var currentItem = $(e.target).parent().parent('li');
    var $clone = cloneItem(currentItem);
    $clone.insertAfter(currentItem);
    h.updatePreview($clone);
    h.save.call(h);
  });
  $stage.on('click touchstart', '.delete-confirm', function (e) {
    e.preventDefault();
    var buttonPosition = e.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12
    };
    var deleteID = $(e.target).parents('.form-field:eq(0)').attr('id');
    var $field = $(document.getElementById(deleteID));
    document.addEventListener('modalClosed', function () {
      $field.removeClass('deleting');
    }, false);

    if (opts.fieldRemoveWarn) {
      var warnH3 = m('h3', mi18n_min_default.a.get('warning'));
      var warnMessage = m('p', mi18n_min_default.a.get('fieldRemoveWarning'));
      h.confirm([warnH3, warnMessage], function () {
        return h.removeField(deleteID);
      }, coords);
      $field.addClass('deleting');
    } else {
      h.removeField(deleteID);
    }
  });
  $stage.on('click', '.style-wrap button', function (e) {
    var $button = $(e.target);
    var $attrsWrap = $button.closest('.form-elements');
    var styleVal = $button.val();
    var $btnStyle = $('.btn-style', $attrsWrap);
    $btnStyle.val(styleVal);
    $button.siblings('.btn').removeClass('selected');
    $button.addClass('selected');
    h.updatePreview($btnStyle.closest('.form-field'));
    h.save();
  });
  $stage.on('click', '.fld-required', function (e) {
    $(e.target).closest('.form-field').find('.required-asterisk').toggle();
  });
  $stage.on('click', 'input.fld-access', function (e) {
    var roles = $(e.target).closest('.form-field').find('.available-roles');
    var enableRolesCB = $(e.target);
    roles.slideToggle(250, function () {
      if (!enableRolesCB.is(':checked')) {
        $('input[type=checkbox]', roles).removeAttr('checked');
      }
    });
  });
  $stage.on('click', '.add-opt', function (e) {
    e.preventDefault();
    var $optionWrap = $(e.target).closest('.field-options');
    var $multiple = $('[name="multiple"]', $optionWrap);
    var $firstOption = $('.option-selected:eq(0)', $optionWrap);
    var isMultiple = false;

    if ($multiple.length) {
      isMultiple = $multiple.prop('checked');
    } else {
      isMultiple = $firstOption.attr('type') === 'checkbox';
    }

    var name = $firstOption.attr('name').replace(/-option$/, '');
    $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
  });
  $stage.on('mouseover mouseout', '.remove, .del-button', function (e) {
    return $(e.target).closest('li').toggleClass('delete');
  });
  loadFields();

  if (opts.disableInjectedStyle) {
    var styleTags = document.getElementsByClassName('formBuilder-injected-style');
    Object(utils["i" /* forEach */])(styleTags, function (i) {
      return Object(dom["f" /* remove */])(styleTags[i]);
    });
  }

  document.dispatchEvent(js_events["a" /* default */].loaded);
  formBuilder.actions = {
    getFieldTypes: function getFieldTypes(activeOnly) {
      return activeOnly ? Object(utils["x" /* subtract */])(controls.getRegistered(), opts.disableFields) : controls.getRegistered();
    },
    clearFields: function clearFields(animate) {
      return h.removeAllFields(d.stage, animate);
    },
    showData: h.showData.bind(h),
    save: h.save.bind(h),
    addField: function addField(field, index) {
      h.stopIndex = data.formData.length ? index : undefined;
      prepFieldVars(field);
    },
    removeField: h.removeField.bind(h),
    getData: h.getFormData.bind(h),
    setData: function setData(formData) {
      h.stopIndex = undefined;
      h.removeAllFields(d.stage, false);
      loadFields(formData);
    },
    setLang: function setLang(locale) {
      mi18n_min_default.a.setCurrent.call(mi18n_min_default.a, locale).then(function () {
        d.stage.dataset.content = mi18n_min_default.a.get('getStarted');
        controls.init();
        d.empty(d.formActions);
        h.formActionButtons().forEach(function (button) {
          return d.formActions.appendChild(button);
        });
      });
    },
    toggleFieldEdit: function toggleFieldEdit(fieldId) {
      var fieldIds = Array.isArray(fieldId) ? fieldId : [fieldId];
      fieldIds.forEach(function (fId) {
        if (!['number', 'string'].includes(typeof fId)) {
          return;
        }

        if (typeof fId === 'number') {
          fId = d.stage.children[fId].id;
        } else if (!/^frmb-/.test(fId)) {
          fId = d.stage.querySelector(fId).id;
        }

        h.toggleEdit(fId);
      });
    },
    toggleAllFieldEdit: function toggleAllFieldEdit() {
      Object(utils["i" /* forEach */])(d.stage.children, function (index) {
        h.toggleEdit(d.stage.children[index].id);
      });
    },
    closeAllFieldEdit: h.closeAllEdit.bind(h)
  };
  d.onRender(d.controls, function () {
    setTimeout(function () {
      d.stage.style.minHeight = d.controls.clientHeight + "px";

      if (opts.stickyControls.enable) {
        h.stickyControls($stage);
      }
    }, 0);
  });
  return formBuilder;
};

var methods = {
  init: function init(options, elems) {
    var _jQuery$extend = jQuery.extend({}, config["c" /* defaultOptions */], options, true),
        i18n = _jQuery$extend.i18n,
        opts = form_builder_objectWithoutPropertiesLoose(_jQuery$extend, ["i18n"]);

    config["a" /* config */].opts = opts;
    var i18nOpts = jQuery.extend({}, config["b" /* defaultI18n */], i18n, true);
    methods.instance = {
      actions: {
        getFieldTypes: null,
        addField: null,
        clearFields: null,
        closeAllFieldEdit: null,
        getData: null,
        removeField: null,
        save: null,
        setData: null,
        setLang: null,
        showData: null,
        toggleAllFieldEdit: null,
        toggleFieldEdit: null
      },

      get formData() {
        return methods.instance.actions.getData && methods.instance.actions.getData('json');
      },

      promise: new Promise(function (resolve, reject) {
        mi18n_min_default.a.init(i18nOpts).then(function () {
          elems.each(function (i) {
            var formBuilder = new form_builder_FormBuilder(opts, elems[i], jQuery);
            jQuery(elems[i]).data('formBuilder', formBuilder);
            Object.assign(methods, formBuilder.actions);
            methods.instance.actions = formBuilder.actions;
          });
          delete methods.instance.promise;
          resolve(methods.instance);
        }).catch(function (err) {
          reject(err);
          opts.notify.error(err);
        });
      })
    };
    return methods.instance;
  }
};

jQuery.fn.formBuilder = function (methodOrOptions) {
  if (methodOrOptions === void 0) {
    methodOrOptions = {};
  }

  if (methods[methodOrOptions]) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return methods[methodOrOptions].apply(this, args);
  } else {
    var instance = methods.init(methodOrOptions, this);
    Object.assign(methods, instance);
    return instance;
  }
};

/***/ })
/******/ ]);
})(jQuery);