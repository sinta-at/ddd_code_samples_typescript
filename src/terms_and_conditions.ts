export default class TermsAndConditions {
	purchase_date:   Date;
	effective_date:  Date;
	expiration_date: Date;

	constructor(purchase_date: Date,
		effective_date: Date,
		expiration_date: Date) {
		if (purchase_date > effective_date) {
			throw new Error("Effective date should be after or the same as purchase date")
		}
		if (effective_date >= expiration_date) {
			throw new Error("Expiration date should be after effective date")
		}

		this.purchase_date = purchase_date;
		this.effective_date = effective_date;
		this.expiration_date = expiration_date;
	}

	getStatus(date: Date) {
		if (date < this.effective_date) {
			return "PENDING"
		}
		if (date <= this.expiration_date) {
			return "ACTIVE"
		}
		return "EXPIRED"
	}
}