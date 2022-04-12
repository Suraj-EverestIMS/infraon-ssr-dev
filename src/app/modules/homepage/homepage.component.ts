import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, Event, NavigationEnd, } from '@angular/router';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { StateService } from 'src/app/_services/state.service';
import { isPlatformBrowser } from '@angular/common';

import { default as data } from './../../_data/homepage-data.json';
import { default as testimonals } from './../../_data/textimonials.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit, OnDestroy {
  map: any;
  header_title_black : any;
  header_title_blue : any;
  header_desc : any;
  header_img : any;
  main_feature_1_heading : any;
  main_feature_1_desc_1 : any;
  main_feature_1_desc_2 : any;
  main_feature_1_img : any;
  main_feature_1_ill : any;
  main_feature_1_feature_img : any;
  main_feature_1_feature_1 : any;
  main_feature_1_feature_2 : any;
  main_feature_1_feature_3 : any;
  main_feature_2_img : any;
  main_feature_2_ill : any;
  gartner_quote : any;
  product_heading : any;
  
  isEnterprise: boolean = false;
  isTelecom: boolean = false;
  isSme: boolean = false;
  public footerTitle: string = 'Ready to Embark on Scalable Digital Transformation Journeys?';

  msg: { id: string; msg: string; sender: string; company: string; }[] = [];

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
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(
    private renderer: Renderer2, 
    private elem: ElementRef,
    private router: Router,
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    @Inject(PLATFORM_ID) private platformId: any,
    ) {
      this.titleService.setTitle('IT Infrastructure Management Software Products | Infraon Products');
      this._metaTagService.updateTag({ name: 'title', content: 'IT Infrastructure Management Software Products | Infraon Products' });
      this._metaTagService.updateTag({ name: 'description', content: 'Infraon suite of products caters to IT, Access, Processes, Services and Compliance help to accelerate efficiency and productivity.' });
      this._canonical.updateCanonicalUrl('https://infraon.io/');      
    }

  ngOnInit(): void {
    // document.getElementsByClassName('homepage')
    // let elements = this.elem.nativeElement.querySelector('.homepage')
    // elements.style.color = 'red'
    this._stateService.pageType("non-product");
    this.detectChange();
    this.map = this.router.url
    this.isSme = true
    this.msg = testimonals.smeTestimonials

    this.header_title_black = data.sme[0].header_title_black
    this.header_title_blue = data.sme[0].header_title_blue
    this.header_desc = data.sme[0].header_desc
    this.header_img = data.sme[0].header_img
    this.main_feature_1_heading = data.sme[0].main_feature_1_heading
    this.main_feature_1_desc_1 = data.sme[0].main_feature_1_desc_1
    this.main_feature_1_desc_2 = data.sme[0].main_feature_1_desc_2
    this.main_feature_1_img = data.sme[0].main_feature_1_img
    this.main_feature_1_ill = data.sme[0].main_feature_1_ill
    this.main_feature_1_feature_img = data.sme[0].main_feature_1_feature_img
    this.main_feature_1_feature_1 = data.sme[0].main_feature_1_feature_1
    this.main_feature_1_feature_2 = data.sme[0].main_feature_1_feature_2
    this.main_feature_1_feature_3 = data.sme[0].main_feature_1_feature_3
    this.main_feature_2_img = data.sme[0].main_feature_2_img
    this.main_feature_2_ill = data.sme[0].main_feature_2_ill
    this.gartner_quote = data.sme[0].gartner_quote
    this.product_heading = data.sme[0].product_heading
    
    console.log(data.sme[0]);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pageType', "non-product")
      localStorage.setItem('isHomepage', "true")
    }
  }

  ngAfterViewInit(): void {
    // let element = this.elem.nativeElement.querySelector('.homepage');
    // element.style.color = 'red'
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.map = event.url
        console.log(this.map);
        
      }
    })

    let links = this.elem.nativeElement.querySelectorAll('.homepage-links');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', () => {
        links.forEach((e:any) => {
          e.classList.remove('container__item_active')
        });
        links[i].classList.add('container__item_active')

        if (i == 0) {
          this.footerTitle = 'Ready to Embark on Scalable Digital Transformation Journeys?';
          this.detectChange()
          this.isSme = true;
          this.isEnterprise = false;
          this.isTelecom = false;
          this.header_title_black = data.sme[0].header_title_black
          this.header_title_blue = data.sme[0].header_title_blue
          this.header_desc = data.sme[0].header_desc
          this.header_img = data.sme[0].header_img
          this.main_feature_1_heading = data.sme[0].main_feature_1_heading
          this.main_feature_1_desc_1 = data.sme[0].main_feature_1_desc_1
          this.main_feature_1_desc_2 = data.sme[0].main_feature_1_desc_2
          this.main_feature_1_img = data.sme[0].main_feature_1_img
          this.main_feature_1_ill = data.sme[0].main_feature_1_ill
          this.main_feature_1_feature_img = data.sme[0].main_feature_1_feature_img
          this.main_feature_1_feature_1 = data.sme[0].main_feature_1_feature_1
          this.main_feature_1_feature_2 = data.sme[0].main_feature_1_feature_2
          this.main_feature_1_feature_3 = data.sme[0].main_feature_1_feature_3
          this.main_feature_2_img = data.sme[0].main_feature_2_img
          this.main_feature_2_ill = data.sme[0].main_feature_2_ill
          this.gartner_quote = data.sme[0].gartner_quote
          this.product_heading = data.sme[0].product_heading
          this.msg = testimonals.smeTestimonials
        } else if (i == 1) {
          this.footerTitle = 'Looking to Mitigate Remote Access Risks & Overcome IT Obstacles from One Place?'
          this.detectChange()
          this.isSme = false;
          this.isEnterprise = true
          this.isTelecom = false;
          this.header_title_black = data.enterprise[0].header_title_black
          this.header_title_blue = data.enterprise[0].header_title_blue
          this.header_desc = data.enterprise[0].header_desc
          this.header_img = data.enterprise[0].header_img
          this.main_feature_1_heading = data.enterprise[0].main_feature_1_heading
          this.main_feature_1_desc_1 = data.enterprise[0].main_feature_1_desc_1
          this.main_feature_1_desc_2 = data.enterprise[0].main_feature_1_desc_2
          this.main_feature_1_img = data.enterprise[0].main_feature_1_img
          this.main_feature_1_ill = data.enterprise[0].main_feature_1_ill
          this.main_feature_1_feature_img = data.enterprise[0].main_feature_1_feature_img
          this.main_feature_1_feature_1 = data.enterprise[0].main_feature_1_feature_1
          this.main_feature_1_feature_2 = data.enterprise[0].main_feature_1_feature_2
          this.main_feature_1_feature_3 = data.enterprise[0].main_feature_1_feature_3
          this.main_feature_2_img = data.enterprise[0].main_feature_2_img
          this.main_feature_2_ill = data.enterprise[0].main_feature_2_ill
          this.gartner_quote = data.enterprise[0].gartner_quote
          this.product_heading = data.enterprise[0].product_heading
          this.msg = testimonals.entTestimonials
        } else {
          this.footerTitle = 'Eager to Reduce The Complexities of Managing Multiple Technologies/Vendors?';
          this.detectChange()
          this.isSme = false;
          this.isEnterprise = false;
          this.isTelecom = true;
          this.header_title_black = data.telecom[0].header_title_black
          this.header_title_blue = data.telecom[0].header_title_blue
          this.header_desc = data.telecom[0].header_desc
          this.header_img = data.telecom[0].header_img
          this.main_feature_1_heading = data.telecom[0].main_feature_1_heading
          this.main_feature_1_desc_1 = data.telecom[0].main_feature_1_desc_1
          this.main_feature_1_desc_2 = data.telecom[0].main_feature_1_desc_2
          this.main_feature_1_img = data.telecom[0].main_feature_1_img
          this.main_feature_1_ill = data.telecom[0].main_feature_1_ill
          this.main_feature_1_feature_img = data.telecom[0].main_feature_1_feature_img
          this.main_feature_1_feature_1 = data.telecom[0].main_feature_1_feature_1
          this.main_feature_1_feature_2 = data.telecom[0].main_feature_1_feature_2
          this.main_feature_1_feature_3 = data.telecom[0].main_feature_1_feature_3
          this.main_feature_2_img = data.telecom[0].main_feature_2_img
          this.main_feature_2_ill = data.telecom[0].main_feature_2_ill
          this.gartner_quote = data.telecom[0].gartner_quote
          this.product_heading = data.telecom[0].product_heading
          this.msg = testimonals.telTestimonials
        }
      });
    }
  }

  detectChange(){
    this._stateService.sendData(this.footerTitle);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isHomepage')
    }
  }
}
