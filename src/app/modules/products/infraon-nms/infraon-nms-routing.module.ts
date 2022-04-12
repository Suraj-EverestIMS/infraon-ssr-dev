import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonNmsComponent } from './infraon-nms.component';
import { NmsNetworkDiscoveryComponent } from './nms-network-discovery/nms-network-discovery.component';
import { NmsNetworkEventManagementComponent } from './nms-network-event-management/nms-network-event-management.component';
import { NmsNetworkFaultManagementComponent } from './nms-network-fault-management/nms-network-fault-management.component';
import { NmsNetworkInventoryManagementComponent } from './nms-network-inventory-management/nms-network-inventory-management.component';
import { NmsNetworkSlaManagementComponent } from './nms-network-sla-management/nms-network-sla-management.component';
import { NmsNpmComponent } from './nms-npm/nms-npm.component';
import { NmsQualityOfServiceComponent } from './nms-quality-of-service/nms-quality-of-service.component';
import { NmsReportsDashboardComponent } from './nms-reports-dashboard/nms-reports-dashboard.component';

const routes: Routes = [
  {
    path : '', component : InfraonNmsComponent,
    children : [
      { path : '', component: HomepageComponent },
      { path : 'features/network-discovery', component: NmsNetworkDiscoveryComponent },
      { path : 'features/network-performence-management', component: NmsNpmComponent },
      { path : 'features/network-fault-management', component: NmsNetworkFaultManagementComponent },
      { path : 'features/network-event-management', component: NmsNetworkEventManagementComponent },
      { path : 'features/network-inventory-management', component: NmsNetworkInventoryManagementComponent },
      { path : 'features/nms-reports-dashboard', component: NmsReportsDashboardComponent },
      { path : 'features/quality-of-service', component: NmsQualityOfServiceComponent },
      { path : 'features/network-sla-management', component: NmsNetworkSlaManagementComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonNmsRoutingModule { }
