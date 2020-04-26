import { Component, OnInit } from '@angular/core';
import { ControlType, SimpleFormTemplate } from '../../common/simple-form/templates/simple-form-template';
import { SimpleFormEvent } from '../../common/simple-form/simple-form.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent implements OnInit {
  formTemplate = [
    new SimpleFormTemplate({
      key: 'email',
      value: '',
      required: true,
      placeholder: 'Email',
      controlType: ControlType.Email,
      label: 'Email',
    }),
    new SimpleFormTemplate({
      key: 'password',
      value: '',
      required: true,
      placeholder: 'Password',
      controlType: ControlType.Password,
      label: 'Password',
    }),
    new SimpleFormTemplate({
      key: 'repeatPassword',
      value: '',
      required: true,
      placeholder: 'Password',
      controlType: ControlType.Password,
      label: 'Repeat Password',
    }),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  submit($event: SimpleFormEvent) {
    console.log($event);
  }
}
