export class User {
	userId = '';
	role = '';			// radio buttons
	lastName = '';
	firstName = '';
	address: Address;
	phones: Phone[];
	title = '';			// Select Box
	active = false;		// Checkbox

	constructor( that?: User ) {
  if (!that) return;

	this.userId = that.userId;
	this.role = that.role;
	this.lastName = that.lastName;
	this.firstName = that.firstName;

	if (that.address)
		this.address = that.address;

  if (that.phones)
  this.phones = that.phones.map(phone => new Phone(phone));
	}
}

export class Address {
	street1 = '';
  street2 = '';
	city = '';
	state = '';
	zip = '';

  constructor(that?: Address) {
    if (!that) return;

    this.street1 = that.street1;
    this.street2 = that.street2;
    this.city = that.city;
    this.state = that.state;
    this.zip = that.zip;
  }
}

export class Phone {
	type = '';			// Home Work Cell
	phoneNo = '';

  constructor(that?: Phone) {
    if (!that) return;

    this.type = that.type;
    this.phoneNo = that.phoneNo;
  }
}

export const states = ['VA', 'FL', 'CA', 'NY', 'MD', 'DC'];
export const titles = ['Project Manager', 'Analyst', 'Technical Lead', 'Developer', 'DevOps', 'Tester'];
export const roles = ['Admin', 'PowerUser', 'User', 'Guest'];