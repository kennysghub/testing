import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the correct content', () => {
  render(<App />);
  const element = screen.getByTestId('app-div');
  expect(element).toHaveTextContent('Hello, this is a simple React App with TypeScript!');
}); 