import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComapnyRoutingModule } from './comapny-routing.module';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    ComapnyRoutingModule
  ]
})
export class ComapnyModule { }
