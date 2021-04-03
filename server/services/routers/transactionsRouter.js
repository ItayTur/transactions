const express = require('express');
const transactionsManager = require('../../BL/managers/transactionsManager');
const auth = require('../middlewares/auth');

const transactionsRouter = new express.Router();

transactionsRouter.get('/transactions', auth, (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        return transactionsManager.getTransactionsByUserId(req.userId)
    } catch (error) {
        res.status(500).send({ error })
    }
})

module.exports = transactionsRouter;