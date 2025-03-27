import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// `LoginPage` をモックし、`onLogin` を受け取るようにする
jest.mock('./components/LoginPage', () => (props) => {
  return <div>Mocked Login Page</div>;
});

test('renders App without crashing', () => {
  render(<App />);
  const loginElement = screen.getByText(/Mocked Login Page/i);
  expect(loginElement).toBeInTheDocument();
});