import Button from '../UI/Button/Button';

import classes from './Controllers.module.css';

const Controllers = ({ onAdd, onCompress }) => {
    return (
        <div className={classes.Controllers}>
            <Button text="Add New Transaction" onClick={onAdd} />
            <Button text="Compress Transactions" onClick={onCompress} />
        </div>
    );
};

export default Controllers;