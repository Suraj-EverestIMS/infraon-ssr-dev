import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { default as data } from './../../../_data/footer-data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerTitle: any;
  footer_btn : string = 'Early bird access';
  @Input() footer_title: any;
  pathname!: string;
  
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.changeFooterTitle()
      }
    });
   }

  ngOnInit(): void {}

  
  changeFooterTitle(){
    this.pathname = this.router.url;
    console.log(this.pathname);
    
    if(this.pathname.includes('infinity')){
      this.footerTitle = data.footer_title.infinityTitle
    }
    else if (this.pathname.includes("contact-us")) {
      this.footerTitle = data.footer_title.contact_us
    } 
    else if (this.pathname.includes("infraon-secura")) {
      this.footerTitle = data.footer_title.securaTitle
    } 
    else if(this.pathname.includes("infraon-assets")) {
      this.footerTitle = data.footer_title.assetTitle
    } 
    else if (this.pathname.includes("infraon-helpdesk")){
      this.footerTitle = data.footer_title.helpdeskTitle
    } 
    else if (this.pathname.includes("infraon-itsm")) {
      this.footerTitle = data.footer_title.itsmTitle
    }
    else if (this.pathname.includes("infraon-uptime")) {
      this.footerTitle = data.footer_title.uptimeTitle
    }
    else if (this.pathname.includes("infraon-nms")) {
      this.footerTitle = data.footer_title.nmsTitle
    }
    else if (this.pathname.includes("infraon-itim")) {
      this.footerTitle = data.footer_title.itimTitle
    }
    else if (this.pathname.includes("itim-features")) {
      this.footerTitle = data.footer_title.itimFeatureTitle
    }
    else if (this.pathname.includes("infraon-nccm")) {
      this.footerTitle = data.footer_title.nccmTitle
    }
    else if (this.pathname.includes("infraon-aiops")) {
      this.footerTitle = data.footer_title.aiopsTitle
    }
    else if (this.pathname.includes("infraon-bot")) {
      this.footerTitle = data.footer_title.botTitle
    }
    else if (this.pathname.includes("infraon-desk")) {
      this.footerTitle = data.footer_title.deskTitle
      console.log(this.footerTitle);
      
    }
    else if (this.pathname.includes("infraon-oss")) {
      this.footerTitle = data.footer_title.ossTitle
    }
    else if (this.pathname.includes("iotsm")) {
      this.footerTitle = data.footer_title.unmsTitle
    }
    else {
      this.footerTitle = data.footer_title.contact_us
    }

    if(this.pathname.match('aiops') || this.pathname.match('infraon-desk') || this.pathname.match('nccm') || this.pathname.match('oss') || this.pathname.match('secura')){
      this.footer_btn = 'Talk to us'
    } else {
      this.footer_btn = 'Early bird access' 
    }
    
    // if(this.pathname.includes('error')){
    //   // $('footer').css('background-color', '#4bafac')
    //   var bottom = $('.footer-main').offset().top + $('.footer-main').outerHeight();
    //   // console.log(bottom);
    //   $('body').css('height', '100vh')
    //   $('body').css('overflow', 'hidden')
    //   $('footer').hide()
    // } else {
    //   // $('footer').css('background-color', '#ffffff')
    //   $('body').css('height', '100%')
    //   $('body').css('overflow', 'auto')
    //   $('footer').show()
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("changed ---------------------------------------- "+this.footer_title);
    this.footerTitle = this.footer_title
  }

}
