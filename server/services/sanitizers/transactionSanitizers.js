const { sanitizers } = require('@itaytur/validation')

const transactionSanitizers = [
    { counterparty: sanitizers.TRIM},
    { counterparty: sanitizers.LOWER_CASE},
]

module.exports = transactionSanitizers