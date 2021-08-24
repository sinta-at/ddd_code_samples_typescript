import {v4 as uuidv4} from 'uuid';

import Contract from '../contract';
import Product from '../product';

  test('contract is set up properly', () => {
    var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
    var contract = new Contract(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));

    expect(contract.id).toBeDefined();
    expect(contract.purchase_price).toBe(100.0);
    expect(contract.status).toEqual('PENDING');
    expect(contract.purchase_date).toEqual(new Date(2010, 5, 7));
    expect(contract.effective_date).toEqual(new Date(2010, 5, 8));
    expect(contract.expiration_date).toEqual(new Date(2013, 5, 8));

    expect(contract.covered_product.name).toEqual('dishwasher')
    expect(contract.covered_product.serial_number).toEqual('OEUOEU23')
    expect(contract.covered_product.make).toEqual('Whirlpool')
    expect(contract.covered_product.model).toEqual('7DP840CWDB0')
  });

  // entities compare by unique IDs, not properties
  test('contract equality', () => {
    var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
    var contract1 = new Contract(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));
    var contract2 = new Contract(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));
    var contract3 = new Contract(100.0, product, new Date(2010, 5, 8), new Date(2013, 5, 8), new Date(2010, 5, 7));

    var expected_id = uuidv4();
    contract1.id = expected_id;
    contract2.id = expected_id;
    expect(contract1.id).toEqual(contract2.id);

    contract3.id = uuidv4();
    expect(contract1.id).not.toEqual(contract3.id);
  });
