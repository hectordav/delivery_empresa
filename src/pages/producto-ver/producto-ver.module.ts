import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoVerPage } from './producto-ver';

@NgModule({
  declarations: [
    ProductoVerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoVerPage),
  ],
})
export class ProductoVerPageModule {}
