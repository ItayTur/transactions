const express = require('express');
const transactionsManager = require('../../BL/managers/transactionsManager');

const transactionsRouter = new express.Router();

transactionsRouter.get('/transactions', (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const transactions =  transactionsManager.getTransactionsByUserId('itay');
        res.send(transactions);
    } catch (error) {
        res.status(500).send({ error })
    }
})

module.exports = transactionsRouter;