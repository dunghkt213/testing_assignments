const { calculateLateFee } = require('./calculateLateFee');

describe('calculateLateFee', () => {
  test('P1: daysLate < 0 hoặc bookPrice < 0 → return -1', () => {
    expect(calculateLateFee(-1, 100000)).toBe(-1);
    expect(calculateLateFee(10, -50000)).toBe(-1);
  });

  test('P2: daysLate = 0 → return 0', () => {
    expect(calculateLateFee(0, 100000)).toBe(0);
  });

  test('P3: 1 ≤ daysLate ≤ 7 → return 1000 * daysLate', () => {
    expect(calculateLateFee(5, 100000)).toBe(1000 * 5);
  });

  test('P4: 8 ≤ daysLate ≤ 14 → return 2000 * daysLate', () => {
    expect(calculateLateFee(10, 100000)).toBe(2000 * 10);
  });

  test('P5: 15 ≤ daysLate ≤ 60 và 5000 * daysLate < 200000 → return 5000 * daysLate', () => {
    expect(calculateLateFee(20, 100000)).toBe(5000 * 20);
  });

  test('P6: 15 ≤ daysLate ≤ 60 và 5000 * daysLate ≥ 200000 → return 200000', () => {
    expect(calculateLateFee(45, 100000)).toBe(200000);
    expect(calculateLateFee(60, 100000)).toBe(200000);
  });

  test('P7: daysLate > 60 → return 200000 + bookPrice', () => {
    expect(calculateLateFee(70, 150000)).toBe(200000 + 150000);
  });
});
