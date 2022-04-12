import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-nms-network-sla-management',
  templateUrl: './nms-network-sla-management.component.html',
  styleUrls: ['./nms-network-sla-management.component.css']
})
export class NmsNetworkSlaManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
