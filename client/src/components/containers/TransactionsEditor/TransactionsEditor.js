import { useState, useEffect } from 'react';
import transactionsAxios from '../../../transactionsAxios';

import Header from '../../presentationals/Header/Header';
import Transactions from '../../presentationals/Transactions/Transactions';
import Controllers from '../../presentationals/Controllers/Controllers';

import classes from './TransactionsEditor.module.css';

const TransactionsEditor = () => {
    const [payingTransactions, setPayingTransactions] = useState([]);
    const [receivingTransactions, setReceivingTransactions] = useState([]);

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async () => {
        const { data: transactionsToSet } = await transactionsAxios.get('/transactions');
        const payingTransactionsToSet = [];
        const receivingTransactionsToSet = [];
        transactionsToSet.forEach(transaction => {
            if (transaction.amount > 0) {
                payingTransactionsToSet.push(transaction);
            } else {
                receivingTransactionsToSet.push(transaction);
            }
        })
        setPayingTransactions(payingTransactionsToSet);
        setReceivingTransactions(receivingTransactionsToSet);
    }
    return (
        <div className={classes.TransactionsEditor}>
            <Header />
            <div className={classes.TransactionsContainer}>
                <Transactions title="Paying" transactions={payingTransactions} />
                <Transactions title="Receving" transactions={receivingTransactions} />
            </div>
            <Controllers />
        </div>
    );
};

export default TransactionsEditor;