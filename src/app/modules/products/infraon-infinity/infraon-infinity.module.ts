import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonInfinityRoutingModule } from './infraon-infinity-routing.module';
import { InfraonInfinityComponent } from './infraon-infinity.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InfintiyItEventManagementComponent } from './infintiy-it-event-management/infintiy-it-event-management.component';
import { InfintiyIncidentFaultManagementComponent } from './infintiy-incident-fault-management/infintiy-incident-fault-management.component';
import { InfintiyHamComponent } from './infintiy-ham/infintiy-ham.component';
import { InfintiySamComponent } from './infintiy-sam/infintiy-sam.component';
import { InfintiySlaManagementComponent } from './infintiy-sla-management/infintiy-sla-management.component';
import { InfintiyWorkflowAutomationComponent } from './infintiy-workflow-automation/infintiy-workflow-automation.component';
import { InfintiyTicketManagementComponent } from './infintiy-ticket-management/infintiy-ticket-management.component';
import { InfintiyKnowledgeBaseManagementComponent } from './infintiy-knowledge-base-management/infintiy-knowledge-base-management.component';
import { InfintiyNetworkTopologyComponent } from './infintiy-network-topology/infintiy-network-topology.component';
import { InfinityServerAndApplicationsManagementComponent } from './infinity-server-and-applications-management/infinity-server-and-applications-management.component';


@NgModule({
  declarations: [
    InfraonInfinityComponent,
    HomepageComponent,
    InfintiyItEventManagementComponent,
    InfintiyIncidentFaultManagementComponent,
    InfintiyHamComponent,
    InfintiySamComponent,
    InfintiySlaManagementComponent,
    InfintiyWorkflowAutomationComponent,
    InfintiyTicketManagementComponent,
    InfintiyKnowledgeBaseManagementComponent,
    InfintiyNetworkTopologyComponent,
    InfinityServerAndApplicationsManagementComponent
  ],
  imports: [
    CommonModule,
    InfraonInfinityRoutingModule,
    LoaderModule,
    ProductNavbarModule,
    CarouselModule,
  ]
})
export class InfraonInfinityModule { }
