import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  partners = [
    { url : './../../.../../../../../assets/img/partners/airtel.png'},
    { url : './../../.../../../../../assets/img/partners/blackbox.png'},
    { url : './../../.../../../../../assets/img/partners/bsnl.png'},
    { url : './../../.../../../../../assets/img/partners/cloudnine.png'},
    { url : './../../.../../../../../assets/img/partners/dvoise.svg'},
    { url : './../../.../../../../../assets/img/partners/fedbank.png'},
    { url : './../../.../../../../../assets/img/partners/Geojit.png'},
    { url : './../../.../../../../../assets/img/partners/Maxis.png'},
    { url : './../../.../../../../../assets/img/partners/paytm.png'},
    { url : './../../.../../../../../assets/img/partners/sebi.svg'},
    { url : './../../.../../../../../assets/img/partners/tcs.png'},
    { url : './../../.../../../../../assets/img/partners/Udaan.png'}
  ]
  constructor(
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    @Inject(PLATFORM_ID) private platformId: any,
    ) {
      this.titleService.setTitle('Network Configuration and Change Management Software(NCCM) - Infraon')
      this._metaTagService.updateTag({ name: 'title', content: 'Network Configuration and Change Management Software(NCCM) - Infraon' });
      this._metaTagService.updateTag({ name: 'description', content: 'Network Configuration and Change Management Software(NCCM) - Save time and reduce configuration errors, adhere to network compliances.' });
      this._canonical.updateCanonicalUrl('https://infraon.io/infraon-nccm');
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('pageType', "product")
      }
    }

  ngOnInit(): void {
  }

}