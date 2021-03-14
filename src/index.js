module.exports = function reverse (n) {
  return n === undefined ? n : parseInt(String(n).split('').reverse().join(''));
}
