import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private titleService : Title,
    private _metaTagService : Meta,
    private _canonical : CanonicalService,
  ) { 
    this.titleService.setTitle('Not Found')
    this._metaTagService.updateTag({ name: 'title', content: 'Not Found' });
    this._metaTagService.updateTag({ name: 'description', content: 'Not Found' });
    this._canonical.updateCanonicalUrl('notfound.com/');
  }

  ngOnInit(): void {
  }

}
