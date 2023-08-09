import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalValuesService {
  transparentHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isHomeComponent:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor() { }
}
