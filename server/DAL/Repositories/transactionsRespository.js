const transactions = require('../transactions.json');

const getTransactionsByUserId = (userId) => {
    try {
        return transactions[userId];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getTransactionsByUserId
}