import { expect, test } from '@jest/globals';
import { renderHook, act } from '@testing-library/react';

import useValidator from './useValidator';

test('should validate correct email with empty string', () => {
    const email = 'example@mail.com';
    const { result } = renderHook(() => useValidator('email'));

    act(() => {
        result.current[1](email);
    });

    expect(result.current[0]).toBe('');
});

test('should set validation error for incorrect email', () => {
    const incorrectEmails = ['', 'email', 'email.com', 'email@mail'];
    const { result } = renderHook(() => useValidator('email'));
    incorrectEmails.forEach(email => {
        act(() => {
            result.current[1](email);
        });

        expect(result.current[0]).toBe('Invalid email address');
    });
});

test('should validate correct password with empty string ', () => {
    const password = 'Pa$$word1';
    const { result } = renderHook(() =>
        useValidator('notEmpty', 'hasNumber', 'hasUpperCase', 'minLength'),
    );

    act(() => {
        result.current[1](password);
    });

    expect(result.current[0]).toBe('');
});

test('should set validation error for incorrect password', () => {
    const incorrectPasswords = [
        '',
        'Pa$$word',
        'pa$$word1',
        'Password1',
        'Pa$$w',
    ];
    const { result } = renderHook(() =>
        useValidator('notEmpty', 'hasNumber', 'hasUpperCase', 'minLength'),
    );

    incorrectPasswords.forEach(password => {
        act(() => {
            result.current[1](password);
        });

        expect(result.current[0]).not.toBe('');
    });
});
