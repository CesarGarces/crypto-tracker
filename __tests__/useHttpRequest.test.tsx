import { renderHook } from '@testing-library/react-hooks';
import useHttpRequest from '@/app/hooks/useHttpRequest'; // Ajusta la importación a la ubicación de tu hook

describe('useHttpRequest', () => {
  let originalFetch: typeof globalThis.fetch;
  let fetchMock: jest.Mock;

  beforeEach(() => {
    originalFetch = globalThis.fetch;

    fetchMock = jest.fn();

    globalThis.fetch = fetchMock;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('handles errors', async () => {
    const url = 'https://example.com/api/data';
    const fakeError = new Error('Network error');

    fetchMock.mockRejectedValue(fakeError);

    const { result, waitForNextUpdate } = renderHook(() => useHttpRequest(url));
    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(fakeError);

    fetchMock.mockClear();
  });
});