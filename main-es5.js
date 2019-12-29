function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n</style>\n\n<div>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/app-footer/app-footer.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/app-footer/app-footer.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsAppFooterAppFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"main-footer flex align-center justify-center\">\n    <h1>FOOTER</h1>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/app-header/app-header.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/app-header/app-header.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsAppHeaderAppHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"main-header flex space-between align-center wrap\">\n    <a routerLink=\"/\"><h1>Mr-BitCoin</h1></a>\n    <ul class=\"main-nav clean-list flex space-between align-center wrap\">\n        <li><a routerLinkActive=\"active\" routerLink=\"/contact\">Contacts</a></li> |\n        <li><a routerLinkActive=\"active\" routerLink=\"/signup\">Log-in</a></li>\n    </ul>\n</header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-filter/contact-filter.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-filter/contact-filter.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsContactFilterContactFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (submit)=\"submit($event)\">\n    <input (input)=\"setFilterby()\" name=\"search\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterBy.searchStr\"/>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-list/contact-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-list/contact-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsContactListContactListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"contact-list clean-list flex column\">\n    <li *ngFor=\"let contact of contacts\" class=\"flex wrap\">\n        <a routerLinkActive=\"active\" [routerLink]=\"'/contact/'+contact._id\">\n            <contact-preview [contact]=\"contact\"></contact-preview>\n        </a>\n        <div class=\"flex column space-between btn-container\">\n            <a routerLinkActive=\"active\" [routerLink]=\"'/contact/edit/'+contact._id\">Edit</a>\n            <button (click)=\"remove(contact._id)\">Remove</button>\n        </div>\n    </li>\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-preview/contact-preview.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-preview/contact-preview.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsContactPreviewContactPreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section ng-if=\"contact\" class=\"contact-preview flex align-center wrap\">\n    <img [src]=\"img\" alt=\"\"/>\n    <h3>Name: {{contact.name}}</h3>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/money-sender/money-sender.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/money-sender/money-sender.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsMoneySenderMoneySenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section *ngIf=\"contact && user\" class=\"money-sender flex column space-between\">\r\n    <h3>You have {{user.coins}}$</h3>\r\n    <h3>Send him some money?</h3>\r\n    <form (submit)=\"sendMoney($event)\">\r\n        <input name=\"amount\" type=\"number\" min=\"0\" max=\"contact.coins\" placeholder=\"Amount of money to send\" [(ngModel)]=\"amountOfMoneyToSend\"/>\r\n        <button>Send</button>\r\n    </form>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/move-list/move-list.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/move-list/move-list.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsMoveListMoveListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul *ngIf=\"moves\" class=\"clean-list flex column align-center justify-center move-list\">\r\n    <li *ngFor=\"let move of moves\" class=\"flex space-between flex-end\">\r\n        <move-preview [move]=\"move\"></move-preview>\r\n        <button (click)=\"undoMove(move)\">Un do</button>\r\n    </li>\r\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/move-preview/move-preview.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/move-preview/move-preview.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCmpsMovePreviewMovePreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section *ngIf=\"move\" class=\"move-preview flex column\">\r\n    <h3>From: {{move.from.name}}</h3>\r\n    <h3>To: {{move.to.name}}</h3>\r\n    <h3>Amount: {{move.amount}}</h3>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-details/contact-details.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-details/contact-details.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactDetailsContactDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main *ngIf=\"contact\" class=\"main-content contact-details flex column align-center\">\r\n    <section class=\"info\" class=\"flex wrap align-center space-around\">\r\n        <img [src]=\"img\" alt=\"\">\r\n        <div>\r\n            <h2>{{contact.name}}</h2>\r\n            <h3>Phone: {{contact.phone}}</h3>\r\n            <h3>Email: {{contact.email}}</h3>\r\n            <h3>Coins: {{contact.coins}}</h3>\r\n        </div>\r\n    </section>\r\n    <money-sender (moveAdded)=\"moveAdded($event)\" [contact]=\"contact\" [user]=\"user\"></money-sender>\r\n    <section *ngIf=\"moves.length\" class=\"flex column align-center\">\r\n        <h3>{{contact.name}}'s moves:</h3>\r\n        <move-list [moves]=\"moves\" (moveRemoved)=\"moveRemoved($event)\"></move-list>\r\n    </section>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-edit/contact-edit.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-edit/contact-edit.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactEditContactEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"main-content contact-edit flex align-center justify-center\">\n    <form *ngIf=\"contact\" (submit)=\"saveContact($event)\" class=\"basic-form\">\n        <input type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"contact.name\"/>\n        <input type=\"text\" placeholder=\"Phone\" name=\"phone\" [(ngModel)]=\"contact.phone\"/>\n        <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"contact.email\"/>\n        <button>Save</button>\n    </form>\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"main-content contact-page flex column align-center\">\n    <h2>Your Contants</h2>\n    <contact-filter (setFilter)=\"setFilter($event)\"></contact-filter>\n    <a routerLinkActive=\"active\" routerLink=\"/contact/edit/\">Add new contact</a>\n    <contact-list (removeContact)=\"removeContact($event)\" ng-if=\"contacts\" [contacts]=\"contactsToShow\"></contact-list>\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main *ngIf=\"user\" class=\"main-content flex column align-center\">\r\n    <section class=\"flex column\">\r\n        <h2>Hello, {{user.username}}</h2>\r\n        <h2>You have {{user.coins}} coins</h2>\r\n    </section>\r\n    <section *ngIf=\"moves.length\" class=\"flex column align-center\">\r\n        <h2>Your moves:</h2>\r\n        <move-list [moves]=\"moves\" (moveRemoved)=\"moveRemoved($event)\"></move-list>\r\n    </section>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupPageSignupPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"main-content flex align-center justify-center\">\n    <form (submit)=\"login($event)\" class=\"basic-form\">\n        <input type=\"text\" placeholder=\"username\" name=\"username\" [(ngModel)]=\"loginInfo.username\"/>\n        <input type=\"text\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"loginInfo.password\"/>\n        <button>Log in</button>\n    </form>\n</main>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
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

        while (_) {
          try {
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
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
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
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
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
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
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
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/contact-page/contact-page.component */
    "./src/app/pages/contact-page/contact-page.component.ts");
    /* harmony import */


    var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/contact-edit/contact-edit.component */
    "./src/app/pages/contact-edit/contact-edit.component.ts");
    /* harmony import */


    var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/contact-details/contact-details.component */
    "./src/app/pages/contact-details/contact-details.component.ts");
    /* harmony import */


    var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/signup-page/signup-page.component */
    "./src/app/pages/signup-page/signup-page.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: 'contact',
      component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"]
    }, {
      path: 'contact/edit/:_id',
      component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__["ContactEditComponent"]
    }, {
      path: 'contact/edit',
      component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_5__["ContactEditComponent"]
    }, {
      path: 'contact/:_id',
      component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_6__["ContactDetailsComponent"]
    }, {
      path: 'signup',
      component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Mr-BitCoin';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cmps/app-header/app-header.component */
    "./src/app/cmps/app-header/app-header.component.ts");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cmps/move-list/move-list.component */
    "./src/app/cmps/move-list/move-list.component.ts");
    /* harmony import */


    var _cmps_move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cmps/move-preview/move-preview.component */
    "./src/app/cmps/move-preview/move-preview.component.ts");
    /* harmony import */


    var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cmps/contact-list/contact-list.component */
    "./src/app/cmps/contact-list/contact-list.component.ts");
    /* harmony import */


    var _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./cmps/contact-preview/contact-preview.component */
    "./src/app/cmps/contact-preview/contact-preview.component.ts");
    /* harmony import */


    var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/contact-edit/contact-edit.component */
    "./src/app/pages/contact-edit/contact-edit.component.ts");
    /* harmony import */


    var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/contact-details/contact-details.component */
    "./src/app/pages/contact-details/contact-details.component.ts");
    /* harmony import */


    var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/signup-page/signup-page.component */
    "./src/app/pages/signup-page/signup-page.component.ts");
    /* harmony import */


    var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/contact-page/contact-page.component */
    "./src/app/pages/contact-page/contact-page.component.ts");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_move_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/move.service */
    "./src/app/services/move.service.ts");
    /* harmony import */


    var _cmps_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./cmps/app-footer/app-footer.component */
    "./src/app/cmps/app-footer/app-footer.component.ts");
    /* harmony import */


    var _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./cmps/contact-filter/contact-filter.component */
    "./src/app/cmps/contact-filter/contact-filter.component.ts");
    /* harmony import */


    var _cmps_money_sender_money_sender_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./cmps/money-sender/money-sender.component */
    "./src/app/cmps/money-sender/money-sender.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__["AppHeaderComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_9__["MoveListComponent"], _cmps_move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_10__["MovePreviewComponent"], _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_11__["ContactListComponent"], _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_12__["ContactPreviewComponent"], _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_13__["ContactEditComponent"], _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_14__["ContactDetailsComponent"], _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_15__["SignupPageComponent"], _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_16__["ContactPageComponent"], _cmps_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_20__["AppFooterComponent"], _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_21__["ContactFilterComponent"], _cmps_money_sender_money_sender_component__WEBPACK_IMPORTED_MODULE_22__["MoneySenderComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_17__["ContactService"], _services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _services_move_service__WEBPACK_IMPORTED_MODULE_19__["MoveService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cmps/app-footer/app-footer.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/cmps/app-footer/app-footer.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsAppFooterAppFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/cmps/app-footer/app-footer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/cmps/app-footer/app-footer.component.ts ***!
    \*********************************************************/

  /*! exports provided: AppFooterComponent */

  /***/
  function srcAppCmpsAppFooterAppFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
      return AppFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppFooterComponent =
    /*#__PURE__*/
    function () {
      function AppFooterComponent() {
        _classCallCheck(this, AppFooterComponent);
      }

      _createClass(AppFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppFooterComponent;
    }();

    AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/app-footer/app-footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-footer.component.scss */
      "./src/app/cmps/app-footer/app-footer.component.scss")).default]
    })], AppFooterComponent);
    /***/
  },

  /***/
  "./src/app/cmps/app-header/app-header.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/cmps/app-header/app-header.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsAppHeaderAppHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/cmps/app-header/app-header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/cmps/app-header/app-header.component.ts ***!
    \*********************************************************/

  /*! exports provided: AppHeaderComponent */

  /***/
  function srcAppCmpsAppHeaderAppHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () {
      return AppHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppHeaderComponent =
    /*#__PURE__*/
    function () {
      function AppHeaderComponent() {
        _classCallCheck(this, AppHeaderComponent);
      }

      _createClass(AppHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppHeaderComponent;
    }();

    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/app-header/app-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-header.component.scss */
      "./src/app/cmps/app-header/app-header.component.scss")).default]
    })], AppHeaderComponent);
    /***/
  },

  /***/
  "./src/app/cmps/contact-filter/contact-filter.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/cmps/contact-filter/contact-filter.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsContactFilterContactFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY29udGFjdC1maWx0ZXIvY29udGFjdC1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/cmps/contact-filter/contact-filter.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/cmps/contact-filter/contact-filter.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ContactFilterComponent */

  /***/
  function srcAppCmpsContactFilterContactFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFilterComponent", function () {
      return ContactFilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactFilterComponent =
    /*#__PURE__*/
    function () {
      function ContactFilterComponent() {
        _classCallCheck(this, ContactFilterComponent);

        this.setFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterBy = {
          searchStr: ''
        };
      }

      _createClass(ContactFilterComponent, [{
        key: "submit",
        value: function submit(event) {
          event.preventDefault();
        }
      }, {
        key: "setFilterby",
        value: function setFilterby() {
          this.setFilter.emit(JSON.parse(JSON.stringify(this.filterBy)));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactFilterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactFilterComponent.prototype, "setFilter", void 0);
    ContactFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'contact-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-filter/contact-filter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-filter.component.scss */
      "./src/app/cmps/contact-filter/contact-filter.component.scss")).default]
    })], ContactFilterComponent);
    /***/
  },

  /***/
  "./src/app/cmps/contact-list/contact-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/cmps/contact-list/contact-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsContactListContactListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cmps/contact-list/contact-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/cmps/contact-list/contact-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: ContactListComponent */

  /***/
  function srcAppCmpsContactListContactListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactListComponent", function () {
      return ContactListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { EventEmitter } from 'protractor';


    var ContactListComponent =
    /*#__PURE__*/
    function () {
      function ContactListComponent() {
        _classCallCheck(this, ContactListComponent);

        this.removeContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contacts = [];
      }

      _createClass(ContactListComponent, [{
        key: "remove",
        value: function remove(_id) {
          this.removeContact.emit(_id);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactListComponent.prototype, "removeContact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'contact-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-list/contact-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-list.component.scss */
      "./src/app/cmps/contact-list/contact-list.component.scss")).default]
    })], ContactListComponent);
    /***/
  },

  /***/
  "./src/app/cmps/contact-preview/contact-preview.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/cmps/contact-preview/contact-preview.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsContactPreviewContactPreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY29udGFjdC1wcmV2aWV3L2NvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cmps/contact-preview/contact-preview.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/cmps/contact-preview/contact-preview.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ContactPreviewComponent */

  /***/
  function srcAppCmpsContactPreviewContactPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function () {
      return ContactPreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactPreviewComponent =
    /*#__PURE__*/
    function () {
      function ContactPreviewComponent() {
        _classCallCheck(this, ContactPreviewComponent);

        this.contact = null;
      }

      _createClass(ContactPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "img",
        get: function get() {
          if (!this.contact) return '';
          return this.contact.img || "https://api.adorable.io/avatars/285/".concat(this.contact.name, ".png");
        }
      }]);

      return ContactPreviewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactPreviewComponent.prototype, "contact", void 0);
    ContactPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'contact-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-preview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/contact-preview/contact-preview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-preview.component.scss */
      "./src/app/cmps/contact-preview/contact-preview.component.scss")).default]
    })], ContactPreviewComponent);
    /***/
  },

  /***/
  "./src/app/cmps/money-sender/money-sender.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/cmps/money-sender/money-sender.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsMoneySenderMoneySenderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvbW9uZXktc2VuZGVyL21vbmV5LXNlbmRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cmps/money-sender/money-sender.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/cmps/money-sender/money-sender.component.ts ***!
    \*************************************************************/

  /*! exports provided: MoneySenderComponent */

  /***/
  function srcAppCmpsMoneySenderMoneySenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoneySenderComponent", function () {
      return MoneySenderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_move_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/move.service */
    "./src/app/services/move.service.ts");

    var MoneySenderComponent =
    /*#__PURE__*/
    function () {
      function MoneySenderComponent(userService, moveService) {
        _classCallCheck(this, MoneySenderComponent);

        this.userService = userService;
        this.moveService = moveService;
        this.amountOfMoneyToSend = 0;
        this.moveAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contact = null;
        this.user = null;
      }

      _createClass(MoneySenderComponent, [{
        key: "sendMoney",
        value: function sendMoney(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var newMove;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    ev.preventDefault();
                    _context.next = 3;
                    return this.moveService.sendMoney(this.user, this.contact, this.amountOfMoneyToSend);

                  case 3:
                    newMove = _context.sent;
                    this.amountOfMoneyToSend = 0;
                    this.moveAdded.emit(newMove);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoneySenderComponent;
    }();

    MoneySenderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_services_move_service__WEBPACK_IMPORTED_MODULE_3__["MoveService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MoneySenderComponent.prototype, "moveAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MoneySenderComponent.prototype, "contact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MoneySenderComponent.prototype, "user", void 0);
    MoneySenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'money-sender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./money-sender.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/money-sender/money-sender.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./money-sender.component.scss */
      "./src/app/cmps/money-sender/money-sender.component.scss")).default]
    })], MoneySenderComponent);
    /***/
  },

  /***/
  "./src/app/cmps/move-list/move-list.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/cmps/move-list/move-list.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsMoveListMoveListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvbW92ZS1saXN0L21vdmUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cmps/move-list/move-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/cmps/move-list/move-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: MoveListComponent */

  /***/
  function srcAppCmpsMoveListMoveListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveListComponent", function () {
      return MoveListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_move_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/move.service */
    "./src/app/services/move.service.ts");

    var MoveListComponent =
    /*#__PURE__*/
    function () {
      function MoveListComponent(moveService) {
        _classCallCheck(this, MoveListComponent);

        this.moveService = moveService;
        this.moves = [];
        this.moveRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MoveListComponent, [{
        key: "undoMove",
        value: function undoMove(move) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.moveService.unSendMoney(move);

                  case 2:
                    this.moveRemoved.emit(move._id);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoveListComponent;
    }();

    MoveListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_move_service__WEBPACK_IMPORTED_MODULE_2__["MoveService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MoveListComponent.prototype, "moves", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MoveListComponent.prototype, "moveRemoved", void 0);
    MoveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'move-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./move-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/move-list/move-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./move-list.component.scss */
      "./src/app/cmps/move-list/move-list.component.scss")).default]
    })], MoveListComponent);
    /***/
  },

  /***/
  "./src/app/cmps/move-preview/move-preview.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/cmps/move-preview/move-preview.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCmpsMovePreviewMovePreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvbW92ZS1wcmV2aWV3L21vdmUtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cmps/move-preview/move-preview.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/cmps/move-preview/move-preview.component.ts ***!
    \*************************************************************/

  /*! exports provided: MovePreviewComponent */

  /***/
  function srcAppCmpsMovePreviewMovePreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovePreviewComponent", function () {
      return MovePreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MovePreviewComponent =
    /*#__PURE__*/
    function () {
      function MovePreviewComponent() {
        _classCallCheck(this, MovePreviewComponent);

        this.move = null;
      }

      _createClass(MovePreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MovePreviewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovePreviewComponent.prototype, "move", void 0);
    MovePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'move-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./move-preview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cmps/move-preview/move-preview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./move-preview.component.scss */
      "./src/app/cmps/move-preview/move-preview.component.scss")).default]
    })], MovePreviewComponent);
    /***/
  },

  /***/
  "./src/app/pages/contact-details/contact-details.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/contact-details/contact-details.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactDetailsContactDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/contact-details/contact-details.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
    \********************************************************************/

  /*! exports provided: ContactDetailsComponent */

  /***/
  function srcAppPagesContactDetailsContactDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function () {
      return ContactDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_move_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/move.service */
    "./src/app/services/move.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var ContactDetailsComponent =
    /*#__PURE__*/
    function () {
      function ContactDetailsComponent(contactService, moveService, userService, activatedRoute) {
        _classCallCheck(this, ContactDetailsComponent);

        this.contactService = contactService;
        this.moveService = moveService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.contact = null;
        this.user = null;
        this.moves = [];
      }

      _createClass(ContactDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadUser();

                  case 2:
                    this.activatedRoute.params.subscribe(function (params) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log(params);
                                this.loadContact(params._id);

                              case 2:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "moveAdded",
        value: function moveAdded(move) {
          this.moves.unshift(move);
        }
      }, {
        key: "loadUser",
        value: function loadUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.userService.getLoggedUser();

                  case 2:
                    this.user = _context5.sent;

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadContact",
        value: function loadContact(_id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.contactService.get(_id);

                  case 2:
                    this.contact = _context6.sent;
                    _context6.next = 5;
                    return this.moveService.query({
                      contactId: _id
                    });

                  case 5:
                    this.moves = _context6.sent;

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "moveRemoved",
        value: function moveRemoved(_id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var idx;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    idx = this.moves.find(function (curr) {
                      return curr._id === _id;
                    });

                    if (!(idx === -1)) {
                      _context7.next = 3;
                      break;
                    }

                    return _context7.abrupt("return", new Error('something went wrong'));

                  case 3:
                    this.moves.splice(idx, 1);
                    _context7.next = 6;
                    return this.loadUser();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "img",
        get: function get() {
          if (!this.contact) return '';
          return this.contact.img || "https://api.adorable.io/avatars/285/".concat(this.contact.name, ".png");
        }
      }]);

      return ContactDetailsComponent;
    }();

    ContactDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }, {
        type: src_app_services_move_service__WEBPACK_IMPORTED_MODULE_4__["MoveService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-details/contact-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-details.component.scss */
      "./src/app/pages/contact-details/contact-details.component.scss")).default]
    })], ContactDetailsComponent);
    /***/
  },

  /***/
  "./src/app/pages/contact-edit/contact-edit.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/contact-edit/contact-edit.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactEditContactEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZWRpdC9jb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/contact-edit/contact-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/contact-edit/contact-edit.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContactEditComponent */

  /***/
  function srcAppPagesContactEditContactEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function () {
      return ContactEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactEditComponent =
    /*#__PURE__*/
    function () {
      function ContactEditComponent(contactService, activatedRoute, router) {
        _classCallCheck(this, ContactEditComponent);

        this.contactService = contactService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.contact = null;
      }

      _createClass(ContactEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.activatedRoute.params.subscribe(function (params) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee8() {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                console.log(params);
                                _context8.next = 3;
                                return this.contactService.get(params._id);

                              case 3:
                                this.contact = _context8.sent;

                              case 4:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "saveContact",
        value: function saveContact(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    ev.preventDefault();
                    _context10.next = 3;
                    return this.contactService.save(this.contact);

                  case 3:
                    this.router.navigate(['/contact']);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return ContactEditComponent;
    }();

    ContactEditComponent.ctorParameters = function () {
      return [{
        type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ContactEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-edit/contact-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-edit.component.scss */
      "./src/app/pages/contact-edit/contact-edit.component.scss")).default]
    })], ContactEditComponent);
    /***/
  },

  /***/
  "./src/app/pages/contact-page/contact-page.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/contact-page/contact-page.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactPageContactPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/contact-page/contact-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppPagesContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contact.service */
    "./src/app/services/contact.service.ts");

    var ContactPageComponent =
    /*#__PURE__*/
    function () {
      function ContactPageComponent(contactService) {
        _classCallCheck(this, ContactPageComponent);

        this.contactService = null;
        this.contacts = [];
        this.filterBy = {
          searchStr: ''
        };
        this.contactService = contactService;
      }

      _createClass(ContactPageComponent, [{
        key: "setFilter",
        value: function setFilter(filterBy) {
          this.filterBy = JSON.parse(JSON.stringify(filterBy));
        }
      }, {
        key: "removeContact",
        value: function removeContact(_id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var idx;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.contactService.remove(_id);

                  case 2:
                    idx = this.contacts.findIndex(function (curr) {
                      return curr._id === _id;
                    });

                    if (!(idx === -1)) {
                      _context11.next = 5;
                      break;
                    }

                    return _context11.abrupt("return", new Error('something went wrong'));

                  case 5:
                    this.contacts.splice(idx, 1);

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "loadContacts",
        value: function loadContacts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.contactService.query();

                  case 2:
                    this.contacts = _context12.sent;

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadContacts();
        }
      }, {
        key: "contactsToShow",
        get: function get() {
          var filter = this.filterBy;
          var contactsToShow = this.contacts.filter(function (curr) {
            for (var key in curr) {
              if (typeof curr[key] === 'string' && curr[key].toLowerCase().includes(filter.searchStr.toLowerCase())) {
                return true;
              }
            }

            return false;
          });
          return contactsToShow;
        }
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }];
    };

    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-page.component.scss */
      "./src/app/pages/contact-page/contact-page.component.scss")).default]
    })], ContactPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_move_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/move.service */
    "./src/app/services/move.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(userService, moveService, router) {
        _classCallCheck(this, HomePageComponent);

        this.userService = userService;
        this.moveService = moveService;
        this.router = router;
        this.user = null;
        this.moves = [];
      }

      _createClass(HomePageComponent, [{
        key: "loadUser",
        value: function loadUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.userService.getLoggedUser();

                  case 2:
                    this.user = _context13.sent;

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.loadUser();

                  case 2:
                    if (!this.user) this.router.navigate(['/signup']);
                    _context14.next = 5;
                    return this.moveService.query({
                      contactId: this.user._id
                    });

                  case 5:
                    this.moves = _context14.sent;

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "moveRemoved",
        value: function moveRemoved(_id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var idx;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    idx = this.moves.find(function (curr) {
                      return curr._id === _id;
                    });

                    if (!(idx === -1)) {
                      _context15.next = 3;
                      break;
                    }

                    return _context15.abrupt("return", new Error('something went wrong'));

                  case 3:
                    this.moves.splice(idx, 1);
                    _context15.next = 6;
                    return this.loadUser();

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_services_move_service__WEBPACK_IMPORTED_MODULE_3__["MoveService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/pages/home-page/home-page.component.scss")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/signup-page/signup-page.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupPageSignupPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/signup-page/signup-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
    \************************************************************/

  /*! exports provided: SignupPageComponent */

  /***/
  function srcAppPagesSignupPageSignupPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function () {
      return SignupPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupPageComponent =
    /*#__PURE__*/
    function () {
      function SignupPageComponent(userService, router) {
        _classCallCheck(this, SignupPageComponent);

        this.userService = userService;
        this.router = router;
        this.loginInfo = {
          username: '',
          password: ''
        };
      }

      _createClass(SignupPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var loginInfo;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    ev.preventDefault();
                    loginInfo = this.loginInfo;

                    if (!(!loginInfo.username || !loginInfo.password)) {
                      _context16.next = 4;
                      break;
                    }

                    return _context16.abrupt("return");

                  case 4:
                    _context16.next = 6;
                    return this.userService.login(loginInfo);

                  case 6:
                    this.router.navigate(['/']);

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }]);

      return SignupPageComponent;
    }();

    SignupPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup-page.component.scss */
      "./src/app/pages/signup-page/signup-page.component.scss")).default]
    })], SignupPageComponent);
    /***/
  },

  /***/
  "./src/app/services/contact.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/contact.service.ts ***!
    \*********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util.service */
    "./src/app/services/util.service.ts");

    var CONTACTS_KEY = 'contacts';
    var _someContacts = [{
      "_id": "5a56640269f443a5d64b32ca",
      "name": "Ochoa Hyde",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      coins: 100
    }, {
      "_id": "5a5664025f6ae9aa24a99fde",
      "name": "Hallie Mclean",
      "email": "halliemclean@renovize.com",
      "phone": "+1 (948) 464-2888",
      coins: 100
    }, {
      "_id": "5a56640252d6acddd183d319",
      "name": "Parsons Norris",
      "email": "parsonsnorris@renovize.com",
      "phone": "+1 (958) 502-3495",
      coins: 100
    }, {
      "_id": "5a566402ed1cf349f0b47b4d",
      "name": "Rachel Lowe",
      "email": "rachellowe@renovize.com",
      "phone": "+1 (911) 475-2312",
      coins: 100
    }, {
      "_id": "5a566402abce24c6bfe4699d",
      "name": "Dominique Soto",
      "email": "dominiquesoto@renovize.com",
      "phone": "+1 (807) 551-3258",
      coins: 100
    }, {
      "_id": "5a566402a6499c1d4da9220a",
      "name": "Shana Pope",
      "email": "shanapope@renovize.com",
      "phone": "+1 (970) 527-3082",
      coins: 100
    }, {
      "_id": "5a566402f90ae30e97f990db",
      "name": "Faulkner Flores",
      "email": "faulknerflores@renovize.com",
      "phone": "+1 (952) 501-2678",
      coins: 100
    }, {
      "_id": "5a5664027bae84ef280ffbdf",
      "name": "Holder Bean",
      "email": "holderbean@renovize.com",
      "phone": "+1 (989) 503-2663",
      coins: 100
    }, {
      "_id": "5a566402e3b846c5f6aec652",
      "name": "Rosanne Shelton",
      "email": "rosanneshelton@renovize.com",
      "phone": "+1 (968) 454-3851",
      coins: 100
    }, {
      "_id": "5a56640272c7dcdf59c3d411",
      "name": "Pamela Nolan",
      "email": "pamelanolan@renovize.com",
      "phone": "+1 (986) 545-2166",
      coins: 100
    }, {
      "_id": "5a5664029a8dd82a6178b15f",
      "name": "Roy Cantu",
      "email": "roycantu@renovize.com",
      "phone": "+1 (929) 571-2295",
      coins: 100
    }, {
      "_id": "5a5664028c096d08eeb13a8a",
      "name": "Ollie Christian",
      "email": "olliechristian@renovize.com",
      "phone": "+1 (977) 419-3550",
      coins: 100
    }, {
      "_id": "5a5664026c53582bb9ebe9d1",
      "name": "Nguyen Walls",
      "email": "nguyenwalls@renovize.com",
      "phone": "+1 (963) 471-3181",
      coins: 100
    }, {
      "_id": "5a56640298ab77236845b82b",
      "name": "Glenna Santana",
      "email": "glennasantana@renovize.com",
      "phone": "+1 (860) 467-2376",
      coins: 100
    }, {
      "_id": "5a56640208fba3e8ecb97305",
      "name": "Malone Clark",
      "email": "maloneclark@renovize.com",
      "phone": "+1 (818) 565-2557",
      coins: 100
    }, {
      "_id": "5a566402abb3146207bc4ec5",
      "name": "Floyd Rutledge",
      "email": "floydrutledge@renovize.com",
      "phone": "+1 (807) 597-3629",
      coins: 100
    }, {
      "_id": "5a56640298500fead8cb1ee5",
      "name": "Grace James",
      "email": "gracejames@renovize.com",
      "phone": "+1 (959) 525-2529",
      coins: 100
    }, {
      "_id": "5a56640243427b8f8445231e",
      "name": "Tanner Gates",
      "email": "tannergates@renovize.com",
      "phone": "+1 (978) 591-2291",
      coins: 100
    }, {
      "_id": "5a5664025c3abdad6f5e098c",
      "name": "Lilly Conner",
      "email": "lillyconner@renovize.com",
      "phone": "+1 (842) 587-3812",
      coins: 100
    }];

    var gContacts = function () {
      try {
        var contacts = _loadFromLocalStorage();

        if (!contacts) throw new Error();
        return contacts;
      } catch (err) {
        return _someContacts;
      }
    }();

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService() {
        _classCallCheck(this, ContactService);
      }

      _createClass(ContactService, [{
        key: "query",
        value: function query() {
          return Promise.resolve(gContacts);
        }
      }, {
        key: "get",
        value: function get(_id) {
          if (!_id) return Promise.resolve(_getNewContact());
          var contact = gContacts.find(function (contact) {
            return contact._id === _id;
          });
          if (contact) return Promise.resolve(contact);else return Promise.reject();
        }
      }, {
        key: "save",
        value: function save(contact) {
          if (contact._id) {
            var idx = gContacts.findIndex(function (curr) {
              return curr._id === contact._id;
            });

            if (idx !== -1) {
              gContacts.splice(idx, 1, contact);
            } else return Promise.reject();
          } else {
            contact._id = _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomId();
            gContacts.unshift(contact);
          }

          _saveToLocalStorage();

          return Promise.resolve(contact);
        }
      }, {
        key: "remove",
        value: function remove(_id) {
          var idx = gContacts.findIndex(function (curr) {
            return curr._id === _id;
          });

          if (idx !== -1) {
            gContacts.splice(idx, 1);

            _saveToLocalStorage();

            return Promise.resolve(_id);
          } else return Promise.reject();
        }
      }]);

      return ContactService;
    }();

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContactService);

    function _getNewContact() {
      return {
        name: '',
        email: '',
        phone: '',
        coins: 100
      };
    }

    function _loadFromLocalStorage() {
      return _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadFromLocalStorage(CONTACTS_KEY);
    }

    function _saveToLocalStorage() {
      return _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].saveToLocalStorage(CONTACTS_KEY, gContacts);
    }
    /***/

  },

  /***/
  "./src/app/services/move.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/move.service.ts ***!
    \******************************************/

  /*! exports provided: MoveService */

  /***/
  function srcAppServicesMoveServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveService", function () {
      return MoveService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact.service */
    "./src/app/services/contact.service.ts");

    var MOVES_KEY = 'moves';
    var _someMoves = [];

    var gMoves = function () {
      try {
        var moves = _loadFromLocalStorage();

        if (!moves) throw new Error();
        return moves;
      } catch (err) {
        return _someMoves;
      }
    }();

    var MoveService =
    /*#__PURE__*/
    function () {
      function MoveService(userService, contactService) {
        _classCallCheck(this, MoveService);

        this.userService = userService;
        this.contactService = contactService;
      }

      _createClass(MoveService, [{
        key: "query",
        value: function query() {
          var filterBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var moves = _toConsumableArray(gMoves);

          if (filterBy.contactId) {
            moves = moves.filter(function (curr) {
              return curr.from._id === filterBy.contactId || curr.to._id === filterBy.contactId;
            });
          }

          return Promise.resolve(moves);
        }
      }, {
        key: "get",
        value: function get(_id) {
          if (!_id) return Promise.resolve(_getNewMove());
          var move = gMoves.find(function (move) {
            return move._id === _id;
          });
          if (move) return Promise.resolve(move);else return Promise.reject();
        }
      }, {
        key: "save",
        value: function save(move) {
          if (move._id) {
            var idx = gMoves.findIndex(function (curr) {
              return curr._id === move._id;
            });

            if (idx !== -1) {
              gMoves.splice(idx, 1, move);
            } else return Promise.reject();
          } else {
            move._id = _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomId();
            gMoves.unshift(move);
          }

          _saveToLocalStorage();

          return Promise.resolve(move);
        }
      }, {
        key: "remove",
        value: function remove(_id) {
          var idx = gMoves.findIndex(function (curr) {
            return curr._id === _id;
          });

          if (idx !== -1) {
            gMoves.splice(idx, 1);

            _saveToLocalStorage();

            return Promise.resolve(_id);
          } else return Promise.reject();
        }
      }, {
        key: "sendMoney",
        value: function sendMoney(fromUser, toUser, amount) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var move;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    move = _getNewMove();
                    move.from = {
                      name: fromUser.username,
                      _id: fromUser._id
                    };
                    move.to = {
                      name: toUser.name,
                      _id: toUser._id
                    };
                    move.amount = amount;
                    _context17.next = 6;
                    return this.save(move);

                  case 6:
                    fromUser.coins -= amount;
                    toUser.coins += amount;
                    _context17.next = 10;
                    return this.userService.save(fromUser);

                  case 10:
                    _context17.next = 12;
                    return this.contactService.save(toUser);

                  case 12:
                    return _context17.abrupt("return", move);

                  case 13:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "unSendMoney",
        value: function unSendMoney(move) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var fromUser, toUser;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    console.log('undoing..', move);
                    _context18.next = 3;
                    return this.userService.getLoggedUser();

                  case 3:
                    fromUser = _context18.sent;
                    _context18.next = 6;
                    return this.contactService.get(move.to._id);

                  case 6:
                    toUser = _context18.sent;
                    fromUser.coins += move.amount;
                    toUser.coins -= move.amount;
                    _context18.next = 11;
                    return this.userService.save(fromUser);

                  case 11:
                    _context18.next = 13;
                    return this.contactService.save(toUser);

                  case 13:
                    _context18.next = 15;
                    return this.remove(move._id);

                  case 15:
                    return _context18.abrupt("return", move);

                  case 16:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return MoveService;
    }();

    MoveService.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
      }];
    };

    MoveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MoveService);

    function _getNewMove() {
      return {
        from: null,
        to: null,
        amount: 0
      };
    }

    function _loadFromLocalStorage() {
      return _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadFromLocalStorage(MOVES_KEY);
    }

    function _saveToLocalStorage() {
      return _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].saveToLocalStorage(MOVES_KEY, gMoves);
    }
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util.service */
    "./src/app/services/util.service.ts");

    var USER_KEY = 'logged_user';

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService() {
        _classCallCheck(this, UserService);
      }

      _createClass(UserService, [{
        key: "getLoggedUser",
        value: function getLoggedUser() {
          return Promise.resolve(_loadFromStorgage());
        }
      }, {
        key: "login",
        value: function login(user) {
          user._id = _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomId();
          user.coins = 100;
          saveToStorage(user);
          return Promise.resolve(user);
        }
      }, {
        key: "save",
        value: function save(user) {
          saveToStorage(user);
          return Promise.resolve(user);
        }
      }]);

      return UserService;
    }();

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);

    function _loadFromStorgage() {
      return _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadFromLocalStorage(USER_KEY);
    }

    function saveToStorage(user) {
      return _util_service__WEBPACK_IMPORTED_MODULE_2__["default"].saveToLocalStorage(USER_KEY, user);
    }
    /***/

  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      getQuerysStr: getQuerysStr,
      saveToSessionStorage: saveToSessionStorage,
      loadFromSessionStorage: loadFromSessionStorage,
      clearSessionStorage: clearSessionStorage,
      saveToLocalStorage: saveToLocalStorage,
      loadFromLocalStorage: loadFromLocalStorage,
      clearLocalStorage: clearLocalStorage,
      getRandomId: getRandomId
    };

    function getQuerysStr() {
      var filterBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var queryStr = '?';

      for (var key in filterBy) {
        queryStr += "".concat(key, "=").concat(filterBy[key], "&");
      }

      return queryStr.slice(0, queryStr.length - 1);
    }

    function saveToSessionStorage(key, value) {
      sessionStorage[key] = JSON.stringify(value);
    }

    function loadFromSessionStorage(key) {
      var data = sessionStorage[key];
      if (!data) return false;
      return JSON.parse(sessionStorage[key]);
    }

    function clearSessionStorage() {
      sessionStorage.clear();
    }

    function saveToLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    function loadFromLocalStorage(key) {
      var data = JSON.parse(localStorage.getItem(key));
      if (data) return data;else return false;
    }

    function clearLocalStorage() {
      localStorage.clear();
    }

    function getRandomId() {
      var pt1 = Date.now().toString(16);
      var pt2 = getRandomInt(1000, 9999).toString(16);
      var pt3 = getRandomInt(1000, 9999).toString(16);
      return "".concat(pt3).concat(pt1).concat(pt2).toUpperCase();
    }

    function getRandomInt(num1, num2) {
      var maxNum = num1 > num2 ? num1 + 1 : num2 + 1;
      var minNum = num1 < num2 ? num1 : num2;
      var randomNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
      return randomNumber;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\מחשב\coding academy\course days and practice\angular-proj\Mr-BitCoin\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map