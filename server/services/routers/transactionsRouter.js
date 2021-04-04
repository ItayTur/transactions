const express = require('express');
const transactionsManager = require('../../BL/managers/transactionsManager');

const transactionsRouter = new express.Router();

transactionsRouter.get('/transactions', (req, res) => {
    try {
        const transactions = transactionsManager.getTransactionsByUserId('itay');
        res.send(transactions);
    } catch (error) {
        res.status(500).send({ error })
    }
})

transactionsRouter.post('/transactions', (req, res) => {
    try {
        const newTransaction = transactionsManager.addTransaction(req.body);
        res.status(201).send(newTransaction);
    } catch (error) {
        res.status(500).send({ error })
    }
})

module.exports = transactionsRouter;