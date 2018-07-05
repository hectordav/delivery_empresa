import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,Platform,ToastController, LoadingController } from 'ionic-angular';
import {PrProductosProvider}from '../../providers/pr-productos/pr-productos';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import {PrAlertToastProvider}from '../../providers/pr-alert-toast/pr-alert-toast';

declare var cordova:any;

/**
 * Generated class for the ProductoAgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-agregar',
  templateUrl: 'producto-agregar.html',
})
export class ProductoAgregarPage {
	result_categoria:any;
	data_producto:any={
    id_empresa:'',
    id_status_producto:'',
		id_categoria:'',
		nombre:'',
		descripcion:'',
		precio:'',
		imagen:''
	}
  loading:any;
  foto_perfil:any=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_producto:PrProductosProvider, public actionSheetCtrl: ActionSheetController,public camera: Camera,public platform: Platform,private transfer: Transfer, private file: File, private filePath: FilePath,public toastCtrl: ToastController, public loadingCtrl:LoadingController, public alert_toast:PrAlertToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoAgregarPage');
    this.categoria();
  }
  guardar_producto(){
    if(this.data_producto.id_categoria=='') {
      let mensaje='Seleccione una Categoria';
      this.alert_toast.mensaje_toast_pie(mensaje);
    }else if(this.data_producto.nombre==''){
      let mensaje='Ingrese un nombre de producto';
      this.alert_toast.mensaje_toast_pie(mensaje);
    }else if(this.data_producto.descripcion==''){
      let mensaje='Ingrese una descripcion';
      this.alert_toast.mensaje_toast_pie(mensaje);
    }else if(this.data_producto.precio==''){
      let mensaje='Ingrese un precio';
      this.alert_toast.mensaje_toast_pie(mensaje);
    }else if(this.foto_perfil==null){
      let mensaje='';
      this.alert_toast.mensaje_toast_pie(mensaje);
    }else{
      this.data_producto.imagen=this.foto_perfil;
      this.data_producto.id_status_producto=1;
      let mensaje='Guardando producto';
      this.alert_toast.show_loading(mensaje);
       this.pr_producto.guardar_producto(this.data_producto).subscribe(
          pr_producto => {
            let producto=pr_producto;
            let mensaje=producto.mensaje;
            this.alert_toast.dismis_loading();
            if(mensaje=='producto guardado') {
              this.subir_imagen_producto();
            }
          },
          err => {console.log("NO EXISTE REGISTRO");
          },
        );
    }
  }
  categoria(){
    let data_empresa=JSON.parse(localStorage.getItem('data_empresa'));
  	let data_usuario=JSON.parse(localStorage.getItem('delivery_empresa'));
  	let data_envio={
  		id_rubro:''
  	}
     for(let value of data_usuario) {
      this.data_producto.id_empresa=value.id_empresa;
     }
     for(let value of data_empresa) {
      data_envio.id_rubro=value.id_rubro;
  	 }
  	 console.log(this.data_producto);
  	 this.pr_producto.get_categoria_id_rubro(data_envio).subscribe(
  	    pr_producto => {
  	      let categoria=pr_producto;
  	      this.result_categoria=categoria.data;
  	       console.log("REGISTRO EXISTE pr_producto");
  	    },
  	    err => {console.log("NO EXISTE REGISTRO");
  	    },
  	  );
  }
/************************************************************************************************/
/*nota: 

las funciones hoja_foto_perfil, toma_foto_perfil, copyFileToLocalDir, createFileName, pathForImage  solo funcionan desde el telf, no con el emulador.

subir_imagen_producto: debes crear una carpeta y guardar el upload.php (que esta en la carpeta prueba del webservice).
*/



  hoja_foto_perfil() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Seleccione Imagen',
      buttons: [
        {
          text: 'Desde Libreria',
          handler: () => {
            this.toma_foto_perfil(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar Camara',
          handler: () => {
            this.toma_foto_perfil(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
public toma_foto_perfil(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {  
    this.presentToast('Error while selecting image.');
  });
}
// Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.foto_perfil = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}
 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
 }
/************************************************************************************************/

 subir_imagen_producto(){
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
    params : {'fileName': filename}
  };
  const fileTransfer: TransferObject = this.transfer.create();
  this.loading=this.loadingCtrl.create({
    content: 'Subiendo Imagen deL producto',
  });
  this.loading.present();
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll();
    let mensaje='Imagen Subida al servidor';
    this.alert_toast.mensaje_toast_pie(mensaje);
    this.navCtrl.pop();
    /*guarda la imagen al server*/
  },err =>{
    this.loading.dismissAll();
    this.presentToast('Error subiendo imagen de perfil');
  });
 }
}
