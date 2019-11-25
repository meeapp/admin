(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-kho-management-kho-management-module"],{

/***/ "./src/app/pages/kho-management/kho-management.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/kho-management/kho-management.module.ts ***!
  \***************************************************************/
/*! exports provided: KhoManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoManagementPageModule", function() { return KhoManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kho_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kho-management.page */ "./src/app/pages/kho-management/kho-management.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/tabulator-table/tabulator-table.component */ "./src/app/components/tabulator-table/tabulator-table.component.ts");
/* harmony import */ var src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-import-csv/modal-import-csv.component */ "./src/app/components/modal-import-csv/modal-import-csv.component.ts");
/* harmony import */ var src_app_components_modal_edit_detail_product_modal_edit_detail_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/modal-edit-detail-product/modal-edit-detail-product.component */ "./src/app/components/modal-edit-detail-product/modal-edit-detail-product.component.ts");












var routes = [
    {
        path: '',
        component: _kho_management_page__WEBPACK_IMPORTED_MODULE_6__["KhoManagementPage"]
    }
];
var KhoManagementPageModule = /** @class */ (function () {
    function KhoManagementPageModule() {
    }
    KhoManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_10__["ModalImportCsvComponent"],
                src_app_components_modal_edit_detail_product_modal_edit_detail_product_component__WEBPACK_IMPORTED_MODULE_11__["ModalEditDetailProductComponent"]
            ],
            declarations: [_kho_management_page__WEBPACK_IMPORTED_MODULE_6__["KhoManagementPage"]]
        })
    ], KhoManagementPageModule);
    return KhoManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/kho-management/kho-management.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/kho-management/kho-management.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Quản lí Kho\n    </ion-title>\n    <ion-buttons slot=\"end\" no-padding mode=\"md\">\n      <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" class=\"product-avarta\" hideWhen=\"android,ios\">\n        <ion-icon mode=\"md\" slot=\"start\" name=\"person\"></ion-icon>\n        {{appValueService.APP_AUTHENTICATION.userName}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content #contentSearch id=\"contentSearch\">\n  <app-tabulator-table [tableData]=\"khoService.listProductDetails\" [columnNames]=\"khoService.columnsTableProduct\"\n    [height]=\"khoService.heightTable\" idElement=\"example-table\" (rowClickEvent)=\"showDetail($event)\">\n  </app-tabulator-table>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"showModalImport($event)\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n        class=\"color-button color-button-fix product-function-button-p button-size\">Import\n      </ion-button>\n      <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\" (click)=\"showAdd($event)\"\n        class=\"color-button color-button-fix product-function-button-p button-size\">Thêm sản phẩm\n      </ion-button>\n      <ion-grid *ngIf=\"!appValueService.APP_PLATFORM_DESKTOP\" class=\"product-function-button-m product-grid-button\"\n        no-padding>\n        <ion-row align-items-center no-padding>\n          <ion-col size=\"3\" class=\"text-center\" no-padding>\n            <ion-button type=\"button\" (click)=\"showModalImport($event)\" class=\"product-search-button color-button\">\n              <ion-icon name=\"cloud-upload\" class=\"product-search-icon\" no-padding></ion-icon>\n            </ion-button>\n            <ion-button type=\"button\" (click)=\"showModalImport($event)\" class=\"product-search-button color-button\">\n              <ion-icon name=\"cloud-download\" class=\"product-search-icon\" no-padding></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" class=\"text-center\" no-padding>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/kho-management/kho-management.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/kho-management/kho-management.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-search-icon {\n  font-size: 2rem !important;\n  width: 100%; }\n\n.product-table-color {\n  background-color: #FAF0E6; }\n\n.product-item-background {\n  --background: transparent; }\n\n.product-grid-info-height {\n  height: 121px; }\n\n/*================================Mobile========================================*/\n\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  .product-table-color {\n    display: none; }\n  .product-avarta {\n    display: none; } }\n\n/* smartphones, iPhone, portrait 480x320 phones */\n\n/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */\n\n/*==================================PC======================================*/\n\n/* common PC */\n\n@media only screen and (min-width: 641px) {\n  .product-search-combobox {\n    width: 70%;\n    height: 1.8rem; }\n  .product-search-icon-p {\n    font-size: 2rem; } }\n\n/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */\n\n/* big landscape tablets, laptops, and desktops */\n\n/* hi-res laptops and desktops */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMva2hvLW1hbmFnZW1lbnQvQzpcXFVzZXJzXFxWb3plclxcRGVza3RvcFxcTWVlQWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxraG8tbWFuYWdlbWVudFxca2hvLW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHlCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQixpRkFBQTs7QUFDQTtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBRWpCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMLGlEQUFBOztBQUtBLDJFQUFBOztBQUtBLDZFQUFBOztBQUNBLGNBQUE7O0FBQ0E7RUFDSTtJQUNJLFVBQVU7SUFDVixjQUFjLEVBQUE7RUFFbEI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBRUwsOEZBQUE7O0FBS0EsaURBQUE7O0FBS0EsZ0NBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9raG8tbWFuYWdlbWVudC9raG8tbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1zZWFyY2gtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMnJlbSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucHJvZHVjdC10YWJsZS1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUYwRTY7XHJcbn1cclxuLnByb2R1Y3QtaXRlbS1iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ucHJvZHVjdC1ncmlkLWluZm8taGVpZ2h0e1xyXG4gICAgaGVpZ2h0OiAxMjFweDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TW9iaWxlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICAgIC5wcm9kdWN0LXRhYmxlLWNvbG9ye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1hdmFydGF7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogc21hcnRwaG9uZXMsIGlQaG9uZSwgcG9ydHJhaXQgNDgweDMyMCBwaG9uZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo0ODBweCkge1xyXG5cclxufVxyXG5cclxuLyogcG9ydHJhaXQgZS1yZWFkZXJzIChOb29rL0tpbmRsZSksIHNtYWxsZXIgdGFibGV0cyBAIDYwMCBvciBAIDY0MCB3aWRlLiAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcblxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1QQz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLyogY29tbW9uIFBDICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NDFweCkge1xyXG4gICAgLnByb2R1Y3Qtc2VhcmNoLWNvbWJvYm94e1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1zZWFyY2gtaWNvbi1we1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxufVxyXG4vKiBwb3J0cmFpdCB0YWJsZXRzLCBwb3J0cmFpdCBpUGFkLCBsYW5kc2NhcGUgZS1yZWFkZXJzLCBsYW5kc2NhcGUgODAweDQ4MCBvciA4NTR4NDgwIHBob25lcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjQxcHgpIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xyXG5cclxufVxyXG5cclxuLyogYmlnIGxhbmRzY2FwZSB0YWJsZXRzLCBsYXB0b3BzLCBhbmQgZGVza3RvcHMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkgYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcblxyXG59XHJcblxyXG4vKiBoaS1yZXMgbGFwdG9wcyBhbmQgZGVza3RvcHMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODFweCkge1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/kho-management/kho-management.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/kho-management/kho-management.page.ts ***!
  \*************************************************************/
/*! exports provided: KhoManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoManagementPage", function() { return KhoManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-import-csv/modal-import-csv.component */ "./src/app/components/modal-import-csv/modal-import-csv.component.ts");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _kho_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kho-management.service */ "./src/app/pages/kho-management/kho-management.service.ts");
/* harmony import */ var src_app_components_modal_edit_detail_product_modal_edit_detail_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/modal-edit-detail-product/modal-edit-detail-product.component */ "./src/app/components/modal-edit-detail-product/modal-edit-detail-product.component.ts");









var KhoManagementPage = /** @class */ (function () {
    function KhoManagementPage(popoverController, khoService, utilsService, appValueService, translate) {
        this.popoverController = popoverController;
        this.khoService = khoService;
        this.utilsService = utilsService;
        this.appValueService = appValueService;
        this.translate = translate;
    }
    KhoManagementPage.prototype.ngOnInit = function () {
    };
    KhoManagementPage.prototype.showModalImport = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_4__["ModalImportCsvComponent"],
                            event: ev,
                            translucent: true,
                            componentProps: { mode: "productDetails", sheetName: "" },
                            cssClass: "import-csv-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (result) {
                            if (result.data && result.data != "close") {
                                _this.utilsService.loadingStart();
                                _this.khoService.importToDB(result.data).subscribe(function (result) {
                                    _this.utilsService.loadingStop();
                                    if (result == true) {
                                        _this.utilsService.showInfoSystem("Import thành công!");
                                    }
                                    else {
                                        _this.utilsService.showError("Import thất bại!");
                                    }
                                }, function (error) {
                                    _this.utilsService.showError(error);
                                });
                            }
                            else {
                                return true;
                            }
                        }, function (error) {
                            _this.utilsService.showError(error);
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KhoManagementPage.prototype.showDetail = function (data) {
        this.showModalEditProduct(data.ev, data.row._row.data);
    };
    KhoManagementPage.prototype.showAdd = function (ev) {
        this.showModalEditProduct(ev, {});
    };
    KhoManagementPage.prototype.showModalEditProduct = function (ev, row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_edit_detail_product_modal_edit_detail_product_component__WEBPACK_IMPORTED_MODULE_8__["ModalEditDetailProductComponent"],
                            id: "editDetailsProductModal",
                            event: ev,
                            translucent: true,
                            componentProps: { rowProduct: row },
                            cssClass: "edit-detail-product-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KhoManagementPage.prototype.ionViewDidEnter = function () {
        var removeHeight = [];
        this.appValueService.APP_TABULATOR_HEIGHT = [this.contentSearch, removeHeight];
        this.khoService.heightTable = this.utilsService.settingTableHeight(this.appValueService.APP_TABULATOR_HEIGHT);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], KhoManagementPage.prototype, "contentSearch", void 0);
    KhoManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kho-management',
            template: __webpack_require__(/*! ./kho-management.page.html */ "./src/app/pages/kho-management/kho-management.page.html"),
            styles: [__webpack_require__(/*! ./kho-management.page.scss */ "./src/app/pages/kho-management/kho-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _kho_management_service__WEBPACK_IMPORTED_MODULE_7__["KhoManagementService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__["AppValueService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], KhoManagementPage);
    return KhoManagementPage;
}());



/***/ }),

/***/ "./src/app/pages/kho-management/kho-management.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/kho-management/kho-management.service.ts ***!
  \****************************************************************/
/*! exports provided: KhoManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoManagementService", function() { return KhoManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var KhoManagementService = /** @class */ (function () {
    function KhoManagementService(constantsService, utilsService, db) {
        var _this = this;
        this.constantsService = constantsService;
        this.utilsService = utilsService;
        this.db = db;
        this.heightTable = "775";
        this.columnsTableProduct = [
            { title: "id", field: "id", align: "left", width: 100 },
            { title: "Tên sản phẩm", field: "Tên sản phẩm", align: "left", width: 300 },
            { title: "Quy cách", field: "Quy cách", align: "left", width: 100 },
            { title: "Phân loại", field: "Phân loại", align: "left", width: 300 },
            { title: "Số lượng", field: "Số lượng", align: "left", width: 100 },
            { title: "Giá nhập", field: "Giá nhập", align: "left", width: 100 },
            {
                title: "Ngày sản xuất", field: "NSX", align: "left", width: 130, formatter: function (cell) {
                    return _this.utilsService.getDateFromStringDD(cell.getValue(), "ddd MMM D YYYY HH:mm:ss Z");
                }
            },
            {
                title: "Hạn sử dụng", field: "HSD", align: "left", width: 130, formatter: function (cell) {
                    return _this.utilsService.getDateFromStringDD(cell.getValue(), "ddd MMM D YYYY HH:mm:ss Z");
                }
            },
            {
                title: "Ngày hết hạn", field: "Ngày hết hạn", align: "left", width: 130, formatter: function (cell) {
                    return _this.utilsService.getDateFromStringDD(cell.getValue(), "ddd MMM D YYYY HH:mm:ss Z");
                }
            },
            { title: "Ngày nhập kho", field: "Ngày nhập kho", align: "left", width: 136 },
            {
                width: 100, formatter: "buttonCross", align: "center", title: "Xóa sản phẩm", headerSort: false, cellClick: function (e, cell) {
                    _this.utilsService.presentAlertConfirmDelete(cell.getRow()._row.data.id, "Thông báo xóa sản phẩm", ' <strong>Sản phẩm sẽ bị xóa</strong>', "ProductDetails");
                    event.stopPropagation();
                }
            }
        ];
        this.listProductDetails = [];
        this.getListProduct();
    }
    KhoManagementService.prototype.getListProduct = function () {
        var _this = this;
        var listProDetails = this.db.list("Kho/");
        listProDetails.valueChanges().subscribe(function (product) {
            _this.listProductDetails = [];
            if (product) {
                for (var index = 0; index < product.length; index++) {
                    var element = product[index];
                    _this.listProductDetails.push(element);
                }
            }
        });
    };
    KhoManagementService.prototype.importToDB = function (dataInsert) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            var addNewData = _this.db.object("/");
            var dataDelete = {};
            dataDelete["NewProduct/"] = null;
            addNewData.update(dataDelete).then(function (result) {
                addNewData.update(dataInsert);
                observer.next(true);
                observer.complete();
            }, function (error) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            });
        }, function (error) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    };
    KhoManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], KhoManagementService);
    return KhoManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-kho-management-kho-management-module.js.map