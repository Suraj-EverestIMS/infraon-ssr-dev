import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonInfinityRoutingModule } from './infraon-infinity-routing.module';
import { InfraonInfinityComponent } from './infraon-infinity.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonInfinityComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonInfinityRoutingModule
  ]
})
export class InfraonInfinityModule { }
