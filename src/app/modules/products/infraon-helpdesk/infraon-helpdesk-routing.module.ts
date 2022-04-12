import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpdeskCollaborationComponent } from './helpdesk-collaboration/helpdesk-collaboration.component';
import { HelpdeskExternalIntegrationComponent } from './helpdesk-external-integration/helpdesk-external-integration.component';
import { HelpdeskReportingAndAnalysisComponent } from './helpdesk-reporting-and-analysis/helpdesk-reporting-and-analysis.component';
import { HelpdeskSupportTicketManagementComponent } from './helpdesk-support-ticket-management/helpdesk-support-ticket-management.component';
import { HelpdeskWorkflowAutomationComponent } from './helpdesk-workflow-automation/helpdesk-workflow-automation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonHelpdeskComponent } from './infraon-helpdesk.component';

const routes: Routes = [
  {
    path: '', component : InfraonHelpdeskComponent,
    children : [
      { path : '', component: HomepageComponent },
      { path : 'features/collaboration', component: HelpdeskCollaborationComponent },
      { path : 'features/external-integration', component: HelpdeskExternalIntegrationComponent },
      { path : 'features/reporting-and-analysis', component: HelpdeskReportingAndAnalysisComponent },
      { path : 'features/support-ticket-management', component: HelpdeskSupportTicketManagementComponent },
      { path : 'features/workflow-automation', component: HelpdeskWorkflowAutomationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonHelpdeskRoutingModule { }
