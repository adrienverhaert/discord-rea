/* Recovered shipped factory. Module 151979.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 424858..424994
 * Raw property SHA-256: 765f98143c12c6a88452d35553442bc088820b18d75e79af15186b16175087e7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = {
    current: function (e) {
      return r.g.requestAnimationFrame(e);
    },
    inject: function (e) {
      n.current = e;
    },
  };
  e.exports = n;
}
