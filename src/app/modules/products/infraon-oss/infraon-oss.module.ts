import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonOssRoutingModule } from './infraon-oss-routing.module';
import { InfraonOssComponent } from './infraon-oss.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonNccmRoutingModule } from '../infraon-nccm/infraon-nccm-routing.module';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';


@NgModule({
  declarations: [
    InfraonOssComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonOssRoutingModule,
    InfraonNccmRoutingModule,
    LoaderModule,
    CarouselModule,
    ProductNavbarModule
  ]
})
export class InfraonOssModule { }
