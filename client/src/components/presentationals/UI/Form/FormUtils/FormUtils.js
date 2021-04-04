export const getInputObj = ({ type = 'text', label, value = '', validations = [], error = 'Invalid input', isValid = false, attrs = {}, isDisabled = false }) => {
    return {
        type,
        label,
        value,
        attrs,
        isValid,
        isBlured: false,
        validations,
        error,
        isDisabled,
    }
}

export const getValidation = (type, options) => {
    return {
        type,
        options
    }
}