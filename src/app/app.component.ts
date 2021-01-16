import { Component } from '@angular/core';
import { ListService } from './list.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fetchedData: any;
  name = new BehaviorSubject<String>(null);

  constructor(private listService: ListService) {

  }
  ngOnInit() {
    this.listService.selectedName.subscribe((response) => {
      this.name.next(response);
    })
  }
}
