webpackJsonp([7],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoVerHistorialPageModule", function() { return PedidoVerHistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_ver_historial__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidoVerHistorialPageModule = (function () {
    function PedidoVerHistorialPageModule() {
    }
    PedidoVerHistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedido_ver_historial__["a" /* PedidoVerHistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedido_ver_historial__["a" /* PedidoVerHistorialPage */]),
            ],
        })
    ], PedidoVerHistorialPageModule);
    return PedidoVerHistorialPageModule;
}());

//# sourceMappingURL=pedido-ver-historial.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoVerHistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pr_pedidos_pr_pedidos__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pr_mensaje_pr_mensaje__ = __webpack_require__(231);
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
 * Generated class for the PedidoVerHistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidoVerHistorialPage = (function () {
    function PedidoVerHistorialPage(navCtrl, navParams, pr_pedido, pr_mensaje, alertCtrl, alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_pedido = pr_pedido;
        this.pr_mensaje = pr_mensaje;
        this.alertCtrl = alertCtrl;
        this.alert_toast = alert_toast;
        this.result_pedido = {
            id_pedido: '',
            id_establecimiento: '',
            detalles_direccion_entrega: '',
            detalles_direccion_establecimiento: '',
            direccion_entrega: '',
            direccion_establecimiento: '',
            fecha: '',
            hora_entrega: '',
            lat_lng_direccion_entrega: '',
            lat_lng_establecimiento: '',
            nombre_establecimiento: '',
            nombre_usuario: '',
            token_usuario: '',
            total_precio: ''
        };
    }
    PedidoVerHistorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoVerHistorialPage');
        this.ver_pedido();
    };
    PedidoVerHistorialPage.prototype.ver_pedido = function () {
        var pedido = this.pr_pedido.get_result_pedido();
        this.result_det_pedido = this.pr_pedido.get_result_det_pedido();
        this.result_extra_pedido = this.pr_pedido.get_result_extra_pedido();
        this.variable_extra_pedido = this.pr_pedido.get_variable_extra_pedido();
        this.result_pedido.id_pedido = pedido.id_pedido;
        this.result_pedido.id_establecimiento = pedido.id_establecimiento;
        this.result_pedido.detalles_direccion_entrega = pedido.detalles_direccion_entrega;
        this.result_pedido.detalles_direccion_establecimiento = pedido.detalles_direccion_establecimiento;
        this.result_pedido.direccion_entrega = pedido.direccion_entrega;
        this.result_pedido.direccion_establecimiento = pedido.direccion_establecimiento;
        this.result_pedido.fecha = pedido.fecha;
        this.result_pedido.hora_entrega = pedido.hora_entrega;
        this.result_pedido.lat_lng_direccion_entrega = pedido.lat_lng_direccion_entrega;
        this.result_pedido.lat_lng_establecimiento = pedido.lat_lng_establecimiento;
        this.result_pedido.nombre_establecimiento = pedido.nombre_establecimiento;
        this.result_pedido.nombre_usuario = pedido.nombre_usuario;
        this.result_pedido.token_usuario = pedido.token_usuario;
        this.result_pedido.total_precio = pedido.total_precio;
        console.log(this.result_pedido);
        this.variable_token_repartidor = this.pr_pedido.get_varibale_token_repartidor();
        console.log(this.variable_token_repartidor);
        this.variable_status_pedido = this.pr_pedido.get_variable_status_pedido();
    };
    PedidoVerHistorialPage.prototype.mensaje_repartidor = function () {
        var _this = this;
        var _token_usuario = this.pr_pedido.get_token_repartidor_pedido_seleccionado();
        var _id_pedido = this.result_pedido.id_pedido;
        var prompt = this.alertCtrl.create({
            title: 'Mensaje a Repartidor',
            inputs: [
                {
                    name: 'txt_mensaje',
                    placeholder: 'Escriba su mensaje'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        var _mensaje = data.txt_mensaje;
                        console.log(_mensaje);
                        _this.pr_mensaje.enviar_mensaje_repartidor(_token_usuario, _id_pedido, _mensaje).subscribe(function (pr_mensaje) {
                            var _titulo = 'Mensaje a repartidor';
                            var _mensaje = 'El mensaje fue enviado';
                            _this.alert_toast.show_alert(_titulo, _mensaje);
                            console.log("REGISTRO EXISTE");
                        }, function (err) {
                            console.log("NO EXISTE REGISTRO");
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    PedidoVerHistorialPage.prototype.mensaje_cliente = function () {
        var _this = this;
        var _token_usuario = this.result_pedido.token_usuario;
        var _id_pedido = this.result_pedido.id_pedido;
        var prompt = this.alertCtrl.create({
            title: 'Mensaje a a Cliente',
            inputs: [
                {
                    name: 'txt_mensaje',
                    placeholder: 'Escriba su mensaje'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        var _mensaje = data.txt_mensaje;
                        console.log(_mensaje);
                        _this.pr_mensaje.enviar_mensaje_cliente(_token_usuario, _id_pedido, _mensaje).subscribe(function (pr_mensaje) {
                            var _titulo = 'Mensaje a cliente';
                            var _mensaje = 'El mensaje fue enviado';
                            _this.alert_toast.show_alert(_titulo, _mensaje);
                            console.log("REGISTRO EXISTE");
                        }, function (err) {
                            console.log("NO EXISTE REGISTRO");
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    PedidoVerHistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido-ver-historial',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\pedido-ver-historial\pedido-ver-historial.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div class="fondo color_texto">\n	<strong>Cliente</strong>\n</div>\n<div align="center">\n	<strong>\n	<h4>\n		{{result_pedido.nombre_usuario}}\n	</h4>\n</strong>\n</div>\n<div class="fondo color_texto">\n	<strong>Direccion:</strong>\n</div>\n<div padding>\n	{{result_pedido.direccion_entrega}}\n</div>\n<div padding>\n	{{result_pedido.detalles_direccion_entrega}}\n</div>\n<div class="fondo color_texto">\n	<strong>Hora de entrega:</strong>\n</div>\n<div padding align="center">\n	<h4>{{result_pedido.hora_entrega}}</h4>\n</div>\n<div class="fondo color_texto">\n	<strong>Total:</strong>\n</div>\n<div padding align="center">\n	<h4>MNX {{result_pedido.total_precio | number : \'1.2-2\'}}</h4>\n</div>\n	<div class="fondo color_texto">\n	<strong>Detalles de Pedido</strong>\n</div>\n<div padding>\n	<ion-grid>\n		<div *ngFor="let item of result_det_pedido">\n			<ion-item no-lines>\n				<ion-row>\n					<ion-col col-1>{{item.cantidad}}</ion-col>\n					<ion-col col-8>\n						<strong>{{item.descripcion}}</strong>\n					</ion-col>\n					<ion-col col-2>MNX {{item.total | number : \'1.2-2\'}}\n					</ion-col>\n				</ion-row>\n			</ion-item>\n	 	</div>\n	</ion-grid>\n</div>\n<div *ngIf="variable_extra_pedido==1">\n		<div class="fondo color_texto">\n	<strong>Extras</strong>\n</div>\n	<div padding>\n	<ion-grid>\n		<div *ngFor="let item of result_extra_pedido">\n			<ion-item no-lines>\n				<ion-row>\n					<ion-col col-1>{{item.descripcion_extra}}</ion-col>\n				</ion-row>\n			</ion-item>\n	 	</div>\n	</ion-grid>\n</div>\n</div>\n<ion-fab right bottom>\n    <button ion-fab color="boton_pedido_descripcion"><ion-icon name="md-add"></ion-icon></button>\n    <ion-fab-list side="top">\n    	<div *ngIf="variable_token_repartidor==1">\n      <button ion-fab color="primary" (click)="mensaje_repartidor()"><ion-icon name="chatboxes"></ion-icon></button>	\n    	</div>\n      <button ion-fab color="primary" (click)="mensaje_cliente()"><ion-icon name="md-chatboxes"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\pedido-ver-historial\pedido-ver-historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pr_pedidos_pr_pedidos__["a" /* PrPedidosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pr_mensaje_pr_mensaje__["a" /* PrMensajeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */]])
    ], PedidoVerHistorialPage);
    return PedidoVerHistorialPage;
}());

//# sourceMappingURL=pedido-ver-historial.js.map

/***/ })

});
//# sourceMappingURL=7.js.map