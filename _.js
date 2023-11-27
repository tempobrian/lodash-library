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
    },
    findKey(object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }
      return undefined;
    },
    drop(array, n) {
      if (n === undefined) {
        n = 1;
      }
      const droppedArray = array.splice(n);
      return droppedArray;
    },
    dropWhile(array, predicate) {
      const dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index, array);
      });
      const droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk(array, size) {
      if (size === undefined) {
        size = 1;
      }
      const arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  };


// Do not write or modify code below this line.
module.exports = _;