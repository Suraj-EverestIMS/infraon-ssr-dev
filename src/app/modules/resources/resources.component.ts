import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(
    private titleService: Title,
    private _metaTagService: Meta,
    private _canonical: CanonicalService,
    private _stateService: StateService,
    ) {
      this.titleService.setTitle('resources')
      this._metaTagService.updateTag({ name: 'title', content: 'resources' });
      this._metaTagService.updateTag({ name: 'description', content: 'resources' });
      this._canonical.updateCanonicalUrl('resources.com/');      
    }

  ngOnInit(): void {
  }

}
