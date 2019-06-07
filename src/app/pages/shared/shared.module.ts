import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerComponent,
    ProductsComponent],
  exports: [
    BannerComponent,
    ProductsComponent
  ]
})
export class SharedModule { }
