import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonItsmRoutingModule } from './infraon-itsm-routing.module';
import { InfraonItsmComponent } from './infraon-itsm.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductNavbarModule } from 'src/app/_directives/product-navbar/product-navbar.module';
import { ItsmEventManagementComponent } from './itsm-event-management/itsm-event-management.component';
import { ItsmSelfServicePortalComponent } from './itsm-self-service-portal/itsm-self-service-portal.component';
import { ItsmCatalogueManagementComponent } from './itsm-catalogue-management/itsm-catalogue-management.component';
import { ItsmWorkflowAutomationComponent } from './itsm-workflow-automation/itsm-workflow-automation.component';
import { ItsmServiceDeskComponent } from './itsm-service-desk/itsm-service-desk.component';


@NgModule({
  declarations: [
    InfraonItsmComponent,
    ItsmEventManagementComponent,
    HomepageComponent,
    ItsmSelfServicePortalComponent,
    ItsmCatalogueManagementComponent,
    ItsmWorkflowAutomationComponent,
    ItsmServiceDeskComponent
  ],
  imports: [
    CommonModule,
    InfraonItsmRoutingModule,
    LoaderModule,
    CarouselModule,
    ProductNavbarModule
  ]
})
export class InfraonItsmModule { }
