(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-storage-web-storage-module"],{

/***/ "./src/app/web-storage/first/first.component.html":
/*!********************************************************!*\
  !*** ./src/app/web-storage/first/first.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<input type=\"text\" #firstName placeholder=\"First Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #lastName placeholder=\"Last Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #address placeholder=\"Address\"> <br>\n\t<button class=\"submit mt-5px\" (click)=\"storeAndEnable(firstName.value, lastName.value, address.value)\"> Store data and Enable Second Component </button>\n</div>\n\n<div *ngIf=\"componentEnabled\" class=\"component-container mt-5px\">\n\tSecond Component <br>\n\t<app-second></app-second>\n</div>\n"

/***/ }),

/***/ "./src/app/web-storage/first/first.component.ts":
/*!******************************************************!*\
  !*** ./src/app/web-storage/first/first.component.ts ***!
  \******************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
        this.componentEnabled = false; //initialize variable
    };
    FirstComponent.prototype.storeAndEnable = function (firstName, lastname, address) {
        sessionStorage.setItem('firstName', firstName); //store form data into sessionStorage
        sessionStorage.setItem('lastName', lastname);
        sessionStorage.setItem('address', address);
        this.componentEnabled = true; //enable SecondComponent					
    };
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/web-storage/first/first.component.html")
        })
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/web-storage/second/second.component.html":
/*!**********************************************************!*\
  !*** ./src/app/web-storage/second/second.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<b> Session Data </b> <br>\n\tFirst Name: {{ data.firstName }} <br>\n\tLast Name: {{ data.lastName }} <br>\n\tAddress: {{ data.address }} <br>\n</div>"

/***/ }),

/***/ "./src/app/web-storage/second/second.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web-storage/second/second.component.ts ***!
  \********************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondComponent = /** @class */ (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
        this.data = {
            firstName: sessionStorage.getItem('firstName'),
            lastName: sessionStorage.getItem('lastName'),
            address: sessionStorage.getItem('address')
        };
    };
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/web-storage/second/second.component.html")
        })
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/web-storage/web-storage-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/web-storage/web-storage-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WebStorageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageRoutingModule", function() { return WebStorageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_storage_web_storage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-storage/web-storage.component */ "./src/app/web-storage/web-storage/web-storage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _web_storage_web_storage_component__WEBPACK_IMPORTED_MODULE_2__["WebStorageComponent"] }
];
var WebStorageRoutingModule = /** @class */ (function () {
    function WebStorageRoutingModule() {
    }
    WebStorageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WebStorageRoutingModule);
    return WebStorageRoutingModule;
}());



/***/ }),

/***/ "./src/app/web-storage/web-storage.module.ts":
/*!***************************************************!*\
  !*** ./src/app/web-storage/web-storage.module.ts ***!
  \***************************************************/
/*! exports provided: WebStorageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageModule", function() { return WebStorageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web_storage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-storage-routing.module */ "./src/app/web-storage/web-storage-routing.module.ts");
/* harmony import */ var _web_storage_web_storage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-storage/web-storage.component */ "./src/app/web-storage/web-storage/web-storage.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first/first.component */ "./src/app/web-storage/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second/second.component */ "./src/app/web-storage/second/second.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WebStorageModule = /** @class */ (function () {
    function WebStorageModule() {
    }
    WebStorageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _web_storage_routing_module__WEBPACK_IMPORTED_MODULE_2__["WebStorageRoutingModule"]
            ],
            declarations: [
                _web_storage_web_storage_component__WEBPACK_IMPORTED_MODULE_3__["WebStorageComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_4__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_5__["SecondComponent"]
            ]
        })
    ], WebStorageModule);
    return WebStorageModule;
}());



/***/ }),

/***/ "./src/app/web-storage/web-storage/web-storage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/web-storage/web-storage/web-storage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n\t<button class=\"navigation\" (click)=\"previousPage()\"> Previous </button>\n\t<button class=\"navigation\" (click)=\"nextPage()\"> Next </button>\n</div>\n<div class=\"px-20px\">\n\t<h3 class=\"text-center\"> 2. Web Storage </h3>\n\t<p>\n\t\tWith <a class=\"no-break\" href=\"https://en.wikipedia.org/wiki/Web_storage\" target=\"_blank\">Web Storage</a>, we can store variables \n\t\tlocally in browser. There are two mechanisms to do it, <i> sessionStorage </i> and <i>localStorage</i>. While in\n\t\t<i> sessionStorage </i> data are stored as long as the tab is open, in <i> localStorage </i> data are stored forever. So I chose \n\t\t<i> sessionStorage </i> to use for this example, because there is no way we will end up with junk in our browser \n\t\tlocal storage.\n\t</p>\n\t<p>\n\t\t<b class=\"red-letters\"> Cons: </b> 1) We can only store strings, 2) If the components run at the same time, there is no way for the \n\t\trecipient to be notified when the sender sends the message in order to update itself. \n\t</p>\n\t\n\t<div class=\"component-container mt-5px\">\n\t\tFirst Component <br>\n\t\t<app-first></app-first>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/web-storage/web-storage/web-storage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/web-storage/web-storage/web-storage.component.ts ***!
  \******************************************************************/
/*! exports provided: WebStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageComponent", function() { return WebStorageComponent; });
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



var WebStorageComponent = /** @class */ (function () {
    function WebStorageComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    WebStorageComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight') {
            this.nextPage(); //go to next page
        }
        else if (event.key == 'ArrowLeft') {
            this.previousPage(); //go to previous page
        }
    };
    WebStorageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Web Storage"); //set document title
    };
    WebStorageComponent.prototype.previousPage = function () {
        this.router.navigate(['/sharing-variables']); //navigate to
    };
    WebStorageComponent.prototype.nextPage = function () {
        this.router.navigate(['/url-params']); //navigate to
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']) //when key is pressed
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], WebStorageComponent.prototype, "handleKeyboardEvent", null);
    WebStorageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-storage',
            template: __webpack_require__(/*! ./web-storage.component.html */ "./src/app/web-storage/web-storage/web-storage.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], WebStorageComponent);
    return WebStorageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=web-storage-web-storage-module.js.map