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
        if (startVal > endVal) {
          [startVal, endVal] = [endVal, startVal]
        }
      if (number < startVal) {
        return false;
        }
      if (number >= endVal) {
          return false;
        }
        if (number >= startVal && number <= endVal) {
          return true;
        } else {
          return false;
        }
      },
  };


// Do not write or modify code below this line.
module.exports = _;