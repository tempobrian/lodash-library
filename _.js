const _ = {
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, startVal, endVal) {
      if (endVal === undefined) {
        endVal = startVal;
        startVal = 0;
      }
      [startVal, endVal] = [
        Math.min(startVal, endVal),
        Math.max(startVal, endVal),
      ];
  
      return number >= startVal && number < endVal;
    },
    words(string) {
      return string.split(" ");
    },
  };


// Do not write or modify code below this line.
module.exports = _;