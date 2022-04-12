import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-infintiy-incident-fault-management',
  templateUrl: './infintiy-incident-fault-management.component.html',
  styleUrls: ['./infintiy-incident-fault-management.component.css']
})
export class InfintiyIncidentFaultManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
