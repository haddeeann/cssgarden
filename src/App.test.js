import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  window.history.pushState({}, '', '/');
});

test('renders the issue index without a subscribe link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Issues' })).toBeTruthy();
  expect(screen.getByRole('link', { name: /How to stop fighting your layout/i })).toBeTruthy();
  expect(screen.queryByText('Subscribe')).toBeNull();
});

test('updates generated CSS in the article playground', () => {
  window.history.pushState({}, '', '/issues/flexbox');
  render(<App />);

  fireEvent.click(screen.getAllByRole('button', { name: 'space-between' })[0]);
  expect(screen.getByLabelText('Generated CSS').textContent).toContain('justify-content: space-between');
});

test('renders the supplied about copy', () => {
  window.history.pushState({}, '', '/about');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'About Foxy CSS' })).toBeTruthy();
  expect(screen.getByText(/supervised, loosely, by two dogs/i)).toBeTruthy();
});
