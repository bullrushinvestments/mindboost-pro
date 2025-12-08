import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      id: '1',
      name: 'Sample Data',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    render(<CoreFunctionalityComponent />);
  });

  test('renders loading state when fetching data', async () => {
    // Mock the API call to delay the response
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve({})).mockResolvedValueOnce({
      data: {
        id: '1',
        name: 'Sample Data',
      },
    });

    const { getByText } = render(<CoreFunctionalityComponent />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('renders data after fetching', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/sample data/i));
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    const { getByText } = render(<CoreFunctionalityComponent />);
    expect(getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  test('displays correct data after user interaction', () => {
    fireEvent.click(screen.getByRole('button', { name: /update/i }));
    expect(screen.getByText(/updated sample data/i)).toBeInTheDocument();
  });

  test('validates form inputs and shows error messages', async () => {
    const { getByLabelText, getByText } = render(<CoreFunctionalityComponent />);
    fireEvent.change(getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(getByText(/please enter a valid name/i)).toBeInTheDocument();
  });

  test('tests accessibility features', () => {
    const input = screen.getByLabelText(/name/i);
    expect(input).toHaveAttribute('aria-label', 'Name');
    fireEvent.change(input, { target: { value: 'Test Name' } });
    expect(screen.getByRole('button')).toBeEnabled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      id: '1',
      name: 'Sample Data',
    },
  }),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    render(<CoreFunctionalityComponent />);
  });

  test('renders loading state when fetching data', async () => {
    // Mock the API call to delay the response
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve({})).mockResolvedValueOnce({
      data: {
        id: '1',
        name: 'Sample Data',
      },
    });

    const { getByText } = render(<CoreFunctionalityComponent />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('renders data after fetching', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/sample data/i));
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    const { getByText } = render(<CoreFunctionalityComponent />);
    expect(getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  test('displays correct data after user interaction', () => {
    fireEvent.click(screen.getByRole('button', { name: /update/i }));
    expect(screen.getByText(/updated sample data/i)).toBeInTheDocument();
  });

  test('validates form inputs and shows error messages', async () => {
    const { getByLabelText, getByText } = render(<CoreFunctionalityComponent />);
    fireEvent.change(getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(getByText(/please enter a valid name/i)).toBeInTheDocument();
  });

  test('tests accessibility features', () => {
    const input = screen.getByLabelText(/name/i);
    expect(input).toHaveAttribute('aria-label', 'Name');
    fireEvent.change(input, { target: { value: 'Test Name' } });
    expect(screen.getByRole('button')).toBeEnabled();
  });
});