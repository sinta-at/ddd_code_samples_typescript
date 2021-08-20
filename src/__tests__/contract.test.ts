import Contract from '../contract';
import Product from '../product';

  test('contract is set up properly', () => {
    var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0')
    var contract = new Contract(100.0, product)
    expect(contract.purchase_price).toBe(100.0);
    expect(contract.status).toEqual('PENDING');
    expect(contract.covered_product.name).toEqual('dishwasher')
    expect(contract.covered_product.serial_number).toEqual('OEUOEU23')
    expect(contract.covered_product.make).toEqual('Whirlpool')
    expect(contract.covered_product.model).toEqual('7DP840CWDB0')
    // contract.status = 'ACTIVE';
    // expect(contract.status).toEqual('ACTIVE')
    // todo: Add property-based equality to product?
  });

  test('contract equality', () => {
    // TODO: Figure out how to assign ID to Contract
    // implement this test?
  });
