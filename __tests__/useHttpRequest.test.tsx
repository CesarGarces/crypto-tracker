import React from 'react';
import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useHttpRequest from '../app/hooks/useHttpRequest';

// Mock de fetch
global.fetch = jest.fn();

describe('useHttpRequest', () => {
  it('fetches data successfully', async () => {
    const url = 'https://example.com/data';
    const mockData = { data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] };
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    })

    // Componente de prueba que utiliza el hook
    function TestComponent() {
      const { data, isLoading, error } = useHttpRequest(url);
      return (
        <div>
          {isLoading && <div>Loading data...</div>}
          {error ? <div>Error: {error.message}</div> : null}
          {data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      );
    }

    // Renderiza el componente de prueba
    render(<TestComponent />);

    // Verifica que se muestra el mensaje de carga mientras se carga la data
    expect(screen.getByText('Loading data...')).toBeInTheDocument();

    // Espera a que la promesa de fetch se resuelva
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); // Espera un ciclo de eventos
    });

    // Verifica que la data se muestra correctamente
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.queryByText('Loading data...')).toBeNull();
    expect(screen.queryByText('Error:')).toBeNull();
  });

  it('handles errors during fetching', async () => {
    const url = 'https://example.com/error';
    const mockError = new Error('Network error');
    global.fetch.mockRejectedValue(mockError);

    // Componente de prueba que utiliza el hook
    function TestComponent() {
      const { data, isLoading, error } = useHttpRequest(url);
      return (
        <div>
          {isLoading && <div>Loading data...</div>}
          {error ? <div>Error: {error.message}</div> : null}
          {data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      );
    }

    // Renderiza el componente de prueba
    render(<TestComponent />);

    // Espera a que la promesa de fetch se rechace
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); // Espera un ciclo de eventos
    });

    // Verifica que se muestra el mensaje de error
    expect(screen.getByText('Error: Network error')).toBeInTheDocument();
    expect(screen.queryByText('Loading data...')).toBeNull();
  });
});