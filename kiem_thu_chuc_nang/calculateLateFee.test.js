const { calculateLateFee } = require('./calculateLateFee');

describe('Test calculateLateFee - combined test cases', () => {
  const testCases = [
    // --- Test cases bảng quyết định ---
    [-1, 50000, -1],
    [5, -1, -1],
    [0, 2500000, 0],
    [5, 2500000, 5000],
    [10, 2500000, 20000],
    [30, 2500000, 150000],
    [61, 2500000, 2700000],
    
    // --- Test cases kiểm thử biên ---
    [0, 2500000, 0],
    [1, 2500000, 1000],
    [5, 2500000, 5000],
    [7, 2500000, 7000],
    [8, 2500000, 16000],
    [14, 2500000, 28000],
    [15, 2500000, 75000],
    [30, 2500000, 150000],
    [59, 2500000, 200000],
    [60, 2500000, 200000],
    [61, 2500000, 2700000],
    [30, 1000, 150000],
    [30, 1001, 150000],
    [30, 2500000, 150000],
    [30, 4999999, 150000],
    [30, 5000000, 150000]
  ];

  testCases.forEach(([daysLate, bookPrice, expected]) => {
    test(`calculateLateFee(${daysLate}, ${bookPrice}) should return ${expected}`, () => {
      expect(calculateLateFee(daysLate, bookPrice)).toBe(expected);
    });
  });
});
