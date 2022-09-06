class Customer {
    constructor(id, fullName, email, phone, address, balance, deleted){
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.balance = balance;
        this.deleted = deleted;
    }
}

class Deposit {
    constructor(idDeposit,customerId,transactionAmount){
        this.idDeposit= idDeposit;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
    }
}

class Withdraw{
    constructor(idWithdraw,customerId,transactionAmount){
        this.idWithdraw = idWithdraw;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
    }
}

class Tranfer{
    constructor(idTransfer,senderId,recipientId, transferAmount,fees,totalAmountTransaction){
        this.idTransfer = idTransfer;
        this.senderId = senderId;
        this.recipientId = recipientId;
        this.transferAmount = transferAmount;
        this.fees = fees;
        this.totalAmountTransaction = totalAmountTransaction;
    }
}

