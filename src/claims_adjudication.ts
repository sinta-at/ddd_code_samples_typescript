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
    if (contract.covers(new_claim)) {
      contract.claims.push(new_claim);
    }
  }
}
