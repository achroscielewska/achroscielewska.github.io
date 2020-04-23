var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-content/no-content.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-content/no-content.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>no-content works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-base/checklist-base.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-base/checklist-base.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userService.hasAccessToModule()\" class=\"app-content\">\r\n  <router-outlet name=\"checklist\"></router-outlet>\r\n</div>\r\n<app-loader></app-loader>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-home/checklist-home.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-home/checklist-home.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <div>\r\n      <h2 [innerHTML]=\"'Checklist.step0.header' | translate\"></h2>\r\n    </div>\r\n    <div>\r\n      <div [innerHTML]=\"'Checklist.step0.info' | translate\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-btns-container\">\r\n    <button class=\"btn btn-primary app-btn\" type=\"button\" routerLink=\"start\"\r\n      skipLocationChange=\"true\">{{ 'Checklist.step0.start' | translate }}</button>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-path/checklist-path.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-path/checklist-path.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"steps.length > 0\">\r\n  <div class=\"app-stepper\">\r\n    <div *ngFor=\"let step of steps; index as stepperIndex;\">\r\n      <div\r\n        [ngClass]=\"(interComponentChecklistCommunicationService.checklistLastActiveStep===stepperIndex) ? 'app-stepper-item-active': (interComponentChecklistCommunicationService.checklistLastActiveStep > stepperIndex) ? 'app-stepper-item-after-active' : ''\">\r\n        {{ step.label }}</div>\r\n      <div class=\"app-stepper-header\">\r\n        <p>{{ step.headerText }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <form [formGroup]=\"form\">\r\n      <div *ngFor=\"let step of formSteps; index as index; let last = last;\">\r\n        <div *ngIf=\"interComponentChecklistCommunicationService.checklistLastActiveStep===index\">\r\n          <formly-form [form]=\"form.at(index)\" [model]=\"model\" [fields]=\"formSteps[index]\" [options]=\"options[index]\">\r\n          </formly-form>\r\n\r\n          <div class=\"app-btns-container\">\r\n            <button *ngIf=\"!last\" class=\"btn btn-primary app-btn\" type=\"button\" [disabled]=\"!form.at(index).valid\"\r\n              (click)=\"nextStep(index)\" id=\"nextStep\">{{ 'Global.Btn.next' | translate }}</button>\r\n            <button *ngIf=\"last\" class=\"btn btn-primary app-btn\" [disabled]=\"!form.at(index).valid\" type=\"submit\"\r\n              (click)=submit(index) id=\"submit\">{{ 'Global.Btn.getChecklist' | translate }}</button>\r\n            <button *ngIf=\"index !== 0\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"prevStep(index)\"\r\n              id=\"prevStep\">{{ 'Global.Btn.back' | translate }}</button>\r\n          </div>\r\n\r\n          <alert type=\"danger\" *ngIf=\"methodUnavailable\" [dismissible]=\"true\" (onClosed)=\"onAlertClosed()\"\r\n            [innerHTML]=\"'Global.MethodUnavailable' | translate\">\r\n          </alert>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=\"interComponentChecklistCommunicationService.isChecklistResultView\">\r\n    <app-checklist-results></app-checklist-results>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-results/checklist-results.component.html": 
        /*!***************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-results/checklist-results.component.html ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"checklistResult\">\r\n\r\n  <div>\r\n    <p [innerHTML]=\"'ChecklistResults.info' | translate\"></p>\r\n  </div>\r\n\r\n  <div class=\"app-accordion\">\r\n    <accordion class=\"app-panel-class\">\r\n      <accordion-group *ngFor=\"let section of sections; let sectionIndex = index\" [isOpen]=\"true\" id=\"section-{{sectionIndex}}\">\r\n\r\n        <accordion [isAnimated]=\"true\">\r\n          <accordion-group *ngFor=\"let subsection of section.subsections; let subSectionIndex = index \"\r\n            [isOpen]=\"subsection.visible\" id=\"subsection-{{subSectionIndex}}\">\r\n\r\n            <div class=\"app-subsection-header\" accordion-heading (click)=\"$event.stopPropagation()\">\r\n              <div>\r\n                <div *ngIf=\"sectionIndex == 0\" class=\"app-icon app-credit-applicant\"></div>\r\n                <div *ngIf=\"sectionIndex == 1\" class=\"app-icon app-credit-standing\"></div>\r\n                <div>\r\n                  {{'ChecklistResults.sections.' + section.code + '.label' | translate}}\r\n                  <span\r\n                    *ngIf=\"subSectionIndex === 0\">{{'ChecklistResults.sections.' + section.code + '.main' | translate}}</span>\r\n                  <span\r\n                    *ngIf=\"subSectionIndex !== 0\">{{'ChecklistResults.sections.' + section.code + '.next' | translate}}</span>\r\n                </div>\r\n              </div>\r\n\r\n              <button class=\"btn btn-primary app-desktop-view\" type=\"button\" *ngIf=\"subsection.visible\"\r\n                (click)=\"toggle(sectionIndex, subSectionIndex)\">\r\n                {{ 'ChecklistResults.sections.hideDocumentList' | translate }}\r\n                ({{ subsection.entries.length }})\r\n              </button>\r\n              <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"!subsection.visible\"\r\n                (click)=\"toggle(sectionIndex, subSectionIndex)\">\r\n                {{ 'ChecklistResults.sections.showDocumentList' | translate }}\r\n                ({{subsection.entries.length}})\r\n              </button>\r\n\r\n            </div>\r\n\r\n            <alert type=\"danger\" *ngIf=\"subsection.entries.length === 0\" [dismissible]=\"true\"\r\n              [innerHTML]=\"'ChecklistResults.documentsInSectionAbove' | translate\">\r\n            </alert>\r\n\r\n            <div *ngFor=\"let doc of subsection.entries\">\r\n              <div class=\"app-icon app-doc-icon\"></div>\r\n              <app-content-toggler [shortValue]=\"doc.shortName\" [longValue]=\"doc.name\"></app-content-toggler>\r\n            </div>\r\n\r\n            <button class=\"btn btn-primary app-mobileVisible\" type=\"button\" *ngIf=\"subsection.visible\"\r\n              (click)=\"toggle(sectionIndex, subSectionIndex)\">\r\n              {{ 'ChecklistResults.sections.hideDocumentList' | translate }}\r\n              ({{ subsection.entries.length }})\r\n            </button>\r\n\r\n          </accordion-group>\r\n        </accordion>\r\n\r\n      </accordion-group>\r\n    </accordion>\r\n  </div>\r\n\r\n  <div class=\"app-btns-container\">\r\n    <button class=\"btn btn-primary app-btn\" type=\"submit\" [routerLink]=\"['../wyslij']\"\r\n      skipLocationChange=\"true\">{{ 'ChecklistResults.send' | translate }}</button>\r\n    <button class=\"btn btn-outline-secondary app-btn\" type=\"button\"\r\n      (click)=\"goBack()\">{{ 'ChecklistResults.goBack' | translate }}</button>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-send/checklist-send.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-send/checklist-send.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <div>\r\n      <h2 [innerHTML]=\"'ChecklistSend.header' | translate\"></h2>\r\n    </div>\r\n    <div>\r\n      <p [innerHTML]=\"'ChecklistSend.info' | translate\"></p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"app-form\">\r\n\r\n    <form [formGroup]=\"form\">\r\n      <formly-form [model]=\"model\" [fields]=\"fields\" [form]=\"form\"></formly-form>\r\n    </form>\r\n\r\n    <div *ngIf=\"!userService.isBroker()\">\r\n      <a [href]=\"rodoInformationURL\" target=\"_blank\">Klauzula informacyjna</a>\r\n    </div>\r\n    <alert type=\"danger\" *ngIf=\"methodUnavailable\" [dismissible]=\"true\" (onClosed)=\"onAlertClosed()\"\r\n      [innerHTML]=\"'Global.MethodUnavailableSend' | translate\">\r\n    </alert>\r\n    <div class=\"app-btns-container\">\r\n      <button class=\"btn btn-primary\" type=\"submit\" (click)=submit() id=\"submit\"\r\n        [disabled]=\"!form.valid\">{{ 'ChecklistSend.send' | translate }}</button>\r\n      <button class=\"btn btn-outline-primary\" type=\"button\"\r\n        (click)=\"backToChecklist()\">{{ 'Global.Btn.back' | translate }}\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"Checklist-sent\">\r\n  <div>\r\n    <div>\r\n      <h2 [innerHTML]=\"'ChecklistSent.header' | translate\"></h2>\r\n    </div>\r\n    <div>\r\n      <p [innerHTML]=\"'ChecklistSent.info' | translate\"></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-btns-container\">\r\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goToSimulationWebComponent()\" *ngIf=\"showSimulationBtn\">\r\n      {{ 'ChecklistSent.makeCalculation' | translate }}\r\n    </button>\r\n    <button class=\"btn btn-outline-primary\" type=\"button\"\r\n      (click)=\"goToChecklistStartPage()\">{{ 'ChecklistSent.next' | translate }}</button>   \r\n  </div>\r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact-base/contact-base.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact-base/contact-base.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userService.hasAccessToModule()\" class=\"app-content\">\r\n  <router-outlet name=\"contactOutlet\"></router-outlet>\r\n</div>\r\n\r\n<app-loader></app-loader>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.html": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.html ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <p [innerHTML]=\"'ContactConfirmation.header' | translate\"></p>\r\n  <div>\r\n    <div [innerHTML]=\"'ContactConfirmation.info' | translate\">{{ 'ContactConfirmation.info' | translate }}</div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact/contact.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact/contact.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n  <div>\r\n    <h2 [innerHTML]=\"'Contact.header' | translate\"></h2>\r\n    <div>\r\n      <div [innerHTML]=\"'Contact.info' | translate\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"app-form\">\r\n\r\n    <form [formGroup]=\"form\">\r\n      <formly-form [model]=\"model\" [fields]=\"fields\" [form]=\"form\"></formly-form>\r\n    </form>\r\n\r\n    <div *ngIf=\"!userService.isBroker()\">\r\n      <a [href]=\"rodoInformationURL\" target=\"_blank\">Klauzula informacyjna</a>\r\n    </div>\r\n    <alert type=\"danger\" *ngIf=\"methodUnavailable\" [dismissible]=\"true\" (onClosed)=\"onAlertClosed()\"\r\n      [innerHTML]=\"'Global.MethodUnavailableSend' | translate\">\r\n    </alert>\r\n    <div class=\"app-btns-container\">\r\n      <button class=\"btn btn-primary App-btn\" type=\"submit\" (click)=submit()\r\n        [disabled]=\"!form.valid\">{{ 'Contact.send' | translate }}</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-home/login-home.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-home/login-home.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!userService.hasAccessToModule()\">\r\n  <div class=\"app-form\">\r\n    <form [formGroup]=\"form\">\r\n      <formly-form [model]=\"model\" [fields]=\"fields\" [form]=\"form\"></formly-form>\r\n    </form>\r\n    <alert type=\"danger\" *ngIf=\"methodUnavailable\" [dismissible]=\"true\" (onClosed)=\"onAlertClosed()\"\r\n           [innerHTML]=\"errorMessage | translate\">\r\n    </alert>\r\n\r\n    <div class=\"app-btns-container\">\r\n      <button class=\"btn btn-primary App-btn\" type=\"submit\" (click)=submit()\r\n              [disabled]=\"!form.valid\">{{ 'Login.button' | translate }}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.html": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.html ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-results\">\r\n  <div class=\"app-results-zip\">\r\n    <div class=\"app-results-main-circle\">\r\n      <div>\r\n        <div class=\"app-main-circle-content\" *ngIf=\"isInstallmentView\">\r\n          <p>{{ 'SimulatorResults.option.loan' | translate }}</p>\r\n          <p class=\"app-accent-color\" id=\"loanAmount\">{{simulation.loanAmount | space}}\r\n            {{ 'SimulatorResults.option.zł' | translate }}\r\n          </p>\r\n        </div>\r\n        <div class=\"app-main-circle-content\" *ngIf=\"isLoanView\">\r\n          <p>{{ 'SimulatorResults.option.installment' | translate }}</p>\r\n          <p class=\"app-accent-color\" id=\"installmentMonthlyAmount\">{{simulation.installmentMonthlyAmount | space}}\r\n            {{ 'SimulatorResults.option.zł' | translate }}</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"app-results-loan-term-circle\">\r\n      <div class=\"app-range-container-loan-term-circle\">\r\n        <div class=\"app-range-loan-term-circle\" id=\"loanTermCircle\"></div>\r\n        <div>\r\n          <div class=\"app-center-content\">\r\n            <p>{{ 'SimulatorResults.option.installmentTerm' | translate }}</p>\r\n            <p class=\"app-accent-color\" id=\"numberOfInstallmentsInYears\" *ngIf=\"sliderValueLoanTermCircle\">\r\n              {{sliderValueLoanTermCircle | installmentSufix}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-results-circle\">\r\n      <div class=\"app-range-container\">\r\n        <div class=\"app-range\" id=\"resultCircle\"></div>\r\n        <div>\r\n          <div class=\"app-center-content\" *ngIf=\"isInstallmentView\">\r\n            <p>{{ 'SimulatorResults.option.installment' | translate }}</p>\r\n            <p class=\"app-accent-color\" id=\"installmentMonthlyAmount\" *ngIf=\"sliderValueResultCircle\">\r\n              {{ sliderValueResultCircle | space}}\r\n              {{ 'SimulatorResults.option.zł' | translate }}</p>\r\n          </div>\r\n          <div class=\"app-center-content\" *ngIf=\"isLoanView\">\r\n            <p>{{ 'SimulatorResults.option.loan' | translate }}</p>\r\n            <p class=\"app-accent-color\" id=\"loanAmount\" *ngIf=\"sliderValueResultCircle\">\r\n              {{ sliderValueResultCircle | space }}\r\n              {{ 'SimulatorResults.option.zł' | translate }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/toggler/toggler.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/toggler/toggler.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-doc-view\">\r\n  <div>\r\n    <div *ngIf=\"!longContent\" class=\"app-toggler\" >\r\n      {{shortValue}}\r\n    </div>\r\n\r\n    <div *ngIf=\"longContent\" class=\"app-toggler\">\r\n      <div class=\"app-toggler__moreSpace\">\r\n        {{longValue}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"app-tooltip-icon app-checkbox-tooltip\" (click)=\"showHideMore()\"></div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/view-data-container/view-data-container.component.html": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/view-data-container/view-data-container.component.html ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-view-data-container\" *ngFor=\"let appViewData of appViewDataToDisplay\">\r\n  <div>{{appViewData.label}}:</div>\r\n  <div id={{appViewData.id}}>{{appViewData.data}}</div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.html": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.html ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-check\">\r\n  <div class=\"app-checkbox-with-tooltip app-checkbox-with-tooltip-onclick\">\r\n    <label>\r\n      <input type=\"checkbox\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\r\n      <span>{{to.label}}</span></label>\r\n    <div class=\"app-tooltip-box\" *ngIf=\"showTooltip\">\r\n      <div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideTooltipOnClick()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div>\r\n        <p [innerHTML]=\"to.attributes.tooltip\"></p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-tooltip-icon app-checkbox-tooltip\" (click)=\"toggleTooltipOnClick()\" *ngIf=\"to.attributes.tooltip\"></div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.html": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.html ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-check\">\r\n  <div class=\"app-checkbox-with-tooltip\">\r\n    <label>\r\n      <input type=\"checkbox\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\r\n      <span>{{to.label}}</span></label>\r\n    <div class=\"app-tooltip-icon app-checkbox-tooltip\" tooltip={{to.attributes.tooltip}} *ngIf=\"to.attributes.tooltip\">\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/custom-input/custom-input.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/custom-input/custom-input.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input type=\"{{to.type}}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" class=\"form-control\" autocomplete=\"off\">\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/custom-radio/custom-radio.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/custom-radio/custom-radio.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let option of to.options; let i=index\">\r\n  <div class=\"app-radio-btn-with-tooltip\">\r\n    <div class=\"app-radio-btn\">\r\n      <input type=\"radio\" [name]=\"id\" [formControl]=\"formControl\" [formlyAttributes]=\"field\"\r\n        [value]=\"option.value\" [id]=\"id + '_' + i\" class=\"app-radio-input\" (click)=\"optionSelected(option.scrollBy)\" [ngClass]=\"showOptions ? 'app-show': ''\">\r\n      <div class=\"app-radio-lable\" (click)=\"showOptionsToSelect()\">\r\n        <p class=\"app-label\">{{option.label}}</p>\r\n      </div>\r\n      <div class=\"app-tooltip-icon\" data-placement=\"left\" data-container=\"body\" tooltip={{option.tooltip}} *ngIf=\"option.tooltip\"></div>\r\n      <div class=\"app-edit-icon\" (click)=\"showOptionsToSelect()\" ></div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/digit-input/digit-input.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/digit-input/digit-input.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input type=\"number\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" class=\"form-control\" appDigitOnly\r\n  (ngModelChange)=\"to.change(field, $event)\" autocomplete=\"off\">\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/repeat-section/repeat-section.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/repeat-section/repeat-section.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let field of field.fieldGroup; let i = index;\">\r\n  <div class={{to.className}}>\r\n    <accordion class=\"app-panel-class\">\r\n      <accordion-group [isOpen]=\"true\" [isDisabled]=\"true\">\r\n        <div class=\"app-accordion-header\" accordion-heading>\r\n          <div class={{to.sectionIcon}}></div>\r\n          <div class=\"app-header-title\">{{ to.header }}\r\n            <span *ngIf=\"i === 0\" >{{ to.mainHeaderSuffix }}</span>\r\n            <span *ngIf=\"i !== 0\" >{{ to.nextmainHeaderSuffix }}</span>\r\n          </div>\r\n          <div *ngIf=\"i > 0\">\r\n            <button class=\"btn btn-danger\" type=\"button\"\r\n              (click)=\"remove(i)\">{{ to.deleteBtnText }}</button>\r\n          </div>\r\n        </div>\r\n\r\n        <formly-field [field]=\"field\"></formly-field>\r\n\r\n      </accordion-group>\r\n    </accordion>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"app-repeat-section-btn\" *ngIf=\"to.max > field.fieldGroup.length\">\r\n  <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"add()\">{{ to.addBtnText }}</button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group app-form-row\">\r\n  <label class=\"col-form-label app-horizontal-form-label\" *ngIf=\"to.label\">\r\n    {{ to.label }}\r\n  </label>\r\n  <div class=\"app-form-input\">\r\n    <div class=\"app-input-tooltip\">\r\n      <div class=\"app-form-input\">\r\n        <ng-template #fieldComponent></ng-template>\r\n      </div>\r\n      <div *ngIf=\"to.attributes.tooltip\">\r\n          <div class=\"app-tooltip-icon\" data-placement=\"left\" data-container=\"body\" tooltip={{to.attributes.tooltip}}></div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!showError\" class=\"app-form-input-description\">\r\n      <small>{{ to.description }}</small>\r\n    </div>\r\n    <div *ngIf=\"showError\" class=\"invalid-feedback d-block\">\r\n      <formly-validation-message [field]=\"field\"></formly-validation-message>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/section-info/section-info.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/section-info/section-info.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <h2>{{to.header}}</h2>\r\n  </div>\r\n<div>\r\n  <div class=\"app-page-header-info-img\"></div>\r\n    <div>\r\n      <p>{{to.info}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group app-vertical-wrapper\">\r\n  <div class=\"app-lable-tooltip\">\r\n    <label class=\"col-form-label app-form-label\" *ngIf=\"to.label\">\r\n      {{ to.label }}:\r\n    </label>\r\n    <div *ngIf=\"to.attributes.tooltip\">\r\n      <div class=\"app-tooltip-icon\" data-placement=\"left\" data-container=\"body\" tooltip={{to.attributes.tooltip}}></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"app-field\">\r\n    <ng-template #fieldComponent></ng-template>\r\n    <div *ngIf=\"!showError\" class=\"app-form-input-description\">\r\n      <small>{{ to.description }}</small>\r\n    </div>\r\n    <div *ngIf=\"showError\" class=\"invalid-feedback d-block\">\r\n      <formly-validation-message [field]=\"field\"></formly-validation-message>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-base/simulation-base.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-base/simulation-base.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userService.hasAccessToModule()\" class=\"app-content\">\r\n  <router-outlet name=\"simulationOutlet\"></router-outlet>\r\n</div>\r\n\r\n<app-loader></app-loader>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.html": 
        /*!************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.html ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div class=\"app-modal-header\">\r\n    <p>{{'SimulatorResults.panel.changeParameters' | translate}}</p>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"mobileForm\">\r\n    <div *ngFor=\"let step of mobileFormSteps; index as formIndex; let last = last;\">\r\n      <div *ngIf=\"activeStep===formIndex\">\r\n        <div class=\"app-slider\">\r\n          <div class=\"app-slider-left-btn\">\r\n            <em class=\"app-arrow app-left-arrow\" (click)=\"prevStep(formIndex)\"></em>\r\n          </div>\r\n          <div class=\"app-slider-body\">\r\n            <formly-form [form]=\"mobileForm.at(formIndex)\" [model]=\"model\" [fields]=\"mobileFormSteps[formIndex]\">\r\n            </formly-form>\r\n          </div>\r\n          <div class=\"app-slider-right-btn\">\r\n            <em class=\"app-arrow app-right-arrow\" (click)=\"nextStep(formIndex)\"></em>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"app-stepper\">\r\n          <div *ngFor=\"let step of mobileFormSteps; index as i;\" class=\"app-stepper-item-container\">\r\n            <div class=\"app-stepper-item app-stepper-item-circle\"\r\n              [ngClass]=\"(activeStep===i) ? 'app-stepper-item-active': 'app-stepper-item-inactive'\"\r\n              (click)=\"setStep(i)\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"app-btns-container\">\r\n          <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submit()\" id=\"submit\"\r\n            [disabled]=\"!mobileForm.at(formIndex).valid\">{{ 'Global.Btn.simulationUpdate' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-home/simulation-home.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-home/simulation-home.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <div>\r\n      <h2 [innerHTML]=\"'Simulator.step0.header' | translate\"></h2>\r\n    </div>\r\n    <div>\r\n      <div [innerHTML]=\"'Simulator.step0.info' | translate\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"app-info-box-container\">\r\n    <div>\r\n      <div class=\"app-page-installment-img\"></div>\r\n      <div>\r\n        <p [innerHTML]=\"'Simulator.step0.goToInstallmenPath' | translate\"></p>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"button\" routerLink=\"installment\" skipLocationChange=\"true\"\r\n        id=\"goToInstallmenPathBtn\">{{ 'Simulator.step0.goToInstallmenPathBtn' | translate }}</button>\r\n    </div>\r\n\r\n    <div>\r\n      <div class=\"app-page-loan-img\"></div>\r\n      <div>\r\n        <p [innerHTML]=\"'Simulator.step0.goToLoanPath' | translate\"></p>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"button\" routerLink=\"loan-amount\" skipLocationChange=\"true\"\r\n        id=\"goToLoanPath\">{{ 'Simulator.step0.goToLoanPathBtn' | translate  }}</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-path/simulation-path.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-path/simulation-path.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"steps.length > 0\">\r\n  <div class=\"app-stepper\">\r\n    <div *ngFor=\"let step of steps; index as stepperIndex;\">\r\n      <div\r\n        [ngClass]=\"(activeStep===stepperIndex) ? 'app-stepper-item-active': (activeStep > stepperIndex) ? 'app-stepper-item-after-active' : ''\">\r\n        {{ step.label }}</div>\r\n\r\n      <div class=\"app-stepper-header\">\r\n        <p>{{ step.headerText }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <form [formGroup]=\"form\">\r\n      <div *ngFor=\"let step of formSteps; index as formIndex; let last = last;\">\r\n        <div *ngIf=\"activeStep===formIndex\">\r\n\r\n          <formly-form [form]=\"form.at(formIndex)\" [model]=\"model\" [fields]=\"formSteps[formIndex]\">\r\n          </formly-form>\r\n\r\n          <div class=\"app-btns-container\">\r\n\r\n            <button *ngIf=\"!last\" class=\"btn btn-primary\" type=\"button\" [disabled]=\"!form.at(formIndex).valid\"\r\n              id=\"nextStep\" (click)=\"nextStep(formIndex)\">{{ 'Global.Btn.next' | translate }}</button>\r\n            <button *ngIf=\"last\" class=\"btn btn-primary\" [disabled]=\"!form.at(formIndex).valid\" type=\"submit\"\r\n              (click)=submit(formIndex) id=\"submit\">{{ 'Global.Btn.next' | translate }}</button>\r\n            <button *ngIf=\"formIndex !== 0\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"prevStep(formIndex)\"\r\n              id=\"prevStep\">{{ 'Global.Btn.back' | translate }}</button>\r\n            <button *ngIf=\"formIndex === 0\" class=\"btn btn-outline-primary\" type=\"button\" [routerLink]=\"['../']\"\r\n              skipLocationChange=\"true\" id=\"backToHome\">{{ 'Global.Btn.back' | translate }}</button>\r\n\r\n          </div>\r\n          <alert type=\"danger\" *ngIf=\"methodUnavailable\" [dismissible]=\"true\" (onClosed)=\"onAlertClosed()\"\r\n            [innerHTML]=\"'Global.MethodUnavailable' | translate\">\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=\"isResultView\">\r\n    <app-simulation-results></app-simulation-results>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-results/simulation-results.component.html": 
        /*!******************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-results/simulation-results.component.html ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"simulationResults\">\r\n  <div>\r\n    <div *ngIf=\"simulationResults.length === 0\">\r\n      <div [innerHTML]=\"'SimulatorNoResults.info' | translate\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"simulationResults.length > 0\">\r\n      <div [innerHTML]=\"'SimulatorResults.info' | translate\"></div>\r\n    </div>\r\n\r\n    <div class=\"app-simulation-results-container\">\r\n      <div class=\"app-simulation-item app-show-results\" *ngIf=\"simulationResults.length > 0 && simulation\">\r\n        <div class=\"app-simulation\">\r\n          <div class=\"app-warning\" *ngIf=\"simulationWarningInstallment\">\r\n            <div class=\"app-warning-icon\"></div>\r\n            <div>\r\n              <p [innerHTML]=\"'SimulatorResults.warningReducedInstallment' | translate\"></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"app-warning\" *ngIf=\"simulationWarningLoan\">\r\n            <div class=\"app-warning-icon\"></div>\r\n            <div>\r\n              <p [innerHTML]=\"'SimulatorResults.warningReducedLoan' | translate\"></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"app-simulation-edit-btn-container\">\r\n            <button type=\"button\" class=\"btn btn-primary app-simulation-edit-btn\" (click)=\"openModal()\">Edytuj</button>\r\n          </div>\r\n          <div class=\"app-simulation-slider\">\r\n            <div class=\"app-simulation-slider-btn app-simulation-slider-btn-left\" >\r\n              <i class=\"app-arrow app-left-arrow\" (click)=\"goLeft()\" *ngIf=\"simulationResults.length > 1\"></i>\r\n            </div>\r\n            <app-simulation-results-view class=\"app-view-results\"\r\n              [simulation]='simulation'\r\n              [simulationVariant]='simulationVariant'\r\n              [simulationParametres]='simulationParametres'>\r\n            </app-simulation-results-view>\r\n            <div class=\"app-simulation-slider-btn\" >\r\n              <i class=\"app-arrow app-right-arrow\" (click)=\"goRight()\" *ngIf=\"simulationResults.length > 1\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"app-results-switch\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary app-switch-btn\" *ngIf=\"optimalOption\"\r\n              (click)=\"showOptimal()\" [ngClass]=\"activeResult === 'OPTIMAL' ? 'app-option-active' : ''\"\r\n              id=\"optimalOption\">{{ 'SimulatorResults.switch.optimal' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-outline-primary app-switch-btn\" *ngIf=\"quickOption\"\r\n              (click)=\"showQuick()\" [ngClass]=\"activeResult === 'QUICK' ? 'app-option-active' : ''\"\r\n              id=\"quickOption\">{{ 'SimulatorResults.switch.quick' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-outline-primary app-switch-btn\" *ngIf=\"safeOption\" (click)=\"showSafe()\"\r\n              [ngClass]=\"activeResult === 'SAFE' ? 'app-option-active' : ''\"\r\n              id=\"safeOption\">{{ 'SimulatorResults.switch.safe' | translate }}</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"simulation.simulationStatus === 'LOW_OWN_CONTRIBUTION'\">\r\n          <div class=\"app-warning\">\r\n            <div class=\"app-warning-icon\"></div>\r\n            <div>\r\n              <p>{{ 'SimulatorResults.warningLowOwnContribution' | translate }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <app-view-data-container [appViewDataToDisplay]=\"creditStandingView\"></app-view-data-container>\r\n      </div>\r\n      <div class=\"app-simulation-item app-no-results-to-show\" *ngIf=\"simulationResults.length === 0\">\r\n        <div class=\"app-simulation-edit-btn-container\">\r\n          <button type=\"button\" class=\"btn btn-primary app-simulation-edit-btn\" (click)=\"openModal()\">Edytuj</button>\r\n        </div>\r\n        <div class=\"app-warning-no-results-icon\"></div>\r\n        <div [innerHTML]=\"'SimulatorNoResults.waringInfo' | translate\"></div>\r\n      </div>\r\n      <div class=\"app-simulation-item app-simulation-edit-form\">\r\n        <div>{{'SimulatorResults.panel.changeParameters' | translate}}</div>\r\n        <form [formGroup]=\"form\" action=submit()>\r\n          <formly-form [model]=\"model\" [fields]=\"fields\" [form]=\"form\"></formly-form>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-btns-container\">\r\n\r\n      <button class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['../sendSimulation']\"\r\n        skipLocationChange=\"true\" id=\"sendSimulation\" [disabled]=\"simulationResults.length === 0\">{{ 'Global.Btn.send' | translate }}</button>\r\n      <button class=\"btn btn-outline-primary\" type=\"button\"\r\n        (click)=\"startNewSimulation()\" id=\"backToHome\">{{ 'SimulationSent.newSimulation' | translate }}</button>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <p>{{ 'SimulatorResults.infoTextBottom' | translate }}</p>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-send/simulation-send.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-send/simulation-send.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <div>\r\n      <h2 [innerHTML]=\"'SimulationSend.header' | translate\"></h2>\r\n    </div>\r\n    <div>\r\n      <p [innerHTML]=\"'SimulationSend.info' | translate\"></p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"app-form\">\r\n\r\n    <form [formGroup]=\"form\">\r\n      <formly-form [model]=\"model\" [fields]=\"fields\" [form]=\"form\"></formly-form>\r\n    </form>\r\n\r\n    <div *ngIf=\"!userService.isBroker()\">\r\n      <a [href]=\"rodoInformationURL\" target=\"_blank\">Klauzula informacyjna</a>\r\n    </div>\r\n\r\n    <alert type=\"danger\" *ngIf=\"methodUnavailable\" [dismissible]=\"true\" (onClosed)=\"onAlertClosed()\"\r\n      [innerHTML]=\"'Global.MethodUnavailableSend' | translate\">\r\n    </alert>\r\n    <div class=\"app-btns-container\">\r\n      <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submit()\" id=\"submit\"\r\n        [disabled]=\"!form.valid\">{{ 'SimulationSend.send' | translate }}</button>\r\n      <button class=\"btn btn-outline-primary\" type=\"button\"\r\n        (click)=\"backToSimulation()\">{{ 'Global.Btn.back' | translate }}</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <div>\r\n      <h2 [innerHTML]=\"'SimulationSent.header' | translate\"></h2>\r\n    </div>\r\n    <div>\r\n      <p [innerHTML]=\"'SimulationSent.info' | translate\"></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-btns-container\">\r\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goToChecklistWebComponent()\" skipLocationChange=\"true\"\r\n      *ngIf=\"showChecklistBtn\">{{ 'SimulationSent.goToChecklist' | translate }}</button>\r\n    <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"startNewSimulation()\"\r\n      id=\"backToHome\">{{ 'SimulationSent.newSimulation' | translate }}</button>\r\n  </div>\r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
            /* harmony import */ var _app_modules_simulation_components_simulation_base_simulation_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-base/simulation-base.component */ "./src/app/modules/simulation/components/simulation-base/simulation-base.component.ts");
            /* harmony import */ var _app_modules_checklist_components_checklist_base_checklist_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-base/checklist-base.component */ "./src/app/modules/checklist/components/checklist-base/checklist-base.component.ts");
            /* harmony import */ var _app_modules_contact_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/contact/components/contact/contact.component */ "./src/app/modules/contact/components/contact/contact.component.ts");
            /* harmony import */ var _app_modules_contact_components_contact_confirmation_contact_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/contact/components/contact-confirmation/contact-confirmation.component */ "./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.ts");
            var routes = [
                { path: '**', component: _components__WEBPACK_IMPORTED_MODULE_3__["NoContentComponent"] },
                { path: 'simulation-base', component: _app_modules_simulation_components_simulation_base_simulation_base_component__WEBPACK_IMPORTED_MODULE_4__["SimulationBaseComponent"] },
                { path: 'checklist-base', component: _app_modules_checklist_components_checklist_base_checklist_base_component__WEBPACK_IMPORTED_MODULE_5__["ChecklistBaseComponent"] },
                { path: 'kontakt', component: _app_modules_contact_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], outlet: 'contact' },
                { path: 'kontakt/dziekujemy', component: _app_modules_contact_components_contact_confirmation_contact_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["ContactConfirmationComponent"], outlet: 'contact' },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.userName = 'Jan Kowalski';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/shared.module */ "./src/app/modules/shared-module/shared.module.ts");
            /* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/index */ "./src/app/components/index.ts");
            /* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm2015/elements.js");
            /* harmony import */ var _app_modules_simulation_simulation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/simulation/simulation.module */ "./src/app/modules/simulation/simulation.module.ts");
            /* harmony import */ var _app_modules_simulation_components_simulation_base_simulation_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-base/simulation-base.component */ "./src/app/modules/simulation/components/simulation-base/simulation-base.component.ts");
            /* harmony import */ var _app_modules_checklist_checklist_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/checklist/checklist.module */ "./src/app/modules/checklist/checklist.module.ts");
            /* harmony import */ var _app_modules_checklist_components_checklist_base_checklist_base_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-base/checklist-base.component */ "./src/app/modules/checklist/components/checklist-base/checklist-base.component.ts");
            /* harmony import */ var _app_modules_contact_contact_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/modules/contact/contact.module */ "./src/app/modules/contact/contact.module.ts");
            /* harmony import */ var _modules_contact_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/contact/components */ "./src/app/modules/contact/components/index.ts");
            /* harmony import */ var _app_modules_login_login_home_login_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/modules/login/login-home/login-home.component */ "./src/app/modules/login/login-home/login-home.component.ts");
            /* harmony import */ var _app_modules_login_login_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/modules/login/login.module */ "./src/app/modules/login/login.module.ts");
            /* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule(injector, storage, userService) {
                    this.injector = injector;
                    this.storage = storage;
                    this.userService = userService;
                    var simulationModule = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_8__["createCustomElement"])(_app_modules_simulation_components_simulation_base_simulation_base_component__WEBPACK_IMPORTED_MODULE_10__["SimulationBaseComponent"], { injector: injector });
                    var contactModule = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_8__["createCustomElement"])(_modules_contact_components__WEBPACK_IMPORTED_MODULE_14__["ContactBaseComponent"], { injector: injector });
                    var checklistModule = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_8__["createCustomElement"])(_app_modules_checklist_components_checklist_base_checklist_base_component__WEBPACK_IMPORTED_MODULE_12__["ChecklistBaseComponent"], { injector: injector });
                    var loginModule = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_8__["createCustomElement"])(_app_modules_login_login_home_login_home_component__WEBPACK_IMPORTED_MODULE_15__["LoginHomeComponent"], { injector: injector });
                    customElements.define('simulation-module', simulationModule);
                    customElements.define('contact-module', contactModule);
                    customElements.define('checklist-module', checklistModule);
                    customElements.define('login-module', loginModule);
                }
                AppModule.prototype.ngDoBootstrap = function () { };
                return AppModule;
            }());
            AppModule.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_17__["LOCAL_STORAGE"],] }] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_18__["UserAuthService"] }
            ]; };
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _components_index__WEBPACK_IMPORTED_MODULE_7__["NoContentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                        _app_modules_checklist_checklist_module__WEBPACK_IMPORTED_MODULE_11__["ChecklistModule"],
                        _app_modules_simulation_simulation_module__WEBPACK_IMPORTED_MODULE_9__["SimulationModule"],
                        _app_modules_contact_contact_module__WEBPACK_IMPORTED_MODULE_13__["ContactModule"],
                        _app_modules_login_login_module__WEBPACK_IMPORTED_MODULE_16__["LoginModule"],
                        _app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: [],
                    entryComponents: [_modules_contact_components__WEBPACK_IMPORTED_MODULE_14__["ContactBaseComponent"], _app_modules_simulation_components_simulation_base_simulation_base_component__WEBPACK_IMPORTED_MODULE_10__["SimulationBaseComponent"], _app_modules_checklist_components_checklist_base_checklist_base_component__WEBPACK_IMPORTED_MODULE_12__["ChecklistBaseComponent"]]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_17__["LOCAL_STORAGE"]))
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/index.ts": 
        /*!*************************************!*\
          !*** ./src/app/components/index.ts ***!
          \*************************************/
        /*! exports provided: NoContentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-content/no-content.component */ "./src/app/components/no-content/no-content.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoContentComponent", function () { return _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_1__["NoContentComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/components/no-content/no-content.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/no-content/no-content.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/no-content/no-content.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/no-content/no-content.component.ts ***!
          \***************************************************************/
        /*! exports provided: NoContentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoContentComponent", function () { return NoContentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NoContentComponent = /** @class */ (function () {
                function NoContentComponent() {
                }
                NoContentComponent.prototype.ngOnInit = function () {
                };
                return NoContentComponent;
            }());
            NoContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-no-content',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-content/no-content.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-content.component.scss */ "./src/app/components/no-content/no-content.component.scss")).default]
                })
            ], NoContentComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/checklist-routing.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/modules/checklist/checklist-routing.module.ts ***!
          \***************************************************************/
        /*! exports provided: ChecklistRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistRoutingModule", function () { return ChecklistRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_checklist_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/checklist/components */ "./src/app/modules/checklist/components/index.ts");
            var routes = [
                {
                    path: 'dokumenty',
                    component: _app_modules_checklist_components__WEBPACK_IMPORTED_MODULE_3__["ChecklistHomeComponent"],
                    outlet: 'checklist'
                },
                {
                    path: 'dokumenty/start',
                    component: _app_modules_checklist_components__WEBPACK_IMPORTED_MODULE_3__["ChecklistPathComponent"],
                    outlet: 'checklist'
                },
                {
                    path: 'dokumenty/wyniki',
                    component: _app_modules_checklist_components__WEBPACK_IMPORTED_MODULE_3__["ChecklistResultsComponent"],
                    outlet: 'checklist'
                },
                {
                    path: 'dokumenty/wyslij',
                    component: _app_modules_checklist_components__WEBPACK_IMPORTED_MODULE_3__["ChecklistSendComponent"],
                    outlet: 'checklist'
                },
                {
                    path: 'dokumenty/dziekujemy',
                    component: _app_modules_checklist_components__WEBPACK_IMPORTED_MODULE_3__["ChecklistSentComponent"],
                    outlet: 'checklist'
                }
            ];
            var ChecklistRoutingModule = /** @class */ (function () {
                function ChecklistRoutingModule() {
                }
                return ChecklistRoutingModule;
            }());
            ChecklistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ChecklistRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/checklist.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/checklist/checklist.module.ts ***!
          \*******************************************************/
        /*! exports provided: ChecklistModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistModule", function () { return ChecklistModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _checklist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checklist-routing.module */ "./src/app/modules/checklist/checklist-routing.module.ts");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/modules/checklist/components/index.ts");
            /* harmony import */ var _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/shared.module */ "./src/app/modules/shared-module/shared.module.ts");
            var ChecklistModule = /** @class */ (function () {
                function ChecklistModule() {
                }
                return ChecklistModule;
            }());
            ChecklistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components__WEBPACK_IMPORTED_MODULE_4__["ChecklistPathComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_4__["ChecklistResultsComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_4__["ChecklistSendComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_4__["ChecklistSentComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_4__["ChecklistBaseComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_4__["ChecklistHomeComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _checklist_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChecklistRoutingModule"],
                        _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    ],
                    providers: []
                })
            ], ChecklistModule);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-base/checklist-base.component.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-base/checklist-base.component.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hlY2tsaXN0L2NvbXBvbmVudHMvY2hlY2tsaXN0LWJhc2UvY2hlY2tsaXN0LWJhc2UuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-base/checklist-base.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-base/checklist-base.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ChecklistBaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistBaseComponent", function () { return ChecklistBaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/checklist/service/inter-component-communication.service */ "./src/app/modules/checklist/service/inter-component-communication.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            var ChecklistBaseComponent = /** @class */ (function () {
                function ChecklistBaseComponent(router, eltRef, interComponentCommunicationService, userService) {
                    this.router = router;
                    this.eltRef = eltRef;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.userService = userService;
                }
                ChecklistBaseComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    sessionStorage.clear();
                    setTimeout(function () {
                        _this.router.navigate([{ outlets: { checklist: ['dokumenty'] } }], { skipLocationChange: true });
                    }, 200);
                    var showSimulationBtn = this.eltRef.nativeElement.hasAttribute('simulationAnchor');
                    if (showSimulationBtn) {
                        var simulationAnchor = this.eltRef.nativeElement.getAttribute('simulationAnchor');
                        this.interComponentCommunicationService.showSimulationBtn(simulationAnchor);
                    }
                    var hasViewportScrollAnchor = this.eltRef.nativeElement.hasAttribute('viewportScrollAnchor');
                    if (hasViewportScrollAnchor) {
                        var viewportScrollAnchor = this.eltRef.nativeElement.getAttribute('viewportScrollAnchor');
                        this.interComponentCommunicationService.setViewportScrollAnchor(viewportScrollAnchor);
                    }
                };
                return ChecklistBaseComponent;
            }());
            ChecklistBaseComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_3__["InterComponentCommunicationService"] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] }
            ]; };
            ChecklistBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checklist-base',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklist-base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-base/checklist-base.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklist-base.component.scss */ "./src/app/modules/checklist/components/checklist-base/checklist-base.component.scss")).default]
                })
            ], ChecklistBaseComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-home/checklist-home.component.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-home/checklist-home.component.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hlY2tsaXN0L2NvbXBvbmVudHMvY2hlY2tsaXN0LWhvbWUvY2hlY2tsaXN0LWhvbWUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-home/checklist-home.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-home/checklist-home.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ChecklistHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistHomeComponent", function () { return ChecklistHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/checklist/service/inter-component-communication.service */ "./src/app/modules/checklist/service/inter-component-communication.service.ts");
            var ChecklistHomeComponent = /** @class */ (function () {
                function ChecklistHomeComponent(translate, translationLoader, interComponentCommunicationService) {
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.interComponentCommunicationService.setUpSimulationStep(0);
                    this.interComponentCommunicationService.setIsChecklistResultView(false);
                    this.interComponentCommunicationService.setChecklistData(null);
                }
                ChecklistHomeComponent.prototype.ngOnDestroy = function () {
                    this.interComponentCommunicationService.setShouldScrollToTopPageOnHomePage(true);
                };
                return ChecklistHomeComponent;
            }());
            ChecklistHomeComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_4__["InterComponentCommunicationService"] }
            ]; };
            ChecklistHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checklist-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklist-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-home/checklist-home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklist-home.component.scss */ "./src/app/modules/checklist/components/checklist-home/checklist-home.component.scss")).default]
                })
            ], ChecklistHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-path/checklist-path.component.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-path/checklist-path.component.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-stepper {\n  display: flex;\n}\n\n.app-stepper-item-active {\n  background-color: #00965E;\n  color: #fff;\n}\n\n.app-stepper-item-after-active {\n  background-color: #008251;\n  color: #fff;\n}\n\n.app-stepper-header {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGVja2xpc3QvY29tcG9uZW50cy9jaGVja2xpc3QtcGF0aC9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhc3NldHNcXGNvbmZpZ1xcY29tcG9uZW50c1xcX2FwcFN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jaGVja2xpc3QvY29tcG9uZW50cy9jaGVja2xpc3QtcGF0aC9jaGVja2xpc3QtcGF0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jaGVja2xpc3QvY29tcG9uZW50cy9jaGVja2xpc3QtcGF0aC9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhc3NldHNcXGNvbmZpZ1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UseUJFSmM7RUZLZCxXQUFBO0FDREY7O0FESUE7RUFDRSx5QkVTVztFRlJYLFdBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hlY2tsaXN0L2NvbXBvbmVudHMvY2hlY2tsaXN0LXBhdGgvY2hlY2tsaXN0LXBhdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vY29sb3JzXCI7XHJcblxyXG4uYXBwLXN0ZXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcHAtc3RlcHBlci1pdGVtLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hcHAtc3RlcHBlci1pdGVtLWFmdGVyLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmstaG92ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hcHAtc3RlcHBlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiIsIi5hcHAtc3RlcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hcHAtc3RlcHBlci1pdGVtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2NUU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYXBwLXN0ZXBwZXItaXRlbS1hZnRlci1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MjUxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFwcC1zdGVwcGVyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59IiwiJGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiR0ZXh0LWNvbG9yOiAjMkQyOTI2O1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMDk2NUU7XHJcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjRUVGOUYwO1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogIzE0MTQxNDtcclxuXHJcbiRzZWNvbmRhcnktY29sb3I6ICMwMEJDOEM7XHJcblxyXG4kY29udHJhc3QtY29sb3I6ICNGNUE2MjM7XHJcbiRjb250cmFzdC1jb2xvci1zZWNvbmQ6ICNGRkNGODA7XHJcblxyXG4kc3VjY2Vzcy1jb2xvci1wcmltYXJ5OiAjMEZCNzc3O1xyXG4kc3VjY2Vzcy1jb2xvci1zZWNvbmRhcnk6ICM5RUREQTY7XHJcbiRlcnJvci1jb2xvci1wcmltYXJ5OiAjRDQwMDAwO1xyXG4kZXJyb3ItY29sb3Itc2Vjb25kYXJ5OiAjRkFFNUU1O1xyXG5cclxuJG5vdGljZS1jb2xvci1wcmltYXJ5OiAjRThENzAwO1xyXG4kbm90aWNlLWNvbG9yLXNlY29uZGFyeTogI0ZGRkFCQztcclxuXHJcbiRsaW5rOiAjMDA4RjU4O1xyXG4kbGluay1ob3ZlcjogIzAwODI1MTtcclxuJGdyZXktY29sb3I6ICNFRUU7XHJcbiRncmV5LWNvbG9yLXNlY29uZDogIzc2NzY3NjtcclxuJGdyZXktaW5wdXQtY29sb3I6ICNFNUU1RTU7XHJcbiRmdWxsLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-path/checklist-path.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-path/checklist-path.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ChecklistPathComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistPathComponent", function () { return ChecklistPathComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _model_CheckListData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/CheckListData */ "./src/app/modules/checklist/model/CheckListData.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_checklist_service_checklist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/checklist/service/checklist.service */ "./src/app/modules/checklist/service/checklist.service.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_modules_checklist_service_checklist_form_configuration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/checklist/service/checklist-form-configuration.service */ "./src/app/modules/checklist/service/checklist-form-configuration.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/modules/checklist/service/inter-component-communication.service */ "./src/app/modules/checklist/service/inter-component-communication.service.ts");
            var ChecklistPathComponent = /** @class */ (function () {
                function ChecklistPathComponent(translate, translationLoader, validationsLoader, router, route, checklistService, viewportScroller, checklistModelConfigurationService, interComponentCommunicationService) {
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.router = router;
                    this.route = route;
                    this.checklistService = checklistService;
                    this.viewportScroller = viewportScroller;
                    this.checklistModelConfigurationService = checklistModelConfigurationService;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.methodUnavailable = false;
                    this.steps = [];
                    this.formSteps = [];
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.steps = checklistModelConfigurationService.steps;
                    this.interComponentChecklistCommunicationService = interComponentCommunicationService;
                }
                ChecklistPathComponent.prototype.ngOnInit = function () {
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                    if (this.interComponentChecklistCommunicationService.checkListData) {
                        this.model = this.interComponentChecklistCommunicationService.checkListData;
                    }
                    else {
                        this.model = {
                            CheckListData: new _model_CheckListData__WEBPACK_IMPORTED_MODULE_4__["CheckListData"]()
                        };
                    }
                    var stepOneFields = this.checklistModelConfigurationService.formFieldStepOne();
                    this.onInit(stepOneFields);
                    this.validationsLoader.init();
                    if (this.interComponentChecklistCommunicationService.checklistLastActiveStep === (this.steps.length - 1)) {
                        this.interComponentChecklistCommunicationService.setIsChecklistResultView(true);
                    }
                };
                ChecklistPathComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopChecklistPosition();
                };
                ChecklistPathComponent.prototype.onInit = function (stepOneFields) {
                    this.formSteps = [
                        stepOneFields,
                        this.checklistModelConfigurationService.formFieldStepTwo(),
                        this.checklistModelConfigurationService.formFieldStepThree()
                    ];
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"](this.formSteps.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({}); }));
                    this.options = this.steps.map(function () { return ({}); });
                };
                ChecklistPathComponent.prototype.prevStep = function (step) {
                    if (step - 1 >= 0) {
                        this.interComponentChecklistCommunicationService.setUpSimulationStep(step - 1);
                        this.returnToTopChecklistPosition();
                    }
                };
                ChecklistPathComponent.prototype.nextStep = function (step) {
                    if (step + 1 < this.steps.length) {
                        this.interComponentChecklistCommunicationService.setUpSimulationStep(step + 1);
                        this.returnToTopChecklistPosition();
                    }
                };
                ChecklistPathComponent.prototype.submit = function (step) {
                    var _this = this;
                    if (this.form.valid) {
                        this.interComponentChecklistCommunicationService.setChecklistData(this.model);
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"].show();
                        this.checklistService.fetchDocuments(this.model.CheckListData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (result) {
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"].hide();
                            _this.methodUnavailable = false;
                            _this.checklistService.updateChecklistResult(result);
                            _this.interComponentChecklistCommunicationService.setUpSimulationStep(step + 1);
                            _this.interComponentChecklistCommunicationService.setIsChecklistResultView(true);
                            return rxjs__WEBPACK_IMPORTED_MODULE_13__["EMPTY"];
                        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function (err) {
                            console.log(err);
                            _this.methodUnavailable = true;
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"].hide();
                            return err;
                        })).subscribe();
                    }
                };
                ChecklistPathComponent.prototype.returnToTopChecklistPosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                ChecklistPathComponent.prototype.onAlertClosed = function () {
                    this.methodUnavailable = false;
                };
                return ChecklistPathComponent;
            }());
            ChecklistPathComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_6__["ValidationLoader"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: _app_modules_checklist_service_checklist_service__WEBPACK_IMPORTED_MODULE_8__["ChecklistService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"] },
                { type: _app_modules_checklist_service_checklist_form_configuration_service__WEBPACK_IMPORTED_MODULE_11__["ChecklistFormConfigurationService"] },
                { type: _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_14__["InterComponentCommunicationService"] }
            ]; };
            ChecklistPathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checklist-path',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklist-path.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-path/checklist-path.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklist-path.component.scss */ "./src/app/modules/checklist/components/checklist-path/checklist-path.component.scss")).default]
                })
            ], ChecklistPathComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-results/checklist-results.component.scss": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-results/checklist-results.component.scss ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-doc-container,\n.app-subsection-header {\n  display: flex;\n}\n\n.app-mobileVisible {\n  display: block;\n}\n\n.app-desktop-view {\n  display: none;\n}\n\n@media (min-width: 1024px) {\n  .app-mobileVisible {\n    display: none;\n  }\n\n  .app-desktop-view {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGVja2xpc3QvY29tcG9uZW50cy9jaGVja2xpc3QtcmVzdWx0cy9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhcHBcXG1vZHVsZXNcXGNoZWNrbGlzdFxcY29tcG9uZW50c1xcY2hlY2tsaXN0LXJlc3VsdHNcXGNoZWNrbGlzdC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NoZWNrbGlzdC9jb21wb25lbnRzL2NoZWNrbGlzdC1yZXN1bHRzL2NoZWNrbGlzdC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFLGFBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGOztFRElBO0lBQ0UsY0FBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NoZWNrbGlzdC9jb21wb25lbnRzL2NoZWNrbGlzdC1yZXN1bHRzL2NoZWNrbGlzdC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9icmVha3BvaW50cyc7XHJcblxyXG4uYXBwLWRvYy1jb250YWluZXIsXHJcbi5hcHAtc3Vic2VjdGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcHAtbW9iaWxlVmlzaWJsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hcHAtZGVza3RvcC12aWV3IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJGxnKSB7XHJcbiAgLmFwcC1tb2JpbGVWaXNpYmxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYXBwLWRlc2t0b3AtdmlldyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIuYXBwLWRvYy1jb250YWluZXIsXG4uYXBwLXN1YnNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFwcC1tb2JpbGVWaXNpYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hcHAtZGVza3RvcC12aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuYXBwLW1vYmlsZVZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYXBwLWRlc2t0b3AtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-results/checklist-results.component.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-results/checklist-results.component.ts ***!
          \***********************************************************************************************/
        /*! exports provided: ChecklistResultsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistResultsComponent", function () { return ChecklistResultsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _app_modules_checklist_service_checklist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/checklist/service/checklist.service */ "./src/app/modules/checklist/service/checklist.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_modules_checklist_service_checklist_form_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/checklist/service/checklist-form-configuration.service */ "./src/app/modules/checklist/service/checklist-form-configuration.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/checklist/service/inter-component-communication.service */ "./src/app/modules/checklist/service/inter-component-communication.service.ts");
            var ChecklistResultsComponent = /** @class */ (function () {
                function ChecklistResultsComponent(translate, translationLoader, validationsLoader, checklistService, viewportScroller, checklistModelConfigurationService, router, route, interComponentCommunicationService) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.checklistService = checklistService;
                    this.viewportScroller = viewportScroller;
                    this.checklistModelConfigurationService = checklistModelConfigurationService;
                    this.router = router;
                    this.route = route;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.steps = [];
                    this.sections = [
                        {
                            code: 'applicants',
                            visible: true,
                            subsections: null
                        },
                        {
                            code: 'purposes',
                            visible: true,
                            subsections: null
                        }
                    ];
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.translate.get('SimulatorResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                    this.steps = this.checklistModelConfigurationService.steps;
                    this.interComponentChecklistCommunicationService = interComponentCommunicationService;
                }
                ChecklistResultsComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopChecklistPosition();
                };
                ChecklistResultsComponent.prototype.ngOnInit = function () {
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                    var result = this.checklistService.getCheckListResults();
                    this.checklistResult = result;
                    for (var i = 0; i < result.documents.sections.length; i++) {
                        this.sections[i].subsections = result.documents.sections[i].entries;
                        this.sections[i].subsections.forEach(function (subsection) {
                            subsection.visible = false;
                        });
                    }
                };
                ChecklistResultsComponent.prototype.toggle = function (sectionIndex, subSectionIndex) {
                    this.sections[sectionIndex].subsections[subSectionIndex] = Object.assign({}, this.sections[sectionIndex].subsections[subSectionIndex], { visible: !this.sections[sectionIndex].subsections[subSectionIndex].visible });
                    this.viewportScroller.scrollToAnchor("subsection-" + subSectionIndex);
                };
                ChecklistResultsComponent.prototype.returnToTopChecklistPosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                ChecklistResultsComponent.prototype.goBack = function () {
                    this.returnToTopChecklistPosition();
                    this.interComponentCommunicationService.setIsChecklistResultView(false);
                    this.interComponentCommunicationService.setUpSimulationStep(0);
                    this.router.navigate(['../start'], { relativeTo: this.route, skipLocationChange: true }).catch(function (error) {
                        console.log(error);
                    });
                };
                return ChecklistResultsComponent;
            }());
            ChecklistResultsComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__["ValidationLoader"] },
                { type: _app_modules_checklist_service_checklist_service__WEBPACK_IMPORTED_MODULE_5__["ChecklistService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"] },
                { type: _app_modules_checklist_service_checklist_form_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ChecklistFormConfigurationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
                { type: _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_9__["InterComponentCommunicationService"] }
            ]; };
            ChecklistResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checklist-results',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklist-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-results/checklist-results.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklist-results.component.scss */ "./src/app/modules/checklist/components/checklist-results/checklist-results.component.scss")).default]
                })
            ], ChecklistResultsComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-send/checklist-send.component.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-send/checklist-send.component.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-stepper {\n  display: flex;\n}\n\n.app-stepper-item-active {\n  background-color: #00965E;\n  color: #fff;\n}\n\n.app-stepper-item-after-active {\n  background-color: #008251;\n  color: #fff;\n}\n\n.app-stepper-header {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGVja2xpc3QvY29tcG9uZW50cy9jaGVja2xpc3Qtc2VuZC9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhc3NldHNcXGNvbmZpZ1xcY29tcG9uZW50c1xcX2FwcFN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jaGVja2xpc3QvY29tcG9uZW50cy9jaGVja2xpc3Qtc2VuZC9jaGVja2xpc3Qtc2VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jaGVja2xpc3QvY29tcG9uZW50cy9jaGVja2xpc3Qtc2VuZC9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhc3NldHNcXGNvbmZpZ1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UseUJFSmM7RUZLZCxXQUFBO0FDREY7O0FESUE7RUFDRSx5QkVTVztFRlJYLFdBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hlY2tsaXN0L2NvbXBvbmVudHMvY2hlY2tsaXN0LXNlbmQvY2hlY2tsaXN0LXNlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vY29sb3JzXCI7XHJcblxyXG4uYXBwLXN0ZXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcHAtc3RlcHBlci1pdGVtLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hcHAtc3RlcHBlci1pdGVtLWFmdGVyLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmstaG92ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hcHAtc3RlcHBlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiIsIi5hcHAtc3RlcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hcHAtc3RlcHBlci1pdGVtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2NUU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYXBwLXN0ZXBwZXItaXRlbS1hZnRlci1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MjUxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFwcC1zdGVwcGVyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59IiwiJGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiR0ZXh0LWNvbG9yOiAjMkQyOTI2O1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMDk2NUU7XHJcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjRUVGOUYwO1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogIzE0MTQxNDtcclxuXHJcbiRzZWNvbmRhcnktY29sb3I6ICMwMEJDOEM7XHJcblxyXG4kY29udHJhc3QtY29sb3I6ICNGNUE2MjM7XHJcbiRjb250cmFzdC1jb2xvci1zZWNvbmQ6ICNGRkNGODA7XHJcblxyXG4kc3VjY2Vzcy1jb2xvci1wcmltYXJ5OiAjMEZCNzc3O1xyXG4kc3VjY2Vzcy1jb2xvci1zZWNvbmRhcnk6ICM5RUREQTY7XHJcbiRlcnJvci1jb2xvci1wcmltYXJ5OiAjRDQwMDAwO1xyXG4kZXJyb3ItY29sb3Itc2Vjb25kYXJ5OiAjRkFFNUU1O1xyXG5cclxuJG5vdGljZS1jb2xvci1wcmltYXJ5OiAjRThENzAwO1xyXG4kbm90aWNlLWNvbG9yLXNlY29uZGFyeTogI0ZGRkFCQztcclxuXHJcbiRsaW5rOiAjMDA4RjU4O1xyXG4kbGluay1ob3ZlcjogIzAwODI1MTtcclxuJGdyZXktY29sb3I6ICNFRUU7XHJcbiRncmV5LWNvbG9yLXNlY29uZDogIzc2NzY3NjtcclxuJGdyZXktaW5wdXQtY29sb3I6ICNFNUU1RTU7XHJcbiRmdWxsLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-send/checklist-send.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-send/checklist-send.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ChecklistSendComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistSendComponent", function () { return ChecklistSendComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _app_modules_checklist_service_checklist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/checklist/service/checklist.service */ "./src/app/modules/checklist/service/checklist.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
            /* harmony import */ var _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/modules/checklist/service/inter-component-communication.service */ "./src/app/modules/checklist/service/inter-component-communication.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
            var ChecklistSendComponent = /** @class */ (function () {
                function ChecklistSendComponent(translate, translationLoader, validationsLoader, checklistService, router, route, viewportScroller, interComponentCommunicationService, storage, userService) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.checklistService = checklistService;
                    this.router = router;
                    this.route = route;
                    this.viewportScroller = viewportScroller;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.storage = storage;
                    this.userService = userService;
                    this.methodUnavailable = false;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
                    this.model = {};
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.translate.get('SimulatorResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                    this.fields = this.getFields();
                    this.rodoInformationURL = _env_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].rodoInformationURL;
                }
                ChecklistSendComponent.prototype.ngOnInit = function () {
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                };
                ChecklistSendComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopChecklistPosition();
                };
                ChecklistSendComponent.prototype.getFields = function () {
                    var translate = this.translate;
                    return [
                        {
                            fieldGroup: [
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'firstName',
                                    templateOptions: {
                                        type: 'text',
                                        placeholder: translate.instant('ContactForm.fields.firstName.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                    validators: {
                                        validation: ['firstName']
                                    },
                                    hideExpression: this.userService.isBroker()
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'lastName',
                                    templateOptions: {
                                        type: 'text',
                                        placeholder: translate.instant('ContactForm.fields.lastName.label'),
                                        attributes: {},
                                        required: true
                                    },
                                    validators: {
                                        validation: ['lastName']
                                    },
                                    hideExpression: this.userService.isBroker()
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'email',
                                    templateOptions: {
                                        type: 'email',
                                        placeholder: translate.instant('ContactForm.fields.email.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                    validators: {
                                        validation: ['email'],
                                    },
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'phoneNumber',
                                    templateOptions: {
                                        type: 'tel',
                                        placeholder: translate.instant('ContactForm.fields.phoneNumber.label'),
                                        attributes: {},
                                        required: true
                                    },
                                    validators: {
                                        validation: ['phone'],
                                    },
                                    hideExpression: this.userService.isBroker()
                                }
                            ]
                        },
                        {
                            className: 'app-checkbox-list',
                            hideExpression: this.userService.isBroker(),
                            fieldGroup: [
                                {
                                    className: 'app-checkbox',
                                    key: 'selectAll',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.selectAll'),
                                        description: '',
                                        attributes: {
                                            tooltip: ''
                                        },
                                    },
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'marketingConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.marketingConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.marketingConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.marketingConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'digitalMarketingConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.digitalMarketingConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.digitalMarketingConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.digitalMarketingConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'offerPresentationConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.offerPresentationConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.offerPresentationConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.offerPresentationConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'digitalOfferPresentationConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.digitalOfferPresentationConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.digitalOfferPresentationConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.digitalOfferPresentationConsent': 'model.selectAll'
                                    }
                                }
                            ]
                        }
                    ];
                };
                ChecklistSendComponent.prototype.submit = function () {
                    if (this.form.valid) {
                        delete this.model.selectAll;
                        if (this.userService.isBroker()) {
                            this.sendEmail();
                        }
                        else {
                            this.saveLeadAndCheckListAndSendEmail();
                        }
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].show();
                    }
                };
                ChecklistSendComponent.prototype.saveLeadAndCheckListAndSendEmail = function () {
                    var _this = this;
                    this.checklistService.saveLead(this.model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function (saveLeadResult) {
                        _this.storage.set('leadId', saveLeadResult.id);
                        return _this.checklistService.saveChecklist(saveLeadResult.id);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function () {
                        return _this.checklistService.sendChecklist(_this.model.email);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].hide();
                        _this.router.navigate(['../dziekujemy'], { relativeTo: _this.route, skipLocationChange: true });
                        return rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (err) {
                        console.log(err);
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].hide();
                        _this.methodUnavailable = true;
                        return err;
                    })).subscribe();
                };
                ChecklistSendComponent.prototype.sendEmail = function () {
                    var _this = this;
                    this.checklistService.sendChecklist(this.model.email).subscribe(function (value) {
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].hide();
                        _this.router.navigate(['../dziekujemy'], { relativeTo: _this.route, skipLocationChange: true });
                    }, function (err) {
                        console.log(err);
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].hide();
                        _this.methodUnavailable = true;
                        return err;
                    });
                };
                ChecklistSendComponent.prototype.onAlertClosed = function () {
                    this.methodUnavailable = false;
                };
                ChecklistSendComponent.prototype.returnToTopChecklistPosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                ChecklistSendComponent.prototype.backToChecklist = function () {
                    this.returnToTopChecklistPosition();
                    this.interComponentCommunicationService.setUpSimulationStep(this.interComponentCommunicationService.checklistLastActiveStep);
                    this.router.navigate(['../wyniki'], { relativeTo: this.route, skipLocationChange: true });
                };
                return ChecklistSendComponent;
            }());
            ChecklistSendComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_5__["ValidationLoader"] },
                { type: _app_modules_checklist_service_checklist_service__WEBPACK_IMPORTED_MODULE_8__["ChecklistService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["ViewportScroller"] },
                { type: _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_13__["InterComponentCommunicationService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_12__["SESSION_STORAGE"],] }] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_14__["UserAuthService"] }
            ]; };
            ChecklistSendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checklist-send',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklist-send.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-send/checklist-send.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklist-send.component.scss */ "./src/app/modules/checklist/components/checklist-send/checklist-send.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_12__["SESSION_STORAGE"]))
            ], ChecklistSendComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hlY2tsaXN0L2NvbXBvbmVudHMvY2hlY2tsaXN0LXNlbnQvY2hlY2tsaXN0LXNlbnQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ChecklistSentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistSentComponent", function () { return ChecklistSentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/checklist/service/inter-component-communication.service */ "./src/app/modules/checklist/service/inter-component-communication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ChecklistSentComponent = /** @class */ (function () {
                function ChecklistSentComponent(translate, translationLoader, validationsLoader, viewportScroller, eltRef, interComponentCommunicationService, router, route) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.viewportScroller = viewportScroller;
                    this.eltRef = eltRef;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.router = router;
                    this.route = route;
                    this.showSimulationBtn = false;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.translate.get('ChecklistResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                }
                ChecklistSentComponent.prototype.ngOnInit = function () {
                    this.showSimulationBtn = this.interComponentCommunicationService.isSimulationBtnVisible;
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                };
                ChecklistSentComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopChecklistPosition();
                };
                ChecklistSentComponent.prototype.returnToTopChecklistPosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                ChecklistSentComponent.prototype.goToSimulationWebComponent = function () {
                    this.viewportScroller.scrollToAnchor(this.interComponentCommunicationService.simulationAnchor);
                    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: true });
                };
                ChecklistSentComponent.prototype.goToChecklistStartPage = function () {
                    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: true });
                };
                return ChecklistSentComponent;
            }());
            ChecklistSentComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__["ValidationLoader"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _app_modules_checklist_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_6__["InterComponentCommunicationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
            ]; };
            ChecklistSentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checklist-sent',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklist-sent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklist-sent.component.scss */ "./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.scss")).default]
                })
            ], ChecklistSentComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/components/index.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/checklist/components/index.ts ***!
          \*******************************************************/
        /*! exports provided: ChecklistBaseComponent, ChecklistPathComponent, ChecklistResultsComponent, ChecklistSendComponent, ChecklistSentComponent, ChecklistHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _app_modules_checklist_components_checklist_path_checklist_path_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-path/checklist-path.component */ "./src/app/modules/checklist/components/checklist-path/checklist-path.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChecklistPathComponent", function () { return _app_modules_checklist_components_checklist_path_checklist_path_component__WEBPACK_IMPORTED_MODULE_1__["ChecklistPathComponent"]; });
            /* harmony import */ var _app_modules_checklist_components_checklist_results_checklist_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-results/checklist-results.component */ "./src/app/modules/checklist/components/checklist-results/checklist-results.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChecklistResultsComponent", function () { return _app_modules_checklist_components_checklist_results_checklist_results_component__WEBPACK_IMPORTED_MODULE_2__["ChecklistResultsComponent"]; });
            /* harmony import */ var _app_modules_checklist_components_checklist_send_checklist_send_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-send/checklist-send.component */ "./src/app/modules/checklist/components/checklist-send/checklist-send.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChecklistSendComponent", function () { return _app_modules_checklist_components_checklist_send_checklist_send_component__WEBPACK_IMPORTED_MODULE_3__["ChecklistSendComponent"]; });
            /* harmony import */ var _app_modules_checklist_components_checklist_sent_checklist_sent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-sent/checklist-sent.component */ "./src/app/modules/checklist/components/checklist-sent/checklist-sent.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChecklistSentComponent", function () { return _app_modules_checklist_components_checklist_sent_checklist_sent_component__WEBPACK_IMPORTED_MODULE_4__["ChecklistSentComponent"]; });
            /* harmony import */ var _app_modules_checklist_components_checklist_home_checklist_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-home/checklist-home.component */ "./src/app/modules/checklist/components/checklist-home/checklist-home.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChecklistHomeComponent", function () { return _app_modules_checklist_components_checklist_home_checklist_home_component__WEBPACK_IMPORTED_MODULE_5__["ChecklistHomeComponent"]; });
            /* harmony import */ var _app_modules_checklist_components_checklist_base_checklist_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/checklist/components/checklist-base/checklist-base.component */ "./src/app/modules/checklist/components/checklist-base/checklist-base.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChecklistBaseComponent", function () { return _app_modules_checklist_components_checklist_base_checklist_base_component__WEBPACK_IMPORTED_MODULE_6__["ChecklistBaseComponent"]; });
            /* empty/unused harmony star reexport */
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/model/CheckListData.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/modules/checklist/model/CheckListData.ts ***!
          \**********************************************************/
        /*! exports provided: CheckListData, ApplicantIncome, ChecklistGenerationRequest */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckListData", function () { return CheckListData; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantIncome", function () { return ApplicantIncome; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistGenerationRequest", function () { return ChecklistGenerationRequest; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CheckListData = /** @class */ (function () {
                function CheckListData(loanAmount, creditPurposes, applicants, email) {
                    if (loanAmount === void 0) { loanAmount = null; }
                    if (creditPurposes === void 0) { creditPurposes = [new CreditPurpose()]; }
                    if (applicants === void 0) { applicants = [new Applicant()]; }
                    if (email === void 0) { email = ''; }
                    this.loanAmount = loanAmount;
                    this.creditPurposes = creditPurposes;
                    this.applicants = applicants;
                    this.email = email;
                }
                return CheckListData;
            }());
            var CreditPurpose = /** @class */ (function () {
                function CreditPurpose(creditPurpose, flatPurchaseType, housePurchaseType, propertyState, refinancingPurpose, refinancingType) {
                    if (creditPurpose === void 0) { creditPurpose = ''; }
                    this.creditPurpose = creditPurpose;
                    this.flatPurchaseType = flatPurchaseType;
                    this.housePurchaseType = housePurchaseType;
                    this.propertyState = propertyState;
                    this.refinancingPurpose = refinancingPurpose;
                    this.refinancingType = refinancingType;
                }
                return CreditPurpose;
            }());
            var Applicant = /** @class */ (function () {
                function Applicant(maritalStatus, regimeOfSeparateProperty, incomes) {
                    if (maritalStatus === void 0) { maritalStatus = ''; }
                    if (incomes === void 0) { incomes = [new ApplicantIncome()]; }
                    this.maritalStatus = maritalStatus;
                    this.regimeOfSeparateProperty = regimeOfSeparateProperty;
                    this.incomes = incomes;
                }
                return Applicant;
            }());
            var ApplicantIncome = /** @class */ (function () {
                function ApplicantIncome(incomeType, employmentContractType, employmentIncomeTypeBankAccount, employmentIncomeTypePremium, employmentIncomeTypeInternationalIncome, b2bContractType, b2bContractBillingType, farmIncomeTypeSpecialBranches, farmIncomeTypeRecordKeeping, farmIncomeTypeTenancy, otherIncomeTypePension, otherIncomeTypeAnnuity, otherIncomeTypeSeafarer, otherIncomeTypeRentalAgreement, otherIncomeType500plus, otherIncomeTypeSupervisoryBoardMember) {
                    if (incomeType === void 0) { incomeType = ''; }
                    this.incomeType = incomeType;
                    this.employmentContractType = employmentContractType;
                    this.employmentIncomeTypeBankAccount = employmentIncomeTypeBankAccount;
                    this.employmentIncomeTypePremium = employmentIncomeTypePremium;
                    this.employmentIncomeTypeInternationalIncome = employmentIncomeTypeInternationalIncome;
                    this.b2bContractType = b2bContractType;
                    this.b2bContractBillingType = b2bContractBillingType;
                    this.farmIncomeTypeSpecialBranches = farmIncomeTypeSpecialBranches;
                    this.farmIncomeTypeRecordKeeping = farmIncomeTypeRecordKeeping;
                    this.farmIncomeTypeTenancy = farmIncomeTypeTenancy;
                    this.otherIncomeTypePension = otherIncomeTypePension;
                    this.otherIncomeTypeAnnuity = otherIncomeTypeAnnuity;
                    this.otherIncomeTypeSeafarer = otherIncomeTypeSeafarer;
                    this.otherIncomeTypeRentalAgreement = otherIncomeTypeRentalAgreement;
                    this.otherIncomeType500plus = otherIncomeType500plus;
                    this.otherIncomeTypeSupervisoryBoardMember = otherIncomeTypeSupervisoryBoardMember;
                }
                return ApplicantIncome;
            }());
            var ChecklistGenerationRequest = /** @class */ (function () {
                function ChecklistGenerationRequest() {
                }
                return ChecklistGenerationRequest;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/service/checklist-control.service.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/modules/checklist/service/checklist-control.service.ts ***!
          \************************************************************************/
        /*! exports provided: ChecklistControlService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistControlService", function () { return ChecklistControlService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            var ChecklistControlService = /** @class */ (function () {
                function ChecklistControlService(httpClient) {
                    this.httpClient = httpClient;
                }
                ChecklistControlService.prototype.prepareHeaders = function () {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
                };
                ChecklistControlService.prototype.makeChecklistRequest$ = function (request) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.url);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.url, request, { headers: headers });
                    }
                };
                ChecklistControlService.prototype.sendMail$ = function (checklists) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.emailUrl);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.emailUrl, checklists, { headers: headers });
                    }
                };
                ChecklistControlService.prototype.saveChecklist$ = function (checklist) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.saveUrl);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.saveUrl, checklist, { headers: headers });
                    }
                };
                return ChecklistControlService;
            }());
            ChecklistControlService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ChecklistControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChecklistControlService);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/service/checklist-form-configuration.service.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/modules/checklist/service/checklist-form-configuration.service.ts ***!
          \***********************************************************************************/
        /*! exports provided: ChecklistFormConfigurationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistFormConfigurationService", function () { return ChecklistFormConfigurationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _model_CheckListData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/CheckListData */ "./src/app/modules/checklist/model/CheckListData.ts");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ChecklistFormConfigurationService = /** @class */ (function () {
                function ChecklistFormConfigurationService(translations) {
                    this.translations = translations;
                    this.steps = [];
                    this.steps = [
                        {
                            label: translations.instant('Checklist.step1.label'),
                            headerText: translations.instant('Checklist.step1.headerText'),
                            fields: this.formFieldStepOne()
                        },
                        {
                            label: translations.instant('Checklist.step2.label'),
                            headerText: translations.instant('Checklist.step2.headerText'),
                            fields: this.formFieldStepTwo()
                        },
                        {
                            label: translations.instant('Checklist.step3.label'),
                            headerText: translations.instant('Checklist.step3.headerText'),
                            fields: this.formFieldStepThree()
                        },
                        {
                            label: translations.instant('Checklist.step4.label'),
                            headerText: translations.instant('Checklist.step4.headerText'),
                            fields: this.formFieldStepFour()
                        }
                    ];
                }
                ChecklistFormConfigurationService.prototype.formFieldStepOne = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledCreditAmount()
                            ]
                        }
                    ];
                };
                ChecklistFormConfigurationService.prototype.formFieldStepTwo = function () {
                    return [
                        {
                            key: 'CheckListData',
                            fieldGroup: [
                                {
                                    key: 'creditPurposes',
                                    type: 'repeat-section',
                                    templateOptions: {
                                        header: 'Cel kredytu ',
                                        mainHeaderSuffix: '(podstawowy)',
                                        nextmainHeaderSuffix: '(dodatkowy)',
                                        sectionIcon: 'app-icon app-credit-standing',
                                        addBtnText: 'Dodaj kolejny cel kredytu',
                                        deleteBtnText: 'Usuń cel kredytu',
                                        className: 'app-section',
                                        max: 4,
                                    },
                                    fieldArray: {
                                        fieldGroup: [
                                            this.formCreditPurpose(),
                                            this.formFlatPurchaseType(),
                                            this.formHousePurchaseType(),
                                            this.formPropertyState(),
                                            this.formRefinancingPurpose(),
                                            this.formRefinancingType()
                                        ],
                                    },
                                },
                            ]
                        }
                    ];
                };
                ChecklistFormConfigurationService.prototype.formFieldStepThree = function () {
                    return [
                        {
                            key: 'CheckListData',
                            fieldGroup: [
                                {
                                    className: '',
                                    key: 'applicants',
                                    type: 'repeat-section',
                                    templateOptions: {
                                        header: 'Wnioskujący ',
                                        mainHeaderSuffix: '(główny)',
                                        nextmainHeaderSuffix: '(kolejny)',
                                        sectionIcon: 'app-icon app-credit-applicant',
                                        addBtnText: 'Dodaj kolejnego wnioskującego',
                                        deleteBtnText: 'Usuń wnioskującego',
                                        className: 'app-section',
                                        max: 4,
                                    },
                                    fieldArray: {
                                        fieldGroup: [
                                            {
                                                className: 'col-12',
                                                wrappers: ['form-field-vertical'],
                                                type: 'custom-radio',
                                                key: 'maritalStatus',
                                                templateOptions: {
                                                    required: true,
                                                    label: 'Stan cywilny',
                                                    options: [
                                                        { value: 'unmarried', label: 'panna / kawaler', tooltip: '', scrollBy: 120 },
                                                        { value: 'married', label: 'zamężna / żonaty', tooltip: '', scrollBy: 120 },
                                                        { value: 'widower', label: 'wdowa / wdowiec', tooltip: '', scrollBy: 120 },
                                                        { value: 'separation', label: 'separacja', tooltip: '', scrollBy: 120 },
                                                        { value: 'divorced', label: 'rozwiedziona / rozwiedziony', tooltip: '', scrollBy: 120 }
                                                    ],
                                                    description: '',
                                                    attributes: {
                                                        tooltip: ''
                                                    },
                                                    groupName: 'maritalStatus'
                                                }
                                            },
                                            {
                                                className: 'col-12',
                                                wrappers: ['form-field-vertical'],
                                                type: 'custom-radio',
                                                key: 'regimeOfSeparateProperty',
                                                templateOptions: {
                                                    required: true,
                                                    label: 'Rozdzielność majątkowa',
                                                    options: [
                                                        { value: 'separationProperty', label: 'została ustanowiona', tooltip: '' },
                                                        { value: 'jointProperty', label: 'nie została ustanowiona', tooltip: '' }
                                                    ],
                                                    description: '',
                                                    attributes: {
                                                        tooltip: ''
                                                    },
                                                    groupName: 'regimeOfSeparateProperty'
                                                },
                                                hideExpression: function ($viewValue, $modelValue, scope) {
                                                    var hide = $viewValue.maritalStatus !== 'married';
                                                    if (hide) {
                                                        $viewValue.regimeOfSeparateProperty = undefined;
                                                    }
                                                    return hide;
                                                }
                                            },
                                            {
                                                className: 'Income',
                                                key: 'incomes',
                                                type: 'repeat-section',
                                                defaultValue: [new _model_CheckListData__WEBPACK_IMPORTED_MODULE_1__["ApplicantIncome"]()],
                                                templateOptions: {
                                                    header: '',
                                                    mainHeaderSuffix: '',
                                                    nextmainHeaderSuffix: '',
                                                    sectionIcon: '',
                                                    addBtnText: 'Dodaj kolejne źródło dochodu',
                                                    deleteBtnText: 'Usuń źródło dochodu',
                                                    className: '',
                                                    max: 4,
                                                },
                                                fieldArray: {
                                                    fieldGroup: [
                                                        {
                                                            className: '',
                                                            wrappers: ['form-field-vertical'],
                                                            type: 'custom-radio',
                                                            key: 'incomeType',
                                                            templateOptions: {
                                                                required: true,
                                                                label: 'Źródło dochodu',
                                                                options: [
                                                                    { value: 'employmentContract', label: 'umowa o pracę', tooltip: '', scrollBy: 120 },
                                                                    {
                                                                        value: 'B2B',
                                                                        label: 'działaność gospodarcza',
                                                                        tooltip: 'Minimalny okres  prowadzenia działalności gospodarczej to 12 miesięcy,' +
                                                                            ' lub 3 miesiące jeśli nastąpiła  zmiana formy zatrudnienia z umowy o pracę na działalność gospodarczą',
                                                                        scrollBy: 120
                                                                    },
                                                                    {
                                                                        value: 'orderContract',
                                                                        label: 'umowa o dzieło / zlecenie',
                                                                        tooltip: 'Akceptujemy dochód jeśli uzyskujesz go od minimum 12 miesięcy'
                                                                    },
                                                                    {
                                                                        value: 'farmIncome',
                                                                        label: 'gospodarstwo rolne',
                                                                        tooltip: 'Akceptujemy dochód jeśli uzyskujesz go od minimum 12 miesięcy',
                                                                        scrollBy: 120
                                                                    },
                                                                    { value: 'otherIncome', label: 'inne źródła dochodu', tooltip: '', scrollBy: 120 },
                                                                    { value: 'noIncome', label: 'brak dochodu', tooltip: '' }
                                                                ],
                                                                description: '',
                                                                attributes: {
                                                                    tooltip: ''
                                                                },
                                                                groupName: 'incomeType'
                                                            }
                                                        },
                                                        {
                                                            className: '',
                                                            wrappers: ['form-field-vertical'],
                                                            type: 'custom-radio',
                                                            key: 'employmentContractType',
                                                            templateOptions: {
                                                                required: true,
                                                                label: 'Umowa o pracę zawarta jest na',
                                                                options: [
                                                                    {
                                                                        value: 'noTermContract', label: 'czas nieokreślony',
                                                                        tooltip: 'Musisz być zatrudniony u aktualnego pracodawcy od minimum 3 miesięcy',
                                                                        scrollBy: 120
                                                                    },
                                                                    {
                                                                        value: 'fixedTermContract', label: 'czas określony',
                                                                        tooltip: 'Akceptujemy dochód  jeśli uzyskujesz go od 3 miesięcy oraz: (1) ' +
                                                                            'jest to kolejna umowa z tym samym pracodawcą,  lub (2) umowa obowiązuje od minimum  5 lat' +
                                                                            ' oraz  6 miesięcy do przodu, lub (3) umowa obowiązuje od ' +
                                                                            ' minimum 6 m-cy z danym pracodawcą i zawarta na min. 6 m-cy do przodu oraz udukomentujesz  ' +
                                                                            'ciągłość zatrudnienia od min. 12 m-cy, lub (4) charakter umowy wynika ze specyfiki zatrudniania' +
                                                                            '  w  grupie  zawodowej takiej jak: nauczyciele, lekarze, pracownicy służb mundurowych.',
                                                                        scrollBy: 120
                                                                    },
                                                                ],
                                                                description: '',
                                                                attributes: {
                                                                    tooltip: ''
                                                                },
                                                                groupName: 'employmentContractType'
                                                            },
                                                            hideExpression: function ($viewValue, $modelValue, scope) {
                                                                var hide = $viewValue.incomeType !== 'employmentContract';
                                                                if (hide) {
                                                                    $viewValue.employmentContractType = undefined;
                                                                }
                                                                return hide;
                                                            }
                                                        },
                                                        {
                                                            className: 'app-checkbox-group-label',
                                                            template: '<div>Informacje dodatkowe:</div>',
                                                            hideExpression: 'model.incomeType !== "employmentContract"',
                                                        },
                                                        {
                                                            className: 'app-checkbox-group-list',
                                                            hideExpression: function ($viewValue, $modelValue, scope) {
                                                                var hide = $viewValue.incomeType !== 'employmentContract';
                                                                if (hide) {
                                                                    $viewValue.employmentIncomeTypeBankAccount = false;
                                                                    $viewValue.employmentIncomeTypePremium = false;
                                                                    $viewValue.employmentIncomeTypeInternationalIncome = false;
                                                                }
                                                                return hide;
                                                            },
                                                            fieldGroup: [
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'employmentIncomeTypePremium',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'wynagrodzenie wypłacane jest w formie gotówkowej',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: ''
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'employmentIncomeTypeBankAccount',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'wynagrodzenie powiększone jest o premię',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: ''
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'employmentIncomeTypeInternationalIncome',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'dochód jest uzyskiwany za granicą Polski',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: ''
                                                                        },
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            className: '',
                                                            wrappers: ['form-field-vertical'],
                                                            type: 'custom-radio',
                                                            key: 'b2bContractType',
                                                            templateOptions: {
                                                                required: true,
                                                                label: 'Działalność prowadzona jest w formie',
                                                                options: [
                                                                    { value: 'soleTrader', label: 'jednoosobowej działalności gospodarczej', tooltip: '' },
                                                                    { value: 'partnership', label: 'spółki cywilnej', tooltip: '' },
                                                                    { value: 'generalPartnership', label: 'spółki jawnej lub partnerskiej', tooltip: '' },
                                                                ],
                                                                description: '',
                                                                attributes: {
                                                                    tooltip: ''
                                                                },
                                                                groupName: 'b2bContractType'
                                                            },
                                                            hideExpression: function ($viewValue, $modelValue, scope) {
                                                                var hide = $viewValue.incomeType !== 'B2B';
                                                                if (hide) {
                                                                    $viewValue.b2bContractType = undefined;
                                                                }
                                                                return hide;
                                                            }
                                                        },
                                                        {
                                                            className: '',
                                                            wrappers: ['form-field-vertical'],
                                                            type: 'custom-radio',
                                                            key: 'b2bContractBillingType',
                                                            templateOptions: {
                                                                required: true,
                                                                label: 'Rozliczenie następuje na podstawie',
                                                                options: [
                                                                    { value: 'revenueExpenseLedger', label: 'KPiR', tooltip: '' },
                                                                    { value: 'flatRate', label: 'ryczałtu', tooltip: '' },
                                                                    { value: 'integratedAccounting', label: 'pełnej księgowości', tooltip: '' },
                                                                    { value: 'taxCard', label: 'karty podatkowej', tooltip: '' },
                                                                ],
                                                                description: '',
                                                                attributes: {
                                                                    tooltip: ''
                                                                },
                                                                groupName: 'b2bContractBillingType'
                                                            },
                                                            hideExpression: function ($viewValue, $modelValue, scope) {
                                                                var hide = $viewValue.incomeType !== 'B2B';
                                                                if (hide) {
                                                                    $viewValue.b2bContractBillingType = undefined;
                                                                }
                                                                return hide;
                                                            }
                                                        },
                                                        {
                                                            className: 'app-checkbox-group-label',
                                                            template: '<div>Informacje o gospodarstwie:</div>',
                                                            hideExpression: 'model.incomeType !== "farmIncome"',
                                                        },
                                                        {
                                                            className: 'app-checkbox-group-list',
                                                            hideExpression: function ($viewValue, $modelValue, scope) {
                                                                var hide = $viewValue.incomeType !== 'farmIncome';
                                                                if (hide) {
                                                                    $viewValue.farmIncomeTypeSpecialBranches = false;
                                                                    $viewValue.farmIncomeTypeRecordKeeping = false;
                                                                    $viewValue.farmIncomeTypeTenancy = false;
                                                                }
                                                                return hide;
                                                            },
                                                            fieldGroup: [
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'farmIncomeTypeSpecialBranches',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'produkcja w działach specjalnych produkcji rolnej',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: ''
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'farmIncomeTypeRecordKeeping',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'księgowość w formie ksiąg handlowych',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: ''
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'farmIncomeTypeTenancy',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'część gruntów do produkcji jest dzierżawiona',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: ''
                                                                        },
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            className: 'app-checkbox-group-label',
                                                            template: '<div>Inne źródła dochodu:</div>',
                                                            hideExpression: 'model.incomeType !== "otherIncome"',
                                                        },
                                                        {
                                                            className: 'app-checkbox-group-list',
                                                            hideExpression: function ($viewValue, $modelValue, scope) {
                                                                var hide = $viewValue.incomeType !== 'otherIncome';
                                                                if (hide) {
                                                                    $viewValue.otherIncomeTypePension = false;
                                                                    $viewValue.otherIncomeTypeAnnuity = false;
                                                                    $viewValue.otherIncomeTypeSeafarer = false;
                                                                    $viewValue.otherIncomeTypeRentalAgreement = false;
                                                                    $viewValue.otherIncomeType500plus = false;
                                                                    $viewValue.otherIncomeTypeSupervisoryBoardMember = false;
                                                                }
                                                                return hide;
                                                            },
                                                            fieldGroup: [
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'otherIncomeTypePension',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'emerytura / świadczenie przedemerytalne (krajowa)',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: ''
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'otherIncomeTypeAnnuity',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'renta na czas nieokreślony (krajowa)',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: 'Akceptujemy dochód z renty przyznanej na czas nieokreślony, lub jeśli osiągniesz wiek emerytalny przed wygaśnięciem renty '
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'otherIncomeTypeSeafarer',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'marynarz',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: 'Akceptujemy dochód jeśli uzyskujesz go od minimum 12 miesięcy, oraz  przerwy w zamustrowaniu nie przekraczają 3 miesięcy'
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'otherIncomeTypeRentalAgreement',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'najem (bez działalności)',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: 'Akceptujemy dochód jeśli uzyskujesz go od minimum 12 miesięcy, oraz wynajmowana nieruchomość należy wyłącznie do Ciebie'
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'otherIncomeType500plus',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'świadczenie 500+',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: 'Przyjmiemy świadczenie 500+ jeśli okres kredytowania nie przekracza okresu uzyskiwania świadczenia'
                                                                        },
                                                                    }
                                                                },
                                                                {
                                                                    className: 'app-checkbox',
                                                                    key: 'otherIncomeTypeSupervisoryBoardMember',
                                                                    type: 'checkbox-with-tooltip',
                                                                    defaultValue: false,
                                                                    templateOptions: {
                                                                        label: 'Członek Rady Nadzorczej',
                                                                        description: '',
                                                                        attributes: {
                                                                            tooltip: 'Akceptujemy dochód jeśli uzyskujesz go od minimum 12 miesięcy, oraz do końca kadencji pozostało więcej niż 6 miesięcy '
                                                                        },
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                className: '',
                                                template: '<hr />'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ];
                };
                ChecklistFormConfigurationService.prototype.formFieldStepFour = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledDocumentsList()
                            ]
                        }
                    ];
                };
                ChecklistFormConfigurationService.prototype.formFiledCreditAmount = function () {
                    return {
                        className: 'col-12 app-justify-content-center',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'CheckListData.loanAmount',
                        templateOptions: {
                            type: 'number',
                            label: 'Chcę wnioskować o kredyt hipoteczny w wysokości (zł):',
                            placeholder: 'zł',
                            description: '',
                            attributes: {
                                tooltip: ''
                            },
                            required: true,
                            min: 50000,
                            max: 4000000,
                            change: function (field, $event) {
                            }
                        }
                    };
                };
                ChecklistFormConfigurationService.prototype.formCreditPurpose = function () {
                    return {
                        className: 'col-12',
                        wrappers: ['form-field-vertical'],
                        type: 'custom-radio',
                        key: 'creditPurpose',
                        templateOptions: {
                            required: true,
                            label: 'Potrzebuję kredyt na',
                            options: [
                                { value: 'flat', label: 'zakup mieszkania', tooltip: '', scrollBy: 120 },
                                { value: 'house', label: 'zakup domu', tooltip: '', scrollBy: 120 },
                                { value: 'renovation', label: 'remont / modernizację domu / mieszkania', tooltip: '' },
                                { value: 'building', label: 'budowę / rozbudowę / dokończenie budowy domu', tooltip: '' },
                                { value: 'refinancing', label: 'refinansowanie', tooltip: '', scrollBy: 120 },
                                { value: 'plotPurchase', label: 'zakup działki budowlanej / rolnej', tooltip: '' },
                            ],
                            description: '',
                            attributes: {
                                tooltip: ''
                            },
                        },
                    };
                };
                ChecklistFormConfigurationService.prototype.formFlatPurchaseType = function () {
                    return {
                        className: 'col-12',
                        wrappers: ['form-field-vertical'],
                        type: 'custom-radio',
                        key: 'flatPurchaseType',
                        templateOptions: {
                            required: true,
                            label: 'Kupuję nieruchomość od',
                            options: [
                                { value: 'developer', label: 'developera / spółdzielni', tooltip: '', scrollBy: 120 },
                                { value: 'privatePerson', label: 'innej osoby prywatnej', tooltip: '' },
                                { value: 'cooperative', label: 'innej osoby prywatnej (spółdzielcze własnościowe prawo do lokalu)', tooltip: '' },
                            ],
                            description: '',
                            attributes: {
                                tooltip: ''
                            }
                        },
                        hideExpression: function ($viewValue, $modelValue, scope) {
                            var hide = $viewValue.creditPurpose !== 'flat';
                            if (hide) {
                                $viewValue.flatPurchaseType = undefined;
                            }
                            return hide;
                        }
                    };
                };
                ChecklistFormConfigurationService.prototype.formHousePurchaseType = function () {
                    return {
                        className: 'col-12',
                        wrappers: ['form-field-vertical'],
                        type: 'custom-radio',
                        key: 'housePurchaseType',
                        templateOptions: {
                            required: true,
                            label: 'Kupuję nieruchomość od',
                            options: [
                                { value: 'developer', label: 'developera', tooltip: '', scrollBy: 120 },
                                { value: 'privatePerson', label: 'innej osoby prywatnej', tooltip: '' },
                            ],
                            description: '',
                            attributes: {
                                tooltip: ''
                            }
                        },
                        hideExpression: function ($viewValue, $modelValue, scope) {
                            var hide = $viewValue.creditPurpose !== 'house';
                            if (hide) {
                                $viewValue.housePurchaseType = undefined;
                            }
                            return hide;
                        }
                    };
                };
                ChecklistFormConfigurationService.prototype.formPropertyState = function () {
                    return {
                        className: 'col-12',
                        wrappers: ['form-field-vertical'],
                        type: 'custom-radio',
                        key: 'propertyState',
                        templateOptions: {
                            required: true,
                            label: 'Wybrana nieruchomość',
                            options: [
                                { value: 'inUsed', label: 'jest oddana do użytkowania', tooltip: '' },
                                { value: 'notInUsed', label: 'nie jest oddana do użytkowania', tooltip: '' },
                            ],
                            description: '',
                            attributes: {
                                tooltip: ''
                            }
                        },
                        hideExpression: function ($viewValue, $modelValue, scope) {
                            var hide = $viewValue.flatPurchaseType !== 'developer' && $viewValue.housePurchaseType !== 'developer';
                            if (hide) {
                                $viewValue.propertyState = undefined;
                            }
                            return hide;
                        }
                    };
                };
                ChecklistFormConfigurationService.prototype.formFiledDocumentsList = function () {
                    return {
                        className: 'col-12 app-justify-content-center',
                        wrappers: ['section-info'],
                        templateOptions: {
                            header: 'Lista dokumentów do kredytu hipotecznego',
                            info: 'odpowiedz na kilka pytań, dzięki którym przygotujemy listę dokumentów, ' +
                                'których będziesz potrzebować do kredytu mieszkaniowego',
                            img: '',
                        }
                    };
                };
                ChecklistFormConfigurationService.prototype.formRefinancingType = function () {
                    return {
                        className: 'col-12',
                        wrappers: ['form-field-vertical'],
                        type: 'custom-radio',
                        key: 'refinancingType',
                        templateOptions: {
                            required: true,
                            label: 'Zabezpieczeniem kredytu będzie',
                            options: [
                                { value: 'house', label: 'dom', tooltip: '' },
                                { value: 'flat', label: 'mieszkanie', tooltip: '' },
                                { value: 'plot', label: 'działka budowlana / rolna', tooltip: '' },
                                { value: 'cooperative', label: 'spółdzielcze własnościowe prawo do lokalu', tooltip: '' },
                            ],
                            description: '',
                            attributes: {
                                tooltip: ''
                            },
                            groupName: 'refinancingType'
                        },
                        hideExpression: function ($viewValue, $modelValue, scope) {
                            var hide = $viewValue.creditPurpose !== 'refinancing';
                            if (hide) {
                                $viewValue.refinancingType = undefined;
                            }
                            return hide;
                        }
                    };
                };
                ChecklistFormConfigurationService.prototype.formRefinancingPurpose = function () {
                    return {
                        className: 'col-12',
                        wrappers: ['form-field-vertical'],
                        type: 'custom-radio',
                        key: 'refinancingPurpose',
                        templateOptions: {
                            required: true,
                            label: 'Chcę zrefinansować',
                            options: [
                                { value: 'credit', label: 'inny kredyt', tooltip: 'możesz zrefinansować jednocześnie kilka kredytów', scrollBy: 120 },
                                {
                                    value: 'expenditure',
                                    label: 'poniesione nakłady',
                                    tooltip: 'np. na zakup nieruchomości / remontu / budowy domu',
                                    scrollBy: 120
                                },
                            ],
                            description: '',
                            attributes: {
                                tooltip: ''
                            }
                        },
                        hideExpression: function ($viewValue, $modelValue, scope) {
                            var hide = $viewValue.creditPurpose !== 'refinancing';
                            if (hide) {
                                $viewValue.refinancingPurpose = undefined;
                            }
                            return hide;
                        }
                    };
                };
                return ChecklistFormConfigurationService;
            }());
            ChecklistFormConfigurationService.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
            ]; };
            ChecklistFormConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChecklistFormConfigurationService);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/service/checklist.service.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/modules/checklist/service/checklist.service.ts ***!
          \****************************************************************/
        /*! exports provided: ChecklistService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistService", function () { return ChecklistService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_modules_checklist_service_checklist_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/checklist/service/checklist-control.service */ "./src/app/modules/checklist/service/checklist-control.service.ts");
            /* harmony import */ var _app_modules_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/contact/service/contact.service */ "./src/app/modules/contact/service/contact.service.ts");
            var ChecklistService = /** @class */ (function () {
                function ChecklistService(checklistControlService, contactService) {
                    this.checklistControlService = checklistControlService;
                    this.contactService = contactService;
                }
                ChecklistService.prototype.fetchDocuments = function (request) {
                    return this.checklistControlService.makeChecklistRequest$(request);
                };
                ChecklistService.prototype.updateChecklistResult = function (result) {
                    this.currentChecklistResult = result;
                };
                ChecklistService.prototype.getCheckListResults = function () {
                    return this.deepCopy(this.currentChecklistResult);
                };
                ChecklistService.prototype.saveChecklist = function (leadId) {
                    var checklistEnvelope = {
                        leadId: leadId,
                        documents: this.currentChecklistResult.documents
                    };
                    return this.checklistControlService.saveChecklist$(checklistEnvelope);
                };
                ChecklistService.prototype.sendChecklist = function (recipient) {
                    return this.checklistControlService.sendMail$(this.prepareChecklistDataToSend(recipient));
                };
                ChecklistService.prototype.prepareChecklistDataToSend = function (recipient) {
                    var applicants = [];
                    var creditPurposes = [];
                    this.currentChecklistResult.documents.sections.forEach(function (section) {
                        section.entries.forEach(function (sectionEntry) {
                            var documents = [];
                            sectionEntry.entries.forEach(function (entry) {
                                documents.push({
                                    order: entry.order,
                                    name: entry.name,
                                    url: entry.url
                                });
                            });
                            if (section.code === 'requesters') {
                                applicants.push({ documents: documents });
                            }
                            if (section.code === 'requestPurposes') {
                                creditPurposes.push({ documents: documents });
                            }
                        });
                    });
                    var checklistResult = {
                        applicants: applicants,
                        creditPurposes: creditPurposes
                    };
                    return {
                        checklist: checklistResult,
                        recipient: recipient
                    };
                };
                ChecklistService.prototype.saveLead = function (leadData) {
                    return this.contactService.saveLead(leadData);
                };
                ChecklistService.prototype.deepCopy = function (target) {
                    var _this = this;
                    if (target === null) {
                        return target;
                    }
                    if (target instanceof Date) {
                        return new Date(target.getTime());
                    }
                    if (target instanceof Array) {
                        var cp_1 = [];
                        target.forEach(function (v) { cp_1.push(v); });
                        return cp_1.map(function (n) { return _this.deepCopy(n); });
                    }
                    if (typeof target === 'object' && target !== {}) {
                        var cp_2 = Object.assign({}, target);
                        Object.keys(cp_2).forEach(function (k) {
                            cp_2[k] = _this.deepCopy(cp_2[k]);
                        });
                        return cp_2;
                    }
                    return target;
                };
                return ChecklistService;
            }());
            ChecklistService.ctorParameters = function () { return [
                { type: _app_modules_checklist_service_checklist_control_service__WEBPACK_IMPORTED_MODULE_2__["ChecklistControlService"] },
                { type: _app_modules_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }
            ]; };
            ChecklistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChecklistService);
            /***/ 
        }),
        /***/ "./src/app/modules/checklist/service/inter-component-communication.service.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/checklist/service/inter-component-communication.service.ts ***!
          \************************************************************************************/
        /*! exports provided: InterComponentCommunicationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterComponentCommunicationService", function () { return InterComponentCommunicationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InterComponentCommunicationService = /** @class */ (function () {
                function InterComponentCommunicationService() {
                    this.isSimulationBtnVisible = false;
                    this.checklistLastActiveStep = 0;
                    this.isChecklistResultView = false;
                    this.shouldScrollToTopPageOnHomePage = false;
                }
                InterComponentCommunicationService.prototype.showSimulationBtn = function (simulationAnchor) {
                    this.isSimulationBtnVisible = true;
                    this.simulationAnchor = simulationAnchor;
                };
                InterComponentCommunicationService.prototype.setViewportScrollAnchor = function (viewportScrollAnchor) {
                    this.viewportScrollAnchor = viewportScrollAnchor;
                };
                InterComponentCommunicationService.prototype.setUpSimulationStep = function (stepNumber) {
                    this.checklistLastActiveStep = stepNumber;
                };
                InterComponentCommunicationService.prototype.setChecklistData = function (checkListData) {
                    this.checkListData = checkListData;
                };
                InterComponentCommunicationService.prototype.setIsChecklistResultView = function (isChecklistResultView) {
                    this.isChecklistResultView = isChecklistResultView;
                };
                InterComponentCommunicationService.prototype.setShouldScrollToTopPageOnHomePage = function (shouldScrollToTopPageOnHomePage) {
                    this.shouldScrollToTopPageOnHomePage = shouldScrollToTopPageOnHomePage;
                };
                return InterComponentCommunicationService;
            }());
            InterComponentCommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], InterComponentCommunicationService);
            /***/ 
        }),
        /***/ "./src/app/modules/contact/components/contact-base/contact-base.component.scss": 
        /*!*************************************************************************************!*\
          !*** ./src/app/modules/contact/components/contact-base/contact-base.component.scss ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb21wb25lbnRzL2NvbnRhY3QtYmFzZS9jb250YWN0LWJhc2UuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/contact/components/contact-base/contact-base.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/modules/contact/components/contact-base/contact-base.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: ContactBaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactBaseComponent", function () { return ContactBaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            var ContactBaseComponent = /** @class */ (function () {
                function ContactBaseComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                }
                ContactBaseComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.router.navigate([{ outlets: { contactOutlet: ['contact'] } }], { skipLocationChange: true });
                    }, 100);
                };
                return ContactBaseComponent;
            }());
            ContactBaseComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }
            ]; };
            ContactBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact-base',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact-base/contact-base.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-base.component.scss */ "./src/app/modules/contact/components/contact-base/contact-base.component.scss")).default]
                })
            ], ContactBaseComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.scss": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.scss ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb21wb25lbnRzL2NvbnRhY3QtY29uZmlybWF0aW9uL2NvbnRhY3QtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.ts": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.ts ***!
          \***************************************************************************************************/
        /*! exports provided: ContactConfirmationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactConfirmationComponent", function () { return ContactConfirmationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            var ContactConfirmationComponent = /** @class */ (function () {
                function ContactConfirmationComponent(translate, translationLoader, validationsLoader) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.translate.get('SimulatorResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                }
                return ContactConfirmationComponent;
            }());
            ContactConfirmationComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__["ValidationLoader"] }
            ]; };
            ContactConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact-confirmation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-confirmation.component.scss */ "./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.scss")).default]
                })
            ], ContactConfirmationComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/contact/components/contact/contact.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/modules/contact/components/contact/contact.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/contact/components/contact/contact.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/modules/contact/components/contact/contact.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_modules_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/contact/service/contact.service */ "./src/app/modules/contact/service/contact.service.ts");
            /* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent(translate, translationLoader, validationsLoader, router, route, viewportScroller, contactService, storage, userService) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.router = router;
                    this.route = route;
                    this.viewportScroller = viewportScroller;
                    this.contactService = contactService;
                    this.storage = storage;
                    this.userService = userService;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
                    this.model = {};
                    this.methodUnavailable = false;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.translate.get('SimulatorResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                    this.fields = this.getFields();
                    this.rodoInformationURL = _env_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].rodoInformationURL;
                }
                ContactComponent.prototype.getFields = function () {
                    var translate = this.translate;
                    return [
                        {
                            fieldGroup: [
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'firstName',
                                    templateOptions: {
                                        type: 'text',
                                        placeholder: translate.instant('ContactForm.fields.firstName.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                    validators: {
                                        validation: ['firstName']
                                    },
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'lastName',
                                    templateOptions: {
                                        type: 'text',
                                        placeholder: translate.instant('ContactForm.fields.lastName.label'),
                                        attributes: {},
                                        required: true
                                    },
                                    validators: {
                                        validation: ['lastName']
                                    },
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'email',
                                    templateOptions: {
                                        type: 'email',
                                        placeholder: translate.instant('ContactForm.fields.email.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                    validators: {
                                        validation: ['email'],
                                    },
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'phoneNumber',
                                    templateOptions: {
                                        type: 'tel',
                                        placeholder: translate.instant('ContactForm.fields.phoneNumber.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                    validators: {
                                        validation: ['phone'],
                                    },
                                }
                            ]
                        },
                        {
                            className: 'app-checkbox-list',
                            fieldGroup: [
                                {
                                    className: 'app-checkbox',
                                    key: 'selectAll',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.selectAll'),
                                        description: '',
                                        attributes: {
                                            tooltip: ''
                                        },
                                    },
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'marketingConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.marketingConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.marketingConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.marketingConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'digitalMarketingConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.digitalMarketingConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.digitalMarketingConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.digitalMarketingConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'offerPresentationConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.offerPresentationConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.offerPresentationConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.offerPresentationConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'digitalOfferPresentationConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.digitalOfferPresentationConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.digitalOfferPresentationConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.digitalOfferPresentationConsent': 'model.selectAll'
                                    }
                                }
                            ]
                        }
                    ];
                };
                ContactComponent.prototype.submit = function () {
                    var _this = this;
                    if (this.form.valid) {
                        delete this.model.selectAll;
                        this.contactSubscription = this.contactService.saveLead(this.model)
                            .subscribe(function (saveLeadResult) {
                            _this.storage.set('leadId', saveLeadResult.id);
                            _this.router.navigate(['sendContactConfirmation'], { relativeTo: _this.route, skipLocationChange: true });
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].hide();
                        }, function (error) {
                            console.log(error);
                            _this.methodUnavailable = true;
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].hide();
                        });
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].show().subscribe(function () {
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"].hide();
                            _this.methodUnavailable = true;
                            _this.contactSubscription.unsubscribe();
                        });
                    }
                };
                ContactComponent.prototype.onAlertClosed = function () {
                    this.methodUnavailable = false;
                };
                return ContactComponent;
            }());
            ContactComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_5__["ValidationLoader"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"] },
                { type: _app_modules_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_9__["ContactService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_10__["SESSION_STORAGE"],] }] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_11__["UserAuthService"] }
            ]; };
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/components/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/modules/contact/components/contact/contact.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_10__["SESSION_STORAGE"]))
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/contact/components/index.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/contact/components/index.ts ***!
          \*****************************************************/
        /*! exports provided: ContactComponent, ContactConfirmationComponent, ContactBaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _contact_base_contact_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-base/contact-base.component */ "./src/app/modules/contact/components/contact-base/contact-base.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactBaseComponent", function () { return _contact_base_contact_base_component__WEBPACK_IMPORTED_MODULE_1__["ContactBaseComponent"]; });
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/modules/contact/components/contact/contact.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]; });
            /* harmony import */ var _contact_confirmation_contact_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-confirmation/contact-confirmation.component */ "./src/app/modules/contact/components/contact-confirmation/contact-confirmation.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactConfirmationComponent", function () { return _contact_confirmation_contact_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ContactConfirmationComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/contact/contact-routing.module.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/modules/contact/contact-routing.module.ts ***!
          \***********************************************************/
        /*! exports provided: ContactRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function () { return ContactRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/modules/contact/components/index.ts");
            var contactOutlet = 'contactOutlet';
            var routes = [
                {
                    path: 'contact',
                    component: _components__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
                    outlet: contactOutlet
                },
                {
                    path: 'contact/sendContactConfirmation',
                    component: _components__WEBPACK_IMPORTED_MODULE_3__["ContactConfirmationComponent"],
                    outlet: contactOutlet
                }
            ];
            var ContactRoutingModule = /** @class */ (function () {
                function ContactRoutingModule() {
                }
                return ContactRoutingModule;
            }());
            ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ContactRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/contact/contact.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/modules/contact/contact.module.ts ***!
          \***************************************************/
        /*! exports provided: ContactModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function () { return ContactModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_modules_contact_contact_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/contact/contact-routing.module */ "./src/app/modules/contact/contact-routing.module.ts");
            /* harmony import */ var _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/shared.module */ "./src/app/modules/shared-module/shared.module.ts");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/modules/contact/components/index.ts");
            var ContactModule = /** @class */ (function () {
                function ContactModule() {
                }
                return ContactModule;
            }());
            ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components__WEBPACK_IMPORTED_MODULE_5__["ContactBaseComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_5__["ContactConfirmationComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                        _app_modules_contact_contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactRoutingModule"]
                    ]
                })
            ], ContactModule);
            /***/ 
        }),
        /***/ "./src/app/modules/contact/service/contact-control.service.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/modules/contact/service/contact-control.service.ts ***!
          \********************************************************************/
        /*! exports provided: ContactControlService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactControlService", function () { return ContactControlService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            var ContactControlService = /** @class */ (function () {
                function ContactControlService(httpClient) {
                    this.httpClient = httpClient;
                }
                ContactControlService.prototype.prepareHeaders = function () {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
                };
                ContactControlService.prototype.saveLead = function (contact, id) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contact.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contact.saveLead);
                    }
                    else {
                        if (id) {
                            return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contact.saveLead + "/" + id, { contact: contact }, { headers: headers });
                        }
                        else {
                            return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contact.saveLead, { contact: contact }, { headers: headers });
                        }
                    }
                };
                return ContactControlService;
            }());
            ContactControlService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ContactControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ContactControlService);
            /***/ 
        }),
        /***/ "./src/app/modules/contact/service/contact.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/modules/contact/service/contact.service.ts ***!
          \************************************************************/
        /*! exports provided: ContactService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function () { return ContactService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_modules_contact_service_contact_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/contact/service/contact-control.service */ "./src/app/modules/contact/service/contact-control.service.ts");
            /* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
            var ContactService = /** @class */ (function () {
                function ContactService(contactControlService, storage) {
                    this.contactControlService = contactControlService;
                    this.storage = storage;
                }
                ContactService.prototype.saveLead = function (leadData) {
                    var emailAddress = {
                        address: leadData.email
                    };
                    var permissions = {
                        marketingConsent: leadData.marketingConsent,
                        digitalMarketingConsent: leadData.digitalMarketingConsent,
                        offerPresentationConsent: leadData.offerPresentationConsent,
                        digitalOfferPresentationConsent: leadData.digitalOfferPresentationConsent,
                    };
                    var contactDto = {
                        lastName: leadData.lastName,
                        firstName: leadData.firstName,
                        phoneNumber: leadData.phoneNumber,
                        emailAddress: emailAddress,
                        permissions: permissions
                    };
                    var leadId = this.storage.get('leadId');
                    return this.contactControlService.saveLead(contactDto, leadId);
                };
                return ContactService;
            }());
            ContactService.ctorParameters = function () { return [
                { type: _app_modules_contact_service_contact_control_service__WEBPACK_IMPORTED_MODULE_2__["ContactControlService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"],] }] }
            ]; };
            ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"]))
            ], ContactService);
            /***/ 
        }),
        /***/ "./src/app/modules/login/login-home/login-home.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/modules/login/login-home/login-home.component.ts ***!
          \******************************************************************/
        /*! exports provided: LoginHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHomeComponent", function () { return LoginHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_modules_shared_module_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/shared-module/model */ "./src/app/modules/shared-module/model/index.ts");
            var LoginHomeComponent = /** @class */ (function () {
                function LoginHomeComponent(translate, translationLoader, validationsLoader, userService) {
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.userService = userService;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({});
                    this.model = {};
                    this.methodUnavailable = false;
                    this.incorrectAuthenticationTranslationKey = 'Login.incorrectAuthentication';
                    this.methodUnavailableTranslationKey = 'Global.MethodUnavailable';
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.fields = this.getFields();
                    userService.setUserContext(_app_modules_shared_module_model__WEBPACK_IMPORTED_MODULE_8__["UserContext"].Broker);
                    userService.setupUserSession();
                }
                LoginHomeComponent.prototype.getFields = function () {
                    var translate = this.translate;
                    return [
                        {
                            fieldGroup: [
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'login',
                                    templateOptions: {
                                        type: 'text',
                                        placeholder: translate.instant('Login.loginForm.fields.login.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'pass',
                                    templateOptions: {
                                        type: 'password',
                                        placeholder: translate.instant('Login.loginForm.fields.password.label'),
                                        attributes: {},
                                        required: true
                                    }
                                },
                            ]
                        }
                    ];
                };
                LoginHomeComponent.prototype.submit = function () {
                    var _this = this;
                    if (this.form.valid) {
                        delete this.model.selectAll;
                        this.loginSubscription = this.userService.authenticateUser(this.model)
                            .subscribe(function (authResposne) {
                            if (!authResposne.isAuthenticated) {
                                _this.methodUnavailable = true;
                                _this.errorMessage = _this.incorrectAuthenticationTranslationKey;
                            }
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"].hide();
                            _this.loaderSubscription.unsubscribe();
                        }, function (error) {
                            _this.methodUnavailable = true;
                            _this.errorMessage = _this.incorrectAuthenticationTranslationKey;
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"].hide();
                            _this.loaderSubscription.unsubscribe();
                        });
                        this.loaderSubscription = _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"].show().subscribe(function () {
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"].hide();
                            _this.methodUnavailable = true;
                            _this.errorMessage = _this.methodUnavailableTranslationKey;
                            _this.loginSubscription.unsubscribe();
                        });
                    }
                };
                LoginHomeComponent.prototype.onAlertClosed = function () {
                    this.methodUnavailable = false;
                };
                return LoginHomeComponent;
            }());
            LoginHomeComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_6__["ValidationLoader"] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] }
            ]; };
            LoginHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-home/login-home.component.html")).default
                })
            ], LoginHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/login/login-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/login/login-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: LoginRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () { return LoginRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_login_login_home_login_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/login/login-home/login-home.component */ "./src/app/modules/login/login-home/login-home.component.ts");
            var routes = [
                {
                    path: 'login',
                    component: _app_modules_login_login_home_login_home_component__WEBPACK_IMPORTED_MODULE_3__["LoginHomeComponent"]
                }
            ];
            var LoginRoutingModule = /** @class */ (function () {
                function LoginRoutingModule() {
                }
                return LoginRoutingModule;
            }());
            LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LoginRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/login/login.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/modules/login/login.module.ts ***!
          \***********************************************/
        /*! exports provided: LoginModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function () { return LoginModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _login_home_login_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-home/login-home.component */ "./src/app/modules/login/login-home/login-home.component.ts");
            /* harmony import */ var _app_modules_login_login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/login/login-routing.module */ "./src/app/modules/login/login-routing.module.ts");
            /* harmony import */ var _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/shared.module */ "./src/app/modules/shared-module/shared.module.ts");
            var LoginModule = /** @class */ (function () {
                function LoginModule() {
                }
                return LoginModule;
            }());
            LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_login_home_login_home_component__WEBPACK_IMPORTED_MODULE_3__["LoginHomeComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _app_modules_login_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]
                    ]
                })
            ], LoginModule);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/index.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/modules/shared-module/components/index.ts ***!
          \***********************************************************/
        /*! exports provided: ViewDataContainerComponent, SimulationResultsViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _view_data_container_view_data_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-data-container/view-data-container.component */ "./src/app/modules/shared-module/components/view-data-container/view-data-container.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewDataContainerComponent", function () { return _view_data_container_view_data_container_component__WEBPACK_IMPORTED_MODULE_1__["ViewDataContainerComponent"]; });
            /* harmony import */ var _simulation_results_view_simulation_results_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulation-results-view/simulation-results-view.component */ "./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationResultsViewComponent", function () { return _simulation_results_view_simulation_results_view_component__WEBPACK_IMPORTED_MODULE_2__["SimulationResultsViewComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/loader/loader.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/shared-module/components/loader/loader.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-loader::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000000;\n  opacity: 0.3;\n  z-index: 1000;\n}\n\n.app-loader::after {\n  content: \"\";\n  position: fixed;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border: 8px solid #F8F8F8;\n  border-top: 8px solid #00965E;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  z-index: 1001;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvbG9hZGVyL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkLW1vZHVsZVxcY29tcG9uZW50c1xcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2xvYWRlci9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhc3NldHNcXGNvbmZpZ1xcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJDZ0JpQjtFRGZqQixZQUFBO0VBQ0EsYUFBQTtBRURGOztBRklBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLGFBQUE7QUVERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2NvbG9ycyc7XHJcblxyXG4uYXBwLWxvYWRlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZ1bGwtYmxhY2stY29sb3I7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5hcHAtbG9hZGVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXI6IDhweCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItdG9wOiA4cHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbn1cclxuIiwiJGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiR0ZXh0LWNvbG9yOiAjMkQyOTI2O1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMDk2NUU7XHJcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjRUVGOUYwO1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogIzE0MTQxNDtcclxuXHJcbiRzZWNvbmRhcnktY29sb3I6ICMwMEJDOEM7XHJcblxyXG4kY29udHJhc3QtY29sb3I6ICNGNUE2MjM7XHJcbiRjb250cmFzdC1jb2xvci1zZWNvbmQ6ICNGRkNGODA7XHJcblxyXG4kc3VjY2Vzcy1jb2xvci1wcmltYXJ5OiAjMEZCNzc3O1xyXG4kc3VjY2Vzcy1jb2xvci1zZWNvbmRhcnk6ICM5RUREQTY7XHJcbiRlcnJvci1jb2xvci1wcmltYXJ5OiAjRDQwMDAwO1xyXG4kZXJyb3ItY29sb3Itc2Vjb25kYXJ5OiAjRkFFNUU1O1xyXG5cclxuJG5vdGljZS1jb2xvci1wcmltYXJ5OiAjRThENzAwO1xyXG4kbm90aWNlLWNvbG9yLXNlY29uZGFyeTogI0ZGRkFCQztcclxuXHJcbiRsaW5rOiAjMDA4RjU4O1xyXG4kbGluay1ob3ZlcjogIzAwODI1MTtcclxuJGdyZXktY29sb3I6ICNFRUU7XHJcbiRncmV5LWNvbG9yLXNlY29uZDogIzc2NzY3NjtcclxuJGdyZXktaW5wdXQtY29sb3I6ICNFNUU1RTU7XHJcbiRmdWxsLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4iLCIuYXBwLWxvYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuMztcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmFwcC1sb2FkZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiA4cHggc29saWQgI0Y4RjhGODtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICMwMDk2NUU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogMTAwMTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/loader/loader.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/modules/shared-module/components/loader/loader.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: LoaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () { return LoaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
            /* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
            var LoaderComponent_1;
            var LoaderComponent = LoaderComponent_1 = /** @class */ (function () {
                function LoaderComponent() {
                    this.isVisible = function () { return LoaderComponent_1.visible; };
                }
                LoaderComponent.createTimer = function () {
                    return Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].methodTimeoutInMillis);
                };
                return LoaderComponent;
            }());
            LoaderComponent.visible = false;
            LoaderComponent.show = function () {
                LoaderComponent_1.visible = true;
                return LoaderComponent_1.createTimer();
            };
            LoaderComponent.hide = function () { return LoaderComponent_1.visible = false; };
            LoaderComponent = LoaderComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loader',
                    template: '<div *ngIf="isVisible()" class="app-loader"></div>',
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/modules/shared-module/components/loader/loader.component.scss")).default]
                })
            ], LoaderComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.scss": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.scss ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-accent-color {\n  color: #00965E;\n}\n\n.app-results {\n  text-align: center;\n  max-width: 450px;\n  position: relative;\n  margin: auto;\n}\n\n.app-results-zip {\n  position: relative;\n  margin: 0 auto;\n  width: auto;\n  height: auto;\n}\n\n.app-results-main-circle {\n  position: relative;\n  width: 70%;\n  background-color: #e6f3ee;\n  display: block;\n  padding-bottom: 70%;\n  margin: 0 auto;\n  height: auto;\n  font-size: inherit;\n  border-radius: 50%;\n  box-shadow: 0 2px 20px 1px rgba(0, 0, 0, 0.2);\n}\n\n.app-main-circle-content {\n  margin: 0;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.app-results-loan-term-circle {\n  position: relative;\n  width: 40%;\n  display: block;\n  margin: 0 auto;\n  height: auto;\n  font-size: inherit;\n  border-radius: 50%;\n  margin-left: 3%;\n  margin-top: -20%;\n}\n\n.app-range-container-loan-term-circle {\n  max-width: 100%;\n  height: auto;\n}\n\n.app-results-circle {\n  position: relative;\n  width: 50%;\n  display: block;\n  margin: 0 auto;\n  height: auto;\n  font-size: inherit;\n  border-radius: 50%;\n  margin-right: 0;\n  margin-top: -45%;\n}\n\n.app-range-container {\n  max-width: 100%;\n  height: auto;\n}\n\nsvg {\n  max-width: 100% !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1yZXN1bHRzLXZpZXcvQzpcXFVzZXJzXFxhY2hyb3NjaWVsZXdza2FcXF9QUk9KRUtUWVxcQk5QX1BST0pFS1RZXFxIT1xcbW9ydGdhZ2Utb25saW5lLXNpbXVsYXRvci1jaGVja2xpc3Qtd2ViL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWQtbW9kdWxlXFxjb21wb25lbnRzXFxzaW11bGF0aW9uLXJlc3VsdHMtdmlld1xcc2ltdWxhdGlvbi1yZXN1bHRzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3NpbXVsYXRpb24tcmVzdWx0cy12aWV3L0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFzc2V0c1xcY29uZmlnXFxfY29sb3JzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3NpbXVsYXRpb24tcmVzdWx0cy12aWV3L3NpbXVsYXRpb24tcmVzdWx0cy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0NEYztBQ0RoQjs7QUZLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUVGRjs7QUZLQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FFRkY7O0FGS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FFRkY7O0FGS0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FFRkY7O0FGS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFRkY7O0FGS0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRUZGOztBRk1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRUhGOztBRk1BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUVIRjs7QUZNQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7QUVIRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3NpbXVsYXRpb24tcmVzdWx0cy12aWV3L3NpbXVsYXRpb24tcmVzdWx0cy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2JyZWFrcG9pbnRzXCI7XHJcblxyXG4uYXBwLWFjY2VudC1jb2xvciB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uYXBwLXJlc3VsdHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hcHAtcmVzdWx0cy16aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hcHAtcmVzdWx0cy1tYWluLWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjNlZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWJvdHRvbTogNzAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMXB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmFwcC1tYWluLWNpcmNsZS1jb250ZW50IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmFwcC1yZXN1bHRzLWxvYW4tdGVybS1jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxuICBtYXJnaW4tdG9wOiAtMjAlO1xyXG59XHJcblxyXG4uYXBwLXJhbmdlLWNvbnRhaW5lci1sb2FuLXRlcm0tY2lyY2xlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmFwcC1yZXN1bHRzLWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IC00NSU7XHJcbn1cclxuXHJcbi5hcHAtcmFuZ2UtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5zdmcge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJG1kKSB7fVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICRsZykge31cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkeGwpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHh4bCkge31cclxuIiwiJGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiR0ZXh0LWNvbG9yOiAjMkQyOTI2O1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMDk2NUU7XHJcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjRUVGOUYwO1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogIzE0MTQxNDtcclxuXHJcbiRzZWNvbmRhcnktY29sb3I6ICMwMEJDOEM7XHJcblxyXG4kY29udHJhc3QtY29sb3I6ICNGNUE2MjM7XHJcbiRjb250cmFzdC1jb2xvci1zZWNvbmQ6ICNGRkNGODA7XHJcblxyXG4kc3VjY2Vzcy1jb2xvci1wcmltYXJ5OiAjMEZCNzc3O1xyXG4kc3VjY2Vzcy1jb2xvci1zZWNvbmRhcnk6ICM5RUREQTY7XHJcbiRlcnJvci1jb2xvci1wcmltYXJ5OiAjRDQwMDAwO1xyXG4kZXJyb3ItY29sb3Itc2Vjb25kYXJ5OiAjRkFFNUU1O1xyXG5cclxuJG5vdGljZS1jb2xvci1wcmltYXJ5OiAjRThENzAwO1xyXG4kbm90aWNlLWNvbG9yLXNlY29uZGFyeTogI0ZGRkFCQztcclxuXHJcbiRsaW5rOiAjMDA4RjU4O1xyXG4kbGluay1ob3ZlcjogIzAwODI1MTtcclxuJGdyZXktY29sb3I6ICNFRUU7XHJcbiRncmV5LWNvbG9yLXNlY29uZDogIzc2NzY3NjtcclxuJGdyZXktaW5wdXQtY29sb3I6ICNFNUU1RTU7XHJcbiRmdWxsLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4iLCIuYXBwLWFjY2VudC1jb2xvciB7XG4gIGNvbG9yOiAjMDA5NjVFO1xufVxuXG4uYXBwLXJlc3VsdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXBwLXJlc3VsdHMtemlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmFwcC1yZXN1bHRzLW1haW4tY2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmM2VlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmFwcC1tYWluLWNpcmNsZS1jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYXBwLXJlc3VsdHMtbG9hbi10ZXJtLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi10b3A6IC0yMCU7XG59XG5cbi5hcHAtcmFuZ2UtY29udGFpbmVyLWxvYW4tdGVybS1jaXJjbGUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmFwcC1yZXN1bHRzLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC00NSU7XG59XG5cbi5hcHAtcmFuZ2UtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbnN2ZyB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: SimulationResultsViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationResultsViewComponent", function () { return SimulationResultsViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/parameters/systemParameters */ "./src/assets/parameters/systemParameters.ts");
            /* harmony import */ var _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/simulation/service/simulation.service */ "./src/app/modules/simulation/service/simulation.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model */ "./src/app/modules/shared-module/model/index.ts");
            var SimulationResultsViewComponent = /** @class */ (function () {
                function SimulationResultsViewComponent(simulationService) {
                    this.simulationService = simulationService;
                    this.apiMethodUnavailable = false;
                    this.sliderChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.cirleSliderId = 'resultCircleRootSVG';
                    this.termCirleSliderId = 'resultTermCircleRootSVG';
                }
                SimulationResultsViewComponent.prototype.ngOnInit = function () {
                    this.checkViewType();
                    this.initResultCircleSlider();
                    this.initLoanTermCircleSlider();
                    this.minInstallment = _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minInstallment;
                };
                SimulationResultsViewComponent.prototype.ngOnChanges = function (changes) {
                    var changeSimulation = changes.simulation;
                    var changeSimulationVariant = changes.simulationVariant;
                    var changeSimulationParametres = changes.simulationParametres;
                    this.trackSliderChagnes();
                    if (this.resultCircleSlider) {
                        this.updateResultViewAfterChange();
                    }
                };
                SimulationResultsViewComponent.prototype.updateResultViewAfterChange = function () {
                    if (this.isInstallmentView) {
                        this.resultCircleSlider.stepNo = this.simulation.installmentMonthlyAmount - _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minInstallment;
                        this.loanTermCircleSlider.stepNo = this.simulation.numberOfInstallmentsInYears - _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minLoanTermInYears;
                    }
                    if (this.isLoanView) {
                        this.resultCircleSlider.stepNo = this.simulation.loanAmount - _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].mintotalLoanAmount;
                        this.loanTermCircleSlider.stepNo = this.simulation.numberOfInstallmentsInYears - _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minLoanTermInYears;
                    }
                };
                SimulationResultsViewComponent.prototype.checkViewType = function () {
                    this.isInstallmentView = (this.simulationVariant === 'INSTALMENT_VIEW') ? true : false;
                    this.isLoanView = (this.simulationVariant === 'LOAN_VIEW') ? true : false;
                };
                SimulationResultsViewComponent.prototype.initResultCircleSlider = function () {
                    if (this.isInstallmentView) {
                        this.setUpInstalmentViewSlider();
                    }
                    if (this.isLoanView) {
                        this.setUpLoanViewSlider();
                    }
                };
                SimulationResultsViewComponent.prototype.setUpInstalmentViewSlider = function () {
                    var _this = this;
                    var min = _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minInstallment;
                    var max = _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].maxInstallment;
                    this.resultCircleSliderOptions = new _model__WEBPACK_IMPORTED_MODULE_6__["CircleSliderOption"]('resultCircle', '#00965E', min, max, 1, 195, function (val, eventType) {
                        _this.installmentValueChange((val < 0 ? 1 : val), eventType);
                    });
                    this.resultCircleSlider = new CircularSlider(this.cirleSliderId, this.resultCircleSliderOptions);
                    this.resultCircleSlider.stepNo = this.simulation.installmentMonthlyAmount - _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minInstallment;
                };
                SimulationResultsViewComponent.prototype.setUpLoanViewSlider = function () {
                    var _this = this;
                    var min = _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].mintotalLoanAmount;
                    var max = _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].maxtotalLoanAmount;
                    this.resultCircleSliderOptions = new _model__WEBPACK_IMPORTED_MODULE_6__["CircleSliderOption"]('resultCircle', '#00965E', min, max, 1, 195, function (val, eventType) {
                        _this.loanSliderValueChange((val < 0 ? 1 : val), eventType);
                    });
                    this.resultCircleSlider = new CircularSlider(this.cirleSliderId, this.resultCircleSliderOptions);
                    this.resultCircleSlider.stepNo = this.simulation.loanAmount - _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].mintotalLoanAmount;
                };
                SimulationResultsViewComponent.prototype.initLoanTermCircleSlider = function () {
                    var _this = this;
                    var min = _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minLoanTermInYears;
                    var max = _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].maxLoanTermInYears;
                    this.loanTermCircleSliderOptions = new _model__WEBPACK_IMPORTED_MODULE_6__["CircleSliderOption"]('loanTermCircle', '#00965E', min, max, 1, 195, function (val, eventType) {
                        _this.numberOfInstallmentsInYearsChange((val < 0 ? 1 : val), eventType);
                    });
                    this.loanTermCircleSlider = new CircularSlider(this.termCirleSliderId, this.loanTermCircleSliderOptions);
                    this.loanTermCircleSlider.stepNo = this.simulation.numberOfInstallmentsInYears - _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_3__["simulationParameters"].minLoanTermInYears;
                };
                SimulationResultsViewComponent.prototype.startTrackSlider = function (eventType) {
                    if (eventType === 'click' || eventType === 'mouseup' || eventType === 'touchend') {
                        this.sliderChangeEvent.next(eventType);
                    }
                };
                SimulationResultsViewComponent.prototype.trackSliderChagnes = function () {
                    var _this = this;
                    this.sliderChangeEvent.next('');
                    this.sliderChangeEvent
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
                        .subscribe(function (data) { _this.startRecalculation(data); }, function (err) { return console.error(err); });
                };
                SimulationResultsViewComponent.prototype.startRecalculation = function (newValue) {
                    if (newValue) {
                        this.recalculate(this.simulationParametres);
                        this.sliderChangeEvent.next('');
                    }
                };
                SimulationResultsViewComponent.prototype.installmentValueChange = function (val, eventType) {
                    this.sliderValueResultCircle = val;
                    if (this.simulation.installmentMonthlyAmount !== this.sliderValueResultCircle) {
                        this.simulationParametres.installmentMonthlyAmount = this.sliderValueResultCircle;
                        this.startTrackSlider(eventType);
                    }
                };
                SimulationResultsViewComponent.prototype.loanSliderValueChange = function (val, eventType) {
                    this.sliderValueResultCircle = val;
                    if (this.simulation.loanAmount !== this.sliderValueResultCircle) {
                        this.simulationParametres.totalLoanAmount = this.sliderValueResultCircle;
                        this.startTrackSlider(eventType);
                    }
                };
                SimulationResultsViewComponent.prototype.numberOfInstallmentsInYearsChange = function (val, eventType) {
                    this.sliderValueLoanTermCircle = val;
                    if (this.simulation.numberOfInstallmentsInYears !== this.sliderValueLoanTermCircle) {
                        this.simulationParametres.simpleSimulationRequest.loanTermInYears = this.sliderValueLoanTermCircle;
                        this.startTrackSlider(eventType);
                    }
                };
                SimulationResultsViewComponent.prototype.recalculate = function (model) {
                    var _this = this;
                    this.simulationSubscribtion = this.simulationService.recaluculate(model)
                        .subscribe(function (result) {
                        _this.apiMethodUnavailable = true;
                        _this.simulationService.saveResults(result);
                    }, function (error) {
                        console.log(error);
                        _this.apiMethodUnavailable = true;
                    });
                };
                return SimulationResultsViewComponent;
            }());
            SimulationResultsViewComponent.ctorParameters = function () { return [
                { type: _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_4__["SimulationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SimulationResultsViewComponent.prototype, "simulation", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SimulationResultsViewComponent.prototype, "simulationVariant", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SimulationResultsViewComponent.prototype, "simulationParametres", void 0);
            SimulationResultsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-results-view',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-results-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-results-view.component.scss */ "./src/app/modules/shared-module/components/simulation-results-view/simulation-results-view.component.scss")).default]
                })
            ], SimulationResultsViewComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/toggler/toggler.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/shared-module/components/toggler/toggler.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: TogglerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglerComponent", function () { return TogglerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TogglerComponent = /** @class */ (function () {
                function TogglerComponent() {
                    this.longContent = false;
                }
                TogglerComponent.prototype.showHideMore = function () {
                    this.longContent = !this.longContent;
                };
                return TogglerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TogglerComponent.prototype, "shortValue", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TogglerComponent.prototype, "longValue", void 0);
            TogglerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-content-toggler',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toggler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/toggler/toggler.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toggler.scss */ "./src/app/modules/shared-module/components/toggler/toggler.scss")).default]
                })
            ], TogglerComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/toggler/toggler.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/modules/shared-module/components/toggler/toggler.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-doc-view {\n  display: flex;\n}\n\n.app-toggler i {\n  color: #008251;\n}\n\n.app-toggler__moreSpace {\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvdG9nZ2xlci9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZC1tb2R1bGVcXGNvbXBvbmVudHNcXHRvZ2dsZXJcXHRvZ2dsZXIuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvdG9nZ2xlci90b2dnbGVyLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3RvZ2dsZXIvQzpcXFVzZXJzXFxhY2hyb3NjaWVsZXdza2FcXF9QUk9KRUtUWVxcQk5QX1BST0pFS1RZXFxIT1xcbW9ydGdhZ2Utb25saW5lLXNpbXVsYXRvci1jaGVja2xpc3Qtd2ViL3NyY1xcYXNzZXRzXFxjb25maWdcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGNFY1c7QURmYjs7QURJQTtFQUNFLHNCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy90b2dnbGVyL3RvZ2dsZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvY29sb3JzJztcclxuXHJcbi5hcHAtZG9jLXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcHAtdG9nZ2xlciBpIHtcclxuICBjb2xvcjogJGxpbmstaG92ZXJcclxufVxyXG5cclxuLmFwcC10b2dnbGVyX19tb3JlU3BhY2Uge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuIiwiLmFwcC1kb2MtdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hcHAtdG9nZ2xlciBpIHtcbiAgY29sb3I6ICMwMDgyNTE7XG59XG5cbi5hcHAtdG9nZ2xlcl9fbW9yZVNwYWNlIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn0iLCIkYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuJHRleHQtY29sb3I6ICMyRDI5MjY7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzAwOTY1RTtcclxuJHByaW1hcnktbGlnaHQtY29sb3I6ICNFRUY5RjA7XHJcbiRwcmltYXJ5LWNvbG9yLWhvdmVyOiAjMTQxNDE0O1xyXG5cclxuJHNlY29uZGFyeS1jb2xvcjogIzAwQkM4QztcclxuXHJcbiRjb250cmFzdC1jb2xvcjogI0Y1QTYyMztcclxuJGNvbnRyYXN0LWNvbG9yLXNlY29uZDogI0ZGQ0Y4MDtcclxuXHJcbiRzdWNjZXNzLWNvbG9yLXByaW1hcnk6ICMwRkI3Nzc7XHJcbiRzdWNjZXNzLWNvbG9yLXNlY29uZGFyeTogIzlFRERBNjtcclxuJGVycm9yLWNvbG9yLXByaW1hcnk6ICNENDAwMDA7XHJcbiRlcnJvci1jb2xvci1zZWNvbmRhcnk6ICNGQUU1RTU7XHJcblxyXG4kbm90aWNlLWNvbG9yLXByaW1hcnk6ICNFOEQ3MDA7XHJcbiRub3RpY2UtY29sb3Itc2Vjb25kYXJ5OiAjRkZGQUJDO1xyXG5cclxuJGxpbms6ICMwMDhGNTg7XHJcbiRsaW5rLWhvdmVyOiAjMDA4MjUxO1xyXG4kZ3JleS1jb2xvcjogI0VFRTtcclxuJGdyZXktY29sb3Itc2Vjb25kOiAjNzY3Njc2O1xyXG4kZ3JleS1pbnB1dC1jb2xvcjogI0U1RTVFNTtcclxuJGZ1bGwtYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/view-data-container/view-data-container.component.scss": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/components/view-data-container/view-data-container.component.scss ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-view-data-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0 5px;\n}\n\n.app-view-data-item {\n  padding: 5px;\n}\n\n.app-card-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.app-card-subtitle {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n@media (min-width: 768px) {\n  .app-view-data-item {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvdmlldy1kYXRhLWNvbnRhaW5lci9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhc3NldHNcXGNvbmZpZ1xcY29tcG9uZW50c1xcX2FwcFZpZXdEYXRhLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3ZpZXctZGF0YS1jb250YWluZXIvdmlldy1kYXRhLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy92aWV3LWRhdGEtY29udGFpbmVyL3ZpZXctZGF0YS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vYnJlYWtwb2ludHNcIjtcclxuXHJcbi5hcHAtdmlldy1kYXRhLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLmFwcC12aWV3LWRhdGEtaXRlbSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYXBwLWNhcmQtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hcHAtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJG1kKSB7XHJcbiAgLmFwcC12aWV3LWRhdGEtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuYXBwLXZpZXctZGF0YS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmFwcC12aWV3LWRhdGEtaXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFwcC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYXBwLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFwcC12aWV3LWRhdGEtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/components/view-data-container/view-data-container.component.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/components/view-data-container/view-data-container.component.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: ViewDataContainerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDataContainerComponent", function () { return ViewDataContainerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ViewDataContainerComponent = /** @class */ (function () {
                function ViewDataContainerComponent() {
                }
                return ViewDataContainerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ViewDataContainerComponent.prototype, "appViewDataToDisplay", void 0);
            ViewDataContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-view-data-container',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-data-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/components/view-data-container/view-data-container.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-data-container.component.scss */ "./src/app/modules/shared-module/components/view-data-container/view-data-container.component.scss")).default]
                })
            ], ViewDataContainerComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/directives/digit-only.directive.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/modules/shared-module/directives/digit-only.directive.ts ***!
          \**************************************************************************/
        /*! exports provided: DigitOnlyDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitOnlyDirective", function () { return DigitOnlyDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DigitOnlyDirective = /** @class */ (function () {
                function DigitOnlyDirective(el) {
                    this.el = el;
                    this.decimalCounter = 0;
                    this.navigationKeys = [
                        'Backspace',
                        'Delete',
                        'Tab',
                        'Escape',
                        'Enter',
                        'Home',
                        'End',
                        'ArrowLeft',
                        'ArrowRight',
                        'Clear',
                        'Copy',
                        'Paste'
                    ];
                    this.decimal = false;
                    this.decimalSeparator = '.';
                    this.inputElement = el.nativeElement;
                }
                DigitOnlyDirective.prototype.onKeyDown = function (e) {
                    if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
                        (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
                        (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
                        (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
                        (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
                        (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
                        (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
                        (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
                        (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X (Mac)
                        (this.decimal && (e.key === this.decimalSeparator) && this.decimalCounter < 1) // Allow: only one decimal point
                    ) {
                        // let it happen, don't do anything
                        return;
                    }
                    // Ensure that it is a number and stop the keypress
                    if (e.key === ' ' || isNaN(Number(e.key))) {
                        e.preventDefault();
                    }
                };
                DigitOnlyDirective.prototype.onKeyUp = function (e) {
                    if (!this.decimal) {
                        return;
                    }
                    else {
                        this.decimalCounter = this.el.nativeElement.value.split(this.decimalSeparator).length - 1;
                    }
                };
                DigitOnlyDirective.prototype.onPaste = function (event) {
                    var pastedInput = event.clipboardData.getData('text/plain');
                    this.pasteData(pastedInput);
                    event.preventDefault();
                };
                DigitOnlyDirective.prototype.onDrop = function (event) {
                    var textData = event.dataTransfer.getData('text');
                    this.inputElement.focus();
                    this.pasteData(textData);
                    event.preventDefault();
                };
                DigitOnlyDirective.prototype.pasteData = function (pastedContent) {
                    var sanitizedContent = this.sanatizeInput(pastedContent);
                    var pasted = document.execCommand('insertText', false, sanitizedContent);
                    if (!pasted) {
                        var _a = this.inputElement, start = _a.selectionStart, end = _a.selectionEnd;
                        this.inputElement.setRangeText(sanitizedContent, start, end, 'end');
                    }
                };
                DigitOnlyDirective.prototype.sanatizeInput = function (input) {
                    var result = '';
                    if (this.decimal && this.isValidDecimal(input)) {
                        var regex = new RegExp("[^0-9" + this.decimalSeparator + "]", 'g');
                        result = input.replace(regex, '');
                    }
                    else {
                        result = input.replace(/[^0-9]/g, '');
                    }
                    var maxLength = this.inputElement.maxLength;
                    if (maxLength > 0) { // the input element has maxLength limit
                        var allowedLength = maxLength - this.inputElement.value.length;
                        result = allowedLength > 0 ? result.substring(0, allowedLength) : '';
                    }
                    return result;
                };
                DigitOnlyDirective.prototype.isValidDecimal = function (input) {
                    return input.split(this.decimalSeparator).length <= 2;
                };
                return DigitOnlyDirective;
            }());
            DigitOnlyDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DigitOnlyDirective.prototype, "decimal", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DigitOnlyDirective.prototype, "decimalSeparator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
            ], DigitOnlyDirective.prototype, "onKeyDown", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event'])
            ], DigitOnlyDirective.prototype, "onKeyUp", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste', ['$event'])
            ], DigitOnlyDirective.prototype, "onPaste", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
            ], DigitOnlyDirective.prototype, "onDrop", null);
            DigitOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appDigitOnly]'
                })
            ], DigitOnlyDirective);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/model/comon.ts": 
        /*!******************************************************!*\
          !*** ./src/app/modules/shared-module/model/comon.ts ***!
          \******************************************************/
        /*! exports provided: FormOption, AppViewData, LoginRequest, LoginResponse, UserContext, UserSession, CircleSliderOption */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormOption", function () { return FormOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppViewData", function () { return AppViewData; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function () { return LoginRequest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponse", function () { return LoginResponse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function () { return UserContext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSession", function () { return UserSession; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleSliderOption", function () { return CircleSliderOption; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var FormOption = /** @class */ (function () {
                function FormOption(label, value) {
                    if (label === void 0) { label = ''; }
                    if (value === void 0) { value = ''; }
                    this.label = label;
                    this.value = value;
                }
                return FormOption;
            }());
            var AppViewData = /** @class */ (function () {
                function AppViewData(label, data, id) {
                    if (label === void 0) { label = ''; }
                    if (data === void 0) { data = null; }
                    if (id === void 0) { id = ''; }
                    this.label = label;
                    this.data = data;
                    this.id = id;
                }
                return AppViewData;
            }());
            var LoginRequest = /** @class */ (function () {
                function LoginRequest() {
                }
                return LoginRequest;
            }());
            var LoginResponse = /** @class */ (function () {
                function LoginResponse() {
                }
                return LoginResponse;
            }());
            var UserContext;
            (function (UserContext) {
                UserContext[UserContext["Customer"] = 0] = "Customer";
                UserContext[UserContext["Broker"] = 1] = "Broker";
            })(UserContext || (UserContext = {}));
            var UserSession = /** @class */ (function () {
                function UserSession() {
                    this.userContext = UserContext.Customer;
                    this.authenticated = false;
                    this.loginAttempt = 0;
                }
                return UserSession;
            }());
            var CircleSliderOption = /** @class */ (function () {
                function CircleSliderOption(container, color, min, max, step, radius, valueChange) {
                    if (container === void 0) { container = ''; }
                    if (color === void 0) { color = ''; }
                    if (min === void 0) { min = 0; }
                    if (max === void 0) { max = 0; }
                    if (step === void 0) { step = 0; }
                    if (radius === void 0) { radius = 0; }
                    this.container = container;
                    this.color = color;
                    this.min = min;
                    this.max = max;
                    this.step = step;
                    this.radius = radius;
                    this.valueChange = valueChange;
                }
                return CircleSliderOption;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/model/index.ts": 
        /*!******************************************************!*\
          !*** ./src/app/modules/shared-module/model/index.ts ***!
          \******************************************************/
        /*! exports provided: FormOption, AppViewData, LoginRequest, LoginResponse, UserContext, UserSession, CircleSliderOption */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comon */ "./src/app/modules/shared-module/model/comon.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormOption", function () { return _comon__WEBPACK_IMPORTED_MODULE_1__["FormOption"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppViewData", function () { return _comon__WEBPACK_IMPORTED_MODULE_1__["AppViewData"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function () { return _comon__WEBPACK_IMPORTED_MODULE_1__["LoginRequest"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginResponse", function () { return _comon__WEBPACK_IMPORTED_MODULE_1__["LoginResponse"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserContext", function () { return _comon__WEBPACK_IMPORTED_MODULE_1__["UserContext"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSession", function () { return _comon__WEBPACK_IMPORTED_MODULE_1__["UserSession"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleSliderOption", function () { return _comon__WEBPACK_IMPORTED_MODULE_1__["CircleSliderOption"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/pipes/index.ts": 
        /*!******************************************************!*\
          !*** ./src/app/modules/shared-module/pipes/index.ts ***!
          \******************************************************/
        /*! exports provided: SpacePipe, InstalmentSufix */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _installmentSufix_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./installmentSufix.pipe */ "./src/app/modules/shared-module/pipes/installmentSufix.pipe.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstalmentSufix", function () { return _installmentSufix_pipe__WEBPACK_IMPORTED_MODULE_1__["InstalmentSufix"]; });
            /* harmony import */ var _space_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space.pipe */ "./src/app/modules/shared-module/pipes/space.pipe.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacePipe", function () { return _space_pipe__WEBPACK_IMPORTED_MODULE_2__["SpacePipe"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/pipes/installmentSufix.pipe.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/modules/shared-module/pipes/installmentSufix.pipe.ts ***!
          \**********************************************************************/
        /*! exports provided: InstalmentSufix */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalmentSufix", function () { return InstalmentSufix; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            var InstalmentSufix = /** @class */ (function () {
                function InstalmentSufix(translate) {
                    this.translate = translate;
                }
                InstalmentSufix.prototype.transform = function (value, args) {
                    switch (value) {
                        case 1:
                            return value + " " + this.translate.instant('SimulatorResults.option.term1');
                        case 2:
                            return value + " " + this.translate.instant('SimulatorResults.option.term2');
                        default:
                            return value + " " + this.translate.instant('SimulatorResults.option.term');
                    }
                };
                return InstalmentSufix;
            }());
            InstalmentSufix.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
            ]; };
            InstalmentSufix = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'installmentSufix'
                })
            ], InstalmentSufix);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/pipes/space.pipe.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/modules/shared-module/pipes/space.pipe.ts ***!
          \***********************************************************/
        /*! exports provided: SpacePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacePipe", function () { return SpacePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var SpacePipe = /** @class */ (function () {
                function SpacePipe(decimalPipe) {
                    this.decimalPipe = decimalPipe;
                }
                SpacePipe.prototype.transform = function (value, args) {
                    var formatedValue = this.decimalPipe.transform(value);
                    formatedValue.toString();
                    return formatedValue.split(',').join(' ');
                };
                return SpacePipe;
            }());
            SpacePipe.ctorParameters = function () { return [
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"] }
            ]; };
            SpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'space'
                })
            ], SpacePipe);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/modules/shared-module/services/i18n/translation-loader.service.ts ***!
          \***********************************************************************************/
        /*! exports provided: TranslationLoaderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationLoaderService", function () { return TranslationLoaderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            var TranslationLoaderService = /** @class */ (function () {
                function TranslationLoaderService(translate) {
                    this.translate = translate;
                }
                TranslationLoaderService.prototype.loadTranslations = function () {
                    var i18nPl = __webpack_require__(/*! ../../../../../assets/translations/pl.json */ "./src/assets/translations/pl.json");
                    this.translate.setTranslation('pl', i18nPl, true);
                };
                return TranslationLoaderService;
            }());
            TranslationLoaderService.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
            ]; };
            TranslationLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TranslationLoaderService);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/services/i18n/validations.loader.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/modules/shared-module/services/i18n/validations.loader.ts ***!
          \***************************************************************************/
        /*! exports provided: ValidationLoader */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationLoader", function () { return ValidationLoader; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes */ "./src/app/modules/shared-module/pipes/index.ts");
            var ValidationLoader_1;
            var ValidationLoader = ValidationLoader_1 = /** @class */ (function () {
                function ValidationLoader(translate, formlyConfig, spacePipe) {
                    this.translate = translate;
                    this.formlyConfig = formlyConfig;
                    this.spacePipe = spacePipe;
                }
                ValidationLoader.phoneAllowed = function (testedValue) {
                    return /^\d{9}$/i.test(testedValue);
                };
                ValidationLoader.phoneNotAllowed = function (testedValue) {
                    var negativeRegexps = [
                        /^0.*$/i,
                        /^700.*$/i,
                        /^800.*$/i,
                        /^900.*$/i,
                        /^123456789$/i,
                        /^0{9}$/i,
                        /^1{9}$/i,
                        /^2{9}$/i,
                        /^3{9}$/i,
                        /^4{9}$/i,
                        /^5{9}$/i,
                        /^6{9}$/i,
                        /^7{9}$/i,
                        /^8{9}$/i,
                        /^9{9}$/i
                    ];
                    for (var i = 0; i < negativeRegexps.length; i++) {
                        if (negativeRegexps[i].test(testedValue)) {
                            return true;
                        }
                    }
                    return false;
                };
                ValidationLoader.prototype.init = function () {
                    var _this = this;
                    // custom validations
                    this.formlyConfig.setValidator({ name: 'email', validation: this.emailValidator });
                    this.formlyConfig.setValidator({ name: 'phone', validation: this.phoneValidator });
                    this.formlyConfig.setValidator({ name: 'firstName', validation: this.firstNameValidator });
                    this.formlyConfig.setValidator({ name: 'lastName', validation: this.lastNameValidator });
                    // message without params
                    this.formlyConfig.addValidatorMessage('required', function (err, field) { return _this.translate.instant('Validations.required'); });
                    this.formlyConfig.addValidatorMessage('email', function (err, field) { return _this.translate.instant('Validations.email'); });
                    this.formlyConfig.addValidatorMessage('phone', function (err, field) { return _this.translate.instant('Validations.phone'); });
                    this.formlyConfig.addValidatorMessage('firstName', function (err, field) { return _this.translate.instant('Validations.firstName'); });
                    this.formlyConfig.addValidatorMessage('lastName', function (err, field) { return _this.translate.instant('Validations.lastName'); });
                    // message with params
                    this.formlyConfig.addValidatorMessage('minlength', function (err, field) { return _this.minlengthValidationMessage(err, field, _this.translate); });
                    this.formlyConfig.addValidatorMessage('maxlength', function (err, field) { return _this.maxlengthValidationMessage(err, field, _this.translate); });
                    this.formlyConfig.addValidatorMessage('min', function (err, field) { return _this.minValidationMessage(err, field, _this.translate); });
                    this.formlyConfig.addValidatorMessage('max', function (err, field) { return _this.maxValidationMessage(err, field, _this.translate); });
                };
                ValidationLoader.prototype.minlengthValidationMessage = function (err, field, translate) {
                    return translate.instant('Validations.minLength', { number: field.templateOptions.minLength });
                };
                ValidationLoader.prototype.maxlengthValidationMessage = function (err, field, translate) {
                    return translate.instant('Validations.maxLength', { number: field.templateOptions.maxLength });
                };
                ValidationLoader.prototype.minValidationMessage = function (err, field, translate) {
                    return translate.instant('Validations.min', { number: this.spacePipe.transform(field.templateOptions.min) });
                };
                ValidationLoader.prototype.maxValidationMessage = function (err, field, translate) {
                    return translate.instant('Validations.max', { number: this.spacePipe.transform(field.templateOptions.max) });
                };
                ValidationLoader.prototype.emailValidator = function (control) {
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value) ? null : { email: true };
                };
                ValidationLoader.prototype.firstNameValidator = function (control) {
                    return /^([a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+\s)*[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i.test(control.value) ? null : { firstName: true };
                };
                ValidationLoader.prototype.lastNameValidator = function (control) {
                    return /^([a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ,.'-]+\s)*[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ,.'-]+$/i.test(control.value) ? null : { lastName: true };
                };
                ValidationLoader.prototype.phoneValidator = function (control) {
                    return (ValidationLoader_1.phoneAllowed(control.value) && !ValidationLoader_1.phoneNotAllowed(control.value)) ? null : { phone: true };
                };
                return ValidationLoader;
            }());
            ValidationLoader.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyConfig"] },
                { type: _pipes__WEBPACK_IMPORTED_MODULE_4__["SpacePipe"] }
            ]; };
            ValidationLoader = ValidationLoader_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
            ], ValidationLoader);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/shared-module/services/user-auth/user-auth.service.ts ***!
          \*******************************************************************************/
        /*! exports provided: UserAuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function () { return UserAuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-control.service */ "./src/app/modules/shared-module/services/user-auth/user-control.service.ts");
            /* harmony import */ var _app_modules_shared_module_model_comon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/model/comon */ "./src/app/modules/shared-module/model/comon.ts");
            /* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
            /* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7__);
            var UserAuthService = /** @class */ (function () {
                function UserAuthService(userControlService, storage) {
                    this.userControlService = userControlService;
                    this.storage = storage;
                    this.userSession = new _app_modules_shared_module_model_comon__WEBPACK_IMPORTED_MODULE_3__["UserSession"]();
                }
                UserAuthService.prototype.isBroker = function () {
                    return this.userSession.userContext === _app_modules_shared_module_model_comon__WEBPACK_IMPORTED_MODULE_3__["UserContext"].Broker;
                };
                UserAuthService.prototype.setUserContext = function (userContext) {
                    this.userSession.userContext = userContext;
                };
                UserAuthService.prototype.setupUserSession = function () {
                    var savedLastLogin = this.getLoginDateFromLocalStorage();
                    if (this.isTimeOfLastLoginShorterThanSessionParam(new Date(savedLastLogin))) {
                        this.loginCorrect();
                    }
                    else {
                        this.logOut();
                    }
                };
                UserAuthService.prototype.isTimeOfLastLoginShorterThanSessionParam = function (lastLogin) {
                    return (lastLogin && this.getTimeDiffInMilisFromNow(lastLogin) < this.getTimeInMilis(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].timeInMinutesTillSessionExpired));
                };
                UserAuthService.prototype.getTimeInMilis = function (timeInMinutes) {
                    return timeInMinutes * 1000 * 60;
                };
                UserAuthService.prototype.getTimeDiffInMilisFromNow = function (diffDate) {
                    return (new Date().getTime() - new Date(diffDate).getTime());
                };
                UserAuthService.prototype.getTimeToCloseSessionInMilis = function () {
                    var lastLogin = this.getLoginDateFromLocalStorage();
                    if (this.isTimeOfLastLoginShorterThanSessionParam(lastLogin)) {
                        return this.getTimeInMilis(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].timeInMinutesTillSessionExpired) - this.getTimeDiffInMilisFromNow(lastLogin);
                    }
                    return this.getTimeInMilis(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].timeInMinutesTillSessionExpired);
                };
                UserAuthService.prototype.authenticateUser = function (loginRequest) {
                    var _this = this;
                    return this.userControlService.authenticateUser(loginRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (loginResponse) {
                        if (loginResponse.isAuthenticated) {
                            _this.loginCorrect();
                            return loginResponse;
                        }
                        else {
                            _this.loginIncorrect();
                            return loginResponse;
                        }
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                        console.log(err);
                        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err);
                    }));
                };
                UserAuthService.prototype.hasAccessToModule = function () {
                    if (this.userSession && this.userSession.userContext === _app_modules_shared_module_model_comon__WEBPACK_IMPORTED_MODULE_3__["UserContext"].Customer) {
                        return true;
                    }
                    return this.userSession.authenticated;
                };
                UserAuthService.prototype.loginCorrect = function () {
                    var _this = this;
                    this.userSession.authenticated = true;
                    this.userSession.loginDate = new Date();
                    this.userSession.loginAttempt = 0;
                    setTimeout(function () {
                        _this.logOut();
                    }, this.getTimeToCloseSessionInMilis());
                    if (!this.isTimeOfLastLoginShorterThanSessionParam(this.getLoginDateFromLocalStorage())) {
                        this.setLoginDateToLocalStorage();
                    }
                };
                UserAuthService.prototype.loginIncorrect = function () {
                    this.userSession.loginAttempt++;
                };
                UserAuthService.prototype.logOut = function () {
                    this.userSession.authenticated = false;
                    this.userSession.loginAttempt = 0;
                    this.userSession.loginDate = null;
                };
                UserAuthService.prototype.setLoginDateToLocalStorage = function () {
                    this.storage.set('loginDate', new Date());
                };
                UserAuthService.prototype.getLoginDateFromLocalStorage = function () {
                    var savedLoginDate = this.storage.get('loginDate');
                    if (savedLoginDate) {
                        return new Date(savedLoginDate);
                    }
                    return null;
                };
                return UserAuthService;
            }());
            UserAuthService.ctorParameters = function () { return [
                { type: _app_modules_shared_module_services_user_auth_user_control_service__WEBPACK_IMPORTED_MODULE_2__["UserControlService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"],] }] }
            ]; };
            UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]))
            ], UserAuthService);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/services/user-auth/user-control.service.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/modules/shared-module/services/user-auth/user-control.service.ts ***!
          \**********************************************************************************/
        /*! exports provided: UserControlService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserControlService", function () { return UserControlService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
            /* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
            var UserControlService = /** @class */ (function () {
                function UserControlService(httpClient) {
                    this.httpClient = httpClient;
                }
                UserControlService.prototype.prepareHeaders = function () {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
                };
                UserControlService.prototype.authenticateUser = function (loginRequest) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user.isMock) {
                        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                            setTimeout(function () {
                                observer.next({ isAuthenticated: true,
                                    authenticationTime: new Date().toString() });
                            }, 2000);
                        });
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user.authenticationUrl, loginRequest, { headers: headers });
                    }
                };
                return UserControlService;
            }());
            UserControlService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserControlService);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/shared.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/modules/shared-module/shared.module.ts ***!
          \********************************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm2015/ngx-formly-bootstrap.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var _wrappers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrappers */ "./src/app/modules/shared-module/wrappers/index.ts");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./src/app/modules/shared-module/components/index.ts");
            /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "./src/app/modules/shared-module/types/index.ts");
            /* harmony import */ var _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/digit-only.directive */ "./src/app/modules/shared-module/directives/digit-only.directive.ts");
            /* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes */ "./src/app/modules/shared-module/pipes/index.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var _app_modules_shared_module_components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/modules/shared-module/components/toggler/toggler.component */ "./src/app/modules/shared-module/components/toggler/toggler.component.ts");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _wrappers__WEBPACK_IMPORTED_MODULE_11__["HorizontalWrapperComponent"],
                        _wrappers__WEBPACK_IMPORTED_MODULE_11__["VerticalWrapperComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_12__["ViewDataContainerComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_12__["SimulationResultsViewComponent"],
                        _types__WEBPACK_IMPORTED_MODULE_13__["RepeatSectionComponent"],
                        _wrappers__WEBPACK_IMPORTED_MODULE_11__["SectionInfoComponent"],
                        _types__WEBPACK_IMPORTED_MODULE_13__["CustomRadioComponent"],
                        _app_modules_shared_module_components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_17__["TogglerComponent"],
                        _types__WEBPACK_IMPORTED_MODULE_13__["CustomInputComponent"],
                        _types__WEBPACK_IMPORTED_MODULE_13__["DigitInputComponent"],
                        _types__WEBPACK_IMPORTED_MODULE_13__["CheckboxWithTooltipComponent"],
                        _types__WEBPACK_IMPORTED_MODULE_13__["CheckboxWithTooltipOnClickComponent"],
                        _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_14__["DigitOnlyDirective"],
                        _pipes__WEBPACK_IMPORTED_MODULE_15__["SpacePipe"],
                        _pipes__WEBPACK_IMPORTED_MODULE_15__["InstalmentSufix"],
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
                        _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forRoot({
                            wrappers: [
                                { name: 'form-field-horizontal', component: _wrappers__WEBPACK_IMPORTED_MODULE_11__["HorizontalWrapperComponent"] },
                                { name: 'form-field-vertical', component: _wrappers__WEBPACK_IMPORTED_MODULE_11__["VerticalWrapperComponent"] },
                                { name: 'section-info', component: _wrappers__WEBPACK_IMPORTED_MODULE_11__["SectionInfoComponent"] }
                            ],
                            types: [
                                { name: 'repeat-section', component: _types__WEBPACK_IMPORTED_MODULE_13__["RepeatSectionComponent"] },
                                { name: 'custom-radio', component: _types__WEBPACK_IMPORTED_MODULE_13__["CustomRadioComponent"] },
                                { name: 'custom-input', component: _types__WEBPACK_IMPORTED_MODULE_13__["CustomInputComponent"] },
                                { name: 'digit-input', component: _types__WEBPACK_IMPORTED_MODULE_13__["DigitInputComponent"] },
                                { name: 'checkbox-with-tooltip', component: _types__WEBPACK_IMPORTED_MODULE_13__["CheckboxWithTooltipComponent"] },
                                { name: 'checkbox-with-tooltip-onclick', component: _types__WEBPACK_IMPORTED_MODULE_13__["CheckboxWithTooltipOnClickComponent"] }
                            ]
                        }),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
                    ],
                    exports: [
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
                        _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AlertModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
                        _components__WEBPACK_IMPORTED_MODULE_12__["ViewDataContainerComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_12__["SimulationResultsViewComponent"],
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"],
                        _app_modules_shared_module_components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_17__["TogglerComponent"]
                    ],
                    providers: [
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
                        _services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_8__["TranslationLoaderService"],
                        _services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_9__["ValidationLoader"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"],
                        _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_18__["UserAuthService"]
                    ],
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.scss": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.scss ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-checkbox-with-tooltip {\n  position: relative;\n  display: flex;\n  width: 110%;\n}\n\n.app-checkbox-label {\n  padding-left: 5px;\n  width: 90%;\n}\n\n.app-checkbox-with-tooltip-onclick {\n  position: relative;\n}\n\n.app-tooltip-box {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: absolute;\n  bottom: 20px;\n  width: 380px;\n  border: solid 1px #00965E;\n  background-color: #EEF9F0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL2NoZWNrYm94LXdpdGgtdG9vbHRpcC1vbmNsaWNrL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkLW1vZHVsZVxcdHlwZXNcXGNoZWNrYm94LXdpdGgtdG9vbHRpcC1vbmNsaWNrXFxjaGVja2JveC13aXRoLXRvb2x0aXAtb25jbGljay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL2NoZWNrYm94LXdpdGgtdG9vbHRpcC1vbmNsaWNrL2NoZWNrYm94LXdpdGgtdG9vbHRpcC1vbmNsaWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC1tb2R1bGUvdHlwZXMvY2hlY2tib3gtd2l0aC10b29sdGlwLW9uY2xpY2svQzpcXFVzZXJzXFxhY2hyb3NjaWVsZXdza2FcXF9QUk9KRUtUWVxcQk5QX1BST0pFS1RZXFxIT1xcbW9ydGdhZ2Utb25saW5lLXNpbXVsYXRvci1jaGVja2xpc3Qtd2ViL3NyY1xcYXNzZXRzXFxjb25maWdcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkVyQm9CO0FEb0J0QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS90eXBlcy9jaGVja2JveC13aXRoLXRvb2x0aXAtb25jbGljay9jaGVja2JveC13aXRoLXRvb2x0aXAtb25jbGljay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2NvbG9yc1wiO1xyXG5cclxuLmFwcC1jaGVja2JveC13aXRoLXRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMTAlO1xyXG59XHJcblxyXG4uYXBwLWNoZWNrYm94LWxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uYXBwLWNoZWNrYm94LXdpdGgtdG9vbHRpcC1vbmNsaWNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hcHAtdG9vbHRpcC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2h0LWNvbG9yO1xyXG59XHJcbiIsIi5hcHAtY2hlY2tib3gtd2l0aC10b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTEwJTtcbn1cblxuLmFwcC1jaGVja2JveC1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uYXBwLWNoZWNrYm94LXdpdGgtdG9vbHRpcC1vbmNsaWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXBwLXRvb2x0aXAtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAzODBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwOTY1RTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjlGMDtcbn0iLCIkYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuJHRleHQtY29sb3I6ICMyRDI5MjY7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzAwOTY1RTtcclxuJHByaW1hcnktbGlnaHQtY29sb3I6ICNFRUY5RjA7XHJcbiRwcmltYXJ5LWNvbG9yLWhvdmVyOiAjMTQxNDE0O1xyXG5cclxuJHNlY29uZGFyeS1jb2xvcjogIzAwQkM4QztcclxuXHJcbiRjb250cmFzdC1jb2xvcjogI0Y1QTYyMztcclxuJGNvbnRyYXN0LWNvbG9yLXNlY29uZDogI0ZGQ0Y4MDtcclxuXHJcbiRzdWNjZXNzLWNvbG9yLXByaW1hcnk6ICMwRkI3Nzc7XHJcbiRzdWNjZXNzLWNvbG9yLXNlY29uZGFyeTogIzlFRERBNjtcclxuJGVycm9yLWNvbG9yLXByaW1hcnk6ICNENDAwMDA7XHJcbiRlcnJvci1jb2xvci1zZWNvbmRhcnk6ICNGQUU1RTU7XHJcblxyXG4kbm90aWNlLWNvbG9yLXByaW1hcnk6ICNFOEQ3MDA7XHJcbiRub3RpY2UtY29sb3Itc2Vjb25kYXJ5OiAjRkZGQUJDO1xyXG5cclxuJGxpbms6ICMwMDhGNTg7XHJcbiRsaW5rLWhvdmVyOiAjMDA4MjUxO1xyXG4kZ3JleS1jb2xvcjogI0VFRTtcclxuJGdyZXktY29sb3Itc2Vjb25kOiAjNzY3Njc2O1xyXG4kZ3JleS1pbnB1dC1jb2xvcjogI0U1RTVFNTtcclxuJGZ1bGwtYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: CheckboxWithTooltipOnClickComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWithTooltipOnClickComponent", function () { return CheckboxWithTooltipOnClickComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var CheckboxWithTooltipOnClickComponent = /** @class */ (function (_super) {
                __extends(CheckboxWithTooltipOnClickComponent, _super);
                function CheckboxWithTooltipOnClickComponent() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.showTooltip = false;
                    return _this;
                }
                CheckboxWithTooltipOnClickComponent.prototype.toggleTooltipOnClick = function () {
                    this.showTooltip = !this.showTooltip;
                };
                CheckboxWithTooltipOnClickComponent.prototype.hideTooltipOnClick = function () {
                    this.showTooltip = false;
                };
                return CheckboxWithTooltipOnClickComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));
            CheckboxWithTooltipOnClickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checkbox-with-tooltip-onclick',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkbox-with-tooltip-onclick.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkbox-with-tooltip-onclick.component.scss */ "./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.scss")).default]
                })
            ], CheckboxWithTooltipOnClickComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.scss": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.scss ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-checkbox-with-tooltip {\n  position: relative;\n  display: flex;\n  width: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL2NoZWNrYm94LXdpdGgtdG9vbHRpcC9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZC1tb2R1bGVcXHR5cGVzXFxjaGVja2JveC13aXRoLXRvb2x0aXBcXGNoZWNrYm94LXdpdGgtdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL2NoZWNrYm94LXdpdGgtdG9vbHRpcC9jaGVja2JveC13aXRoLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC1tb2R1bGUvdHlwZXMvY2hlY2tib3gtd2l0aC10b29sdGlwL2NoZWNrYm94LXdpdGgtdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY2hlY2tib3gtd2l0aC10b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTEwJTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIuYXBwLWNoZWNrYm94LXdpdGgtdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDExMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.ts ***!
          \******************************************************************************************************/
        /*! exports provided: CheckboxWithTooltipComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWithTooltipComponent", function () { return CheckboxWithTooltipComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var CheckboxWithTooltipComponent = /** @class */ (function (_super) {
                __extends(CheckboxWithTooltipComponent, _super);
                function CheckboxWithTooltipComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CheckboxWithTooltipComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));
            CheckboxWithTooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checkbox-with-tooltip',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkbox-with-tooltip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkbox-with-tooltip.component.scss */ "./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.scss")).default]
                })
            ], CheckboxWithTooltipComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/custom-input/custom-input.component.scss": 
        /*!**************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/custom-input/custom-input.component.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS90eXBlcy9jdXN0b20taW5wdXQvY3VzdG9tLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/custom-input/custom-input.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/custom-input/custom-input.component.ts ***!
          \************************************************************************************/
        /*! exports provided: CustomInputComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInputComponent", function () { return CustomInputComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var CustomInputComponent = /** @class */ (function (_super) {
                __extends(CustomInputComponent, _super);
                function CustomInputComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CustomInputComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));
            CustomInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-custom-input',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/custom-input/custom-input.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-input.component.scss */ "./src/app/modules/shared-module/types/custom-input/custom-input.component.scss")).default]
                })
            ], CustomInputComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/custom-radio/custom-radio.component.scss": 
        /*!**************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/custom-radio/custom-radio.component.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-radio-btn {\n  position: relative;\n  width: 100%;\n  display: flex;\n}\n.app-radio-btn input {\n  opacity: 0;\n}\n.app-radio-input {\n  z-index: 2;\n  width: 85%;\n  position: absolute;\n  height: 60px;\n  cursor: pointer;\n}\n.app-radio-lable {\n  width: 85%;\n  height: 60px;\n  text-align: center;\n  border: 1px solid #E5E5E5;\n  margin: 3px;\n  position: relative;\n  background-color: #FFF;\n}\n.app-radio-answer-lable {\n  background-color: #00965E;\n  color: #fff;\n}\n.app-label {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n}\n.app-radio-btn:hover .app-radio-lable {\n  background-color: #00965E;\n  color: #fff;\n}\ninput.ng-valid,\ninput.ng-valid + .app-radio-lable,\ninput.ng-valid ~ .app-tooltip-icon {\n  display: none;\n}\n.app-show,\n.app-show + .app-radio-lable,\n.app-show ~ .app-tooltip-icon {\n  display: block !important;\n}\n.app-show ~ .app-edit-icon {\n  display: none !important;\n}\ninput[type=radio]:checked + .app-radio-lable {\n  color: #fff;\n  background-color: #00965E;\n  display: block;\n}\ninput[type=radio]:checked ~ .app-edit-icon {\n  display: block;\n}\n.app-edit-icon {\n  display: none;\n  margin: 15px 5px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-size: cover;\n  cursor: pointer;\n}\n.app-radio-btn-with-tooltip {\n  display: flex;\n  justify-content: space-between;\n  width: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL2N1c3RvbS1yYWRpby9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZC1tb2R1bGVcXHR5cGVzXFxjdXN0b20tcmFkaW9cXGN1c3RvbS1yYWRpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL2N1c3RvbS1yYWRpby9jdXN0b20tcmFkaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS90eXBlcy9jdXN0b20tcmFkaW8vQzpcXFVzZXJzXFxhY2hyb3NjaWVsZXdza2FcXF9QUk9KRUtUWVxcQk5QX1BST0pFS1RZXFxIT1xcbW9ydGdhZ2Utb25saW5lLXNpbXVsYXRvci1jaGVja2xpc3Qtd2ViL3NyY1xcYXNzZXRzXFxjb25maWdcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUlFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNSRjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FEUUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRFFBO0VBQ0UseUJFL0JjO0VGZ0NkLFdBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUNMRjtBRFFBO0VBQ0UseUJFN0NjO0VGOENkLFdBQUE7QUNMRjtBRFFBOzs7RUFHRSxhQUFBO0FDTEY7QURRQTs7O0VBR0UseUJBQUE7QUNMRjtBRFFBO0VBQ0Usd0JBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLHlCRW5FYztFRm9FZCxjQUFBO0FDTEY7QURRQTtFQUNFLGNBQUE7QUNMRjtBRFVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ1BGO0FEVUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC1tb2R1bGUvdHlwZXMvY3VzdG9tLXJhZGlvL2N1c3RvbS1yYWRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9icmVha3BvaW50c1wiO1xyXG5cclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2JyZWFrcG9pbnRzXCI7XHJcblxyXG4uYXBwLXJhZGlvLWJ0biB7XHJcbiAgaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcHAtcmFkaW8taW5wdXQge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFwcC1yYWRpby1sYWJsZSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LWlucHV0LWNvbG9yO1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4uYXBwLXJhZGlvLWFuc3dlci1sYWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hcHAtbGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5hcHAtcmFkaW8tYnRuOmhvdmVyIC5hcHAtcmFkaW8tbGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dC5uZy12YWxpZCxcclxuaW5wdXQubmctdmFsaWQgKyAuYXBwLXJhZGlvLWxhYmxlLFxyXG5pbnB1dC5uZy12YWxpZCB+IC5hcHAtdG9vbHRpcC1pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYXBwLXNob3csXHJcbi5hcHAtc2hvdyArIC5hcHAtcmFkaW8tbGFibGUsXHJcbi5hcHAtc2hvdyB+IC5hcHAtdG9vbHRpcC1pY29uIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXBwLXNob3cgfiAuYXBwLWVkaXQtaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5hcHAtcmFkaW8tbGFibGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IC5hcHAtZWRpdC1pY29uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcblxyXG4uYXBwLWVkaXQtaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW46IDE1cHggNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcHAtcmFkaW8tYnRuLXdpdGgtdG9vbHRpcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDExMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbWQpIHt9XHJcblxyXG4iLCIuYXBwLXJhZGlvLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXBwLXJhZGlvLWJ0biBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hcHAtcmFkaW8taW5wdXQge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogODUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLXJhZGlvLWxhYmxlIHtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gIG1hcmdpbjogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi5hcHAtcmFkaW8tYW5zd2VyLWxhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY1RTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hcHAtbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5hcHAtcmFkaW8tYnRuOmhvdmVyIC5hcHAtcmFkaW8tbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NjVFO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQubmctdmFsaWQsXG5pbnB1dC5uZy12YWxpZCArIC5hcHAtcmFkaW8tbGFibGUsXG5pbnB1dC5uZy12YWxpZCB+IC5hcHAtdG9vbHRpcC1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFwcC1zaG93LFxuLmFwcC1zaG93ICsgLmFwcC1yYWRpby1sYWJsZSxcbi5hcHAtc2hvdyB+IC5hcHAtdG9vbHRpcC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmFwcC1zaG93IH4gLmFwcC1lZGl0LWljb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuYXBwLXJhZGlvLWxhYmxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2NUU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gLmFwcC1lZGl0LWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFwcC1lZGl0LWljb24ge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDE1cHggNXB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFwcC1yYWRpby1idG4td2l0aC10b29sdGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTEwJTtcbn0iLCIkYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuJHRleHQtY29sb3I6ICMyRDI5MjY7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzAwOTY1RTtcclxuJHByaW1hcnktbGlnaHQtY29sb3I6ICNFRUY5RjA7XHJcbiRwcmltYXJ5LWNvbG9yLWhvdmVyOiAjMTQxNDE0O1xyXG5cclxuJHNlY29uZGFyeS1jb2xvcjogIzAwQkM4QztcclxuXHJcbiRjb250cmFzdC1jb2xvcjogI0Y1QTYyMztcclxuJGNvbnRyYXN0LWNvbG9yLXNlY29uZDogI0ZGQ0Y4MDtcclxuXHJcbiRzdWNjZXNzLWNvbG9yLXByaW1hcnk6ICMwRkI3Nzc7XHJcbiRzdWNjZXNzLWNvbG9yLXNlY29uZGFyeTogIzlFRERBNjtcclxuJGVycm9yLWNvbG9yLXByaW1hcnk6ICNENDAwMDA7XHJcbiRlcnJvci1jb2xvci1zZWNvbmRhcnk6ICNGQUU1RTU7XHJcblxyXG4kbm90aWNlLWNvbG9yLXByaW1hcnk6ICNFOEQ3MDA7XHJcbiRub3RpY2UtY29sb3Itc2Vjb25kYXJ5OiAjRkZGQUJDO1xyXG5cclxuJGxpbms6ICMwMDhGNTg7XHJcbiRsaW5rLWhvdmVyOiAjMDA4MjUxO1xyXG4kZ3JleS1jb2xvcjogI0VFRTtcclxuJGdyZXktY29sb3Itc2Vjb25kOiAjNzY3Njc2O1xyXG4kZ3JleS1pbnB1dC1jb2xvcjogI0U1RTVFNTtcclxuJGZ1bGwtYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/custom-radio/custom-radio.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/custom-radio/custom-radio.component.ts ***!
          \************************************************************************************/
        /*! exports provided: CustomRadioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRadioComponent", function () { return CustomRadioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var CustomRadioComponent = /** @class */ (function (_super) {
                __extends(CustomRadioComponent, _super);
                function CustomRadioComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CustomRadioComponent.prototype.optionSelected = function (scrollBy) {
                    window.scrollBy(0, scrollBy);
                    this.showOptions = false;
                };
                CustomRadioComponent.prototype.showOptionsToSelect = function () {
                    this.showOptions = true;
                };
                return CustomRadioComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));
            CustomRadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-custom-radio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-radio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/custom-radio/custom-radio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-radio.component.scss */ "./src/app/modules/shared-module/types/custom-radio/custom-radio.component.scss")).default]
                })
            ], CustomRadioComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/digit-input/digit-input.component.scss": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/digit-input/digit-input.component.scss ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS90eXBlcy9kaWdpdC1pbnB1dC9kaWdpdC1pbnB1dC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/digit-input/digit-input.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/digit-input/digit-input.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: DigitInputComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitInputComponent", function () { return DigitInputComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var DigitInputComponent = /** @class */ (function (_super) {
                __extends(DigitInputComponent, _super);
                function DigitInputComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return DigitInputComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));
            DigitInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-digit-input',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./digit-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/digit-input/digit-input.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./digit-input.component.scss */ "./src/app/modules/shared-module/types/digit-input/digit-input.component.scss")).default]
                })
            ], DigitInputComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/index.ts": 
        /*!******************************************************!*\
          !*** ./src/app/modules/shared-module/types/index.ts ***!
          \******************************************************/
        /*! exports provided: RepeatSectionComponent, CustomRadioComponent, CustomInputComponent, DigitInputComponent, CheckboxWithTooltipComponent, CheckboxWithTooltipOnClickComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _repeat_section_repeat_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeat-section/repeat-section.component */ "./src/app/modules/shared-module/types/repeat-section/repeat-section.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatSectionComponent", function () { return _repeat_section_repeat_section_component__WEBPACK_IMPORTED_MODULE_1__["RepeatSectionComponent"]; });
            /* harmony import */ var _custom_radio_custom_radio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-radio/custom-radio.component */ "./src/app/modules/shared-module/types/custom-radio/custom-radio.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomRadioComponent", function () { return _custom_radio_custom_radio_component__WEBPACK_IMPORTED_MODULE_2__["CustomRadioComponent"]; });
            /* harmony import */ var _custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-input/custom-input.component */ "./src/app/modules/shared-module/types/custom-input/custom-input.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomInputComponent", function () { return _custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_3__["CustomInputComponent"]; });
            /* harmony import */ var _digit_input_digit_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./digit-input/digit-input.component */ "./src/app/modules/shared-module/types/digit-input/digit-input.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DigitInputComponent", function () { return _digit_input_digit_input_component__WEBPACK_IMPORTED_MODULE_4__["DigitInputComponent"]; });
            /* harmony import */ var _checkbox_with_tooltip_checkbox_with_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-with-tooltip/checkbox-with-tooltip.component */ "./src/app/modules/shared-module/types/checkbox-with-tooltip/checkbox-with-tooltip.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWithTooltipComponent", function () { return _checkbox_with_tooltip_checkbox_with_tooltip_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxWithTooltipComponent"]; });
            /* harmony import */ var _checkbox_with_tooltip_onclick_checkbox_with_tooltip_onclick_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component */ "./src/app/modules/shared-module/types/checkbox-with-tooltip-onclick/checkbox-with-tooltip-onclick.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWithTooltipOnClickComponent", function () { return _checkbox_with_tooltip_onclick_checkbox_with_tooltip_onclick_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWithTooltipOnClickComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/repeat-section/repeat-section.component.scss": 
        /*!******************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/repeat-section/repeat-section.component.scss ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-section {\n  margin: 0 auto;\n}\n\n.app-accordion-header {\n  display: flex;\n  width: 100%;\n}\n\n.app-header-title {\n  width: 90%;\n  padding: 0 5px;\n  text-align: left;\n  font-weight: 600;\n}\n\n.app-icon {\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 15px;\n  height: 15px;\n}\n\n.app-repeat-section-btn {\n  text-align: center;\n}\n\n@media (min-width: 768px) {\n  .app-section {\n    width: 70%;\n    padding: 20px 0;\n  }\n\n  .app-icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .app-section {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL3JlcGVhdC1zZWN0aW9uL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkLW1vZHVsZVxcdHlwZXNcXHJlcGVhdC1zZWN0aW9uXFxyZXBlYXQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3R5cGVzL3JlcGVhdC1zZWN0aW9uL3JlcGVhdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtBQ0ZGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSEY7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRFVBO0VBRUU7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQ1JGOztFRFdBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0U7SUFDRSxVQUFBO0VDVEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS90eXBlcy9yZXBlYXQtc2VjdGlvbi9yZXBlYXQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9icmVha3BvaW50c1wiO1xyXG5cclxuLmFwcC1zZWN0aW9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLy8gYWNjb3JkaW9uIFNUQVJUc1xyXG4uYXBwLWFjY29yZGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyLXRpdGxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmFwcC1pY29uIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmFwcC1yZXBlYXQtc2VjdGlvbi1idG4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gYWNjb3JkaW9uIEVORHNcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbWQpIHtcclxuXHJcbiAgLmFwcC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICAuYXBwLWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJGxnKSB7XHJcbiAgLmFwcC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHhsKSB7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkeHhsKSB7XHJcbn1cclxuIiwiLmFwcC1zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hcHAtYWNjb3JkaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLWhlYWRlci10aXRsZSB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYXBwLWljb24ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5hcHAtcmVwZWF0LXNlY3Rpb24tYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFwcC1zZWN0aW9uIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuXG4gIC5hcHAtaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5hcHAtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/types/repeat-section/repeat-section.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/shared-module/types/repeat-section/repeat-section.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: RepeatSectionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatSectionComponent", function () { return RepeatSectionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var RepeatSectionComponent = /** @class */ (function (_super) {
                __extends(RepeatSectionComponent, _super);
                function RepeatSectionComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return RepeatSectionComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldArrayType"]));
            RepeatSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-repeat-section',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repeat-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/types/repeat-section/repeat-section.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repeat-section.component.scss */ "./src/app/modules/shared-module/types/repeat-section/repeat-section.component.scss")).default]
                })
            ], RepeatSectionComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.scss": 
        /*!******************************************************************************************!*\
          !*** ./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.scss ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-input-tooltip {\n  display: flex;\n}\n\n.app-form-input {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .app-form-row {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .app-form-label,\n.app-form-input {\n    margin-right: 10px;\n  }\n\n  .app-form-input {\n    margin-right: 10px;\n  }\n\n  .app-form-input {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3dyYXBwZXJzL2hvcml6b250YWxXcmFwcGVyL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkLW1vZHVsZVxcd3JhcHBlcnNcXGhvcml6b250YWxXcmFwcGVyXFxob3Jpem9udGFsLXdyYXBwZXIuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3dyYXBwZXJzL2hvcml6b250YWxXcmFwcGVyL2hvcml6b250YWwtd3JhcHBlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQ0RGOztFRElBOztJQUVFLGtCQUFBO0VDREY7O0VESUE7SUFDRSxrQkFBQTtFQ0RGOztFRElBO0lBQ0UsWUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC1tb2R1bGUvd3JhcHBlcnMvaG9yaXpvbnRhbFdyYXBwZXIvaG9yaXpvbnRhbC13cmFwcGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9icmVha3BvaW50c1wiO1xyXG5cclxuLmFwcC1pbnB1dC10b29sdGlwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXBwLWZvcm0taW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJG1kKSB7XHJcbiAgLmFwcC1mb3JtLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1mb3JtLWxhYmVsLFxyXG4gIC5hcHAtZm9ybS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYXBwLWZvcm0taW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFwcC1mb3JtLWlucHV0IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5hcHAtaW5wdXQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hcHAtZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFwcC1mb3JtLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuYXBwLWZvcm0tbGFiZWwsXG4uYXBwLWZvcm0taW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5hcHAtZm9ybS1pbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmFwcC1mb3JtLWlucHV0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.ts ***!
          \****************************************************************************************/
        /*! exports provided: HorizontalWrapperComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalWrapperComponent", function () { return HorizontalWrapperComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var HorizontalWrapperComponent = /** @class */ (function (_super) {
                __extends(HorizontalWrapperComponent, _super);
                function HorizontalWrapperComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return HorizontalWrapperComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));
            HorizontalWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-field-horizontal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./horizontal-wrapper.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./horizontal-wrapper.scss */ "./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.scss")).default]
                })
            ], HorizontalWrapperComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/wrappers/index.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/modules/shared-module/wrappers/index.ts ***!
          \*********************************************************/
        /*! exports provided: HorizontalWrapperComponent, VerticalWrapperComponent, SectionInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _horizontalWrapper_horizontal_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontalWrapper/horizontal-wrapper */ "./src/app/modules/shared-module/wrappers/horizontalWrapper/horizontal-wrapper.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalWrapperComponent", function () { return _horizontalWrapper_horizontal_wrapper__WEBPACK_IMPORTED_MODULE_1__["HorizontalWrapperComponent"]; });
            /* harmony import */ var _verticalWrapper_vertical_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verticalWrapper/vertical-wrapper */ "./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalWrapperComponent", function () { return _verticalWrapper_vertical_wrapper__WEBPACK_IMPORTED_MODULE_2__["VerticalWrapperComponent"]; });
            /* harmony import */ var _section_info_section_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-info/section-info.component */ "./src/app/modules/shared-module/wrappers/section-info/section-info.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionInfoComponent", function () { return _section_info_section_info_component__WEBPACK_IMPORTED_MODULE_3__["SectionInfoComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/wrappers/section-info/section-info.component.scss": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/shared-module/wrappers/section-info/section-info.component.scss ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS93cmFwcGVycy9zZWN0aW9uLWluZm8vc2VjdGlvbi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/wrappers/section-info/section-info.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/modules/shared-module/wrappers/section-info/section-info.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: SectionInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionInfoComponent", function () { return SectionInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var SectionInfoComponent = /** @class */ (function (_super) {
                __extends(SectionInfoComponent, _super);
                function SectionInfoComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return SectionInfoComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));
            SectionInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-section-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/section-info/section-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-info.component.scss */ "./src/app/modules/shared-module/wrappers/section-info/section-info.component.scss")).default]
                })
            ], SectionInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.scss": 
        /*!**************************************************************************************!*\
          !*** ./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-lable-tooltip {\n  display: flex;\n}\n\n.app-form-input {\n  width: 100%;\n}\n\n@media (min-width: 1024px) {\n  .app-vertical-wrapper {\n    display: flex;\n  }\n  .app-vertical-wrapper .app-lable-tooltip {\n    width: 30%;\n  }\n  .app-vertical-wrapper .app-field {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3dyYXBwZXJzL3ZlcnRpY2FsV3JhcHBlci9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZC1tb2R1bGVcXHdyYXBwZXJzXFx2ZXJ0aWNhbFdyYXBwZXJcXHZlcnRpY2FsLXdyYXBwZXIuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQtbW9kdWxlL3dyYXBwZXJzL3ZlcnRpY2FsV3JhcHBlci92ZXJ0aWNhbC13cmFwcGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLGFBQUE7RUNERjtFREVFO0lBQ0UsVUFBQTtFQ0FKO0VERUU7SUFDRSxVQUFBO0VDQUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkLW1vZHVsZS93cmFwcGVycy92ZXJ0aWNhbFdyYXBwZXIvdmVydGljYWwtd3JhcHBlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9icmVha3BvaW50cyc7XHJcblxyXG4uYXBwLWxhYmxlLXRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGcpIHtcclxuICAuYXBwLXZlcnRpY2FsLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmFwcC1sYWJsZS10b29sdGlwIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICAgIC5hcHAtZmllbGQge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXBwLWxhYmxlLXRvb2x0aXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXBwLWZvcm0taW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuYXBwLXZlcnRpY2FsLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmFwcC12ZXJ0aWNhbC13cmFwcGVyIC5hcHAtbGFibGUtdG9vbHRpcCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICAuYXBwLXZlcnRpY2FsLXdyYXBwZXIgLmFwcC1maWVsZCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.ts ***!
          \************************************************************************************/
        /*! exports provided: VerticalWrapperComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalWrapperComponent", function () { return VerticalWrapperComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
            var VerticalWrapperComponent = /** @class */ (function (_super) {
                __extends(VerticalWrapperComponent, _super);
                function VerticalWrapperComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return VerticalWrapperComponent;
            }(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));
            VerticalWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-field-vertical',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vertical-wrapper.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vertical-wrapper.scss */ "./src/app/modules/shared-module/wrappers/verticalWrapper/vertical-wrapper.scss")).default]
                })
            ], VerticalWrapperComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/index.ts": 
        /*!********************************************************!*\
          !*** ./src/app/modules/simulation/components/index.ts ***!
          \********************************************************/
        /*! exports provided: SimulationBaseComponent, SimulationHomeComponent, SimulationPathComponent, SimulationResultsComponent, SimulationSendComponent, SimulationSentComponent, SimulationFormModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _app_modules_simulation_components_simulation_base_simulation_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-base/simulation-base.component */ "./src/app/modules/simulation/components/simulation-base/simulation-base.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationBaseComponent", function () { return _app_modules_simulation_components_simulation_base_simulation_base_component__WEBPACK_IMPORTED_MODULE_1__["SimulationBaseComponent"]; });
            /* harmony import */ var _app_modules_simulation_components_simulation_home_simulation_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-home/simulation-home.component */ "./src/app/modules/simulation/components/simulation-home/simulation-home.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationHomeComponent", function () { return _app_modules_simulation_components_simulation_home_simulation_home_component__WEBPACK_IMPORTED_MODULE_2__["SimulationHomeComponent"]; });
            /* harmony import */ var _app_modules_simulation_components_simulation_path_simulation_path_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-path/simulation-path.component */ "./src/app/modules/simulation/components/simulation-path/simulation-path.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationPathComponent", function () { return _app_modules_simulation_components_simulation_path_simulation_path_component__WEBPACK_IMPORTED_MODULE_3__["SimulationPathComponent"]; });
            /* harmony import */ var _app_modules_simulation_components_simulation_results_simulation_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-results/simulation-results.component */ "./src/app/modules/simulation/components/simulation-results/simulation-results.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationResultsComponent", function () { return _app_modules_simulation_components_simulation_results_simulation_results_component__WEBPACK_IMPORTED_MODULE_4__["SimulationResultsComponent"]; });
            /* harmony import */ var _app_modules_simulation_components_simulation_send_simulation_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-send/simulation-send.component */ "./src/app/modules/simulation/components/simulation-send/simulation-send.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationSendComponent", function () { return _app_modules_simulation_components_simulation_send_simulation_send_component__WEBPACK_IMPORTED_MODULE_5__["SimulationSendComponent"]; });
            /* harmony import */ var _app_modules_simulation_components_simulation_sent_simulation_sent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-sent/simulation-sent.component */ "./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationSentComponent", function () { return _app_modules_simulation_components_simulation_sent_simulation_sent_component__WEBPACK_IMPORTED_MODULE_6__["SimulationSentComponent"]; });
            /* harmony import */ var _app_modules_simulation_components_simulation_form_modal_simulation_form_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component */ "./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimulationFormModalComponent", function () { return _app_modules_simulation_components_simulation_form_modal_simulation_form_modal_component__WEBPACK_IMPORTED_MODULE_7__["SimulationFormModalComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-base/simulation-base.component.scss": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-base/simulation-base.component.scss ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2ltdWxhdGlvbi9jb21wb25lbnRzL3NpbXVsYXRpb24tYmFzZS9zaW11bGF0aW9uLWJhc2UuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-base/simulation-base.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-base/simulation-base.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: SimulationBaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationBaseComponent", function () { return SimulationBaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/inter-component-communication.service */ "./src/app/modules/simulation/service/inter-component-communication.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            var SimulationBaseComponent = /** @class */ (function () {
                function SimulationBaseComponent(router, eltRef, interComponentCommunicationService, userService) {
                    this.router = router;
                    this.eltRef = eltRef;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.userService = userService;
                }
                SimulationBaseComponent.prototype.ngOnInit = function () {
                    sessionStorage.clear();
                    this.router.navigate([{ outlets: { simulationOutlet: ['simulation'] } }], { skipLocationChange: true });
                    var showChecklistBtn = this.eltRef.nativeElement.hasAttribute('checklistAnchor');
                    if (showChecklistBtn) {
                        var checklistAnchor = this.eltRef.nativeElement.getAttribute('checklistAnchor');
                        this.interComponentCommunicationService.showChecklistBtn(checklistAnchor);
                    }
                    var hasViewportScrollAnchor = this.eltRef.nativeElement.hasAttribute('viewportScrollAnchor');
                    if (hasViewportScrollAnchor) {
                        var viewportScrollAnchor = this.eltRef.nativeElement.getAttribute('viewportScrollAnchor');
                        this.interComponentCommunicationService.setViewportScrollAnchor(viewportScrollAnchor);
                    }
                };
                return SimulationBaseComponent;
            }());
            SimulationBaseComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_3__["InterComponentCommunicationService"] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] }
            ]; };
            SimulationBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-base',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-base/simulation-base.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-base.component.scss */ "./src/app/modules/simulation/components/simulation-base/simulation-base.component.scss")).default]
                })
            ], SimulationBaseComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.scss": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.scss ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-stepper {\n  display: flex;\n}\n\n.app-stepper-item-active {\n  background-color: #00965E;\n  color: #fff;\n}\n\n.app-stepper-item-after-active {\n  background-color: #008251;\n  color: #fff;\n}\n\n.app-stepper-header {\n  display: flex;\n}\n\n.app-modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app-slider {\n  display: flex;\n}\n\n.app-arrow {\n  border: solid #00965E;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n\n.app-left-arrow {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n\n.app-right-arrow {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.app-stepper {\n  display: flex;\n  justify-content: space-evenly;\n  margin-bottom: 10px;\n}\n\n.app-stepper-item-circle {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid #00965E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1mb3JtLW1vZGFsL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFzc2V0c1xcY29uZmlnXFxjb21wb25lbnRzXFxfYXBwU3RlcHBlci5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLWZvcm0tbW9kYWwvc2ltdWxhdGlvbi1mb3JtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLWZvcm0tbW9kYWwvQzpcXFVzZXJzXFxhY2hyb3NjaWVsZXdza2FcXF9QUk9KRUtUWVxcQk5QX1BST0pFS1RZXFxIT1xcbW9ydGdhZ2Utb25saW5lLXNpbXVsYXRvci1jaGVja2xpc3Qtd2ViL3NyY1xcYXNzZXRzXFxjb25maWdcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1mb3JtLW1vZGFsL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFwcFxcbW9kdWxlc1xcc2ltdWxhdGlvblxcY29tcG9uZW50c1xcc2ltdWxhdGlvbi1mb3JtLW1vZGFsXFxzaW11bGF0aW9uLWZvcm0tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRSx5QkVKYztFRktkLFdBQUE7QUNERjs7QURJQTtFQUNFLHlCRVNXO0VGUlgsV0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBRWJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FGZ0JGOztBRWJBO0VBQ0UsYUFBQTtBRmdCRjs7QUViQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUZnQkY7O0FFYkE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FGZ0JGOztBRWJBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBRmdCRjs7QUViQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FGZ0JGOztBRWJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FGZ0JGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1mb3JtLW1vZGFsL3NpbXVsYXRpb24tZm9ybS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9jb2xvcnNcIjtcclxuXHJcbi5hcHAtc3RlcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFwcC1zdGVwcGVyLWl0ZW0tYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFwcC1zdGVwcGVyLWl0ZW0tYWZ0ZXItYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluay1ob3ZlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFwcC1zdGVwcGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuIiwiLmFwcC1zdGVwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFwcC1zdGVwcGVyLWl0ZW0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY1RTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hcHAtc3RlcHBlci1pdGVtLWFmdGVyLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgyNTE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYXBwLXN0ZXBwZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFwcC1tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hcHAtc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFwcC1hcnJvdyB7XG4gIGJvcmRlcjogc29saWQgIzAwOTY1RTtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFwcC1sZWZ0LWFycm93IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uYXBwLXJpZ2h0LWFycm93IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYXBwLXN0ZXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFwcC1zdGVwcGVyLWl0ZW0tY2lyY2xlIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5NjVFO1xufSIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4kdGV4dC1jb2xvcjogIzJEMjkyNjtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA5NjVFO1xyXG4kcHJpbWFyeS1saWdodC1jb2xvcjogI0VFRjlGMDtcclxuJHByaW1hcnktY29sb3ItaG92ZXI6ICMxNDE0MTQ7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCQzhDO1xyXG5cclxuJGNvbnRyYXN0LWNvbG9yOiAjRjVBNjIzO1xyXG4kY29udHJhc3QtY29sb3Itc2Vjb25kOiAjRkZDRjgwO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3ItcHJpbWFyeTogIzBGQjc3NztcclxuJHN1Y2Nlc3MtY29sb3Itc2Vjb25kYXJ5OiAjOUVEREE2O1xyXG4kZXJyb3ItY29sb3ItcHJpbWFyeTogI0Q0MDAwMDtcclxuJGVycm9yLWNvbG9yLXNlY29uZGFyeTogI0ZBRTVFNTtcclxuXHJcbiRub3RpY2UtY29sb3ItcHJpbWFyeTogI0U4RDcwMDtcclxuJG5vdGljZS1jb2xvci1zZWNvbmRhcnk6ICNGRkZBQkM7XHJcblxyXG4kbGluazogIzAwOEY1ODtcclxuJGxpbmstaG92ZXI6ICMwMDgyNTE7XHJcbiRncmV5LWNvbG9yOiAjRUVFO1xyXG4kZ3JleS1jb2xvci1zZWNvbmQ6ICM3Njc2NzY7XHJcbiRncmV5LWlucHV0LWNvbG9yOiAjRTVFNUU1O1xyXG4kZnVsbC1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvY29sb3JzXCI7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvY29tcG9uZW50cy9hcHBTdGVwcGVyJztcclxuXHJcbi5hcHAtbW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmFwcC1zbGlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hcHAtYXJyb3cge1xyXG4gIGJvcmRlcjogc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcHAtbGVmdC1hcnJvdyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbn1cclxuXHJcbi5hcHAtcmlnaHQtYXJyb3cge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4uYXBwLXN0ZXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmFwcC1zdGVwcGVyLWl0ZW0tY2lyY2xlIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.ts ***!
          \********************************************************************************************************/
        /*! exports provided: SimulationFormModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationFormModalComponent", function () { return SimulationFormModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/simulation/service/simulation.service */ "./src/app/modules/simulation/service/simulation.service.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            var SimulationFormModalComponent = /** @class */ (function () {
                function SimulationFormModalComponent(bsModalRef, simulationService) {
                    this.bsModalRef = bsModalRef;
                    this.simulationService = simulationService;
                    this.model = {};
                    this.mobileFormSteps = [];
                    this.activeStep = 0;
                }
                SimulationFormModalComponent.prototype.ngOnInit = function () {
                };
                SimulationFormModalComponent.prototype.prevStep = function (step) {
                    this.activeStep = step - 1;
                    if (this.activeStep < 0) {
                        this.activeStep = this.mobileFormSteps.length - 1;
                    }
                };
                SimulationFormModalComponent.prototype.nextStep = function (step) {
                    this.activeStep = step + 1;
                    if (this.mobileFormSteps.length - 1 < this.activeStep) {
                        this.activeStep = 0;
                    }
                };
                SimulationFormModalComponent.prototype.setStep = function (step) {
                    this.activeStep = step;
                };
                SimulationFormModalComponent.prototype.submit = function () {
                    this.recalculate();
                    this.bsModalRef.hide();
                };
                SimulationFormModalComponent.prototype.recalculate = function () {
                    var _this = this;
                    this.simulationService.getSimulationResults$(this.model).subscribe(function (result) {
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"].hide();
                        _this.simulationService.saveResults(result);
                    });
                };
                return SimulationFormModalComponent;
            }());
            SimulationFormModalComponent.ctorParameters = function () { return [
                { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
                { type: _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_3__["SimulationService"] }
            ]; };
            SimulationFormModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-form-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-form-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-form-modal.component.scss */ "./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.scss")).default]
                })
            ], SimulationFormModalComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-home/simulation-home.component.scss": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-home/simulation-home.component.scss ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-info-box-container {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 1024px) {\n  .app-info-box-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1ob21lL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFwcFxcbW9kdWxlc1xcc2ltdWxhdGlvblxcY29tcG9uZW50c1xcc2ltdWxhdGlvbi1ob21lXFxzaW11bGF0aW9uLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2ltdWxhdGlvbi9jb21wb25lbnRzL3NpbXVsYXRpb24taG9tZS9zaW11bGF0aW9uLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURVQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUNQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1ob21lL3NpbXVsYXRpb24taG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy9icmVha3BvaW50c1wiO1xyXG5cclxuLmFwcC1pbmZvLWJveC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbWQpIHtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGcpIHtcclxuICAuYXBwLWluZm8tYm94LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICR4bCkge1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHh4bCkge1xyXG59XHJcbiIsIi5hcHAtaW5mby1ib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuYXBwLWluZm8tYm94LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-home/simulation-home.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-home/simulation-home.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: SimulationHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationHomeComponent", function () { return SimulationHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/inter-component-communication.service */ "./src/app/modules/simulation/service/inter-component-communication.service.ts");
            var SimulationHomeComponent = /** @class */ (function () {
                function SimulationHomeComponent(translate, translationLoader, interComponentCommunicationService) {
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                }
                SimulationHomeComponent.prototype.ngOnDestroy = function () {
                    this.interComponentCommunicationService.setShouldScrollToTopPageOnHomePage(true);
                };
                return SimulationHomeComponent;
            }());
            SimulationHomeComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_4__["InterComponentCommunicationService"] }
            ]; };
            SimulationHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-home/simulation-home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-home.component.scss */ "./src/app/modules/simulation/components/simulation-home/simulation-home.component.scss")).default]
                })
            ], SimulationHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-path/simulation-path.component.scss": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-path/simulation-path.component.scss ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-stepper {\n  display: flex;\n}\n\n.app-stepper-item-active {\n  background-color: #00965E;\n  color: #fff;\n}\n\n.app-stepper-item-after-active {\n  background-color: #008251;\n  color: #fff;\n}\n\n.app-stepper-header {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1wYXRoL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFzc2V0c1xcY29uZmlnXFxjb21wb25lbnRzXFxfYXBwU3RlcHBlci5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLXBhdGgvc2ltdWxhdGlvbi1wYXRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLXBhdGgvQzpcXFVzZXJzXFxhY2hyb3NjaWVsZXdza2FcXF9QUk9KRUtUWVxcQk5QX1BST0pFS1RZXFxIT1xcbW9ydGdhZ2Utb25saW5lLXNpbXVsYXRvci1jaGVja2xpc3Qtd2ViL3NyY1xcYXNzZXRzXFxjb25maWdcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLHlCRUpjO0VGS2QsV0FBQTtBQ0RGOztBRElBO0VBQ0UseUJFU1c7RUZSWCxXQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLXBhdGgvc2ltdWxhdGlvbi1wYXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2NvbG9yc1wiO1xyXG5cclxuLmFwcC1zdGVwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXBwLXN0ZXBwZXItaXRlbS1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYXBwLXN0ZXBwZXItaXRlbS1hZnRlci1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaW5rLWhvdmVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYXBwLXN0ZXBwZXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4iLCIuYXBwLXN0ZXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXBwLXN0ZXBwZXItaXRlbS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NjVFO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFwcC1zdGVwcGVyLWl0ZW0tYWZ0ZXItYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODI1MTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hcHAtc3RlcHBlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufSIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4kdGV4dC1jb2xvcjogIzJEMjkyNjtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA5NjVFO1xyXG4kcHJpbWFyeS1saWdodC1jb2xvcjogI0VFRjlGMDtcclxuJHByaW1hcnktY29sb3ItaG92ZXI6ICMxNDE0MTQ7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCQzhDO1xyXG5cclxuJGNvbnRyYXN0LWNvbG9yOiAjRjVBNjIzO1xyXG4kY29udHJhc3QtY29sb3Itc2Vjb25kOiAjRkZDRjgwO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3ItcHJpbWFyeTogIzBGQjc3NztcclxuJHN1Y2Nlc3MtY29sb3Itc2Vjb25kYXJ5OiAjOUVEREE2O1xyXG4kZXJyb3ItY29sb3ItcHJpbWFyeTogI0Q0MDAwMDtcclxuJGVycm9yLWNvbG9yLXNlY29uZGFyeTogI0ZBRTVFNTtcclxuXHJcbiRub3RpY2UtY29sb3ItcHJpbWFyeTogI0U4RDcwMDtcclxuJG5vdGljZS1jb2xvci1zZWNvbmRhcnk6ICNGRkZBQkM7XHJcblxyXG4kbGluazogIzAwOEY1ODtcclxuJGxpbmstaG92ZXI6ICMwMDgyNTE7XHJcbiRncmV5LWNvbG9yOiAjRUVFO1xyXG4kZ3JleS1jb2xvci1zZWNvbmQ6ICM3Njc2NzY7XHJcbiRncmV5LWlucHV0LWNvbG9yOiAjRTVFNUU1O1xyXG4kZnVsbC1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-path/simulation-path.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-path/simulation-path.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: SimulationPathComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationPathComponent", function () { return SimulationPathComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_modules_simulation_model_Simulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/simulation/model/Simulation */ "./src/app/modules/simulation/model/Simulation.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/simulation/service/simulation.service */ "./src/app/modules/simulation/service/simulation.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/inter-component-communication.service */ "./src/app/modules/simulation/service/inter-component-communication.service.ts");
            /* harmony import */ var _app_modules_shared_module_pipes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/shared-module/pipes */ "./src/app/modules/shared-module/pipes/index.ts");
            var SimulationPathComponent = /** @class */ (function () {
                function SimulationPathComponent(translate, translationLoader, validationsLoader, route, simulationService, viewportScroller, interComponentCommunicationService, spacePipe) {
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.route = route;
                    this.simulationService = simulationService;
                    this.viewportScroller = viewportScroller;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.spacePipe = spacePipe;
                    this.simulation = new _app_modules_simulation_model_Simulation__WEBPACK_IMPORTED_MODULE_4__["Simulation"](this.translate, this.spacePipe);
                    this.model = {};
                    this.steps = [];
                    this.formSteps = [];
                    this.isResultView = false;
                    this.methodUnavailable = false;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                }
                SimulationPathComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                    this.routeSubscription = this.route.url.subscribe(function (path) {
                        var simulationPath = path[1].path;
                        var stepOneFields;
                        switch (simulationPath) {
                            case 'installment':
                                stepOneFields = _this.simulation.formFieldInstallmentStepOne();
                                _this.onInit(stepOneFields);
                                break;
                            case 'loan-amount':
                                stepOneFields = _this.simulation.formFieldLoanStepOne();
                                _this.onInit(stepOneFields);
                                break;
                            default:
                                console.log('Niepoprawna ścieżka');
                        }
                    });
                };
                SimulationPathComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopPagePosition();
                };
                SimulationPathComponent.prototype.ngOnDestroy = function () {
                    this.routeSubscription.unsubscribe();
                };
                SimulationPathComponent.prototype.onInit = function (stepOneFields) {
                    this.steps = [
                        {
                            label: this.translate.instant('Simulator.step1.label'),
                            headerText: this.translate.instant('Simulator.step1.headerText'),
                        },
                        {
                            label: this.translate.instant('Simulator.step2.label'),
                            headerText: this.translate.instant('Simulator.step2.headerText'),
                        },
                        {
                            label: this.translate.instant('Simulator.step3.label'),
                            headerText: this.translate.instant('Simulator.step3.headerText'),
                        }
                    ];
                    this.activeStep = this.interComponentCommunicationService.simulationLastActiveStep;
                    if (this.activeStep === (this.steps.length - 1)) {
                        this.isResultView = true;
                    }
                    this.formSteps = [
                        stepOneFields,
                        this.simulation.formFieldStepTwo()
                    ];
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](this.formSteps.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({}); }));
                };
                SimulationPathComponent.prototype.prevStep = function (step) {
                    this.activeStep = step - 1;
                    this.returnToTopPagePosition();
                };
                SimulationPathComponent.prototype.nextStep = function (step) {
                    this.activeStep = step + 1;
                    this.returnToTopPagePosition();
                };
                SimulationPathComponent.prototype.submit = function (step) {
                    var _this = this;
                    if (this.form.valid) {
                        this.simulationSubscribtion = this.simulationService.getSimulationResults$(this.model).subscribe(function (result) {
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"].hide();
                            _this.methodUnavailable = false;
                            _this.simulationService.saveResults(result);
                            _this.activeStep = step + 1;
                            _this.isResultView = true;
                            _this.interComponentCommunicationService.simulationLastActiveStep = _this.activeStep;
                        }, function (error) {
                            console.log(error);
                            _this.methodUnavailable = true;
                            _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"].hide();
                        });
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"].show().subscribe(function () {
                            _this.closeSimulationSubscriptionIfTooLongNotRespond();
                        });
                    }
                };
                SimulationPathComponent.prototype.closeSimulationSubscriptionIfTooLongNotRespond = function () {
                    _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"].hide();
                    this.methodUnavailable = true;
                    this.simulationSubscribtion.unsubscribe();
                };
                SimulationPathComponent.prototype.onAlertClosed = function () {
                    this.methodUnavailable = false;
                };
                SimulationPathComponent.prototype.returnToTopPagePosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                return SimulationPathComponent;
            }());
            SimulationPathComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_8__["ValidationLoader"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_6__["SimulationService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"] },
                { type: _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_11__["InterComponentCommunicationService"] },
                { type: _app_modules_shared_module_pipes__WEBPACK_IMPORTED_MODULE_12__["SpacePipe"] }
            ]; };
            SimulationPathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-path',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-path.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-path/simulation-path.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-path.component.scss */ "./src/app/modules/simulation/components/simulation-path/simulation-path.component.scss")).default]
                })
            ], SimulationPathComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-results/simulation-results.component.scss": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-results/simulation-results.component.scss ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-view-results {\n  z-index: 1;\n  display: block;\n  margin: auto;\n  width: 100%;\n  max-width: 500px;\n}\n\n.app-simulation {\n  padding-bottom: 20px;\n}\n\n.app-warning {\n  display: flex;\n}\n\n.app-simulation-slider {\n  display: flex;\n}\n\n.app-simulation-slider-btn {\n  width: 15%;\n}\n\n.app-arrow {\n  border: solid #00965E;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n\n.app-left-arrow {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n\n.app-right-arrow {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.app-results {\n  text-align: center;\n}\n\n.app-results-zip {\n  position: relative;\n  margin: 0 auto;\n  width: 240px;\n  height: 200px;\n}\n\n.app-circle-content {\n  margin: 0;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.app-results-main-circle {\n  position: absolute;\n  border: 1px solid #00965E;\n  border-radius: 50%;\n  left: 15%;\n  width: 144px;\n  height: 144px;\n  font-size: 1rem;\n}\n\n.app-results-small-circle {\n  position: absolute;\n  border: 1px solid #767676;\n  border-radius: 50%;\n  background-color: #EEF9F0;\n  top: 40%;\n  width: 100px;\n  height: 100px;\n}\n\n.app-results-circle {\n  position: absolute;\n  border: 1px solid #767676;\n  border-radius: 50%;\n  background-color: #EEF9F0;\n  top: 30%;\n  right: 0;\n  width: 120px;\n  height: 120px;\n}\n\n.app-results-switch {\n  display: flex;\n  justify-content: center;\n}\n\n.app-switch-btn {\n  border-radius: 0;\n}\n\n.app-option-active {\n  color: #fff;\n  background-color: #008251;\n}\n\n.app-accordion {\n  margin: 0 auto;\n}\n\n.app-simulation-edit-btn {\n  display: block;\n}\n\n.app-simulation-edit-form {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .app-results-zip {\n    width: 300px;\n    height: 250px;\n  }\n\n  .app-results-main-circle {\n    width: 180px;\n    height: 180px;\n  }\n\n  .app-results-small-circle {\n    width: 125px;\n    height: 125px;\n  }\n\n  .app-results-circle {\n    width: 150px;\n    height: 150px;\n  }\n\n  .app-icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .app-simulation-results-container {\n    display: flex;\n    width: 100%;\n  }\n\n  .app-simulation-item {\n    width: 50%;\n  }\n\n  .app-simulation-edit-form {\n    display: block;\n  }\n\n  .app-simulation-edit-btn {\n    display: none;\n  }\n\n  .app-simulation-slider-btn {\n    width: 33%;\n  }\n\n  .app-simulation-slider-btn-left {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1yZXN1bHRzL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFwcFxcbW9kdWxlc1xcc2ltdWxhdGlvblxcY29tcG9uZW50c1xcc2ltdWxhdGlvbi1yZXN1bHRzXFxzaW11bGF0aW9uLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2ltdWxhdGlvbi9jb21wb25lbnRzL3NpbXVsYXRpb24tcmVzdWx0cy9zaW11bGF0aW9uLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2ltdWxhdGlvbi9jb21wb25lbnRzL3NpbXVsYXRpb24tcmVzdWx0cy9DOlxcVXNlcnNcXGFjaHJvc2NpZWxld3NrYVxcX1BST0pFS1RZXFxCTlBfUFJPSkVLVFlcXEhPXFxtb3J0Z2FnZS1vbmxpbmUtc2ltdWxhdG9yLWNoZWNrbGlzdC13ZWIvc3JjXFxhc3NldHNcXGNvbmZpZ1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkU1RW9CO0VGNkVwQixRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRXRGb0I7RUZ1RnBCLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSx5QkV2Rlc7QURxRmI7O0FES0E7RUFDRSxjQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0FDRkY7O0FES0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDRkY7O0VESUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0RGOztFREdBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNBRjs7RURHQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDQUY7O0VER0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VDREY7O0VER0E7SUFDRSxVQUFBO0VDQUY7O0VER0E7SUFDRSxjQUFBO0VDQUY7O0VER0E7SUFDRSxhQUFBO0VDQUY7O0VER0E7SUFDRSxVQUFBO0VDQUY7O0VER0E7SUFDRSxpQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLXJlc3VsdHMvc2ltdWxhdGlvbi1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jb25maWcvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY29uZmlnL2JyZWFrcG9pbnRzXCI7XHJcblxyXG4uYXBwLXZpZXctcmVzdWx0cyB7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmFwcC1zaW11bGF0aW9uIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmFwcC13YXJuaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXBwLXNpbXVsYXRpb24tc2xpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXBwLXNpbXVsYXRpb24tc2xpZGVyLWJ0biB7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmFwcC1hcnJvdyB7XHJcbiAgYm9yZGVyOiBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFwcC1sZWZ0LWFycm93IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxufVxyXG5cclxuLmFwcC1yaWdodC1hcnJvdyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5hcHAtcmVzdWx0cyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXBwLXJlc3VsdHMtemlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5hcHAtY2lyY2xlLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uYXBwLXJlc3VsdHMtbWFpbi1jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHdpZHRoOiAxNDRweDtcclxuICBoZWlnaHQ6IDE0NHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmFwcC1yZXN1bHRzLXNtYWxsLWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LWNvbG9yLXNlY29uZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGlnaHQtY29sb3I7XHJcbiAgdG9wOiA0MCU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5hcHAtcmVzdWx0cy1jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleS1jb2xvci1zZWNvbmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2h0LWNvbG9yO1xyXG4gIHRvcDogMzAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uYXBwLXJlc3VsdHMtc3dpdGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYXBwLXN3aXRjaC1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5hcHAtb3B0aW9uLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmstaG92ZXI7XHJcbn1cclxuXHJcbi5hcHAtYWNjb3JkaW9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmFwcC1zaW11bGF0aW9uLWVkaXQtYnRuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmFwcC1zaW11bGF0aW9uLWVkaXQtZm9ybSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICRtZCkge1xyXG4gIC5hcHAtcmVzdWx0cy16aXAge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLmFwcC1yZXN1bHRzLW1haW4tY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG4gIC5hcHAtcmVzdWx0cy1zbWFsbC1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICB9XHJcblxyXG4gIC5hcHAtcmVzdWx0cy1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5hcHAtaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGcpIHtcclxuICAuYXBwLXNpbXVsYXRpb24tcmVzdWx0cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYXBwLXNpbXVsYXRpb24taXRlbSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1zaW11bGF0aW9uLWVkaXQtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5hcHAtc2ltdWxhdGlvbi1lZGl0LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1zaW11bGF0aW9uLXNsaWRlci1idG4ge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICB9XHJcblxyXG4gIC5hcHAtc2ltdWxhdGlvbi1zbGlkZXItYnRuLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICR4bCkge1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHh4bCkge1xyXG59XHJcbiIsIi5hcHAtdmlldy1yZXN1bHRzIHtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5hcHAtc2ltdWxhdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uYXBwLXdhcm5pbmcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXBwLXNpbXVsYXRpb24tc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFwcC1zaW11bGF0aW9uLXNsaWRlci1idG4ge1xuICB3aWR0aDogMTUlO1xufVxuXG4uYXBwLWFycm93IHtcbiAgYm9yZGVyOiBzb2xpZCAjMDA5NjVFO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLWxlZnQtYXJyb3cge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbi5hcHAtcmlnaHQtYXJyb3cge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5hcHAtcmVzdWx0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwcC1yZXN1bHRzLXppcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmFwcC1jaXJjbGUtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmFwcC1yZXN1bHRzLW1haW4tY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5NjVFO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxlZnQ6IDE1JTtcbiAgd2lkdGg6IDE0NHB4O1xuICBoZWlnaHQ6IDE0NHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5hcHAtcmVzdWx0cy1zbWFsbC1jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Njc2NzY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjlGMDtcbiAgdG9wOiA0MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmFwcC1yZXN1bHRzLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc2NzY3NjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGOUYwO1xuICB0b3A6IDMwJTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmFwcC1yZXN1bHRzLXN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXBwLXN3aXRjaC1idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYXBwLW9wdGlvbi1hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODI1MTtcbn1cblxuLmFwcC1hY2NvcmRpb24ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFwcC1zaW11bGF0aW9uLWVkaXQtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hcHAtc2ltdWxhdGlvbi1lZGl0LWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFwcC1yZXN1bHRzLXppcCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cblxuICAuYXBwLXJlc3VsdHMtbWFpbi1jaXJjbGUge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG5cbiAgLmFwcC1yZXN1bHRzLXNtYWxsLWNpcmNsZSB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGhlaWdodDogMTI1cHg7XG4gIH1cblxuICAuYXBwLXJlc3VsdHMtY2lyY2xlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5hcHAtaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5hcHAtc2ltdWxhdGlvbi1yZXN1bHRzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hcHAtc2ltdWxhdGlvbi1pdGVtIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmFwcC1zaW11bGF0aW9uLWVkaXQtZm9ybSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuYXBwLXNpbXVsYXRpb24tZWRpdC1idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYXBwLXNpbXVsYXRpb24tc2xpZGVyLWJ0biB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxuXG4gIC5hcHAtc2ltdWxhdGlvbi1zbGlkZXItYnRuLWxlZnQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59IiwiJGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiR0ZXh0LWNvbG9yOiAjMkQyOTI2O1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMDk2NUU7XHJcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjRUVGOUYwO1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogIzE0MTQxNDtcclxuXHJcbiRzZWNvbmRhcnktY29sb3I6ICMwMEJDOEM7XHJcblxyXG4kY29udHJhc3QtY29sb3I6ICNGNUE2MjM7XHJcbiRjb250cmFzdC1jb2xvci1zZWNvbmQ6ICNGRkNGODA7XHJcblxyXG4kc3VjY2Vzcy1jb2xvci1wcmltYXJ5OiAjMEZCNzc3O1xyXG4kc3VjY2Vzcy1jb2xvci1zZWNvbmRhcnk6ICM5RUREQTY7XHJcbiRlcnJvci1jb2xvci1wcmltYXJ5OiAjRDQwMDAwO1xyXG4kZXJyb3ItY29sb3Itc2Vjb25kYXJ5OiAjRkFFNUU1O1xyXG5cclxuJG5vdGljZS1jb2xvci1wcmltYXJ5OiAjRThENzAwO1xyXG4kbm90aWNlLWNvbG9yLXNlY29uZGFyeTogI0ZGRkFCQztcclxuXHJcbiRsaW5rOiAjMDA4RjU4O1xyXG4kbGluay1ob3ZlcjogIzAwODI1MTtcclxuJGdyZXktY29sb3I6ICNFRUU7XHJcbiRncmV5LWNvbG9yLXNlY29uZDogIzc2NzY3NjtcclxuJGdyZXktaW5wdXQtY29sb3I6ICNFNUU1RTU7XHJcbiRmdWxsLWJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-results/simulation-results.component.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-results/simulation-results.component.ts ***!
          \**************************************************************************************************/
        /*! exports provided: SimulationResultsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationResultsComponent", function () { return SimulationResultsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/simulation/service/simulation.service */ "./src/app/modules/simulation/service/simulation.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_pipes_space_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/pipes/space.pipe */ "./src/app/modules/shared-module/pipes/space.pipe.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _model_SimulationResultsCalc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/SimulationResultsCalc */ "./src/app/modules/simulation/model/SimulationResultsCalc.ts");
            /* harmony import */ var _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/inter-component-communication.service */ "./src/app/modules/simulation/service/inter-component-communication.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var _simulation_form_modal_simulation_form_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../simulation-form-modal/simulation-form-modal.component */ "./src/app/modules/simulation/components/simulation-form-modal/simulation-form-modal.component.ts");
            var SimulationResultsComponent = /** @class */ (function () {
                function SimulationResultsComponent(translate, translationLoader, simulationService, router, route, spacePipe, viewportScroller, interComponentCommunicationService, modalService) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.simulationService = simulationService;
                    this.router = router;
                    this.route = route;
                    this.spacePipe = spacePipe;
                    this.viewportScroller = viewportScroller;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.modalService = modalService;
                    this.optimalVariantName = 'OPTIMAL';
                    this.quickVariantName = 'QUICK';
                    this.safeVariantName = 'SAFE';
                    this.activeResultArr = [];
                    this.creditStandingPanelIsOpen = true;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({});
                    this.mobileFormSteps = [];
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.translate.get('SimulatorResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                }
                SimulationResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.simulationWarningInstallment = false;
                    this.simulationWarningLoan = false;
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                    this.simulationService.currentSimulationParameters.subscribe(function (data) {
                        _this.simulationParametres = data;
                        _this.parametersToChange =
                            new _model_SimulationResultsCalc__WEBPACK_IMPORTED_MODULE_7__["SimulationResultsCalc"](_this.simulationService, _this.simulationParametres, _this.translate, _this.spacePipe);
                        if (_this.simulationParametres.installmentMonthlyAmount) {
                            _this.fields =
                                _this.parametersToChange.formFieldInstallment();
                        }
                        if (_this.simulationParametres.totalLoanAmount) {
                            _this.fields = _this.parametersToChange.formFieldLoan();
                        }
                    });
                    this.simulationService.currentSimulationResult.subscribe(function (data) {
                        _this.simulationResults = data.simulations;
                        _this.optimalOption = false;
                        _this.quickOption = false;
                        _this.safeOption = false;
                        _this.activeResultArr = [];
                        _this.setUpResults();
                    });
                };
                SimulationResultsComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopPagePosition();
                };
                SimulationResultsComponent.prototype.setUpResults = function () {
                    var _this = this;
                    if (this.simulationParametres.installmentMonthlyAmount) {
                        this.simulationVariant = 'INSTALMENT_VIEW';
                    }
                    else {
                        this.simulationVariant = 'LOAN_VIEW';
                    }
                    if (this.simulationResults.find(function (result) { return result.simulationVariant === _this.optimalVariantName; })) {
                        this.optimalOption = true;
                        this.simulationSetUp(this.optimalVariantName);
                    }
                    if (this.simulationResults.find(function (result) { return result.simulationVariant === _this.quickVariantName; })) {
                        this.quickOption = true;
                        this.simulationSetUp(this.quickVariantName);
                    }
                    if (this.simulationResults.find(function (result) { return result.simulationVariant === _this.safeVariantName; })) {
                        this.safeOption = true;
                        this.simulationSetUp(this.safeVariantName);
                    }
                    if (this.optimalOption) {
                        this.activeResult = this.optimalVariantName;
                    }
                    else if (this.quickOption) {
                        this.activeResult = this.quickVariantName;
                    }
                    else {
                        this.activeResult = this.safeVariantName;
                    }
                    if (this.simulationResults.length > 0) {
                        this.setUpView();
                    }
                };
                SimulationResultsComponent.prototype.simulationSetUp = function (variant) {
                    this.activeResultArr.push(variant);
                    this.simulation = this.simulationResults.find(function (result) { return result.simulationVariant === variant; });
                };
                SimulationResultsComponent.prototype.setUpView = function () {
                    var _this = this;
                    this.simulation = this.simulationResults.find(function (result) { return result.simulationVariant === _this.activeResult; });
                    if (this.simulation.installmentMonthlyAmount < this.simulationParametres.installmentMonthlyAmount) {
                        this.simulationWarningInstallment = true;
                    }
                    else {
                        this.simulationWarningInstallment = false;
                    }
                    if (this.simulation.loanAmount < this.simulationParametres.totalLoanAmount) {
                        this.simulationWarningLoan = true;
                    }
                    else {
                        this.simulationWarningLoan = false;
                    }
                    var interestRate = this.simulation.interestRate * 100;
                    this.creditStandingView = [
                        {
                            label: this.translations.panel.parameters.maxLoanCapability,
                            data: "" + this.spacePipe.transform(this.simulation.maxLoanCapability),
                            id: 'maxLoanCapability'
                        },
                        {
                            label: this.translations.panel.parameters.maxPropertyValue,
                            data: "" + this.spacePipe.transform(this.simulation.propertyValue),
                            id: 'propertyValue'
                        },
                        {
                            label: this.translations.panel.parameters.interestRate,
                            data: "" + Math.round((interestRate + Number.EPSILON) * 100) / 100,
                            id: 'interestRate'
                        }
                    ];
                };
                SimulationResultsComponent.prototype.showOptimal = function () {
                    this.activeResult = this.optimalVariantName;
                    this.setUpView();
                };
                SimulationResultsComponent.prototype.showQuick = function () {
                    this.activeResult = this.quickVariantName;
                    this.setUpView();
                };
                SimulationResultsComponent.prototype.showSafe = function () {
                    this.activeResult = this.safeVariantName;
                    this.setUpView();
                };
                SimulationResultsComponent.prototype.goLeft = function () {
                    var currentActiveOption = this.activeResultArr.indexOf(this.activeResult);
                    if (currentActiveOption - 1 >= 0) {
                        this.activeResult = this.activeResultArr[currentActiveOption - 1];
                        this.setUpView();
                    }
                    else {
                        this.activeResult = this.activeResultArr[this.activeResultArr.length - 1];
                        this.setUpView();
                    }
                };
                SimulationResultsComponent.prototype.goRight = function () {
                    var currentActiveOption = this.activeResultArr.indexOf(this.activeResult);
                    if (currentActiveOption + 1 <= this.activeResultArr.length - 1) {
                        this.activeResult = this.activeResultArr[currentActiveOption + 1];
                        this.setUpView();
                    }
                    else {
                        this.activeResult = this.activeResultArr[0];
                        this.setUpView();
                    }
                };
                SimulationResultsComponent.prototype.returnToTopPagePosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                SimulationResultsComponent.prototype.startNewSimulation = function () {
                    this.interComponentCommunicationService.setUpSimulationStep(0);
                    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: true });
                };
                SimulationResultsComponent.prototype.openModal = function () {
                    var stepOneFields;
                    if (this.simulationParametres.installmentMonthlyAmount) {
                        stepOneFields =
                            this.parametersToChange.mobileFormFieldInstallmentStepOne(false);
                    }
                    if (this.simulationParametres.totalLoanAmount) {
                        stepOneFields = this.parametersToChange.mobileFormFieldLoanStepOne(false);
                    }
                    this.mobileFormSteps = [
                        stepOneFields,
                        this.parametersToChange.mobileFormFieldStepTwo()
                    ];
                    this.mobileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArray"](this.mobileFormSteps.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({}); }));
                    var initialState = {
                        model: this.model,
                        fields: this.fields,
                        mobileForm: this.mobileForm,
                        mobileFormSteps: this.mobileFormSteps
                    };
                    this.bsModalRef = this.modalService.show(_simulation_form_modal_simulation_form_modal_component__WEBPACK_IMPORTED_MODULE_12__["SimulationFormModalComponent"], Object.assign({ initialState: initialState }, { class: 'app-modal-full-screen' }));
                };
                return SimulationResultsComponent;
            }());
            SimulationResultsComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] },
                { type: _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_3__["SimulationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
                { type: _app_modules_shared_module_pipes_space_pipe__WEBPACK_IMPORTED_MODULE_5__["SpacePipe"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"] },
                { type: _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_8__["InterComponentCommunicationService"] },
                { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsModalService"] }
            ]; };
            SimulationResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-results',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-results/simulation-results.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-results.component.scss */ "./src/app/modules/simulation/components/simulation-results/simulation-results.component.scss")).default]
                })
            ], SimulationResultsComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-send/simulation-send.component.scss": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-send/simulation-send.component.scss ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-stepper {\n  display: flex;\n}\n\n.app-stepper-item-active {\n  background-color: #00965E;\n  color: #fff;\n}\n\n.app-stepper-item-after-active {\n  background-color: #008251;\n  color: #fff;\n}\n\n.app-stepper-header {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaW11bGF0aW9uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1zZW5kL0M6XFxVc2Vyc1xcYWNocm9zY2llbGV3c2thXFxfUFJPSkVLVFlcXEJOUF9QUk9KRUtUWVxcSE9cXG1vcnRnYWdlLW9ubGluZS1zaW11bGF0b3ItY2hlY2tsaXN0LXdlYi9zcmNcXGFzc2V0c1xcY29uZmlnXFxjb21wb25lbnRzXFxfYXBwU3RlcHBlci5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLXNlbmQvc2ltdWxhdGlvbi1zZW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLXNlbmQvQzpcXFVzZXJzXFxhY2hyb3NjaWVsZXdza2FcXF9QUk9KRUtUWVxcQk5QX1BST0pFS1RZXFxIT1xcbW9ydGdhZ2Utb25saW5lLXNpbXVsYXRvci1jaGVja2xpc3Qtd2ViL3NyY1xcYXNzZXRzXFxjb25maWdcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLHlCRUpjO0VGS2QsV0FBQTtBQ0RGOztBRElBO0VBQ0UseUJFU1c7RUZSWCxXQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NpbXVsYXRpb24vY29tcG9uZW50cy9zaW11bGF0aW9uLXNlbmQvc2ltdWxhdGlvbi1zZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2NvbG9yc1wiO1xyXG5cclxuLmFwcC1zdGVwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXBwLXN0ZXBwZXItaXRlbS1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYXBwLXN0ZXBwZXItaXRlbS1hZnRlci1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaW5rLWhvdmVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYXBwLXN0ZXBwZXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4iLCIuYXBwLXN0ZXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXBwLXN0ZXBwZXItaXRlbS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NjVFO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFwcC1zdGVwcGVyLWl0ZW0tYWZ0ZXItYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODI1MTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hcHAtc3RlcHBlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufSIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4kdGV4dC1jb2xvcjogIzJEMjkyNjtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA5NjVFO1xyXG4kcHJpbWFyeS1saWdodC1jb2xvcjogI0VFRjlGMDtcclxuJHByaW1hcnktY29sb3ItaG92ZXI6ICMxNDE0MTQ7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDBCQzhDO1xyXG5cclxuJGNvbnRyYXN0LWNvbG9yOiAjRjVBNjIzO1xyXG4kY29udHJhc3QtY29sb3Itc2Vjb25kOiAjRkZDRjgwO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3ItcHJpbWFyeTogIzBGQjc3NztcclxuJHN1Y2Nlc3MtY29sb3Itc2Vjb25kYXJ5OiAjOUVEREE2O1xyXG4kZXJyb3ItY29sb3ItcHJpbWFyeTogI0Q0MDAwMDtcclxuJGVycm9yLWNvbG9yLXNlY29uZGFyeTogI0ZBRTVFNTtcclxuXHJcbiRub3RpY2UtY29sb3ItcHJpbWFyeTogI0U4RDcwMDtcclxuJG5vdGljZS1jb2xvci1zZWNvbmRhcnk6ICNGRkZBQkM7XHJcblxyXG4kbGluazogIzAwOEY1ODtcclxuJGxpbmstaG92ZXI6ICMwMDgyNTE7XHJcbiRncmV5LWNvbG9yOiAjRUVFO1xyXG4kZ3JleS1jb2xvci1zZWNvbmQ6ICM3Njc2NzY7XHJcbiRncmV5LWlucHV0LWNvbG9yOiAjRTVFNUU1O1xyXG4kZnVsbC1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-send/simulation-send.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-send/simulation-send.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: SimulationSendComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationSendComponent", function () { return SimulationSendComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/simulation/service/simulation.service */ "./src/app/modules/simulation/service/simulation.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/inter-component-communication.service */ "./src/app/modules/simulation/service/inter-component-communication.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/modules/shared-module/services/user-auth/user-auth.service */ "./src/app/modules/shared-module/services/user-auth/user-auth.service.ts");
            /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
            var SimulationSendComponent = /** @class */ (function () {
                function SimulationSendComponent(translate, translationLoader, validationsLoader, simulationService, router, route, storage, viewportScroller, interComponentCommunicationService, userService) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.simulationService = simulationService;
                    this.router = router;
                    this.route = route;
                    this.storage = storage;
                    this.viewportScroller = viewportScroller;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.userService = userService;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
                    this.model = {};
                    this.methodUnavailable = false;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.translate.get('SimulatorResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                    this.fields = this.getFields();
                    this.rodoInformationURL = _env_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].rodoInformationURL;
                }
                SimulationSendComponent.prototype.ngOnInit = function () {
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                };
                SimulationSendComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopPagePosition();
                };
                SimulationSendComponent.prototype.getFields = function () {
                    var translate = this.translate;
                    return [
                        {
                            fieldGroup: [
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'firstName',
                                    templateOptions: {
                                        type: 'text',
                                        placeholder: translate.instant('ContactForm.fields.firstName.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                    validators: {
                                        validation: ['firstName']
                                    },
                                    hideExpression: this.userService.isBroker()
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'lastName',
                                    templateOptions: {
                                        type: 'text',
                                        placeholder: translate.instant('ContactForm.fields.lastName.label'),
                                        attributes: {},
                                        required: true
                                    },
                                    validators: {
                                        validation: ['lastName']
                                    },
                                    hideExpression: this.userService.isBroker()
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'email',
                                    templateOptions: {
                                        type: 'email',
                                        placeholder: translate.instant('ContactForm.fields.email.label'),
                                        attributes: {},
                                        required: true,
                                    },
                                    validators: {
                                        validation: ['email'],
                                    },
                                },
                                {
                                    className: 'col-12 app-justify-content-center app-form-field',
                                    type: 'custom-input',
                                    wrappers: ['form-field-horizontal'],
                                    key: 'phoneNumber',
                                    templateOptions: {
                                        type: 'tel',
                                        placeholder: translate.instant('ContactForm.fields.phoneNumber.label'),
                                        attributes: {},
                                        required: true
                                    },
                                    validators: {
                                        validation: ['phone'],
                                    },
                                    hideExpression: this.userService.isBroker()
                                }
                            ]
                        },
                        {
                            className: 'app-checkbox-list',
                            fieldGroup: [
                                {
                                    className: 'app-checkbox',
                                    key: 'selectAll',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.selectAll'),
                                        description: '',
                                        attributes: {
                                            tooltip: ''
                                        },
                                    },
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'marketingConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.marketingConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.marketingConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.marketingConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'digitalMarketingConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.digitalMarketingConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.digitalMarketingConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.digitalMarketingConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'offerPresentationConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.offerPresentationConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.offerPresentationConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.offerPresentationConsent': 'model.selectAll'
                                    }
                                },
                                {
                                    className: 'app-checkbox',
                                    key: 'digitalOfferPresentationConsent',
                                    type: 'checkbox-with-tooltip-onclick',
                                    defaultValue: false,
                                    templateOptions: {
                                        label: translate.instant('ContactForm.consents.digitalOfferPresentationConsent.labelShort'),
                                        description: '',
                                        attributes: {
                                            tooltip: translate.instant('ContactForm.consents.digitalOfferPresentationConsent.label')
                                        },
                                    },
                                    expressionProperties: {
                                        'model.digitalOfferPresentationConsent': 'model.selectAll'
                                    }
                                }
                            ],
                            hideExpression: this.userService.isBroker()
                        }
                    ];
                };
                SimulationSendComponent.prototype.submit = function () {
                    if (this.form.valid) {
                        delete this.model.selectAll;
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"].show();
                        if (this.userService.isBroker()) {
                            this.sendEmail();
                        }
                        else {
                            this.saveLeadAndSimulationAndSendEmail();
                        }
                    }
                };
                SimulationSendComponent.prototype.saveLeadAndSimulationAndSendEmail = function () {
                    var _this = this;
                    this.simulationService.saveLead(this.model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["flatMap"])(function (saveLeadResult) {
                        _this.storage.set('leadId', saveLeadResult.id);
                        return _this.simulationService.saveSimulationResult$(saveLeadResult.id);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["flatMap"])(function (saveSimulationResult) {
                        return _this.simulationService.sendSimulation$(_this.model.email);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["flatMap"])(function (result) {
                        _this.router.navigate(['../sendSimulationSuccess'], { relativeTo: _this.route, skipLocationChange: true });
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"].hide();
                        return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function (err) {
                        console.log(err);
                        _this.methodUnavailable = true;
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"].hide();
                        return err;
                    })).subscribe();
                };
                SimulationSendComponent.prototype.sendEmail = function () {
                    var _this = this;
                    this.simulationService.sendSimulation$(this.model.email).subscribe(function (value) {
                        _this.router.navigate(['../sendSimulationSuccess'], { relativeTo: _this.route, skipLocationChange: true });
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"].hide();
                    }, function (err) {
                        console.log(err);
                        _this.methodUnavailable = true;
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"].hide();
                        return err;
                    });
                };
                SimulationSendComponent.prototype.onAlertClosed = function () {
                    this.methodUnavailable = false;
                };
                SimulationSendComponent.prototype.returnToTopPagePosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                SimulationSendComponent.prototype.backToSimulation = function () {
                    this.interComponentCommunicationService.setUpSimulationStep(this.interComponentCommunicationService.simulationLastActiveStep);
                    this.router.navigate(['../installment'], { relativeTo: this.route, skipLocationChange: true });
                };
                return SimulationSendComponent;
            }());
            SimulationSendComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_5__["ValidationLoader"] },
                { type: _app_modules_simulation_service_simulation_service__WEBPACK_IMPORTED_MODULE_8__["SimulationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["SESSION_STORAGE"],] }] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"] },
                { type: _service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_13__["InterComponentCommunicationService"] },
                { type: _app_modules_shared_module_services_user_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_14__["UserAuthService"] }
            ]; };
            SimulationSendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-send',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-send.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-send/simulation-send.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-send.component.scss */ "./src/app/modules/simulation/components/simulation-send/simulation-send.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["SESSION_STORAGE"]))
            ], SimulationSendComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.scss": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.scss ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2ltdWxhdGlvbi9jb21wb25lbnRzL3NpbXVsYXRpb24tc2VudC9zaW11bGF0aW9uLXNlbnQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: SimulationSentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationSentComponent", function () { return SimulationSentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            /* harmony import */ var _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/validations.loader */ "./src/app/modules/shared-module/services/i18n/validations.loader.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_modules_simulation_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/simulation/service/inter-component-communication.service */ "./src/app/modules/simulation/service/inter-component-communication.service.ts");
            var SimulationSentComponent = /** @class */ (function () {
                function SimulationSentComponent(translate, translationLoader, validationsLoader, viewportScroller, router, route, interComponentCommunicationService) {
                    var _this = this;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.validationsLoader = validationsLoader;
                    this.viewportScroller = viewportScroller;
                    this.router = router;
                    this.route = route;
                    this.interComponentCommunicationService = interComponentCommunicationService;
                    this.showChecklistBtn = false;
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.validationsLoader.init();
                    this.translate.get('SimulatorResults').subscribe(function (translated) {
                        _this.translations = translated;
                    });
                }
                SimulationSentComponent.prototype.ngOnInit = function () {
                    this.viewportScrollAnchor = this.interComponentCommunicationService.viewportScrollAnchor;
                    this.showChecklistBtn = this.interComponentCommunicationService.isChecklistBtnVisible;
                    this.checklistAnchor = this.interComponentCommunicationService.checklistAnchor;
                };
                SimulationSentComponent.prototype.ngAfterViewInit = function () {
                    this.returnToTopPagePosition();
                };
                SimulationSentComponent.prototype.returnToTopPagePosition = function () {
                    this.viewportScroller.scrollToAnchor(this.viewportScrollAnchor);
                };
                SimulationSentComponent.prototype.goToChecklistWebComponent = function () {
                    this.viewportScroller.scrollToAnchor(this.checklistAnchor);
                    this.interComponentCommunicationService.setUpSimulationStep(0);
                    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: true });
                };
                SimulationSentComponent.prototype.startNewSimulation = function () {
                    this.interComponentCommunicationService.setUpSimulationStep(0);
                    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: true });
                };
                return SimulationSentComponent;
            }());
            SimulationSentComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] },
                { type: _app_modules_shared_module_services_i18n_validations_loader__WEBPACK_IMPORTED_MODULE_4__["ValidationLoader"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _app_modules_simulation_service_inter_component_communication_service__WEBPACK_IMPORTED_MODULE_7__["InterComponentCommunicationService"] }
            ]; };
            SimulationSentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simulation-sent',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simulation-sent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simulation-sent.component.scss */ "./src/app/modules/simulation/components/simulation-sent/simulation-sent.component.scss")).default]
                })
            ], SimulationSentComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/model/Simulation.ts": 
        /*!********************************************************!*\
          !*** ./src/app/modules/simulation/model/Simulation.ts ***!
          \********************************************************/
        /*! exports provided: Simulation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simulation", function () { return Simulation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/parameters/systemParameters */ "./src/assets/parameters/systemParameters.ts");
            var Simulation = /** @class */ (function () {
                function Simulation(translations, spacePipe) {
                    this.translations = translations;
                    this.spacePipe = spacePipe;
                }
                Simulation.prototype.formFieldInstallmentStepOne = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledInstallmentMonthlyAmount(),
                                this.formFiledLoanTermInYears(),
                                this.formFiledExpectedContributionAmount()
                            ]
                        }
                    ];
                };
                Simulation.prototype.formFieldLoanStepOne = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledTotalLoanAmount(),
                                this.formFiledLoanTermInYears(),
                                this.formFiledExpectedContributionAmount()
                            ],
                        },
                    ];
                };
                Simulation.prototype.formFieldStepTwo = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledFamilySize(),
                                this.formFiledTotalIncomeAmount(),
                                this.formFiledTotalCostOfLiving(),
                                this.formFiledTotalCostOfLiabilitiesLoan(),
                                this.formFiledTotalCostOfLiabilitiesCreditCards()
                            ],
                        },
                    ];
                };
                Simulation.prototype.formFiledInstallmentMonthlyAmount = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'installmentMonthlyAmount',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.installmentMonthlyAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.installmentMonthlyAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.installmentMonthlyAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minInstallment),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxInstallment)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.installmentMonthlyAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minInstallment,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxInstallment,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledTotalLoanAmount = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalLoanAmount',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalLoanAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalLoanAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalLoanAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].mintotalLoanAmount),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxtotalLoanAmount)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalLoanAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].mintotalLoanAmount,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxtotalLoanAmount,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledLoanTermInYears = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'loanTermInYears',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.loanTermInYears.label'),
                            placeholder: this.translations.instant('Simulator.fields.loanTermInYears.placeholder'),
                            description: this.translations.instant('Simulator.fields.loanTermInYears.description', { min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minLoanTermInYears, max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxLoanTermInYears }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.loanTermInYears.tooltip'),
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minLoanTermInYears,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxLoanTermInYears,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledExpectedContributionAmount = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'expectedContributionAmount',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.expectedContributionAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.expectedContributionAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.expectedContributionAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minExpectedContributionAmount),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxExpectedContributionAmount)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.expectedContributionAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minExpectedContributionAmount,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxExpectedContributionAmount,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledFamilySize = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'familySize',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.familySize.label'),
                            placeholder: this.translations.instant('Simulator.fields.familySize.placeholder'),
                            description: this.translations.instant('Simulator.fields.familySize.description', { min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minFamilySize, max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxFamilySize }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.familySize.tooltip'),
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minFamilySize,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxFamilySize,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledTotalIncomeAmount = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalIncomeAmount',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalIncomeAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalIncomeAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalIncomeAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalIncomeAmount),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalIncomeAmount)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalIncomeAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalIncomeAmount,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalIncomeAmount,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledTotalCostOfLiving = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalCostOfLiving',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalCostOfLiving.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalCostOfLiving.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalCostOfLiving.description', { min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiving, max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiving }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalCostOfLiving.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiving,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiving,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledTotalCostOfLiabilitiesLoan = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalCostOfLiabilitiesLoan',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesLoan),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesLoan)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesLoan,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesLoan,
                            change: function (field, $event) { }
                        }
                    };
                };
                Simulation.prototype.formFiledTotalCostOfLiabilitiesCreditCards = function () {
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalCostOfLiabilitiesCreditCards',
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesCards),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesCards)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesCards,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesCards,
                            change: function (field, $event) { }
                        }
                    };
                };
                return Simulation;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/model/SimulationResult.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/modules/simulation/model/SimulationResult.ts ***!
          \**************************************************************/
        /*! exports provided: SimulationResult */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationResult", function () { return SimulationResult; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SimulationResult = /** @class */ (function () {
                function SimulationResult(result) {
                    this.simulations = result;
                }
                return SimulationResult;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/model/SimulationResultsCalc.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/modules/simulation/model/SimulationResultsCalc.ts ***!
          \*******************************************************************/
        /*! exports provided: SimulationResultsCalc */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationResultsCalc", function () { return SimulationResultsCalc; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/parameters/systemParameters */ "./src/assets/parameters/systemParameters.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
            var SimulationResultsCalc = /** @class */ (function () {
                function SimulationResultsCalc(simulationService, simulationParametres, translations, spacePipe) {
                    this.simulationService = simulationService;
                    this.simulationParametres = simulationParametres;
                    this.translations = translations;
                    this.spacePipe = spacePipe;
                    this.apiMethodUnavailable = false;
                    this.calculateOnChange = true;
                }
                SimulationResultsCalc.prototype.mobileFormFieldInstallmentStepOne = function (calculateOnChange) {
                    this.calculateOnChange = calculateOnChange;
                    return [
                        {
                            fieldGroup: [
                                this.formFiledInstallmentMonthlyAmount(),
                                this.formFiledLoanTermInYears(),
                                this.formFiledExpectedContributionAmount(),
                                this.formFiledFamilySize()
                            ]
                        }
                    ];
                };
                SimulationResultsCalc.prototype.mobileFormFieldLoanStepOne = function (calculateOnChange) {
                    this.calculateOnChange = calculateOnChange;
                    return [
                        {
                            fieldGroup: [
                                this.formFiledTotalLoanAmount(),
                                this.formFiledLoanTermInYears(),
                                this.formFiledExpectedContributionAmount(),
                                this.formFiledFamilySize()
                            ],
                        },
                    ];
                };
                SimulationResultsCalc.prototype.mobileFormFieldStepTwo = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledTotalIncomeAmount(),
                                this.formFiledTotalCostOfLiving(),
                                this.formFiledTotalCostOfLiabilitiesLoan(),
                                this.formFiledTotalCostOfLiabilitiesCreditCards()
                            ],
                        },
                    ];
                };
                SimulationResultsCalc.prototype.formFieldInstallment = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledInstallmentMonthlyAmount(),
                                this.formFiledLoanTermInYears(),
                                this.formFiledExpectedContributionAmount(),
                                this.formFiledFamilySize(),
                                this.formFiledTotalIncomeAmount(),
                                this.formFiledTotalCostOfLiving(),
                                this.formFiledTotalCostOfLiabilitiesLoan(),
                                this.formFiledTotalCostOfLiabilitiesCreditCards()
                            ]
                        }
                    ];
                };
                SimulationResultsCalc.prototype.formFieldLoan = function () {
                    return [
                        {
                            fieldGroup: [
                                this.formFiledTotalLoanAmount(),
                                this.formFiledLoanTermInYears(),
                                this.formFiledExpectedContributionAmount(),
                                this.formFiledFamilySize(),
                                this.formFiledTotalIncomeAmount(),
                                this.formFiledTotalCostOfLiving(),
                                this.formFiledTotalCostOfLiabilitiesLoan(),
                                this.formFiledTotalCostOfLiabilitiesCreditCards()
                            ],
                        },
                    ];
                };
                SimulationResultsCalc.prototype.formFiledInstallmentMonthlyAmount = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'installmentMonthlyAmount',
                        defaultValue: this.simulationParametres.installmentMonthlyAmount,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.installmentMonthlyAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.installmentMonthlyAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.installmentMonthlyAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minInstallment),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxInstallment)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.installmentMonthlyAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minInstallment,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxInstallment,
                            change: function (field, $event) { _this.recalculateOnChange(field); },
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledTotalLoanAmount = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalLoanAmount',
                        defaultValue: this.simulationParametres.totalLoanAmount,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalLoanAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalLoanAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalLoanAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].mintotalLoanAmount),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxtotalLoanAmount)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalLoanAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].mintotalLoanAmount,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxtotalLoanAmount,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledLoanTermInYears = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'loanTermInYears',
                        defaultValue: this.simulationParametres.simpleSimulationRequest.loanTermInYears,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.loanTermInYears.label'),
                            placeholder: this.translations.instant('Simulator.fields.loanTermInYears.placeholder'),
                            description: this.translations.instant('Simulator.fields.loanTermInYears.description', { min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minLoanTermInYears, max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxLoanTermInYears }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.loanTermInYears.tooltip'),
                                additionalLabel: this.translations.instant('Simulator.fields.loanTermInYears.additionalLabel'),
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minLoanTermInYears,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxLoanTermInYears,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledExpectedContributionAmount = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'expectedContributionAmount',
                        defaultValue: this.simulationParametres.simpleSimulationRequest.expectedContributionAmount,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.expectedContributionAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.expectedContributionAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.expectedContributionAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minExpectedContributionAmount),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxExpectedContributionAmount)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.expectedContributionAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minExpectedContributionAmount,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxExpectedContributionAmount,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledFamilySize = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'familySize',
                        defaultValue: this.simulationParametres.simpleSimulationRequest.familySize,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.familySize.label'),
                            placeholder: this.translations.instant('Simulator.fields.familySize.placeholder'),
                            description: this.translations.instant('Simulator.fields.familySize.description', { min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minFamilySize, max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxFamilySize }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.familySize.tooltip'),
                                additionalLabel: this.translations.instant('Simulator.fields.familySize.additionalLabel'),
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minFamilySize,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxFamilySize,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledTotalIncomeAmount = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalIncomeAmount',
                        defaultValue: this.simulationParametres.simpleSimulationRequest.totalIncomeAmount,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalIncomeAmount.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalIncomeAmount.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalIncomeAmount.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalIncomeAmount),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalIncomeAmount)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalIncomeAmount.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalIncomeAmount,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalIncomeAmount,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledTotalCostOfLiving = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalCostOfLiving',
                        defaultValue: this.simulationParametres.simpleSimulationRequest.totalCostOfLiving,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalCostOfLiving.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalCostOfLiving.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalCostOfLiving.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiving),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiving)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalCostOfLiving.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiving,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiving,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledTotalCostOfLiabilitiesLoan = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalCostOfLiabilitiesLoan',
                        defaultValue: this.simulationParametres.simpleSimulationRequest.totalCostOfLiabilitiesLoan,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesLoan),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesLoan)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesLoan.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesLoan,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesLoan,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.formFiledTotalCostOfLiabilitiesCreditCards = function () {
                    var _this = this;
                    return {
                        className: 'col-12 app-justify-content-center app-form-field',
                        type: 'digit-input',
                        wrappers: ['form-field-horizontal'],
                        key: 'totalCostOfLiabilitiesCreditCards',
                        defaultValue: this.simulationParametres.simpleSimulationRequest.totalCostOfLiabilitiesCreditCards,
                        templateOptions: {
                            type: 'number',
                            label: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.label'),
                            placeholder: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.placeholder'),
                            description: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.description', {
                                min: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesCards),
                                max: this.spacePipe.transform(_assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesCards)
                            }),
                            attributes: {
                                tooltip: this.translations.instant('Simulator.fields.totalCostOfLiabilitiesCreditCards.tooltip')
                            },
                            required: true,
                            min: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].minTotalCostOfLiabilitiesCards,
                            max: _assets_parameters_systemParameters__WEBPACK_IMPORTED_MODULE_1__["simulationParameters"].maxTotalCostOfLiabilitiesCards,
                            change: function (field, $event) { _this.recalculateOnChange(field); }
                        }
                    };
                };
                SimulationResultsCalc.prototype.recalculateOnChange = function (field) {
                    var _this = this;
                    if (this.calculateOnChange === true) {
                        clearTimeout(this.waitingForResults);
                        if (field.formControl.status === 'VALID') {
                            this.waitingForResults = setTimeout(function () { return _this.recalculate(field.key, field.formControl.value); }, _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].recalculationTimeoutInMillis);
                        }
                    }
                };
                SimulationResultsCalc.prototype.recalculate = function (field, value) {
                    var model = this.simulationParametres;
                    if (field === 'installmentMonthlyAmount') {
                        model.installmentMonthlyAmount = value;
                    }
                    else if (field === 'totalLoanAmount') {
                        model.totalLoanAmount = value;
                    }
                    else {
                        if (field in model.simpleSimulationRequest) {
                            model.simpleSimulationRequest[field] = value;
                        }
                    }
                    this.submit(model);
                };
                SimulationResultsCalc.prototype.submit = function (model) {
                    var _this = this;
                    this.simulationSubscribtion = this.simulationService.recaluculate(model).subscribe(function (result) {
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"].hide();
                        _this.apiMethodUnavailable = true;
                        _this.simulationService.saveResults(result);
                    }, function (error) {
                        _this.apiMethodUnavailable = true;
                        _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"].hide();
                    });
                    _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"].show().subscribe(function () {
                        _this.closeSimulationSubscriptionIfTooLongNotRespond();
                    });
                };
                SimulationResultsCalc.prototype.closeSimulationSubscriptionIfTooLongNotRespond = function () {
                    _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"].hide();
                    this.apiMethodUnavailable = true;
                    this.simulationSubscribtion.unsubscribe();
                };
                return SimulationResultsCalc;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/service/inter-component-communication.service.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/modules/simulation/service/inter-component-communication.service.ts ***!
          \*************************************************************************************/
        /*! exports provided: InterComponentCommunicationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterComponentCommunicationService", function () { return InterComponentCommunicationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InterComponentCommunicationService = /** @class */ (function () {
                function InterComponentCommunicationService() {
                    this.isChecklistBtnVisible = false;
                    this.simulationLastActiveStep = 0;
                    this.shouldScrollToTopPageOnHomePage = false;
                }
                InterComponentCommunicationService.prototype.showChecklistBtn = function (checklistAnchor) {
                    this.isChecklistBtnVisible = true;
                    this.checklistAnchor = checklistAnchor;
                };
                InterComponentCommunicationService.prototype.setViewportScrollAnchor = function (viewportScrollAnchor) {
                    this.viewportScrollAnchor = viewportScrollAnchor;
                };
                InterComponentCommunicationService.prototype.setUpSimulationStep = function (stepNumber) {
                    this.simulationLastActiveStep = stepNumber;
                };
                InterComponentCommunicationService.prototype.setShouldScrollToTopPageOnHomePage = function (shouldScrollToTopPageOnHomePage) {
                    this.shouldScrollToTopPageOnHomePage = shouldScrollToTopPageOnHomePage;
                };
                return InterComponentCommunicationService;
            }());
            InterComponentCommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], InterComponentCommunicationService);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/service/simulation-control.service.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/modules/simulation/service/simulation-control.service.ts ***!
          \**************************************************************************/
        /*! exports provided: SimulationControlService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationControlService", function () { return SimulationControlService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/shared-module/components/loader/loader.component */ "./src/app/modules/shared-module/components/loader/loader.component.ts");
            var SimulationControlService = /** @class */ (function () {
                function SimulationControlService(httpClient) {
                    this.httpClient = httpClient;
                }
                SimulationControlService.prototype.prepareHeaders = function () {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
                };
                SimulationControlService.prototype.getSimulationResultsByInstallment$ = function (simpleSimulationRequest) {
                    var headers = this.prepareHeaders();
                    _app_modules_shared_module_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"].show();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.installment);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.installment, simpleSimulationRequest, { headers: headers });
                    }
                };
                SimulationControlService.prototype.getSimulationResultsByLoan$ = function (simpleSimulationRequest) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.loan);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.loan, simpleSimulationRequest, { headers: headers });
                    }
                };
                SimulationControlService.prototype.saveSimulation = function (result) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.save);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulatorUrl.save, result, { headers: headers });
                    }
                };
                SimulationControlService.prototype.sendMailByInstallment$ = function (simulationResultsWithEmailBody) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulation.emailUrl.installment);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulation.emailUrl.installment, simulationResultsWithEmailBody, { headers: headers });
                    }
                };
                SimulationControlService.prototype.sendMailByByLoan$ = function (simulationResultsWithEmailBody) {
                    var headers = this.prepareHeaders();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].checklist.isMock) {
                        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulation.emailUrl.loan);
                    }
                    else {
                        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].simulation.emailUrl.loan, simulationResultsWithEmailBody, { headers: headers });
                    }
                };
                return SimulationControlService;
            }());
            SimulationControlService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SimulationControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SimulationControlService);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/service/simulation.service.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/modules/simulation/service/simulation.service.ts ***!
          \******************************************************************/
        /*! exports provided: SimulationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationService", function () { return SimulationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_modules_simulation_model_SimulationResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/simulation/model/SimulationResult */ "./src/app/modules/simulation/model/SimulationResult.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _app_modules_simulation_service_simulation_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/simulation/service/simulation-control.service */ "./src/app/modules/simulation/service/simulation-control.service.ts");
            /* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
            /* harmony import */ var _app_modules_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/contact/service/contact.service */ "./src/app/modules/contact/service/contact.service.ts");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/shared-module/services/i18n/translation-loader.service */ "./src/app/modules/shared-module/services/i18n/translation-loader.service.ts");
            var SimulationService = /** @class */ (function () {
                function SimulationService(simulationControlService, storage, contactService, translate, translationLoader) {
                    var _this = this;
                    this.simulationControlService = simulationControlService;
                    this.storage = storage;
                    this.contactService = contactService;
                    this.translate = translate;
                    this.translationLoader = translationLoader;
                    this.simulationResult = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _app_modules_simulation_model_SimulationResult__WEBPACK_IMPORTED_MODULE_2__["SimulationResult"]([]));
                    this.currentSimulationResult = this.simulationResult.asObservable();
                    // simulationParameters: SimulationRequestDto;
                    this.simulationParameters = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
                    this.currentSimulationParameters = this.simulationParameters.asObservable();
                    this.translate.use('pl');
                    this.translationLoader.loadTranslations();
                    this.currentSimulationResult.subscribe(function (data) { return _this.simulationResultsToSend = data; });
                    this.currentSimulationParameters.subscribe(function (data) { return _this.simulationParametersToShare = data; });
                }
                SimulationService.prototype.recaluculate = function (simulationParameters) {
                    this.simulationParameters.next(simulationParameters);
                    if (simulationParameters.installmentMonthlyAmount) {
                        return this.simulationControlService.getSimulationResultsByInstallment$(this.simulationParametersToShare);
                    }
                    else {
                        return this.simulationControlService.getSimulationResultsByLoan$(this.simulationParametersToShare);
                    }
                };
                SimulationService.prototype.getSimulationResults$ = function (simulationInput) {
                    var simulationParameters = this.mapSimulationInputToDataToSend(simulationInput);
                    this.simulationParameters.next(simulationParameters);
                    if (this.simulationParametersToShare.installmentMonthlyAmount) {
                        return this.simulationControlService.getSimulationResultsByInstallment$(this.simulationParametersToShare);
                    }
                    else {
                        return this.simulationControlService.getSimulationResultsByLoan$(this.simulationParametersToShare);
                    }
                };
                SimulationService.prototype.saveResults = function (currentSimulationResult) {
                    this.simulationResult.next(currentSimulationResult);
                };
                SimulationService.prototype.saveSimulationResult$ = function (leadId) {
                    if (this.simulationParametersToShare.installmentMonthlyAmount) {
                        var resultWithInput = {
                            simulations: this.simulationResultsToSend,
                            simpleSimulationWithInstallmentMonthlyAmount: this.simulationParametersToShare,
                            leadId: leadId
                        };
                        return this.simulationControlService.saveSimulation(resultWithInput);
                    }
                    else {
                        var resultWithInput = {
                            simulations: this.simulationResultsToSend,
                            simpleSimulationWithTotalLoanAmount: this.simulationParametersToShare,
                            leadId: leadId
                        };
                        return this.simulationControlService.saveSimulation(resultWithInput);
                    }
                };
                SimulationService.prototype.mapSimulationInputToDataToSend = function (simulationInput) {
                    var simpleSimulationRequestToSend = {
                        loanTermInYears: simulationInput.loanTermInYears,
                        familySize: simulationInput.familySize,
                        totalIncomeAmount: simulationInput.totalIncomeAmount,
                        totalCostOfLiving: simulationInput.totalCostOfLiving,
                        totalCostOfLiabilitiesLoan: simulationInput.totalCostOfLiabilitiesLoan,
                        totalCostOfLiabilitiesCreditCards: simulationInput.totalCostOfLiabilitiesCreditCards,
                        expectedContributionAmount: simulationInput.expectedContributionAmount,
                    };
                    if (simulationInput.installmentMonthlyAmount) {
                        return {
                            simpleSimulationRequest: simpleSimulationRequestToSend,
                            installmentMonthlyAmount: simulationInput.installmentMonthlyAmount
                        };
                    }
                    else {
                        return {
                            simpleSimulationRequest: simpleSimulationRequestToSend,
                            totalLoanAmount: simulationInput.totalLoanAmount
                        };
                    }
                };
                SimulationService.prototype.sendSimulation$ = function (recipient) {
                    var _this = this;
                    var interestRate = this.simulationResultsToSend.simulations[0].interestRate; // Każda symulacja ma ten sam.
                    var simulationResponses = [];
                    var translatedVariantName;
                    this.simulationResultsToSend.simulations.forEach((function (simulation) {
                        _this.translate.get('SimulatorResults.switch').subscribe(function (translated) {
                            translatedVariantName = translated[simulation.simulationVariant.toLocaleLowerCase()];
                        });
                        simulationResponses.push({
                            simulationName: translatedVariantName,
                            simulationVariant: simulation.simulationVariant,
                            installmentMonthlyAmount: simulation.installmentMonthlyAmount,
                            propertyValue: simulation.propertyValue,
                            loanAmount: simulation.loanAmount,
                            numberOfInstallmentsInYears: simulation.numberOfInstallmentsInYears,
                            maxLoanCapability: simulation.maxLoanCapability,
                        });
                    }));
                    var simulationsToSend = this.createSimulationResultsWithEmailBody(interestRate, simulationResponses, recipient);
                    if (this.simulationParametersToShare.installmentMonthlyAmount) {
                        return this.simulationControlService.sendMailByInstallment$(simulationsToSend);
                    }
                    else {
                        return this.simulationControlService.sendMailByByLoan$(simulationsToSend);
                    }
                };
                SimulationService.prototype.saveLead = function (leadData) {
                    return this.contactService.saveLead(leadData);
                };
                SimulationService.prototype.createSendSimpleSimulationByMailRequest = function (simpleSimulationWithAdditionalParameters) {
                    if (this.simulationParametersToShare.installmentMonthlyAmount) {
                        return {
                            simpleSimulationWithAdditionalParameters: simpleSimulationWithAdditionalParameters,
                            installmentMonthlyAmount: this.simulationParametersToShare.installmentMonthlyAmount
                        };
                    }
                    else {
                        return {
                            simpleSimulationWithAdditionalParameters: simpleSimulationWithAdditionalParameters,
                            totalLoanAmount: this.simulationParametersToShare.totalLoanAmount
                        };
                    }
                };
                SimulationService.prototype.createSimulationResultsWithEmailBody = function (interestRate, simulationResponses, recipient) {
                    var simpleSimulationWithAdditionalParameters = {
                        simpleSimulationRequest: this.simulationParametersToShare.simpleSimulationRequest,
                        interestRate: interestRate
                    };
                    var simpleSimulationToSentByMailRequest = this.createSendSimpleSimulationByMailRequest(simpleSimulationWithAdditionalParameters);
                    var result = {
                        simulationResponses: simulationResponses,
                        simulationRequest: simpleSimulationToSentByMailRequest
                    };
                    var emailParams = {
                        simulationsLength: simulationResponses.length
                    };
                    return {
                        body: emailParams,
                        simulations: result,
                        recipient: recipient
                    };
                };
                return SimulationService;
            }());
            SimulationService.ctorParameters = function () { return [
                { type: _app_modules_simulation_service_simulation_control_service__WEBPACK_IMPORTED_MODULE_4__["SimulationControlService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"],] }] },
                { type: _app_modules_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
                { type: _app_modules_shared_module_services_i18n_translation_loader_service__WEBPACK_IMPORTED_MODULE_8__["TranslationLoaderService"] }
            ]; };
            SimulationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"]))
            ], SimulationService);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/simulation-routing.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/modules/simulation/simulation-routing.module.ts ***!
          \*****************************************************************/
        /*! exports provided: SimulationRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationRoutingModule", function () { return SimulationRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/modules/simulation/components/index.ts");
            var simulationOutlet = 'simulationOutlet';
            var routes = [
                {
                    path: 'simulation',
                    component: _components__WEBPACK_IMPORTED_MODULE_3__["SimulationHomeComponent"],
                    outlet: simulationOutlet
                },
                {
                    path: 'simulation/installment',
                    component: _components__WEBPACK_IMPORTED_MODULE_3__["SimulationPathComponent"],
                    outlet: simulationOutlet
                },
                {
                    path: 'simulation/loan-amount',
                    component: _components__WEBPACK_IMPORTED_MODULE_3__["SimulationPathComponent"],
                    outlet: simulationOutlet
                },
                {
                    path: 'simulation/sendSimulation',
                    component: _components__WEBPACK_IMPORTED_MODULE_3__["SimulationSendComponent"],
                    outlet: simulationOutlet
                },
                {
                    path: 'simulation/sendSimulationSuccess',
                    component: _components__WEBPACK_IMPORTED_MODULE_3__["SimulationSentComponent"],
                    outlet: simulationOutlet
                }
            ];
            var SimulationRoutingModule = /** @class */ (function () {
                function SimulationRoutingModule() {
                }
                return SimulationRoutingModule;
            }());
            SimulationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SimulationRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/simulation/simulation.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/modules/simulation/simulation.module.ts ***!
          \*********************************************************/
        /*! exports provided: SimulationModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationModule", function () { return SimulationModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_modules_simulation_simulation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/simulation/simulation-routing.module */ "./src/app/modules/simulation/simulation-routing.module.ts");
            /* harmony import */ var _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/simulation//components */ "./src/app/modules/simulation/components/index.ts");
            /* harmony import */ var _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/shared-module/shared.module */ "./src/app/modules/shared-module/shared.module.ts");
            /* harmony import */ var _shared_module_pipes_space_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared-module/pipes/space.pipe */ "./src/app/modules/shared-module/pipes/space.pipe.ts");
            var SimulationModule = /** @class */ (function () {
                function SimulationModule() {
                }
                return SimulationModule;
            }());
            SimulationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationHomeComponent"],
                        _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationPathComponent"],
                        _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationResultsComponent"],
                        _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationSendComponent"],
                        _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationSentComponent"],
                        _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationBaseComponent"],
                        _app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationFormModalComponent"]
                    ],
                    entryComponents: [_app_modules_simulation_components__WEBPACK_IMPORTED_MODULE_4__["SimulationFormModalComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _app_modules_simulation_simulation_routing_module__WEBPACK_IMPORTED_MODULE_3__["SimulationRoutingModule"],
                        _app_modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    ],
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _shared_module_pipes_space_pipe__WEBPACK_IMPORTED_MODULE_6__["SpacePipe"]]
                })
            ], SimulationModule);
            /***/ 
        }),
        /***/ "./src/assets/parameters/systemParameters.ts": 
        /*!***************************************************!*\
          !*** ./src/assets/parameters/systemParameters.ts ***!
          \***************************************************/
        /*! exports provided: loanLimit, simulationParameters */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loanLimit", function () { return loanLimit; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simulationParameters", function () { return simulationParameters; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var loanLimit = 699999;
            var simulationParameters = {
                minInstallment: 300,
                maxInstallment: 20000,
                mintotalLoanAmount: 50000,
                maxtotalLoanAmount: 4000000,
                minLoanTermInYears: 1,
                maxLoanTermInYears: 30,
                minExpectedContributionAmount: 0,
                maxExpectedContributionAmount: 4000000,
                minFamilySize: 1,
                maxFamilySize: 10,
                minTotalIncomeAmount: 1500,
                maxTotalIncomeAmount: 200000,
                minTotalCostOfLiving: 100,
                maxTotalCostOfLiving: 50000,
                minTotalCostOfLiabilitiesLoan: 0,
                maxTotalCostOfLiabilitiesLoan: 100000,
                minTotalCostOfLiabilitiesCards: 0,
                maxTotalCostOfLiabilitiesCards: 200000
            };
            /***/ 
        }),
        /***/ "./src/assets/translations/pl.json": 
        /*!*****************************************!*\
          !*** ./src/assets/translations/pl.json ***!
          \*****************************************/
        /*! exports provided: Global, Validations, Navigation, Footer, Contact, ContactConfirmation, ContactForm, Simulator, SimulatorResults, SimulatorNoResults, SimulationSend, SimulationSent, Checklist, ChecklistResults, ChecklistSend, ChecklistSent, Login, default */
        /***/ (function (module) {
            module.exports = JSON.parse("{\"Global\":{\"yes\":\"Tak\",\"no\":\"Nie\",\"header\":\"Kredyt hipoteczny\",\"language\":\"Język\",\"Btn\":{\"change\":\"Zmień\",\"next\":\"Dalej\",\"back\":\"Wróć\",\"submit\":\"Zatwierdź\",\"remove\":\"Usuń\",\"send\":\"Zapisz i wyślij\",\"simulationUpdate\":\"Aktualizuj symulacje\",\"checklist\":\"Sprawdź dokumenty do wniosku kredytowego\",\"backToSimulation\":\"Wróć do kalkulatora\",\"getChecklist\":\"Dalej\"},\"toggler\":{\"moreLabel\":\"Więcej\",\"lessLabel\":\"Zwiń\"},\"MethodUnavailableSend\":\"Niestety nie możemy wysłać wiadomości. Sprawdź, czy podany adres email jest poprawny.<br>Jeżeli tak, przepraszamy, niestety nasz serwis jest chwilowo niedostępny. Prosimy spróbować ponownie za chwilę.\",\"MethodUnavailable\":\"Przepraszamy, niestety nasz serwis jest chwilowo niedostępny. Prosimy spróbować ponownie za chwilę.\"},\"Validations\":{\"email\":\"Podano niepoprawny adres email\",\"phone\":\"Podano niepoprawny numer telefonu\",\"firstName\":\"Podano nieprawidłowe dane\",\"lastName\":\"Podano nieprawidłowe dane\",\"minLength\":\"Liczba znaków musi być większa niż {{number}}\",\"maxLength\":\"Liczba znaków nie może przekraczać {{number}}\",\"min\":\"Wartość nie powinna być niższa niż {{number}}\",\"max\":\"Wartość nie powinna być wyższa niż {{number}}\",\"required\":\"Pole wymagane\"},\"Navigation\":{\"simulator\":\"Symulator\",\"checklist\":\"Dokumenty do wniosku\"},\"Footer\":{\"info\":\"Zostaw swoje dane. Oddzwonimy\",\"contactLink\":\"Formularz kontaktowy\"},\"Contact\":{\"header\":\"Wypełnij formularz\",\"info\":\"Oddzwonimy i przedstawimy Ci ofertę\",\"send\":\"Wyślij\"},\"ContactConfirmation\":{\"header\":\"Szanowny Kliencie,\",\"info\":\"dziękujemy za przesłanie wiadomości.<p>Nasz doradca oddzwoni, aby przedstawić Ci szczegóły oferty i odpowiedzieć na wszystkie Twoje pytania.</p><p>Pozdrawiamy,</p><p>Zespół BNP Paribas Bank Polska SA</p>\"},\"ContactForm\":{\"fields\":{\"firstName\":{\"label\":\"Imię\"},\"lastName\":{\"label\":\"Nazwisko\"},\"email\":{\"label\":\"E-mail\"},\"phoneNumber\":{\"label\":\"Telefon komórkowy\"}},\"consents\":{\"selectAll\":\"Akceptuje wszystkie zgody\",\"marketingConsent\":{\"labelShort\":\"Wyrażam zgodę na przetwarzanie moich danych osobowych dla celów marketingowych Banku...\",\"label\":\"Wyrażam zgodę, na przetwarzanie moich danych osobowych podanych w powyższym formularzu przez BNP Paribas Bank Polska S.A. z siedzibą w Warszawie przy ul. Kasprzaka 10/16 („Bank”) jako administratora danych w celu prowadzenia marketingu, w tym przekazywania mi informacji o produktach i usługach oferowanych przez Bank.\"},\"digitalMarketingConsent\":{\"labelShort\":\"Wyrażam zgodę na przekazywanie treści marketingowych z wykorzystaniem wiadomości SMS oraz email...\",\"label\":\"Wyrażam zgodę, zgodnie z ustawą z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną na otrzymywanie drogą elektroniczną informacji stanowiących informacje handlowe w rozumieniu ww. ustawy, w tym wiadomości SMS oraz email, dotyczących nowych produktów, usług, promocji produktów Banku oraz usług podmiotów wchodzących w skład grupy kapitałowej, do której należy Bank. Szczegółowy wykaz danych dotyczących tej grupy znajduje się na stronie internetowej Banku (https://www.bnpparibas.pl/korporacje/oferta-grupy-bnp/podmioty-bnp-paribas-w-polsce) oraz w oddziałach Banku.\"},\"offerPresentationConsent\":{\"labelShort\":\"Wyrażam zgodę na przekazywanie mi informacji o ofercie podmiotów grupy kapitałowej...\",\"label\":\"Wyrażam zgodę na przetwarzanie moich danych przez Bank w celu przekazywania informacji dotyczących ofert lub promocji produktów i usług podmiotów wchodzących w skład grupy kapitałowej, do której należy Bank. zarówno w okresie obowiązywania umowy, jak i po jej wygaśnięciu. Szczegółowy wykaz danych dotyczących tej grupy znajduje się na stronie internetowej Banku (https://www.bnpparibas.pl/korporacje/oferta-grupy-bnp/podmioty-bnp-paribas-w-polsce) oraz w oddziałach Banku.\"},\"digitalOfferPresentationConsent\":{\"labelShort\":\"Wyrażam zgodę na przekazywanie treści marketingowych z wykorzystaniem telefonu...\",\"label\":\"Wyrażam zgodę, zgodnie z ustawą z dnia 16 lipca 2004 r. Prawo telekomunikacyjne na przedstawianie przez Bank drogą telefoniczną informacji dotyczących ofert lub promocji produktów i usług oferowanych przez Bank.\"}}},\"Simulator\":{\"step0\":{\"header\":\"\",\"info\":\"<p>Masz już wybraną nieruchomość i <strong>chcesz poznać szczegóły jej finansowania?</strong><br/>A może wiesz już, jaką chcesz płacić ratę i <strong>zastanawiasz się, na jaką nieruchomość Cię stać?</strong></p><p>Skorzystaj z naszego symulatora kredytu hipotecznego i dowiedz się już teraz.</p>\",\"goToInstallmenPath\":\"<strong>Wiem, jaką chcę płacić <span class='app-accent'>ratę kredytu</span></strong>\",\"goToLoanPath\":\"<strong>Wiem, jaką chcę <span class='app-accent'>kwotę kredytu</span></strong>\",\"goToInstallmenPathBtn\":\"Rozpocznij symulację\",\"goToLoanPathBtn\":\"Rozpocznij symulację\"},\"step1\":{\"label\":\"krok 1\",\"headerText\":\"Kredyt\"},\"step2\":{\"label\":\"krok 2\",\"headerText\":\"Twoja rodzina\"},\"step3\":{\"label\":\"krok 3\",\"headerText\":\"Wynik symulacji\"},\"fields\":{\"installmentMonthlyAmount\":{\"label\":\"Chcę płacić miesięczną ratę w wysokości (zł):\",\"placeholder\":\"np. 1 200\",\"description\":\"min {{min}} zł, max {{max}} zł\",\"tooltip\":\"Wysokość raty, która co miesiąc zostanie pobrana z Twojego ROR jako spłata kredytu mieszkaniowego.\"},\"loanTermInYears\":{\"label\":\"Chcę spłacać kredyt przez okres (liczony w latach):\",\"placeholder\":\"np. 20\",\"description\":\"max {{max}}\",\"tooltip\":\"Podaj liczbę lat, przez które chcesz spłacić kredyt mieszkaniowy.\"},\"expectedContributionAmount\":{\"label\":\"Posiadam wkład własny w wysokości (zł):\",\"placeholder\":\"\",\"description\":\"\",\"tooltip\":\"Konieczny będzie minimalny udział własnych środków w wysokości 20% ceny za jaką kupujesz / budujesz nieruchomość.\"},\"familySize\":{\"label\":\"Moja rodzina liczy (liczba osób):\",\"placeholder\":\"\",\"description\":\"\",\"tooltip\":\"Liczba osób w Twoim gospodarstwie domowym, uzyskujących dochód oraz nie pracujących (np. dzieci).\"},\"totalIncomeAmount\":{\"label\":\"Łączny dochód gospodarstwa (zł):\",\"placeholder\":\"\",\"description\":\"min {{min}} zł, max {{max}} zł\",\"tooltip\":\"Dochód gospodarstwa jest to dochód netto, który trafia na Twój rachunek bankowy. Podaj średnią z 3 miesięcy (uwględnij również premie jeśli otrzymujesz).\"},\"totalCostOfLiving\":{\"label\":\"Łączne koszty utrzymania rodziny (zł):\",\"placeholder\":\"\",\"description\":\"\",\"tooltip\":\"Łączne miesięczne stałe koszty utrzymania, które ponosi Twoje gospodarstwo domowe z tytułu rachunków: za telefon, internet, wodę, prąd, czynsz itp.\"},\"totalCostOfLiabilitiesLoan\":{\"label\":\"Łączny koszt zobowiązań z tytułu kredytów ratalnych (zł):\",\"placeholder\":\"\",\"description\":\"\",\"tooltip\":\"Suma miesięcznych rat, które spłacają członkowie Twojego gospodarstwa domowego (np.: za telewizor, kredyty  mieszkaniowe, pożyczki itp.)\"},\"totalCostOfLiabilitiesCreditCards\":{\"label\":\"Łączna wysokość limitów z tytułu kart kredytowych i debetowych (zł):\",\"placeholder\":\"\",\"description\":\"\",\"tooltip\":\"Suma wszystkich limitów debetowych / w ROR / kart kredytowych, które posiadają członkowie Twojego gospodarstwa domowego.\"},\"totalLoanAmount\":{\"label\":\"Chce wnioskować o kredyt w wysokości (zł):\",\"placeholder\":\"\",\"description\":\"min {{min}} zł, max {{max}} zł\",\"tooltip\":\"\"}}},\"SimulatorResults\":{\"info\":\"<p>Poniżej znajduje się <strong>wynik Twojej symulacji</strong>. Możesz edytować wartości i obserwować, jak zmieniają się wyniki symulacji.<br /><strong>Znajdź wariant optymalny dla siebie</strong> i łatwo porównaj go z innymi ofertami.<p><strong>Chcesz otrzymać podsumowanie Twojej symulacji w wersji elektronicznej?</strong> Kliknij \\\"Zapisz i wyślij\\\" i wypełnij formularz, a my prześlemy je na Twoją skrzynkę e-mail.</p>\",\"infoTextBottom\":\"Symulacja ma charakter orientacyjny\",\"warningReducedInstallment\":\"Biorąc pod uwagę Twoje możliwości finansowe musieliśmy obniżyć maksymalną kwotę raty.\",\"warningReducedLoan\":\"Biorąc pod uwagę Twoje możliwości finansowe musieliśmy obniżyć maksymalną kwotę kredytu.\",\"warningLowOwnContribution\":\"Podana kwota wkładu własnego jest za niska.\",\"switch\":{\"optimal\":\"Twoja symulacja\",\"quick\":\"Szybka spłata\",\"safe\":\"Bezpieczna rata\"},\"option\":{\"installment\":\"Rata\",\"zł\":\"zł\",\"installmentTerm\":\"Okres kredytowania\",\"term1\":\"rok\",\"term2\":\"lata\",\"term\":\"lat\",\"loan\":\"Kwota kredytu\"},\"panel\":{\"changeParameters\":\"Edycja parametrów kredytu\",\"parameters\":{\"interestRate\":\"Oprocentowanie kredytu (% w skali roku)\",\"maxLoanCapability\":\"Maksymalna zdolność kredytowa (zł)\",\"maxPropertyValue\":\"Maksymalna cena zakupu nieruchomości (zł)\"}}},\"SimulatorNoResults\":{\"info\":\"<p>Wynik Twojej symulacji <strong>nie jest w tej chwili dostępny.</strong></p>\",\"waringInfo\":\"Wygląda na to, że przy podanych parmaterach niestety nie posiadasz zdolności kredytowej. <strong>Zweryfikuj ponownie dane i zaktaulizuj je,</strong> aby poznać wyniki symulacji.\"},\"SimulationSend\":{\"header\":\"Wypełnij formularz\",\"info\":\"Prześlemy na Twoją skrzynkę e-mail z wynikiem zapisanej symulacji kredytowej.\",\"send\":\"Wyślij\"},\"SimulationSent\":{\"header\":\"\",\"info\":\"<p>Dziękujemy za wypełnienie formularza.</p><p>E-mail z wynikami Twojej symulacji powinien niebawem pojawić się na Twojej skrzynce.<br/>W razie jego braku sprawdź również folder \\\"SPAM\\\".</p>\",\"newSimulation\":\"Wykonaj ponownie symulację kredytu\",\"goToChecklist\":\"Wygeneruj listę dokumentów\"},\"Checklist\":{\"step0\":{\"header\":\"\",\"info\":\"Wiemy, że <strong>skompletowanie dokumentów kredytowych bywa czasem żmudne</strong> i nierzadko wiąże się nawet z kilkoma wizytami w oddziale.<br><br> Szanujemy Twój czas i dlatego <strong>postanowiliśmy ten proces zdecydowanie uprościć. </strong> Opowiedz nam swoją historię, a my przedstawimy Ci listę tylko tych dokumentów, które będą potrzebne do złożenia Twojego wniosku kredytowego.\",\"start\":\"Rozpocznij\"},\"step1\":{\"label\":\"krok 1\",\"headerText\":\"Kwota kredytu\"},\"step2\":{\"label\":\"krok 2\",\"headerText\":\"Cel kredytu\"},\"step3\":{\"label\":\"krok 3\",\"headerText\":\"Wnioskujący\"},\"step4\":{\"label\":\"krok 4\",\"headerText\":\"Lista dokumentów\"}},\"ChecklistResults\":{\"header\":\"\",\"info\":\"<p>Gratulujemy! Poniżej znajduje się <strong>lista dokumentów kredytowych, które będą wymagane do złożenia Twojego wniosku. Finalna lista dokumentów może ulec zmianie, np. w wyniku zmiany oferty produktowej Banku.</strong></p><p><strong>Chcesz otrzymać tę listę na swój e-mail? </strong>Kliknij \\\"Zapisz i wyślij\\\" i wypełnij formularz. My prześlemy ją na Twoją pocztę elektroniczną, a nasz Doradca skontaktuje się z Tobą, aby ustalić finalną listę dokumentów.</p>\",\"sections\":{\"showDocumentList\":\"Pokaż listę dokumentów\",\"hideDocumentList\":\"Ukryj listę dokumentów\",\"applicants\":{\"label\":\"Wnioskujący\",\"main\":\"(główny)\",\"next\":\"(kolejny)\"},\"purposes\":{\"label\":\"Cel kredytu\",\"main\":\"(podstawowy)\",\"next\":\"(dodatkowy)\"}},\"send\":\"Zapisz i wyślij\",\"edit\":\"Zmień\",\"goBack\":\"Wróć\",\"documentsInSectionAbove\":\"Lista dokumentów jest pokazana w sekcji powyżej\"},\"ChecklistSend\":{\"header\":\"Wypełnij formularz\",\"info\":\"Prześlemy na Twoją skrzynkę e-mail pełną listę wymaganych dokumentów kredytowych.\",\"send\":\"Wyślij\"},\"ChecklistSent\":{\"header\":\"\",\"info\":\"<p>Dziękujemy za wypełnienie formularza.</p><p>E-mail z listą dokumentów kredytowych powinien niebawem pojawić się na Twojej skrzynce.<br/>W razie jego braku sprawdź również folder \\\"SPAM\\\".</p>\",\"next\":\"Wygeneruj ponownie listę dokumentów\",\"makeCalculation\":\"Wykonaj symulację kredytu\"},\"Login\":{\"button\":\"Zaloguj\",\"incorrectAuthentication\":\"Niepoprawny login lub hasło\",\"loginForm\":{\"fields\":{\"login\":{\"label\":\"Użytkownik\"},\"password\":{\"label\":\"Hasło\"}}}}}");
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var API_URL = 'https://simulator-zzsh7nvnra-ew.a.run.app';
            var environment = {
                production: false,
                contact: {
                    isMock: true,
                    saveLead: "assets/fakeAPI/leadSaveResponse.json",
                },
                simulation: {
                    emailUrl: {
                        installment: "assets/fakeAPI/simulationSendEmailResponse.json",
                        loan: "assets/fakeAPI/simulationSendEmailResponse.json",
                    },
                    recipient: 'kwitkowski@software.altkom.pl'
                },
                simulatorUrl: {
                    installment: 'assets/fakeAPI/simulationRequestInstallment.json',
                    loan: 'assets/fakeAPI/simulationRequestInstallment.json',
                    save: "assets/fakeAPI/simulationSaveResponse.json",
                    isMock: true,
                },
                checklist: {
                    isMock: true,
                    url: "assets/fakeAPI/checklist.json",
                    saveUrl: 'assets/fakeAPI/checklistSaveResponse.json',
                    emailUrl: 'assets/fakeAPI/checklistSendViaEmailResponse.json',
                    from: 'kwitkowski@software.altkom.pl',
                    replyTo: 'kwitkowski@software.altkom.pl'
                },
                user: {
                    isMock: true,
                    authenticationUrl: 'http://ho-checklist.app.c6-ref.fortisbank.com.pl/brokerAuth'
                },
                methodTimeoutInMillis: 5000,
                recalculationTimeoutInMillis: 1000,
                timeInMinutesTillSessionExpired: 2,
                rodoInformationURL: 'https://www.bnpparibas.pl/repozytorium/rodo'
            };
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
            /* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_5__);
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\achroscielewska\_PROJEKTY\BNP_PROJEKTY\HO\mortgage-online-simulator-checklist-web\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map