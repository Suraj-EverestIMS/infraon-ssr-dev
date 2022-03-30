import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonUptimeRoutingModule } from './infraon-uptime-routing.module';
import { InfraonUptimeComponent } from './infraon-uptime.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonUptimeComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonUptimeRoutingModule
  ]
})
export class InfraonUptimeModule { }
