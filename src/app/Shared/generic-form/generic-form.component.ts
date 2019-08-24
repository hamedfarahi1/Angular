import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';


@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  myForm: FormGroup;
  @Input() fields: Array<GenericFormField> = [];
  @Output() submited = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({});
    for (const field of this.fields) {
      this.myForm.addControl(
        field.name,
        this.fb.control(field.value, field.validators)
      );
    }
  }
  sub() {
    this.submited.emit(this.myForm);
  }


}

export class GenericFormField {
  title: string;
  name: string;
  formType: 'text' | 'number' | 'checkbox' | 'selectKey' | 'selectKeyValue' | 'date' | 'multiSelectKey' | 'multiSelectKeyValue';
  type?: 'key' | { key: 'number' };
  validators?: Array<ValidatorFn>;
  lookups?: Array<Lookup>;
  value: any;
}

export class Lookup {
  key: string;
  value: string;
}
