import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonItimComponent } from './infraon-itim.component';
import { ItimApiMonitoringComponent } from './itim-api-monitoring/itim-api-monitoring.component';
import { ItimApplicationMonitoringComponent } from './itim-application-monitoring/itim-application-monitoring.component';
import { ItimEventManagementComponent } from './itim-event-management/itim-event-management.component';
import { ItimFaultManagementComponent } from './itim-fault-management/itim-fault-management.component';
import { ItimInventoryManagementComponent } from './itim-inventory-management/itim-inventory-management.component';
import { ItimNetworkMonitoringComponent } from './itim-network-monitoring/itim-network-monitoring.component';
import { ItimPortMonitoringComponent } from './itim-port-monitoring/itim-port-monitoring.component';
import { ItimReportDashboradComponent } from './itim-report-dashborad/itim-report-dashborad.component';
import { ItimServerMonitoringComponent } from './itim-server-monitoring/itim-server-monitoring.component';
import { ItimSlaManagementComponent } from './itim-sla-management/itim-sla-management.component';
import { ItimWebsiteUrlMonitoringComponent } from './itim-website-url-monitoring/itim-website-url-monitoring.component';

const routes: Routes = [
  { 
    path : '', component: InfraonItimComponent,
    children : [
      { path : '', component: HomepageComponent },
      { path : 'features/it-event-management', component: ItimEventManagementComponent },
      { path : 'features/application-monitoring', component: ItimApplicationMonitoringComponent },
      { path : 'features/api-monitoring', component: ItimApiMonitoringComponent },
      { path : 'features/fault-management', component: ItimFaultManagementComponent },
      { path : 'features/inventory-management', component: ItimInventoryManagementComponent },
      { path : 'features/it-network-monitoring', component: ItimNetworkMonitoringComponent },
      { path : 'features/sla-management', component: ItimSlaManagementComponent },
      { path : 'features/website-url-monitoring', component: ItimWebsiteUrlMonitoringComponent },
      { path : 'features/server-monitoring', component: ItimServerMonitoringComponent },
      { path : 'features/it-report-dashborad', component: ItimReportDashboradComponent },
      { path : 'features/port-monitoring', component: ItimPortMonitoringComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonItimRoutingModule { }
