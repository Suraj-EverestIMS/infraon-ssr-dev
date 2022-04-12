import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonSecuraRoutingModule } from './infraon-secura-routing.module';
import { InfraonSecuraComponent } from './infraon-secura.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonNccmRoutingModule } from '../infraon-nccm/infraon-nccm-routing.module';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    InfraonSecuraComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonSecuraRoutingModule,
    InfraonNccmRoutingModule,
    LoaderModule,
    CarouselModule,
    ProductNavbarModule,
    NgbAccordionModule
  ]
})
export class InfraonSecuraModule { }
