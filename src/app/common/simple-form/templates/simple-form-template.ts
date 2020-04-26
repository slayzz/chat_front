export enum ControlType {
  Email = 'email',
  Password = 'password',
  Text = 'text',
}

export type FormDataValue = {
  key: string,
  value: string,
  controlType: ControlType,
  placeholder?: string,
  label: string,
  required?: boolean,
}


export class SimpleFormTemplate {
  constructor(public values: FormDataValue) {
  }

  get controlType() {
    return this.values.controlType;
  }

  get placeholder() {
    return this.values.placeholder;
  }

  get label() {
    return this.values.label;
  }

  get required() {
    return this.values.required;
  }

  get key() {
    return this.values.key;
  }

  get value() {
    return this.values.value;
  }

}
