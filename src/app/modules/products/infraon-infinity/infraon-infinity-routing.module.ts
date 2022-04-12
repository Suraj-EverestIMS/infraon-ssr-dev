import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfinityServerAndApplicationsManagementComponent } from './infinity-server-and-applications-management/infinity-server-and-applications-management.component';
import { InfintiyHamComponent } from './infintiy-ham/infintiy-ham.component';
import { InfintiyIncidentFaultManagementComponent } from './infintiy-incident-fault-management/infintiy-incident-fault-management.component';
import { InfintiyItEventManagementComponent } from './infintiy-it-event-management/infintiy-it-event-management.component';
import { InfintiyKnowledgeBaseManagementComponent } from './infintiy-knowledge-base-management/infintiy-knowledge-base-management.component';
import { InfintiyNetworkTopologyComponent } from './infintiy-network-topology/infintiy-network-topology.component';
import { InfintiySamComponent } from './infintiy-sam/infintiy-sam.component';
import { InfintiySlaManagementComponent } from './infintiy-sla-management/infintiy-sla-management.component';
import { InfintiyTicketManagementComponent } from './infintiy-ticket-management/infintiy-ticket-management.component';
import { InfintiyWorkflowAutomationComponent } from './infintiy-workflow-automation/infintiy-workflow-automation.component';
import { InfraonInfinityComponent } from './infraon-infinity.component';

const routes: Routes = [
  {
    path: '', component: InfraonInfinityComponent,
    children : [
      { path : '', component: HomepageComponent },
      { path : 'features/it-event-management', component: InfintiyItEventManagementComponent },
      { path : 'features/incident-fault-management', component: InfintiyIncidentFaultManagementComponent },
      { path : 'features/hardware-asset-management', component: InfintiyHamComponent },
      { path : 'features/sla-management', component: InfintiySlaManagementComponent },
      { path : 'features/software-asset-management', component: InfintiySamComponent },
      { path : 'features/workflow-automation', component: InfintiyWorkflowAutomationComponent },
      { path : 'features/ticket-management', component: InfintiyTicketManagementComponent },
      { path : 'features/knowledge-base-management', component: InfintiyKnowledgeBaseManagementComponent },
      { path : 'features/network-topology', component: InfintiyNetworkTopologyComponent },
      { path : 'features/server-and-applications-management', component: InfinityServerAndApplicationsManagementComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonInfinityRoutingModule { }
