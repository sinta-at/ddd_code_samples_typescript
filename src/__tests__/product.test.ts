import Product from '../product';

  // Product is an example of a value object. See https://martinfowler.com/bliki/ValueObject.html for more details

  test('product equality by properties', () => {
    // A value object must be created whole
    var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');

    // Demonstrate equality by property - uses custom "equals" method in this example
    expect(new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0').equals(product)).toBe(true);
  });

  test('product inequality by properties', () => {
    var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');

    // Demonstrate inequality by property
    expect(new Product('stove', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0').equals(product)).toBe(false);
    expect(new Product('dishwasher', 'BEUOEU23', 'Whirlpool', '7DP840CWDB0').equals(product)).toBe(false);
    expect(new Product('dishwasher', 'OEUOEU23', 'Maytag', '7DP840CWDB0').equals(product)).toBe(false);
    expect(new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '9999999').equals(product)).toBe(false);
  });
