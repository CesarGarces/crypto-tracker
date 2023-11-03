import { render, screen } from '@testing-library/react'
import Home from '../app/pagekkk'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
  test('renders component with default quantity', () => {
    render(<Home />);
    const defaultQuantityButton = screen.getByText('10');
    expect(defaultQuantityButton).toBeInTheDocument();
  });

  test('changes quantity when buttons are clicked', () => {
    render(<Home />);
    const quantity50Button = screen.getByText('50');
    userEvent.click(quantity50Button);
    const quantity100Button = screen.getByText('100');
    userEvent.click(quantity100Button);
    expect(quantity100Button).toHaveClass('bg-slate-900');
  });
})