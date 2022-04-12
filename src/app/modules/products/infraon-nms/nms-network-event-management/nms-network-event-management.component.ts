import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-nms-network-event-management',
  templateUrl: './nms-network-event-management.component.html',
  styleUrls: ['./nms-network-event-management.component.css']
})
export class NmsNetworkEventManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
