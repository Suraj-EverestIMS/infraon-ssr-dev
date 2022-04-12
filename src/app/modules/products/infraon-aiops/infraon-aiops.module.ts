import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonAiopsRoutingModule } from './infraon-aiops-routing.module';
import { InfraonAiopsComponent } from './infraon-aiops.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';


@NgModule({
  declarations: [
    InfraonAiopsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonAiopsRoutingModule,
    ProductNavbarModule,
    CarouselModule,
    LoaderModule
  ]
})
export class InfraonAiopsModule { }
