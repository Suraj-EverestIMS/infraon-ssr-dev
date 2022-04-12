import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonNccmComponent } from './infraon-nccm.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { 
    path : '', component: InfraonNccmComponent,
    children : [
      { path : '', component: HomepageComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonNccmRoutingModule { }
