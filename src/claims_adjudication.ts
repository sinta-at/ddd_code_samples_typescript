import Contract from './contract';
import Claim from './claim';

/**
Adjudicate/adjudication - a judgment made on a claim to determine whether
we are legally obligated to process the claim against the warranty. From
Wikipedia (https://en.wikipedia.org/wiki/Adjudication):

"Claims adjudication" is a phrase used in the insurance industry to refer to
the process of paying claims submitted or denying them after comparing claims
to the benefit or coverage requirements.
*/

export default class Claims_Adjudication {
  adjudicate(contract: Contract, new_claim: Claim) {
    if ((this.limit_of_liability(contract) > new_claim.amount) &&
         this.in_effect_for(contract, new_claim.failure_date)) {
      contract.claims.push(new_claim);
    }
  }

  limit_of_liability(contract: Contract) {
    var claim_total = 0.0;
    contract.claims.forEach(claim => claim_total += claim.amount);
    return (contract.purchase_price - claim_total) * 0.8;
  }

  in_effect_for(contract: Contract, date: Date) {
    return (contract.status == 'ACTIVE') &&
           (date >= contract.effective_date) &&
           (date <= contract.expiration_date));
  }
}
