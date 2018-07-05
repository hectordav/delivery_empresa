webpackJsonp([3],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function() { return ProductosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductosPageModule = (function () {
    function ProductosPageModule() {
    }
    ProductosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productos__["a" /* ProductosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productos__["a" /* ProductosPage */]),
            ],
        })
    ], ProductosPageModule);
    return ProductosPageModule;
}());

//# sourceMappingURL=productos.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pr_productos_pr_productos__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pr_alert_toast_pr_alert_toast__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductosPage = (function () {
    function ProductosPage(navCtrl, navParams, pr_login, pr_productos, alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_login = pr_login;
        this.pr_productos = pr_productos;
        this.alert_toast = alert_toast;
    }
    ProductosPage.prototype.ionViewDidEnter = function () {
        this.productos_registrados();
    };
    ProductosPage.prototype.productos_registrados = function () {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('delivery_empresa'));
        this.pr_login.set_inicio_sesion(data);
        console.log(data);
        var data_empresa = {
            id_establecimiento: ''
        };
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            data_empresa.id_establecimiento = value.id_empresa;
        }
        var mensaje = "Cargando";
        this.alert_toast.show_loading(mensaje);
        this.pr_productos.get_productos_id_empresa(data_empresa).subscribe(function (pr_productos) {
            _this.result_producto = pr_productos;
            console.log("REGISTRO EXISTE pr_productos");
            _this.alert_toast.dismis_loading();
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    ProductosPage.prototype.ver_producto = function (item) {
        this.pr_productos.set_producto(item);
        console.log(item);
        this.navCtrl.push('ProductoVerPage');
    };
    ProductosPage.prototype.nuevo_producto = function () {
        this.navCtrl.push('ProductoAgregarPage');
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productos',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\productos\productos.html"*/'<!--\n  Generated template for the ProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n  	<button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Productos registrados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="fondo">\n	<div *ngFor="let item of result_producto">\n    <ion-card>\n      <ion-card-header>\n      <div align="center">\n        <strong>Producto: # {{item.id_producto}}</strong>\n      </div> \n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n      <ion-list>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n             <ion-card-title>\n                <h5><ion-icon name="ios-basket" item-start></ion-icon></h5>\n             </ion-card-title>\n            </ion-col>\n            <ion-col>\n              <h5>{{item.nombre_producto}}</h5>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-checkmark-circle" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Descripcion:</strong> {{item.descripcion_producto}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-copy" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Categoria:</strong> {{item.categoria}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-cash" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Precio:</strong> {{item.precio | number : \'1.2-2\'}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n      </ion-card-content>\n      <hr>\n      <div align="center">\n         <button ion-button small color="primary" icon-start (click)="ver_producto(item)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Ver\n        </button>\n\n      </div>\n      <br>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="primary" (click)="nuevo_producto()">\n    Nuevo Producto\n  </button>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\productos\productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_pr_productos_pr_productos__["a" /* PrProductosProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map