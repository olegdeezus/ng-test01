import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

    setTimeout(() => {
      this.create.emit({
        name: nameInput.value,
        description: descriptionInput.value
      });
      this.isPending = false;
      nameInput.value = '';
      descriptionInput.value = '';
    }, 1500);
  }

  constructor() { }

  ngOnInit() {
  }

}
