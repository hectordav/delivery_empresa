webpackJsonp([5],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoAgregarPageModule", function() { return ProductoAgregarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_agregar__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoAgregarPageModule = (function () {
    function ProductoAgregarPageModule() {
    }
    ProductoAgregarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_agregar__["a" /* ProductoAgregarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__producto_agregar__["a" /* ProductoAgregarPage */]),
            ],
        })
    ], ProductoAgregarPageModule);
    return ProductoAgregarPageModule;
}());

//# sourceMappingURL=producto-agregar.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoAgregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pr_productos_pr_productos__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pr_alert_toast_pr_alert_toast__ = __webpack_require__(121);
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
 * Generated class for the ProductoAgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductoAgregarPage = (function () {
    function ProductoAgregarPage(navCtrl, navParams, pr_producto, actionSheetCtrl, camera, platform, transfer, file, filePath, toastCtrl, loadingCtrl, alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_producto = pr_producto;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alert_toast = alert_toast;
        this.data_producto = {
            id_empresa: '',
            id_status_producto: '',
            id_categoria: '',
            nombre: '',
            descripcion: '',
            precio: '',
            imagen: ''
        };
        this.foto_perfil = null;
    }
    ProductoAgregarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoAgregarPage');
        this.categoria();
    };
    ProductoAgregarPage.prototype.guardar_producto = function () {
        var _this = this;
        if (this.data_producto.id_categoria == '') {
            var mensaje = 'Seleccione una Categoria';
            this.alert_toast.mensaje_toast_pie(mensaje);
        }
        else if (this.data_producto.nombre == '') {
            var mensaje = 'Ingrese un nombre de producto';
            this.alert_toast.mensaje_toast_pie(mensaje);
        }
        else if (this.data_producto.descripcion == '') {
            var mensaje = 'Ingrese una descripcion';
            this.alert_toast.mensaje_toast_pie(mensaje);
        }
        else if (this.data_producto.precio == '') {
            var mensaje = 'Ingrese un precio';
            this.alert_toast.mensaje_toast_pie(mensaje);
        }
        else if (this.foto_perfil == null) {
            var mensaje = '';
            this.alert_toast.mensaje_toast_pie(mensaje);
        }
        else {
            this.data_producto.imagen = this.foto_perfil;
            this.data_producto.id_status_producto = 1;
            var mensaje = 'Guardando producto';
            this.alert_toast.show_loading(mensaje);
            this.pr_producto.guardar_producto(this.data_producto).subscribe(function (pr_producto) {
                var producto = pr_producto;
                var mensaje = producto.mensaje;
                _this.alert_toast.dismis_loading();
                if (mensaje == 'producto guardado') {
                    _this.subir_imagen_producto();
                }
            }, function (err) {
                console.log("NO EXISTE REGISTRO");
            });
        }
    };
    ProductoAgregarPage.prototype.categoria = function () {
        var _this = this;
        var data_empresa = JSON.parse(localStorage.getItem('data_empresa'));
        var data_usuario = JSON.parse(localStorage.getItem('delivery_empresa'));
        var data_envio = {
            id_rubro: ''
        };
        for (var _i = 0, data_usuario_1 = data_usuario; _i < data_usuario_1.length; _i++) {
            var value = data_usuario_1[_i];
            this.data_producto.id_empresa = value.id_empresa;
        }
        for (var _a = 0, data_empresa_1 = data_empresa; _a < data_empresa_1.length; _a++) {
            var value = data_empresa_1[_a];
            data_envio.id_rubro = value.id_rubro;
        }
        console.log(this.data_producto);
        this.pr_producto.get_categoria_id_rubro(data_envio).subscribe(function (pr_producto) {
            var categoria = pr_producto;
            _this.result_categoria = categoria.data;
            console.log("REGISTRO EXISTE pr_producto");
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    /************************************************************************************************/
    /*nota:
    
    las funciones hoja_foto_perfil, toma_foto_perfil, copyFileToLocalDir, createFileName, pathForImage  solo funcionan desde el telf, no con el emulador.
    
    subir_imagen_producto: debes crear una carpeta y guardar el upload.php (que esta en la carpeta prueba del webservice).
    */
    ProductoAgregarPage.prototype.hoja_foto_perfil = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccione Imagen',
            buttons: [
                {
                    text: 'Desde Libreria',
                    handler: function () {
                        _this.toma_foto_perfil(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Usar Camara',
                    handler: function () {
                        _this.toma_foto_perfil(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProductoAgregarPage.prototype.toma_foto_perfil = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    ProductoAgregarPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProductoAgregarPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.foto_perfil = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ProductoAgregarPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ProductoAgregarPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    /************************************************************************************************/
    ProductoAgregarPage.prototype.subir_imagen_producto = function () {
        var _this = this;
        // Destination URL
        var url = "http://mimandadero.com/prueba/upload.php";
        // File for Upload
        var targetPath = this.pathForImage(this.foto_perfil);
        // File name only
        var filename = this.foto_perfil;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Subiendo Imagen deL producto',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            var mensaje = 'Imagen Subida al servidor';
            _this.alert_toast.mensaje_toast_pie(mensaje);
            _this.navCtrl.pop();
            /*guarda la imagen al server*/
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error subiendo imagen de perfil');
        });
    };
    ProductoAgregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-agregar',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\producto-agregar\producto-agregar.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Nuevo Producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n  <ion-item>\n    <ion-label>Categoria</ion-label>\n    <ion-select [(ngModel)]="data_producto.id_categoria">\n      	<ion-option value="">Seleccione</ion-option>\n      <div *ngFor="let item of result_categoria">\n      	<ion-option value="{{item.id}}">{{item.descripcion}}</ion-option>\n      </div>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label floating >Producto</ion-label>\n   	<ion-input type="text" [(ngModel)]="data_producto.nombre"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating >Descripcion</ion-label>\n   	<ion-input type="text" [(ngModel)]="data_producto.descripcion"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating >Precio</ion-label>\n   	<ion-input type="number" [(ngModel)]="data_producto.precio"></ion-input>\n  </ion-item>\n<ion-item>\n    <div (click)="hoja_foto_perfil()" *ngIf="foto_perfil; else other_content">\n      <ion-icon name="md-checkmark"></ion-icon> {{foto_perfil}}\n    </div>\n  <ng-template #other_content>\n    <div (click)="hoja_foto_perfil()">\n      <ion-icon name="camera"></ion-icon> Seleccione Imagen de Perfil\n    </div>\n  </ng-template>  \n</ion-item>\n</ion-content>\n<ion-footer>\n  <button ion-button color="boton_aceptar" block (click)="guardar_producto()">\n    Agregar\n  </button>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_empresa\deliemp\src\pages\producto-agregar\producto-agregar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pr_productos_pr_productos__["a" /* PrProductosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */]])
    ], ProductoAgregarPage);
    return ProductoAgregarPage;
}());

//# sourceMappingURL=producto-agregar.js.map

/***/ })

});
//# sourceMappingURL=5.js.map