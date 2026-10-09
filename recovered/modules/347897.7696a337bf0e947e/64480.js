/* Recovered shipped factory. Module 64480.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1126726..1127031
 * Raw property SHA-256: aea23c748f3185c4fbcd1e3c483dfb4e50961f885d29f0aac1095943068b57ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { l: () => l });
  var n = r(346711),
    i = r(256062),
    o = r(225801),
    a = r(143761),
    s = r(570340);
  function l(e) {
    if (!e.isConnected) return;
    let t = (0, a.TW)(e);
    if ("virtual" === (0, o.ME)()) {
      let r = (0, i.bq)(t);
      (0, s.v)(() => {
        let o = (0, i.bq)(t);
        (o === r || o === t.body) && e.isConnected && (0, n.e)(e);
      });
    } else (0, n.e)(e);
  }
}
