import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoHistorialPage } from './pedido-historial';

@NgModule({
  declarations: [
    PedidoHistorialPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoHistorialPage),
  ],
})
export class PedidoHistorialPageModule {}
