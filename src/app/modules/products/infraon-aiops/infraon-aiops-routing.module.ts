import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonAiopsComponent } from './infraon-aiops.component';

const routes: Routes = [
  {
    path: '',
    component: InfraonAiopsComponent,
    children : [
      { path : '', component: HomepageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonAiopsRoutingModule { }
