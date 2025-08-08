"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var MockTransactionEngine = /** @class */ (function () {
    function MockTransactionEngine() {
        this.mockTxNum = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
        this.mockBalance = 0;
    }
    MockTransactionEngine.prototype.generateMockTx = function () {
        var descIndex = Math.floor(Math.random() * MockTransactionEngine.NEGATIVE_DESCRIPTIONS.length);
        var amount = -Math.random() * this.mockBalance;
        return __assign(__assign({}, MockTransactionEngine.NEGATIVE_DESCRIPTIONS[descIndex]), { amount: amount, date: "" });
    };
    MockTransactionEngine.prototype.generateMockDonation = function () {
        var descIndex = Math.floor(Math.random() * MockTransactionEngine.POSITIVE_DESCRIPTIONS.length);
        var amount = Math.random() * 1000;
        return __assign(__assign({}, MockTransactionEngine.POSITIVE_DESCRIPTIONS[descIndex]), { amount: amount, date: "" });
    };
    MockTransactionEngine.prototype.generateMockFiscalSponsorshipFee = function (donationAmount) {
        return {
            desc: "💰 Fiscal sponsorship fee",
            amount: -0.07 * donationAmount,
            date: "",
        };
    };
    MockTransactionEngine.prototype.generateMockTransactionList = function () {
        var _this = this;
        var mockTx = [];
        var index = 0;
        while (index < this.mockTxNum) {
            if (this.mockBalance > Math.floor(Math.random() * 40) + 1) {
                var tx = this.generateMockTx();
                mockTx.push(tx);
                this.mockBalance += tx.amount;
                index++;
            }
            else {
                var donation = this.generateMockDonation();
                mockTx.push(donation);
                this.mockBalance += donation.amount;
                var fee = this.generateMockFiscalSponsorshipFee(donation.amount);
                mockTx.push(fee);
                this.mockBalance += fee.amount;
                index += 2;
            }
        }
        var currentDate = new Date();
        mockTx.reverse().forEach(function (tx) {
            var randomInterval = tx.desc.includes("💰 Fiscal sponsorship fee")
                ? 7
                : Math.floor(Math.random() * (180 - 8 + 1)) + 8;
            tx.date = currentDate.toISOString().split("T")[0];
            currentDate.setDate(currentDate.getDate() - randomInterval);
        });
        return mockTx.reverse().map(function (tx) {
            return {
                amount: {
                    value: tx.amount.toFixed(2),
                    cents: Math.round(tx.amount * 100),
                },
                feePayment: tx.desc.includes("💰 Fiscal sponsorship fee"),
                date: tx.date,
                localHcbCode: {
                    memo: tx.desc,
                    receipts: _this.generateReceipts(tx),
                    comments: _this.generateComments(tx),
                    isDonation: tx.amount > 0,
                    donation: tx.amount > 0
                        ? {
                            isRecurring: !!tx.monthly,
                        }
                        : null,
                    tags: [],
                },
            };
        });
    };
    MockTransactionEngine.prototype.generateReceipts = function (tx) {
        if (tx.amount < 0 && !tx.desc.includes("💰 Fiscal sponsorship fee")) {
            return Math.random() < 0.9 ? [{}] : [];
        }
        return [];
    };
    MockTransactionEngine.prototype.generateComments = function (tx) {
        if (!tx.desc.includes("💰 Fiscal sponsorship fee") &&
            Math.random() > 1 / 3) {
            var numComments = Math.floor(Math.random() * 2) + 1;
            return Array(numComments).fill({});
        }
        return [];
    };
    MockTransactionEngine.prototype.run = function () {
        return this.generateMockTransactionList();
    };
    MockTransactionEngine.NEGATIVE_DESCRIPTIONS = [
        { desc: "🌶️ Jalapeños for the steamy social salsa sesh" },
        { desc: "👩‍💻 Payment for club coding lessons (solid gold; rare; imported)" },
        { desc: "🍺 Reimbursement for Friday night's team-building pub crawl" },
        { desc: "😨 Monthly payment to the local protection racket" },
        { desc: "🚀 Rocket fuel for Lucas' commute" },
        { desc: "🎵 Payment for a DJ for the club disco (groovy)" },
        { desc: "🤫 Hush money" },
        { desc: "🦄 Purchase of a cute unicorn for team morale" },
        { desc: "🍌 Bananas (Fairtrade)" },
        { desc: "💸 Withdrawal for emergency pizza run" },
        { desc: "🍔 Withdrawal for a not-so-emergency burger run" },
        { desc: "🧑‍🚀 Astronaut suit for Lucas to get home when it's cold" },
        { desc: "🫘 Chilli con carne (home cooked, just how you like it)" },
        { desc: "🦖 Purchase of a teeny tiny T-Rex" },
        { desc: "🧪 Purchase of lab rats for the club's genetics project" },
        { desc: "🐣 An incubator to help hatch big ideas" },
        { desc: "📈 Financial advisor to teach us better spending tips" },
        { desc: "🐛 Office wormery" },
        { desc: "📹 Webcams for the team x4" },
        { desc: "🪨 Hackathon rock tumbler" },
        { desc: "🌸 Payment for a floral arrangement" },
        { desc: "🧼 Purchase of eco-friendly soap for the club bathrooms" },
    ];
    MockTransactionEngine.POSITIVE_DESCRIPTIONS = [
        { desc: "💰 Donation from t̶͖̯́̒̇͝h̸͇̥̘̖̞̋͛̕ę̷̧̯̓̄͜ ̵̧̡̀̎͋̚v̸̰̰̝͈̟̂̇̏̓ͅo̶͓͈͑̑̄̍i̸͉̺͕̥̓̍d̵̟̮̼̠̺̿͌́" },
        { desc: "💰 Donation from the man in the walls", monthly: true },
        { desc: "💰 Donation from Dave from next door", monthly: true },
        { desc: "💰 Donation from Old Greg down hill" },
    ];
    return MockTransactionEngine;
}());
exports.default = MockTransactionEngine;
