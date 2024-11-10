import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders edit src/App.js and save to reload text', () => {
  render(<App />);
  const linkElement = screen.getByText(/edit src\/App.js and save to reload/i);
  expect(linkElement).toBeInTheDocument();
});
