import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonDeskRoutingModule } from './infraon-desk-routing.module';
import { InfraonDeskComponent } from './infraon-desk.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';


@NgModule({
  declarations: [
    InfraonDeskComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonDeskRoutingModule,
    ProductNavbarModule,
    CarouselModule,
    LoaderModule
  ]
})
export class InfraonDeskModule { }
