(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["retinable"] = factory();
	else
		root["retinable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	var retinaCheck;

	var matchMedia = (function(doc, undefined){
	    if (window.matchMedia) {
	        return function(q) {
	            return window.matchMedia.call(window, q);
	        };
	    }
	    var bool,
	        docElem  = doc.documentElement,
	        refNode  = docElem.firstElementChild || docElem.firstChild,
	        // fakeBody required for <FF4 when executed in <head>
	        fakeBody = doc.createElement('body'),
	        div      = doc.createElement('div');

	    div.id = 'mq-test-1';
	    div.style.cssText = "position:absolute;top:-100em";
	    fakeBody.appendChild(div);

	    return function(q){
	        div.innerHTML = '_<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';
	        docElem.insertBefore(fakeBody, refNode);
	        div.removeChild(div.firstChild);
	        bool = div.offsetWidth == 42;
	        docElem.removeChild(fakeBody);
	        return { matches: bool, media: q };
	    };
	})(document);

	function retinable() {
	    if ( typeof retinaCheck != "undefined" ) {
	        return retinaCheck;
	    }

	    // http://stackoverflow.com/questions/11412022/modernizr-pixel-ratio-media-query

	    // for opera
	    var ratio = '2.99/2';
	    // for webkit
	    var num = '1.499';
	    var mqs = [
	        'only screen and (-o-min-device-pixel-ratio:' + ratio + ')',
	        'only screen and (min--moz-device-pixel-ratio:' + num + ')',
	        'only screen and (-webkit-min-device-pixel-ratio:' + num + ')',
	        'only screen and (min-device-pixel-ratio:' + num + ')'
	    ];
	    retinaCheck = false;

	    // loop through vendors, checking non-prefixed first
	    for (var i = mqs.length - 1; i >= 0; i--) {
	        retinaCheck = matchMedia( mqs[i] ).matches;
	        // if found one, return early
	        if ( retinaCheck ) {
	            return retinaCheck;
	        }
	    }
	    // not highres
	    retinaCheck = false;
	    return retinaCheck;
	};

	retinable.suffix = function() {
	    if (retinable()) {
	        return "@2x";
	    }
	    return "";
	};

	module.exports = retinable



/***/ })
/******/ ])
});
;