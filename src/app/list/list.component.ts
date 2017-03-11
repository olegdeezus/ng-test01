import { Component, OnInit } from '@angular/core';

const list = [
  { title: 'Item One', description: 'Description for item one' },
  { title: 'Item Two', description: 'Description for item two' },
  { title: 'Item Three', description: 'Description for item three' },
  { title: 'Item Four', description: 'Description for item four' },
  { title: 'Item Five', description: 'Description for item five' },
    { title: 'Item One', description: 'Description for item one' },
  { title: 'Item Two', description: 'Description for item two' },
  { title: 'Item Three', description: 'Description for item three' },
  { title: 'Item Four', description: 'Description for item four' },
  { title: 'Item Five', description: 'Description for item five' },
    { title: 'Item One', description: 'Description for item one' },
  { title: 'Item Two', description: 'Description for item two' },
  { title: 'Item Three', description: 'Description for item three' },
  { title: 'Item Four', description: 'Description for item four' },
  { title: 'Item Five', description: 'Description for item five' },
    { title: 'Item One', description: 'Description for item one' },
  { title: 'Item Two', description: 'Description for item two' },
  { title: 'Item Three', description: 'Description for item three' },
  { title: 'Item Four', description: 'Description for item four' },
  { title: 'Item Five', description: 'Description for item five' },
    { title: 'Item One', description: 'Description for item one' },
  { title: 'Item Two', description: 'Description for item two' },
  { title: 'Item Three', description: 'Description for item three' },
  { title: 'Item Four', description: 'Description for item four' },
  { title: 'Item Five', description: 'Description for item five' },
    { title: 'Item One', description: 'Description for item one' },
  { title: 'Item Two', description: 'Description for item two' },
  { title: 'Item Three', description: 'Description for item three' },
  { title: 'Item Four', description: 'Description for item four' },
  { title: 'Item Five', description: 'Description for item five' },
    { title: 'Item One', description: 'Description for item one' },
  { title: 'Item Two', description: 'Description for item two' },
  { title: 'Item Three', description: 'Description for item three' },
  { title: 'Item Four', description: 'Description for item four' },
  { title: 'Item Five', description: 'Description for item five' },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list = list;
  selected = 0;

  select (index) {
    this.selected = index;
  }

  constructor() { }

  ngOnInit() {
  }

}
