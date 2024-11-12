import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText('Welcome to My DevOps Application');
  expect(welcomeElement).toBeInTheDocument();
});

test('renders simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('This is made by Abhishek');
  expect(descriptionElement).toBeInTheDocument();
});

test('renders 2nd simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('Enjoy!!!');
  expect(descriptionElement).toBeInTheDocument();
});
