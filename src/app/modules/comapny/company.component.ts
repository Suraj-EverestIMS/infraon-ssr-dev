import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/_services/canonical.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(
    private titleService : Title,
    private _metaTagService : Meta,
    private _canonical : CanonicalService
  ) { 
    this.titleService.setTitle('Company')
    this._metaTagService.updateTag({ name: 'title', content: 'Company' });
    this._metaTagService.updateTag({ name: 'description', content: 'Company' });
    this._canonical.updateCanonicalUrl('company.com/');
  }

  ngOnInit(): void {
  }

}
