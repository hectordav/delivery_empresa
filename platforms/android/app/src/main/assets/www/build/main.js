webpackJsonp([11],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrAlertToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PrAlertToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PrAlertToastProvider = (function () {
    function PrAlertToastProvider(alertCtrl, toastCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello PrAlertToastProvider Provider');
    }
    PrAlertToastProvider.prototype.show_alert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    PrAlertToastProvider.prototype.mensaje_toast_medio = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    PrAlertToastProvider.prototype.mensaje_toast_pie = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    PrAlertToastProvider.prototype.show_loading = function (item) {
        this.loader = this.loadingCtrl.create({
            content: item
        });
        this.loader.present();
    };
    PrAlertToastProvider.prototype.dismis_loading = function () {
        this.loader.dismiss();
    };
    PrAlertToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PrAlertToastProvider);
    return PrAlertToastProvider;
}());

//# sourceMappingURL=pr-alert-toast.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrPedidosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrPedidosProvider = (function () {
    function PrPedidosProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrPedidosProvider.prototype.set_result_pedido = function (value) {
        this.result_pedido = value;
    };
    PrPedidosProvider.prototype.get_result_pedido = function () {
        return this.result_pedido;
    };
    PrPedidosProvider.prototype.set_result_det_pedido = function (value) {
        this.result_det_pedido = value;
    };
    PrPedidosProvider.prototype.get_result_det_pedido = function () {
        return this.result_det_pedido;
    };
    PrPedidosProvider.prototype.set_result_extra_pedido = function (value) {
        this.result_extra_pedido = value;
    };
    PrPedidosProvider.prototype.get_result_extra_pedido = function () {
        return this.result_extra_pedido;
    };
    PrPedidosProvider.prototype.set_variable_extra_pedido = function (value) {
        this.variable_extra_pedido = value;
    };
    PrPedidosProvider.prototype.get_variable_extra_pedido = function () {
        return this.variable_extra_pedido;
    };
    PrPedidosProvider.prototype.set_token_repartidor_pedido_seleccionado = function (value) {
        this.token_repartidor_pedido_seleccionado = value;
    };
    PrPedidosProvider.prototype.get_token_repartidor_pedido_seleccionado = function () {
        return this.token_repartidor_pedido_seleccionado;
    };
    PrPedidosProvider.prototype.set_varibale_token_repartidor = function (value) {
        this.varibale_token_repartidor = value;
    };
    PrPedidosProvider.prototype.get_varibale_token_repartidor = function () {
        return this.varibale_token_repartidor;
    };
    PrPedidosProvider.prototype.set_variable_status_pedido = function (value) {
        this.variable_status_pedido = value;
    };
    PrPedidosProvider.prototype.get_variable_status_pedido = function () {
        return this.variable_status_pedido;
    };
    PrPedidosProvider.prototype.get_pedidos_id_empresa = function (datos) {
        var variable_2 = JSON.stringify(datos);
        var url = this.principal_url + 'entrega_pedido/get_pedidos_id_empresa';
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrPedidosProvider.prototype.get_historial_pedidos_id_empresa = function (datos) {
        var variable_2 = JSON.stringify(datos);
        var url = this.principal_url + 'entrega_pedido/get_historial_pedidos_id_empresa';
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrPedidosProvider.prototype.get_det_pedido_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_det_pedido_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrPedidosProvider.prototype.get_extra_det_pedido_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_extra_det_pedido_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrPedidosProvider.prototype.get_token_usuario_repartidor_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_token_usuario_repartidor_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrPedidosProvider.prototype.cambiar_status_pedido_establecimiento = function (_id_pedido, _id_status_pedido, token_cliente, mensaje) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido, id_status_pedido: _id_status_pedido, token_cliente: token_cliente, mensaje: mensaje });
        var url = this.principal_url + 'pedido/cambiar_status_pedido_establecimiento';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrPedidosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrPedidosProvider);
    return PrPedidosProvider;
}());

//# sourceMappingURL=pr-pedidos.js.map

/***/ }),

/***/ 136:
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
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		343,
		10
	],
	"../pages/login/login.module": [
		344,
		9
	],
	"../pages/pedido-historial/pedido-historial.module": [
		345,
		8
	],
	"../pages/pedido-ver-historial/pedido-ver-historial.module": [
		346,
		7
	],
	"../pages/pedido-ver/pedido-ver.module": [
		347,
		6
	],
	"../pages/producto-agregar/producto-agregar.module": [
		348,
		5
	],
	"../pages/producto-ver/producto-ver.module": [
		349,
		4
	],
	"../pages/productos/productos.module": [
		350,
		3
	],
	"../pages/signup/signup.module": [
		351,
		0
	],
	"../pages/tutorial/tutorial.module": [
		352,
		2
	],
	"../pages/welcome/welcome.module": [
		353,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrProductosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PrProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PrProductosProvider = (function () {
    function PrProductosProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrProductosProvider.prototype.set_producto = function (value) {
        this.producto = value;
    };
    PrProductosProvider.prototype.get_producto = function () {
        return this.producto;
    };
    PrProductosProvider.prototype.get_productos_id_empresa = function (datos) {
        var variable_2 = JSON.stringify(datos);
        var url = this.principal_url + 'producto_establecimiento/get_producto_id_establecimiento';
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrProductosProvider.prototype.get_categoria_id_rubro = function (datos) {
        var variable_2 = JSON.stringify(datos);
        var url = this.principal_url + 'categoria/get_categoria_id_rubro';
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrProductosProvider.prototype.guardar_producto = function (datos) {
        var variable_2 = JSON.stringify(datos);
        var url = this.principal_url + 'producto_establecimiento/guardar_producto';
        var response = this.http.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrProductosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrProductosProvider);
    return PrProductosProvider;
}());

//# sourceMappingURL=pr-productos.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrMensajeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrMensajeProvider = (function () {
    function PrMensajeProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        console.log('Hello PrMensajeProvider Provider');
        this.principal_url = this.ruta.get_ruta();
    }
    PrMensajeProvider.prototype.enviar_mensaje_repartidor = function (_token_usuario, _id_pedido, _mensaje) {
        var variable_2 = JSON.stringify({ token: _token_usuario, id_pedido: _id_pedido, mensaje: _mensaje });
        var url = this.principal_url + 'push_repartidor/enviar_mensaje_repartidor';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrMensajeProvider.prototype.enviar_mensaje_cliente = function (_token_usuario, _id_pedido, _mensaje) {
        var variable_2 = JSON.stringify({ token: _token_usuario, id_pedido: _id_pedido, mensaje: _mensaje });
        var url = this.principal_url + 'push_cliente/enviar_mensaje_cliente_establecimiento';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrMensajeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrMensajeProvider);
    return PrMensajeProvider;
}());

//# sourceMappingURL=pr-mensaje.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pr_pedidos_pr_pedidos__ = __webpack_require__(122);
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





var HomePage = (function () {
    function HomePage(navCtrl, navParams, pr_pedidos, pr_login, alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_pedidos = pr_pedidos;
        this.pr_login = pr_login;
        this.alert_toast = alert_toast;
    }
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
      this.pedidos_pendientes();
    }*/
    HomePage.prototype.ionViewDidEnter = function () {
        this.pedidos_pendientes();
    };
    HomePage.prototype.pedidos_pendientes = function () {
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
        this.pr_pedidos.get_pedidos_id_empresa(data_empresa).subscribe(function (pr_pedidos) {
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
    HomePage.prototype.ver_pedido = function (item) {
        var _this = this;
        var _id_pedido = item.id_pedido;
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
                        _this.navCtrl.push('PedidoVerPage');
                    }
                    else {
                        var data = result_token.data;
                        _this.pr_pedidos.set_token_repartidor_pedido_seleccionado(data);
                        _this.pr_pedidos.set_varibale_token_repartidor(1);
                        _this.navCtrl.push('PedidoVerPage');
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pedidos Pendientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="fondo">\n	  <!-- el component lo escondo para que no muestre el mapa ojo-->\n	  <div *ngFor="let item of result_pedidos">\n    <ion-card>\n      <ion-card-header>\n      <div align="center">\n        <strong>Pedido pendiente: # {{item.id_pedido}}</strong>\n      </div> \n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n      <ion-list>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n             <ion-card-title>\n                <h5><ion-icon name="home" item-start></ion-icon></h5>\n             </ion-card-title>\n            </ion-col>\n            <ion-col>\n              <h5>{{item.nombre_usuario}}</h5>\n              <h5>\n              <strong>Direccion:</strong> {{item.direccion_entrega}}\n              </h5>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-calendar" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Fecha:</strong> {{item.fecha | date:\'dd/MM/yyyy\'}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="clock" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Hora de entrega:</strong> {{item.hora_entrega}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n      </ion-card-content>\n      <hr>\n      <div align="center">\n         <button ion-button small color="primary" icon-start (click)="ver_pedido(item)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Ver\n        </button>\n\n      </div>\n      <br>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pr_pedidos_pr_pedidos__["a" /* PrPedidosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prlogin_prlogin__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService, prlogin) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.prlogin = prlogin;
        this.cuenta = {
            correo: '',
            pass: '',
            token: '',
            serial: ''
        };
    }
    // Attempt to login in through our User service
    LoginPage.prototype.login_manual = function () {
        var _this = this;
        var login = this.cuenta.correo;
        var pass = this.cuenta.pass;
        var token = '1'; /*this.prlogin.getToken();*/
        var serial = '1'; /*this.prlogin.get_serial();*/
        this.prlogin.login_empresa(login, pass, token, serial).subscribe(function (login) {
            _this.result_login = login;
            var mensaje = _this.result_login.mensaje;
            var data = _this.result_login.data;
            var data_empresa = _this.result_login.data_empresa;
            console.log(mensaje);
            if (mensaje == 'usuario NO existe') {
                var mensaje_1 = 'Login y contraseña no validos';
                _this.loading_toast(mensaje_1);
            }
            else {
                var id_usuario = void 0;
                var nombre = void 0;
                var login_1;
                var id_nivel = void 0;
                var id_cliente = void 0;
                var cedula_cliente = void 0;
                var direccion = void 0;
                var telf = void 0;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var value = data_1[_i];
                    id_usuario = value.id_usuario;
                    nombre = value.nombre;
                    login_1 = value.login;
                    id_nivel = value.id_nivel;
                    id_cliente = value.id_cliente;
                    cedula_cliente = value.cedula_cliente;
                    direccion = value.direccion;
                    telf = value.telf;
                }
                if (id_nivel == 1 || id_nivel == 2 || id_nivel == 4) {
                    var mensaje_2 = 'Debes ser un Usuario de Empresa para iniciar sesion';
                    _this.loading_toast(mensaje_2);
                }
                else {
                    _this.prlogin.set_inicio_sesion(data);
                    localStorage.setItem('delivery_empresa', JSON.stringify(data));
                    localStorage.setItem('data_empresa', JSON.stringify(data_empresa));
                    _this.navCtrl.setRoot('HomePage');
                }
                console.log('entra en el else');
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.loading_toast = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <form (submit)="login_manual()">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="cuenta.correo" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="cuenta.pass" name="password"></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_prlogin_prlogin__["a" /* PrloginProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_prlogin_prlogin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_prrutas_prrutas__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_pr_pedidos_pr_pedidos__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_pr_alert_toast_pr_alert_toast__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_pr_mensaje_pr_mensaje__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_pr_productos_pr_productos__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_transfer__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_file_path__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_13__providers_providers__["b" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-historial/pedido-historial.module#PedidoHistorialPageModule', name: 'PedidoHistorialPage', segment: 'pedido-historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-ver-historial/pedido-ver-historial.module#PedidoVerHistorialPageModule', name: 'PedidoVerHistorialPage', segment: 'pedido-ver-historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-ver/pedido-ver.module#PedidoVerPageModule', name: 'PedidoVerPage', segment: 'pedido-ver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-agregar/producto-agregar.module#ProductoAgregarPageModule', name: 'ProductoAgregarPage', segment: 'producto-agregar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-ver/producto-ver.module#ProductoVerPageModule', name: 'ProductoVerPage', segment: 'producto-ver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__providers_providers__["b" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_prlogin_prlogin__["a" /* PrloginProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_prrutas_prrutas__["a" /* PrrutasProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_pr_pedidos_pr_pedidos__["a" /* PrPedidosProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_pr_mensaje_pr_mensaje__["a" /* PrMensajeProvider */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__providers_pr_productos_pr_productos__["a" /* PrProductosProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_file_path__["a" /* FilePath */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(140);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(187);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrrutasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrrutasProvider = (function () {
    function PrrutasProvider(http) {
        this.http = http;
        this.principal_url = 'http://mimandadero.com/delivery_rest/';
        this.ruta_imagen = 'http://mimandadero.com/delivery_web/assets/img/';
        console.log('Hello PrrutasProvider Provider');
    }
    PrrutasProvider.prototype.get_ruta = function () {
        return this.principal_url;
    };
    PrrutasProvider.prototype.get_ruta_imagen = function () {
        return this.ruta_imagen;
    };
    PrrutasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PrrutasProvider);
    return PrrutasProvider;
}());

//# sourceMappingURL=prrutas.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_prlogin_prlogin__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, oneSignal, device, alertCtrl, login, loadingCtrl) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.login = login;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = (localStorage.getItem('delivery_empresa')) ? 'HomePage' : 'TutorialPage';
        this.pages = [
            { title: 'Pedidos Pendientes', component: 'HomePage' },
            { title: 'Historial de Pedidos', component: 'PedidoHistorialPage' },
            { title: 'Productos Registrados', component: 'ProductosPage' }
        ];
        this.backPressed = false;
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
                _this.notificaciones();
                _this.background();
                /*****************backbutton***********************/
                platform.registerBackButtonAction(function () {
                    if (_this.nav.canGoBack()) {
                        _this.nav.pop();
                        return;
                    }
                    if (!_this.backPressed) {
                        _this.backPressed = true;
                        _this.presentLoading();
                        setTimeout(function () { return _this.backPressed = false; }, 2000);
                        return;
                    }
                    else {
                        _this.platform.exitApp();
                    }
                });
                /***************************************************/
            }
            else {
                /*no hace nada por esta en la web*/
            }
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.presentLoading = function () {
        var _this = this;
        this.loader = this.alertCtrl.create({
            title: 'Confirmar',
            message: 'Realmente desea Salir',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salir',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.loader.present();
    };
    MyApp.prototype.background = function () {
        /******************en segundo plano********************+*/
        /* esto se debe agregar en la consola raiz del proyecto
       ionic cordova plugin add cordova-plugin-background-mode   */
        console.log("MyApp::constructor platform.ready");
        cordova.plugins.backgroundMode.setDefaults({
            title: 'Delivery Establecimiento',
            text: 'Esta activo en segundo plano'
            /*icon:'assets/img/logo_2.png'*/
        }, cordova.plugins.backgroundMode.enable());
    };
    MyApp.prototype.notificaciones = function () {
        var _this = this;
        this.serial_device = this.device.uuid;
        this.oneSignal.startInit('39f4043a-bdf0-4db6-9785-84bb4f98619a', '1062085262869'); //(appId_onesignal,googleProjectNumber)
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationOpened()
            .subscribe(function (jsonData) {
            var alert = _this.alertCtrl.create({
                title: jsonData.notification.payload.title,
                subTitle: jsonData.notification.payload.body,
                buttons: ['OK']
            });
            alert.present();
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        });
        this.oneSignal.endInit();
        this.presentLoading_carga();
        this.oneSignal.getIds().then(function (id) {
            var el_id = id.userId; /*el id para guardarlo en el token de la base de datos*/
            _this.login.setToken(el_id);
            _this.serial_device = _this.device.uuid; /* el serial del dispositivo*/
            _this.login.set_serial(_this.serial_device + '3');
            _this.loader.dismiss();
        });
    };
    MyApp.prototype.presentLoading_carga = function () {
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.loader.present();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.cerrar_sesion = function () {
        localStorage.removeItem('delivery_empresa');
        localStorage.removeItem('data_empresa');
        this.nav.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header >\n      <ion-toolbar color=\"color_nav_bar\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n    <ion-footer>\n    <div align=\"center\">\n      <button menuClose ion-item (click)=\"cerrar_sesion()\">\n            Cerrar sesi\u00F3n\n       </button>\n    </div>\n    </ion-footer>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_providers__["b" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* unused harmony reexport Items */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrloginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrloginProvider = (function () {
    function PrloginProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        console.log('Hello PrloginProvider Provider');
        this.principal_url = this.ruta.get_ruta();
    }
    /*el serial*/
    PrloginProvider.prototype.set_serial = function (value) {
        this.variable_serial = value;
    };
    /*obtengo el serial*/
    PrloginProvider.prototype.get_serial = function () {
        return this.variable_serial;
    };
    PrloginProvider.prototype.set_inicio_sesion = function (value) {
        this.variable_inicio_sesion = value;
    };
    PrloginProvider.prototype.get_inicio_sesion = function () {
        return this.variable_inicio_sesion;
    };
    /*el token del push*/
    PrloginProvider.prototype.setToken = function (value) {
        this.variable_token = value;
    };
    /*obtengo el push y lo comparo con el guardado */
    PrloginProvider.prototype.getToken = function () {
        return this.variable_token;
    };
    PrloginProvider.prototype.login_manual = function (login, clave, token, serial) {
        var variable_2 = JSON.stringify({ login: login, clave: clave, token: token, serial: serial });
        var url = this.principal_url + 'login/login_manual';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrloginProvider.prototype.login_empresa = function (login, clave, token, serial) {
        var variable_2 = JSON.stringify({ login: login, clave: clave, token: token, serial: serial });
        var url = this.principal_url + 'login/login_empresa';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrloginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrloginProvider);
    return PrloginProvider;
}());

//# sourceMappingURL=prlogin.js.map

/***/ })

},[238]);
//# sourceMappingURL=main.js.map