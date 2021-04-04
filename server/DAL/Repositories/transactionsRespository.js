const fs = require('fs');
const transactions = require('../transactions.json');

const getTransactionsByUserId = (userId) => {
    try {
        return transactions[userId];
    } catch (error) {
        throw error;
    }
}

const addTransaction = ({ tradingParty, counterparty, amount, id }) => {
    try {
        const newTransaction = { amount, id }
        setTransaction(
            tradingParty,
            counterparty,
            () => transactions[tradingParty][counterparty].push(newTransaction),
            () => transactions[tradingParty][counterparty] = [newTransaction],
            () => transactions[tradingParty] = {
                [counterparty]: [newTransaction]
            }
        );
        const counterTransaction = { amount: -1 * amount, id }
        setTransaction(
            counterparty,
            tradingParty,
            () => transactions[counterparty][tradingParty].push(counterTransaction),
            () => transactions[counterparty][tradingParty] = [counterTransaction],
            () => transactions[counterparty] = {
                [tradingParty]: [counterTransaction]
            }
        );
        fs.writeFileSync('./DAL/transactions.json', JSON.stringify(transactions));
        return transactions[tradingParty][counterparty][transactions[tradingParty][counterparty].length - 1];
    } catch (error) {
        throw error;
    }
}

const setTransaction = (tradingParty, counterparty, oldCounterpartySetter, newCounterpartySetter, newTradingPartySetter) => {
    if (transactions[tradingParty]) {
        if (transactions[tradingParty][counterparty]) {
            oldCounterpartySetter();
        } else {
            newCounterpartySetter();
        }
    } else {
        newTradingPartySetter()
    }
}

module.exports = {
    getTransactionsByUserId,
    addTransaction
}