import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    ) {
      this.titleService.setTitle('Contact us')
      this._metaTagService.updateTag({ name: 'title', content: 'Contact Us' });
      this._metaTagService.updateTag({ name: 'description', content: 'contact us' });
      this._canonical.updateCanonicalUrl('contact.com/');      
    }

  ngOnInit(): void {
  }

}
