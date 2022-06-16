export default class TermsAndConditions {
	purchase_date:   Date;
	effective_date:  Date;
	expiration_date: Date;

	constructor(purchase_date: Date,
		effective_date: Date,
		expiration_date: Date) {
		this.purchase_date = purchase_date;
		this.effective_date = effective_date;
		this.expiration_date = expiration_date;
	}
}