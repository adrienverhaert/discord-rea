/* Recovered shipped factory. Module 261277.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 167896..168046
 * Raw property SHA-256: 2ed6c2b1d0f1fb8c8f0f56e38b335381c9ad6a7bd5a2515a8a30042313cf2f39
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  var t = RegExp(
    "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
  );
  e.exports = function (e) {
    return t.test(e);
  };
}
