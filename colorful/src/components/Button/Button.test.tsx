import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './Button';

test('first Button with test', () => {
    const btn = render(<Button>Good</Button>);
    const element = btn.queryByText('Good');
    expect(element).toBeTruthy();
})