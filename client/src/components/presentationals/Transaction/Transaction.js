import classes from './Transaction.module.css';

const Transaction = ({ counterparty, amount }) => {
    return (
        <tr className={classes.Transaction}>
            <td>{counterparty}</td>
            <td>{amount}</td>
        </tr>
    );
};

export default Transaction;