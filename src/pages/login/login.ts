import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/providers';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  cuenta:any={
  correo:'',
  pass:'',
  token:'',
  serial:''};
  result_login:any;
  constructor(public navCtrl: NavController,public user: User,public toastCtrl: ToastController,public translateService: TranslateService,public prlogin:PrloginProvider) {
  }


    // Attempt to login in through our User service
  public login_manual(){
    let login=this.cuenta.correo;
    let pass= this.cuenta.pass;
    let token='1';/*this.prlogin.getToken();*/
    let serial='1';/*this.prlogin.get_serial();*/
     this.prlogin.login_empresa(login,pass,token,serial).subscribe(
        login => {
        this.result_login=login;
         let mensaje=this.result_login.mensaje;
         let data=this.result_login.data;
         let data_empresa=this.result_login.data_empresa;
         console.log(mensaje);
         if(mensaje=='usuario NO existe') {
           let mensaje='Login y contraseña no validos';
           this.loading_toast(mensaje);
         }else{
            let id_usuario;
            let nombre;
            let login;
            let id_nivel;
            let id_cliente;
            let cedula_cliente;
            let direccion;
            let telf;
            for(let value of data) {
             id_usuario=value.id_usuario;
             nombre=value.nombre;
             login=value.login;
             id_nivel=value.id_nivel;
             id_cliente=value.id_cliente;
             cedula_cliente=value.cedula_cliente;
             direccion=value.direccion;
             telf=value.telf;
            }
           if(id_nivel==1 || id_nivel==2|| id_nivel==4) {
             let mensaje='Debes ser un Usuario de Empresa para iniciar sesion';
             this.loading_toast(mensaje);
           }else{
             this.prlogin.set_inicio_sesion(data);
             localStorage.setItem('delivery_empresa',JSON.stringify(data))
             localStorage.setItem('data_empresa',JSON.stringify(data_empresa))
             this.navCtrl.setRoot('HomePage');
           }
           console.log('entra en el else');
         }
        },
        err => {console.log(err);
        },
      );
  }
  loading_toast(valor){
    let toast = this.toastCtrl.create({
        message: valor,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }
}
