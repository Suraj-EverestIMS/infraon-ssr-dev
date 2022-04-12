import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-infintiy-workflow-automation',
  templateUrl: './infintiy-workflow-automation.component.html',
  styleUrls: ['./infintiy-workflow-automation.component.css']
})
export class InfintiyWorkflowAutomationComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
