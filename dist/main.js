/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/actions/settings.js":
/*!*********************************!*\
  !*** ./app/actions/settings.js ***!
  \*********************************/
/*! exports provided: addTableItem, removeTableItem, changeItemValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTableItem\", function() { return addTableItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTableItem\", function() { return removeTableItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeItemValue\", function() { return changeItemValue; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./app/actions/types.js\");\n\nfunction addTableItem(sectionIndex, itemIndex) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TABLE_ITEM\"],\n    sectionIndex: sectionIndex,\n    itemIndex: itemIndex\n  };\n}\nfunction removeTableItem(sectionIndex, itemIndex, rowIndex) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_TABLE_ITEM\"],\n    sectionIndex: sectionIndex,\n    itemIndex: itemIndex,\n    rowIndex: rowIndex\n  };\n}\nfunction changeItemValue(sectionIndex, itemIndex, rowIndex, tdIndex, newValue, itemType) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_ITEM_VALUE\"],\n    sectionIndex: sectionIndex,\n    itemIndex: itemIndex,\n    rowIndex: rowIndex,\n    tdIndex: tdIndex,\n    newValue: newValue,\n    itemType: itemType\n  };\n}\n\n//# sourceURL=webpack:///./app/actions/settings.js?");

/***/ }),

/***/ "./app/actions/types.js":
/*!******************************!*\
  !*** ./app/actions/types.js ***!
  \******************************/
/*! exports provided: ADD_TABLE_ITEM, REMOVE_TABLE_ITEM, CHANGE_ITEM_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TABLE_ITEM\", function() { return ADD_TABLE_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_TABLE_ITEM\", function() { return REMOVE_TABLE_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_ITEM_VALUE\", function() { return CHANGE_ITEM_VALUE; });\nvar ADD_TABLE_ITEM = 'ADD_TABLE_ITEM';\nvar REMOVE_TABLE_ITEM = 'REMOVE_TABLE_ITEM';\nvar CHANGE_ITEM_VALUE = 'CHANGE_ITEM_VALUE';\n\n//# sourceURL=webpack:///./app/actions/types.js?");

/***/ }),

/***/ "./app/components/Preview.js":
/*!***********************************!*\
  !*** ./app/components/Preview.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Preview = function Preview(props) {\n  var translations = props.translations,\n      data = props.data;\n\n  var generateOutput = function generateOutput(state) {\n    var outputText = '';\n    var globalState = JSON.parse(JSON.stringify(state));\n    globalState.map(function (section) {\n      if (section.type === 'tag') {\n        outputText += section.title.length > 0 ? section.title + \"\\n\" : '';\n      } else {\n        section.tableItems.map(function (tableItem) {\n          // table header\n          if (tableItem.headers) {\n            var headerText = '';\n            tableItem.headers.map(function (header) {\n              headerText += header.wrapper ? \"\" + header.wrapper + header.title + \"|\" : header.title;\n            }); // add empty line before the headers if provided in config\n\n            (tableItem.blankLine === 'before' || tableItem.blankLine === 'both') && (outputText += '\\n'); // append header into output\n\n            outputText += \"|\" + headerText + \"|\\n\";\n          } // table items\n\n\n          if (tableItem.items) {\n            tableItem.items.map(function (item) {\n              if (tableItem.indexItems !== undefined) {\n                item[tableItem.indexItems] = \"|\" + item[tableItem.indexItems];\n              }\n\n              outputText += \"|\" + item.join(' | ') + \"|\\n\";\n            });\n          } // add empty line after the output if provided in config\n\n\n          (tableItem.blankLine === 'after' || tableItem.blankLine === 'both') && (outputText += '\\n');\n        });\n      }\n    });\n    return outputText;\n  };\n\n  var output = generateOutput(data);\n\n  var copyToClipboard = function copyToClipboard() {\n    if (output.length > 0) {\n      var textField = document.createElement('textarea');\n      textField.textContent = output;\n      document.body.appendChild(textField);\n      textField.select();\n      document.execCommand('copy');\n      textField.remove();\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"preview-container\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"h2\", null, translations.preview), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"textarea\", {\n    readOnly: true,\n    value: output\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    onClick: copyToClipboard\n  }, translations.clipboardCopy));\n};\n\nPreview.propTypes = {\n  translations: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Preview);\n\n//# sourceURL=webpack:///./app/components/Preview.js?");

/***/ }),

/***/ "./app/components/Sections.js":
/*!************************************!*\
  !*** ./app/components/Sections.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Table */ \"./app/components/Table.js\");\n/* harmony import */ var components_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Tag */ \"./app/components/Tag.js\");\n\n\n\n\n\n\nvar Sections = function Sections(props) {\n  var sections = props.sections;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"section-container\"\n  }, sections.map(function (section, index) {\n    var sectionTemplate = section.type === 'table' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: index,\n      sectionIndex: index,\n      config: section\n    }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: index,\n      sectionIndex: index,\n      config: section\n    });\n    return sectionTemplate;\n  }));\n};\n\nSections.propTypes = {\n  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sections);\n\n//# sourceURL=webpack:///./app/components/Sections.js?");

/***/ }),

/***/ "./app/components/Table.js":
/*!*********************************!*\
  !*** ./app/components/Table.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_TableItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TableItem */ \"./app/components/TableItem.js\");\n\n\n\n\n\nvar Table = function Table(props) {\n  var config = props.config,\n      sectionIndex = props.sectionIndex;\n  return config.tableItems && config.tableItems.map(function (singleItem, index) {\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_TableItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: index,\n      sectionIndex: sectionIndex,\n      itemIndex: index,\n      data: singleItem\n    });\n  });\n};\n\nTable.propTypes = {\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  sectionIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,\n  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n//# sourceURL=webpack:///./app/components/Table.js?");

/***/ }),

/***/ "./app/components/TableItem.js":
/*!*************************************!*\
  !*** ./app/components/TableItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ \"./node_modules/core-js/modules/es.array.fill.js\");\n/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var actions_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/settings */ \"./app/actions/settings.js\");\n/* harmony import */ var constants_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/index.js */ \"./app/constants/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar TableItem = function TableItem(props) {\n  var data = props.data;\n\n  var addTableItemEvent = function addTableItemEvent() {\n    var sectionIndex = props.sectionIndex,\n        itemIndex = props.itemIndex;\n    props.dispatch(Object(actions_settings__WEBPACK_IMPORTED_MODULE_7__[\"addTableItem\"])(sectionIndex, itemIndex));\n  };\n\n  var removeTableItemEvent = function removeTableItemEvent(e) {\n    var sectionIndex = props.sectionIndex,\n        itemIndex = props.itemIndex;\n    var trkey = e.currentTarget.dataset.trkey;\n\n    if (trkey !== undefined) {\n      props.dispatch(Object(actions_settings__WEBPACK_IMPORTED_MODULE_7__[\"removeTableItem\"])(sectionIndex, itemIndex, trkey));\n    }\n  };\n\n  var handleItemChangeEvent = function handleItemChangeEvent(e) {\n    var sectionIndex = props.sectionIndex,\n        itemIndex = props.itemIndex;\n    var _e$currentTarget$data = e.currentTarget.dataset,\n        trkey = _e$currentTarget$data.trkey,\n        tdkey = _e$currentTarget$data.tdkey,\n        type = _e$currentTarget$data.type;\n    props.dispatch(Object(actions_settings__WEBPACK_IMPORTED_MODULE_7__[\"changeItemValue\"])(sectionIndex, itemIndex, trkey, tdkey, e.currentTarget.value, type));\n  }; // create blank item if nothing is prefilled in config\n\n\n  if (data.items && data.items.length === 0) {\n    var arr = new Array(data.headers.length).fill('', 0, data.headers.length);\n    data.indexItems !== undefined && (arr[data.indexItems] = '1');\n    data.items.push(arr);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"table\", {\n    className: \"confluenceTable\"\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"tbody\", null, data.headers && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"tr\", null, data.headers.map(function (headerItem, trIndex) {\n    return headerItem.editable ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"td\", {\n      key: trIndex,\n      className: \"confluenceTd\"\n    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"textarea\", {\n      \"data-type\": \"header\",\n      \"data-trkey\": trIndex,\n      onChange: handleItemChangeEvent,\n      value: headerItem.title\n    })) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"th\", {\n      key: trIndex,\n      className: \"confluenceTh\"\n    }, headerItem.title);\n  })), data.items && data.items.map(function (trItem, trIndex) {\n    var addClass = ['confluenceTd', 'remove-item'];\n    trIndex === 0 && addClass.push('disabled-btn');\n    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"tr\", {\n      key: trIndex,\n      className: \"confluenceTr\"\n    }, trItem.map(function (tdItem, tdIndex) {\n      return data.indexItems !== undefined && data.indexItems === tdIndex ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"th\", {\n        className: \"confluenceTh\",\n        key: tdIndex\n      }, trIndex + 1) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"td\", {\n        className: \"confluenceTd\",\n        key: tdIndex\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"textarea\", {\n        \"data-type\": \"item\",\n        \"data-trkey\": trIndex,\n        \"data-tdkey\": tdIndex,\n        onChange: handleItemChangeEvent,\n        value: tdItem\n      }));\n    }), data.addItems && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"td\", {\n      className: addClass.join(' '),\n      \"data-trkey\": trIndex,\n      onClick: trIndex > 0 ? removeTableItemEvent : null\n    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", null, \"x\")));\n  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"tfoot\", null, data.addItems && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"th\", {\n    scope: \"row\",\n    colSpan: data.headers.length + 1\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n    onClick: addTableItemEvent\n  }, constants_index_js__WEBPACK_IMPORTED_MODULE_8__[\"translations\"].addNewItem)))));\n};\n\nTableItem.propTypes = {\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,\n  sectionIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,\n  itemIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return Object.assign({}, state);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps)(TableItem));\n\n//# sourceURL=webpack:///./app/components/TableItem.js?");

/***/ }),

/***/ "./app/components/Tag.js":
/*!*******************************!*\
  !*** ./app/components/Tag.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var actions_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/settings */ \"./app/actions/settings.js\");\n\n\n\n\n\n\nvar Tag = function Tag(props) {\n  var title = props.config.title;\n\n  var handleItemChange = function handleItemChange(e) {\n    var sectionIndex = props.sectionIndex;\n    var type = e.currentTarget.dataset.type;\n    props.dispatch(Object(actions_settings__WEBPACK_IMPORTED_MODULE_4__[\"changeItemValue\"])(sectionIndex, null, null, null, e.currentTarget.value, type));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"tag-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"textarea\", {\n    onChange: handleItemChange,\n    value: title,\n    \"data-type\": \"tag\"\n  }));\n};\n\nTag.propTypes = {\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  sectionIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,\n  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return Object.assign({}, state);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(Tag));\n\n//# sourceURL=webpack:///./app/components/Tag.js?");

/***/ }),

/***/ "./app/constants/index.js":
/*!********************************!*\
  !*** ./app/constants/index.js ***!
  \********************************/
/*! exports provided: translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translations\", function() { return translations; });\nvar translations = {\n  preview: 'Preview',\n  addNewItem: 'Add another item',\n  missingConfig: 'Missing config file',\n  clipboardCopy: 'Copy to clipboard'\n};\n\n//# sourceURL=webpack:///./app/constants/index.js?");

/***/ }),

/***/ "./app/containers/Main.js":
/*!********************************!*\
  !*** ./app/containers/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var components_Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Sections */ \"./app/components/Sections.js\");\n/* harmony import */ var components_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Preview */ \"./app/components/Preview.js\");\n/* harmony import */ var constants_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/index.js */ \"./app/constants/index.js\");\n\n\n\n\n\n\n\n\nvar Main = function Main(props) {\n  var sections = props.settings.sections;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"main-container\"\n  }, sections ? [react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Sections__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    key: \"section\",\n    sections: sections\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Preview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    key: \"preview\",\n    data: sections,\n    translations: constants_index_js__WEBPACK_IMPORTED_MODULE_6__[\"translations\"]\n  })] : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h1\", null, constants_index_js__WEBPACK_IMPORTED_MODULE_6__[\"translations\"].missingConfig));\n};\n\nMain.propTypes = {\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return Object.assign({}, state);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(Main));\n\n//# sourceURL=webpack:///./app/containers/Main.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var containers_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/Main */ \"./app/containers/Main.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/configureStore */ \"./app/store/configureStore.js\");\n\n\n\n\n\nvar store = Object(store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"configureStore\"])();\nvar mainElem = document.getElementById('app');\n\nif (mainElem) {\n  Object(react_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(containers_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), document.getElementById('app'));\n}\n\nif (false) {}\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/reducers/index.js":
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ \"./app/reducers/settings.js\");\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  settings: _settings_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./app/reducers/index.js?");

/***/ }),

/***/ "./app/reducers/settings.js":
/*!**********************************!*\
  !*** ./app/reducers/settings.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return settings; });\n/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ \"./node_modules/core-js/modules/es.array.fill.js\");\n/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var actions_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/types */ \"./app/actions/types.js\");\n\n\n\n\n\nvar clone = function clone(item) {\n  return JSON.parse(JSON.stringify(item));\n};\n\nvar templateConfig = window.templateConfig || {};\nvar initState = Object.assign({}, templateConfig);\n\nfunction addTableItem(state, sectionIndex, itemIndex) {\n  var newState = clone(state);\n  var config = newState.sections[sectionIndex].tableItems[itemIndex];\n  var emptyArray = new Array(config.headers.length).fill('');\n\n  if (config.indexItems !== undefined) {\n    emptyArray[config.indexItems] = config.items.length + 1;\n  }\n\n  newState.sections[sectionIndex].tableItems[itemIndex].items.push(emptyArray);\n  return newState;\n}\n\nfunction removeTableItem(state, sectionIndex, itemIndex, rowIndex) {\n  var newState = clone(state);\n  newState.sections[sectionIndex].tableItems[itemIndex].items.splice(rowIndex, 1);\n  return newState;\n}\n\nfunction changeItemValue(state, sectionIndex, itemIndex, trIndex, tdIndex, newValue, itemType) {\n  var newState = clone(state);\n\n  if (itemType === 'item') {\n    newState.sections[sectionIndex].tableItems[itemIndex].items[trIndex][tdIndex] = newValue;\n  } else if (itemType === 'tag') {\n    newState.sections[sectionIndex].title = newValue;\n  } else {\n    newState.sections[sectionIndex].tableItems[itemIndex].headers[trIndex].title = newValue;\n  }\n\n  return newState;\n}\n\nfunction settings(state, action) {\n  if (state === void 0) {\n    state = initState;\n  }\n\n  switch (action.type) {\n    case actions_types__WEBPACK_IMPORTED_MODULE_3__[\"ADD_TABLE_ITEM\"]:\n      return addTableItem(state, action.sectionIndex, action.itemIndex);\n\n    case actions_types__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_TABLE_ITEM\"]:\n      return removeTableItem(state, action.sectionIndex, action.itemIndex, action.rowIndex);\n\n    case actions_types__WEBPACK_IMPORTED_MODULE_3__[\"CHANGE_ITEM_VALUE\"]:\n      return changeItemValue(state, action.sectionIndex, action.itemIndex, action.rowIndex, action.tdIndex, action.newValue, action.itemType);\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./app/reducers/settings.js?");

/***/ }),

/***/ "./app/store/configureStore.js":
/*!*************************************!*\
  !*** ./app/store/configureStore.js ***!
  \*************************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configureStore\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers */ \"./app/reducers/index.js\");\n\n\nfunction configureStore() {\n  var shouldDisplayReduxDispatch =  true ? true : undefined;\n  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n    features: {\n      dispatch: shouldDisplayReduxDispatch\n    }\n  }) : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], composeEnhancers());\n\n  if (false) {}\n\n  return store;\n}\n\n//# sourceURL=webpack:///./app/store/configureStore.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Tomek\\Desktop\\Development\\projects\\private\\Github\\jira-tables\\app\\index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/index.js?");

/***/ })

/******/ });