const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phoneNumber: { type: Number, required: true, trim: true },
    balance: { type: Number, required: true, trim: true },
    fullname: { type: String, required: true, trim: true },
    referenceCode: { type: Number, required: true, trim: true },
    walletNumber: { type: Number, required: true, trim: true },
    friendsref: [{ type: mongoose.Schema.Types.ObjectId,
         required: true, trim: true, ref: "Referrer" }],
    transactionHistory: [{ type: mongoose.Schema.Types.ObjectId, 
        required: true, trim: true, ref: "TransactionHistory" }],
    twoFactorAuthenticator: { type: mongoose.Schema.Types.ObjectId, 
         trim: true, ref: "TwoFactorAuthenticator", 
        unique: true },
    image: [{ type: String, required: true }], //check for image storing as array.
    notification: [],
    OTP: { type: String, required: true, trim: true }, 
    signupDate: { type: String, required: true },
    isMFA: { type: Boolean, required: true }
});

const userModel = mongoose.model("Users", mongooseSchema);

module.exports = userModel;