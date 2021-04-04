import { validations } from '@itaytur/validation'
import { getInputObj, getValidation } from '../components/presentationals/UI/Form/FormUtils/FormUtils'

const inputs = {
    tradingParty: getInputObj({
        label: 'Trading Party',
        type: 'text',
        validations: [
            getValidation(validations.IS_REQUIRED)
        ],
        error: 'Trading party is required',
        isDisabled: true,
        isValid: true,
        value: 'itay',
    }),
    counterparty: getInputObj({
        label: 'Counter Party',
        type: 'text',
        validations: [
            getValidation(validations.IS_REQUIRED)
        ],
        error: 'Counter party is required',
    }),
    amount: getInputObj({
        label: 'Amount',
        type: 'text',
        validations: [
            getValidation(validations.IS_NUMERIC_ONLY),
            getValidation(validations.IS_BIGGER_THAN, { limit: 1 }),
            getValidation(validations.IS_REQUIRED),
        ],
        error: 'positive numbers only',
    })
}

export default inputs