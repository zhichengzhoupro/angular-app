import { Injectable } from '@angular/core';

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

}
