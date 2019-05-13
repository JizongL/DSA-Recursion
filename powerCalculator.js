function powerCalculator(b, expo) {
    if (expo < 0) {
        return "exponent should be >= 0";
    }
    if (expo === 0) {
        return 1;
    }
    return b * powerCalculator(b, expo - 1);
}
console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));