import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-infinity-server-and-applications-management',
  templateUrl: './infinity-server-and-applications-management.component.html',
  styleUrls: ['./infinity-server-and-applications-management.component.css']
})
export class InfinityServerAndApplicationsManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
