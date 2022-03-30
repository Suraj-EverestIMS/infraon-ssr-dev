import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private titleService : Title,
    private _metaTagService : Meta,
    private _canonical : CanonicalService
  ) { 
    this.titleService.setTitle('About iiiii')
    this._metaTagService.updateTag({ name: 'title', content: 'About iiiii' });
    this._metaTagService.updateTag({ name: 'description', content: 'About iiiii' });
    this._canonical.updateCanonicalUrl('https://about.io/'); 
  }

  ngOnInit(): void {
  }

}
