import Transaction from '../Transaction/Transaction';

import classes from './Transactions.module.css';

const Transactions = ({ transactions, title }) => {
    const transactionsToShow = transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)
    return (
        <div className={classes.Transactions}>
            <h2>{title}</h2>
            <table className={classes.Table}>
                <thead>
                    <tr>
                        <th>Counterparty Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsToShow}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;