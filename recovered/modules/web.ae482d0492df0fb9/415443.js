/* Recovered shipped factory. Module 415443.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8286986..8287385
 * Raw property SHA-256: 3651f42445e7d831b37d7951d324bc0519a979c194c551f3e1cae348b20f0468
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(58703),
    r = n(660183);
  function a(e, t) {
    if (null == e || "" === e.trim()) return null;
    let n = Number(e);
    if (!Number.isFinite(n)) return null;
    let a = new Date(n);
    if (Number.isNaN(a.getTime())) return null;
    if (t) return (0, i.mk)(a, !0);
    let s = { dateStyle: "short", timeStyle: "short" };
    try {
      return a.toLocaleString(r.intl.currentLocale, s);
    } catch {
      return a.toLocaleString(void 0, s);
    }
  }
}
