import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonSecuraComponent } from './infraon-secura.component';

const routes: Routes = [
  { 
    path : '', component: InfraonSecuraComponent,
    children : [
      { path : '', component: HomepageComponent } 
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonSecuraRoutingModule { }
