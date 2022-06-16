import {v4 as uuidv4} from 'uuid';

import Claim from './claim';
import Product from './product';
import TermsAndConditions from './terms_and_conditions'

// Contract represents an extended warranty for a covered product.
// A contract is in a PENDING state prior to the effective date,
// ACTIVE between effective and expiration dates, and EXPIRED after
// the expiration date.

export default class Contract {
  id:              string;   // Unique ID
  purchase_price:  number;
  covered_product: Product;
  terms_and_conditions: TermsAndConditions;

  status:          string;

  claims:          Claim[];

  constructor(purchase_price:   number,
              product:          Product,
              terms_and_conditions: TermsAndConditions) {
    this.purchase_price    = purchase_price;
    this.covered_product   = product;
    this.terms_and_conditions = terms_and_conditions;

    this.id                = uuidv4(); // Autoassigned
    this.status            = 'PENDING';
    this.claims            = [];
  }

  calculateLimitOfLiability() {
    var claim_total = 0.0
    this.claims.forEach(claim => claim_total += claim.amount);
    return (this.purchase_price * 0.8) - claim_total
  }

  isInEffect(date: Date) {
    return (this.status == 'ACTIVE') &&
      (date >= this.terms_and_conditions.effective_date) &&
      (date <= this.terms_and_conditions.expiration_date)
  }
}
