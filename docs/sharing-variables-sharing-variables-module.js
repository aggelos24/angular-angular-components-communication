(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sharing-variables-sharing-variables-module"],{

/***/ "./src/app/sharing-variables/first/first.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sharing-variables/first/first.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<input type=\"text\" [(ngModel)]=\"sharingVariablesService.data.firstName\" placeholder=\"First Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" [(ngModel)]=\"sharingVariablesService.data.lastName\" placeholder=\"Last Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" [(ngModel)]=\"sharingVariablesService.data.address\" placeholder=\"Address\">\n</div>"

/***/ }),

/***/ "./src/app/sharing-variables/first/first.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sharing-variables/first/first.component.ts ***!
  \************************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sharing_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharing-variables.service */ "./src/app/sharing-variables/sharing-variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstComponent = /** @class */ (function () {
    function FirstComponent(sharingVariablesService) {
        this.sharingVariablesService = sharingVariablesService;
    }
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/sharing-variables/first/first.component.html")
        }),
        __metadata("design:paramtypes", [_sharing_variables_service__WEBPACK_IMPORTED_MODULE_1__["SharingVariablesService"]])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/sharing-variables/second/second.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sharing-variables/second/second.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<input type=\"text\" [(ngModel)]=\"sharingVariablesService.data.firstName\" placeholder=\"First Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" [(ngModel)]=\"sharingVariablesService.data.lastName\" placeholder=\"Last Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" [(ngModel)]=\"sharingVariablesService.data.address\" placeholder=\"Address\">\n</div>\n"

/***/ }),

/***/ "./src/app/sharing-variables/second/second.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sharing-variables/second/second.component.ts ***!
  \**************************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sharing_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharing-variables.service */ "./src/app/sharing-variables/sharing-variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondComponent = /** @class */ (function () {
    function SecondComponent(sharingVariablesService) {
        this.sharingVariablesService = sharingVariablesService;
    }
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/sharing-variables/second/second.component.html")
        }),
        __metadata("design:paramtypes", [_sharing_variables_service__WEBPACK_IMPORTED_MODULE_1__["SharingVariablesService"]])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/sharing-variables/sharing-variables-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sharing-variables/sharing-variables-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SharingVariablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingVariablesRoutingModule", function() { return SharingVariablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharing_variables_sharing_variables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharing-variables/sharing-variables.component */ "./src/app/sharing-variables/sharing-variables/sharing-variables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _sharing_variables_sharing_variables_component__WEBPACK_IMPORTED_MODULE_2__["SharingVariablesComponent"] }
];
var SharingVariablesRoutingModule = /** @class */ (function () {
    function SharingVariablesRoutingModule() {
    }
    SharingVariablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SharingVariablesRoutingModule);
    return SharingVariablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/sharing-variables/sharing-variables.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/sharing-variables/sharing-variables.module.ts ***!
  \***************************************************************/
/*! exports provided: SharingVariablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingVariablesModule", function() { return SharingVariablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharing_variables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharing-variables-routing.module */ "./src/app/sharing-variables/sharing-variables-routing.module.ts");
/* harmony import */ var _sharing_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharing-variables.service */ "./src/app/sharing-variables/sharing-variables.service.ts");
/* harmony import */ var _sharing_variables_sharing_variables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sharing-variables/sharing-variables.component */ "./src/app/sharing-variables/sharing-variables/sharing-variables.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first/first.component */ "./src/app/sharing-variables/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second/second.component */ "./src/app/sharing-variables/second/second.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharingVariablesModule = /** @class */ (function () {
    function SharingVariablesModule() {
    }
    SharingVariablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _sharing_variables_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharingVariablesRoutingModule"]
            ],
            declarations: [
                _sharing_variables_sharing_variables_component__WEBPACK_IMPORTED_MODULE_5__["SharingVariablesComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_6__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_7__["SecondComponent"]
            ],
            providers: [_sharing_variables_service__WEBPACK_IMPORTED_MODULE_4__["SharingVariablesService"]]
        })
    ], SharingVariablesModule);
    return SharingVariablesModule;
}());



/***/ }),

/***/ "./src/app/sharing-variables/sharing-variables.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/sharing-variables/sharing-variables.service.ts ***!
  \****************************************************************/
/*! exports provided: SharingVariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingVariablesService", function() { return SharingVariablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharingVariablesService = /** @class */ (function () {
    function SharingVariablesService() {
        this.data = {}; //this is the shared variable
    }
    SharingVariablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SharingVariablesService);
    return SharingVariablesService;
}());



/***/ }),

/***/ "./src/app/sharing-variables/sharing-variables/sharing-variables.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/sharing-variables/sharing-variables/sharing-variables.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n\t<button class=\"navigation\" (click)=\"previousPage()\"> Previous </button>\n\t<button class=\"navigation\" (click)=\"nextPage()\"> Next </button>\n</div>\n<div class=\"px-20px\">\n\t<h3 class=\"text-center\"> 1. Sharing Variables via Service </h3>\n\t<p>\n\t\tThis is the easiest method, we create a service which has the variables we want to be shared between the components. We inject the \n\t\tservice into both components, so when one component changes the variable, the other component will be instantly updated.\n\t</p>\n\t<p>\n\t\t<b class=\"red-letters\"> Con: </b> This method is intended for testing only, because it is not compatible  with \n\t\t<a class=\"no-break\" href=\"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller\" target=\"_blank\"> Model–view–controller </a>\n\t\tarchitectural pattern.\n\t</p>\n\t\n\t<div class=\"component-container mt-5px\">\n\t\tFirst Component <br>\n\t\t<app-first></app-first>\n\t</div>\n\n\t<div class=\"component-container mt-5px\">\n\t\tSecond Component <br>\n\t\t<app-second></app-second>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/sharing-variables/sharing-variables/sharing-variables.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/sharing-variables/sharing-variables/sharing-variables.component.ts ***!
  \************************************************************************************/
/*! exports provided: SharingVariablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingVariablesComponent", function() { return SharingVariablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharingVariablesComponent = /** @class */ (function () {
    function SharingVariablesComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    SharingVariablesComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight') {
            this.nextPage(); //go to next page
        }
        else if (event.key == 'ArrowLeft') {
            this.previousPage(); //go to previous page
        }
    };
    SharingVariablesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Sharing Variables via Service"); //set document title
    };
    SharingVariablesComponent.prototype.previousPage = function () {
        this.router.navigate(['/introduction']); //navigate to
    };
    SharingVariablesComponent.prototype.nextPage = function () {
        this.router.navigate(['/web-storage']); //navigate to
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']) //when key is pressed
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SharingVariablesComponent.prototype, "handleKeyboardEvent", null);
    SharingVariablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sharing-variables',
            template: __webpack_require__(/*! ./sharing-variables.component.html */ "./src/app/sharing-variables/sharing-variables/sharing-variables.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SharingVariablesComponent);
    return SharingVariablesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=sharing-variables-sharing-variables-module.js.map