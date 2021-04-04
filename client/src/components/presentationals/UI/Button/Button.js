import classes from './Button.module.css';

const Button = ({ onClick, text, isDisabled }) => {
    return (
        <button className={classes.Button} onClick={onClick} disabled={isDisabled}>
            {text}
        </button>
    );
};

export default Button;