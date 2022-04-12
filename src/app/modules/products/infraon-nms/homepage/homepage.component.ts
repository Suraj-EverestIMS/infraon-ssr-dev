import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    @Inject(PLATFORM_ID) private platformId: any
    ) {
      this.titleService.setTitle('Network Performance Monitoring (NMS) Tool | Infraon NMS')
      this._metaTagService.updateTag({ name: 'title', content: 'Network Performance Monitoring (NMS) Tool | Infraon NMS' });
      this._metaTagService.updateTag({ name: 'description', content: 'Network Performance Monitoring Tool - Infraon NMS is an integrated SaaS-based network monitoring system that can monitor multi-vendor network devices with inbuilt incident management capabilities. Boost your network performance with Infraon NMS.' });
      this._canonical.updateCanonicalUrl('https://infraon.io/infraon-nms');      
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('pageType', "product")
      } 
    }

  ngOnInit(): void {
  }


}
