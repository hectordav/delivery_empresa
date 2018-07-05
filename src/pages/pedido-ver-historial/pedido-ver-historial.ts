import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {PrPedidosProvider}from '../../providers/pr-pedidos/pr-pedidos';
import {PrMensajeProvider} from "../../providers/pr-mensaje/pr-mensaje";
import {PrAlertToastProvider}from '../../providers/pr-alert-toast/pr-alert-toast';

/**
 * Generated class for the PedidoVerHistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido-ver-historial',
  templateUrl: 'pedido-ver-historial.html',
})
export class PedidoVerHistorialPage {
		result_pedido:any={
		id_pedido:'',
		id_establecimiento:'',
		detalles_direccion_entrega:'',
		detalles_direccion_establecimiento:'',
		direccion_entrega:'',
		direccion_establecimiento:'',
		fecha:'',
		hora_entrega:'',
		lat_lng_direccion_entrega:'',
		lat_lng_establecimiento:'',
		nombre_establecimiento:'',
		nombre_usuario:'',
		token_usuario:'',
		total_precio:''
	};
	result_det_pedido:any;
	result_extra_pedido:any;
	variable_extra_pedido:any;
  variable_token_repartidor:any;
  variable_status_pedido:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public pr_pedido:PrPedidosProvider, public pr_mensaje: PrMensajeProvider, public alertCtrl:AlertController, public alert_toast:PrAlertToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoVerHistorialPage');
    this.ver_pedido();
  }
  ver_pedido(){
    
  	let pedido=this.pr_pedido.get_result_pedido();
  	this.result_det_pedido=this.pr_pedido.get_result_det_pedido();
  	this.result_extra_pedido=this.pr_pedido.get_result_extra_pedido();
  	this.variable_extra_pedido=this.pr_pedido.get_variable_extra_pedido();
  	this.result_pedido.id_pedido=pedido.id_pedido;
  	this.result_pedido.id_establecimiento=pedido.id_establecimiento;
  	this.result_pedido.detalles_direccion_entrega=pedido.detalles_direccion_entrega;
  	this.result_pedido.detalles_direccion_establecimiento=pedido.detalles_direccion_establecimiento;
  	this.result_pedido.direccion_entrega=pedido.direccion_entrega;
  	this.result_pedido.direccion_establecimiento=pedido.direccion_establecimiento;
  	this.result_pedido.fecha=pedido.fecha;
  	this.result_pedido.hora_entrega=pedido.hora_entrega;
  	this.result_pedido.lat_lng_direccion_entrega=pedido.lat_lng_direccion_entrega;
  	this.result_pedido.lat_lng_establecimiento=pedido.lat_lng_establecimiento;
  	this.result_pedido.nombre_establecimiento=pedido.nombre_establecimiento;
  	this.result_pedido.nombre_usuario=pedido.nombre_usuario;
  	this.result_pedido.token_usuario=pedido.token_usuario;
  	this.result_pedido.total_precio=pedido.total_precio;
  	console.log(this.result_pedido);
    this.variable_token_repartidor=this.pr_pedido.get_varibale_token_repartidor();
    console.log(this.variable_token_repartidor);
    this.variable_status_pedido=this.pr_pedido.get_variable_status_pedido();
    
  }
  mensaje_repartidor(){
    let _token_usuario=this.pr_pedido.get_token_repartidor_pedido_seleccionado();
    let _id_pedido=this.result_pedido.id_pedido;
     let prompt = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
           let _mensaje=data.txt_mensaje;
           console.log(_mensaje);
            this.pr_mensaje.enviar_mensaje_repartidor(_token_usuario,_id_pedido,_mensaje).subscribe(
               pr_mensaje => {
                 let _titulo='Mensaje a repartidor';
                 let _mensaje='El mensaje fue enviado';
                 this.alert_toast.show_alert(_titulo,_mensaje);
                  console.log("REGISTRO EXISTE");
               },
               err => {console.log("NO EXISTE REGISTRO");
               },
             );

          }
        }
      ]
    });
    prompt.present();
  }
  mensaje_cliente(){
    let _token_usuario=this.result_pedido.token_usuario;
    let _id_pedido=this.result_pedido.id_pedido;
     let prompt = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
           let _mensaje=data.txt_mensaje;
           console.log(_mensaje);
            this.pr_mensaje.enviar_mensaje_cliente(_token_usuario,_id_pedido,_mensaje).subscribe(
               pr_mensaje => {
                 let _titulo='Mensaje a cliente';
                 let _mensaje='El mensaje fue enviado';
                 this.alert_toast.show_alert(_titulo,_mensaje);
                  console.log("REGISTRO EXISTE");
               },
               err => {console.log("NO EXISTE REGISTRO");
               },
             );

          }
        }
      ]
    });
    prompt.present();
  }


}
