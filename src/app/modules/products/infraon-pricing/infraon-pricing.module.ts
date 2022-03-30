import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonPricingRoutingModule } from './infraon-pricing-routing.module';
import { InfraonPricingComponent } from './infraon-pricing.component';
import { AssetPricingComponent } from './asset-pricing/asset-pricing.component';
import { HelpdeskPricingComponent } from './helpdesk-pricing/helpdesk-pricing.component';
import { InfinityPricingComponent } from './infinity-pricing/infinity-pricing.component';
import { ItimPricingComponent } from './itim-pricing/itim-pricing.component';
import { ItsmPricingComponent } from './itsm-pricing/itsm-pricing.component';
import { NmsPricingComponent } from './nms-pricing/nms-pricing.component';
import { UptimePricingComponent } from './uptime-pricing/uptime-pricing.component';


@NgModule({
  declarations: [
    InfraonPricingComponent,
    AssetPricingComponent,
    HelpdeskPricingComponent,
    InfinityPricingComponent,
    ItimPricingComponent,
    ItsmPricingComponent,
    NmsPricingComponent,
    UptimePricingComponent
  ],
  imports: [
    CommonModule,
    InfraonPricingRoutingModule
  ]
})
export class InfraonPricingModule { }
