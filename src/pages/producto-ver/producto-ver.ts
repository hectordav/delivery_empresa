import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrProductosProvider}from '../../providers/pr-productos/pr-productos';
import {PrrutasProvider}from '../../providers/prrutas/prrutas';

/**
 * Generated class for the ProductoVerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-ver',
  templateUrl: 'producto-ver.html',
})
export class ProductoVerPage {
	result_producto:any={
		id_producto:'',
		imagen:'',
		nombre_producto:'',
		descripcion_producto:'',
		categoria:'',
		precio:'',
    id_status:''
	};
	ruta_imagen:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_productos:PrProductosProvider, public pr_ruta:PrrutasProvider) {
  	this.ruta_imagen=this.pr_ruta.get_ruta_imagen();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoVerPage');
    this.ver_producto();
  }
  ver_producto(){
  	let result=this.pr_productos.get_producto();
  	this.result_producto.id_producto=result.id_producto;
  	this.result_producto.imagen=result.imagen;
  	this.result_producto.nombre_producto=result.nombre_producto;
  	this.result_producto.descripcion_producto=result.descripcion_producto;
  	this.result_producto.categoria=result.categoria;
    this.result_producto.precio=result.precio;
  	this.result_producto.id_status=result.id_status;
    debugger
  }


}
