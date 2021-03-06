import { useState, useEffect } from 'react';
import transactionsAxios from '../../../transactionsAxios';
import transactionInputs from '../../../Inputs/transactionInputs';

import Header from '../../presentationals/Header/Header';
import Transactions from '../../presentationals/Transactions/Transactions';
import Controllers from '../../presentationals/Controllers/Controllers';
import Modal from '../../presentationals/UI/Modal/Modal';
import Form from '../../presentationals/UI/Form/Form';
import csvExporter from './CsvExporter/CsvExporter';

import classes from './TransactionsEditor.module.css';

const TransactionsEditor = () => {
    const [payingTransactions, setPayingTransactions] = useState([]);
    const [receivingTransactions, setReceivingTransactions] = useState([]);
    const [isAddingTransaction, setIsAddingTransaction] = useState(false);

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

    const openTransactionForm = () => {
        setIsAddingTransaction(true);
    }

    const closeTransactionForm = () => {
        setIsAddingTransaction(false);
    }

    const onSubmitTransaction = async ({ formData: transaction }) => {
        try {
            const { data: newTransaction } = await transactionsAxios.post('/transactions', transaction);
            if (newTransaction.amount > 0) {
                setPayingTransactions(prev => {
                    prev.push(newTransaction)
                    return prev;
                });
            } else {
                setReceivingTransactions(prev => {
                    prev.push(newTransaction)
                    return prev;
                });
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong :(')
        } finally {
            closeTransactionForm();
        }

    }

    const onCompress = () => {
        const compressedTransactions = {};
        const reducer = ({ counterparty, amount }) => {
            if (compressedTransactions[counterparty]) {
                compressedTransactions[counterparty] += amount;
            } else {
                compressedTransactions[counterparty] = amount;
            }
        }
        payingTransactions.forEach(reducer);
        receivingTransactions.forEach(reducer);
        const compressedTransactionsToSet = [];
        for (const counterparty in compressedTransactions) {
            compressedTransactionsToSet.push({ counterparty, amount: compressedTransactions[counterparty] })
        }
         
        csvExporter.generateCsv(compressedTransactionsToSet);
    }

    return (
        <div className={classes.TransactionsEditor}>
            <Header />
            <div className={classes.TransactionsContainer}>
                <Transactions title="Paying" transactions={payingTransactions} />
                <Transactions title="Receving" transactions={receivingTransactions} />
            </div>
            <Controllers onAdd={openTransactionForm} onCompress={onCompress} />
            <Modal isOpen={isAddingTransaction} onClose={closeTransactionForm}>
                {isAddingTransaction &&
                    <Form
                        title="Transaction Form"
                        inputs={transactionInputs}
                        submitText="Submit"
                        onSubmit={onSubmitTransaction}
                    />}
            </Modal>
        </div>
    );
};

export default TransactionsEditor;