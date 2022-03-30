import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonAiopsRoutingModule } from './infraon-aiops-routing.module';
import { InfraonAiopsComponent } from './infraon-aiops.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonAiopsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonAiopsRoutingModule
  ]
})
export class InfraonAiopsModule { }
