const express = require('express');
const transactionsManager = require('../../BL/managers/transactionsManager');

const transactionsRouter = new express.Router();

transactionsRouter.get('/transactions', (req, res) => {
    try {
        console.log('[transactionsRouter.js] get req:', req);
        const transactions = transactionsManager.getTransactionsByUserId('itay');
        console.log('[transactionsRouter.js] get res:', transactions);
        res.send(transactions);
    } catch (error) {
        res.status(500).send({ error })
    }
})

transactionsRouter.post('/transactions', (req, res) => {
    try {
        console.log('[transactionsRouter.js] post req:', req);
        const newTransaction = transactionsManager.addTransaction(req.body);
        console.log('[transactionsRouter.js] post res:', newTransaction);
        res.status(201).send(newTransaction);
    } catch (error) {
        res.status(500).send({ error })
    }
})

module.exports = transactionsRouter;