import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonHelpdeskRoutingModule } from './infraon-helpdesk-routing.module';
import { InfraonHelpdeskComponent } from './infraon-helpdesk.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonHelpdeskComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonHelpdeskRoutingModule
  ]
})
export class InfraonHelpdeskModule { }
