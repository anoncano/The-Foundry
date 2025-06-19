import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('renders welcome message', () => {
  render(<Home />);
  const header = screen.getByText(/The Foundry/i);
  expect(header).toBeInTheDocument();
});
