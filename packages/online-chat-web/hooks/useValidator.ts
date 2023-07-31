import { useMemo, useState } from 'react';

interface ValidationRule {
    condition: (value: string) => boolean;
    error: string;
}

type RuleName =
    | 'email'
    | 'hasUpperCase'
    | 'minLength'
    | 'hasNumber'
    | 'notEmpty';

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasUpperCaseRegExp = /[A-Z]/;
const hasNumberRegExp = /\d/;
const minLength = 6;

const validationRules: { [key in RuleName]: ValidationRule } = {
    email: {
        condition: (value: string) => emailRegExp.test(value),
        error: 'Invalid email address',
    },
    hasUpperCase: {
        condition: (value: string) => hasUpperCaseRegExp.test(value),
        error: 'Password must contain at least one capital letter',
    },
    minLength: {
        condition: (value: string) => value.length >= minLength,
        error: `Password must be greater than ${minLength} symbols`,
    },
    hasNumber: {
        condition: (value: string) => hasNumberRegExp.test(value),
        error: 'Password must contain at least one number',
    },
    notEmpty: {
        condition: (value: string) => value.length !== 0,
        error: 'Cannot be empty',
    },
};

const generateValidator = (validationRulesNames: RuleName[]) => {
    const relevantValidationRules = validationRulesNames.map(
        name => validationRules[name],
    );

    const validator = (value: string) => {
        const error = relevantValidationRules.find(
            rule => !rule.condition(value),
        )?.error;

        return error ? error : '';
    };

    return validator;
};

const useValidator = (...validationRulesNames: RuleName[]) => {
    const [validationMessage, setValidationMessage] = useState('');

    const validator = useMemo(
        () => generateValidator(validationRulesNames),
        [],
    );

    const validate = (value: string) => {
        const validationMessage = validator(value);

        if (validationMessage) {
            setValidationMessage(validationMessage);
        }

        return !validationMessage;
    };

    const resetValidator = () => {
        setValidationMessage('');
    };

    return [validationMessage, validate, resetValidator] as const;
};

export default useValidator;
