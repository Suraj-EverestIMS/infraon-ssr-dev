import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonImsRoutingModule } from './infraon-ims-routing.module';
import { InfraonImsComponent } from './infraon-ims.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';


@NgModule({
  declarations: [
    InfraonImsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonImsRoutingModule,
    ProductNavbarModule,
    CarouselModule,
    LoaderModule
  ]
})
export class InfraonImsModule { }
