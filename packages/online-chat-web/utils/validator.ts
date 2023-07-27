interface ValidationRule {
    condition: (value: string) => boolean;
    error: string;
}

type RuleName = 'email' | 'hasUpperCase' | 'minLength' | 'hasNumber';

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasUpperCaseRegExp = /[A-Z]/;
const hasNumberRegExp = /\d/;
const minLength = 6;

const validationRules: { [key in RuleName]: ValidationRule } = {
    email: {
        condition: (value: string) => {
            return emailRegExp.test(value);
        },
        error: 'Invalid email address',
    },
    hasUpperCase: {
        condition: (value: string) => {
            return hasUpperCaseRegExp.test(value);
        },
        error: 'Password must contain at least one capital letter',
    },
    minLength: {
        condition: (value: string) => {
            return value.length < minLength;
        },
        error: `Password must be greater than ${minLength} symbols`,
    },
    hasNumber: {
        condition: (value: string) => {
            return hasNumberRegExp.test(value);
        },
        error: 'Password must contain at least one number',
    },
};

const generateValidator = (...validationRulesNames: RuleName[]) => {
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

export default generateValidator;
