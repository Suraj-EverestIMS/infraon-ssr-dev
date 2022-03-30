import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonNmsRoutingModule } from './infraon-nms-routing.module';
import { InfraonNmsComponent } from './infraon-nms.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonNmsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonNmsRoutingModule
  ]
})
export class InfraonNmsModule { }
