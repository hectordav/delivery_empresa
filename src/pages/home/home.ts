import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrPedidosProvider}from '../../providers/pr-pedidos/pr-pedidos';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
import {PrAlertToastProvider}from '../../providers/pr-alert-toast/pr-alert-toast';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	result_pedidos:any;
	id_empresa:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_pedidos:PrPedidosProvider, public pr_login:PrloginProvider, public alert_toast:PrAlertToastProvider) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.pedidos_pendientes();
  }*/
  ionViewDidEnter(){
   this.pedidos_pendientes(); 
  }

  pedidos_pendientes(){
    let data=JSON.parse(localStorage.getItem('delivery_empresa'));
    this.pr_login.set_inicio_sesion(data);
    console.log(data);
    let data_empresa={
      id_empresa:''
    }
     for(let value of data) {
      data_empresa.id_empresa=value.id_empresa;
     }
      this.pr_pedidos.get_pedidos_id_empresa(data_empresa).subscribe(
  	     pr_pedidos => {/*<----*/
           let pedidos=pr_pedidos;
           let mensaje=pedidos.mensaje;      
           if(mensaje=='pedidos NO existen') {
             let mensaje_2='No existen pedidos pendientes';
             this.alert_toast.mensaje_toast_pie(mensaje_2);
           }else{
             this.result_pedidos=pedidos.data;
             console.log(this.result_pedidos);
           }
  	        console.log("REGISTRO EXISTE pr_pedidos");
  	     },
  	     err => {console.log("NO EXISTE REGISTRO");
  	     },
  	   );
  }
   ver_pedido(item){
    let _id_pedido=item.id_pedido;
    this.pr_pedidos.set_result_pedido(item);
    let mensaje='Cargando detalle de pedido';
    this.alert_toast.show_loading(mensaje);
     this.pr_pedidos.get_det_pedido_id_pedido(_id_pedido).subscribe(
        pr_pedido => {
          let result_det_pedido=pr_pedido;
          this.pr_pedidos.set_result_det_pedido(result_det_pedido);
           console.log("REGISTRO EXISTE");
           this.pr_pedidos.get_extra_det_pedido_id_pedido(_id_pedido).subscribe(
              pr_pedidos => {
                let result_extra_pedido=pr_pedidos;
                let mensaje=result_extra_pedido.mensaje;
                 console.log("REGISTRO EXISTE pr_pedidos");
                if(mensaje=='Existe extra pedido') {
                  let data=result_extra_pedido.data;
                  this.pr_pedidos.set_variable_extra_pedido(1);
                  this.pr_pedidos.set_result_extra_pedido(data);
                  this.alert_toast.dismis_loading();
                }else{
                  this.pr_pedidos.set_variable_extra_pedido(0);
                  this.alert_toast.dismis_loading();
                }
                /*el token del repartidor*/
                 this.pr_pedidos.get_token_usuario_repartidor_id_pedido(_id_pedido).subscribe(
                    pr_pedidos => {
                      let result_token=pr_pedidos;
                      let mensaje=result_token.mensaje;
                      console.log(_id_pedido);
                      if(mensaje=='no existe repartidor asignado') {
                        let mensaje='Este pedido no tiene un repartidor asignado';
                        this.alert_toast.mensaje_toast_pie(mensaje);
                        this.pr_pedidos.set_varibale_token_repartidor(0);
                        this.navCtrl.push('PedidoVerPage');
                      }else{
                        let data=result_token.data;
                        this.pr_pedidos.set_token_repartidor_pedido_seleccionado(data);
                        this.pr_pedidos.set_varibale_token_repartidor(1);
                        this.navCtrl.push('PedidoVerPage');
                       console.log("REGISTRO EXISTE pr_pedidos");
                      }
                    },
                    err => {console.log("NO EXISTE REGISTRO");
                    },
                  );
                /*************************/
              },
              err => {console.log("NO EXISTE REGISTRO");
              },
            );
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }

}
