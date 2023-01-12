/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4284:
/***/ ((module) => {

module.exports = {
  'freeServersOverloaded': {
    'id': 'E00EBlb0QLWco_fr6-XRSg',
    //'event': 'next12hVpnOnAfterFirstProxyOnClick',
    'taskNumber': 330,
    // 990
    'type': 'event'
  },
  'missingLocationLink': {
    'id': 'DWeBbv86SGeGNI1ybCjN7g',
    'taskNumber': 243,
    'type': 'event',
    'event': 'onboarding.install'
  },
  'pollBanner': {
    'id': 'HMjiQzYTS3C2C6cBKhU3kw',
    'event': 'onboarding.install',
    'taskNumber': 254,
    // 928
    'type': 'event'
  },
  'premiumComparisonOnFirstPopup': {
    'id': 'RbZW13_0RoebnWwdw-4EoQ',
    'event': 'onboarding.install',
    'taskNumber': 262,
    // 879
    'type': 'event'
  },
  'premiumOverlayOnPopupOpen': {
    'id': 'Ei89c9qLRLeTZiCbZTieRw',
    'event': 'onboarding.install',
    'taskNumber': 252,
    // 882
    'type': 'event'
  },
  'promoTabNewBehaviour': {
    'id': 'XKpOnhmgR--fHmjGtLStTw',
    'event': 'onboarding.install',
    'taskNumber': 340,
    // 1039
    'type': 'event'
  },
  'promotionPageAfterInstall': {
    'id': 'F7-JutvlRxyTa7TXyce1hg',
    'event': 'onboarding.install',
    'taskNumber': 284,
    // 892
    'type': 'event'
  }
};

/***/ }),

/***/ 4019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const experiments = __webpack_require__(4284);

module.exports = {
  'type': 'production',
  'name': {
    'chrome': '__MSG_extension_name_chrome__',
    'edge': 'Browsec VPN - Free VPN for Edge',
    'firefox': 'Browsec VPN - Free VPN for Firefox',
    'opera': 'Browsec VPN - Free VPN for Opera'
  },
  'shortName': 'Browsec VPN',
  'description': {
    'chrome': '__MSG_extension_description_chrome__',
    'edge': 'Browsec VPN is an Edge VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'firefox': 'Browsec VPN is a Firefox VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'opera': 'Browsec VPN is an Opera VPN extension that protects your IP from Internet threats and lets you browse privately for free.'
  },
  'apiServerUrls': ['https://browsec.com/api/', 'https://d1txd51bpvmkj5.cloudfront.net/', 'https://dore8igm8amd.cloudfront.net/', 'https://d3w3aupyw9w4vz.cloudfront.net/'],
  'baseUrl': 'https://browsec.com',
  'ga': {
    'enabled': true,
    'extension_id': ['omghfjlpggmjjaagoclmmobgdodcjboh', 'dknfpcdpbkjijldegonllfnnfhabjpde', '05908b89-695d-4687-aa36-6d87f42a464d' // NOTE temporary
    ],
    'tracking_id': 'UA-43024042-1',
    'chance': 0.01,
    'fullTrackingId': 'UA-43024042-3'
  },
  'auth': {
    // When disabled, users can't login/register
    'enabled': true
  },
  'proxy': {
    'defaultCountry': 'nl'
  },
  experiments
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);


const _browser = typeof browser !== 'undefined' ? browser : chrome;

self.addEventListener('message', event => {
  const sourceDomain = (() => {
    try {
      return new URL(event.origin).origin;
    } catch (e) {}
  })();

  if (!sourceDomain) return;
  const targetDomain = new URL((config__WEBPACK_IMPORTED_MODULE_0___default().baseUrl)).origin;
  if (sourceDomain !== targetDomain) return;

  _browser.runtime.sendMessage(event.data);
});
})();

/******/ })()
;