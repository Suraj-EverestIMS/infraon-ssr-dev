import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-helpdesk-reporting-and-analysis',
  templateUrl: './helpdesk-reporting-and-analysis.component.html',
  styleUrls: ['./helpdesk-reporting-and-analysis.component.css']
})
export class HelpdeskReportingAndAnalysisComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
