import { TextField } from '@mui/material';
import { render, screen } from '@testing-library/react';
import inputWithValidation from './inputWithValidation';

const inputId = 'test-input-id';

test('should display input', () => {
    const testInputValue = 'test text';
    const testTextField: React.FC = () => {
        return <TextField>{testInputValue}</TextField>;
    };
    const TestTextFieldWithValidation = inputWithValidation(testTextField);

    render(<TestTextFieldWithValidation id={inputId} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
});

test('should display validation message', () => {
    const testInputValue = 'test text';
    const errorMessage = 'test validation';
    const testTextField: React.FC = () => {
        return <TextField>{testInputValue}</TextField>;
    };
    const TestTextFieldWithValidation = inputWithValidation(testTextField);

    render(
        <TestTextFieldWithValidation
            id={inputId}
            errorMessage={errorMessage}
        />,
    );

    const validationMessage = screen.getByText(errorMessage);

    expect(validationMessage).toBeInTheDocument();
});
