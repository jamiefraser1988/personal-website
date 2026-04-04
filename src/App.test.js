import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand and work section', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /jamie fraser/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /selected_works/i })).toBeInTheDocument();
});
