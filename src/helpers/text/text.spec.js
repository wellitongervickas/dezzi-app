import monetize from 'helpers/text/monetize';
import namelize from 'helpers/text/namelize';
import phonelize from 'helpers/text/phonelize';

describe('Helpers Text', () => {
  it('should be defined', () => {
    expect(monetize).toBeDefined();
    expect(namelize).toBeDefined();
    expect(phonelize).toBeDefined();
  });

  it('should have monetized values', () => {
    expect(monetize()).toBe('$0.00');
    expect(monetize(null)).toBe('$0.00');
    expect(monetize(undefined)).toBe('$0.00');
    expect(monetize(0)).toBe('$0.00');
    expect(monetize(1)).toBe('$1.00');
    expect(monetize(100)).toBe('$100.00');
    expect(monetize(100.20)).toBe('$100.20');
  });

  it('should have phone values without country code', () => {
    expect(phonelize()).toBe('');
    expect(phonelize(null)).toBe('');
    expect(phonelize(undefined)).toBe('');
    expect(phonelize('123456789')).toBe('123456789');
    expect(phonelize('+55123456789')).toBe('123456789');
  });

  it('should have a namelized values', () => {
    expect(namelize()).toBe('');
    expect(namelize(null, null)).toBe('');
    expect(namelize(undefined, undefined)).toBe('');
    expect(namelize('welliton')).toBe('welliton');
    expect(namelize('welliton', 'gervickas')).toBe('welliton gervickas');
    expect(namelize(null, 'gervickas')).toBe('gervickas');
  });
});
