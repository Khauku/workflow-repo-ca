import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername, saveUser } from '../js/utils/storage.js';

// Minimal localStorage mock for Node test env
const store = {};
const localStorageMock = {
  getItem: (k) => (k in store ? store[k] : null),
  setItem: (k, v) => {
    store[k] = String(v);
  },
  removeItem: (k) => {
    delete store[k];
  },
  clear: () => {
    for (const k in store) delete store[k];
  },
};

beforeEach(() => {
  //reset mock and attach before every test
  for (const k in store) delete store[k];
  globalThis.localStorage = localStorageMock;
});

describe('getUsername', () => {
  it('returns the same from the user object in storage', () => {
    saveUser({ name: 'Karina test' });
    expect(getUsername()).toBe('Karina test');
  });

  it('returns null when no user exists in storage', () => {
    // store is empty due to beforeEach
    expect(getUsername()).toBeNull();
  });
});
