(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notify-management-notify-management-module"],{

/***/ "./src/app/pages/notify-management/notify-management.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/notify-management/notify-management.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotifyManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyManagementPageModule", function() { return NotifyManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notify_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notify-management.page */ "./src/app/pages/notify-management/notify-management.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_tabulator_table_tabulator_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/tabulator-table/tabulator-table.component */ "./src/app/components/tabulator-table/tabulator-table.component.ts");
/* harmony import */ var src_app_components_modal_edit_notify_modal_edit_notify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-edit-notify/modal-edit-notify.component */ "./src/app/components/modal-edit-notify/modal-edit-notify.component.ts");











var routes = [
    {
        path: '',
        component: _notify_management_page__WEBPACK_IMPORTED_MODULE_6__["NotifyManagementPage"]
    }
];
var NotifyManagementPageModule = /** @class */ (function () {
    function NotifyManagementPageModule() {
    }
    NotifyManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                src_app_components_modal_edit_notify_modal_edit_notify_component__WEBPACK_IMPORTED_MODULE_10__["ModalEditNotifyComponent"]
            ],
            declarations: [_notify_management_page__WEBPACK_IMPORTED_MODULE_6__["NotifyManagementPage"]]
        })
    ], NotifyManagementPageModule);
    return NotifyManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notify-management/notify-management.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/notify-management/notify-management.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Quản lí thông báo\n      </ion-title>\n      <ion-buttons slot=\"end\" no-padding mode=\"md\">\n        <ion-button *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" class=\"product-avarta\" hideWhen=\"android,ios\">\n          <ion-icon mode=\"md\" slot=\"start\" name=\"person\"></ion-icon>\n          {{appValueService.APP_AUTHENTICATION.userName}}\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content #contentSearch id=\"contentSearch\">\n    <app-tabulator-table [tableData]=\"notifyService.listNotify\" [columnNames]=\"notifyService.columnsTable\"\n      [height]=\"heightTable\" idElement=\"example-table\" (rowClickEvent)=\"showDetail($event, 'edit')\">\n    </app-tabulator-table>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"showDetail($event, 'add')\" *ngIf=\"appValueService.APP_PLATFORM_DESKTOP\" type=\"button\"\n          class=\"color-button color-button-fix product-function-button-p button-size\">Thêm thông báo\n        </ion-button>\n        <ion-grid *ngIf=\"!appValueService.APP_PLATFORM_DESKTOP\" class=\"product-function-button-m product-grid-button\"\n          no-padding>\n          <ion-row align-items-center no-padding>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n              <ion-button type=\"button\" (click)=\"showDetail($event, 'add')\" class=\"product-search-button color-button\">\n                <ion-icon name=\"cloud-upload\" class=\"product-search-icon\" no-padding></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"3\" class=\"text-center\" no-padding>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/notify-management/notify-management.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/notify-management/notify-management.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmeS1tYW5hZ2VtZW50L25vdGlmeS1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/notify-management/notify-management.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notify-management/notify-management.page.ts ***!
  \*******************************************************************/
/*! exports provided: NotifyManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyManagementPage", function() { return NotifyManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notify_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notify-management.service */ "./src/app/pages/notify-management/notify-management.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app-value.service */ "./src/app/services/app-value.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_modal_edit_notify_modal_edit_notify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modal-edit-notify/modal-edit-notify.component */ "./src/app/components/modal-edit-notify/modal-edit-notify.component.ts");








var NotifyManagementPage = /** @class */ (function () {
    function NotifyManagementPage(popoverController, notifyService, utilsService, appValueService, translate) {
        this.popoverController = popoverController;
        this.notifyService = notifyService;
        this.utilsService = utilsService;
        this.appValueService = appValueService;
        this.translate = translate;
        this.heightTable = "775";
    }
    NotifyManagementPage.prototype.ngOnInit = function () {
    };
    NotifyManagementPage.prototype.showDetail = function (data, mode) {
        if (mode == "edit") {
            this.showModalEditNotify(data.ev, data.row._row.data);
        }
        else {
            this.showModalEditNotify(null, null);
        }
    };
    NotifyManagementPage.prototype.showModalEditNotify = function (ev, row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_modal_edit_notify_modal_edit_notify_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditNotifyComponent"],
                            id: "editNotifyModal",
                            event: ev,
                            translucent: true,
                            componentProps: { rowProduct: row },
                            cssClass: "edit-notify-popover"
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NotifyManagementPage.prototype.ionViewDidEnter = function () {
        this.heightTable = this.contentSearch.el.offsetHeight;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotifyManagementPage.prototype, "contentSearch", void 0);
    NotifyManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notify-management',
            template: __webpack_require__(/*! ./notify-management.page.html */ "./src/app/pages/notify-management/notify-management.page.html"),
            styles: [__webpack_require__(/*! ./notify-management.page.scss */ "./src/app/pages/notify-management/notify-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _notify_management_service__WEBPACK_IMPORTED_MODULE_2__["NotifyManagementService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            src_app_services_app_value_service__WEBPACK_IMPORTED_MODULE_5__["AppValueService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], NotifyManagementPage);
    return NotifyManagementPage;
}());



/***/ }),

/***/ "./src/app/pages/notify-management/notify-management.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/notify-management/notify-management.service.ts ***!
  \**********************************************************************/
/*! exports provided: NotifyManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyManagementService", function() { return NotifyManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");





var NotifyManagementService = /** @class */ (function () {
    function NotifyManagementService(constantsService, db, utilsService) {
        this.constantsService = constantsService;
        this.db = db;
        this.utilsService = utilsService;
        this.columnsTable = [
            { title: "id", field: "id", align: "left", width: 50 },
            { title: "Nội dung thông báo", field: "notify-content", align: "left", width: 200 },
            { title: "Loại thông báo", field: "type", align: "left", width: 250 },
            { title: "Hình thức thông báo", field: "type_show", align: "left", width: 250 },
            { title: "Ngày bắt đầu", field: "startDate", align: "left", width: 250 },
            { title: "Ngày kết thúc", field: "endDate", align: "left", width: 150 },
            { title: "Active", field: "active", align: "left", width: 100 }
        ];
        this.listNotify = [];
        this.getListNotify();
    }
    NotifyManagementService.prototype.getListNotify = function () {
        var _this = this;
        var listU = this.db.list("Notify/");
        listU.valueChanges().subscribe(function (notify) {
            _this.listNotify = [];
            if (notify) {
                for (var index = 0; index < notify.length; index++) {
                    var element = notify[index];
                    _this.listNotify.push(element);
                }
            }
        });
    };
    NotifyManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], NotifyManagementService);
    return NotifyManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notify-management-notify-management-module.js.map