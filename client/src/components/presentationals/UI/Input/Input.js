import classes from './Input.module.css'

const inputs = {
    text: ({ onChange, inputClasses, onBlur }) => <input onChange={onChange} className={inputClasses} onBlur={onBlur} />,
}

const Input = ({ label, type, onChange, isValid, isBlured, onBlur, error }) => {

    let inputClasses = classes.Input
    let errorMsgClasses = classes.ErrorMessage
    if (!isValid && isBlured) {
        inputClasses += ` ${classes.InputError}`
        errorMsgClasses += ` ${classes.ErrorShown}`
    }
    const input = inputs[type]({ onChange, inputClasses, onBlur })
    return (
        <div className={classes.InputContainer}>
            <label className={classes.Label}> {label} </label>
            {input}
            <p className={errorMsgClasses}>{error}</p>
        </div>
    )
}

export default Input