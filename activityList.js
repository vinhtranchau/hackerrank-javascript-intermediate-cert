// Parent Activity function
function Activity(amount) {
    this.amount = amount;
}

Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
        return false;
    } else {
        this.amount = value;
        return true;
    }
};

Activity.prototype.getAmount = function() {
    return this.amount;
};


// Payment function inheriting from Activity
function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
}

Payment.prototype = Object.create(Activity.prototype);

Payment.prototype.setReceiver = function(value) {
    this.receiver = value;
};

Payment.prototype.getReceiver = function() {
    return this.receiver;
};


// Refund function inheriting from Activity
function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
}

Refund.prototype = Object.create(Activity.prototype);

Refund.prototype.setSender = function(value) {
    this.sender = value;
};

Refund.prototype.getSender = function() {
    return this.sender;
};
