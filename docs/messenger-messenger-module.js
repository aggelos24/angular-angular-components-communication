(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messenger-messenger-module"],{

/***/ "./src/app/messenger/first/first.component.html":
/*!******************************************************!*\
  !*** ./src/app/messenger/first/first.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<input type=\"text\" class=\"mt-5px\" #firstName placeholder=\"First Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #lastName placeholder=\"Last Name\"> <br>\n\t<input type=\"text\" class=\"mt-5px\" #address placeholder=\"Address\"> <br>\n\t<button class=\"submit mt-5px\" (click)=\"sendMessage(firstName.value, lastName.value, address.value)\"> Send Message </button>\n</div>\n"

/***/ }),

/***/ "./src/app/messenger/first/first.component.ts":
/*!****************************************************!*\
  !*** ./src/app/messenger/first/first.component.ts ***!
  \****************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messenger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messenger.service */ "./src/app/messenger/messenger.service.ts");
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
    function FirstComponent(messengerService) {
        this.messengerService = messengerService;
    }
    FirstComponent.prototype.sendMessage = function (firstName, lastName, address) {
        this.message = {
            to: 'SecondComponent',
            data: {
                firstName: firstName,
                lastName: lastName,
                address: address
            }
        };
        this.messengerService.setMessage(this.message); //send message
    };
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/messenger/first/first.component.html")
        }),
        __metadata("design:paramtypes", [_messenger_service__WEBPACK_IMPORTED_MODULE_1__["MessengerService"]])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/messenger/messenger-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/messenger/messenger-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MessengerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerRoutingModule", function() { return MessengerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/messenger/messenger/messenger.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_2__["MessengerComponent"] }
];
var MessengerRoutingModule = /** @class */ (function () {
    function MessengerRoutingModule() {
    }
    MessengerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MessengerRoutingModule);
    return MessengerRoutingModule;
}());



/***/ }),

/***/ "./src/app/messenger/messenger.module.ts":
/*!***********************************************!*\
  !*** ./src/app/messenger/messenger.module.ts ***!
  \***********************************************/
/*! exports provided: MessengerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerModule", function() { return MessengerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _messenger_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger-routing.module */ "./src/app/messenger/messenger-routing.module.ts");
/* harmony import */ var _messenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger.service */ "./src/app/messenger/messenger.service.ts");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/messenger/messenger/messenger.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first/first.component */ "./src/app/messenger/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second/second.component */ "./src/app/messenger/second/second.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MessengerModule = /** @class */ (function () {
    function MessengerModule() {
    }
    MessengerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _messenger_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessengerRoutingModule"]
            ],
            declarations: [
                _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__["MessengerComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_5__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_6__["SecondComponent"]
            ],
            providers: [_messenger_service__WEBPACK_IMPORTED_MODULE_3__["MessengerService"]]
        })
    ], MessengerModule);
    return MessengerModule;
}());



/***/ }),

/***/ "./src/app/messenger/messenger.service.ts":
/*!************************************************!*\
  !*** ./src/app/messenger/messenger.service.ts ***!
  \************************************************/
/*! exports provided: MessengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerService", function() { return MessengerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessengerService = /** @class */ (function () {
    function MessengerService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); //create BehaviorSubject with null as initial value
        this.message = this.messageSource.asObservable(); //this is the variable to which recipients subscribe
    }
    MessengerService.prototype.setMessage = function (message) {
        this.messageSource.next(message); //message is emitted
    };
    MessengerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessengerService);
    return MessengerService;
}());



/***/ }),

/***/ "./src/app/messenger/messenger/messenger.component.html":
/*!**************************************************************!*\
  !*** ./src/app/messenger/messenger/messenger.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n\t<button class=\"navigation\" (click)=\"previousPage()\"> Previous </button>\n\t<button class=\"navigation\" (click)=\"nextPage()\"> Next </button>\n</div>\n<div class=\"px-20px\">\n\t<h3 class=\"text-center\"> 6. Messenger Service </h3>\n\t<p>\n\t\tWe create a service which has a \n\t\t<a href=\"http://reactivex.io/rxjs/manual/overview.html#behaviorsubject\" target=\"_blank\"> BehaviorSubject </a> and inject it into \n\t\tboth the sender and the recipients. A <i> BehaviorSubject </i> stores the last emitted value from sender. When a recipient \n\t\tsubscribes to <i> BehaviorSubject </i>, it receives its current value and every emitted value after that until it unsubscribes.\n\t\tThis is an advantage over a <a href=\"http://reactivex.io/rxjs/manual/overview.html#subject\" target=\"_blank\">Subject</a>, because if \n\t\twe use a <i> Subject </i> and the sender emits a message before the recipient subscribes, the message will be lost.\n\t</p>\n\t<p>\n\t\t<b class=\"red-letters\"> Con: </b> If there are multiple senders at the same time, some messages may be lost.\n\t</p>\n\t\n\t<div class=\"component-container mt-5px\">\n\t\tFirst Component <br>\n\t\t<app-first></app-first>\n\t</div>\n\n\t<div class=\"component-container mt-5px\">\n\t\tSecond Component <br>\n\t\t<app-second></app-second>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/messenger/messenger/messenger.component.ts":
/*!************************************************************!*\
  !*** ./src/app/messenger/messenger/messenger.component.ts ***!
  \************************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
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



var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    MessengerComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight') {
            this.nextPage(); //go to next page
        }
        else if (event.key == 'ArrowLeft') {
            this.previousPage(); //go to previous page
        }
    };
    MessengerComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Messenger Service"); //set document title
    };
    MessengerComponent.prototype.previousPage = function () {
        this.router.navigate(['/outlet']); //navigate to
    };
    MessengerComponent.prototype.nextPage = function () {
        this.router.navigate(['/conclusion']); //navigate to
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']) //when key is pressed
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MessengerComponent.prototype, "handleKeyboardEvent", null);
    MessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/messenger/messenger/messenger.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ }),

/***/ "./src/app/messenger/second/second.component.html":
/*!********************************************************!*\
  !*** ./src/app/messenger/second/second.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-10px ml-5px\">\n\t<ng-container *ngIf=\"!noData; else elseTemplate\">\n\t\t<b> Message </b> <br>\n\t\tTo: {{ message.to }} <br>\n\t\tData: <br>\n\t\t<div class=\"ml-5px\">\n\t\t\tFirst Name: {{ message.data.firstName }} <br>\n\t\t\tLast Name: {{ message.data.lastName }} <br>\n\t\t\tAddress: {{ message.data.address }} <br>\n\t\t</div>\n\t</ng-container>\n\t<ng-template #elseTemplate> No data yet </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/messenger/second/second.component.ts":
/*!******************************************************!*\
  !*** ./src/app/messenger/second/second.component.ts ***!
  \******************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messenger.service */ "./src/app/messenger/messenger.service.ts");
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
    function SecondComponent(messengerService) {
        this.messengerService = messengerService;
    }
    SecondComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noData = true; //initialize variable
        this.sub = this.messengerService.message.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (message) { return (message && message.to == 'SecondComponent'); }) //reject message if message's recipient is not this component
        )
            .subscribe(function (message) {
            _this.message = message; //update variables
            _this.noData = false;
        });
    };
    SecondComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe(); //end subscription
    };
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/messenger/second/second.component.html")
        }),
        __metadata("design:paramtypes", [_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ })

}]);
//# sourceMappingURL=messenger-messenger-module.js.map