import {v4 as uuidv4} from 'uuid';

import RepairPO from './repair_po';

/**
 Claim represents a request for a benefit on an extended warranty. It contains a
 set of purchase orders that provide information about any repairs and associated costs that may have occurred for a claim.
*/

export default class Claim {
  id:                    string; // unique id
  readonly amount:       number;
  readonly failure_date: Date;

  repair_pos:            RepairPO[];

  constructor(amount: number, failure_date: Date) {
    this.amount       = amount;
    this.failure_date = failure_date;
    this.repair_pos   = [];

    this.id           = uuidv4(); // Autoassigned
  }
}
