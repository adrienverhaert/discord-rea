/* Recovered shipped factory. Module 96726.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 321401..321643
 * Raw property SHA-256: b35b039ca76db655db5e3029ccadd43983f92b4bae19575e04adce99f4ff681c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = (function () {
    for (var e, t = [], n = 0; n < 256; n++) {
      e = n;
      for (var r = 0; r < 8; r++) e = 1 & e ? 0xedb88320 ^ (e >>> 1) : e >>> 1;
      t[n] = e;
    }
    return t;
  })();
  e.exports = function (e, n, r, o) {
    var a = o + r;
    e ^= -1;
    for (var i = o; i < a; i++) e = (e >>> 8) ^ t[(e ^ n[i]) & 255];
    return -1 ^ e;
  };
}
