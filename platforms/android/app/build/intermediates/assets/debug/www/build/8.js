webpackJsonp([8],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoHistorialPageModule", function() { return PedidoHistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_historial__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidoHistorialPageModule = (function () {
    function PedidoHistorialPageModule() {
    }
    PedidoHistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedido_historial__["a" /* PedidoHistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedido_historial__["a" /* PedidoHistorialPage */]),
            ],
        })
    ], PedidoHistorialPageModule);
    return PedidoHistorialPageModule;
}());

//# sourceMappingURL=pedido-historial.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoHistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pr_pedidos_pr_pedidos__ = __webpack_require__(122);
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
 * Generated class for the PedidoHistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidoHistorialPage = (function () {
    function PedidoHistorialPage(navCtrl, navParams, pr_login, pr_pedidos, alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_login = pr_login;
        this.pr_pedidos = pr_pedidos;
        this.alert_toast = alert_toast;
    }
    PedidoHistorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoHistorialPage');
        this.historial_pedidos();
    };
    PedidoHistorialPage.prototype.historial_pedidos = function () {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('delivery_empresa'));
        this.pr_login.set_inicio_sesion(data);
        console.log(data);
        var data_empresa = {
            id_empresa: ''
        };
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            data_empresa.id_empresa = value.id_empresa;
        }
        var mensaje = "Cargando";
        this.alert_toast.show_loading(mensaje);
        this.pr_pedidos.get_historial_pedidos_id_empresa(data_empresa).subscribe(function (pr_pedidos) {
            _this.alert_toast.dismis_loading();
            var pedidos = pr_pedidos;
            var mensaje = pedidos.mensaje;
            if (mensaje == 'pedidos NO existen') {
                var mensaje_2 = 'No existen pedidos pendientes';
                _this.alert_toast.mensaje_toast_pie(mensaje_2);
            }
            else {
                _this.result_pedidos = pedidos.data;
                console.log(_this.result_pedidos);
            }
            console.log("REGISTRO EXISTE pr_pedidos");
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoHistorialPage.prototype.ver_pedido = function (item) {
        var _this = this;
        var _id_pedido = item.id_pedido;
        this.pr_pedidos.set_variable_status_pedido(item.id_status_pedido);
        this.pr_pedidos.set_result_pedido(item);
        var mensaje = 'Cargando detalle de pedido';
        this.alert_toast.show_loading(mensaje);
        this.pr_pedidos.get_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedido) {
            var result_det_pedido = pr_pedido;
            _this.pr_pedidos.set_result_det_pedido(result_det_pedido);
            console.log("REGISTRO EXISTE");
            _this.pr_pedidos.get_extra_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedidos) {
                var result_extra_pedido = pr_pedidos;
                var mensaje = result_extra_pedido.mensaje;
                console.log("REGISTRO EXISTE pr_pedidos");
                if (mensaje == 'Existe extra pedido') {
                    var data = result_extra_pedido.data;
                    _this.pr_pedidos.set_variable_extra_pedido(1);
                    _this.pr_pedidos.set_result_extra_pedido(data);
                    _this.alert_toast.dismis_loading();
                }
                else {
                    _this.pr_pedidos.set_variable_extra_pedido(0);
                    _this.alert_toast.dismis_loading();
                }
                /*el token del repartidor*/
                _this.pr_pedidos.get_token_usuario_repartidor_id_pedido(_id_pedido).subscribe(function (pr_pedidos) {
                    var result_token = pr_pedidos;
                    var mensaje = result_token.mensaje;
                    console.log(_id_pedido);
                    if (mensaje == 'no existe repartidor asignado') {
                        var mensaje_1 = 'Este pedido no tiene un repartidor asignado';
                        _this.alert_toast.mensaje_toast_pie(mensaje_1);
                        _this.pr_pedidos.set_varibale_token_repartidor(0);
                        _this.navCtrl.push('PedidoVerHistorialPage');
                    }
                    else {
                        var data = result_token.data;
                        _this.pr_pedidos.set_token_repartidor_pedido_seleccionado(data);
                        _this.pr_pedidos.set_varibale_token_repartidor(1);
                        _this.navCtrl.push('PedidoVerHistorialPage');
                        console.log("REGISTRO EXISTE pr_pedidos");
                    }
                }, function (err) {
                    console.log("NO EXISTE REGISTRO");
                });
                /*************************/
            }, function (err) {
                console.log("NO EXISTE REGISTRO");
            });
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoHistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido-historial',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\pedido-historial\pedido-historial.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Historial de Pedidos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="fondo">\n	  <!-- el component lo escondo para que no muestre el mapa ojo-->\n	  <div *ngFor="let item of result_pedidos">\n    <ion-card>\n      <ion-card-header>\n      <div align="center">\n        <strong>Pedido: # {{item.id_pedido}}</strong>\n      </div> \n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n      <ion-list>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n             <ion-card-title>\n                <h5><ion-icon name="home" item-start></ion-icon></h5>\n             </ion-card-title>\n            </ion-col>\n            <ion-col>\n              <h5>{{item.nombre_usuario}}</h5>\n              <h5>\n              <strong>Direccion:</strong> {{item.direccion_entrega}}\n              </h5>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-calendar" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Fecha:</strong> {{item.fecha | date:\'dd/MM/yyyy\'}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="clock" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Hora de entrega:</strong> {{item.hora_entrega}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-stats" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>status:</strong> {{item.status}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n      </ion-card-content>\n      <hr>\n      <div align="center">\n         <button ion-button small color="primary" icon-start (click)="ver_pedido(item)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Ver\n        </button>\n\n      </div>\n      <br>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\pedido-historial\pedido-historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pr_pedidos_pr_pedidos__["a" /* PrPedidosProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */]])
    ], PedidoHistorialPage);
    return PedidoHistorialPage;
}());

//# sourceMappingURL=pedido-historial.js.map

/***/ })

});
//# sourceMappingURL=8.js.map