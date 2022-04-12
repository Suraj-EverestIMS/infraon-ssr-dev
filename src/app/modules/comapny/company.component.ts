import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(
    private titleService : Title,
    private _metaTagService : Meta,
    private _canonical : CanonicalService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { 
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "non-product")
    }
    this.titleService.setTitle('About Us | Infraon')
    this._metaTagService.updateTag({ name: 'title', content: 'About Us | Infraon' });
    this._metaTagService.updateTag({ name: 'description', content: 'Know more about us.' });
    this._canonical.updateCanonicalUrl('https://infraon.io/company');
  }

  ngOnInit(): void {
  }

}
