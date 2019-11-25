(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-management-category-management-module"],{

/***/ "./src/app/pages/category-management/category-management.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/category-management/category-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementPageModule", function() { return CategoryManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-management.page */ "./src/app/pages/category-management/category-management.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/tabulator-table/tabulator-table.component */ "./src/app/components/tabulator-table/tabulator-table.component.ts");
/* harmony import */ var src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-import-csv/modal-import-csv.component */ "./src/app/components/modal-import-csv/modal-import-csv.component.ts");
/* harmony import */ var src_app_components_modal_edit_category_modal_edit_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/modal-edit-category/modal-edit-category.component */ "./src/app/components/modal-edit-category/modal-edit-category.component.ts");












var routes = [
    {
        path: '',
        component: _category_management_page__WEBPACK_IMPORTED_MODULE_6__["CategoryManagementPage"]
    }
];
var CategoryManagementPageModule = /** @class */ (function () {
    function CategoryManagementPageModule() {
    }
    CategoryManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                src_app_components_modal_edit_category_modal_edit_category_component__WEBPACK_IMPORTED_MODULE_11__["ModalEditCategoryComponent"]
            ],
            declarations: [_category_management_page__WEBPACK_IMPORTED_MODULE_6__["CategoryManagementPage"]]
        })
    ], CategoryManagementPageModule);
    return CategoryManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category-management/category-management.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/category-management/category-management.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Quản lí Category\n      </ion-title>\n      <ion-buttons slot=\"end\" no-padding mode=\"md\">\n        <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" class=\"product-avarta\" hideWhen=\"android,ios\">\n          <ion-icon mode=\"md\" slot=\"start\" name=\"person\"></ion-icon>\n          {{appValueService.APP_AUTHENTICATION.userName}}\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content #contentSearch id=\"contentSearch\">      \n    <app-tabulator-table [tableData]=\"utilsService.lstCategory\" [columnNames]=\"categoryService.columnsTable\" [height]=\"categoryService.heightTable\"\n      idElement=\"example-table\" (rowClickEvent)=\"showDetail($event)\">\n    </app-tabulator-table>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"showModalImport($event)\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n          class=\"color-button color-button-fix product-function-button-p button-size\">Import\n        </ion-button>\n        <ion-grid *ngIf=\"!appValueService.APP_PLATFORM_DESKTOP\" class=\"product-function-button-m product-grid-button\"\n          no-padding>\n          <ion-row align-items-center no-padding>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n              <ion-button type=\"button\" (click)=\"showModalImport($event)\" class=\"product-search-button color-button\">\n                <ion-icon name=\"cloud-upload\" class=\"product-search-icon\" no-padding></ion-icon>\n              </ion-button>\n              <ion-button type=\"button\" (click)=\"showModalImport($event)\" class=\"product-search-button color-button\">\n                <ion-icon name=\"cloud-download\" class=\"product-search-icon\" no-padding></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/category-management/category-management.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/category-management/category-management.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-search-icon {\n  font-size: 2rem !important;\n  width: 100%; }\n\n.product-table-color {\n  background-color: #FAF0E6; }\n\n.product-item-background {\n  --background: transparent; }\n\n.product-grid-info-height {\n  height: 121px; }\n\n.menu-item {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem; }\n\n.list-height {\n  height: 15rem; }\n\n.one-level {\n  padding-left: 1rem; }\n\n.list-menu {\n  max-height: 13rem;\n  overflow-y: auto; }\n\n/*================================Mobile========================================*/\n\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  .product-table-color {\n    display: none; }\n  .product-avarta {\n    display: none; } }\n\n/* smartphones, iPhone, portrait 480x320 phones */\n\n/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */\n\n/*==================================PC======================================*/\n\n/* common PC */\n\n@media only screen and (min-width: 641px) {\n  .product-search-combobox {\n    width: 70%;\n    height: 1.8rem; }\n  .product-search-icon-p {\n    font-size: 2rem; } }\n\n/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */\n\n/* big landscape tablets, laptops, and desktops */\n\n/* hi-res laptops and desktops */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktbWFuYWdlbWVudC9DOlxcVXNlcnNcXFZvemVyXFxEZXNrdG9wXFxNZWVBZG1pbi9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3J5LW1hbmFnZW1lbnRcXGNhdGVnb3J5LW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHlCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVwQixpRkFBQTs7QUFDQTtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBRWpCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUlMLGlEQUFBOztBQUtBLDJFQUFBOztBQUtBLDZFQUFBOztBQUNBLGNBQUE7O0FBQ0E7RUFDSTtJQUNJLFVBQVU7SUFDVixjQUFjLEVBQUE7RUFFbEI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBRUwsOEZBQUE7O0FBS0EsaURBQUE7O0FBS0EsZ0NBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1tYW5hZ2VtZW50L2NhdGVnb3J5LW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Qtc2VhcmNoLWljb257XHJcbiAgICBmb250LXNpemU6IDJyZW0haW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByb2R1Y3QtdGFibGUtY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMEU2O1xyXG59XHJcbi5wcm9kdWN0LWl0ZW0tYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZC1pbmZvLWhlaWdodHtcclxuICAgIGhlaWdodDogMTIxcHg7XHJcbn1cclxuLm1lbnUtaXRlbXtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG59XHJcbi5saXN0LWhlaWdodHtcclxuICAgIGhlaWdodDogMTVyZW07XHJcbn1cclxuLm9uZS1sZXZlbHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG4ubGlzdC1tZW51e1xyXG4gICAgbWF4LWhlaWdodDogMTNyZW07XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Nb2JpbGU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG4gICAgLnByb2R1Y3QtdGFibGUtY29sb3J7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH0gICAgXHJcbiAgICAucHJvZHVjdC1hdmFydGF7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICAgXHJcbn1cclxuXHJcbi8qIHNtYXJ0cGhvbmVzLCBpUGhvbmUsIHBvcnRyYWl0IDQ4MHgzMjAgcGhvbmVzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIHBvcnRyYWl0IGUtcmVhZGVycyAoTm9vay9LaW5kbGUpLCBzbWFsbGVyIHRhYmxldHMgQCA2MDAgb3IgQCA2NDAgd2lkZS4gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG5cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09UEM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi8qIGNvbW1vbiBQQyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjQxcHgpIHtcclxuICAgIC5wcm9kdWN0LXNlYXJjaC1jb21ib2JveHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3Qtc2VhcmNoLWljb24tcHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbn1cclxuLyogcG9ydHJhaXQgdGFibGV0cywgcG9ydHJhaXQgaVBhZCwgbGFuZHNjYXBlIGUtcmVhZGVycywgbGFuZHNjYXBlIDgwMHg0ODAgb3IgODU0eDQ4MCBwaG9uZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjY0MXB4KSBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIGJpZyBsYW5kc2NhcGUgdGFibGV0cywgbGFwdG9wcywgYW5kIGRlc2t0b3BzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG5cclxufVxyXG5cclxuLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgxcHgpIHtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/category-management/category-management.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/category-management/category-management.page.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementPage", function() { return CategoryManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-import-csv/modal-import-csv.component */ "./src/app/components/modal-import-csv/modal-import-csv.component.ts");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _category_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-management.service */ "./src/app/pages/category-management/category-management.service.ts");
/* harmony import */ var src_app_components_modal_edit_category_modal_edit_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/modal-edit-category/modal-edit-category.component */ "./src/app/components/modal-edit-category/modal-edit-category.component.ts");









var CategoryManagementPage = /** @class */ (function () {
    function CategoryManagementPage(popoverController, categoryService, utilsService, appValueService, translate) {
        this.popoverController = popoverController;
        this.categoryService = categoryService;
        this.utilsService = utilsService;
        this.appValueService = appValueService;
        this.translate = translate;
    }
    CategoryManagementPage.prototype.ngOnInit = function () {
    };
    CategoryManagementPage.prototype.showDetail = function (data) {
        this.showModalEditCategory(data.ev, data.row._row.data);
    };
    CategoryManagementPage.prototype.showModalEditCategory = function (ev, row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_edit_category_modal_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["ModalEditCategoryComponent"],
                            id: "editCategoryModal",
                            event: ev,
                            translucent: true,
                            componentProps: { rowProduct: row },
                            cssClass: "edit-category-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryManagementPage.prototype.showModalImport = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_import_csv_modal_import_csv_component__WEBPACK_IMPORTED_MODULE_4__["ModalImportCsvComponent"],
                            event: ev,
                            translucent: true,
                            componentProps: { mode: "category", sheetName: "Category" },
                            cssClass: "import-csv-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (result) {
                            if (result.data && result.data != "close") {
                                _this.utilsService.loadingStart();
                                _this.categoryService.importToDB(result.data).subscribe(function (result) {
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
    CategoryManagementPage.prototype.ionViewDidEnter = function () {
        var removeHeight = [];
        this.appValueService.APP_TABULATOR_HEIGHT = [this.contentSearch, removeHeight];
        this.categoryService.heightTable = this.utilsService.settingTableHeight(this.appValueService.APP_TABULATOR_HEIGHT);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoryManagementPage.prototype, "contentSearch", void 0);
    CategoryManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-management',
            template: __webpack_require__(/*! ./category-management.page.html */ "./src/app/pages/category-management/category-management.page.html"),
            styles: [__webpack_require__(/*! ./category-management.page.scss */ "./src/app/pages/category-management/category-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _category_management_service__WEBPACK_IMPORTED_MODULE_7__["CategoryManagementService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__["AppValueService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], CategoryManagementPage);
    return CategoryManagementPage;
}());



/***/ }),

/***/ "./src/app/pages/category-management/category-management.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/category-management/category-management.service.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementService", function() { return CategoryManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var CategoryManagementService = /** @class */ (function () {
    function CategoryManagementService(constantsService, db, utilsService) {
        this.constantsService = constantsService;
        this.db = db;
        this.utilsService = utilsService;
        this.heightTable = "775";
        this.columnsTable = [
            { title: "id", field: "id", align: "left", width: 50 },
            { title: "Title", field: "title", align: "left", width: 200 },
            { title: "Value", field: "value", align: "left", width: 100 },
            { title: "Active", field: "active", align: "left", width: 100 }
        ];
    }
    CategoryManagementService.prototype.importToDB = function (dataInsert) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            var addNewData = _this.db.object("/");
            var dataDelete = {};
            dataDelete["Category/"] = null;
            addNewData.update(dataDelete).then(function (result) {
                addNewData.update(dataInsert).then(function (result) {
                    observer.next(true);
                    observer.complete();
                }).catch(function (error) {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                });
            }).catch(function (error) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            });
        }, function (error) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    };
    CategoryManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], CategoryManagementService);
    return CategoryManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-management-category-management-module.js.map