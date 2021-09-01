import {v4 as uuidv4} from 'uuid';

export default class SubscriptionRenewed {
  readonly occurred_on:    Date;
  readonly contract_id:    string; // uuid
  readonly reason:         string;

  constructor(contract_id: string, reason: string) {
    this.occurred_on  = new Date();
    this.contract_id  = contract_id;
    this.reason       = reason;
  }
}
