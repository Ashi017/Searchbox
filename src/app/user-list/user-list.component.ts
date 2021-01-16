import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  list = null;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.displayedList.subscribe((response) => {
      this.list = response;
    })
  }

  select(row) {
    this.listService.selectedName.next(row.name);
  }

}
