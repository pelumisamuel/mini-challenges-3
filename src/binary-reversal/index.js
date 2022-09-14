/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let bin = "";
  let dec = "";
  while (value) {
    bin += value % 2;
    value = Math.floor(value / 2);
  }
  while (bin.length < 8) {
    bin += "0";
  }
  //bin = bin.split("").reverse().join("");
  [...bin].forEach((number) => {
    dec = 2 * dec + parseInt(number);
  });
  return dec.toString();
}

module.exports = binaryReversal;
