import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-nms-quality-of-service',
  templateUrl: './nms-quality-of-service.component.html',
  styleUrls: ['./nms-quality-of-service.component.css']
})
export class NmsQualityOfServiceComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "product")
    } 
  }

  ngOnInit(): void {
  }

}
