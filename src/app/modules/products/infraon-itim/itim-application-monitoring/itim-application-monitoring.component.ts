import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-itim-application-monitoring',
  templateUrl: './itim-application-monitoring.component.html',
  styleUrls: ['./itim-application-monitoring.component.css']
})
export class ItimApplicationMonitoringComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
