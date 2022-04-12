import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonNccmRoutingModule } from './infraon-nccm-routing.module';
import { InfraonNccmComponent } from './infraon-nccm.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';


@NgModule({
  declarations: [
    InfraonNccmComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonNccmRoutingModule,
    LoaderModule,
    CarouselModule,
    ProductNavbarModule
  ]
})
export class InfraonNccmModule { }
