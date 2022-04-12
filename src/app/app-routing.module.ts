import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  // infinity
  { path: '', loadChildren: () => import('./modules/homepage/homepage.module').then( e => e.HomepageModule ) },
  
  //products
  { path: 'infraon-assets', loadChildren: () => import('./modules/products/infraon-assets/infraon-assets.module').then( e => e.InfraonAssetsModule ) },
  { path: 'infraon-uptime', loadChildren: () => import('./modules/products/infraon-uptime/infraon-uptime.module').then( e => e.InfraonUptimeModule ) },
  { path: 'infraon-itim', loadChildren: () => import('./modules/products/infraon-itim/infraon-itim.module').then( e => e.InfraonItimModule ) },
  { path: 'infraon-nms', loadChildren: () => import('./modules/products/infraon-nms/infraon-nms.module').then( e => e.InfraonNmsModule ) },
  { path: 'infraon-nccm', loadChildren: () => import('./modules/products/infraon-nccm/infraon-nccm.module').then( e => e.InfraonNccmModule ) },
  { path: 'infraon-aiops', loadChildren: () => import('./modules/products/infraon-aiops/infraon-aiops.module').then( e => e.InfraonAiopsModule ) },
  { path: 'infraon-helpdesk', loadChildren: () => import('./modules/products/infraon-helpdesk/infraon-helpdesk.module').then( e => e.InfraonHelpdeskModule ) },
  { path: 'infraon-itsm', loadChildren: () => import('./modules/products/infraon-itsm/infraon-itsm.module').then( e => e.InfraonItsmModule ) },
  { path: 'infraon-desk', loadChildren: () => import('./modules/products/infraon-desk/infraon-desk.module').then( e => e.InfraonDeskModule ) },
  { path: 'infraon-secura', loadChildren: () => import('./modules/products/infraon-secura/infraon-secura.module').then( e => e.InfraonSecuraModule ) },
  { path: 'infraon-oss', loadChildren: () => import('./modules/products/infraon-oss/infraon-oss.module').then( e => e.InfraonOssModule ) },
  { path: 'infraon-ims', loadChildren: () => import('./modules/products/infraon-ims/infraon-ims.module').then( e => e.InfraonImsModule ) },
  { path: 'infraon-infinity', loadChildren: () => import('./modules/products/infraon-infinity/infraon-infinity.module').then( e => e.InfraonInfinityModule ) },

  // single pages
  { path: 'company', loadChildren: () => import('./modules/comapny/comapny.module').then ( e => e.ComapnyModule) },
  { path: 'contact-us', loadChildren: () => import('./modules/contact-us/contact-us.module').then ( e => e.ContactUsModule)  },
  { path: 'resources/:type', loadChildren: () => import('./modules/resources/resources.module').then ( e => e.ResourcesModule)  },
  { path: 'support', loadChildren: () => import('./modules/support/support.module').then ( e => e.SupportModule)  },
  { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }