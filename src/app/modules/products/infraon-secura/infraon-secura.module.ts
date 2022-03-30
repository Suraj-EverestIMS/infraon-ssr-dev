import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonSecuraRoutingModule } from './infraon-secura-routing.module';
import { InfraonSecuraComponent } from './infraon-secura.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonSecuraComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonSecuraRoutingModule
  ]
})
export class InfraonSecuraModule { }
