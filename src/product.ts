export default class Product {
  readonly name:           string;
  readonly serial_number:  string;
  readonly make:           string;
  readonly model:          string;

  constructor(name: string, serial_number: string, make: string, model: string) {
    this.name          = name;
    this.serial_number = serial_number;
    this.make          = make;
    this.model         = model;
  }
}
