const transactionsRepository = require('../../DAL/Repositories/transactionsRespository');

const getTransactionsByUserId = (userId) => {
    try {
        return transactionsRepository.getTransactionsByUserId(userId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getTransactionsByUserId,
}