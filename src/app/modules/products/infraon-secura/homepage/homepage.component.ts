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
      this.titleService.setTitle('secura')
      this._metaTagService.updateTag({ name: 'title', content: 'secura' });
      this._metaTagService.updateTag({ name: 'description', content: 'secura' });
      this._canonical.updateCanonicalUrl('secura.com/');      
    }

  ngOnInit(): void {
  }

}
