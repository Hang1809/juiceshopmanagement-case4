class LocationRegion {
    constructor(provinceId, provinceName, districtId, districtName, wardId, wardName, address) {
        this.provinceId = provinceId;
        this.provinceName = provinceName;
        this.districtId = districtId;
        this.districtName = districtName;
        this.wardId = wardId;
        this.wardName = wardName;
        this.address = address;
    }
}

class Customer extends LocationRegion{
    constructor(id, fullName, email, phone, balance, locationRegion, deleted) {
        super();
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.balance = balance;
        this.locationRegion = locationRegion;
        this.deleted = deleted;
    }
}

class Deposit {
    constructor(id, customerId, transactionAmount) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
    }
}

class Withdraw {
    constructor(id, customerId, transactionAmount) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
    }
}

class Transfer {
    constructor(id, senderId, recipientId, fees, feesAmount, transferAmount, transactionAmount) {
        this.id = id;
        this.senderId = senderId;
        this.recipientId = recipientId;
        this.fees = fees;
        this.feesAmount = feesAmount;
        this.transferAmount = transferAmount;
        this.transactionAmount = transactionAmount;
    }
}