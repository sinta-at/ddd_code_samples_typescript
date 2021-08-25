import {v4 as uuidv4} from 'uuid';

import Claim from './claim';
import Product from './product';

// Contract represents an extended warranty for a covered product.
// A contract is in a PENDING state prior to the effective date,
// ACTIVE between effective and expiration dates, and EXPIRED after
// the expiration date.

export default class Contract {
  id:              string;   // Unique ID
  purchase_price:  number;
  covered_product: Product;

  effective_date:  Date;
  expiration_date: Date;
  purchase_date:   Date;

  status:          string;

  claims:          Claim[];

  constructor(purchase_price:   number,
              product:          Product,
              effective_date:   Date,
              expiration_date:  Date,
              purchase_date:    Date) {
    this.purchase_price    = purchase_price;
    this.covered_product   = product;
    this.effective_date    = effective_date;
    this.expiration_date   = expiration_date;
    this.purchase_date     = purchase_date;

    this.id                = uuidv4(); // Autoassigned
    this.status            = 'PENDING';
    this.claims            = [];
  }
}
