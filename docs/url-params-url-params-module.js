(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["url-params-url-params-module"],{

/***/ "./src/app/url-params/first/first.component.html":
/*!*******************************************************!*\
  !*** ./src/app/url-params/first/first.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<input type=\"text\" #firstName placeholder=\"First Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #lastName placeholder=\"Last Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #address placeholder=\"Address\"> <br>\n\t<button class=\"submit mt-5px\" (click)=\"storeUrlParameters(firstName.value, lastName.value, address.value)\"> Set Query Parameters </button>\n</div>\n"

/***/ }),

/***/ "./src/app/url-params/first/first.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/url-params/first/first.component.ts ***!
  \*****************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function FirstComponent(router) {
        this.router = router;
    }
    FirstComponent.prototype.storeUrlParameters = function (firstName, lastName, address) {
        this.router.navigate(['/url-params'], //navigate to current page with form data as query parameters
        { queryParams: {
                firstName: firstName,
                lastName: lastName,
                address: address
            } });
    };
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/url-params/first/first.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/url-params/second/second.component.html":
/*!*********************************************************!*\
  !*** ./src/app/url-params/second/second.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<ng-container *ngIf=\"!noData; else elseTemplate\">\n\t\t<b> Data from URL Parameters </b> <br>\n\t\tFirst Name: {{ data.firstName }} <br>\n\t\tLast Name: {{ data.lastName }} <br>\n\t\tAddress: {{ data.address }} <br>\n\t</ng-container>\n\t<ng-template #elseTemplate> No data from URL </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/url-params/second/second.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/url-params/second/second.component.ts ***!
  \*******************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function SecondComponent(route) {
        this.route = route;
        this.data = {}; //variable for storing variables for query parameters
    }
    SecondComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            //subscribe to change of query parameters
            if (Object.keys(params).length != 0) {
                _this.data = params; //update variables
                _this.noData = false;
            }
            else {
                _this.noData = true;
            }
        });
    };
    SecondComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe(); //end subscription
    };
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/url-params/second/second.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/url-params/url-params-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/url-params/url-params-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UrlParamsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParamsRoutingModule", function() { return UrlParamsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _url_params_url_params_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-params/url-params.component */ "./src/app/url-params/url-params/url-params.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _url_params_url_params_component__WEBPACK_IMPORTED_MODULE_2__["UrlParamsComponent"] }
];
var UrlParamsRoutingModule = /** @class */ (function () {
    function UrlParamsRoutingModule() {
    }
    UrlParamsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UrlParamsRoutingModule);
    return UrlParamsRoutingModule;
}());



/***/ }),

/***/ "./src/app/url-params/url-params.module.ts":
/*!*************************************************!*\
  !*** ./src/app/url-params/url-params.module.ts ***!
  \*************************************************/
/*! exports provided: UrlParamsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParamsModule", function() { return UrlParamsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _url_params_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-params-routing.module */ "./src/app/url-params/url-params-routing.module.ts");
/* harmony import */ var _url_params_url_params_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url-params/url-params.component */ "./src/app/url-params/url-params/url-params.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first/first.component */ "./src/app/url-params/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second/second.component */ "./src/app/url-params/second/second.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UrlParamsModule = /** @class */ (function () {
    function UrlParamsModule() {
    }
    UrlParamsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _url_params_routing_module__WEBPACK_IMPORTED_MODULE_2__["UrlParamsRoutingModule"]
            ],
            declarations: [
                _url_params_url_params_component__WEBPACK_IMPORTED_MODULE_3__["UrlParamsComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_4__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_5__["SecondComponent"]
            ]
        })
    ], UrlParamsModule);
    return UrlParamsModule;
}());



/***/ }),

/***/ "./src/app/url-params/url-params/url-params.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/url-params/url-params/url-params.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n\t<button class=\"navigation\" (click)=\"previousPage()\"> Previous </button>\n\t<button class=\"navigation\" (click)=\"nextPage()\"> Next </button>\n</div>\n<div class=\"px-20px\">\n\t<h3 class=\"text-center\"> 3. URL Parameters </h3>\n\t<p>\n\t\tA <a href=\"https://en.wikipedia.org/wiki/Query_string\" target=\"_blank\"> Query string </a> is the part of URL that contains data. \n\t\tWe can save variables we want to share as <i>url parameters</i>, and then any component can parse and read them. In Angular, there  \n\t\tare <i> route parameters </i> and <i>query parameters</i>; <i> route parameters </i> are not optional and you must define them \n\t\tin <i>route configurations</i>, in contrast to <i>query parameters</i>. For the above reasons, I chose to use \n\t\t<i> query parameters </i> for this example.\n\t</p>\n\t<p>\n\t\t<b class=\"red-letters\"> Con: </b> User's private data must not be part of the URL.\n\t</p>\n\t\n\t<div class=\"component-container mt-5px\">\n\t\tFirst Component <br>\n\t\t<app-first></app-first>\n\t</div>\n\n\t<div class=\"component-container mt-5px\">\n\t\tSecond Component <br>\n\t\t<app-second></app-second>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/url-params/url-params/url-params.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/url-params/url-params/url-params.component.ts ***!
  \***************************************************************/
/*! exports provided: UrlParamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParamsComponent", function() { return UrlParamsComponent; });
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



var UrlParamsComponent = /** @class */ (function () {
    function UrlParamsComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    UrlParamsComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight') {
            this.nextPage(); //go to next page
        }
        else if (event.key == 'ArrowLeft') {
            this.previousPage(); //go to previous page
        }
    };
    UrlParamsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("URL Parameters"); //set document title
    };
    UrlParamsComponent.prototype.previousPage = function () {
        this.router.navigate(['/web-storage']); //navigate to
    };
    UrlParamsComponent.prototype.nextPage = function () {
        this.router.navigate(['/input-output']); //navigate to
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']) //when key is pressed
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], UrlParamsComponent.prototype, "handleKeyboardEvent", null);
    UrlParamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-url-params',
            template: __webpack_require__(/*! ./url-params.component.html */ "./src/app/url-params/url-params/url-params.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], UrlParamsComponent);
    return UrlParamsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=url-params-url-params-module.js.map