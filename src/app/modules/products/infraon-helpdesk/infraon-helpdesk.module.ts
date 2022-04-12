import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonHelpdeskRoutingModule } from './infraon-helpdesk-routing.module';
import { InfraonHelpdeskComponent } from './infraon-helpdesk.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { HelpdeskSupportTicketManagementComponent } from './helpdesk-support-ticket-management/helpdesk-support-ticket-management.component';
import { HelpdeskCollaborationComponent } from './helpdesk-collaboration/helpdesk-collaboration.component';
import { HelpdeskReportingAndAnalysisComponent } from './helpdesk-reporting-and-analysis/helpdesk-reporting-and-analysis.component';
import { HelpdeskExternalIntegrationComponent } from './helpdesk-external-integration/helpdesk-external-integration.component';
import { HelpdeskWorkflowAutomationComponent } from './helpdesk-workflow-automation/helpdesk-workflow-automation.component';


@NgModule({
  declarations: [
    InfraonHelpdeskComponent,
    HomepageComponent,
    HelpdeskSupportTicketManagementComponent,
    HelpdeskCollaborationComponent,
    HelpdeskReportingAndAnalysisComponent,
    HelpdeskExternalIntegrationComponent,
    HelpdeskWorkflowAutomationComponent
  ],
  imports: [
    CommonModule,
    InfraonHelpdeskRoutingModule,
    LoaderModule,
    CarouselModule,
    ProductNavbarModule
  ]
})
export class InfraonHelpdeskModule { }
