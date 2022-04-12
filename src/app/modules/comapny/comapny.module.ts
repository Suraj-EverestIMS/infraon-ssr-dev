import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComapnyRoutingModule } from './comapny-routing.module';
import { CompanyComponent } from './company.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';


@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    ComapnyRoutingModule,
    LoaderModule
  ]
})
export class ComapnyModule { }
