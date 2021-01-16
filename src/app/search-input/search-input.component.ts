import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListService } from '../list.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  list;
  dropDownList;
  stringEntered = '';

  constructor(private http: HttpClient, private listService: ListService) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      this.list = response;
      this.listService.list.next(response);
      this.listService.displayedList.next(response);
    })

    this.listService.displayedList.subscribe((list) => {
      this.dropDownList = list;
    })
  }


  keyUp(event) {
    const stringEntered = (<HTMLInputElement>document.getElementById('search-box')).value;
    this.searchKey(stringEntered);
    this.stringEntered = stringEntered;
    if (event.keyCode === 13) {
      this.triggerChangeListView();
    }
  }

  triggerChangeListView() {

  }

  searchKey(stringEntered) {
    const list = this.listService.list.value.filter((person) => (person.name.toLowerCase()).includes(stringEntered));
    this.listService.displayedList.next(list);
  }

  selectFromDropDown(row) {
    this.listService.displayedList.next([row]);
    this.stringEntered = '';
  }

}
