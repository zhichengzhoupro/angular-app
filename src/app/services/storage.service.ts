import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private  val = 'haha';

  public get value(): string {
    return this.val;
  }
  public set value(value: string) {
    this.val = value;
  }

  getCallbackDataByCallBack = (cb) =>  {
    setTimeout(() => {
      const name = 'zhang san';
      cb(name);
    }, 1000);
  }

  getPromiseData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const name = 'zhang san';
        resolve(name);
      }, 1000);
    });
  }

  getObeservableData = () => {
    return new Observable((observer) => {
      setTimeout(() => {
        const name = 'Observale';
        observer.next(name);
      }, 3000);
    });
  }

  getOberseableMultipleExeData = () => {
    return new Observable((observer) => {
      setInterval(() => {
        const name = 'Observale multi reception';
        observer.next(name);
      }, 1000);
    });
  }
}
