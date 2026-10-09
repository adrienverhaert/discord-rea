/* Recovered shipped factory. Module 771068.
 * Source: recovered/web/assets/287788.9d9b891317b8bb7c.js
 * UTF-16 property offsets: 1101..1520
 * Raw property SHA-256: 994ca0564611cd0adb0fafb71f948b9dab986f756aa1c0cec22fbeae67f7941a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t) {
  function e() {
    ((this.buffer = []), (this.length = 0));
  }
  ((e.prototype = {
    get: function (t) {
      var e = Math.floor(t / 8);
      return ((this.buffer[e] >>> (7 - (t % 8))) & 1) == 1;
    },
    put: function (t, e) {
      for (var r = 0; r < e; r++) this.putBit(((t >>> (e - r - 1)) & 1) == 1);
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (t) {
      var e = Math.floor(this.length / 8);
      (this.buffer.length <= e && this.buffer.push(0),
        t && (this.buffer[e] |= 128 >>> (this.length % 8)),
        this.length++);
    },
  }),
    (t.exports = e));
}
