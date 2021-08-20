import Contract from '../contract';
import Product from '../product';
import Claim from '../claim';
import ClaimsAdjudication from '../claims_adjudication';

function fakeContract() {
  var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
  var contract = new Contract(100.0, product);

  contract.status          = 'ACTIVE'
  contract.effective_date  =  new Date(2010, 5, 8);
  contract.expiration_date =  new Date(2012, 5, 8);

  return contract
}

  test('Adjudicate valid claim', () => {
    var contract = fakeContract();
    var claim    = new Claim(79.0, new Date(2010, 5, 8));

    new ClaimsAdjudication().adjudicate(contract, claim);

    expect(contract.claims.length).toBe(1);
    expect(contract.claims[0].amount).toBe(79.0);
    expect(contract.claims[0].failure_date).toStrictEqual(new Date(2010, 5, 8));
  });

  test('Adjudicate claim with invalid amount', () => {
    var contract = fakeContract();
    var claim    = new Claim(81.0, new Date(2010, 5, 8));

    new ClaimsAdjudication().adjudicate(contract, claim);

    expect(contract.claims.length).toBe(0);
  });

  test('Adjudicate claim for pending contract', () => {
    var contract = fakeContract();
    contract.status = 'PENDING'
    var claim    = new Claim(79.0, new Date(2010, 5, 8));

    new ClaimsAdjudication().adjudicate(contract, claim);

    expect(contract.claims.length).toBe(0);
  });

    test('Adjudicate claim for pending contract', () => {
      var contract = fakeContract();
      contract.status = 'EXPIRED'
      var claim    = new Claim(79.0, new Date(2010, 5, 8));

      new ClaimsAdjudication().adjudicate(contract, claim);

      expect(contract.claims.length).toBe(0);
    });

  test('Adjudicate claim prior to effective date', () => {
    var contract = fakeContract();
    var claim    = new Claim(79.0, new Date(2010, 5, 5));

    new ClaimsAdjudication().adjudicate(contract, claim);

    expect(contract.claims.length).toBe(0);
  });

  test('Adjudicate claim after expiration date', () => {
    var contract = fakeContract();
    var claim    = new Claim(79.0, new Date(2012, 5, 9));

    new ClaimsAdjudication().adjudicate(contract, claim);

    expect(contract.claims.length).toBe(0);
  });
