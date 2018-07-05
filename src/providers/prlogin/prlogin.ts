import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrloginProvider {
	principal_url:string;
	variable_token: any;
  variable_serial: any;
  variable_inicio_sesion:any;
  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
    console.log('Hello PrloginProvider Provider');
    this.principal_url=this.ruta.get_ruta();
  }
    /*el serial*/
  set_serial(value) {
    this.variable_serial = value;
  }
  /*obtengo el serial*/
  get_serial() {
    return this.variable_serial;
  }
  set_inicio_sesion(value) {
    this.variable_inicio_sesion = value;
  }
  get_inicio_sesion() {
    return this.variable_inicio_sesion;
  }
  /*el token del push*/
  setToken(value) {
    this.variable_token = value;
  }
  /*obtengo el push y lo comparo con el guardado */
  getToken() {
    return this.variable_token;
  }
  login_manual(login,clave,token,serial){
    var variable_2=JSON.stringify({login:login,clave:clave,token:token,serial:serial});
    var url = this.principal_url+'login/login_manual';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  login_empresa(login,clave,token,serial){
    var variable_2=JSON.stringify({login:login,clave:clave,token:token,serial:serial});
    var url = this.principal_url+'login/login_empresa';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
    
  }

}
