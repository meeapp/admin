(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content overflow-scroll=\"true\">\n  <ion-grid class=\"login-main\">\n    <ion-row justify-content-center>\n      <img src=\"./assets/img/login_logo.png\" class=\"login-image-login login-logo\">\n    </ion-row>\n    <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n      <ion-item lines=\"none\" class=\"login-input-text login-form-group\">\n        <ion-input type=\"text\" id=\"authenticationEmail\" name=\"userModel.userID\"\n          placeholder=\"ID đăng nhập\" [(ngModel)]=\"loginInfo.userName\" required>\n        </ion-input>\n        <ion-icon name=\"mail\" slot=\"start\" class=\"login-icon\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"login-input-text login-form-group\">\n        <ion-input type=\"password\" id=\"password\" name=\"password\"\n          placeholder=\"Mật khẩu\" [(ngModel)]=\"loginInfo.password\" required>\n        </ion-input>\n        <ion-icon name=\"lock\" slot=\"start\" class=\"login-icon\"></ion-icon>\n      </ion-item>\n      <ion-row>\n        <ion-button type=\"button\" fill=\"clear\" class=\"login-forgot-pasword\">\n          Quên mật khẩu</ion-button>\n      </ion-row>\n      <ion-row class=\"login-row-check\">\n        <ion-item lines=\"none\" class=\"login-item-check\">\n          <ion-checkbox color=\"medium\" mode=\"md\" class=\"login-checkbox-check\" name=\"chkautologin\"\n            [(ngModel)]=\"chkAutoLogin\"></ion-checkbox>\n          <ion-label class=\"login-check login-height-check\">Lưu mật khẩu</ion-label>\n        </ion-item>\n      </ion-row>\n      <ion-row justify-content-center class=\"login-item-button\">\n        <ion-button mode=\"md\" type=\"submit\" id=\"btnLogin\" class=\"color-button\" [disabled]=\"!loginForm.valid\">\n          Đăng nhập</ion-button>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-forgot-pasword {\n  color: var(--ion-color-primary);\n  height: 30px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 100; }\n\n.login-image-login {\n  max-width: 270px;\n  max-height: 46px; }\n\n.login-input-text {\n  background-size: 25px 25px !important;\n  background-position: 7px 4px !important;\n  border: 1px solid #8b8b8b;\n  color: #000 !important;\n  display: block;\n  font-size: 15px;\n  font-weight: 400;\n  outline: medium none;\n  width: 100%;\n  border-radius: 5px; }\n\n.login-row-padding-top {\n  padding: 10px 0 0 0; }\n\n.login-row-margin {\n  margin-left: 1rem;\n  margin-right: 1rem; }\n\n.login-form-group {\n  margin-bottom: 15px;\n  padding-left: 0.3rem;\n  padding-right: 0.3rem; }\n\n.login-icon {\n  margin-right: 0.5rem; }\n\n.login-check {\n  padding: 0 0 0 0.5rem;\n  margin: 0;\n  height: 20px;\n  display: inline-block;\n  line-height: 20px;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  font-size: 12px;\n  font-weight: 100;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.login-checkbox-check {\n  padding: 0px;\n  margin: 0px; }\n\n.login-item-check {\n  --min-height: 10px; }\n\n.login-item-button {\n  margin-top: 1rem; }\n\n.login-select-language {\n  max-width: 100%; }\n\n/*================================Mobile========================================*/\n\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  .login-logo {\n    margin: 4rem 0px 1rem 0px; }\n  .login-display-flag {\n    display: none; } }\n\n/* smartphones, iPhone, portrait 480x320 phones */\n\n/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */\n\n/*==================================PC======================================*/\n\n/* common PC */\n\n@media only screen and (min-width: 641px) {\n  .login-main {\n    width: 300px; }\n  .login-logo {\n    margin: 6rem 0px 1.5rem 0px; } }\n\n/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */\n\n/* big landscape tablets, laptops, and desktops */\n\n/* hi-res laptops and desktops */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxWb3plclxcRGVza3RvcFxcTWVlQWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQStCO0VBQy9CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBYSxFQUFBOztBQUVqQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkIsaUZBQUE7O0FBQ0E7RUFDSTtJQUNJLHlCQUF5QixFQUFBO0VBRTdCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMLGlEQUFBOztBQUtBLDJFQUFBOztBQUtBLDZFQUFBOztBQUNBLGNBQUE7O0FBQ0E7RUFDSTtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLDJCQUEyQixFQUFBLEVBQzlCOztBQUdMLDhGQUFBOztBQUtBLGlEQUFBOztBQUtBLGdDQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcmdvdC1wYXN3b3Jke1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcbi5sb2dpbi1pbWFnZS1sb2dpbntcclxuICAgIG1heC13aWR0aDogMjcwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NnB4O1xyXG59XHJcbi5sb2dpbi1pbnB1dC10ZXh0e1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4IDI1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDdweCA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjhiOGI7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgb3V0bGluZTogbWVkaXVtIG5vbmU7ICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmxvZ2luLXJvdy1wYWRkaW5nLXRvcHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbn1cclxuLmxvZ2luLXJvdy1tYXJnaW57XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4ubG9naW4tZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW07XHJcbn1cclxuLmxvZ2luLWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG4ubG9naW4tY2hlY2sge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMC41cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxvZ2luLWNoZWNrYm94LWNoZWNre1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmxvZ2luLWl0ZW0tY2hlY2t7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLmxvZ2luLWl0ZW0tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ubG9naW4tc2VsZWN0LWxhbmd1YWdle1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Nb2JpbGU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG4gICAgLmxvZ2luLWxvZ297XHJcbiAgICAgICAgbWFyZ2luOiA0cmVtIDBweCAxcmVtIDBweDtcclxuICAgIH1cclxuICAgIC5sb2dpbi1kaXNwbGF5LWZsYWd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogc21hcnRwaG9uZXMsIGlQaG9uZSwgcG9ydHJhaXQgNDgweDMyMCBwaG9uZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo0ODBweCkge1xyXG5cclxufVxyXG5cclxuLyogcG9ydHJhaXQgZS1yZWFkZXJzIChOb29rL0tpbmRsZSksIHNtYWxsZXIgdGFibGV0cyBAIDYwMCBvciBAIDY0MCB3aWRlLiAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcblxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1QQz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLyogY29tbW9uIFBDICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NDFweCkge1xyXG4gICAgLmxvZ2luLW1haW57XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWxvZ297XHJcbiAgICAgICAgbWFyZ2luOiA2cmVtIDBweCAxLjVyZW0gMHB4O1xyXG4gICAgfSAgICAgICAgXHJcbn1cclxuXHJcbi8qIHBvcnRyYWl0IHRhYmxldHMsIHBvcnRyYWl0IGlQYWQsIGxhbmRzY2FwZSBlLXJlYWRlcnMsIGxhbmRzY2FwZSA4MDB4NDgwIG9yIDg1NHg0ODAgcGhvbmVzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NDFweCkgYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XHJcblxyXG59XHJcblxyXG4vKiBiaWcgbGFuZHNjYXBlIHRhYmxldHMsIGxhcHRvcHMsIGFuZCBkZXNrdG9wcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNXB4KSBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIGhpLXJlcyBsYXB0b3BzIGFuZCBkZXNrdG9wcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MXB4KSB7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/pages/login/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











var LoginPage = /** @class */ (function () {
    function LoginPage(constantsService, utilsService, loginService, router, translate, appValueService, storage, loading, menu) {
        var _this = this;
        this.constantsService = constantsService;
        this.utilsService = utilsService;
        this.loginService = loginService;
        this.router = router;
        this.translate = translate;
        this.appValueService = appValueService;
        this.storage = storage;
        this.loading = loading;
        this.menu = menu;
        this.loginInfo = { userName: '', password: '' };
        this.chkAutoLogin = false;
        this.menu.enable(false);
        storage.get('chkAutoLogin').then(function (value) {
            if (value) {
                _this.chkAutoLogin = value;
                storage.get('userName').then(function (userName) { _this.loginInfo.userName = userName; });
                storage.get('password').then(function (password) { _this.loginInfo.password = password; });
            }
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    /**
    * Login method
    */
    LoginPage.prototype.login = function () {
        var _this = this;
        this.menu.enable(true);
        this.utilsService.loadingStart();
        if (this.chkAutoLogin) {
            this.storage.set('chkAutoLogin', this.chkAutoLogin);
            this.storage.set('userName', this.loginInfo.userName);
            this.storage.set('password', this.loginInfo.password);
        }
        else {
            this.storage.clear();
        }
        this.loginService.login(this.loginInfo).subscribe(function (allowed) {
            if (allowed) {
                _this.menu.enable(true);
                _this.utilsService.loadingStop();
                _this.router.navigateByUrl(_this.constantsService.PATH_PRODUCT_MANAGEMENT);
            }
            else {
                _this.utilsService.showError("Sai tài khoản : " + _this.loginInfo.userName);
            }
        }, function (error) {
            _this.utilsService.showError(error);
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_7__["AppValueService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/pages/login/login.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.service.ts ***!
  \**********************************************/
/*! exports provided: CLoginModel, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLoginModel", function() { return CLoginModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");








/**
  * This is the Model using for login screen
  */
var CLoginModel = /** @class */ (function () {
    function CLoginModel() {
        this.id = "";
        this.userName = "";
        this.active = true;
        this.ranked = "";
        this.image = "";
    }
    /**
    * This is the function mapping object to model
    */
    CLoginModel.prototype.copy = function (data) {
        this.key = data.key;
        this.id = data.id;
        this.userName = data.userName;
        this.active = data.active;
        this.ranked = data.ranked;
        this.image = data.image;
    };
    return CLoginModel;
}());

var LoginService = /** @class */ (function () {
    function LoginService(constantsService, utilsService, db, appValueService, afAuth) {
        this.constantsService = constantsService;
        this.utilsService = utilsService;
        this.db = db;
        this.appValueService = appValueService;
        this.afAuth = afAuth;
        this.path_Users = "Users/";
        this.path_IDLogin = "id/";
        this.path_PasswordLogin = "password/";
    }
    LoginService.prototype.login = function (loginInfo) {
        var _this = this;
        var listUser;
        if (loginInfo.userName === null || loginInfo.password === null) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw("Điền thông tin");
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                var access = false;
                var id = loginInfo.userName + "@gmail.com";
                _this.utilsService.appValueService.APP_AUTHENTICATION = {
                    id: "",
                    userName: "",
                    active: "",
                    ranked: "",
                    image: ""
                };
                _this.afAuth.auth.signInWithEmailAndPassword(id, loginInfo.password)
                    .then(function (authenticated) {
                    listUser = _this.db.list(_this.path_Users, function (ref) { return ref.orderByChild(_this.path_IDLogin)
                        .startAt(authenticated.user.uid)
                        .endAt(authenticated.user.uid); });
                    listUser.valueChanges().subscribe(function (userInfo) {
                        if (userInfo.length == 0) {
                            _this.utilsService.appValueService.APP_AUTHENTICATION = {
                                id: "",
                                userName: "",
                                active: "",
                                ranked: "",
                                image: ""
                            };
                            observer.next(access);
                            observer.complete();
                        }
                        else {
                            access = true;
                            userInfo.forEach(function (userLogin) {
                                _this.utilsService.appValueService.APP_AUTHENTICATION = userLogin;
                                _this.utilsService.setAppAuthentication();
                            });
                            observer.next(access);
                            observer.complete();
                        }
                    });
                })
                    .catch(function (error) {
                    _this.utilsService.showError(error);
                });
            });
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__["AppValueService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map