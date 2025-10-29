const { calculateLateFee } = require('./calculateLateFee');

describe("calculateLateFee - Complete Path Coverage", () => {

  test("P1: Invalid input -> return -1", () => {
    expect(calculateLateFee(-1, 10000)).toBe(-1);
  });

  test("P2: daysLate = 0 -> return 0", () => {
    expect(calculateLateFee(0, 10000)).toBe(0);
  });

  test("P3: daysLate in 1..7", () => {
    expect(calculateLateFee(5, 10000)).toBe(5000);
  });

  test("P4: daysLate in 8..14", () => {
    expect(calculateLateFee(10, 50000)).toBe(20000);
  });

  test("P5: daysLate in 15..40, 5000 * daysLate < 200000", () => {
    expect(calculateLateFee(20, 10000)).toBe(100000);
  });

  test("P6: daysLate 41..60, capped to 200000", () => {
    expect(calculateLateFee(50, 10000)).toBe(200000);
  });

  test("P7: daysLate > 60, return 200000 + bookPrice", () => {
    expect(calculateLateFee(61, 30000)).toBe(230000);
  });
});
