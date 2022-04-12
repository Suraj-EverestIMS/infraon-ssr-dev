import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraonItimComponent } from './infraon-itim.component';
import { InfraonItimRoutingModule } from './infraon-itim-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { ItimEventManagementComponent } from './itim-event-management/itim-event-management.component';
import { ItimApplicationMonitoringComponent } from './itim-application-monitoring/itim-application-monitoring.component';
import { ItimApiMonitoringComponent } from './itim-api-monitoring/itim-api-monitoring.component';
import { ItimFaultManagementComponent } from './itim-fault-management/itim-fault-management.component';
import { ItimInventoryManagementComponent } from './itim-inventory-management/itim-inventory-management.component';
import { ItimNetworkMonitoringComponent } from './itim-network-monitoring/itim-network-monitoring.component';
import { ItimSlaManagementComponent } from './itim-sla-management/itim-sla-management.component';
import { ItimWebsiteUrlMonitoringComponent } from './itim-website-url-monitoring/itim-website-url-monitoring.component';
import { ItimServerMonitoringComponent } from './itim-server-monitoring/itim-server-monitoring.component';
import { ItimReportDashboradComponent } from './itim-report-dashborad/itim-report-dashborad.component';
import { ItimPortMonitoringComponent } from './itim-port-monitoring/itim-port-monitoring.component';


@NgModule({
  declarations: [InfraonItimComponent, HomepageComponent, ItimEventManagementComponent, ItimApplicationMonitoringComponent, ItimApiMonitoringComponent, ItimFaultManagementComponent, ItimInventoryManagementComponent, ItimNetworkMonitoringComponent, ItimSlaManagementComponent, ItimWebsiteUrlMonitoringComponent, ItimServerMonitoringComponent, ItimReportDashboradComponent, ItimPortMonitoringComponent],
  imports: [
    CommonModule,
    InfraonItimRoutingModule,
    LoaderModule,
    CarouselModule,
    ProductNavbarModule
  ]
})
export class InfraonItimModule { }
