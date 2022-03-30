import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    ) {
      this.titleService.setTitle('helpdesk')
      this._metaTagService.updateTag({ name: 'title', content: 'helpdesk' });
      this._metaTagService.updateTag({ name: 'description', content: 'helpdesk' });
      this._canonical.updateCanonicalUrl('helpdesk.com/');      
    }

  ngOnInit(): void {
  }

}
