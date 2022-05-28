"use strict"

class ArrayHelper {
  /**
   * Create chunks from array
   * @param {Array<any>} array source array
   * @param {number} size chunks size
   * @returns {Array<Array<any>>} array of chunks
   */
  static chunk(array, size) {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }
}

module.exports = ArrayHelper;
