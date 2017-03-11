import { Component, Input, OnInit } from '@angular/core';
import api from '../api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  description: string;
  list: IItem[] = [];
  isPending = false;

  select (item) {
    this.description = item.description;
  }

  create (item) {
    this.list.push(item);
  }

  ngOnInit () {
    this.isPending = true;

    api.getItemsList()
      .then(list => {
        this.list = list;
        this.isPending = false;
      });
  }
}
