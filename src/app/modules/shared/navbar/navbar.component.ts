import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  private sidebarVisible: boolean = false;

  constructor(
    private router: Router,
    private elem : ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scroll, true); //third parameter
    }

    this.router.events
    .subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationEnd) {
        this.setNavbarStyle()
      }
    });
  }

  setNavbarStyle(){
    if (isPlatformBrowser(this.platformId)) {
      let url = this.router.url
      let pageType = localStorage.getItem('pageType')
      let navBar = this.elem.nativeElement.querySelector('.navbar-sec');
      let navbar_menu_box = this.elem.nativeElement.querySelector('.navbar-menu-box');
      let home = this.elem.nativeElement.querySelector('.home');
      let platform = this.elem.nativeElement.querySelector('.platform');
      let prod = this.elem.nativeElement.querySelector('.prod');
      let resources = this.elem.nativeElement.querySelector('.resources');
      let company = this.elem.nativeElement.querySelector('.company');
      let support = this.elem.nativeElement.querySelector('.support');
      setTimeout(() => {
        let type = localStorage.getItem('pageType')
        if (type ==='product') {
          navBar.classList.remove('sticky');
          navbar_menu_box.classList.add('translatex');
        } else {
          navBar.classList.add('sticky')
          navbar_menu_box.classList.remove('translatex');
        } 
        
        if (localStorage.getItem('isHomepage')) {
          home.style.fontWeight = "bolder"
          platform.style.fontWeight = "400"
          prod.style.fontWeight = "400"
          resources.style.fontWeight = "400"
          company.style.fontWeight = "400"
          support.style.fontWeight = "400"
        } 
        else if (url.includes('infraon-infinity') ) {
          platform.style.fontWeight = "bolder";
          home.style.fontWeight = "400"
          prod.style.fontWeight = "400"
          resources.style.fontWeight = "400"
          company.style.fontWeight = "400"
          support.style.fontWeight = "400"
        }
        else if (url.includes('resources') ) {
          resources.style.fontWeight = "bolder";
          platform.style.fontWeight = "400";
          home.style.fontWeight = "400"
          prod.style.fontWeight = "400"
          company.style.fontWeight = "400"
          support.style.fontWeight = "400"
        }
        else if (url.includes('support') ) {
          support.style.fontWeight = "bolder"
          resources.style.fontWeight = "400";
          platform.style.fontWeight = "400";
          home.style.fontWeight = "400"
          prod.style.fontWeight = "400"
          company.style.fontWeight = "400"
        }
        else if (url.includes('company') ) {
          company.style.fontWeight = "bolder"
          resources.style.fontWeight = "400";
          platform.style.fontWeight = "400";
          home.style.fontWeight = "400"
          prod.style.fontWeight = "400"
          support.style.fontWeight = "400";
        }
        else if (!url.includes('infraon-infinity') && pageType == 'product') {
          prod.style.fontWeight = "bolder";
          resources.style.fontWeight = "400";
          platform.style.fontWeight = "400";
          home.style.fontWeight = "400"
          company.style.fontWeight = "400"
          support.style.fontWeight = "400";
        }
      });
    }
  }

  ngAfterViewInit(): void {
    let allLinks = this.elem.nativeElement.querySelectorAll('.main-navbar-links');
    let m_link = this.elem.nativeElement.querySelectorAll('.m-link');
    let m_links = this.elem.nativeElement.querySelectorAll('.m-links');
    let prod_drp = this.elem.nativeElement.querySelector('.prod-drp');
    let res_drp = this.elem.nativeElement.querySelector('.res-drp');
    let mainLinks = this.elem.nativeElement.querySelectorAll('.product-link');
    let links = this.elem.nativeElement.querySelectorAll('.non-dropdown');
    let navBar = this.elem.nativeElement.querySelector('.navbar-sec');
    let element = this.elem.nativeElement.querySelector('.dropdown-container');
    let prod = this.elem.nativeElement.querySelector('.product-container');
    let res = this.elem.nativeElement.querySelector('.resource-container');
    let container = this.elem.nativeElement.querySelectorAll('.menu-container');
    let prodArrow = this.elem.nativeElement.querySelector('.prod-arrow');
    let resArrow = this.elem.nativeElement.querySelector('.res-arrow');
    let mprodArrow = this.elem.nativeElement.querySelector('.m-prod-arrow');
    let mresArrow = this.elem.nativeElement.querySelector('.m-res-arrow');
    let dropDown = this.elem.nativeElement.querySelectorAll('.dropdown-links');
    let height;
    let bottom;
    let direction: number;

    for (let i = 0; i < dropDown.length; i++) {
      dropDown[i].addEventListener("mouseover", ()=>{
        
        container.forEach((e: { classList: { add: (arg0: string) => void; }; }) => {
          e.classList.add('slideDown');
        });
        if (i == 0) {
          height = (prod.clientHeight).toString()
          prod.classList.add('fadeIn');
          res.classList.remove('fadeIn');
          prodArrow.classList.add('transform-180');
          resArrow.classList.remove('transform-180');
          element.style.height = height + "px";
        } else {
          height = (res.clientHeight).toString()
          prodArrow.classList.remove('transform-180');
          resArrow.classList.add('transform-180');
          prod.classList.remove('fadeIn');
          res.classList.add('fadeIn');
          element.style.height = height + "px";
        }
      })

      element.addEventListener('mouseleave', (e:MouseEvent) => {
        bottom = prod.childNodes[0].offsetHeight
        var y = e.clientY;
        if (y > bottom) {
            setTimeout(() => {
              element.style.height = "0px";
              container.forEach((e: { classList: { remove: (arg0: string) => void; }; }) => {
                e.classList.remove('slideDown');
              });
              prodArrow.classList.remove('transform-180');
              resArrow.classList.remove('transform-180');
            }, 800);
        }
      });
    }
    

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('mouseenter', () => {
        setTimeout(() => {
          element.style.height = "0px";
          container.forEach((e: { classList: { remove: (arg0: string) => void; }; }) => {
            e.classList.remove('slideDown');
          });
          prodArrow.classList.remove('transform-180');
          resArrow.classList.remove('transform-180');
        }, 300);
      });
    }

    for (let i = 0; i < mainLinks.length; i++) {
      mainLinks[i].addEventListener('click', () => {    
        setTimeout(() => {
          element.style.height = "0px";
          container.forEach((e: { classList: { remove: (arg0: string) => void; }; }) => {
            e.classList.remove('slideDown');
          });
          prodArrow.classList.remove('transform-180');
          resArrow.classList.remove('transform-180');
        }, 300);
      });
    }

    for (let i = 0; i < allLinks.length; i++) {
      allLinks[i].addEventListener('click', () => {
        console.log("log-====================================");
            
        setTimeout(() => {
          element.style.height = "0px";
          container.forEach((e: { classList: { remove: (arg0: string) => void; }; }) => {
            e.classList.remove('slideDown');
          });
          prodArrow.classList.remove('transform-180');
          resArrow.classList.remove('transform-180');
        }, 300);
      });
    }

    for (let i = 0; i < m_link.length; i++) {
      m_link[i].addEventListener("click", ()=>{
        if (i == 0) {
          if (direction === 1) {
            direction = -1
            prod_drp.style.height = "0";
            mprodArrow.classList.remove('transform-180');
          } else {
            direction = 1
            res_drp.style.height = "0";
            mresArrow.classList.remove('transform-180');
            mprodArrow.classList.add('transform-180');
            prod_drp.style.height = "15rem";
          }
        } else {
          if (direction === 1) {
            direction = -1
            res_drp.style.height = "0";
            mresArrow.classList.remove('transform-180');
          } else {
            direction = 1
            prod_drp.style.height = "0";
            mprodArrow.classList.remove('transform-180');
            mresArrow.classList.add('transform-180');
            res_drp.style.height = "auto";
          }
        }
      })
    }

    for (let i = 0; i < m_links.length; i++) {
      m_links[i].addEventListener('click', () => {    
        this.sidebarToggle();
      });
    }
  }

  sidebarOpen() {
    if (isPlatformBrowser(this.platformId)) {
      let toggleButton = this.elem.nativeElement.querySelectorAll('.navbar-toggler');
      let sidebar = this.elem.nativeElement.querySelectorAll('.sidebar');
      let backdrop = this.elem.nativeElement.querySelectorAll('.backdrop');
      setTimeout(function(){
          // toggleButton.classList.add('toggled');
      }, 500);
      this.sidebarVisible = true;
      toggleButton[0].classList.add('move-right')
      sidebar[0].classList.add('slide-in')
      backdrop[0].classList.add('fade-in')
      console.log('log');
      
      // $('.backdrop').fadeIn('swing');
      // $('.navbar-toggler').addClass('swing');
      // $('body').css('overflow','hidden');
    }
  };
  sidebarClose() {
    if (isPlatformBrowser(this.platformId)) {
      let toggleButton = this.elem.nativeElement.querySelectorAll('.navbar-toggler');
      let sidebar = this.elem.nativeElement.querySelectorAll('.sidebar');
      let backdrop = this.elem.nativeElement.querySelectorAll('.backdrop');
        this.sidebarVisible = false;
        toggleButton[0].classList.remove('move-right')
        sidebar[0].classList.remove('slide-in')
        backdrop[0].classList.remove('fade-in')
    }
  };
  sidebarToggle() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
      setTimeout(() => {
          // $('.bar1').toggleClass('bar1-animate')
          // $('.bar2Main').toggleClass('d-none')
          // $('.bar3').toggleClass('bar2-animate')
      }, 500);
    }
  };
  
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scroll, true);
    }
  }

  scroll = (event: any): void => {
    // console.log(event);
    let prodArrow = this.elem.nativeElement.querySelector('.prod-arrow');
    let resArrow = this.elem.nativeElement.querySelector('.res-arrow');
    let dropDown = this.elem.nativeElement.querySelectorAll('.menu-container');
    let element = this.elem.nativeElement.querySelector('.dropdown-container');
    dropDown.forEach((e: { classList: { remove: (arg0: string, arg1: string) => void; }; }) => {
      e.classList.remove('slideDown','fadeIn');
    });
    element.style.height = "0px";
    prodArrow.classList.remove('transform-180')
    resArrow.classList.remove('transform-180')
  };
}
