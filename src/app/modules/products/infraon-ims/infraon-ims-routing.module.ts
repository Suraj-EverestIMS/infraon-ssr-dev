import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonImsComponent } from './infraon-ims.component';

const routes: Routes = [
  { 
    path : '', 
    component: InfraonImsComponent, 
    children : [
      { path: '', component : HomepageComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonImsRoutingModule { }
