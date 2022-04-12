import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { StateService } from 'src/app/_services/state.service';
import { default as data } from './../../_data/support-data.json';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  data: { id: number; name: string; desc: string; imgUrl: string; email: string; activeLink: boolean; }[];
  
  constructor(
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    @Inject(PLATFORM_ID) private platformId: any,
    ) {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('pageType', "non-product")
      }
      this.titleService.setTitle('Infraon Product Suite')
      this._metaTagService.updateTag({ name: 'title', content: 'Infraon Product Suite' });
      this._metaTagService.updateTag({ name: 'description', content: 'IT Infrastructure Management Software Products.' });
      this._canonical.updateCanonicalUrl('https://infraon.io/support');
      this.data = data.data
    }

  ngOnInit(): void {
  }

}
