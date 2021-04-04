const { validate, sanitize } = require('@itaytur/validation');
const transactionValidations = require('../validations/transactionValidations');
const transactionSanititzers = require('../sanitizers/transactionSanitizers');
const transactionValidation = (req, res, next) => {
    try {
        const { body: transaction } = req;
        if (!validate.isValidObject(transaction, transactionValidations)) {
            throw new Error();
        }
        req.transaction = sanitize(transaction, transactionSanititzers);
        next();
    } catch (error) {
        res.status(400).send();
    }
};

module.exports = transactionValidation;