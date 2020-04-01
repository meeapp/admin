(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-management-product-management-module"],{

/***/ "./src/app/pages/product-management/product-management.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-management/product-management.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementPageModule", function() { return ProductManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-management.page */ "./src/app/pages/product-management/product-management.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/tabulator-table/tabulator-table.component */ "./src/app/components/tabulator-table/tabulator-table.component.ts");
/* harmony import */ var src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-import-csv/modal-import-csv.component */ "./src/app/components/modal-import-csv/modal-import-csv.component.ts");
/* harmony import */ var src_app_components_modal_edit_product_modal_edit_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/modal-edit-product/modal-edit-product.component */ "./src/app/components/modal-edit-product/modal-edit-product.component.ts");












var routes = [
    {
        path: '',
        component: _product_management_page__WEBPACK_IMPORTED_MODULE_6__["ProductManagementPage"]
    }
];
var ProductManagementPageModule = /** @class */ (function () {
    function ProductManagementPageModule() {
    }
    ProductManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                src_app_components_modal_edit_product_modal_edit_product_component__WEBPACK_IMPORTED_MODULE_11__["ModalEditProductComponent"]
            ],
            declarations: [_product_management_page__WEBPACK_IMPORTED_MODULE_6__["ProductManagementPage"]]
        })
    ], ProductManagementPageModule);
    return ProductManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-management/product-management.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-management/product-management.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Quản lí sản phẩm\n    </ion-title>\n    <ion-buttons slot=\"end\" no-padding mode=\"md\">\n      <input type=\"text\" placeholder=\"Nhập tên | giá\" class=\"search-padding\" [(ngModel)]=\"filterValue\" (ngModelChange)=\"filterContent($event)\">\n      <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" class=\"product-avarta\" hideWhen=\"android,ios\">        \n        <ion-icon mode=\"md\" slot=\"start\" name=\"person\"></ion-icon>\n        {{appValueService.APP_AUTHENTICATION.userName}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content #contentSearch id=\"contentSearch\">\n  <app-tabulator-table [tableData]=\"lstProduct\" [columnNames]=\"utilsService.columnsTableProduct\" [height]=\"heightTable\"\n    idElement=\"example-table\" isSelectable=\"1\" (rowClickEvent)=\"showDetail($event)\">\n  </app-tabulator-table>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button (click)=\"showModalImport($event)\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n        class=\"color-button color-button-fix product-function-button-p button-size\">Import Excel\n      </ion-button>\n      <ion-button (click)=\"exportExcel()\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n        class=\"color-button color-button-fix product-function-button-p button-size\">Export Excel\n      </ion-button> -->\n      <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\" (click) = \"showAdd($event)\" \n        class=\"color-button color-button-fix product-function-button-p button-size\">Thêm sản phẩm\n      </ion-button>\n      <ion-grid *ngIf=\"!appValueService.APP_PLATFORM_DESKTOP\" class=\"product-function-button-m product-grid-button\"\n        no-padding>\n        <ion-row align-items-center no-padding>\n          <ion-col size=\"3\" class=\"text-center\" no-padding>\n            <ion-button type=\"button\" (click)=\"showModalImport($event)\" class=\"product-search-button color-button\">\n              <ion-icon name=\"cloud-upload\" class=\"product-search-icon\" no-padding></ion-icon>\n            </ion-button>\n            <ion-button type=\"button\" (click)=\"showModalImport($event)\" class=\"product-search-button color-button\">\n              <ion-icon name=\"cloud-download\" class=\"product-search-icon\" no-padding></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" class=\"text-center\" no-padding>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/product-management/product-management.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-management/product-management.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-search-icon {\n  font-size: 2rem !important;\n  width: 100%; }\n\n.search-padding {\n  padding-left: 8px; }\n\n.product-table-color {\n  background-color: #FAF0E6; }\n\n.product-item-background {\n  --background: transparent; }\n\n.product-grid-info-height {\n  height: 121px; }\n\n/*================================Mobile========================================*/\n\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  .product-table-color {\n    display: none; }\n  .product-avarta {\n    display: none; } }\n\n/* smartphones, iPhone, portrait 480x320 phones */\n\n/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */\n\n/*==================================PC======================================*/\n\n/* common PC */\n\n@media only screen and (min-width: 641px) {\n  .product-search-combobox {\n    width: 70%;\n    height: 1.8rem; }\n  .product-search-icon-p {\n    font-size: 2rem; } }\n\n/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */\n\n/* big landscape tablets, laptops, and desktops */\n\n/* hi-res laptops and desktops */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1tYW5hZ2VtZW50L0M6XFxVc2Vyc1xcVm96ZXJcXERlc2t0b3BcXE1lZUFkbWluL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdC1tYW5hZ2VtZW50XFxwcm9kdWN0LW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHlCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQixpRkFBQTs7QUFDQTtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBRWpCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMLGlEQUFBOztBQUtBLDJFQUFBOztBQUtBLDZFQUFBOztBQUNBLGNBQUE7O0FBQ0E7RUFFSTtJQUNJLFVBQVU7SUFDVixjQUFjLEVBQUE7RUFHbEI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBRUwsOEZBQUE7O0FBS0EsaURBQUE7O0FBS0EsZ0NBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LW1hbmFnZW1lbnQvcHJvZHVjdC1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXNlYXJjaC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAycmVtIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZWFyY2gtcGFkZGluZ3tcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbi5wcm9kdWN0LXRhYmxlLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBFNjtcclxufVxyXG4ucHJvZHVjdC1pdGVtLWJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5wcm9kdWN0LWdyaWQtaW5mby1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDEyMXB4O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Nb2JpbGU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG4gICAgLnByb2R1Y3QtdGFibGUtY29sb3J7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LWF2YXJ0YXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfSAgICAgXHJcbn1cclxuXHJcbi8qIHNtYXJ0cGhvbmVzLCBpUGhvbmUsIHBvcnRyYWl0IDQ4MHgzMjAgcGhvbmVzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIHBvcnRyYWl0IGUtcmVhZGVycyAoTm9vay9LaW5kbGUpLCBzbWFsbGVyIHRhYmxldHMgQCA2MDAgb3IgQCA2NDAgd2lkZS4gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG5cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09UEM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi8qIGNvbW1vbiBQQyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjQxcHgpIHtcclxuICAgIFxyXG4gICAgLnByb2R1Y3Qtc2VhcmNoLWNvbWJvYm94e1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9kdWN0LXNlYXJjaC1pY29uLXB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG59XHJcbi8qIHBvcnRyYWl0IHRhYmxldHMsIHBvcnRyYWl0IGlQYWQsIGxhbmRzY2FwZSBlLXJlYWRlcnMsIGxhbmRzY2FwZSA4MDB4NDgwIG9yIDg1NHg0ODAgcGhvbmVzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NDFweCkgYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XHJcblxyXG59XHJcblxyXG4vKiBiaWcgbGFuZHNjYXBlIHRhYmxldHMsIGxhcHRvcHMsIGFuZCBkZXNrdG9wcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNXB4KSBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIGhpLXJlcyBsYXB0b3BzIGFuZCBkZXNrdG9wcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MXB4KSB7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product-management/product-management.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/product-management/product-management.page.ts ***!
  \*********************************************************************/
/*! exports provided: ProductManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementPage", function() { return ProductManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-import-csv/modal-import-csv.component */ "./src/app/components/modal-import-csv/modal-import-csv.component.ts");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _product_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-management.service */ "./src/app/pages/product-management/product-management.service.ts");
/* harmony import */ var src_app_components_modal_edit_product_modal_edit_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/modal-edit-product/modal-edit-product.component */ "./src/app/components/modal-edit-product/modal-edit-product.component.ts");









var ProductManagementPage = /** @class */ (function () {
    function ProductManagementPage(popoverController, productService, utilsService, appValueService, translate) {
        var _this = this;
        this.popoverController = popoverController;
        this.productService = productService;
        this.utilsService = utilsService;
        this.appValueService = appValueService;
        this.translate = translate;
        this.heightTable = "775";
        this.searchInfo = {};
        this.filterValue = "";
        this.lstProduct = [];
        if (this.utilsService.listProduct.length > 0) {
            this.loadData();
        }
        else {
            this.utilsService.observerProductLoaded.subscribe(function () {
                _this.loadData();
            });
        }
    }
    ProductManagementPage.prototype.ngOnInit = function () {
    };
    ProductManagementPage.prototype.loadData = function () {
        this.utilsService.loadingStart();
        var tableDataTemp = [];
        for (var index = 0; index < this.utilsService.listProduct.length; index++) {
            var element = this.utilsService.listProduct[index];
            tableDataTemp.push(element);
        }
        this.lstProduct = tableDataTemp;
        this.utilsService.loadingStop();
    };
    ProductManagementPage.prototype.filterContent = function (ev) {
        var _this = this;
        this.lstProduct = [];
        if (ev != "" && ev.length > 2) {
            this.lstProduct = this.utilsService.listProduct.filter(function (item) {
                return _this.utilsService.xoa_dau(item["Tên sản phẩm"]).toLowerCase().includes(_this.utilsService.xoa_dau(ev).toLowerCase()) || _this.utilsService.xoa_dau(item["Giá bán lẻ"]).toLowerCase().includes(_this.utilsService.xoa_dau(ev).toLowerCase());
            });
        }
        else {
            for (var index = 0; index < this.utilsService.listProduct.length; index++) {
                var element = this.utilsService.listProduct[index];
                this.lstProduct.push(element);
            }
        }
    };
    ProductManagementPage.prototype.showModalImport = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_4__["ModalImportCsvComponent"],
                            event: ev,
                            translucent: true,
                            componentProps: { mode: "product", sheetName: "DanhMuc" },
                            cssClass: "import-csv-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (result) {
                            if (result.data && result.data != "close") {
                                if (result.data.error) {
                                    _this.utilsService.showError(result.data.error);
                                    return;
                                }
                                _this.utilsService.loadingStart();
                                _this.productService.importToDB(result.data).subscribe(function (result) {
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
    ProductManagementPage.prototype.showDetail = function (data) {
        if (data.ev.toElement.outerHTML.includes('tabulator-field="Tên sản phẩm"')) {
            this.showModalEditProduct(data.ev, data.row._row.data);
        }
    };
    ProductManagementPage.prototype.showAdd = function (ev) {
        this.showModalEditProduct(ev, {});
    };
    ProductManagementPage.prototype.showModalEditProduct = function (ev, row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_edit_product_modal_edit_product_component__WEBPACK_IMPORTED_MODULE_8__["ModalEditProductComponent"],
                            id: "editProductModal",
                            event: ev,
                            translucent: true,
                            componentProps: { rowProduct: row },
                            cssClass: "edit-product-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductManagementPage.prototype.exportExcel = function () {
        var data = [];
        for (var key in this.utilsService.listProductObject) {
            var element = this.utilsService.listProductObject[key];
            var row = {};
            var index = 0;
            for (var keyElement in element) {
                var properties = element[keyElement];
                if (parseInt(keyElement).toString() != "NaN") {
                    if (this.utilsService.listSubCategoryObject[keyElement]) {
                        row["Tên category_" + index] = this.utilsService.listSubCategoryObject[keyElement].title;
                        index++;
                    }
                }
                else {
                    row[keyElement] = properties ? properties : 0;
                }
            }
            data.push(row);
        }
        this.utilsService.exportAsExcelFile(data, "product", "DanhMuc");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductManagementPage.prototype, "contentSearch", void 0);
    ProductManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-management',
            template: __webpack_require__(/*! ./product-management.page.html */ "./src/app/pages/product-management/product-management.page.html"),
            styles: [__webpack_require__(/*! ./product-management.page.scss */ "./src/app/pages/product-management/product-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _product_management_service__WEBPACK_IMPORTED_MODULE_7__["ProductManagementService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__["AppValueService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ProductManagementPage);
    return ProductManagementPage;
}());



/***/ }),

/***/ "./src/app/pages/product-management/product-management.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/product-management/product-management.service.ts ***!
  \************************************************************************/
/*! exports provided: ProductManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementService", function() { return ProductManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var ProductManagementService = /** @class */ (function () {
    function ProductManagementService(constantsService, utilsService, db) {
        this.constantsService = constantsService;
        this.utilsService = utilsService;
        this.db = db;
    }
    ProductManagementService.prototype.importToDB = function (dataInsert) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            var addNewData = _this.db.object("/");
            addNewData.update(dataInsert).then(function (result) {
                observer.next(true);
                observer.complete();
            }).catch(function (error) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            });
        }, function (error) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    };
    ProductManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], ProductManagementService);
    return ProductManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-management-product-management-module.js.map