import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-infintiy-it-event-management',
  templateUrl: './infintiy-it-event-management.component.html',
  styleUrls: ['./infintiy-it-event-management.component.css']
})
export class InfintiyItEventManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
