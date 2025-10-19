import { describe, it, expect } from 'vitest';
import { isActivePath } from '../js/utils/userInterface.js';

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/venues', '/venues')).toBe(true);
    expect(isActivePath('/login', '/login')).toBe(true);
  });

  it('returns true for root "/" when current path is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('returns true for root "/" when current path is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when current path includes the href (nested path)', () => {
    expect(isActivePath('/venues', '/venues/123')).toBe(true);
    expect(isActivePath('/account', '/account/settings')).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath('/about', '/venues')).toBe(false);
    expect(isActivePath('/login', '/register')).toBe(false);
  });
});
