import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/app/stores/cryptoStore';
import React from 'react';
import './globals.css'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;