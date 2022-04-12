import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-itsm-catalogue-management',
  templateUrl: './itsm-catalogue-management.component.html',
  styleUrls: ['./itsm-catalogue-management.component.css']
})
export class ItsmCatalogueManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) { 
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
