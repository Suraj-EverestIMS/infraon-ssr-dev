import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    LoaderModule,
    FormsModule,
    NgSelectModule,
    Ng2SearchPipeModule
  ]
})
export class ResourcesModule { }
