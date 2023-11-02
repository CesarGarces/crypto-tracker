import { describe, test, expect  } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CryptoFilter from './CryptoFilter';

describe('<CryptoFilter />', () => {
  test('type in input', () => {
    const user = userEvent.setup()
    render(<CryptoFilter data={[]} />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()
  })
})