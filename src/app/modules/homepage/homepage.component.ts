import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, EventEmitter, Output } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, Event, NavigationEnd, } from '@angular/router';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
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
  
  sme = {
    "header_title_black" : "One enterprise-class platform to",
    "header_title_blue" : "Accelerate Your ITOps Modernization",
    "header_desc" : "The Infraon product suite is a transformative gateway for SMEs to improve asset control, manage heterogeneous IT, achieve service efficiency & secure remote access.",
    "header_img" : "assets/img/homepage/Group1880.svg",
    "main_feature_1_heading" : "Infraon Platform – Adopt Future-Readiness At The Right Pace",
    "main_feature_1_desc_1" : "Approach modernization in a phased manner by using the Infraon platform for what your enterprise truly needs.",
    "main_feature_1_desc_2" : "Optimize workforce requirements with automation and leverage the other products as your priorities change. Get freedom from dealing with questions like:",
    "main_feature_1_img" : "assets/img/homepage/sme-about.webp",
    "main_feature_1_ill" : "assets/img/homepage/about1-illustration.svg",
    "main_feature_1_feature_img" : "",
    "main_feature_1_feature_1" : "Can your internal workforce manage all the software without relying on expensive external certified teams?",
    "main_feature_1_feature_2" : "Are different business functions operating at different levels of modernization?",
    "main_feature_1_feature_3" : "Does the lack of UI familiarity and training cause user frustration while switching between solutions?",
    "main_feature_2_img" : "assets/img/homepage/about2-sme.webp",
    "main_feature_2_ill" : "assets/img/homepage/about2-illutration.svg",
    "gartner_quote" : "Improve your operational efficiency by 30-50% using integrated ITOps platform",
    "product_heading" : "Achieve Measurable Business Transformation With A Unified SaaS Suite"
  }
  enterprise = {
    "header_title_black" : "Make IT operations trouble-free",
    "header_title_blue" : "With Superior On-Demand Scalability",
    "header_desc" : "The Infraon product suite follows a phased approach to enable complete enterprise-wide transformation by unlocking the power of Digital Transformation.",
    "header_img" : "assets/img/homepage/Frame1777.svg",
    "main_feature_1_heading" : "Infraon Platform – Elevate Your ITOM & ITSM With AI Power",
    "main_feature_1_desc_1" : "Leverage a one-stop platform equipped with a powerful suite of SaaS products to address specific modernization needs.",
    "main_feature_1_desc_2" : "Take an incremental approach to digital transformation by focusing on immediate priorities. Get answers to tough questions like:",
    "main_feature_1_img" : "assets/img/homepage/enterprise-about.webp",
    "main_feature_1_ill" : "assets/img/homepage/about1-illustration.svg",
    "main_feature_1_feature_img" : "",
    "main_feature_1_feature_1" : "Does the lack of a single integrated system lead to costly and risky ‘rip and replace’ IT projects?",
    "main_feature_1_feature_2" : "Are complex software workflows causing more user headaches – making you wary of tech adoption?",
    "main_feature_1_feature_3" : "Are multiple subscription-based licenses leading to SLA violations and penalties?",
    "main_feature_2_img" : "assets/img/homepage/about2-enterprise.webp",
    "main_feature_2_ill" : "assets/img/homepage/about2-illutration.svg",
    "gartner_quote" : "Reduce your integration time by 40% with the help of integrated platform",
    "product_heading" : "Control When & How To Digitally Transform With An Integrated SaaS Suite"
  }
  telecom = {
    "header_title_black" : "Your single gateway to",
    "header_title_blue" : "Orchestrate & Modernize Telecom Operations",
    "header_desc" : "The Infraon product suite helps telecom service providers to unlock the power of AI, cloud & hyper-automation to manage their infrastructure.",
    "header_img" : "assets/img/homepage/Frame1776.svg",
    "main_feature_1_heading" : "Infraon Platform – Modernize Infrastructure With A Single-Vendor Solution",
    "main_feature_1_desc_1" : "Leverage a unified platform to make key telecom business processes faster, more flexible, and easier to manage. Adopt an incremental approach to modernization with a suite of relevant SaaS products. Find answers to difficult questions like:",
    "main_feature_1_desc_2" : "",
    "main_feature_1_img" : "assets/img/homepage/telecom-about.webp",
    "main_feature_1_ill" : "assets/img/homepage/about1-illustration.svg",
    "main_feature_1_feature_img" : "",
    "main_feature_1_feature_1" : "Are you spending too much money on service and repetitive issues instead of creating extra revenue streams with proactive customer portals?",
    "main_feature_1_feature_2" : "Are you looking for an OSS platform that can be swiftly customized to cater to any of your unique business requirements?",
    "main_feature_1_feature_3" : "Is it difficult to grow your business because of the inability to meet customer or industry demands?",
    "main_feature_2_img" : "assets/img/homepage/about2-telecome.webp",
    "main_feature_2_ill" : "assets/img/homepage/about2-illutration.svg",
    "gartner_quote" : "Reduce your delivery time by 40-60% using integrated platform",
    "product_heading" : "Transform Digitally At Your Best-Suited Pace With A Unified SaaS Suite."
  }
  isEnterprise: boolean = false;
  isTelecom: boolean = false;
  isSme: boolean = false;
  public footerTitle: string = 'Ready to Embark on Scalable Digital Transformation Journeys?';


  smeTestimonials = [
    {
      id : "1",
      msg : "Infraon provides an excellent solution to monitor network and applications. It's very simple to track and resolve any kind of network performance issue. You also get advanced features to monitoring network devices such as router, firewall, switch, and servers.",
      sender : "Technical Manager",
      company : "Professional Services"
    },
    {
      id : "2",
      msg : "Infraon provides an efficient way to manage all the IT infrastructure spread across various geographic locations. In addition, this product suite is highly customizable to suit unique organizational needs. The business-critical reports also help in strategically enhancing the IT infrastructure perspective.",
      sender : "Director",
      company : "IT Services"
    },
    {
      id : "3",
      msg : "Infraon provides a really good automation tool for ITSM efficiency – from incident management and release management to problem handling and capacity management.",
      sender : "Rajesh T",
      company : "Manager"
    },
    {
      id : "4",
      msg : "Infraon IMS provides data accuracy for availability and policy harmonization. Our response time is within 30 minutes for any support. This solution provides alerts immediately, and so, we are within our SLA - giving efficiency to our support.",
      sender : "Maharajan S",
      company : "AVP, Navitas Life Sciences"
    },
    {
      id : "5",
      msg : "Everest solved our biggest problem of frequent unpredictable downtimes by proactively monitoring the health and performance of links & devices. It is simple, robust, easy-to use, scalable as well as very affordable. Coupled with a 24x7 local support team and in-house Everest engineers in the FMS team, Cloudnine’s overall IT Infrastructure efficiency & effectiveness improved drastically",
      sender : "Jitendra",
      company : "Kids Clinic India Pvt. Ltd  (Cloudnine Hospitals)"
    }
  ]
  entTestimonials = [
    {
      id : "6",
      msg : "Lesser time is taken for implementation than other products in similar categories. They also offer very quick turnaround for Day 02 support.",
      sender : "",
      company : "Velosis"
    },
    {
      id : "7",
      msg : "Good statistical reporting and helpful support. The most valuable feature is alerting. We get email alerts when a link is down that tell us which device is having a problem.",
      sender : "Srinivasa Molguri",
      company : "Networking Head, Birla Corporation"
    },
    {
      id : "8",
      msg : "Easy-to-use, good reporting and alerting capabilities, with effective backup, restore, and comparison features.",
      sender : "MD Parvez",
      company : "System Administrator at Toyota Systems Corp "
    },
    {
      id : "9",
      msg : "Everest ensured high service availability across all branches. It is an integrated one-stop solution for performance and server management. Everest provides great flexibility in managing a complex network through its centralized tool. ",
      sender : "Srinivasan",
      company : "Geojit BNP Paribas"
    },
    {
      id : "10",
      msg : "InfraonIMS is an innovative monitoring solution with great features such as individual Tunnel Monitoring, in-depth reporting capabilities and flexible role-based dashboards. Looking at the tool functionality & price point, we went for InfraonIMS solution.",
      sender : "Dariusz Soszynski",
      company : "Sr. Systems Engineer, Blackbox Corporation"
    }
  ]
  telTestimonials = [
    {
      id : "11",
      msg : "Everest IMS is an outstanding infrastructure management solution that helps in managing networks of any scale centrally. With wide range of features and customized dashboards, it's very impressive in terms of performance and presenting vibrant dashboards & reports. A must consideration while evaluating network monitoring tools.",
      sender : "Ramesh K, Manager",
      company: "NOC Shift Telecommunications"
    }
  ]
  msg: { id: string; msg: string; sender: string; company: string; }[] = [];

  customOptions: OwlOptions = {
    autoplay: false,
    loop: true,
    center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 200,
    autoplayTimeout : 10000,
    autoplaySpeed : 200,
    autoplayHoverPause : true,
    navText: ['Prev', 'Next'],
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
    ) {
      this.titleService.setTitle('Infraon Products')
      this._metaTagService.updateTag({ name: 'title', content: 'IT Infrastructure Management Software Products | Infraon Products' });
      this._metaTagService.updateTag({ name: 'description', content: 'Infraon suite of products caters to IT, Access, Processes, Services and Compliance help to accelerate efficiency and productivity.' });
      this._canonical.updateCanonicalUrl('https://infraon.io/');      
    }

  ngOnInit(): void {
    // document.getElementsByClassName('homepage')
    // let elements = this.elem.nativeElement.querySelector('.homepage')
    // elements.style.color = 'red'
    this.detectChange();
    this.map = this.router.url
    this.isSme = true
    this.msg = this.smeTestimonials

    this.header_title_black = this.sme.header_title_black
    this.header_title_blue = this.sme.header_title_blue
    this.header_desc = this.sme.header_desc
    this.header_img = this.sme.header_img
    this.main_feature_1_heading = this.sme.main_feature_1_heading
    this.main_feature_1_desc_1 = this.sme.main_feature_1_desc_1
    this.main_feature_1_desc_2 = this.sme.main_feature_1_desc_2
    this.main_feature_1_img = this.sme.main_feature_1_img
    this.main_feature_1_ill = this.sme.main_feature_1_ill
    this.main_feature_1_feature_img = this.sme.main_feature_1_feature_img
    this.main_feature_1_feature_1 = this.sme.main_feature_1_feature_1
    this.main_feature_1_feature_2 = this.sme.main_feature_1_feature_2
    this.main_feature_1_feature_3 = this.sme.main_feature_1_feature_3
    this.main_feature_2_img = this.sme.main_feature_2_img
    this.main_feature_2_ill = this.sme.main_feature_2_ill
    this.gartner_quote = this.sme.gartner_quote
    this.product_heading = this.sme.product_heading
    
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
          this.header_title_black = this.sme.header_title_black
          this.header_title_blue = this.sme.header_title_blue
          this.header_desc = this.sme.header_desc
          this.header_img = this.sme.header_img
          this.main_feature_1_heading = this.sme.main_feature_1_heading
          this.main_feature_1_desc_1 = this.sme.main_feature_1_desc_1
          this.main_feature_1_desc_2 = this.sme.main_feature_1_desc_2
          this.main_feature_1_img = this.sme.main_feature_1_img
          this.main_feature_1_ill = this.sme.main_feature_1_ill
          this.main_feature_1_feature_img = this.sme.main_feature_1_feature_img
          this.main_feature_1_feature_1 = this.sme.main_feature_1_feature_1
          this.main_feature_1_feature_2 = this.sme.main_feature_1_feature_2
          this.main_feature_1_feature_3 = this.sme.main_feature_1_feature_3
          this.main_feature_2_img = this.sme.main_feature_2_img
          this.main_feature_2_ill = this.sme.main_feature_2_ill
          this.gartner_quote = this.sme.gartner_quote
          this.product_heading = this.sme.product_heading
          this.msg = this.smeTestimonials
        } else if (i == 1) {
          this.footerTitle = 'Looking to Mitigate Remote Access Risks & Overcome IT Obstacles from One Place?'
          this.detectChange()
          this.isSme = false;
          this.isEnterprise = true
          this.isTelecom = false;
          this.header_title_black = this.enterprise.header_title_black
          this.header_title_blue = this.enterprise.header_title_blue
          this.header_desc = this.enterprise.header_desc
          this.header_img = this.enterprise.header_img
          this.main_feature_1_heading = this.enterprise.main_feature_1_heading
          this.main_feature_1_desc_1 = this.enterprise.main_feature_1_desc_1
          this.main_feature_1_desc_2 = this.enterprise.main_feature_1_desc_2
          this.main_feature_1_img = this.enterprise.main_feature_1_img
          this.main_feature_1_ill = this.enterprise.main_feature_1_ill
          this.main_feature_1_feature_img = this.enterprise.main_feature_1_feature_img
          this.main_feature_1_feature_1 = this.enterprise.main_feature_1_feature_1
          this.main_feature_1_feature_2 = this.enterprise.main_feature_1_feature_2
          this.main_feature_1_feature_3 = this.enterprise.main_feature_1_feature_3
          this.main_feature_2_img = this.enterprise.main_feature_2_img
          this.main_feature_2_ill = this.enterprise.main_feature_2_ill
          this.gartner_quote = this.enterprise.gartner_quote
          this.product_heading = this.enterprise.product_heading
          this.msg = this.entTestimonials
        } else {
          this.footerTitle = 'Eager to Reduce The Complexities of Managing Multiple Technologies/Vendors?';
          this.detectChange()
          this.isSme = false;
          this.isEnterprise = false;
          this.isTelecom = true;
          this.header_title_black = this.telecom.header_title_black
          this.header_title_blue = this.telecom.header_title_blue
          this.header_desc = this.telecom.header_desc
          this.header_img = this.telecom.header_img
          this.main_feature_1_heading = this.telecom.main_feature_1_heading
          this.main_feature_1_desc_1 = this.telecom.main_feature_1_desc_1
          this.main_feature_1_desc_2 = this.telecom.main_feature_1_desc_2
          this.main_feature_1_img = this.telecom.main_feature_1_img
          this.main_feature_1_ill = this.telecom.main_feature_1_ill
          this.main_feature_1_feature_img = this.telecom.main_feature_1_feature_img
          this.main_feature_1_feature_1 = this.telecom.main_feature_1_feature_1
          this.main_feature_1_feature_2 = this.telecom.main_feature_1_feature_2
          this.main_feature_1_feature_3 = this.telecom.main_feature_1_feature_3
          this.main_feature_2_img = this.telecom.main_feature_2_img
          this.main_feature_2_ill = this.telecom.main_feature_2_ill
          this.gartner_quote = this.telecom.gartner_quote
          this.product_heading = this.telecom.product_heading
          this.msg = this.telTestimonials
        }
      });
    }
  }

  detectChange(){
    this._stateService.sendData(this.footerTitle);
  }

}
