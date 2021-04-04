const { validations } = require('@itaytur/validation');

const transactionValidations = [
    { counterparty: validations.IS_REQUIRED },
    { amount: validations.IS_NUMERIC_ONLY },
    { amount: validations.IS_REQUIRED },
];

module.exports = transactionValidations;