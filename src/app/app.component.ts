import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from './_services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Infraon Platform';
  version = 'Angular version 13.2.3';
  dataPassed: any;
  subscription: Subscription;

  constructor(
    private _stateService : StateService
  ){
    this.subscription = this._stateService.getData().subscribe(x => {                  
      this.dataPassed = x;
    });
  }

  ngOnInit(): void {
    
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}