export default class LineItem {
  readonly type:        string;
  readonly amount:      number;
  readonly description: string;

  constructor(type: string, amount: number, description: string) {
    this.type        = type;
    this.amount      = amount;
    this.description = description;
  }
}
