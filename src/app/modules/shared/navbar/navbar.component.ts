import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {

  
  constructor(
    private elem : ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scroll, true); //third parameter
    }
  }

  ngAfterViewInit(): void {
    let links = this.elem.nativeElement.querySelectorAll('.non-dropdown');
    let element = this.elem.nativeElement.querySelector('.dropdown-section');
    let prod = this.elem.nativeElement.querySelector('.product-container');
    let res = this.elem.nativeElement.querySelector('.resource-container');
    let prodArrow = this.elem.nativeElement.querySelector('.prod-arrow');
    let resArrow = this.elem.nativeElement.querySelector('.res-arrow');
    let dropDown = this.elem.nativeElement.querySelectorAll('.dropdown-links');
    let height;
    let bottom;

    for (let i = 0; i < dropDown.length; i++) {
      dropDown[i].addEventListener("mouseover", ()=>{
        prod.classList.add('slideDown');
        res.classList.add('slideDown');
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
        // console.log('mouse', bottom, y);
  
        if (y > bottom) {
            // console.log(y, bottom);
            setTimeout(() => {
              element.style.height = "0px";
              prod.classList.remove('slideDown');
              res.classList.remove('slideDown');
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
          prod.classList.remove('slideDown');
          res.classList.remove('slideDown');
          prodArrow.classList.remove('transform-180');
          resArrow.classList.remove('transform-180');
        }, 300);
      });
    }
  }
  
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
    let element = this.elem.nativeElement.querySelector('.dropdown-section');
    dropDown.forEach((e: { classList: { remove: (arg0: string, arg1: string) => void; }; }) => {
      e.classList.remove('slideDown','fadeIn');
    });
    element.style.height = "0px";
    prodArrow.classList.remove('transform-180')
    resArrow.classList.remove('transform-180')
  };
}
