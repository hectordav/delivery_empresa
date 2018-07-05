import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

/*
  Generated class for the PrProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrProductosProvider {
	principal_url:string;
	producto:any;
  constructor(public http: Http, public ruta:PrrutasProvider) {
    this.principal_url=this.ruta.get_ruta();
  }
  set_producto(value){
  	this.producto=value;
  }
  get_producto(){
  	return this.producto;
  }
  get_productos_id_empresa(datos){
    var variable_2=JSON.stringify(datos);
  	var url = this.principal_url+'producto_establecimiento/get_producto_id_establecimiento';
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }
  get_categoria_id_rubro(datos){
    var variable_2=JSON.stringify(datos);
    var url = this.principal_url+'categoria/get_categoria_id_rubro';
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }
  guardar_producto(datos){
    var variable_2=JSON.stringify(datos);
    var url = this.principal_url+'producto_establecimiento/guardar_producto';
    var response = this.http.post(url,variable_2).map(res => res.json());
    return response;
  }

}
