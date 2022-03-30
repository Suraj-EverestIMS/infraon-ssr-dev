import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonOssRoutingModule } from './infraon-oss-routing.module';
import { InfraonOssComponent } from './infraon-oss.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonOssComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonOssRoutingModule
  ]
})
export class InfraonOssModule { }
