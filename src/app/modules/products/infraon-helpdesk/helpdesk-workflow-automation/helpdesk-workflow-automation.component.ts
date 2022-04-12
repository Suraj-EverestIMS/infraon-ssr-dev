import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-helpdesk-workflow-automation',
  templateUrl: './helpdesk-workflow-automation.component.html',
  styleUrls: ['./helpdesk-workflow-automation.component.css']
})
export class HelpdeskWorkflowAutomationComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
