import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private footerData = new Subject<any>();
  private navbarData = new Subject<any>();
  constructor() { }
 
  sendData(message: string) {
      this.footerData.next(message);
  }
  
  getData(): Observable<any> {
    return this.footerData.asObservable();
  }
  
  pageType(message: string) {
    this.navbarData.next(message);
    console.log(message);
    
  }
  
  
  getpageType(): Observable<any> {
    return this.navbarData.asObservable();
  }
}
