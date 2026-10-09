/* Recovered shipped factory. Module 173260.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 146094..146294
 * Raw property SHA-256: 245b2c881bc8b0b41522d9d33d8849f7f0225df1d7f10b5bc0237948e81b5560
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = function (e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  };
}
