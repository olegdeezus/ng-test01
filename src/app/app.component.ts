import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  description: string;
  list = [];

  select (item) {
    this.description = item.description;
  }

  create (item) {
    this.list.push(item);
  }
}
