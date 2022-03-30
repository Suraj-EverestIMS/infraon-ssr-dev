import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonNccmRoutingModule } from './infraon-nccm-routing.module';
import { InfraonNccmComponent } from './infraon-nccm.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonNccmComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonNccmRoutingModule
  ]
})
export class InfraonNccmModule { }
