import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PrrutasProvider {
	 principal_url:string='http://mimandadero.com/delivery_rest/';
	 ruta_imagen:string='http://mimandadero.com/delivery_web/assets/img/';


  constructor(public http: HttpClient) {
    console.log('Hello PrrutasProvider Provider');
  }
   get_ruta() {
    return this.principal_url;
  }
  get_ruta_imagen() {
    return this.ruta_imagen;
  }

}
