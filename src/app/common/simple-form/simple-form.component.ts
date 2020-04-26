import {
  Component,
  EventEmitter,
  HostListener,
  Input, OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { SimpleFormTemplate } from './templates/simple-form-template';
import { FormGroup } from '@angular/forms';
import { SimpleFormControlService } from '../simple-form-control.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

export type SimpleFormEvent = { submitEvent: Event, formGroup: FormGroup };

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: [ './simple-form.component.scss' ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(700, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(700, style({ opacity: 0 }))
      ]),
    ]),
  ],
})
export class SimpleFormComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() templates: SimpleFormTemplate[];
  @Output() onSubmit = new EventEmitter<SimpleFormEvent>();

  isOpen: boolean = true;
  form: FormGroup;

  constructor(private sFormService: SimpleFormControlService) {
  }

  ngOnInit(): void {
    this.form = this.sFormService.toFormGroup(this.templates);
  }

  ngOnDestroy(): void {
    this.isOpen = false;
  }

  @HostListener('document:keypress', [ '$event' ])
  handleKeyboardEvent($event: KeyboardEvent) {
    if ($event.key === 'Enter' && $event.ctrlKey) {
      this.submit($event);
    }
  }

  submit($event: Event) {
    $event.preventDefault();
    this.onSubmit.emit({ submitEvent: $event, formGroup: this.form });
  }

}
