import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  public emitterObj: any;
  public emitterSubject: Subject<any> = new Subject();

  constructor() {
    this.emitterObj = this.emitterSubject.asObservable();
   }

  emitStatusChange(status: boolean) {
    this.emitterSubject.next(status);
  }

}
