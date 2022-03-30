import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraonItimComponent } from './infraon-itim.component';
import { InfraonItimRoutingModule } from './infraon-itim-routing.module';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [InfraonItimComponent, HomepageComponent],
  imports: [
    CommonModule,
    InfraonItimRoutingModule
  ]
})
export class InfraonItimModule { }
