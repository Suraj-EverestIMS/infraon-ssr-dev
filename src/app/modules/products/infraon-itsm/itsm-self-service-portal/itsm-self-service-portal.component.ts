import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-itsm-self-service-portal',
  templateUrl: './itsm-self-service-portal.component.html',
  styleUrls: ['./itsm-self-service-portal.component.css']
})
export class ItsmSelfServicePortalComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
