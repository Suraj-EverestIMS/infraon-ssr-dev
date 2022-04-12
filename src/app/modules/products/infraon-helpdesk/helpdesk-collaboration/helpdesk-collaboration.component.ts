import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-helpdesk-collaboration',
  templateUrl: './helpdesk-collaboration.component.html',
  styleUrls: ['./helpdesk-collaboration.component.css']
})
export class HelpdeskCollaborationComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
