import RepairPO from './repair_po';

export default class Claim {
  readonly id:           number;  // TODO: change to UUID
  readonly amount:       number;
  readonly failure_date: Date;

  repair_pos:            RepairPO[];

  constructor(amount: number, failure_date: Date) {
    this.id           = 0; // TODO: change to UUID
    this.amount       = amount;
    this.failure_date = failure_date;
    this.repair_pos   = [];
  }
}
