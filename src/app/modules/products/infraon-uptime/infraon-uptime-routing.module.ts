import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceAvailibilityComponent } from './device-availibility/device-availibility.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonUptimeComponent } from './infraon-uptime.component';
import { NetworkInventoryManagementComponent } from './network-inventory-management/network-inventory-management.component';
import { WebsiteMonitoringComponent } from './website-monitoring/website-monitoring.component';

const routes: Routes = [
  { 
    path : '', component: InfraonUptimeComponent,
    children: [
      { path : '', component: HomepageComponent },
      { path : 'features/device-availability', component: DeviceAvailibilityComponent },
      { path : 'features/inventory-management', component: NetworkInventoryManagementComponent },
      { path : 'features/website-monitoring', component: WebsiteMonitoringComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonUptimeRoutingModule { }
