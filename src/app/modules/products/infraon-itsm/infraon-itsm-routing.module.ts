import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItsmEventManagementComponent } from './itsm-event-management/itsm-event-management.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonItsmComponent } from './infraon-itsm.component';
import { ItsmSelfServicePortalComponent } from './itsm-self-service-portal/itsm-self-service-portal.component';
import { ItsmCatalogueManagementComponent } from './itsm-catalogue-management/itsm-catalogue-management.component';
import { ItsmWorkflowAutomationComponent } from './itsm-workflow-automation/itsm-workflow-automation.component';
import { ItsmServiceDeskComponent } from './itsm-service-desk/itsm-service-desk.component';

const routes: Routes = [
  {
    path: '', component: InfraonItsmComponent,
    children: [
      { path : '', component: HomepageComponent },
      { path : 'features/event-management', component: ItsmEventManagementComponent },
      { path : 'features/self-service-portal', component: ItsmSelfServicePortalComponent },
      { path : 'features/catalog-management', component: ItsmCatalogueManagementComponent },
      { path : 'features/workflow-automation', component: ItsmWorkflowAutomationComponent },
      { path : 'features/service-desk', component: ItsmServiceDeskComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonItsmRoutingModule { }
