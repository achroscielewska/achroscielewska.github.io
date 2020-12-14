(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-main-container\">\r\n  <select class=\"App-lang-selector\" [(ngModel)]=\"selectedLanguage\" (change)=\"setUpLanguage($event.target.value)\">\r\n    <option *ngFor=\"let language of languagesDict\">{{language}}</option>\r\n  </select>\r\n  <app-personal-info></app-personal-info>\r\n  <app-carrer-summary></app-carrer-summary>\r\n  <div class=\"App-two-columns\">\r\n    <div>\r\n      <app-work-experience [workExperience]=\"workExperienceContent\"></app-work-experience>\r\n    </div>\r\n    <div>\r\n      <app-skills-and-tools [skillAndTools]=\"skillAndToolsContent\"></app-skills-and-tools>\r\n      <app-education [education]=\"educationContent\"></app-education>\r\n      <app-language [languages]=\"languagesContent\"></app-language>\r\n      <app-interests></app-interests>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/contact-with-img/contact-with-img.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/contact-with-img/contact-with-img.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-contact-with-img\">\r\n  <div class=\"App-contact-img\">\r\n    <img src=\"{{img}}\"/>\r\n  </div>\r\n  <div class=\"App-contact-text\"><a href=\"{{link}}\" target=\"_blank\">{{text}}</a></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/section-header/section-header.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/section-header/section-header.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"App-section-header\">{{sectionHeader}}</h3>\r\n<hr />\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/carrer-summary/carrer-summary.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/carrer-summary/carrer-summary.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-section-container\">\r\n  <app-section-header sectionHeader=\"{{'CarrerSummary.header' | translate}}\"></app-section-header>\r\n  <div>\r\n    <p>{{'CarrerSummary.content' | translate}}</p>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/education/education.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/education/education.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-section-container\">\r\n  <app-section-header sectionHeader=\"{{'Education.header' | translate}}\"></app-section-header>\r\n  <div>\r\n    <div *ngFor=\"let educationSet of education\">\r\n      <div class=\"App-education\">\r\n        <p><b>{{educationSet.field}}</b></p>\r\n        <p>{{educationSet.school}}</p>\r\n        <p>{{educationSet.period}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/interests/interests.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/interests/interests.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-section-container\">\r\n  <app-section-header sectionHeader=\"{{'Interests.header' | translate}}\"></app-section-header>\r\n  <div>\r\n    <p>{{'Interests.content' | translate}}</p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/language/language.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/language/language.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-section-container\">\r\n  <app-section-header sectionHeader=\"{{'Language.header' | translate}}\"></app-section-header>\r\n  <div>\r\n    <div *ngFor=\"let language of languages\">\r\n      <p class=\"App-language\"><b>{{language.language}}: </b>({{language.level}})</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/personal-info/personal-info.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/personal-info/personal-info.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-personal-info\">\r\n  <h2>{{'PersonalInfo.name' | translate}}</h2>\r\n  <div class=\"App-info\">\r\n    <div>\r\n      <h3>{{'PersonalInfo.position' | translate}}</h3>\r\n      <app-contact-with-img img=\"../../../../assets/icons/mail.png\" link=\"mailto:{{'PersonalInfo.mail' | translate}}\"\r\n        text=\"{{'PersonalInfo.mail' | translate}}\">\r\n      </app-contact-with-img>\r\n      <app-contact-with-img img=\"../../../../assets/icons/mobilePhone.png\"\r\n        link=\"tel:{{'PersonalInfo.phone' | translate}}\" text=\"{{'PersonalInfo.phoneToDisplay' | translate}}\">\r\n      </app-contact-with-img>\r\n    </div>\r\n    <div>\r\n      <app-contact-with-img img=\"../../../../assets/icons/linkedin.png\" link=\"{{'PersonalInfo.linkedin' | translate}}\"\r\n        text=\"{{'PersonalInfo.linkedin' | translate}}\">\r\n      </app-contact-with-img>\r\n      <app-contact-with-img img=\"../../../../assets/icons/github.png\" link=\"{{'PersonalInfo.github' | translate}}\"\r\n        text=\"{{'PersonalInfo.github' | translate}}\">\r\n      </app-contact-with-img>\r\n      <app-contact-with-img img=\"../../../../assets/icons/web.png\" link=\"{{'PersonalInfo.web' | translate}}\"\r\n        text=\"{{'PersonalInfo.web' | translate}}\">\r\n      </app-contact-with-img>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/skills-and-tools/skills-and-tools.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/skills-and-tools/skills-and-tools.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-section-container\">\r\n  <app-section-header sectionHeader=\"{{'SkillsAndTools.header' | translate}}\"></app-section-header>\r\n  <div class=\"App-skills\">\r\n    <p class=\"App-skills-header\"><b>{{'SkillsAndTools.content.frontendSkills.header' | translate}}</b></p>\r\n    <div *ngFor=\"let skill of skillAndTools.frontendSkills.content\">\r\n      <p>{{skill.skill}}</p>\r\n      <div class=\"App-skill-container\">\r\n        <div class=\"App-skill-base\"></div>\r\n      <div class=\"App-skill-level\" [style.width]=\"skill.level\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"App-skills\">\r\n    <p class=\"App-skills-header\"><b>{{'SkillsAndTools.content.others.header' | translate}}</b></p>\r\n    <p>{{skillAndTools.others.content}}</p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/work-experience/work-experience.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/work-experience/work-experience.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"App-section-container\">\r\n  <app-section-header sectionHeader=\"{{'WorkExperience.header' | translate}}\"></app-section-header>\r\n  <div *ngFor=\"let work of workExperience\">\r\n    <p class=\"App-company-name\"><b>{{work.company}}</b></p>\r\n    <p class=\"App-work-period\">{{work.period}}</p>\r\n    <div *ngFor=\"let project of work.projects\">\r\n      <div class=\"App-project\">\r\n        <p class=\"App-project-role\"><b>{{project.role}}</b></p>\r\n        <p class=\"App-work-period\">{{project.period}}</p>\r\n        <p>{{project.company}}</p>\r\n        <p class=\"App-project-area\">{{project.area}}</p>\r\n        <p><b>{{'WorkExperience.technologiesUsed' | translate}}</b>:</p>\r\n        <div class=\"App-technologies\">\r\n          <div *ngFor=\"let technology of project.technologiesUsed\">\r\n            <div class=\"App-bage\"><p>{{technology}}</p></div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-lang-selector {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 5px;\n  font-size: 0.8rem;\n  border-radius: 4px;\n}\n\n@media (min-width: 992px) {\n  .App-two-columns {\n    display: -webkit-box;\n    display: flex;\n  }\n  .App-two-columns div:first-child {\n    width: 70%;\n  }\n  .App-two-columns div:last-child {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXF9QUk9KRUtUWVxcY3YtYW5ndWxhclxcbXktY3Yvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FET0E7RUFDRTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtFQ0pGO0VES0U7SUFDRSxVQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7RUNISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2Fzc2V0cy9jb25maWcvYnJlYWtwb2ludHNcIjtcclxuXHJcbi5BcHAtbGFuZy1zZWxlY3RvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJG1kKSB7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGcpIHtcclxuICAuQXBwLXR3by1jb2x1bW5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICR4bCkge1xyXG59XHJcbiIsIi5BcHAtbGFuZy1zZWxlY3RvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLkFwcC10d28tY29sdW1ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuQXBwLXR3by1jb2x1bW5zIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuQXBwLXR3by1jb2x1bW5zIGRpdjpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/translation-loader.service */ "./src/app/services/translation-loader.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");





let AppComponent = class AppComponent {
    constructor(translate, translationLoader, languageService) {
        this.translate = translate;
        this.translationLoader = translationLoader;
        this.languageService = languageService;
    }
    ngOnInit() {
        this.languagesDict = this.languageService.getAvailableLanguages();
        this.setUpLanguage('en');
    }
    setUpLanguage(language) {
        this.selectedLanguage = language;
        this.translate.use(language);
        this.content = this.translationLoader.loadTranslations(language);
        this.languagesContent = this.content.Language.content;
        this.educationContent = this.content.Education.content;
        this.skillAndToolsContent = this.content.SkillsAndTools.content;
        this.workExperienceContent = this.content.WorkExperience.content;
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _services_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
    { type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _services_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/translation-loader.service */ "./src/app/services/translation-loader.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sections */ "./src/app/components/sections/index.ts");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common */ "./src/app/components/common/index.ts");
/* harmony import */ var _components_sections_language_language_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sections/language/language.component */ "./src/app/components/sections/language/language.component.ts");
/* harmony import */ var _components_sections_education_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sections/education/education.component */ "./src/app/components/sections/education/education.component.ts");
/* harmony import */ var _components_sections_skills_and_tools_skills_and_tools_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sections/skills-and-tools/skills-and-tools.component */ "./src/app/components/sections/skills-and-tools/skills-and-tools.component.ts");
/* harmony import */ var _components_sections_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sections/work-experience/work-experience.component */ "./src/app/components/sections/work-experience/work-experience.component.ts");
/* harmony import */ var _components_sections_carrer_summary_carrer_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sections/carrer-summary/carrer-summary.component */ "./src/app/components/sections/carrer-summary/carrer-summary.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_sections__WEBPACK_IMPORTED_MODULE_8__["PersonalInfoComponent"],
            _components_common__WEBPACK_IMPORTED_MODULE_9__["ContactWithImgComponent"],
            _components_sections__WEBPACK_IMPORTED_MODULE_8__["InterestsComponent"],
            _components_common__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"],
            _components_sections_language_language_component__WEBPACK_IMPORTED_MODULE_10__["LanguageComponent"],
            _components_sections_education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
            _components_sections_skills_and_tools_skills_and_tools_component__WEBPACK_IMPORTED_MODULE_12__["SkillsAndToolsComponent"],
            _components_sections_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_13__["WorkExperienceComponent"],
            _components_sections_carrer_summary_carrer_summary_component__WEBPACK_IMPORTED_MODULE_14__["CarrerSummaryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot()
        ],
        providers: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
            _services_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__["TranslationLoaderService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/common/contact-with-img/contact-with-img.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/common/contact-with-img/contact-with-img.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-contact-with-img {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 5px;\n}\n\n.App-contact-img {\n  width: 30%;\n  text-align: right;\n}\n\n.App-contact-img img {\n  width: 18px;\n}\n\n.App-contact-text {\n  width: 70%;\n  text-align: left;\n  line-height: 18px;\n  padding-left: 5px;\n}\n\n@media (min-width: 768px) {\n  .App-contact-img {\n    width: 50%;\n  }\n}\n\n@media (min-width: 992px) {\n  .App-contact-img {\n    width: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vY29udGFjdC13aXRoLWltZy9DOlxcX1BST0pFS1RZXFxjdi1hbmd1bGFyXFxteS1jdi9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tbW9uXFxjb250YWN0LXdpdGgtaW1nXFxjb250YWN0LXdpdGgtaW1nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9jb250YWN0LXdpdGgtaW1nL2NvbnRhY3Qtd2l0aC1pbWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDREY7O0FERUU7RUFDRSxXQUFBO0FDQUo7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLFVBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxZQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2NvbnRhY3Qtd2l0aC1pbWcvY29udGFjdC13aXRoLWltZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvYnJlYWtwb2ludHMnO1xyXG5cclxuLkFwcC1jb250YWN0LXdpdGgtaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5BcHAtY29udGFjdC1pbWcge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLkFwcC1jb250YWN0LXRleHQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICRtZCkge1xyXG4gIC5BcHAtY29udGFjdC1pbWcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGcpIHtcclxuICAuQXBwLWNvbnRhY3QtaW1nIHtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkeGwpIHtcclxufVxyXG5cclxuXHJcbiIsIi5BcHAtY29udGFjdC13aXRoLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5BcHAtY29udGFjdC1pbWcge1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5BcHAtY29udGFjdC1pbWcgaW1nIHtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5BcHAtY29udGFjdC10ZXh0IHtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLkFwcC1jb250YWN0LWltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5BcHAtY29udGFjdC1pbWcge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/common/contact-with-img/contact-with-img.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/contact-with-img/contact-with-img.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ContactWithImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactWithImgComponent", function() { return ContactWithImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactWithImgComponent = class ContactWithImgComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactWithImgComponent.prototype, "img", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactWithImgComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactWithImgComponent.prototype, "text", void 0);
ContactWithImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-with-img',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-with-img.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/contact-with-img/contact-with-img.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-with-img.component.scss */ "./src/app/components/common/contact-with-img/contact-with-img.component.scss")).default]
    })
], ContactWithImgComponent);



/***/ }),

/***/ "./src/app/components/common/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/common/index.ts ***!
  \********************************************/
/*! exports provided: ContactWithImgComponent, SectionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _contact_with_img_contact_with_img_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-with-img/contact-with-img.component */ "./src/app/components/common/contact-with-img/contact-with-img.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactWithImgComponent", function() { return _contact_with_img_contact_with_img_component__WEBPACK_IMPORTED_MODULE_1__["ContactWithImgComponent"]; });

/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-header/section-header.component */ "./src/app/components/common/section-header/section-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function() { return _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__["SectionHeaderComponent"]; });






/***/ }),

/***/ "./src/app/components/common/section-header/section-header.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/section-header/section-header.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-section-header {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2VjdGlvbi1oZWFkZXIvQzpcXF9QUk9KRUtUWVxcY3YtYW5ndWxhclxcbXktY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcc2VjdGlvbi1oZWFkZXJcXHNlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BcHAtc2VjdGlvbi1oZWFkZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIiwiLkFwcC1zZWN0aW9uLWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/common/section-header/section-header.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/section-header/section-header.component.ts ***!
  \******************************************************************************/
/*! exports provided: SectionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function() { return SectionHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionHeaderComponent = class SectionHeaderComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionHeaderComponent.prototype, "sectionHeader", void 0);
SectionHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/section-header/section-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-header.component.scss */ "./src/app/components/common/section-header/section-header.component.scss")).default]
    })
], SectionHeaderComponent);



/***/ }),

/***/ "./src/app/components/sections/carrer-summary/carrer-summary.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sections/carrer-summary/carrer-summary.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FycmVyLXN1bW1hcnkvY2FycmVyLXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sections/carrer-summary/carrer-summary.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/sections/carrer-summary/carrer-summary.component.ts ***!
  \********************************************************************************/
/*! exports provided: CarrerSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrerSummaryComponent", function() { return CarrerSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarrerSummaryComponent = class CarrerSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarrerSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrer-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carrer-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/carrer-summary/carrer-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carrer-summary.component.scss */ "./src/app/components/sections/carrer-summary/carrer-summary.component.scss")).default]
    })
], CarrerSummaryComponent);



/***/ }),

/***/ "./src/app/components/sections/education/education.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/sections/education/education.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-education {\n  padding-top: 5px;\n}\n.App-education p:first-child {\n  padding-bottom: 3px;\n}\n.App-education p:last-child {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9lZHVjYXRpb24vQzpcXF9QUk9KRUtUWVxcY3YtYW5ndWxhclxcbXktY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxlZHVjYXRpb25cXGVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFwcC1lZHVjYXRpb24ge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIH07XHJcbiAgcDpsYXN0LWNoaWxkIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbn1cclxuIiwiLkFwcC1lZHVjYXRpb24ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLkFwcC1lZHVjYXRpb24gcDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG4uQXBwLWVkdWNhdGlvbiBwOmxhc3QtY2hpbGQge1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sections/education/education.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/education/education.component.ts ***!
  \**********************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EducationComponent.prototype, "education", void 0);
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/components/sections/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/components/sections/index.ts":
/*!**********************************************!*\
  !*** ./src/app/components/sections/index.ts ***!
  \**********************************************/
/*! exports provided: LanguageComponent, EducationComponent, SkillsAndToolsComponent, WorkExperienceComponent, CarrerSummaryComponent, PersonalInfoComponent, InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-info/personal-info.component */ "./src/app/components/sections/personal-info/personal-info.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_1__["PersonalInfoComponent"]; });

/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/components/sections/interests/interests.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return _interests_interests_component__WEBPACK_IMPORTED_MODULE_2__["InterestsComponent"]; });

/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/language.component */ "./src/app/components/sections/language/language.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return _language_language_component__WEBPACK_IMPORTED_MODULE_3__["LanguageComponent"]; });

/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/components/sections/education/education.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"]; });

/* harmony import */ var _skills_and_tools_skills_and_tools_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-and-tools/skills-and-tools.component */ "./src/app/components/sections/skills-and-tools/skills-and-tools.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkillsAndToolsComponent", function() { return _skills_and_tools_skills_and_tools_component__WEBPACK_IMPORTED_MODULE_5__["SkillsAndToolsComponent"]; });

/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-experience/work-experience.component */ "./src/app/components/sections/work-experience/work-experience.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__["WorkExperienceComponent"]; });

/* harmony import */ var _carrer_summary_carrer_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrer-summary/carrer-summary.component */ "./src/app/components/sections/carrer-summary/carrer-summary.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarrerSummaryComponent", function() { return _carrer_summary_carrer_summary_component__WEBPACK_IMPORTED_MODULE_7__["CarrerSummaryComponent"]; });











/***/ }),

/***/ "./src/app/components/sections/interests/interests.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/sections/interests/interests.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-personal-info {\n  background-color: #464159;\n  color: #FFF;\n  padding: 5px;\n  text-align: center;\n}\n\n@media (min-width: 992px) {\n  .App-personal-info {\n    padding: 15px;\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9pbnRlcmVzdHMvQzpcXF9QUk9KRUtUWVxcY3YtYW5ndWxhclxcbXktY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxpbnRlcmVzdHNcXGludGVyZXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9pbnRlcmVzdHMvQzpcXF9QUk9KRUtUWVxcY3YtYW5ndWxhclxcbXktY3Yvc3JjXFxhc3NldHNcXGNvbmZpZ1xcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb25zL2ludGVyZXN0cy9pbnRlcmVzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkNGYztFREdkLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUVGRjs7QUZRQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0VFTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvY29sb3JzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9icmVha3BvaW50cyc7XHJcblxyXG4uQXBwLXBlcnNvbmFsLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbWQpIHtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICRsZykge1xyXG4gIC5BcHAtcGVyc29uYWwtaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkeGwpIHtcclxufVxyXG5cclxuXHJcbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG5cclxuJHByaW1hcnktY29sb3I6ICM0NjQxNTk7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM4QkJBQkI7XHJcblxyXG4iLCIuQXBwLXBlcnNvbmFsLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0MTU5O1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuQXBwLXBlcnNvbmFsLWluZm8ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/sections/interests/interests.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/interests/interests.component.ts ***!
  \**********************************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InterestsComponent = class InterestsComponent {
    constructor() { }
    ngOnInit() {
    }
};
InterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./interests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/interests/interests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./interests.component.scss */ "./src/app/components/sections/interests/interests.component.scss")).default]
    })
], InterestsComponent);



/***/ }),

/***/ "./src/app/components/sections/language/language.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/language/language.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-language {\n  padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9sYW5ndWFnZS9DOlxcX1BST0pFS1RZXFxjdi1hbmd1bGFyXFxteS1jdi9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXGxhbmd1YWdlXFxsYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQXBwLWxhbmd1YWdlIHtcclxuICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuIiwiLkFwcC1sYW5ndWFnZSB7XG4gIHBhZGRpbmc6IDVweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/sections/language/language.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/language/language.component.ts ***!
  \********************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LanguageComponent = class LanguageComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LanguageComponent.prototype, "languages", void 0);
LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/language/language.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language.component.scss */ "./src/app/components/sections/language/language.component.scss")).default]
    })
], LanguageComponent);



/***/ }),

/***/ "./src/app/components/sections/personal-info/personal-info.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/sections/personal-info/personal-info.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-personal-info {\n  background-color: #464159;\n  color: #FFF;\n  padding: 5px;\n  text-align: center;\n}\n.App-personal-info h2 {\n  text-align: left;\n  padding-left: 5px;\n}\n@media (min-width: 768px) {\n  .App-personal-info {\n    padding: 15px;\n  }\n}\n@media (min-width: 992px) {\n  .App-personal-info {\n    padding: 25px;\n    text-align: left;\n  }\n\n  .App-info {\n    display: -webkit-box;\n    display: flex;\n  }\n  .App-info div:first-child {\n    width: 70%;\n    text-align: left;\n  }\n  .App-info div:last-child {\n    width: 30%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9wZXJzb25hbC1pbmZvL0M6XFxfUFJPSkVLVFlcXGN2LWFuZ3VsYXJcXG15LWN2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWN0aW9uc1xccGVyc29uYWwtaW5mb1xccGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9wZXJzb25hbC1pbmZvL0M6XFxfUFJPSkVLVFlcXGN2LWFuZ3VsYXJcXG15LWN2L3NyY1xcYXNzZXRzXFxjb25maWdcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkNGYztFREdkLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUVGRjtBRkdFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBRURKO0FGS0E7RUFDRTtJQUNFLGFBQUE7RUVGRjtBQUNGO0FGS0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtFRUhGOztFRktBO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0VFRkY7RUZHRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFRURKO0VGR0U7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUVESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2NvbG9ycyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvYnJlYWtwb2ludHMnO1xyXG5cclxuLkFwcC1wZXJzb25hbC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogI0ZGRjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbWQpIHtcclxuICAuQXBwLXBlcnNvbmFsLWluZm8ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGcpIHtcclxuICAuQXBwLXBlcnNvbmFsLWluZm8ge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5BcHAtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH07XHJcbiAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHhsKSB7XHJcbn1cclxuXHJcblxyXG4iLCIkYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjNDY0MTU5O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOEJCQUJCO1xyXG5cclxuIiwiLkFwcC1wZXJzb25hbC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDE1OTtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLkFwcC1wZXJzb25hbC1pbmZvIGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuQXBwLXBlcnNvbmFsLWluZm8ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuQXBwLXBlcnNvbmFsLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5BcHAtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuQXBwLWluZm8gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLkFwcC1pbmZvIGRpdjpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sections/personal-info/personal-info.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/sections/personal-info/personal-info.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalInfoComponent = class PersonalInfoComponent {
    constructor() { }
};
PersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/personal-info/personal-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-info.component.scss */ "./src/app/components/sections/personal-info/personal-info.component.scss")).default]
    })
], PersonalInfoComponent);



/***/ }),

/***/ "./src/app/components/sections/skills-and-tools/skills-and-tools.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/sections/skills-and-tools/skills-and-tools.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-skills {\n  padding-top: 5px;\n}\n\n.App-skills-header {\n  padding-bottom: 3px;\n  font-size: 1.1rem;\n}\n\n.App-skill-container {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  margin: 3px 0 5px 0;\n}\n\n.App-skill-base {\n  width: 100%;\n  height: 10px;\n  background-color: #464159;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.App-skill-level {\n  height: 10px;\n  background-color: #464159;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMtYW5kLXRvb2xzL0M6XFxfUFJPSkVLVFlcXGN2LWFuZ3VsYXJcXG15LWN2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWN0aW9uc1xcc2tpbGxzLWFuZC10b29sc1xcc2tpbGxzLWFuZC10b29scy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMtYW5kLXRvb2xzL3NraWxscy1hbmQtdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzLWFuZC10b29scy9DOlxcX1BST0pFS1RZXFxjdi1hbmd1bGFyXFxteS1jdi9zcmNcXGFzc2V0c1xcY29uZmlnXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtBQ0RGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRWxCYztFRm1CZCxZQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSx5QkV6QmM7RUYwQmQsa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzLWFuZC10b29scy9za2lsbHMtYW5kLXRvb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9jb2xvcnMnO1xyXG5cclxuLkFwcC1za2lsbHMge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLkFwcC1za2lsbHMtaGVhZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uQXBwLXNraWxsLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDNweCAwIDVweCAwO1xyXG59XHJcblxyXG4uQXBwLXNraWxsLWJhc2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uQXBwLXNraWxsLWxldmVsIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iLCIuQXBwLXNraWxscyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5BcHAtc2tpbGxzLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uQXBwLXNraWxsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzcHggMCA1cHggMDtcbn1cblxuLkFwcC1za2lsbC1iYXNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDE1OTtcbiAgb3BhY2l0eTogMC41O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5BcHAtc2tpbGwtbGV2ZWwge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQxNTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iLCIkYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjNDY0MTU5O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOEJCQUJCO1xyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/sections/skills-and-tools/skills-and-tools.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/sections/skills-and-tools/skills-and-tools.component.ts ***!
  \************************************************************************************/
/*! exports provided: SkillsAndToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsAndToolsComponent", function() { return SkillsAndToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsAndToolsComponent = class SkillsAndToolsComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SkillsAndToolsComponent.prototype, "skillAndTools", void 0);
SkillsAndToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills-and-tools',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills-and-tools.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/skills-and-tools/skills-and-tools.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills-and-tools.component.scss */ "./src/app/components/sections/skills-and-tools/skills-and-tools.component.scss")).default]
    })
], SkillsAndToolsComponent);



/***/ }),

/***/ "./src/app/components/sections/work-experience/work-experience.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/sections/work-experience/work-experience.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App-company-name {\n  padding-bottom: 3px;\n}\n\n.App-work-period {\n  opacity: 0.8;\n}\n\n.App-project {\n  padding: 10px;\n}\n\n.App-project-area {\n  padding: 5px 0;\n}\n\n.App-technologies {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.App-bage {\n  background-color: #8BBABB;\n  color: #FFF;\n  font-size: 0.6rem;\n  display: inline-block;\n  padding: 5px;\n  margin: 0 3px 3px 0;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy93b3JrLWV4cGVyaWVuY2UvQzpcXF9QUk9KRUtUWVxcY3YtYW5ndWxhclxcbXktY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlY3Rpb25zXFx3b3JrLWV4cGVyaWVuY2VcXHdvcmstZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb25zL3dvcmstZXhwZXJpZW5jZS9DOlxcX1BST0pFS1RZXFxjdi1hbmd1bGFyXFxteS1jdi9zcmNcXGFzc2V0c1xcY29uZmlnXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UseUJFdEJnQjtFRnVCaEIsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9jb2xvcnMnO1xyXG5cclxuLkFwcC1jb21wYW55LW5hbWUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5BcHAtd29yay1wZXJpb2Qge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLkFwcC1wcm9qZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uQXBwLXByb2plY3QtYXJlYSB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbi5BcHAtdGVjaG5vbG9naWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uQXBwLWJhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDAgM3B4IDNweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4iLCIuQXBwLWNvbXBhbnktbmFtZSB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5BcHAtd29yay1wZXJpb2Qge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5BcHAtcHJvamVjdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5BcHAtcHJvamVjdC1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5BcHAtdGVjaG5vbG9naWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uQXBwLWJhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEJCQUJCO1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAgM3B4IDNweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59IiwiJGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzQ2NDE1OTtcclxuJHNlY29uZGFyeS1jb2xvcjogIzhCQkFCQjtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/sections/work-experience/work-experience.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sections/work-experience/work-experience.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkExperienceComponent = class WorkExperienceComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WorkExperienceComponent.prototype, "workExperience", void 0);
WorkExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sections/work-experience/work-experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-experience.component.scss */ "./src/app/components/sections/work-experience/work-experience.component.scss")).default]
    })
], WorkExperienceComponent);



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let LanguageService = class LanguageService {
    constructor(translate) {
        this.translate = translate;
    }
    getAvailableLanguages() {
        return ['pl', 'en'];
    }
    getCurrentLanguage() {
        const currentLangCode = this.translate.currentLang;
        return this.getAvailableLanguages().find(item => item === currentLangCode);
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LanguageService);



/***/ }),

/***/ "./src/app/services/translation-loader.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/translation-loader.service.ts ***!
  \********************************************************/
/*! exports provided: TranslationLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationLoaderService", function() { return TranslationLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let TranslationLoaderService = class TranslationLoaderService {
    constructor(translate) {
        this.translate = translate;
    }
    loadTranslations(lang) {
        const i18nPl = __webpack_require__(/*! ../../assets/translations/pl.json */ "./src/assets/translations/pl.json");
        const i18nENG = __webpack_require__(/*! ../../assets/translations/en.json */ "./src/assets/translations/en.json");
        if (lang === 'pl') {
            this.translate.setTranslation('pl', i18nPl, true);
            return i18nPl;
        }
        if (lang === 'en') {
            this.translate.setTranslation('en', i18nENG, true);
            return i18nENG;
        }
    }
};
TranslationLoaderService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslationLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TranslationLoaderService);



/***/ }),

/***/ "./src/assets/translations/en.json":
/*!*****************************************!*\
  !*** ./src/assets/translations/en.json ***!
  \*****************************************/
/*! exports provided: Global, PersonalInfo, CarrerSummary, WorkExperience, SkillsAndTools, Education, Language, Interests, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Global\":{\"yes\":\"Tak\",\"no\":\"Nie\",\"language\":\"Język\"},\"PersonalInfo\":{\"name\":\"Agnieszka Chróścielewska\",\"position\":\"Front-end Developer\",\"mail\":\"achroscielewska@gmail.com\",\"phone\":\"+48602370054\",\"phoneToDisplay\":\"+48 602 370 054\",\"linkedin\":\"https://www.linkedin.com/in/agnieszka-chróścielewska-366a63a/\",\"github\":\"https://github.com/achroscielewska\",\"web\":\"https://achroscielewska.github.io/\"},\"CarrerSummary\":{\"header\":\"Carrer Summary\",\"content\":\"Front-End developer with 3 years commercial experience. Business and System Analyst with over 14 years commercial experience in IT (in insurance and banking sector).\"},\"WorkExperience\":{\"header\":\"Work Experience\",\"technologiesUsed\":\"Technologies used\",\"content\":[{\"company\":\"DAT Polska sp. z o.o\",\"period\":\"06.2020 - present\",\"projects\":[{\"role\":\"Front-end developer\",\"period\":\"05.2020 - present\",\"area\":\"MyClaim - order processing\",\"technologiesUsed\":[\"Vue.js\",\"Vuex\",\"Vuetifyjs\",\"jquery\",\"xml\",\"JAVA 1.8\"]},{\"role\":\"Developer\",\"period\":\"10.2020 - present\",\"area\":\"Fotohub\",\"technologiesUsed\":[\"Vue.js\",\"Vuex\",\"laravel\"]}]},{\"company\":\"Altkom Akademia S.A. / Altkom Software and Consulting\",\"period\":\"06.2009 - 05.2020\",\"projects\":[{\"role\":\"Front-end developer\",\"period\":\"11.2019 - 05.2020\",\"company\":\"Project for bank\",\"area\":\"Mortgages for individual clients\",\"technologiesUsed\":[\"Angular 8\",\"RxJs\",\"ngx-formly\",\"HTML / SASS\",\"Bootstrap\",\"Microfronteds\"]},{\"role\":\"Front-end developer, UX designer\",\"period\":\"10.2019 - 12.2019\",\"company\":\"Project for insurance company\",\"area\":\"Underwriting\",\"technologiesUsed\":[\"Angular 8\",\"RxJs\",\"ngx-formly\",\"HTML / SASS\",\"Bootstrap\"]},{\"role\":\"Front-end developer\",\"period\":\"09.2019 - 09.2019\",\"company\":\"Project for premium TV channel\",\"area\":\"Authorization component\",\"technologiesUsed\":[\"ReactJS\",\"TypeScript\",\"HTML / SASS\",\"Bootstrap\"]},{\"role\":\"Front-end developer, UX designer\",\"period\":\"08.2018 - 09.2019\",\"company\":\"Project for bank\",\"area\":\"Platform for selling banking products by the internet channel\",\"technologiesUsed\":[\"Angular 6\",\"HTML / CSS\",\"Orbeon\",\"Bootstrap\"]},{\"role\":\"Front-end developer, UX designer\",\"period\":\"01.2018 - 06.2019\",\"company\":\"Project for start up\",\"area\":\"CMS for mobile app for classical music concerts and opera performances\",\"technologiesUsed\":[\"Angular 7\",\"RxJs\",\"HTML / SCSS\",\"ngx-markdown\",\"ngx-image-editor\",\"SemanticUI\"]},{\"role\":\"Analyst\",\"period\":\"06.2009 - 01.2019\",\"company\":\"Projects for insurance companies\",\"area\":\"Projects supporting handling of insurance company processes. Projects for the private medical services' sector.\",\"technologiesUsed\":[\"Balsamiq\",\"Confluence\",\"UML\"]}]},{\"company\":\"Affecto Poland (Mebius IT)\",\"period\":\"09.2008 - 06.2009 (Analyst - Insurance sector)\",\"projects\":[]},{\"company\":\"Infovide - Matrix S.A.\",\"period\":\"03.2006 - 08.2008 (Analyst - Insurance sector)\",\"projects\":[]}]},\"SkillsAndTools\":{\"header\":\"Skills And Tools\",\"content\":{\"frontendSkills\":{\"header\":\"Front-end\",\"content\":[{\"skill\":\"HTML5, JavaScript (ES6), TypeScript, CSS, SASS\",\"level\":\"80%\"},{\"skill\":\"Angular 2+ / RxJS\",\"level\":\"80%\"},{\"skill\":\"Vue.js / Vuex\",\"level\":\"60%\"},{\"skill\":\"React JS / Redux\",\"level\":\"20%\"},{\"skill\":\"Bootstrap, Semantic UI, Material UI, Vuetifyjs\",\"level\":\"80%\"},{\"skill\":\"Jest, Karma\",\"level\":\"40%\"}]},\"others\":{\"header\":\"Others\",\"content\":\"laravel, JAVA 1.8, express.js, mongoosejs, mySQL, Git,  Confluence, JIRA, Redmine, Balsamiq, UX, strong analytical skills\"}}},\"Education\":{\"header\":\"Education\",\"content\":[{\"school\":\"Infoshare Academy\",\"field\":\"Junior Front-End Developer Course\",\"period\":\"09.2017 - 02.2018\"},{\"school\":\"Warsaw School of Economics Post-graduate studies\",\"field\":\"IT management in company\",\"period\":\"09.2012 - 06.2013\"},{\"school\":\"Warsaw School of Economics\",\"field\":\"Quantitative Methods in Economics and Information Systems\",\"period\":\"09.2000 - 03.2006\"}]},\"Language\":{\"header\":\"Languages\",\"content\":[{\"language\":\"Polish\",\"level\":\"native\"},{\"language\":\"English\",\"level\":\"B2\"},{\"language\":\"Russian\",\"level\":\"B1\"}]},\"Interests\":{\"header\":\"Interests\",\"content\":\"Diving, travelling\"}}");

/***/ }),

/***/ "./src/assets/translations/pl.json":
/*!*****************************************!*\
  !*** ./src/assets/translations/pl.json ***!
  \*****************************************/
/*! exports provided: Global, PersonalInfo, CarrerSummary, WorkExperience, SkillsAndTools, Education, Language, Interests, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Global\":{\"yes\":\"Tak\",\"no\":\"Nie\",\"language\":\"Język\"},\"PersonalInfo\":{\"name\":\"Agnieszka Chróścielewska\",\"position\":\"Front-end Developer\",\"mail\":\"achroscielewska@gmail.com\",\"phone\":\"+48602370054\",\"phoneToDisplay\":\"+48 602 370 054\",\"linkedin\":\"https://www.linkedin.com/in/agnieszka-chróścielewska-366a63a/\",\"github\":\"https://github.com/achroscielewska\",\"web\":\"https://achroscielewska.github.io/\"},\"CarrerSummary\":{\"header\":\"Profil zawodowy\",\"content\":\"Front-End developer z 2-letnim doświadczeniem zawodowym. Analityk biznesowy / systemowy z ponad 13-letnim doświadczeniem zawodowym w obszarze rozwiązań IT (ubezpieczenia i bankowość).\"},\"WorkExperience\":{\"header\":\"Historia zatrudnienia\",\"technologiesUsed\":\"Użyte technologie\",\"content\":[{\"company\":\"DAT Polska sp. z o.o\",\"period\":\"06.2020 - present\",\"projects\":[{\"role\":\"Front-end developer\",\"period\":\"05.2020 - present\",\"area\":\"MyClaim - obsługa szkód\",\"technologiesUsed\":[\"Vue.js\",\"Vuex\",\"HTML / SASS\",\"Vuetifyjs\",\"jquery\",\"xml\"]}]},{\"company\":\"Altkom Akademia S.A. / Altkom Software and Consulting\",\"period\":\"06.2009 - 05.2020\",\"projects\":[{\"role\":\"Front-end developer\",\"period\":\"11.2019 - 05.2020\",\"company\":\"Projekt dla banku\",\"area\":\"Kredyty hipoteczne dla klientów indywidualnych.\",\"technologiesUsed\":[\"Angular 8\",\"RxJs\",\"ngx-formly\",\"HTML / SASS\",\"Bootstrap\",\"Microfronteds\"]},{\"role\":\"Front-end developer, UX designer\",\"period\":\"10.2019 - 12.2019\",\"company\":\"Projekt dla firmy ubezpieczeniowej\",\"area\":\"Underwriting.\",\"technologiesUsed\":[\"Angular 8\",\"RxJs\",\"ngx-formly\",\"HTML / SASS\",\"Bootstrap\"]},{\"role\":\"Front-end developer\",\"period\":\"09.2019 - 09.2019\",\"company\":\"Projekt dla telewizyjnego kanału premium\",\"area\":\"Komponent do autoryzacji.\",\"technologiesUsed\":[\"ReactJS\",\"TypeScript\",\"HTML / SASS\",\"Bootstrap\"]},{\"role\":\"Front-end developer, UX designer\",\"period\":\"08.2018 - 09.2019\",\"company\":\"Projekt dla banku\",\"area\":\"Platforma do sprzedaży produktów bankowych w kanale Internetowym.\",\"technologiesUsed\":[\"Angular 6\",\"HTML / CSS\",\"Orbeon\",\"Bootstrap\"]},{\"role\":\"Front-end developer, UX designer\",\"period\":\"01.2018 - 06.2019\",\"company\":\"Start up\",\"area\":\"CMS dla mobilnej aplikacji wykorzystywanej podczas koncertów.\",\"technologiesUsed\":[\"Angular 7\",\"RxJs\",\"HTML / SCSS\",\"ngx-markdown\",\"ngx-image-editor\",\"SemanticUI\"]},{\"role\":\"Analityk\",\"period\":\"06.2009 - 01.2019\",\"company\":\"Projekty dla firm ubezpieczeniowych\",\"area\":\"Projekty wspierające obsługę procesów towarzystwa ubezpieczeniowego. Projekty dla sektora prywatnych usług medycznych.\",\"technologiesUsed\":[\"Balsamiq\",\"Confluence\",\"UML\"]}]},{\"company\":\"Affecto Poland (Mebius IT)\",\"period\":\"09.2008 - 06.2009 (Analityk biznesowy / systemowy)\",\"projects\":[]},{\"company\":\"Infovide - Matrix S.A.\",\"period\":\"03.2006 - 08.2008 (Analityk biznesowy / systemowy)\",\"projects\":[]}]},\"SkillsAndTools\":{\"header\":\"Kluczowe kompetencje\",\"content\":{\"frontendSkills\":{\"header\":\"Front-end\",\"content\":[{\"skill\":\"HTML5, JavaScript (ES6), TypeScript, CSS, SASS\",\"level\":\"80%\"},{\"skill\":\"Angular 2+ / RxJS\",\"level\":\"80%\"},{\"skill\":\"Vue.js / Vuex\",\"level\":\"40%\"},{\"skill\":\"React JS / Redux\",\"level\":\"20%\"},{\"skill\":\"Bootstrap, Semantic UI, Material UI, Vuetifyjs\",\"level\":\"80%\"},{\"skill\":\"Jest, Karma\",\"level\":\"40%\"}]},\"others\":{\"header\":\"Pozostałe\",\"content\":\"express.js, mongoosejs, Git,  Confluence, JIRA, Redmine, Balsamiq, UX, umiejętności analityczne\"}}},\"Education\":{\"header\":\"Edukacja i szkolenia\",\"content\":[{\"school\":\"Infoshare Academy\",\"field\":\"Kurs Junior Front-End Developer\",\"period\":\"09.2017 - 02.2018\"},{\"school\":\"Szkoła Główna Handlowa Studia podyplomowe\",\"field\":\"Zarządzanie IT w przedsiębiorstwie\",\"period\":\"09.2012 - 06.2013\"},{\"school\":\"Szkoła Główna Handlowa\",\"field\":\"Metody ilościowe w ekonomii i systemy informacyjne\",\"period\":\"09.2000 - 03.2006\"}]},\"Language\":{\"header\":\"Języki\",\"content\":[{\"language\":\"Polski\",\"level\":\"ojczyst\"},{\"language\":\"Angielski\",\"level\":\"B2\"},{\"language\":\"Rosyjski\",\"level\":\"B1\"}]},\"Interests\":{\"header\":\"Zainteresowania\",\"content\":\"Nurkowanie, podróże\"}}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\_PROJEKTY\cv-angular\my-cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map