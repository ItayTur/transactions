import Button from '../UI/Button/Button';

import classes from './Controllers.module.css';

const Controllers = () => {
    return (
        <div className={classes.Controllers}>
            <Button text="Add New Transaction"/>
            <Button text="Compress Transactions"/>
        </div>
    );
};

export default Controllers;