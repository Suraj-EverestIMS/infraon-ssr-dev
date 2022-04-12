import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonOssComponent } from './infraon-oss.component';

const routes: Routes = [
  { 
    path : '', component: InfraonOssComponent,
    children : [
      { path : '', component: HomepageComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonOssRoutingModule { }
