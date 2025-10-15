function calculateLateFee(daysLate, bookPrice) {
    if (daysLate < 0 || bookPrice < 0) return -1;
    if (daysLate === 0) return 0;
    if (daysLate >= 1 && daysLate <= 7) return 1000 * daysLate;
    if (daysLate >= 8 && daysLate <= 14) return 2000 * daysLate;
    if (daysLate >= 15 && daysLate <= 60) return Math.min(5000 * daysLate, 200000);
    return 200000 + bookPrice;
}

module.exports = { calculateLateFee };
