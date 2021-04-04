const transactionsRepository = require('../../DAL/Repositories/transactionsRespository');
const { v4: uuidv4 } = require('uuid');

const getTransactionsByUserId = (userId) => {
    try {
        const transactions = transactionsRepository.getTransactionsByUserId(userId);
        const transactionsToReturn = [];
        for (counterparty in transactions) {
            for (data of transactions[counterparty]) {
                const formattedTransaction = formatTransction(userId, counterparty, data);
                transactionsToReturn.push(formattedTransaction);
            }
        }
        return transactionsToReturn;
    } catch (error) {
        throw error;
    }
}

const formatTransction = (tradingParty, counterparty, data) => ({
    id: data.id,
    tradingParty,
    counterparty,
    amount: data.amount,
});

const addTransaction = (transaction) => {
    try {
        const newTransaction =  transactionsRepository.addTransaction({ ...transaction, id: uuidv4() });
        return formatTransction(transaction.tradingParty, transaction.counterparty, newTransaction)
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getTransactionsByUserId,
    addTransaction,
}