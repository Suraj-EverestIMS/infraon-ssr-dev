import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-itsm-workflow-automation',
  templateUrl: './itsm-workflow-automation.component.html',
  styleUrls: ['./itsm-workflow-automation.component.css']
})
export class ItsmWorkflowAutomationComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
