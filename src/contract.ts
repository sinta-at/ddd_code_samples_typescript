import Claim from './claim';
import Product from './product';

// TODO Add comments on contract being an extended warranty, and its lifecycle
export default class Contract {
  readonly purchase_price:  number;
  readonly covered_product: Product;

  effective_date:           Date;
  expiration_date:          Date;
  purchase_date:            Date;
  in_store_guarantee_days:  number;

  status:                   string;

  claims:                   Claim[];

  // TODO: Add unique ID
  constructor(purchase_price: number, product: Product) {
    this.purchase_price    = purchase_price;
    this.covered_product   = product;
    this.status            = 'PENDING';
    this.claims            = [];
  }
}
