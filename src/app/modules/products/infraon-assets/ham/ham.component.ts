import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-ham',
  templateUrl: './ham.component.html',
  styleUrls: ['./ham.component.css']
})
export class HamComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('pageType', "product")
  }}

  ngOnInit(): void {
  }

}
