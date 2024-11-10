import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText('Welcome to My React App');
  expect(welcomeElement).toBeInTheDocument();
});

test('renders simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('This is a simple React application made by Manish Singh Talan');
  expect(descriptionElement).toBeInTheDocument();
});
