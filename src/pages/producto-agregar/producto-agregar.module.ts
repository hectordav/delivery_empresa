import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoAgregarPage } from './producto-agregar';

@NgModule({
  declarations: [
    ProductoAgregarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoAgregarPage),
  ],
})
export class ProductoAgregarPageModule {}
