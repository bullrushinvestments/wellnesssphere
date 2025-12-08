import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(() => ({ data: [], loading: false, error: null })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: true, error: null }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByRole('status')).toHaveTextContent(/loading/i);
  });

  test('handles errors gracefully when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: false, error: new Error(errorMessage) }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/error/i)).toHaveTextContent(errorMessage);
  });

  test('user can interact with the component', () => {
    const mockFn = jest.fn();
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).toHaveBeenCalled();
  });

  test('component is accessible', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('edge case - empty data', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    const noDataMessage = screen.queryByText(/no data available/i);
    expect(noDataMessage).toBeInTheDocument();
  });

  test('edge case - large dataset', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: Array(1000).fill({}), loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBeGreaterThan(999);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(() => ({ data: [], loading: false, error: null })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: true, error: null }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByRole('status')).toHaveTextContent(/loading/i);
  });

  test('handles errors gracefully when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: false, error: new Error(errorMessage) }));
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/error/i)).toHaveTextContent(errorMessage);
  });

  test('user can interact with the component', () => {
    const mockFn = jest.fn();
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).toHaveBeenCalled();
  });

  test('component is accessible', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('edge case - empty data', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    const noDataMessage = screen.queryByText(/no data available/i);
    expect(noDataMessage).toBeInTheDocument();
  });

  test('edge case - large dataset', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: Array(1000).fill({}), loading: false, error: null }));
    render(<CoreFunctionalityComponent />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBeGreaterThan(999);
  });
});