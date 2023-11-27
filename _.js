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
    pad(string, length) {
      if (string.length >= length) {
        return string;
      }
      const startingPadding = Math.floor((length - string.length) / 2);
      const endingPadding = length - string.length - startingPadding;
      const paddedString = ' '.repeat(startingPadding) + string + ' '.repeat(endingPadding);
      return paddedString;
    },
    has(object, key) {
      const hasValue = object[key] !== undefined;
      return hasValue;
    },
    invert(object) {
      const invertedObject = {}
      for (let key in object) {
        const originalValue = object[key];
        invertedObject[originalValue] = key
      }
      return invertedObject;
    }
  };


// Do not write or modify code below this line.
module.exports = _;