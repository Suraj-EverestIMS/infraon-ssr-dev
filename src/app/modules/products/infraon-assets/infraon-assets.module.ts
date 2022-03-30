import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonAssetsRoutingModule } from './infraon-assets-routing.module';
import { InfraonAssetsComponent } from './infraon-assets.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    InfraonAssetsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    InfraonAssetsRoutingModule
  ]
})
export class InfraonAssetsModule { }
