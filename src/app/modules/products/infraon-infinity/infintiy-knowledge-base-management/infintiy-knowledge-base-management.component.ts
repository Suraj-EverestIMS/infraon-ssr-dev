import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-infintiy-knowledge-base-management',
  templateUrl: './infintiy-knowledge-base-management.component.html',
  styleUrls: ['./infintiy-knowledge-base-management.component.css']
})
export class InfintiyKnowledgeBaseManagementComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
