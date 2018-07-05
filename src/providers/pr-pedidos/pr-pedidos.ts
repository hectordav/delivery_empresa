import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';


@Injectable()
export class PrPedidosProvider {
	principal_url:string;
  result_pedido:any;
  result_det_pedido:any;
  result_extra_pedido:any;
  variable_extra_pedido:any;
  token_repartidor_pedido_seleccionado:any;
  varibale_token_repartidor:any;
  variable_status_pedido:any;
  constructor(public http: Http,public ruta:PrrutasProvider) {
  	this.principal_url=this.ruta.get_ruta();
  }
  set_result_pedido(value){
    this.result_pedido=value;
  }
  get_result_pedido(){
    return this.result_pedido;
  }
  set_result_det_pedido(value){
    this.result_det_pedido=value;
  }
  get_result_det_pedido(){
    return this.result_det_pedido;
  }
  set_result_extra_pedido(value){
    this.result_extra_pedido=value;
  }
  get_result_extra_pedido(){
    return this.result_extra_pedido;
  }
  set_variable_extra_pedido(value){
    this.variable_extra_pedido=value;
  }
  get_variable_extra_pedido(){
    return this.variable_extra_pedido;
  }
  set_token_repartidor_pedido_seleccionado(value){
    this.token_repartidor_pedido_seleccionado=value;
  }
  get_token_repartidor_pedido_seleccionado(){
    return this.token_repartidor_pedido_seleccionado;
  }
  set_varibale_token_repartidor(value){
    this.varibale_token_repartidor=value;
  }
  get_varibale_token_repartidor(){
    return this.varibale_token_repartidor;
  }
  set_variable_status_pedido(value){
    this.variable_status_pedido=value;
  }
  get_variable_status_pedido(){
    return this.variable_status_pedido;
  }
  get_pedidos_id_empresa(datos){
    var variable_2=JSON.stringify(datos);
    var url = this.principal_url+'entrega_pedido/get_pedidos_id_empresa';
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }
  get_historial_pedidos_id_empresa(datos){
    var variable_2=JSON.stringify(datos);
  	var url = this.principal_url+'entrega_pedido/get_historial_pedidos_id_empresa';
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }
   get_det_pedido_id_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/get_det_pedido_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }
  get_extra_det_pedido_id_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/get_extra_det_pedido_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }
  get_token_usuario_repartidor_id_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/get_token_usuario_repartidor_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }
  cambiar_status_pedido_establecimiento(_id_pedido,_id_status_pedido,token_cliente,mensaje){
    var variable_2=JSON.stringify({id_pedido:_id_pedido,id_status_pedido:_id_status_pedido,token_cliente:token_cliente, mensaje:mensaje});
    var url = this.principal_url+'pedido/cambiar_status_pedido_establecimiento';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response; 
  }

}
