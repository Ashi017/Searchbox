import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list = new BehaviorSubject<any>(null);
  displayedList = new BehaviorSubject<any>(null);
  selectedName = new BehaviorSubject<String>(null);
  dropDownList = new BehaviorSubject<String[]>([]);

  constructor() { }


}
