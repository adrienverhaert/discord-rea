/* Recovered shipped factory. Module 22700.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 320799..320982
 * Raw property SHA-256: 836ef5d09927498d95fc442f036baa0cfb0414199ec9031d26732b5f03b4e51e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e, t, n, r) {
    for (var o = 65535 & e, a = (e >>> 16) & 65535, i = 0; 0 !== n;) {
      ((i = n > 2e3 ? 2e3 : n), (n -= i));
      do a = (a + (o = (o + t[r++]) | 0)) | 0;
      while (--i);
      ((o %= 65521), (a %= 65521));
    }
    return o | (a << 16);
  };
}
