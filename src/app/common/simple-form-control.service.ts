import { Injectable } from '@angular/core';
import { SimpleFormTemplate } from './simple-form/templates/simple-form-template';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SimpleFormControlService {
  constructor() {
  }

  toFormGroup(simpleFormGroups: SimpleFormTemplate[]): FormGroup {
    const controls = simpleFormGroups.reduce((acc, formGroup) => {
      return {
        ...acc,
        [formGroup.key]: formGroup.required ?
          new FormControl(formGroup.value || '', Validators.required) :
          new FormControl(formGroup.value || '')
      };
    }, {});

    return new FormGroup(controls);
  }
}
