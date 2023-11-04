import store from '@/app/stores/cryptoStore';

describe('Redux Store', () => {
  it('should create a Redux store', () => {
    expect(store.getState()).toBeDefined();
  });

  it('should have the correct reducer', () => {
    const rootReducer = store.getState();
    expect(rootReducer.crypto).toBeDefined();
  });
});