import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import api from '../../api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() create = new EventEmitter();
  isPending = false;

  onCreate (nameInput, descriptionInput) {
    this.isPending = true;
    const name = nameInput.value;
    const description = descriptionInput.value;

    api.createItem(name, description)
      .then(() => {
        this.create.emit({name, description });
        this.isPending = false;
        nameInput.value = '';
        descriptionInput.value = '';
      });
  }

  constructor() { }

  ngOnInit() {
  }

}
