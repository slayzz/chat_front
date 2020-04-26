import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { ControlType, SimpleFormTemplate } from '../../common/simple-form/templates/simple-form-template';
import { SimpleFormEvent } from '../../common/simple-form/simple-form.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  private returnUrl: string;
  private error: string = null;
  private loading: boolean = false;

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
  ];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate([ '/' ]);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit($event: SimpleFormEvent) {
    const { formGroup } = $event;

    if (formGroup.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(formGroup.controls.email.value, formGroup.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([ this.returnUrl ]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
