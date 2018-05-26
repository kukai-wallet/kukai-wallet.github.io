webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_broadcast_broadcast_component__ = __webpack_require__("../../../../../src/app/components/broadcast/broadcast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_import_import_component__ = __webpack_require__("../../../../../src/app/components/import/import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_start_start_component__ = __webpack_require__("../../../../../src/app/components/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_new_wallet_new_wallet_component__ = __webpack_require__("../../../../../src/app/components/new-wallet/new-wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_activity_activity_component__ = __webpack_require__("../../../../../src/app/components/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_overview_overview_component__ = __webpack_require__("../../../../../src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_backup_backup_component__ = __webpack_require__("../../../../../src/app/components/backup/backup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_send_send_component__ = __webpack_require__("../../../../../src/app/components/send/send.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_new_account_new_account_component__ = __webpack_require__("../../../../../src/app/components/new-account/new-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_receive_receive_component__ = __webpack_require__("../../../../../src/app/components/receive/receive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_delegate_delegate_component__ = __webpack_require__("../../../../../src/app/components/delegate/delegate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_mnemonic_import_mnemonic_import_component__ = __webpack_require__("../../../../../src/app/components/mnemonic-import/mnemonic-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_bakery_bakery_component__ = __webpack_require__("../../../../../src/app/components/bakery/bakery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_activate_activate_component__ = __webpack_require__("../../../../../src/app/components/activate/activate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_start_start_component__["a" /* StartComponent */] },
    { path: 'new-wallet', component: __WEBPACK_IMPORTED_MODULE_5__components_new_wallet_new_wallet_component__["a" /* NewWalletComponent */] },
    { path: 'import', component: __WEBPACK_IMPORTED_MODULE_3__components_import_import_component__["a" /* ImportComponent */] },
    { path: 'broadcast', component: __WEBPACK_IMPORTED_MODULE_2__components_broadcast_broadcast_component__["a" /* BroadcastComponent */] },
    { path: 'mnemonic-import', component: __WEBPACK_IMPORTED_MODULE_15__components_mnemonic_import_mnemonic_import_component__["a" /* MnemonicImportComponent */] },
    { path: 'activity', component: __WEBPACK_IMPORTED_MODULE_6__components_activity_activity_component__["a" /* ActivityComponent */] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_7__components_overview_overview_component__["a" /* OverviewComponent */] },
    { path: 'backup', component: __WEBPACK_IMPORTED_MODULE_8__components_backup_backup_component__["a" /* BackupComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__components_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'send', component: __WEBPACK_IMPORTED_MODULE_10__components_send_send_component__["a" /* SendComponent */] },
    { path: 'new-account', component: __WEBPACK_IMPORTED_MODULE_11__components_new_account_new_account_component__["a" /* NewAccountComponent */] },
    { path: 'receive', component: __WEBPACK_IMPORTED_MODULE_12__components_receive_receive_component__["a" /* ReceiveComponent */] },
    { path: 'delegate', component: __WEBPACK_IMPORTED_MODULE_13__components_delegate_delegate_component__["a" /* DelegateComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_14__components_account_account_component__["a" /* AccountComponent */] },
    { path: 'bakery', component: __WEBPACK_IMPORTED_MODULE_16__components_bakery_bakery_component__["a" /* BakeryComponent */] },
    { path: 'activate', component: __WEBPACK_IMPORTED_MODULE_17__components_activate_activate_component__["a" /* ActivateComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home-page></app-home-page>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(walletService, coordinatorService) {
        this.walletService = walletService;
        this.coordinatorService = coordinatorService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.walletService.loadStoredWallet();
        if (this.walletService.wallet) {
            this.coordinatorService.startAll();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_coordinator_service__["a" /* CoordinatorService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_encryption_service__ = __webpack_require__("../../../../../src/app/services/encryption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_import_service__ = __webpack_require__("../../../../../src/app/services/import.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_tzrate_service__ = __webpack_require__("../../../../../src/app/services/tzrate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_export_service__ = __webpack_require__("../../../../../src/app/services/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_delegate_service__ = __webpack_require__("../../../../../src/app/services/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_broadcast_broadcast_component__ = __webpack_require__("../../../../../src/app/components/broadcast/broadcast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_import_import_component__ = __webpack_require__("../../../../../src/app/components/import/import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_start_start_component__ = __webpack_require__("../../../../../src/app/components/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_activity_activity_component__ = __webpack_require__("../../../../../src/app/components/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_overview_overview_component__ = __webpack_require__("../../../../../src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_backup_backup_component__ = __webpack_require__("../../../../../src/app/components/backup/backup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_send_send_component__ = __webpack_require__("../../../../../src/app/components/send/send.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_new_account_new_account_component__ = __webpack_require__("../../../../../src/app/components/new-account/new-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_new_wallet_new_wallet_component__ = __webpack_require__("../../../../../src/app/components/new-wallet/new-wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_receive_receive_component__ = __webpack_require__("../../../../../src/app/components/receive/receive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_delegate_delegate_component__ = __webpack_require__("../../../../../src/app/components/delegate/delegate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_bootstrap_positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_mnemonic_import_mnemonic_import_component__ = __webpack_require__("../../../../../src/app/components/mnemonic-import/mnemonic-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_bakery_bakery_component__ = __webpack_require__("../../../../../src/app/components/bakery/bakery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_activate_activate_component__ = __webpack_require__("../../../../../src/app/components/activate/activate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// External libraries



// Services











// View components




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_29__components_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_new_wallet_new_wallet_component__["a" /* NewWalletComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_broadcast_broadcast_component__["a" /* BroadcastComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_import_import_component__["a" /* ImportComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_backup_backup_component__["a" /* BackupComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_send_send_component__["a" /* SendComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_new_account_new_account_component__["a" /* NewAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_receive_receive_component__["a" /* ReceiveComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_delegate_delegate_component__["a" /* DelegateComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_mnemonic_import_mnemonic_import_component__["a" /* MnemonicImportComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_bakery_bakery_component__["a" /* BakeryComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_activate_activate_component__["a" /* ActivateComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["e" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["c" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["f" /* TabsModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_11__services_wallet_service__["a" /* WalletService */],
                __WEBPACK_IMPORTED_MODULE_12__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_14__services_encryption_service__["a" /* EncryptionService */],
                __WEBPACK_IMPORTED_MODULE_13__services_balance_service__["a" /* BalanceService */],
                __WEBPACK_IMPORTED_MODULE_15__services_import_service__["a" /* ImportService */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_33_ngx_bootstrap_positioning__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_16__services_tzrate_service__["a" /* TzrateService */],
                __WEBPACK_IMPORTED_MODULE_36__services_coordinator_service__["a" /* CoordinatorService */],
                __WEBPACK_IMPORTED_MODULE_37__services_operation_service__["a" /* OperationService */],
                __WEBPACK_IMPORTED_MODULE_17__services_export_service__["a" /* ExportService */],
                __WEBPACK_IMPORTED_MODULE_18__services_delegate_service__["a" /* DelegateService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <h1 class=\"page-header\">Account</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-10 mono\">\r\n            <select [(ngModel)]=\"activePkh\" (change)=\"updateBalance()\" id=\"fromAdress\" class=\"form-control min-width\">\r\n                <option *ngFor=\"let account of accounts\" [value]=\"account.pkh\">{{ account.pkh }}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row bottom-separator\">\r\n        <div class=\"col-6\">\r\n            Balance: {{ balance / 1000000 | number:'1.0' }} ꜩ <span *ngIf=\"balanceUSD > 0\">(${{ balanceUSD | number:'1.00'}} USD)</span>\r\n        </div>\r\n    </div>\r\n    <!--<button (click)='triggerOperationReload()'>triggerOperationReload()</button>-->\r\n    <div class=\"row\">\r\n        <app-activity [activePkh]=\"activePkh\"></app-activity> \r\n    </div>\r\n</div>\r\n\r\n<!-- To Delete --\r\n<div id=\"content\" *ngIf=\"accounts\">\r\n    <div class=\"center-content\">\r\n        <div class=\"card text-center fix-size\">\r\n            <div class=\"card-body\">\r\n                <h1>{{ balance / 1000000 | number:'1.0' }}ꜩ</h1>\r\n                    <p><app-send [activePkh]=\"activePkh\"></app-send>\r\n                    <app-receive [activePkh]=\"activePkh\"></app-receive></p>\r\n\r\n                <app-activity [activePkh]=\"activePkh\"></app-activity>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /To Delete -->\r\n\r\n<!--\r\n<p *ngIf='!accounts'>\r\n    You need to <a routerLink=\"\">create or import</a> a wallet to see this view...\r\n</p>\r\n-->\r\n<!-- Default message - No account created -->\r\n<div class=\"container\" *ngIf=\"!this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator-no-account\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header-no-account\">Account</h1>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <p>You can get your individual account details in here but before, you will need to <a routerLink=\"\">create or import</a> a wallet.</p>\r\n            <!--\r\n            <p>Before making a backup, you will need to <a routerLink=\"\">create or import</a> a wallet.</p>\r\n            You need to <a routerLink=\"\">create or import</a> a wallet to see this view...\r\n            -->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator {\n  padding-top: 10px;\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee; }\n\n.page-header-no-account {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator-no-account {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\n.mono {\n  font-family: \"Courier New\", Courier, monospace; }\n\n.min-width {\n  min-width: 394px !important; }\n\n/* Responsive breakpoints */\n\n@media (min-width: 576px) {\n  .container {\n    padding-left: 2em;\n    min-width: 0vw; } }\n\n@media (min-width: 992px) {\n  min-width: 0vw; }\n\n@media (min-width: 1200px) {\n  .container {\n    padding-left: 2em;\n    min-width: 0vw; } }\n\n/*\r\n#content {\r\n    display: flex; \r\n    min-height: 100vh;\r\n    min-width: 85vw;\r\n    // width: 100%;\r\n    // max-width: 85vw;\r\n}\r\n.center-content {\r\n    margin: 10vh auto 0px auto;\r\n}\r\n.card-title {\r\n    padding-bottom: 0.75rem;\r\n    border-bottom: 2px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-text{\r\n    padding-top: 2rem;\r\n}\r\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    function AccountComponent(walletService, messageService, coordinatorService) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.coordinatorService = coordinatorService;
        this.accounts = null;
        this.balance = 0;
        this.balanceUSD = 0;
    }
    AccountComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet) {
            this.init();
        }
    };
    AccountComponent.prototype.init = function () {
        this.accounts = this.walletService.wallet.accounts;
        this.activePkh = this.accounts[0].pkh;
        this.balance = this.accounts[0].balance.balanceXTZ;
        this.balanceUSD = this.accounts[0].balance.balanceFiat;
    };
    AccountComponent.prototype.updateBalance = function () {
        this.balance = this.accounts[this.walletService.getIndexFromPkh(this.activePkh)].balance.balanceXTZ;
        this.balanceUSD = this.accounts[this.walletService.getIndexFromPkh(this.activePkh)].balance.balanceFiat;
    };
    AccountComponent.prototype.triggerOperationReload = function () {
        var index = this.walletService.getIndexFromPkh(this.activePkh);
        this.walletService.wallet.accounts[index].numberOfActivites--;
        this.coordinatorService.boost(this.activePkh);
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/components/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_coordinator_service__["a" /* CoordinatorService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"center-content\">\r\n        <div class=\"card text-center fix-size\">\r\n            <div class=\"card-body\">\r\n                <h1 class=\"card-title\">Activate your ICO Wallet</h1>\r\n                <div class=\"card-text\">\r\n                    <form class=\"form-group\">\r\n                        <!-- pkh -->\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"text\" [(ngModel)]=\"pkh\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"tz1...\">\r\n                                <small class=\"form-text text-left\">Your public key hash</small>\r\n                            </div>\r\n                        </div>\r\n                        <!-- secret -->\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"text\" [(ngModel)]=\"secret\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"code\">\r\n                                <small class=\"form-text text-left\">Your activation code</small>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <p class=\"p-margin-botton\">Wallets created during the ICO need to be activated.</p> \r\n                    <p>No private key is required for the activation process.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"activate()\">Activate</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/activate/activate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  padding-bottom: 0.7vh; }\n\n.fix-size {\n  width: 40rem; }\n\n.p-margin-botton {\n  margin-bottom: 0.5rem; }\n\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n\n#content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  min-width: 75vw; }\n\n.center-content {\n  margin: auto; }\n\n.card-title {\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.125); }\n\n.card-text {\n  padding-top: 2rem; }\n\n.card-footer {\n  background-color: transparent; }\n\n.form-control {\n  line-height: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/activate/activate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivateComponent = /** @class */ (function () {
    function ActivateComponent(messageService, operationService) {
        this.messageService = messageService;
        this.operationService = operationService;
    }
    ActivateComponent.prototype.ngOnInit = function () {
    };
    ActivateComponent.prototype.activate = function () {
        var _this = this;
        var pkh = this.pkh;
        var secret = this.secret;
        this.pkh = '';
        this.secret = '';
        this.operationService.activate(pkh, secret).subscribe(function (ans) {
            if (ans.success) {
                if (ans.payload.opHash) {
                    _this.messageService.addSuccess('Wallet activated!');
                }
                else {
                    _this.messageService.addWarning('Couldn\'t retrive an operation hash');
                }
            }
            else {
                _this.messageService.addError('NodeError');
                console.log(JSON.stringify(ans.payload.msg));
            }
        }, function (err) {
            _this.messageService.addError('Failed to activate wallet!');
            console.log(JSON.stringify(err));
        });
    };
    ActivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activate',
            template: __webpack_require__("../../../../../src/app/components/activate/activate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/activate/activate.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */]])
    ], ActivateComponent);
    return ActivateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='accounts'>\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Timestamp</th>\r\n                <th>Type</th>\r\n                <th>Amount (ꜩ)</th>\r\n                <th>Status</th>\r\n            </tr>\r\n        </thead>\r\n        <ng-container *ngFor=\"let aData of accounts\">\r\n            <ng-container *ngIf=\"aData.pkh === activePkh\">\r\n                <tbody *ngFor=\"let transaction of aData.activities\">\r\n                    <tr>\r\n                        <td>{{ transaction.timestamp | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n                        <!-- <td>{{ transaction.source }}</td>\r\n                        <td>{{ transaction.destination }}</td> -->\r\n                        <td>{{ transaction.type }}</td>\r\n                        <td><ng-container *ngIf=\"transaction.amount\">{{ transaction.amount / 1000000 | number:'1.0' }}ꜩ</ng-container></td>\r\n                        <!-- <td>{{ transaction.fee / 100 }}</td> -->\r\n                        <td><a href=\"http://tzscan.io/{{transaction.hash}}\" target=\"_blank\">{{ getStatus(transaction.block) }}</a></td>           \r\n                    </tr>\r\n                </tbody>\r\n            </ng-container>\r\n        </ng-container>\r\n    </table>\r\n</div>\r\n\r\n<p *ngIf='!accounts'>\r\n    Wallet not configured!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/activity/activity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  width: 100%; }\n\n#page-wrapper {\n  padding: 0 15px;\n  min-height: 568px;\n  background-color: white; }\n\n.mono {\n  font-family: \"Courier New\", Courier, monospace; }\n\n@media (min-width: 768px) {\n  #page-wrapper {\n    position: inherit;\n    padding: 0 30px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(walletService, messageService) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.accounts = null;
    }
    ActivityComponent.prototype.ngOnInit = function () { if (this.walletService.wallet) {
        this.init();
    } };
    ActivityComponent.prototype.init = function () {
        this.accounts = this.walletService.wallet.accounts;
    };
    ActivityComponent.prototype.getStatus = function (hash) {
        if (hash === 'prevalidation') {
            return 'Unconfirmed';
        }
        else {
            return 'Confirmed';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ActivityComponent.prototype, "activePkh", void 0);
    ActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity',
            template: __webpack_require__("../../../../../src/app/components/activity/activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/activity/activity.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/backup/backup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header\">Backup Your Wallet</h1>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Subheading -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h4>\r\n                <p>A wallet backup protects your tezzies against computer or software failure. If you lose the backup and can't access your wallet for some reasons, your tezzies are permanently lost!</p>\r\n                <p>It is recommended that you store backups of both forms of your key (the Keystore file version and paper wallet version) in physically separate, offline environments.</p>\r\n            </h4>\r\n        </div>\r\n    </div>\r\n    <br>\r\n\r\n    <!-- Export File -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3 *ngIf=\"walletService.isFullWallet()\">1. Export your Full Wallet to File</h3>\r\n            <h3 *ngIf=\"walletService.isViewOnlyWallet()\">1. Export your View-only Wallet to File</h3>\r\n            <h3 *ngIf=\"walletService.isObserverWallet()\">1. Export your Observer Wallet to File</h3>\r\n            <p *ngIf=\"walletService.isFullWallet()\">This wallet file will contain your private seed encrypted with your password.</p>\r\n            <p *ngIf=\"walletService.isViewOnlyWallet()\">This wallet file will contain your public key.</p>\r\n            <p *ngIf=\"walletService.isObserverWallet()\">This wallet file will contain your public key hash.</p>\r\n        </div>\r\n    </div>\r\n    <form class=\"form-inline\">\r\n        <button type=\"button\" class=\"btn btn-clear btn-second mb-2 mr-sm-2\" aria-describedby=\"saveFileButton\" (click)=\"saveFile()\">Download</button>\r\n\r\n    </form>\r\n    <BR>\r\n    <ng-container *ngIf=\"walletService.isFullWallet()\">\r\n        <!-- Export PK -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h3>2. Export View-only Wallet to file</h3>\r\n                <p>This wallet file will contain your public key (Needed to create unsigned operations).</p>\r\n            </div>\r\n        </div>\r\n        <form class=\"form-inline\">\r\n            <label class=\"sr-only\" for=\"inlineFormInputPassword3\">Password</label>\r\n            <input type=\"password\" class=\"form-control mb-2 mr-sm-2\" [(ngModel)]=\"pwd2\" name=\"pwd2\" placeholder=\"{{ pwdType }}\" aria-describedby=\"passwordHelpInline\">\r\n            <button type=\"submit\" id=\"pkDecrypt\" class=\"btn btn-clear btn-second mb-2 mr-sm-2\" [class.wait]=\"wait === 1\" (click)=\"decryptPk()\">Generate</button>\r\n            <small *ngIf=\"pk\">\r\n                {{ pk }}\r\n            </small>\r\n        </form>\r\n\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Default message - No account created -->\r\n<div class=\"container\" *ngIf=\"!this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator-no-account\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header-no-account\">Backup</h1>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <p>Before making a backup, you will need to <a routerLink=\"\">create or import</a> a wallet.</p>\r\n            <!--\r\n            You need to <a routerLink=\"\">create or import</a> a wallet to see this view...\r\n            -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/backup/backup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wait {\n  cursor: wait !important; }\n\n.page-header {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\n.page-header-no-account {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator-no-account {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\nh4 {\n  font-weight: 400; }\n\n.btn-second {\n  min-width: 96px;\n  color: #333333; }\n\n.btn-second:hover {\n  background-color: #cccccc; }\n\n.btn-second:active {\n  background-color: #b3b3b3; }\n\n/* Responsive breakpoints */\n\n@media (min-width: 576px) {\n  .container {\n    padding-left: 2em;\n    min-width: 85vw; } }\n\n@media (min-width: 1200px) {\n  .container {\n    padding-left: 2em;\n    min-width: 65vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/backup/backup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_export_service__ = __webpack_require__("../../../../../src/app/services/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var BackupComponent = /** @class */ (function () {
    function BackupComponent(walletService, exportService, messageService) {
        this.walletService = walletService;
        this.exportService = exportService;
        this.messageService = messageService;
        this.pwd2 = '';
        this.pwd3 = '';
        this.pk = '';
    }
    BackupComponent.prototype.ngOnInit = function () {
    };
    BackupComponent.prototype.saveFile = function () {
        this.messageService.addSuccess('Exporting Wallet to file...');
        this.exportService.downloadWallet();
    };
    BackupComponent.prototype.decryptPk = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pwd;
            return __generator(this, function (_a) {
                pwd = this.pwd2;
                this.pwd2 = '';
                setTimeout(function () {
                    if (pwd) {
                        var keys = void 0;
                        if (keys = _this.walletService.getKeys(pwd)) {
                            _this.messageService.addSuccess('Exporting View-only Wallet to file...');
                            _this.exportService.downloadViewOnlyWallet(keys.pk);
                        }
                        else {
                            _this.messageService.addError('Wrong password!');
                        }
                    }
                }, 100);
                return [2 /*return*/];
            });
        });
    };
    BackupComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BackupComponent.prototype, "pwd2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BackupComponent.prototype, "pwd3", void 0);
    BackupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backup',
            template: __webpack_require__("../../../../../src/app/components/backup/backup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/backup/backup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_export_service__["a" /* ExportService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], BackupComponent);
    return BackupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bakery/bakery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header\">Bakery</h1>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Subheading -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h4>\r\n                <p>In the bakery, you can easily set different delegates for your accounts.</p>\r\n                <p *ngIf=\"!walletService.wallet.accounts[1]\">Please note that you can't bake with your identity. You need to create new accounts.</p>\r\n            </h4>\r\n        </div>\r\n    </div>\r\n    <br>\r\n\r\n    <span *ngIf=\"walletService.wallet.accounts[1]\">\r\n\r\n        <!-- Accounts -->\r\n        <div class=\"row row-header\">\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-address-cell\">\r\n                Accounts\r\n            </div>\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n                Balance (ꜩ)\r\n            </div>\r\n\r\n            <!--<div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n                Baking\r\n            </div>-->\r\n\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-address-cell\">\r\n                Delegated to\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngFor=\"let account of walletService.wallet.accounts | slice:1\">\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-address-cell mono\">\r\n                {{ account.pkh }}\r\n            </div>\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-other-cell\">\r\n                {{ account.balance.balanceXTZ / 1000000 | number:'1.00' }} ꜩ\r\n            </div>\r\n            <!--<div class=\"col-sm-auto col-border border border-warning text-truncate min-size-other-cell\">\r\n                <span *ngIf=\"account.delegate\">Yes</span>\r\n                <span *ngIf=\"!account.delegate\">No</span>\r\n            </div>-->\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-address-cell mono\">\r\n                <span *ngIf=\"account.delegate\">{{ account.delegate }}</span>\r\n            </div>\r\n            <div class=\"col-sm-auto col-border\" *ngIf=\"!this.walletService.isObserverWallet()\">\r\n                    <app-delegate [activePkh]=\"account.pkh\"></app-delegate>\r\n                <!--<button type=\"button\" class=\"btn btn-sm btn-clear btn-second\" (click)='setDelegate(account)'>Delegate</button>-->\r\n            </div>\r\n        </div>\r\n    </span>  <!-- Shown if identity has an account -->\r\n\r\n</div>\r\n\r\n<!-- Default message - No account created -->\r\n<div class=\"container\" *ngIf=\"!this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator-no-account\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header-no-account\">Bakery</h1>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <p>If you want to set delegates for your tezzies, you will need to <a routerLink=\"\">create or import</a> a wallet.</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/bakery/bakery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mono {\n  font-family: \"Courier New\", Courier, monospace; }\n\n.page-header {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\n.page-header-no-account {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator-no-account {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\nh4 {\n  font-weight: 400; }\n\n.btn-second {\n  min-width: 96px;\n  color: #333333; }\n\n.btn-second:hover {\n  background-color: #cccccc; }\n\n.btn-second:active {\n  background-color: #b3b3b3; }\n\n.row-header {\n  font-weight: bold; }\n\n.col-header {\n  background-color: #fde19b; }\n\n.row-buttons {\n  padding-top: 5px; }\n\n.col-border {\n  padding-top: 0.4em;\n  padding-bottom: 0.4em; }\n\n.min-size-address-cell {\n  min-width: 380px; }\n\n.min-size-other-cell {\n  min-width: 180px; }\n\n.margin-left {\n  margin-left: 1rem; }\n\n.no-margin {\n  margin-bottom: 0rem; }\n\n/* Responsive breakpoints */\n\n@media (min-width: 576px) {\n  .container {\n    padding-left: 2em;\n    min-width: 0vw; } }\n\n@media (min-width: 992px) {\n  min-width: 0vw; }\n\n@media (min-width: 1200px) {\n  .container {\n    padding-left: 2em;\n    min-width: 0vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bakery/bakery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BakeryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BakeryComponent = /** @class */ (function () {
    function BakeryComponent(walletService, messageService, activityService) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.activityService = activityService;
    }
    BakeryComponent.prototype.ngOnInit = function () {
    };
    BakeryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bakery',
            template: __webpack_require__("../../../../../src/app/components/bakery/bakery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bakery/bakery.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */]])
    ], BakeryComponent);
    return BakeryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/broadcast/broadcast.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header\">Offline transactions</h1>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Subheading -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <!--\r\n            <h4>In 2 easy steps, you can broadcast an operation to the tezos network without ever needing to use your secret key in an online environment. First, import your wallet and your unsigned operation in an air-gaped offline computer to sign your operation. Secondly, broadcast your signed operation hash to the network.</h4>\r\n            -->\r\n            <h4>In 3 easy steps, you can broadcast an operation to the tezos network without ever needing to use your secret key in an online environment. \r\n                Make sure you have first exported a view-only wallet from the backup view in your full wallet. \r\n                The full wallet should be stored on an offline system and the view-only wallet on an online system. \r\n                In the view-only wallet proceed with the operation (step 1). This will create an unsigned operation that will be exported to a file. \r\n                Move the unsigned operation to your full wallet and sign it (step 2).\r\n                The signed operation can now be exported and transfered back to an online system and broadcasted (step 3).</h4>\r\n            \r\n        </div>\r\n    </div>\r\n    <br>\r\n\r\n    <!-- Step 1 -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3>1. Unsigned operation (online)</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <p>You can create an unsigned operation with your view-only wallet in the overview.</p>\r\n        <!--\r\n            <p>Import your view-only wallet from file (.tzop) or insert your public key (edpk...)</p>\r\n        -->\r\n        </div>\r\n    </div>\r\n<!--\r\n    <form>\r\n        <div class=\"form-group row\">\r\n            <!-- Import Wallet Button --\r\n            <div class=\"input-group col-sm-8\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text min-size-prepend\">Wallet</span>\r\n                </div>\r\n                <div class=\"custom-file\">\r\n                    <input type=\"file\" class=\"custom-file-input\" id=\"importWallet\" (change)=\"handleViewOnlyWalletFileInput($event.target.files)\">\r\n                    <label class=\"custom-file-label\" for=\"importWallet\"> {{InputImportWalletFileStep1}} </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form class=\"form-inline\">\r\n        <label class=\"sr-only\" for=\"inputedpk\">Input edpk</label>\r\n        <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inputedpk\" placeholder=\"edpk...\">\r\n        <!--\r\n        <button type=\"submit\" class=\"btn btn-clear btn-second mb-2\">Import</button>\r\n        --\r\n    </form>\r\n\r\n    <form class=\"form-inline\">\r\n        <label for=\"inputOperation\" class=\"mr-sm-2\">Operation</label>\r\n        <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n            <label class=\"form-check-label\" for=\"inlineRadio1\">Send</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n            <label class=\"form-check-label\" for=\"inlineRadio2\">Delegate</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\r\n            <label class=\"form-check-label\" for=\"inlineRadio3\">New Account</label>\r\n        </div>\r\n    \r\n        <!--\r\n        <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inputOperation\" placeholder=\"edpk...\">\r\n        --\r\n    </form>\r\n-->\r\n    <br>\r\n\r\n    <!-- Step 2 -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3>2. Sign operation (offline)</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <p>Import or paste your unsigned operation</p>\r\n        </div>\r\n    </div>\r\n    <form>\r\n        <div class=\"form-group row\">\r\n            <!-- Import Wallet Button - not working - only shown when there's not a full Wallet available *ngIf=\"!isFullWallet\"  -->\r\n            <div class=\"input-group mb-3 col-sm-8\" *ngIf=\"false\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text min-size-prepend\">Wallet</span>\r\n                </div>\r\n                <div class=\"custom-file\">\r\n                    <input type=\"file\" class=\"custom-file-input\" id=\"importWallet\" (change)=\"handleWalletFileInput($event.target.files)\">\r\n                    <label class=\"custom-file-label\" for=\"importWallet\"> {{InputImportWalletFileStep2}} </label>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Import Unsigned Operation Button -->\r\n            <div class=\"input-group col-sm-8\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text min-size-prepend\">Operation</span>\r\n                </div>\r\n                <div class=\"custom-file\">\r\n                    <input [disabled]=\"!isFullWallet\" type=\"file\" class=\"custom-file-input\" id=\"importUnsignedOperation\" accept=\".tzop\" (change)=\"handleUnsignedOperationFileInput($event.target.files)\">\r\n                    <label class=\"custom-file-label\" for=\"importUnsignedOperation\"> {{InputImportOperationFileStep2}} </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form>\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-sm-8\">\r\n                <label for=\"unsignedOperationTextarea\" class=\"sr-only\">Import or paste your unsigned operation</label>\r\n                <textarea [disabled]=\"!isFullWallet\" rows=\"4\" [(ngModel)]=\"unsigned\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"unsignedOperationTextarea\" placeholder=\"Unsigned Operation\"></textarea>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form class=\"form-inline\">\r\n        <label class=\"sr-only\" for=\"inputPassword\">Password</label>\r\n        <input [disabled]=\"!isFullWallet\" type=\"password\" class=\"form-control mb-2 mr-sm-2\" id=\"inputPassword\" [(ngModel)]=\"pwd\" placeholder=\"{{ pwdPlaceholder }}\" [ngModelOptions]=\"{standalone: true}\">\r\n        \r\n        <button [disabled]=\"!isFullWallet\" type=\"button\" class=\"btn btn-clear btn-second mb-2 mr-sm-2\" (click)=\"sign()\">Submit</button>\r\n        <button *ngIf=\"signed\" class=\"btn btn-clear btn-second mb-2 mr-sm-2\" (click)=\"download()\">Download</button>\r\n        <small *ngIf=\"signed\" class=\"text-success\">\r\n            Operation successfully signed!\r\n        </small>\r\n    </form>\r\n    <br>\r\n\r\n    <!-- Step 3 -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3>3. Broadcast (online)</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <p>Import or paste your signed operation and transmit your operation to the Tezos network</p>\r\n        </div>\r\n    </div>\r\n    <form>\r\n        <div class=\"form-group row\">\r\n            <!-- Import Signed Operation Button -->\r\n            <div class=\"input-group col-sm-8\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text min-size-prepend\">Operation</span>\r\n                </div>\r\n                <div class=\"custom-file\">\r\n                    <input type=\"file\" [disabled]=\"walletService.isFullWallet()\" class=\"custom-file-input\" id=\"importWallet\" accept=\".tzop\" (change)=\"handleSignedOperationFileInput($event.target.files)\">\r\n                    <label class=\"custom-file-label\" for=\"importWallet\"> {{InputImportOperationFileStep3}} </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form>\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-sm-8\">\r\n                <label for=\"signedOperationTextarea\" class=\"sr-only\">Import your signed operation</label>\r\n                <textarea rows=\"4\" [disabled]=\"walletService.isFullWallet()\" [(ngModel)]=\"signed\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"signedOperationTextarea\" placeholder=\"Signed Operation\"></textarea>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <button type=\"button\" [disabled]=\"walletService.isFullWallet()\" (click)=\"broadcast()\" class=\"btn btn-clear btn-second pull-right\">Broadcast</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/broadcast/broadcast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\nh4 {\n  font-weight: 400; }\n\n.min-size-prepend {\n  min-width: 98px; }\n\ninput:disabled {\n  cursor: not-allowed; }\n\ntextarea:disabled {\n  cursor: not-allowed; }\n\n.btn-second {\n  min-width: 96px;\n  color: #333333; }\n\n.btn-second:disabled {\n  cursor: not-allowed; }\n\n.btn-second:hover:enabled {\n  background-color: #cccccc; }\n\n.btn-second:active {\n  background-color: #b3b3b3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/broadcast/broadcast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_export_service__ = __webpack_require__("../../../../../src/app/services/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BroadcastComponent = /** @class */ (function () {
    function BroadcastComponent(walletService, operationService, messageService, exportService, coordinatorService) {
        this.walletService = walletService;
        this.operationService = operationService;
        this.messageService = messageService;
        this.exportService = exportService;
        this.coordinatorService = coordinatorService;
        this.InputImportWalletFileStep1 = 'Choose file';
        this.InputImportWalletFileStep2 = 'Choose file';
        this.InputImportOperationFileStep2 = 'Choose file';
        this.InputImportOperationFileStep3 = 'Choose file';
        this.unsigned = '';
        this.signed = '';
        this.pwd = '';
        this.pwdPlaceholder = '';
        this.isFullWallet = false;
    }
    BroadcastComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet && this.walletService.isFullWallet()) {
            this.init();
        }
        this.isFullWallet = this.walletService.isFullWallet();
    };
    BroadcastComponent.prototype.init = function () {
        this.pwdPlaceholder = 'Password';
    };
    BroadcastComponent.prototype.handleViewOnlyWalletFileInput = function (files) {
        var walletFileInput = files.item(0);
        this.InputImportWalletFileStep1 = walletFileInput.name;
    };
    BroadcastComponent.prototype.handleWalletFileInput = function (files) {
        var walletFileInput = files.item(0);
        this.InputImportWalletFileStep2 = walletFileInput.name;
    };
    /*
    handleUnsignedOperationFileInput(files: FileList) {
        const operationFileInput = files.item(0);
        this.InputImportOperationFileStep2 = operationFileInput.name;
    }

    handleSignedOperationFileInput(files: FileList) {
        const signedOperationFileInput = files.item(0);
        this.InputImportOperationFileStep3 = signedOperationFileInput.name;
    }
    */
    BroadcastComponent.prototype.broadcast = function () {
        var _this = this;
        if (this.signed) {
            var signed = this.signed;
            this.signed = '';
            this.operationService.broadcast(signed).subscribe(function (ans) {
                console.log(JSON.stringify(ans));
                if (ans.success) {
                    _this.messageService.addSuccess('Operation successfully broadcasted to the network: ' + ans.payload.opHash);
                    _this.coordinatorService.setBroadcast();
                }
                else {
                    _this.messageService.addWarning('Couldn\'t retrive operation hash!');
                }
            }, function (err) {
                _this.messageService.addError('Node responded with an error!');
                console.log(JSON.stringify(err));
            });
        }
    };
    BroadcastComponent.prototype.handleSignedOperationFileInput = function (files) {
        var _this = this;
        console.log('Files length: ' + files.length);
        var fileToUpload = files.item(0);
        this.InputImportOperationFileStep3 = fileToUpload.name;
        var reader = new FileReader();
        reader.readAsText(fileToUpload);
        reader.onload = function () {
            if (reader.result) {
                var data = JSON.parse(reader.result);
                if (data.signed === true && data.hex) {
                    _this.signed = data.hex;
                }
                else {
                    _this.messageService.addWarning('Not an unsigned operation!');
                }
            }
            else {
                _this.messageService.addError('Failed to read file!');
            }
        };
    };
    BroadcastComponent.prototype.sign = function () {
        if (this.pwd) {
            console.log('sign');
            var pwd = this.pwd;
            this.pwd = '';
            var keys = this.walletService.getKeys(pwd);
            if (keys) {
                var signed = this.operationService.sign(this.unsigned, keys.sk);
                this.signed = signed.sbytes;
            }
        }
    };
    BroadcastComponent.prototype.download = function () {
        this.exportService.downloadOperationData(this.signed, true);
    };
    BroadcastComponent.prototype.handleUnsignedOperationFileInput = function (files) {
        var _this = this;
        var fileToUpload = files.item(0);
        this.InputImportOperationFileStep2 = fileToUpload.name;
        var reader = new FileReader();
        reader.readAsText(fileToUpload);
        reader.onload = function () {
            if (reader.result) {
                var data = JSON.parse(reader.result);
                if (data.signed === false && data.hex) {
                    _this.unsigned = data.hex;
                }
                else {
                    _this.messageService.addWarning('Not an unsigned operation!');
                }
            }
            else {
                _this.messageService.addError('Failed to read file!');
            }
        };
    };
    BroadcastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-broadcast',
            template: __webpack_require__("../../../../../src/app/components/broadcast/broadcast.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/broadcast/broadcast.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_export_service__["a" /* ExportService */],
            __WEBPACK_IMPORTED_MODULE_5__services_coordinator_service__["a" /* CoordinatorService */]])
    ], BroadcastComponent);
    return BroadcastComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/delegate/delegate.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"accounts\">\r\n  <!-- SEND MODALS -->\r\n  <!-- First Modal -->\r\n  <ng-template #modal1>\r\n\r\n      <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\">Delegate</h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close1()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <form>\r\n              <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-8\">\r\n                      <label for=\"fromAdress\">From Address</label> \r\n                      <select [(ngModel)]=\"activePkh\" id=\"fromAdress\" class=\"form-control\" name=\"first\">\r\n                          <option *ngFor=\"let account of accounts\" [ngValue]=\"account.pkh\">{{ account.pkh }}</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-8\">\r\n                      <label for=\"toAdress\">To Address</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"toAdress\" placeholder=\"\" [(ngModel)]=\"toPkh\" name=\"second\">\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-4\">\r\n                      <label for=\"transactionFee\">Transaction Limit (ꜩ)</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"transactionFee\" placeholder=\"Fee\" [(ngModel)]=\"fee\" name=\"four\">\r\n                  </div>\r\n              </div>\r\n          </form>\r\n\r\n          {{ formInvalid }}\r\n\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"sub\" (click)=\"open2(modal2)\">Send</button>\r\n          </div>\r\n      </div>\r\n\r\n  </ng-template>\r\n\r\n  <!-- Confirmation Modal -->\r\n  <ng-template #modal2>\r\n      <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\">Authenticate delegation</h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close2()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <p>Account: {{ activePkh }}<BR>\r\n              Delegate: {{ toPkh }}<BR>\r\n              Fee: {{ fee | number:'1.0' }}ꜩ\r\n          </p>\r\n          <div class=\"row\">\r\n              <div class=\"form-group col-md-6\">\r\n                  <label for=\"pwd\">Password:</label>\r\n                  <input [(ngModel)]=\"password\" type=\"password\" id=\"pwd\" class=\"form-control\">\r\n              </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" id=\"sub\" (click)=\"open3(modal3)\">Confirm</button>\r\n          {{ pwdValid }}\r\n      </div>\r\n  </ng-template>\r\n\r\n  <!-- Final Modal -->\r\n  <ng-template #modal3>\r\n      <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\">Confirmation</h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close3()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <div *ngIf='!sendResponse'>\r\n              Please wait...\r\n          </div>\r\n          <div *ngIf='sendResponse === \"success\"'>\r\n              <i class=\"fa fa-check-circle\"></i>\r\n              <br><br>\r\n              <p>Your delegation has been successfully broadcasted to the network</p>\r\n          </div>\r\n          <div *ngIf='sendResponse === \"failure\"'>\r\n              Failure!\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" id=\"sub\" (click)=\"close3()\">Close</button>\r\n      </div>\r\n  </ng-template>\r\n\r\n\r\n  <!-- Showing different Send Format according to actionButtonString -->\r\n  <button *ngIf='accounts' type=\"button\" (click)=\"open1(modal1)\" class=\"btn btn-sm btn-outline-primary\">Delegate</button>\r\n\r\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/components/delegate/delegate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delegate/delegate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DelegateComponent = /** @class */ (function () {
    function DelegateComponent(modalService, walletService, messageService, operationService, coordinatorService) {
        this.modalService = modalService;
        this.walletService = walletService;
        this.messageService = messageService;
        this.operationService = operationService;
        this.coordinatorService = coordinatorService;
        this.accounts = null;
        this.activeAccount = null;
        this.formInvalid = '';
    }
    DelegateComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet) {
            this.init();
        }
    };
    DelegateComponent.prototype.init = function () {
        this.accounts = this.walletService.wallet.accounts;
    };
    DelegateComponent.prototype.open1 = function (template1) {
        if (this.walletService.wallet) {
            this.clearForm();
            this.modalRef1 = this.modalService.show(template1, { class: 'first' });
        }
    };
    DelegateComponent.prototype.open2 = function (template) {
        this.formInvalid = this.invalidInput();
        if (!this.formInvalid) {
            if (!this.fee) {
                this.fee = '0';
            }
            this.close1();
            this.modalRef2 = this.modalService.show(template, { class: 'second' });
        }
    };
    DelegateComponent.prototype.open3 = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var pwd, keys;
            return __generator(this, function (_a) {
                pwd = this.password;
                this.password = '';
                keys = this.walletService.getKeys(pwd);
                if (keys) {
                    this.pwdValid = '';
                    this.close2();
                    this.modalRef3 = this.modalService.show(template, { class: 'third' });
                    this.sendDelegation(keys);
                }
                else {
                    this.pwdValid = 'Wrong password!';
                }
                return [2 /*return*/];
            });
        });
    };
    DelegateComponent.prototype.close1 = function () {
        this.modalRef1.hide();
        this.modalRef1 = null;
    };
    DelegateComponent.prototype.close2 = function () {
        this.modalRef2.hide();
        this.modalRef2 = null;
    };
    DelegateComponent.prototype.close3 = function () {
        this.modalRef3.hide();
        this.modalRef3 = null;
    };
    DelegateComponent.prototype.sendDelegation = function (keys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toPkh, fee;
            return __generator(this, function (_a) {
                toPkh = this.toPkh;
                fee = this.fee;
                this.toPkh = '';
                this.fee = '';
                if (!fee) {
                    fee = '0';
                }
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        this.operationService.delegate(this.activePkh, toPkh, Number(fee), keys).subscribe(function (ans) {
                            console.log(JSON.stringify(ans));
                            if (ans.opHash) {
                                _this.sendResponse = 'success';
                                _this.coordinatorService.boost(_this.activePkh);
                            }
                            else {
                                _this.sendResponse = 'failure';
                            }
                        }, function (err) {
                            console.log(JSON.stringify(err));
                            _this.sendResponse = 'failure';
                        });
                        return [2 /*return*/];
                    });
                }); }, 100);
                return [2 /*return*/];
            });
        });
    };
    DelegateComponent.prototype.clearForm = function () {
        this.toPkh = '';
        this.fee = '';
        this.password = '';
        this.pwdValid = '';
        this.formInvalid = '';
        this.sendResponse = '';
    };
    DelegateComponent.prototype.invalidInput = function () {
        if (!this.toPkh || this.toPkh.length !== 36) {
            return 'invalid receiver address';
        }
        else if (!Number(this.fee) && this.fee && this.fee !== '0') {
            return 'invalid fee';
        }
        else {
            return '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('modal1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], DelegateComponent.prototype, "modal1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DelegateComponent.prototype, "activePkh", void 0);
    DelegateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delegate',
            template: __webpack_require__("../../../../../src/app/components/delegate/delegate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/delegate/delegate.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_coordinator_service__["a" /* CoordinatorService */]])
    ], DelegateComponent);
    return DelegateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <!-- Sidebar Holder -->\r\n    <nav id=\"sidebar\">\r\n        <div class=\"sidebar-header\">\r\n                <a routerLink=\"\"><h1 class=\"title\" align=\"center\">Kukai</h1></a>\r\n            <p class=\"sub-heading\" align=\"center\">on a path of self-discovery</p>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <ul class=\"list-unstyled components\">\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"/overview\" class=\"btn-main-action\">Overview</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"/account\" class=\"btn-main-action\">Account</a>\r\n            </li>\r\n            \r\n            <!--<li routerLinkActive=\"active\">\r\n                <a class=\"btn-main-action\">\r\n                    <app-send [activePkh]=\"null\" [actionButtonString]=\"'btnSidebar'\"></app-send>\r\n                </a>\r\n                \r\n            </li>-->\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"/bakery\" class=\"btn-main-action\">Baking</a>\r\n            </li>\r\n            <!--\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"/receive\" class=\"btn-main-action\">Receive</a>\r\n            </li>\r\n            -->\r\n        </ul>\r\n\r\n\r\n        <ul class=\"list-unstyled components bottom-CTAs\">\r\n            <!--<li routerLinkActive=\"active\" class=\"bottom-category\">\r\n                <a routerLink=\"/settings\" align=\"center\">Settings</a>\r\n            </li>-->\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"/broadcast\" class=\"btn-main-action\">Broadcast</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/backup\" class=\"btn-main-action\">Backup</a>\r\n            </li>\r\n            <li class=\"bottom-category\">\r\n                <a (click)=\"logout();\" class=\"btn-main-action\" data-toggle=\"tooltip\" title=\"Clear wallet data\">Logout</a>\r\n            </li>\r\n            <span class=\"btn-main-action\">\r\n                <a href=\"https://github.com/tezwallet/wallet\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\r\n                <a href=\"https://riot.im/app/#/room/!fAygufidcqAVLeKCYU:matrix.org\" target=\"_blank\"><i class=\"fa fa-comments\"></i></a>\r\n                <a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\r\n            </span>\r\n        </ul>\r\n    </nav>\r\n\r\n    <!-- Page Content Holder -->\r\n    <div id=\"content\">\r\n        \r\n        <div class=\"center-content\">\r\n            <router-outlet></router-outlet>\r\n            <app-messages></app-messages>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n    DEMO STYLE\r\n\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nSource from: https://bootstrapious.com/p/bootstrap-sidebar\r\n*/\nbody {\n  font-family: 'Poppins', sans-serif;\n  background: #fafafa; }\np {\n  font-family: 'Poppins', sans-serif;\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999; }\na, a:hover, a:focus {\n  color: inherit;\n  text-decoration: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer; }\n.btn-main-action {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n.navbar-btn {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none !important;\n  border: none; }\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0; }\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  min-height: 100vh;\n  width: 100%; }\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  background: #191919;\n  /*#7386D5;*/\n  color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n#sidebar.active {\n  margin-left: -250px; }\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #e1a205; }\n#sidebar .title {\n  font-size: 4em; }\n#sidebar .sub-heading {\n  font-size: 0.9em;\n  color: #fff !important; }\n#sidebar ul.components {\n  /*padding: 20px 0;*/\n  border-bottom: 1px solid #47748b; }\n/*.top {\r\n    padding: 20px 0;\r\n}*/\n#sidebar ul p {\n  color: #fff;\n  padding: 10px; }\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.5em;\n  display: block; }\n#sidebar ul li a:hover {\n  color: #fff;\n  background: #FAB915; }\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #FAB915; }\na[data-toggle=\"collapse\"] {\n  position: relative; }\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n  content: '\\E259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em; }\na[aria-expanded=\"true\"]::before {\n  content: '\\E260'; }\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc; }\n/*---------------------------------------------------\r\n    SIDEBAR FOOTER STYLE\r\n----------------------------------------------------- */\nul.CTAs {\n  padding: 20px; }\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px; }\n.bottom-category {\n  font-size: 1.1em; }\n.bottom-CTAs {\n  padding-top: 33vh !important; }\n.bottom-CTAs .fa {\n  font-size: 2em;\n  left: 40px;\n  padding: 15px;\n  color: white; }\n.fa-github:hover {\n  color: #FAB915 !important; }\n.fa-comments:hover {\n  color: #77CFA7 !important; }\n.fa-twitter:hover {\n  color: #1DA1F3 !important; }\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n#content {\n  /*padding: 20px;*/ }\n.center-content {\n  /*\r\n    padding-left: 30vw !important;\r\n    //\r\n    margin: 0px auto 0px auto;\r\n    width: 600px;\r\n    */ }\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\n/*@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-left: -250px;\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(walletService, messageService, activityService, coordinatorService, router) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.activityService = activityService;
        this.coordinatorService = coordinatorService;
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.logout = function () {
        this.coordinatorService.stopAll();
        this.walletService.clearWallet();
        this.router.navigate(['']);
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_4__services_coordinator_service__["a" /* CoordinatorService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/import/import.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"activePanel==0\">\r\n    <p></p>\r\n</div>\r\n<div *ngIf=\"activePanel==1\">\r\n   <p>This is your private seed. Please write it down and store somewhere safe.</p>\r\n   <p><b>{{ data.seed }}</b></p>\r\n   <button class=\"btn btn-primary\" (click)=\"pwdView()\">Next</button>\r\n</div>\r\n<div *ngIf=\"activePanel==2\">\r\n  <p>Encrypt your wallet<BR>\r\n    <input type=\"password\" [(ngModel)]=\"pwd1\" placeholder=\"Password\"><BR>\r\n    <input type=\"password\" [(ngModel)]=\"pwd2\" placeholder=\"Confirm password\"></p>\r\n  <button class=\"btn btn-primary\" (click)=\"encryptWallet()\">Encrypt</button>\r\n</div>\r\n<div *ngIf=\"activePanel==3\">\r\n  <p>Encrypted wallet data:<BR>\r\n  &#123;\"encryptedMnemonic\": \"{{ data.seed }}\", \"salt\": \"{{ data.salt }}\"&#125;</p>\r\n  <a routerLink=\"/\"><button class=\"btn btn-primary\">Finish</button></a>\r\n</div>-->\r\n\r\n\r\n<div class=\"container\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header\">Import Your Wallet</h1>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Subheading -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h4>Import your previous wallet through your seed or your encrypted file. \r\n                You can also create a new wallet and retrieve your funds from the genesis block with your ICO credentials.</h4>\r\n        </div>\r\n    </div>\r\n    <br>\r\n\r\n    <!-- 1. Import from File -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3>1. Import wallet from File</h3>\r\n        </div>\r\n    </div>\r\n    <form>\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-sm-8\">\r\n                <label for=\"fileFormControl\">Import your wallet from file (.tez). Both encrypted keystore files and view-only wallets can be imported here.</label>\r\n                <input type=\"file\" (change)=\"handleFileInput($event.target.files)\" accept=\".tez\" class=\"form-control-file btn btn-clear btn-second\" id=\"fileFormControl\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <br>\r\n\r\n    <!-- 2. Retrieve from Seed or ICO wallet -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3>2. Import wallet from Seed or ICO credentials</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <a routerLink=\"/mnemonic-import/\">Retrieve wallet</a> from your mnemonic words\r\n        </div>\r\n    </div>\r\n    <br><br>\r\n\r\n    <!-- 3. Retrieve PKH wallet -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3>3. Observer wallet</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <form class=\"form-inline\">\r\n                <label class=\"sr-only\" for=\"inputObserverWallet\">Observer wallet</label>\r\n                <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inputObserverWallet\" [(ngModel)]=\"pkh\" placeholder=\"tz1...\" [ngModelOptions]=\"{standalone: true}\">\r\n                <button type=\"button\" class=\"btn btn-clear btn-second mb-2 mr-sm-2\" (click)='importFromPkh()'>Import</button>\r\n                <!-- HANDLE ERRORS - NEED USER MESSAGE-->\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- To delete --\r\n<div>\r\n    <p>Import your encrypted wallet here:</p>\r\n    <textarea rows=\"8\" cols=60 [(ngModel)]=\"encryptedWallet\" placeholder=\"\"></textarea>\r\n    <BR>\r\n</div>\r\n<a routerLink=\"/\"><button class=\"btn btn-clear btn-second pull-left\">Back</button></a>\r\n<a (click)='import()' routerLink=\"/\"><button class=\"btn btn-clear btn-second pull-right\">Load</button></a>\r\n-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/import/import.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\nh4 {\n  font-weight: 400; }\n\n.btn-second {\n  min-width: 96px;\n  color: #333333; }\n\n.btn-second:hover {\n  background-color: #cccccc; }\n\n.btn-second:active {\n  background-color: #b3b3b3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/import/import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_import_service__ = __webpack_require__("../../../../../src/app/services/import.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportComponent = /** @class */ (function () {
    function ImportComponent(walletService, router, messageService, importService) {
        this.walletService = walletService;
        this.router = router;
        this.messageService = messageService;
        this.importService = importService;
        this.activePanel = 0;
        this.encryptedWallet = '';
        this.pkh = '';
        this.pk = '';
        this.data = {
            seed: '',
            salt: ''
        };
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent.prototype.importFromTextbox = function () {
        this.import(this.encryptedWallet);
    };
    ImportComponent.prototype.importFromPkh = function () {
        console.log('Call import service');
        this.importService.importWalletFromPkh(this.pkh);
        this.router.navigate(['/overview']);
    };
    ImportComponent.prototype.importFromPk = function () {
        this.importService.importWalletFromPk(this.pk);
        this.router.navigate(['/overview']);
    };
    ImportComponent.prototype.import = function (keyFile) {
        if (this.importService.importWalletData(keyFile)) {
            this.router.navigate(['/overview']);
        }
        else {
            this.messageService.add('Failed to import wallet!');
        }
    };
    ImportComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        var fileToUpload = files.item(0);
        if (!this.validateFile(fileToUpload.name)) {
            console.log('Selected file format is not supported');
            fileToUpload = null;
            return false;
        }
        else {
            var reader_1 = new FileReader();
            reader_1.readAsText(fileToUpload);
            reader_1.onload = function () {
                _this.import(reader_1.result);
            };
        }
    };
    ImportComponent.prototype.validateFile = function (name) {
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (ext.toLowerCase() === 'tez') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImportComponent.prototype, "encryptedWallet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImportComponent.prototype, "pkh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImportComponent.prototype, "pk", void 0);
    ImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-import',
            template: __webpack_require__("../../../../../src/app/components/import/import.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/import/import.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_import_service__["a" /* ImportService */]])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n<div *ngFor=\"let message of messageService.messages\">\r\n  <alert [type]=\"message.type\" [dismissOnTimeout]=\"message.timeout\">{{ message.msg }}</alert>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  position: absolute;\n  bottom: 0px;\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/mnemonic-import/mnemonic-import.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" *ngIf=\"activePanel === 0\">\r\n    <div class=\"center-content\">\r\n        <div class=\"card text-center fix-size\">\r\n            <div class=\"card-body\">\r\n                <h1 class=\"card-title\">Retrieve your Wallet</h1>\r\n                <div class=\"card-text\">\r\n                    <form class=\"form-group form-min-height\">\r\n                        <div>\r\n                            <tabset>\r\n                              <tab heading=\"Regular import\" id=\"tab1\" (select)=\"tge = false\"></tab>\r\n                              <tab heading=\"ICO import\" (select)=\"tge = true\"></tab>\r\n                            </tabset><BR>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"tge\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"file\" (change)=\"handleFileInput($event.target.files)\" class=\"form-control-file\" id=\"file\" accept=\".json\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"tge\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <p>Please make sure to first <a routerLink=\"/activate\">activate</a> your ICO-wallet.</p>\r\n                                </div>\r\n                            </div>\r\n                        <!-- mnemonic -->\r\n                        <div class=\"form-group row\" [ngClass]=\"{ 'form-row-margin-top': !tge }\"> <!-- ngClass => margin-top: 75px only for tab1 -->\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"text\" [(ngModel)]=\"mnemonic\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Mnemonic\">\r\n                                <small class=\"form-text text-left\">The mnemonic phrase (15 words)</small>\r\n                            </div>\r\n                        </div>\r\n                        <!-- passphrase -->\r\n                        <div class=\"form-group row\" *ngIf=\"!tge\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"password\" [(ngModel)]=\"passphrase\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Passphrase (optional)\">\r\n                                <small class=\"form-text text-left\">If your mnemonic phrase is protected with a passphrase, it need to be entered here</small>\r\n                            </div>\r\n                        </div>\r\n                        <!-- email -->\r\n                        <div class=\"form-group row\" *ngIf=\"tge\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"text\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Email\">\r\n                                <small class=\"form-text text-left\">The email used during the ICO (e.g. example@email.com)</small>\r\n                            </div>\r\n                        </div>\r\n                        <!-- password -->\r\n                        <div class=\"form-group row\" *ngIf=\"tge\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Password\">\r\n                                <small class=\"form-text text-left\">The password you choose during the ICO.</small>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <p>This is an alphanet version, please use the faucet website to get test wallet credential that you can retrieve <a href=\"https://faucet.tzalpha.net/\" target=\"blank\">here</a>.</p>\r\n                    <p>At the launch of betanet, you can use your wallet credentials from the pdf file generated during ICO</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"retrieve()\">Retrieve</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Password -->\r\n<div id=\"content\" *ngIf=\"activePanel === 1\">\r\n    <div class=\"center-content\">\r\n        <div class=\"card text-center fix-size\">\r\n            <div class=\"card-body\">\r\n                <h1 class=\"card-title\">Set a password</h1>\r\n                <div class=\"card-text\">\r\n                    <form class=\"form-group\">\r\n                        <!-- password 1 -->\r\n                        <div class=\"form-group row\" *ngIf=\"tge\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"password\" [(ngModel)]=\"pwd1\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Password\">\r\n                                <small class=\"form-text text-left\"></small>\r\n                            </div>\r\n                        </div>\r\n                        <!-- password 2 -->\r\n                        <div class=\"form-group row\" *ngIf=\"tge\">\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"password\" [(ngModel)]=\"pwd2\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Password\">\r\n                                <small class=\"form-text text-left\"></small>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <p>The password is used to encrypt your private key.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"setPwd()\">Encrypt</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Finish -->\r\n<div id=\"content\" *ngIf=\"activePanel === 2\">\r\n    <div class=\"center-content\">\r\n        <div class=\"card text-center fix-size\">\r\n            <div class=\"card-body\">\r\n                <h1 class=\"card-title\">Wallet created</h1>\r\n                <div class=\"card-text\">\r\n                    <form class=\"form-group\">\r\n                        <p class=\"seed\"><b>{{ export() }}</b></p>\r\n                        <br>\r\n                        <p>Your wallet is now set up and ready to use.</p>\r\n                        <p>Please download your Encrypted Keystore File..</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"download()\">Download</button>\r\n                    </form>\r\n                    <p>At the launch of betanet, you can use your wallet credentials from the pdf file generated during ICO</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" [disabled]=\"!Downloaded\" (click)=\"done()\">Finish</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mnemonic-import/mnemonic-import.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  padding-bottom: 0.7vh; }\n\n.fix-size {\n  width: 40rem; }\n\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n\n#content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  min-width: 75vw; }\n\n.center-content {\n  margin: auto; }\n\n.card-title {\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.125); }\n\n.card-text {\n  padding-top: 2rem; }\n\n.card-footer {\n  background-color: transparent; }\n\n.form-row-margin-top {\n  margin-top: 75px; }\n\n.form-min-height {\n  min-height: 442px; }\n\n.form-control {\n  line-height: 2; }\n\n.seed {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n  background-color: rgba(0, 0, 0, 0.125);\n  white-space: pre-line;\n  font-size: 120%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mnemonic-import/mnemonic-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnemonicImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_import_service__ = __webpack_require__("../../../../../src/app/services/import.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_export_service__ = __webpack_require__("../../../../../src/app/services/export.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// https://www.npmjs.com/package/load-json-file
var MnemonicImportComponent = /** @class */ (function () {
    function MnemonicImportComponent(importService, router, messageService, operationService, walletService, coordinatorService, exportService) {
        this.importService = importService;
        this.router = router;
        this.messageService = messageService;
        this.operationService = operationService;
        this.walletService = walletService;
        this.coordinatorService = coordinatorService;
        this.exportService = exportService;
        this.MIN_PWD_LENGTH = 8;
        this.activePanel = 0;
        this.tge = false;
        this.Downloaded = false;
    }
    MnemonicImportComponent.prototype.ngOnInit = function () {
    };
    MnemonicImportComponent.prototype.retrieve = function () {
        if (this.tge) {
            this.passphrase = this.email + this.password;
        }
        if (this.operationService.validMnemonic(this.mnemonic)) {
            this.activePanel++;
        }
        else {
            this.messageService.addError('Invalid mnemonic!');
        }
    };
    MnemonicImportComponent.prototype.setPwd = function () {
        if (this.validPwd()) {
            var password = this.pwd1;
            this.pwd1 = '';
            this.pwd2 = '';
            this.walletData = this.walletService.createEncryptedWallet(this.mnemonic, password, this.passphrase);
            this.mnemonic = '';
            this.passphrase = '';
            this.email = '';
            this.password = '';
            this.activePanel++;
        }
    };
    MnemonicImportComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        var fileToUpload = files.item(0);
        if (!this.validateFile(fileToUpload.name)) {
            console.log('Selected file format is not supported');
            fileToUpload = null;
            return false;
        }
        else {
            var reader_1 = new FileReader();
            reader_1.readAsText(fileToUpload);
            reader_1.onload = function () {
                var res = JSON.parse(reader_1.result);
                if (res.mnemonic) {
                    var mnemonic = res.mnemonic[0];
                    for (var i = 1; i < 15; i++) {
                        mnemonic = mnemonic + ' ' + res.mnemonic[i];
                    }
                    _this.mnemonic = mnemonic;
                }
                if (res.email) {
                    _this.email = res.email;
                }
                if (res.password) {
                    _this.password = res.password;
                }
            };
        }
        // }
    };
    MnemonicImportComponent.prototype.validateFile = function (name) {
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (ext.toLowerCase() === 'json') {
            return true;
        }
        else {
            return false;
        }
    };
    MnemonicImportComponent.prototype.validPwd = function () {
        if (this.pwd1.length < this.MIN_PWD_LENGTH || this.pwd2.length < this.MIN_PWD_LENGTH) {
            this.messageService.addError('Password too short!');
            return false;
        }
        if (this.pwd1 !== this.pwd2) {
            this.messageService.addError('Passwords doesn\'t match!');
            return false;
        }
        return true;
    };
    MnemonicImportComponent.prototype.export = function () {
        return JSON.stringify(this.walletData);
    };
    MnemonicImportComponent.prototype.download = function () {
        this.exportService.downloadWallet(this.walletData);
        this.Downloaded = true;
    };
    MnemonicImportComponent.prototype.done = function () {
        this.importService.importWalletData(this.walletData, false);
        this.walletData = null;
        this.router.navigate(['/overview']);
        this.messageService.addSuccess('Your new wallet is now set up and ready!');
    };
    MnemonicImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mnemonic-import-wallet',
            template: __webpack_require__("../../../../../src/app/components/mnemonic-import/mnemonic-import.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/mnemonic-import/mnemonic-import.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_import_service__["a" /* ImportService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_6__services_coordinator_service__["a" /* CoordinatorService */],
            __WEBPACK_IMPORTED_MODULE_7__services_export_service__["a" /* ExportService */]])
    ], MnemonicImportComponent);
    return MnemonicImportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-account/new-account.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- NEW ACCOUNT MODALS -->\r\n<!-- First Modal -->\r\n<ng-template #modal1>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Fund new account</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close1()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n            <label for=\"fromAdress\">Fund from:</label>\r\n            <select [(ngModel)]=\"activePkh\" id=\"fromAdress\" class=\"form-control mono\" name=\"first\">\r\n                <option *ngFor=\"let account of accounts\" [ngValue]=\"account.pkh\">{{ account.pkh }}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"ammount\">Amount:</label>\r\n                <input [(ngModel)]=\"amount\" type=\"text\" id=\"ammount\" class=\"form-control\" placeholder=\"0.00\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"fee\">Fee:</label>\r\n                <input [(ngModel)]=\"fee\" type=\"text\" id=\"fee\" class=\"form-control\" placeholder=\"0.00\">\r\n            </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"sub\" (click)=\"open2(modal2)\">Preview</button>\r\n        {{ formInvalid }}\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Confirmation Modal -->\r\n<ng-template #modal2>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Authenticate new account</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close2()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>From: {{ activePkh }}\r\n            <BR> Amount: {{ amount | number:'1.0' }}ꜩ\r\n            <BR> Fee: {{ fee | number:'1.0' }}ꜩ\r\n            <BR>\r\n        </p>\r\n        <div class=\"row\">\r\n            <div *ngIf='walletService.isFullWallet()' class=\"form-group col-md-6\">\r\n                <label for=\"pwd\">Password:</label>\r\n                <input [(ngModel)]=\"password\" type=\"password\" id=\"pwd\" class=\"form-control\">\r\n                <small id=\"passwordHelpBlock\" class=\"form-text text-muted\" *ngIf='!isValidModal2.neverConfirmed && !isValidModal2.password'>\r\n                    {{ pwdValid }} - for ICO wallet, your password is combined with your email i.e. \"me@tezos.comq7zZB1E1Br\"\r\n                </small>\r\n            </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"sub\" (click)=\"open3(modal3)\">Confirm</button>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Final Modal -->\r\n<ng-template #modal3>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Confirmation</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close3()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div *ngIf='!sendResponse'>\r\n            Please wait...\r\n        </div>\r\n        <ng-container *ngIf='sendResponse'>\r\n            <div *ngIf='sendResponse.success === true'>\r\n                <i class=\"fa fa-check-circle\"></i>\r\n                <br>\r\n                <br>\r\n                <ng-container *ngIf='sendResponse.payload.opHash'>\r\n                    <p>Your funding of a new account have successfully been broadcasted to the network</p>\r\n                </ng-container>\r\n                <ng-container *ngIf='sendResponse.payload.unsignedOperation'>\r\n                    <p>Your unsigned transaction have successfully been created</p>\r\n                </ng-container>\r\n            </div>\r\n            <div *ngIf='sendResponse.success === false'>\r\n                <p>Failure!</p>\r\n                <p>{{ sendResponse.payload.msg }}</p>\r\n            </div>\r\n            <button *ngIf='sendResponse.payload.unsignedOperation' type=\"button\" class=\"btn btn-primary\" (click)=\"download()\">Download</button>\r\n        </ng-container>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"sub\" (click)=\"close3()\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button *ngIf='accounts' type=\"button\" href (click)=\"open1(modal1)\" class=\"btn btn-sm btn-outline-primary btn-op\">New account</button>"

/***/ }),

/***/ "../../../../../src/app/components/new-account/new-account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header {\n  text-align: center; }\n\n.modal-body-success {\n  text-align: center; }\n\n.fa {\n  color: #28a745;\n  font-size: 96px; }\n\na:hover {\n  cursor: pointer; }\n\n.btn-op {\n  width: 120px;\n  border-radius: 0rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-account/new-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_export_service__ = __webpack_require__("../../../../../src/app/services/export.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var NewAccountComponent = /** @class */ (function () {
    function NewAccountComponent(walletService, messageService, modalService, operationService, coordinatorService, exportService) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.modalService = modalService;
        this.operationService = operationService;
        this.coordinatorService = coordinatorService;
        this.exportService = exportService;
        // accounts = this.walletService.wallet.accounts;
        this.accounts = null;
        this.formInvalid = '';
        this.isValidModal2 = {
            password: false,
            neverConfirmed: true
        };
    }
    NewAccountComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet) {
            this.init();
        }
    };
    NewAccountComponent.prototype.init = function () {
        this.accounts = this.walletService.wallet.accounts;
    };
    NewAccountComponent.prototype.open1 = function (template1) {
        this.clearForm();
        this.modalRef1 = this.modalService.show(template1, { class: 'modal-sm' });
    };
    NewAccountComponent.prototype.open2 = function (template) {
        this.formInvalid = this.invalidInput();
        if (!this.formInvalid) {
            if (!this.fee) {
                this.fee = '0';
            }
            this.close1();
            this.modalRef2 = this.modalService.show(template, { class: 'second' });
        }
    };
    NewAccountComponent.prototype.open3 = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var pwd, keys;
            return __generator(this, function (_a) {
                pwd = this.password;
                this.password = '';
                keys = this.walletService.getKeys(pwd);
                if (keys) {
                    this.pwdValid = '';
                    this.close2();
                    this.modalRef3 = this.modalService.show(template, { class: 'third' });
                    this.newAccount(keys);
                }
                else {
                    this.isValidModal2.neverConfirmed = false;
                    this.pwdValid = 'Your Password is invalid';
                }
                return [2 /*return*/];
            });
        });
    };
    NewAccountComponent.prototype.close1 = function () {
        this.modalRef1.hide();
        this.modalRef1 = null;
    };
    NewAccountComponent.prototype.close2 = function () {
        this.modalRef2.hide();
        this.modalRef2 = null;
    };
    NewAccountComponent.prototype.close3 = function () {
        this.modalRef3.hide();
        this.modalRef3 = null;
    };
    NewAccountComponent.prototype.newAccount = function (keys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var amount, fee;
            return __generator(this, function (_a) {
                amount = this.amount;
                fee = this.fee;
                this.amount = '';
                this.fee = '';
                if (!amount) {
                    amount = '0';
                }
                if (!fee) {
                    fee = '0';
                }
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log('keys: ' + JSON.stringify(keys));
                        console.log('pkh: ' + this.activePkh);
                        this.operationService.originate(this.activePkh, Number(amount), Number(fee), keys).subscribe(function (ans) {
                            _this.sendResponse = ans;
                            if (ans.success === true) {
                                if (ans.payload.opHash) {
                                    _this.walletService.addAccount(ans.payload.newPkh);
                                    _this.coordinatorService.boost(_this.activePkh);
                                    _this.coordinatorService.start(ans.payload.newPkh);
                                }
                            }
                        }, function (err) {
                            console.log('Error(newAccount): ' + JSON.stringify(err));
                        });
                        return [2 /*return*/];
                    });
                }); }, 100);
                return [2 /*return*/];
            });
        });
    };
    NewAccountComponent.prototype.invalidInput = function () {
        if (!Number(this.amount) && this.amount && this.amount !== '0') {
            return 'invalid amount';
        }
        else if (!Number(this.fee) && this.fee && this.fee !== '0') {
            return 'invalid fee';
        }
        else {
            return '';
        }
    };
    NewAccountComponent.prototype.clearForm = function () {
        this.amount = '';
        this.fee = '';
        this.password = '';
        this.pwdValid = '';
        this.formInvalid = '';
        this.sendResponse = null;
        this.isValidModal2.password = false;
        this.isValidModal2.neverConfirmed = true;
    };
    NewAccountComponent.prototype.download = function () {
        this.exportService.downloadOperationData(this.sendResponse.payload.unsignedOperation, false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('modal1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], NewAccountComponent.prototype, "modal1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NewAccountComponent.prototype, "activePkh", void 0);
    NewAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-account',
            template: __webpack_require__("../../../../../src/app/components/new-account/new-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-account/new-account.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_coordinator_service__["a" /* CoordinatorService */],
            __WEBPACK_IMPORTED_MODULE_6__services_export_service__["a" /* ExportService */]])
    ], NewAccountComponent);
    return NewAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-wallet/new-wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"center-content\">\r\n\r\n    <!-- Mouse movements card -->\r\n    <div class=\"card text-center fix-size\" *ngIf=\"activePanel==0\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"card-title\">Collecting additional entropy</h1>\r\n        <div class=\"card-text\">\r\n          <p class =\"mono rndp\">{{ entropy }}</p>\r\n          <progressbar [value]=\"counter2\" type=\"info\" [striped]=\"true\"><ng-container *ngIf=\"counter2 > 4\">{{ counter2 | number: '1.0-0' }}%</ng-container></progressbar>\r\n          <p>Please move the mouse over the screen to create extra entropy for the wallet creation.</p>\r\n          <p>This step ensures your seed is generated random by collecting unpredictabel data.</p>\r\n      </div>\r\n      </div>\r\n      <div class=\"card-footer text-right\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"skipExtraEntropy()\">Skip</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Seed card -->\r\n    <div class=\"card text-center fix-size\" *ngIf=\"activePanel==2\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"card-title\">Save your Seed</h1>\r\n        <div class=\"card-text\">\r\n          <p class=\"seed\"><b>{{ mnemonic }}</b></p>\r\n          <p>When you create a new account, a new Tezos seed is generated. Your Tezos seed is the master key of all your wallets and any money inside it.</p>\r\n          <p>Make sure to back it up, write it down, and keep it incredibly safe!</p>\r\n          <p>**Do not lose it!** It cannot be recovered if you lose it.</p>\r\n          <p>**Do not share it!** Your funds will be stolen if you use seed on a malicious/phishing site.</p>\r\n          <p>**Make a backup!** Secure it like the millions it may be worth one day.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"verifyView()\">Next</button>\r\n      </div>\r\n    </div>\r\n    <!-- Seed card -->\r\n    <div class=\"card text-center fix-size\" *ngIf=\"activePanel==3\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"card-title\">Verify your Seed</h1>\r\n        <div class=\"card-text\">\r\n          <textarea [(ngModel)]=\"userMnemonic\" rows=\"3\" cols=\"80\" \r\n          placeholder=\"word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15\"></textarea><BR>\r\n      </div>\r\n      </div>\r\n      <div class=\"card-footer text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" [disabled]=\"!mnemonicMatch()\" (click)=\"pwdView()\">Next</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Password card -->\r\n    <div class=\"card text-center fix-size\" *ngIf=\"activePanel==4\">\r\n        <div class=\"card-body\">\r\n          <h1 class=\"card-title\">Choose your Password</h1>\r\n          <div class=\"card-text\">            \r\n            <form>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"password\" [(ngModel)]=\"pwd1\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Password\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"password\" [(ngModel)]=\"pwd2\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                  <small id=\"emailHelp1\" class=\"form-text text-muted text-left\">Minimum {{ this.MIN_PWD_LENGTH }} characters</small>\r\n                  <small id=\"emailHelp2\" class=\"form-text alert-danger text-left\" *ngIf=\"!isValidPass.minLength\">There must be a minimum of {{ MIN_PWD_LENGTH }} characters</small>\r\n                  <small id=\"emailHelp3\" class=\"form-text alert-danger text-left\" *ngIf=\"!isValidPass.match\">Passswords doesn't match!</small>\r\n                  <small id=\"emailHelp4\" class=\"form-text alert-success text-left\" *ngIf=\"isValidPass.confirmed\">Password confirmed</small>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <p>This password encrypts your private key.</p>\r\n            <p>It is also used to lock and unlock the sensitive parts of your wallet (private keys, sending).</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" [disabled]=\"!pwd1\" (click)=\"encryptWallet()\">Encrypt</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Seed card -->\r\n    <div class=\"card text-center fix-size\" *ngIf=\"activePanel==5\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"card-title\">Wallet created</h1>\r\n        <div class=\"card-text\">\r\n          <p class=\"seed\"><b>{{ export() }}</b></p>\r\n          <br>\r\n          <p>Your wallet is now set up and ready to use.</p>\r\n          <p>Please download your Encrypted Keystore File..</p>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"download()\">Download</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" [disabled]=\"!ekfDownloaded\" (click)=\"done()\" routerLink=\"\">Finish</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/new-wallet/new-wallet.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  padding-bottom: 0.7vh; }\n\n.btn-generate {\n  font-size: 24px; }\n\n.btn-second {\n  min-width: 90px; }\n\n.btn-second:hover {\n  background-color: #cccccc; }\n\n/* Fix the buttons */\n\n.btn-fix {\n  color: red !important;\n  position: absolute;\n  left: 60vw;\n  top: 48vh; }\n\n.mono {\n  font-family: \"Courier New\", Courier, monospace; }\n\n.rndp {\n  width: 390px;\n  margin: auto; }\n\n.tmp {\n  background-color: lightblue; }\n\n.fix-size {\n  width: 40rem;\n  height: 40rem; }\n\ndiv.entropy {\n  border-style: solid;\n  border-width: 5px; }\n\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n\n#content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  min-width: 75vw; }\n\n.center-content {\n  margin: auto; }\n\n.card-title {\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.125); }\n\n.card-text {\n  padding-top: 2rem; }\n\n.seed {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n  background-color: rgba(0, 0, 0, 0.125);\n  white-space: pre-line;\n  font-size: 120%; }\n\n.card-footer {\n  background-color: transparent; }\n\n.form-control {\n  line-height: 2; }\n\n/*\r\ninput[type=password]:focus:not([readonly]) + label {\r\n    color: green; \r\n}\r\n\r\ninput[type=password]:focus:not([readonly]) {\r\n    border-bottom: 1px solid green;\r\n    box-shadow: 0 1px 0 0 green; \r\n}\r\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-wallet/new-wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewWalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_export_service__ = __webpack_require__("../../../../../src/app/services/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_import_service__ = __webpack_require__("../../../../../src/app/services/import.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_randomatic__ = __webpack_require__("../../../../randomatic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_randomatic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_randomatic__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { Router } from '@angular/router';
var NewWalletComponent = /** @class */ (function () {
    function NewWalletComponent(walletService, messageService, exportService, importService, cdRef) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.exportService = exportService;
        this.importService = importService;
        this.cdRef = cdRef;
        this.MIN_PWD_LENGTH = 8;
        this.pwd1 = '';
        this.pwd2 = '';
        this.userMnemonic = '';
        this.ekfDownloaded = false;
        this.activePanel = 0;
        this.prevCoords = {
            x: 0,
            y: 0
        };
        // Verify password boolean
        this.isValidPass = {
            empty: true,
            minLength: true,
            match: true,
            confirmed: false
        };
        this.counter = 0;
        this.counter2 = 0;
        this.entropy = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
            'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
    }
    NewWalletComponent.prototype.onMouseMove = function (e) {
        if (this.activePanel === 0) {
            var x = Math.round(e.pageX * 255 / document.body.clientWidth);
            var y = Math.round(e.pageY * 255 / document.body.clientHeight);
            if (x !== this.prevCoords.x || y !== this.prevCoords.y) {
                this.prevCoords.x = x;
                this.prevCoords.y = y;
                var part = this.entropy.substr(this.counter * 4, 4); // part of string to replace
                var newPart = Number('0x' + part) ^ (x + y * 16 * 16);
                part = newPart.toString(16);
                for (var i = 1; i <= 3; i++) {
                    if (!part[i]) {
                        part = '0' + part;
                    }
                }
                part = this.entropy.substr(0, this.counter * 4) + part + this.entropy.substr((this.counter + 1) * 4, this.entropy.length);
                this.entropy = part;
                this.counter = (this.counter + 1) % (this.entropy.length / 4);
                if (this.counter % 8 === 0) {
                    this.counter2++;
                } // Set time for collection here
                if (this.counter2 >= 100) {
                    this.activePanel++;
                    var finalEntropy = '';
                    for (var i = 0; i < 40; i++) {
                        var hex = 0;
                        for (var j = 0; j < 4; j++) {
                            hex = hex ^ Number('0x' + this.entropy[i * 4 + j]);
                        }
                        finalEntropy = finalEntropy + hex.toString(16);
                    }
                    this.entropy = finalEntropy;
                    this.generateSeed();
                }
            }
        }
    };
    NewWalletComponent.prototype.ngOnInit = function () {
        this.entropy = __WEBPACK_IMPORTED_MODULE_6_randomatic__('?', 160, { chars: '0123456789abcdef' });
    };
    NewWalletComponent.prototype.skipExtraEntropy = function () {
        this.activePanel++;
        this.entropy = '';
        this.generateSeed();
    };
    NewWalletComponent.prototype.generateSeed = function () {
        this.mnemonic = this.walletService.createNewWallet(this.entropy);
        this.mnemonic = this.mnemonic.replace(/((?:.*?\s){4}.*?)\s/g, '$1\n'); // 5 words per line
        this.activePanel++;
    };
    NewWalletComponent.prototype.verifyView = function () {
        this.activePanel++;
        this.mnemonic = this.mnemonic.replace(/(\r\n\t|\n|\r\t| )/gm, ''); // remove white-spaces and linebreaks
    };
    NewWalletComponent.prototype.pwdView = function () {
        this.activePanel++;
        this.mnemonic = '';
        this.userMnemonic = '';
    };
    NewWalletComponent.prototype.mnemonicMatch = function () {
        return (this.mnemonic === this.userMnemonic.replace(/(\r\n\t|\n|\r\t| )/gm, ''));
    };
    NewWalletComponent.prototype.encryptWallet = function () {
        var _this = this;
        if (this.validatePwd()) {
            var pwd_1 = this.pwd1;
            this.pwd1 = '';
            this.pwd2 = '';
            setTimeout(function () {
                console.log('Wait...');
                _this.data = _this.walletService.createEncryptedWallet(_this.mnemonic, pwd_1);
                _this.mnemonic = '';
                _this.activePanel++;
                _this.walletService.storeWallet();
            }, 100);
        }
    };
    NewWalletComponent.prototype.validatePwd = function () {
        if (this.pwd1.length < this.MIN_PWD_LENGTH || this.pwd2.length < this.MIN_PWD_LENGTH) {
            this.isValidPass.minLength = false;
            console.log('isValidPass.length', this.isValidPass.minLength);
        }
        else {
            this.isValidPass.minLength = true;
        }
        if (this.pwd1 !== this.pwd2) {
            this.isValidPass.match = false;
            console.log('isValidPass.match', this.isValidPass.match);
        }
        else {
            this.isValidPass.match = true;
        }
        if (this.isValidPass.minLength && this.isValidPass.match) {
            this.isValidPass.confirmed = true;
            console.log('Success', this.isValidPass.confirmed);
            return true;
        }
        else {
            this.isValidPass.confirmed = false;
        }
        return false;
    };
    NewWalletComponent.prototype.reset = function () {
        this.activePanel = 0;
    };
    NewWalletComponent.prototype.done = function () {
        this.importService.importWalletData(this.data, false);
        this.data = null;
        this.messageService.addSuccess('Your new wallet is now set up and ready!');
    };
    NewWalletComponent.prototype.export = function () {
        return JSON.stringify(this.data);
    };
    NewWalletComponent.prototype.download = function () {
        this.exportService.downloadWallet(this.data);
        this.ekfDownloaded = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NewWalletComponent.prototype, "pwd1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NewWalletComponent.prototype, "pwd2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NewWalletComponent.prototype, "userMnemonic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NewWalletComponent.prototype, "onMouseMove", null);
    NewWalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-wallet',
            template: __webpack_require__("../../../../../src/app/components/new-wallet/new-wallet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-wallet/new-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_export_service__["a" /* ExportService */],
            __WEBPACK_IMPORTED_MODULE_5__services_import_service__["a" /* ImportService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], NewWalletComponent);
    return NewWalletComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header\">Your Wallet</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row bottom-separator\">\r\n        <div class=\"col-6\">\r\n            <ng-container *ngIf=\"walletService.wallet\">\r\n                <span *ngIf=\"walletService.wallet.balance.balanceXTZ > 0\">\r\n                    Balance: {{ walletService.wallet.balance.balanceXTZ / 1000000 | number:'1.0' }} ꜩ\r\n                    (${{ walletService.wallet.balance.balanceXTZ / 1000000 * walletService.wallet.XTZrate | number:'1.00' }} USD)\r\n                </span>\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Identity -->\r\n    <div class=\"row row-header\">\r\n        <div class=\"col-sm-auto col-header col-border border border-warning min-size-address-cell\">\r\n            Identity\r\n        </div>\r\n        <div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n            Balance (ꜩ)\r\n        </div>\r\n\r\n        <div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n            Value (USD)\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"walletService.wallet.accounts[0]\">\r\n        <div class=\"row pkh-row\" [class.selectedPkh]=\"selectedPkh === walletService.wallet.accounts[0].pkh\" (click)=\"click(walletService.wallet.accounts[0].pkh)\">\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-address-cell mono\" (dblclick)=\"dblclick(walletService.wallet.accounts[0].pkh)\">\r\n                {{ walletService.wallet.accounts[0].pkh }}\r\n            </div>\r\n            \r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-other-cell\">\r\n                <ng-container *ngIf=\"walletService.wallet.accounts[0].balance.balanceXTZ !== null\">{{ walletService.wallet.accounts[0].balance.balanceXTZ / 1000000 | number:'1.0-6' }} ꜩ</ng-container>\r\n            </div>\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-other-cell\">\r\n                <ng-container *ngIf=\"walletService.wallet.accounts[0].balance.balanceFiat !== null\">{{ walletService.wallet.accounts[0].balance.balanceFiat | number:'1.0-0' }} USD</ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <!-- Accounts + Total sections shown only if there are accounts -->\r\n    <span *ngIf=\"walletService.wallet.accounts[1]\">\r\n\r\n        <!-- Accounts -->\r\n        <div class=\"row row-header\">\r\n            <div class=\"col col-header col-border border border-warning min-size-address-cell\">\r\n                Accounts\r\n            </div>\r\n        <!--\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n                Balance (ꜩ)\r\n            </div>\r\n\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n                Value (USD)\r\n            </div>\r\n        -->\r\n        </div>\r\n\r\n        <div class=\"row pkh-row\" *ngFor=\"let account of walletService.wallet.accounts | slice:1\" (click)=\"click(account.pkh)\" [class.selectedPkh]=\"selectedPkh === account.pkh\">\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-address-cell mono\" (dblclick)=\"dblclick(account.pkh)\">\r\n                {{ account.pkh }}\r\n            </div>\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-other-cell\">\r\n                <ng-container *ngIf=\"account.balance.balanceXTZ !== null\">{{ account.balance.balanceXTZ / 1000000 | number:'1.0-6' }} ꜩ</ng-container>\r\n            </div>\r\n            <div class=\"col-sm-auto col-border border border-warning text-truncate min-size-other-cell\">\r\n                <ng-container *ngIf=\"account.balance.balanceFiat !== null\">{{ account.balance.balanceFiat | number:'1.0-0' }} USD</ng-container>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Total - Last row -->\r\n        <div class=\"row row-header\">\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-address-cell\">\r\n                Total\r\n            </div>\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n                <ng-container *ngIf=\"walletService.wallet.balance.balanceXTZ !== null\">{{ walletService.wallet.balance.balanceXTZ / 1000000 | number:'1.0-6' }} ꜩ</ng-container>\r\n            </div>\r\n            <div class=\"col-sm-auto col-header col-border border border-warning min-size-other-cell\">\r\n                <ng-container *ngIf=\"walletService.wallet.balance.balanceFiat !== null\">$ {{ walletService.wallet.balance.balanceFiat | number:'1.0-0' }} USD</ng-container>\r\n            </div>\r\n        </div>\r\n    </span>\r\n\r\n    <!-- Shared Action buttons -->\r\n    <div class=\"row row-buttons padding-top-row\" *ngIf=\"!this.walletService.isObserverWallet()\">\r\n        <div class=\"btn-group btn-group-sm\">\r\n            <app-send [activePkh]=\"selectedPkh\" [actionButtonString]=\"'btnOutline'\"></app-send>\r\n            <app-receive [activePkh]=\"selectedPkh\" [actionButtonString]=\"'btnOutline'\"></app-receive>\r\n            <!--<button type=\"button\" class=\"btn btn-outline-primary btn-op\">Receive</button>-->\r\n            <app-new-account [activePkh]=\"selectedPkh\"></app-new-account>\r\n            <button type=\"button\" class=\"btn btn-outline-primary btn-op\">Details</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Default message - No account created -->\r\n<div class=\"container\" *ngIf=\"!this.walletService.wallet\">\r\n    <!-- Title -->\r\n    <div class=\"row bottom-separator-no-account\">\r\n        <div class=\"col-lg-12\">\r\n            <h1 class=\"page-header-no-account\">Overview</h1>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <p>You can get all your wallet details and create new accounts in here but before, you will need to\r\n                <a routerLink=\"\">create or import</a> a wallet.</p>\r\n            <!--\r\n            <p>Before making a backup, you will need to <a routerLink=\"\">create or import</a> a wallet.</p>\r\n            You need to <a routerLink=\"\">create or import</a> a wallet to see this view...\r\n            -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mono {\n  font-family: \"Courier New\", Courier, monospace; }\n\n.btn-op {\n  width: 120px;\n  border-radius: 0rem;\n  border-top-right-radius: 0.4rem;\n  border-bottom-right-radius: 0.4rem; }\n\n.padding-top-row {\n  padding-top: 0.8rem !important; }\n\n.page-header {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\n.page-header-no-account {\n  margin: 40px 0px 10px 0px; }\n\n.bottom-separator-no-account {\n  padding-bottom: 27px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 0.5rem; }\n\n.row-header {\n  font-weight: bold; }\n\n.col-header {\n  background-color: #fde19b; }\n\n.row-buttons {\n  padding-top: 5px; }\n\n.col-border {\n  padding-top: 0.4em;\n  padding-bottom: 0.4em; }\n\n.min-size-address-cell {\n  min-width: 388px; }\n\n.min-size-other-cell {\n  min-width: 188px; }\n\n.selectedPkh {\n  background-color: #b3ffb3 !important; }\n\n.pkh-row:hover {\n  background-color: #e6ffe6;\n  cursor: pointer !important; }\n\n/* Taking out underline link in router link (New Account btn) */\n\na.active-link {\n  text-decoration: none;\n  color: #fff !important;\n  background-color: #09698D !important;\n  border-color: #09698D !important; }\n\na:hover {\n  color: #fff !important;\n  background-color: #09698D !important;\n  border-color: #09698D !important;\n  text-decoration: none !important; }\n\n/* Responsive breakpoints */\n\n@media (min-width: 576px) {\n  .container {\n    padding-left: 2em;\n    min-width: 0vw; } }\n\n@media (min-width: 992px) {\n  min-width: 0vw; }\n\n@media (min-width: 1200px) {\n  .container {\n    padding-left: 2em;\n    min-width: 0vw; } }\n\n/* Commented code \r\na:hover {\r\n    cursor:pointer;\r\n   }\r\nth, td {\r\n    padding: 5px 15px;\r\n}\r\n.mono {\r\n    font-family: \"Courier New\", Courier, monospace;\r\n}\r\n#content {\r\n    display: flex; \r\n    min-height: 100vh;\r\n    min-width: 85vw;\r\n}\r\n.center-content {\r\n    margin: 10vh auto 0px auto;\r\n}\r\n.card-title {\r\n    padding-bottom: 0.75rem;\r\n    border-bottom: 2px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-text{\r\n    padding-top: 2rem;\r\n}\r\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard__ = __webpack_require__("../../../../copy-to-clipboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(
        // @Inject( DOCUMENT ) dom: Document,
        router, walletService, messageService, balanceService, coordinatorService) {
        this.router = router;
        this.walletService = walletService;
        this.messageService = messageService;
        this.balanceService = balanceService;
        this.coordinatorService = coordinatorService;
        this.identity = null;
        this.accounts = null;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet) {
            this.identity = this.walletService.wallet.accounts[0];
            this.coordinatorService.startAll();
        }
    };
    OverviewComponent.prototype.addAccount = function () {
        // this.walletService.createAccount();
    };
    // Not working
    OverviewComponent.prototype.openSend = function (pkh) {
        console.log(pkh);
        this.router.navigate(['/send', { activePkh: pkh }]);
    };
    OverviewComponent.prototype.openReceive = function (pkh) {
        console.log(pkh);
    };
    OverviewComponent.prototype.click = function (pkh) {
        // console.log('clicked on pkh: ' + pkh);
        if (this.selectedPkh === pkh) {
            this.selectedPkh = null;
        }
        else {
            this.selectedPkh = pkh;
        }
    };
    OverviewComponent.prototype.dblclick = function (pkh) {
        // console.log('double clicked on: ' + pkh);
        // this.dom.execCommand('copy');
        __WEBPACK_IMPORTED_MODULE_6_copy_to_clipboard__(pkh);
        this.messageService.add(pkh + ' copied to clipboard!');
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("../../../../../src/app/components/overview/overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/overview/overview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_balance_service__["a" /* BalanceService */],
            __WEBPACK_IMPORTED_MODULE_5__services_coordinator_service__["a" /* CoordinatorService */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/receive/receive.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n\r\n    <!-- Receive Modal -->\r\n    <ng-template #modal1>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Receive tezzies</h4>\r\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close1()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <input [(ngModel)]=\"activePkh\" type=\"text\" id=\"toAddress\" class=\"form-control\" disabled>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf='activePkh'>\r\n            <canvas id='canvas'></canvas>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <!-- Showing different Receive Format according to actionButtonString -->\r\n    <button *ngIf='accounts && showReceiveFormat.btnOutline' type=\"button\" (click)=\"open1(modal1)\" class=\"btn btn-sm btn-outline-primary btn-op\">Receive</button>\r\n    <span *ngIf='accounts && showReceiveFormat.dropdownItem' class=\"dropdown-item\" (click)=\"open1(modal1)\">{{ activePkh }}</span>\r\n    <!-- <button *ngIf='accounts' type=\"button\" class=\"btn btn-primary\" id=\"send\" (click)=\"open1(modal1)\">Receive</button> -->\r\n\r\n</ng-container>\r\n\r\n<div *ngIf='!accounts'>\r\n  Wallet not configured\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/receive/receive.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#canvas {\n  margin: auto; }\n\n.modal-header {\n  text-align: center; }\n\n.btn-op {\n  width: 120px;\n  border-radius: 0rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/receive/receive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qrcode__ = __webpack_require__("../../../../qrcode/lib/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceiveComponent = /** @class */ (function () {
    function ReceiveComponent(walletService, messageService, modalService) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.modalService = modalService;
        this.showReceiveFormat = {
            btnOutline: false,
            dropdownItem: false,
        };
        this.accounts = null;
    }
    ReceiveComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet) {
            this.init();
        }
    };
    ReceiveComponent.prototype.init = function () {
        if (this.actionButtonString) {
            this.setReceiveFormat();
        }
        this.accounts = this.walletService.wallet.accounts;
        // this.activePkh = this.accounts[0].pkh;
    };
    ReceiveComponent.prototype.setReceiveFormat = function () {
        switch (this.actionButtonString) {
            case 'btnOutline': {
                this.showReceiveFormat.btnOutline = true;
                this.showReceiveFormat.dropdownItem = false;
                break;
            }
            case 'dropdownItem': {
                this.showReceiveFormat.btnOutline = false;
                this.showReceiveFormat.dropdownItem = true;
                break;
            }
            default: {
                console.log('actionButtonString wrongly set ', this.actionButtonString);
                break;
            }
        }
    };
    ReceiveComponent.prototype.getQR = function () {
        __WEBPACK_IMPORTED_MODULE_3_qrcode__["toCanvas"](document.getElementById('canvas'), this.activePkh, { errorCorrectionLevel: 'H' }, function (err, canvas) {
            if (err) {
                throw err;
            }
        });
    };
    ReceiveComponent.prototype.open1 = function (template1) {
        var _this = this;
        if (this.activePkh) {
            this.modalRef1 = this.modalService.show(template1, { class: 'modal-sm' });
            setTimeout(function () {
                _this.getQR();
            }, 100);
        }
    };
    ReceiveComponent.prototype.close1 = function () {
        this.modalRef1.hide();
        this.modalRef1 = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('modal1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], ReceiveComponent.prototype, "modal1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ReceiveComponent.prototype, "activePkh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ReceiveComponent.prototype, "actionButtonString", void 0);
    ReceiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-receive',
            template: __webpack_require__("../../../../../src/app/components/receive/receive.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/receive/receive.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ReceiveComponent);
    return ReceiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/send/send.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"accounts\">\r\n    <!-- SEND MODALS -->\r\n    <!-- First Modal -->\r\n    <ng-template #modal1>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Send tezzies</h4>\r\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close1()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-8\">\r\n                        <label for=\"fromAdress\">From Address</label>\r\n                        <select [(ngModel)]=\"activePkh\" id=\"fromAdress\" class=\"form-control mono\" name=\"first\">\r\n                            <option *ngFor=\"let account of accounts\" [ngValue]=\"account.pkh\">{{ account.pkh }}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 text-right\">\r\n                        <label for=\"staticBalance\" class=\"text-right\">Current Balance</label>\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext text-color\" id=\"staticBalance\" [value]=\"showAccountBalance(activePkh)\">\r\n                        <small id=\"rateXTZ\" class=\"form-text text-muted text-color\" *ngIf=\"XTZrate > 0\">Rate (ꜩ) ${{ XTZrate | number:'1.00' }} USD</small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"toAdress\">To Address</label>\r\n                        <input type=\"text\" class=\"form-control mono\" id=\"toAddress\" placeholder=\"\" [(ngModel)]=\"toPkh\" name=\"second\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-8\">\r\n                        <label for=\"sendAmount\">Amount to Send (ꜩ)</label>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" id=\"sendAmount\" placeholder=\"Amount\" [(ngModel)]=\"amount\" name=\"three\">\r\n                        </div>\r\n                        <small id=\"smallSend\" class=\"form-text text-muted\">\r\n                            <button type=\"button\" class=\"btn btn-outline-light btn-sm btn-balance\" (click)=\"sendEntireBalance(activePkh, $event)\">Send Entire Balance</button>\r\n\r\n                            <span class=\"align-middle\" *ngIf=\"amount * XTZrate > 0\">(${{amount * XTZrate | number:'1.0'}} USD)</span>\r\n                        </small>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"transactionFee\">Fee (ꜩ)</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"transactionFee\" placeholder=\"Fee\" [(ngModel)]=\"fee\" name=\"four\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            {{ formInvalid }}\r\n\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"sub\" (click)=\"open2(modal2)\">Send</button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <!-- Confirmation Modal -->\r\n    <ng-template #modal2>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Authenticate transaction</h4>\r\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close2()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <p>From: {{ activePkh }}\r\n                <BR> To: {{ toPkh }}\r\n                <BR> Amount: {{ amount | number:'1.0' }}ꜩ\r\n                <BR> Fee: {{ fee | number:'1.0' }}ꜩ\r\n            </p>\r\n            <div class=\"row\">\r\n                <div *ngIf='walletService.isFullWallet()' class=\"form-group col-md-6\">\r\n                    <label for=\"pwd\">Password:</label>\r\n                    <input [(ngModel)]=\"password\" type=\"password\" id=\"pwd\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\" id=\"sub\" (click)=\"open3(modal3)\">Confirm</button>\r\n            {{ pwdValid }}\r\n        </div>\r\n    </ng-template>\r\n\r\n    <!-- Final Modal -->\r\n    <ng-template #modal3>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title pull-left\">Confirmation</h4>\r\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close3()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div *ngIf='!sendResponse'>\r\n                Please wait...\r\n            </div>\r\n            <ng-container *ngIf='sendResponse'>\r\n                <div *ngIf='sendResponse.success === true'>\r\n                    <i class=\"fa fa-check-circle\"></i>\r\n                    <br>\r\n                    <br>\r\n                    <ng-container *ngIf='sendResponse.payload.opHash'>\r\n                        <p>Your transaction has been successfully broadcasted to the network</p>\r\n                        <p>{{ sendResponse.payload.opHash }}</p>\r\n                    </ng-container>\r\n                    <ng-container *ngIf='sendResponse.payload.unsignedOperation'>\r\n                        <p>Your unsigned transaction have successfully been created</p>\r\n                    </ng-container>\r\n                </div>\r\n                <div *ngIf='sendResponse.success === false'>\r\n                    <p>Failure!</p>\r\n                    <p>{{ sendResponse.payload.msg }}</p>\r\n                </div>\r\n                <button *ngIf='sendResponse.payload.unsignedOperation' type=\"button\" class=\"btn btn-primary\" (click)=\"download()\">Download</button>\r\n            </ng-container>\r\n            <button type=\"button\" class=\"btn btn-primary\" id=\"sub\" (click)=\"close3()\">Close</button>\r\n        </div>\r\n    </ng-template>\r\n\r\n\r\n    <!-- Showing different Send Format according to actionButtonString -->\r\n    <button *ngIf='accounts && showSendFormat.btnOutline' type=\"button\" (click)=\"open1(modal1)\" class=\"btn btn-sm btn-outline-primary btn-op\">Send</button>\r\n    <span *ngIf='accounts && showSendFormat.dropdownItem' class=\"dropdown-item\" (click)=\"open1(modal1)\">{{ activePkh }}</span>\r\n    <span *ngIf='accounts && showSendFormat.btnSidebar' class=\"btnSidebar\" (click)=\"open1(modal1)\">Send</span>\r\n    <!--<button *ngIf='accounts' type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"modal1.show()\">Send</button>-->\r\n    <!--<button  type=\"button\" class=\"btn btn-primary\" id=\"send\" (click)=\"open1(modal1)\">Send</button>-->\r\n\r\n</ng-container>\r\n\r\n<p class=\"no-accounts\" *ngIf='!accounts'>\r\n    Send\r\n    <!-- Wallet not configured, just Send string shown on sidebar -->\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/send/send.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n.dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n  }\r\n  \r\n.dark-modal .close {\r\n  color: white;   \r\n}\r\n*/\n.modal-container {\n  width: 1000px;\n  margin: auto; }\n.mono {\n  font-family: \"Courier New\", Courier, monospace; }\n.btn-op {\n  width: 120px;\n  border-radius: 0rem;\n  border-top-left-radius: 0.4rem;\n  border-bottom-left-radius: 0.4rem; }\n.modal-header {\n  text-align: center; }\n.modal-body-success {\n  text-align: center; }\n.text-color {\n  color: #6c757d;\n  text-align: right; }\n.text-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.btn-balance {\n  color: #6c757d;\n  padding-right: 0rem;\n  padding-left: 0rem; }\n.dropdown-item {\n  cursor: pointer; }\n.no-accounts {\n  margin-bottom: 0em; }\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #ced4da; }\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #ced4da; }\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #ced4da; }\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #ced4da; }\n.dropdown-item:hover {\n  color: #fff !important;\n  background-color: #09698D !important;\n  border-color: #09698D !important;\n  text-decoration: none !important; }\n.fa-check-circle {\n  color: #28a745;\n  font-size: 96px; }\n.bb2 {\n  width: 120px; }\n.fa-paste {\n  padding-top: 40px;\n  cursor: pointer;\n  color: black;\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/send/send.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_export_service__ = __webpack_require__("../../../../../src/app/services/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SendComponent = /** @class */ (function () {
    function SendComponent(modalService, walletService, messageService, operationService, coordinatorService, exportService) {
        this.modalService = modalService;
        this.walletService = walletService;
        this.messageService = messageService;
        this.operationService = operationService;
        this.coordinatorService = coordinatorService;
        this.exportService = exportService;
        this.showSendFormat = {
            btnOutline: false,
            dropdownItem: false,
            btnSidebar: false
        };
        this.accounts = null;
        this.activeAccount = null;
        this.formInvalid = '';
        this.XTZrate = 0;
    }
    SendComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet) {
            this.init();
        }
    };
    SendComponent.prototype.init = function () {
        if (this.actionButtonString) {
            this.setSendFormat();
        }
        this.accounts = this.walletService.wallet.accounts;
        this.XTZrate = this.walletService.wallet.XTZrate;
    };
    SendComponent.prototype.setSendFormat = function () {
        switch (this.actionButtonString) {
            case 'btnOutline': {
                this.showSendFormat.btnOutline = true;
                this.showSendFormat.dropdownItem = false;
                this.showSendFormat.btnSidebar = false;
                break;
            }
            case 'dropdownItem': {
                this.showSendFormat.btnOutline = false;
                this.showSendFormat.dropdownItem = true;
                this.showSendFormat.btnSidebar = false;
                break;
            }
            case 'btnSidebar': {
                this.showSendFormat.btnOutline = false;
                this.showSendFormat.dropdownItem = false;
                this.showSendFormat.btnSidebar = true;
                this.activePkh = this.walletService.wallet.accounts[0].pkh;
                break;
            }
            default: {
                console.log('actionButtonString wrongly set ', this.actionButtonString);
                break;
            }
        }
    };
    SendComponent.prototype.showAccountBalance = function (accountPkh) {
        var accountBalance;
        var accountBalanceString;
        var index;
        // finding the index
        index = this.accounts.findIndex(function (account) { return account.pkh === accountPkh; });
        if (index !== -1) {
            accountBalance = this.accounts[index].balance.balanceXTZ / 1000000;
            accountBalanceString = this.numberWithCommas(accountBalance) + ' ꜩ';
            return accountBalanceString;
        }
        else {
            return null;
        }
    };
    SendComponent.prototype.numberWithCommas = function (x) {
        var parts = [];
        parts = x.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };
    SendComponent.prototype.sendEntireBalance = function (accountPkh, event) {
        event.stopPropagation();
        var accountBalance;
        var index;
        // finding the index
        index = this.accounts.findIndex(function (account) { return account.pkh === accountPkh; });
        accountBalance = this.accounts[index].balance.balanceXTZ / 1000000;
        this.amount = accountBalance.toString();
    };
    SendComponent.prototype.open1 = function (template1) {
        if (this.walletService.wallet) {
            this.clearForm();
            this.modalRef1 = this.modalService.show(template1, { class: 'first' });
        }
    };
    SendComponent.prototype.open2 = function (template) {
        this.formInvalid = this.invalidInput();
        if (!this.formInvalid) {
            if (!this.amount) {
                this.amount = '0';
            }
            if (!this.fee) {
                this.fee = '0';
            }
            this.close1();
            this.modalRef2 = this.modalService.show(template, { class: 'second' });
        }
    };
    SendComponent.prototype.open3 = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var pwd, keys;
            return __generator(this, function (_a) {
                pwd = this.password;
                this.password = '';
                keys = this.walletService.getKeys(pwd);
                if (keys) {
                    this.pwdValid = '';
                    this.close2();
                    this.modalRef3 = this.modalService.show(template, { class: 'third' });
                    this.sendTransaction(keys);
                }
                else {
                    this.pwdValid = 'Wrong password!';
                }
                return [2 /*return*/];
            });
        });
    };
    SendComponent.prototype.close1 = function () {
        this.modalRef1.hide();
        this.modalRef1 = null;
    };
    SendComponent.prototype.close2 = function () {
        this.modalRef2.hide();
        this.modalRef2 = null;
    };
    SendComponent.prototype.close3 = function () {
        this.modalRef3.hide();
        this.modalRef3 = null;
    };
    SendComponent.prototype.sendTransaction = function (keys) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toPkh, amount, fee;
            return __generator(this, function (_a) {
                toPkh = this.toPkh;
                amount = this.amount;
                fee = this.fee;
                this.toPkh = '';
                this.amount = '';
                this.fee = '';
                if (!amount) {
                    amount = '0';
                }
                if (!fee) {
                    fee = '0';
                }
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        this.operationService.transfer(this.activePkh, toPkh, Number(amount), Number(fee), keys).subscribe(function (ans) {
                            _this.sendResponse = ans;
                            if (ans.success === true) {
                                if (ans.payload.opHash) {
                                    _this.coordinatorService.boost(_this.activePkh);
                                    _this.coordinatorService.boost(toPkh);
                                }
                            }
                            else {
                                console.log(ans.payload.msg);
                            }
                        }, function (err) {
                            console.log(JSON.stringify(err));
                        });
                        return [2 /*return*/];
                    });
                }); }, 100);
                return [2 /*return*/];
            });
        });
    };
    SendComponent.prototype.clearForm = function () {
        this.toPkh = '';
        this.amount = '';
        this.fee = '';
        this.password = '';
        this.pwdValid = '';
        this.formInvalid = '';
        this.sendResponse = null;
    };
    SendComponent.prototype.invalidInput = function () {
        if (!this.activePkh || this.activePkh.length !== 36) {
            return 'invalid sender address';
        }
        else if (!this.toPkh || this.toPkh.length !== 36) {
            return 'invalid receiver address';
        }
        else if (!Number(this.amount) && this.amount && this.amount !== '0') {
            return 'invalid amount';
        }
        else if (!Number(this.fee) && this.fee && this.fee !== '0') {
            return 'invalid fee';
        }
        else {
            return '';
        }
    };
    SendComponent.prototype.download = function () {
        this.exportService.downloadOperationData(this.sendResponse.payload.unsignedOperation, false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('modal1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], SendComponent.prototype, "modal1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SendComponent.prototype, "activePkh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SendComponent.prototype, "actionButtonString", void 0);
    SendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-send',
            template: __webpack_require__("../../../../../src/app/components/send/send.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            styles: [__webpack_require__("../../../../../src/app/components/send/send.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_coordinator_service__["a" /* CoordinatorService */],
            __WEBPACK_IMPORTED_MODULE_5__services_export_service__["a" /* ExportService */]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div class=\"center-content\">\r\n        <div class=\"row\">\r\n            <a routerLink=\"/import/\" class=\"active-link\"><button type=\"button\" class=\"btn btn-primary btn-lg btn-block btn-generate\">Import wallet</button></a>\r\n        </div>\r\n        <div class=\"row justify-content-between\">\r\n            <a routerLink=\"/new-wallet/\"><button type=\"button\" class=\"btn btn-clear btn-second\">New wallet</button></a>\r\n            <a routerLink=\"/activate/\"><button type=\"button\" class=\"btn btn-clear btn-second\">Activate</button></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/start/start.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  padding-bottom: 0.7vh;\n  min-width: 250px; }\n\n.btn-second {\n  min-width: 121px;\n  color: #333333; }\n\n.btn-second:hover {\n  background-color: #cccccc; }\n\n/* Taking out underline link in router link */\n\na.active-link {\n  text-decoration: none;\n  min-width: 250px; }\n\n.ico-wallet-link {\n  text-align: center; }\n\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n\n#content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  min-width: 75vw; }\n\n.center-content {\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartComponent = /** @class */ (function () {
    function StartComponent(walletService, router) {
        this.walletService = walletService;
        this.router = router;
    }
    StartComponent.prototype.ngOnInit = function () {
        if (this.walletService.wallet) {
            this.router.navigate(['/overview']);
        }
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start',
            template: __webpack_require__("../../../../../src/app/components/start/start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/start/start.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interfaces.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletType; });
var WalletType;
(function (WalletType) {
    WalletType[WalletType["FullWallet"] = 0] = "FullWallet";
    WalletType[WalletType["ViewOnlyWallet"] = 1] = "ViewOnlyWallet";
    WalletType[WalletType["ObserverWallet"] = 2] = "ObserverWallet";
})(WalletType || (WalletType = {}));


/***/ }),

/***/ "../../../../../src/app/services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ActivityService = /** @class */ (function () {
    function ActivityService(walletService, http, messageService) {
        this.walletService = walletService;
        this.http = http;
        this.messageService = messageService;
        this.apiUrl = 'https://api.tzscan.io/';
        this.maxTransactions = 3;
    }
    ActivityService.prototype.updateAllTransactions = function () {
        var _this = this;
        var _loop_1 = function (i) {
            // console.log('start update(' + i + '): ' + this.walletService.wallet.accounts[i].pkh);
            // States to return: Modified structure, Up to date {save, upToDate}
            this_1.updateTransactions(this_1.walletService.wallet.accounts[i].pkh)
                .subscribe(function (ans) { return console.log(JSON.stringify(ans)); }, function (err) { return console.log('some error'); }, function () { return console.log('done update(' + i + '): ' + _this.walletService.wallet.accounts[i].pkh); });
        };
        var this_1 = this;
        // console.log('updating transactions');
        for (var i = 0; i < this.walletService.wallet.accounts.length; i++) {
            _loop_1(i);
        }
    };
    // Show transactions for current pkh, then function call to see if current data is up to date
    ActivityService.prototype.updateTransactions = function (pkh) {
        var _this = this;
        return this.getTransactonsCounter(pkh)
            .flatMap(function (ans) {
            if (ans[0] && ans[0].save) {
                _this.walletService.storeWallet();
            }
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(ans);
        });
    };
    ActivityService.prototype.getTransactonsCounter = function (pkh) {
        var _this = this;
        return this.http.get(this.apiUrl + 'v1/number_operations/' + pkh)
            .flatMap(function (number_operations) {
            var index = _this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
            if (index === -1 || _this.walletService.wallet.accounts[index].numberOfActivites !== number_operations[0]) {
                // console.log('Requesting transactions');
                return _this.getTransactions(pkh, number_operations[0]);
            }
            else {
                if (_this.walletService.wallet.accounts[index].activities.findIndex(function (a) { return a.block === 'prevalidation'; }) !== -1) {
                    // console.log('Trying to validate blocks');
                    return _this.getUnconfirmedTransactions(pkh);
                }
                else {
                    // console.log('Transactions up to date');
                    return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])({
                        upToDate: true
                    });
                }
            }
        });
    };
    // Try to validate unconfirmed transaction
    ActivityService.prototype.getUnconfirmedTransactions = function (pkh) {
        var _this = this;
        // console.log('getUnconfirmedTransactions()');
        var index = this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
        var n = 0;
        for (var i = 0; i < this.walletService.wallet.accounts[index].activities.length; i++) {
            if (this.walletService.wallet.accounts[index].activities[i].block === 'prevalidation') {
                n = i + 1;
            }
            else {
                break;
            }
        }
        return this.http.get(this.apiUrl + 'v1/operations/' + pkh + '?number=' + n + '&p=0')
            .flatMap(function (data) {
            var aIndex = _this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
            var payload = [];
            for (var i = 0; i < data.length; i++) {
                if (_this.walletService.wallet.accounts[aIndex].activities[i].hash === data[i].hash) {
                    _this.walletService.wallet.accounts[aIndex].activities[i].block = data[i].block_hash;
                    var bIndex = _this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
                    _this.walletService.wallet.accounts[bIndex].activities[i].block = data[i].block_hash;
                    if (data[i].block_hash !== 'prevalidation') {
                        payload.push({
                            block: data[i].block_hash,
                            hash: data[i].hash
                        });
                    }
                }
            }
            return _this.getTimestamps(pkh, payload);
        });
    };
    // Get latest transaction
    ActivityService.prototype.getTransactions = function (pkh, counter) {
        var _this = this;
        // console.log('getTransactions()');
        return this.http.get(this.apiUrl + 'v1/operations/' + pkh + '?number=' + this.maxTransactions + '&p=0')
            .flatMap(function (data) {
            var newTransactions = [];
            for (var i = 0; i < data.length; i++) {
                var type = void 0;
                if (pkh === data[i].type.source) {
                    if (pkh === data[i].type.destination) {
                        type = 'Transaction*';
                    }
                    else {
                        type = 'Transaction'; // Send
                        data[i].type.amount = data[i].type.amount * -1;
                    }
                }
                else if (pkh === data[i].type.destination) {
                    type = 'Transaction'; // Receive
                }
                else if (data[i].type.secret) {
                    type = 'Activation';
                }
                else if (data[i].type.credit) {
                    type = 'Origination';
                }
                else if (data[i].type.delegate) {
                    type = 'Delegation';
                }
                else {
                    type = 'Unknown';
                    console.log('Unknown Type: ' + JSON.stringify(data[i]));
                }
                if (type === 'Origination') {
                    newTransactions.push({
                        hash: data[i].hash,
                        block: data[i].block_hash,
                        source: data[i].type.source,
                        destination: data[i].type.tz1,
                        amount: data[i].type.credit * -1,
                        fee: data[i].type.fee,
                        timestamp: null,
                        type: type
                    });
                }
                else {
                    newTransactions.push({
                        hash: data[i].hash,
                        block: data[i].block_hash,
                        source: data[i].type.source,
                        destination: data[i].type.destination,
                        amount: data[i].type.amount,
                        fee: data[i].type.fee,
                        timestamp: null,
                        type: type
                    });
                }
            }
            var index = _this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
            if (index === -1) {
                _this.walletService.wallet.accounts.push({
                    pkh: pkh,
                    delegate: '',
                    balance: _this.walletService.emptyBalance(),
                    numberOfActivites: counter,
                    activities: newTransactions
                });
                // console.log('Creating new transactions entry');
            }
            else {
                _this.walletService.wallet.accounts[index].numberOfActivites = counter;
                _this.walletService.wallet.accounts[index].activities = newTransactions;
                // console.log('Update transactions entry');
            }
            // console.log('from size ' + newTransactions.length);
            var payload = [];
            for (var i = 0; i < newTransactions.length; i++) {
                if (newTransactions[i].block !== 'prevalidation') {
                    payload.push({
                        block: newTransactions[i].block,
                        hash: newTransactions[i].hash
                    });
                }
            }
            return _this.getTimestamps(pkh, payload);
        });
    };
    ActivityService.prototype.getTimestamps = function (pkh, payloads) {
        var _this = this;
        if (payloads.length === 0) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])('EmptyPayload');
        }
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */].apply(this, payloads)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* flatMap */])(function (payload) {
            return _this.getTimestamp(pkh, payload.block, payload.hash).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["c" /* timeout */])(5000), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(function (error) {
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])('Timeout');
            }));
        })));
    };
    ActivityService.prototype.getTimestamp = function (pkh, block, hash) {
        var _this = this;
        return this.http.get(this.apiUrl + 'v1/timestamp/' + block)
            .flatMap(function (time) {
            // console.log('Got time');
            var pkhIndex = _this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
            var transactionIndex = _this.walletService.wallet.accounts[pkhIndex].activities.findIndex(function (a) { return a.hash === hash; });
            if (time) {
                time = new Date(time);
            }
            _this.walletService.wallet.accounts[pkhIndex].activities[transactionIndex].timestamp = time;
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])({
                save: true
            });
        });
    };
    ActivityService.prototype.getIndex = function (pkh) {
        return this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "../../../../../src/app/services/balance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tzrate_service__ = __webpack_require__("../../../../../src/app/services/tzrate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var BalanceService = /** @class */ (function () {
    function BalanceService(walletService, messageService, tzrateService, operationService, http) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.tzrateService = tzrateService;
        this.operationService = operationService;
        this.http = http;
    }
    BalanceService.prototype.getBalanceAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getXTZBalanceAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BalanceService.prototype.getXTZBalanceAll = function () {
        for (var i = 0; i < this.walletService.wallet.accounts.length; i++) {
            this.getAccountBalance(i);
        }
    };
    BalanceService.prototype.getAccountBalance = function (index) {
        var _this = this;
        var pkh = this.walletService.wallet.accounts[index].pkh;
        this.operationService.getBalance(pkh)
            .subscribe(function (ans) {
            if (ans.success) {
                _this.updateAccountBalance(index, ans.payload.balance);
            }
            else {
                console.log('BlanceError: ' + JSON.stringify(ans));
            }
        });
    };
    BalanceService.prototype.updateAccountBalance = function (index, newBalance) {
        if (newBalance !== this.walletService.wallet.accounts[index].balance.balanceXTZ) {
            if (this.walletService.wallet.accounts[index].balance.balanceXTZ) {
                this.messageService.add('Balance updated for: ' + this.walletService.wallet.accounts[index].pkh);
            }
            this.walletService.wallet.accounts[index].balance.balanceXTZ = newBalance;
            this.updateTotalBalance();
            this.tzrateService.updateFiatBalances();
            this.walletService.storeWallet();
        }
    };
    BalanceService.prototype.updateTotalBalance = function () {
        var balance = 0;
        var change = false;
        for (var i = 0; i < this.walletService.wallet.accounts.length; i++) {
            if (this.walletService.wallet.accounts[i].balance.balanceXTZ) {
                balance = balance + Number(this.walletService.wallet.accounts[i].balance.balanceXTZ);
                change = true;
            }
        }
        if (change) {
            this.walletService.wallet.balance.balanceXTZ = balance;
        }
    };
    BalanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__tzrate_service__["a" /* TzrateService */],
            __WEBPACK_IMPORTED_MODULE_4__operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], BalanceService);
    return BalanceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/coordinator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoordinatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tzrate_service__ = __webpack_require__("../../../../../src/app/services/tzrate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delegate_service__ = __webpack_require__("../../../../../src/app/services/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var State;
(function (State) {
    State[State["UpToDate"] = 0] = "UpToDate";
    State[State["Wait"] = 1] = "Wait";
    State[State["Updating"] = 2] = "Updating";
})(State || (State = {}));
var CoordinatorService = /** @class */ (function () {
    function CoordinatorService(activityService, tzrateService, walletService, balanceService, delegateService, operationService) {
        this.activityService = activityService;
        this.tzrateService = tzrateService;
        this.walletService = walletService;
        this.balanceService = balanceService;
        this.delegateService = delegateService;
        this.operationService = operationService;
        this.scheduler = new Map(); // pkh + delay
        this.defaultDelayActivity = 60000; // 60s
        this.shortDelayActivity = 2000; // 5s
        this.defaultDelayPrice = 300000; // 300s
        this.broadcastDone = false;
    }
    CoordinatorService.prototype.startAll = function () {
        for (var i = 0; i < this.walletService.wallet.accounts.length; i++) {
            this.start(this.walletService.wallet.accounts[i].pkh);
        }
        this.startXTZ();
    };
    CoordinatorService.prototype.startXTZ = function () {
        var _this = this;
        if (!this.tzrateInterval) {
            console.log('Start scheduler XTZ');
            this.tzrateService.getTzrate();
            this.tzrateInterval = setInterval(function () { return _this.tzrateService.getTzrate(); }, this.defaultDelayPrice);
        }
    };
    CoordinatorService.prototype.start = function (pkh) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var scheduleData;
            return __generator(this, function (_a) {
                if (pkh && !this.scheduler.get(pkh)) {
                    console.log('Start scheduler ' + this.walletService.getIndexFromPkh(pkh));
                    scheduleData = {
                        state: State.UpToDate,
                        interval: setInterval(function () { return _this.update(pkh); }, this.defaultDelayActivity),
                        stateCounter: 0
                    };
                    this.scheduler.set(pkh, scheduleData);
                    this.update(pkh);
                    this.updateAccountData(pkh);
                }
                return [2 /*return*/];
            });
        });
    };
    CoordinatorService.prototype.boost = function (pkh, changedDelegate) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var counter_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.walletService.getIndexFromPkh(pkh) !== -1)) return [3 /*break*/, 3];
                        if (!!this.scheduler.get(pkh)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.start(pkh)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.changeState(pkh, State.Wait);
                        this.update(pkh);
                        counter_1 = this.scheduler.get(pkh).stateCounter;
                        setTimeout(function () {
                            if (_this.scheduler && _this.scheduler.get(pkh).stateCounter === counter_1) {
                                console.log('Timeout from wait state');
                                _this.changeState(pkh, State.UpToDate);
                            }
                        }, 150000);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CoordinatorService.prototype.update = function (pkh) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('account[' + this.walletService.getIndexFromPkh(pkh) + '][' + this.scheduler.get(pkh).state + ']: >>');
                this.setDelay(pkh, this.defaultDelayActivity);
                this.activityService.updateTransactions(pkh).subscribe(function (ans) {
                    switch (_this.scheduler.get(pkh).state) {
                        case State.UpToDate: {
                            if (!ans.upToDate) {
                                _this.changeState(pkh, State.Updating);
                            }
                            break;
                        }
                        case State.Wait: {
                            if (!ans.upToDate) {
                                _this.changeState(pkh, State.Updating);
                            }
                            else {
                                _this.setDelay(pkh, _this.shortDelayActivity);
                            }
                            break;
                        }
                        case State.Updating: {
                            if (ans.upToDate) {
                                _this.changeState(pkh, State.UpToDate);
                            }
                            else {
                                _this.setDelay(pkh, _this.shortDelayActivity);
                            }
                            break;
                        }
                        default: {
                            console.log('No state found!');
                            break;
                        }
                    }
                }, function (err) { return console.log('Error in update()'); }, function () { return console.log('account[' + _this.walletService.getIndexFromPkh(pkh) + '][' + _this.scheduler.get(pkh).state + ']: <<'); });
                return [2 /*return*/];
            });
        });
    };
    CoordinatorService.prototype.changeState = function (pkh, newState) {
        var _this = this;
        var scheduleData = this.scheduler.get(pkh);
        scheduleData.state = newState;
        if (!this.walletService.isFullWallet() && newState === State.UpToDate && this.broadcastDone) {
            // Broadcasted operation included in block. Check for new accounts.
            var i = this.walletService.getIndexFromPkh(pkh);
            for (var n = 0; n < this.walletService.wallet.accounts[i].activities.length; n++) {
                var op = this.walletService.wallet.accounts[i].activities[n];
                if (op.type === 'Origination') {
                    if (this.walletService.getIndexFromPkh(op.destination) === -1) {
                        console.log('New account found, adding to wallet!');
                        this.walletService.addAccount(op.destination);
                        this.balanceService.getAccountBalance(this.walletService.getIndexFromPkh(op.destination));
                        this.start(op.destination);
                    }
                }
            }
            this.broadcastDone = false;
        }
        if (newState === State.UpToDate) {
            this.balanceService.getBalanceAll();
            this.delegateService.getDelegate(pkh);
        }
        if (newState === State.Wait || newState === State.Updating) {
            clearInterval(scheduleData.interval);
            scheduleData.interval = setInterval(function () { return _this.update(pkh); }, this.shortDelayActivity);
        }
        scheduleData.stateCounter++;
        this.scheduler.set(pkh, scheduleData);
    };
    CoordinatorService.prototype.setDelay = function (pkh, time) {
        var _this = this;
        var scheduleData = this.scheduler.get(pkh);
        if (scheduleData.interval) {
            clearInterval(scheduleData.interval);
        }
        scheduleData.interval = setInterval(function () { return _this.update(pkh); }, time);
        this.scheduler.set(pkh, scheduleData);
    };
    CoordinatorService.prototype.setBroadcast = function () {
        this.broadcastDone = true;
    };
    CoordinatorService.prototype.stopAll = function () {
        if (this.walletService.wallet) {
            console.log('Stop all schedulers');
            for (var i = 0; i < this.walletService.wallet.accounts.length; i++) {
                this.stop(this.walletService.wallet.accounts[i].pkh);
            }
            clearInterval(this.tzrateInterval);
            this.tzrateInterval = null;
        }
    };
    CoordinatorService.prototype.stop = function (pkh) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Stop scheduler ' + this.walletService.getIndexFromPkh(pkh));
                clearInterval(this.scheduler.get(pkh).interval);
                this.scheduler.get(pkh).interval = null;
                this.scheduler.delete(pkh);
                return [2 /*return*/];
            });
        });
    };
    CoordinatorService.prototype.updateAccountData = function (pkh) {
        var _this = this;
        this.operationService.getAccount(pkh).subscribe(function (ans) {
            if (ans.success) {
                var index = _this.walletService.getIndexFromPkh(pkh);
                _this.balanceService.updateAccountBalance(index, ans.payload.balance);
                _this.delegateService.handleDelegateResponse(pkh, ans.payload.delegate);
            }
        });
    };
    CoordinatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__tzrate_service__["a" /* TzrateService */],
            __WEBPACK_IMPORTED_MODULE_4__wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_3__balance_service__["a" /* BalanceService */],
            __WEBPACK_IMPORTED_MODULE_5__delegate_service__["a" /* DelegateService */],
            __WEBPACK_IMPORTED_MODULE_6__operation_service__["a" /* OperationService */]])
    ], CoordinatorService);
    return CoordinatorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/delegate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DelegateService = /** @class */ (function () {
    function DelegateService(walletService, operationService) {
        this.walletService = walletService;
        this.operationService = operationService;
    }
    DelegateService.prototype.getDelegates = function () {
        for (var i = 0; i < this.walletService.wallet.accounts.length; i++) {
            this.getDelegate(this.walletService.wallet.accounts[i].pkh);
        }
    };
    DelegateService.prototype.getDelegate = function (pkh) {
        var _this = this;
        if (pkh.slice(0, 3) === 'TZ1') {
            this.operationService.getDelegate(pkh).subscribe(function (data) {
                if (data.success) {
                    _this.handleDelegateResponse(pkh, data.payload.delegate);
                }
            }, function (err) { return console.log(JSON.stringify(err)); });
        }
    };
    DelegateService.prototype.handleDelegateResponse = function (pkh, data) {
        // console.log(JSON.stringify(data));
        if (data) {
            var index = this.walletService.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
            if (index === -1) {
                this.walletService.wallet.accounts.push({
                    pkh: pkh,
                    delegate: data,
                    balance: this.walletService.emptyBalance(),
                    numberOfActivites: 0,
                    activities: []
                });
                // console.log('Creating new transactions entry');
                this.walletService.storeWallet();
            }
            else if (this.walletService.wallet.accounts[index].delegate !== data) {
                this.walletService.wallet.accounts[index].numberOfActivites = 0;
                this.walletService.wallet.accounts[index].delegate = data;
                // console.log('Update transactions entry');
                this.walletService.storeWallet();
            }
        }
    };
    DelegateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_2__operation_service__["a" /* OperationService */]])
    ], DelegateService);
    return DelegateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/encryption.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pbkdf2__ = __webpack_require__("../../../../pbkdf2/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pbkdf2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pbkdf2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aes_js__ = __webpack_require__("../../../../aes-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aes_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EncryptionService = /** @class */ (function () {
    function EncryptionService() {
        this.hashRounds = 10000; // 10 000 rounds
    }
    EncryptionService.prototype.encrypt = function (plaintext, password, salt) {
        var key = __WEBPACK_IMPORTED_MODULE_1_pbkdf2__["pbkdf2Sync"](password, salt, this.hashRounds, 32, 'sha512');
        var aesCtr = new __WEBPACK_IMPORTED_MODULE_2_aes_js__["ModeOfOperation"].ctr(key);
        var chiphertext = aesCtr.encrypt(plaintext);
        chiphertext = __WEBPACK_IMPORTED_MODULE_2_aes_js__["utils"].hex.fromBytes(chiphertext);
        return chiphertext;
    };
    EncryptionService.prototype.decrypt = function (chiphertext, password, salt) {
        try {
            var key = __WEBPACK_IMPORTED_MODULE_1_pbkdf2__["pbkdf2Sync"](password, salt, this.hashRounds, 32, 'sha512');
            chiphertext = __WEBPACK_IMPORTED_MODULE_2_aes_js__["utils"].hex.toBytes(chiphertext);
            var aesCtr = new __WEBPACK_IMPORTED_MODULE_2_aes_js__["ModeOfOperation"].ctr(key);
            var plaintext = aesCtr.decrypt(chiphertext);
            return plaintext;
        }
        catch (err) {
            return '';
        }
    };
    EncryptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EncryptionService);
    return EncryptionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/export.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver_FileSaver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver_FileSaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces__ = __webpack_require__("../../../../../src/app/interfaces.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportService = /** @class */ (function () {
    function ExportService(walletService) {
        this.walletService = walletService;
    }
    ExportService.prototype.downloadWallet = function (data) {
        if (data === void 0) { data = this.walletService.exportKeyStore(); }
        var blob = new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' });
        var filename = 'wallet.tez';
        if (data.walletType === 1) {
            filename = 'view-only_wallet.tez';
        }
        else if (data.walletType === 2) {
            filename = 'observer_wallet.tez';
        }
        Object(__WEBPACK_IMPORTED_MODULE_1_file_saver_FileSaver__["saveAs"])(blob, filename);
    };
    ExportService.prototype.downloadViewOnlyWallet = function (pk) {
        var keyStore = this.walletService.exportKeyStore();
        keyStore.pk = pk;
        keyStore.encryptedSeed = undefined;
        keyStore.walletType = __WEBPACK_IMPORTED_MODULE_3__interfaces__["a" /* WalletType */].ViewOnlyWallet;
        this.downloadWallet(keyStore);
    };
    ExportService.prototype.downloadOperationData = function (hex, signed) {
        var data = {
            hex: hex,
            signed: signed
        };
        var filename;
        if (signed) {
            filename = 'signed.tzop';
        }
        else {
            filename = 'unsigned.tzop';
        }
        var blob = new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_1_file_saver_FileSaver__["saveAs"])(blob, filename);
    };
    ExportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */]])
    ], ExportService);
    return ExportService;
}());



/***/ }),

/***/ "../../../../../src/app/services/import.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces__ = __webpack_require__("../../../../../src/app/interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coordinator_service__ = __webpack_require__("../../../../../src/app/services/coordinator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ImportService = /** @class */ (function () {
    function ImportService(walletService, messageService, balanceService, coordinatorService, operationService, http) {
        this.walletService = walletService;
        this.messageService = messageService;
        this.balanceService = balanceService;
        this.coordinatorService = coordinatorService;
        this.operationService = operationService;
        this.http = http;
        this.apiUrl = 'https://zeronet-api.tzscan.io/';
    }
    ImportService.prototype.importWalletData = function (json, isJson) {
        if (isJson === void 0) { isJson = true; }
        return __awaiter(this, void 0, void 0, function () {
            var walletData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        walletData = void 0;
                        if (isJson) {
                            walletData = JSON.parse(json);
                        }
                        else {
                            walletData = json;
                        }
                        if (walletData.provider !== 'Kukai') {
                            throw new Error("Unsupported wallet format");
                        }
                        this.walletService.wallet = this.walletService.emptyWallet(walletData.walletType);
                        this.walletService.addAccount(walletData.pkh);
                        if (walletData.encryptedSeed) {
                            this.walletService.wallet.seed = walletData.encryptedSeed;
                        }
                        else if (walletData.pk) {
                            this.walletService.wallet.seed = walletData.pk;
                        }
                        return [4 /*yield*/, this.findAllAccounts(walletData.pkh)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        err_1 = _a.sent();
                        this.messageService.addError('ImportWalletDataError: ' + err_1);
                        this.walletService.clearWallet();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ImportService.prototype.importWalletFromPk = function (pk) {
        try {
            var pkh = this.operationService.pk2pkh(pk);
            this.importWalletFromPkh(pkh, __WEBPACK_IMPORTED_MODULE_3__interfaces__["a" /* WalletType */].ViewOnlyWallet);
            this.walletService.wallet.seed = pk;
        }
        catch (err) {
            this.walletService.clearWallet();
            throw (err);
        }
    };
    ImportService.prototype.importWalletFromPkh = function (pkh, type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_3__interfaces__["a" /* WalletType */].ObserverWallet; }
        try {
            this.walletService.wallet = this.walletService.emptyWallet(type);
            this.walletService.addAccount(pkh);
        }
        catch (err) {
            this.messageService.addError('Failed to load wallet!');
            this.walletService.clearWallet();
            throw (err);
        }
        this.findAllAccounts(pkh);
    };
    ImportService.prototype.findAllAccounts = function (pkh) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.findNumberOfAccounts(pkh);
                return [2 /*return*/];
            });
        });
    };
    ImportService.prototype.findNumberOfAccounts = function (pkh) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (pkh) {
                    console.log('Find accounts...');
                    console.log('pkh: ' + pkh);
                    this.http.get(this.apiUrl + 'v1/number_operations/' + pkh + '?type=Origination').subscribe(function (data) {
                        if (data[0]) {
                            _this.findAccounts(pkh, data[0]);
                        }
                    }, function (err) { return console.log('ImportError: ' + JSON.stringify(err)); });
                }
                return [2 /*return*/];
            });
        });
    };
    ImportService.prototype.findAccounts = function (pkh, n) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Accounts found: ' + n);
                this.coordinatorService.start(pkh);
                this.coordinatorService.startXTZ();
                this.http.get(this.apiUrl + 'v1/operations/' + pkh + '?type=Origination&number=' + n + '&p=0').subscribe(function (data) {
                    for (var i = 0; i < n; i++) {
                        _this.walletService.addAccount(data[i].type.tz1);
                        console.log('Added: ' + data[i].type.tz1);
                        _this.coordinatorService.start(data[i].type.tz1);
                        _this.findNumberOfAccounts(data[i].type.tz1); // Recursive call
                    }
                    _this.walletService.storeWallet();
                }, function (err) { return _this.messageService.addError('ImportError(3)' + JSON.stringify(err)); });
                return [2 /*return*/];
            });
        });
    };
    ImportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__balance_service__["a" /* BalanceService */],
            __WEBPACK_IMPORTED_MODULE_6__coordinator_service__["a" /* CoordinatorService */],
            __WEBPACK_IMPORTED_MODULE_7__operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ImportService);
    return ImportService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        var type = 'info';
        console.log(type + ': ' + message);
        this.messages.push({
            type: type,
            msg: message,
            timeout: 10000
        });
    };
    MessageService.prototype.addError = function (message) {
        var type = 'danger';
        console.log(type + ': ' + message);
        this.messages.push({
            type: type,
            msg: message,
            timeout: 10000
        });
    };
    MessageService.prototype.addWarning = function (message) {
        var type = 'warning';
        console.log(type + ': ' + message);
        this.messages.push({
            type: type,
            msg: message,
            timeout: 10000
        });
    };
    MessageService.prototype.addSuccess = function (message) {
        var type = 'success';
        console.log(type + ': ' + message);
        this.messages.push({
            type: type,
            msg: message,
            timeout: 10000
        });
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/operation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buffer__ = __webpack_require__("../../../../node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__ = __webpack_require__("../../../../libsodium-wrappers/dist/modules/libsodium-wrappers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bs58check__ = __webpack_require__("../../../../bs58check/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bs58check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bs58check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bip39__ = __webpack_require__("../../../../bip39/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bip39__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OperationService = /** @class */ (function () {
    function OperationService(http) {
        this.http = http;
        this.nodeURL = 'http://node.tzscan.io';
        this.prefix = {
            tz1: new Uint8Array([6, 161, 159]),
            edpk: new Uint8Array([13, 15, 37, 217]),
            edsk: new Uint8Array([43, 246, 78, 7]),
            edsig: new Uint8Array([9, 245, 205, 134, 18]),
            o: new Uint8Array([5, 116]),
        };
        this.toMicro = 1000000;
    }
    /*
      Returns an observable for the activation of an ICO identity
    */
    OperationService.prototype.activate = function (pkh, secret) {
        var _this = this;
        console.log(pkh + ' : ' + secret);
        return this.http.post(this.nodeURL + '/blocks/head', {})
            .flatMap(function (head) {
            var fop = {
                branch: head.hash,
                operations: [{
                        kind: 'activation',
                        pkh: pkh,
                        secret: secret
                    }
                ]
            };
            return _this.http.post(_this.nodeURL + '/blocks/head/proto/helpers/forge/operations', fop)
                .flatMap(function (opbytes) {
                var sop = {
                    signedOperationContents: opbytes.operation,
                    chain_id: head.chain_id
                };
                return _this.http.post(_this.nodeURL + '/inject_operation', sop)
                    .flatMap(function (final) {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                        success: true,
                        payload: {
                            opHash: final.injectedOperation
                        }
                    });
                });
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    /*
      Returns an observable for the origination of new accounts.
    */
    OperationService.prototype.originate = function (pkh, amount, fee, keys) {
        var _this = this;
        if (fee === void 0) { fee = 0; }
        return this.http.post(this.nodeURL + '/blocks/head', {})
            .flatMap(function (head) {
            return _this.http.post(_this.nodeURL + '/blocks/head/proto/context/contracts/' + pkh + '/counter', {})
                .flatMap(function (actions) {
                var fop = {
                    branch: head.hash,
                    kind: 'manager',
                    source: pkh,
                    fee: (fee * _this.toMicro).toString(),
                    counter: ++actions.counter,
                    operations: [
                        {
                            kind: 'reveal',
                            public_key: keys.pk
                        },
                        {
                            kind: 'origination',
                            managerPubkey: keys.pkh,
                            balance: (amount * _this.toMicro).toString(),
                            spendable: true,
                            delegatable: true
                        }
                    ]
                };
                return _this.http.post(_this.nodeURL + '/blocks/head/proto/helpers/forge/operations', fop)
                    .flatMap(function (opbytes) {
                    if (!keys.sk) {
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                            success: true,
                            payload: {
                                unsignedOperation: opbytes.operation
                            }
                        });
                    }
                    else {
                        return _this.http.post(_this.nodeURL + '/blocks/head/predecessor', {})
                            .flatMap(function (headp) {
                            var signed = _this.sign(opbytes.operation, keys.sk);
                            var sopbytes = signed.sbytes;
                            var opHash = _this.b58cencode(__WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_generichash"](32, _this.hex2buf(sopbytes)), _this.prefix.o);
                            var aop = {
                                pred_block: headp.predecessor,
                                operation_hash: opHash,
                                forged_operation: opbytes.operation,
                                signature: signed.edsig
                            };
                            return _this.http.post(_this.nodeURL + '/blocks/head/proto/helpers/apply_operation', aop)
                                .flatMap(function (applied) {
                                var sop = {
                                    signedOperationContents: sopbytes,
                                    chain_id: head.chain_id
                                };
                                return _this.http.post(_this.nodeURL + '/inject_operation', sop)
                                    .flatMap(function (final) {
                                    return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                                        success: true,
                                        payload: {
                                            opHash: final.injectedOperation,
                                            newPkh: applied.contracts[0],
                                            unsignedOperation: null
                                        }
                                    });
                                });
                            });
                        });
                    }
                });
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    /*
      Returns an observable for the transaction of tezzies.
    */
    OperationService.prototype.transfer = function (from, to, amount, fee, keys) {
        var _this = this;
        if (fee === void 0) { fee = 0; }
        return this.http.post(this.nodeURL + '/blocks/head', {})
            .flatMap(function (head) {
            return _this.http.post(_this.nodeURL + '/blocks/head/proto/context/contracts/' + from + '/counter', {})
                .flatMap(function (actions) {
                var fop = {
                    branch: head.hash,
                    kind: 'manager',
                    source: from,
                    fee: (fee * _this.toMicro).toString(),
                    counter: ++actions.counter,
                    operations: [
                        {
                            kind: 'reveal',
                            public_key: keys.pk
                        },
                        {
                            kind: 'transaction',
                            amount: (amount * _this.toMicro).toString(),
                            destination: to,
                            parameters: {
                                prim: 'Unit',
                                args: []
                            }
                        }
                    ]
                };
                return _this.http.post(_this.nodeURL + '/blocks/head/proto/helpers/forge/operations', fop)
                    .flatMap(function (opbytes) {
                    if (!keys.sk) {
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                            success: true,
                            payload: {
                                unsignedOperation: opbytes.operation
                            }
                        });
                    }
                    else {
                        return _this.http.post(_this.nodeURL + '/blocks/head/predecessor', {})
                            .flatMap(function (headp) {
                            var signed = _this.sign(opbytes.operation, keys.sk);
                            var sopbytes = signed.sbytes;
                            var opHash = _this.b58cencode(__WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_generichash"](32, _this.hex2buf(sopbytes)), _this.prefix.o);
                            var aop = {
                                pred_block: headp.predecessor,
                                operation_hash: opHash,
                                forged_operation: opbytes.operation,
                                signature: signed.edsig
                            };
                            return _this.http.post(_this.nodeURL + '/blocks/head/proto/helpers/apply_operation', aop)
                                .flatMap(function (applied) {
                                var sop = {
                                    signedOperationContents: sopbytes,
                                    chain_id: head.chain_id
                                };
                                return _this.http.post(_this.nodeURL + '/inject_operation', sop)
                                    .flatMap(function (final) {
                                    return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                                        success: true,
                                        payload: {
                                            opHash: final.injectedOperation,
                                            unsignedOperation: null
                                        }
                                    });
                                });
                            });
                        });
                    }
                });
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    /*
      Returns an observable for the delegation of baking rights.
    */
    OperationService.prototype.delegate = function (from, to, fee, keys) {
        var _this = this;
        if (fee === void 0) { fee = 0; }
        return this.http.post(this.nodeURL + '/blocks/head', {})
            .flatMap(function (head) {
            return _this.http.post(_this.nodeURL + '/blocks/head/proto/context/contracts/' + from + '/counter', {})
                .flatMap(function (actions) {
                var fop = {
                    branch: head.hash,
                    kind: 'manager',
                    source: from,
                    fee: (fee * _this.toMicro).toString(),
                    counter: ++actions.counter,
                    operations: [
                        {
                            kind: 'reveal',
                            public_key: keys.pk
                        },
                        {
                            kind: 'delegation',
                            delegate: to
                        }
                    ]
                };
                return _this.http.post(_this.nodeURL + '/blocks/head/proto/helpers/forge/operations', fop)
                    .flatMap(function (opbytes) {
                    if (!keys.sk) {
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                            unsignedOperation: opbytes.operation
                        });
                    }
                    else {
                        return _this.http.post(_this.nodeURL + '/blocks/head/predecessor', {})
                            .flatMap(function (headp) {
                            var signed = _this.sign(opbytes.operation, keys.sk);
                            var sopbytes = signed.sbytes;
                            var opHash = _this.b58cencode(__WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_generichash"](32, _this.hex2buf(sopbytes)), _this.prefix.o);
                            var aop = {
                                pred_block: headp.predecessor,
                                operation_hash: opHash,
                                forged_operation: opbytes.operation,
                                signature: signed.edsig
                            };
                            return _this.http.post(_this.nodeURL + '/blocks/head/proto/helpers/apply_operation', aop)
                                .flatMap(function (applied) {
                                var sop = {
                                    signedOperationContents: sopbytes,
                                    chain_id: head.chain_id
                                };
                                return _this.http.post(_this.nodeURL + '/inject_operation', sop)
                                    .flatMap(function (final) {
                                    return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                                        opHash: final.injectedOperation,
                                        unsignedOperation: null
                                    });
                                });
                            });
                        });
                    }
                });
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    OperationService.prototype.errHandler = function (error) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
            success: false,
            payload: {
                msg: error
            }
        });
    };
    OperationService.prototype.broadcast = function (sopbytes) {
        var _this = this;
        return this.http.post(this.nodeURL + '/blocks/head', {})
            .flatMap(function (head) {
            var sop = {
                signedOperationContents: sopbytes,
                chain_id: head.chain_id
            };
            return _this.http.post(_this.nodeURL + '/inject_operation', sop)
                .flatMap(function (final) {
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                    success: true,
                    payload: {
                        opHash: final.injectedOperation
                    }
                });
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    OperationService.prototype.getBalance = function (pkh) {
        var _this = this;
        return this.http.post(this.nodeURL + '/blocks/head/proto/context/contracts/' + pkh + '/balance', {})
            .flatMap(function (balance) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                success: true,
                payload: {
                    balance: balance.balance
                }
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    OperationService.prototype.getDelegate = function (pkh) {
        var _this = this;
        return this.http.post(this.nodeURL + '/blocks/head/proto/context/contracts/' + pkh + '/delegate', {})
            .flatMap(function (delegate) {
            var value = '';
            if (delegate.value) {
                value = delegate.value;
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                success: true,
                payload: {
                    delegate: value
                }
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    OperationService.prototype.getCounter = function (pkh) {
        var _this = this;
        return this.http.post(this.nodeURL + '/blocks/head/proto/context/contracts/' + pkh + '/counter', {})
            .flatMap(function (counter) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                success: true,
                payload: {
                    counter: counter.counter
                }
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    OperationService.prototype.getAccount = function (pkh) {
        var _this = this;
        return this.http.post(this.nodeURL + '/blocks/head/proto/context/contracts/' + pkh, {})
            .flatMap(function (contract) {
            var delegate = '';
            if (contract.delegate.value) {
                delegate = contract.delegate.value;
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])({
                success: true,
                payload: {
                    balance: contract.balance,
                    manager: contract.manager,
                    delegate: delegate,
                    counter: contract.counter
                }
            });
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return _this.errHandler(err); }));
    };
    OperationService.prototype.seed2keyPair = function (seed) {
        var keyPair = __WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_sign_seed_keypair"](seed);
        return {
            sk: this.b58cencode(keyPair.privateKey, this.prefix.edsk),
            pk: this.b58cencode(keyPair.publicKey, this.prefix.edpk),
            pkh: this.b58cencode(__WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_generichash"](20, keyPair.publicKey), this.prefix.tz1)
        };
    };
    OperationService.prototype.mnemonic2seed = function (mnemonic, passphrase) {
        if (passphrase === void 0) { passphrase = ''; }
        return __WEBPACK_IMPORTED_MODULE_7_bip39__["mnemonicToSeed"](mnemonic, passphrase).slice(0, 32);
    };
    OperationService.prototype.validMnemonic = function (mnemonic) {
        return __WEBPACK_IMPORTED_MODULE_7_bip39__["validateMnemonic"](mnemonic);
    };
    OperationService.prototype.generateMnemonic = function () {
        return __WEBPACK_IMPORTED_MODULE_7_bip39__["generateMnemonic"](160);
    };
    OperationService.prototype.pk2pkh = function (pk) {
        var pkDecoded = this.b58cdecode(pk, this.prefix.edpk);
        return this.b58cencode(__WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_generichash"](20, pkDecoded), this.prefix.tz1);
    };
    OperationService.prototype.hex2buf = function (hex) {
        return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
            return parseInt(h, 16);
        }));
    };
    OperationService.prototype.buf2hex = function (buffer) {
        var byteArray = new Uint8Array(buffer), hexParts = [];
        for (var i = 0; i < byteArray.length; i++) {
            var hex = byteArray[i].toString(16);
            var paddedHex = ('00' + hex).slice(-2);
            hexParts.push(paddedHex);
        }
        return hexParts.join('');
    };
    OperationService.prototype.b58cencode = function (payload, prefixx) {
        var n = new Uint8Array(prefixx.length + payload.length);
        n.set(prefixx);
        n.set(payload, prefixx.length);
        return __WEBPACK_IMPORTED_MODULE_6_bs58check__["encode"](new __WEBPACK_IMPORTED_MODULE_4_buffer__["Buffer"](this.buf2hex(n), 'hex'));
    };
    OperationService.prototype.b58cdecode = function (enc, prefixx) {
        var n = __WEBPACK_IMPORTED_MODULE_6_bs58check__["decode"](enc);
        n = n.slice(prefixx.length);
        return n;
    };
    OperationService.prototype.sign = function (bytes, sk) {
        var hash = __WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_generichash"](32, this.hex2buf(bytes));
        var sig = __WEBPACK_IMPORTED_MODULE_5_libsodium_wrappers__["crypto_sign_detached"](hash, this.b58cdecode(sk, this.prefix.edsk), 'uint8array');
        var edsig = this.b58cencode(sig, this.prefix.edsig);
        var sbytes = bytes + this.buf2hex(sig);
        return {
            bytes: bytes,
            sig: sig,
            edsig: edsig,
            sbytes: sbytes,
        };
    };
    OperationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OperationService);
    return OperationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tzrate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TzrateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TzrateService = /** @class */ (function () {
    function TzrateService(http, walletService) {
        this.http = http;
        this.walletService = walletService;
        this.apiUrl = 'https://api.coinmarketcap.com/v1/ticker/tezos/'; // returns a json object, key: price_usd
    }
    TzrateService.prototype.getTzrate = function () {
        var _this = this;
        this.http.get(this.apiUrl).subscribe(function (data) {
            _this.walletService.wallet.XTZrate = data[0]['price_usd'];
            _this.updateFiatBalances();
            console.log('XTZ = $' + data[0]['price_usd']);
        }, function (err) { return console.log('Failed to get xtz price from CMC: ' + JSON.stringify(err)); });
    };
    TzrateService.prototype.updateFiatBalances = function () {
        var tot = 0;
        var change = false;
        for (var i = 0; i < this.walletService.wallet.accounts.length; i++) {
            if (this.walletService.wallet.accounts[i].balance.balanceXTZ !== null) {
                this.walletService.wallet.accounts[i].balance.balanceFiat =
                    Number(this.walletService.wallet.accounts[i].balance.balanceXTZ / 1000000 * this.walletService.wallet.XTZrate);
                tot += this.walletService.wallet.accounts[i].balance.balanceFiat;
                change = true;
            }
        }
        if (change) {
            this.walletService.wallet.balance.balanceFiat = Number(tot);
            this.walletService.storeWallet();
        }
    };
    TzrateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */]])
    ], TzrateService);
    return TzrateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/wallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces__ = __webpack_require__("../../../../../src/app/interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encryption_service__ = __webpack_require__("../../../../../src/app/services/encryption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operation_service__ = __webpack_require__("../../../../../src/app/services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39__ = __webpack_require__("../../../../bip39/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bip39__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import * as lib from '../../assets/js/main.js';

var WalletService = /** @class */ (function () {
    function WalletService(messageService, encryptionService, operationService) {
        this.messageService = messageService;
        this.encryptionService = encryptionService;
        this.operationService = operationService;
        this.storeKey = "kukai-wallet";
    }
    /*
      Wallet creation
    */
    WalletService.prototype.createNewWallet = function (extraEntropy) {
        if (extraEntropy.length < 40) {
            console.log('Skipping extra entropy');
            return __WEBPACK_IMPORTED_MODULE_5_bip39__["generateMnemonic"](160);
        }
        var entropy = __WEBPACK_IMPORTED_MODULE_5_bip39__["mnemonicToEntropy"](__WEBPACK_IMPORTED_MODULE_5_bip39__["generateMnemonic"](160));
        var mixed = '';
        for (var i = 0; i < 40; i++) {
            mixed = mixed + (Number('0x' + entropy[i]) ^ Number('0x' + extraEntropy[i])).toString(16);
        }
        if (mixed.length !== 40) {
            console.log('Not 160 bits entropy');
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_5_bip39__["entropyToMnemonic"](mixed);
    };
    WalletService.prototype.createEncryptedWallet = function (mnemonic, password, passphrase) {
        if (passphrase === void 0) { passphrase = ''; }
        var seed = this.operationService.mnemonic2seed(mnemonic, passphrase);
        var keyPair = this.operationService.seed2keyPair(seed);
        seed = this.encryptionService.encrypt(seed, password, this.getSalt(keyPair.pkh));
        return this.exportKeyStoreInit(__WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* WalletType */].FullWallet, keyPair.pkh, seed);
    };
    WalletService.prototype.getSalt = function (pkh) {
        if (pkh === void 0) { pkh = this.wallet.accounts[0].pkh; }
        return pkh.slice(3, 19);
    };
    /*
      Handle accounts
    */
    WalletService.prototype.addAccount = function (pkh) {
        this.wallet.accounts.push({
            pkh: pkh,
            delegate: '',
            balance: this.emptyBalance(),
            numberOfActivites: 0,
            activities: []
        });
        this.storeWallet();
    };
    /*
      Help functions
    */
    WalletService.prototype.getIndexFromPkh = function (pkh) {
        return this.wallet.accounts.findIndex(function (a) { return a.pkh === pkh; });
    };
    WalletService.prototype.getKeys = function (pwd) {
        if (this.isFullWallet()) {
            var keys = this.operationService.seed2keyPair(this.encryptionService.decrypt(this.wallet.seed, pwd, this.getSalt()));
            if (keys.pkh === this.wallet.accounts[0].pkh) {
                return keys;
            }
            else {
                return null;
            }
        }
        else if (this.isViewOnlyWallet()) {
            return {
                pkh: this.wallet.accounts[0].pkh,
                pk: this.wallet.seed,
                sk: null
            };
        }
    };
    /*
      Clear wallet data from browser
    */
    WalletService.prototype.clearWallet = function () {
        this.wallet = null;
        localStorage.removeItem(this.storeKey);
    };
    WalletService.prototype.emptyWallet = function (type) {
        return {
            seed: null,
            type: type,
            balance: this.emptyBalance(),
            XTZrate: null,
            accounts: []
        };
    };
    WalletService.prototype.emptyBalance = function () {
        return {
            balanceXTZ: null,
            pendingXTZ: null,
            balanceFiat: null,
            pendingFiat: null
        };
    };
    /*
    Used to decide wallet type
    */
    WalletService.prototype.isFullWallet = function () {
        return (this.wallet && this.wallet.type === __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* WalletType */].FullWallet);
    };
    WalletService.prototype.isViewOnlyWallet = function () {
        return (this.wallet && this.wallet.type === __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* WalletType */].ViewOnlyWallet);
    };
    WalletService.prototype.isObserverWallet = function () {
        return (this.wallet && this.wallet.type === __WEBPACK_IMPORTED_MODULE_2__interfaces__["a" /* WalletType */].ObserverWallet);
    };
    /*
      Export
    */
    WalletService.prototype.exportKeyStore = function () {
        var data = {
            provider: 'Kukai',
            version: 1.0,
            walletType: this.wallet.type,
            pkh: this.wallet.accounts[0].pkh
        };
        if (this.isFullWallet()) {
            data.encryptedSeed = this.wallet.seed;
        }
        else if (this.isViewOnlyWallet()) {
            data.pk = this.wallet.seed;
        }
        return data;
    };
    WalletService.prototype.exportKeyStoreInit = function (type, pkh, seed) {
        var data = {
            provider: 'Kukai',
            version: 1.0,
            walletType: type,
            pkh: pkh,
            encryptedSeed: seed
        };
        return data;
    };
    /*
      Read and write to localStorage
    */
    WalletService.prototype.storeWallet = function () {
        localStorage.setItem(this.storeKey, JSON.stringify(this.wallet));
    };
    WalletService.prototype.loadStoredWallet = function () {
        var walletData = localStorage.getItem(this.storeKey);
        if (walletData) {
            this.wallet = JSON.parse(walletData);
        }
    };
    WalletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__encryption_service__["a" /* EncryptionService */],
            __WEBPACK_IMPORTED_MODULE_4__operation_service__["a" /* OperationService */]])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map