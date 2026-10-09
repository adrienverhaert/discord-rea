/* Recovered shipped factory. Module 321045.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7783143..7783520
 * Raw property SHA-256: bcfc843b032e52fdb7ab6c685bac91c7b8821f240ef2066b48d39554c34ea8d9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Mw: () => s, ub: () => l });
  var i = n(935208),
    r = n(37411),
    a = n(660183);
  function s(e, t) {
    if (null == e || e < 0) return "0";
    {
      let n = i.default.compare("992549565104128000", t) > -1;
      return (null == t || n) && e >= r.kl ? "50+" : e >= r.su ? "100k+" : `${e}`;
    }
  }
  function l(e, t) {
    var n;
    let i;
    return (
      (n = a.t.rfAXDV),
      "0" === (i = s(e, t))
        ? a.intl.string(a.t.eXHkhl)
        : a.intl.formatToPlainString(n, { count: i })
    );
  }
}
