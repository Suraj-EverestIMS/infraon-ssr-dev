import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    ) {
      this.titleService.setTitle('support')
      this._metaTagService.updateTag({ name: 'title', content: 'support' });
      this._metaTagService.updateTag({ name: 'description', content: 'support' });
      this._canonical.updateCanonicalUrl('support.com/');      
    }

  ngOnInit(): void {
  }

}
