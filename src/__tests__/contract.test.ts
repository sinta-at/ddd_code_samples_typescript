import {v4 as uuidv4} from 'uuid';

import Contract from '../contract';
import Product from '../product';
import TermsAndConditions from '../terms_and_conditions'

  test('contract is set up properly', () => {
    var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
    var termsAndConditions = new TermsAndConditions(new Date(2010, 5, 6), new Date(2010, 5, 8), new Date(2013, 5, 8));
    var contract = new Contract(100.0, product, termsAndConditions);

    expect(contract.id).toBeDefined();
    expect(contract.purchase_price).toBe(100.0);
    expect(contract.status).toEqual('PENDING');
    expect(contract.terms_and_conditions.purchase_date).toEqual(new Date(2010, 5, 6));
    expect(contract.terms_and_conditions.effective_date).toEqual(new Date(2010, 5, 8));
    expect(contract.terms_and_conditions.expiration_date).toEqual(new Date(2013, 5, 8));

    expect(contract.covered_product.name).toEqual('dishwasher')
    expect(contract.covered_product.serial_number).toEqual('OEUOEU23')
    expect(contract.covered_product.make).toEqual('Whirlpool')
    expect(contract.covered_product.model).toEqual('7DP840CWDB0')
  });

  // entities compare by unique IDs, not properties
  test('contract equality', () => {
    var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
    var tnc = new TermsAndConditions(new Date(2010, 5, 6), new Date(2010, 5, 8), new Date(2013, 5, 8));

    var contract1 = new Contract(100.0, product, tnc);
    var contract2 = new Contract(100.0, product, tnc);
    var contract3 = new Contract(100.0, product, tnc);

    var expected_id = uuidv4();
    contract1.id = expected_id;
    contract2.id = expected_id;
    expect(contract1).toEqual(contract2);

    contract3.id = uuidv4();
    expect(contract1).not.toEqual(contract3);
  });
