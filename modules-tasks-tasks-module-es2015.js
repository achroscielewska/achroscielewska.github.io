(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tasks-tasks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tasks/task-list/task-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tasks/task-list/task-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>task-list works!</p>\n");

/***/ }),

/***/ "./src/app/modules/tasks/task-list/task-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/tasks/task-list/task-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGFza3MvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/tasks/task-list/task-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/tasks/task-list/task-list.component.ts ***!
  \****************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskListComponent = class TaskListComponent {
    constructor() { }
    ngOnInit() {
    }
};
TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tasks/task-list/task-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-list.component.scss */ "./src/app/modules/tasks/task-list/task-list.component.scss")).default]
    })
], TaskListComponent);



/***/ }),

/***/ "./src/app/modules/tasks/tasks-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/tasks/tasks-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/modules/tasks/task-list/task-list.component.ts");




const routes = [{ path: '', component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"] }];
let TasksRoutingModule = class TasksRoutingModule {
};
TasksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TasksRoutingModule);



/***/ }),

/***/ "./src/app/modules/tasks/tasks.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/tasks/tasks.module.ts ***!
  \***********************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks-routing.module */ "./src/app/modules/tasks/tasks-routing.module.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/modules/tasks/task-list/task-list.component.ts");





let TasksModule = class TasksModule {
};
TasksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tasks_routing_module__WEBPACK_IMPORTED_MODULE_3__["TasksRoutingModule"]
        ]
    })
], TasksModule);



/***/ })

}]);
//# sourceMappingURL=modules-tasks-tasks-module-es2015.js.map