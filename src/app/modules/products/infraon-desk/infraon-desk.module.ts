import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonDeskRoutingModule } from './infraon-desk-routing.module';
import { InfraonDeskComponent } from './infraon-desk.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonDeskComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonDeskRoutingModule
  ]
})
export class InfraonDeskModule { }
