import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonItsmRoutingModule } from './infraon-itsm-routing.module';
import { InfraonItsmComponent } from './infraon-itsm.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonItsmComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonItsmRoutingModule
  ]
})
export class InfraonItsmModule { }
