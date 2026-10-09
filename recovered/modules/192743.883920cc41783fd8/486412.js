/* Recovered shipped factory. Module 486412.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 170061..170233
 * Raw property SHA-256: 0a9ede27fec282ed43ab6cc411b2cd36b1b5e88157b1a5f4d13f16088d5efd9b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  var t = /^(?:0|[1-9]\d*)$/;
  e.exports = function (e, n) {
    var r = typeof e;
    return (
      !!(n = null == n ? 0x1fffffffffffff : n) &&
      ("number" == r || ("symbol" != r && t.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < n
    );
  };
}
