import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { StateService } from 'src/app/_services/state.service';
import { default as _data} from './../../_data/resources.json';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  searchText:any;
  selectedProductName:any;
  selectedProduct: number = 0;
  hasCaseFiles: boolean = true;
  hasBrochures: boolean = true;
  hasDatasheet: boolean = true;
  hasPresentation: boolean = true;
  hasVideos: boolean = true;
  isAssetSelected: boolean = true;
  isSecuraSelected: boolean = true;

  productLists = [
    {id : 0, value : "all", name : "All", isActive : true},
    {id : 1, value : "asset", name : "Infraon Assets", isActive : true},
    // {id : 2, value : "uptime", name : "Infraon Uptime", isActive : true},
    {id : 3, value : "itim", name : "Infraon ITIM", isActive : true},
    {id : 4, value : "nms", name : "Infraon NMS", isActive : true},
    {id : 5, value : "nccm", name : "Infraon NCCM", isActive : true},
    // {id : 6, value : "aiops", name : "Infraon AIOps", isActive : true},
    {id : 6, value : "helpdesk", name : "Infraon Helpdesk", isActive : true},
    // {id : 7, value : "itsm", name : "Infraon ITSM", isActive : true},
    {id : 8, value : "desk", name : "Infraon Desk", isActive : true},
    {id : 9, value : "ims", name : "Infraon IMS", isActive : true},
    {id : 10, value : "secura", name : "Infraon SecuRa", isActive : true},
    {id : 11, value : "oss", name : "Infraon OSS", isActive : true},
    {id : 12, value : "infinity", name : "Infraon Infinity", isActive : true},
  ]

  resourceData = _data.resource_data

  temp_resourceData!: { id: number; type_id: number; type: string; name: string; desc: string; partner: string; product_type: string; product_type_id: number; doc_url: string; img_url: string; }[];
  case: any;
  brochures: any;
  datasheet: any;
  presentation: any;
  videos: any;
  isSearchEnabled!: boolean;
  isCaseVisible: boolean = true;
  isBrochureVisible: boolean = true;
  isDatasheetVisible: boolean = true;
  isPresentationVisible: boolean = true;
  isVideosVisible: boolean = true;

  constructor(
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    private elem: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
    private route : ActivatedRoute
    ) {
      this.titleService.setTitle('Infraon Product Suite')
      this._metaTagService.updateTag({ name: 'title', content: 'Infraon Product Suite' });
      this._metaTagService.updateTag({ name: 'description', content: 'IT Infrastructure Management Software Products.' });
      this._canonical.updateCanonicalUrl('https://infraon.io/resources');      
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('pageType', "non-product")
      }
    }

  ngOnInit(): void {
    let doc = this.route.snapshot.params
    this.filterData(doc['type'])
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scroll, true); //third parameter
    }

    this.applyFilter();
    let tabsList = this.elem.nativeElement.querySelectorAll('.resources-tabs-button');
    function addClass(this: any) {
      tabsList.forEach((e: { classList: { remove: (arg0: string) => any; }; }) =>
        e.classList.remove("active"));
        this.classList.add("active")
    }

    tabsList.forEach((e: { addEventListener: (arg0: string, arg1: (this: any) => void) => void; }) => {
      e.addEventListener('click', addClass)
    });

    this.distributData();
  }

  scroll = (event: any): void => {
    // console.log(event);
    var navbar = this.elem.nativeElement.querySelector('.filter-menu');
    var sticky = navbar.offsetTop;
    if (isPlatformBrowser(this.platformId)) {
      if (window.pageYOffset >= (sticky)) {
        navbar.classList.add("sticky-filter-menu")
        navbar.classList.add("p-lr-120")
        navbar.classList.remove("pb-3")
      } else {
        navbar.classList.remove("sticky-filter-menu");
        navbar.classList.remove("p-lr-120")
        navbar.classList.add("pb-3")
      }
    }
  };

  filterData(data: string){
    let dataType = data;
    console.log("typed ==================== " + dataType);
    let caseDiv = this.elem.nativeElement.querySelector('#case');
    let brochure = this.elem.nativeElement.querySelector('#brochure');
    let datasheet = this.elem.nativeElement.querySelector('#datasheet');
    let presentation = this.elem.nativeElement.querySelector('#presentation');
    let videos = this.elem.nativeElement.querySelector('#videos');

    if (dataType == 'all') {
      caseDiv.style.display = "flex"
      brochure.style.display = "flex"
      datasheet.style.display = "flex"
      presentation.style.display = "flex"
      videos.style.display = "flex"
    } 
    else if (dataType == 'case') {
      caseDiv.style.display = "flex"
      brochure.style.display = "none"
      datasheet.style.display = "none"
      presentation.style.display = "none"
      videos.style.display = "none"
    } 
    else if (dataType == 'brochure') {
      caseDiv.style.display = "none"
      brochure.style.display = "flex"
      datasheet.style.display = "none"
      presentation.style.display = "none"
      videos.style.display = "none"
    } 
    else if (dataType == 'datasheet') {
      caseDiv.style.display = "none"
      brochure.style.display = "none"
      datasheet.style.display = "flex"
      presentation.style.display = "none"
      videos.style.display = "none"
    } 
    else if (dataType == 'presentation') {
      caseDiv.style.display = "none"
      brochure.style.display = "none"
      datasheet.style.display = "none"
      presentation.style.display = "flex"
      videos.style.display = "none"
    } 
    else {
      caseDiv.style.display = "none"
      brochure.style.display = "none"
      datasheet.style.display = "none"
      presentation.style.display = "none"
      videos.style.display = "flex"
    }
  }

  searchDocuments() {
    // console.log(this.searchText.length);
    if (this.searchText.length > 0) {
      this.isSearchEnabled = true

      this.temp_resourceData.forEach(e => {
        if (e.name.toLowerCase().includes(this.searchText.toLowerCase())) {
          this.isCaseVisible = (e.type_id == 1) ? true : false
          this.isBrochureVisible = (e.type_id == 2) ? true : false
          this.isDatasheetVisible = (e.type_id == 3) ? true : false
          this.isPresentationVisible = (e.type_id == 5) ? true : false
          this.isVideosVisible = (e.type_id == 4) ? true : false
        } else {
          this.hasCaseFiles = false
          this.hasBrochures = false
          this.hasDatasheet = false
          this.hasPresentation = false
          this.hasVideos = false     
        }
      });
    }
    else {
      this.isSearchEnabled = false
      this.isCaseVisible = true
      this.isBrochureVisible = true
      this.isDatasheetVisible = true
      this.isPresentationVisible = true
      this.isVideosVisible = true
    }
  }

  applyFilter(){
    this.selectedProduct = (this.selectedProduct == undefined || this.selectedProduct == null) ? 0 : this.selectedProduct

    if (this.selectedProduct == 1) {
      this.isAssetSelected = true;
      this.isSecuraSelected = false;
      this.hasVideos = true;
    } else if (this.selectedProduct == 10) {
      this.isSecuraSelected = true;
      this.isAssetSelected = false;
      this.hasVideos = true;
    } else {
      this.isSecuraSelected = false;
      this.isAssetSelected = false;
      this.hasVideos = false;
    }

    if (this.selectedProduct == 0) {
      this.temp_resourceData = this.resourceData
      this.isSecuraSelected = true;
      this.isAssetSelected = true;
      this.hasVideos = true;
    }
    else {
      this.temp_resourceData = []
      for (let i = 0; i < this.resourceData.length; i++) {
        if (this.selectedProduct == this.resourceData[i].product_type_id) {
          this.temp_resourceData.push(this.resourceData[i])
          // console.log(this.temp_resourceData);
        }
      }
    }

    this.productLists.forEach(e => {
      if (this.selectedProduct == e.id) {
        this.selectedProductName = e.name
      }
    });

    this.distributData();

  }

  distributData() {
    this.case = []
    this.brochures = []
    this.datasheet = []
    this.videos = []
    this.presentation = []

    console.log(this.temp_resourceData[0]);
    
    for (let i = 0; i < this.temp_resourceData.length; i++) {
      if (this.temp_resourceData[i].type_id == 1) {
        this.case.push(this.temp_resourceData[i])
      } 
      if (this.temp_resourceData[i].type_id == 2) {
        this.brochures.push(this.temp_resourceData[i])
      }
      if (this.temp_resourceData[i].type_id == 3) {
        this.datasheet.push(this.temp_resourceData[i])
      }
      if (this.temp_resourceData[i].type_id == 5) {
        this.presentation.push(this.temp_resourceData[i])
      }
      if (this.temp_resourceData[i].type_id == 4) {
        this.videos.push(this.temp_resourceData[i])
      }

      this.hasCaseFiles = (this.case.length > 0) ? true : false
      this.hasBrochures = (this.brochures.length > 0) ? true : false
      this.hasDatasheet = (this.datasheet.length > 0) ? true : false
      this.hasPresentation = (this.presentation.length > 0) ? true : false
      this.hasVideos = (this.videos.length > 0) ? true : false 
    }
  }

}
