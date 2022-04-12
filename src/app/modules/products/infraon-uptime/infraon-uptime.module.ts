import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonUptimeRoutingModule } from './infraon-uptime-routing.module';
import { InfraonUptimeComponent } from './infraon-uptime.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DeviceAvailibilityComponent } from './device-availibility/device-availibility.component';
import { NetworkInventoryManagementComponent } from './network-inventory-management/network-inventory-management.component';
import { WebsiteMonitoringComponent } from './website-monitoring/website-monitoring.component';


@NgModule({
  declarations: [
    InfraonUptimeComponent,
    HomepageComponent,
    DeviceAvailibilityComponent,
    NetworkInventoryManagementComponent,
    WebsiteMonitoringComponent
  ],
  imports: [
    CommonModule,
    InfraonUptimeRoutingModule,
    LoaderModule,
    ProductNavbarModule,
    CarouselModule,
  ]
})
export class InfraonUptimeModule { }
