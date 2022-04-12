import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-helpdesk-support-ticket-management',
  templateUrl: './helpdesk-support-ticket-management.component.html',
  styleUrls: ['./helpdesk-support-ticket-management.component.css']
})
export class HelpdeskSupportTicketManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
