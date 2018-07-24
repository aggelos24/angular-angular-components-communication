(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-outlet-module"],{

/***/ "./src/app/outlet/child/child.component.html":
/*!***************************************************!*\
  !*** ./src/app/outlet/child/child.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container mt-5px\">\n\tChild Component <br>\n\t\n\t<div class=\"mt-10px ml-5px\">\n\t\t<input type=\"text\" class=\"mt-5px\" #firstName placeholder=\"First Name\"> <br>\n\t\t<input type=\"text\" class=\"mt-5px\" #lastName placeholder=\"Last Name\"> <br>\n\t\t<input type=\"text\" class=\"mt-5px\" #address placeholder=\"Address\"> <br>\n\t\t<button class=\"submit mt-5px\" (click)=\"navigateAway(firstName.value, lastName.value, address.value)\"> Navigate away </button>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/outlet/child/child.component.ts":
/*!*************************************************!*\
  !*** ./src/app/outlet/child/child.component.ts ***!
  \*************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
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


var ChildComponent = /** @class */ (function () {
    function ChildComponent(router) {
        this.router = router;
        this.data = {}; //variable for storing form data
    }
    ChildComponent.prototype.setData = function (input) {
        this.inputFirstname.nativeElement.value = input.firstName; //set values of input elements
        this.inputLastName.nativeElement.value = input.lastName;
        this.inputAddress.nativeElement.value = input.address;
    };
    ChildComponent.prototype.getData = function () {
        return this.data;
    };
    ChildComponent.prototype.navigateAway = function (firstName, lastname, address) {
        this.data = {
            firstName: firstName,
            lastName: lastname,
            address: address
        };
        this.router.navigate(['/outlet']); //navigate to parent
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("firstName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChildComponent.prototype, "inputFirstname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("lastName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChildComponent.prototype, "inputLastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("address"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChildComponent.prototype, "inputAddress", void 0);
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/outlet/child/child.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/outlet/outlet-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/outlet/outlet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OutletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletRoutingModule", function() { return OutletRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _outlet_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlet/outlet.component */ "./src/app/outlet/outlet/outlet.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child/child.component */ "./src/app/outlet/child/child.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _outlet_outlet_component__WEBPACK_IMPORTED_MODULE_2__["OutletComponent"],
        children: [
            { path: 'child', component: _child_child_component__WEBPACK_IMPORTED_MODULE_3__["ChildComponent"] }
        ]
    }
];
var OutletRoutingModule = /** @class */ (function () {
    function OutletRoutingModule() {
    }
    OutletRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OutletRoutingModule);
    return OutletRoutingModule;
}());



/***/ }),

/***/ "./src/app/outlet/outlet.module.ts":
/*!*****************************************!*\
  !*** ./src/app/outlet/outlet.module.ts ***!
  \*****************************************/
/*! exports provided: OutletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletModule", function() { return OutletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlet-routing.module */ "./src/app/outlet/outlet-routing.module.ts");
/* harmony import */ var _outlet_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet/outlet.component */ "./src/app/outlet/outlet/outlet.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child/child.component */ "./src/app/outlet/child/child.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/outlet/parent/parent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OutletModule = /** @class */ (function () {
    function OutletModule() {
    }
    OutletModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _outlet_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutletRoutingModule"]
            ],
            declarations: [
                _outlet_outlet_component__WEBPACK_IMPORTED_MODULE_3__["OutletComponent"],
                _child_child_component__WEBPACK_IMPORTED_MODULE_4__["ChildComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_5__["ParentComponent"]
            ]
        })
    ], OutletModule);
    return OutletModule;
}());



/***/ }),

/***/ "./src/app/outlet/outlet/outlet.component.html":
/*!*****************************************************!*\
  !*** ./src/app/outlet/outlet/outlet.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n\t<button class=\"navigation\" (click)=\"previousPage()\"> Previous </button>\n\t<button class=\"navigation\" (click)=\"nextPage()\"> Next </button>\n</div>\n<div class=\"px-20px\">\n\t<h3 class=\"text-center\"> 5. Parent-Child Communication (router-outlet) </h3>\n\t<p>\n\t\t<a class=\"no-break\" href=\"https://angular.io/api/router/RouterOutlet\" target=\"_blank\"> router-outlet </a> is a directive we place \n\t\tin our code, so Angular will know where to place the corresponding component based on the current URL.\n\t</p>\n\t<p>\n\t\tMoreover, <i> router-outlet </i> emits an <i> activate event </i> every time a component is being instantiated, and a \n\t\t<i> deactivate event </i> when it is being destroyed. These events provide access to child component instance, which means that \n\t\tthe parent component can change any public variable and call any public function that belongs to the child.\n\t</p>\n\t<p> <b class=\"red-letters\"> Con: </b> Components communicate only when child is being instantiated or destroyed. </p>\n\t\n\t<div class=\"component-container mt-5px\">\n\t\tParent Component <br>\n\t\t<app-parent></app-parent>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/outlet/outlet/outlet.component.ts":
/*!***************************************************!*\
  !*** ./src/app/outlet/outlet/outlet.component.ts ***!
  \***************************************************/
/*! exports provided: OutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletComponent", function() { return OutletComponent; });
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



var OutletComponent = /** @class */ (function () {
    function OutletComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    OutletComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight') {
            this.nextPage(); //go to next page
        }
        else if (event.key == 'ArrowLeft') {
            this.previousPage(); //go to previous page
        }
    };
    OutletComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Parent-Child Communication (router-outlet)"); //set document title
    };
    OutletComponent.prototype.previousPage = function () {
        this.router.navigate(['/input-output']); //navigate to
    };
    OutletComponent.prototype.nextPage = function () {
        this.router.navigate(['/messenger']); //navigate to
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']) //when key is pressed
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], OutletComponent.prototype, "handleKeyboardEvent", null);
    OutletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outlet',
            template: __webpack_require__(/*! ./outlet.component.html */ "./src/app/outlet/outlet/outlet.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], OutletComponent);
    return OutletComponent;
}());



/***/ }),

/***/ "./src/app/outlet/parent/parent.component.html":
/*!*****************************************************!*\
  !*** ./src/app/outlet/parent/parent.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<input type=\"text\" class=\"mt-5px\" #firstName placeholder=\"First Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #lastName placeholder=\"Last Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #address placeholder=\"Address\"> <br>\n\t<button [ngClass]=\"{'disabled': buttonDisabled}\" class=\"submit mt-5px\" [disabled]=\"buttonDisabled\" (click)=\"navigateChild(firstName.value, lastName.value, address.value)\"> Navigate to Child </button>\n</div>\n\n<router-outlet (activate)='onActivate($event)' (deactivate)='onDeactivate($event)'></router-outlet>\n"

/***/ }),

/***/ "./src/app/outlet/parent/parent.component.ts":
/*!***************************************************!*\
  !*** ./src/app/outlet/parent/parent.component.ts ***!
  \***************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../child/child.component */ "./src/app/outlet/child/child.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentComponent = /** @class */ (function () {
    function ParentComponent(router) {
        this.router = router;
        this.data = {};
    }
    ParentComponent.prototype.ngOnInit = function () {
        this.buttonDisabled = false; //initialize variable
    };
    ParentComponent.prototype.onActivate = function (componentRef) {
        if (componentRef instanceof _child_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"]) {
            componentRef.setData(this.data); //set its data from parent's form data
            this.buttonDisabled = true; //'Navigate to Child' button is disabled	
        }
    };
    ParentComponent.prototype.onDeactivate = function (componentRef) {
        if (componentRef instanceof _child_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"]) {
            var temp = componentRef.getData(); //get its data
            this.inputFirstname.nativeElement.value = temp.firstName; //set parent's form data
            this.inputLastName.nativeElement.value = temp.lastName;
            this.inputAddress.nativeElement.value = temp.address;
            this.buttonDisabled = false; //'Navigate to Child' button is enabled
        }
    };
    ParentComponent.prototype.navigateChild = function (firstName, lastname, address) {
        this.data = {
            firstName: firstName,
            lastName: lastname,
            address: address
        };
        this.router.navigate(['/outlet/child']); //navigate to child
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("firstName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ParentComponent.prototype, "inputFirstname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("lastName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ParentComponent.prototype, "inputLastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("address"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ParentComponent.prototype, "inputAddress", void 0);
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/outlet/parent/parent.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=outlet-outlet-module.js.map