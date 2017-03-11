import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Input() list: {name: string, description: string}[];
  @Input() isPending: boolean;
  selected: number;
  @Output() select = new EventEmitter();

  onSelect (index) {
    this.selected = index;
    this.select.emit(this.list[index]);
  }

  constructor() { }

  ngOnInit() {
  }

}
