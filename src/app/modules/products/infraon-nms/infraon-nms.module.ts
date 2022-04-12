import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonNmsRoutingModule } from './infraon-nms-routing.module';
import { InfraonNmsComponent } from './infraon-nms.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { NmsNetworkDiscoveryComponent } from './nms-network-discovery/nms-network-discovery.component';
import { NmsNpmComponent } from './nms-npm/nms-npm.component';
import { NmsNetworkFaultManagementComponent } from './nms-network-fault-management/nms-network-fault-management.component';
import { NmsNetworkEventManagementComponent } from './nms-network-event-management/nms-network-event-management.component';
import { NmsNetworkInventoryManagementComponent } from './nms-network-inventory-management/nms-network-inventory-management.component';
import { NmsReportsDashboardComponent } from './nms-reports-dashboard/nms-reports-dashboard.component';
import { NmsQualityOfServiceComponent } from './nms-quality-of-service/nms-quality-of-service.component';
import { NmsNetworkSlaManagementComponent } from './nms-network-sla-management/nms-network-sla-management.component';


@NgModule({
  declarations: [
    InfraonNmsComponent,
    HomepageComponent,
    NmsNetworkDiscoveryComponent,
    NmsNpmComponent,
    NmsNetworkFaultManagementComponent,
    NmsNetworkEventManagementComponent,
    NmsNetworkInventoryManagementComponent,
    NmsReportsDashboardComponent,
    NmsQualityOfServiceComponent,
    NmsNetworkSlaManagementComponent
  ],
  imports: [
    CommonModule,
    InfraonNmsRoutingModule,
    LoaderModule,
    CarouselModule,
    ProductNavbarModule
  ]
})
export class InfraonNmsModule { }
