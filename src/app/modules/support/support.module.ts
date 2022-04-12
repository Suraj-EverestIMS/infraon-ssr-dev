import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    LoaderModule,
    ProductNavbarModule
  ]
})
export class SupportModule { }
