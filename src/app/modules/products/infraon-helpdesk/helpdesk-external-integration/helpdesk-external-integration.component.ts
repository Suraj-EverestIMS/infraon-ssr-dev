import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-helpdesk-external-integration',
  templateUrl: './helpdesk-external-integration.component.html',
  styleUrls: ['./helpdesk-external-integration.component.css']
})
export class HelpdeskExternalIntegrationComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
