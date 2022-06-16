import Contract from '../contract';
import Product from '../product';
import Claim from '../claim';
import ClaimsAdjudication from '../claims_adjudication';
import TermsAndConditions from '../terms_and_conditions';

function fakeContract() {
  var product  = new Product('dishwasher', 'OEUOEU23', 'Whirlpool', '7DP840CWDB0');
  var tnc = new TermsAndConditions(new Date(2010, 5, 6), new Date(2010, 5, 8), new Date(2013, 5, 8));
  var contract = new Contract(100.0, product, tnc);
  contract.status          = 'ACTIVE'

  return contract
}

  test('Adjudicate valid claim', () => {
    var contract = fakeContract();
    var claim    = new Claim(79.0, new Date(2010, 5, 8));

    new ClaimsAdjudication().adjudicate(contract, claim);

    expect(contract.claims.length).toBe(1);
    expect(contract.claims[0].amount).toBe(79.0);
    expect(contract.claims[0].failure_date).toEqual(new Date(2010, 5, 8));
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

    test('Adjudicate claim for expired contract', () => {
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
    var claim    = new Claim(79.0, new Date(2013, 5, 9));

    new ClaimsAdjudication().adjudicate(contract, claim);

    expect(contract.claims.length).toBe(0);
  });
