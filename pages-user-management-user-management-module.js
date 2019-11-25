(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-management-user-management-module"],{

/***/ "./src/app/pages/user-management/user-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPageModule", function() { return UserManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management.page */ "./src/app/pages/user-management/user-management.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/tabulator-table/tabulator-table.component */ "./src/app/components/tabulator-table/tabulator-table.component.ts");
/* harmony import */ var src_app_components_modal_edit_user_modal_edit_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-edit-user/modal-edit-user.component */ "./src/app/components/modal-edit-user/modal-edit-user.component.ts");











var routes = [
    {
        path: '',
        component: _user_management_page__WEBPACK_IMPORTED_MODULE_6__["UserManagementPage"]
    }
];
var UserManagementPageModule = /** @class */ (function () {
    function UserManagementPageModule() {
    }
    UserManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [
                src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__["TabulatorTableComponent"],
                src_app_components_modal_edit_user_modal_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["ModalEditUserComponent"]
            ],
            declarations: [_user_management_page__WEBPACK_IMPORTED_MODULE_6__["UserManagementPage"]]
        })
    ], UserManagementPageModule);
    return UserManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-management/user-management.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Quản lí tài khoản\n      </ion-title>\n      <ion-buttons slot=\"end\" no-padding mode=\"md\">\n        <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" class=\"product-avarta\" hideWhen=\"android,ios\">\n          <ion-icon mode=\"md\" slot=\"start\" name=\"person\"></ion-icon>\n          {{appValueService.APP_AUTHENTICATION.userName}}\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content #contentSearch id=\"contentSearch\">\n    <app-tabulator-table [tableData]=\"userService.listUser\" [columnNames]=\"userService.columnsTable\"\n      [height]=\"userService.heightTable\" idElement=\"example-table\" (rowClickEvent)=\"showDetail($event, 'edit')\">\n    </app-tabulator-table>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"showDetail($event, 'add')\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n          class=\"color-button color-button-fix product-function-button-p button-size\">Thêm Tài khoản\n        </ion-button>\n        <ion-grid *ngIf=\"!appValueService.APP_PLATFORM_DESKTOP\" class=\"product-function-button-m product-grid-button\"\n          no-padding>\n          <ion-row align-items-center no-padding>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n              <ion-button type=\"button\" (click)=\"showDetail($event, 'add')\" class=\"product-search-button color-button\">\n                <ion-icon name=\"cloud-upload\" class=\"product-search-icon\" no-padding></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/user-management/user-management.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user-management/user-management.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.page.ts ***!
  \***************************************************************/
/*! exports provided: UserManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPage", function() { return UserManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _user_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management.service */ "./src/app/pages/user-management/user-management.service.ts");
/* harmony import */ var src_app_components_modal_edit_user_modal_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modal-edit-user/modal-edit-user.component */ "./src/app/components/modal-edit-user/modal-edit-user.component.ts");








var UserManagementPage = /** @class */ (function () {
    function UserManagementPage(popoverController, userService, utilsService, appValueService, translate) {
        this.popoverController = popoverController;
        this.userService = userService;
        this.utilsService = utilsService;
        this.appValueService = appValueService;
        this.translate = translate;
    }
    UserManagementPage.prototype.ngOnInit = function () {
    };
    UserManagementPage.prototype.showDetail = function (data, mode) {
        if (mode == "edit") {
            this.showModalEditUser(data.ev, data.row._row.data);
        }
        else {
            this.showModalEditUser(null, null);
        }
    };
    UserManagementPage.prototype.showModalEditUser = function (ev, row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_edit_user_modal_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditUserComponent"],
                            id: "editUserModal",
                            event: ev,
                            translucent: true,
                            componentProps: { rowProduct: row },
                            cssClass: "edit-user-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserManagementPage.prototype.ionViewDidEnter = function () {
        var removeHeight = [];
        this.appValueService.APP_TABULATOR_HEIGHT = [this.contentSearch, removeHeight];
        this.userService.heightTable = this.utilsService.settingTableHeight(this.appValueService.APP_TABULATOR_HEIGHT);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserManagementPage.prototype, "contentSearch", void 0);
    UserManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! ./user-management.page.html */ "./src/app/pages/user-management/user-management.page.html"),
            styles: [__webpack_require__(/*! ./user-management.page.scss */ "./src/app/pages/user-management/user-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _user_management_service__WEBPACK_IMPORTED_MODULE_6__["UserManagementService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_4__["AppValueService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], UserManagementPage);
    return UserManagementPage;
}());



/***/ }),

/***/ "./src/app/pages/user-management/user-management.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.service.ts ***!
  \******************************************************************/
/*! exports provided: UserManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementService", function() { return UserManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");





var UserManagementService = /** @class */ (function () {
    function UserManagementService(constantsService, db, utilsService) {
        this.constantsService = constantsService;
        this.db = db;
        this.utilsService = utilsService;
        this.heightTable = "775";
        this.columnsTable = [
            { title: "ID login", field: "id", align: "left", width: 100 },
            { title: "Tên người dùng", field: "userName", align: "left", width: 300 },
            { title: "Mật khẩu", field: "password", align: "left", width: 100 },
            { title: "Địa chỉ", field: "address", align: "left", width: 300 },
            { title: "Địa chỉ nhận hàng", field: "ship_address", align: "left", width: 300 },
            { title: "Sinh nhật", field: "birthday", align: "left", width: 150 },
            { title: "Địa chỉ email", field: "email", align: "left", width: 150 },
            { title: "Số điện thoại", field: "sdt", align: "left", width: 150 },
            { title: "Facebook", field: "facebook_address", align: "left", width: 200 },
            { title: "Điểm thưởng", field: "pointAward", align: "left", width: 150 },
            { title: "Hạng thành viên", field: "ranked", align: "left", width: 150 },
            { title: "Loại da", field: "testLab", align: "left", width: 150 },
            { title: "Sở thích", field: "hobby", align: "left", width: 150 },
            { title: "Active", field: "active", align: "left", width: 100 }
        ];
        this.listUser = [];
        this.getListUser();
    }
    UserManagementService.prototype.getListUser = function () {
        var _this = this;
        var listU = this.db.list("Users/");
        listU.valueChanges().subscribe(function (event) {
            _this.listUser = [];
            if (event) {
                for (var index = 0; index < event.length; index++) {
                    var element = event[index];
                    _this.listUser.push(element);
                }
            }
        });
    };
    UserManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-management-user-management-module.js.map