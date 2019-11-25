(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-daily-gift-management-daily-gift-management-module"],{

/***/ "./src/app/pages/daily-gift-management/daily-gift-management.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/daily-gift-management/daily-gift-management.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DailyGiftManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyGiftManagementPageModule", function() { return DailyGiftManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _daily_gift_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./daily-gift-management.page */ "./src/app/pages/daily-gift-management/daily-gift-management.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/tabulator-table/tabulator-table.component */ "./src/app/components/tabulator-table/tabulator-table.component.ts");
/* harmony import */ var src_app_components_modal_edit_daily_gift_modal_edit_daily_gift_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-edit-daily-gift/modal-edit-daily-gift.component */ "./src/app/components/modal-edit-daily-gift/modal-edit-daily-gift.component.ts");











var routes = [
    {
        path: '',
        component: _daily_gift_management_page__WEBPACK_IMPORTED_MODULE_6__["DailyGiftManagementPage"]
    }
];
var DailyGiftManagementPageModule = /** @class */ (function () {
    function DailyGiftManagementPageModule() {
    }
    DailyGiftManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [
                src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__["TabulatorTableComponent"],
                src_app_components_modal_edit_daily_gift_modal_edit_daily_gift_component__WEBPACK_IMPORTED_MODULE_10__["ModalEditDailyGiftComponent"]
            ],
            declarations: [_daily_gift_management_page__WEBPACK_IMPORTED_MODULE_6__["DailyGiftManagementPage"]]
        })
    ], DailyGiftManagementPageModule);
    return DailyGiftManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/daily-gift-management/daily-gift-management.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/daily-gift-management/daily-gift-management.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Quản lí quà tặng hằng ngày\n      </ion-title>\n      <ion-buttons slot=\"end\" no-padding mode=\"md\">\n        <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" class=\"product-avarta\" hideWhen=\"android,ios\">\n          <ion-icon mode=\"md\" slot=\"start\" name=\"person\"></ion-icon>\n          {{appValueService.APP_AUTHENTICATION.userName}}\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content #contentSearch id=\"contentSearch\">\n    <app-tabulator-table [tableData]=\"dailyGiftService.listGift\" [columnNames]=\"dailyGiftService.columnsTable\"\n      [height]=\"dailyGiftService.heightTable\" idElement=\"example-table\" (rowClickEvent)=\"showDetail($event, 'edit')\">\n    </app-tabulator-table>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"showDetail($event, 'add')\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n          class=\"color-button color-button-fix product-function-button-p button-size\">Thêm Phần quà\n        </ion-button>\n        <ion-grid *ngIf=\"!appValueService.APP_PLATFORM_DESKTOP\" class=\"product-function-button-m product-grid-button\"\n          no-padding>\n          <ion-row align-items-center no-padding>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n              <ion-button type=\"button\" (click)=\"showDetail($event, 'add')\" class=\"product-search-button color-button\">\n                <ion-icon name=\"cloud-upload\" class=\"product-search-icon\" no-padding></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/daily-gift-management/daily-gift-management.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/daily-gift-management/daily-gift-management.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5LWdpZnQtbWFuYWdlbWVudC9kYWlseS1naWZ0LW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/daily-gift-management/daily-gift-management.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/daily-gift-management/daily-gift-management.page.ts ***!
  \***************************************************************************/
/*! exports provided: DailyGiftManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyGiftManagementPage", function() { return DailyGiftManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _daily_gift_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-gift-management.service */ "./src/app/pages/daily-gift-management/daily-gift-management.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_modal_edit_daily_gift_modal_edit_daily_gift_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modal-edit-daily-gift/modal-edit-daily-gift.component */ "./src/app/components/modal-edit-daily-gift/modal-edit-daily-gift.component.ts");








var DailyGiftManagementPage = /** @class */ (function () {
    function DailyGiftManagementPage(popoverController, dailyGiftService, utilsService, appValueService, translate) {
        this.popoverController = popoverController;
        this.dailyGiftService = dailyGiftService;
        this.utilsService = utilsService;
        this.appValueService = appValueService;
        this.translate = translate;
    }
    DailyGiftManagementPage.prototype.ngOnInit = function () {
    };
    DailyGiftManagementPage.prototype.showDetail = function (data, mode) {
        if (mode == "edit") {
            this.showModalEditDailyGift(data.ev, data.row._row.data);
        }
        else {
            this.showModalEditDailyGift(null, null);
        }
    };
    DailyGiftManagementPage.prototype.showModalEditDailyGift = function (ev, row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_edit_daily_gift_modal_edit_daily_gift_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditDailyGiftComponent"],
                            id: "editDailyFreeGiftModal",
                            event: ev,
                            translucent: true,
                            componentProps: { rowProduct: row },
                            cssClass: "edit-daily-free-gift-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DailyGiftManagementPage.prototype.ionViewDidEnter = function () {
        var removeHeight = [];
        this.appValueService.APP_TABULATOR_HEIGHT = [this.contentSearch, removeHeight];
        this.dailyGiftService.heightTable = this.utilsService.settingTableHeight(this.appValueService.APP_TABULATOR_HEIGHT);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DailyGiftManagementPage.prototype, "contentSearch", void 0);
    DailyGiftManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily-gift-management',
            template: __webpack_require__(/*! ./daily-gift-management.page.html */ "./src/app/pages/daily-gift-management/daily-gift-management.page.html"),
            styles: [__webpack_require__(/*! ./daily-gift-management.page.scss */ "./src/app/pages/daily-gift-management/daily-gift-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _daily_gift_management_service__WEBPACK_IMPORTED_MODULE_3__["DailyGiftManagementService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__["AppValueService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], DailyGiftManagementPage);
    return DailyGiftManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-daily-gift-management-daily-gift-management-module.js.map