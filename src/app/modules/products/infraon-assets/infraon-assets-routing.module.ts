import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamComponent } from './ham/ham.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfraonAssetsComponent } from './infraon-assets.component';
import { ItamComponent } from './itam/itam.component';
import { SamComponent } from './sam/sam.component';

const routes: Routes = [
  {
    path: '', component : InfraonAssetsComponent,
    children : [
      { path : '', component: HomepageComponent },
      { path : 'features/hardware-assets-management', component: HamComponent },
      { path : 'features/software-assets-management', component: SamComponent },
      { path : 'features/it-assets-management', component: ItamComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonAssetsRoutingModule { }
