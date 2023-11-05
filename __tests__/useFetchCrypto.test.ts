import { renderHook } from '@testing-library/react';
import useFetchCrypto from '../app/hooks/useFetchCrypto';

// Mock of use HttpRequest to simulate its behavior
const mockUseHttpRequest = jest.fn();

describe('useFetchCrypto', () => {
  jest.mock('../app/hooks/useHttpRequest', () => ({
    __esModule: true,
    default: mockUseHttpRequest,
  }));

  const mockData = [
    { id: 1, name: 'Bitcoin' },
    { id: 2, name: 'Ethereum' },
  ];

  it('fetches crypto data with a default limit of 10', () => {
    mockUseHttpRequest.mockReturnValue({ data: mockData, isLoading: false, error: null });

    const { result } = renderHook(() => useFetchCrypto());

    expect(result.current.data).toBeDefined();
    expect(result.current.isLoading).toBe(false);
  });

  it('handles loading state and errors', () => {
    mockUseHttpRequest.mockReturnValue({ data: null, isLoading: true, error: 'Network error' });

    const { result } = renderHook(() => useFetchCrypto());

    expect(result.current.data).toStrictEqual([]);
    expect(result.current.isLoading).toBe(false);
  });
});