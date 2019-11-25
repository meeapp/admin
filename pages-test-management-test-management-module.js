(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-management-test-management-module"],{

/***/ "./src/app/pages/test-management/test-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/test-management/test-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: TestManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestManagementPageModule", function() { return TestManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-management.page */ "./src/app/pages/test-management/test-management.page.ts");
/* harmony import */ var src_app_components_modal_edit_test_modal_edit_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modal-edit-test/modal-edit-test.component */ "./src/app/components/modal-edit-test/modal-edit-test.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/tabulator-table/tabulator-table.component */ "./src/app/components/tabulator-table/tabulator-table.component.ts");











var routes = [
    {
        path: '',
        component: _test_management_page__WEBPACK_IMPORTED_MODULE_6__["TestManagementPage"]
    }
];
var TestManagementPageModule = /** @class */ (function () {
    function TestManagementPageModule() {
    }
    TestManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [
                src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_10__["TabulatorTableComponent"],
                src_app_components_modal_edit_test_modal_edit_test_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditTestComponent"]
            ],
            declarations: [_test_management_page__WEBPACK_IMPORTED_MODULE_6__["TestManagementPage"]]
        })
    ], TestManagementPageModule);
    return TestManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/test-management/test-management.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/test-management/test-management.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Quản lí bài test\n      </ion-title>\n      <ion-buttons slot=\"end\" no-padding mode=\"md\">\n        <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" class=\"product-avarta\" hideWhen=\"android,ios\">\n          <ion-icon mode=\"md\" slot=\"start\" name=\"person\"></ion-icon>\n          {{appValueService.APP_AUTHENTICATION.userName}}\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content #contentSearch id=\"contentSearch\">\n    <app-tabulator-table [tableData]=\"testService.listTest\" [columnNames]=\"testService.columnsTable\"\n      [height]=\"testService.heightTable\" idElement=\"example-table\" (rowClickEvent)=\"showDetail($event, 'edit')\">\n    </app-tabulator-table>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"showDetail($event, 'add')\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n          class=\"color-button color-button-fix product-function-button-p button-size\">Thêm bài test\n        </ion-button>\n        <ion-grid *ngIf=\"!appValueService.APP_PLATFORM_DESKTOP\" class=\"product-function-button-m product-grid-button\"\n          no-padding>\n          <ion-row align-items-center no-padding>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n              <ion-button type=\"button\" (click)=\"showDetail($event, 'add')\" class=\"product-search-button color-button\">\n                <ion-icon name=\"cloud-upload\" class=\"product-search-icon\" no-padding></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/test-management/test-management.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/test-management/test-management.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QtbWFuYWdlbWVudC90ZXN0LW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/test-management/test-management.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/test-management/test-management.page.ts ***!
  \***************************************************************/
/*! exports provided: TestManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestManagementPage", function() { return TestManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_modal_edit_test_modal_edit_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modal-edit-test/modal-edit-test.component */ "./src/app/components/modal-edit-test/modal-edit-test.component.ts");
/* harmony import */ var _test_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-management.service */ "./src/app/pages/test-management/test-management.service.ts");








var TestManagementPage = /** @class */ (function () {
    function TestManagementPage(popoverController, testService, utilsService, appValueService, translate) {
        this.popoverController = popoverController;
        this.testService = testService;
        this.utilsService = utilsService;
        this.appValueService = appValueService;
        this.translate = translate;
    }
    TestManagementPage.prototype.ngOnInit = function () {
    };
    TestManagementPage.prototype.showDetail = function (data, mode) {
        if (mode == "edit") {
            this.showModalEditTest(data.ev, data.row._row.data);
        }
        else {
            this.showModalEditTest(null, null);
        }
    };
    TestManagementPage.prototype.showModalEditTest = function (ev, row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_edit_test_modal_edit_test_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditTestComponent"],
                            id: "editTestModal",
                            event: ev,
                            translucent: true,
                            componentProps: { rowProduct: row },
                            cssClass: "edit-test-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TestManagementPage.prototype.ionViewDidEnter = function () {
        var removeHeight = [];
        this.appValueService.APP_TABULATOR_HEIGHT = [this.contentSearch, removeHeight];
        this.testService.heightTable = this.utilsService.settingTableHeight(this.appValueService.APP_TABULATOR_HEIGHT);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestManagementPage.prototype, "contentSearch", void 0);
    TestManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-management',
            template: __webpack_require__(/*! ./test-management.page.html */ "./src/app/pages/test-management/test-management.page.html"),
            styles: [__webpack_require__(/*! ./test-management.page.scss */ "./src/app/pages/test-management/test-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _test_management_service__WEBPACK_IMPORTED_MODULE_7__["TestManagementService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_4__["AppValueService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], TestManagementPage);
    return TestManagementPage;
}());



/***/ }),

/***/ "./src/app/pages/test-management/test-management.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/test-management/test-management.service.ts ***!
  \******************************************************************/
/*! exports provided: TestManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestManagementService", function() { return TestManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");





var TestManagementService = /** @class */ (function () {
    function TestManagementService(constantsService, db, utilsService) {
        this.constantsService = constantsService;
        this.db = db;
        this.utilsService = utilsService;
        this.heightTable = "775";
        this.columnsTable = [
            { title: "ID", field: "id", align: "left", width: 50 },
            { title: "Tên bài test", field: "test_name", align: "left", width: 300 },
            { title: "Số lần test", field: "test_quantity", align: "left", width: 200 },
            { title: "Active", field: "active", align: "left", width: 100 }
        ];
        this.listTest = [];
        this.getListUser();
    }
    TestManagementService.prototype.getListUser = function () {
        var _this = this;
        var listU = this.db.list("TestSkin/");
        listU.valueChanges().subscribe(function (test) {
            _this.listTest = [];
            if (test) {
                for (var index = 0; index < test.length; index++) {
                    var element = test[index];
                    _this.listTest.push(element);
                }
            }
        });
    };
    TestManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], TestManagementService);
    return TestManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-test-management-test-management-module.js.map