import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchProductData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders without crashing', () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    const fetchProductData = jest.fn().mockResolvedValue({} as any);
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<DesignArchitecture />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    const fetchProductData = jest.fn().mockRejectedValue(new Error());
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.reject(new Error())
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/error loading products/i)).toBeInTheDocument());
  });

  test('displays product list when data is fetched successfully', async () => {
    const mockData = [{ id: '1', name: 'Product A' }];
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());
  });

  test('handles user interaction with product cards', async () => {
    const mockData = [{ id: '1', name: 'Product A' }];
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());

    fireEvent.click(screen.getByTestId('product-card-1'));
    expect(window.location.pathname).toBe(`/product/${mockData[0].id}`);
  });

  test('ensures accessibility features are implemented', () => {
    render(<DesignArchitecture />);
    const productCard = screen.getAllByRole('button')[0];
    expect(productCard).toHaveAttribute('aria-label');
    fireEvent.keyDown(productCard, { key: 'Enter' });
    expect(window.location.pathname).toBe('/product/1'); // Assuming the first product has id 1
  });

  test('handles edge cases such as empty data', async () => {
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchProductData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders without crashing', () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    const fetchProductData = jest.fn().mockResolvedValue({} as any);
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<DesignArchitecture />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    const fetchProductData = jest.fn().mockRejectedValue(new Error());
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.reject(new Error())
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/error loading products/i)).toBeInTheDocument());
  });

  test('displays product list when data is fetched successfully', async () => {
    const mockData = [{ id: '1', name: 'Product A' }];
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());
  });

  test('handles user interaction with product cards', async () => {
    const mockData = [{ id: '1', name: 'Product A' }];
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/product a/i)).toBeInTheDocument());

    fireEvent.click(screen.getByTestId('product-card-1'));
    expect(window.location.pathname).toBe(`/product/${mockData[0].id}`);
  });

  test('ensures accessibility features are implemented', () => {
    render(<DesignArchitecture />);
    const productCard = screen.getAllByRole('button')[0];
    expect(productCard).toHaveAttribute('aria-label');
    fireEvent.keyDown(productCard, { key: 'Enter' });
    expect(window.location.pathname).toBe('/product/1'); // Assuming the first product has id 1
  });

  test('handles edge cases such as empty data', async () => {
    (global.fetch as unknown as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<DesignArchitecture />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });
});