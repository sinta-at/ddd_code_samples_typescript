import {v4 as uuidv4} from 'uuid';

export default class CustomerReimbursementRequested {
  readonly occurred_on:    Date;
  readonly contract_id:    string; // uuid
  readonly rep_name:       string;
  readonly reason:         string;

  constructor(contract_id: string, rep_name: string, reason: string) {
    this.occurred_on  = new Date();
    this.contract_id  = contract_id;
    this.rep_name     = rep_name;
    this.reason       = reason;
  }
}
