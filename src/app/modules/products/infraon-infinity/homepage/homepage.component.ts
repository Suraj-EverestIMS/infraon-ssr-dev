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
    @Inject(PLATFORM_ID) private platformId: any,
    ) {
      this.titleService.setTitle('Infraon Infinity')
      this._metaTagService.updateTag({ name: 'title', content: 'Infraon Infinity' });
      this._metaTagService.updateTag({ name: 'description', content: 'Infraon Infinity' });
      this._canonical.updateCanonicalUrl('https://infraon.io/infraon-infinity');      
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('pageType', "product")
      }
    }

  ngOnInit(): void {
  }

}
