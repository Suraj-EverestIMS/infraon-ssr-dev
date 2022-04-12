import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-itim-website-url-monitoring',
  templateUrl: './itim-website-url-monitoring.component.html',
  styleUrls: ['./itim-website-url-monitoring.component.css']
})
export class ItimWebsiteUrlMonitoringComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
