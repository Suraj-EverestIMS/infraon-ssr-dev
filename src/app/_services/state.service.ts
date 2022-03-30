import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private subject = new Subject<any>();
  constructor() { }
 
  sendData(message: string) {
      this.subject.next(message);
  }

  // clearData() {
  //     this.subject.next();
  // }

  getData(): Observable<any> {
      return this.subject.asObservable();
  }
  
}
