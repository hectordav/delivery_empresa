import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrProductosProvider}from '../../providers/pr-productos/pr-productos';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
import {PrAlertToastProvider}from '../../providers/pr-alert-toast/pr-alert-toast';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
	result_producto:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_login:PrloginProvider, public pr_productos:PrProductosProvider, public alert_toast:PrAlertToastProvider) {
  }

  ionViewDidEnter(){
   this.productos_registrados(); 
  }
  productos_registrados(){
  	let data=JSON.parse(localStorage.getItem('delivery_empresa'));
    this.pr_login.set_inicio_sesion(data);
    console.log(data);
    let data_empresa={
      id_establecimiento:''
    }
    for(let value of data){
      data_empresa.id_establecimiento=value.id_empresa;
    }
     let mensaje="Cargando";
      this.alert_toast.show_loading(mensaje);
     this.pr_productos.get_productos_id_empresa(data_empresa).subscribe(
        pr_productos => {
          this.result_producto=pr_productos;
           console.log("REGISTRO EXISTE pr_productos");
           this.alert_toast.dismis_loading();
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
  ver_producto(item){
  	this.pr_productos.set_producto(item);
  	console.log(item);
  	 this.navCtrl.push('ProductoVerPage');

  }
  nuevo_producto(){
     this.navCtrl.push('ProductoAgregarPage');
  }

}
