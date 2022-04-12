import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonAssetsRoutingModule } from './infraon-assets-routing.module';
import { InfraonAssetsComponent } from './infraon-assets.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { HamComponent } from './ham/ham.component';
import { SamComponent } from './sam/sam.component';
import { ItamComponent } from './itam/itam.component';


@NgModule({
  declarations: [
    InfraonAssetsComponent,
    HomepageComponent,
    HamComponent,
    SamComponent,
    ItamComponent
  ],
  imports: [
    CommonModule,
    InfraonAssetsRoutingModule,
    ProductNavbarModule,
    CarouselModule,
    LoaderModule
  ]
})
export class InfraonAssetsModule { }
