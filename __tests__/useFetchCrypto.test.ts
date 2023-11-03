import React from 'react';
import { renderHook } from '@testing-library/react';
import useFetchCrypto from '../app/hooks/useFetchCrypto';

// Mock de useHttpRequest para simular su comportamiento
const mockUseHttpRequest = jest.fn();



// Sobrescribe el módulo real con la función simulada


describe('useFetchCrypto', () => {
  jest.mock('../app/hooks/useHttpRequest', () => ({
  __esModule: true,
  default: mockUseHttpRequest,
}));
  it('fetches crypto data with a default limit of 10', () => {
    // Mock de useHttpRequest para devolver datos simulados
    const mockData = [{ id: 1, name: 'Bitcoin' }, { id: 2, name: 'Ethereum' }];
    mockUseHttpRequest.mockReturnValue({ data: mockData, isLoading: false, error: null });

    // Renderiza el hook
    const { result } = renderHook(() => useFetchCrypto());

    // Verifica que el hook devuelva los datos simulados y que no esté cargando ni tenga errores
    expect(result.current.data).toEqual(mockData);
  });

  it('fetches crypto data with a custom limit', () => {
    const customLimit = 20;
    // Mock de useHttpRequest para devolver datos simulados
    const mockData = [{ id: 1, name: 'Bitcoin' }, { id: 2, name: 'Ethereum' }];
    require('../app/hooks/useHttpRequest').mockReturnValue({ data: mockData, isLoading: false, error: null });

    // Renderiza el hook con un límite personalizado
    const { result } = renderHook(() => useFetchCrypto(customLimit));

    // Verifica que el hook devuelva los datos simulados y que no esté cargando ni tenga errores
    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('handles loading state and errors', () => {
    // Mock de useHttpRequest para simular un estado de carga y un error
    require('../app/hooks/useHttpRequest').mockReturnValue({ data: null, isLoading: true, error: 'Network error' });

    // Renderiza el hook
    const { result } = renderHook(() => useFetchCrypto());

    // Verifica que el hook esté en estado de carga y tenga un error
    expect(result.current.data).toBe(null);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe('Network error');
  });
});