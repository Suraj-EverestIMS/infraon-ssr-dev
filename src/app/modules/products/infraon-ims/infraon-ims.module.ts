import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonImsRoutingModule } from './infraon-ims-routing.module';
import { InfraonImsComponent } from './infraon-ims.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonImsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonImsRoutingModule
  ]
})
export class InfraonImsModule { }
