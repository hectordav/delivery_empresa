webpackJsonp([4],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoVerPageModule", function() { return ProductoVerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_ver__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoVerPageModule = (function () {
    function ProductoVerPageModule() {
    }
    ProductoVerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_ver__["a" /* ProductoVerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__producto_ver__["a" /* ProductoVerPage */]),
            ],
        })
    ], ProductoVerPageModule);
    return ProductoVerPageModule;
}());

//# sourceMappingURL=producto-ver.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pr_productos_pr_productos__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prrutas_prrutas__ = __webpack_require__(34);
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
 * Generated class for the ProductoVerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductoVerPage = (function () {
    function ProductoVerPage(navCtrl, navParams, pr_productos, pr_ruta) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_productos = pr_productos;
        this.pr_ruta = pr_ruta;
        this.result_producto = {
            id_producto: '',
            imagen: '',
            nombre_producto: '',
            descripcion_producto: '',
            categoria: '',
            precio: '',
            id_status: ''
        };
        this.ruta_imagen = this.pr_ruta.get_ruta_imagen();
    }
    ProductoVerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoVerPage');
        this.ver_producto();
    };
    ProductoVerPage.prototype.ver_producto = function () {
        var result = this.pr_productos.get_producto();
        this.result_producto.id_producto = result.id_producto;
        this.result_producto.imagen = result.imagen;
        this.result_producto.nombre_producto = result.nombre_producto;
        this.result_producto.descripcion_producto = result.descripcion_producto;
        this.result_producto.categoria = result.categoria;
        this.result_producto.precio = result.precio;
        this.result_producto.id_status = result.id_status;
        debugger;
    };
    ProductoVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-ver',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\producto-ver\producto-ver.html"*/'\n<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n  	<button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ver producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="fondo">\n    <ion-card>\n      <ion-card-header>\n      <div align="center">\n        <strong>Producto: # {{result_producto.id_producto}}</strong>\n      </div> \n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n      <ion-list>\n        <div text-wrap>\n          <ion-row>\n              <img src="{{ruta_imagen}}{{result_producto.imagen}}" />\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-basket" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5>{{result_producto.nombre_producto}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-checkmark-circle" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Descripcion:</strong> {{result_producto.descripcion_producto}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-copy" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Categoria:</strong> {{result_producto.categoria}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-cash" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Precio:</strong> {{result_producto.precio | number : \'1.2-2\'}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n      </ion-card-content>\n      <hr>\n      <ion-row>\n        <ion-col>\n          <div *ngIf="result_producto.id_status==1">\n            <div align="center">\n               <button ion-button small color="primary" icon-start (click)="ver_producto(result_producto.id_producto)">\n                <ion-icon name=\'ios-close-circle\'></ion-icon>\n                Dar de Baja\n              </button>\n            </div>\n          </div>\n          <div *ngIf="result_producto.id_status==2">\n            <div align="center">\n               <button ion-button small color="primary" icon-start (click)="ver_producto(result_producto.id_producto)">\n                <ion-icon name=\'md-checkmark\'></ion-icon>\n                Dar de Alta\n              </button>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div align="center">\n         <button ion-button small color="primary" icon-start (click)="ver_producto(result_producto.id_producto)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Ver extras\n        </button>\n      </div>\n        </ion-col>\n      </ion-row>\n      <br>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\producto-ver\producto-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pr_productos_pr_productos__["a" /* PrProductosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], ProductoVerPage);
    return ProductoVerPage;
}());

//# sourceMappingURL=producto-ver.js.map

/***/ })

});
//# sourceMappingURL=4.js.map