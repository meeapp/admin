(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-management-chat-management-module"],{

/***/ "./src/app/pages/chat-management/chat-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/chat-management/chat-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementPageModule", function() { return ChatManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-management.page */ "./src/app/pages/chat-management/chat-management.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/chat-box/chat-box.component */ "./src/app/components/chat-box/chat-box.component.ts");









var routes = [
    {
        path: '',
        component: _chat_management_page__WEBPACK_IMPORTED_MODULE_6__["ChatManagementPage"]
    }
];
var ChatManagementPageModule = /** @class */ (function () {
    function ChatManagementPageModule() {
    }
    ChatManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [
                src_app_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__["ChatBoxComponent"]
            ],
            declarations: [_chat_management_page__WEBPACK_IMPORTED_MODULE_6__["ChatManagementPage"]]
        })
    ], ChatManagementPageModule);
    return ChatManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chat-management/chat-management.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/chat-management/chat-management.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"colormain\" class=\"color-text\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>chat-management</ion-title>\n  </ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-row class=\"button-header\">\n      <ion-col size=\"3\" class=\"button-border\">\n      </ion-col>\n      <ion-col size=\"6\" class=\"button-border\">\n        <ion-button>\n          {{currentChat.userName}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-buttons>\n</ion-header>\n<ion-content id=\"chat-box\" scroll-y=\"false\">\n  <ion-row class=\"button-header\">\n    <ion-col size=\"3\" class=\"button-border\">\n      <ion-list class=\"list-user-online\" id=\"chat-list\">\n        <ion-list-header>\n          Khách hàng đang chat\n        </ion-list-header>\n        <ion-item-sliding *ngFor=\"let chatMember of utilsService.listUserChat\">\n          <ion-item (click)=\"selectUser(chatMember)\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"chatMember.image\">\n            </ion-avatar>\n            <ion-label [class.notify-message]=\"chatMember.read == false\">\n              <h2>{{chatMember.userName}}</h2>\n              <p>{{chatMember.chat}}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"deleteChat(chatMember)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n    <ion-col id=\"chat-container\" size=\"6\" class=\"row-chat bg-image\"\n      [style.background]=\"'url(' + utilsService.dataPublish.bgChat + ')'\" no-padding>\n      <div id=\"chat-parent\" class=\"bg-chat-box\" [ngClass]=\"{ 'bg-image-X': phone_model=='iPhone X'}\">\n        <ion-row *ngFor=\"let conv of utilsService.listChatContent[currentChat.id]?.chat; let i = index;\"\n          class=\"full no-padding\">\n          <ion-col class=\"no-padding chat-row\" [ngClass]=\"{ 'reverse': conv.sender}\">\n            <div class=\"avatar-parent\">\n              <div class=\"avatar-border\"></div>\n              <img [src]=\"conv.image\" class=\"avatar\">\n            </div>\n            <div [ngClass]=\"{ 'name-row-parent-right': conv.sender,'name-row-parent-left': !conv.sender}\">\n              <div class=\"no-padding\" [ngClass]=\"{ 'name-row-right': conv.sender,'name-row-left': !conv.sender}\">\n                {{conv.sender ? currentChat.userName: currentChat.support.userName}}\n                <div [ngClass]=\"{ 'timer-right': conv.sender,'timer-left': !conv.sender}\">{{conv.time}}\n                  <ion-icon *ngIf=\"conv.sender && conv.sent\" name=\"checkmark\" [color]=\"conv.read ? 'd3green': 'light'\"\n                    class=\"first-tick\"></ion-icon>\n                  <ion-icon *ngIf=\"conv.sender && conv.delivered\" name=\"checkmark\"\n                    [color]=\"conv.read ? 'd3green': 'light'\" class=\"second-tick\"></ion-icon>\n                </div>\n                <div [ngClass]=\"{ 'reverse-arc-right': conv.sender,'reverse-arc-left': !conv.sender}\">\n                  <div [ngClass]=\"{ 'reverse-arc-color-right': conv.sender,'reverse-arc-color-left': !conv.sender}\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"no-padding\" [ngClass]=\"{ 'message-row-right': conv.sender,'message-row-left': !conv.sender}\">\n                <ion-text *ngIf=\"conv.text\" no-margin class=\"text\">{{conv.text + \" \"}}</ion-text>\n                <img class=\"avatar image-product\" *ngIf=\"conv.productImage\" [src]=\"conv.productImage\">\n                <img *ngIf=\"conv.iconImage\" [src]=\"conv.iconImage\">\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <form #chatForm=\"ngForm\" (ngSubmit)=\"send(currentChat)\">\n        <ion-row id=\"chat-parent-footer\" translucent class=\"input-position custom-footer-row\">\n          <ion-col size=\"9\">\n            <ion-input class=\"input restrict ion-text-left\" type=\"text\" placeholder=\"Nhập nội dung\" name=\"chatInput\"\n              [(ngModel)]=\"input\" padding-start>\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button type=\"submit\" shape=\"round\" class=\"send-button\" color=\"d3blue\">\n              <ion-text color=\"light\">SEND</ion-text>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-col>\n    <ion-col id=\"chat-icon\" size=\"3\" class=\"row-chat list-user-online\" no-padding>\n      <ion-row no-padding class=\"button-header\">\n        <ion-col no-padding size=\"4\" *ngFor=\"let itemIcon of listIcon\">\n          <img [ngClass]=\"{'select-image': iconImage.includes(itemIcon)}\" [src]=\"'./assets/imgs/emo/' + itemIcon\"\n            (click)=\"selectImage('./assets/imgs/emo/' + itemIcon)\">\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/chat-management/chat-management.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/chat-management/chat-management.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-header {\n  text-align: center;\n  width: 100%; }\n\n.row-chat {\n  width: 100%; }\n\n.button-border {\n  border-right: 1px solid rgba(0, 0, 0, 0.13); }\n\n.list-user-online {\n  overflow-y: scroll; }\n\n.menu {\n  color: white !important; }\n\n.white {\n  color: white !important; }\n\n.full {\n  display: block;\n  width: 100%;\n  margin-top: 25px; }\n\n.left {\n  float: left; }\n\n.avatar {\n  width: calc(4vw - 4px);\n  height: calc(4vw - 4px);\n  border-radius: calc(8vw - 2px);\n  z-index: 2; }\n\n.restrict {\n  --height: 33px; }\n\n.input {\n  background-color: white;\n  border-radius: 20px;\n  font-size: .9em !important;\n  box-shadow: 0 0 10px #444; }\n\n.animate {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  transition: .1s; }\n\n.right {\n  float: right; }\n\n.text {\n  font-size: 0.8rem;\n  margin-right: 1.5rem; }\n\n.card {\n  margin-bottom: 9px;\n  max-width: 80%;\n  padding: 12px;\n  border-radius: 6px;\n  border: 0.5px solid #d2d2d2;\n  background-color: white; }\n\n.item-inner {\n  height: 33px; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n.input-position {\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8)); }\n\n.custom-footer-row {\n  height: 3rem; }\n\n.send-button {\n  height: 36px;\n  width: 90%;\n  box-shadow: 0 0 10px #444;\n  border-radius: 50%; }\n\n.bg-image {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  padding: 0px 15px 55px 15px; }\n\n.bg-chat-box {\n  background-color: transparent;\n  overflow: scroll; }\n\n.bg-image-X {\n  padding: 80px 15px 75px 15px; }\n\n.chat-item {\n  --background: transparent; }\n\n.no-padding {\n  --padding: 0;\n  padding: 0; }\n\n.chat-row {\n  display: flex;\n  flex-direction: row; }\n\n.reverse {\n  flex-direction: row-reverse; }\n\n.name-row-left {\n  background: white;\n  padding: 5px 10px 5px 9vw;\n  margin-left: -8vw;\n  z-index: 1;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-top-right-radius: 16px;\n  font-size: 12px;\n  position: relative;\n  height: 1.5vw; }\n\n.name-row-right {\n  background: white;\n  padding: 5px 9vw 5px 10px;\n  margin-right: -8vw;\n  z-index: 1;\n  text-align: right;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-top-left-radius: 16px;\n  font-size: 12px;\n  position: relative;\n  height: 1.5vw; }\n\n.name-row-parent-left {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.name-row-parent-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end; }\n\n.message-row-left {\n  background: #0c96df;\n  padding: 7px 15px 8px 12vw;\n  margin-left: -8vw;\n  min-height: 3vw;\n  display: grid;\n  align-items: center;\n  border-top-right-radius: 5vw;\n  border-bottom-right-radius: 5vw;\n  color: white;\n  position: relative; }\n\n.message-row-right {\n  background: #00C06D;\n  padding: 7px 15vw 8px 2vw;\n  margin-right: -8vw;\n  min-height: 3vw;\n  display: grid;\n  align-items: center;\n  border-top-left-radius: 5vw;\n  border-bottom-left-radius: 5vw;\n  color: white;\n  position: relative; }\n\n.avatar-parent {\n  z-index: 2;\n  border-radius: 8vw;\n  min-width: 4vw;\n  height: 4vw;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.6rem; }\n\n.avatar-border {\n  position: absolute;\n  width: 4vw;\n  height: 4vw;\n  top: 0;\n  left: 0;\n  border: 1vw solid white;\n  border-radius: 50%;\n  box-shadow: none;\n  outline: none; }\n\n.reverse-arc-left {\n  width: 6vw;\n  height: 3vw;\n  position: absolute;\n  background: white;\n  left: 5.7vw;\n  bottom: -3vw;\n  display: flex;\n  justify-content: flex-end;\n  border-bottom-right-radius: 4vw; }\n\n.reverse-arc-color-left {\n  width: 5vw;\n  height: 3vw;\n  background: #0c96df;\n  border-top-left-radius: 4vw;\n  border-bottom-right-radius: 2vw; }\n\n.reverse-arc-right {\n  width: 6vw;\n  height: 3vw;\n  position: absolute;\n  background: white;\n  right: 5.7vw;\n  bottom: -3vw;\n  display: flex;\n  justify-content: flex-start;\n  border-bottom-left-radius: 4vw; }\n\n#chat-parent {\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.reverse-arc-color-right {\n  width: 5vw;\n  height: 3vw;\n  background: #00C06D;\n  border-top-right-radius: 4vw;\n  border-bottom-left-radius: 3vw; }\n\n.timer-left {\n  position: absolute;\n  right: -75px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n  top: 4px; }\n\n.timer-right {\n  position: absolute;\n  left: -75px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n  top: 4px; }\n\n.title-block {\n  display: flex;\n  justify-content: center;\n  align-content: center; }\n\n.title-icon {\n  font-size: 32px; }\n\n.title-text {\n  padding-left: 5px;\n  align-self: center; }\n\n.first-tick {\n  font-size: 25px;\n  position: absolute;\n  left: -24px;\n  top: -4px; }\n\n.second-tick {\n  font-size: 25px;\n  position: absolute;\n  left: -28px;\n  top: -4px; }\n\n.custom-footer {\n  height: 65px; }\n\n.select-image {\n  border: 1px solid gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1tYW5hZ2VtZW50L0M6XFxVc2Vyc1xcVm96ZXJcXERlc2t0b3BcXE1lZUFkbWluL3NyY1xcYXBwXFxwYWdlc1xcY2hhdC1tYW5hZ2VtZW50XFxjaGF0LW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFZjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNJLDJDQUF3QyxFQUFBOztBQUU1QztFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksY0FBUyxFQUFBOztBQUViO0VBQ0ksdUJBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwyQkFBcUM7RUFDckMsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVLEVBQUE7RUFFZDtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7O0FBUGxCO0VBQ0k7SUFDSSxtQ0FBMkI7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QUE7O0FBRVo7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtCQUE0QjtFQUM1QixlQUFlO0VBQ2YsUUFBUSxFQUFBOztBQUVaO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFFYjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtbWFuYWdlbWVudC9jaGF0LW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucm93LWNoYXR7ICBcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnV0dG9uLWJvcmRlcntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMyk7XHJcbn1cclxuLmxpc3QtdXNlci1vbmxpbmV7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLm1lbnUge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLndoaXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mdWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogY2FsYyg0dncgLSA0cHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDR2dyAtIDRweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKDh2dyAtIDJweCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5yZXN0cmljdCB7XHJcbiAgICAtLWhlaWdodDogMzNweDtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XHJcbn1cclxuLmFuaW1hdGUge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB0cmFuc2l0aW9uOiAuMXM7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pdGVtLWlubmVyIHtcclxuICAgIGhlaWdodDogMzNweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0LXBvc2l0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuOCkpO1xyXG59XHJcbi5jdXN0b20tZm9vdGVyLXJvd3tcclxuICAgIGhlaWdodDogM3JlbTtcclxufVxyXG4uc2VuZC1idXR0b257XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzQ0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYmctaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweCA1NXB4IDE1cHg7XHJcbn1cclxuLmJnLWNoYXQtYm94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbi5iZy1pbWFnZS1Ye1xyXG4gICAgcGFkZGluZzogODBweCAxNXB4IDc1cHggMTVweDtcclxufVxyXG4uY2hhdC1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubm8tcGFkZGluZ3tcclxuICAgIC0tcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNoYXQtcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnJldmVyc2V7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuLm5hbWUtcm93LWxlZnR7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA5dnc7XHJcbiAgICBtYXJnaW4tbGVmdDogLTh2dztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMS41dnc7XHJcbn1cclxuLm5hbWUtcm93LXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHggOXZ3IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHZ3O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMS41dnc7XHJcbn1cclxuLm5hbWUtcm93LXBhcmVudC1sZWZ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4ubmFtZS1yb3ctcGFyZW50LXJpZ2h0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLm1lc3NhZ2Utcm93LWxlZnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGM5NmRmO1xyXG4gICAgcGFkZGluZzogN3B4IDE1cHggOHB4IDEydnc7XHJcbiAgICBtYXJnaW4tbGVmdDogLTh2dztcclxuICAgIG1pbi1oZWlnaHQ6IDN2dztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDV2dztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1dnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lc3NhZ2Utcm93LXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogIzAwQzA2RDtcclxuICAgIHBhZGRpbmc6IDdweCAxNXZ3IDhweCAydnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC04dnc7XHJcbiAgICBtaW4taGVpZ2h0OiAzdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDV2dztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDV2dztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYXZhdGFyLXBhcmVudHtcclxuICAgIC8vIGJvcmRlcjogMXZ3IHNvbGlkIHdoaXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDh2dztcclxuICAgIG1pbi13aWR0aDogNHZ3O1xyXG4gICAgaGVpZ2h0OiA0dnc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xyXG59XHJcbi5hdmF0YXItYm9yZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDR2dztcclxuICAgIGhlaWdodDogNHZ3O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogMXZ3IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnJldmVyc2UtYXJjLWxlZnR7XHJcbiAgICB3aWR0aDogNnZ3O1xyXG4gICAgaGVpZ2h0OiAzdnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGxlZnQ6IDUuN3Z3O1xyXG4gICAgYm90dG9tOiAtM3Z3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHZ3O1xyXG59XHJcbi5yZXZlcnNlLWFyYy1jb2xvci1sZWZ0e1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogM3Z3O1xyXG4gICAgYmFja2dyb3VuZDogIzBjOTZkZjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDR2dztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAydnc7XHJcbn1cclxuLnJldmVyc2UtYXJjLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDZ2dztcclxuICAgIGhlaWdodDogM3Z3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICByaWdodDogNS43dnc7XHJcbiAgICBib3R0b206IC0zdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHZ3O1xyXG59XHJcbiNjaGF0LXBhcmVudHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4ucmV2ZXJzZS1hcmMtY29sb3ItcmlnaHR7XHJcbiAgICB3aWR0aDogNXZ3O1xyXG4gICAgaGVpZ2h0OiAzdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBDMDZEO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDR2dztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDN2dztcclxufVxyXG4udGltZXItbGVmdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNzVweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdG9wOiA0cHg7XHJcbn1cclxuLnRpbWVyLXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTc1cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdG9wOiA0cHg7XHJcbn1cclxuLnRpdGxlLWJsb2Nre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi50aXRsZS1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcbi50aXRsZS10ZXh0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmZpcnN0LXRpY2t7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjRweDtcclxuICAgIHRvcDogLTRweDtcclxufVxyXG4uc2Vjb25kLXRpY2t7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjhweDtcclxuICAgIHRvcDogLTRweDtcclxufVxyXG4uY3VzdG9tLWZvb3RlcntcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4uc2VsZWN0LWltYWdle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/chat-management/chat-management.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/chat-management/chat-management.page.ts ***!
  \***************************************************************/
/*! exports provided: ChatManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManagementPage", function() { return ChatManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");




var ChatManagementPage = /** @class */ (function () {
    function ChatManagementPage(platform, utilsService, alertController, menuCtrl) {
        this.platform = platform;
        this.utilsService = utilsService;
        this.alertController = alertController;
        this.menuCtrl = menuCtrl;
        this.currentChat = {};
        this.listIcon = ["0AtaQgu.png", "0eu6SNj.png", "0fA88nA.png", "0wlNlCd.gif", "19kEPT0.png", "1lWkNHe.png", "1LzBV4k.gif", "1motAfP.png", "1yXoPFo.png", "21UP3i6.png", "2qvMA26.png", "2xt8SOZ.png",
            "3ECVq4u.png", "4E4e93X.gif", "4VdrdG2.png", "5jhzF5d.png", "5TiPJPF.gif", "8AIdIrQ.gif", "8Nlq5CJ.png", "8sUbDKk.png", "8T80y1V.png", "93RYbKE.png", "aVOXsfg.png", "bAhwb16.gif",
            "bIQWTmi.png", "brAwo6R.png", "C9qThnI.png", "CA5NSIo.png", "CkGFZEP.gif", "cPywtqf.png", "cvMq5sJ.gif", "cZ5CBUB.png", "dFT2YlR.png", "dt2n5SA.png", "dyEmXLZ.png", "Eet14LJ.gif",
            "ErKgEet.png", "FBDdTDP.gif", "Fg5wIHb.png", "fpBx8Tr.gif", "FY6Qi1n.png", "G3pSbUM.png", "GdAUqfU.gif", "GNA0CBZ.gif", "gw3O4yD.gif", "GYsaOXs.png", "h061chR.png", "h9CcWHm.gif",
            "hjHV5C7.png", "i2NvyWv.gif", "i6rJa7J.png", "IAJTwzn.gif", "ICdhsdg.png", "ivA5o1e.png", "JAFJUv0.png", "jPKBd3d.png", "Jv2iIVh.png", "JvdHPPL.gif", "K63cZJA.png", "kFJ3sts.png",
            "kHMAWym.gif", "Ki3oo52.png", "kJqNsxN.gif", "kWgZdp2.gif", "L6qO4TN.png", "LuwadA1.gif", "M4DpqP2.gif", "mBl0s0u.png", "MDXIDPT.gif", "MHlwjXU.gif", "MIEyqjl.gif", "Mo9OOZY.gif",
            "mPZlVDQ.png", "MR7PRG2.png", "mRzXxLx.gif", "NbFcSRG.gif", "NDO1AYK.png", "nxhj3O1.png", "o1Ih2qd.png", "O2LKmTc.png", "oat9bqs.gif", "oceGJ1r.gif", "OFIJ6VA.png", "pI5bPIA.png",
            "pllFJn8.png", "PNjyLXu.png", "PUA5i3b.gif", "QHVsaCb.gif", "QNdIhux.gif", "R2IJa21.png", "rDwKAcn.gif", "rfbqsJQ.png", "rJXK2JW.png", "rPaDLbA.gif", "rwTlVjB.png", "sdbQ9cv.gif",
            "SS7m5U4.gif", "syA9zpU.gif", "T1D9HgP.gif", "te4f42X.png", "TgCyrfI.png", "Tlsgxw4.png", "tnfTTj7.png", "UDbwKwf.png", "uPE22vZ.png", "UpGFQAi.png", "uQJvHDJ.gif", "UtIH0pq.png",
            "UX6pxJG.png", "v9Djz9F.gif", "v9sPLxc.png", "VjpVpSj.png", "VQasSL2.gif", "wKK7tgW.png", "wL8dbdU.png", "WtTUp0k.gif", "wxKvDRJ.png", "X8w19mw.png", "xCJhsIB.png", "xHAd0eQ.png",
            "Y5r3BVP.png", "YOueu1M.png", "yXNNAaF.png", "ZtlKGXX.gif", "ZUY9fAW.gif", "ZvqMdx7.png"];
        this.checkInit = false;
        this.phone_model = 'iPhone';
        this.input = '';
        this.editContentHeight = 0;
        this.iconImage = "";
        this.utilsService.isChatOpen = true;
    }
    ChatManagementPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.scrollToBottom();
        }, 200);
    };
    ChatManagementPage.prototype.ionViewDidEnter = function () {
        if (!this.checkInit) {
            var chatBox = document.getElementById("chat-box");
            var chatList = document.getElementById("chat-list");
            var chatIcon = document.getElementById("chat-icon");
            var chatParent = document.getElementById("chat-parent");
            var chatParentFooter = document.getElementById("chat-parent-footer");
            if (chatBox && chatList && chatIcon) {
                if (chatBox.clientHeight > 0) {
                    chatList.style.height = chatBox.clientHeight + "px";
                    chatIcon.style.height = chatBox.clientHeight + "px";
                    chatParent.style.height = (chatBox.clientHeight - chatParentFooter.clientHeight) + "px";
                }
            }
            this.checkInit = true;
        }
    };
    ChatManagementPage.prototype.send = function (chatContent) {
        if (this.input != '') {
            var dataInsert = {};
            dataInsert.text = this.input;
            dataInsert.sender = 0;
            dataInsert.image = chatContent.support.image;
            dataInsert.sent = true;
            dataInsert.read = true;
            dataInsert.delivered = true;
            dataInsert.productImage = "";
            dataInsert.iconImage = this.iconImage;
            if (chatContent.id) {
                dataInsert.last = this.utilsService.listChatContent[chatContent.id].chat[0].last;
                this.utilsService.createChatDataInsert(dataInsert, chatContent);
                this.input = '';
                this.iconImage = '';
            }
        }
    };
    ChatManagementPage.prototype.deleteChat = function (chatMember) {
        if (chatMember.read == true) {
            this.utilsService.deleteChat(chatMember);
            this.currentChat = {};
        }
        else {
            this.utilsService.showInfoSystem("Tin nhăn chưa được trả lời nên không thể xóa.");
            return false;
        }
    };
    ChatManagementPage.prototype.scrollToBottom = function () {
        var chatParent = document.getElementById("chat-parent");
        chatParent.scrollTop = chatParent.scrollHeight;
    };
    ChatManagementPage.prototype.selectUser = function (chatMember) {
        var _this = this;
        var isFull = true;
        if (!this.currentChat.id) {
            isFull = false;
            this.currentChat.id = chatMember.id;
            this.currentChat.userName = chatMember.userName;
            this.currentChat.support = this.utilsService.appValueService.APP_AUTHENTICATION;
        }
        if (isFull) {
            var dataAdd = {};
            dataAdd.id = chatMember.id;
            dataAdd.userName = chatMember.userName;
            dataAdd.chatContent = [];
            dataAdd.support = this.utilsService.appValueService.APP_AUTHENTICATION;
            this.currentChat = dataAdd;
        }
        this.utilsService.getChatContent(chatMember, this.utilsService.appValueService.APP_AUTHENTICATION);
        setTimeout(function () {
            _this.scrollToBottom();
        }, 500);
    };
    ChatManagementPage.prototype.selectImage = function (item) {
        this.iconImage = item;
    };
    ChatManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-management',
            template: __webpack_require__(/*! ./chat-management.page.html */ "./src/app/pages/chat-management/chat-management.page.html"),
            styles: [__webpack_require__(/*! ./chat-management.page.scss */ "./src/app/pages/chat-management/chat-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ChatManagementPage);
    return ChatManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-management-chat-management-module.js.map