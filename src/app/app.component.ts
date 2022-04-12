import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StateService } from './_services/state.service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

declare var fwcrm:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Infraon Platform';
  version = 'Angular version 13.2.3';
  dataPassed: any;
  pageType: any;
  subscription: Subscription;

  angForm!: FormGroup;
  codes = []

  phoneNumber:any;
  first_name:any;
  last_name:any;
  email:any;
  company:any;
  description:any;
  success = false;
  submitted = false;

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  constructor(
    private _stateService : StateService,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: Document,
    private elem : ElementRef,
    private fb: FormBuilder,
  ){
    this.subscription = this._stateService.getData().subscribe(x => {                  
      this.dataPassed = x;
    });
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: [''],
      phone: ['', Validators.required ],
      email: ['', Validators.required, Validators.email ],
      company: ['', Validators.required ],
      description: [''],
      // products: [''],
    });
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.angForm.controls;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    console.log(this.angForm.controls['phone'].value.internationalNumber);
   
   
   
    // console.log(this.phoneNumber.internationalNumber);
    if (this.angForm.errors || this.angForm.invalid) {
        console.log(this.angForm.errors);
        return;
    } else {
        var new_contact = {
            "First name": this.angForm.controls['first_name'].value,
            "Last name": this.angForm.controls['last_name'].value,
            "Email": this.angForm.controls['email'].value,
            "Alternate contact number": this.angForm.controls['phone'].value.internationalNumber,
            // "Select Procucts": this.selectedProduct,
            "company": {
                "Name": this.angForm.controls['company'].value,
                "Website": this.angForm.controls['description'].value
            }
        };
        var identifier = this.angForm.controls['first_name'].value;
        fwcrm.identify(identifier, new_contact)
        setTimeout(() => {
          this.success = true
            // $('.custom-toast').fadeIn();
        }, 500);
        setTimeout(() => {
          this.success = false
          // $('.custom-toast').fadeOut();
          this.angForm.reset()
          // this.selectedProduct = null
          this.phoneNumber = null
          this.first_name = null;
          this.last_name = null;
          this.email = null;
          this.company = null;
          this.description = null;
        }, 3000);
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scroll, true); //third parameter
    }
  }
  
  scrollToTop(){
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scroll, true);
    }
  }


  scroll = (event: any): void => {    
    let navBar = this.elem.nativeElement.querySelector('.scroll-top');
    if (isPlatformBrowser(this.platformId)) {
      console.log(window.screenTop);
      
      if (this.document.body.scrollTop < 900) {
        navBar.style.opacity = 0
      } else {
        navBar.style.opacity = 1
      }
    }
  };
}