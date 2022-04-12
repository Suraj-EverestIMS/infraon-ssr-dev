import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { default as data } from './../../_data/product-menu.json'

@Component({
  selector: 'product-navbar',
  template : `
    <section class="submenu p-lr-120">
      <nav class="submenu-nav">
        <div class="d-flex justify-content-between align-items-center">
          <a class="d-flex align-items-center" routerLink="{{url}}">
            <div class="d-flex align-items-center prod-logo">
              <img src={{img}} class="d-flex align-items-center prod-logo me-2">
              <p class="prod-menu-name submenu-links text-capitalize mb-0"><span *ngIf="!isScrolled">Infraon</span> {{name}}</p>
            </div>
          </a>
          <i class="fa-solid fa-bars submenu-icon" (click)="menudrop()"></i>
          <div class="prod-menu">
            <ul class="d-flex">
              <li class="p-3 submenu-links menu-active" disabled="true">Home</li>
              <li class="p-3 nav-item subnav-item dropdown" *ngIf="hasFeatures">
                <a class="nav-link submenu-links dropdown-toggle p-0" data-bs-toggle="dropdown">Features</a>
                <ul class="dropdown-menu fade-up py-2">
                  <li class="" *ngFor="let items of featuresList"><a class="dropdown-item product-features-links p-3" routerLink="{{items.routerLink}}"> {{items.name}}</a></li>
                </ul>
              </li>
              <li class="p-3 submenu-links"><a class="" routerLink="/resources/all">Resources</a></li>
              <li class="p-3 submenu-links"><a class="" routerLink="/support">Support</a></li>
              <!--<li class="p-3 submenu-links"><a class="primary-button" routerLink="/contact-us">Get Started</a></li>-->
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <ul class="drp m-submenu bg-white" style="box-shadow:rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;">
            <li class="p-3 text-center submenu-links menu-active" disabled="true">Home</li>
            <li class="p-3 text-center nav-item subnav-item dropdown" (click)="drop()" *ngIf="hasFeatures">
                <a class="m-link">Products <i class="fa-solid fa-chevron-down m-prod-arrow"></i>
                    
                    <ul class="m-dropdown submenu-drp ps-3" style="background: #dddddd7d;">
                        <li *ngFor="let items of featuresList" class="py-2"><a  routerLink="{{items.routerLink}}"> {{items.name}}</a></li>
                    </ul>

                </a>
            </li>
            <li class="p-3 text-center submenu-links"><a routerLink="/resources" class="m-link">Resources</a></li>
            <li class="p-3 text-center submenu-links"><a routerLink="/support" class="m-link">Support</a></li>
        </ul>
  `,
  styles : [
    `
    .prod-menu {
      position: relative;
    }
    .dropdown-menu {
      box-shadow:0 10px 50px 0 rgb(0 0 0 / 20%);
      transition: .3s all;
      top:190%;
    }
    .dropdown-menu:before {
      display: inline-block;
      position: absolute;
      width: 0;
      height: 0;
      vertical-align: middle;
      content: "";
      top: -5px;
      left: 10px;
      right: auto;
      color: #fff;
      border-bottom: 0.4em solid;
      border-right: 0.4em solid transparent;
      border-left: 0.4em solid transparent;
    }
    li {
      cursor: pointer;
    }
    `
  ]
})

export class ProdNavbarComponent implements OnInit{
  @Input() data: any;
  name!:string;
  url!:string;
  img!:string;
  isScrolled : boolean = false;
  featuresList!: { id: number; name: string; routerLink: string; }[];
  hasFeatures: boolean = false;
  pathName!: string;
    direction!: number;
    mdirection!: number;
  
  constructor(
    private elem : ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
    ){}

  ngOnInit(): void {
    this.name = this.data.name
    // this.url = this.data.url
    this.url = '/'
    this.img = this.data.img

    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scroll, true); //third parameter
    }
    this.setNavbarContent()
  }

  menudrop(){
      let drp = this.elem.nativeElement.querySelector('.m-submenu');
      
      if (this.mdirection === 1) {
        this.mdirection = -1
        drp.style.height = "0";
      } else {
        this.mdirection = 1
        drp.style.height = "15rem";
      }
  }

  drop(){
      let drp = this.elem.nativeElement.querySelector('.submenu-drp');
    //   let direction: number;
      console.log('log');
      
      if (this.direction === 1) {
        this.direction = -1
        drp.style.height = "0";
      } else {
        this.direction = 1
        drp.style.height = "15rem";
      }
  }

  setNavbarContent(){
    if (isPlatformBrowser(this.platformId)) {
      let pathname = this.router.url;
      let submenu = this.elem.nativeElement.querySelector('.submenu');
    let submenu_links = this.elem.nativeElement.querySelectorAll('.submenu-links');

      // assets
      if(pathname.includes("assets")) {
          this.featuresList = data.assetsMenu.menus
          
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          
          // this.hasPricing = (pathname.match('/pricing/')) ? false : true
          // this.pricingPathName = "/pricing/assets-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.match("assets-pricing")){
              this.pathName = "/infraon-assets";
              this.url = this.pathName
              // this.isThisHomepage = false;
              // $('.product-home-btn').css('font-weight', 'normal');
          }       
      }

      // uptime
      else if(pathname.includes("uptime")) {
          // this.pathName = "/index"
          // this.isThisHomepage = true;
          // $('.product-home-btn').css('font-weight', 'bold');
          this.featuresList = data.uptimeMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = (pathname.match('/pricing/')) ? false : true
          // this.pricingPathName = "/pricing/uptime-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("uptime-pricing")){
              this.pathName = "/infraon-uptime";
              this.url = this.pathName
              // this.isThisHomepage = false;
              // $('.product-home-btn').css('font-weight', 'normal');
          }
      } 

      // itim
      else if(pathname.includes("itim")) {
          // this.pathName = "/index"
          // this.isThisHomepage = true;
          // $('.product-home-btn').css('font-weight', 'bold');
          this.featuresList = data.itimMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = (pathname.match('/pricing/')) ? false : true
          // this.pricingPathName = "/pricing/itim-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("itim-pricing")){
              this.pathName = "/infraon-itim";
              this.url = this.pathName
          }
      } 

      // nms
      else if(pathname.includes("nms") && !pathname.includes("iotsm")) {
        submenu.classList.add('primary-bg');
        if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0,1);
        }
        submenu_links.forEach((e: any) => {
            e.classList.add('text-white')
        });
          this.featuresList = data.nmsMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = (pathname.match('/pricing/')) ? false : true
          // this.pricingPathName = "/pricing/nms-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("nms-pricing")){
              this.pathName = "/infraon-nms";
              this.url = this.pathName
          }
      }

      // nccm
      else if (pathname.includes("nccm")) {
          this.featuresList = data.nccmMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/nccm-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("nccm-pricing")){
              this.pathName = "/infraon-nccm";
              this.url = this.pathName
          }  
      }  
      
      // aiops
      else if(pathname.includes("aiops")) {
          this.featuresList = data.aiopsMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/aiops-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("aiops-pricing")){
              this.pathName = "/infraon-aiops";
              this.url = this.pathName
          }
      }

      // helpdesk
      else if(pathname.includes("helpdesk")) {
          this.featuresList = data.helpdeskMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = (pathname.match('/pricing/')) ? false : true
          // this.pricingPathName = "/pricing/helpdesk-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("helpdesk-pricing")){
              this.pathName = "/infraon-helpdesk";
              this.url = this.pathName
          }
      } 

      // itsm
      else if(pathname.includes("itsm")) {
          this.featuresList = data.itsmMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = (pathname.match('/pricing/')) ? false : true
          // this.pricingPathName = "/pricing/itsm-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("itsm-pricing")) {
              this.pathName = "/infraon-itsm";
              this.url = this.pathName
          }
      } 

      // desk
      else if(pathname.includes("desk")) {
          this.featuresList = data.deskMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // console.log("lol");
          
          // this.pricingPathName = "/pricing/desk-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("desk-pricing")) {
              this.pathName = "/infraon-desk";
              this.url = this.pathName
          }
      } 

      // bot
      else if(pathname.includes("bot")) {
          this.featuresList = data.botMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/bot-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("bot-pricing")) {
              this.pathName = "/infraon-bot";
              this.url = this.pathName
          }
      } 
      
      // secura
      else if (pathname.includes("secura")) {
          // this.pathName = "/index"  ;
          // this.isThisHomepage = true;
          // $('.product-home-btn').css('font-weight', 'bold');
          this.featuresList = data.securaMenu
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/secura-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("secura-pricing")){
              this.pathName = "/infraon-secura";
              this.url = this.pathName
          }  
      }  
      
      // oss
      else if (pathname.includes("oss")) {
          this.featuresList = data.ossMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/oss-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("oss-pricing")){
              this.pathName = "/infraon-oss";
              this.url = this.pathName
          }  
      }  
      
      // ims
      else if (pathname.includes("ims")) {
          this.featuresList = data.ossMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/oss-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("oss-pricing")){
              this.pathName = "/infraon-ims";
              this.url = this.pathName
          }  
      }  
      
      // unms
      else if (pathname.includes("iotsm")) {
          this.featuresList = data.unmsMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/unms-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("unms-pricing")){
              this.pathName = "/infraon-unms";
              this.url = this.pathName
          }  
      }  
      
      // infinity
      else if (pathname.includes("infinity")) {
          this.featuresList = data.infinityMenu.menus
          if (this.featuresList.length > 0) {
              this.hasFeatures = true 
              if (pathname.match("/pricing/")) {
                  this.hasFeatures = false
              } else {
                  this.hasFeatures = true
              }
          } else {
              this.hasFeatures = false
          }
          // this.hasPricing = (pathname.match('/pricing/')) ? false : true
          // this.hasPricing = false
          // this.pricingPathName = "/pricing/infinity-pricing"
          if(localStorage.getItem('pageType') == 'product-features' || pathname.includes("infinity-pricing")){
              this.pathName = "/infraon-infinity";
              this.url = this.pathName
          }  
      }  

      if(!pathname.includes("nms") && pathname.includes("iotsm")) {
        submenu.classList.remove('primary-bg');
        // subnav_item.classList.remove('text-white')
        submenu_links.forEach((e: any) => {
            e.classList.remove('text-white')
        });
      }
    }
  }


  scroll = (event: any): void => {
    // console.log(event);
    let menuBar = this.elem.nativeElement.querySelector('.submenu');
    let name = this.elem.nativeElement.querySelector('.prod-menu-name');
    let pathname = this.router.url;
      let submenu = this.elem.nativeElement.querySelector('.submenu');
    let submenu_links = this.elem.nativeElement.querySelectorAll('.submenu-links');
    if (isPlatformBrowser(this.platformId)) {
      let elemTop = menuBar.offsetTop;
      if (window.pageYOffset > elemTop) {
        this.isScrolled = true
        this.img = "./../../../assets/img/infinity-logos/web-logo/infraon_logo_product-menu.svg"
        name.style.fontSize = '20px';
        menuBar.classList.add("sticky");
        menuBar.classList.add("bg-white");

        if(pathname.includes("nms") && !pathname.includes("iotsm")) {
            submenu.classList.remove('primary-bg');
            submenu_links.forEach((e: any) => {
                e.classList.remove('text-white')
            });
        }
      } else {
        this.isScrolled = false
        this.img = this.data.img
        name.style.fontSize = '18px';
        menuBar.classList.remove("sticky");
        menuBar.classList.remove("bg-white");
        
        if(pathname.includes("nms") && !pathname.includes("iotsm")) {
            submenu.classList.add('primary-bg');
            submenu_links.forEach((e: any) => {
                e.classList.add('text-white')
            });
        }
      }
    }
  };
  
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scroll, true);
    }
  }
}