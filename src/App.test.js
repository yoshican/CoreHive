// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreHive title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreHive/i);
    expect(titleElement).toBeInTheDocument();
});
