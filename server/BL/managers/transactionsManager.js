const transactionsRepository = require('../../DAL/Repositories/transactionsRespository');

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

module.exports = {
    getTransactionsByUserId,
}