import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../components/products/products.component';
import { ProductDataService } from './product-data.service';
import {  HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ProductDataService]
})
export class ProductsModule { }
