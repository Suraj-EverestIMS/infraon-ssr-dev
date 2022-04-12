import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

declare var fwcrm:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  angForm!: FormGroup;
  codes = []
  product = ["Infraon Asset", "Infraon Uptime", "Infraon ITIM", "Infraon NMS", "Infraon NCCM", "Infraon AIOps", "Infraon Helpdesk", "Infraon ITSM", "Infraon Desk", "Infraon SecuRA", "Infraon OSS", "Infraon IMS"]
  selectedProduct = [];
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


  constructor(private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: any,
    ) { 
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('pageType', "non-product")
      }
      this.titleService.setTitle('Contact us')
      this._metaTagService.updateTag({ name: 'title', content: 'Contact Us' });
      this._metaTagService.updateTag({ name: 'description', content: 'contact us' });
      this._canonical.updateCanonicalUrl('contact.com/');      
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
  }

}
